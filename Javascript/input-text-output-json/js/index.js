console.log("testing");

$(document).ready(() => {
  $("#submit-btn").click(function (e) {
    e.preventDefault();
    let formData = {
      "input-material": $("#input-material").val(),
    };

    let jsonText = JSON.stringify(formData, null, 1);

    $("#submit-btn").after("<pre>" + jsonText + "</pre>");
  });
});
