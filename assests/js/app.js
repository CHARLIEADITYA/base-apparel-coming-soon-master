document.querySelector(".submitBtn").addEventListener("click", () => {
  let emailValue = document.querySelector(".emailInputBox").value;

  var mailPattern =
    /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

  if (mailPattern.test(emailValue)) {
    document.querySelector(".error").classList.remove("showError");
    // document.querySelector(".errorPara").classList.add("hide");
    document.querySelector(".errorPara").style.display="none"
} else {
    document.querySelector(".error").classList.add("showError");
    // document.querySelector(".errorPara").classList.remove("hide");
    document.querySelector(".errorPara").style.display="block"
  }
});
