import { Creator } from "./creator";
import { Inventory, Util } from "./Util";

const prompt = require('prompt-sync')();
const write = prompt

export abstract class Cidade {
    public creator: Creator;
    public util: Util;

    constructor() {
        this.creator = new Creator();
        this.util = new Util();
    }


    public abstract services(creator: Creator): void;

}

//------- FERREIRO DA CIDADE -------
export class Smithing extends Cidade {
    public services(creator: Creator) {
        console.log(`
                              ⚔ Ferreiro 🛡        
                                  ¸.•              
                                _Π____˚☆*          
                              */______/ ~＼。˚      
                              ｜ 田田 ｜門｜ ˚*      
                              ╬═╬═╬╬╬╬═╬╬═*╬╬       `);
        console.log("")
        console.log("")
        console.log("Andre de Astora: Voce ja conheceu meu pai? Ele e o maior ferreiro de toda Falkthreat!!")
        console.log("")
        console.log("1--- Melhorar a sua arma o=::::::>✧*･ﾟ✧  10 shcmeckels == 5 de força")
        console.log("2--- Melhorar sua armadura 10 shcmeckels == 5 de armadura")
        console.log("3--- Sair da loja");
        console.log("")
        let choice = +write(`Te recomendo voce melhorar seus equpamentos voce é o ${creator.class} mais fraco que eu ja vi escolha algo para melhorar:  `)
        console.log("")
        console.log(`Voce tem: ${creator.gold} de shcmeckels `)
        console.log(`${creator.nickName}     Força:${creator.stats.strength}    Armadura:${creator.stats.armor}`)
        console.log("")

        while (true) {
            if (choice == 1) {
                creator.gold -= 10
                const old = creator.stats.strength
                creator.stats.strength += 5
                console.log('')
                console.log("Sua força foi aumentada!");
                console.log(`Força AUMENTOU de ${old} para ${creator.stats.strength}`)
                break;

            }
            else if (choice == 2) {
                creator.gold -= 10
                const old = creator.stats.armor
                creator.stats.armor += 5
                console.log('')
                console.log("Sua armor foi Aumentada!")
                console.log(`Armor AUMENTOU de ${old} para ${creator.stats.armor}`)
                break;

            }
            else if (choice == 3) {
                console.log('')
                console.log('Saindo da Loja')
                break;
            }
        }
    }

}

// ------- LIVARIA DA CIDADE -------
export class Library extends Cidade {

    public services(creator: Creator) {
        console.log(`
       📜 Biblioteca 📚   
            ¸.•                   
          _Π____˚☆*             
        */______/ ~＼。˚      
        ｜ 田田 ｜門｜ ˚*    
        ╬═╬═╬╬╬╬═╬╬═*╬╬      `);
        console.log('')

        console.log(`${creator.nickName}     Mana Máxima:${creator.stats.max_mana}    Sabedoria:${creator.stats.wisdom}`)
        console.log('')
        console.log("1--- Comprar cristal de mana 10 shcmeckels == 5 mana")
        console.log("2--- Comprar livro antigo == 5 de wisdom")
        console.log("3--- Comprar livro de habildade 'Roubo vital' ");
        console.log("4--- Sair da Loja")
        console.log("")
        console.log(`Maga Mirabel Ervine: Você está na grande livraria de Windhelm. Faça silencio Sr. ${creator.race}! `)
        let choice = +write("O que voce deseja?")
        console.log("")
        console.log(`Voce tem: ${creator.gold} de shcmeckels `)

        while (choice != 4) {

            if (choice == 1) {
                creator.gold -= 10
                const old = creator.stats.max_mana
                creator.stats.max_mana += 5
                console.log('')
                console.log("Sua mana maxima foi aumentada!");
                console.log(`Mana máxima AUMENTOU de ${old} para ${creator.stats.max_mana}`)
                break;
            }
            else if (choice == 2) {
                creator.gold -= 10
                const old = creator.stats.wisdom
                creator.stats.wisdom += 5
                console.log('')
                console.log("Seu wisdom foi aumentado!")
                console.log(`Wisdom AUMENTOU de ${old} para ${creator.stats.wisdom}`)
                break;
            } else if (choice == 3) {
                creator.gold -= 10
                this.util.inventory.skillBook += 1
                console.log(`Obrigado seu ${creator.race} sujo`);
                break;

            }
            else if (choice == 4) {
                console.log(`Ja vai tarde seu ${creator.race} sujo`)
                break;
            }

        }
    }
}
//* ------- ALQUIMISTA DA CIDADE -------
export class Alquimista extends Cidade {
    public services(creator: Creator): void {
        console.log(`
        🧪  Alquimista ⚗️   
        .-. _______         
        |=|/     /  \         
        | |_____|_""_|     
        | |_____|_""_|  
        |_|_[X]_|____|      `);
        console.log("");
        console.log(`Alquimista Flamel: Aaaah voce é um ${creator.race}... senti pelo cheiro...`);
        console.log("");
        console.log("");
        console.log("1--- Comprar pocao de vida 100 shcmeckels")
        console.log("2--- Comprar pocao de mana 100 shcmeckels")
        console.log("3--- Sair da loja ");
        console.log("");
        console.log(`Voce tem: ${creator.gold} de shcmeckels `);
        console.log("");
        let choice = +write("O que voce deseja? ");

        while (true) {

            if (choice == 1) {
                creator.gold -= 100
                console.log("Voce comprou pocao de Vida");
                console.log("");
                break;
            }
            if (choice == 2) {
                creator.gold -= 100
                console.log("Voce comprou pocao de Mana");
                console.log("");
                break;

            }

            if (choice == 3) {
                console.log("Saindo da Loja...");
                break;
            } else {
                break;
            }

        }


    }


}

//* ------- TAVERNA DA CIDADE -------
export class Tavern extends Cidade {

    cardapio(creator: Creator) {

        while (true) {

            console.log("1--- Banana caramelizada 10 schmeckles ---")
            console.log('===> Aumenta sua vida maxima em 10 <===');
            console.log('')
            console.log("2--- Gomu-Gomu 10g schmeckles---")
            console.log("===> Aumenta a sua Mana máxima em 5 <===")
            console.log('')
            console.log("3-- rapadurinha de leite Crochemore 10 schmeckles ---")
            console.log("===> Aumenta a stamina maxima em 5 <===")
            console.log('')
            console.log("4--  Cu de curioso FREE --")
            console.log("===> Compre e descubra <===")
            console.log('')
            console.log("5--  Voltar  --")
            console.log('')
            let choice = +write("Deseja comprar algo do nosso cardapio ? ")
            console.log('')
            console.log(`Voce tem: ${creator.gold} schmeckels`)
            console.log('')

            if (choice == 1) {
                creator.gold -= 10
                const old = creator.stats.max_health
                creator.stats.max_health += 5
                console.log('')
                console.log("Sua VIDA MÁXIMA foi aumentada!")
                console.log(`VIDA MÁXIMA aumentou de ${old} para ${creator.stats.max_health}!`)
                break;
            }
            if (choice == 2) {
                creator.gold -= 10
                const old = creator.stats.max_mana
                creator.stats.max_mana += 5
                console.log('')
                console.log("Sua mana máxima foi aumentada!")
                console.log(`Mana máxima AUMENTOU de ${old} para ${creator.stats.max_mana}`)
                break;
            }
            if (choice == 3) {
                creator.gold -= 10
                const old = creator.stats.max_stamina
                creator.stats.max_stamina += 5
                console.log('')
                console.log("Sua stamina máxima foi aumentada!")
                console.log(`Stamina máxima AUMENTOU de ${old} para ${creator.stats.max_stamina} `)
                break;
            }
            if (choice == 4) {
                console.log('')
                throw console.error("Voce foi comer o cu do curioso, e curiosamente voce morreu");

            }
            if (choice == 5) {
                break;
            }
        }
    }

    jogoAzar(creator: Creator) {
        let random = Math.floor(Math.random() * 100);
        console.log("Voce deseja participar de um jogo muito luvrativo ? Confia em mim é dinheiro facil posso dobrar o seu investimento apenas 100 shcmeckels");
        console.log("");
        console.log(" ヽ(´ᴗ`)ヽ 🃏ヽ(╹ᗜ╹)ヽ");
        console.log("");
        let choice = write("É só voce dizer que sim ( ͡° ͜ʖ ͡°): ")

        if (choice == 'sim') {
            let aposta = write("Quanto você quer apostar? ")
            if (random <= 19) {
                creator.gold += aposta * 2
                console.log('')
                //TROCAR COMO O NPC SE SENTE AO PERDER GOLD
                console.log(`  ୧(๑•̀ᗝ•́)૭  MAS OQ ?.......Voce ganhou ${aposta * 2} schmeckles!`);

            } else {
                creator.gold -= aposta
                console.log('')
                console.log("HA HA OTARIO!!!!");
                console.log(`Você perdeu ${aposta} shcmeckles! (￣▼￣) `)
            }

        } else {
            console.log("Chatão você ein...")
        }

    }

    public services(creator: Creator) {
        console.log(`
        🍻 Taverna 💤
            ¸.•             
          _Π____˚☆*        
        */______/ ~＼。˚    
        ｜ 田田 ｜門｜ ˚*     
        ╬═╬═╬╬╬╬═╬╬═*╬╬       `);
        console.log('')
        console.log("1--- Passar a noite 50 schmeckles ---")
        console.log("2--- Cardapio ---")
        console.log("3--- Jogar jogo de azar com uns caras suspeitos--")
        console.log("4--- Sair da taverna");
        
        console.log('')
        let choice = +write(`Bem vindo a estalagem, ei...espera.... voce é um ${creator.race} faz tempo que não vejo um por aqui, o que voce deseja ? `)
        console.log('')
        console.log(`Voce tem: ${creator.gold} de schmeckels `)
        console.log('')
        while (choice !== 4) {
            if (choice == 1) {
                creator.gold -= 50
                this.util.restCity(creator)
                break;
            }
            else if (choice == 2) {
                this.cardapio(creator)
                break;
            }
            else if (choice == 3) {
                this.jogoAzar(creator)
                break;
            }
            else if (choice == 4) {
                console.log('Saindo da Loja')
                break;
            }

        }
    }
}

