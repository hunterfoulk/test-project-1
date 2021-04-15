
import { NextApiRequest, NextApiResponse } from 'next';
import data from "../../public/data/api.json"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    // const resp = await fetch('http://localhost:3000/data/api.json'); fetch by ID from database in real back end route.
    // const json = await resp.json();

    const filtered = data.filter((item: any) => item.id == req.query.id)
    console.log("filtered", filtered)
    let item = filtered[0]


    res.json(item);
}

