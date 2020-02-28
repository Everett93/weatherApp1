$(document).ready(function(){
  console.log("loaded")
  //click function for saving text
  $(".saveBtn").on("click", function(){
    console.log("clicked")
    var id = $(this).attr("id");
    console.log(id)
    var text = $(`.${id}`).val();
    console.log(text)
    localStorage.setItem(id, text);
  });
  //fucntion for retrieving text
  function getText(){
    $(".saveBtn").each(function(){
      var id = $(this).attr("id");
      var text = localStorage.getItem(id);
      $(`.${id}`).val(text);
      

    });
  };
  getText();
});

