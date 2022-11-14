const steam64 = '76561198097042313';
const apiKey = '';

fetch('https://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=${apiKey}&steamid=${steam64}&format=json',{ method: 'GET',  
withCredentials: true,  
crossorigin: true,  
mode: 'no-cors',});