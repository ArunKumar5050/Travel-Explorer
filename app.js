let searchBtn = document.querySelector(".searchbtn");
let inp = document.querySelector(".inputtext")
let query = '';
let accessKey = '9P9SkE9Jh0FGhUPSk9ZKWFkAG-hYr5Y5c1Uhv7R_oQs';

searchBtn.addEventListener("click", function(){
    query = inp.value;
    inp.value = "";
    console.log(query); 
    fetchImage();
    
})



async function fetchImage(){
    let url = `https://api.unsplash.com/search/photos?query=${query}&client_id=${accessKey}&per_page=12`;
    try{
        const response = await fetch(url);
        const data = await response.json();

        if(data.results.length>0){
            displayImages(data.results);

        }else{
            document.querySelector(".gallery").innerHTML='<p>data not found</p>'
        }
    }catch{
        console.log('Error fetching image :',error);
    }
}

function displayImages(images){
    const gallery = document.querySelector(".gallery");
    gallery.innerHTML = "";

    images.forEach(image => {
        const imageElement = document.createElement("img");
        imageElement.src = image.urls.small;
        gallery.appendChild(imageElement); 
        
    });
}








