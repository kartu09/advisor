package com.example.scadvisor.entity;

public enum Role {
    USER("user"),
    ADMIN("admin"),
    COACH("coach");

    private final String name;

    Role(String name) {
        this.name = name;
    }

    public String getName(){
        return name;
    }
}
