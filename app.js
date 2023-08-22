const macyInstance = Macy({
    container: '.our-projects_pics',
    mobileFirst: true,
    columns: 1,
    breakAt: {
        576: {
            margin: {
              x: 20,
              y: 20,
            },
            columns: 2
          },
        992: {
            margin: {
              x: 42,
              y: 43,
            },
            columns: 3
          }
    },
    margin: {
        x: 20,
        y:20
    }
})

const loop = document.querySelector('.btn-loop');
const inputSearch = document.querySelector('.form-search');
const burgerMenu = document.querySelector('.navbar-toggler');
let burgerCollapsed = burgerMenu.classList.contains('collapsed');
const projectsSection = document.querySelector('.our-projects');
const btnMorePic = document.querySelector('.button_more');
const galleryPic = document.querySelector('.our-projects_pics');
const btnGradientSection = document.querySelector('.pics-btn_more');
const mediaQueryXs = window.matchMedia('(min-width: 340px)');
const mediaQuery = window.matchMedia('(min-width: 992px)');
const overlay = document.querySelector('.lightbox-overlay');
const content = document.querySelector('.lightbox-content');
const closeButton = document.querySelector('.close-button');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const lightboxImage = document.querySelector('.lightbox-image');
const galleryImages = document.querySelectorAll('.our-projects_pics-img');
let currentImageIndex = 0;

function toogleSearchInput () {
    if(inputSearch.classList.contains('me-2-visible')) {
        inputSearch.classList.remove('me-2-visible');
        inputSearch.classList.add('me-2-invisible');
        setTimeout(() => {
            
        inputSearch.classList.add('d-none');
        inputSearch.classList.remove('form-control');
        }, 1750);
    } else {
        inputSearch.classList.remove('me-2-invisible');
        inputSearch.classList.remove('d-none');
        inputSearch.classList.add('form-control');
        inputSearch.classList.add('me-2-visible');
    }
}
function checkCollapsed () {
    if (burgerCollapsed) {
        console.log(loop);
        inputSearch.classList.toogle("me-2");  
    }
}
if (mediaQueryXs.matches) {
function showMorePictures () {
    let heightOfGallery = parseFloat(galleryPic.style.height) + 133;
    projectsSection.style.height = heightOfGallery + 'px';
    btnGradientSection.style.display = 'none';
} if (mediaQuery.matches) {
    function showMorePictures () {
        let heightOfGallery = parseFloat(galleryPic.style.height) + 313;
        projectsSection.style.height = heightOfGallery + 'px';
        btnGradientSection.style.display = 'none';
}
}} 
function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
    updateLightboxImage();
}
function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
    updateLightboxImage();
}    
function updateLightboxImage(start = false) {
    if(start) {
        lightboxImage.src = galleryImages[currentImageIndex].src;
    } else {
        lightboxImage.classList.remove('lightbox-content-img')
        setTimeout(() => {
            lightboxImage.src = galleryImages[currentImageIndex].src;
            lightboxImage.classList.add('lightbox-content-img')
        },1000)
    }
}   
function closeLightbox() {
    overlay.style.display = 'none';
    document.body.classList.remove('lightbox-open');
}

loop.addEventListener('click', toogleSearchInput);
checkCollapsed();
btnMorePic.addEventListener('click', showMorePictures);
galleryImages.forEach((image, index) => {
    image.addEventListener('click', () => {
        showMorePictures ();
        currentImageIndex = index;
        updateLightboxImage(true);
        overlay.style.display = 'flex';
        document.body.classList.add('lightbox-open');
        lightboxImage.classList.add('lightbox-content-img')
    });
});    
closeButton.addEventListener('click', closeLightbox);
overlay.addEventListener('click', (event) => {
    if (event.target === overlay) {
        closeLightbox();
    }
}); 
prevButton.addEventListener('click', () => {
    prevImage();
});   
nextButton.addEventListener('click', () => {
    nextImage();
});
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
          closeLightbox();
    }
    if(event.key==='ArrowLeft') {
            prevImage();
    }
    if(event.key==='ArrowRight') {
            nextImage();
    }
});