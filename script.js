$(function () {

  // ----------------------
  // Exercise 1 - Accordion
  // ----------------------


  $(".accordion-header").on("click", function () {

    if ($(this).next().is(":visible")) {
      $(this).next().slideUp();
      return;
    }
    $(".accordion-content").slideUp();

    $(this).next().slideDown();
  });


  $(".todos button").on("click", function () {
    $.ajax({
      url: "https://dummyjson.com/todos",
      method: "GET",
      success: function (data) {
        const list = $(".todos ul");
        list.empty();

        data.todos.forEach(todo => {
          list.append(`<li>${todo.todo}</li>`);
        });
      },
      error: function () {
        alert("Error loading todos :(");
      }
    });
  });

});
