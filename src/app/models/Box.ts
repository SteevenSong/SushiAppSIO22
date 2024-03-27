import { Ibox } from "./Ibox"; 
export class Box implements Ibox {
constructor(
public id: string,
public nom: string,
public pieces: string,
public prix: number,
public image: string,
public aliments:Array<any>,
public saveurs:Array<any>) {
}
}