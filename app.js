$(document).ready(function () {

  $('#search-entry').keypress(function (e) {
    if (e.which == 13) {
      var searchTerm = $('#search-entry').val();
      videoSearch(searchTerm);
    }
  });


  $('button.submit').click(function () {
    var searchTerm = $('#search-entry').val();
    videoSearch(searchTerm);
  });


  function videoSearch(searchTerm) {
    var params = {
      part: "snippet",
      key: "AIzaSyCdfadHd-MS-pAihYaStxo9-g6k9EMeYb0",
      q: searchTerm
    }
    var url = 'https://www.googleapis.com/youtube/v3/search';
    $.getJSON(url, params, function (data) {
      console.log(data);
      $.each(data.items, function (key, value) {
        var title = this.snippet.title;
        var description = this.snippet.description;
        var image = this.snippet.thumbnails.medium.url;
        var url = 'http://www.youtube.com/watch/' + this.id.videoId;
        $(".search_results").prepend('<a href ="' + url + '" target="_blank"><img src="' + image + '">' + title + '</a>').prepend('<br>');
      })
    });
  }
});