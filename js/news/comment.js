function autoHeight(element) {
    element.style.height = "36px";
    element.style.height = element.scrollHeight + "px";
  }
  function render(data){
    // console.log(data.comment)
      var html = `
      <div class="row ">
      <div class="col-lg-1 col-md-1 col-sm-1">
        <div class="avatar">
          <img src="./images/news/photo-1535713875002-d1d0cf377fde.jpg" alt="">
          <span>Smith</span>

        </div>
      </div>
      <div class="col-lg-11 col-md-11 col-sm-11">
        <div class="comment-box-display">
          <p>${data.comment}</p>
        </div>
      </div>
    </div>
      `
      $('.comment-display').append(html)
  }
  $(document).ready(function () {
    var comment = [];
    if (!localStorage.commentData){
      localStorage.commentData = []
    } else {
      comment = JSON.parse(localStorage.commentData)
    }
    
    for (var i=0;i<comment.length;i++){
      render(comment[i])
    }
    $(".btn-comment").click(function () {

      
     
      var txt = {
        "comment": $("#txtArea").val()
      }
      comment.push(txt)
      console.log(txt)
      localStorage.commentData = JSON.stringify(comment)
      render(txt);
      $("#txtArea").val('')

    });
  });

  var myStorage = window.localStorage
  // console.log(myStorage)