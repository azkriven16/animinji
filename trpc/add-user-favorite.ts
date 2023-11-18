import { protectedProcedure } from "./trpc";
import { z } from "zod";
import { db } from "@/db";

export const addUserFavorite = protectedProcedure
  .input(
    z.object({
      id: z.string(),
      animeId: z.string(),
      imgUrl: z.string(),
      title: z.string(),
    })
  )
  .mutation(async ({ ctx, input }) => {
    const { userId } = ctx;

    const checkDuplicate = await db.favorite.findFirst({
      where: {
        userId,
        animeId: input.animeId,
      },
    });

    if (checkDuplicate) {
      return await db.favorite.deleteMany({
        where: {
          userId: ctx.userId,
          animeId: input.animeId,
        },
      });
    } else {
      return await db.favorite.create({
        data: {
          animeId: input.animeId,
          imgUrl: input.imgUrl,
          title: input.title,
          userId: ctx.userId,
        },
      });
    }
  });
