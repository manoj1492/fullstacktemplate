package com.example.demo;

import java.security.Principal;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.SecurityProperties;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.annotation.Order;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.web.csrf.CookieCsrfTokenRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class FullstackwebApplication {

	@GetMapping("/resource")
	public Map<String, Object> home(){
		Map<String, Object> map= new HashMap<String, Object>();
		map.put("id", UUID.randomUUID().toString());
		map.put("content", "Hello World");
		return map;
		
	}
	@RequestMapping("/user")
	  public Principal user(Principal user) {
	    return user;
	}
//	@GetMapping(value = "/{path:[^\\.]*}")
//    public String redirect() {
//        return "forward:/";
//    }
	public static void main(String[] args) {
		SpringApplication.run(FullstackwebApplication.class, args);
	}
	
	@Configuration
	  protected static class SecurityConfiguration extends WebSecurityConfigurerAdapter {
	    @Override
	    protected void configure(HttpSecurity http) throws Exception {
	      http
	        .httpBasic()
	      .and()
	        .authorizeRequests()
	          .antMatchers("/index.html", "/", "/home", "/login", "/*.js").permitAll()
	          .anyRequest().authenticated()
	      .and().
	      	csrf().
	      		csrfTokenRepository(CookieCsrfTokenRepository.withHttpOnlyFalse());    
	    }
	}  
	

}
