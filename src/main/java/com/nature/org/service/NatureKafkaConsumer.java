package com.nature.org.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;

import java.io.IOException;

@Service
public class NatureKafkaConsumer {

    private final Logger log = LoggerFactory.getLogger(NatureKafkaConsumer.class);
    private static final String TOPIC = "topic_nature";

    @KafkaListener(topics = "topic_nature", groupId = "group_id")
    public void consume(String message) throws IOException {
        log.info("Consumed message in {} : {}", TOPIC, message);
    }
}
