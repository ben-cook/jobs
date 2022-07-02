import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../server/db/client";

export const getJobListings = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const jobListings = await prisma.jobListing.findMany();
  res.status(200).json(jobListings);
};

export default getJobListings;
