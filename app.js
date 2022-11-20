const express = require("express")
const path = require("path")
const expressLayouts = require("express-ejs-layouts")
const data = require("./database.js")
/* Di defaul il modulo EXPRESSLAYOUTS fa riferimento al file layout.ejs e ci renderizza dentro
tutto quello che mettiamo dentro app.get */


const app = express()
//USE EXPRESS LAYOUTS
app.use(expressLayouts)

//USE PUBLIC FOLDER TO ACCESS CSS AND JAVASCRIPT
app.use(express.static(__dirname + '/public'));

//LAVORO SU DATA
let lunghezza = data.length
console.log(lunghezza)



//ASSEGNA AL PERCORSO /DIRNAME/VIEWS IL NOME VIEWS
//PER ESSERE USATO SUCCESSIVAMENTE PER ACCEDERE AI FILE
app.set("views", path.join(__dirname, "views"))

// set the view engine to ejs
app.set("view engine", "ejs")

app.get("/", function(req,res){
    res.render("library", {
        data : data,
        dimensione : data.length
    })
})

    

    


    
app.get("/about", function(req,res){
    res.render("about")
})

//APP.LISTE ON PORT 3000
app.listen(3000, function(){
    console.log("Heard on 3000")
})



/* PER FARE IL PUSH ONLINE SU GITHUB:
git push -u origin master */