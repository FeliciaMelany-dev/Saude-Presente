import prisma from "../lib/prisma.js";
import { StatusConsulta} from "../generated/prisma/client.js";

export class ConsultaRepository {
  async findById(id: string) {
    return await prisma.consulta.findUnique({
      where: { id },
    });
  }

  async create(data:{
    paciente_id: string,
    medico_id:string,
    dataHoraConsulta: Date
  }){
    return await prisma.consulta.create({data})
  }

  async updateStatus(id:string, status: StatusConsulta){
    return prisma.consulta.update({
        where: {id},
        data:{status},
    })
  }
}
