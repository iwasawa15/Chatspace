$(function(){
  function buildHTML(message){
    if (message.image){
      var html = `<div class="messages__box">
                    <div class="messages__name">
                      ${message.user_name}
                    </div>
                    <div class="messages__time">
                      ${message.date}
                    </div>
                    <div class="messages__text">
                      ${message.body}
                    </div>
                    <img src=${message.image}>
                  </div>`
    } else {
      var html = `<div class="messages__box">
                    <div class="messages__name">
                      ${message.user_name}
                    </div>
                    <div class="messages__time">
                      ${message.date}
                    </div>
                    <div class="messages__text">
                      ${message.body}
                    </div>
                  </div>`
    }
    return html;
  }

  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })

    .done(function(data){
      var html = buildHTML(data);
      $('.messages').append(html)
      $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast')
      $('.new_message')[0].reset()
    })
    .fail(function(){
      alert('error');
    })
  return false;
  })
})
