# Standard Calculator
Created as part of the Odin Project Curriculum(free open-source web development education).
https://ayoshing.github.io/calculator/

## Development Details
### UI
The UI was built using CSS Grid Layout for its simplicity in placing elements without the need to use floats. The button design was created to give the user a sense of actually pressing down a key. There are 2 number displays, the top display shows the full equation and the bottom display shows the real-time answer of the calculation.

### Mechanism
I've seen alot of calculators have functions for each math operation, which then gets called by another function that accepts 2 numbers and an operator. While this approach works, I found it to be extremely difficult to create a dynamic calculator that can calculate multi-operations that adheres to the correct order of operation.

Instead, I opted for another approach which uses the built-in object `eval()`. `eval()` is a dangerous function when used incorrectly, but in this use case it is fine.

### This app was built using:

+ HTML
+ CSS
+ JavaScript
+ Atom Text Editor
+ :coffee:

## Future Updates
1. keyboard support
2. add scientific function
