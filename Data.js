const introductiontoKafka = () => `
# Apache Kafka requirement
  s1  s2  s3  s4
  - We have different system that need to consume different data and it is complex to maintain data with all.

# Why Apache Kafka
 - Created by linkedin, and now open source mainly maintained by confluent, IBM, Clouders.
 - Distributed, resilient architecture, fault tolerant.
 - Horizonatl scalability
    - Can scale to 100s of brokers.
    - can scale to millions of messages per second.
 - High performance(latency of less than 10ms) - real time.

# Apache kafka usecase
 - messaging system
 - Activity Tracking
 - Gathering metrics from many different locations.
 - Application Logs gathering.
 - Stream processiong (With the kafka Stream API)
 - De-coupling of system dependencies.
 - Integration with spark, Flink, Storm, Hadoop, and many other Big Data Technologies.
 - Microservices hub/sub
`;

const kafkaTheory = () => `
# Kafka Topics
 - a particult stream of data.
 - Like a table in a database
 - You can have as many topics as you want.
 - A topic is identifed by its name.
 - Any kind of message format.
 - The sequence of messages is called a data stream.
 - you cannot query topics, instead, use kafka producers to send data and kafka consumers to read the data.

# Partitions and offsets
 - Topics are split n partitions.
 - Messages within each partition are ordered.
 - Its simply partitioning the kafka topics into more than one.
 - Messages within each partition are ordered.
 - These partition id is known as kafka offset.

                 -
                 | partiton 0
   Kafka Topics -| partiton 1
                 | partiton 2
                 |_
`;
