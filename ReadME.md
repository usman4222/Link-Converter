# MERN Link Converter: QR Code Generator & URL Shortener

This project provides a full-stack solution to convert links into QR codes and shorten URLs.

## Features

### Backend (Node.js & Express)

#### 1. URL to QR Code Conversion

The backend provides an API endpoint `/api/generateQR` to convert a valid URL into a QR code image.

#### Endpoint: `/api/generateQR`
- **Method:** POST
- **Request Payload:**
  ```json
  {
    "url": "https://yourlongurl.com"
  }
