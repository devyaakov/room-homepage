import './style.scss'

import img1 from './images/desktop-image-hero-1.jpg'
import img2 from './images/desktop-image-hero-2.jpg'
import img3 from './images/desktop-image-hero-3.jpg'


(function () {
    let slideActive = 1;
    let num = 0;

    function preview(){
        let current = document.querySelector(`#slide${slideActive}`);
        
        if((slideActive === 1)){
            slideActive=num;
            current.style.display = 'none';
            document.getElementById(`slide${num}`).style.display = '';
            return
        }

        slideActive--;
        let next = document.getElementById(`slide${slideActive}`);
        next.style.display = "";

        current.addEventListener('animationend', ()=>{
            current.style.display='none';
            current.classList.remove("anima-right");
            next.classList.remove("anima-right");
        }, { once: true});

        current.classList.add("anima-right");
        next.classList.add("anima-right");
    }

    function next(){
        let current = document.querySelector(`#slide${slideActive}`);

        if((slideActive === num)){
            slideActive=1;
            current.style.display = "none";
            document.querySelector(".slides .slide").style.display = '';
            return;
        }
        
        slideActive++;
        
        let next = document.getElementById(`slide${slideActive}`);
        next.style.display = "";

        current.addEventListener('animationend', ()=>{
            current.style.display='none';
            current.classList.remove("anima-left");
            next.classList.remove("anima-left");
        }, {once: true});
       
        current.classList.add("anima-left");
        next.classList.add("anima-left");
    }

    function initialize() {

        document.querySelector('.menu-icon').addEventListener('click', ()=>{
            document.querySelector('.menu').classList.toggle('show-menu-option');
            document.querySelector('.background-black').style.display = 'block';
        });

        document.querySelector('.menu-option-icon').addEventListener('click', ()=>{
            document.querySelector('.menu').classList.remove('show-menu-option');
            document.querySelector('.background-black').style.display = 'none';
        });
        // Cargamos las imagens en los div's del slide
        let image1 = document.getElementById("img1")
        image1.src = img1

        let image2 = document.getElementById("img2")
        image2.src = img2

        let image3 = document.getElementById("img3")
        image3.src = img3

        // Obtenemos todos los slides
        let slides = document.querySelectorAll(".slides .slide");
        num = slides.length;

        // Asignamos un ID a cada slide, y ocultandolos por default, excepto el primero
        slides.forEach((value, index)=>{
            value.id = `slide${(index+1)}`;
            if(index > 0)
                value.style.display = 'none';
        });

        // Buscamos todos los botone de preview y next
        let lsNext = document.querySelectorAll('.slide-next');
        let lsPreview = document.querySelectorAll('.slide-preview');

        // Por cada boton next le asignamos el evento click
        lsNext.forEach(n => {
            n.addEventListener('click', () => {
                next();
            });
        });

        // Por cada boton preview le asignamos el evento click
        lsPreview.forEach(n => {
            n.addEventListener('click', () => {
                preview();
            });
        });
    }
    initialize();
})();