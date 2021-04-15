
import { NextApiRequest, NextApiResponse } from 'next';
import data from "../../public/data/api.json" //Data from json file.


export default async function menu(req: NextApiRequest, res: NextApiResponse) {

  // const resp = await fetch('http://localhost:3000/data/api.json'); Fetch from real back end route.
  // const json = await resp.json();
  res.json(data);
}