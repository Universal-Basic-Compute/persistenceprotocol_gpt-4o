import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json({
    status: "ok",
    version: process.env.NEXT_PUBLIC_MODEL_NAME || "unknown",
    timestamp: new Date().toISOString(),
  });
}
