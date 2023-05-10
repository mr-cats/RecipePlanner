// dont try this at home

import { Item } from "./item";
import { Recipe } from "./recipe";
import { Handler } from "./handler";

export const handler = new Handler();

// time

const second = new Item("Second", "A unit of time equal to 1/60th of a minute.");

// base resources
const alloy_plate = new Item("Alloy Plate", "A common component that can be found on Venus, Jupiter, Sedna, and Ceres.");
const argon_crystal = new Item("Argon Crystal", "A rare crystal formed in the Origin System's void.");
const carbides = new Item("Carbides", "An uncommon component that can be found from Eximus enemies on the Grineer Shipyard tileset.");
const circuits = new Item("Circuits", "A common component that can be found on Venus, Ceres, and the Kuva Fortress.");
const control_module = new Item("Control Module", "A component used in many weapons and Warframe parts.");
const credits = new Item("Credits", "The standard currency of the Origin System.");
const cryotic = new Item("Cryotic", "A rare component that can be found on Excavation missions on Mars, Europa, Pluto, Sedna, and the Kuva Fortress.");
const cubic_diodes = new Item("Cubic Diodes", "An uncommon component that can be found from Eximus enemies on the Corpus Ice Planet tileset.");
const detonite_ampule = new Item("Detonite Ampule", "A rare component that can be found on Ceres, the Kuva Fortress, and the Void.");
const endo = new Item("Endo", "Fuses mods");
const entrati_lanthorn = new Item("Entrati Lanthorn", "A rare component that can be found on the Chrysalith.");
const ferrite = new Item("Ferrite", "A common component that can be found on Mercury, Earth, Neptune, and Orokin Void.");
const fieldron_sample = new Item("Fieldron Sample", "A rare component that can be found on the Kuva Fortress and in the Void.");
const gallium = new Item("Gallium", "A rare component that can be found in the Orokin Void and on Deimos.");
const gallos_rod = new Item("Gallos Rod", "A rare component that can be found in Grineer Railjack missions.");
const hexenon = new Item("Hexenon", "A rare component that can be found on Jupiter and the Kuva Fortress.");
const isos = new Item("Isos", "An uncommon component that can be found in Corpus Railjack missions.");
const kuva = new Item("Kuva", "A rare component that can be found on the Kuva Fortress.");
const morphics = new Item("Morphics", "A component used in many weapons and Warframe parts.");
const mutagen_sample = new Item("Mutagen Sample", "A rare component that can be found on Eris and the Derelict.");
const nano_spores = new Item("Nano Spores", "A common component that is often found in quantities of over 1000.");
const neural_sensor = new Item("Neural Sensor", "A rare component that can be found on Jupiter, Kuva Fortress, and the Kuva Fortress.");
const neurodes = new Item("Neurode", "A neural relay of mysterious origin.");
const nitain = new Item("Nitain Extract", "A rare component that is often used in the construction of Warframes and weapons.");
const orokin_cell = new Item("Orokin Cell", "A cell extracted from the insides of any large orokin construct.");
const oxium = new Item("Oxium", "A rare component that can be found on Venus, Jupiter, and the Kuva Fortress.");
const plastids = new Item("Plastids", "A common component that can be found on Saturn, Uranus, Phobos, and Pluto.");
const polymer_bundle = new Item("Polymer Bundle", "A common component that can be found on Mercury, Venus, and Uranus.");
const rubedo = new Item("Rubedo", "A common component that can be found on Phobos, Earth, Pluto, and Europa.");
const salvage = new Item("Salvage", "A common component that can be found on Mars, Jupiter, and Eris.");
const tellurium = new Item("Tellurium", "A rare component that can be found on Archwing missions and Uranus Sabotage missions.");
const thrax_plasm = new Item("Thrax Plasm", "Dropped by Thrax enemies in the Chrysalith.");
const void_traces = new Item("Void Traces", "A rare component that can be found on the Void.");
const voidgel_orb = new Item("Voidgel Orb", "A rare component that can be found on the Chrysalith.");
const voidplume_quill = new Item("Voidplume Quill", "Found in the Chrysalith.");

// standing

const new_loka = new Item("New Loka Standing", "Standing acquired from New Loka.");
const red_veil = new Item("Red Veil Standing", "Standing acquired from Red Veil.");
const steel_meridian = new Item("Steel Meridian Standing", "Standing acquired from Steel Meridian.");
const the_perrin_sequence = new Item("The Perrin Sequence Standing", "Standing acquired from The Perrin Sequence.");
const cephalon_suda = new Item("Cephalon Suda Standing", "Standing acquired from Cephalon Suda.");
const arbiters_of_hexis = new Item("Arbiters of Hexis Standing", "Standing acquired from the Arbiters of Hexis.");

const cephalon_simaris = new Item("Cephalon Simaris Standing", "Standing acquired from Cephalon Simaris.");
const entrati = new Item("Entrati Standing", "Standing acquired from the Entrati.");

// detonite injector

const detonite_injector_blueprint = new Item("Detonite Injector Blueprint", "Blueprint acquired from the dojo.");
const buy_detonite_injector_blueprint = new Recipe("Buy Detonite Injector Blueprint", "Buy a Detonite Injector Blueprint from the dojo for 15,000 credits.")
    .addInput(credits, 15000)
    .addOutput(detonite_injector_blueprint, 1);
    const detonite_injector = new Item("Detonite Injector", "A component used in many weapons and Warframe parts.");
const craft_detonite_injector = new Recipe("Craft Detonite Injector", "Craft a Detonite Injector from the blueprint in the dojo.")
    .addInput(detonite_ampule, 10)
    .addInput(control_module, 1)
    .addInput(salvage, 500)
    .addInput(plastids, 250)
    .addInput(credits, 15000)
    .addInput(detonite_injector_blueprint, 1)
    .addOutput(detonite_injector, 1);

// fieldron

const fieldron_blueprint = new Item("Fieldron Blueprint", "Blueprint acquired from the dojo.");
const buy_fieldron_blueprint = new Recipe("Buy Fieldron Blueprint", "Buy a Fieldron Blueprint from the dojo for 20,000 credits.")
    .addInput(credits, 15000)
    .addOutput(fieldron_blueprint, 1);
const fieldron = new Item("Fieldron", "A component used in many weapons and Warframe parts.");
const craft_fieldron = new Recipe("Craft Fieldron", "Craft a Fieldron from the blueprint in the dojo.")
    .addInput(fieldron_sample, 10)
    .addInput(control_module, 1)
    .addInput(salvage, 500)
    .addInput(plastids, 250)
    .addInput(credits, 15000)
    .addInput(fieldron_blueprint, 1)
    .addOutput(fieldron, 1);

// mutagen mass

const mutagen_mass_blueprint = new Item("Mutagen Mass Blueprint", "Blueprint acquired from the dojo.");
const buy_mutagen_mass_blueprint = new Recipe("Buy Mutagen Mass Blueprint", "Buy a Mutagen Mass Blueprint from the dojo for 15,000 credits.")
    .addInput(credits, 15000)
    .addOutput(mutagen_mass_blueprint, 1);
const mutagen_mass = new Item("Mutagen Mass", "A component used in many weapons and Warframe parts.");
const craft_mutagen_mass = new Recipe("Craft Mutagen Mass", "Craft a Mutagen Mass from the blueprint in the dojo.")
    .addInput(mutagen_sample, 10)
    .addInput(control_module, 1)
    .addInput(salvage, 500)
    .addInput(plastids, 250)
    .addInput(credits, 15000)
    .addInput(mutagen_mass_blueprint, 1)
    .addOutput(mutagen_mass, 1);

// forma

const forma_blueprint = new Item("Forma Blueprint", "Blueprint acquired from relics.");
const forma = new Item("Forma", "A component used in many weapons and Warframe parts.");
const craft_forma = new Recipe("Craft Forma", "Craft a Forma from the blueprint.")
    .addInput(neurodes, 1)
    .addInput(orokin_cell, 1)
    .addInput(morphics, 1)
    .addInput(neural_sensor, 1)
    .addInput(credits, 35000)
    .addInput(forma_blueprint, 1)
    .addOutput(forma, 1);

// acceltra

const acceltra_blueprint = new Item("Acceltra Blueprint", "Blueprint obtained demolisher infested.");
const acceltra = new Item("Acceltra", "Blueprint obtained demolisher infested.");
const craft_acceltra = new Recipe("Craft Acceltra", "Craft an Acceltra from the blueprint.")
    .addInput(acceltra_blueprint, 1)
    .addInput(neurodes, 4)
    .addInput(hexenon, 200)
    .addInput(plastids, 925)
    .addInput(nano_spores, 8000)
    .addInput(credits, 25000)
    .addOutput(acceltra, 1);

// ack & brunt

const ack_and_brunt_blueprint = new Item("Ack & Brunt Blueprint", "Blueprint obtained from the Chem Lab in the dojo.");
const buy_ack_and_brunt_blueprint = new Recipe("Buy Ack & Brunt Blueprint", "Buy an Ack & Brunt Blueprint from the dojo for 15,000 credits.")
    .addInput(credits, 15000)
    .addOutput(ack_and_brunt_blueprint, 1);
const ack_and_brunt = new Item("Ack & Brunt", "Blueprint obtained from the Chem Lab in the dojo.");
const craft_ack_and_brunt = new Recipe("Craft Ack & Brunt", "Craft an Ack & Brunt from the blueprint.")
    .addInput(ack_and_brunt_blueprint, 1)
    .addInput(detonite_injector, 5)
    .addInput(salvage, 7500)
    .addInput(cryotic, 3300)
    .addInput(forma, 1)
    .addInput(credits, 65000)
    .addOutput(ack_and_brunt, 1);

// acrid

const acrid_blueprint = new Item("Acrid Blueprint", "Blueprint obtained from the Bio Lab in the dojo.");
const buy_acrid_blueprint = new Recipe("Buy Acrid Blueprint", "Buy an Acrid Blueprint from the dojo for 15,000 credits.")
    .addInput(credits, 15000)
    .addOutput(acrid_blueprint, 1);
const acrid = new Item("Acrid", "Blueprint obtained from the Bio Lab in the dojo.");
const craft_acrid = new Recipe("Craft Acrid", "Craft an Acrid from the blueprint.")
    .addInput(acrid_blueprint, 1)
    .addInput(mutagen_mass, 5)
    .addInput(salvage, 6000)
    .addInput(nano_spores, 5000)
    .addInput(forma, 1)
    .addInput(credits, 30000)
    .addOutput(acrid, 1);

// aegrit

const aegrit_blueprint = new Item("Aegrit Blueprint", "Blueprint obtained from Kahl's Garrison Rank 4.");
const buy_aegrit_blueprint = new Recipe("Buy Aegrit Blueprint", "Buy an Aegrit Blueprint from Kahl's Garrison Rank 4 for 30 Stock.")
    .addInput(stock, 30)
    .addOutput(aegrit_blueprint, 1);
const aegrit = new Item("Aegrit", "Blueprint obtained from Kahl's Garrison Rank 4.");
const craft_aegrit = new Recipe("Craft Aegrit", "Craft an Aegrit from the blueprint.")
    .addInput(aegrit_blueprint, 1)
    .addInput(credits, 20000)
    .addInput(alloy_plate, 8500)
    .addInput(ferrite, 12500)
    .addInput(kuva, 2200)
    .addInput(morphics, 2)
    .addOutput(aegrit, 1);

// aeolak

const aeolak_stock_blueprint = new Item("Aeolak Stock", "Rare drop from Void FLood C rotations.");
const aeolak_stock = new Item("Aeolak Stock", "Rare drop from Void FLood C rotations.");
const craft_aeolak_stock = new Recipe("Craft Aeolak Stock", "Craft an Aeolak Stock from the blueprint.")
    .addInput(credits, 15000)
    .addInput(thrax_plasm, 30)
    .addInput(voidplume_quill, 10)
    .addInput(alloy_plate, 3000)
    .addInput(orokin_cell, 5)
    .addInput(aeolak_stock_blueprint, 1)
    .addOutput(aeolak_stock, 1);
const aeolak_barrel_blueprint = new Item("Aeolak Barrel", "Rare drop from Void Cascade C rotations.");
const aeolak_barrel = new Item("Aeolak Barrel", "Rare drop from Void Cascade C rotations.");
const craft_aeolak_barrel = new Recipe("Craft Aeolak Barrel", "Craft an Aeolak Barrel from the blueprint.")
    .addInput(credits, 15000)
    .addInput(thrax_plasm, 30)
    .addInput(voidplume_quill, 5)
    .addInput(cryotic, 1800)
    .addInput(entrati_lanthorn, 5)
    .addInput(aeolak_barrel_blueprint, 1)
    .addOutput(aeolak_barrel, 1);
const aeolak_receiver_blueprint = new Item("Aeolak Receiver", "Rare drop from Void Flood C rotations.");
const aeolak_receiver = new Item("Aeolak Receiver", "Rare drop from Void Flood C rotations.");
const craft_aeolak_receiver = new Recipe("Craft Aeolak Receiver", "Craft an Aeolak Receiver from the blueprint.")
    .addInput(credits, 15000)
    .addInput(thrax_plasm, 40)
    .addInput(voidplume_quill, 5)
    .addInput(voidgel_orb, 5)
    .addInput(oxium, 2000)
    .addInput(aeolak_receiver_blueprint, 1)
    .addOutput(aeolak_receiver, 1);
const aeolak_blueprint = new Item("Aeolak Blueprint", "Blueprint obtained from Tier 5 Chrysalith bounties.");
const aeolak = new Item("Aeolak", "Blueprint obtained from Tier 5 Chrysalith bounties.");
const craft_aeolak = new Recipe("Craft Aeolak", "Craft an Aeolak from the blueprint.")
    .addInput(credits, 15000)
    .addInput(thrax_plasm, 50)
    .addInput(aeolak_barrel, 1)
    .addInput(aeolak_stock, 1)
    .addInput(aeolak_receiver, 1)
    .addInput(aeolak_blueprint, 1)
    .addOutput(aeolak, 1);

// afentis

const afentis_blueprint = new Item("Afentis Blueprint", "Blueprint obtained from Kahls's Garrison Rank 5.");
const buy_afentis_blueprint = new Recipe("Buy Afentis Blueprint", "Buy an Afentis Blueprint from Kahl's Garrison Rank 5 for 60 Stock.")
    .addInput(stock, 60)
    .addOutput(afentis_blueprint, 1);
const afentis = new Item("Afentis", "Blueprint obtained from Kahl's Garrison Rank 5.");
const craft_afentis = new Recipe("Craft Afentis", "Craft an Afentis from the blueprint.")
    .addInput(afentis_blueprint, 1)
    .addInput(credits, 20000)
    .addInput(ferrite, 8000)
    .addInput(rubedo, 3500)
    .addInput(cryotic, 1200)
    .addInput(argon_crystal, 2)
    .addOutput(afentis, 1);

// furis

const furis_blueprint = new Item("Furis Blueprint", "Blueprint obtained from the Market for 15,000 credits.");
const buy_furis_blueprint = new Recipe("Buy Furis Blueprint", "Buy a Furis Blueprint from the Market for 15,000 credits.")
    .addInput(credits, 15000)
    .addOutput(furis_blueprint, 1);
const furis = new Item("Furis", "Blueprint obtained from the Market for 15,000 credits.");
const craft_furis = new Recipe("Craft Furis", "Craft a Furis from the blueprint.")
    .addInput(furis_blueprint, 1)
    .addInput(credits, 20000)
    .addInput(ferrite, 750)
    .addInput(alloy_plate, 300)
    .addInput(salvage, 400)
    .addInput(neurodes, 4)
    .addOutput(furis, 1);

// afuris

const afuris_blueprint = new Item("Afuris Blueprint", "Blueprint obtained from the Market for 15,000 credits.");
const buy_afuris_blueprint = new Recipe("Buy Afuris Blueprint", "Buy an Afuris Blueprint from the Market for 15,000 credits.")
    .addInput(credits, 15000)
    .addOutput(afuris_blueprint, 1);
const afuris = new Item("Afuris", "Blueprint obtained from the Market for 15,000 credits.");
const craft_afuris = new Recipe("Craft Afuris", "Craft an Afuris from the blueprint.")
    .addInput(afuris_blueprint, 1)
    .addInput(credits, 20000)
    .addInput(furis, 2)
    .addInput(orokin_cell, 1)
    .addOutput(afuris, 1);

// agkuza

const agkuza_blade = new Item("Agkuza Blade", "Purchased from New Loka for 20,000 standing.");
const buy_agkuza_blade = new Recipe("Buy Agkuza Blade", "Buy an Agkuza Blade from New Loka for 20,000 standing.")
    .addInput(new_loka, 20000)
    .addOutput(agkuza_blade, 1);
const agkuza_handle = new Item("Agkuza Handle", "Purchased from Red Veil for 20,000 standing.");
const buy_agkuza_handle = new Recipe("Buy Agkuza Handle", "Buy an Agkuza Handle from Red Veil for 20,000 standing.")
    .addInput(red_veil, 20000)
    .addOutput(agkuza_handle, 1);
const agkuza_guard = new Item("Agkuza Guard", "Purchased from Steel Meridian for 20,000 standing.");
const buy_agkuza_guard = new Recipe("Buy Agkuza Guard", "Buy an Agkuza Guard from Steel Meridian for 20,000 standing.")
    .addInput(steel_meridian, 20000)
    .addOutput(agkuza_guard, 1);
const agkuza_blueprint = new Item("Agkuza Blueprint", "Blueprint obtained from the Market for 35,000 credits.");
const buy_agkuza_blueprint = new Recipe("Buy Agkuza Blueprint", "Buy an Agkuza Blueprint from the Market for 35,000 credits.")
    .addInput(credits, 35000)
    .addOutput(agkuza_blueprint, 1);
const agkuza = new Item("Agkuza", "Blueprint obtained from the Market for 35,000 credits.");
const craft_agkuza = new Recipe("Craft Agkuza", "Craft an Agkuza from the blueprint.")
    .addInput(agkuza_blueprint, 1)
    .addInput(credits, 25000)
    .addInput(agkuza_blade, 1)
    .addInput(agkuza_handle, 1)
    .addInput(agkuza_guard, 1)
    .addOutput(agkuza, 1);

// akarius

const akarius_blueprint = new Item("Akarius Blueprint", "Blueprint obtained from Demolisher Infested.");
const akarius = new Item("Akarius", "Blueprint obtained from Demolisher Infested.");
const craft_akarius = new Recipe("Craft Akarius", "Craft an Akarius from the blueprint.")
    .addInput(akarius_blueprint, 1)
    .addInput(credits, 20000)
    .addInput(neurodes, 3)
    .addInput(hexenon, 150)
    .addInput(polymer_bundle, 1600)
    .addInput(nano_spores, 7500)
    .addOutput(akarius, 1);

// lato

const lato = new Item("Lato", "Full weapon obtained from the Market for 10,000 credits.");
const buy_lato = new Recipe("Buy Lato", "Buy a Lato from the Market for 10,000 credits.")
    .addInput(credits, 10000)
    .addOutput(lato, 1);

// bolto
// market 15k

const bolto_blueprint = new Item("Bolto Blueprint", "Blueprint obtained from the Market for 15,000 credits.");
const buy_bolto_blueprint = new Recipe("Buy Bolto Blueprint", "Buy a Bolto Blueprint from the Market for 15,000 credits.")
    .addInput(credits, 15000)
    .addOutput(bolto_blueprint, 1);
const bolto = new Item("Bolto", "Blueprint obtained from the Market for 15,000 credits.");
const craft_bolto = new Recipe("Craft Bolto", "Craft a Bolto from the blueprint.")
    .addInput(bolto_blueprint, 1)
    .addInput(credits, 20000)
    .addInput(lato, 1)
    .addInput(polymer_bundle, 800)
    .addInput(orokin_cell, 2)
    .addInput(neurodes, 2)
    .addOutput(bolto, 1);

// akbolto
// market 15k

const akbolto_blueprint = new Item("Akbolto Blueprint", "Blueprint obtained from the Market for 15,000 credits.");
const buy_akbolto_blueprint = new Recipe("Buy Akbolto Blueprint", "Buy an Akbolto Blueprint from the Market for 15,000 credits.")
    .addInput(credits, 15000)
    .addOutput(akbolto_blueprint, 1);
const akbolto = new Item("Akbolto", "Blueprint obtained from the Market for 15,000 credits.");
const craft_akbolto = new Recipe("Craft Akbolto", "Craft an Akbolto from the blueprint.")
    .addInput(akbolto_blueprint, 1)
    .addInput(credits, 20000)
    .addInput(bolto, 2)
    .addInput(orokin_cell, 1)
    .addOutput(akbolto, 1);

// bronco

const bronco_blueprint = new Item("Bronco Blueprint", "Blueprint obtained from the Market for 15,000 credits.");
const buy_bronco_blueprint = new Recipe("Buy Bronco Blueprint", "Buy a Bronco Blueprint from the Market for 15,000 credits.")
    .addInput(credits, 15000)
    .addOutput(bronco_blueprint, 1);
const bronco = new Item("Bronco", "Blueprint obtained from the Market for 15,000 credits.");
const craft_bronco = new Recipe("Craft Bronco", "Craft a Bronco from the blueprint.")
    .addInput(bronco_blueprint, 1)
    .addInput(credits, 20000)
    .addInput(neurodes, 2)
    .addInput(alloy_plate, 1200)
    .addInput(ferrite, 700)
    .addInput(polymer_bundle, 800)
    .addOutput(bronco, 1);

// akbronco

const akbronco_blueprint = new Item("Akbronco Blueprint", "Blueprint obtained from the Market for 20,000 credits.");
const buy_akbronco_blueprint = new Recipe("Buy Akbronco Blueprint", "Buy an Akbronco Blueprint from the Market for 20,000 credits.")
    .addInput(credits, 20000)
    .addOutput(akbronco_blueprint, 1);
const akbronco = new Item("Akbronco", "Blueprint obtained from the Market for 20,000 credits.");
const craft_akbronco = new Recipe("Craft Akbronco", "Craft an Akbronco from the blueprint.")
    .addInput(akbronco_blueprint, 1)
    .addInput(credits, 20000)
    .addInput(bronco, 2)
    .addInput(orokin_cell, 1)
    .addOutput(akbronco, 1);

// dual skana
// market 25k

const dual_skana_blueprint = new Item("Dual Skana Blueprint", "Blueprint obtained from the Market for 25,000 credits.");
const buy_dual_skana_blueprint = new Recipe("Buy Dual Skana Blueprint", "Buy a Dual Skana Blueprint from the Market for 25,000 credits.")
    .addInput(credits, 25000)
    .addOutput(dual_skana_blueprint, 1);
const dual_skana = new Item("Dual Skana", "Blueprint obtained from the Market for 25,000 credits.");
const craft_dual_skana = new Recipe("Craft Dual Skana", "Craft a Dual Skana from the blueprint.")
    .addInput(dual_skana_blueprint, 1)
    .addInput(credits, 20000)
    .addInput(morphics, 2)
    .addInput(polymer_bundle, 300)
    .addInput(ferrite, 850)
    .addInput(alloy_plate, 300)
    .addOutput(dual_skana, 1);

// akjagara
// akbolto + dual skana
// market 20k

const akjagara_blueprint = new Item("Akjagara Blueprint", "Blueprint obtained from the Market for 20,000 credits.");
const buy_akjagara_blueprint = new Recipe("Buy Akjagara Blueprint", "Buy an Akjagara Blueprint from the Market for 20,000 credits.")
    .addInput(credits, 20000)
    .addOutput(akjagara_blueprint, 1);
const akjagara = new Item("Akjagara", "Blueprint obtained from the Market for 20,000 credits.");
const craft_akjagara = new Recipe("Craft Akjagara", "Craft an Akjagara from the blueprint.")
    .addInput(akjagara_blueprint, 1)
    .addInput(credits, 20000)
    .addInput(akbolto, 1)
    .addInput(dual_skana, 1)
    .addInput(orokin_cell, 2)
    .addOutput(akjagara, 1);

// aklato
// fully built from market 25k

const aklato = new Item("Aklato", "Fully built from the Market for 25,000 credits.");
const buy_aklato = new Recipe("Buy Aklato", "Buy an Aklato from the Market for 25,000 credits.")
    .addInput(credits, 25000)
    .addOutput(aklato, 1);

// lex
// fully built from market 50k

const lex = new Item("Lex", "Fully built from the Market for 50,000 credits.");
const buy_lex = new Recipe("Buy Lex", "Buy a Lex from the Market for 50,000 credits.")
    .addInput(credits, 50000)
    .addOutput(lex, 1);

// aklex
// lex + lex
// bp market 20k

const aklex_blueprint = new Item("Aklex Blueprint", "Blueprint obtained from the Market for 20,000 credits.");
const buy_aklex_blueprint = new Recipe("Buy Aklex Blueprint", "Buy an Aklex Blueprint from the Market for 20,000 credits.")
    .addInput(credits, 20000)
    .addOutput(aklex_blueprint, 1);
const aklex = new Item("Aklex", "Blueprint obtained from the Market for 20,000 credits.");
const craft_aklex = new Recipe("Craft Aklex", "Craft an Aklex from the blueprint.")
    .addInput(aklex_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(lex, 2)
    .addInput(orokin_cell, 1)
    .addOutput(aklex, 1);

// magnus
// bp market 20k

const magnus_blueprint = new Item("Magnus Blueprint", "Blueprint obtained from the Market for 20,000 credits.");
const buy_magnus_blueprint = new Recipe("Buy Magnus Blueprint", "Buy a Magnus Blueprint from the Market for 20,000 credits.")
    .addInput(credits, 20000)
    .addOutput(magnus_blueprint, 1);
const magnus = new Item("Magnus", "Blueprint obtained from the Market for 20,000 credits.");
const craft_magnus = new Recipe("Craft Magnus", "Craft a Magnus from the blueprint.")
    .addInput(magnus_blueprint, 1)
    .addInput(credits, 25000)
    .addInput(orokin_cell, 2)
    .addInput(alloy_plate, 400)
    .addInput(salvage, 900)
    .addInput(ferrite, 100)
    .addOutput(magnus, 1);

// akmagnus
// magnus + magnus
// bp market 50k

const akmagnus_blueprint = new Item("Akmagnus Blueprint", "Blueprint obtained from the Market for 50,000 credits.");
const buy_akmagnus_blueprint = new Recipe("Buy Akmagnus Blueprint", "Buy an Akmagnus Blueprint from the Market for 50,000 credits.")
    .addInput(credits, 50000)
    .addOutput(akmagnus_blueprint, 1);
const akmagnus = new Item("Akmagnus", "Blueprint obtained from the Market for 50,000 credits.");
const craft_akmagnus = new Recipe("Craft Akmagnus", "Craft an Akmagnus from the blueprint.")
    .addInput(akmagnus_blueprint, 1)
    .addInput(credits, 20000)
    .addInput(magnus, 2)
    .addInput(orokin_cell, 2)
    .addOutput(akmagnus, 1);

// akstiletto
// bp tenno lab 15k

const akstiletto_blueprint = new Item("Akstiletto Blueprint", "Blueprint obtained from the Tenno Lab in a Clan Dojo for 15,000 credits.");
const buy_akstiletto_blueprint = new Recipe("Buy Akstiletto Blueprint", "Buy an Akstiletto Blueprint from the Tenno Lab in a Clan Dojo for 15,000 credits.")
    .addInput(credits, 15000)
    .addOutput(akstiletto_blueprint, 1);
const akstiletto = new Item("Akstiletto", "Blueprint obtained from the Tenno Lab in a Clan Dojo for 15,000 credits.");
const craft_akstilleto = new Recipe("Craft Akstiletto", "Craft an Akstiletto from the blueprint.")
    .addInput(akstiletto_blueprint, 1)
    .addInput(credits, 20000)
    .addInput(gallium, 2)
    .addInput(salvage, 800)
    .addInput(alloy_plate, 200)
    .addInput(forma, 1)
    .addOutput(akstiletto, 1);

// aksomati
// bp market 20k

const aksomati_blueprint = new Item("Aksomati Blueprint", "Blueprint obtained from the Market for 20,000 credits.");
const buy_aksomati_blueprint = new Recipe("Buy Aksomati Blueprint", "Buy an Aksomati Blueprint from the Market for 20,000 credits.")
    .addInput(credits, 20000)
    .addOutput(aksomati_blueprint, 1);
const aksomati = new Item("Aksomati", "Blueprint obtained from the Market for 20,000 credits.");
const craft_aksomati = new Recipe("Craft Aksomati", "Craft an Aksomati from the blueprint.")
    .addInput(aksomati_blueprint, 1)
    .addInput(credits, 20000)
    .addInput(akstiletto, 1)
    .addInput(cryotic, 200)
    .addInput(orokin_cell, 1)
    .addOutput(aksomati, 1);

// vasto 
// bp market 30k

const vasto_blueprint = new Item("Vasto Blueprint", "Blueprint obtained from the Market for 30,000 credits.");
const buy_vasto_blueprint = new Recipe("Buy Vasto Blueprint", "Buy a Vasto Blueprint from the Market for 30,000 credits.")
    .addInput(credits, 30000)
    .addOutput(vasto_blueprint, 1);
const vasto = new Item("Vasto", "Blueprint obtained from the Market for 30,000 credits.");
const craft_vasto = new Recipe("Craft Vasto", "Craft a Vasto from the blueprint.")
    .addInput(vasto_blueprint, 1)
    .addInput(credits, 30000)
    .addInput(neurodes, 4)
    .addInput(alloy_plate, 1200)
    .addInput(ferrite, 700)
    .addInput(polymer_bundle, 1000)
    .addOutput(vasto, 1);

// akvasto
// bp market 50k
// vasto + vasto

const akvasto_blueprint = new Item("Akvasto Blueprint", "Blueprint obtained from the Market for 50,000 credits.");
const buy_akvasto_blueprint = new Recipe("Buy Akvasto Blueprint", "Buy an Akvasto Blueprint from the Market for 50,000 credits.")
    .addInput(credits, 50000)
    .addOutput(akvasto_blueprint, 1);
const akvasto = new Item("Akvasto", "Blueprint obtained from the Market for 50,000 credits.");
const craft_akvasto = new Recipe("Craft Akvasto", "Craft an Akvasto from the blueprint.")
    .addInput(akvasto_blueprint, 1)
    .addInput(credits, 20000)
    .addInput(vasto, 2)
    .addInput(orokin_cell, 2)
    .addOutput(akvasto, 1);

// akzani
// bp market 20k

const akzani_blueprint = new Item("Akzani Blueprint", "Blueprint obtained from the Market for 20,000 credits.");
const buy_akzani_blueprint = new Recipe("Buy Akzani Blueprint", "Buy an Akzani Blueprint from the Market for 20,000 credits.")
    .addInput(credits, 20000)
    .addOutput(akzani_blueprint, 1);
const akzani = new Item("Akzani", "Blueprint obtained from the Market for 20,000 credits.");
const craft_akzani = new Recipe("Craft Akzani", "Craft an Akzani from the blueprint.")
    .addInput(akzani_blueprint, 1)
    .addInput(credits, 20000)
    .addInput(salvage, 1500)
    .addInput(polymer_bundle, 1000)
    .addInput(morphics, 2)
    .addInput(argon_crystal, 2)
    .addOutput(akzani, 1);
    
// alternox
// bp tier 3 chrysalith

const alternox_blueprint = new Item("Alternox Blueprint", "Blueprint obtained from Tier 3 Chrysalith bounties.");
const alternox = new Item("Alternox", "Blueprint obtained from Tier 3 Chrysalith bounties.");
const craft_alternox = new Recipe("Craft Alternox", "Craft an Alternox from the blueprint.")
    .addInput(alternox_blueprint, 1)
    .addInput(credits, 20000)
    .addInput(alloy_plate, 4000)
    .addInput(thrax_plasm, 600)
    .addInput(entrati_lanthorn, 16)
    .addInput(argon_crystal, 2)
    .addOutput(alternox, 1);

// ambassador

const ambassador_barrel_blueprint = new Item("Ambassador Barrel Blueprint", "Blueprint obtained from raknoids on Railjack missions.");
const ambassador_barrel = new Item("Ambassador Barrel", "Blueprint obtained from raknoids on Railjack missions.");
const craft_ambassador_barrel = new Recipe("Craft Ambassador Barrel", "Craft an Ambassador Barrel from the blueprint.")
    .addInput(ambassador_barrel_blueprint, 1)
    .addInput(cubic_diodes, 200)
    .addInput(isos, 5)
    .addInput(morphics, 1)
    .addInput(oxium, 500)
    .addInput(credits, 20000)
    .addOutput(ambassador_barrel, 1);
const ambassador_receiver_blueprint = new Item("Ambassador Receiver Blueprint", "Blueprint obtained from raknoids on Railjack missions.");
const ambassador_receiver = new Item("Ambassador Receiver", "Blueprint obtained from raknoids on Railjack missions.");
const craft_ambassador_receiver = new Recipe("Craft Ambassador Receiver", "Craft an Ambassador Receiver from the blueprint.")
    .addInput(ambassador_receiver_blueprint, 1)
    .addInput(carbides, 200)
    .addInput(gallos_rod, 5)
    .addInput(morphics, 1)
    .addInput(cryotic, 600)
    .addInput(credits, 15000)
    .addOutput(ambassador_receiver, 1);
const ambassador_stock_blueprint = new Item("Ambassador Stock Blueprint", "Blueprint obtained from raknoids on Railjack missions.");
const ambassador_stock = new Item("Ambassador Stock", "Blueprint obtained from raknoids on Railjack missions.");
const craft_ambassador_stock = new Recipe("Craft Ambassador Stock", "Craft an Ambassador Stock from the blueprint.")
    .addInput(ambassador_stock_blueprint, 1)
    .addInput(morphics, 5)
    .addInput(ferrite, 200)
    .addInput(alloy_plate, 1100)
    .addInput(hexenon, 10)
    .addInput(credits, 15000)
    .addOutput(ambassador_stock, 1);
const ambassador_blueprint = new Item("Ambassador Blueprint", "Blueprint obtained from certain Railjack survival missions.")
const ambassador = new Item("Ambassador", "Blueprint obtained from certain Railjack survival missions.")
const craft_ambassador = new Recipe("Craft Ambassador", "Craft an Ambassador from the blueprint.")
    .addInput(ambassador_blueprint, 1)
    .addInput(ambassador_barrel, 1)
    .addInput(ambassador_receiver, 1)
    .addInput(ambassador_stock, 1)
    .addInput(credits, 20000)
    .addOutput(ambassador, 1);

// amphis
// bp market 15k

const amphis_blueprint = new Item("Amphis Blueprint", "Blueprint obtained from the Market for 15,000 credits.");
const buy_amphis_blueprint = new Recipe("Buy Amphis Blueprint", "Buy an Amphis Blueprint from the Market for 15,000 credits.")
    .addInput(credits, 15000)
    .addOutput(amphis_blueprint, 1);
const amphis = new Item("Amphis", "Blueprint obtained from the Market for 15,000 credits.");
const craft_amphis = new Recipe("Craft Amphis", "Craft an Amphis from the blueprint.")
    .addInput(amphis_blueprint, 1)
    .addInput(credits, 30000)
    .addInput(neurodes, 2)
    .addInput(salvage, 500)
    .addInput(circuits, 600)
    .addInput(alloy_plate, 600)
    .addOutput(amphis, 1);

// amprex
// bp dojo energy lab 50k

const amprex_blueprint = new Item("Amprex Blueprint", "Blueprint obtained from the Energy Lab in a Clan Dojo for 50,000 credits.");
const buy_amprex_blueprint = new Recipe("Buy Amprex Blueprint", "Buy an Amprex Blueprint from the Energy Lab in a Clan Dojo for 50,000 credits.")
    .addInput(credits, 50000)
    .addOutput(amprex_blueprint, 1);
const amprex = new Item("Amprex", "Blueprint obtained from the Energy Lab in a Clan Dojo for 50,000 credits.");
const craft_amprex = new Recipe("Craft Amprex", "Craft an Amprex from the blueprint.")
    .addInput(amprex_blueprint, 1)
    .addInput(credits, 25000)
    .addInput(fieldron, 8)
    .addInput(plastids, 600)
    .addInput(ferrite, 9000)
    .addInput(argon_crystal, 3)
    .addOutput(amprex, 1);

// angstrum
// bp market 25k

const angstrum_blueprint = new Item("Angstrum Blueprint", "Blueprint obtained from the Market for 25,000 credits.");
const buy_angstrum_blueprint = new Recipe("Buy Angstrum Blueprint", "Buy an Angstrum Blueprint from the Market for 25,000 credits.")
    .addInput(credits, 25000)
    .addOutput(angstrum_blueprint, 1);
const angstrum = new Item("Angstrum", "Blueprint obtained from the Market for 25,000 credits.");
const craft_angstrum = new Recipe("Craft Angstrum", "Craft an Angstrum from the blueprint.")
    .addInput(angstrum_blueprint, 1)
    .addInput(credits, 25000)
    .addInput(alloy_plate, 600)
    .addInput(circuits, 400)
    .addInput(salvage, 900)
    .addInput(argon_crystal, 2)
    .addOutput(angstrum, 1);

// anku
// bp tenno lab 15k

const anku_blueprint = new Item("Anku Blueprint", "Blueprint obtained from the Tenno Lab in a Clan Dojo for 15,000 credits.");
const buy_anku_blueprint = new Recipe("Buy Anku Blueprint", "Buy an Anku Blueprint from the Tenno Lab in a Clan Dojo for 15,000 credits.")
    .addInput(credits, 15000)
    .addOutput(anku_blueprint, 1);
const anku = new Item("Anku", "Blueprint obtained from the Tenno Lab in a Clan Dojo for 15,000 credits.");
const craft_anku = new Recipe("Craft Anku", "Craft an Anku from the blueprint.")
    .addInput(anku_blueprint, 1)
    .addInput(credits, 20000)
    .addInput(gallium, 2)
    .addInput(salvage, 800)
    .addInput(circuits, 200)
    .addInput(morphics, 4)
    .addOutput(anku, 1);

// ankyros
// bp market 15k

const ankyros_blueprint = new Item("Ankyros Blueprint", "Blueprint obtained from the Market for 15,000 credits.");
const buy_ankyros_blueprint = new Recipe("Buy Ankyros Blueprint", "Buy an Ankyros Blueprint from the Market for 15,000 credits.")
    .addInput(credits, 15000)
    .addOutput(ankyros_blueprint, 1);
const ankyros = new Item("Ankyros", "Blueprint obtained from the Market for 15,000 credits.");
const craft_ankyros = new Recipe("Craft Ankyros", "Craft an Ankyros from the blueprint.")
    .addInput(ankyros_blueprint, 1)
    .addInput(credits, 30000)
    .addInput(nano_spores, 900)
    .addInput(salvage, 900)
    .addInput(ferrite, 600)
    .addInput(alloy_plate, 450)
    .addOutput(ankyros, 1);

// arca plasmor
// bp dojo energy lab 15k

const arca_plasmor_blueprint = new Item("Arca Plasmor Blueprint", "Blueprint obtained from the Energy Lab in a Clan Dojo for 15,000 credits.");
const buy_arca_plasmor_blueprint = new Recipe("Buy Arca Plasmor Blueprint", "Buy an Arca Plasmor Blueprint from the Energy Lab in a Clan Dojo for 15,000 credits.")
    .addInput(credits, 15000)
    .addOutput(arca_plasmor_blueprint, 1);
const arca_plasmor = new Item("Arca Plasmor", "Blueprint obtained from the Energy Lab in a Clan Dojo for 15,000 credits.");
const craft_arca_plasmor = new Recipe("Craft Arca Plasmor", "Craft an Arca Plasmor from the blueprint.")
    .addInput(arca_plasmor_blueprint, 1)
    .addInput(credits, 25000)
    .addInput(fieldron, 5)
    .addInput(control_module, 25)
    .addInput(cryotic, 925)
    .addInput(forma, 1)
    .addOutput(arca_plasmor, 1);

// arca scisco
// bp dojo energy lab 15k

const arca_scisco_blueprint = new Item("Arca Scisco Blueprint", "Blueprint obtained from the Energy Lab in a Clan Dojo for 15,000 credits.");
const buy_arca_scisco_blueprint = new Recipe("Buy Arca Scisco Blueprint", "Buy an Arca Scisco Blueprint from the Energy Lab in a Clan Dojo for 15,000 credits.")
    .addInput(credits, 15000)
    .addOutput(arca_scisco_blueprint, 1);
const arca_scisco = new Item("Arca Scisco", "Blueprint obtained from the Energy Lab in a Clan Dojo for 15,000 credits.");
const craft_arca_scisco = new Recipe("Craft Arca Scisco", "Craft an Arca Scisco from the blueprint.")
    .addInput(arca_scisco_blueprint, 1)
    .addInput(credits, 25000)
    .addInput(fieldron, 5)
    .addInput(oxium, 250)
    .addInput(salvage, 12500)
    .addInput(forma, 1)
    .addOutput(arca_scisco, 1);

// arca titron
// bp market 30k

const arca_titron_blueprint = new Item("Arca Titron Blueprint", "Blueprint obtained from the Market for 30,000 credits.");
const buy_arca_titron_blueprint = new Recipe("Buy Arca Titron Blueprint", "Buy an Arca Titron Blueprint from the Market for 30,000 credits.")
    .addInput(credits, 30000)
    .addOutput(arca_titron_blueprint, 1);
const arca_titron = new Item("Arca Titron", "Blueprint obtained from the Market for 30,000 credits.");
const craft_arca_titron = new Recipe("Craft Arca Titron", "Craft an Arca Titron from the blueprint.")
    .addInput(arca_titron_blueprint, 1)
    .addInput(credits, 20000)
    .addInput(argon_crystal, 2)
    .addInput(gallium, 6)
    .addInput(circuits, 2150)
    .addInput(polymer_bundle, 1200)
    .addOutput(arca_titron, 1);

// argonak




const broken_war_blade = new Item("Broken War Blade", "Rare drop from Summulyst, Aerolyst, Ortholyst, and Conculyst.");
const broken_war_hilt = new Item("Broken War Hilt", "Rare drop from Summulyst, Aerolyst, Ortholyst, and Conculyst.");


// parts recipes

// weapon blueprints 

const broken_war_blueprint = new Item("Broken War Blueprint", "Blueprint obtained from Shadow Stalker after completing The Second Dream quest.")
const war_blueprint = new Item("War Blueprint", "Blueprint obtained from Shadow Stalker")

// weapons 

const broken_war = new Item("Broken War", "Blueprint obtained from Shadow Stalker after completing The Second Dream quest.")
const war = new Item("War", "Blueprint obtained from Shadow Stalker")

// weapon recipes
const craft_broken_war = new Recipe("Craft Broken War", "Craft a Broken War from the blueprint.")
    .addInput(broken_war_blueprint, 1)
    .addInput(broken_war_blade, 1)
    .addInput(broken_war_hilt, 1)
    .addInput(credits, 20000)
    .addOutput(broken_war, 1);
const craft_war = new Recipe("Craft War", "Craft a War from the blueprint.")
    .addInput(war_blueprint, 1)
    .addInput(broken_war, 1)
    .addInput(credits, 20000)
    .addInput(polymer_bundle, 2300)
    .addInput(rubedo, 1400)
    .addInput(nitain, 5)
    .addOutput(war, 1);

// warframes

// finalize