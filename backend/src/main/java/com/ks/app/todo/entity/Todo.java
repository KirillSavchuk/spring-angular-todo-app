package com.ks.app.todo.entity;

import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@AllArgsConstructor
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
public class Todo {

    @EqualsAndHashCode.Include
    private long id;

    @EqualsAndHashCode.Include
    private String username;

    private String description;
    private Date targetDate;
    private boolean isDone;

}
