import { TRPCError } from "@trpc/server";
import { protectedProcedure } from "./trpc";
import { db } from "@/db";

export const getUserFavorite = protectedProcedure.query(async ({ ctx }) => {
  if (!ctx.userId)
    throw new TRPCError({ code: "UNAUTHORIZED", message: "Please login" });

  return await db.favorite.findMany({
    where: {
      userId: ctx.userId,
    },
  });
});
