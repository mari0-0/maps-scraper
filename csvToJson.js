const csvtojsonV2=require("csvtojson");

csv()
  .fromFile(csvFilePath)
  .then(function(jsonArrayObj){ //when parse finished, result will be emitted here.
     console.log(jsonArrayObj); 
   })

// Parse large csv with stream / pipe (low mem consumption)
csv()
  .fromStream(readableStream)
  .subscribe(function(jsonObj){ //single json object will be emitted for each csv line
     // parse each json asynchronousely
     return new Promise(function(resolve,reject){
         asyncStoreToDb(json,function(){resolve()})
     })
  }) 

//Use async / await
const jsonArray=await csv().fromFile(filePath);