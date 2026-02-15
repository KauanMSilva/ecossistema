
class Animal {
  constructor(nome, especie, idade, importancia, habitat, vidaMedia, pesoEstimado, alimentacao) {
    this.nome = nome;
    this.especie = especie;
    this.idade = idade;
    this.importancia = importancia;
    this.habitat = habitat;
    this.vidaMedia = vidaMedia;
    this.pesoEstimado = pesoEstimado;
    this.alimentacao = alimentacao;
  }
}

const animais = [
  new Animal("Leão", "Panthera leo", 2, "Controle de populações de herbívoros", "Savana", 15, "150-250 kg", "Herbívoros e ungulados"),
  new Animal("Girafa", "Giraffa camelopardalis", 3, "Dispersão de sementes", "Savana", 20, "400-900 kg", "Folhas e frutas"),
  new Animal("Elefante", "Loxodonta africana", 5, "Criação de habitats", "Floresta", 60, "4.000-7.000 kg", "Plantas e frutas"),
  new Animal("Cavalo", "Equus caballus", 2, "Manutenção de pastagens", "Pampa", 25, "400-900 kg", "Gramíneas e plantas"),
  new Animal("Pinguim", "Spheniscus demersus", 2, "Indicador de mudanças climáticas", "Antártica", 20, "2-15 kg", "Peixes e krill"),
  new Animal("Tigre", "Panthera tigris", 4, "Controle de populações de presas", "Floresta", 15, "100-300 kg", "Herbívoros e ungulados"),
  new Animal("Urso", "Ursus arctos", 5, "Manutenção de ecossistemas florestais", "Floresta", 25, "150-500 kg", "Plantas, insetos e animais"),
  new Animal("Abelha", "Apis mellifera", 1, "Polinização", "Apiário", 5, "0,01-0,1 g", "Néctar e pólen"),
  new Animal("Borboleta", "Monarcha monarcha", 2, "Polinização", "Jardim", 10, "0,01-1 g", "Néctar e pólen"),
  new Animal("Tartaruga", "Chelonia mydas", 50, "Manutenção de ecossistemas marinhos", "Oceano", 80, "20-500 kg", "Algas e animais marinhos"),
  new Animal("Águia", "Aquila chrysaetos", 20, "Controle de populações de presas", "Floresta", 30, "3-7 kg", "Peixes, roedores e aves"),
  new Animal("Lobo", "Canis lupus", 5, "Controle de populações de herbívoros", "Floresta", 10, "30-80 kg", "Herbívoros e ungulados"),
  new Animal("Golfinho", "Tursiops truncatus", 20, "Manutenção de ecossistemas marinhos", "Oceano", 40, "150-600 kg", "Peixes e crustáceos")
];
// Relacionados dos animais...

function iniciarSimulacao() {
  const resultado = document.getElementById('resultado');
  animais.forEach((animal, indice) => {
    const animalDiv = document.createElement('div');
    animalDiv.className = 'animal';
    animalDiv.innerHTML = `
      <h2>${animal.nome}</h2>
      <p>Idade: ${animal.idade} anos</p>
      <p>Importância: ${animal.importancia}</p>
      <p>Habitat: ${animal.habitat}</p>
      <p>Vida média: ${animal.vidaMedia} anos</p>
      <p>Peso estimado: ${animal.pesoEstimado}</p>
      <p>Alimentação: ${animal.alimentacao}</p>
      <hr>
    `;
    resultado.appendChild(animalDiv);
  });
}

function voltar() {
  window.location.href = 'index.html';
}


