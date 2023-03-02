import { Stats } from "./stats";

const prompt = require('prompt-sync')();
const write = prompt

export class Creator {

    public stats: Stats;

    region: string = ""
    race: string = ""
    nickName: string = ""
    class: string = ""
    skill: string = ""
    nivel: number = 0
    gold: number = 0

    constructor() {
        this.stats = new Stats;
    }


    characterCreator() {
        this.nickName = write(" ☛ Digite o seu Apelido: ")
        console.log("")
        console.log(" ¤*¨¨*¤.¸¸…¸.¤ Escolha sua região ¤*¨¨*¤.¸¸…¸.¤ ");
        console.log("")
        console.log(" 1 -- Floresta = Região habitada por elfos e humanos");
        console.log("")
        console.log(" 2 -- Cemiterio = Região habitada por flagelados e vampiros");
        console.log("")
        console.log("")
        this.region = write(" ¤*¨¨*¤.¸¸…¸.¤ Escolha sua região: ")
        if (this.region == "1" || this.region == "Floresta"  || this.region == "floresta") {
            console.log("")
            this.race = write(" ¤*¨¨*¤.¸¸…¸.¤ Escolha sua raça elfo ou humano ? ")
            console.log("")
        }
        else if (this.region == "2" || this.region == "Cemiterio" || this.region == "cemiterio" ) {
            console.log("")
            this.race = write(" ¤*¨¨*¤.¸¸…¸.¤ Escolha sua raça flagelado ou vampiro ? ")
            console.log("")
        } else {
            "Digite a região corretamente"

        }
        if (this.region == "1" || this.region == "Floresta" || this.region == "floresta" ) {
            // ESCOLHENDO A CLASSE ELFO
            if (this.race == "elfo") {
                this.stats.max_health = 45
                this.stats.health = 45
                this.stats.stamina = 30
                this.stats.max_stamina = 30
                this.stats.mana = 15
                this.stats.max_mana = 15
                this.stats.strength = 10
                this.stats.wisdom = 5
                this.stats.armor = 3
                this.gold = 10
                this.nivel = 1
                //ESCOLHE A CLASSE HUMANO
            } else if (this.race == "humano") {
                this.stats.max_health = 45
                this.stats.health = 45
                this.stats.stamina = 30
                this.stats.max_stamina = 12
                this.stats.mana = 5
                this.stats.max_mana = 5
                this.stats.strength = 10
                this.stats.wisdom = 2
                this.stats.armor = 6
                this.gold = 10
                this.nivel = 1
            }

        }
        //ESCOLHE A REGIÃO
        if (this.region == "2" || this.region == "Cemiterio" || this.region == "cemiterio") {
            //ESCOLHE A RAÇA
            if (this.race == "flagelado" || this.race == "Flagelado"  ) {
                this.stats.max_health = 50
                this.stats.health = 24
                this.stats.stamina = 30
                this.stats.max_stamina = 30
                this.stats.mana = 15
                this.stats.max_mana = 15
                this.stats.strength = 20
                this.stats.wisdom = 1
                this.stats.armor = 10
                this.gold = 10
                this.nivel = 1
                //ESCOLHE A RAÇA
            } else if (this.race == "vampiro" || this.race == "Vampiro" ) {
                this.stats.max_health = 20
                this.stats.health = 20
                this.stats.stamina = 30
                this.stats.max_stamina = 30
                this.stats.mana = 15
                this.stats.max_mana = 15
                this.stats.strength = 10
                this.stats.wisdom = 15
                this.stats.armor = 5
                this.gold = 10
                this.nivel = 1
            }
        }
        console.log("")
        console.log(" ¤*¨¨*¤.¸¸…¸.¤ Escolha sua classe : ")
        console.log("")
        console.log('1 -- Arqueiro');
        console.log('2 -- Guerreiro');
        console.log('3 -- Mago');
        console.log('4 -- Clerigo');
        console.log("")
        this.class = write("Escolha sua classe : ")
        console.log("")

        //SETA AS SKILL DA CLASSE ARQUEIRO
        if (this.class == '1' || this.class == 'Arqueiro') {
            this.stats.strength += 10
            this.stats.max_stamina += 10
            this.stats.stamina += 10
            this.stats.wisdom += 8
            this.skill = "Flecha Elemental"

        }
        //SETA AS SKILL DA CLASSE GUERREIRO
        else if (this.class == '2' || this.class == 'Guerreiro') {
            this.stats.strength += 10
            this.stats.max_health += 12
            this.stats.health += 12
            this.stats.armor += 5
            this.skill = "Investida Berserker"

        }


        //SETA AS SKILL DA CLASSE MAGO
        else if (this.class == '3' || this.class == 'Mago') {
            this.stats.max_mana += 20
            this.stats.mana += 20
            this.stats.wisdom += 23
            this.skill = "Sim Sim Salabim"
        }
        //SETA AS SKILL DA CLASSE CLERIGO
        else if (this.class == '4' || this.class == 'Clerigo') {
            this.stats.max_health += 10
            this.stats.health += 20
            this.stats.wisdom += 15
            this.stats.armor += 10
            this.skill = "Cura do nosso Senhor"

        }
        else {
            console.log("Classe inexistente favor digitar novamente");
        }




        console.warn(`✷ 　 　　 　 ·         　 ⋆ · 　 *         ✷ 　 　　 　 ·
                 　 ˚ * .          * ⋆ 　 .                      * ⋆ 　 .               　 ˚ * .  
          　 　　 *　　 * ⋆ 　 .      Bem vindo ao mundo de Falkthreat      　 　　 *　　 * ⋆ 　 . 
         · 　　 ⋆ 　　　 ˚ ˚ 　　 ✦                     　 ⋆ · 　 *         · 　　 ⋆ 　　　 ˚ ˚ 　　 ✦
           　 ⋆ · 　 *      * ⋆ 　 .       * ⋆ 　 .             * ⋆ 　 .              　 ⋆ · 　 *
           　 *         ✷ 　 　Voce se encontra desacordado e esta sendo levado　 · ✵              　　　　 ⋆ ✧　 　 · 　 ✧　✵
          　　　　 ⋆ ✧　 　 · 　para a cidade de Windhelm para ser excutado por　 　 　　 *　　 * ⋆ 　 . ✧　 　 · 　 ✧　✵
          　　 *　　 * ⋆ 　 . 　um crime que voce nao cometeu, mas de repente um　 · ✵              　　　　 ⋆ ✧　 　 · 　 ✧　✵
          　　　　 ⋆ ✧　 　 · 　grupo de bandidos ataca a carruagem para roubala e　 · ✵           　 ⋆ · 　 * · 　 ✧　✵
          ✧　 　 · 　 ✧　✵   　em meia a confusao voce consegue escapar...　 ·            　 ⋆ · 　 *      
          　　　　 ⋆ ✧　 　 · 　　 · ✵              　　　　 ⋆ ✧　 　 · 　 ✧　✧　 　 · 　 ✧　✵           　 ⋆ · 　 *
        　　　　 ⋆ ✧　 　 · 　Agora voce esta na/o ${this.region} `);
        console.log("")
        console.log("»»——————————　DICA　——————————««")
        console.log("")
        console.log("Na opcao de viajar voce vai encontrar monstros muito fortes,")
        console.log("aconcelhamos voce a explorar e se aprimorar antes de tentar")
        console.log("enfrentar os inimigos mais fortes. Boa sorte!!!!")
        console.log("")
    }

    levelup(creator: Creator) {

        let i = 0
        let pontos = 4

        console.log('LEVEL UP!! Voce tem 5 pontos para distrubuir')
        while (i != 5) {


            console.log("");

            console.log("");
            console.log("1-- HP + 3");
            console.log("2--Força + 1")
            console.log("3--Sabedoria + 1");
            console.log("");
            let choice = +write("Escolha qual status voce deseja aumentar? ")

            if (choice == 1) {
                creator.stats.max_health += 3
                console.log(`Seu hp atual: ${creator.stats.health}`);
                console.log(`Voce ainda tem ${pontos} ponto(os) para distribuir`);

                i += 1
                pontos--

            } else if (choice == 2) {
                creator.stats.strength += 1
                console.log("");
                console.log(`Sua força atual: ${creator.stats.strength}`);
                console.log(`Voce ainda tem ${pontos} ponto(os) para distribuir`);
                console.log("");
                i += 1
                pontos--

            } else if (choice == 3) {
                creator.stats.wisdom += 1
                console.log("");
                console.log(`Sua sabedoria atual: ${creator.stats.wisdom}`);
                console.log(`Voce ainda tem ${pontos} ponto(os) para distribuir`);
                console.log("");
                i += 1
                pontos--


            }
        }

        creator.nivel += 1

    }
}




