package com.service;

import com.domain.Todo;
import com.exception.ResourceNotFoundException;
import com.repository.TodoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TodoServiceImpl implements TodoService{
    @Autowired
    private final TodoRepository todoRepository;

    public TodoServiceImpl(TodoRepository todoRepository) {
        this.todoRepository = todoRepository;
    }

    @Override
    public Todo saveTask(Todo todo) {
        return todoRepository.save(todo);
    }

    @Override
    public List<Todo> getAll() {
        return todoRepository.findAll();
    }

    @Override
    public ResponseEntity<Todo> getTaskById(Long id) {
        Todo todo = todoRepository.findById(id).orElseThrow(()->new ResourceNotFoundException
                ("Task do not exist with id"+id));
        return ResponseEntity.ok(todo);
    }

    @Override
    public ResponseEntity<Todo> updateTask(Long id, Todo todo) {
        Todo updatetodo = todoRepository.findById(id).orElseThrow(()->new ResourceNotFoundException
                ("Task do not exist with id"+id));
        updatetodo.setTask(todo.getTask());
        updatetodo.setTime(todo.getTime());
        todoRepository.save(updatetodo);
        return ResponseEntity.ok(updatetodo);
    }

    @Override
    public ResponseEntity<HttpStatus> delete(Long id) {
        Todo todo = todoRepository.findById(id).orElseThrow(()->new ResourceNotFoundException
                ("Task do not exist with id"+id));
        todoRepository.delete(todo);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
