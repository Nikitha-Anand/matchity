package com.hackathon.matchity.repository;

import com.hackathon.matchity.model.Matchity;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface MatchityRepository extends MongoRepository<Matchity, String> {
}
