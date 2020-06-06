$(function() {

  function buildHTML(message){
    if (message.image) {
      var html = `<div class="message">
                    <div class="message__upper-info">
                      <p class="message__upper-info__talker">
                        ${message.user.name}
                      </p>
                      <p class="message__upper-info__date">
                        ${message.created_at}
                      </p>
                    </div>
                    <div class="message-text">
                      <p class="message-text__content">
                        ${message.content}
                      </p>
                      <img class="message-text__image" src="${message.image}">
                    </div>
                  </div>`
      return html;
    } else {
      var html = `<div class="message">
                    <div class="message__upper-info">
                      <p class="message__upper-info__talker">
                        ${message.user.name}
                      </p>
                      <p class="message__upper-info__date">
                        ${message.created_at}
                      </p>
                    </div>
                    <div class="message-text">
                      <p class="message-text__content">
                        ${message.content}
                      </p>
                    </div>
                  </div>`
      return html;
    };
  }

  $('#new_message').on('submit', function(e) {
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
      
    })
  });

});