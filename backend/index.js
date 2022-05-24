const { c, cpp, node, python, java } = require("compile-run");
const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json())
app.post("/python", (req, res) => {
  console.log(req.body.data);

  let resultPromise = python.runSource(req.body.data);
  resultPromise
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log("king");
    });
});

// app.post("/python", (req, res) => {

//   let resultPromise = python.run(req.body.data);
//   resultPromise
//     .then((result) => {
//       console.log(result);
//     })
//     .catch((err) => {
//       console.log("Hello");
//     });
// });

app.listen(3000, () => {
  console.log("app is running at 3000");
});
