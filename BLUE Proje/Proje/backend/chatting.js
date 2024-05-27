// Express, http ve socket.io modüllerini yükler ve uygulamayı başlatır.
const app = require("express")();
const server = require("http").createServer(app);
const io = require("socket.io")(server);

// Bağlı kullanıcıları izlemek için bir dizi tanımlar.
let arr = [];

// Bir soket bağlantısı oluşturulduğunda gerçekleşecek olayı dinler.
io.on("connection", (socket) => {
    // Bağlı soketin kimliğini konsola yazdırır.
    console.log(socket.id);

    // "joinroom" olayını dinler.
    socket.on("joinroom", (data) => {
        // Kullanıcıyı odaya katılım işleviyle ekler.
        const user = joinroom(socket.id, data.name, data.roomno);

        // Hoşgeldin mesajını oluşturur.
        let name = `${user.name} has joined chat`;
        let room = user.room;

        // Kullanıcıyı odaya katılım işleviyle ekler.
        socket.join(user.room);

        // Diğer kullanıcılara hoşgeldin mesajını gönderir.
        socket.broadcast.emit("welcomemsg", ({
            name,
            room
        }));

        // Oda numarasını ve katılan kullanıcıyı tüm kullanıcılara gönderir.
        io.to(room).emit("roomno", room);

        // "msg" olayını dinler ve gelen mesajları tüm odaya gönderir.
        socket.on("msg", (data) => {
            let room = data.room;
            io.to(room).emit("incomingmsg", data);
        });

        // "exit" olayını dinler ve ayrılan kullanıcıyı tüm kullanıcılara bildirir.
        socket.on("exit", (data) => {
            socket.broadcast.emit("exitmsg", `${data.name} has left the Chat`);
        });
    });
});

// Kullanıcıyı odalara katılım işleviyle ekler.
function joinroom(id, name, room) {
    let obj = {
        id,
        name,
        room
    };
    arr.push(obj);
    return obj;
}

// Sunucuyu belirtilen portta başlatır ve konsola mesaj yazdırır.
server.listen(4500, () => console.log("server running..."));
