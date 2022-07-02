import { createRouter } from "./context";
import superjson from "superjson";

import { jobListingRouter } from "./jobListing";

export const appRouter = createRouter()
  .transformer(superjson)
  .merge("jobListing.", jobListingRouter);

export type AppRouter = typeof appRouter;
