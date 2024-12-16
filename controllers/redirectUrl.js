const fs = require('fs');
const path = require('path');
const dataFilePath = path.join(__dirname, '../data/data.json');

function redirectUrl (req,res, next){

    let found = false;

    try {
        let existingData = [];
        if (fs.existsSync(dataFilePath)) {
            const data = fs.readFileSync(dataFilePath, 'utf8');
            if (data) {
                existingData = JSON.parse(data);
            }
        }
        if (req.params.p.endsWith("+")) {
            for (const element of existingData) {
                if ((element.new + '+') == req.params.p) {
                    found = true;
                    return res.status(200).json({
                        url: element.url
                    });
                }
            }
        }
        else {
            for (const element of existingData) {
                if (element.new == req.params.p) {
                    let targeturl = element.url.startsWith('http') ? element.url : `https://${element.url}`

                    res.redirect(targeturl);
                    
                    element.lastOpened.push(Date.now());

                    found = true;

                    fs.writeFileSync(dataFilePath, JSON.stringify(existingData, null, 2));

                    return;
                }
            }
        }
    } catch (error) {
        console.error('Error writing JSON data to file:', error);
        if (!res.headersSent)
        return res.status(500).json({error: "Internal server error"});
    }
    if (!found) {
        next();
    }
}

module.exports = {redirectUrl}