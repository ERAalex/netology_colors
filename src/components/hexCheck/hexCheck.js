
function hexToRgb(hex) {
    /**
     * Checks if a given hex color code is valid.
     *
     * @param {string} hex - The hex color code to be checked.
     * @return {boolean} Returns true if the hex color code is valid, false otherwise.
     * @returns {null} Returns null if the hex color code not stats with #:
     * @returns {object} Returns an object with the following properties: rgbText, r, g, b
     * 
     */

    // check that starts with #
    if (hex[0] === '#') {
        hex = hex.slice(1);
    } else {
        return null;
    }

    // check regex
    // var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    // if (result) {
    //     var rgbText = 'rgb(' + result[1] + ', ' + result[2] + ', ' + + result[3] + ')';
    // }

    // return result ? {
    //     text: rgbText,
    //     r: parseInt(result[1], 16),
    //     g: parseInt(result[2], 16),
    //     b: parseInt(result[3], 16)
    // } : false;


    const result = hex.match(/^([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);
    if (result) {
      return `rgb(${result.slice(1).map((i) => parseInt(i, 16))})`;
    }
  
    const opt2result = hex.match(/^([0-9a-f])([0-9a-f])([0-9a-f])$/i);
    if (opt2result) {
      return `rgb(${opt2result.slice(1).map((i) => 0x11 * parseInt(i, 16))})`;
    }
    return false;


}




export default hexToRgb
