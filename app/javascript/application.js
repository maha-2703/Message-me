import "@hotwired/turbo-rails"
import "controllers"
import "channels"

const scroll_bottom = () => {

  const container = $('#messages');

  if(container.length > 0) {

    container.scrollTop(container[0].scrollHeight);

  }

}

document.addEventListener("turbo:load", function() {

  $('.ui.dropdown').dropdown();

  $('.message .close').on('click', function() {

    $(this).closest('.message').transition('fade');

  });

  scroll_bottom();

  $('#message_body').off('keydown').on('keydown', function(e) {

    if(e.keyCode == 13 && !e.shiftKey) {

      e.preventDefault();

      $('#message-form').submit();

      $(this).val('');

    }

  });

});