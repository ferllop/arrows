# Arrows
Draw arrows using the borders of an empty div.
Specify the corner of the box which is the origin, the slope of the line and where the cap is

Example:
```
<div class="arrowscss" data-start="top-left" data-slope="diagonal" data-curve-type="concave">
    <div class="cap" data-position="end"></div>
</div>
```

Will draw this:

<img src="example.png" alt="an example of an arrow" />

Note: if you use it as a wordpress block, in this repo it's named as "ferllop/arrows". 
If you change it, remember to change also in the first selector of the css file.

## Div class arrow
Attributes:
- data-start: 
  - REQUIRED
  - Indicates the origin of the arrow in the square in the form of "x-y".
  - Values:
    - x can be left or right.
    - y can be top or bottom.

- data-slope: 
  - REQUIRED
  - Indicates the slope of the line of the arrow 
  - Values: horizontal, vertical or diagonal.

- data-curve: 
  - OPTIONAL. If not provided, is a straight line
  - Indicates if the line is curved and in which form.
  - Values: "concave" or "convex"

## Div class cap
Attributes:
- data-position:
  - REQUIRED
  - Indicates where the cap of the arrow is. Will point to the appropriate direction automatically.
  - Values: "start" or "end"
