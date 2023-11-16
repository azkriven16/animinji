import { protectedProcedure, publicProcedure, router } from "./trpc";
import { TRPCError } from "@trpc/server";
import { db } from "@/db";
import { z } from "zod";

export const appRouter = router({
  getSearchStatus: publicProcedure.mutation(async ({ ctx }) => {
    return true;
  }),
});

export type AppRouter = typeof appRouter;
