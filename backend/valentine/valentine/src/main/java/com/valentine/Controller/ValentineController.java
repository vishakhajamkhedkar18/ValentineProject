package com.valentine.Controller;

import com.valentine.Service.ValentineService;
import com.valentine.entity.Valentine;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/valentine")
@CrossOrigin(origins = "*")
public class ValentineController {

    @Autowired
    private ValentineService service;

    @PostMapping("/create")
    public Valentine create(@RequestParam String name, @RequestParam String message) {
        return service.createValentine(name, message);
    }

    @GetMapping("/{id}")
    public Valentine get(@PathVariable String id) {
        return service.getValentine(id);
    }

    @PostMapping("/{id}/accept")
    public void accept(@PathVariable String id) {
        service.accept(id);
    }
}

