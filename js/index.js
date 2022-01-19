import { addTextNotZero } from "./addTextNotZero.js";
import { changeStyleButtonActive } from "./changeStyleButtonActive.js";
import { changeStyleButtonInactive } from "./changeStyleButtonInactive.js";
import { removeTextNotZero } from "./removeTextNotZero.js";
import { resetAll } from "./resetAll.js";
import { tipAmountPerson } from "./tipAmountPerson.js";
import { totalPerson } from "./totalPerson.js";

resetAll();

const getTipPercentage = document.querySelector('.containerTip__grip');
getTipPercentage.addEventListener('click', (event) => {

    const getCuston = document.querySelector('#input_custon');
    getCuston.value = null;

    const getTotalPerson = document.querySelector('#people');
    const numberPeople = parseInt(getTotalPerson.value);

    if ((event.target.nodeName === 'BUTTON') && !!numberPeople) {

        changeStyleButtonInactive();

        if (document.querySelector('.notZero')) {
            removeTextNotZero();
        }

        let percentage = event.target.value;

        let tipPerson = tipAmountPerson(percentage);
        let total = totalPerson(tipPerson);

        const getTipAmountPerson = document.querySelector('#tipAmountPerson');
        getTipAmountPerson.value = tipPerson.toFixed(2);

        const getTotal = document.querySelector('#total');
        getTotal.value = total.toFixed(2);

        changeStyleButtonActive(event.target.className);

    } else if (!numberPeople){
        if (!document.querySelector('.notZero')) {
            addTextNotZero()
        }
    }
});

getTipPercentage.addEventListener('keyup', (event) => {

    changeStyleButtonInactive();

    const getTotalPerson = document.querySelector('#people');
    const numberPeople = parseInt(getTotalPerson.value);

    if ((event.target.nodeName === 'INPUT') && !!numberPeople) {

        removeTextNotZero();

        let percentage = event.target.value;

        let tipPerson = parseFloat(tipAmountPerson(percentage).toFixed(2));

        let total = totalPerson(tipPerson).toFixed(2);

        const getTipAmountPerson = document.querySelector('#tipAmountPerson');
        getTipAmountPerson.value = tipPerson;

        const getTotal = document.querySelector('#total');
        getTotal.value = total;

    } else if (!numberPeople) {
        if (!document.querySelector('.notZero')) {
            addTextNotZero()
        }
    }
});


const getReset = document.querySelector('.containerResult__button');
getReset.addEventListener('click', () => {

    removeTextNotZero();

    changeStyleButtonInactive();

    resetAll();
})


let getBill = document.querySelector('#bill');
getBill.addEventListener('keyup', () => {
    let zero = 0;

    changeStyleButtonInactive();

    const getCuston = document.querySelector('#input_custon');
    getCuston.value = null;

    const getTipAmountPerson = document.querySelector('#tipAmountPerson');
    getTipAmountPerson.value = zero.toFixed(2);

    const getTotal = document.querySelector('#total');
    getTotal.value = zero.toFixed(2);
})

let getTotalPerson = document.querySelector('#people');
getTotalPerson.addEventListener('keyup', () => {
    let zero = 0;

    changeStyleButtonInactive();
    removeTextNotZero();

    const getCuston = document.querySelector('#input_custon');
    getCuston.value = null;

    const getTipAmountPerson = document.querySelector('#tipAmountPerson');
    getTipAmountPerson.value = zero.toFixed(2);

    const getTotal = document.querySelector('#total');
    getTotal.value = zero.toFixed(2);
})
