const asnync_request = require("../index.js");

let gob_url_array = [];
let gob_optional_array = [];

for (let index = 200000; index < 325000; index++) {
  gob_url_array.push("https://www.wowhead.com/object=" + index);
  gob_optional_array.push(index);
}

let go_crawler = new asnync_request(
  gob_url_array,
  gob_optional_array,
  3000,
  10
);

go_crawler.start_fetch((err, res) => {
  if (err) {
    console.log(err);
  }
  if (res) {
    //uri , body , optional
    console.log("Update tick: " + res.optional);
  }
});
