import { router } from "./trpc";
import { getUserFavorite } from "./user-favorite";
import { addUserFavorite } from "./add-user-favorite";
import { authCallback } from "./auth-callback";
import { getAllComments } from "./comments";
import { addComment } from "./add-comment";
import { getUser } from "./get-user";

export const appRouter = router({
  authCallback,
  getUserFavorite,
  getAllComments,
  addComment,
  addUserFavorite,
  getUser,
});

export type AppRouter = typeof appRouter;
