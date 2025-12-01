import { config } from "@/src/config/app";

export async function GET(){
    return Response.json({ message: `Blazed One API v(${config.apiVersion}). Learn More <https://blz.one/docs/api>` });
}