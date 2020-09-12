//calculator
const inputBox = document.getElementById("inputbox")
const currentCalculation = document.getElementById("currentCalculation")
const currentResult = document.getElementById("currentResult")

const preAdd = document.getElementById("preAdd")
const postAdd = document.getElementById("postAdd")

//monster game
const attackBtn = document.getElementById("attack_btn")
const hugeAttackBtn = document.getElementById("huge_attack_btn")
const healBtn = document.getElementById("heal_btn")
const restartBtn = document.getElementById("restart_btn")

const monster_bar = document.getElementById("monster_health_bar")
const player_bar = document.getElementById("player_health_bar")
const player_life = document.getElementById("player")
const log_panel = document.getElementById("log_panel")

let monsterHealth = parseInt(document.getElementById("monster_health").innerHTML)
let playerHealth = parseInt(document.getElementById("player_health").innerHTML)

const monster = document.getElementById("monster_health")
const player = document.getElementById("player_health")