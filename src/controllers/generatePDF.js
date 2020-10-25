const puppeteer = require('puppeteer');
const path = require('path')
const fs = require('fs')

class GenPDF {
    async generatePDF(userInfoObj) {
        const dirPath = path.join(__dirname, '../', 'public', 'pdfs') + '/' + userInfoObj._id + '/'
        const existDir = await fs.existsSync(dirPath)

        if (!existDir) {
            fs.mkdir(dirPath, (err, dir) => {
                if (err) return 'err:' + err
              })
        }

        fs.readdir(dirPath, function (err, files) {   
            if (files !== 'undefined') {
                if (files.length > 0) {
                    files.forEach((file) => {
                        fs.unlink(dirPath + file, (err) => { console.log(err) })
                    })
                }    
            }            
        })
    
        const todaysDate = new Date();
        const fileName = `${userInfoObj.title.split(' ').join('-')}_${userInfoObj.name.replace(' ', '')}_${userInfoObj.lastName.replace(' ', '')}_${todaysDate.getTime()}.pdf`
        const filePath = dirPath + fileName
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto(`https://young-eyrie-63712.herokuapp.com/${userInfoObj._id}`,{            
            timeout: 120000
        });
        await page.setViewport({ width: 1680, height: 1050 });
        await page.pdf({
            path: filePath,
            format: "A4",
            printBackground: true
        });
        await browser.close();
        return userInfoObj._id + '/' + fileName
    }
}
//function will check if a directory exists, and create it if it doesn't
function checkDirectory(directory, callback) {  
    fs.stat(directory, function(err, stats) {
        //Check if error defined and the error code is "not exists"
        if (err && err.errno === 34) {
        //Create the directory, call the callback.
        fs.mkdir(directory, callback);
        } else {
        //just in case there was a different error:
        callback(err)
        }
    });
}

module.exports = GenPDF
