function triangleArea(){
    // base
    const triangleBase = document.getElementById('tBase');
    const value = triangleBase.value;
    const base = parseFloat(value);
    // console.log(base)

    // height
    const triangleHeight = document.getElementById('tHeight');
    const value1 = triangleHeight.value;
    const height = parseFloat(value1);
    // console.log(height)

    // calculation

    const area = .5*base*height;
    
    const triangleAreaSpan = document.getElementById('triArea')
    triangleAreaSpan.innerText = area;


}
