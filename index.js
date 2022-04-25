const express =  require("express");
const { UCS2_LITHUANIAN_CI } = require("mysql/lib/protocol/constants/charsets");

const app = express();
app.get("/",(req,res)=>{
    return res.json({
        nombre: "luca",
        correo:"luca.cmanea@gmail.com"
    })    
})

app.listen(4000, () => {
    console.log("Escucahndo en: http://localhost:4000");
})

