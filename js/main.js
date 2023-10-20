const primeiroCarousel = document.querySelector(".primeiro-carousel-container .carousel");
const primeiroCards = document.querySelectorAll(".primeiro-carousel-container .primeiro-card");
const primeiroPrevButton = document.querySelector(".primeiro-carousel-container .prev");
const primeiroNextButton = document.querySelector(".primeiro-carousel-container .next");
const primeiroPagination = document.querySelector(".primeiro-carousel-container .pagination");

let primeiroCurrentIndex = 0;

function showPrimeiroCards(index) {
    const startPosition = -index * 33.33;
    primeiroCarousel.style.transform = `translateX(${startPosition}%)`;

    // Atualiza os indicadores de página
    const dots = document.querySelectorAll(".primeiro-carousel-container .dot");
    dots.forEach((dot, i) => {
        dot.classList.remove("active");
        if (i === index) {
            dot.classList.add("active");
        }
    });
}

function nextPrimeiroSlide() {
    primeiroCurrentIndex = (primeiroCurrentIndex + 1) % Math.min(primeiroCards.length - 2, primeiroCards.length - 1);
    showPrimeiroCards(primeiroCurrentIndex);
}

function prevPrimeiroSlide() {
    primeiroCurrentIndex = (primeiroCurrentIndex - 1 + Math.min(primeiroCards.length - 2, primeiroCards.length - 1)) % Math.min(primeiroCards.length - 2, primeiroCards.length - 1);
    showPrimeiroCards(primeiroCurrentIndex);
}

// Inicializa o primeiro carrossel
showPrimeiroCards(primeiroCurrentIndex);

primeiroPrevButton.addEventListener("click", prevPrimeiroSlide);
primeiroNextButton.addEventListener("click", nextPrimeiroSlide);

// Função para atualizar os dots do primeiro carrossel
function updatePrimeiroDots() {
    const numDots = primeiroCards.length - 2;

    // Limpa os dots existentes
    primeiroPagination.innerHTML = '';

    // Cria os indicadores de página com base no número de dots
    for (let i = 0; i < numDots; i++) {
        const dot = document.createElement("div");
        dot.classList.add("dot");
        if (i === primeiroCurrentIndex) {
            dot.classList.add("active");
        }
        dot.addEventListener("click", () => {
            primeiroCurrentIndex = i;
            showPrimeiroCards(primeiroCurrentIndex);
        });
        primeiroPagination.appendChild(dot);
    }
}

// Inicializa os dots do primeiro carrossel
updatePrimeiroDots();

function initializeCarousel(containerClass) {
    const carouselContainer = document.querySelector(`.${containerClass}`);
    const carousel = carouselContainer.querySelector(".carousel");
    const cards = carouselContainer.querySelectorAll(".segundo-card");
    const prevButton = carouselContainer.querySelector(".prev");
    const nextButton = carouselContainer.querySelector(".next");
    const pagination = carouselContainer.querySelector(".pagination");

    let currentIndex = 0;

    function showCards(index) {
        const startPosition = -index * 33.33;
        carousel.style.transform = `translateX(${startPosition}%)`;

        // Atualiza os indicadores de página
        const dots = carouselContainer.querySelectorAll(".dot");
        dots.forEach((dot, i) => {
            dot.classList.remove("active");
            if (i === index) {
                dot.classList.add("active");
            }
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % Math.min(cards.length - 2, cards.length - 1);
        showCards(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + Math.min(cards.length - 2, cards.length - 1)) % Math.min(cards.length - 2, cards.length - 1);
        showCards(currentIndex);
    }

    // Atualiza o número de dots com base na quantidade de cards
    function updateDots() {
        const numDots = cards.length - 2;

        // Limpa os dots existentes
        pagination.innerHTML = '';

        // Cria os indicadores de página com base no número de dots
        for (let i = 0; i < numDots; i++) {
            const dot = document.createElement("div");
            dot.classList.add("dot");
            if (i === currentIndex) {
                dot.classList.add("active");
            }
            dot.addEventListener("click", () => {
                currentIndex = i;
                showCards(currentIndex);
            });
            pagination.appendChild(dot);
        }
    }

    // Inicializa o carrossel e os dots
    showCards(currentIndex);
    updateDots();

    prevButton.addEventListener("click", prevSlide);
    nextButton.addEventListener("click", nextSlide);
}

// Inicializa o primeiro carrossel
initializeCarousel("segundo-carousel-container");

// Inicializa o segundo carrossel
initializeCarousel("outro-carousel-container");
