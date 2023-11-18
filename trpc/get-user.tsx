import { TRPCError } from "@trpc/server";
import { protectedProcedure } from "./trpc";

export const getUser = protectedProcedure.query(async ({ ctx }) => {
  if (!ctx.user) {
    throw new TRPCError({ code: "UNAUTHORIZED", message: "Please login" });
  }

  return ctx.user;
});
