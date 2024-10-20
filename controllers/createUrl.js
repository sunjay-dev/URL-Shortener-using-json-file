const fs = require('fs');
const shortid = require('shortid');
const validator = require('validator');
const path = require('path');


const dataFilePath = path.join(__dirname, '../data/data.json');

function createUrl(req,res){
    if(!req.body.url) return res.status(400).json({error: "url not sent with request."})

    if (!validator.isURL(req.body.url)) {
        return res.status(400).json({ error: "Invalid URL" });
      }


    let rand = "";
    let isUnique = false;

    try {
        let existingData = [];
        if (fs.existsSync(dataFilePath)) {
            const data = fs.readFileSync(dataFilePath, 'utf8');
            if (data) {
                existingData = JSON.parse(data);
            }
        }
        while (!isUnique) {
            rand = shortid.generate();
            isUnique = true;

            for (const element of existingData) {
                if (element.new === rand) {
                    isUnique = false;
                    break;
                }
            }
        }
        const url_info = {
            url: req.body.url,
            new: rand,
            lastOpened: []
        };
        existingData.push(url_info);
        fs.writeFileSync(dataFilePath, JSON.stringify(existingData, null, 2));
    } catch (error) {
        console.error('Error writing JSON data to file:', error);
        return res.status(500).json({error: "Internal server error"});
    }
    res.status(200).json({new : rand});
}


module.exports = {createUrl}