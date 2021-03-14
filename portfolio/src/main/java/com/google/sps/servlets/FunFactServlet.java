package com.google.sps.servlets;

import com.google.gson.Gson;
import java.io.IOException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/** Handles requests sent to the /hello URL. Try running a server and navigating to /hello! */
@WebServlet("/facts")
public class FunFactServlet extends HttpServlet {

  String[] facts = {"I played Trombone in school band from 5th grade to senior year of High School",
                    "My first job was at McDonald's when I was 16", 
                    "I have one older sister and one younger brother"};

  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
    
    String json = convertToJsonUsingGson(facts);
    response.setContentType("application/json;");
    response.getWriter().println(json);
  }

  private String convertToJsonUsingGson(String[] input) {
    Gson gson = new Gson();
    String json = gson.toJson(input);
    return json;
  }
}