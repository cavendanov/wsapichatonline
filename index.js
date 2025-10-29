const express = require("express");
const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;

app.get("/", (req, res) => res.send("Prueba de POST 2"));
//app.get('/', (req, res) => {
  //const { 'hub.mode': mode, 'hub.challenge': challenge, 'hub.verify_token': token } = req.query;
  //res.send("Prueba de GET 1");
  //if (mode === 'subscribe' && token === verifyToken) {
    //console.log('WEBHOOK VERIFIED');
    //res.status(200).send(challenge);
  //} else {
    //res.status(403).end();
  //}
//});

// Route for POST requests
app.post('/', (req, res) => {
  const timestamp = new Date().toISOString().replace('T', ' ').slice(0, 19);
  console.log(`\n\nWebhook received ${timestamp}\n`);
  console.log(JSON.stringify(req.body, null, 2));
  res.send(JSON.stringify(req.body, null, 2));
  res.status(200).end();
});

// Start the server
app.listen(port, () => {
  console.log(`\nListening on port ${port}\n`);
});

//Original
/*const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Hello word"));

app.listen(3000);
console.log("Server on port 3000");*/

//Facbeook API
/*const express = require("express");
const app = express();
app.use(express.json());

// Set port and verify_token
const port = process.env.PORT || 3000;
const verifyToken = "04112b51bde79531467dc65f09e9231a";

app.get('/', (req, res) => {
  const { 'hub.mode': mode, 'hub.challenge': challenge, 'hub.verify_token': token } = req.query;

  if (mode === 'subscribe' && token === verifyToken) {
    console.log('WEBHOOK VERIFIED');
    res.status(200).send(challenge);
  } else {
    res.status(403).end();
  }
});

// Route for POST requests
app.post('/', (req, res) => {
  const timestamp = new Date().toISOString().replace('T', ' ').slice(0, 19);
  console.log(`\n\nWebhook received ${timestamp}\n`);
  console.log(JSON.stringify(req.body, null, 2));
  res.status(200).end();
});

// Start the server
app.listen(port, () => {
  console.log(`\nListening on port ${port}\n`);
});
*/