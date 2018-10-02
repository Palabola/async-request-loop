
## Easy to use

Async-Request is designed to fetch websites or APIs super fast and handle the response very easy.

```js
const asnync_request = require("async-request-loop");

let url_array = [
  "https://jsonplaceholder.typicode.com/posts/43",
  "https://jsonplaceholder.typicode.com/posts/44"
];
let optional_array = [44, 45];

let asnync_job = new asnync_request(url_array, optional_array);

asnync_job.start_fetch(function(err, res) {
  if (err) {
    console.log(err);
  }
  if (res) {
    console.log(res.uri, res.optional, res.body);
  }
});
```