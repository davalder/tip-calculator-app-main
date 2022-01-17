import { tipAmountPerson } from "./tipAmountPerson.js";
import { totalPerson } from "./totalPerson.js";


const getTipPercentage = document.querySelector('.containerTip__grip');
getTipPercentage.addEventListener('click', (event) => {

    const getTotalPerson = document.querySelector('#people');
    const numberPeople = parseInt(getTotalPerson.value);

    if ((event.target.nodeName === 'BUTTON') && !!numberPeople) {

        let percentage = event.target.value;

        let tipPerson = parseFloat(tipAmountPerson(percentage).toFixed(2));

        let total = totalPerson(tipPerson).toFixed(2);
        console.log(total);

        const getTipAmountPerson = document.querySelector('#tipAmountPerson');
        getTipAmountPerson.value = tipPerson;

        const getTotal = document.querySelector('#total');
        getTotal.value = total;

    } else if (!numberPeople){
        console.log('no hay quien pague')
    }
});

getTipPercentage.addEventListener('keyup', (event) => {

    const getTotalPerson = document.querySelector('#people');
    const numberPeople = parseInt(getTotalPerson.value);

    if ((event.target.nodeName === 'INPUT') && !!numberPeople) {
        console.log(parseFloat(event.target.value));

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
    }
});


