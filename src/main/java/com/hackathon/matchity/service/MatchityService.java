package com.hackathon.matchity.service;

import com.hackathon.matchity.model.Matchity;
import com.hackathon.matchity.repository.MatchityRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@AllArgsConstructor
@Service
public class MatchityService {

    private final MatchityRepository repository;

    public Matchity create(Matchity match) {
        return repository.save(match);
    }

    public List<Matchity> getAll() {
        return repository.findAll();
    }

    public Matchity update(String id, Matchity updatedMatch) {
        Matchity existing = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Matchity not found"));

        existing.setName(updatedMatch.getName());
        existing.setDescription(updatedMatch.getDescription());
        existing.setTheme(updatedMatch.getTheme());
        existing.setBudget(updatedMatch.getBudget());
        existing.setMatch(updatedMatch.getMatch());

        return repository.save(existing);
    }

    public void delete(String id) {
        repository.deleteById(id);
    }
}
