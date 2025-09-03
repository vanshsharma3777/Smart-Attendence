const express = require("express")
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(cors({
    origin: "https://get-location-9x54.onrender.com",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true

}))

app.get('/', (req, res) => {
    res.json('working properly  ')
})
app.post('/location', async (req, res) => {
    const myLocation = {
        mylat: 26.915376,
        mylon: 80.9192204
    }

    const { lat, lon } = req.body;
    if (!lat || !lon) {
        return res.status(400).json({
            msg: "latitude or longitude not found"
        })
    }

    const distance = findDistance(myLocation.mylat, myLocation.mylon, lat, lon)
    const rangeInkm = 1
    const isInRange = distance <= rangeInkm
    res.json({ distance, isInRange })

})
function findDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Earth radius in km
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2rad(lat1)) *
        Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
}

function deg2rad(deg) {
    return deg * (Math.PI / 180);
}

app.listen(7000, (req, res) => {
    console.log("server running on port: ", 7000)
})