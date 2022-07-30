const url = require("url");

const myUrl = new URL("http://mywebsite.com/hello.html?id=100&status=active");

// Serialized url
console.log(myUrl.href);

// Host (root domain)
console.log(myUrl.host);

// Host name (does not get port)
console.log(myUrl.hostname);

// Path name
console.log(myUrl.pathname);

// Serialized query
console.log(myUrl.search);

// Params object
console.log(myUrl.searchParams);

// add params
myUrl.searchParams.append("abc", "123");
console.log(myUrl.searchParams);

myUrl.searchParams.forEach((param) => {
  console.log(param);
});
