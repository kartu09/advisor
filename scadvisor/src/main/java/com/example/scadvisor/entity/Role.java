package com.example.scadvisor.entity;

public enum Role {
    USER(1, "user"),
    ADMIN(2, "admin"),
    COACH(3, "coach");

    private final int id;
    private final String name;

    Role(int id, String name) {
        this.id = id;
        this.name = name;
    }

    public int getId(){
        return id;
    }

    public String getName(){
        return name;
    }
}
