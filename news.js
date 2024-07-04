function toggleNav() {
    let navLinks = document.querySelector('.navlink');
    navLinks.classList.toggle('open');
  
    let menuIcon = document.getElementById('menuIcon');
    let isStar = menuIcon.classList.contains('fa-star');
  
    if (isStar) {
        menuIcon.classList.remove('fa-star', 'star');
        menuIcon.classList.add('fa-bars');
    } else {
        menuIcon.classList.remove('fa-bars');
        menuIcon.classList.add('fa-star', 'star');
    }
  }
  
  
  // Fetch news using an API
  
  function searchMovie() {
    const currentMovies = `https://api.currentsapi.services/v1/latest-news?apiKey=2TIRGcB2GZDlEjUVthEoLPcQakkKI4t7uCAdwWj8DJW9SKpA`;

  
    fetch(currentMovies)
      .then(response => response.json())
      .then(data => {
        const movies = data.currentMovies.map(article => ({
          title: article.title,
          poster: article.poster,
          plot: article.plot,
          website: article.website 
        }));
        displayMovie(movies);
      })
        
  }
  
  function displayMovie(movies) {
    const newsList = document.getElementById("newslist");
    const latestNews = document.getElementById("latest-news");
    const mustread = document.getElementById("mustread");
    
    const recomendation = document.getElementById("recomendation");
    newsList.innerHTML = '';
  
  
    movies.slice(11,12).forEach(article => {
      const listItem = document.createElement("li");
      listItem.innerHTML = `
      <div class= "newspage">
  
        <div>
          <span><img src="${article.poster}" ></span>
        </div>
  
        <div class = "newscontent">
          <h2><b>${article.title}</b></h2>
          <br>
          <span>${article.plot}</span>
          <br><br>
          <span><a href="${article.website}" target="_blank">${article.website}</a></span>
          </div>
        </div>
       </div>` 
      
      newsList.appendChild(listItem);
    });
    movies.slice(12,16).forEach(article => {
      const newsItem = document.createElement("div");
      newsItem.setAttribute('class','newspage')
      newsItem.innerHTML = `
      
  
        <div>
          <img src="${article.poster}" >
        </div>
  
        <div class = "newscontent">
          <h2><b>${article.title}</b></h2>
          <br>
          <span>${article.plot}</span>
          <br><br>
          <span><a href="${article.website}" target="_blank">${article.website}</a></span>
          </div>
        </div>
       ` 
  
  latestNews.appendChild(newsItem)
    });
    movies.slice(16,20).forEach(article => {
      const newsItem = document.createElement("div");
      newsItem.setAttribute('class','mustread')
      newsItem.innerHTML = `
        <div>
          <img src="${article.poster}" >
        </div>
  
        <div class = "newscontent">
          <h2><b>${article.title}</b></h2>
          <br>
          <span>${article.plot}</span>
          <br><br>
          <span><a href="${article.website}" target="_blank">${article.website}</a></span>
          </div>
        </div>
       ` 
  mustread.appendChild(newsItem)
    });
  
    movies.slice(24,27).forEach(article => {
      const newsItem = document.createElement("div");
      newsItem.setAttribute('class','recomendation')
      newsItem.innerHTML = `
      
  
        <div>
          <img src="${article.poster}" >
        </div>
  
        <div class = "newscontent">
          <h2><b>${article.title}</b></h2>
          <br>
          <span>${article.plot}</span>
          <br><br>
          <span><a href="${article.website}" target="_blank">${article.website}</a></span>
          </div>
        </div>
       ` 
  
       recomendation.appendChild(newsItem)
    });

  }
  document.getElementById('subscription-form').addEventListener('submit', function(event) {
    event.preventDefault(); 
  
    const email = document.getElementById('email').value;
  
    alert(`Email received, Thankyou for subscribing`);
  
  });
  
  window.onload = searchMovie;
  