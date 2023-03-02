import { Stats } from "./stats";
import { Inimigo } from "./enemy"
import { Creator } from "./creator";
import { Skills } from "./skill";
import { Util } from "./Util";


const prompt = require('prompt-sync')();
const random = Math.random();
const write = prompt


export class Combat {
    public creator: Creator;
    public skill: Skills;
    constructor() {
        this.creator = new Creator()
        this.skill = new Skills()

    }

    public atack(creator: Creator, inimigo: Inimigo) {

        if (creator.stats.stamina >= 5) {
            creator.stats.stamina -= 5
            let dano = 12 + creator.stats.strength - inimigo.stats.armor
            inimigo.stats.health -= dano
            inimigo.atacar(creator)
            console.log("")
            console.table("Vida atual do monstro: " + inimigo.stats.health)
            console.log("")
        } else {
            inimigo.atacar(creator)
            console.log("");
            console.log("Voce esta sem stamina, vai descansar!!");
            console.log("");
        }

    }

    public death(creator: Creator, inimigo: Inimigo) {
        if (inimigo.stats.health <= 0) {
            inimigo.stats.health = 0

            creator.gold += Math.floor(Math.random() * (60 - 20) + 20);

        } else {
            if (creator.stats.health <= 0) {
                console.log("")
                throw console.error(!"VOCE MORREU!");

            }
        }
     
    }

    public deathPrincipal(creator: Creator, inimigo: Inimigo) {
        if (inimigo.stats.health <= 0) {

            creator.gold += Math.floor(Math.random() * (150 - 50) + 50);
            creator.levelup(creator)

        } else {
            if (creator.stats.health <= 0) {
                console.log("")
                throw console.error(!"vOCE MORREU");
                console.log("")

            }
        }

    }

    public execute(creator: Creator, inimigo: Inimigo): void {
        if (creator.class == '1') {
            this.skill.flecha(creator, inimigo)
        } else if (creator.class == '2') {
            this.skill.investida(creator, inimigo)
        } else if (creator.class == '3') {
            this.skill.magia(creator, inimigo)
        } else if (creator.class == '4') {
            this.skill.cura(creator)
        }
        inimigo.atacar(creator)
    }

    public fight(creator: Creator, inimigo: Inimigo) {
        console.log("")
        console.log(`Voce encontou um (${inimigo.nome})`)
        console.log("");
        console.log(' ╬═╬═ ╬═╬═ ╬═╬═ ╬═╬═ ╬═╬═ ╬═╬═ ╬═╬═ ╬═╬═ ╬═╬═')
        console.log(' ╬═╬═              ∋━━o(｀∀´o')
        console.log(` ╬═╬═     Monstro: ${inimigo.nome}`)
        console.log(` ╬═╬═     Vida: ${inimigo.stats.health}`)
        console.log(` ╬═╬═     Forca: ${inimigo.stats.strength}`)
        console.log(` ╬═╬═     Armadura: ${inimigo.stats.armor}`)
        console.log(' ╬═╬═')
        console.log(` ╬═╬═ ╬═╬═ ╬═╬═ ╬═╬═ ╬═╬═ ╬═╬═ ╬═╬═ ╬═╬═ ╬═╬═ `)
        let back : Util = new Util
        while (inimigo.stats.health > 0 || creator.stats.health > 0) {

            console.log("")
            console.log("1--Para fugir")
            console.log("2--Para bater")
            console.log("3--Para usar skill")
            console.log("4--Abrir a mochila");
            console.log("")
            let escolha = write("Escolha uma das opçoes de combate: ")


            if (escolha == 1) {
                console.log("")
                console.log("Voce fugiu, boa sorte na proxima vez!")
                console.log("")
                break;

            }
            if (escolha == 2) {
                
                this.atack(creator, inimigo)  
                this.death(creator, inimigo)
            
            }
            if (escolha == 3) {
                //Lança o especial
                this.execute(creator, inimigo)
                this.death(creator, inimigo)
            }
            if (escolha == 4){
                back.bag(creator, inimigo)
                this.death(creator, inimigo)
                }
                console.log("»»————————————————————————————————————————————————————————　★　————————————————————————————————————————————————————————««");
                console.log("");
                console.log(' ╬═╬═ ╬═╬═ ╬═╬═ ╬═╬═ ╬═╬═ ╬═╬═ ╬═╬═ ╬═╬═ ╬═╬═ ╬═╬═ ╬═╬═ ╬═╬═ ╬═╬═ ╬═╬═ ╬═╬═ ╬═╬═ ╬═╬═ ')
                console.log(` ╬═╬═`)
                console.log(' ╬═╬═          (ಠ o ಠ)¤=[]:::::>                    ∋━━o(｀∀´o')                                         
                console.log(` ╬═╬═   Personagem: ${creator.nickName}                       Monstro: ${inimigo.nome}`)                                   
                console.log(` ╬═╬═   Vida: ${creator.stats.health.toFixed((2))} / ${creator.stats.max_health.toFixed((2))}                             Vida: ${inimigo.stats.health}`)
                console.log(` ╬═╬═   Mana: ${creator.stats.mana.toFixed((2))} / ${creator.stats.max_mana}                                Forca: ${inimigo.stats.strength}`)              
                console.log(` ╬═╬═   Stamina: ${creator.stats.stamina.toFixed((2))} / ${creator.stats.max_stamina.toFixed((2))}                       Armadura: ${inimigo.stats.armor}`)
                console.log(` ╬═╬═   Forca: ${creator.stats.strength}      `)
                console.log(` ╬═╬═   Inteligencia: ${creator.stats.wisdom} `)
                console.log(` ╬═╬═   Armadura: ${creator.stats.armor}      `)
                console.log(` ╬═╬═   Nivel: ${creator.nivel}               `)
                console.log(` ╬═╬═   Gold: ${creator.gold}                 `)
                console.log(` ╬═╬═`)
                console.log(` ╬═╬═ ╬═╬═ ╬═╬═ ╬═╬═ ╬═╬═ ╬═╬═ ╬═╬═ ╬═╬═ ╬═╬═ ╬═╬═ ╬═╬═ ╬═╬═ ╬═╬═ ╬═╬═ ╬═╬═ ╬═╬═ ╬═╬═`)
            console.log("")
            console.log("»»————————————————————————————————————————————————————————　★　————————————————————————————————————————————————————————««");
            console.log("")

            if (inimigo.stats.health <= 0) {
                console.log("");
                console.log(` (${inimigo.nome}) foi de base! ⤜(*.*)⤏ `)
                console.log("");
                
                break;

            }
        }

    }

    principalFight(creator: Creator, inimigo: Inimigo) {

        console.log(`Voce encontou um (${inimigo.nome})`)
        console.log("");
        console.log(' ╬═╬═ ╬═╬═ ╬═╬═ ╬═╬═ ╬═╬═ ╬═╬═ ╬═╬═ ╬═╬═ ╬═╬═')
        console.log(' ╬═╬═              ∋━━o(｀∀´o')
        console.log(` ╬═╬═     Monstro: ${inimigo.nome}`)
        console.log(` ╬═╬═     Vida: ${inimigo.stats.health}`)
        console.log(` ╬═╬═     Forca: ${inimigo.stats.strength}`)
        console.log(` ╬═╬═     Armadura: ${inimigo.stats.armor}`)
        console.log(' ╬═╬═')
        console.log(` ╬═╬═ ╬═╬═ ╬═╬═ ╬═╬═ ╬═╬═ ╬═╬═ ╬═╬═ ╬═╬═ ╬═╬═ `)
        let back : Util = new Util

        while (inimigo.stats.health > 0 || creator.stats.health > 0) {

            console.log("")
            console.log("1--para Fugir")
            console.log("2--para Bater")
            console.log("3--para Usar skill")
            console.log("4--pera Abrir sua mochila");
            
            let escolha = write("Escolha uma das opçoes de combate: ")


            if (escolha == 1) {
                console.log("");
                console.log("Voce fugiu, boa sorte na proxima vez!")
                console.log("");
                break;

            }
            if (escolha == 2) {
                this.atack(creator, inimigo)
                this.deathPrincipal(creator, inimigo)


            }
            if (escolha == 3) {
                //Lança o especial
                this.execute(creator, inimigo)
                this.deathPrincipal(creator, inimigo)
            }
            if (escolha == 4){
            back.bag(creator, inimigo)
            this.deathPrincipal(creator, inimigo)
            }


            console.log("»»————————————————————————————————————————————————————————　★　————————————————————————————————————————————————————————««");
                console.log("");
                console.log(' ╬═╬═ ╬═╬═ ╬═╬═ ╬═╬═ ╬═╬═ ╬═╬═ ╬═╬═ ╬═╬═ ╬═╬═ ╬═╬═ ╬═╬═ ╬═╬═ ╬═╬═ ╬═╬═ ╬═╬═ ╬═╬═ ╬═╬═ ')
                console.log(` ╬═╬═`)
                console.log(' ╬═╬═          (ಠ o ಠ)¤=[]:::::>                    ∋━━o(｀∀´o')                                         
                console.log(` ╬═╬═   Personagem: ${creator.nickName}                     Monstro: ${inimigo.nome}`)                                   
                console.log(` ╬═╬═   Vida: ${creator.stats.health.toFixed((2))} / ${creator.stats.max_health.toFixed((2))}                           Vida: ${inimigo.stats.health}`)
                console.log(` ╬═╬═   Mana: ${creator.stats.mana.toFixed((2))} / ${creator.stats.max_mana}                              Forca: ${inimigo.stats.strength}`)              
                console.log(` ╬═╬═   Stamina: ${creator.stats.stamina.toFixed((2))} / ${creator.stats.max_stamina}                        Armadura: ${inimigo.stats.armor}`)
                console.log(` ╬═╬═   Forca: ${creator.stats.strength}      `)
                console.log(` ╬═╬═   Inteligencia: ${creator.stats.wisdom} `)
                console.log(` ╬═╬═   Armadura: ${creator.stats.armor}      `)
                console.log(` ╬═╬═   Nivel: ${creator.nivel}               `)
                console.log(` ╬═╬═   Gold: ${creator.gold}                 `)
                console.log(` ╬═╬═`)
                console.log(` ╬═╬═ ╬═╬═ ╬═╬═ ╬═╬═ ╬═╬═ ╬═╬═ ╬═╬═ ╬═╬═ ╬═╬═ ╬═╬═ ╬═╬═ ╬═╬═ ╬═╬═ ╬═╬═ ╬═╬═ ╬═╬═ ╬═╬═`)
            console.log("")
            console.log("»»————————————————————————————————————————————————————————　★　————————————————————————————————————————————————————————««");
            console.log("")

            if (inimigo.stats.health <= 0) {
                console.log(` (${inimigo.nome}) foi de base! ⤜(*.*)⤏ `)
                //levelup()
                break;

            }
        }

    }
}




