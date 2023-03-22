package com.example.scadvisor.entity;

public enum AdviceType {
    LINEUP("lineup"),
    TACTIC("tactic"),
    CHANGE("change");

    private final String name;

    AdviceType(String name) {
        this.name = name;
    }

    public String getName(){
        return name;
    }

}
