const path = require('path')
const static = path.join(__dirname,"public")
const NeuronNinjas = require('neuroninjas')
let dilkush = new NeuronNinjas();
console.log(typeof static)
dilkush.static(static)
dilkush.rateLimit({
    window: 60000,  
    max: 5         
});
dilkush.use((req,res,next)=>{
    console.log("middleware 1");
    next();
});
dilkush.get('/', (req,res)=>{
    res.render('index');
});
dilkush.get('/about', (req,res)=>{
    res.render(index.html);
});
dilkush.get('/user/:id', (req,res)=>{
    res.send('user id ' + req.params.id);
});
dilkush.listen(3000, ()=>{
    console.log('Server running at http://localhost:3000');
});