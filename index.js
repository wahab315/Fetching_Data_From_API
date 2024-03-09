const fs = require("fs");
const superagent = require("superagent");

fs.readFile(`${__dirname}/bread.txt`, (err, data) => {
  console.log(data);
  superagent
    .get(`https://dog.ceo/api/breeds/${data}/image/random`)
    .then((res) => {
      console.log(res.body.message);
      fs.writeFile("dogImage.txt", res.body.message, (err, mess) => {
        console.log(err);
      });
    })
    .catch((err) => {
      console.log(err.message);
    });
});
