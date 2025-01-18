# QR Code Generator

A simple web-based application that generates QR codes from text or URLs. This project utilizes a free QR code API to dynamically generate QR codes based on user input.

## Features
- Input text or URL to generate a QR code.
- Dynamically updates the QR code as per the user input.
- Responsive and lightweight design.

## Live Demo
You can try the application live here: [QR Code Generator](#) *(Replace with actual URL if deployed)*

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ankitkuniyal/qr-code-generator.git
   ```

2. Navigate to the project directory:
   ```bash
   cd qr-code-generator
   ```

3. Open `index.html` in your browser to view the application:
   ```bash
   open index.html
   ```

## Usage
1. Enter text or a URL in the input field.
2. Click the **Generate QR Code** button.
3. The QR code will be displayed below the input field.

## File Structure
```
qr-code-generator/
├── index.html        # Main HTML file
├── styles.css        # Styles for the application
├── script.js         # JavaScript logic for QR code generation
```

## Code Explanation

### HTML (`index.html`)
Defines the structure of the page with an input field, a button, and an image element to display the QR code.

### CSS (`styles.css`)
Provides styling for a clean and responsive layout.

### JavaScript (`script.js`)
- Handles the input and generates a QR code using the [QR Code API](https://goqr.me/api/).
- Updates the `src` attribute of the `<img>` element with the generated QR code URL.

#### Key Code Snippet:
```javascript
function generateQR() {
  const text = imgtext.value.trim();
  if (text) {
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(text)}`;
  } else {
    alert("Please enter text or URL to generate a QR Code!");
  }
}
```

## Dependencies
- **QR Code API**: [https://goqr.me/api/](https://goqr.me/api/)

## Future Improvements
- Add download functionality to save the QR code as an image.
- Provide customization options like size, color, and error correction levels.
- Add support for generating bulk QR codes.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Feel free to fork, modify, and contribute to this project!
