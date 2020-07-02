package com.ks.app.rest.data.todo;

import lombok.*;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.util.Date;


@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode
public class Todo {

    @Id
    @GeneratedValue
    private Long id;

    private String username;
    private String description;
    private Date targetDate;
    private boolean isDone;

}
