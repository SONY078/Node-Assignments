const http = require("http");
const server = http.createServer((request,response)=>
{
    response.write('first assignment of node js');
    response.end();
})
server.listen(9090,()=>
{
    console.log('sever running..');
})