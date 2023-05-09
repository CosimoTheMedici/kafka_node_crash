
# React kafka crash course

This project is all about kafka configuration and integration consuming with node




## Appendix

Any additional information goes here

Pros and cons of using kafka

Pros
1.Append only commit log -> easy to append since you are doing so at the very end not in the middle like in relational DB  <- unconventional example
2. Performance data is read and searched using partation and index
3. Distributed has one leader and the others are copies of the leader
4. long polling ulike systems where the consumer asks and is given a response of none here the consumer waits untill there is a response

5. event driven pub sub and queue
6. scalling has the ability to scale like there is no tommorrow
7.paralel processing  because of partations one topic multiple partations you can read them in parallel which is good for customers


cons
1.zookeeper if the zookeeper acts up the system is done for 
it does in large scale apps
2.producer explicit partation can lead to problems
3. complex to install configure and manage if you are doing it without the help of third party systems eg confluent/cloudkarafka/conduktor




## Roadmap

- Additional browser support

- Add more integrations


## Acknowledgements
  Find links to whre you can set up kafka online for free 
  this list will be from the best to the meh
 - [cloudkarafka](https://www.cloudkarafka.com/plans.html)
 - [conduktor](https://www.conduktor.io/blog/kafka-playground-two-free-kafka-clusters-without-operational-hassles/)
 - [Confluent](https://www.confluent.io/blog/kafka-made-serverless-with-confluent-cloud/)


guide of better plans
 - [best one](https://technology.amis.nl/cloud/a-free-apache-kafka-cloud-service-and-how-to-quickly-get-started-with-it/)



## Authors

- [@@cosmas Thuku](https://www.github.com/CosimoTheMedici)


## Documentation

[Documentation](https://linktodocumentation)


## 🚀 About Me
I'm a full stack developer...


![Logo](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/th5xamgrr6se0x5ro4g6.png)
