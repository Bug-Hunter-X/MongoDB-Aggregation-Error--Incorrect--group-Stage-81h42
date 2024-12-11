```javascript
//Correct aggregation pipeline
db.collection.aggregate([
  {$match: { /*some filter*/ } },
  {$group: {_id: "$fieldName", sum: {$sum: '$field'}}}, //Corrected line
  {$sort: {sum: -1}}
])
```