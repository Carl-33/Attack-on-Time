package learn.attack.domain;

import learn.attack.data.GameRepository;
import learn.attack.data.HighScoreRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.mock.mockito.MockBean;

import static org.junit.jupiter.api.Assertions.*;

class HighScoreServiceTest {

    @Autowired
    HighScoreService service;

    @MockBean
    HighScoreRepository repository;

    @Test
    void topScores() {
        
    }

    @Test
    void add() {
    }

    @Test
    void update() {
    }

    @Test
    void deleteById() {
    }

    @Test
    void checkForExistingScore() {
    }

    @Test
    void grabExisting() {
    }
}