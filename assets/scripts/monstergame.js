const DEFAULT_DAMAGE = 10
const HUGE_DAMAGE = 30
let LIFE = 3
const elements = document.getElementsByTagName("i")


const generateHearts = () => {
    elements.length>0 ? player_life.removeChild(player_life.lastChild) : false
}

const restartGame = () => {
    monsterHealth = 100
    playerHealth = 100
    LIFE = 3
    if(elements.length == 0){
        for(var i = 0 ; i<LIFE ; i++){
            var heart = document.createElement("i")
            heart.className = "fa fa-heart"
            player_life.appendChild(heart)
        }
    }
    
    monster_bar.setAttribute("style","width:"+100+"%")
    player_bar.setAttribute("style","width:"+100+"%")
    monster.innerHTML = 100+"%"
    player.innerHTML = 100+"%"
    while (log_panel.firstChild) {
        log_panel.removeChild(log_panel.firstChild);
      }
}

attackBtn.addEventListener('click',()=>{
    const damage = generateDamage(DEFAULT_DAMAGE)
    monster.innerHTML = damage.monsterHealth+"%"
    player.innerHTML = damage.playerHealth+"%"

    healthBarStyle(monster_bar,damage.monsterHealth)
    healthBarStyle(player_bar,damage.playerHealth)
})
hugeAttackBtn.addEventListener('click',()=>{
    const damage = generateDamage(HUGE_DAMAGE)
    monster.innerHTML = damage.monsterHealth+"%"
    player.innerHTML = damage.playerHealth+"%"

    healthBarStyle(monster_bar,damage.monsterHealth)
    healthBarStyle(player_bar,damage.playerHealth)
})

healBtn.addEventListener("click",()=>{
    LIFE--
    generateHearts()
    if(LIFE>=0){
        const healedplayer = playerHealth+10
        player.innerHTML = healedplayer+10+"%"
        healthBarStyle(player_bar,healedplayer)
        showLog({heal : true})
    }else {
        alert("You lose")
        restartGame()
    }
})

restartBtn.addEventListener('click',restartGame)

const showLog = (obj) => {
    const pre = document.createElement("pre")
    if(obj.heal){
        pre.innerHTML = "You are healed by 10"
    }else{
        pre.innerHTML = obj.player + " is damaged by " + obj.damage
    }
    log_panel.appendChild(pre) 
}

const healthBarStyle = (element,health) => {
    let color = ""
        if (health<=100 && health>90) {
            color = "blue"
        }else if(health<=90 && health>70){
            color = "green"
        }else if(health<=70 && health>50){
            color = "yellow"
        }else if(health<=50 && health>30){
            color = "orange"
        }else if(health<=30 && health>0){
            color = "red"
        }else if(health<=0){
            color = "black"
        }
        else color = "blueviolet"
    element.setAttribute("style","width:"+health+"%;background-color : "+color+";")
}

const generateDamage = (damage) => {
    const monster = Math.floor(Math.random()*damage)+1
    const player = Math.floor(Math.random()*damage)+3
    if(monsterHealth > 0 && playerHealth > 0){
        monsterHealth -= monster
        playerHealth -= player
    }else{
        checkPlayer()
    }
    showLog({player : "Monster", damage : monster})
    showLog({player : "Player", damage : player})
    return {monsterHealth,playerHealth}
}

const checkPlayer = () => {
    if(playerHealth > monsterHealth){
        alert("You Won !!!")
    }else if (playerHealth == monsterHealth){
        alert("Tie up !!!")
    }else {
        alert("You lose !!!")
    }
}