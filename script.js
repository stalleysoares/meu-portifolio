const data = [{
        img: './projeto.png',
        titulo: 'Meu Portfólio',
        link: '#'
    },
    {
        img: './projeto.png',
        titulo: 'Meu Portfólio React',
        link: '#'
    }

];

document.getElementById('render-projetos').innerHTML = data.map(item => `
      <div class="glass-panel p-card">
        <img src="${item.img}" alt="${item.titulo}">
        <h3>${item.titulo}</h3>
        <a href="${item.link}">Ver GitHub</a>
      </div>
    `).join('');

const tgl = document.getElementById('theme-toggle');
tgl.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    tgl.innerHTML = document.body.classList.contains('dark') ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
});