import { createRouter } from "./context";
import { z } from "zod";

export const jobListingRouter = createRouter().query("getAll", {
  async resolve({ ctx }) {
    return await ctx.prisma.jobListing.findMany();
  },
});
