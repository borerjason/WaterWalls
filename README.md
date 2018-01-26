# WaterWalls

--- Setup ---  

  Input: An array of integers that represent a series of walls of different heights.   
  Ouput: Array of integers that represent the index of the two walls such that the most rain is captured between them, and the amount of rain captured.   

--- Strategy ---  

Calculate the max height left and max height right per wall. Then calculate the max water between the two walls.  
Time Complexity: 0(n) since there are multiple for loops through arrays.   

--- Transformation ---  

  sampleInput = [5, 3, 7, 2, 6, 4, 5, 9, 1, 2];  

  maxLeft = [ 5, 5, 7, 7, 7, 7, 7, 9, 9, 9 ];  
  maxRight = [ 9, 9, 9, 9, 9, 9, 9, 9, 2, 2 ];  
  Water  = [ 'x', 2, 'x', 5, 1, 3, 2, 'x', 1, 'x' ]  

  sampleOutput = [3, 8, 11];  

--- Function skeleton ---  
const waterWalls = (walls) => {
  // Find max height of left wall  
  // Find max height of right wall  
  // Find amount of water at each wall  
  // Calculate max total water between two walls  
}
