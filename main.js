let facilitiesLinks = document.querySelectorAll('.facilitiesLink');
let imgContainer = document.querySelector('.imgFacilities');

let facilitiesImg = {
    parking : "./img/paarkinggs.avif",
    comfortable : "./img/comfortable.avif",
    caffe : './img/coffee.avif',
    child : './img/childreenspace.avif',
    outdor : './img/outdoorSpaaaace.avif',
}

for(let i=0; i<facilitiesLinks.length; i++){
    facilitiesLinks[i].addEventListener('click', function(){
        for(let i=0; i<facilitiesLinks.length; i++){
            facilitiesLinks[i].classList.remove('facilityActive');
            while (imgContainer.firstChild) {
                imgContainer.removeChild(imgContainer.firstChild);
            }
        }
        facilitiesLinks[i].classList.add('facilityActive');

        for(let key in facilitiesImg){
            if(key == facilitiesLinks[i].getAttribute('value')){
                let img = document.createElement('img');
                img.setAttribute('class', 'w-100');
                img.setAttribute('src', `${facilitiesImg[key]}`);
                imgContainer.appendChild(img);
            }
        }
    })
}
