package com.hackathon.matchity.model;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "charities")
public class Matchity {

    @Id
    private String id;

    private String name;
    private List<String> theme;
    private Integer budget;
    private String description;
    private Boolean match;
    private Boolean urgency;
}
