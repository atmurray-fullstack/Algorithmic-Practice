// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string.For example:

// domainName("http://github.com/carbonfive/raygun") == "github"
// domainName("http://www.zombie-bites.com") == "zombie-bites"
// domainName("https://www.cnet.com") == "cnet"

function domainName(url) {
    //your code here
    let patt1 = new RegExp('http');
    let patt2 = new RegExp('https');
    let patt3 = new RegExp('www.');
    let patt4



    let string

    if (patt1.test(url)) {
        string = url.slice(7,)

    }
    console.log(string)
}
domainName('http://www.banana.com')