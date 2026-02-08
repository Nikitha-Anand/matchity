package com.hackathon.matchity.service;

import com.hackathon.matchity.model.Matchity;
import com.hackathon.matchity.repository.MatchityRepository;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class MatchingService {

    private final MatchityRepository repository;

    public MatchingService(MatchityRepository repository) {
        this.repository = repository;
    }

    /*
     * GET all charities and score them based on default company criteria.
     */
    public Map<Matchity, Integer> getAllMatches() {
        Map<Matchity, Integer> result = new HashMap<>();
        List<Matchity> charities = repository.findAll();

        // Default company criteria
        int companyBudget = 10000;
        List<String> companyThemes = Arrays.asList("education", "health", "sustainability");

        for (Matchity charity : charities) {
            int score = calculateScore(charity, companyThemes, companyBudget);
            result.put(charity, score);
        }

        return result;
    }

    public List<Matchity> getCharitiesSortedByScore() {
        List<Matchity> charities = repository.findAll();

        // Default company criteria
        int companyBudget = 10000;
        List<String> companyThemes = Arrays.asList("education", "health", "sustainability");

        // Create a map of charity -> score
        Map<Matchity, Integer> charityScores = new HashMap<>();
        for (Matchity charity : charities) {
            int score = calculateScore(charity, companyThemes, companyBudget);
            charityScores.put(charity, score);
        }

        // Sort charities by score descending
        charities.sort((c1, c2) -> charityScores.get(c2).compareTo(charityScores.get(c1)));

        return charities;
    }

    /*
     * Scoring logic based on budget coverage, theme intersection, and urgency.
     */
    private int calculateScore(Matchity charity, List<String> companyThemes, int companyBudget) {
        int score = 0;

        // Assume charity.getBudget() is budgetNeeded
        Integer charityNeed = charity.getBudget();
        if (charityNeed == null) return 0;

        // Budget check: none, partial (50%), full coverage
        if (companyBudget < charityNeed) {
            return 0;
        } else if (companyBudget > charityNeed) {
            score += 50;
        } else if (companyBudget * 0.5 > charityNeed) {
            score += 25;
        }

        // Theme matching
        Set<String> charityTable = new HashSet<>();
        if (charity.getTheme() != null) {
            for (String cTheme : charity.getTheme()) {
                charityTable.add(cTheme.toLowerCase());
            }
        }

        for (String companyTheme : companyThemes) {
            if (charityTable.contains(companyTheme.toLowerCase())) {
                score += 10;
            }
        }

        // Urgency bonus
        if (Boolean.TRUE.equals(charity.getUrgency())) {
            score += 20;
        }

        return score;
    }
}
