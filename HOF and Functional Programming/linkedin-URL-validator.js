const regex = /^https?:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]$/;

const url1 = "https://www.linkedin.com/in/heroshi1947";

const isUrlValid1 = regex.test(url1);

if (isUrlValid1) {
  console.log("The URL 1 is valid.");
} else {
  console.log("The URL 1 is invalid.");
}

const url2 = "https://www.linkedon.com/in/heroshi1947";

const isUrlValid2 = regex.test(url2);

if (isUrlValid2) {
  console.log("The URL 2 is valid.");
} else {
  console.log("The URL 2 is invalid.");
}