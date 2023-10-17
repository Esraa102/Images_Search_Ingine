let searchInput = document.querySelector("input.search");
let imagesContainer = document.querySelector(".images-container");
let loadMoreBtn = document.querySelector(".load");
let searchForm = document.querySelector("form.input-box")

let apiKey = '-Dd3ftO4o5ZJhdgl7BT4syWIuvlCZIpaBcK9-FO2ojo';
let keyword = '';
let page = 1;


searchForm.addEventListener("submit", (e) =>{
    page = 1;
    imagesContainer.innerHTML = '';
    e.preventDefault();
    getData();
})


function getData () {
    keyword = searchInput.value;
    fetch(`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${apiKey}&per_page=12`)
.then(res =>res.json()).then(data =>  {
    data.results.forEach(image => {
        let imgElement = document.createElement("img");
        imgElement.src = image.urls.small;
        let link = document.createElement("a");
        link.href = image.links.html;
        link.target = '_blank';
        link.appendChild(imgElement)
        imagesContainer.appendChild(link);
    });
});
loadMoreBtn.style.display = "block";
}
loadMoreBtn.addEventListener("click", () => {
    page++;
    getData();
});