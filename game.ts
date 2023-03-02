import { Creator } from "./creator";
import { Util, Frufru } from "./Util";
import { Smithing, Library, Tavern, Alquimista } from './cidade'
import { Inimigo } from "./enemy";


const prompt = require('prompt-sync')();
const write = prompt
console.log("")
console.log(" ☛ Crie seu personagem ☚ ");
console.log("")
let creator: Creator = new Creator();
let callOutCombat = new Util();
let inimigo: Inimigo


creator.characterCreator()
menu()

export function menu() {
    while (true) {

        if (creator.nivel > 4) {
            callOutCombat.finalBoss(creator)
            console.log("TCHE TU MUITO PIKA TA LIGADO ? MAS VOU TE SENTA O FERRO");

        }

        if (creator.stats.health < 0) {
            throw console.error("VOCE MORREU");
        }

        console.log("»»——————————　★　——————————««");
        console.log("")
        console.log("0--Mostrar Stats");
        console.log("1--Descançar");
        console.log("2--Viajar");
        console.log("3--Inventario");
        console.log("4--Explorar");
        console.log("5--Ir a cidade de Windhelm");
        console.log("6--Se matar");
        console.log("")
        console.log("»»——————————　★　——————————««");

        let choice: number = +write("Digite uma opção : ")

        switch (choice) {

            case 0:
                console.log("")
                console.log(' ╬═╬═ ╬═╬═ ╬═╬═ ╬═╬═ ╬═╬═ ╬═╬═ ╬═╬═ ╬═╬═ ╬═╬═ ')
                console.log(` ╬═╬═   (ಠ o ಠ)¤=[]:::::>`)
                console.log(` ╬═╬═   Personagem: ${creator.nickName}`)
                console.log(` ╬═╬═   Vida: ${creator.stats.health.toFixed(2)} / ${creator.stats.max_health.toFixed(2)}`)
                console.log(` ╬═╬═   Mana: ${creator.stats.mana.toFixed(2)} / ${creator.stats.max_mana.toFixed(2)}`)
                console.log(` ╬═╬═   Stamina: ${creator.stats.stamina.toFixed((2))} / ${creator.stats.max_stamina.toFixed(2)}`)
                console.log(` ╬═╬═   Forca: ${creator.stats.strength}      `)
                console.log(` ╬═╬═   Inteligencia: ${creator.stats.wisdom} `)
                console.log(` ╬═╬═   Armadura: ${creator.stats.armor}      `)
                console.log(` ╬═╬═   Nivel: ${creator.nivel}               `)
                console.log(` ╬═╬═   Schmeckels: ${creator.gold}                 `)
                console.log(` ╬═╬═ ╬═╬═ ╬═╬═ ╬═╬═ ╬═╬═ ╬═╬═ ╬═╬═ ╬═╬═ ╬═╬═ `)
                console.log("")
                break;
            case 1:
                callOutCombat.rest(creator)
                break;
            case 2:
                callOutCombat.travel(creator)
                break;
            case 3:
                callOutCombat.bagOfCombat()
                break;
            case 4:
                callOutCombat.explore(creator, inimigo)
                break;
            case 5:
                city()
            case 6:
                throw console.error("VOCE MORREU!!!!!!");

            default:
                console.log("Opção Não existe")
                break;
        }


    }

}

export function city() {

    let tavern: Tavern = new Tavern();
    let smithing: Smithing = new Smithing()
    let library: Library = new Library()
    let frufru: Frufru = new Frufru()
    let alquimist: Alquimista = new Alquimista


    while (true) {

        console.log("»»——————————　★　——————————««");
        frufru.houses()
        console.log("");
        console.log("0-- Ver status");
        console.log("1-- Smithing");
        console.log("2-- Livraria");
        console.log("3-- Taverna");
        console.log("4-- Alquimista");
        console.log("5-- Flertar com cidadões");
        console.log("6-- Sair da Cidade");
        console.log("7-- Se Matar");
        console.log("");
        console.log("»»——————————　★　——————————««");

        let choice: number = +write("Digite uma opção : ")

        switch (choice) {

            case 0:
                //health, stamina, mana, nivel -> strength. wisdom, armor
                console.log("")
                console.log(' ╬═╬═ ╬═╬═ ╬═╬═ ╬═╬═ ╬═╬═ ╬═╬═ ╬═╬═ ╬═╬═ ╬═╬═ ╬═╬═')
                console.log(` ╬═╬═   Personagem: ${creator.nickName} (ಠ o ಠ)¤=[]:::::>`)
                console.log(` ╬═╬═   Vida: ${creator.stats.health.toFixed((2))} / ${creator.stats.max_health.toFixed((2))} `)
                console.log(` ╬═╬═   Mana: ${creator.stats.mana.toFixed((2))} / ${creator.stats.max_mana}          `)
                console.log(` ╬═╬═   Stamina: ${creator.stats.stamina.toFixed((2))} / ${creator.stats.max_stamina}`)
                console.log(` ╬═╬═   Forca: ${creator.stats.strength}`)
                console.log(` ╬═╬═   Inteligencia: ${creator.stats.wisdom}`)
                console.log(` ╬═╬═   Armadura: ${creator.stats.armor}`)
                console.log(` ╬═╬═   Nivel: ${creator.nivel}`)
                console.log(` ╬═╬═   Gold: ${creator.gold}`)
                console.log(` ╬═╬═ ╬═╬═ ╬═╬═ ╬═╬═ ╬═╬═ ╬═╬═ ╬═╬═ ╬═╬═ ╬═╬═ ╬═╬═`)
                console.log("")
                break;
            case 1:
                smithing.services(creator)
                break;
            case 2:
                library.services(creator)
                break;
            case 3:
                tavern.services(creator)
                break;
            case 4:
                alquimist.services(creator)
                break;
            case 5:
                console.log("")
                console.log("Você não conseguiu flertar com ninguém da cidade, você é feio!")
                console.log("")
                break;
            case 6:
                console.log("")
                console.log("Você saiu da cidade")
                console.log("")
                menu()
            case 7:
                throw console.error("VOCE MORREUUU!!!!!");
            default:
                console.log("Opção Não existe")
                break;
        }
        if (creator.gold < -70) {
            throw console.error("Voce acumulou dividas de mais, voce foi executado em frente a casa do ferreiro, pela Maga da bibiclioteca!");
        }

        //  console.log(()` (\__/) 
        //  　　　　         (•ㅅ•)
        //           　　＿ノ ヽ ノ＼ __ 
        //  　        /　`/ ⌒ V ⌒ V　 
        //      　　 (三ヽ人　 /　　 | 　
        //           |　ﾉ⌒＼ ￣￣ヽ　 ノ 
        //        　 ヽ＿＿＿＞､＿＿_／ 
        //        　　　 ｜( 王 ﾉ〈 
        //        　　　  /ﾐ`ー―彡\        `());
    }

}

console.log("");


