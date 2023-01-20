package wecare.coach.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/")
public class WelcomeCoach {
	@GetMapping("/welcome")
	public String welcome() {
		return "Welcome Coach!";
	}
}
