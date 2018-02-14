import static spark.Spark.*;


public class Main {

    public static void main(String[] args) {
        staticFileLocation("/public");

       get("/",((request, response) ->{
          response.redirect("/index.html");
          return null;
       }));
       get("/Hearts", (request, response) -> {
           System.out.println("Hearts are in today!");
           return null;
       });
    }

}
