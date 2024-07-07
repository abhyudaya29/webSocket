"use strict";
// import WebSocket,{WebSocketServer} from "ws";
// import http from 'http'
// import express from 'express'
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const server=http.createServer(function(req:any,res:any){
//     console.log((new Date()+ 'Receiveed request for '+req.url));
//     res.end("Hi server")
// })
// const wss=new WebSocketServer({server});
// let usercount=0;
// wss.on('connection',function connection(socket){
//     // If error happens
//     socket.on('error',(err)=>(console.log(err)));
//     // if any message request from 1 client to server,the server should respond thos to other clients
//     socket.on('message',function message(data,isBinary){
//         wss.clients.forEach(function each(client){
//             if(client.readyState===WebSocket.OPEN){
//                 client.send(data,{binary:isBinary})
//             }
//         })
//     })
//     console.log("user connected",++usercount)
//     socket.send("Hello! Messagr form server");
// })
// server.listen(8080,function(){
// console.log((new Date()+'Server is listning on Port 8080'))
// })
const express_1 = __importDefault(require("express"));
const ws_1 = require("ws");
const app = (0, express_1.default)();
const httpServer = app.listen(8080);
const wss = new ws_1.WebSocketServer({ server: httpServer });
wss.on('connection', function connection(ws) {
    ws.on('error', console.error);
    ws.on('message', function message(data, isBinary) {
        console.log("receibed++ ", data);
        wss.clients.forEach(function each(client) {
            if (client.readyState === ws_1.WebSocket.OPEN) {
                client.send(data, { binary: isBinary });
            }
        });
    });
    ws.send('Hello from express server');
});
