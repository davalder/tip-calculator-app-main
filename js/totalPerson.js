const totalPerson = (tipPerson) => {
    let getBill = document.querySelector('#bill');
    let bill = getBill.value ? parseFloat(getBill.value) : 0.00;

    let getTotalPerson = document.querySelector('#people');
    let numberPeople = parseInt(getTotalPerson.value);

    let totalPerson = (bill / numberPeople) + tipPerson;

    return totalPerson;

}

export { totalPerson };