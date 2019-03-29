var token = "EAAkwTpKOJZA0BAKLCFy04IFSjTmGJcvNOGbpZCjA9v3ZCvyt0nB7jSssKu5zmzdwtdH2E8Wty5KvXkrC1CF5rsCWKZA0LoxcbWb26bCKaZC7IDC5r8tdhOhB4iaaRM9JFJZBj
              th3gIBHFfw23GXlMTGj2oWrNyhjQbWXqNYBzGygZDZD"


  function checkLoginState() {
    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });
  }
