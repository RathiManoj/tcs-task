package com.manojrathi.task;

import java.time.LocalDate;
import java.util.Arrays;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.manojrathi.task.model.Event;
import com.manojrathi.task.repos.EventRepo;

@SpringBootApplication
public class TcsTaskApplication {

	public static void main(String[] args) {
		SpringApplication.run(TcsTaskApplication.class, args);
	}

	@Bean
	public CommandLineRunner loadEvents(EventRepo eventRepo) {
		return args -> {
			eventRepo.saveAll(Arrays.asList(
				new Event("Concert","About Concert","Manoj Rathi","https://meet.google.com/evd-qxcv-fgd","https://cdn.pixabay.com/photo/2017/07/21/23/57/concert-2527495__340.jpg",LocalDate.now()),
				new Event("Wedding","About Wedding","Manoj Rathi","https://meet.google.com/evd-qxcv-fgd","https://cdn.pixabay.com/photo/2016/11/23/17/56/wedding-1854074__340.jpg",LocalDate.now()),
				new Event("Gathring","About Gathring","Manoj Rathi","https://meet.google.com/evd-qxcv-fgd","https://cdn.pixabay.com/photo/2016/01/19/15/07/cocktails-1149171__340.jpg",LocalDate.now()),
				new Event("Live Music","About Live Music","Manoj Rathi","https://meet.google.com/evd-qxcv-fgd","https://cdn.pixabay.com/photo/2017/04/10/16/55/live-music-2219036__340.jpg",LocalDate.now()),
				new Event("Assembly","About Assembly","Manoj Rathi","https://meet.google.com/evd-qxcv-fgd","https://cdn.pixabay.com/photo/2016/08/16/09/53/international-conference-1597531__340.jpg",LocalDate.now())
			));
		};
	}

}
