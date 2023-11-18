import { TRPCError } from "@trpc/server";
import { protectedProcedure } from "./trpc";
import { db } from "@/db";

export const authCallback = protectedProcedure.query(async ({ ctx }) => {
  const { userId } = ctx;
  if (!userId) {
    throw new TRPCError({ code: "UNAUTHORIZED", message: "Please login" });
  }

  // check if user is in db
  const dbUser = await db.user.findFirst({
    where: {
      id: userId,
    },
  });

  if (!dbUser) {
    // create user in db
    await db.user.create({
      data: {
        id: userId,
      },
    });
  }

  return { success: true };
});
