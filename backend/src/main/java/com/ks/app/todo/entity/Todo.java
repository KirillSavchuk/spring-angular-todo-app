package com.ks.app.todo.entity;

import lombok.*;

import java.util.Date;

@Getter
@Setter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor(access = AccessLevel.PUBLIC)
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
