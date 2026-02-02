package com.valentine.Service;

import com.valentine.Repository.ValentineRepository;
import com.valentine.entity.Valentine;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class ValentineService {

    @Autowired
    private ValentineRepository repository;

    public Valentine createValentine(String name, String message) {
        Valentine v = new Valentine(
                UUID.randomUUID().toString(),
                name,
                false,
                message
        );
        return repository.save(v);
    }

    public Valentine getValentine(String id) {
        return repository.findById(id).orElseThrow();
    }

    public void accept(String id) {
        Valentine v = getValentine(id);
        v.setAccepted(true);
        repository.save(v);
    }

}
