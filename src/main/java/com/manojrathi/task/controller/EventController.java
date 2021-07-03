package com.manojrathi.task.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.manojrathi.task.model.Event;
import com.manojrathi.task.repos.EventRepo;

@RestController
@CrossOrigin
public class EventController {

	@Autowired
	EventRepo eventRepo;

	@GetMapping("/events")
	public Iterable<Event> getEvents() {

		return eventRepo.findAll();
	}

	@PostMapping("/events")
	public Event saveEvent(@RequestBody Event event) {
		return eventRepo.save(event);
	}

	@RequestMapping(value = "/events/{id}", method = RequestMethod.DELETE)
	public String deleteEvent(@PathVariable("id") String id) {
		try {
			eventRepo.deleteById(id);
		} catch (EmptyResultDataAccessException e) {
			return "No Item Found!";
		}
		return "Event deleted";
	}
}
