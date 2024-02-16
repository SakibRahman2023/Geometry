function ParallelogramArea() {
    // base
    const parallelogramBase = document.getElementById('pBase');
    const value = parallelogramBase.value;
    const base = parseFloat(value);
    // console.log(base)

    // height
    const parallelogramHeight = document.getElementById('pHeight');
    const value1 = parallelogramHeight.value;
    const height = parseFloat(value1);
    // console.log(height)

    // calculation

    const area = base * height;

    const parallelogramAreaSpan = document.getElementById('parArea')
    parallelogramAreaSpan.innerText = area;


}
// function getValue(id) {
//     const element = document.getElementById(id);
//     return parseFloat(element.value);
// }

// function ParallelogramArea() {
//     // base
//     const base = getValue('pBase');

//     // height
//     const height = getValue('pHeight');

//     // calculation
//     const area = base * height;

//     const parallelogramAreaSpan = document.getElementById('parArea')
//     parallelogramAreaSpan.innerText = area;
// }
