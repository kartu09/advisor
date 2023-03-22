package com.example.scadvisor.entity;

public enum Lineup {
    L433("433"),
    L442("442"),
    L4231("4231"),
    L424("424"),
    L451("451"),
    L541("541"),
    L532("532"),
    L631("631"),
    L4222("4222");

    private final String name;

    Lineup(String name) {
        this.name = name;
    }

    public String getName(){
        return name;
    }
}
