const flecheDroiteElement = document.querySelector('.arrow_right');
const flecheGaucheElement = document.querySelector('.arrow_left')
const imagePrincipaleBanniere = document.querySelector('.banner-img');
const paragrapheBanniere = document.querySelector('#banner p')
const conteneurDots = document.querySelector('.dots')

let index = 0;

const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// slides.length = nombre d'élements dans le tableau
// slides.length -1 = valeur maximum de l'index du tableau
// element.classList.add('nomDeTaClassCSS') rajout classe css

slides.forEach((slide, indexForEach) => {
	const pastilleElement = document.createElement('span');
	pastilleElement.classList.add('dot')

	if (indexForEach === index) {
		pastilleElement.classList.add('dot_selected')
	}

	conteneurDots.appendChild(pastilleElement)
})

const changerCssPastille = () => {
	const toutesLesPastilles = document.querySelectorAll('.dot');
	toutesLesPastilles.forEach((pastille, indexPastille) => {
		pastille.classList.remove('dot_selected');
		if (indexPastille === index) {
			pastille.classList.add('dot_selected')
		}
	})
}

flecheGaucheElement.addEventListener('click', () => {
	index = index - 1;
	if (index < 0) {
		index = slides.length - 1;
	}
	imagePrincipaleBanniere.src = "./assets/images/slideshow/" + slides[index].image;
	paragrapheBanniere.innerHTML = slides[index].tagLine;
	changerCssPastille()
})


flecheDroiteElement.addEventListener('click', () => {
	index = index + 1;
	if (index > slides.length - 1) {
		index = 0
	}
	imagePrincipaleBanniere.src = "./assets/images/slideshow/" + slides[index].image;
	paragrapheBanniere.innerHTML = slides[index].tagLine;
	changerCssPastille()
})
