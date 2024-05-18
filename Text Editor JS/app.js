const input = document.getElementById('textInput');

        function boldText() {
            input.style.fontWeight = input.style.fontWeight === 'bold' ? 'normal' : 'bold';
        }

        function italicText() {
            input.style.fontStyle = input.style.fontStyle === 'italic' ? 'normal' : 'italic';
        }

        function underlineText() {
            input.style.textDecoration = input.style.textDecoration === 'underline' ? 'none' : 'underline';
        }

        function changeFontSize() {
            const newSize = prompt('Enter font size (in pixels):', '16');
            input.style.fontSize = newSize + 'px';
        }

        function changeFontFamily() {
            const newFont = prompt('Enter font family:', 'Arial');
            input.style.fontFamily = newFont;
        }

        function changeTextColor() {
            const newColor = prompt('Enter text color (in hex or name):', '');
            input.style.color = newColor;
        }