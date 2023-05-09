const { Kafka } = require("kafkajs")
run();

async function run(){
    try {

        const kafka = new Kafka({
            "clientId":"myapp",
            "brokers":["localhost:9092"]
        })
        const admin = kafka.admin();
        console.log("connecting")
        await admin.connect()
        console.log("connected");
        await admin.createTopics({
            "topics":[{
                "topic" : "users",
                "numPartitions" : 2
            }]
        })
        console.log("created")
        await admin.disconnect();
    } 
    catch (error) {
        console.error(`something bad happend ${ex}`)
    }
}