import prisma from "../lib/prisma.js";
import { Prisma } from "../generated/prisma/client.js";

export class PacienteRepository {
  async findByEmail(email: string) {
    return prisma.paciente.findUnique({
      where: { email },
    });
  }

  async findById(id: string) {
    return prisma.paciente.findUnique({
      where: { id },
    });
  }

  async getAll() {
    return prisma.paciente.findMany({}); //adicionar paginação futuramente
  }

  async create(data: {
    nome: string;
    telefone: string;
    email: string;
    data_nascimento: Date;
  }) {
    return prisma.paciente.create({ data });
  }

  async update(id: string, data: Prisma.PacienteUpdateInput) {
    return prisma.paciente.update({
      where: { id },
      data,
    });
  }

  async delete(id: string) {
    prisma.paciente.delete({
      where: { id },
    });
  }

  async findByIdWithConsultas(id: string) {
    return prisma.paciente.findUnique({
      where: { id },
      include: {
        consultas: true,
      },
    });
  }
}
