import 'owl.carousel/dist/assets/owl.carousel.css';
import $ from 'jquery';
import 'owl.carousel/dist/owl.carousel.js';

$(document).ready( () => {
    $('.header').on('click', () => {
        $('.header').toggleClass('redBackground');
    })
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })
})