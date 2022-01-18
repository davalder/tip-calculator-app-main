import { addTextNotZero } from "./addTextNotZero.js";
import { changeStyleButtonActive } from "./changeStyleButtonActive.js";
import { changeStyleButtonInactive } from "./changeStyleButtonInactive.js";
import { removeTextNotZero } from "./removeTextNotZero.js";
import { resetAll } from "./resetAll.js";
import { tipAmountPerson } from "./tipAmountPerson.js";
import { totalPerson } from "./totalPerson.js";


const getTipPercentage = document.querySelector('.containerTip__grip');
getTipPercentage.addEventListener('click', (event) => {

    const getCuston = document.querySelector('#input_custon');
    getCuston.value = null;

    const getTotalPerson = document.querySelector('#people');
    const numberPeople = parseInt(getTotalPerson.value);

    if ((event.target.nodeName === 'BUTTON') && !!numberPeople) {

        if (!!document.querySelector('.containerTip__grip__button--active')) {
            changeStyleButtonInactive();
        }

        console.log(event.target.className);

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
        console.log('no hay quien pague')

        if (!document.querySelector('.notZero')) {

            addTextNotZero()
        }
    }
});

getTipPercentage.addEventListener('keyup', (event) => {

    if (!!document.querySelector('.containerTip__grip__button--active')) {
        changeStyleButtonInactive();
    }

    const getTotalPerson = document.querySelector('#people');
    const numberPeople = parseInt(getTotalPerson.value);

    if ((event.target.nodeName === 'INPUT') && !!numberPeople) {
        console.log(parseFloat(event.target.value));

        if (document.querySelector('.notZero')) {
            removeTextNotZero();
        }

        let percentage = event.target.value;

        let tipPerson = parseFloat(tipAmountPerson(percentage).toFixed(2));

        let total = totalPerson(tipPerson).toFixed(2);
        console.log(total);

        const getTipAmountPerson = document.querySelector('#tipAmountPerson');
        getTipAmountPerson.value = tipPerson;

        const getTotal = document.querySelector('#total');
        getTotal.value = total;

    } else if (!numberPeople) {
        console.log('no hay quien pague')

        if (!document.querySelector('.notZero')) {

            addTextNotZero()
        }
    }
});


const getReset = document.querySelector('.containerResult__button');
getReset.addEventListener('click', () => {
    resetAll();
    if (document.querySelector('.notZero')) {
        removeTextNotZero();
    };

    if (!!document.querySelector('.containerTip__grip__button--active')) {
        changeStyleButtonInactive();
    }
})

