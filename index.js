const express = require('express');
const app = express();
const port = 3000;



const jogadores = [
    {
        id: 1,
        nome: 'Neymar Jr',
        imagem: 'images/neymar.webp',
        descricao: 'Atacante brasileiro, destaque no PSG e na seleção brasileira, famoso por sua habilidade e dribles.',
        posicao: 'Atacante',
        nacionalidade: 'Brasil',
        idade: 32,
        clube: 'Al-Hilal',
        numero: 10,
        altura: '1,75 m',
        peso: '68 kg',
        gols: 436,
        titulos: 25
    },
    {
        id: 2,
        nome: 'Lionel Messi',
        imagem: 'images/messi.jpg',
        descricao: 'Craque argentino com carreira lendária no Barcelona, atualmente no Inter Miami.',
        posicao: 'Atacante',
        nacionalidade: 'Argentina',
        idade: 36,
        clube: 'Inter Miami',
        numero: 10,
        altura: '1,70 m',
        peso: '72 kg',
        gols: 826,
        titulos: 43
    },
    {
        id: 3,
        nome: 'Cristiano Ronaldo',
        imagem: 'images/cristiano.jpg',
        descricao: 'Lenda portuguesa, colecionador de gols e títulos. Joga no Al-Nassr.',
        posicao: 'Atacante',
        nacionalidade: 'Portugal',
        idade: 39,
        clube: 'Al-Nassr',
        numero: 7,
        altura: '1,87 m',
        peso: '83 kg',
        gols: 873,
        titulos: 35
    },
    {
        id: 4,
        nome: 'Kylian Mbappé',
        imagem: 'images/mbappe.webp',
        descricao: 'Estrela francesa com uma carreira meteórica, campeão do mundo em 2018.',
        posicao: 'Atacante',
        nacionalidade: 'França',
        idade: 25,
        clube: 'Real Madrid',
        numero: 7,
        altura: '1,78 m',
        peso: '73 kg',
        gols: 275,
        titulos: 13
    },
    {
    id: 5,
    nome: 'Erling Haaland',
    imagem: 'images/Haaland.webp',
    descricao: 'Atacante norueguês do Manchester City, conhecido pela força e gols.',
    posicao: 'Atacante',
    nacionalidade: 'Noruega',
    idade: 24,
    clube: 'Manchester City',
    numero: 9,
    altura: '1,94 m',
    peso: '88 kg',
    gols: 200,
    titulos: 6
},
{
    id: 6,
    nome: 'Vinícius Jr',
    imagem: 'images/vinicius.webp',
    descricao: 'Atacante brasileiro do Real Madrid, destaque por sua velocidade e dribles.',
    posicao: 'Atacante',
    nacionalidade: 'Brasil',
    idade: 23,
    clube: 'Real Madrid',
    numero: 7,
    altura: '1,76 m',
    peso: '73 kg',
    gols: 70,
    titulos: 9
},
{
    id: 7,
    nome: 'Kevin De Bruyne',
    imagem: 'images/debruyne.webp',
    descricao: 'Meia belga do Manchester City, referência em assistências.',
    posicao: 'Meio-campista',
    nacionalidade: 'Bélgica',
    idade: 33,
    clube: 'Manchester City',
    numero: 17,
    altura: '1,81 m',
    peso: '70 kg',
    gols: 110,
    titulos: 15
},
{
    id: 8,
    nome: 'Luka Modrić',
    imagem: 'images/modric.jpeg',
    descricao: 'Meio-campista croata, Bola de Ouro 2018, maestro do Real Madrid.',
    posicao: 'Meio-campista',
    nacionalidade: 'Croácia',
    idade: 38,
    clube: 'Real Madrid',
    numero: 10,
    altura: '1,72 m',
    peso: '66 kg',
    gols: 42,
    titulos: 25
},
{
    id: 9,
    nome: 'Karim Benzema',
    imagem: 'images/benzema.jpeg',
    descricao: 'Atacante francês, ídolo do Real Madrid, atualmente na Arábia Saudita.',
    posicao: 'Atacante',
    nacionalidade: 'França',
    idade: 36,
    clube: 'Al-Ittihad',
    numero: 9,
    altura: '1,85 m',
    peso: '81 kg',
    gols: 445,
    titulos: 27
},
{
    id: 10,
    nome: 'Robert Lewandowski',
    imagem: 'images/lewa.jpeg',
    descricao: 'Atacante polonês do Barcelona, conhecido pela finalização.',
    posicao: 'Atacante',
    nacionalidade: 'Polônia',
    idade: 35,
    clube: 'Barcelona',
    numero: 9,
    altura: '1,85 m',
    peso: '80 kg',
    gols: 600,
    titulos: 24
},
{
    id: 11,
    nome: 'Mohamed Salah',
    imagem: 'images/salah.jpeg',
    descricao: 'Atacante egípcio do Liverpool, rápido e decisivo.',
    posicao: 'Atacante',
    nacionalidade: 'Egito',
    idade: 32,
    clube: 'Liverpool',
    numero: 11,
    altura: '1,75 m',
    peso: '71 kg',
    gols: 300,
    titulos: 10
},
{
    id: 12,
    nome: 'Sadio Mané',
    imagem: 'images/mane.webp',
    descricao: 'Atacante senegalês, destaque no Liverpool e campeão africano.',
    posicao: 'Atacante',
    nacionalidade: 'Senegal',
    idade: 32,
    clube: 'Al-Nassr',
    numero: 10,
    altura: '1,74 m',
    peso: '69 kg',
    gols: 210,
    titulos: 12
},
{
    id: 13,
    nome: 'Harry Kane',
    imagem: 'images/kane.jpeg',
    descricao: 'Goleador inglês, atualmente no Bayern de Munique.',
    posicao: 'Atacante',
    nacionalidade: 'Inglaterra',
    idade: 31,
    clube: 'Bayern de Munique',
    numero: 9,
    altura: '1,88 m',
    peso: '86 kg',
    gols: 350,
    titulos: 2
},
{
    id: 14,
    nome: 'Bruno Fernandes',
    imagem: 'images/bruno.png',
    descricao: 'Meia português do Manchester United, especialista em bolas paradas.',
    posicao: 'Meio-campista',
    nacionalidade: 'Portugal',
    idade: 29,
    clube: 'Manchester United',
    numero: 8,
    altura: '1,79 m',
    peso: '69 kg',
    gols: 120,
    titulos: 5
},
{
    id: 15,
    nome: 'Pedri',
    imagem: 'images/pedri.webp',
    descricao: 'Meia espanhol jovem e promissor do Barcelona.',
    posicao: 'Meio-campista',
    nacionalidade: 'Espanha',
    idade: 22,
    clube: 'Barcelona',
    numero: 8,
    altura: '1,74 m',
    peso: '65 kg',
    gols: 20,
    titulos: 4
}

];

app.use('/images', express.static('images'));

// Rota inicial
app.get('/', (req, res) => {
    res.send('API de Jogadores de Futebol - Simples');
});

// Listar todos os jogadores
app.get('/jogadores', (req, res) => {
    res.json(jogadores);
});

// Buscar jogador por ID
app.get('/jogadores/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const jogador = jogadores.find(j => j.id === id);

    if (jogador) {
        res.json(jogador);
    } else {
        res.status(404).json({ mensagem: 'Jogador não encontrado' });
    }
});

// Iniciar servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
