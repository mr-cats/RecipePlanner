import { Handler } from "./handler";

export class Item {
    constructor(name, desc) {
        this.name = name;
        this.desc = desc;
        this.recipes = [];
        Handler.addItem(name, this);
    }

    isBase() {
        return this.recipes.length === 0;
    }

    toString() {
        return this.name;
    }
}