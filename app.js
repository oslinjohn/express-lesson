const express = require("express");
const app = express();
const PORT = 6969;

app.use(express.json())


app.get('/', (req, res) => {
    res.status(200);
    res.send("Welcome to the root URL of server")
})

app.post('/', (req, res) => {
    const {name} =req.body;
    res.send(`Welcome ${name}`)
})


app.get('/hello', (req, res)=>{
    res.set('Content-Type', 'text/html');
    res.status(200).send("<h1>Hello  Learner!</h1>");
});

app.listen(PORT, (error) => {
  if (!error)
    console.log(
      "Server is successfully running and App is listening on port" + PORT
    );
  else console.log("Error occured, server can't start", error);
});
