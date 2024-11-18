const filmes = [
    "O Poderoso Chefão",
    "Titanic",
    "Vingadores: Ultimato",
    "Interestelar",
    "A Origem",
    "Clube da Luta",
    "O Senhor dos Anéis",
    "Matrix",
    "Pulp Fiction",
    "Gladiador",
    "Harry Potter",
    "A Espera de Um Milagre",
    "Um Sonho de Liberdade",
    "O Grande Gatsby",
    "Oppenheimer",
    "Batman: O Cavaleiro das Trevas",
    "A Lista de Schindler",
    "O Menino do Pijama Listrado", 
    "300",
    "Homem Aranha",
    "Gigantes de Aço",
    "Forest Gump",
    "Náufrago",
    "Star Wars",
    "O Menino que Descobriu o Vento",
    "Crepusculo",
    "Resident Evil",
    "Os Mercenários",
    "Homens de Honra",
    "Transformers",
    "Tropa de Elite",
    "Speed Racer",
    "Alvim e os Esquilos",
    "Os Smurfs",
    "Meu Malvado Favorito",
    "Cidade de Deus",
    "A Mulher do Grito",
    "Alice no País das Maravilhas",
    "Mortal Kombat",
    "Velozes e Furiosos",
    "Esquadrão Suicida",
    "Terremoto: A Falha de San Andreas",
    "O Hobbit",
    "O Segredo dos Animais",
    "Venom",
    "Gran Turismo",
    "Jumanji",
    "Jurassic World",
    "King Richard",
    "O pianista",
    "Barbie: Moda e Magia"
];//array contendo os filmes

const barraPesquisa = document.getElementById("barraPesquisa");//busca a barra de pesquisa do inicio.html
const resultadosEl = document.getElementById("resultados");//busca a lista q vai ser mostrada mais pra frente no codigo(tbm do html)


barraPesquisa.addEventListener("input", () => {//modifica a barra de pesquisa pra ser usada no codigo

    const busca = barraPesquisa.value.toLowerCase();//transforma tudo escrito em minuscula para evitar transtorno
    resultadosEl.innerHTML = ""; // Limpa resultados anteriores

    // Estrutura de repetição para buscar filmes
    let encontrou = false;
    for (const filme of filmes) {
        if (filme.toLowerCase().includes(busca)) {
            const li = document.createElement("li");//aqui mostra a lista em amarelinho no site :D
            li.textContent = filme;
            resultadosEl.appendChild(li);
            encontrou = true;
        }
    }

    if (!encontrou && busca !== "") {//verifica se encontrou é do msm tipo e valor que busca, se n for corre o codigo
        const li = document.createElement("li");
        li.textContent = "Nenhum filme encontrado.";
        li.classList.add("no-results");
        resultadosEl.appendChild(li);
    }
});