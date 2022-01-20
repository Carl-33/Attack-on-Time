package learn.attack.controllers;

import learn.attack.domain.HighScoreService;
import learn.attack.domain.Result;
import learn.attack.models.HighScore;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = {"http://localhost:3000"})
@RequestMapping("api/highscores")

public class HighScoreController {

    private final HighScoreService service;

    public HighScoreController(HighScoreService service){
        this.service = service;
    }

    @GetMapping
    public List<HighScore> topScores(){
        return service.topScores();
    }

    @PostMapping
    public ResponseEntity<Object> add(@RequestBody HighScore highScore){
        if(checkForExistingScore(highScore.getHighScoreId())){
            return new ResponseEntity<>("Highscore Already Exists", HttpStatus.CONFLICT);
        }
        Result<HighScore> result = service.add(highScore);
        if(result.isSuccess()){
            return new ResponseEntity<>(result.getPayload(), HttpStatus.CREATED);
        }
        return ErrorResponse.build(result);
    }

    @PutMapping("/{highScoreId}")
    public ResponseEntity<Object> update(@PathVariable int highScoreId, @RequestBody HighScore highScore){
        if(!checkForExistingScore(highScore.getHighScoreId())){
            return new ResponseEntity<>("Highscore DOESNT Exists", HttpStatus.BAD_REQUEST);
        }
        if (highScoreId != highScore.getHighScoreId()) {
            return new ResponseEntity<>(HttpStatus.CONFLICT);
        }

        Result<HighScore> result = service.update(highScore);
        if (result.isSuccess()) {
            return new ResponseEntity<>(HttpStatus.OK);
        }

        return ErrorResponse.build(result);
    }

    @DeleteMapping("/{highScoreId}")
    public ResponseEntity<Void> deleteById(@PathVariable int highScoreId){
        if (service.deleteById(highScoreId)) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @GetMapping("/{highScoreId}")
    public boolean checkForExistingScore(@PathVariable int highScoreId){
        return service.checkForExistingScore(highScoreId);
    }

}
