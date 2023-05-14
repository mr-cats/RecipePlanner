import { CountMap } from "./countMap.js";
import { warframe_handler } from "./warframe_preset.js";

const items = Array.from(warframe_handler.items.keys());
const itemMap = warframe_handler.items;
const recipes = Array.from(warframe_handler.recipes.keys());
const recipeMap = warframe_handler.recipes;
const topLevelItems = items.filter(item => !itemMap.get(item).isComponent)
                           .filter(item => !itemMap.get(item).isBase());

/*
Displays:
    1. Want
        Name 
        Planned: value / max
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
        - if input is not base, add to want
            - want.addValue(outputs)
    4. Add item to have
        - have.addValue
*/
// TODO: keep track of how many wants have been todo'd
//     - repurpose want val to be how many times it's been todo'd?

const want = new CountMap(); // items we want to make
const have = new CountMap(); // items we have
const need = new CountMap(); // items we need to acquire
const todo = new CountMap(); // recipes we need to perform

window.onload = function () {
    document.getElementById("debug").onclick = function () {
        debug();
    }
}
function debug() {
    for (const item of topLevelItems) {
        addToWant(item, 1);
    }
}

// make a div for a want item that gets appended to want-container
function makeWantItem(itemName) {
    const itemDiv = makeItemHtml(itemName);
    itemDiv.classList.add("want-item");
    itemDiv.innerHTML = `
        <div class="want-item-name">${itemName}</div>
        <div class="want-item-value">${want.getValue(itemName)} / ${want.getMax(itemName)}</div>
    `;

    const item = itemMap.get(itemName);
    const infoDiv = document.createElement("div");
    infoDiv.classList.add("want-item-info");
    infoDiv.classList.add("hidden");
    infoDiv.innerHTML = ``;
        //`<div class="want-item-desc">${item.desc}</div>`;
    
    for (const recipe of item.recipes) {
        const recipeDiv = document.createElement("div");
        recipeDiv.innerHTML = `${recipe.name}`;
        recipeDiv.onclick = function () {
            addToTodo(recipe, 1);
            itemDiv.getElementsByClassName("want-item-value")[0].innerHTML = `${want.getValue(itemName)} / ${want.getMax(itemName)}`;
        }
        infoDiv.appendChild(recipeDiv);
    }


    itemDiv.onmouseover = function () {
        infoDiv.classList.remove("hidden");
    }
    itemDiv.onmouseout = function () {
        infoDiv.classList.add("hidden");
    }
    itemDiv.appendChild(infoDiv);
    return itemDiv;
}

function makeTodoItem(recipeName) {
    const recipe = recipeMap.get(recipeName);
    const div = document.createElement("div");
    div.classList.add("todo-item");
    div.innerHTML = `
        <div class="todo-item-name">${recipeName}</div>
        <div class="todo-item-value">${todo.getValue(recipeName)} / ${todo.getMax(recipeName)}</div>
    `;
    div.onclick = function () {
        performRecipe(recipe, 1);
        div.getElementsByClassName("todo-item-value")[0].innerHTML = `${todo.getValue(recipeName)} / ${todo.getMax(recipeName)}`;
    }
    return div;
}

function makeNeedItem(itemName) {
    const item = itemMap.get(itemName);
    const div = document.createElement("div");
    div.classList.add("need-item");
    div.innerHTML = `
        <div class="need-item-name">${itemName}</div>
        <div class="need-item-value">${need.getValue(itemName)} / ${need.getMax(itemName)}</div>
    `;
    return div;
}

function makeHaveItem(itemName) {
    const item = itemMap.get(itemName);
    const div = document.createElement("div");
    div.classList.add("have-item");
    div.innerHTML = `
        <div class="have-item-name">${itemName}</div>
        <div class="have-item-value">${have.getValue(itemName)}</div>
    `;
    return div;
}

function makeItemHtml(itemName) {
    const item = itemMap.get(itemName);
    const div = document.createElement("div");
    div.classList.add("item");
    return div;
}

function updateWant() {
    const wantSection = document.getElementById("want-list");
    for (const wantDiv of wantSection.getElementsByClassName("want-item")) {
        const itemName = wantDiv.getElementsByClassName("want-item-name")[0].innerHTML;
        wantDiv.getElementsByClassName("want-item-value")[0].innerHTML = `${want.getValue(itemName)} / ${want.getMax(itemName)}`;
        const hidden = want.getMax(itemName) <= want.getValue(itemName);
        if (hidden) {
            wantDiv.classList.add("hidden");
        } else {
            wantDiv.classList.remove("hidden");
        }
    }
}

function updateTodo() {
    const todoSection = document.getElementById("todo-list");
    for (const todoDiv of todoSection.getElementsByClassName("todo-item")) {
        const recipeName = todoDiv.getElementsByClassName("todo-item-name")[0].innerHTML;
        todoDiv.getElementsByClassName("todo-item-value")[0].innerHTML = `${todo.getValue(recipeName)} / ${todo.getMax(recipeName)}`;
        const hidden = todo.getMax(recipeName) <= todo.getValue(recipeName);
        if (hidden) {
            todoDiv.classList.add("hidden");
        } else {
            todoDiv.classList.remove("hidden");
        }
    }
}

function updateNeed() {
    const needSection = document.getElementById("need-list");
    for (const needDiv of needSection.getElementsByClassName("need-item")) {
        const itemName = needDiv.getElementsByClassName("need-item-name")[0].innerHTML;
        needDiv.getElementsByClassName("need-item-value")[0].innerHTML = `${need.getValue(itemName)} / ${need.getMax(itemName)}`;
        const hidden = need.getMax(itemName) <= need.getValue(itemName);
        if (hidden) {
            needDiv.classList.add("hidden");
        } else {
            needDiv.classList.remove("hidden");
        }
    }
}

function updateHave() {
    const haveSection = document.getElementById("have-list");
    for (const haveDiv of haveSection.getElementsByClassName("have-item")) {
        const itemName = haveDiv.getElementsByClassName("have-item-name")[0].innerHTML;
        haveDiv.getElementsByClassName("have-item-value")[0].innerHTML = `${have.getValue(itemName)} / ${have.getMax(itemName)}`;
    }
}

// Add item to want
function addToWant(itemName, quantity) {
    const had = want.addMax(itemName, quantity);
    if (had) {
        updateWant();
        return;
    }
    const wantSection = document.getElementById("want-list");
    wantSection.appendChild(makeWantItem(itemName));
}

// Add item to have
function addToHave(itemName, quantity) {
    const had = have.addValue(itemName, quantity);
    if (had) {
        updateHave();
        return;
    }
    const haveSection = document.getElementById("have-list");
    haveSection.appendChild(makeHaveItem(itemName));
}

function addToNeed(itemName, quantity) {
    const had = need.addMax(itemName, quantity);
    if (had) {
        updateNeed();
        return;
    }
    const needSection = document.getElementById("need-list");
    needSection.appendChild(makeNeedItem(itemName));
}

// Perform recipe from todo
function performRecipe(recipe, times) {
    let deficit = "";
    for (const [itemName, quantity] of recipe.inputs) {
        if (have.getValue(itemName) < quantity * times) {
            deficit += `Missing: ${itemName}: ${quantity * times - have.getValue(itemName)}\n`;
        }
    }
    /*
    if (deficit != "") {
        alert(deficit);
        return;
    }
    */

    todo.addValue(recipe.name, times);
    for (const [itemName, quantity] of recipe.inputs) {
        need.addValue(itemName, quantity * times);
        addToHave(itemName, -quantity * times);
    }
    for (const [itemName, quantity] of recipe.outputs) {
        addToHave(itemName, quantity * times);
    }
    updateTodo();
    updateNeed();
    updateHave();
}

// Add recipe to todo from want
function addToTodo(recipe, quantity) {
    const had = todo.addMax(recipe.name, quantity);
    for (const [itemName, count] of recipe.inputs) {
        addToNeed(itemName, quantity * count);
        if (!itemMap.get(itemName).isBase()) {
            addToWant(itemName, quantity * count);
        }
    }
    for (const [itemName, count] of recipe.outputs) {
        want.addValue(itemName, quantity * count);
        updateWant();
    }
    updateTodo();
    if (had) {
        return;
    }
    const todoSection = document.getElementById("todo-list");
    todoSection.appendChild(makeTodoItem(recipe.name));
}

function pickRecipeFromItem(item, index) {
    return recipeMap.get(item.recipes[index]);
}