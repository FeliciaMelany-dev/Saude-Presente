import prisma from "../lib/prisma.js";
import { StatusConsulta} from "../generated/prisma/client.js";
import { adicionarDias, adicionarMinutos, agoraEmFortaleza, fimDoDia, inicioDoDia } from "../lib/date.js";

export class ConsultaRepository {

  async findById(id: string) {
    return  prisma.consulta.findUnique({
      where: { id },
      include: {paciente:true, medico: true}
    });
  }

  async create(data:{
    paciente_id: string,
    medico_id:string,
    dataHoraConsulta: Date
  }){
    return  prisma.consulta.create({data})
  }

  async updateStatus(id:string, status: StatusConsulta){
    return prisma.consulta.update({
        where: {id},
        data:{status},
    })
  }

  async findAgendaAmanha(){
    const agora = agoraEmFortaleza();
    const amanha = adicionarDias(agora, 1)

    return prisma.consulta.findMany({
        where: {
            status: StatusConsulta.AGENDADA,
            dataHoraConsulta:{
                gte: inicioDoDia(amanha),
                lte: fimDoDia(amanha)
            }
        },
        include: {paciente: true}
    })
  }

    async findConfirmadasEmUmaHora() {
    const agora = agoraEmFortaleza();
    const em55min = adicionarMinutos(agora, 55);
    const em65min = adicionarMinutos(agora, 65);

    return prisma.consulta.findMany({
      where: {
        status: StatusConsulta.CONFIRMADA,
        dataHoraConsulta: {
          gte: em55min,
          lte: em65min,
        },
      },
      include: { paciente: true },
    });
  }

    async findByPaciente(paciente_id: string) {
    return prisma.consulta.findMany({
      where: { paciente_id },
      orderBy: { dataHoraConsulta: "desc" },
      include: { medico: true },
    });
  }

  async findByMedico(medico_id: string) {
    return prisma.consulta.findMany({
      where: { medico_id },
      orderBy: { dataHoraConsulta: "asc" },
      include: { paciente: true },
    });
  }
}
