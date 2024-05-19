import React from 'react';
import hexToRgb from '../../components/hexCheck/hexCheck';


function ModalColor() {

    const handleSubmit = (event) => {
        // get on click input the value
        event.preventDefault();
        const hex = event.target.value;

        const inputRgb = document.querySelector('.input-rgb');
        const body = document.querySelector('body');

        if (hex.length == 7) {
            const rgb = hexToRgb(hex);

            if (rgb) {
                inputRgb.value = rgb.text;
                body.style.backgroundColor = `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
            } else if (rgb === false) {
                inputRgb.value = 'Ошибка!';
                body.style.backgroundColor = 'red';
            }
        } else {
            inputRgb.value = '';
            body.style.backgroundColor = 'white';
        }
    }

    return (
        <div>
            <form className="color-form">
                <label>
                    <input className="input-hex" onChange={handleSubmit} type="text" name="hex-color" />
                </label>
                <label>
                    <input className="input-rgb" type="text" readonly="readOnly" name="rgb-color" />
                </label>
            </form>
        </div>
    );
}

export default ModalColor;
