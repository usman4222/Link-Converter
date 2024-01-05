const catchAsyncError = require("../middleware/catchAsyncError");
const QRCode = require('qrcode');
const { createCanvas, loadImage } = require('canvas');

exports.generateQRCode = catchAsyncError(async (req, res) => {
    
    const { link } = req.body; 

    if (typeof link === 'string' && link.trim() !== '') {
        try {
            const qrCodeDataURL = await QRCode.toDataURL(link); 

            const canvas = createCanvas(300, 300); 
            const ctx = canvas.getContext('2d');

            const img = await loadImage(qrCodeDataURL); 

            ctx.drawImage(img, 0, 0); 

            res.set('Content-Type', 'image/png');
            canvas.createPNGStream().pipe(res); 
        } catch (error) {
            console.error('Error generating QR code:', error);
            res.status(500).send({ error: 'Failed to generate QR code', details: error.message });
        }
    } else {
        res.status(400).send({ error: 'Invalid link provided' });
    }
});