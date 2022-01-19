const resetAll = () => {
    let zero = 0;

    let getBill = document.querySelector('#bill');
    getBill.value = null;

    const getCuston = document.querySelector('#input_custon');
    getCuston.value = null;

    let getTotalPerson = document.querySelector('#people');
    getTotalPerson.value = null;

    const getTipAmountPerson = document.querySelector('#tipAmountPerson');
    getTipAmountPerson.value = zero.toFixed(2);

    const getTotal = document.querySelector('#total');
    getTotal.value = zero.toFixed(2);

    const getReset = document.querySelector('.containerResult__button');
    getReset.className ='containerResult__button containerResult__button--inactive';
}

export { resetAll }