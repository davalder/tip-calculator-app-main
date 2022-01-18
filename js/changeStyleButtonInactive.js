const changeStyleButtonInactive = () => {
    const getButton = document.querySelector(`.containerTip__grip__button--active`);

    getButton.className = !document.querySelector('.containerTip__grip__button5') ? 'containerTip__grip__button5'
        : !document.querySelector('.containerTip__grip__button10') ? 'containerTip__grip__button10'
        : !document.querySelector('.containerTip__grip__button15') ? 'containerTip__grip__button15'
        : !document.querySelector('.containerTip__grip__button25') ? 'containerTip__grip__button25'
        : 'containerTip__grip__button50';
}

export { changeStyleButtonInactive };