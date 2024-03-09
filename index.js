const fs = require("fs");
const superagent = require("superagent");

fs.readFile(`${__dirname}/bread.txt`, (err, data) => {
  superagent
    .get(`https://dog.ceo/api/breeds/image/random`)
    .then((res) => {
      console.log(res.body.message);
      fs.writeFile("dogImage.txt", res.body.message, (err, mess) => {
        console.log(err);
      });
    })
    .catch((err) => {
      console.log(err);
    });
});
