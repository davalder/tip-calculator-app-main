const changeStyleButtonActive = (data) => {
    const getButton = document.querySelector(`.${data}`);
    getButton.className = 'containerTip__grip__button--active';
};

export { changeStyleButtonActive };