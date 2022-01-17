const addTextNotZero = () => {
    let messagerNotZero = document.createElement('p');
    messagerNotZero.className = 'notZero'
    messagerNotZero.textContent = 'Can´t be zero'
    let containerP = document.querySelector('.containerPeople__text');

    let containerPeople = document.querySelector('.containerPeople__block');
    containerPeople.className = 'containerPeople__block containerPeople__block--notZero'

    containerP.appendChild(messagerNotZero);
}

export { addTextNotZero }