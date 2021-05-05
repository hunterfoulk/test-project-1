
import { NextApiRequest, NextApiResponse } from 'next';
import { Console } from 'node:console';
import orders from "../../public/data/orders.json" //Data from json file.


export default async function menu(req: NextApiRequest, res: NextApiResponse) {

    //hit database to pull orders by whatever ID is sent to server.


    res.json(orders);

}