package be.ehb.bookStore;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class BackendController {


    @RequestMapping("/")
     public String index()
     {
        return "index.html";
     }

}
