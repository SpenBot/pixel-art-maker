# pixel-art-maker
pixel art drawing app javascript


# ISSUES

- toggle grid button (commented out for now) is successful in hiding the grid, but messes up the canvas.



# ADDITIONAL FEATURES

- FILL BUCKET
  - change all pixels to a color

- SPLIT BIGGER CANVASES BY 8x8
  - I want a darker line for every 8x8 for the bigger grids.
  - put a border around 8x8 canvas, and then for larger canvases loop through 8x8 and add it however many times?

- UNDO BUTTON
  - basically, you would make an array, and when pixels are colored, they also get pushed into that array, last changed and their previous color to it. So  I suppose they would have to be objects?
  - it would be an array of arrays if you want to undo more than once, and essentially have a history.
  - once you hit the undo button it reverts the pixels to its previous color.

- MORE COLORS
  - I'd like to either add more colors options (possibly through an algorithm with rgb()), or just implement the color picker <input> function
  - just need to grab the submitted, or just current value of the input, and set it to currentColor of app.

- SAVING IMAGE
  - how would you go about allowing downloading or emailing your image as a png or jpg?
    - that seems hard.

HTML color names:
https://www.rapidtables.com/web/color/RGB_Color.html
