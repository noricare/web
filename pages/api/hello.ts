// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {Client} from "@notionhq/client";
import type { NextApiRequest, NextApiResponse } from 'next';

const notionSecret =  process.env.NOTION_SECRET
const FAQ_NORICARE_DB_ID=process.env.NOTION_DB_FAQ_NORICARE_ID


const notion = new Client({auth:notionSecret})

export default async function handler(_req: NextApiRequest, res: NextApiResponse) {
 if(
  !notionSecret || !FAQ_NORICARE_DB_ID
 )throw new Error("Missing notion secret or DB-ID");

 const query = await notion.databases.query({
  database_id:FAQ_NORICARE_DB_ID
 })

 console.log(query)

 res.status(200).json({name:"ayeon"})
}
