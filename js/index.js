import { addTextNotZero } from "./addTextNotZero.js";
import { removeTextNotZero } from "./removeTextNotZero.js";
import { tipAmountPerson } from "./tipAmountPerson.js";
import { totalPerson } from "./totalPerson.js";


const getTipPercentage = document.querySelector('.containerTip__grip');
getTipPercentage.addEventListener('click', (event) => {

    const getTotalPerson = document.querySelector('#people');
    const numberPeople = parseInt(getTotalPerson.value);

    if ((event.target.nodeName === 'BUTTON') && !!numberPeople) {

        if (document.querySelector('.notZero')) {
            removeTextNotZero();
        }

        let percentage = event.target.value;

        let tipPerson = tipAmountPerson(percentage);
        console.log(tipPerson)

        let total = totalPerson(tipPerson);
        console.log(total);

        const getTipAmountPerson = document.querySelector('#tipAmountPerson');
        getTipAmountPerson.value = tipPerson.toFixed(2);

        const getTotal = document.querySelector('#total');
        getTotal.value = total.toFixed(2);

    } else if (!numberPeople){
        console.log('no hay quien pague')

        if (!document.querySelector('.notZero')) {

            addTextNotZero()
        }
    }
});

getTipPercentage.addEventListener('keyup', (event) => {

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


