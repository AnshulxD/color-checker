const colorInputEl = document.getElementById('color');

//function starts
colorInputEl.addEventListener('input', event => {
    const color = event.target.value
    const hexColorRegex = /^#([A-FA-f0-9]{6}|[A-FA-f0-9]{3})$/
    //regex used if loop starts
    if(color.match(hexColorRegex)) {
        colorInputEl.style.backgroundColor = color
    }
    else {
        colorInputEl.style.backgroundColor = 'rgb(226,226,226)'
    }
})