import { router } from "./trpc";
import { getUserFavorite } from "./user-favorite";
import { addUserFavorite } from "./add-user-favorite";
import { authCallback } from "./auth-callback";
import { getAllComments } from "./comments";
import { addComment } from "./add-comment";

export const appRouter = router({
  authCallback: authCallback,
  getUserFavorite: getUserFavorite,
  getAllComments: getAllComments,
  addComment: addComment,
});

export type AppRouter = typeof appRouter;
