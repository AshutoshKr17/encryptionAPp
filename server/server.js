const express = require('express');
const {encrypt} = require('./encrypt');
const {decrypt} = require('./decrypt');
const cors = require('cors');

const app = express();

app.use(express.json());
// app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', 'https://encryptionapp.vercel.app');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
//     res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//     res.setHeader('Access-Control-Allow-Credentials', 'true');
//     next();
// });
app.use(cors({
    origin: 'https://encryptionapp.vercel.app', credentials: true, //access-control-allow-credentials:true
    optionSuccessStatus: 200
}));
app.get('/', (req, res) => {
    res.json("Hello world");
})

// Define a route for encryption
app.get('/encrypt', async(req, res) => {
    const {text, key} = req.query; // Get encryption key from query parameter

    if (!text || !key) {
        return res
            .status(400)
            .json({error: 'Text and key are required.'});
    }
    // Encrypt the text using the provided key
    try {
        const encryptedText = await encrypt(text, key);
        res.json({resultText: encryptedText});
    } catch (error) {
        console.log('encryption error', error);
        res
            .status(500)
            .json({error: 'Encryption failed'});
    }
});

app.get('/decrypt', async(req, res) => {
    const {text, key} = req.query;

    if (!text || !key) {
        return res
            .status(400)
            .json({error: 'Text and key are required.'});
    }
    try {
        const decryptedText = await decrypt(text, key);
        res.json({resultText: decryptedText});
    } catch (error) {
        console.log('decryption error', error);
        res
            .status(500)
            .json({error: 'Decryption failed'});
    }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
