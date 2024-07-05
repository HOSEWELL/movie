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
        console.log(data); // Optional: Log the data to verify
  
        // Assuming 'newsList' is the element where you want to append movie data
        const newsList = document.getElementById('newslist'); // Corrected ID 'newslist' to 'newsList'
  
        data.forEach((movie, index) => {
          const listItem = document.createElement("div");
          listItem.classList.add("newspage"); // Add class 'newspage'
  
          listItem.innerHTML = `
            <div>
              <span><img src="${movie.poster}" ></span>
            </div>
            <div class="newscontent">
              <h2><b>${movie.title}</b></h2>
              <br>
              <span>${movie.plot}</span>
              <br>
              <br>
              <br>

              <span> Production: ${movie.production}<span/>
              <br>
              <br>
              <span><a href="${movie.trailer}" target="_blank"> Watch Trailer Here</a></span>
              <br>
              <br>
              <span><a href="${movie.website}" target="_blank">${movie.website}</a></span>
            </div>`;
  
          if (index >= 0 && index < 5) {
            // Display in latest news section
            const latestNews = document.getElementById('latest-news');
            latestNews.appendChild(listItem);
          } else if (index >= 5 && index < 10) {
            // Display in must read section
            const mustRead = document.createElement("div");
            mustRead.classList.add("newspage");
            mustRead.appendChild(listItem);
            document.getElementById('mustread').appendChild(mustRead);
          } else if (index >= 10 && index < 15) {
            // Display in recommendation section
            const recommendation = document.createElement("div");
            recommendation.classList.add("newspage");
            recommendation.appendChild(listItem);
            document.getElementById('recomendation').appendChild(recommendation);
          }
  
          // Append listItem to newsList (if needed for fallback display)
          newsList.appendChild(listItem); 
        });
      })
      .catch(error => {
        console.error(`Error fetching movies:`, error);
      });
  }
  
  // Call searchMovie on page load
  window.onload = searchMovie;
  