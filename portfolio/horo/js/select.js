const select = document.querySelector('.select');
const selectText = document.querySelector('.select_text');
const selectValue = document.querySelector('.select_value');
const selectDropdown = document.querySelector('.select_dropdown');

selectDropdown.addEventListener('click', e => {
    const option = e.target.closest('.select_option');
    if (option) {
        selectText.textContent = option.textContent;
        selectValue.value = option.textContent;
        e.target.closest('.select').blur();
    }
})