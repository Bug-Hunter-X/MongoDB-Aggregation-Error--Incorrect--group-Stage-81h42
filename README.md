# MongoDB Aggregation Error: Incorrect $group Stage
This repository demonstrates a common error encountered when using the $group stage in MongoDB aggregation pipelines. The error involves using a string instead of a proper expression for calculating the sum of a field.

## Problem
The provided `bug.js` file contains an aggregation pipeline with an incorrect `$group` stage.  This causes the aggregation to either fail or produce unexpected results.

## Solution
The `bugSolution.js` file shows the correct implementation of the aggregation pipeline. The key change is using the correct expression `$sum: '$field'` inside the `$group` stage to calculate the sum.

This example highlights the importance of understanding the proper syntax and data types when using MongoDB aggregation framework.