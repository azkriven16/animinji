import { router } from "./trpc";
import { getUserFavorite } from "./user-favorite";
import { addUserFavorite } from "./add-user-favorite";
import { authCallback } from "./auth-callback";

export const appRouter = router({
  authCallback: authCallback,
  getUserFavorite: getUserFavorite,
  addUserFavorite: addUserFavorite,
});

export type AppRouter = typeof appRouter;
