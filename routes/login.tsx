import { FreshContext, Handlers } from "$fresh/server.ts";
import { MongoClient } from "npm:mongodb@6.1.0";
import jwt from "npm:jsonwebtoken";
import { setCookie } from "$std/http/cookie.ts";

export const handler: Handlers = {
  POST: async (req: Request, res: Response, ctx: FreshContext) => {
    const url = new URL(req.url);
    const form = await req.formData();
    const username = form.get("username")?.toString();
    const password = form.get("password")?.toString();
    const MONGO_URL = Deno.env.get("MONGO_URL") || "";
    const mongo_client = new MongoClient(MONGO_URL);
    const db = mongo_client.db("final");
    const ping = await db.command(
      {
        ping: 1,
      },
    );
    const users = db.collection("users");
    const allUsers = await users.find().toArray();
    console.log(allUsers);
    const user = await users.findOne({
      username: username,
    });
    if (user) {
      const token = jwt.sign({ name }, Deno.env.get("JWT_SECRET"), {
        expiresIn: "24h",
      });
      const headers = new Headers();
      setCookie(headers, {
        name: "auth",
        value: token,
        sameSite: "Lax",
        domain: url.hostname,
        path: "/",
        secure: true,
      });
      headers.set("location", "/secret");
      return new Response(null, {
        status: 303,
        headers,
      });
    }
    return ctx.render();
  },
};
