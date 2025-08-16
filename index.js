import express from 'express';

const app = express()
const PORT = 3000;
app.get('/test' , (req , res)=>{
    res.json([
        {name : 'Fernando ', cellphone : '33224455667' , email : 'ferflo@gmail.com'}
    ])
})

app.get('/teachers', (req , res)=>{
    res.json([
        {id: '1' , name: 'carrion' , materia: 'Calculo'}
    ])
})

app.listen(PORT, () =>{
    console.log(`http//localHost:${PORT}`);
})