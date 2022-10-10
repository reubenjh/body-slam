// src/server/router/index.ts
import { t } from "../trpc";

import { snorlaxRouter } from "./snorlaxMoves";

export const appRouter = t.router({
  snorlax: snorlaxRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
