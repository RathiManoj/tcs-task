package com.manojrathi.task.model;

import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import org.hibernate.annotations.GenericGenerator;

@Entity
public class Event {

	@Id
	@GeneratedValue(generator = "UUID")
	@GenericGenerator(name = "UUID", strategy = "org.hibernate.id.UUIDGenerator")
	private String id;
	private String title;
	private String about;
	private String host;
	private String url;
	private String image;
	private LocalDate startDate;

	public Event() {
	}

	public Event(String title, String about, String host, String url, String image, LocalDate startDate) {
		super();
		this.title = title;
		this.about = about;
		this.host = host;
		this.url = url;
		this.image = image;
		this.startDate = startDate;
	}

	public String getId() {
		return id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getAbout() {
		return about;
	}

	public void setAbout(String about) {
		this.about = about;
	}

	public String getHost() {
		return host;
	}

	public void setHost(String host) {
		this.host = host;
	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public LocalDate getStartDate() {
		return startDate;
	}

	public void setStartDateTime(LocalDate startDate) {
		this.startDate = startDate;
	}
}
