# Arrows
Draw arrows using the borders of an empty div.
Specify the corner of the box which is the origin, the slope of the line and where the cap is

## Div class arrow
Attributes:
- data-start: 
 - REQUIRED
 - Indicates it's origin in the square in the form of "x-y".
  - x can be left or right.
  - y can be top or bottom.

- data-slope: 
 - REQUIRED
 - Indicates if is horizontal, vertical or diagonal.
    
##Div class line
Attribute:
 - data-curve: 
  - OPTIONAL. If not provided, is a straight line
  - Indicates that the line is a curve and is "concave" or "convex"
    - values: "concave" or "convex"

##Div class cap
Attributes:
 - data-position:
    - REQUIRED
    - Indicates where the cap is.
    - values: "start" or "end"
