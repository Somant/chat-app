function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    $(".g-signin2").css("display","none");
    $(".centered-form__form").css("display","block");
    $(".data").css("display","block");
    $("#pic").attr('src',profile.getImageUrl());
    $("#name").text(profile.getName());
  }