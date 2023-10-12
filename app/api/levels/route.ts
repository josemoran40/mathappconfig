import FirebaseCustomAuth from "@/lib/FirabaseCustomAuth";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  const user = await FirebaseCustomAuth.getInstance().isAuthenticated(req);

  return NextResponse.json({
    user,
  });
}
