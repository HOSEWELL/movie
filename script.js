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
    const currentMovies = `https://freetestapi.com/api/v1/movies`;
  
  
    fetch(currentMovies)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        const movies = data.movies.map(movie => ({
          title: movie.title,
          poster: movie.poster,
          plot: movie.plot,
          website: movie.website  
        }));
        displayMovie(movies);
      })
      .catch(error =>{
        console.error(`Error fetching movies:`, error);
      })
  
  }
  
  function displayMovie(movies) {
    const newsList = document.getElementById("newslist");
    const latestNews = document.getElementById("latest-news");
    const mustread = document.getElementById("mustread");
    
    const recomendation = document.getElementById("recomendation");
    newsList.innerHTML = '';
  
  
    movies.slice(0,1).forEach(movie => {
      const listItem = document.createElement("li");
      listItem.innerHTML = `
      <div class="newspage">
        <div>
          <span><img src="${movie.poster}" ></span>
        </div>
        <div class="newscontent">
          <h2><b>${movie.title}</b></h2>
          <br>
          <span>${movie.plot}</span>
          <br>
          <br>
          <span><a href="${movie.website}" target="_blank">${movie.website}</a></span>
        </div>
      </div>`;
      
      
      newsList.appendChild(listItem);
    });
    movies.slice(1,5).forEach(movie => {
      const newsItem = document.createElement("div");
      newsItem.setAttribute('class','newspage')
      newsItem.innerHTML = `
      
  
        <div>
          <img src="${movie.poster}" >
        </div>
  
        <div class = "newscontent">
          <h2><b>${movie.title}</b></h2>
          <br>
          <span>${movie.plot}</span>
          <span><a href="${movie.website}" target="_blank">${movie.website}</a></span>
        </div>
        </div>
       ` 
  
  latestNews.appendChild(newsItem)
    });
  
    movies.slice(6,10).forEach(movie => {
      const newsItem = document.createElement("div");
      newsItem.setAttribute('class','mustread')
      newsItem.innerHTML = `
        <div>
          <img src="${movie.poster}" >
        </div>
  
        <div class = "newscontent">
          <h2><b>${movie.title}</b></h2>
          <br>
          <span>${movie.plot}</span>
          <span><a href="${movie.website}" target="_blank">${movie.website}</a></span>
        </div>
        </div>
       ` 
  mustread.appendChild(newsItem)
    });
  
    movies.slice(4,7).forEach(movie => {
      const newsItem = document.createElement("div");
      newsItem.setAttribute('class','recomendation')
      newsItem.innerHTML = `
      
  
        <div>
          <img src="${movie.poster}" >
        </div>
  
        <div class = "newscontent">
          <h2><b>${movie.title}</b></h2>
          <br>
          <span>${movie.plot}</span>
          <span><a href="${movie.website}" target="_blank">${movie.website}</a></span>
        </div>
        </div>
       ` 
  
       recomendation.appendChild(newsItem)
    }); 
  
  
  }
  document.getElementById('subscription-form').addEventListener('submit', function(event) {
    event.preventDefault(); 
  
    const email = document.getElementById('email').value;
  
    alert(`Email received. Thankyou for subscribing`);
  
  });
  
  
  window.onload = searchMovie;