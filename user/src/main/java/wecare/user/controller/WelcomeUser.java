package wecare.user.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/")
public class WelcomeUser {
	@GetMapping("/welcome")
	public String welcome() {
		return "Welcome User!";
	}
}
