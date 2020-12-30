// const app = require('express')()
// const http = require('http').createServer(app)
// app.get('/', (req, res) => {
//    res.send("Node Server is running. Yay!")
// })
// http.listen(8080)


const app = require('express')()
const http = require('http').createServer(app)


app.get('/', (req, res) => {
    res.send("Node Server is running. Yay!!")
})

//Socket Logic
const socketio = require('socket.io')(http)

socketio.on("connection", (userSocket) => {
    userSocket.on("send_message", (data) => {
        userSocket.broadcast.emit("receive_message", data)
    })
})

// console.log(Socket('wss://go-beaver-k8s-1.nimi24.com/'))


http.listen(process.env.PORT)