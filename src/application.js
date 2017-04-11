import 'owl.carousel/dist/assets/owl.carousel.css';
import $ from 'jquery';
import 'owl.carousel/dist/owl.carousel.js';

$(document).ready( () => {
    $('.header').on('click', () => {
        $('.header').toggleClass('redBackground');
    })
    $('.owl-carousel').owlCarousel()
})