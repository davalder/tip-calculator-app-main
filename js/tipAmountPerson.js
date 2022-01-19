const tipAmountPerson = (percentage) => {

    let getBill = document.querySelector('#bill');
    let bill = getBill.value ? parseFloat(getBill.value) : 0.00 ;

    let getTotalPerson = document.querySelector('#people');
    let numberPeople = parseInt(getTotalPerson.value);

    let tip = bill * (percentage / 100);
    let tipPerson = tip / numberPeople;

    return tipPerson;
}

export { tipAmountPerson }