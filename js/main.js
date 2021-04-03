const labels = document.querySelectorAll('.form__content__box--input label');

labels.forEach(label => {
    label.innerHTML = label.innerHTML
        .split('')
        .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
        .join('');
});