import React from 'react';
import hexToRgb from '../../components/hexCheck/hexCheck';
import { useState } from 'react';


function ModalColor() {

    const [color, setColor] = useState({
        hex: '',
        rgb: ''
    }); // state for color
    
    const { hex, rgb } = color;

    const handleChangeHex = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setColor({
            ...color,
            [name]: value
        })

        if (value.length == 7) {
            const rgb_result = hexToRgb(value);

            if (rgb_result) {
                setColor((prevForm) => ({
                    ...prevForm,
                    rgb: rgb_result,
                }));

            } else if (rgb === false) {
                setColor((prevForm) => ({
                    ...prevForm,
                    rgb: 'Не правильный ввод!',
                }));
            }
        } else {
            setColor((prevForm) => ({
                ...prevForm,
                rgb: '',
            }));
        }
    }


return (
    <div
    className='color-main-body'
    style={{ backgroundColor: rgb }}>
        <form className="color-form">
            <label>
                <input 
                className="input-hex" 
                onChange={handleChangeHex} 
                type="text" 
                name="hex" />
            </label>
            <label>
                <input 
                className="input-rgb" 
                type="text" 
                readonly="readOnly" 
                value={rgb}
                name="rgb" />
            </label>
        </form>
    </div>
);
}


export default ModalColor;
