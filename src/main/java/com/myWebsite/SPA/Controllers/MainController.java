package com.myWebsite.SPA.Controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class MainController {

    @GetMapping(value = {"/{regex:\\w+}", "/**/{regex:\\w+}"})
    public String forward404() {
        return "forward:/";
    }

}