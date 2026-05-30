import prisma from "../lib/prisma.js";

export class DisponibilidadeRepository {
  async findByMedicoEHorario(medico_id: string, horario: Date) {
    return prisma.disponibilidade.findFirst({
      where: {
        medico_id,
        horario,
      },
    });
  }
}
