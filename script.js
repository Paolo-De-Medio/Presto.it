let categoryWrapper = document.querySelector('#catWrapper');

function pushCategories () {
    let categories = [
        {cat: 'Veicoli' , icon: '<i class="fas fa-car display-5 tc-main"></i>'},
        {cat: 'Abitazioni' , icon: '<i class="fas fa-home display-5 tc-main"></i>'},
        {cat: 'Moda' , icon: '<i class="fas fa-tshirt display-5 tc-main"></i>'},
        {cat: 'Elettronica' , icon: '<i class="fas fa-laptop display-5 tc-main"></i>'},
        {cat: 'Telefonia' , icon: '<i class="fas fa-mobile-alt display-5 tc-main"></i>'},
        {cat: 'Videogames' , icon: '<i class="fas fa-gamepad display-5 tc-main"></i>'},
    ]

    if(categoryWrapper){

    categories.forEach(category => {
        let card = document.createElement ('div');
        card.classList.add('col-12' , 'col-md-4');

        card.innerHTML = `
            <div class="card-custom text-center pt-3 my-4">
            ${category.icon}
                <div class="card-body">
                    <h5 class="card-title tc-main">${category.cat}</h5>
                    <a href="#" class="btn btn-color">Scopri di più</a>
                </div>
            </div>
        `
        categoryWrapper.appendChild(card)

    })
}
}

pushCategories()

let btnMenu = document.querySelector('#menu-btn');
btnMenu.addEventListener('click' , () => {
    let menuIcon = document.querySelector('#menu-icon')
    menuIcon.classList.toggle('nav-effect')
})

let ultimiAnnunci = document.querySelector('.lastAds')

            function AggiungiAnnuncio (){
                
                let annunci = [
                 {titolo:"Suzuki Alto" , descrizione:'Lorem Ipsum', prezzo:'1200€' },
                 {titolo:"Chuwi Corebook X" , descrizione:'Lorem Ipsum', prezzo:'300€' },
                 {titolo:"Diablo III" , descrizione:'Lorem Ipsum', prezzo:'30€' },  
                 {titolo:"Programmare" , descrizione:'Lorem Ipsum', prezzo:'15€' },  
                 {titolo:"Scarpiera" , descrizione:'Lorem Ipsum', prezzo:'20€' },  
                 {titolo:"Sandor 3x" , descrizione:'Lorem Ipsum', prezzo:'4000€' },  
                 {titolo:"Villa a schiera" , descrizione:'Lorem Ipsum', prezzo:'200000€' },  
                 {titolo:"Drone 230kg" , descrizione:' Lorem Ipsum', prezzo:'700€' } 
                ] 
                annunci.forEach(annuncio  =>{
                    let card= document.createElement('div')

                    card.innerHTML=
                    `
                    <div class=" vertical-center card bg-dark text-white mx-2">
                        <img class="card-img img-fluid" src="https://picsum.photos/600" alt="Card image">
                        <div class="col-12 card-img-overlay ad-card-overlay text-center">
                            <h5 class=" mt-5 card-title tc-accent fw-bold fs-4">${annuncio.titolo}</h5>
                            <p class="card-text">${annuncio.descrizione}</p>
                            <p class="card-text">${annuncio.prezzo}</p>
                            <button class="mt-2 text-center mb-2 btn btn-color ">Vai all'annuncio</button>
                            <div class="row justify-content-between ">
                            <i class="far fa-heart mt-3 fs-3 tc-accent heart-like"></i>
                                <div class="col-12 position-absolute start-0">
                                
                                    
                                </div>
                                <div class="col-3 position-absolute end-0 btn-bottom-1"></div>
                            </div>
                        </div>
                    </div>
                    `

                ultimiAnnunci.appendChild(card)

                })
            } 
           if (ultimiAnnunci){
               AggiungiAnnuncio()
           }

           //Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}



// ESERCIZIO P/CECILIA JS

let users = [
    {name: 'xxx' , surname: 'xxx' , photo: 'xxx'},
    {name: 'Davide' , surname: 'Cariola' , photo: './media/davide-user'},
    {name: 'Cecilia' , surname: 'Rocchi' , photo: './media/cecilia-user'},
    {name: 'Paolo' , surname: 'de Medio' , photo: './media/paolo-user'},
    {name: 'Igor' , surname: 'Oliynyk' , photo: './media/igor-user'},
]
let random = Math.floor(Math.random() * 4) + 1;
console.log(random)


// SIDEBAR SCROLL

// $(function() {

//     let $sidebar   = $("#sidebar"), 
//         $window    = $(window),
//         offset     = $sidebar.offset(),
//         topPadding = 15;

//     $window.scroll(function() {
//         if ($window.scrollTop() > offset.top) {
//             $sidebar.stop().animate({
//                 marginTop: $window.scrollTop() - offset.top + topPadding
//             });
//         } else {
//             $sidebar.stop().animate({
//                 marginTop: 0
//             });
//         }
//     });
    
// });