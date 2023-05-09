const { Kafka } = require("kafkajs")
const msg = process.argv[2]
run();

async function run(){
    try {

        const kafka = new Kafka({
            "clientId":"myapp",
            "brokers":["localhost:9092"]
        })
        const producer = kafka.producer();
        console.log("connecting")
        await producer.connect()
        console.log("connected");
        //AM NZ
        console.log("msg[0]",msg[0])
        const partation = msg[0]< "n" ? 0: 1;
        console.log("partation",partation)

        const result = await producer.send({
            "topic":"users",
            "messages":[
                {
                    "value":msg,
                    "partition":partation
                }
            ]
        })
     
        console.log(`sent sucess" ${JSON.stringify(result)}`)
        await producer.disconnect();
    } 
    catch (error) {
        console.error(`something bad happend ${ex}`)
    }
}