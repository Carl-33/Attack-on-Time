package learn.attack.domain;

import learn.attack.data.HighScoreRepository;
import learn.attack.models.HighScore;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HighScoreService {
    public final HighScoreRepository repository;

    public HighScoreService(HighScoreRepository repository) {
        this.repository = repository;
    }

    public List<HighScore> topScores(){
        return repository.topScores();
    };

    public Result<HighScore> add(HighScore highScore){

        Result<HighScore> result = validate(highScore);
        if(!result.isSuccess()){
            return result;
        }

        highScore = repository.add(highScore);
        result.setPayload(highScore);
        return result;
    }


    public Result<HighScore> update(HighScore highScore){
        Result<HighScore> result = validate(highScore);

        if(!result.isSuccess())
        {
            return result;
        }

        if(highScore.getHighScoreId() <= 0){
            result.addMessage("Highscore Id must be set for update operation.", ResultType.INVALID);
        }

        if(!repository.update(highScore)){
            String msg = String.format("Highscore ID: %s, not found", highScore.getHighScoreId());
            result.addMessage(msg, ResultType.NOT_FOUND);
        }

        if(!repository.checkForHigherScore()){
            result.addMessage("Score is not better.", ResultType.INVALID);
        }
        return result;
    }

    public boolean deleteById(int highScoreId){
        return repository.deleteById(highScoreId);
    }

    private Result<HighScore> validate(HighScore highScore) {
        Result<HighScore> result = new Result<>();
        if(highScore == null){
            result.addMessage("Highscore cannot be null.", ResultType.INVALID);
        }

        if(Validations.isNullOrBlank(String.valueOf(highScore.getHighScoreId())))
        {
            result.addMessage("Highscore ID cannot be null.", ResultType.INVALID);
        }

        if(highScore.getHighScore() == 0){
            result.addMessage("Highscore cannot be 0  for operation.", ResultType.INVALID);
            return result;
        }

        if(Validations.isNullOrBlank(String.valueOf(highScore.getHighScore())))
        {
            result.addMessage("Highscore values are required.", ResultType.INVALID);
        }

        if(Validations.isNullOrBlank(String.valueOf(highScore.getUserId())))
        {
            result.addMessage("User Id cannot be null.", ResultType.INVALID);
        }

        return result;
    }


    public boolean checkForExistingScore(int highScoreId){
        return (repository.checkForExistingScore(highScoreId).size() == 1);
    }

    public HighScore grabExisting(int highScoreId){
        return (repository.checkForExistingScore(highScoreId).get(0));
    }
}
