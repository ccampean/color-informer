let allColorsContainer = document.createElement('div')
let singleColorContainer = document.createElement('div')
let selectInput = document.createElement('select')

let optionsArray = [
  'red', 
  'pink', 
  'orange', 
  'yellow', 
  'purple', 
  'green', 
  'blue', 
  'brown', 
  'white', 
  'gray', 
  'Show me a JSON-like with all the colors'
]

optionsArray.forEach((currentValue, index) => {
  let option = document.createElement('option')
  selectInput.appendChild(option)
  option.text = `show only ${currentValue} shades`.toUpperCase()
  option.value = currentValue
  if (index === optionsArray.length - 1) {
    option.text = currentValue.toUpperCase()
    option.value = 'json'
  }
})

allColorsContainer.classList.add('container')
singleColorContainer.classList.add('color-box')
document.body.appendChild(selectInput)
document.body.appendChild(allColorsContainer)

// https://github.com/bahamas10/css-color-names/blob/master/getcolors.sh
let scrappedData = 
  `aliceblue #f0f8ff hsl(208,100%,97%)
  antiquewhite #faebd7 hsl(34,77%,91%)
  aqua #00ffff hsl(180,100%,50%)
  aquamarine #7fffd4 hsl(159,100%,74%)
  azure #f0ffff hsl(180,100%,97%)
  beige #f5f5dc hsl(60,55%,91%)
  bisque #ffe4c4 hsl(32,100%,88%)
  black #000000 hsl(0,0%,0%)
  blanchedalmond #ffebcd hsl(35,100%,90%)
  blue #0000ff hsl(240,100%,50%)
  blueviolet #8a2be2 hsl(271,75%,52%)
  brown #a52a2a hsl(0,59%,40%)
  burlywood #deb887 hsl(33,56%,70%)
  cadetblue #5f9ea0 hsl(181,25%,50%)
  chartreuse #7fff00 hsl(90,100%,50%)
  chocolate #d2691e hsl(24,74%,47%)
  coral #ff7f50 hsl(16,100%,65%)
  cornflowerblue #6495ed hsl(218,79%,66%)
  cornsilk #fff8dc hsl(47,100%,93%)
  crimson #dc143c hsl(348,83%,47%)
  cyan #00ffff hsl(180,100%,50%)
  darkblue #00008b hsl(240,100%,27%)
  darkcyan #008b8b hsl(180,100%,27%)
  darkgoldenrod #b8860b hsl(42,88%,38%)
  darkgray #a9a9a9 hsl(0,0%,66%)
  darkgreen #006400 hsl(120,100%,19%)
  darkgrey #a9a9a9 hsl(0,0%,66%)
  darkkhaki #bdb76b hsl(55,38%,58%)
  darkmagenta #8b008b hsl(300,100%,27%)
  darkolivegreen #556b2f hsl(82,38%,30%)
  darkorange #ff8c00 hsl(32,100%,50%)
  darkorchid #9932cc hsl(280,60%,49%)
  darkred #8b0000 hsl(0,100%,27%)
  darksalmon #e9967a hsl(15,71%,69%)
  darkseagreen #8fbc8f hsl(120,25%,64%)
  darkslateblue #483d8b hsl(248,38%,39%)
  darkslategray #2f4f4f hsl(180,25%,24%)
  darkturquoise #00ced1 hsl(180,100%,40%)
  darkviolet #9400d3 hsl(282,100%,41%)
  deeppink #ff1493 hsl(327,100%,53%)
  deepskyblue #00bfff hsl(195,100%,50%)
  dimgray #696969 hsl(0,0%,41%)
  dodgerblue #1e90ff hsl(209,100%,55%)
  firebrick #b22222 hsl(0,67%,41%)
  floralwhite #fffaf0 hsl(39,100%,97%)
  forestgreen #228b22 hsl(120,60%,33%)
  fuchsia #ff00ff hsl(300,100%,50%)
  gainsboro #dcdcdc hsl(0,0%,86%)
  ghostwhite #f8f8ff hsl(240,100%,98%)
  gold #ffd700 hsl(50,100%,50%)
  goldenrod #daa520 hsl(42,74%,49%)
  gray/grey #808080 hsl(0,0%,50%)
  green #008000 hsl(120,100%,25%)
  greenyellow #adff2f hsl(83,100%,59%)
  honeydew #f0fff0 hsl(120,100%,97%)
  hotpink #ff69b4 hsl(330,100%,70%)
  indianred #cd5c5c hsl(0,53%,58%)
  indigo #4b0082 hsl(274,100%,25%)
  ivory #fffff0 hsl(60,100%,97%)
  khaki #f0e68c hsl(54,76%,74%)
  lavender #e6e6fa hsl(240,66%,94%)
  lavenderblush #fff0f5 hsl(339,100%,97%)
  lawngreen #7cfc00 hsl(90,100%,49%)
  lemonchiffon #fffacd hsl(53,100%,90%)
  lightblue #add8e6 hsl(194,53%,79%)
  lightcoral #f08080 hsl(0,78%,72%)
  lightcyan #e0ffff hsl(180,100%,93%)
  lightgoldenrodyellow #fafad2 hsl(60,79%,90%)
  lightgray #d3d3d3 hsl(0,0%,82%)
  lightgreen #90ee90 hsl(120,73%,74%)
  lightgrey #d3d3d3 hsl(0,0%,82%)
  lightpink #ffb6c1 hsl(350,100%,85%)
  lightsalmon #ffa07a hsl(17,100%,73%)
  lightseagreen #20b2aa hsl(176,69%,41%)
  lightskyblue #87cefa hsl(202,91%,75%)
  lightslategray #778899 hsl(210,14%,53%)
  lightsteelblue #b0c4de hsl(213,41%,78%)
  lightyellow #ffffe0 hsl(60,100%,93%)
  lime #00ff00 hsl(120,100%,50%)
  limegreen #32cd32 hsl(120,60%,50%)
  linen #faf0e6 hsl(30,66%,94%)
  magenta #ff00ff hsl(300,100%,50%)
  maroon #800000 hsl(0,100%,25%)
  mediumaquamarine #66cdaa hsl(159,50%,60%)
  mediumblue #0000cd hsl(240,100%,40%)
  mediumorchid #ba55d3 hsl(288,58%,58%)
  mediumpurple #9370db hsl(259,59%,64%)
  mediumseagreen #3cb371 hsl(146,49%,46%)
  mediumslateblue #7b68ee hsl(248,79%,67%)
  mediumspringgreen #00fa9a hsl(156,100%,49%)
  mediumturquoise #48d1cc hsl(177,59%,55%)
  mediumvioletred #c71585 hsl(322,80%,43%)
  midnightblue #191970 hsl(240,63%,26%)
  mintcream #f5fffa hsl(149,100%,98%)
  mistyrose #ffe4e1 hsl(6,100%,94%)
  moccasin #ffe4b5 hsl(38,100%,85%)
  navajowhite #ffdead hsl(35,100%,83%)
  navy #000080 hsl(240,100%,25%)
  oldlace #fdf5e6 hsl(39,85%,94%)
  olive #808000 hsl(60,100%,25%)
  olivedrab #6b8e23 hsl(79,60%,34%)
  orange #ffa500 hsl(38,100%,50%)
  orangered #ff4500 hsl(16,100%,50%)
  orchid #da70d6 hsl(302,58%,64%)
  palegoldenrod #eee8aa hsl(54,66%,80%)
  palegreen #98fb98 hsl(120,92%,79%)
  paleturquoise #afeeee hsl(180,64%,80%)
  palevioletred #db7093 hsl(340,59%,64%)
  papayawhip #ffefd5 hsl(37,100%,91%)
  peachpuff #ffdab9 hsl(28,100%,86%)
  peru #cd853f hsl(29,58%,52%)
  pink #ffc0cb hsl(349,100%,87%)
  plum #dda0dd hsl(300,47%,74%)
  powderblue #b0e0e6 hsl(186,51%,79%)
  purple #800080 hsl(300,100%,25%)
  red #ff0000 hsl(0,100%,50%)
  rosybrown #bc8f8f hsl(0,25%,64%)
  royalblue #4169e1 hsl(225,72%,56%)
  saddlebrown #8b4513 hsl(24,75%,30%)
  salmon #fa8072 hsl(6,93%,71%)
  sandybrown #f4a460 hsl(27,87%,66%)
  seagreen #2e8b57 hsl(146,50%,36%)
  seashell #fff5ee hsl(24,100%,96%)
  sienna #a0522d hsl(19,56%,40%)
  silver #c0c0c0 hsl(0,0%,75%)
  skyblue #87ceeb hsl(197,71%,72%)
  slateblue #6a5acd hsl(248,53%,57%)
  slategray #708090 hsl(210,12%,50%)
  snow #fffafa hsl(0,100%,99%)
  springgreen #00ff7f hsl(149,100%,50%)
  steelblue #4682b4 hsl(207,44%,49%)
  tan #d2b48c hsl(34,43%,68%)
  teal #008080 hsl(180,100%,25%)
  thistle #d8bfd8 hsl(300,24%,79%)
  tomato #ff6347 hsl(9,100%,63%)
  turquoise #40e0d0 hsl(174,72%,56%)
  violet #ee82ee hsl(300,76%,72%)
  wheat #f5deb3 hsl(39,76%,83%)
  white #ffffff hsl(0,0%,100%)
  whitesmoke #f5f5f5 hsl(0,0%,96%)
  yellow #ffff00 hsl(60,100%,50%)
  yellowgreen #9acd32 hsl(79,60%,50%)`

// https://stackoverflow.com/a/11508164/1904223
const hexadecimalToRGB = hex => {
  if (hex.indexOf('#') > -1) {
    hex = hex.slice(1)
  }
  let bigint = parseInt(hex, 16)
  let r = (bigint >> 16) & 255
  let g = (bigint >> 8) & 255
  let b = bigint & 255

  return `rgb(${r},${g},${b})`
}

// https://github.com/rstacruz/cheatsheets/blob/master/js-speech.md 
const pronounceColorName = message => {
  let msg = new SpeechSynthesisUtterance(message)
  let voices = window.speechSynthesis.getVoices()
  msg.voice = voices[0]
  window.speechSynthesis.speak(msg)
}

let completeMatrix = scrappedData
  .split('\n')
  .map(line => line.trim().split(' '))
  .map(rowOfValues => {
    let hexadecimalValue = rowOfValues.slice(1, 2)[0]
    rowOfValues.push(hexadecimalToRGB(hexadecimalValue))
    return rowOfValues
  })

completeMatrix.map(colorValues => {
  const box = document.createElement('div')
  const namesingleColorContainer = document.createElement('span')
  const nameHexadecimalContainer = document.createElement('span')
  const nameHSLContainer = document.createElement('span')
  const nameRGBContainer = document.createElement('span')

  box.classList.add('box-color')
  box.setAttribute('title', 'Click to find more informations')
  allColorsContainer.appendChild(box)

  box.appendChild(namesingleColorContainer)
  box.appendChild(nameHexadecimalContainer)
  box.appendChild(nameHSLContainer)
  box.appendChild(nameRGBContainer)

  namesingleColorContainer.innerText = colorValues[0]
  nameHexadecimalContainer.innerText = colorValues[1]
  nameHSLContainer.innerText = colorValues[2]
  nameRGBContainer.innerText = colorValues[3]

  box.addEventListener('click', function () {
    this.style.backgroundColor = colorValues[1]
    pronounceColorName(colorValues[0])
  })
  box.addEventListener('mouseleave', function (event) {
    event.target.style.backgroundColor = ''
  })
})

let matrixToJson = JSON.stringify(completeMatrix, null, '  ')
selectInput.addEventListener('change', (e) => {
  if (e.target.value === 'json') {
    allColorsContainer.innerText = ''
    allColorsContainer.innerHTML = `<pre>${matrixToJson}</pre>`
  }
})
/*
Todo: filter the boxes by their base color.
Example -  http://htmlcolorcodes.com/color-names/
*/
