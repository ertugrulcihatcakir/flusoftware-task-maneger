import { NextResponse } from "next/server";
import prisma from "@/app/utilis/connect";
import { auth } from "@clerk/nextjs";

export async function DELETE(
    req: Request,
    { params }: { params: { id: string } }
  ){
    try {
        const {id}=params;
        const {userId}= auth();
        
        if (!userId) {
            return new NextResponse("Unauthorized", { status: 401 });
        }
        const task = await prisma.task.delete({
            where: {
                id,
            },
        });
      
        return NextResponse.json(task);
    } catch (error) {
        console.log("ERROR DELETING TASK", error);
        return NextResponse.json({error: "Error deleting task", status: 500});
    }
}