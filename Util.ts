import { Creator } from "./creator";
import { Stats } from "./stats";
import { Combat } from "./kombat";
import { Inimigo, Goblin, Draugr, Vampire, Orc, Falmer, Atronach, Babygruppelli, Jannylda, Rogerzito, Raffinda, ReiDelas } from "./enemy";
import { Skills } from "./skill";

//const sleep = (ms) => new Promise(r => setTimeout(r, ms));
//await sleep(4000);

const prompt = require('prompt-sync')();
const write = prompt

let genericalEnemies: Inimigo[] = [];
let principalEnemies: Inimigo[] = [];


//TODO: INSERE OS NIMIGOS GENERICOS (MUDAR DE LUGAR?)
genericalEnemies.push(new Goblin(), new Draugr(), new Vampire(), new Orc(), new Falmer(), new Atronach());

//TODO: INSERE OS NIMIGOS PRINCIPAIS (MUDAR DE LUGAR?)
principalEnemies.push(new Babygruppelli(), new Rogerzito(), new Jannylda(), new Raffinda(), new ReiDelas());

export class Util {

    public stats: Stats;
    public inventory: Inventory;
    public combat: Combat;
    public frufru: Frufru;

    constructor() {
        this.stats = new Stats;
        this.inventory = new Inventory;
        this.frufru = new Frufru;
        this.combat = new Combat();
    }

    rest(creator: Creator) {
        if (creator.stats.health < creator.stats.max_health - (creator.stats.max_health * 0.15)) {
            creator.stats.health = creator.stats.max_health - (0.15 * creator.stats.max_health)

        }
        if (creator.stats.mana < creator.stats.max_mana - (creator.stats.max_mana * 0.15)) {
            creator.stats.mana = creator.stats.max_mana - (0.15 * creator.stats.max_mana)

        }
        if (creator.stats.stamina < creator.stats.max_stamina - (creator.stats.max_stamina * 0.15)) {
            creator.stats.stamina = creator.stats.max_stamina - (0.15 * creator.stats.max_stamina)
        }
        console.log("")
        console.log('Depois de "descansado", você se sente destruido porem melhor que antes! Seus Stats foram atualizados...')
        console.log("")
        console.log("Vida: " + creator.stats.health + " Mana: " + creator.stats.mana + " Stamina: " + creator.stats.stamina)
        console.log("")

    }

    restCity(creator: Creator) {

        creator.stats.mana = creator.stats.max_mana
        creator.stats.health = creator.stats.max_health
        creator.stats.stamina = creator.stats.max_stamina
        console.log("")
        console.log('Depois de descansado, você se sente renovado! Seus Stats foram atualizados...')
        console.log("")
        console.log("Vida: " + creator.stats.health + " Mana: " + creator.stats.mana + " Stamina: " + creator.stats.stamina)
        console.log("")

    }

    checarhpMaximo(creator: Creator): number {
        if (creator.stats.health > creator.stats.max_health) {
            creator.stats.health = creator.stats.max_health
        }
        return creator.stats.health;
    }
    checarmanaMaxima(creator: Creator): number {
        if (creator.stats.mana > creator.stats.max_mana) {
            creator.stats.mana = creator.stats.max_mana
        }
        return creator.stats.mana;

    }


    travel(creator: Creator) {
        this.map()
        console.log("")
        let choice = write("Digite uma opção : ")
        console.log("")

        // n - o - l - s  VERIFICA QUAIS BOSS JA FORAM FEITOS
        let northBoss: boolean, westBoss: boolean, eastBoss: boolean, southBoss: Boolean;

        switch (choice) {

            case "N":
                console.log("Voce foi para o Norte")
                console.log("")
                if (principalEnemies[0].health > 0) {
                    this.combat.principalFight(creator, principalEnemies[0])
                    northBoss = false
                    this.map()
                } else {
                    console.log("Voce ja derrotou o inimigo desta região");
                    console.log("")

                }

                break;
            case "S":
                console.log("Voce foi para o Sul")
                console.log("")
                if (principalEnemies[1].health > 0) {
                    this.combat.principalFight(creator, principalEnemies[1])
                    southBoss = false
                } else {
                    console.log("Voce ja derrotou o inimigo desta região");
                    console.log("")
                }
                break;
            case "E":
                console.log("Voce foi para o Leste")
                console.log("")
                if (principalEnemies[2].health > 0) {
                    this.combat.principalFight(creator, principalEnemies[2])
                    eastBoss = false
                } else {
                    console.log("Voce ja derrotou o inimigo desta região");
                    console.log("")
                }
                break;
            case "O":
                console.log("Voce foi para o Oeste")
                console.log("")
                if (principalEnemies[3].health > 0) {
                    this.combat.principalFight(creator, principalEnemies[3])
                    westBoss = false
                } else {
                    console.log("Voce ja derrotou o inimigo desta região");
                    console.log("")
                }
                break;
            default:
                console.log("Voce saiu!")
                console.log("");
                break
        }

    }

    // * MOSTRA AS POÇÕES DO INVENTARIO
    bag(creator: Creator, inimigo: Inimigo) {
        console.log("")
        console.log("")
        console.log("V-- para pocao de Vida")
        console.log("M-- para pocao de Mana")
        console.log("P-- para usar o pergaminho")
        console.log("S-- para sair")
        console.log("")
        console.log(`Voce tem:  ${this.inventory.poteH} poção(oes) de HP`)
        console.log(`Voce tem:  ${this.inventory.poteM} poção(oes) de MP`)
        console.log(`Voce tem:  ${this.inventory.skillBook} livro(os) de Roubo Vital`)
        console.log("")
        let choice = write("Digite uma das opcoes: ")
        console.log('Poções de Vida: ' + this.inventory.poteH);
        console.log('Poções de Mana: ' + this.inventory.poteM);
        console.log('Pergaminhos Roubo Vital:  ' + this.inventory.skillBook);
        let skill: Skills = new Skills

        switch (choice) {
            case "V":
                console.log("Voce usou pocao de vida");

                if (creator.stats.health < creator.stats.max_health && this.inventory.poteH > 0) {
                    creator.stats.health = creator.stats.max_health
                    this.inventory.poteH -= 1
                    break;
                } else {
                    console.log("")
                    console.log("Voce não possui poções de HP ou seu HP esta no maximo");
                    console.log("")
                    break;
                }
            case "M":
                console.log("")
                console.log("Voce usou pocao de mana");
                console.log("")
                if (creator.stats.mana < creator.stats.max_mana && this.inventory.poteM > 0) {
                    creator.stats.mana = creator.stats.max_mana
                    this.inventory.poteM -= 1
                } else {
                    console.log("Voce não possui poções de MP ou seu MP esta no maximo");
                    break;
                }

            case "P":
                console.log("Voce usou um pergaminho de Poder Vital");
                console.log("")
                if (this.inventory.skillBook > 0) {
                    skill.skillBook(creator, inimigo)
                    this.inventory.skillBook--
                } else {
                    console.log("")
                    console.log("Voce não possui nenhum Skill Book");
                    console.log("")
                    return
                }

            default:
                break;
        }

    }

    bagOfCombat() {
        console.log("")
        console.log('Poções de Vida: ' + this.inventory.poteH);
        console.log('Poções de Mana: ' + this.inventory.poteM);
        console.log("")
        console.log('Pergaminhos de Roubo Vital: ' + this.inventory.skillBook);
        console.log("")
    }
    explore(creator: Creator, inimigo: Inimigo) {

        let randomEnemies = Aleatorio.randomizar(0, genericalEnemies.length - 1);
        //caso a vida do monstro for menor que 0
        if (genericalEnemies[randomEnemies].stats.health <= 0) {
            genericalEnemies[randomEnemies].stats.health = genericalEnemies[randomEnemies].stats.max_health
        }
        this.combat.fight(creator, genericalEnemies[randomEnemies])

    }


    finalBoss(creator: Creator) {
        this.combat.fight(creator, principalEnemies[4])
        if (principalEnemies[4].health <= 0) {
            throw new Error("PARABENS VOCE DERROTOU, ELE, O GRANDE, O LENDARIO, O MAIS QUENTE, O FAMOSO.....R.E.I....DEEEELAS");

        }
    }

    map() {
        // n - o - l - s  VERIFICA QUAIS BOSS JA FORAM FEITOS
        // public northBoss: boolean, westBoss:boolean, eastBoss: boolean, southBoss: Boolean;

        console.log(" *** Para onde ir? *** ")
        console.log("")
        console.log("################")
        console.log("####   N  ######")
        console.log("# O <- . -> E ##")
        console.log("###    S     ###")
        console.log("################")
        console.log("")
    }
}



export class Frufru {


    houses() {
        console.log("")
        console.log("Bem vindo a cidade de Windhelm")
        console.log("")
        console.log(`
        ∩ │◥███◣ ╱◥███◣
       ╱◥◣ ◥████◣▓∩▓│∩ ║
       │╱◥█◣║∩∩∩ ║◥█▓ ▓█◣
       ││∩│ ▓ ║∩田│║▓ ▓ ▓∩ ║
  ∩ │◥███◣ ╱◥███◣  ∩ │◥███◣ ╱◥███◣
  ╱◥◣ ◥████◣▓∩▓│∩ ║ ╱◥◣ ◥████◣▓∩▓│∩ ║
 │╱◥█◣║∩∩∩ ║◥█▓ ▓█◣ │╱◥█◣║∩∩∩ ║◥█▓ ▓█◣
││∩│ ▓ ║∩田│║▓ ▓ ▓∩ ║ ││∩│ ▓ ║∩田│║▓ ▓ ▓∩ ║`);
        console.log("")

        // console.log(`
        //                       ⚔ Ferreiro 🛡            📜 Biblioteca 📚        🍻 Taverna 💤       🧪  Alquimista ⚗️   
        //                           ¸.•                       ¸.•                      ¸.•                .-. _______
        //                         _Π____˚☆*                 _Π____˚☆*               _Π____˚☆*           |=|/     /  |☆*
        //                       */______/ ~＼。˚           */______/ ~＼。˚         */______/ ~＼。˚       | |_____|_""_|
        //                       ｜ 田田 ｜門｜ ˚*           ｜ 田田 ｜門｜ ˚*        ｜ 田田 ｜門｜ ˚*       | |_____|_""_|
        //                       ╬═╬═╬╬╬╬═╬╬═*╬╬            ╬═╬═╬╬╬╬═╬╬═*╬╬         ╬═╬═╬╬╬╬═╬╬═*╬╬        |_|_[X]_|____| `)

    }


}
export class Aleatorio {

    public static randomizar(minimo: number, maximo: number) {
        const valorSorteado = minimo + Math.random() * (maximo - minimo);
        const valorInteiro = Math.round(valorSorteado);
        return valorInteiro;
    }

}

export class Inventory {

    poteH: number = 2
    poteM: number = 2
    skillBook: number = 1

}


