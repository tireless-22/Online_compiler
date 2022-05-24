const { c, cpp, node, python, java } = require("compile-run");
const express = require("express")
const app = express();





app.post("/python", (req, res) => {
	const sourcecode = `print("Hell0 W0rld!")
	print("this is knk)`;
  let resultPromise = python.runSource(sourcecode);
  resultPromise
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log("Hello");
    });

	
	
})



app.listen(3000, () => {
	console.log("app is running at 3000")
})
