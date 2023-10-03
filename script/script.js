const firstFourImages = document.getElementsByClassName("article_four > .card");
const firstFourImagesArray = Array.from(firstFourImages);

firstFourImagesArray.forEach((image, i) => {
	image[i].addEventListener("click", (e) => {
		firstFourImagesArray[i].classList.toggle("invisible");
	});
});
