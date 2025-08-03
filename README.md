# QR Code Generator (Node.js)

This is a simple Node.js terminal-based app that takes a user-provided URL, generates a QR code image for it, and stores the URL in a text file.

## 🔧 Features

- Takes URL input from the user using the terminal
- Generates a QR code image (`myQR.png`) using the `qr-image` package
- Saves the input URL in a `URL.txt` file using Node's `fs` module

## 📦 Dependencies

- [inquirer](https://www.npmjs.com/package/inquirer): For interactive CLI prompts
- [qr-image](https://www.npmjs.com/package/qr-image): To generate QR code images
- `fs` (built-in Node module): To write the URL to a file

## 🛠 Installation & Setup

Follow these steps in your terminal:

```bash
# Step 1: Clone the repository
git clone https://github.com/your-username/QR-Code-generator-node.js-.git
cd QR-Code-generator-node.js-

# Step 2: Initialize the project and install dependencies
npm init -y
npm install inquirer qr-image
