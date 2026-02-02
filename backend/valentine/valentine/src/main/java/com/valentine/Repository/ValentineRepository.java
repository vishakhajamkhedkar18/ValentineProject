package com.valentine.Repository;

import com.valentine.entity.Valentine;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ValentineRepository extends JpaRepository<Valentine, String> {
}

