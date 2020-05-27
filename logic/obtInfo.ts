import { Client } from "https://deno.land/x/mysql/mod.ts"; 
import Info from "../model/info.ts";

export default async (): Promise<Info[]> =>{
    const client = await new Client().connect({
        hostname:"127.0.0.1",
        username:"root",
        password:"usbw",
        db:"mydb"
    });

    const register = await client.query("select id, name from login");
    const info: Info[] = register.map(
        (reg: any): Info =>{
        return {
            id: reg.id,
            nome: reg.name,
        };
    })

    return info;
};