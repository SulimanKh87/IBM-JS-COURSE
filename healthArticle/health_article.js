var xhr = new XMLHttpRequest();

var url = './health.json';

xhr.open('GET', url, true);

xhr.responseType = 'json';

xhr.onload = function() {
    // Parse the JSON response
    var response = JSON.parse(xhr.responseText);
    
    // Retrieve the articles array from the JSON response
    var articles = response.articles;
    
    // Retrieve the HTML element with the ID 'articles' where the fetched content will be displayed
    var articlesDiv = document.getElementById('articles');
    
    // Loop through the articles array and create HTML elements to display each article
    articles.forEach(function(article) {
        // Create a new <div> element for each article
        var articleDiv = document.createElement('div');
        
        // Set the inner HTML of the article <div> with the article content
        articleDiv.innerHTML = '<h2>' + article.title + '</h2>' +
                               '<p>' + article.content + '</p>';
        
        // Append the article <div> to the articlesDiv
        articlesDiv.appendChild(articleDiv);
    });
};


articles.forEach(function(article) {
    var articleDiv = document.createElement('div');
    articleDiv.classList.add('article');

    var title = document.createElement('h2');
    title.textContent = article.title;

    var description = document.createElement('p');
    description.textContent = article.description;

    var waysHeader = document.createElement('h3');
    waysHeader.textContent = 'Ways to Achieve:';

    var waysList = document.createElement('ul');
    article.ways_to_achieve.forEach(function(way) {
      var listItem = document.createElement('li');
      listItem.textContent = way;
      waysList.appendChild(listItem);
    });

    var benefitsHeader = document.createElement('h3');
    benefitsHeader.textContent = 'Benefits:';

    var benefitsList = document.createElement('ul');
    article.benefits.forEach(function(benefit) {
      var listItem = document.createElement('li');
      listItem.textContent = benefit;
      benefitsList.appendChild(listItem);
    });

    articleDiv.appendChild(title);
    articleDiv.appendChild(description);
    articleDiv.appendChild(waysHeader);
    articleDiv.appendChild(waysList);
    articleDiv.appendChild(benefitsHeader);
    articleDiv.appendChild(benefitsList);

    articlesDiv.appendChild(articleDiv);
  });

  xhr.send();