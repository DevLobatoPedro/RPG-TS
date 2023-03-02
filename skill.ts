import { Stats } from "./stats";
import { Creator } from "./creator";
import { Inimigo } from "./enemy";
import { Util } from "./Util";

export class Skills {
    public creator: Creator;

    constructor() {
        this.creator = new Creator

    }

    skillBook(creator: Creator, inimigo : Inimigo){
        if(creator.stats.health < creator.stats.max_health)
        creator.stats.health += 25
        inimigo.stats.health -= 25
        creator.stats.health = creator.stats.max_health
    }
    cura(creator: Creator) {
        let util : Util = new Util()
        if (creator.stats.mana >= 5) {

            let vidaCurada = creator.stats.wisdom - 5
            creator.stats.mana -= 5
            creator.stats.health += vidaCurada

            util.checarhpMaximo(creator)
            console.log("")
            console.log('Voce usou Cura do nosso Senhor')
            console.log("")
        }
        else {
            console.log('Mana insuficiente...!')
            console.log("")
        }
    }
    investida(creator: Creator, inimigo: Inimigo) {
        let util : Util = new Util()
        if (creator.stats.mana >= 5) {
            let dano = 5 + creator.stats.strength
            creator.stats.mana -= 5
            creator.stats.health += 3
            util.checarhpMaximo(creator)
    

            inimigo.stats.health -= dano
            console.log("")
            console.log('Voce usou Investida Berserker')
            console.log("")
            console.log('Mana insuficiente...!')
            console.log("")
        }
    }
    magia(creator: Creator, inimigo: Inimigo) {
        if (creator.stats.mana >= 7) {
            let dano = 5 + creator.stats.wisdom - inimigo.stats.armor
            creator.stats.mana -= 7
            inimigo.stats.health -= dano
            console.log("")
            console.log('Voce a magia Sim Salabim')
            console.log("")
        } else {
            console.log('Mana insuficiente...!')
            console.log("")
        }

    }
    flecha(creator: Creator, inimigo: Inimigo) {
        if (creator.stats.mana >= 5) {
            let dano = 2 + creator.stats.wisdom 
            creator.stats.mana -= 5
            inimigo.stats.health -= dano
            console.log("")
            console.log('Voce usou Flecha Elemental')
            console.log("")
        }else{
            console.log("")
            console.log('Mana insuficiente...!')
            console.log("")
        }

    }
    execute(creator: Creator, inimigo: Inimigo): void {
        if (this.creator.class == '1') {
            this.flecha(creator, inimigo)
        } else if (this.creator.class == '2') {
            this.investida(creator, inimigo)
        } else if (this.creator.class == '3') {
            this.magia(creator, inimigo)
        } else if (this.creator.class == '4') {
            this.cura(creator)
        }
    }
}