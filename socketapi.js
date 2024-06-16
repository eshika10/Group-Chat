const io = require( "socket.io" )();
const socketapi = {
    io: io
};

// Add your socket.io logic here!
io.on( "connection", function( socket ) {
    console.log(socket.id);

    socket.on("newmsg",msg=>{
         socket.broadcast.emit('newmsg',msg)
    })
});
// end of socket.io logic

module.exports = socketapi;