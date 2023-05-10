export class Handler {
    constructor() {
        this.items = new Map();
        this.recipes = new Map();
    }

    static getItem(name) {
        return this.items.get(name);
    }

    static getRecipe(name) {
        return this.recipes.get(name);
    }

    static addItem(name, item) {
        this.items.set(name, item);
    }

    static addRecipe(name, recipe) {
        this.recipes.set(name, recipe);
    }
}