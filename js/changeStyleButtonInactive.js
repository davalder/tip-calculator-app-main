const changeStyleButtonInactive = () => {

    if (document.querySelector(`.containerTip__grip__button--active`)) {
        const getButton = document.querySelector(`.containerTip__grip__button--active`);

        getButton.className = !document.querySelector('.containerTip__grip__button5') ? 'containerTip__grip__button5'
            : !document.querySelector('.containerTip__grip__button10') ? 'containerTip__grip__button10'
                : !document.querySelector('.containerTip__grip__button15') ? 'containerTip__grip__button15'
                    : !document.querySelector('.containerTip__grip__button25') ? 'containerTip__grip__button25'
                        : 'containerTip__grip__button50';

    }

    const newLocal = document.querySelector('.containerResult__button--inactive');
    if (newLocal) {
        const getReset = document.querySelector('.containerResult__button--inactive');
        getReset.className = 'containerResult__button';
    }

}

export { changeStyleButtonInactive };