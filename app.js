let searchBtn = document.querySelector(".searchbtn");
let inp = document.querySelector(".inputtext")
let city = '';
let accessKey = '9P9SkE9Jh0FGhUPSk9ZKWFkAG-hYr5Y5c1Uhv7R_oQs';

 



searchBtn.addEventListener("click", function () {
    city = inp.value;
    inp.value = "";
 
    console.log(city);
    fetchImage();
    weatherCheck();

})



async function fetchImage() {
    let url = `https://api.unsplash.com/search/photos?query=${city}&client_id=${accessKey}&per_page=12`;
    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.results.length > 0) {
            displayImages(data.results);

        } else {
            document.querySelector(".gallery").innerHTML = '<p>data not found</p>'
        }
    } catch {
        console.log('Error fetching image :', error);
    }
}

function displayImages(images) {
    const gallery = document.querySelector(".gallery");
    gallery.innerHTML = "";

    images.forEach(image => {
        const imageElement = document.createElement("img");
        imageElement.src = image.urls.small;
        gallery.appendChild(imageElement);

    });
}




async function weatherCheck() {
    const apiKey = "c67b28b80eaa46b197d550bf5ba903e7";
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
    let response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    let data = await response.json();
    console.log(data);
    let wind = data.wind.speed;
    let temp = data.main.temp;
    let hum = data.main.humidity;
    console.log(wind);
    console.log(temp);
    console.log(hum);
    displayWeather(city, temp, hum, wind);
}

function displayWeather(city, temp, hum, wind) {
    let weatherCard = document.querySelector(".weather-card");
    weatherCard.innerHTML = "";
    weatherCard.innerHTML = `
    <P>City : ${city}</p>
    <P>Temprature : ${temp}</p>
    <P>Humidity : ${hum}</p>
    <P>wind speed : ${wind}</p>
    `;
    
}


// let travelapi = "fsq3xbQSdeL1pAV4mlMrTSgT2W8lzS655My2hgpM1gFYm+E=";
