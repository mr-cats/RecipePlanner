import { Handler } from "./handler";

export class Item {
    constructor(name, desc) {
        this.name = name;
        this.desc = desc;
        this.recipes = []; // recipes that produce this item
        this.isComponent = false; // whether this item is an input to a recipe
        Handler.addItem(name, this);
    }

    isBase() {
        return this.recipes.length === 0;
    }

    toString() {
        return this.name;
    }
}