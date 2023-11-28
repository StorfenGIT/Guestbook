const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

let inlagg = [];
const jsonFilePath = 'posts.json';




function readDataFromFile() {
  try {
    const data = fs.readFileSync(jsonFilePath, 'utf8');
    if (data) {
      inlagg = JSON.parse(data);
    }
  } catch (err) {
    console.error('Fel vid läsning av filen:', err);
  }
}


readDataFromFile();

const dirname = __dirname;

app.get('/', (req, res) => {
  let output = "";
  if (inlagg && inlagg.length > 0) {
    for (let i = 0; i < inlagg.length; i++) {
      
      const limitedName = inlagg[i].name ? inlagg[i].name.slice(0, 25) : '';
      const limitedEmail = inlagg[i].email ? inlagg[i].email.slice(0, 25) : '';
      const limitedWeb = inlagg[i].web ? inlagg[i].web.slice(0, 25) : '';
      const limitedNumber = inlagg[i].number ? inlagg[i].number.slice(0, 25) : '';
      const limitedComment = inlagg[i].comment ? inlagg[i].comment.slice(0, 24) : '';

      output += `
  <div class="record-item">
    <p>
      <b>Name:</b> ${limitedName} <br>
      <b>Email:</b> ${limitedEmail} <br>
      <b>Web:</b> ${limitedWeb} <br>
      <b>Phone:</b> ${limitedNumber} <br>
      <b>Comment:</b> ${limitedComment}
    </p>
  </div>`;
    }
  }
  let html = fs.readFileSync(dirname + '/guestbook.html').toString();
  html = html.replace('<div class="record-container"></div>', '<div class="record-container">' + output + '</div>');
  html = html.replace('submit-btn');
  res.send(html);
});



app.post('/', (req, res) => {
  const { name, email, web, number, comment } = req.body;
  inlagg.push({ name, email, web, number, comment });

  fs.writeFile(jsonFilePath, JSON.stringify(inlagg), (err) => {
    if (err) {
      console.error('Fel vid skrivning till filen:', err);
      return res.status(500).send('Serverfel');
    }
    res.redirect('/');
  });
});


const port = 3000;
app.listen(port, () => {
  console.log("Webbservern körs på port " + port);
});
