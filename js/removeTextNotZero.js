const removeTextNotZero = () => {
    let containerP = document.querySelector('.containerPeople__text');
    let messagerNotZero = document.querySelector('.notZero');
    containerP.removeChild(messagerNotZero)

    let containerPeople = document.querySelector('.containerPeople__block');
    containerPeople.className = 'containerPeople__block';
}

export { removeTextNotZero }