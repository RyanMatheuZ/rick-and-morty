document.getElementById('btn-search').addEventListener('click', event => {
    event.preventDefault();

    const search = document.getElementById('input-number');

    const image = document.getElementById('image');
    const name = document.getElementById('name');
    const gender = document.getElementById('gender');
    const origin = document.getElementById('origin');

    if (!search.value || search.value < 1 || search.value > 671) {
        search.style.boxShadow = '0 0 0.5px 2px #F24D4D';
        search.style.caretColor = '#F24D4D';
        search.focus();

        return;
    }

    fetch(`https://rickandmortyapi.com/api/character/${search.value}`)
    .then(response => response.json())
    .then(json => {
        image.setAttribute('src', json.image);
        name.innerHTML = json.name;
        gender.innerHTML = json.gender;
        origin.innerHTML = json.origin.name;

        search.value = '';
        search.style.caretColor = '#062931';
        search.style.boxShadow = '';
    });
});