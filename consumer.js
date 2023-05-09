const { Kafka } = require("kafkajs")
const msg = process.argv[2]
run();

async function run(){
    try {

        const kafka = new Kafka({
            "clientId":"myapp",
            "brokers":["localhost:9092"]
        })
        const consumer = kafka.consumer({"groupId":"test"});
        console.log("connecting")
        await consumer.connect()
        console.log("connected");

        consumer.subscribe({
            "topic":"users",
            "fromBeginning":true
        })

        await consumer.run({
            "eachMessage":async result =>{
                console.log(`RVD MSG ${result.message.value} on partation ${result.partition}`)
            }
        })
        
        //await consumer.disconnect();
    } 
    catch (error) {
        console.error(`something bad happend ${ex}`)
    }
}