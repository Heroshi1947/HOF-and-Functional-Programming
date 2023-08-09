const regex = /^https?:\/\/[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,}$/; 

const url = "https:///www.google.com";

const isURLvalid = regex.test(url);

if(isURLvalid){
    console.log("The URL is valid.")
} else{
    console.log("The URL is invalid.");
}
    