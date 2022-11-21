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

/*PER FARE LE PAGINE DEI SINGOLI LIBRI:
tanti app.get quanti sono i libri nella libreria, cambia però
solo il percorso a cui vengono mandati (ossia il nome del libro),
e l'indice dei parametri mandati.
al file ejs sarà passato tutto l'oggetto data[i] da cui verrà ricavato il contenuto vario*/


app.get("/0", function(req,res){
    res.render("recensione", {
        libro : data[0]
    })
})
app.get("/1", function(req,res){
    res.render("recensione", {
        libro : data[1]
    })
})
app.get("/2", function(req,res){
    res.render("recensione", {
        libro : data[2]
    })
})
app.get("/3", function(req,res){
    res.render("recensione", {
        libro : data[3]
    })
})
app.get("/3", function(req,res){
    res.render("recensione", {
        libro : data[3]
    })
})
app.get("/4", function(req,res){
    res.render("recensione", {
        libro : data[4]
    })
})
app.get("/5", function(req,res){
    res.render("recensione", {
        libro : data[5]
    })
})
app.get("/6", function(req,res){
    res.render("recensione", {
        libro : data[6]
    })
})
app.get("/7", function(req,res){
    res.render("recensione", {
        libro : data[7]
    })
})
app.get("/8", function(req,res){
    res.render("recensione", {
        libro : data[8]
    })
})
app.get("/9", function(req,res){
    res.render("recensione", {
        libro : data[9]
    })
})
app.get("/10", function(req,res){
    res.render("recensione", {
        libro : data[10]
    })
})
app.get("/11", function(req,res){
    res.render("recensione", {
        libro : data[11]
    })
})
app.get("/12", function(req,res){
    res.render("recensione", {
        libro : data[13]
    })
})
app.get("/14", function(req,res){
    res.render("recensione", {
        libro : data[15]
    })
})
app.get("/16", function(req,res){
    res.render("recensione", {
        libro : data[17]
    })
})
app.get("/18", function(req,res){
    res.render("recensione", {
        libro : data[18]
    })
})
app.get("/19", function(req,res){
    res.render("recensione", {
        libro : data[19]
    })
})
app.get("/20", function(req,res){
    res.render("recensione", {
        libro : data[20]
    })
})
app.get("/21", function(req,res){
    res.render("recensione", {
        libro : data[21]
    })
})
app.get("/22", function(req,res){
    res.render("recensione", {
        libro : data[22]
    })
})
app.get("/23", function(req,res){
    res.render("recensione", {
        libro : data[23]
    })
})
app.get("/24", function(req,res){
    res.render("recensione", {
        libro : data[24]
    })
})
app.get("/25", function(req,res){
    res.render("recensione", {
        libro : data[25]
    })
})
app.get("/26", function(req,res){
    res.render("recensione", {
        libro : data[26]
    })
})
app.get("/27", function(req,res){
    res.render("recensione", {
        libro : data[27]
    })
})
app.get("/28", function(req,res){
    res.render("recensione", {
        libro : data[28]
    })
})
app.get("/29", function(req,res){
    res.render("recensione", {
        libro : data[29]
    })
})
app.get("/30", function(req,res){
    res.render("recensione", {
        libro : data[30]
    })
})
app.get("/30", function(req,res){
    res.render("recensione", {
        libro : data[30]
    })
})
app.get("/31", function(req,res){
    res.render("recensione", {
        libro : data[31]
    })
})
app.get("/32", function(req,res){
    res.render("recensione", {
        libro : data[32]
    })
})
app.get("/33", function(req,res){
    res.render("recensione", {
        libro : data[33]
    })
})
app.get("/34", function(req,res){
    res.render("recensione", {
        libro : data[34]
    })
})
app.get("/35", function(req,res){
    res.render("recensione", {
        libro : data[35]
    })
})
app.get("/36", function(req,res){
    res.render("recensione", {
        libro : data[36]
    })
})
app.get("/37", function(req,res){
    res.render("recensione", {
        libro : data[38]
    })
})
app.get("/38", function(req,res){
    res.render("recensione", {
        libro : data[38]
    })
})
app.get("/39", function(req,res){
    res.render("recensione", {
        libro : data[39]
    })
})
app.get("/40", function(req,res){
    res.render("recensione", {
        libro : data[40]
    })
})
app.get("/41", function(req,res){
    res.render("recensione", {
        libro : data[41]
    })
})
app.get("/42", function(req,res){
    res.render("recensione", {
        libro : data[42]
    })
})




//APP.LISTE ON PORT 3000
app.listen(3000, function(){
    console.log("Heard on 3000")
})

/* PER FARE IL PUSH ONLINE SU GITHUB:
git push -u origin master */