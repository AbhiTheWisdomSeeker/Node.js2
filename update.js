const dbConnect = require('./mongoCon')

const update = async ()=>{
    const db = await dbConnect()
    const result = await db.updateOne({modelName:'x7'},{$set:{modelName:'Realme x7'}})
    console.log('ran successfull')
    console.log('This is the OverView  : - ')
    console.log(result)
}


module.exports = update;

