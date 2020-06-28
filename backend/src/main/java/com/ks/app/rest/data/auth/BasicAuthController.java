package com.ks.app.rest.data.auth;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class BasicAuthController {

    @CrossOrigin
    @PostMapping(path = "/auth/basic")
    public ResponseEntity<BasicAuthResponse> authBasic() {
        return new ResponseEntity<>(new BasicAuthResponse("You are logged in!"), HttpStatus.OK);
    }

}
