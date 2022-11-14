const steam64 = '76561198097042313';


const response = fetch("https://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v0001/?key=&steamid=76561198097042313&format=json", {method: 'GET', mode: 'no-cors'})
.then((res) => res.json())
.then((res) => console.log(res));


const favList = (
    <ul>
        <ul>Sonic Frontiers</ul>
        <ul>Civilization 6</ul>
        <ul>Minecraft</ul>
    </ul>
)

ReactDOM.render(favList, document.getElementById('recently-played-list'));