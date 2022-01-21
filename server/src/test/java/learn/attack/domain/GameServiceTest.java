package learn.attack.domain;

import learn.attack.data.GameRepository;
import learn.attack.models.Game;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.NONE)
public class GameServiceTest {

    @Autowired
    GameService service;

    @MockBean
    GameRepository repository;

    @Test
    void shouldFindFive() {
        List<Game> games = service.findAll();
        assertNotNull(games);
        assertEquals(games.size(), 5);
    }
}
