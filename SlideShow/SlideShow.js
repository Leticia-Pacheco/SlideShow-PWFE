'use strict';

const images = [
    { 'id': '1', 'url': './imagens/detona_ralph01.jpg' },
    { 'id': '2', 'url': './imagens/detona_ralph02.jpg' },
    { 'id': '3', 'url': './imagens/detona_ralph03.jpg' },
    { 'id': '4', 'url': './imagens/detona_ralph04.jpg' },
    { 'id': '5', 'url': './imagens/detona_ralph05.jpg' },
    { 'id': '6', 'url': './imagens/detona_ralph06.jpg' },
]

const containerItems = document.querySelector('#container-items');


const loadImages = (images, container) => {
    images.forEach ( image => {
        container.innerHTML += `
            <div class='item'>
                <img src='${image.url}'
            </div>
        `
    })
}

loadImages(images, containerItems);

let items = document.querySelectorAll('.item');

const previous = () => {
    containerItems.appendChild(items[0]);
    items = document.querySelectorAll('.item');
}

const next = () => {
    const lastItem = items[items.length - 1];
    containerItems.insertBefore(lastItem, items[0]);
    items = document.querySelectorAll('.item');
}

document.querySelector('#previous').addEventListener('click', previous);
document.querySelector('#next').addEventListener('click', next);