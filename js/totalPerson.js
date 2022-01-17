const totalPerson = (tipPerson) => {
    let getBill = document.querySelector('#bill');
    let bill = parseFloat(getBill.value);

    let getTotalPerson = document.querySelector('#people');
    let numberPeople = parseInt(getTotalPerson.value);

    let totalPerson = (bill / numberPeople) + tipPerson;

    return totalPerson;

}

export { totalPerson };