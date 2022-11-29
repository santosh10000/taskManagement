package com.service;

import com.domain.Todo;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface TodoService {
    public Todo saveTask(Todo todo);
    public List<Todo> getAll();
    public ResponseEntity<Todo> getTaskById(Long id);
    public ResponseEntity<Todo> updateTask(Long id, Todo todo);
    public ResponseEntity<HttpStatus> delete(Long id);
}
