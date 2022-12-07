// tela de entrada
fetch('https://rickandmortyapi.com/api/character').then((result)=>{
        return result.json();
    }).then((resp)=>{
        resp.results.forEach(data => {
            let divCard = document.createElement('div');
            divCard.setAttribute('class', 'card');
            let divFoto = document.createElement('div');
            divFoto.setAttribute('class', 'foto');
            let img = document.createElement('img');
            img.setAttribute('src', data.image);
            divFoto.append(img);
            let characterName = data.name;
            divtitulo = document.createElement('div');
            divtitulo.setAttribute('class', 'titulo');
            let titulo = document.createElement('h2');
            divtitulo.append(titulo);
            titulo.append(characterName);
            document.querySelector("#characters").append(divCard);
            divCard.append(divFoto);
            divCard.append(divtitulo);
        });;
    });


// após informar personagem, chama a função showCharacters
let btn = document.querySelector('#btn-function');
const input = document.querySelector('#character-name');
const apiRickMortyURL =  `https://rickandmortyapi.com/api/character/?name=${name}`;

// resolvendo o erro CORB
headers = {
    'Access-Control-Allow-Credentials' : true,
    'Access-Control-Allow-Origin':'*',
    'Access-Control-Allow-Methods':'GET',
    'Access-Control-Allow-Headers':'application/json',
}

// funçoes
const getCharacterName = async(name) => {
    const apiRickMortyURL =  `https://rickandmortyapi.com/api/character/?name=${name}`;
    const response = await fetch(apiRickMortyURL, {headers});
    const data = await response.json();
    const character = data.results[0];
    return character;
}

const showCharacters = async (name) => {
    const data = await getCharacterName(name);
    let divCard = document.createElement('div');
    divCard.setAttribute('class', 'card2');
    let divFoto = document.createElement('div');
    divFoto.setAttribute('class', 'foto2');
    let img = document.createElement('img');
    img.setAttribute('src', data.image);
    divFoto.append(img);
    let input = data.name+" - "+data.status+" - "+data.species+" - "+data.gender+ " - Localização de origem: "+data.origin.name+" - Localização atual: "+data.location.name+" - Apareceu em: "+data.episode.length+" episódios";
    divtitulo = document.createElement('div');
    divtitulo.setAttribute('class', 'titulo2');
    let titulo = document.createElement('h2');
    divtitulo.append(titulo);
    titulo.append(input);
    document.querySelector("#characters2").append(divCard);
    divCard.append(divFoto);
    divCard.append(divtitulo);

}

//evento
btn.addEventListener("click", (e)=>{
    if(input.value != ""){
        const name = input.value;
        document.querySelector("#characters").innerHTML = "";
        input.value = "";
        document.querySelector("#characters2").innerHTML = "";
        showCharacters(name);
    }
    else {
        input.value = "Informe um personagem";
    }
});
// fetch('https://rickandmortyapi.com/api/character').then((result)=>{
//         return result.json();
//     }).then((resp)=>{
//         resp.results.forEach(character => {
//             let divCharacter = document.createElement('div');
//             divCharacter.setAttribute('class', 'character');
//             let divFoto = document.createElement('div');
//             divFoto.setAttribute("class", "photo");
//             let divIdent = document.createElement('div');
//             let img = document.createElement('img');
//             img.setAttribute("src",character.image);
//             divFoto.append(img);
//             divIdent.setAttribute("class", "ident");
//             let nome = document.createElement('h2');
//             nome.setAttribute("class", "name");
//             nome.append(character.name);
//             let status = document.createElement('p');
//             status.setAttribute("class", "status");
//             status.append(character.status+" - "+character.species);
//             divIdent.append(nome);
//             divIdent.append(status);
//             divCharacter.append(divFoto);
//             divCharacter.append(divIdent);
//             document.querySelector("#personagens").append(divCharacter);
//         });;
//     });