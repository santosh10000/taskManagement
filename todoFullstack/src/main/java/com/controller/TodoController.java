package com.controller;

import com.domain.Todo;
import com.service.TodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("api/v1")
public class TodoController {
    @Autowired
    private TodoService todoService;

    public TodoController(TodoService todoService) {
        this.todoService = todoService;
    }

    @PostMapping("/add")
    public String add(@RequestBody Todo todo){
         todoService.saveTask(todo);
         return "new task added";
    }

    @GetMapping("/getAll")
    public List<Todo> getAll(){
        return todoService.getAll();
    }

    @GetMapping("/getTask/{id}")
    public ResponseEntity<Todo> getTaskById(@PathVariable Long id){
        return todoService.getTaskById(id);
    }

    @PutMapping("getTask/{id}")
    public ResponseEntity<Todo> updateTask(@PathVariable Long id, @RequestBody Todo todo){
        return todoService.updateTask(id, todo);
    }

    @DeleteMapping("/getTask/{id}")
            public ResponseEntity<HttpStatus> deleteTask(@PathVariable Long id){
        return todoService.delete(id);
    }
}
