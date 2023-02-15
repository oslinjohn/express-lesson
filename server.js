const express = require("express");
const app = express();
const port = 6969;
app.set("port", process.env.PORT || 6969);

// Routes will go here
// Get Route
app.get("/ ", function (req, res) {
  res.json({ msg: "welcome!!" });
});

// Post Route
//Submits user's data
app.post("/submit-data", function (req, res) {
  res.send("POST Request");
});

//Update Route
// Updates any  data that is added
app.put("/update-data", function (req, res) {
  res.send("PUT Request");
});

app.listen(port, () => {
  console.log(`Listening for calls on port ${port}`);
});
