function RectangleArea() {
    // width
    const rectangleWidth = document.getElementById('rWidth');
    const value = rectangleWidth.value;
    const width = parseFloat(value);
    // console.log(width)

    // height
    const rectangleHeight = document.getElementById('rHeight');
    const value1 = rectangleHeight.value;
    const height = parseFloat(value1);
    // console.log(height)

    // calculation

    const area = width * height;

    const rectangleAreaSpan = document.getElementById('recArea')
    rectangleAreaSpan.innerText = area;


}
