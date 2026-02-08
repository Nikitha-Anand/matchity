package com.hackathon.matchity.controller;

import com.hackathon.matchity.model.Matchity;
import com.hackathon.matchity.repository.MatchityRepository;
import org.springframework.web.bind.annotation.*;
import com.hackathon.matchity.service.MatchingService;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/matchity")
public class MatchityController {

    private final MatchityRepository repository;
    private final MatchingService matchingService;


    public MatchityController(MatchityRepository repository, MatchingService matchingService) {
        this.repository = repository;
        this.matchingService = matchingService;
    }

    @PostMapping
    public Matchity create(@RequestBody Matchity match) {
        return repository.save(match);
    }

    @GetMapping
    public List<Matchity> getAll() {
        return repository.findAll();
    }

    @PutMapping
    public Matchity update(@RequestBody Matchity match) {
        return repository.save(match);
    }

    @DeleteMapping
    public void delete(@RequestBody Matchity match) {
        repository.delete(match);
    }

    @GetMapping("match")
    public Map<String, Integer> getMatches() {
        Map<Matchity, Integer> matchResults = matchingService.getAllMatches();

        // Convert to simple {charityName: score} JSON
        Map<String, Integer> response = new HashMap<>();
        for (Map.Entry<Matchity, Integer> entry : matchResults.entrySet()) {
            response.put(entry.getKey().getName(), entry.getValue());
        }

        return response;
    }

    @GetMapping("/match/full")
    public List<Matchity> getFullCharities() {
        return matchingService.getCharitiesSortedByScore();
    }

}
