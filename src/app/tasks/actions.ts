import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function getTasks() {
  return await prisma.task.findMany();
}

export async function getTask(id: string) {
  return await prisma.task.findUnique({
    where: { id: parseInt(id) },
  });
}

export async function updateTask(id: string, data: { title?: string, description?: string, completed?: boolean }) {
  return await prisma.task.update({
    where: { id: parseInt(id) },
    data,
  });
}

export async function createTask(data: { title: string, description: string }) {
  return await prisma.task.create({ data });
}

export async function deleteTask(id: number) {
  const idNumber = id.toString();
  return await prisma.task.delete({
    where: { id: parseInt(idNumber) },
  });
}
