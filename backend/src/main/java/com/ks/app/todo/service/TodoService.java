package com.ks.app.todo.service;

import com.ks.app.todo.entity.Todo;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class TodoService {

    private static List<Todo> todos = new ArrayList<>();
    private static int idCounter = 0;

    static {
        for (; idCounter <= 15; idCounter++) {
            todos.add(new Todo(idCounter, "test", "Todo #" + idCounter, new Date(), false));
        }
    }

    public List<Todo> findAll() {
        return todos;
    }

    public Todo deleteById(long id) {
        Todo todo = findById(id);

        if (todo == null) return null;

        if (todos.remove(todo)) return todo;

        return null;
    }

    public Todo findById(long id) {
        for (Todo todo : todos) {
            if (todo.getId() == id) {
                return todo;
            }
        }
        return null;
    }
}
