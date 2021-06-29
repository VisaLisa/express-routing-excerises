const express = require('express');
const app = express();
const ExpressError = require('./expressError')

//TODO: finding mean
// 1. finding mean > 
// 2. Throw error if num is not in a comma-separated list - create a base route for the error handling 
// 3. Split the list (string) into array
// 4. find mean
app.get('/mean', function(req, res){
    if (!req.query.nums) {
        throw new ExpressError('You must pass a query key of nums with a comma-separated list of numbers.', 400)
      }
      let numsAsStrings = req.query.nums.split(',');
      let nums = convertAndValidateNumsArray(numsAsStrings);
      if (nums instanceof Error) {
        throw new ExpressError(nums.message);
      }
    
    
      let result = {
        operation: "mean",
        result: findMean(nums)
      }
    
      return res.send(result);
});

//TODO: finding median
// 1. Throw comma-separated list erro 
// app.length('/median', function(req, res){    
// });

//TODO: finding mode
// app.length('/mode', function(req, res){
// });

