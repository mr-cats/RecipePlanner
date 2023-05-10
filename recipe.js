export class Recipe {
    constructor(name, desc) {
        this.name = name;
        this.desc = desc;
        this.inputs = new Map();
        this.outputs = new Map();
        Handler.addRecipe(name, this);
    }

    addInput(item, quantity) {
        if (!(item instanceof String)) {
            item = item.name;
        }
        this.inputs.set(item, quantity);
        return this;
    }

    addOutput(item, quantity) {
        if (!(item instanceof String)) {
            item = item.name;
        }
        this.outputs.set(item, quantity);
        item.recipes.push(this);
        return this;
    }

    toString() {
        return this.name;
    }
}