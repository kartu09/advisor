package com.example.scadvisor.entity;

public enum Lineup {
    L433(1, "433"),
    L442(2, "442"),
    L4231(3, "4231"),
    L424(4, "424"),
    L451(5, "451"),
    L541(6, "541"),
    L532(7, "532"),
    L631(8, "631"),
    L4222(9, "4222");

    private final int id;
    private final String name;

    Lineup(int id, String name) {
        this.id = id;
        this.name = name;
    }

    public String getName(){
        return name;
    }

    public int getId() {
        return id;
    }
}
