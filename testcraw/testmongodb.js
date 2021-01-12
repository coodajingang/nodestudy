const mongoclient = require('mongodb').MongoClient;
const db_conn_str = 'mongodb://proxy:proxy123@10.30.16.206:27017/?authMechainism=SCRAM-SHA-1&authSource=proxydb'


var getproxydata = function(db, callback) {
    var collection = db.collection('proxypoolnow');

    console.log("查询代理池。。。")
    collection.find({"anonymous": "A"}).toArray(function(err, result) {
        if (err) {
            console.log('Error:' + err)
            return;
        }
        callback(result);
    });
}

mongoclient.connect(db_conn_str, function(err, client) {
    console.log("connection success !");
    const db = client.db('proxydb')
    
    getproxydata(db, function(result){
        console.log("查询结果：")
        //console.log(result);
        client.close();
        return result;
    })
})

