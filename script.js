// Funzione per l'invio del modulo
function submitForm() {
    // Ottieni i valori inseriti nel modulo
    var name = document.getElementById("name").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;

    // Mostra un messaggio di conferma
    alert("Grazie per il tuo messaggio, " + name + "!");
}

// Funzioni per lo slideshow dei diversi servizi

// Slideshow Interni
let slideIndexInterni = 0;
showSlidesInterni();

function showSlidesInterni() {
    let slides = document.getElementsByClassName("mySlidesInterni");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndexInterni++;
    if (slideIndexInterni > slides.length) {
        slideIndexInterni = 1;
    }
    slides[slideIndexInterni - 1].style.display = "block";
    setTimeout(showSlidesInterni, 2000); // Cambia immagine ogni 2 secondi
}

// Slideshow Esterni
let slideIndexEsterni = 0;
showSlidesEsterni();

function showSlidesEsterni() {
    let slides = document.getElementsByClassName("mySlidesEsterni");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndexEsterni++;
    if (slideIndexEsterni > slides.length) {
        slideIndexEsterni = 1;
    }
    slides[slideIndexEsterni - 1].style.display = "block";
    setTimeout(showSlidesEsterni, 2000); // Cambia immagine ogni 2 secondi
}

// Slideshow Muri
let slideIndexMuri = 0;
showSlidesMuri();

function showSlidesMuri() {
    let slides = document.getElementsByClassName("mySlidesMuri");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndexMuri++;
    if (slideIndexMuri > slides.length) {
        slideIndexMuri = 1;
    }
    slides[slideIndexMuri - 1].style.display = "block";
    setTimeout(showSlidesMuri, 2000); // Cambia immagine ogni 2 secondi
}

// Slideshow Tetti
let slideIndexTetti = 0;
showSlidesTetti();

function showSlidesTetti() {
    let slides = document.getElementsByClassName("mySlidesTetti");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndexTetti++;
    if (slideIndexTetti > slides.length) {
        slideIndexTetti = 1;
    }
    slides[slideIndexTetti - 1].style.display = "block";
    setTimeout(showSlidesTetti, 2000); // Cambia immagine ogni 2 secondi
}

// Slideshow Carpenteria
let slideIndexCarpenteria = 0;
showSlidesCarpenteria();

function showSlidesCarpenteria() {
    let slides = document.getElementsByClassName("mySlidesCarpenteria");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndexCarpenteria++;
    if (slideIndexCarpenteria > slides.length) {
        slideIndexCarpenteria = 1;
    }
    slides[slideIndexCarpenteria - 1].style.display = "block";
    setTimeout(showSlidesCarpenteria, 2000); // Cambia immagine ogni 2 secondi
}

// Funzione per l'accettazione dei cookie
function acceptCookies() {
    document.getElementById('cookie-consent').style.display = 'none';
    // Altre azioni da eseguire dopo l'accettazione dei cookie, se necessario
}
