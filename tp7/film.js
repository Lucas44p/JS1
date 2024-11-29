const url = 'https://www.omdbapi.com/';
document.getElementById('btnSearch').onclick = async () => {
    const clef = 'efdc2275';
    const film = document.getElementById('film').value;
    const url2 = `${url}?apikey=${clef}&s=${film}&type=series`;

    const response = await fetch(url2);
    const data = await response.json();

    const tbody = document.getElementById('myTbody');
    const template = document.getElementById('templateTr');

    tbody.innerHTML = '';

    data.Search.forEach(item => {
        const newRow = template.content.cloneNode(true);

        newRow.querySelector('td:nth-child(1)').textContent = item.Title;
        newRow.querySelector('td:nth-child(2)').textContent = item.Year; 
        newRow.querySelector('img').setAttribute('src', item.Poster); 
        tbody.appendChild(newRow);
    });
}