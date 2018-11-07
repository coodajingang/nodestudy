const mongoclient = require('mongodb').MongoClient;

exports.getproxy = async function() {
    let client ;
    let table;
    const db_conn_str = 'mongodb://proxy:proxy123@10.30.16.206:27017/?authMechainism=SCRAM-SHA-1&authSource=proxydb';

    try {
        client = await mongoclient.connect(db_conn_str);
        const db = client.db('proxydb');
        table = db.collection('proxypoolnow');

        var data = await table.find({'anonymous': 'A'}).sort('tm', -1).limit(30).toArray();

        // console.log(data);

        console.log(data.length);

    } catch (error) {
        console.log("mongodb error", error)
    } finally {
        if (client) {
            console.log("close")
            client.close()
        }
    }

    return data;
};
