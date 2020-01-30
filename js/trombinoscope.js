const noms = ["alexis", "eloise", "gautier", "julien", "mehdi", "nadège", "pierre", "riad", "sibel", "thomas", "ugo", "willy", "zakaria"];

const allCards = document.getElementsByClassName('card')
const nameImage = document.querySelectorAll('.name-image')

const profileName = document.querySelector('#profile-name')
const profileImage = document.querySelector('#profile-image')
const listItem = document.querySelectorAll('.item')
const profileContainer = document.querySelector('#profile-watching')

profileContainer.addEventListener('click', () => {
    profileContainer.style.display = "none"
})

for (let i = 0; i < allCards.length; i++) {
    const funModeElement = document.createElement('div') // Création de l'élément funMode
    funModeElement.className = 'fun-mode'
    indexNom = noms.indexOf(allCards[i].id)

    funModeElement.style.background = `url('assets/images/photos_fun/${noms[indexNom] + ' fun'}.jpg')` 
    funModeElement.style.backgroundSize = `cover` 

    nameImage[i].appendChild(funModeElement)
}

for (let a = 0; a < allCards.length; a++) {
    const CARD = document.querySelectorAll('.card')[a].id.toString()

    allCards[a].addEventListener('click', () => {

        profileContainer.style.display = "flex"
        profileName.innerHTML = document.querySelectorAll('.name')[a].innerHTML

        for (let i = 0; i < 3; i++) {
            console.log(experience[CARD][i])
            if (experience[CARD][i] !== undefined) {
                listItem[i].innerHTML = "- " + experience[CARD][i]
            }
        }
        for (let i = 0; i < 3; i++) {
            if (formations[CARD][i] !== undefined) {
                listItem[i+3].innerHTML = "- " + formations[CARD][i]
            }
        }

        profileImage.style.background = `url('${photos[CARD]}')`
        profileImage.style.backgroundSize = 'cover'
        profileImage.style.backgroundPosition = 'center'
    })
}

const formations = {
    julien: ["BTS, Informatique et Réseau pour les industries et les Services", "Développeur Web PHP/Symfony - WildCodeSchool"],
    alexis: ["Pas d'information"],
    eloise: ["Pas d'information"],
    gautier: ["Pas d'information"],
    mehdi: ["Pas d'information"],
    nadège: ["Pas d'information"],
    pierre: ["Pas d'information"],
    riad: ["Pas d'information"],
    sibel: ["Pas d'information"],
    thomas: ["Pas d'information"],
    ugo: ["Pas d'information"],
    willy: ["Pas d'information"],
    zakaria: ["Pas d'information"],
}

const experience = {
    julien: ["Opérateur Numérique", "Projet I/O"],
    alexis: ["Licence Mathématiques Informatique"],
    eloise: ["Commercial"],
    gautier: ["Licence Réseau Télécom (spécialité dev mobile)"],
    mehdi: ["Ingénieur PAO"],
    nadège: ["Responsable Qualité"],
    pierre: ["Commercial Immobilier"],
    riad: ["Commercial Automobile"],
    sibel: ["BTS SIO"],
    thomas: ["Bac Professionnel Gestion Administration"],
    ugo: ["Intégrateur Web"],
    willy: ["BTS Véhicule Industriel"],
    zakaria: ["Faculté Psychologie Tours"],
}

const photos = {
    julien: "assets/Photos pro/Julien pro.jpg",
    alexis: "assets/Photos pro/Alexis pro.jpg",
    eloise: "assets/Photos pro/Elo pro.jpg",
    gautier: "assets/Photos pro/Gautier pro.jpg",
    mehdi: "assets/Photos pro/Mehdi pro.jpg",
    nadège: "assets/Photos pro/Nadège pro.jpg",
    pierre: "assets/Photos pro/Pierre pro.jpg",
    riad: "assets/Photos pro/Riad pro.jpg",
    sibel: "assets/Photos pro/Sibel pro.jpg",
    thomas: "assets/Photos pro/Thomas pro.jpg",
    ugo: "assets/Photos pro/Ugo pro.jpg",
    willy: "assets/Photos pro/Willy pro.jpg",
    zakaria: "assets/Photos pro/Zak pro.jpg",
}

const nav_principal = document.querySelector('#principal');
const nav_formation = document.querySelector('#formation');
const img_burger = document.querySelector('#burger');
const deroulant_nav = document.querySelector('.dropdown-child');
const drop2 = document.querySelector('#drop2')
const logo_nav = document.querySelector('.logo_nav')
const menu = document.querySelector('.menu')
let select = false;


img_burger.addEventListener('click', () => {
        drop2.style.transform = ('scaleY(1)');
        drop2.style.opacity = ('1')
        deroulant_nav.style.transform = ('scaleY(1)');
        deroulant_nav.style.opacity = ('1')
        nav_formation.style.display = ('block');
        nav_principal.style.display = ('block');
        logo_nav.style.display = ('none');
        img_burger.style.backgroundImage = (`url("assets/images/croix.png")`);
        img_burger.style.marginTop = ('0px')
        nav_formation.style.marginTop = ('55px')
        nav_principal.style.marginTop = ('55px')
        menu.style.paddingBottom = ('190px')
        select = !select;

        if (!select) {
            drop2.style.transform = ('scaleY(0)');
            drop2.style.opacity = ('0')
            deroulant_nav.style.transform = ('scaleY(0)');
            deroulant_nav.style.opacity = ('0')
            nav_formation.style.display = ('none');
            nav_principal.style.display = ('none');
            logo_nav.style.display = ('block');
            img_burger.style.backgroundImage = (`url("assets/images/icon_burger.png")`);
            img_burger.style.marginTop = ('40px')
            menu.style.paddingBottom = ('50px')
        }
    })
    