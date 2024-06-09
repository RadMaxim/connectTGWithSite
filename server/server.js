import test from "./testServer.js"
const { fs, http, path, JSDOM} = test;

http.createServer((rej, res)=>{
    if (rej.url=='/') {
        
        let index = fs.readFileSync(path.join("./../","clients","index.html"),{encoding:"utf-8"})
        res.end("Server work")
    }
    // else if (rej.url =='/index.css') {
    //     let css = fs.readFileSync(path.join( "./../","client","index.css"),{encoding:"utf-8"})
    //     res.end("css")
    // }
}).listen(3000)
