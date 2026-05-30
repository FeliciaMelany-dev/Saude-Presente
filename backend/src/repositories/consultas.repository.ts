import prisma from "../lib/prisma.js";
import { Prisma } from "../generated/prisma/client.js";

export class ConsultaRepository {
  async findById(id: string) {
    return await prisma.consulta.findUnique({
      where: { id },
    });
  }

  async create(){
    
  }
}
