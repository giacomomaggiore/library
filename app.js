const express = require("express")
const path = require("path")
const expressLayouts = require("express-ejs-layouts")
/* Di defaul il modulo EXPRESSLAYOUTS fa riferimento al file layout.ejs e ci renderizza dentro
tutto quello che mettiamo dentro app.get */

const app = express()

//USE EXPRESS LAYOUTS
app.use(expressLayouts)

//ASSEGNA AL PERCORSO /DIRNAME/VIEWS IL NOME VIEWS
//PER ESSERE USATO SUCCESSIVAMENTE PER ACCEDERE AI FILE
app.set("views", path.join(__dirname, "views"))

// set the view engine to ejs
app.set("view engine", "ejs")


app.get("/", function(req,res){
    res.render("index", {
        people: [
            {name: "Giacomo"},
            {name: "Gabriele"},
            {name: "Filippo"},
            {name: "Michele"},
        ],
    })

})

app.get("/about", function(req,res){
    res.render("about")
})

//APP.LISTE ON PORT 3000
app.listen(3000, function(){
    console.log("Heard on 3000")
})