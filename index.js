const express = require('express');
const cors = require('cors');
const bp = require('body-parser');
const dotenv = require('dotenv');
const ip = require("ip");
const app = express();
const port = process.env.PORT || 8080;;

dotenv.config({ path: './.env' });
app.use(cors());
app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));
app.get('/', function(req, res) {
    res.json({ msg: 'Hello motherfucker with GET' })
})

app.post('/', cors({
    origin: "*"
}), function(req, res) {
    res.json({ msg: 'Hello motherfucker with POST' })
    console.log(req.body);
})

app.listen(port, function() {
    console.log("IP: " + ip.address() + ":" + port)
});