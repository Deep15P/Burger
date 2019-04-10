$(function() {

$(".eatburger").on("click", function (event){
    var id = $(this).data("id");
    var devouredState = {
        devoured: 1
      };
    //   PUT request
      $.ajax("/api/burgers" + id, {
        type: "PUT",
        data: devouredState
      }).then(
        function() {
          console.log("Burger Devoured!");
          
          location.reload();
        }
      );
});

$(".create-form").on("submit", function(event) {
    event.preventDefault();

    var newBurger = {
      burger_name: $("#newburger").val().trim(), devoured: 0
    };

    // POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("New Burger");
        
        location.reload();
      }
    );
  });


  $(".delete-burger").on("click", function(event) {
    var id = $(this).data("id");

    // DELETE request.
    $.ajax("/api/burgers/" + id, {
      type: "DELETE"
    }).then(
      function() {
        console.log("Deleted Burger", id);
        
        location.reload();
      }
    );
  });

});