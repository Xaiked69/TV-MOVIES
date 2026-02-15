// Datos de películas por categoría
const categories = [
    {
        name: "Proximanente",
        movies: [
            { title: "Avatar: Fuego y Cenizas", year: "2025", synopsis: "de todo el mundo el 18 de diciembre de 2025. James Cameron lleva a las audiencias de regreso a Pandora en una nueva aventura inmersiva con el marine convertido en líder Na'vi Jake Sully (Sam Worthington), la guerrera Na'vi Neytiri (Zoe Saldaña) y la familia Sully..", thumbnail: "https://www.hugozapata.com.ar/wp-content/uploads/2025/12/avatar-fires-and-ash.jpg", videoUrl: "https://manifest.googlevideo.com/api/manifest/hls_playlist/expire/1771189058/ei/4d6RaYu_POvv1sQPv5OD4AU/ip/168.196.26.66/id/6dfdfc7ff248372c/itag/270/source/youtube/requiressl/yes/ratebypass/yes/pfa/1/sgovp/clen%3D41490617%3Bdur%3D145.144%3Bgir%3Dyes%3Bitag%3D137%3Blmt%3D1754010604633375/rqh/1/hls_chunk_host/rr2---sn-pn2bgv025g-x1xe.googlevideo.com/xpc/EgVo2aDSNQ%3D%3D/cps/226/met/1771167457,/mh/2l/mm/31,29/mn/sn-pn2bgv025g-x1xe,sn-njaeyn7s/ms/au,rdu/mv/m/mvi/2/pl/24/rms/au,au/initcwndbps/1313750/bui/AW-iu_oJaNPLfpvSgNkToHa578Lh1XIH4oUyrjhdmo1tjncLPiFjow2Us_eMrf7FeL8ApGU0R9KwO2uf/spc/q5xjPMMG9ePKKuDk-SjWn_Q6x86rnJrPk6Dxiu6ibe_gq8v-URtuFv24qAUJrW_y/vprv/1/playlist_type/DVR/dover/13/txp/4535534/mt/1771166984/fvip/2/short_key/1/keepalive/yes/fexp/51552689,51565116,51565682,51580968,51772949/sparams/expire,ei,ip,id,itag,source,requiressl,ratebypass,pfa,sgovp,rqh,xpc,bui,spc,vprv,playlist_type/sig/AJEij0EwRQIgKZRqGpUE2366Oca7wApy8tMWKYn5Nlj1rUQtcRLQtSECIQDojrfdMMN9PZEMehEwtjdnLCNd8KFzhcoHufCThO2HRw%3D%3D/lsparams/hls_chunk_host,cps,met,mh,mm,mn,ms,mv,mvi,pl,rms,initcwndbps/lsig/APaTxxMwQwIgH-bt54griwVODi0HrTK_Zx5UTjEjuMuvxxVeQANAfLYCHxwOXgO210tGEIGl1J8m99bbhg0eh8_MdN93gSBXgkE%3D/playlist/index.m3u8" },
            { title: "Película 2", year: "2022", synopsis: "Sinopsis 2.", thumbnail: "https://via.placeholder.com/180x270.png?text=Película+2", videoUrl: "https://www.w3schools.com/html/movie.mp4" }
        ]
    },
    {
        name: "En el barro T2",
        movies: [
            { title: "En el barro T2x1", year: "2026", synopsis: "Sinopsis 3.", thumbnail: "https://imgs.search.brave.com/LhDPfQ1fFryyNdlhwKyIblPMAPBFg_59Xk9qgzGm4f4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bGF2YW5ndWFyZGlh/LmNvbS9wZWxpY3Vs/YXMtc2VyaWVzL2lt/YWdlcy9hbGwvc2Vy/aWUvcG9zdGVycy8y/MDI1Lzgvc2VyaWUt/MjU4NDYyL3cxMjgw/L2tqbkJVM0NqUVRZ/anV0Z0YyUDFRaFNX/dVZidS5qcGc", videoUrl: "https://cloud-s76-91-48-193.spcdn.cc/h75bj542dpe2alhulp3t47osa6dgjmvlult5hv7pztxkycm56qv5dluhpgua/v.mp4" },
            { title: "En el barro T2x2", year: "2026", synopsis: "Sinopsis 4.", thumbnail: "https://imgs.search.brave.com/LhDPfQ1fFryyNdlhwKyIblPMAPBFg_59Xk9qgzGm4f4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bGF2YW5ndWFyZGlh/LmNvbS9wZWxpY3Vs/YXMtc2VyaWVzL2lt/YWdlcy9hbGwvc2Vy/aWUvcG9zdGVycy8y/MDI1Lzgvc2VyaWUt/MjU4NDYyL3cxMjgw/L2tqbkJVM0NqUVRZ/anV0Z0YyUDFRaFNX/dVZidS5qcGc", videoUrl: "https://cloud-s76-91-48-193.spcdn.cc/h75bj642dpe2alhulp3t47wwcqiyjselt3h4txwr62ff3mcy3cuzekzpay6a/v.mp4" }
        ]
    }
];

const categoriesContainer = document.getElementById("categories-container");
const searchInput = document.getElementById("search-input");
const previewContainer = document.getElementById("preview-container");
const previewPlayer = document.getElementById("preview-player");
const modal = document.getElementById("video-modal");
const videoPlayer = document.getElementById("video-player");
const modalTitle = document.getElementById("modal-title");
const modalYear = document.getElementById("modal-year");
const modalSynopsis = document.getElementById("modal-synopsis");
const closeBtn = document.getElementById("close-btn");

let focusedCategoryIndex = 0;
let focusedMovieIndex = 0;

// Crear carruseles
function createCategory(category, catIndex) {
    const catDiv = document.createElement("div");
    catDiv.className = "category";

    const title = document.createElement("h2");
    title.className = "category-title";
    title.textContent = category.name;
    catDiv.appendChild(title);

    const carousel = document.createElement("div");
    carousel.className = "carousel";

    category.movies.forEach((movie, movieIndex) => {
        const card = document.createElement("div");
        card.className = "movie-card";
        card.tabIndex = -1;
        card.dataset.catIndex = catIndex;
        card.dataset.movieIndex = movieIndex;
        card.innerHTML = `<img src="${movie.thumbnail}" alt="${movie.title}"><div class="movie-title">${movie.title}</div>`;

        // Abrir modal
        card.addEventListener("click", () => openModal(movie));
        // Mini preview
        card.addEventListener("focus", () => showPreview(movie));
        card.addEventListener("blur", hidePreview);

        carousel.appendChild(card);
    });

    catDiv.appendChild(carousel);
    categoriesContainer.appendChild(catDiv);
}

// Modal
function openModal(movie) {
    videoPlayer.src = movie.videoUrl;
    modalTitle.textContent = movie.title;
    modalYear.textContent = movie.year;
    modalSynopsis.textContent = movie.synopsis;
    modal.classList.remove("hidden");
    videoPlayer.play();
}

function closeModal() {
    videoPlayer.pause();
    videoPlayer.src = "";
    modal.classList.add("hidden");
}

closeBtn.addEventListener("click", closeModal);

// Mini preview
function showPreview(movie) {
    if(!movie.videoUrl) return;
    previewContainer.classList.remove("hidden");
    previewPlayer.src = movie.videoUrl;
}

function hidePreview() {
    previewPlayer.pause();
    previewPlayer.src = "";
    previewContainer.classList.add("hidden");
}

// Navegación con control remoto
function updateFocus() {
    document.querySelectorAll(".movie-card.focused").forEach(c => c.classList.remove("focused"));
    const focusedCard = document.querySelector(`.movie-card[data-cat-index='${focusedCategoryIndex}'][data-movie-index='${focusedMovieIndex}']`);
    if(focusedCard){
        focusedCard.classList.add("focused");
        focusedCard.scrollIntoView({behavior:"smooth", inline:"center"});
        focusedCard.focus();
    }
}

function handleKeyDown(e) {
    const currentCategory = categories[focusedCategoryIndex];
    if(!currentCategory) return;

    switch(e.key){
        case "ArrowRight":
            if(focusedMovieIndex < currentCategory.movies.length - 1) focusedMovieIndex++;
            updateFocus();
            break;
        case "ArrowLeft":
            if(focusedMovieIndex > 0) focusedMovieIndex--;
            updateFocus();
            break;
        case "ArrowDown":
            if(focusedCategoryIndex < categories.length - 1){
                focusedCategoryIndex++;
                focusedMovieIndex = Math.min(focusedMovieIndex, categories[focusedCategoryIndex].movies.length - 1);
                updateFocus();
            }
            break;
        case "ArrowUp":
            if(focusedCategoryIndex > 0){
                focusedCategoryIndex--;
                focusedMovieIndex = Math.min(focusedMovieIndex, categories[focusedCategoryIndex].movies.length - 1);
                updateFocus();
            }
            break;
        case "Enter":
            const movie = categories[focusedCategoryIndex].movies[focusedMovieIndex];
            openModal(movie);
            break;
        case "Escape":
            closeModal();
            break;
    }
}

document.addEventListener("keydown", handleKeyDown);

// Buscar películas
searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();
    document.querySelectorAll(".movie-card").forEach(card => {
        const title = card.querySelector(".movie-title").textContent.toLowerCase();
        card.style.display = title.includes(query) ? "block" : "none";
    });
});

// Inicializar carruseles
categories.forEach((cat, index) => createCategory(cat, index));
updateFocus();