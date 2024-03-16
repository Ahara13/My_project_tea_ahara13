// Helper function to calculate the area of a rectangle
function calculateArea(length, width) {
    return length * width;
  }
  
  // Helper function to calculate the perimeter of a rectangle
  function calculatePerimeter(length, width) {
    return 2 * (length + width);
  }
  
  // Main function to demonstrate the usage of helper functions
  function main() {
    const length = 5;
    const width = 3;
    
    const area = calculateArea(length, width);
    console.log("Area of the rectangle: " + area);
    
    const perimeter = calculatePerimeter(length, width);
    console.log("Perimeter of the rectangle: " + perimeter);
  }
  
  // Call the main function to execute the code
  main();
  