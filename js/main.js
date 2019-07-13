$(".popup").click(function () {
  let $this = $(this);
  let $iframe = $("<iframe>").attr("src", $this.data("link")).css({"width": 440, "height": 300});
  let $title = $("<h3>").text($this.data("title"));
  $(`#video-view${$this.data("no")}`).html($title).append($iframe);
  $iframe.wrap("<div class='class-video'>")
  $(`#video-view${$this.data("no")}`).toggle()
})