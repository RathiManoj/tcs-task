package com.manojrathi.task.repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.manojrathi.task.model.Event;

public interface EventRepo extends JpaRepository<Event, String> {

}
