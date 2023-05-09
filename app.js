const titleInput = document.querySelector("#title");
const ratingInput = document.querySelector("#rating");

$(function() {
    $("#movie-form").on("submit", function(e) {
        e.preventDefault();
        let title = $("#title").val();
        let rating = $("#rating").val();
        let movieListItem = (`<li>Title: "${title}",   Rating: ${rating}`);
        let removeBtn = ('<button class="remove-btn">Remove</button>');
    $("removeBtn").addClass("remove-btn");    

    $("#rated-movies").append(movieListItem + " " + removeBtn)

    titleInput.value = "";
    ratingInput.value = ""
    })

     $("#rated-movies").on("click", function(e) {
         if(e.target.className == "remove-btn"){
             e.target.parentElement.remove();
         }
     })
})

