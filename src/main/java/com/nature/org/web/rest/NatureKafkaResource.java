package com.nature.org.web.rest;

import com.nature.org.service.NatureKafkaProducer;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/api/nature-kafka")
public class NatureKafkaResource {

    private final Logger log = LoggerFactory.getLogger(NatureKafkaResource.class);

    private NatureKafkaProducer kafkaProducer;

    public NatureKafkaResource(NatureKafkaProducer kafkaProducer) {
        this.kafkaProducer = kafkaProducer;
    }

    @PostMapping(value = "/publish")
    public void sendMessageToKafkaTopic(@RequestParam("message") String message) {
        log.debug("REST request to send to Kafka topic the message : {}", message);
        this.kafkaProducer.sendMessage(message);
    }
}
