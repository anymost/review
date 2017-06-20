/**
 * Created by lenovo on 2017/5/28.
 */
process.on('message', (message, server)=>{
    if(message == 'server'){
        server.on('connection', (socket)=>{
           socket.end(`handle by child,child is ${process.pid}`);
        });
    }

});