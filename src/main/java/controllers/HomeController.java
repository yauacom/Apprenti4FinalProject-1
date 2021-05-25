package controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {
    @GetMapping(value={"/", "/movies/", "/movies/{id}", "/movies/{id}/reviews}", "/newmovie"})
    public String forward() {
        return "forward:/index.html";
    }
}