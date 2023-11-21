let express = require("express"); 
let app = express(); 
let port = 8080; 

app.use(express.static("public"));

let httpServer = app.listen(port, function () {
  console.log(`Webbserver körs på port ${port}`); 
});


app.get("/", function (req, res) {
  res.sendFile(__dirname + "/guestbook.html");
});



