package learn.attack.data;

import learn.attack.models.HighScore;

import java.util.List;

public interface HighScoreRepository {

    List<HighScore> topScores();
    HighScore add(HighScore highScore);
    boolean update(HighScore highscore);
    boolean deleteById(int highScoreId);
    List<HighScore> checkForExistingScore(int id);
    boolean checkForHigherScore();
}
