
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


links to them 
https://www.cloudkarafka.com/plans.html
https://www.conduktor.io/blog/kafka-playground-two-free-kafka-clusters-without-operational-hassles/
https://www.cloudkarafka.com/
https://www.confluent.io/blog/kafka-made-serverless-with-confluent-cloud/## Color Reference

| Color             | Hex                                                                |
| ----------------- | ------------------------------------------------------------------ |
| Example Color | ![#0a192f](https://via.placeholder.com/10/0a192f?text=+) #0a192f |
| Example Color | ![#f8f8f8](https://via.placeholder.com/10/f8f8f8?text=+) #f8f8f8 |
| Example Color | ![#00b48a](https://via.placeholder.com/10/00b48a?text=+) #00b48a |
| Example Color | ![#00d1a0](https://via.placeholder.com/10/00b48a?text=+) #00d1a0 |


## Roadmap

- Additional browser support

- Add more integrations


## Acknowledgements

 - [Awesome Readme Templates](https://awesomeopensource.com/project/elangosundar/awesome-README-templates)
 - [Awesome README](https://github.com/matiassingers/awesome-readme)
 - [How to write a Good readme](https://bulldogjob.com/news/449-how-to-write-a-good-readme-for-your-github-project)


## Authors

- [@octokatherine](https://www.github.com/octokatherine)


## Documentation

[Documentation](https://linktodocumentation)


## 🚀 About Me
I'm a full stack developer...


![Logo](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/th5xamgrr6se0x5ro4g6.png)
