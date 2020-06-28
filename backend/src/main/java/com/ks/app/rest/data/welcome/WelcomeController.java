package com.ks.app.rest.data.welcome;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class WelcomeController {

    @GetMapping(path = "/welcome")
    public ResponseEntity<String> welcome(){
        return new ResponseEntity<>("Welcome!", HttpStatus.OK);
    }

    @GetMapping(path = "/welcome/{name}")
    public ResponseEntity<WelcomeResponseEntity> welcome(@PathVariable String name){
        if (name.equals("error")) throw new Error("Test Error!");

        String message = String.format("Welcome, %s!", name);
        WelcomeResponseEntity entity = new WelcomeResponseEntity(message);
        return new ResponseEntity<>(entity, HttpStatus.OK);
    }

}
