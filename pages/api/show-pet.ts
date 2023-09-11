import { sql } from "@vercel/postgres";
import { NextApiResponse, NextApiRequest } from "next";

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const pets = await sql`SELECT * FROM Pets;`;
    return response.status(200).json({ pets: pets.rows });
  // return response.status(200).json({ pets });
}
