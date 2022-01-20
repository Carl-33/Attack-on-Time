package learn.attack.security;

import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    private final JwtConverter converter;

    public SecurityConfig(JwtConverter converter) {
        this.converter = converter;
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        //Guest
        //Play the game
        //See list Get
        //Authenticate POST

        //User
        //Play the game
        //See list GET
        //Submit score POST
        //Update score PUT
        //Authenticated

        //Admin
        //Play the game
        //See list GET
        //Submit score POST
        //Update score PUT
        //Delete users DELETE
        //Authenticated
        http.authorizeRequests()
                .antMatchers( HttpMethod.GET, "/api/highscores").permitAll()
                .antMatchers( HttpMethod.GET, "/api/highscores/*").hasAnyRole("USER", "ADMIN")
                .antMatchers( HttpMethod.POST, "/api/highscores" ).hasAnyRole("USER", "ADMIN")
                .antMatchers( HttpMethod.PUT, "/api/highscores/*" ).hasAnyRole("USER", "ADMIN")
                .antMatchers( HttpMethod.GET, "/api/users").hasAnyRole("ADMIN")
                .antMatchers( HttpMethod.GET, "/api/users/username/*").permitAll()
                .antMatchers( HttpMethod.GET, "/api/users/enabled").hasAnyRole( "ADMIN")
                .antMatchers( HttpMethod.GET, "/api/users/disabled").hasAnyRole("ADMIN")
                .antMatchers( HttpMethod.PUT, "/api/users/enabled/*").hasAnyRole( "ADMIN")
                .antMatchers( HttpMethod.PUT, "/api/users/disabled/*").hasAnyRole("ADMIN")
                .antMatchers( HttpMethod.POST, "/api/users").permitAll()
                .antMatchers( HttpMethod.DELETE, "/api/users/*").hasAnyRole("ADMIN")
                .antMatchers( HttpMethod.GET, "/api/games").permitAll()
                .antMatchers( HttpMethod.POST, "/api/security/authenticate" ).permitAll()

                .antMatchers( "/**" ).denyAll()

                .and()

                .addFilter( new JwtRequestFilter(authenticationManager(), converter))

                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);

        //disable csrf checks
        http.csrf().disable();

        //respond to CORS preflight checks
        http.cors();
    }

    @Override
    @Bean
    protected AuthenticationManager authenticationManager() throws Exception {
        return super.authenticationManager();
    }

    @Bean
    public PasswordEncoder getEncoder(){
        return new BCryptPasswordEncoder();
    }

    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**")
                        .allowedOrigins("http://localhost:3000")
                        .allowedMethods("*");
            }
        };
    }
}
