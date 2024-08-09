const chaveApiNasa = 'CTuV3tr10iM4m2y2duwDjRE72n9abY4wrL8z2ebt';

async function buscarImagemDoDia() {
    try {
        const resposta = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${chaveApiNasa}`);
        if (!resposta.ok) {
            throw new Error('Erro ao buscar dados da NASA: ' + resposta.statusText);
        }
        const dados = await resposta.json();

        document.getElementById('titulo').textContent = dados.title;
        document.getElementById('imagem').src = dados.url;
        document.getElementById('descricao').textContent = dados.explanation;
    } catch (erro) {
        console.error('Erro:', erro);
        document.getElementById('info').innerHTML = `<p>${erro.message}</p>`;
    }
}

buscarImagemDoDia();