$(document).on('turbolinks:load', function(){
  $(function(){
    var search_list = $("#user-search-result");
    var chat_members = $("#chat-group-users")
    function appendUser(user) {
      var user = `<div class="chat-group-user clearfix">
                      <p class="chat-group-user__name">${user.name}</p>
                      <a class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${user.id}" data-user-name="${user.name}">追加</a>
                    </div>`
      search_list.append(user);
    }

    function addHTML(id, name) {
      var html = `<div class='chat-group-user clearfix js-chat-member' id='chat-group-user-${id}'>
                    <input name='group[user_ids][]' type='hidden' value='${id}'>
                    <p class='chat-group-user__name'>${name}</p>
                    <a class='user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn'>削除</a>
                  </div>`
      chat_members.append(html);
    }

    $('#user-search-field').on('keyup', function(e){
      var input = $(this).val()
      var url = '/users'
      $.ajax({
        url: url,
        type: "GET",
        data: { keyword: input },
        dataType: 'json'
      })

      .done(function(data){
        $("#user-search-result").empty()
        data.forEach(function(user){
          appendUser(user);
        });
      })
      .fail(function(){
        alert('検索に失敗しました。');
      })
    })

    $('.chat-group-form__field').on('click', '.user-search-add', function(e){
      var id = $(this).data('user-id')
      var name = $(this).data('user-name')
      addHTML(id, name);
      $("#user-search-field").val("");
      $(this).parent().remove();
    })

    $('.chat-group-form__field').on('click', '.user-search-remove', function(e){
      $(this).parent().remove();
    })
  })
})
