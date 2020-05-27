import { writeFileStrSync } from "https://deno.land/std/fs/mod.ts";
import obtInfo from "./logic/obtInfo.ts";

const infos = await obtInfo();

const contd = infos
    .map((info) => `${info.id} - ${info.nome}`)
    .join("\n");

writeFileStrSync("./users.txt", contd);