$(document).ready(function () {
  var newsUrl =
    "https://newsapi.org/v2/top-headlines?country=in&from=2024-01-15&sortBy=publishedAt&apiKey=5f70be4084dc445aa4b5d9d17550e989";

  // loadNews(newsUrl);

  $("#btnSubmit").click(function () {
    const searchTerm = $("#searchTerm").val();
    console.log("searchTerm:" + searchTerm);
    if (searchTerm) {
      newsUrl =
        "https://newsapi.org/v2/everything?q=" +
        searchTerm +
        "&from=2024-01-15&sortBy=popularity&apiKey=5f70be4084dc445aa4b5d9d17550e989";
    } else {
      newsUrl =
        "https://newsapi.org/v2/top-headlines?country=in&from=2024-01-15&sortBy=publishedAt&apiKey=5f70be4084dc445aa4b5d9d17550e989";
    }

    loadNews(newsUrl);
  });

  function loadNews(url) {
    $.get(url, function (response, status) {
      // console.log(JSON.stringify(response));
      $("#newsContent").empty();
      for (let i = 0; i < response.totalResults; i++) {
        let article = response.articles[i];
        console.log(article.title);

        let cardImgElement = "";
        if (article.urlToImage) {
          cardImgElement =
            "<img class='card-img-top' src='" + article.urlToImage + "' />";
        }
        let articleElement =
          "<div class='card' style='width: 18rem;margin:2px;'> " +
          cardImgElement +
          "<div class='card-body'>" +
          "<h5 class='card-title'>" +
          "<a style='color: black'  target='_blank' href='" +
          article.url +
          "'>" +
          article.title +
          "</a>" +
          "</h5>" +
          "</div></div>";
        $("#newsContent").append(articleElement);
      }
    });
  } //eo onPageLoad()
});
