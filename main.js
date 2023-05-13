import { CountMap } from "./countMap.js";
import { warframe_handler } from "./warframe_preset.js";

const items = Array.from(warframe_handler.items.keys());
const itemMap = warframe_handler.items;
const recipes = Array.from(warframe_handler.recipes.keys());
const recipeMap = warframe_handler.recipes;
const topLevelItems = items.filter(item => !itemMap.get(item).isComponent);

/*
Displays:
    1. Want
        Name 
        value / max
    2. Todo
        Name 
        Done: value / max
    3. Need
        Name
        Remaining: max - value
    4. Have
        Name
        value
*/

/*
Actions:
    1. Add item to want
        - want.addMax
    2. Perform recipe from todo
        - todo.addValue
        - need.addValue(inputs)
        - have.addValue(outputs)
            (Add item to have function)
        - have.addValue(-inputs)
    3. Add recipe to todo from want
        - todo.addMax
        - need.addMax(inputs)
    4. Add item to have
        - have.addValue
        - want.addValue 
*/

const want = new CountMap(); // items we want to make
const have = new CountMap(); // items we have
const need = new CountMap(); // items we need to acquire
const todo = new CountMap(); // recipes we need to perform

window.onload = function() {
    document.getElementById("debug").onclick = function() {
        debug();
    }
}
function debug() {
    const wantSection = document.getElementById("want-container");
    addToWant("Ash", 1);
    wantSection.appendChild(makeWantItem("Ash"));
    addToWant("Ash", 2);
}

// make a div for a want item that gets appended to want-section
function makeWantItem(itemName) {
    const item = itemMap.get(itemName);
    const div = document.createElement("div");
    div.classList.add("want-item");
    div.innerHTML = `
        <div class="want-item-name">${itemName}</div>
        <div class="want-item-value">${want.getValue(itemName)} / ${want.getMax(itemName)}</div>
    `;
    return div;
}

// Add item to want
function addToWant(itemName, quantity) {
    want.addMax(itemName, quantity);
}

// Add item to have
function addToHave(itemName, quantity) {
    have.addValue(itemName, quantity);
    if (want.has(itemName)) {
        want.addValue(itemName, quantity);
    }
}

// Perform recipe from todo
function performRecipe(recipe, times) {
    todo.addValue(recipe.name, times);
    while (times > 0) {
        for (const [itemName, quantity] of recipe.inputs) {
            need.addValue(itemName, quantity);
            have.addValue(itemName, -quantity);
        }
        for (const [itemName, quantity] of recipe.outputs) {
            have.addValue(itemName, quantity);
            times--;
        }
    }
}

// Add recipe to todo from want
function addToTodo(recipe, quantity) {
    todo.addMax(recipe.name, quantity);
    for (const [itemName, count] of recipe.inputs) {
        need.addMax(itemName, quantity * count);
    }
}

function pickRecipeFromItem(item, index) {
    return recipeMap.get(item.recipes[index]);
}