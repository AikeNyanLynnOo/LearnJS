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

const mm = document.getElementById("monster_health")
const pp = document.getElementById("player_health")
let monsterHealth = mm && parseInt(mm.innerHTML)
let playerHealth = pp && parseInt(pp.innerHTML)

const monster = document.getElementById("monster_health")
const player = document.getElementById("player_health")

// domPractice

const btnAddMovie = document.getElementById('addMovie')
const noData = document.getElementById("noData")
const list = document.getElementById("list")
const modal = document.getElementById("myModal")
const span = document.getElementsByClassName("close")[0];
const cancel = document.getElementById("cancel")
const add = document.getElementById("add")

