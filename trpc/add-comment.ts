import { z } from "zod";
import { protectedProcedure } from "./trpc";
import { TRPCError } from "@trpc/server";
import { db } from "@/db";

export const addComment = protectedProcedure
  .input(
    z.object({
      comment: z.string(),
      animeId: z.string(),
      userId: z.string(),
      userImg: z.string(),
      userName: z.string(),
    })
  )
  .mutation(async ({ ctx, input }) => {
    if (!ctx.userId)
      throw new TRPCError({ code: "UNAUTHORIZED", message: "Please login" });

    return await db.comment.create({
      data: {
        comment: input.comment,
        animeId: input.animeId,
        userImg: input.userImg,
        userName: input.userName,
        userId: input.userId,
      },
    });
  });
