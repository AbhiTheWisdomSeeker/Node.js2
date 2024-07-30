/*********************************************************************************************************************************************************** 
 * *********************************************************** FS Module *********************************************************************************
 * ****************************************************************Interaction with File******************************************************************
***********************************************************************************************************************************************************/

//    const { isUtf8 } = require('buffer');
// const {readFileSync,writeFileSync} = require('fs');                                  // This is one way
// // const fs = require('fs')                                               // This is another 
// // use fs as readFileSync we use  --> fs.readFileSync   and Then anything that We want use ahead

// writeFileSync('./Content/first.txt',`this is the message 1`)                      // Writes content into the file if the file is not already there then it will create one with the name specified
// writeFileSync('./Content/Second.txt',`this is the message 2`)

// const Content = readFileSync('./Content/first.txt','utf8')                      // reads the file content and the rule or standard for the Reading type
// console.log(Content)



/**
 * THERE ARE MANY MORE THING TO SEE HERE LIKE SYNCH AND ASYNCH 
 * AND THAT BIG AS CODE IN 
 * readFile(path,function with 2 arg 1 err,2 is result(
 *  if(codition)then Consol err and return
 * else const first = return
 * and similar to first readFile do for second in the same func with another func
 * and after that writeFile and Merge it into another file 
 * 
 * after thaat that dud taught me about the sequence of execution
 * 
 *  by printing the Sequence if i wanna go to ripo 
 */