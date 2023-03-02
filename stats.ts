export class Stats {

    constructor(
        private _health: number = 0,
        private _max_health: number = 0,
        private _stamina: number = 0,
        private _max_stamina: number = 0,
        private _mana: number = 0,
        private _max_mana: number = 0,
        private _strength: number = 0,
        private _wisdom: number = 0,
        private _armor: number = 0,
    ) { }

    // ####### GETERS #######
    public get health(): number {
        return this._health;
    }

    public get max_health(): number {
        return this._max_health;
    }

    public get stamina(): number {
        return this._stamina;
    }

    public get max_stamina(): number {
        return this._max_stamina;
    }
    public get mana(): number {
        return this._mana;
    }

    public get max_mana(): number {
        return this._max_mana;
    }

    public get strength(): number {
        return this._strength;
    }

    public get wisdom(): number {
        return this._wisdom;
    }

    public get armor(): number {
        return this._armor;
    }

    // ####### SETERS #######
    public set health(health: number) {
        this._health = health;
    }
    public set max_health(max_health: number) {
        this._max_health = max_health;
    }
    public set stamina(stamina: number) {
        this._stamina = stamina;
    }
    public set max_stamina(max_stamina: number) {
        this._max_stamina = max_stamina;
    }
    public set mana(mana: number) {
        this._mana = mana;
    }
    public set max_mana(max_mana: number) {
        this._max_mana = max_mana;
    }
    public set strength(strength: number) {
        this._strength = strength;
    }
    public set wisdom(wisdom: number) {
        this._wisdom = wisdom;
    }
    public set armor(armor: number) {
        this._armor = armor;
    }


}




