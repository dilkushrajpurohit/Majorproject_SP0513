<<<<<<< HEAD
const http = require("http");

const server = http.createServer((req, res) => {
    res.write("Hello from Neuron Ninjas Server 🚀");
    res.end();
});

server.listen(3000, () => {
    console.log("Server is running on port 3000");
});
=======
const http=require('http');
const fs=require('fs');
const path = require('path');
class neuroninjas{// constrcutor mai joh hi store karna ho use banate hai this. karke taaki baad mai use kar sake
    constructor(){
        this.routes=[];
        this.middlewares=[];

    };

    get(path,handler){
        let route={
            method:'GET',
            path:path,
            handler:handler
        }
        this.routes.push(route)
    };
    use(middleware){
        this.middlewareS.push(middleware)
    }
    post(Path,handler){
        let route={
            method:'POST',   
            path:path,
            handler:handler}
        this.routes.push(route)
    };

    listen(port,call){
        const server=http.createServer((req,res)=>{
            this.routes.find(route=>route.method===req.method && route.path===req.url)
                const route=this.routes.find(route=>route.method===req.method && route.path===req.url);
            const i=0;
            function next(){ 

                if(i<this.middlewares.length){
                    this.middlewares[i](req,new response(res),next);
                    i++;
                }
                else{
                    if(route){
                        route.handler(req,new response(res))
                    }
                    else{
                        res.writeHead(404);
                        res.end('not found')
                    }
                }
            }
    next();
                
        })
        server.listen(port,call);
    };
    
}




class response {
    constructor(res){
        this.res=res;
    }
    send(data){
        this.res.end(data);

    }
    json(data){
        this.res.setHeader('Content-Type','application/json');
        this.res.end(JSON.stringify(data)); // it is used to convert a javascript object into a json string

    }
    render(view){
        const filename=path.join(__dirname,view+'.html');
        fs.readFile(filename,(err,data)=>{
            if(err){
                this.res.writeHead(500);
                this.res.end("Internal Server Error");
            }
            else{
                this.res.setHeader('Content-Type','text/html');
                this.res.end(data);
            }   
    }
    )}}
let dilkush =new neuroninjas();
dilkush.get('/',(req,res)=>{
    res.send('hello')
})
dilkush.get('/about',(req,res)=>{
    res.render("index")
})
dilkush.listen(3000,()=>{
    console.log('server is running at port 3000')
})
>>>>>>> 2f732f7 (added functionalities like get , post , and middlewares)
