function pushCategories () {
    let categories = [
        {cat: 'Veicoli' , icon: '<i class="fas fa-car display-5 tc-main"></i>'},
        {cat: 'Abitazioni' , icon: '<i class="fas fa-home display-5 tc-main"></i>'},
        {cat: 'Moda' , icon: '<i class="fas fa-tshirt display-5 tc-main"></i>'},
        {cat: 'Elettronica' , icon: '<i class="fas fa-laptop display-5 tc-main"></i>'},
        {cat: 'Telefonia' , icon: '<i class="fas fa-mobile-alt display-5 tc-main"></i>'},
        {cat: 'Videogames' , icon: '<i class="fas fa-gamepad display-5 tc-main"></i>'},
    ]
    console.log(categories)

    let categoryWrapper = document.querySelector('#catWrapper');

    categories.forEach(category => {
        console.log(category)
        let card = document.createElement ('div');
        card.classList.add('col-12' , 'col-md-4');

        card.innerHTML = `
            <div class="card text-center pt-3 my-4">
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

pushCategories()

let btnMenu = document.querySelector('#menu-btn');
btnMenu.addEventListener('click' , () => {
    let menuIcon = document.querySelector('#menu-icon')
    menuIcon.classList.toggle('nav-effect')
})