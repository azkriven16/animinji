import { z } from "zod";
import { protectedProcedure } from "./trpc";
import { TRPCError } from "@trpc/server";
import { db } from "@/db";
export const getAllComments = protectedProcedure
  .input(
    z.object({
      animeId: z.string(),
    })
  )
  .query(async ({ ctx, input }) => {
    if (!ctx.userId)
      throw new TRPCError({ code: "UNAUTHORIZED", message: "Please login" });

    return await db.comment.findMany({
      where: {
        animeId: input.animeId,
      },
    });
  });
