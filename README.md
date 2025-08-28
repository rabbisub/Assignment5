"# Assignment5" 

1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Answer:
getElementById, getElementsByClassName, and querySelector / querySelectorAll all are section methods.

getElementById: Select a single element by its id . return a single element object or null.
getElementsByClassName: Select all elements by its specific class name. retuen html-collection of elements.
querySelector: Select the first element match by its specific css selector like #id, .class .retrun a single element object or null
querySelectorAll: Select all elements by its specific css selector. Returns a "static" NodeList of elements


2. How do you create and insert a new element into the DOM?
   Answer: 
   step1: Create Element using document.createElement() method.
           const newDiv = document.createElement('div');
   step 2: Inserting element into the DOM using appendChild() method
           const parentElement = document.getElementById('container');
           parentElement.appendChild(newDiv);

3. What is Event Bubbling and how does it work?
   Answer: Event Bubbling is a conscept in the DOM. It happens when element receives an event, and that event bubbles up from               the parent to the root element in the DOM.


4. What is Event Delegation in JavaScript? Why is it useful?
   Answer: Event Delegation is a practice of adding a single event listener to a parent element instead of adding multiple                 listeners to individual child elements. it is useful for Performance improvement, Simplified Code, Dynamic element.

5. What is the difference between preventDefault() and stopPropagation() methods?
   Answer:
   preventDefault(): preventDefault is a method that used to prevent the default action occourring from the event.
   stopPropagation(): stopPropagation is a method that used to prevent propagation that occoured form the event in DOM tree.       When event occures on element it bubbles up to its parent element so on.
   
