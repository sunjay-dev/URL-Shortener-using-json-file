const fs = require('fs');
const path = require('path');

const dataFilePath = path.join(__dirname, '../data/data.json');

function getDetails(req,res) {

    let shorturl = req.query.url;

    try {
        let existingData = [];
        if (fs.existsSync(dataFilePath)) {
            const data = fs.readFileSync(dataFilePath, 'utf8');
            if (data) {
                existingData = JSON.parse(data);
            }
        }
        for (const element of existingData) {
            if (element.new === shorturl) {
            return res.status(200).json({
                    url: element.url,
                    clicks: element.lastOpened.length,
                    lastOpened: element.lastOpened
                })
            }
        }
    } catch (error) {
        console.error('Error writing JSON data to file:', error);
        return res.status(500).json({ error: "Internal server error" });
    }
    res.status(404).send("Short url not exists.");
}

module.exports= {getDetails}