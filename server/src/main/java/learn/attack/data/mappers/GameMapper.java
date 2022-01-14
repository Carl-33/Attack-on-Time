package learn.attack.data.mappers;

import learn.attack.models.Game;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class GameMapper implements RowMapper<Game> {

    @Override
    public Game mapRow(ResultSet resultSet, int i) throws SQLException {
        Game game = new Game();
        game.setGameId(resultSet.getInt("game_id"));
        game.setName(resultSet.getString("game_name"));
        game.setDescription(resultSet.getString("game_description"));
        return game;
    }}
