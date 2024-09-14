import express from "express";
const port = process.env.port || 4000;

const app = express();

app.use(express.json());

app.get("/", (req, res)=>{
    res.send({
        status:"success",
        data:"MY Api is running"
    })
})

app.listen(port, ()=>{
    console.log(`Server is running ${port}`);
})
