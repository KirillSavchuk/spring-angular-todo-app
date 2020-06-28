package com.ks.app.todo.service;

import com.ks.app.todo.entity.Todo;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class TodoService {

    private static List<Todo> todos = new ArrayList<>();
    private static int idCounter = 1;

    static {
        for (; idCounter <= 3; idCounter++) {
            todos.add(new Todo(idCounter, "test", "Todo #" + idCounter, new Date(), false));
        }
    }

    public Todo findById(long id) {
        for (Todo todo : todos) {
            if (todo.getId() == id) {
                return todo;
            }
        }
        return null;
    }

    public List<Todo> findAll() {
        return todos;
    }

    public Todo save(Todo todo){
        if (todo.getId() == 0) {
            todo.setId(++idCounter);
        } else {
            deleteById(todo.getId());
        }
        todos.add(todo);
        return todo;
    }

    public Todo deleteById(long id) {
        Todo todo = findById(id);

        if (todo == null) return null;

        if (todos.remove(todo)) return todo;

        return null;
    }


}
