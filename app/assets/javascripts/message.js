$(function(){
  function buildHTML(message){
    if (message.image){
      var html = `<div class="messages__box" data-message-id=${message.id}>
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
      var html = `<div class="messages__box" data-message-id=${message.id}>
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
    var url = $(this).attr('action');
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
      $('.messages').animate({scrollTop: $('.messages').height()}, 'fast')
      $('.text-field').val('')
      $('.upload-file').val('')
    })
    .fail(function(){
      alert('error');
    })
  return false;
  })

  function update(){
    var message_id = $('.messages__box:last').data('message-id');
    $.ajax({
      url: location.href,
      type: "GET",
      dataType: 'json',
      data: {
        message_id: message_id
      }
    })

    .always(function(data){
      if(data.length != 0){
        data.forEach(function(message){
          var html = buildHTML(message);
          $('.messages').append(html)
          $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast')
        });
      };
    })
  }

  setInterval(update, 5 * 1000);

})
