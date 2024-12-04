import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const { title, description } = await req.json();
    const newTask = await prisma.task.create({
      data: {
        title,
        description,
        completed: false,
      },
    });
    return NextResponse.json(newTask);
  } catch {
    return NextResponse.error();
  } finally {
    await prisma.$disconnect();
  }
}

export async function GET() {
  try {
    const tasks = await prisma.task.findMany();
    return NextResponse.json(tasks);
  } catch {
    return NextResponse.error();
  } finally {
    await prisma.$disconnect();
  }
}
