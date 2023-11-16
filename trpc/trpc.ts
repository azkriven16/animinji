import { auth } from "@clerk/nextjs";
import { TRPCError, initTRPC } from "@trpc/server";

const t = initTRPC.create();

const isAuthed = t.middleware(async ({ next }) => {
  const { userId, user } = auth();
  if (!userId && !user) {
    throw new TRPCError({
      code: "UNAUTHORIZED",
      message: "Please login",
    });
  }

  return next({
    ctx: {
      userId,
      user,
    },
  });
});

export const router = t.router;

export const publicProcedure = t.procedure;
export const protectedProcedure = t.procedure.use(isAuthed);
