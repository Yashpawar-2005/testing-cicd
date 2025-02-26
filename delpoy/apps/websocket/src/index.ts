import { WebSocketServer } from "ws";
import {client}  from "@repo/db/client";

const server = new WebSocketServer({
  port: 3001,
});

const j=async()=>{
    await client.user.create({
        data:{
            username: Math.random().toString(),
            password: Math.random().toString(),
        }
    }
    )
}
server.on("connection", async(socket) => {
  j()
  socket.send("Hi there you are connected to the server");
});
