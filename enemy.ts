import { Stats } from "./stats";
import { Creator } from "./creator";

export abstract class Inimigo {

    protected _stats: Stats;
    protected _nome: string;

    constructor(iNome: string, ihealth: number, imax_health: number, istrength: number, iarmor: number, istamina: number) {
        this._stats = new Stats()
        this._nome = iNome
        this._stats.health = ihealth
        this._stats.max_health = imax_health
        this._stats.strength = istrength
        this._stats.armor = iarmor
        this._stats.stamina = istamina

    }

    public abstract atacar(creator: Creator): void;

    public get stats(): Stats {
        return this._stats
    }

    public get health(): number {
        return this._stats.health
    }

    public get max_health(): number {
        return this._stats.max_health
    }

    public get strength(): number {
        return this._stats.strength
    }

    public get armor(): number {
        return this._stats.armor
    }

    public get nome(): string {
        return this._nome
    }

    public set health(health: number) {
        this._stats.health = health;
    }


}

export class Babygruppelli extends Inimigo {

    constructor() {
        super("Babygruppelli", 50, 50, 3, 6, 1);

    }

    public atacar(creator: Creator): void {

        let dano = 15 + this.stats.strength - creator.stats.armor
        creator.stats.health -= dano
    }

    // public get stats(): Stats {
    //     return this._stats
    // }

    // public get health(): number {
    //     return this._stats.health
    // }


}

export class Rogerzito extends Inimigo {

    constructor() {
        super("Rogerzito", 70, 70, 3, 7, 1);

    }
    public atacar(creator: Creator): void {

        let dano = 10 + this.stats.strength
        creator.stats.health -= dano

    }
}

export class Jannylda extends Inimigo {

    constructor() {
        super("Jannylda", 70, 70, 3, 5, 1)

    }
    public atacar(creator: Creator): void {

        let dano = 10 + this.stats.strength
        creator.stats.health -= dano
    }
}

export class Raffinda extends Inimigo {


    constructor() {
        super("Raffinda", 70, 70, 3, 5, 1)

    }
    public atacar(creator: Creator): void {

        let dano = 10 + this.stats.strength
        creator.stats.health -= dano

    }
}

export class ReiDelas extends Inimigo {

    constructor() {
        super("ReiDelas", 150, 150, 20, 30, 1);

    }
    public atacar(creator: Creator): void {
        console.log("Voce é um imprestavel, quero ver sobreviver a isso");

        let dano = 10 + this.stats.strength
        creator.stats.health -= dano
        creator.stats.armor -= 2
        creator.stats.mana -= 2
    }


}

// ! ###### GENERICOS ######
export class Goblin extends Inimigo {

    constructor() {
        super("Goblin", 30, 30, 1, 5, 0);

    }
    public atacar(creator: Creator): void {

        let dano = 10 + this.stats.strength - creator.stats.armor
        creator.stats.health -= dano
    }
}

export class Draugr extends Inimigo {

    constructor() {
        super("Draugr", 23, 23, 2, 12, 0);

    }
    public atacar(creator: Creator): void {

        let dano = 10 + this.stats.strength - creator.stats.armor
        creator.stats.health -= dano
    }
}

export class Vampire extends Inimigo {

    constructor() {
        super("Vampire Thrall", 25, 25, 4, 8, 0);

    }
    public atacar(creator: Creator): void {

        let dano = 7 + this.stats.strength - creator.stats.armor
        creator.stats.health -= dano
    }
}

export class Orc extends Inimigo {

    constructor() {
        super("Orc", 22, 22, 3, 11, 0);

    }
    public atacar(creator: Creator): void {

        let dano = 10 + this.stats.strength - creator.stats.armor
        creator.stats.health -= dano
    }
}

export class Bandit extends Inimigo {

    constructor() {
        super("Bandit", 26, 26, 2, 7, 0);

    }
    public atacar(creator: Creator): void {

        let dano = 10 + this.stats.strength - creator.stats.armor
        creator.stats.health -= dano
    }
}

export class Falmer extends Inimigo {

    constructor() {
        super("Falmer", 12, 12, 4, 11, 0);

    }
    public atacar(creator: Creator): void {

        let dano = 10 + this.stats.strength - creator.stats.armor
        creator.stats.health -= dano
    }
}

export class Atronach extends Inimigo {

    constructor() {
        super("Atronach", 17, 17, 2, 12, 0);

    }
    public atacar(creator: Creator): void {

        let dano = 10 + this.stats.strength - creator.stats.armor
        creator.stats.health -= dano
    }
}

