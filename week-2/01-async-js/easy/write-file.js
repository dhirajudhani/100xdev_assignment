const fs = require('fs')

fs.writeFile('a.txt','hello how are yo','utf8',(err) => {
    if(err) console.log(err)
})

fs.readFile('a.txt','utf-8',(err, data) => {
    // console.log(data)
})