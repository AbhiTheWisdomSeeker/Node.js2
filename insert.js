const dbConnect = require('./mongoCon');

const insertO = async (data) => {
    const db = await dbConnect();

    const result = db.insertMany({data})

    if((await result).acknowledged){
        console.log('Data Inserted')
    }

}

module.exports = {insertO};