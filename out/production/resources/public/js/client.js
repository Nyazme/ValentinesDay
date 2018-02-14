//this is the browser gets the file from the server.

$(document).ready(function(){
    console.log ("jQuery works!");

    $.ajax({
        type :"GET",
        url : "/heartsRule",
        success : function(){
            console.lg("LOVE BOAT!");
        }
    });
    //jquery.ajax();
    //var.scottsObject+{};
    //scottsObject.name= "Scott";
});

console.log ("Heartbreaker!");