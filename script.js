const mainContent = document.querySelector('.main__content');
const redakcja = document.querySelector('#redakcja');

const contentInside = "My jesteśmy redakcją tej stronki i nikomu nic do tego";

const changeContent = () => {
    mainContent.innerHTML = contentInside;
    mainContent.append;
}

redakcja.addEventListener('click', changeContent)