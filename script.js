

//////// DOM ELEMENTS /////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

let appWindow = document.getElementById('mainWindow')
let canvasVar = document.getElementsByClassName('canvas')[0]

let colorInd = document.getElementById('colorInd')
let colorPickers = document.getElementsByClassName('colorPicker')

let button8x8 = document.getElementById('button8x8')
let button16x16 = document.getElementById('button16x16')
let button32x32 = document.getElementById('button32x32')

// let gridButton = document.getElementById('toggleGrid')
// let undoButton = document.getElementById('undo')



//////// GLOBAL VARIABLES /////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

let mouseState = "up"
let currentColor = "black"
// let showingGrid = true


//////// GLOBAL MOUSE EVENTS //////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

appWindow.addEventListener('mousedown', ()=> {
  mouseState = "down"
})

appWindow.addEventListener('mouseup', ()=> {
  mouseState = "up"
})



//////// ON WINDOW LOAD, SET DEFAULT STATES  //////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

window.onload = () => {

  canvasVar.setAttribute("id", "canvas8x8")

  for (i=1; i<=64; i++) {
    let pixelForCan = createPixelElement(8)
    canvasVar.appendChild(pixelForCan)
  }

  colorInd.style.backgroundColor = currentColor

}



//////// ADD EVENTS TO COLOR SWATCHES /////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

for (i=0; i < colorPickers.length; i++) {

  colorPickers[i].addEventListener('click', function () {
    currentColor = this.style.backgroundColor
    colorInd.style.backgroundColor = currentColor
  })

}


//////// TOGGLE GRID BUTTON EVENT /////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

// gridButton.addEventListener('click', ()=> {
//
//   let allPixels = document.getElementsByClassName('pixel')
//
//   if (showingGrid == true) {
//     for (i = 0; i < allPixels.length; i++ ) {
//       allPixels[i].style.border = '0'
//     }
//     showingGrid = false
//   }
//
//   else if (showingGrid == false) {
//     for (i = 0; i < allPixels.length; i++ ) {
//       allPixels[i].style.border = 'solid 1px rgb(135, 135, 135)'
//       showingGrid = true
//     }
//   }
// })





//////// ADD EVENTS TO CANVAS-SIZE BUTTONS ////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

button8x8.addEventListener('click', ()=> {
  removePixels ()
  canvasVar.setAttribute("id", "canvas8x8")

  for (i=1; i<=64; i++) {
    let pixelForCan = createPixelElement(8)
    canvasVar.appendChild(pixelForCan)
  }
})

button16x16.addEventListener('click', ()=> {
  removePixels()
  canvasVar.setAttribute("id", "canvas16x16")

  for (i=1; i<=256; i++) {
    let pixelForCan = createPixelElement(16)
    canvasVar.appendChild(pixelForCan)
  }
})

button32x32.addEventListener('click', ()=> {
  removePixels()
  canvasVar.setAttribute("id", "canvas32x32")

  for (i=1; i<=1024; i++) {
    let pixelForCan = createPixelElement(32)
    canvasVar.appendChild(pixelForCan)
  }
})






//////// DECLARE FUNCTION TO CREATE PIXEL /////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

function createPixelElement (num) {
  if (num == 8) {
      let newPixel = document.createElement('div')
      newPixel.classList.add('pixel8x8')
      newPixel.classList.add('pixel')

      newPixel.addEventListener('mousemove', function () {
        if (mouseState == "down") {
          this.style.backgroundColor = currentColor
        }
      })

      newPixel.addEventListener('mousedown', function () {
        this.style.backgroundColor = currentColor
      })

      return newPixel
  }


  else if (num == 16) {
      let newPixel = document.createElement('div')
      newPixel.classList.add('pixel16x16')
      newPixel.classList.add('pixel')

      newPixel.addEventListener('mousemove', function () {
        if (mouseState == "down") {
          this.style.backgroundColor = currentColor
        }
      })

      newPixel.addEventListener('mousedown', function () {
        this.style.backgroundColor = currentColor
      })

      return newPixel
  }


  else if(num == 32) {
      let newPixel = document.createElement('div')
      newPixel.classList.add('pixel32x32')
      newPixel.classList.add('pixel')

      newPixel.addEventListener('mousemove', function () {
        if (mouseState == "down") {
          this.style.backgroundColor = currentColor
        }
      })

      newPixel.addEventListener('mousedown', function () {
        this.style.backgroundColor = currentColor
      })

      return newPixel
  }


}




//////// FUNCTION TO REMOVE PIXELS FROM CANVAS ////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

function removePixels () {

  while (canvasVar.firstChild) {
    canvasVar.removeChild(canvasVar.firstChild);
  }

}
