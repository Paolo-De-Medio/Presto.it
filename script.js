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
            <div class="card shake card-effect text-center pt-3 my-4">
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

// let adsWrapper = document.querySelector('#adsWrapper');
// if(adsWrapper) {
// function pushAds () {
    
//     annunci.forEach(annuncio => {
//     let adsCard = document.createElement ('div');

//     adsCard.innerHTML = `
//             <div class="col-6">
//                 <div class="card p-3 mt-4" style="max-width: 540px;">
//                     <div class="row g-0">
//                       <div class="col-md-4">
//                         <img src="https://picsum.photos/200" alt="...">
//                       </div>
//                       <div class="col-md-8">
//                         <div class="card-body">
//                           <h5 class="card-title fw-bold ps-3">${annuncio.name}</h5>
//                           <p class="card-text ps-3">${annuncio.price}</p>
//                           <p class="card-text ps-3"><small class="text-muted">${annuncio.category}</small></p>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//             </div>
//     `
//     adsWrapper.appendChild(adsCard)
// })
// }
// }
// pushAds()
