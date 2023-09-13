import { Request, Response } from "express";
import type TipoPet from "../tipos/TipoPet";
let listaDePets: Array<TipoPet> = [];

export default class PetController {
  criaPet(req: Request, res: Response) {
    const { id, adotado, especie, idade, nome } = <TipoPet>req.body;
    const novoPet: TipoPet = { id, adotado, especie, idade, nome };
    listaDePets.push(novoPet);
    return res.status(201).json(novoPet);
  }
  listaPet(req:Request,res:Response){
    return res.status(200).json(listaDePets);
  }
}
