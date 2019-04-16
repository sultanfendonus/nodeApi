const express = require('express');
const App = express();

const data = [{
    name : 'Sunny Sultan',
    adress : 'Mohammdpur, Dhaka'
    },
    {
        name : 'Maria Kibtia',
        adress : 'Mohammdpur, Dhaka'
        }

]

const nullData = [];


App.get("/req/:id",(req,res)=>{
    if(req.params.id.length < 5){
        res.send([{status : 'invalid Request',data:[]}]);
    }else{
        res.send([{status:'sucess',data}]);
    }

});


App.listen('3000',()=>console.log('Conected'));

