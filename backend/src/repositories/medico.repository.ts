import prisma from "../lib/prisma.js";
import { Prisma } from "../generated/prisma/client.js";

export class MedicoRepository {
  async findByCRM(crm: string) {
    return await prisma.medico.findUnique({
      where: { crm },
    });
  }

  async findById(id: string) {
    return await prisma.medico.findUnique({
      where: { id },
    });
  }

  async getAll() {
    return await prisma.medico.findMany({}); //adicionar paginação futuramente
  }

  async create(data: Prisma.MedicoCreateInput) {
    return await prisma.medico.create({ data });
  }

  async update(id: string, data: Prisma.MedicoUpdateInput) {
    return await prisma.medico.update({
      where: { id },
      data,
    });
  }

  async delete(id: string) {
    await prisma.medico.delete({
      where: { id },
    });
  }

  async findByIdWithConsultas(id: string) {
    return await prisma.medico.findUnique({
      where: { id },
      include: {
        consultas: true,
      },
    });
  }

  async findByIdWithDisponibilidade(id: string) {
    return await prisma.medico.findUnique({
      where: { id },
      include: {
        disponibilidade: true,
      },
    });
  }
}
