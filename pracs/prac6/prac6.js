function Videogame(name, genre, setting, pov, multiplayer, graphics)
{
    this.name = name;
    this.genre = genre;
    this.setting = setting;
    this.pov = pov;
    this.multiplayer = multiplayer;
    this.graphics = graphics; 
}

let witcher = new Videogame("The Witcher 3: Wild Hunt",              "action", "fantasy", "third", "single", "realistic");
let zelda = new Videogame("The Legend of Zelda: Breath of the Wild", "action", "fantasy", "third", "single", "stylized");
let blackdesert = new Videogame("Black Desert Online",               "action", "fantasy", "third", "multiplayer", "realistic");
let warcraft = new Videogame("World of Warcraft",                    "action", "fantasy", "third", "multiplayer", "stylized");
let skyrim = new Videogame("The Elder Scrolls V: Skyrim",            "action", "fantasy", "first", "single", "realistic");
let dishonored = new Videogame("Dishonored",                         "action", "fantasy", "first", "single", "stylized");
let teso = new Videogame("The Elder Scrolls Online",                 "action", "fantasy", "first", "multiplayer", "realistic");
let finalfantasy = new Videogame("Final Fantasy XIV",                "action", "fantasy", "first", "multiplayer", "stylized");

let swjedi = new Videogame("Star Wars Jedi: Fallen Order",           "action", "scifi", "third", "single", "realistic");
let nier = new Videogame("Nier: Automata",                           "action", "scifi", "third", "single", "stylized");
let warframe = new Videogame("Warframe",                             "action", "scifi", "third", "multiplayer", "realistic");
let splatoon = new Videogame("Splatoon 3",                           "action", "scifi", "third", "multiplayer", "stylized");
let titanfall = new Videogame("Titanfall 2",                         "action", "scifi", "first", "single", "realistic");
let bioshock = new Videogame("Bioshock",                             "action", "scifi", "first", "single", "stylized");
let apex = new Videogame("Apex Legends",                             "action", "scifi", "first", "multiplayer", "realistic");
let borderlands = new Videogame("Borderlands 2",                     "action", "scifi", "first", "multiplayer", "stylized");

let rdr = new Videogame("Red Dead Redemption 2",                     "action", "realworld", "third", "single", "realistic");
let gta = new Videogame("Grand Theft Auto Online",                   "action", "realworld", "third", "multiplayer", "realistic");
let kingdomcome = new Videogame("Kingdom Come: Deliverance",         "action", "realworld", "first", "single", "realistic");
let counterstrike = new Videogame("Counter-Strike 2",                "action", "realworld", "first", "multiplayer", "realistic");

let pathfinder = new Videogame("Pathfinder: Kingmaker",              "strategy", "fantasy", "third", "single", "realistic");
let fireemblem = new Videogame("Fire Emblem: Three Houses",          "strategy", "fantasy", "third", "single", "stylized");
let divinity = new Videogame("Divinity: Original Sin 2",             "strategy", "fantasy", "third", "multiplayer", "realistic");
let wargroove = new Videogame("Wargroove",                           "strategy", "fantasy", "third", "multiplayer", "stylized");

let xcom = new Videogame("XCOM 2",                                   "strategy", "scifi", "third", "single", "realistic");
let intothebreach = new Videogame("Into the Breach",                 "strategy", "scifi", "third", "single", "stylized");
let civbeyond = new Videogame("Civilization: Beyond Earth",          "strategy", "scifi", "third", "multiplayer", "realistic");
let stellaris = new Videogame("Stellaris",                           "strategy", "scifi", "third", "multiplayer", "stylized");

let totalwar = new Videogame("Total War: Three Kingdoms",            "strategy", "realworld", "third", "single", "realistic");
let civvi = new Videogame("Civilization VI",                         "strategy", "realworld", "third", "multiplayer", "realistic");

const games = [witcher,zelda,blackdesert,warcraft,skyrim,dishonored,teso,finalfantasy,swjedi,nier,warframe,splatoon,titanfall,bioshock,apex,
    borderlands,rdr,gta,kingdomcome,counterstrike,pathfinder,fireemblem,divinity,wargroove,xcom,intothebreach,civbeyond,stellaris,totalwar,civvi];

const genre = document.gameadviser.genre;
const setting = document.gameadviser.setting;
const pov = document.gameadviser.pov;
const multiplayer = document.gameadviser.multiplayer;
const graphics = document.gameadviser.graphics;

setting.addEventListener('change',function(){ //лок стилизации при выборе реалистичного сеттинга :(
    if (setting.value == "realworld") {
        document.getElementById("stylized").disabled = true;
        document.getElementById("realistic").checked = true;
        }
    else {
    document.getElementById("stylized").disabled = false; 
    document.getElementById("realistic").checked = false;  
    }
});


genre.addEventListener('change',function(){ //лок первого лица при выборе стратегии
    if (genre.value == "strategy") {
        document.getElementById("firstPOV").disabled = true;
        document.getElementById("thirdPOV").checked = true;
        }
    else {
    document.getElementById("firstPOV").disabled = false; 
    document.getElementById("thirdPOV").checked = false;  
    }
});

const resultWindow = document.getElementById("result");
const resultText = document.getElementById("resultText");
const closeResult = document.getElementById("closeResult");
closeResult.onclick = function closeResultWindow(){
    resultWindow.style.display = "none";
}

const submit = document.gameadviser.submit;
submit.onclick = function result(){
    if (pov.value == ""|| multiplayer == "" || graphics == "")
        alert("Форма не заполнена!");
    else {
    let game = games.find(obj => 
        obj.genre == genre.value && 
        obj.setting == setting.value && 
        obj.pov == pov.value && 
        obj.multiplayer == multiplayer.value &&
        obj.graphics == graphics.value);
    resultText.innerHTML = game.name;
    resultWindow.style.display = "block";
    }
}

const random = document.gameadviser.random;
random.onclick = function random(){
    let game = games[Math.floor(Math.random()*games.length)];
    resultText.innerHTML = game.name;
    resultWindow.style.display = "block";
}

let outerwilds = new Videogame("The Outer Wilds",                    "adventure", "scifi", "first", "single", "stylized");
let soma = new Videogame("SOMA",                                     "horror", "scifi", "first", "single", "realistic");
let disco = new Videogame("Disco Elysium",                           "adventure", "fantasy", "first", "single", "stylized");
let portal = new Videogame("Portal 2",                               "puzzle", "scifi", "first", "single", "stylized");
let prey = new Videogame("Prey",                                     "immersive", "scifi", "first", "single", "stylized");
const recomendGames = [outerwilds,soma,disco,portal,prey];
const recomend = document.gameadviser.recomend;
recomend.onclick = function recomend(){
    let game = recomendGames[Math.floor(Math.random()*recomendGames.length)];
    resultText.innerHTML = game.name;
    resultWindow.style.display = "block";
}
