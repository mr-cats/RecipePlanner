// dont try this at home

import { Item } from "./item.js";
import { Recipe } from "./recipe.js";
import { Handler } from "./handler.js";

const handler = new Handler();
Handler.init();

// Table of Contents
// Ctrl + F to fast travel
// -----------------
// the resources section
//     contains resources that are dropped directly by various means
//     also contains detonite injectors, fieldron, and mutagen samples, forma 
// the standing section
//     contains definitions for the various standing currencies
// the mining section
//     contains definitions for the various raw materials and processed gems/minerals
// the fishing section
//     contains fish, their parts, and what they drop
// the lich and sister weapons section
//     contains the weapons that can be obtained from liches and sisters
// the non prime weapons section
//     contains the weapons that can be obtained from the market, clan research, and other sources
// the sentinels section
//     contains the sentinels and their weapons
// the robot dogs section
//     contains the robot dogs and their weapons  (and moas)
// the warframes section
//     contains the warframes and their parts
// the prime section
//     contains the prime warframes and weapons
// the archwing section
//     contains the archwings



// the resources section
// ---------------------
// ---------------------

// time

const second = new Item("Second", "A unit of time equal to 1/60th of a minute.");

// base resources
const aggristone = new Item("Aggristone", "A resource that can be found in Duviri.");
const alloy_plate = new Item("Alloy Plate", "A common component that can be found on Venus, Jupiter, Sedna, and Ceres.");
const anomaly_shard = new Item("Anomaly Shard", "A resource that can be found in the Veil Proxima by clearing a Murex of Sentients.");
const argon_crystal = new Item("Argon Crystal", "A rare crystal formed in the Origin System's void.");
const ariette_scale = new Item("Ariette Scale", "A resource that can be found by feeding the maw in Duviri.");
const asterite = new Item("Asterite", "A resource that can be found in Railjack missions.");
const breath_of_the_eidolon = new Item("Breath of the Eidolon", "A resource that can be obtained from Ostron bounties.");
const carbides = new Item("Carbides", "An uncommon component that can be found from Eximus enemies on the Grineer Shipyard tileset.");
const cetus_wisp = new Item("Cetus Wisp", "A rare component that can be found on the Plains of Eidolon.");
const circuits = new Item("Circuits", "A common component that can be found on Venus, Ceres, and the Kuva Fortress.");
const condroc_wing = new Item("Condroc Wing", "A resource that can be found on the Plains of Eidolon.");
const connla_sprout = new Item("Connla Sprout", "A resource that can be found in Duviri.");
const control_module = new Item("Control Module", "A component used in many weapons and Warframe parts.");
const credits = new Item("Credits", "The standard currency of the Origin System.");
const cryotic = new Item("Cryotic", "A rare component that can be found on Excavation missions on Mars, Europa, Pluto, Sedna, and the Kuva Fortress.");
const cubic_diodes = new Item("Cubic Diodes", "An uncommon component that can be found from Eximus enemies on the Corpus Ice Planet tileset.");
const detonite_ampule = new Item("Detonite Ampule", "A rare component that can be found on Ceres, the Kuva Fortress, and the Void.");
const dracroot = new Item("Dracroot", "A resource that can be found in Duviri.");
const ducats = new Item("Ducats", "A currency used in the Void Trader's shop.");
const eevani = new Item("Eevani", "A resource that can be found in Duviri.");
const endo = new Item("Endo", "Fuses mods");
const entrati_lanthorn = new Item("Entrati Lanthorn", "A rare component that can be found on the Chrysalith.");
const ferrite = new Item("Ferrite", "A common component that can be found on Mercury, Earth, Neptune, and Orokin Void.");
const fieldron_sample = new Item("Fieldron Sample", "A rare component that can be found on the Kuva Fortress and in the Void.");
const gallium = new Item("Gallium", "A rare component that can be found in the Orokin Void and on Deimos.");
const gallos_rod = new Item("Gallos Rod", "A rare component that can be found in Grineer Railjack missions.");
const ganglion = new Item("Ganglion", "A resource that can be found in the Cambion Drift.");
const gorgaricus_spore = new Item("Gorgaricus Spore", "A resource that can be found in the Orb Vallis.");
const grokdrul = new Item("Grokdrul", "A resource that can be found in the Plains of Eidolon.");
const hexenon = new Item("Hexenon", "A rare component that can be found on Jupiter and the Kuva Fortress.");
const isos = new Item("Isos", "An uncommon component that can be found in Corpus Railjack missions.");
const kavat_genetic_code = new Item("Kavat Genetic Code", "Obtained from scanning Kavats.");
const kovnik = new Item("Kovnik", "A resource that can be found in Duviri.");
const kuaka_spinal_claw = new Item("Kuaka Spinal Claw", "A resource that can be found on the Plains of Eidolon.");
const kuva = new Item("Kuva", "A rare component that can be found on the Kuva Fortress.");
const lamentus = new Item("Lamentus", "A resource that can be found in Duviri.");
const lua_thrax_plasm = new Item("Lua Thrax Plasm", "Dropped by Thrax enemies on Lua.");
const lucent_teroglobe = new Item("Lucent Teroglobe", "A resource that can be found in the Cambion Drift.");
const maw_fang = new Item("Maw Fang", "A component found from feeding the maw in Duviri.");
const morphics = new Item("Morphics", "A component used in many weapons and Warframe parts.");
const mutagen_sample = new Item("Mutagen Sample", "A rare component that can be found on Eris and the Derelict.");
const mytocardia_spore = new Item("Mytocardia Spore", "A resource that can be found in the Orb Vallis.");
const nacreous_pebble = new Item("Nacreous Pebble", "A resource that can be found by feeding the maw in Duviri.");
const nano_spores = new Item("Nano Spores", "A common component that is often found in quantities of over 1000.");
const narmer_isoplast = new Item("Narmer Isoplast", "A resource that can be obtained from Narmer Bounties.");
const neural_sensor = new Item("Neural Sensor", "A rare component that can be found on Jupiter, Kuva Fortress, and the Kuva Fortress.");
const neurodes = new Item("Neurode", "A neural relay of mysterious origin.");
const nitain = new Item("Nitain Extract", "A rare component that is often used in the construction of Warframes and weapons.");
const nullstones = new Item("Nullstones", "A rare component that can be found in Railjack missions.");
const orokin_cell = new Item("Orokin Cell", "A cell extracted from the insides of any large orokin construct.");
const oxium = new Item("Oxium", "A rare component that can be found on Venus, Jupiter, and the Kuva Fortress.");
const pathos_clamp = new Item("Pathos Clamp", "A resource found in Duviri.");
const plastids = new Item("Plastids", "A common component that can be found on Saturn, Uranus, Phobos, and Pluto.");
const polymer_bundle = new Item("Polymer Bundle", "A common component that can be found on Mercury, Venus, and Uranus.");
const pustulite = new Item("Pustulite", "A resource that can be found in the Cambion Drift.");
const rubedo = new Item("Rubedo", "A common component that can be found on Phobos, Earth, Pluto, and Europa.");
const rune_marrow = new Item("Rune Marrow", "A component found in the Circuit (Duviri).");
const saggen_pearl = new Item("Saggen Pearl", "A component found in Duviri.");
const salvage = new Item("Salvage", "A common component that can be found on Mars, Jupiter, and Eris.");
const scintillant = new Item("Scintillant", "A rare component that can be found on Deimos in Isolation Vaults.");
const silphsela = new Item("Silphsela", "A resource that can be found in Duviri.");
const somatic_fibers = new Item("Somatic Fibers", "Dropped from Demolishers on Lua.");
const tasoma_extract = new Item("Tasoma Extract", "A resource that can be found in Duviri.");
const tellurium = new Item("Tellurium", "A rare component that can be found on Archwing missions and Uranus Sabotage missions.");
const tepa_nodule = new Item("Tepa Nodule", "A component found in the Orb Vallis.");
const thermal_sludge = new Item("Thermal Sludge", "A resource that can be found in the Orb Vallis.");
const thrax_plasm = new Item("Thrax Plasm", "Dropped by Thrax enemies in the Chrysalith.");
const titanium = new Item("Titanium", "A component found in Railjack missions.");
const vitus_essence = new Item("Vitus Essence", "A rare component that can be found in Arbitrations.");
const void_traces = new Item("Void Traces", "A rare component that can be found on the Void.");
const voidgel_orb = new Item("Voidgel Orb", "A rare component that can be found on the Chrysalith.");
const voidplume_quill = new Item("Voidplume Quill", "Found in the Chrysalith.");
const voidplume_pinion = new Item("Voidplume Pinion", "Dropped from Void Angels.");
const yao_shrub = new Item("Yao Shrub", "A component found in Duviri.");

// other 

const nora_cred = new Item("Nora Cred", "A currency used to purchase items from Nightwave.");
const javlok_capacitor = new Item("Javlok Capacitor", "A component dropped by Grineer Prosecutors.");
const damaged_necramech_weapon_barrel = new Item("Damaged Necramech Weapon Barrel", "Reward from Isolation Vault Bounties Rotation A.");
const damaged_necramech_weapon_receiver = new Item("Damaged Necramech Weapon Receiver", "Reward from Isolation Vault Bounties Rotation B.");
const damaged_necramech_weapon_stock = new Item("Damaged Necramech Weapon Stock", "Reward from Isolation Vault Bounties Rotation C.");

const intact_sentient_core = new Item("Intact Sentient Core", "A component dropped by Sentients.");
const exceptional_sentient_core = new Item("Exceptional Sentient Core", "A component dropped by Sentients.");
const eidolon_shard = new Item("Eidolon Shard", "A component dropped by Teralysts, Gantulysts, and Hydrolysts.");

const atmo_systems = new Item("Atmo Systems", "Obtainable from Heist Bounties or Little Duck.");
const calda_toroid = new Item("Calda Toroid", "Found in the Orb Vallis.");
const crisma_toroid = new Item("Crisma Toroid", "Dropped by the Profit-Taker Orb.");
const gyromag_systems = new Item("Gyromag Systems", "Obtainable from Heist Bounties or Little Duck.");
const lazulite_toroid = new Item("Lazulite Toroid", "Found in the Orb Vallis.");
const repeller_systems = new Item("Repeller Systems", "Obtainable from Heist Bounties or Little Duck.");
const sola_toroid = new Item("Sola Toroid", "Found in the Orb Vallis.");
const vega_toroid = new Item("Vega Toroid", "Found in the Orb Vallis.");

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


// the standing section
// --------------------
// --------------------

const new_loka = new Item("New Loka Standing", "Standing acquired from New Loka.");
const red_veil = new Item("Red Veil Standing", "Standing acquired from Red Veil.");
const steel_meridian = new Item("Steel Meridian Standing", "Standing acquired from Steel Meridian.");
const the_perrin_sequence = new Item("The Perrin Sequence Standing", "Standing acquired from The Perrin Sequence.");
const cephalon_suda = new Item("Cephalon Suda Standing", "Standing acquired from Cephalon Suda.");
const arbiters_of_hexis = new Item("Arbiters of Hexis Standing", "Standing acquired from the Arbiters of Hexis.");

const cephalon_simaris = new Item("Cephalon Simaris Standing", "Standing acquired from Cephalon Simaris.");
const entrati = new Item("Entrati Standing", "Standing acquired from the Entrati.");
const holdfasts = new Item("Holdfasts Standing", "Standing acquired from the Holdfasts.");
const necraloid = new Item("Necraloid Standing", "Standing acquired from the Necraloid.");
const solaris_united = new Item("Solaris United Standing", "Standing acquired from Solaris United.");
const ventkids = new Item("Ventkids Standing", "Standing acquired from the Ventkids.");
const vox_solaris = new Item("Vox Solaris Standing", "Standing acquired from Vox Solaris.");

// not really standing but close
const mother_token = new Item("Mother Token", "A currency used to purchase items from Mother.");
const grandmother_token = new Item("Grandmother Token", "A currency used to purchase items from Grandmother.");

const stock = new Item("Kahl Stock", "A currency used to purchase items from Kahl.");

// things you have to buy from certain vendors

const seriglass_shard = new Item("Seriglass Shard", "A component purchased from Grandmother.");
const buy_seriglass_shard = new Recipe("Buy Seriglass Shard", "Purchase a Seriglass Shard from Grandmother.")
    .addInput(grandmother_token, 20)
    .addOutput(seriglass_shard, 1);


// the mining section
// ------------------
// ------------------

// minerals

const adramalium = new Item("Adramalium", "A mineral found in the Cambion Drift.");
const amarast = new Item("Amarast", "A gem found in the Orb Vallis.");
const auron = new Item("Auron", "A mineral found in the Plains of Eidolon.");
const axidite = new Item("Axidite", "A gem found in the Orb Vallis.");
const bapholite = new Item("Bapholite", "A mineral found in the Cambion Drift.");
const coprun = new Item("Coprun", "A mineral found in the Plains of Eidolon.");
const crimzian = new Item("Crimzian", "A gem found in the Plains of Eidolon.");
const dagonic = new Item("Dagonic", "A gem found in the Cambion Drift.");
const devar = new Item("Devar", "A mineral found in the Plains of Eidolon.");
const embolos = new Item("Embolos", "A gem found in the Cambion Drift.");
const ferros = new Item("Ferros", "A mineral found in the Plains of Eidolon.");
const goblite = new Item("Goblite", "A mineral found in the Orb Vallis.");
const heciphron = new Item("Heciphron", "A gem found in the Cambion Drift.");
const hesperon = new Item("Hesperon", "A mineral found in the Orb Vallis.");
const iradite = new Item("Iradite", "A mineral found in the Plains of Eidolon.");
const namalon = new Item("Namalon", "A gem found in the Cambion Drift.");
const necrathene = new Item("Necrathene", "A gem found in the Cambion Drift.");
const noctrul = new Item("Noctrul", "A gem found in the Orb Vallis.");
const nyth = new Item("Nyth", "A gem found in the Plains of Eidolon.");
const phasmin = new Item("Phasmin", "A gem found in the Orb Vallis.");
const pyrol = new Item("Pyrol", "A mineral found in the Plains of Eidolon.");
const sentirum = new Item("Sentirum", "A gem found in the Plains of Eidolon.");
const thaumica = new Item("Thaumica", "A mineral found in the Cambion Drift.");
const thyst = new Item("Thyst", "A gem found in the Orb Vallis.");
const tiametrite = new Item("Tiametrite", "A mineral found in the Cambion Drift.");
const travoride = new Item("Travoride", "A gem found in the Orb Vallis.");
const venerol = new Item("Venerol", "A mineral found in the Orb Vallis.");
const veridos = new Item("Veridos", "A gem found in the Plains of Eidolon.");
const xenorhast = new Item("Xenorhast", "A gem found in the Cambion Drift.");
const zodian = new Item("Zodian", "A gem found in the Orb Vallis.");

// refined minerals

const adramal_alloy = new Item("Adramal Alloy", "A resource crafted from adramalium.");
const craft_adramal_alloy = new Recipe("Craft Adramal Alloy", "Reusable Blueprint from Otak at Entrati Rank 0.")
    .addInput(adramalium, 20)
    .addInput(credits, 1000)
    .addInput(travoride, 20)
    .addInput(plastids, 600)
    .addInput(lucent_teroglobe, 15)
    .addOutput(adramal_alloy, 20);

const auroxium_alloy = new Item("Auroxium Alloy", "A resource crafted from auron.");
const craft_auroxium_alloy = new Recipe("Craft Auroxium Alloy", "Reusable Blueprint from Old Man Suumbat.")
    .addInput(auron, 20)
    .addInput(credits, 1000)
    .addInput(oxium, 600)
    .addInput(morphics, 5)
    .addOutput(auroxium_alloy, 20);

const axidrol_alloy = new Item("Axidrol Alloy", "A resource crafted from axidite.");
const craft_axidrol_alloy = new Recipe("Craft Axidrol Alloy", "Reusable Blueprint from Smokefinger at rank 0.")
    .addInput(axidite, 20)
    .addInput(credits, 1000)
    .addInput(ferrite, 500)
    .addInput(rubedo, 10)
    .addOutput(axidrol_alloy, 20);

const cabochon_embolos = new Item("Cabochon Embolos", "A resource crafted from embolos.");
const craft_cabochon_embolos = new Recipe("Craft Cabochon Embolos", "Reusable Blueprint from Otak at Entrati Rank 3.")
    .addInput(embolos, 3)
    .addInput(credits, 1000)
    .addOutput(cabochon_embolos, 3);

const coprite_alloy = new Item("Coprite Alloy", "A resource crafted from coprun.");
const craft_coprite_alloy = new Recipe("Craft Coprite Alloy", "Reusable Blueprint from Smokefinger at rank 0.")
    .addInput(coprun, 20)
    .addInput(credits, 1000)
    .addInput(ferrite, 400)
    .addInput(rubedo, 50)
    .addOutput(coprite_alloy, 20);

const devolved_namalon = new Item("Devolved Namalon", "A resource crafted from namalon.");
const craft_devolved_namalon = new Recipe("Craft Devolved Namalon", "Reusable Blueprint from Otak at Entrati Rank 1.")
    .addInput(namalon, 20)
    .addInput(credits, 1000)
    .addInput(ferros, 20)
    .addInput(rubedo, 160)
    .addInput(lucent_teroglobe, 15)
    .addOutput(devolved_namalon, 20);

const esher_devar = new Item("Esher Devar", "A resource crafted from devar.");
const craft_esher_devar = new Recipe("Craft Esher Devar", "Reusable Blueprint from Smokefinger at rank 1.")
    .addInput(devar, 20)
    .addInput(credits, 1000)
    .addOutput(esher_devar, 20);

const faceted_tiametrite = new Item("Faceted Tiametrite", "A resource crafted from tiametrite.");
const craft_faceted_tiametrite = new Recipe("Craft Faceted Tiametrite", "Reusable Blueprint from Otak at Entrati Rank 0.")
    .addInput(tiametrite, 10)
    .addInput(credits, 1000)
    .addOutput(faceted_tiametrite, 10);

const fersteel_alloy = new Item("Fersteel Alloy", "A resource crafted from ferros.");
const craft_fersteel_alloy = new Recipe("Craft Fersteel Alloy", "Reusable Blueprint from Old Man Suumbat at rank Visitor.")
    .addInput(ferros, 20)
    .addInput(credits, 1000)
    .addInput(plastids, 400)
    .addInput(rubedo, 200)
    .addOutput(fersteel_alloy, 20);

const goblite_tears = new Item("Goblite Tears", "A resource crafted from goblite.");
const craft_goblite_tears = new Recipe("Craft Goblite Tears", "Reusable Blueprint from Smokefinger at rank 1.")
    .addInput(goblite, 10)
    .addInput(credits, 2500)
    .addOutput(goblite_tears, 10);

const heart_noctrul = new Item("Heart Noctrul", "A resource crafted from noctrul.");
const craft_heart_noctrul = new Recipe("Craft Heart Noctrul", "Reusable Blueprint from Smokefinger at rank 0.")
    .addInput(noctrul, 10)
    .addInput(credits, 1000)
    .addOutput(heart_noctrul, 10);

const heart_nyth = new Item("Heart Nyth", "A resource crafted from nyth.");
const craft_heart_nyth = new Recipe("Craft Heart Nyth", "Reusable Blueprint from Old Man Suumbaat.")
    .addInput(nyth, 3)
    .addInput(credits, 10000)
    .addOutput(heart_nyth, 3);

const hespazym_alloy = new Item("Hespazym Alloy", "A resource crafted from hesperon.");
const craft_hespazym_alloy = new Recipe("Craft Hespazym Alloy", "Reusable Blueprint from Smokefinger at rank 2.")
    .addInput(hesperon, 20)
    .addInput(credits, 1000)
    .addInput(plastids, 300)
    .addInput(morphics, 2)
    .addOutput(hespazym_alloy, 20);

const marquise_thyst = new Item("Marquise Thyst", "A resource crafted from thyst.");
const craft_marquise_thyst = new Recipe("Craft Marquise Thyst", "Reusable blueprint from Smokefinger.")
    .addInput(thyst, 3)
    .addInput(credits, 1000)
    .addOutput(marquise_thyst, 3);

const marquise_veridos = new Item("Marquise Veridos", "A resource crafted from veridos.");
const craft_marquise_veridos = new Recipe("Craft Marquise Veridos", "Reusable Blueprint from Old Man Suumbaat at Rank 2.")
    .addInput(veridos, 10)
    .addInput(credits, 2500)
    .addOutput(marquise_veridos, 10);

const purged_dagonic = new Item("Purged Dagonic", "A resource crafted from dagonic.");
const craft_purged_dagonic = new Recipe("Craft Purged Dagonic", "Reusable Blueprint from Otak at rank 0.")
    .addInput(dagonic, 10)
    .addInput(credits, 1000)
    .addOutput(purged_dagonic, 10);

const purified_heciphron = new Item("Purified Heciphron", "A resource crafted from heciphron.");
const craft_purified_heciphron = new Recipe("Craft Purified Heciphron", "Reusable Blueprint from Otak at rank 1.")
    .addInput(heciphron, 10)
    .addInput(credits, 1000)
    .addOutput(purified_heciphron, 10);

const pyrotic_alloy = new Item("Pyrotic Alloy", "A resource crafted from pyrol.");
const craft_pyrotic_alloy = new Recipe("Craft Pyrotic Alloy", "Reusable Blueprint from Smokefinger at rank 2.")
    .addInput(pyrol, 20)
    .addInput(credits, 1000)
    .addInput(cryotic, 200)
    .addInput(rubedo, 50)
    .addOutput(pyrotic_alloy, 20);

const radian_sentirum = new Item("Radian Sentirum", "A resource crafted from sentirum.");
const craft_radian_sentirum = new Recipe("Craft Radian Sentirum", "Reusable Blueprint from Old Man Suumbaat.")
    .addInput(sentirum, 3)
    .addInput(credits, 10000)
    .addOutput(radian_sentirum, 3);

const radiant_zodian = new Item("Radiant Zodian", "A resource crafted from zodian.");
const craft_radiant_zodian = new Recipe("Craft Radiant Zodian", "Reusable Blueprint from Smokefinger at rank 3.")
    .addInput(zodian, 3)
    .addInput(credits, 10000)
    .addOutput(radiant_zodian, 3);

const smooth_phasmin = new Item("Smooth Phasmin", "A resource crafted from phasmin.");
const craft_smooth_phasmin = new Recipe("Craft Smooth Phasmin", "Reusable Blueprint from Smokefinger at rank 0.")
    .addInput(phasmin, 10)
    .addInput(credits, 1000)
    .addOutput(smooth_phasmin, 10);

const star_crimzian = new Item("Star Crimzian", "A resource crafted from crimzian.");
const craft_star_crimzian = new Recipe("Craft Star Crimzian", "Reusable Blueprint from Smokefinger at rank 3.")
    .addInput(crimzian, 6)
    .addInput(credits, 5000)
    .addOutput(star_crimzian, 6);

const star_amarast = new Item("Star Amarast", "A resource crafted from amarast.");
const craft_star_amarast = new Recipe("Craft Star Amarast", "Reusable Blueprint from Smokefinger at rank 2.")
    .addInput(amarast, 6)
    .addInput(credits, 5000)
    .addOutput(star_amarast, 6);

const stellated_necrathene = new Item("Stellated Necrathene", "A resource crafted from necrathene.");
const craft_stellated_necrathene = new Recipe("Craft Stellated Necrathene", "Reusable Blueprint from Smokefinger at rank 0.")
    .addInput(necrathene, 6)
    .addInput(credits, 1000)
    .addOutput(stellated_necrathene, 6);

const tempered_bapholite = new Item("Tempered Bapholite", "A resource crafted from bapholite.");
const craft_tempered_bapholite = new Recipe("Craft Tempered Bapholite", "Reusable Blueprint from Otak at Entrati Rank 0.")
    .addInput(bapholite, 20)
    .addInput(credits, 1000)
    .addInput(pyrol, 20)
    .addInput(nano_spores, 1600)
    .addInput(lucent_teroglobe, 15)
    .addOutput(tempered_bapholite, 20);

const thaumic_distillate = new Item("Thaumic Distillate", "A resource crafted from thaumica.");
const craft_thaumic_distillate = new Recipe("Craft Thaumic Distillate", "Reusable Blueprint from Otak at rank 2.")
    .addInput(thaumica, 20)
    .addInput(venerol, 20)
    .addInput(gallium, 4)
    .addInput(lucent_teroglobe, 15)
    .addInput(credits, 1000)
    .addOutput(thaumic_distillate, 20);

const trapezium_xenorhast = new Item("Trapezium Xenorhast", "A resource crafted from xenorhast.");
const craft_trapezium_xenorhast = new Recipe("Craft Trapezium Xenorhast", "Reusable Blueprint from Otak at Entrati Rank 3.")
    .addInput(xenorhast, 3)
    .addInput(credits, 1000)
    .addOutput(trapezium_xenorhast, 3);

const travocyte_alloy = new Item("Travocyte Alloy", "A resource crafted from travoride.");
const craft_travocyte_alloy = new Recipe("Craft Travocyte Alloy", "Reusable Blueprint from Smokefinger at rank 0.")
    .addInput(travoride, 20)
    .addInput(credits, 1000)
    .addInput(salvage, 500)
    .addInput(plastids, 100)
    .addOutput(travocyte_alloy, 20);

const venerdo_alloy = new Item("Venerdo Alloy", "A resource crafted from venerol.");
const craft_venerdo_alloy = new Recipe("Craft Venerdo Alloy", "Reusable Blueprint from Smokefinger at rank 1.")
    .addInput(venerol, 20)
    .addInput(credits, 1000)
    .addInput(rubedo, 300)
    .addInput(gallium, 2)
    .addOutput(venerdo_alloy, 20);

// fish

const amniophysi_small = new Item("Amniophysi (Small)", "A fish found in the Cambion Drift.");
const amniophysi_medium = new Item("Amniophysi (Medium)", "A fish found in the Cambion Drift.");
const amniophysi_large = new Item("Amniophysi (Large)", "A fish found in the Cambion Drift.");

const aquapulmo_basic = new Item("Aquapulmo (Basic)", "A fish found in the Cambion Drift.");
const aquapulmo_adorned = new Item("Aquapulmo (Adorned)", "A fish found in the Cambion Drift.");
const aquapulmo_magnificent = new Item("Aquapulmo (Magnificent)", "A fish found in the Cambion Drift.");

const barbisteo_small = new Item("Barbisteo (Small)", "A fish found in the Cambion Drift.");
const barbisteo_medium = new Item("Barbisteo (Medium)", "A fish found in the Cambion Drift.");
const barbisteo_large = new Item("Barbisteo (Large)", "A fish found in the Cambion Drift.");

const charamote_basic = new Item("Charamote (Basic)", "A servofish found in the Orb Vallis.");
const charamote_adorned = new Item("Charamote (Adorned)", "A servofish found in the Orb Vallis.");
const charamote_magnificent = new Item("Charamote (Magnificent)", "A servofish found in the Orb Vallis.");

const charc_eel_small = new Item("Charc Eel (Small)", "A fish found in the Plains of Eidolon.");
const charc_eel_medium = new Item("Charc Eel (Medium)", "A fish found in the Plains of Eidolon.");
const charc_eel_large = new Item("Charc Eel (Large)", "A fish found in the Plains of Eidolon.");

const chondrichord_small = new Item("Chondrichord (Small)", "A fish found in the Cambion Drift.");
const chondrichord_medium = new Item("Chondrichord (Medium)", "A fish found in the Cambion Drift.");
const chondrichord_large = new Item("Chondrichord (Large)", "A fish found in the Cambion Drift.");

const cryptosuctus_small = new Item("Cryptosuctus (Small)", "A fish found in the Cambion Drift.");
const cryptosuctus_medium = new Item("Cryptosuctus (Medium)", "A fish found in the Cambion Drift.");
const cryptosuctus_large = new Item("Cryptosuctus (Large)", "A fish found in the Cambion Drift.");

const eye_eye_basic = new Item("Eye-Eye (Basic)", "A servofish found in the Orb Vallis.");
const eye_eye_adorned = new Item("Eye-Eye (Adorned)", "A servofish found in the Orb Vallis.");
const eye_eye_magnificent = new Item("Eye-Eye (Magnificent)", "A servofish found in the Orb Vallis.");

const flagellocanth_small = new Item("Flagellocanth (Small)", "A fish found in the Cambion Drift.");
const flagellocanth_medium = new Item("Flagellocanth (Medium)", "A fish found in the Cambion Drift.");
const flagellocanth_large = new Item("Flagellocanth (Large)", "A fish found in the Cambion Drift.");

const glutinox_small = new Item("Glutinox (Small)", "A fish found in the Cambion Drift.");
const glutinox_medium = new Item("Glutinox (Medium)", "A fish found in the Cambion Drift.");
const glutinox_large = new Item("Glutinox (Large)", "A fish found in the Cambion Drift.");

const kriller_basic = new Item("Kriller (Basic)", "A servofish found in the Orb Vallis.");
const kriller_adorned = new Item("Kriller (Adorned)", "A servofish found in the Orb Vallis.");
const kriller_magnificent = new Item("Kriller (Magnificent)", "A servofish found in the Orb Vallis.");

const kymaeros_small = new Item("Kymaeros (Small)", "A fish found in the Cambion Drift.");
const kymaeros_medium = new Item("Kymaeros (Medium)", "A fish found in the Cambion Drift.");
const kymaeros_large = new Item("Kymaeros (Large)", "A fish found in the Cambion Drift.");

const lobostriscid_small = new Item("Lobostriscid (Small)", "A fish found in the Cambion Drift.");
const lobostriscid_medium = new Item("Lobostriscid (Medium)", "A fish found in the Cambion Drift.");
const lobostriscid_large = new Item("Lobostriscid (Large)", "A fish found in the Cambion Drift.");

const longwinder_basic = new Item("Longwinder (Basic)", "A servofish found in the Orb Vallis.");
const longwinder_adorned = new Item("Longwinder (Adorned)", "A servofish found in the Orb Vallis.");
const longwinder_magnificent = new Item("Longwinder (Magnificent)", "A servofish found in the Orb Vallis.");

const mawfish_small = new Item("Mawfish (Small)", "A fish found in the Plains of Eidolon.");
const mawfish_medium = new Item("Mawfish (Medium)", "A fish found in the Plains of Eidolon.");
const mawfish_large = new Item("Mawfish (Large)", "A fish found in the Plains of Eidolon.");

const mortus_lungfish_small = new Item("Mortus Lungfish (Small)", "A fish found in the Plains of Eidolon.");
const mortus_lungfish_medium = new Item("Mortus Lungfish (Medium)", "A fish found in the Plains of Eidolon.");
const mortus_lungfish_large = new Item("Mortus Lungfish (Large)", "A fish found in the Plains of Eidolon."); 

const murkray_small = new Item("Murkray (Small)", "A fish found in the Plains of Eidolon.");
const murkray_medium = new Item("Murkray (Medium)", "A fish found in the Plains of Eidolon.");
const murkray_large = new Item("Murkray (Large)", "A fish found in the Plains of Eidolon.");

const myxostomata_basic = new Item("Myxostomata (Basic)", "A servofish found in the Cambion Drift.");
const myxostomata_adorned = new Item("Myxostomata (Adorned)", "A servofish found in the Cambion Drift.");
const myxostomata_magnificent = new Item("Myxostomata (Magnificent)", "A servofish found in the Cambion Drift.");

const norg_small = new Item("Norg (Small)", "A fish found in the Plains of Eidolon.");
const norg_medium = new Item("Norg (Medium)", "A fish found in the Plains of Eidolon.");
const norg_large = new Item("Norg (Large)", "A fish found in the Plains of Eidolon.");

const ostimyr_basic = new Item("Ostimyr (Basic)", "A servofish found in the Cambion Drift.");
const ostimyr_adorned = new Item("Ostimyr (Adorned)", "A servofish found in the Cambion Drift.");
const ostimyr_magnificent = new Item("Ostimyr (Magnificent)", "A servofish found in the Cambion Drift.");

const recaster_basic = new Item("Recaster (Basic)", "A servofish found in the Orb Vallis.");
const recaster_adorned = new Item("Recaster (Adorned)", "A servofish found in the Orb Vallis.");
const recaster_magnificent = new Item("Recaster (Magnificent)", "A servofish found in the Orb Vallis.");

const scrubber_basic = new Item("Scrubber (Basic)", "A servofish found in the Orb Vallis.");
const scrubber_adorned = new Item("Scrubber (Adorned)", "A servofish found in the Orb Vallis.");
const scrubber_magnificent = new Item("Scrubber (Magnificent)", "A servofish found in the Orb Vallis.");

const sharrac_small = new Item("Sharrac (Small)", "A fish found in the Plains of Eidolon.");
const sharrac_medium = new Item("Sharrac (Medium)", "A fish found in the Plains of Eidolon.");
const sharrac_large = new Item("Sharrac (Large)", "A fish found in the Plains of Eidolon.");

const synathid_basic = new Item("Synathid (Basic)", "A servofish found in the Orb Vallis.");
const synathid_adorned = new Item("Synathid (Adorned)", "A servofish found in the Orb Vallis.");
const synathid_magnificent = new Item("Synathid (Magnificent)", "A servofish found in the Orb Vallis.");

const tink_basic = new Item("Tink (Basic)", "A servofish found in the Orb Vallis.");
const tink_adorned = new Item("Tink (Adorned)", "A servofish found in the Orb Vallis.");
const tink_magnificent = new Item("Tink (Magnificent)", "A servofish found in the Orb Vallis.");

const tralok_small = new Item("Tralok (Small)", "A fish found in the Plains of Eidolon.");
const tralok_medium = new Item("Tralok (Medium)", "A fish found in the Plains of Eidolon.");
const tralok_large = new Item("Tralok (Large)", "A fish found in the Plains of Eidolon.");

const tromyzon_basic = new Item("Tromyzon (Basic)", "A servofish found in the Orb Vallis.");
const tromyzon_adorned = new Item("Tromyzon (Adorned)", "A servofish found in the Orb Vallis.");
const tromyzon_magnificent = new Item("Tromyzon (Magnificent)", "A servofish found in the Orb Vallis."); 

const vitreospina_basic = new Item("Vitreospina (Basic)", "A fish found in the Cambion Drift.");
const vitreospina_adorned = new Item("Vitreospina (Adorned)", "A fish found in the Cambion Drift.");
const vitreospina_magnificent = new Item("Vitreospina (Magnificent)", "A fish found in the Cambion Drift.");

// fish parts

const benign_infested_tumor = new Item("Benign Infested Tumor", "A resource acquired from cutting all Deimos fish.");
const biotic_filter = new Item("Biotic Filter", "A resource acquired from cutting some Deimos fish.");
const charamote_sagan_module = new Item("Charamote Sagan Module", "A resource acquired from cutting Charamote.");
const charc_electroplax = new Item("Charc Electroplax", "A resource acquired from cutting Charc Eels.");
const cranial_foremount = new Item("Cranial Foremount", "A resource acquired from cutting Myxostomata.");
const dendrite_blastoma = new Item("Dendrite Blastoma", "A resource acquired from cutting some Deimos fish.");
const eye_eye_rotoblade = new Item("Eye-Eye Rotoblade", "A resource acquired from cutting Eye-Eye.");
const ferment_bladder = new Item("Ferment Bladder", "A resource acquired from cutting some Deimos fish.");
const fish_meat = new Item("Fish Meat", "A resource acquired from cutting all Plains of Eidolon fish.");
const fish_oil = new Item("Fish Oil", "A resource acquired from cutting all Plains of Eidolon fish.");
const fish_scales = new Item("Fish Scales", "A resource acquired from cutting all Plains of Eidolon fish.");
const kriller_thermal_laser = new Item("Kriller Thermal Laser", "A resource acquired from cutting Kriller.");
const longwinder_lathe_coagulant = new Item("Longwinder Lathe Coagulant", "A resource acquired from cutting Longwinder.");
const mawfish_bones = new Item("Mawfish Bones", "A resource acquired from cutting Mawfish.");
const mortus_horn = new Item("Mortus Horn", "A resource acquired from cutting Mortus Lungfish.");
const murkray_liver = new Item("Murkray Liver", "A resource acquired from cutting Murkray.");
const norg_brain = new Item("Norg Brain", "A resource acquired from cutting Norg.");
const ocular_stem_root = new Item("Ocular Stem Root", "A resource acquired from cutting flagellocanth.");
const parasitic_tethermaw = new Item("Parasitic Tethermaw", "A resource acquired from cutting Lobostriscid.");
const pustulent_cognitive_nodule = new Item("Pustulent Cognitive Nodule", "A resource acquired from cutting some Deimos fish.");
const recaster_neural_relay = new Item("Recaster Neural Relay", "A resource acquired from cutting Recaster.");
const saturated_muscle_mass = new Item("Saturated Muscle Mass", "A resource acquired from cutting some Deimos fish.");
const scrap = new Item("Scrap", "A resource acquired from cutting Servofish.");
const scrubber_exa_brain = new Item("Scrubber Exa Brain", "A resource acquired from cutting Scrubber.");
const sharrac_teeth = new Item("Sharrac Teeth", "A resource acquired from cutting Sharrac.");
const spinal_core_section = new Item("Spinal Core Section", "A resource acquired from cutting some Deimos fish.");
const sporulate_sac = new Item("Sporulate Sac", "A resource acquired from cutting Glutinox.");
const synathid_ecosynth_analyzer = new Item("Synathid Ecosynth Analyzer", "A resource acquired from cutting Synathid.");
const tink_dissipator_coil = new Item("Tink Dissipator Coil", "A resource acquired from cutting Tink.");
const tralok_eyes = new Item("Tralok Eyes", "A resource acquired from cutting Tralok.");
const tromyzon_entroplasma = new Item("Tromyzon Entroplasma", "A resource acquired from cutting Tromyzon.");
const tubercular_gill_system = new Item("Tubercular Gill System", "A resource acquired from cutting some Deimos fish.");
const waxen_sebum_deposit = new Item("Waxen Sebum Deposit", "A resource acquired from cutting Amniophysi.");

// filet those fish

const cut_amniophysi_small = new Recipe("Cut Amniophysi (Small)", "Cut an Amniophysi (Small) into parts.")
    .addInput(amniophysi_small, 1)
    .addOutput(benign_infested_tumor, 3)
    .addOutput(ferment_bladder, 2)
    .addOutput(waxen_sebum_deposit, 3);
const cut_amniophysi_medium = new Recipe("Cut Amniophysi (Medium)", "Cut an Amniophysi (Medium) into parts.")
    .addInput(amniophysi_medium, 1)
    .addOutput(benign_infested_tumor, 4)
    .addOutput(ferment_bladder, 3)
    .addOutput(waxen_sebum_deposit, 3);
const cut_amniophysi_large = new Recipe("Cut Amniophysi (Large)", "Cut an Amniophysi (Large) into parts.")
    .addInput(amniophysi_large, 1)
    .addOutput(benign_infested_tumor, 8)
    .addOutput(ferment_bladder, 6)
    .addOutput(waxen_sebum_deposit, 3);

const cut_aquapulmo_basic = new Recipe("Cut Aquapulmo (Basic)", "Cut an Aquapulmo (Basic) into parts.")
    .addInput(aquapulmo_basic, 1)
    .addOutput(benign_infested_tumor, 2)
    .addOutput(biotic_filter, 1)
    .addOutput(ferment_bladder, 2)
    .addOutput(pustulent_cognitive_nodule, 1)
    .addOutput(tubercular_gill_system, 1);
const cut_aquapulmo_adorned = new Recipe("Cut Aquapulmo (Adorned)", "Cut an Aquapulmo (Adorned) into parts.")
    .addInput(aquapulmo_adorned, 1)
    .addOutput(benign_infested_tumor, 4)
    .addOutput(biotic_filter, 1)
    .addOutput(ferment_bladder, 4)
    .addOutput(pustulent_cognitive_nodule, 1)
    .addOutput(tubercular_gill_system, 2);
const cut_aquapulmo_magnificent = new Recipe("Cut Aquapulmo (Magnificent)", "Cut an Aquapulmo (Magnificent) into parts.")
    .addInput(aquapulmo_magnificent, 1)
    .addOutput(benign_infested_tumor, 8)
    .addOutput(biotic_filter, 1)
    .addOutput(ferment_bladder, 6)
    .addOutput(pustulent_cognitive_nodule, 2)
    .addOutput(tubercular_gill_system, 2);

const cut_barbisteo_small = new Recipe("Cut Barbisteo (Small)", "Cut a Barbisteo (Small) into parts.")
    .addInput(barbisteo_small, 1)
    .addOutput(benign_infested_tumor, 3)
    .addOutput(ferment_bladder, 3)
    .addOutput(dendrite_blastoma, 1);
const cut_barbisteo_medium = new Recipe("Cut Barbisteo (Medium)", "Cut a Barbisteo (Medium) into parts.")
    .addInput(barbisteo_medium, 1)
    .addOutput(benign_infested_tumor, 4)
    .addOutput(ferment_bladder, 4)
    .addOutput(dendrite_blastoma, 1);
const cut_barbisteo_large = new Recipe("Cut Barbisteo (Large)", "Cut a Barbisteo (Large) into parts.")
    .addInput(barbisteo_large, 1)
    .addOutput(benign_infested_tumor, 8)
    .addOutput(ferment_bladder, 6)
    .addOutput(dendrite_blastoma, 1);

const cut_charamote_basic = new Recipe("Cut Charamote (Basic)", "Cut a Charamote (Basic) into parts.")
    .addInput(charamote_basic, 1)
    .addOutput(scrap, 1)
    .addOutput(charamote_sagan_module, 1);
const cut_charamote_adorned = new Recipe("Cut Charamote (Adorned)", "Cut a Charamote (Adorned) into parts.")
    .addInput(charamote_adorned, 1)
    .addOutput(scrap, 3)
    .addOutput(charamote_sagan_module, 1);
const cut_charamote_magnificent = new Recipe("Cut Charamote (Magnificent)", "Cut a Charamote (Magnificent) into parts.")
    .addInput(charamote_magnificent, 1)
    .addOutput(scrap, 5)
    .addOutput(charamote_sagan_module, 1);

const cut_charc_eel_small = new Recipe("Cut Charc Eel (Small)", "Cut a Charc Eel (Small) into parts.")
    .addInput(charc_eel_small, 1)
    .addOutput(fish_meat, 3)
    .addOutput(fish_oil, 1)
    .addOutput(fish_scales, 2)
    .addOutput(charc_electroplax, 1);
const cut_charc_eel_medium = new Recipe("Cut Charc Eel (Medium)", "Cut a Charc Eel (Medium) into parts.")
    .addInput(charc_eel_medium, 1)
    .addOutput(fish_meat, 4)
    .addOutput(fish_oil, 2)
    .addOutput(fish_scales, 3)
    .addOutput(charc_electroplax, 1);
const cut_charc_eel_large = new Recipe("Cut Charc Eel (Large)", "Cut a Charc Eel (Large) into parts.")
    .addInput(charc_eel_large, 1)
    .addOutput(fish_meat, 5)
    .addOutput(fish_oil, 3)
    .addOutput(fish_scales, 4)
    .addOutput(charc_electroplax, 1);

const cut_chondricord_small = new Recipe("Cut Chondricord (Small)", "Cut a Chondricord (Small) into parts.")
    .addInput(chondrichord_small, 1)
    .addOutput(benign_infested_tumor, 3)
    .addOutput(tubercular_gill_system, 2)
    .addOutput(spinal_core_section, 2);
const cut_chondricord_medium = new Recipe("Cut Chondricord (Medium)", "Cut a Chondricord (Medium) into parts.")
    .addInput(chondrichord_medium, 1)
    .addOutput(benign_infested_tumor, 4)
    .addOutput(tubercular_gill_system, 3)
    .addOutput(spinal_core_section, 2);
const cut_chondricord_large = new Recipe("Cut Chondricord (Large)", "Cut a Chondricord (Large) into parts.")
    .addInput(chondrichord_large, 1)
    .addOutput(benign_infested_tumor, 8)
    .addOutput(tubercular_gill_system, 5)
    .addOutput(spinal_core_section, 2);

const cut_cryptosuctus_small = new Recipe("Cut Cryptosuctus (Small)", "Cut a Cryptosuctus (Small) into parts.")
    .addInput(cryptosuctus_small, 1)
    .addOutput(benign_infested_tumor, 2)
    .addOutput(ferment_bladder, 2)
    .addOutput(pustulent_cognitive_nodule, 1);
const cut_cryptosuctus_medium = new Recipe("Cut Cryptosuctus (Medium)", "Cut a Cryptosuctus (Medium) into parts.")
    .addInput(cryptosuctus_medium, 1)
    .addOutput(benign_infested_tumor, 4)
    .addOutput(ferment_bladder, 3)
    .addOutput(pustulent_cognitive_nodule, 1);
const cut_cryptosuctus_large = new Recipe("Cut Cryptosuctus (Large)", "Cut a Cryptosuctus (Large) into parts.")
    .addInput(cryptosuctus_large, 1)
    .addOutput(benign_infested_tumor, 6)
    .addOutput(ferment_bladder, 4)
    .addOutput(pustulent_cognitive_nodule, 1);

const cut_eye_eye_basic = new Recipe("Cut Eye-Eye (Basic)", "Cut a Eye-Eye (Basic) into parts.")
    .addInput(eye_eye_basic, 1)
    .addOutput(scrap, 3)
    .addOutput(eye_eye_rotoblade, 1);
const cut_eye_eye_adorned = new Recipe("Cut Eye-Eye (Adorned)", "Cut a Eye-Eye (Adorned) into parts.")
    .addInput(eye_eye_adorned, 1)
    .addOutput(scrap, 4)
    .addOutput(eye_eye_rotoblade, 1);
const cut_eye_eye_magnificent = new Recipe("Cut Eye-Eye (Magnificent)", "Cut a Eye-Eye (Magnificent) into parts.")
    .addInput(eye_eye_magnificent, 1)
    .addOutput(scrap, 5)
    .addOutput(eye_eye_rotoblade, 1);

const cut_flagellocanth_small = new Recipe("Cut Flagellocanth (Small)", "Cut a Flagellocanth (Small) into parts.")
    .addInput(flagellocanth_small, 1)
    .addOutput(benign_infested_tumor,3)
    .addOutput(ferment_bladder, 3)
    .addOutput(ocular_stem_root, 1);
const cut_flagellocanth_medium = new Recipe("Cut Flagellocanth (Medium)", "Cut a Flagellocanth (Medium) into parts.")
    .addInput(flagellocanth_medium, 1)
    .addOutput(benign_infested_tumor, 5)
    .addOutput(ferment_bladder, 5)
    .addOutput(ocular_stem_root, 1);
const cut_flagellocanth_large = new Recipe("Cut Flagellocanth (Large)", "Cut a Flagellocanth (Large) into parts.")
    .addInput(flagellocanth_large, 1)
    .addOutput(benign_infested_tumor, 8)
    .addOutput(ferment_bladder, 6)
    .addOutput(ocular_stem_root, 1);

const cut_glutinox_small = new Recipe("Cut Glutinox (Small)", "Cut a Glutinox (Small) into parts.")
    .addInput(glutinox_small, 1)
    .addOutput(benign_infested_tumor, 2)
    .addOutput(ferment_bladder, 2)
    .addOutput(sporulate_sac, 1);
const cut_glutinox_medium = new Recipe("Cut Glutinox (Medium)", "Cut a Glutinox (Medium) into parts.")
    .addInput(glutinox_medium, 1)
    .addOutput(benign_infested_tumor, 4)
    .addOutput(ferment_bladder, 4)
    .addOutput(sporulate_sac, 1);
const cut_glutinox_large = new Recipe("Cut Glutinox (Large)", "Cut a Glutinox (Large) into parts.")
    .addInput(glutinox_large, 1)
    .addOutput(benign_infested_tumor, 6)
    .addOutput(ferment_bladder, 6)
    .addOutput(sporulate_sac, 1);

const cut_kriller_basic = new Recipe("Cut Kriller (Basic)", "Cut a Kriller (Basic) into parts.")
    .addInput(kriller_basic, 1)
    .addOutput(scrap, 1)
    .addOutput(kriller_thermal_laser, 1);
const cut_kriller_adorned = new Recipe("Cut Kriller (Adorned)", "Cut a Kriller (Adorned) into parts.")
    .addInput(kriller_adorned, 1)
    .addOutput(scrap, 2)
    .addOutput(kriller_thermal_laser, 1);
const cut_kriller_magnificent = new Recipe("Cut Kriller (Magnificent)", "Cut a Kriller (Magnificent) into parts.")
    .addInput(kriller_magnificent, 1)
    .addOutput(scrap, 3)
    .addOutput(kriller_thermal_laser, 1);

const cut_kymaeros_small = new Recipe("Cut Kymaeros (Small)", "Cut a Kymaeros (Small) into parts.")
    .addInput(kymaeros_small, 1)
    .addOutput(benign_infested_tumor, 2)
    .addOutput(ferment_bladder, 2)
    .addOutput(saturated_muscle_mass, 1);
const cut_kymaeros_medium = new Recipe("Cut Kymaeros (Medium)", "Cut a Kymaeros (Medium) into parts.")
    .addInput(kymaeros_medium, 1)
    .addOutput(benign_infested_tumor, 3)
    .addOutput(ferment_bladder, 3)
    .addOutput(saturated_muscle_mass, 1);
const cut_kymaeros_large = new Recipe("Cut Kymaeros (Large)", "Cut a Kymaeros (Large) into parts.")
    .addInput(kymaeros_large, 1)
    .addOutput(benign_infested_tumor, 6)
    .addOutput(ferment_bladder, 6)
    .addOutput(saturated_muscle_mass, 1);

const cut_lobostriscid_small = new Recipe("Cut Lobostriscid (Small)", "Cut a Lobostriscid (Small) into parts.")
    .addInput(lobostriscid_small, 1)
    .addOutput(benign_infested_tumor, 3)
    .addOutput(ferment_bladder, 3)
    .addOutput(parasitic_tethermaw, 1);
const cut_lobostriscid_medium = new Recipe("Cut Lobostriscid (Medium)", "Cut a Lobostriscid (Medium) into parts.")
    .addInput(lobostriscid_medium, 1)
    .addOutput(benign_infested_tumor, 4)
    .addOutput(ferment_bladder, 4)
    .addOutput(parasitic_tethermaw, 1);
const cut_lobostriscid_large = new Recipe("Cut Lobostriscid (Large)", "Cut a Lobostriscid (Large) into parts.")
    .addInput(lobostriscid_large, 1)
    .addOutput(benign_infested_tumor, 6)
    .addOutput(ferment_bladder, 6)
    .addOutput(parasitic_tethermaw, 1);

const cut_longwinder_basic = new Recipe("Cut Longwinder (Basic)", "Cut a Longwinder (Basic) into parts.")
    .addInput(longwinder_basic, 1)
    .addOutput(scrap, 2)
    .addOutput(longwinder_lathe_coagulant, 1);
const cut_longwinder_adorned = new Recipe("Cut Longwinder (Adorned)", "Cut a Longwinder (Adorned) into parts.")
    .addInput(longwinder_adorned, 1)
    .addOutput(scrap, 3)
    .addOutput(longwinder_lathe_coagulant, 1);
const cut_longwinder_magnificent = new Recipe("Cut Longwinder (Magnificent)", "Cut a Longwinder (Magnificent) into parts.")
    .addInput(longwinder_magnificent, 1)
    .addOutput(scrap, 4)
    .addOutput(longwinder_lathe_coagulant, 1);

const cut_mawfish_small = new Recipe("Cut Mawfish (Small)", "Cut a Mawfish (Small) into parts.")
    .addInput(mawfish_small, 1)
    .addOutput(fish_meat, 3)
    .addOutput(fish_oil, 2)
    .addOutput(fish_scales, 1)
    .addOutput(mawfish_bones, 1);
const cut_mawfish_medium = new Recipe("Cut Mawfish (Medium)", "Cut a Mawfish (Medium) into parts.")
    .addInput(mawfish_medium, 1)
    .addOutput(fish_meat, 4)
    .addOutput(fish_oil, 3)
    .addOutput(fish_scales, 2)
    .addOutput(mawfish_bones, 1);
const cut_mawfish_large = new Recipe("Cut Mawfish (Large)", "Cut a Mawfish (Large) into parts.")
    .addInput(mawfish_large, 1)
    .addOutput(fish_meat, 5)
    .addOutput(fish_oil, 4)
    .addOutput(fish_scales, 3)
    .addOutput(mawfish_bones, 1);

const cut_mortus_lungfish_small = new Recipe("Cut Mortus Lungfish (Small)", "Cut a Mortus Lungfish (Small) into parts.")
    .addInput(mortus_lungfish_small, 1)
    .addOutput(fish_meat, 3)
    .addOutput(fish_oil, 4)
    .addOutput(fish_scales, 1)
    .addOutput(mortus_horn, 1);
const cut_mortus_lungfish_medium = new Recipe("Cut Mortus Lungfish (Medium)", "Cut a Mortus Lungfish (Medium) into parts.")
    .addInput(mortus_lungfish_medium, 1)
    .addOutput(fish_meat, 4)
    .addOutput(fish_oil, 6)
    .addOutput(fish_scales, 2)
    .addOutput(mortus_horn, 1);
const cut_mortus_lungfish_large = new Recipe("Cut Mortus Lungfish (Large)", "Cut a Mortus Lungfish (Large) into parts.")
    .addInput(mortus_lungfish_large, 1)
    .addOutput(fish_meat, 5)
    .addOutput(fish_oil, 8)
    .addOutput(fish_scales, 3)
    .addOutput(mortus_horn, 1);

const cut_murkray_small = new Recipe("Cut Murkray (Small)", "Cut a Murkray (Small) into parts.")
    .addInput(murkray_small, 1)
    .addOutput(fish_meat, 1)
    .addOutput(fish_oil, 7)
    .addOutput(fish_scales, 2)
    .addOutput(murkray_liver, 1);
const cut_murkray_medium = new Recipe("Cut Murkray (Medium)", "Cut a Murkray (Medium) into parts.")
    .addInput(murkray_medium, 1)
    .addOutput(fish_meat, 3)
    .addOutput(fish_oil, 8)
    .addOutput(fish_scales, 4)
    .addOutput(murkray_liver, 1);
const cut_murkray_large = new Recipe("Cut Murkray (Large)", "Cut a Murkray (Large) into parts.")
    .addInput(murkray_large, 1)
    .addOutput(fish_meat, 5)
    .addOutput(fish_oil, 9)
    .addOutput(fish_scales, 6)
    .addOutput(murkray_liver, 1);

const cut_myxostomata_basic = new Recipe("Cut Myxostomata (Basic)", "Cut a Myxostomata (Basic) into parts.")
    .addInput(myxostomata_basic, 1)
    .addOutput(benign_infested_tumor, 2)
    .addOutput(tubercular_gill_system, 4)
    .addOutput(cranial_foremount, 2);
const cut_myxostomata_adorned = new Recipe("Cut Myxostomata (Adorned)", "Cut a Myxostomata (Adorned) into parts.")
    .addInput(myxostomata_adorned, 1)
    .addOutput(benign_infested_tumor, 4)
    .addOutput(tubercular_gill_system, 6)
    .addOutput(cranial_foremount, 2);
const cut_myxostomata_magnificent = new Recipe("Cut Myxostomata (Magnificent)", "Cut a Myxostomata (Magnificent) into parts.")
    .addInput(myxostomata_magnificent, 1)
    .addOutput(benign_infested_tumor, 6)
    .addOutput(tubercular_gill_system, 10)
    .addOutput(cranial_foremount, 2);

const cut_norg_small = new Recipe("Cut Norg (Small)", "Cut a Norg (Small) into parts.")
    .addInput(norg_small, 1)
    .addOutput(fish_meat, 2)
    .addOutput(fish_oil, 3)
    .addOutput(fish_scales, 5)
    .addOutput(norg_brain, 1);
const cut_norg_medium = new Recipe("Cut Norg (Medium)", "Cut a Norg (Medium) into parts.")
    .addInput(norg_medium, 1)   
    .addOutput(fish_meat, 3)
    .addOutput(fish_oil, 5)
    .addOutput(fish_scales, 7)
    .addOutput(norg_brain, 1);
const cut_norg_large = new Recipe("Cut Norg (Large)", "Cut a Norg (Large) into parts.")
    .addInput(norg_large, 1)
    .addOutput(fish_meat, 4)
    .addOutput(fish_oil, 6)
    .addOutput(fish_scales, 10)
    .addOutput(norg_brain, 1); 

const cut_ostimyr_basic = new Recipe("Cut Ostimyr (Basic)", "Cut a Ostimyr (Basic) into parts.")
    .addInput(ostimyr_basic, 1)
    .addOutput(benign_infested_tumor, 3)
    .addOutput(ferment_bladder, 2)
    .addOutput(tubercular_gill_system, 2)
    .addOutput(saturated_muscle_mass, 1);
const cut_ostimyr_adorned = new Recipe("Cut Ostimyr (Adorned)", "Cut a Ostimyr (Adorned) into parts.")
    .addInput(ostimyr_adorned, 1)
    .addOutput(benign_infested_tumor, 4)
    .addOutput(ferment_bladder, 3)
    .addOutput(tubercular_gill_system, 3)
    .addOutput(saturated_muscle_mass, 1);
const cut_ostimyr_magnificent = new Recipe("Cut Ostimyr (Magnificent)", "Cut a Ostimyr (Magnificent) into parts.")
    .addInput(ostimyr_magnificent, 1)
    .addOutput(benign_infested_tumor, 6)
    .addOutput(ferment_bladder, 4)
    .addOutput(tubercular_gill_system, 4)
    .addOutput(saturated_muscle_mass, 1);

const cut_recaster_basic = new Recipe("Cut Recaster (Basic)", "Cut a Recaster (Basic) into parts.")
    .addInput(recaster_basic, 1)
    .addOutput(scrap, 3)
    .addOutput(recaster_neural_relay, 1);
const cut_recaster_adorned = new Recipe("Cut Recaster (Adorned)", "Cut a Recaster (Adorned) into parts.")
    .addInput(recaster_adorned, 1)
    .addOutput(scrap, 5)
    .addOutput(recaster_neural_relay, 1);
const cut_recaster_magnificent = new Recipe("Cut Recaster (Magnificent)", "Cut a Recaster (Magnificent) into parts.")
    .addInput(recaster_magnificent, 1)
    .addOutput(scrap, 7)
    .addOutput(recaster_neural_relay, 1);

const cut_scrubber_basic = new Recipe("Cut Scrubber (Basic)", "Cut a Scrubber (Basic) into parts.")
    .addInput(scrubber_basic, 1)
    .addOutput(scrap, 1)
    .addOutput(scrubber_exa_brain, 1);
const cut_scrubber_adorned = new Recipe("Cut Scrubber (Adorned)", "Cut a Scrubber (Adorned) into parts.")
    .addInput(scrubber_adorned, 1)
    .addOutput(scrap, 2)
    .addOutput(scrubber_exa_brain, 1);
const cut_scrubber_magnificent = new Recipe("Cut Scrubber (Magnificent)", "Cut a Scrubber (Magnificent) into parts.")
    .addInput(scrubber_magnificent, 1)
    .addOutput(scrap, 3)
    .addOutput(scrubber_exa_brain, 1);

const cut_sharrac_small = new Recipe("Cut Sharrac (Small)", "Cut a Sharrac (Small) into parts.")
    .addInput(sharrac_small, 1)
    .addOutput(fish_meat, 2)
    .addOutput(fish_oil, 2)
    .addOutput(fish_scales, 4)
    .addOutput(sharrac_teeth, 1);
const cut_sharrac_medium = new Recipe("Cut Sharrac (Medium)", "Cut a Sharrac (Medium) into parts.")
    .addInput(sharrac_medium, 1)
    .addOutput(fish_meat, 3)
    .addOutput(fish_oil, 3)
    .addOutput(fish_scales, 6)
    .addOutput(sharrac_teeth, 1);
const cut_sharrac_large = new Recipe("Cut Sharrac (Large)", "Cut a Sharrac (Large) into parts.")
    .addInput(sharrac_large, 1)
    .addOutput(fish_meat, 4)
    .addOutput(fish_oil, 4)
    .addOutput(fish_scales, 8)
    .addOutput(sharrac_teeth, 1);

const cut_synathid_basic = new Recipe("Cut Synathid (Basic)", "Cut a Synathid (Basic) into parts.")
    .addInput(synathid_basic, 1)
    .addOutput(scrap, 4)
    .addOutput(synathid_ecosynth_analyzer, 1);
const cut_synathid_adorned = new Recipe("Cut Synathid (Adorned)", "Cut a Synathid (Adorned) into parts.")
    .addInput(synathid_adorned, 1)
    .addOutput(scrap, 6)
    .addOutput(synathid_ecosynth_analyzer, 1);
const cut_synathid_magnificent = new Recipe("Cut Synathid (Magnificent)", "Cut a Synathid (Magnificent) into parts.")
    .addInput(synathid_magnificent, 1)
    .addOutput(scrap, 8)
    .addOutput(synathid_ecosynth_analyzer, 1);

const cut_tink_basic = new Recipe("Cut Tink (Basic)", "Cut a Tink (Basic) into parts.")
    .addInput(tink_basic, 1)
    .addOutput(scrap, 1)
    .addOutput(tink_dissipator_coil, 1);
const cut_tink_adorned = new Recipe("Cut Tink (Adorned)", "Cut a Tink (Adorned) into parts.")
    .addInput(tink_adorned, 1)
    .addOutput(scrap, 2)
    .addOutput(tink_dissipator_coil, 1);
const cut_tink_magnificent = new Recipe("Cut Tink (Magnificent)", "Cut a Tink (Magnificent) into parts.")
    .addInput(tink_magnificent, 1)
    .addOutput(scrap, 3)
    .addOutput(tink_dissipator_coil, 1);

const cut_tralok_small = new Recipe("Cut Tralok (Small)", "Cut a Tralok (Small) into parts.")
    .addInput(tralok_small, 1)
    .addOutput(fish_meat, 2)
    .addOutput(fish_oil, 1)
    .addOutput(fish_scales, 5)
    .addOutput(tralok_eyes, 1);
const cut_tralok_medium = new Recipe("Cut Tralok (Medium)", "Cut a Tralok (Medium) into parts.")
    .addInput(tralok_medium, 1)
    .addOutput(fish_meat, 3)
    .addOutput(fish_oil, 2)
    .addOutput(fish_scales, 7)
    .addOutput(tralok_eyes, 1);
const cut_tralok_large = new Recipe("Cut Tralok (Large)", "Cut a Tralok (Large) into parts.")
    .addInput(tralok_large, 1)
    .addOutput(fish_meat, 4)
    .addOutput(fish_oil, 3)
    .addOutput(fish_scales, 9)
    .addOutput(tralok_eyes, 1);

const cut_tromyzon_basic = new Recipe("Cut Tromyzon (Basic)", "Cut a Tromyzon (Basic) into parts.")
    .addInput(tromyzon_basic, 1)
    .addOutput(scrap, 3)
    .addOutput(tromyzon_entroplasma, 1);
const cut_tromyzon_adorned = new Recipe("Cut Tromyzon (Adorned)", "Cut a Tromyzon (Adorned) into parts.")
    .addInput(tromyzon_adorned, 1)
    .addOutput(scrap, 4)
    .addOutput(tromyzon_entroplasma, 1);
const cut_tromyzon_magnificent = new Recipe("Cut Tromyzon (Magnificent)", "Cut a Tromyzon (Magnificent) into parts.")
    .addInput(tromyzon_magnificent, 1)
    .addOutput(scrap, 5)
    .addOutput(tromyzon_entroplasma, 1);

const cut_vitreospina_basic = new Recipe("Cut Vitreospina (Basic)", "Cut a Vitreospina (Basic) into parts.")
    .addInput(vitreospina_basic, 1)
    .addOutput(benign_infested_tumor, 3)
    .addOutput(spinal_core_section, 1)
    .addOutput(dendrite_blastoma, 1)
    .addOutput(tubercular_gill_system, 2)
    .addOutput(ferment_bladder, 2);
const cut_vitreospina_adorned = new Recipe("Cut Vitreospina (Adorned)", "Cut a Vitreospina (Adorned) into parts.")
    .addInput(vitreospina_adorned, 1)
    .addOutput(benign_infested_tumor, 4)
    .addOutput(spinal_core_section, 1)
    .addOutput(dendrite_blastoma, 1)
    .addOutput(tubercular_gill_system, 3)
    .addOutput(ferment_bladder, 3);
const cut_vitreospina_magnificent = new Recipe("Cut Vitreospina (Magnificent)", "Cut a Vitreospina (Magnificent) into parts.")
    .addInput(vitreospina_magnificent, 1)
    .addOutput(benign_infested_tumor, 6)
    .addOutput(spinal_core_section, 1)
    .addOutput(dendrite_blastoma, 1)
    .addOutput(tubercular_gill_system, 4)
    .addOutput(ferment_bladder, 4);

// The Lich and Sister weapons section
// -----------------------------
// -----------------------------
// -----------------------------
// kill liches and sisters to get their weapons, fully built

const kuva_ayanga = new Item("Kuva Ayanga", "Kuva Lich weapon.");
const kuva_brakk = new Item("Kuva Brakk", "Kuva Lich weapon.");
const kuva_bramma = new Item("Kuva Bramma", "Kuva Lich weapon.");
const kuva_chakkhurr = new Item("Kuva Chakkhurr", "Kuva Lich weapon.");
const kuva_drakgoon = new Item("Kuva Drakgoon", "Kuva Lich weapon.");
const kuva_grattler = new Item("Kuva Grattler", "Kuva Lich weapon.");
const kuva_hek = new Item("Kuva Hek", "Kuva Lich weapon.");
const kuva_hind = new Item("Kuva Hind", "Kuva Lich weapon.");
const kuva_karak = new Item("Kuva Karak", "Kuva Lich weapon.");
const kuva_kohm = new Item("Kuva Kohm", "Kuva Lich weapon.");
const kuva_kraken = new Item("Kuva Kraken", "Kuva Lich weapon.");
const kuva_nukor = new Item("Kuva Nukor", "Kuva Lich weapon.");
const kuva_ogris = new Item("Kuva Ogris", "Kuva Lich weapon.");
const kuva_quartakk = new Item("Kuva Quartakk", "Kuva Lich weapon.");
const kuva_seer = new Item("Kuva Seer", "Kuva Lich weapon.");
const kuva_shildeg = new Item("Kuva Shildeg", "Kuva Lich weapon.");
const kuva_tonkor = new Item("Kuva Tonkor", "Kuva Lich weapon.");
const kuva_twin_stubbas = new Item("Kuva Twin Stubbas", "Kuva Lich weapon.");
const kuva_zarr = new Item("Kuva Zarr", "Kuva Lich weapon.");

const tenet_agendus = new Item("Tenet Agendus", "Sister weapon.");
const tenet_arca_plasmor = new Item("Tenet Arca Plasmor", "Sister weapon.");
const tenet_cycron = new Item("Tenet Cycron", "Sister weapon.");
const tenet_detron = new Item("Tenet Detron", "Sister weapon.");
const tenet_diplos = new Item("Tenet Diplos", "Sister weapon.");
const tenet_envoy = new Item("Tenet Envoy", "Sister weapon.");
const tenet_exec = new Item("Tenet Exec", "Sister weapon.");
const tenet_ferrox = new Item("Tenet Ferrox", "Sister weapon.");
const tenet_flux_rifle = new Item("Tenet Flux Rifle", "Sister weapon.");
const tenet_grigori = new Item("Tenet Grigori", "Sister weapon.");
const tenet_livia = new Item("Tenet Livia", "Sister weapon.");
const tenet_plinx = new Item("Tenet Plinx", "Sister weapon.");
const tenet_spirex = new Item("Tenet Spirex", "Sister weapon.");
const tenet_tetra = new Item("Tenet Tetra", "Sister weapon.");


// The non prime weapons section
// -----------------------------
// -----------------------------
// -----------------------------
// bp from chem lab usually use detonite injectors
// bp from energy lab usually use fieldrons
// bp from bio lab usually use mutagen mass



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
// bp dojo chem lab 15k

const argonak_blueprint = new Item("Argonak Blueprint", "Blueprint obtained from the Chem Lab in a Clan Dojo for 15,000 credits.");
const buy_argonak_blueprint = new Recipe("Buy Argonak Blueprint", "Buy an Argonak Blueprint from the Chem Lab in a Clan Dojo for 15,000 credits.")
    .addInput(credits, 15000)
    .addOutput(argonak_blueprint, 1);
const argonak = new Item("Argonak", "Blueprint obtained from the Chem Lab in a Clan Dojo for 15,000 credits.");
const craft_argonak = new Recipe("Craft Argonak", "Craft an Argonak from the blueprint.")
    .addInput(argonak_blueprint, 1)
    .addInput(credits, 30000)
    .addInput(detonite_injector, 5)
    .addInput(plastids, 700)
    .addInput(alloy_plate, 9950)
    .addInput(forma, 1)
    .addOutput(argonak, 1);

// arum spinosa
// bp and parts from isolation vault tier 2

const arum_spinosa_blueprint = new Item("Arum Spinosa Blueprint", "Blueprint obtained from tier 2 Isolation Vaults.");
const arum_spinosa_guard = new Item("Arum Spinosa Guard", "Item obtained from tier 2 Isolation Vaults.");
const arum_spinosa_rivet = new Item("Arum Spinosa Rivet", "Item obtained from tier 2 Isolation Vaults.");
const arum_spinosa = new Item("Arum Spinosa", "Blueprint obtained from tier 2 Isolation Vaults.");
const craft_arum_spinosa = new Recipe("Craft Arum Spinosa", "Craft an Arum Spinosa from the blueprint.")
    .addInput(arum_spinosa_blueprint, 1)
    .addInput(arum_spinosa_guard, 2)
    .addInput(arum_spinosa_rivet, 1)
    .addInput(credits, 20000)
    .addInput(trapezium_xenorhast, 1)
    .addInput(cabochon_embolos, 1)
    .addOutput(arum_spinosa, 1);

// astilla 
// bp market 20k

const astilla_blueprint = new Item("Astilla Blueprint", "Blueprint obtained from the Market for 20,000 credits.");
const buy_astilla_blueprint = new Recipe("Buy Astilla Blueprint", "Buy an Astilla Blueprint from the Market for 20,000 credits.")
    .addInput(credits, 20000)
    .addOutput(astilla_blueprint, 1);
const astilla = new Item("Astilla", "Blueprint obtained from the Market for 20,000 credits.");
const craft_astilla = new Recipe("Craft Astilla", "Craft an Astilla from the blueprint.")  
    .addInput(astilla_blueprint, 1)
    .addInput(credits, 20000)
    .addInput(tellurium, 4)
    .addInput(plastids, 875)
    .addInput(oxium, 175)
    .addInput(ferrite, 7500)
    .addOutput(astilla, 1);

// athodai
// bp and parts Venus Proxima Derelict Cache B 

const athodai_blueprint = new Item("Athodai Blueprint", "Blueprint obtained from Venus Proxima Derelict Cache B.");
const athodai_barrel = new Item("Athodai Barrel", "Item obtained from Venus Proxima Derelict Cache B.");
const athodai_receiver = new Item("Athodai Receiver", "Item obtained from Venus Proxima Derelict Cache B.");
const athodai = new Item("Athodai", "Blueprint obtained from Venus Proxima Derelict Cache B.");
const craft_athodai = new Recipe("Craft Athodai", "Craft an Athodai from the blueprint.")
    .addInput(athodai_blueprint, 1)
    .addInput(athodai_barrel, 1)
    .addInput(athodai_receiver, 1)
    .addInput(credits, 20000)
    .addInput(orokin_cell,5)
    .addOutput(athodai, 1);

// atomos
// bp market 30k

const atomos_blueprint = new Item("Atomos Blueprint", "Blueprint obtained from the Market for 30,000 credits.");
const buy_atomos_blueprint = new Recipe("Buy Atomos Blueprint", "Buy an Atomos Blueprint from the Market for 30,000 credits.")
    .addInput(credits, 30000)
    .addOutput(atomos_blueprint, 1);
const atomos = new Item("Atomos", "Blueprint obtained from the Market for 30,000 credits.");
const craft_atomos = new Recipe("Craft Atomos", "Craft an Atomos from the blueprint.")
    .addInput(atomos_blueprint, 1)
    .addInput(credits, 60000)
    .addInput(salvage, 1500)
    .addInput(polymer_bundle, 1300)
    .addInput(rubedo, 800)
    .addInput(argon_crystal, 2)
    .addOutput(atomos, 1);

// atterax
// bp market 20k

const atterax_blueprint = new Item("Atterax Blueprint", "Blueprint obtained from the Market for 20,000 credits.");
const buy_atterax_blueprint = new Recipe("Buy Atterax Blueprint", "Buy an Atterax Blueprint from the Market for 20,000 credits.")
    .addInput(credits, 20000)
    .addOutput(atterax_blueprint, 1);
const atterax = new Item("Atterax", "Blueprint obtained from the Market for 20,000 credits.");
const craft_atterax = new Recipe("Craft Atterax", "Craft an Atterax from the blueprint.")
    .addInput(atterax_blueprint, 1)
    .addInput(credits, 20000)   
    .addInput(salvage, 1500)
    .addInput(polymer_bundle, 800)
    .addInput(rubedo, 200) 
    .addInput(argon_crystal, 2)
    .addOutput(atterax, 1);

// attica
// bp tenno lab 15k

const attica_blueprint = new Item("Attica Blueprint", "Blueprint obtained from the Tenno Lab in the Clan Dojo for 15,000 credits.");
const buy_attica_blueprint = new Recipe("Buy Attica Blueprint", "Buy an Attica Blueprint from the Tenno Lab in the Clan Dojo for 15,000 credits.")
    .addInput(credits, 15000)
    .addOutput(attica_blueprint, 1);
const attica = new Item("Attica", "Blueprint obtained from the Tenno Lab in the Clan Dojo for 15,000 credits.");
const craft_attica = new Recipe("Craft Attica", "Craft an Attica from the blueprint.")
    .addInput(attica_blueprint, 1)
    .addInput(credits, 20000)
    .addInput(morphics, 2)
    .addInput(ferrite, 800)
    .addInput(rubedo, 200)
    .addInput(forma, 1)
    .addOutput(attica, 1);

// azima

const azima = new Item("Azima", "Full item obtained from daily sign in at 100, 300, or 500 days.");

// azothane

const azothane_blueprint = new Item("Azothane Blueprint", "Blueprint obtained from Teshin's Cave.");
const buy_azothane_blueprint = new Recipe("Buy Azothane Blueprint", "Buy an Azothane Blueprint from Teshin's Cave.")
    .addInput(pathos_clamp, 50)
    .addOutput(azothane_blueprint, 1);
const azothane = new Item("Azothane", "Blueprint obtained from Teshin's Cave.");
const craft_azothane = new Recipe("Craft Azothane", "Craft an Azothane from the blueprint.")
    .addInput(azothane_blueprint, 1)
    .addInput(credits, 30000)
    .addInput(maw_fang, 5)
    .addInput(rune_marrow, 30)
    .addInput(yao_shrub, 40)
    .addInput(saggen_pearl, 100)
    .addOutput(azothane, 1);

// ballistica
// bp market 40k

const ballistica_blueprint = new Item("Ballistica Blueprint", "Blueprint obtained from the Market for 40,000 credits.");
const buy_ballistica_blueprint = new Recipe("Buy Ballistica Blueprint", "Buy a Ballistica Blueprint from the Market for 40,000 credits.")
    .addInput(credits, 40000)  
    .addOutput(ballistica_blueprint, 1);
const ballistica = new Item("Ballistica", "Blueprint obtained from the Market for 40,000 credits.");
const craft_ballistica = new Recipe("Craft Ballistica", "Craft a Ballistica from the blueprint.")
    .addInput(ballistica_blueprint, 1)
    .addInput(credits, 25000)
    .addInput(neurodes, 3)
    .addInput(gallium, 4)
    .addInput(nano_spores, 3000)
    .addInput(rubedo, 1200)
    .addOutput(ballistica, 1);

// basmu

const basmu_blueprint = new Item("Basmu Blueprint", "Blueprint only obtainable by trading or limited time events.");
const basmu = new Item("Basmu", "Blueprint only obtainable by trading or limited time events.");
const craft_basmu = new Recipe("Craft Basmu", "Craft a Basmu from the blueprint.")
    .addInput(basmu_blueprint, 1)
    .addInput(credits, 25000)
    .addInput(titanium, 1500)
    .addInput(carbides, 800)
    .addInput(isos, 450)
    .addInput(nullstones, 1)
    .addOutput(basmu, 1);

// battacor
// bp energy lab 15k

const battacor_blueprint = new Item("Battacor Blueprint", "Blueprint obtained from the Energy Lab in the Clan Dojo for 15,000 credits.");
const buy_battacor_blueprint = new Recipe("Buy Battacor Blueprint", "Buy a Battacor Blueprint from the Energy Lab in the Clan Dojo for 15,000 credits.")
    .addInput(credits, 15000)
    .addOutput(battacor_blueprint, 1);
const battacor = new Item("Battacor", "Blueprint obtained from the Energy Lab in the Clan Dojo for 15,000 credits.");
const craft_battacor = new Recipe("Craft Battacor", "Craft a Battacor from the blueprint.")
    .addInput(battacor_blueprint, 1)
    .addInput(credits, 25000)
    .addInput(fieldron, 10)
    .addInput(tepa_nodule, 40)
    .addInput(heart_noctrul, 25)
    .addInput(tromyzon_entroplasma, 20)
    .addOutput(battacor, 1);

// baza
// bp tenno lab 15k

const baza_blueprint = new Item("Baza Blueprint", "Blueprint obtained from the Tenno Lab in the Clan Dojo for 15,000 credits.");
const buy_baza_blueprint = new Recipe("Buy Baza Blueprint", "Buy a Baza Blueprint from the Tenno Lab in the Clan Dojo for 15,000 credits.")
    .addInput(credits, 15000)
    .addOutput(baza_blueprint, 1);
const baza = new Item("Baza", "Blueprint obtained from the Tenno Lab in the Clan Dojo for 15,000 credits.");
const craft_baza = new Recipe("Craft Baza", "Craft a Baza from the blueprint.")
    .addInput(baza_blueprint, 1)
    .addInput(credits, 20000)
    .addInput(ferrite, 3500)
    .addInput(alloy_plate, 4300)
    .addInput(cryotic, 575)
    .addInput(forma, 1)
    .addOutput(baza, 1);

// bo
// bp market 15k

const bo_blueprint = new Item("Bo Blueprint", "Blueprint obtained from the Market for 15,000 credits.");
const buy_bo_blueprint = new Recipe("Buy Bo Blueprint", "Buy a Bo Blueprint from the Market for 15,000 credits.")
    .addInput(credits, 15000)
    .addOutput(bo_blueprint, 1);
const bo = new Item("Bo", "Blueprint obtained from the Market for 15,000 credits.");
const craft_bo = new Recipe("Craft Bo", "Craft a Bo from the blueprint.")
    .addInput(bo_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(orokin_cell, 1)
    .addInput(salvage, 900)
    .addInput(ferrite, 600)
    .addInput(alloy_plate, 150)
    .addOutput(bo, 1);

// boar
// bp dropped from Drekar Troopers

const boar_blueprint = new Item("Boar Blueprint", "Blueprint dropped from Drekar Troopers.");
const boar = new Item("Boar", "Blueprint dropped from Drekar Troopers.");
const craft_boar = new Recipe("Craft Boar", "Craft a Boar from the blueprint.")
    .addInput(boar_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(morphics, 6)
    .addInput(alloy_plate, 900)
    .addInput(salvage, 750)
    .addInput(plastids, 900)
    .addOutput(boar, 1);

// boltor
// bp market 15k

const boltor_blueprint = new Item("Boltor Blueprint", "Blueprint obtained from the Market for 15,000 credits.");
const buy_boltor_blueprint = new Recipe("Buy Boltor Blueprint", "Buy a Boltor Blueprint from the Market for 15,000 credits.")
    .addInput(credits, 15000)
    .addOutput(boltor_blueprint, 1);
const boltor = new Item("Boltor", "Blueprint obtained from the Market for 15,000 credits.");
const craft_boltor = new Recipe("Craft Boltor", "Craft a Boltor from the blueprint.")
    .addInput(boltor_blueprint, 1)
    .addInput(credits, 25000)
    .addInput(neurodes, 2)
    .addInput(alloy_plate, 100)
    .addInput(salvage, 900)
    .addInput(polymer_bundle, 600)

// kronen
// bp market 65k

const kronen_blueprint = new Item("Kronen Blueprint", "Blueprint obtained from the Market for 65,000 credits.");
const buy_kronen_blueprint = new Recipe("Buy Kronen Blueprint", "Buy a Kronen Blueprint from the Market for 65,000 credits.")
    .addInput(credits, 65000)
    .addOutput(kronen_blueprint, 1);
const kronen = new Item("Kronen", "Blueprint obtained from the Market for 65,000 credits.");
const craft_kronen = new Recipe("Craft Kronen", "Craft a Kronen from the blueprint.")
    .addInput(kronen_blueprint, 1)
    .addInput(credits, 20000)
    .addInput(ferrite, 1500)
    .addInput(nano_spores, 2000)
    .addInput(plastids, 1000)
    .addInput(argon_crystal, 2)
    .addOutput(kronen, 1);

// boltace
// bp market 20k

const boltace_blueprint = new Item("Boltace Blueprint", "Blueprint obtained from the Market for 20,000 credits.");
const buy_boltace_blueprint = new Recipe("Buy Boltace Blueprint", "Buy a Boltace Blueprint from the Market for 20,000 credits.")
    .addInput(credits, 20000)
    .addOutput(boltace_blueprint, 1);
const boltace = new Item("Boltace", "Blueprint obtained from the Market for 20,000 credits.");
const craft_boltace = new Recipe("Craft Boltace", "Craft a Boltace from the blueprint.")
    .addInput(boltace_blueprint, 1)
    .addInput(credits, 20000)
    .addInput(boltor, 1)
    .addInput(kronen, 1)
    .addInput(gallium, 2)
    .addOutput(boltace, 1);

// brakk
// bp and parts from killing grustrag three

const brakk_blueprint = new Item("Brakk Blueprint", "Blueprint obtained from killing Vem Tabook.");
const brakk_barrel = new Item("Brakk Barrel", "Blueprint obtained from killing Shik Tal.");
const brakk_receiver = new Item("Brakk Receiver", "Blueprint obtained from killing Leekter.");
const brakk = new Item("Brakk", "Blueprint and parts obtained from killing the Grustrag Three.");
const craft_brakk = new Recipe("Craft Brakk", "Craft a Brakk from the blueprint.")
    .addInput(brakk_blueprint, 1)
    .addInput(brakk_barrel, 1)
    .addInput(brakk_receiver, 1)
    .addInput(credits, 15000)
    .addInput(orokin_cell, 10)
    .addOutput(brakk, 1);

// braton
// fully built from market 25k

const braton = new Item("Braton", "Fully built weapon obtained from the Market for 25,000 credits.");
const buy_braton = new Recipe("Buy Braton", "Buy a fully built Braton from the Market for 25,000 credits.")
    .addInput(credits, 25000)
    .addOutput(braton, 1);

// braton vandal
// bp and parts from Elite Sanctuary Onslaught

const braton_vandal_blueprint = new Item("Braton Vandal Blueprint", "Blueprint obtained from Elite Sanctuary Onslaught C rotation.");
const braton_vandal_barrel = new Item("Braton Vandal Barrel", "Blueprint obtained from Elite Sanctuary Onslaught B rotation.");
const braton_vandal_receiver = new Item("Braton Vandal Receiver", "Blueprint obtained from Elite Sanctuary Onslaught B rotation.");
const braton_vandal_stock = new Item("Braton Vandal Stock", "Blueprint obtained from Elite Sanctuary Onslaught C rotation.");
const braton_vandal = new Item("Braton Vandal", "Blueprint and parts obtained from Elite Sanctuary Onslaught.");
const craft_braton_vandal = new Recipe("Craft Braton Vandal", "Craft a Braton Vandal from the blueprint.")
    .addInput(braton_vandal_blueprint, 1)
    .addInput(braton_vandal_barrel, 1)
    .addInput(braton_vandal_receiver, 1)
    .addInput(braton_vandal_stock, 1)
    .addInput(credits, 25000)
    .addOutput(braton_vandal, 1);

// broken scepter
// fully built from The War Within quest

const broken_scepter = new Item("Broken Scepter", "Fully built weapon obtained from The War Within quest.");

// broken war
// fully built from The Second Dream quest

const broken_war = new Item("Broken War", "Fully built weapon obtained from The Second Dream quest.");

// bubonico
// bp from bio lab 50k

const bubonico_blueprint = new Item("Bubonico Blueprint", "Blueprint obtained from the Bio Lab in a Clan Dojo for 50,000 credits.");
const buy_bubonico_blueprint = new Recipe("Buy Bubonico Blueprint", "Buy a Bubonico Blueprint from the Bio Lab in a Clan Dojo for 50,000 credits.")
    .addInput(credits, 50000)
    .addOutput(bubonico_blueprint, 1);
const bubonico = new Item("Bubonico", "Blueprint obtained from the Bio Lab in a Clan Dojo for 50,000 credits.");
const craft_bubonico = new Recipe("Craft Bubonico", "Craft a Bubonico from the blueprint.")
    .addInput(bubonico_blueprint, 1)
    .addInput(credits, 30000)
    .addInput(mutagen_mass, 10)
    .addInput(argon_crystal, 3)
    .addInput(plastids, 1200)
    .addInput(nano_spores, 22000)
    .addOutput(bubonico, 1);

// burston
// bp from market 15k

const burston_blueprint = new Item("Burston Blueprint", "Blueprint obtained from the Market for 15,000 credits.");
const buy_burston_blueprint = new Recipe("Buy Burston Blueprint", "Buy a Burston Blueprint from the Market for 15,000 credits.")
    .addInput(credits, 15000)
    .addOutput(burston_blueprint, 1);
const burston = new Item("Burston", "Blueprint obtained from the Market for 15,000 credits.");
const craft_burston = new Recipe("Craft Burston", "Craft a Burston from the blueprint.")
    .addInput(burston_blueprint, 1)
    .addInput(credits, 25000)
    .addInput(morphics, 1)
    .addInput(polymer_bundle, 400)
    .addInput(alloy_plate, 150)
    .addInput(ferrite, 600)
    .addOutput(burston, 1);

// buzlok
// bp chem lab 15k

const buzlok_blueprint = new Item("Buzlok Blueprint", "Blueprint obtained from the Chem Lab in a Clan Dojo for 15,000 credits.");
const buy_buzlok_blueprint = new Recipe("Buy Buzlok Blueprint", "Buy a Buzlok Blueprint from the Chem Lab in a Clan Dojo for 15,000 credits.")
    .addInput(credits, 15000)
    .addOutput(buzlok_blueprint, 1);
const buzlok = new Item("Buzlok", "Blueprint obtained from the Chem Lab in a Clan Dojo for 15,000 credits.");
const craft_buzlok = new Recipe("Craft Buzlok", "Craft a Buzlok from the blueprint.")
    .addInput(buzlok_blueprint, 1)
    .addInput(credits, 30000)
    .addInput(detonite_injector, 2)
    .addInput(salvage, 5000)
    .addInput(circuits, 600)
    .addInput(forma, 1)
    .addOutput(buzlok, 1);

// cadus
// bp market 50k

const cadus_blueprint = new Item("Cadus Blueprint", "Blueprint obtained from the Market for 50,000 credits.");
const buy_cadus_blueprint = new Recipe("Buy Cadus Blueprint", "Buy a Cadus Blueprint from the Market for 50,000 credits.")
    .addInput(credits, 50000)
    .addOutput(cadus_blueprint, 1);
const cadus = new Item("Cadus", "Blueprint obtained from the Market for 50,000 credits.");
const craft_cadus = new Recipe("Craft Cadus", "Craft a Cadus from the blueprint.")
    .addInput(cadus_blueprint, 1)
    .addInput(credits, 20000)
    .addInput(neural_sensor, 2)
    .addInput(polymer_bundle, 3000)
    .addInput(circuits, 1600)
    .addInput(bo, 1)
    .addOutput(cadus, 1);

// carmine penta
// bp and parts from  pluto and corpus veil proxima derelict cache B

const carmine_penta_blueprint = new Item("Carmine Penta Blueprint", "Blueprint obtained from Pluto and Corpus Veil Proxima Derelict Cache B.");
const carmine_penta_barrel = new Item("Carmine Penta Barrel", "Part obtained from Pluto and Corpus Veil Proxima Derelict Cache B.");
const carmine_penta_receiver = new Item("Carmine Penta Receiver", "Part obtained from Pluto and Corpus Veil Proxima Derelict Cache B.");
const carmine_penta_stock = new Item("Carmine Penta Stock", "Part obtained from Pluto and Corpus Veil Proxima Derelict Cache B.");
const carmine_penta = new Item("Carmine Penta", "Blueprint obtained from Pluto and Corpus Veil Proxima Derelict Cache B.");
const craft_carmine_penta = new Recipe("Craft Carmine Penta", "Craft a Carmine Penta from the blueprint.")
    .addInput(carmine_penta_blueprint, 1)
    .addInput(carmine_penta_barrel, 1)
    .addInput(carmine_penta_receiver, 1)
    .addInput(carmine_penta_stock, 1)
    .addInput(credits, 20000)
    .addOutput(carmine_penta, 1);

// cassowar
// bp tenno lab 15k

const cassowar_blueprint = new Item("Cassowar Blueprint", "Blueprint obtained from the Tenno Lab in a Clan Dojo for 15,000 credits.");
const buy_cassowar_blueprint = new Recipe("Buy Cassowar Blueprint", "Buy a Cassowar Blueprint from the Tenno Lab in a Clan Dojo for 15,000 credits.")
    .addInput(credits, 15000)
    .addOutput(cassowar_blueprint, 1);
const cassowar = new Item("Cassowar", "Blueprint obtained from the Tenno Lab in a Clan Dojo for 15,000 credits.");
const craft_cassowar = new Recipe("Craft Cassowar", "Craft a Cassowar from the blueprint.")
    .addInput(cassowar_blueprint, 1)
    .addInput(credits, 20000)
    .addInput(forma, 1)
    .addInput(rubedo, 1000)
    .addInput(salvage, 5700)
    .addInput(oxium, 150)
    .addOutput(cassowar, 1);

// castanas
// bp tenno lab 15k

const castanas_blueprint = new Item("Castanas Blueprint", "Blueprint obtained from the Tenno Lab in a Clan Dojo for 15,000 credits.");
const buy_castanas_blueprint = new Recipe("Buy Castanas Blueprint", "Buy a Castanas Blueprint from the Tenno Lab in a Clan Dojo for 15,000 credits.")
    .addInput(credits, 15000)
    .addOutput(castanas_blueprint, 1);
const castanas = new Item("Castanas", "Blueprint obtained from the Tenno Lab in a Clan Dojo for 15,000 credits.");
const craft_castanas = new Recipe("Craft Castanas", "Craft a Castanas from the blueprint.")
    .addInput(castanas_blueprint, 1)
    .addInput(credits, 20000)
    .addInput(control_module, 2)
    .addInput(salvage, 800)
    .addInput(circuits, 200)
    .addInput(forma, 1)
    .addOutput(castanas, 1);

// catabolyst
// bp bio lab 50k

const catabolyst_blueprint = new Item("Catabolyst Blueprint", "Blueprint obtained from the Bio Lab in a Clan Dojo for 50,000 credits.");
const buy_catabolyst_blueprint = new Recipe("Buy Catabolyst Blueprint", "Buy a Catabolyst Blueprint from the Bio Lab in a Clan Dojo for 50,000 credits.")
    .addInput(credits, 50000)
    .addOutput(catabolyst_blueprint, 1);
const catabolyst = new Item("Catabolyst", "Blueprint obtained from the Bio Lab in a Clan Dojo for 50,000 credits.");
const craft_catabolyst = new Recipe("Craft Catabolyst", "Craft a Catabolyst from the blueprint.")
    .addInput(catabolyst_blueprint, 1)
    .addInput(credits, 30000)
    .addInput(scintillant, 5)
    .addInput(ocular_stem_root, 4)
    .addInput(mutagen_mass, 7)
    .addInput(stellated_necrathene, 10)
    .addOutput(catabolyst, 1);

// caustacyst
// bp bio lab 50k

const caustacyst_blueprint = new Item("Caustacyst Blueprint", "Blueprint obtained from the Bio Lab in a Clan Dojo for 50,000 credits.");
const buy_caustacyst_blueprint = new Recipe("Buy Caustacyst Blueprint", "Buy a Caustacyst Blueprint from the Bio Lab in a Clan Dojo for 50,000 credits.")
    .addInput(credits, 50000)
    .addOutput(caustacyst_blueprint, 1);
const caustacyst = new Item("Caustacyst", "Blueprint obtained from the Bio Lab in a Clan Dojo for 50,000 credits.");
const craft_caustacyst = new Recipe("Craft Caustacyst", "Craft a Caustacyst from the blueprint.")
    .addInput(caustacyst_blueprint, 1)
    .addInput(credits, 30000)
    .addInput(mutagen_mass, 10)
    .addInput(ferrite, 15000)
    .addInput(plastids, 4000)
    .addInput(nitain, 5)
    .addOutput(caustacyst, 1);

// cedo
// bp and parts 5k entrati each

const cedo_blueprint = new Item("Cedo Blueprint", "Blueprint obtained from Father in the Necralisk for 5,000 Entrati Standing.");
const buy_cedo_blueprint = new Recipe("Buy Cedo Blueprint", "Buy a Cedo Blueprint from Father in the Necralisk for 5,000 Entrati Standing.")
    .addInput(entrati, 5000)
    .addOutput(cedo_blueprint, 1);
const cedo_barrel = new Item("Cedo Barrel", "Blueprint obtained from Father in the Necralisk for 5,000 Entrati Standing.");
const buy_cedo_barrel = new Recipe("Buy Cedo Barrel", "Buy a Cedo Barrel from Father in the Necralisk for 5,000 Entrati Standing.")
    .addInput(entrati, 5000)
    .addOutput(cedo_barrel, 1);
const cedo_receiver = new Item("Cedo Receiver", "Blueprint obtained from Father in the Necralisk for 5,000 Entrati Standing.");
const buy_cedo_receiver = new Recipe("Buy Cedo Receiver", "Buy a Cedo Receiver from Father in the Necralisk for 5,000 Entrati Standing.")
    .addInput(entrati, 5000)
    .addOutput(cedo_receiver, 1);
const cedo_stock = new Item("Cedo Stock", "Blueprint obtained from Father in the Necralisk for 5,000 Entrati Standing.");
const buy_cedo_stock = new Recipe("Buy Cedo Stock", "Buy a Cedo Stock from Father in the Necralisk for 5,000 Entrati Standing.")
    .addInput(entrati, 5000)
    .addOutput(cedo_stock, 1);
const cedo = new Item("Cedo", "Blueprint obtained from Father in the Necralisk for 5,000 Entrati Standing.");
const craft_cedo = new Recipe("Craft Cedo", "Craft a Cedo from the blueprint.")
    .addInput(cedo_blueprint, 1)
    .addInput(cedo_barrel, 1)
    .addInput(cedo_receiver, 1)
    .addInput(cedo_stock, 1)
    .addInput(forma, 1)
    .addInput(credits, 20000)
    .addOutput(cedo, 1);

// centaur
// bp market 35k
// parts syndicate 20k

const centaur_blueprint = new Item("Centaur Blueprint", "Blueprint obtained from the Market for 35,000 credits.");
const buy_centaur_blueprint = new Recipe("Buy Centaur Blueprint", "Buy a Centaur Blueprint from the Market for 35,000 credits.")
    .addInput(credits, 35000)
    .addOutput(centaur_blueprint, 1);
const centaur_blade = new Item("Centaur Blade", "Item obtained from The Perrin Sequence for 20,000 Standing.");
const buy_centaur_blade = new Recipe("Buy Centaur Blade", "Buy a Centaur Blade from The Perrin Sequence for 20,000 Standing.")
    .addInput(the_perrin_sequence, 20000)
    .addOutput(centaur_blade, 1);
const centaur_handle = new Item("Centaur Handle", "Item obtained from New Loka for 20,000 Standing.");
const buy_centaur_handle = new Recipe("Buy Centaur Handle", "Buy a Centaur Handle from New Loka for 20,000 Standing.")
    .addInput(new_loka, 20000)
    .addOutput(centaur_handle, 1);
const centaur_aegis = new Item("Centaur Aegis", "Item obtained from Arbiters of Hexis for 20,000 Standing.");
const buy_centaur_aegis = new Recipe("Buy Centaur Aegis", "Buy a Centaur Aegis from Arbiters of Hexis for 20,000 Standing.")
    .addInput(arbiters_of_hexis, 20000)
    .addOutput(centaur_aegis, 1);
const centaur = new Item("Centaur", "Blueprint obtained from the Market for 35,000 credits.");
const craft_centaur = new Recipe("Craft Centaur", "Craft a Centaur from the blueprint.")
    .addInput(centaur_blueprint, 1)
    .addInput(centaur_blade, 1)
    .addInput(centaur_handle, 1)
    .addInput(centaur_aegis, 1)
    .addInput(credits, 25000)
    .addOutput(centaur, 1);

// ceramic dagger
// bp nightwave 50 creds

const ceramic_dagger_blueprint = new Item("Ceramic Dagger Blueprint", "Blueprint obtained from Nightwave Offerings for 50 Nora Creds.");
const buy_ceramic_dagger_blueprint = new Recipe("Buy Ceramic Dagger Blueprint", "Buy a Ceramic Dagger Blueprint from Nightwave Offerings for 50 Nora Creds.")
    .addInput(nora_cred, 50)
    .addOutput(ceramic_dagger_blueprint, 1);
const ceramic_dagger = new Item("Ceramic Dagger", "Blueprint obtained from Nightwave Offerings for 50 Nora Creds.");
const craft_ceramic_dagger = new Recipe("Craft Ceramic Dagger", "Craft a Ceramic Dagger from the blueprint.")
    .addInput(ceramic_dagger_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(gallium, 4)
    .addInput(ferrite, 500)
    .addInput(alloy_plate, 500)
    .addInput(polymer_bundle, 600)
    .addOutput(ceramic_dagger, 1);

// cerata
// bp bio lab 50k

const cerata_blueprint = new Item("Cerata Blueprint", "Blueprint obtained from Bio Lab in a Clan Dojo for 50,000 credits.");
const buy_cerata_blueprint = new Recipe("Buy Cerata Blueprint", "Buy a Cerata Blueprint from Bio Lab in a Clan Dojo for 50,000 credits.")
    .addInput(credits, 50000)
    .addOutput(cerata_blueprint, 1);
const cerata = new Item("Cerata", "Blueprint obtained from Bio Lab in a Clan Dojo for 50,000 credits.");
const craft_cerata = new Recipe("Craft Cerata", "Craft a Cerata from the blueprint.")
    .addInput(cerata_blueprint, 1)
    .addInput(credits, 30000)
    .addInput(mutagen_mass, 4)
    .addInput(cryotic, 2500)
    .addInput(plastids, 1200)
    .addInput(forma, 1)
    .addOutput(cerata, 1);

// cernos
// bp market 20k

const cernos_blueprint = new Item("Cernos Blueprint", "Blueprint obtained from the Market for 20,000 credits.");
const buy_cernos_blueprint = new Recipe("Buy Cernos Blueprint", "Buy a Cernos Blueprint from the Market for 20,000 credits.")
    .addInput(credits, 20000)
    .addOutput(cernos_blueprint, 1);
const cernos = new Item("Cernos", "Blueprint obtained from the Market for 20,000 credits.");
const craft_cernos = new Recipe("Craft Cernos", "Craft a Cernos from the blueprint.")
    .addInput(cernos_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(gallium, 3)
    .addInput(plastids, 700)
    .addInput(polymer_bundle, 600)
    .addInput(ferrite, 1750)
    .addOutput(cernos, 1);

// cestra
// bp market 20k

const cestra_blueprint = new Item("Cestra Blueprint", "Blueprint obtained from the Market for 20,000 credits.");
const buy_cestra_blueprint = new Recipe("Buy Cestra Blueprint", "Buy a Cestra Blueprint from the Market for 20,000 credits.")
    .addInput(credits, 20000)
    .addOutput(cestra_blueprint, 1);
const cestra = new Item("Cestra", "Blueprint obtained from the Market for 20,000 credits.");
const craft_cestra = new Recipe("Craft Cestra", "Craft a Cestra from the blueprint.")
    .addInput(cestra_blueprint, 1)
    .addInput(credits, 25000)
    .addInput(nano_spores, 3000)
    .addInput(rubedo, 1200)
    .addInput(gallium, 4)
    .addInput(neurodes, 2)
    .addOutput(cestra, 1);

// ceta lacera
// bp limited time events

const ceta_lacera_blueprint = new Item("Ceta Lacera Blueprint", "Blueprint obtained from limited time events.");
const ceta_lacera = new Item("Ceta Lacera", "Blueprint obtained from limited time events.");
const craft_ceta_lacera = new Recipe("Craft Ceta Lacera", "Craft a Ceta Lacera from the blueprint.")
    .addInput(ceta_lacera_blueprint, 1)
    .addInput(credits, 25000)
    .addInput(salvage, 8150)
    .addInput(oxium, 400)
    .addInput(rubedo, 5950)
    .addInput(morphics, 15)
    .addOutput(ceta_lacera, 1);

// cinta
// part bps and bp from duviri enigma puzzles

const cinta_grip_blueprint = new Item("Cinta Grip Blueprint", "Blueprint obtained from Duviri Enigma Puzzles.");
const cinta_lower_limb_blueprint = new Item("Cinta Lower Limb Blueprint", "Blueprint obtained from Duviri Enigma Puzzles.");
const cinta_upper_limb_blueprint = new Item("Cinta Upper Limb Blueprint", "Blueprint obtained from Duviri Enigma Puzzles.");
const cinta_string_blueprint = new Item("Cinta String Blueprint", "Blueprint obtained from Duviri Enigma Puzzles.");
const cinta_blueprint = new Item("Cinta Blueprint", "Blueprint obtained from Duviri Enigma Puzzles.");
const cinta_grip = new Item("Cinta Grip", "Blueprint obtained from Duviri Enigma Puzzles.");
const craft_cinta_grip = new Recipe("Craft Cinta Grip", "Craft a Cinta Grip from the blueprint.")
    .addInput(cinta_grip_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(kovnik, 40)
    .addInput(maw_fang, 6)
    .addInput(lamentus, 50)
    .addInput(aggristone, 80)
    .addOutput(cinta_grip, 1);
const cinta_lower_limb = new Item("Cinta Lower Limb", "Blueprint obtained from Duviri Enigma Puzzles.");
const craft_cinta_lower_limb = new Recipe("Craft Cinta Lower Limb", "Craft a Cinta Lower Limb from the blueprint.")
    .addInput(cinta_lower_limb_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(eevani, 40)
    .addInput(ariette_scale, 100)
    .addInput(lamentus, 50)
    .addInput(silphsela, 20)
    .addOutput(cinta_lower_limb, 1);
const cinta_upper_limb = new Item("Cinta Upper Limb", "Blueprint obtained from Duviri Enigma Puzzles.");
const craft_cinta_upper_limb = new Recipe("Craft Cinta Upper Limb", "Craft a Cinta Upper Limb from the blueprint.")
    .addInput(cinta_upper_limb_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(yao_shrub, 40)
    .addInput(dracroot, 60)
    .addInput(lamentus, 50)
    .addInput(aggristone, 80)
const cinta_string = new Item("Cinta String", "Blueprint obtained from Duviri Enigma Puzzles.");
const craft_cinta_string = new Recipe("Craft Cinta String", "Craft a Cinta String from the blueprint.")
    .addInput(cinta_string_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(connla_sprout, 40)
    .addInput(tasoma_extract, 20)
    .addInput(lamentus, 50)
    .addInput(saggen_pearl, 75)
    .addOutput(cinta_string, 1);
const cinta = new Item("Cinta", "Blueprint obtained from Duviri Enigma Puzzles.");
const craft_cinta = new Recipe("Craft Cinta", "Craft a Cinta from the blueprint.")
    .addInput(cinta_blueprint, 1)
    .addInput(credits, 25000)
    .addInput(cinta_grip, 1)
    .addInput(cinta_lower_limb, 1)
    .addInput(cinta_upper_limb, 1)
    .addInput(cinta_string, 1)
    .addOutput(cinta, 1);

// cobra & crane
// bp market 20k

const cobra_and_crane_blueprint = new Item("Cobra & Crane Blueprint", "Blueprint obtained from the Market for 20,000 credits.");
const buy_cobra_and_crane_blueprint = new Recipe("Buy Cobra & Crane Blueprint", "Buy a Cobra & Crane Blueprint from the Market for 20,000 credits.")
    .addInput(credits, 20000)
    .addOutput(cobra_and_crane_blueprint, 1);
const cobra_and_crane = new Item("Cobra & Crane", "Blueprint obtained from the Market for 20,000 credits.");
const craft_cobra_and_crane = new Recipe("Craft Cobra & Crane", "Craft a Cobra & Crane from the blueprint.")
    .addInput(cobra_and_crane_blueprint, 1)
    .addInput(credits, 20000)
    .addInput(argon_crystal, 2)
    .addInput(rubedo, 4000)
    .addInput(plastids, 875)
    .addInput(nano_spores, 18750)
    .addOutput(cobra_and_crane, 1);

// convectrix
// bp energy lab 15k

const convectrix_blueprint = new Item("Convectrix Blueprint", "Blueprint obtained from the Energy Lab for 15,000 credits.");
const buy_convectrix_blueprint = new Recipe("Buy Convectrix Blueprint", "Buy a Convectrix Blueprint from the Energy Lab for 15,000 credits.")
    .addInput(credits, 15000)
    .addOutput(convectrix_blueprint, 1);
const convectrix = new Item("Convectrix", "Blueprint obtained from the Energy Lab for 15,000 credits.");
const craft_convectrix = new Recipe("Craft Convectrix", "Craft a Convectrix from the blueprint.")
    .addInput(convectrix_blueprint, 1)
    .addInput(credits, 30000)
    .addInput(fieldron, 5)
    .addInput(control_module, 10)
    .addInput(oxium, 900)
    .addInput(forma, 1)
    .addOutput(convectrix, 1);

// corinth
// bp market 25k

const corinth_blueprint = new Item("Corinth Blueprint", "Blueprint obtained from the Market for 25,000 credits.");
const buy_corinth_blueprint = new Recipe("Buy Corinth Blueprint", "Buy a Corinth Blueprint from the Market for 25,000 credits.")
    .addInput(credits, 25000)
    .addOutput(corinth_blueprint, 1);
const corinth = new Item("Corinth", "Blueprint obtained from the Market for 25,000 credits.");
const craft_corinth = new Recipe("Craft Corinth", "Craft a Corinth from the blueprint.")
    .addInput(corinth_blueprint, 1)
    .addInput(credits, 20000)
    .addInput(nitain, 2)
    .addInput(alloy_plate, 13000)
    .addInput(gallium, 6)
    .addInput(cryotic, 725)
    .addOutput(corinth, 1);

// cortege
// bp necraloid 8k rank 3
// parts bp necraloid 4k rank 2

const cortege_barrel_blueprint = new Item("Cortege Barrel Blueprint", "Blueprint obtained from the Necraloid for 4,000 standing at rank 2.");
const buy_cortege_barrel_blueprint = new Recipe("Buy Cortege Barrel Blueprint", "Buy a Cortege Barrel Blueprint from the Necraloid for 4,000 standing at rank 2.")
    .addInput(necraloid, 4000)
    .addOutput(cortege_barrel_blueprint, 1);
const cortege_barrel = new Item("Cortege Barrel", "Blueprint obtained from the Necraloid for 4,000 standing at rank 2.");
const craft_cortege_barrel = new Recipe("Craft Cortege Barrel", "Craft a Cortege Barrel from the blueprint.")
    .addInput(cortege_barrel_blueprint, 1)
    .addInput(credits, 1000)
    .addInput(damaged_necramech_weapon_barrel, 1)
    .addInput(adramal_alloy, 80)
    .addInput(spinal_core_section, 20)
    .addInput(fersteel_alloy, 20)
    .addOutput(cortege_barrel, 1);
const cortege_stock_blueprint = new Item("Cortege Stock Blueprint", "Blueprint obtained from the Necraloid for 4,000 standing at rank 2.");
const buy_cortege_stock_blueprint = new Recipe("Buy Cortege Stock Blueprint", "Buy a Cortege Stock Blueprint from the Necraloid for 4,000 standing at rank 2.")
    .addInput(necraloid, 4000)
    .addOutput(cortege_stock_blueprint, 1);
const cortege_stock = new Item("Cortege Stock", "Blueprint obtained from the Necraloid for 4,000 standing at rank 2.");
const craft_cortege_stock = new Recipe("Craft Cortege Stock", "Craft a Cortege Stock from the blueprint.")
    .addInput(cortege_stock_blueprint, 1)
    .addInput(credits, 1000)
    .addInput(damaged_necramech_weapon_stock, 1)
    .addInput(tempered_bapholite, 80)
    .addInput(cabochon_embolos, 10)
    .addInput(hexenon, 250)
    .addOutput(cortege_stock, 1);
const cortege_receiver_blueprint = new Item("Cortege Receiver Blueprint", "Blueprint obtained from the Necraloid for 4,000 standing at rank 2.");
const buy_cortege_receiver_blueprint = new Recipe("Buy Cortege Receiver Blueprint", "Buy a Cortege Receiver Blueprint from the Necraloid for 4,000 standing at rank 2.")
    .addInput(necraloid, 4000)
    .addOutput(cortege_receiver_blueprint, 1);
const cortege_receiver = new Item("Cortege Receiver", "Blueprint obtained from the Necraloid for 4,000 standing at rank 2.");
const craft_cortege_receiver = new Recipe("Craft Cortege Receiver", "Craft a Cortege Receiver from the blueprint.")
    .addInput(cortege_receiver_blueprint, 1)
    .addInput(credits, 1000)
    .addInput(damaged_necramech_weapon_receiver, 1)
    .addInput(devolved_namalon, 80)
    .addInput(trapezium_xenorhast, 10)
    .addInput(tink_dissipator_coil, 15)
    .addOutput(cortege_receiver, 1);
const cortege_blueprint = new Item("Cortege Blueprint", "Blueprint obtained from the Necraloid for 8,000 standing at rank 3.");
const buy_cortege_blueprint = new Recipe("Buy Cortege Blueprint", "Buy a Cortege Blueprint from the Necraloid for 8,000 standing at rank 3.")
    .addInput(necraloid, 8000)
    .addOutput(cortege_blueprint, 1);
const cortege = new Item("Cortege", "Blueprint obtained from the Necraloid for 8,000 standing at rank 3.");
const craft_cortege = new Recipe("Craft Cortege", "Craft a Cortege from the blueprint.")
    .addInput(cortege_blueprint, 1)
    .addInput(credits, 20000)
    .addInput(cortege_barrel, 1)
    .addInput(cortege_stock, 1)
    .addInput(cortege_receiver, 1)
    .addOutput(cortege, 1);

// corufell
// bp tyana pass rot a
// parts bp tyana pass rot b

const corufell_barrel = new Item("Corufell Barrel", "Blueprint obtained from Tyana Pass at Rotation B.");
const corufell_receiver = new Item("Corufell Receiver", "Blueprint obtained from Tyana Pass at Rotation B.");
const corufell_handle = new Item("Corufell Handle", "Blueprint obtained from Tyana Pass at Rotation B.");
const corufell_blueprint = new Item("Corufell Blueprint", "Blueprint obtained from Tyana Pass at Rotation A.");
const corufell = new Item("Corufell", "Blueprint obtained from Tyana Pass at Rotation A.");
const craft_corufell = new Recipe("Craft Corufell", "Craft a Corufell from the blueprint.")
    .addInput(corufell_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(corufell_barrel, 1)
    .addInput(corufell_receiver, 1)
    .addInput(corufell_handle, 1)
    .addInput(orokin_cell, 3)
    .addOutput(corufell, 1);

// corvas
// bp market 35k
// parts syndicate 20k rank 2

const corvas_barrel = new Item("Corvas Barrel", "Item obtained from Arbiters of Hexis for 20,000 standing at rank 2.");
const corvas_receiver = new Item("Corvas Receiver", "Item obtained from Cephalon Suda for 20,000 standing at rank 2.");
const corvas_stock = new Item("Corvas Stock", "Item obtained from Steel Meridian for 20,000 standing at rank 2.");
const corvas_blueprint = new Item("Corvas Blueprint", "Blueprint obtained from the Market for 35,000 credits.");
const corvas = new Item("Corvas", "Blueprint obtained from the Market for 35,000 credits.");
const craft_corvas = new Recipe("Craft Corvas", "Craft a Corvas from the blueprint.")
    .addInput(corvas_blueprint, 1)
    .addInput(credits, 45000)
    .addInput(corvas_barrel, 1)
    .addInput(corvas_receiver, 1)
    .addInput(corvas_stock, 1)
    .addInput(argon_crystal, 2)
    .addOutput(corvas, 1);

// cronus
// bp captair vor

const cronus_blueprint = new Item("Cronus Blueprint", "Blueprint obtained from killing Captain Vor.");
const cronus = new Item("Cronus", "Blueprint obtained from killing Captain Vor.");
const craft_cronus = new Recipe("Craft Cronus", "Craft a Cronus from the blueprint.")
    .addInput(cronus_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(morphics, 1)
    .addInput(ferrite, 500)
    .addInput(polymer_bundle, 75)
    .addOutput(cronus, 1);

// cyanex
// bp energy lab 15k

const cyanex_blueprint = new Item("Cyanex Blueprint", "Blueprint obtained from the Energy Lab in the Dojo for 15,000 credits.");
const buy_cyanex_blueprint = new Recipe("Buy Cyanex Blueprint", "Buy a Cyanex Blueprint from the Energy Lab in the Dojo for 15,000 credits.")
    .addInput(credits, 15000)
    .addOutput(cyanex_blueprint, 1);
const cyanex = new Item("Cyanex", "Blueprint obtained from the Energy Lab in the Dojo for 15,000 credits.");
const craft_cyanex = new Recipe("Craft Cyanex", "Craft a Cyanex from the blueprint.")
    .addInput(cyanex_blueprint, 1)
    .addInput(credits, 20000)
    .addInput(fieldron, 5)
    .addInput(nano_spores, 8750)
    .addInput(hexenon, 250)
    .addInput(forma, 1)
    .addOutput(cyanex, 1);

// cycron
// bp energy lab 15k

const cycron_blueprint = new Item("Cycron Blueprint", "Blueprint obtained from the Energy Lab in the Dojo for 15,000 credits.");
const buy_cycron_blueprint = new Recipe("Buy Cycron Blueprint", "Buy a Cycron Blueprint from the Energy Lab in the Dojo for 15,000 credits.")
    .addInput(credits, 15000)
    .addOutput(cycron_blueprint, 1);
const cycron = new Item("Cycron", "Blueprint obtained from the Energy Lab in the Dojo for 15,000 credits.");
const craft_cycron = new Recipe("Craft Cycron", "Craft a Cycron from the blueprint.")
    .addInput(cycron_blueprint, 1)
    .addInput(credits, 25000)
    .addInput(fieldron, 4)
    .addInput(ferrite, 9000)
    .addInput(circuits, 1500)
    .addInput(forma, 1)
    .addOutput(cycron, 1);

// cyngas
// parts syndicate 20k rank 3
// bp market 35k

const cyngas_barrel = new Item("Cyngas Barrel", "Item obtained from Arbiters of Hexis for 20,000 standing at rank 3.");
const buy_cyngas_barrel = new Recipe("Buy Cyngas Barrel", "Buy a Cyngas Barrel from Arbiters of Hexis for 20,000 standing at rank 3.")
    .addInput(arbiters_of_hexis, 20000)
    .addOutput(cyngas_barrel, 1);
const cyngas_receiver = new Item("Cyngas Receiver", "Item obtained from Cephalon Suda for 20,000 standing at rank 3.");
const buy_cyngas_receiver = new Recipe("Buy Cyngas Receiver", "Buy a Cyngas Receiver from Cephalon Suda for 20,000 standing at rank 3.")
    .addInput(cephalon_suda, 20000)
    .addOutput(cyngas_receiver, 1);
const cyngas_stock = new Item("Cyngas Stock", "Item obtained from The Perrin Sequence for 20,000 standing at rank 3.");
const buy_cyngas_stock = new Recipe("Buy Cyngas Stock", "Buy a Cyngas Stock from The Perrin Sequence for 20,000 standing at rank 3.")
    .addInput(the_perrin_sequence, 20000)
    .addOutput(cyngas_stock, 1);
const cyngas_blueprint = new Item("Cyngas Blueprint", "Blueprint obtained from the Market for 35,000 credits.");
const buy_cyngas_blueprint = new Recipe("Buy Cyngas Blueprint", "Buy a Cyngas Blueprint from the Market for 35,000 credits.")
    .addInput(credits, 35000)
    .addOutput(cyngas_blueprint, 1);
const cyngas = new Item("Cyngas", "Blueprint obtained from the Market for 35,000 credits.");
const craft_cyngas = new Recipe("Craft Cyngas", "Craft a Cyngas from the blueprint.")
    .addInput(cyngas_blueprint, 1)
    .addInput(credits, 45000)
    .addInput(cyngas_barrel, 1)
    .addInput(cyngas_receiver, 1)
    .addInput(cyngas_stock, 1)
    .addInput(tellurium, 2)
    .addOutput(cyngas, 1);

// daikyu
// bp tenno lab 15k

const daikyu_blueprint = new Item("Daikyu Blueprint", "Blueprint obtained from the Tenno Lab in the Dojo for 15,000 credits.");
const buy_daikyu_blueprint = new Recipe("Buy Daikyu Blueprint", "Buy a Daikyu Blueprint from the Tenno Lab in the Dojo for 15,000 credits.")
    .addInput(credits, 15000)
    .addOutput(daikyu_blueprint, 1);
const daikyu = new Item("Daikyu", "Blueprint obtained from the Tenno Lab in the Dojo for 15,000 credits.");
const craft_daikyu = new Recipe("Craft Daikyu", "Craft a Daikyu from the blueprint.")
    .addInput(daikyu_blueprint, 1)
    .addInput(credits, 20000)
    .addInput(neurodes, 2)
    .addInput(rubedo, 300)
    .addInput(salvage, 1200)
    .addInput(forma, 1)
    .addOutput(daikyu, 1);

// dark dagger
// bp nightwave 50 creds

const dark_dagger_blueprint = new Item("Dark Dagger Blueprint", "Blueprint obtained from Nightwave for 50 Nora Cred.");
const buy_dark_dagger_blueprint = new Recipe("Buy Dark Dagger Blueprint", "Buy a Dark Dagger Blueprint from Nightwave for 50 Nora Cred.")
    .addInput(nora_cred, 50)
    .addOutput(dark_dagger_blueprint, 1);
const dark_dagger = new Item("Dark Dagger", "Blueprint obtained from Nightwave for 50 Nora Cred.");
const craft_dark_dagger = new Recipe("Craft Dark Dagger", "Craft a Dark Dagger from the blueprint.")
    .addInput(dark_dagger_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(neurodes, 2)
    .addInput(ferrite, 500)
    .addInput(plastids, 500)
    .addInput(polymer_bundle, 300)
    .addOutput(dark_dagger, 1);

// dark split sword
// bp tenno lab 15k

const dark_split_sword_blueprint = new Item("Dark Split-Sword Blueprint", "Blueprint obtained from the Tenno Lab in the Dojo for 15,000 credits.");
const buy_dark_split_sword_blueprint = new Recipe("Buy Dark Split-Sword Blueprint", "Buy a Dark Split-Sword Blueprint from the Tenno Lab in the Dojo for 15,000 credits.")
    .addInput(credits, 15000)
    .addOutput(dark_split_sword_blueprint, 1);
const dark_split_sword = new Item("Dark Split-Sword", "Blueprint obtained from the Tenno Lab in the Dojo for 15,000 credits.");
const craft_dark_split_sword = new Recipe("Craft Dark Split-Sword", "Craft a Dark Split-Sword from the blueprint.")
    .addInput(dark_split_sword_blueprint, 1)
    .addInput(credits, 20000)
    .addInput(dual_skana, 1)
    .addInput(rubedo, 1200)
    .addInput(mutagen_mass, 10)
    .addInput(forma, 1)
    .addOutput(dark_split_sword, 1);

// dark sword
// bp nightwave 50 nora cred

const dark_sword_blueprint = new Item("Dark Sword Blueprint", "Blueprint obtained from Nightwave for 50 Nora Cred.");
const buy_dark_sword_blueprint = new Recipe("Buy Dark Sword Blueprint", "Buy a Dark Sword Blueprint from Nightwave for 50 Nora Cred.")
    .addInput(nora_cred, 50)
    .addOutput(dark_sword_blueprint, 1);
const dark_sword = new Item("Dark Sword", "Blueprint obtained from Nightwave for 50 Nora Cred.");
const craft_dark_sword = new Recipe("Craft Dark Sword", "Craft a Dark Sword from the blueprint.")
    .addInput(dark_sword_blueprint, 1)
    .addInput(credits, 20000)
    .addInput(neurodes, 2)
    .addInput(ferrite, 800)
    .addInput(plastids, 200)
    .addInput(polymer_bundle, 750)
    .addOutput(dark_sword, 1);

// dera
// bp energy lab 15k

const dera_blueprint = new Item("Dera Blueprint", "Blueprint obtained from the Energy Lab in the Dojo for 15,000 credits.");
const buy_dera_blueprint = new Recipe("Buy Dera Blueprint", "Buy a Dera Blueprint from the Energy Lab in the Dojo for 15,000 credits.")
    .addInput(credits, 15000)
    .addOutput(dera_blueprint, 1);
const dera = new Item("Dera", "Blueprint obtained from the Energy Lab in the Dojo for 15,000 credits.");
const craft_dera = new Recipe("Craft Dera", "Craft a Dera from the blueprint.")
    .addInput(dera_blueprint, 1)
    .addInput(credits, 25000)
    .addInput(fieldron, 2)
    .addInput(circuits, 600)
    .addInput(ferrite, 4500)
    .addInput(forma, 1)
    .addOutput(dera, 1);

// dera vandal
// bp and parts as invasion rewards

const dera_vandal_blueprint = new Item("Dera Vandal Blueprint", "Blueprint obtained as an Invasion reward.");
const dera_vandal_barrel = new Item("Dera Vandal Barrel", "Blueprint obtained as an Invasion reward.");
const dera_vandal_receiver = new Item("Dera Vandal Receiver", "Blueprint obtained as an Invasion reward.");
const dera_vandal_stock = new Item("Dera Vandal Stock", "Blueprint obtained as an Invasion reward.");
const dera_vandal = new Item("Dera Vandal", "Blueprint obtained as an Invasion reward.");
const craft_dera_vandal = new Recipe("Craft Dera Vandal", "Craft a Dera Vandal from the blueprint.")
    .addInput(dera_vandal_blueprint, 1)
    .addInput(dera_vandal_barrel, 1)
    .addInput(dera_vandal_receiver, 1)
    .addInput(dera_vandal_stock, 1)
    .addInput(credits, 25000)
    .addOutput(dera_vandal, 1);

// despair
// bp stalker

const despair_blueprint = new Item("Despair Blueprint", "Blueprint obtained from Stalker."); 
const despair = new Item("Despair", "Blueprint obtained from Stalker.");
const craft_despair = new Recipe("Craft Despair", "Craft a Despair from the blueprint.")
    .addInput(despair_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(morphics, 10)
    .addInput(ferrite, 5000)
    .addInput(alloy_plate, 800)
    .addInput(salvage, 4500)
    .addOutput(despair, 1);

// destreza
// bp market 25k

const destreza_blueprint = new Item("Destreza Blueprint", "Blueprint obtained from the Market for 25,000 credits.");
const buy_destreza_blueprint = new Recipe("Buy Destreza Blueprint", "Buy a Destreza Blueprint from the Market for 25,000 credits.")
    .addInput(credits, 25000)
    .addOutput(destreza_blueprint, 1);
const destreza = new Item("Destreza", "Blueprint obtained from the Market for 25,000 credits.");
const craft_destreza = new Recipe("Craft Destreza", "Craft a Destreza from the blueprint.")
    .addInput(destreza_blueprint, 1)
    .addInput(credits, 20000)
    .addInput(alloy_plate, 10000)
    .addInput(plastids, 1700)
    .addInput(nitain, 5)
    .addInput(argon_crystal, 2)
    .addOutput(destreza, 1);

// detron
// bp and parts zanuka

const detron_blueprint = new Item("Detron Blueprint", "Blueprint obtained from Zanuka.");
const detron_barrel = new Item("Detron Barrel", "Blueprint obtained from Zanuka.");
const detron_receiver = new Item("Detron Receiver", "Blueprint obtained from Zanuka.");
const detron = new Item("Detron", "Blueprint obtained from Zanuka.");
const craft_detron = new Recipe("Craft Detron", "Craft a Detron from the blueprint.")
    .addInput(detron_blueprint, 1)
    .addInput(detron_barrel, 1)
    .addInput(detron_receiver, 1)
    .addInput(credits, 15000)
    .addInput(orokin_cell, 10)
    .addOutput(detron, 1);

// dex dakra
// full weapon anniversary alerts

const dex_dakra = new Item("Dex Dakra", "Weapon obtained from Anniversary Alerts.");

// dex furis
// full weapon anniversary alerts

const dex_furis = new Item("Dex Furis", "Weapon obtained from Anniversary Alerts.");

// dex sybaris
// full weapon anniversary alerts

const dex_sybaris = new Item("Dex Sybaris", "Weapon obtained from Anniversary Alerts.");

// nikana 
// bp tenno lab 15k

const nikana_blueprint = new Item("Nikana Blueprint", "Blueprint obtained from the Tenno Lab in the Dojo for 15,000 credits.");
const buy_nikana_blueprint = new Recipe("Buy Nikana Blueprint", "Buy a Nikana Blueprint from the Tenno Lab in the Dojo for 15,000 credits.")
    .addInput(credits, 15000)
    .addOutput(nikana_blueprint, 1);
const nikana = new Item("Nikana", "Blueprint obtained from the Tenno Lab in the Dojo for 15,000 credits.");
const craft_nikana = new Recipe("Craft Nikana", "Craft a Nikana from the blueprint.")
    .addInput(nikana_blueprint, 1)
    .addInput(credits, 5000)
    .addInput(argon_crystal, 3)
    .addInput(oxium, 75)
    .addInput(alloy_plate, 200)
    .addInput(forma, 1)
    .addOutput(nikana, 1);

// dragon nikana
// bp market 30k

const dragon_nikana_blueprint = new Item("Dragon Nikana Blueprint", "Blueprint obtained from the Market for 30,000 credits.");
const buy_dragon_nikana_blueprint = new Recipe("Buy Dragon Nikana Blueprint", "Buy a Dragon Nikana Blueprint from the Market for 30,000 credits.")
    .addInput(credits, 30000)
    .addOutput(dragon_nikana_blueprint, 1);
const dragon_nikana = new Item("Dragon Nikana", "Blueprint obtained from the Market for 30,000 credits.");
const craft_dragon_nikana = new Recipe("Craft Dragon Nikana", "Craft a Dragon Nikana from the blueprint.")
    .addInput(dragon_nikana_blueprint, 1)
    .addInput(nikana, 1)
    .addInput(credits, 5000)
    .addInput(argon_crystal, 1)
    .addInput(oxium, 75)
    .addOutput(dragon_nikana, 1);

// drakgoon
// bp market 30k

const drakgoon_blueprint = new Item("Drakgoon Blueprint", "Blueprint obtained from the Market for 30,000 credits.");
const buy_drakgoon_blueprint = new Recipe("Buy Drakgoon Blueprint", "Buy a Drakgoon Blueprint from the Market for 30,000 credits.")
    .addInput(credits, 30000)
    .addOutput(drakgoon_blueprint, 1);
const drakgoon = new Item("Drakgoon", "Blueprint obtained from the Market for 30,000 credits.");
const craft_drakgoon = new Recipe("Craft Drakgoon", "Craft a Drakgoon from the blueprint.")
    .addInput(drakgoon_blueprint, 1)
    .addInput(credits, 30000)
    .addInput(morphics, 5)
    .addInput(alloy_plate, 950)
    .addInput(nano_spores, 5500)
    .addInput(circuits, 1100)
    .addOutput(drakgoon, 1);

// dread
// bp stalker

const dread_blueprint = new Item("Dread Blueprint", "Blueprint obtained from Stalker.");
const dread = new Item("Dread", "Blueprint obtained from Stalker.");
const craft_dread = new Recipe("Craft Dread", "Craft a Dread from the blueprint.")
    .addInput(dread_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(morphics, 6)
    .addInput(circuits, 900)
    .addInput(polymer_bundle, 750)
    .addInput(plastids, 900)
    .addOutput(dread, 1);

// dual cestra
// bp energy lab 15k

const dual_cestra_blueprint = new Item("Dual Cestra Blueprint", "Blueprint obtained from the Energy Lab in the Dojo for 15,000 credits.");
const buy_dual_cestra_blueprint = new Recipe("Buy Dual Cestra Blueprint", "Buy a Dual Cestra Blueprint from the Energy Lab in the Dojo for 15,000 credits.")
    .addInput(credits, 15000)
    .addOutput(dual_cestra_blueprint, 1);
const dual_cestra = new Item("Dual Cestra", "Blueprint obtained from the Energy Lab in the Dojo for 15,000 credits.");
const craft_dual_cestra = new Recipe("Craft Dual Cestra", "Craft a Dual Cestra from the blueprint.")
    .addInput(dual_cestra_blueprint, 1)
    .addInput(credits, 25000)
    .addInput(cestra, 2)
    .addInput(fieldron, 2)
    .addInput(forma, 1)
    .addOutput(dual_cestra, 1);

// dual cleavers
// bp market 25k

const dual_cleavers_blueprint = new Item("Dual Cleavers Blueprint", "Blueprint obtained from the Market for 25,000 credits.");
const buy_dual_cleavers_blueprint = new Recipe("Buy Dual Cleavers Blueprint", "Buy a Dual Cleavers Blueprint from the Market for 25,000 credits.")
    .addInput(credits, 25000)
    .addOutput(dual_cleavers_blueprint, 1);
const dual_cleavers = new Item("Dual Cleavers", "Blueprint obtained from the Market for 25,000 credits.");
const craft_dual_cleavers = new Recipe("Craft Dual Cleavers", "Craft a Dual Cleavers from the blueprint.")
    .addInput(dual_cleavers_blueprint, 1)
    .addInput(credits, 20000)
    .addInput(gallium, 5)
    .addInput(salvage, 1000)
    .addInput(polymer_bundle, 800)
    .addInput(alloy_plate, 1200)
    .addOutput(dual_cleavers, 1);

// dual decurion
// bp market 35k
// parts syndicate 20k

const dual_decurion_blueprint = new Item("Dual Decurion Blueprint", "Blueprint obtained from the Market for 35,000 credits.");
const buy_dual_decurion_blueprint = new Recipe("Buy Dual Decurion Blueprint", "Buy a Dual Decurion Blueprint from the Market for 35,000 credits.")
    .addInput(credits, 35000)
    .addOutput(dual_decurion_blueprint, 1);
const dual_decurion_barrel = new Item("Dual Decurion Barrel", "Item obtained from Arbiters of Hexis for 20,000 standing.");
const buy_dual_decurion_barrel = new Recipe("Buy Dual Decurion Barrel", "Buy a Dual Decurion Barrel from Arbiters of Hexis for 20,000 standing.")
    .addInput(arbiters_of_hexis, 20000)
    .addOutput(dual_decurion_barrel, 1);
const dual_decurion_receiver = new Item("Dual Decurion Receiver", "Item obtained from Arbiters of Hexis for 20,000 standing.");
const buy_dual_decurion_receiver = new Recipe("Buy Dual Decurion Receiver", "Buy a Dual Decurion Receiver from Arbiters of Hexis for 20,000 standing.")
    .addInput(arbiters_of_hexis, 20000)
    .addOutput(dual_decurion_receiver, 1);
const dual_decurion = new Item("Dual Decurion", "Blueprint obtained from the Market for 35,000 credits.");
const craft_dual_decurion = new Recipe("Craft Dual Decurion", "Craft a Dual Decurion from the blueprint.")
    .addInput(dual_decurion_blueprint, 1)
    .addInput(credits, 45000)
    .addInput(dual_decurion_barrel, 2)
    .addInput(dual_decurion_receiver, 2)
    .addInput(control_module, 2)
    .addOutput(dual_decurion, 1);

// dual ether
// bp market 20k

const dual_ether_blueprint = new Item("Dual Ether Blueprint", "Blueprint obtained from the Market for 20,000 credits.");
const buy_dual_ether_blueprint = new Recipe("Buy Dual Ether Blueprint", "Buy a Dual Ether Blueprint from the Market for 20,000 credits.")
    .addInput(credits, 20000)
    .addOutput(dual_ether_blueprint, 1);
const dual_ether = new Item("Dual Ether", "Blueprint obtained from the Market for 20,000 credits.");
const craft_dual_ether = new Recipe("Craft Dual Ether", "Craft a Dual Ether from the blueprint.")
    .addInput(dual_ether_blueprint, 1)
    .addInput(credits, 20000)
    .addInput(morphics, 3)
    .addInput(salvage, 900)
    .addInput(ferrite, 850)
    .addInput(polymer_bundle, 800)
    .addOutput(dual_ether, 1);

// dual heat swords
// bp market 15k

const dual_heat_swords_blueprint = new Item("Dual Heat Swords Blueprint", "Blueprint obtained from the Market for 15,000 credits.");
const buy_dual_heat_swords_blueprint = new Recipe("Buy Dual Heat Swords Blueprint", "Buy a Dual Heat Swords Blueprint from the Market for 15,000 credits.")
    .addInput(credits, 15000)
    .addOutput(dual_heat_swords_blueprint, 1);
const dual_heat_swords = new Item("Dual Heat Swords", "Blueprint obtained from the Market for 15,000 credits.");
const craft_dual_heat_swords = new Recipe("Craft Dual Heat Swords", "Craft a Dual Heat Swords from the blueprint.")
    .addInput(dual_heat_swords_blueprint, 1)
    .addInput(credits, 20000)
    .addInput(morphics, 2)
    .addInput(salvage, 900)
    .addInput(ferrite, 1000)
    .addInput(polymer_bundle, 700)
    .addOutput(dual_heat_swords, 1);

// dual ichor
// bp bio lab 50k

const dual_ichor_blueprint = new Item("Dual Ichor Blueprint", "Blueprint obtained from the Bio Lab in a Clan Dojo for 50,000 credits.");
const buy_dual_ichor_blueprint = new Recipe("Buy Dual Ichor Blueprint", "Buy a Dual Ichor Blueprint from the Bio Lab in a Clan Dojo for 50,000 credits.")
    .addInput(credits, 50000)
    .addOutput(dual_ichor_blueprint, 1);
const dual_ichor = new Item("Dual Ichor", "Blueprint obtained from the Bio Lab in a Clan Dojo for 50,000 credits.");
const craft_dual_ichor = new Recipe("Craft Dual Ichor", "Craft a Dual Ichor from the blueprint.")
    .addInput(dual_ichor_blueprint, 1)
    .addInput(credits, 30000)
    .addInput(mutagen_mass, 4)
    .addInput(circuits, 1200)
    .addInput(salvage, 15000)
    .addInput(forma, 1)
    .addOutput(dual_ichor, 1);

// kama
// bp market 40k

const kama_blueprint = new Item("Kama Blueprint", "Blueprint obtained from the Market for 40,000 credits.");
const buy_kama_blueprint = new Recipe("Buy Kama Blueprint", "Buy a Kama Blueprint from the Market for 40,000 credits.")
    .addInput(credits, 40000)
    .addOutput(kama_blueprint, 1);
const kama = new Item("Kama", "Blueprint obtained from the Market for 40,000 credits.");
const craft_kama = new Recipe("Craft Kama", "Craft a Kama from the blueprint.")
    .addInput(kama_blueprint, 1)
    .addInput(credits, 20000)
    .addInput(neural_sensor, 5)
    .addInput(ferrite, 1200)
    .addInput(circuits, 900)
    .addInput(polymer_bundle, 1200)
    .addOutput(kama, 1);

// dual kamas
// bp market 40k

const dual_kamas_blueprint = new Item("Dual Kamas Blueprint", "Blueprint obtained from the Market for 40,000 credits.");
const buy_dual_kamas_blueprint = new Recipe("Buy Dual Kamas Blueprint", "Buy a Dual Kamas Blueprint from the Market for 40,000 credits.")
    .addInput(credits, 40000)
    .addOutput(dual_kamas_blueprint, 1);
const dual_kamas = new Item("Dual Kamas", "Blueprint obtained from the Market for 40,000 credits.");
const craft_dual_kamas = new Recipe("Craft Dual Kamas", "Craft a Dual Kamas from the blueprint.")
    .addInput(dual_kamas_blueprint, 1)
    .addInput(credits, 20000)
    .addInput(kama, 2)
    .addInput(orokin_cell, 1)
    .addOutput(dual_kamas, 1);

// dual keres
// bp market 25k

const dual_keres_blueprint = new Item("Dual Keres Blueprint", "Blueprint obtained from the Market for 25,000 credits.");
const buy_dual_keres_blueprint = new Recipe("Buy Dual Keres Blueprint", "Buy a Dual Keres Blueprint from the Market for 25,000 credits.")
    .addInput(credits, 25000)
    .addOutput(dual_keres_blueprint, 1);
const dual_keres = new Item("Dual Keres", "Blueprint obtained from the Market for 25,000 credits.");
const craft_dual_keres = new Recipe("Craft Dual Keres", "Craft a Dual Keres from the blueprint.")
    .addInput(dual_keres_blueprint, 1)
    .addInput(credits, 20000)
    .addInput(argon_crystal, 2)
    .addInput(oxium, 230)
    .addInput(salvage, 13250)
    .addInput(tellurium, 3)
    .addOutput(dual_keres, 1);

// dual raza
// bp tenno lab 15k

const dual_raza_blueprint = new Item("Dual Raza Blueprint", "Blueprint obtained from the Tenno Lab in a Clan Dojo for 15,000 credits.");
const buy_dual_raza_blueprint = new Recipe("Buy Dual Raza Blueprint", "Buy a Dual Raza Blueprint from the Tenno Lab in a Clan Dojo for 15,000 credits.")
    .addInput(credits, 15000)
    .addOutput(dual_raza_blueprint, 1);
const dual_raza = new Item("Dual Raza", "Blueprint obtained from the Tenno Lab in a Clan Dojo for 15,000 credits.");
const craft_dual_raza = new Recipe("Craft Dual Raza", "Craft a Dual Raza from the blueprint.")
    .addInput(dual_raza_blueprint, 1)
    .addInput(credits, 20000)
    .addInput(dual_kamas, 1)
    .addInput(cryotic, 200)
    .addInput(alloy_plate, 200)
    .addInput(orokin_cell, 1)
    .addOutput(dual_raza, 1);

// dual toxocyst
// bp bio lab 15k

const dual_toxocyst_blueprint = new Item("Dual Toxocyst Blueprint", "Blueprint obtained from the Bio Lab in a Clan Dojo for 15,000 credits.");
const buy_dual_toxocyst_blueprint = new Recipe("Buy Dual Toxocyst Blueprint", "Buy a Dual Toxocyst Blueprint from the Bio Lab in a Clan Dojo for 15,000 credits.")
    .addInput(credits, 15000)
    .addOutput(dual_toxocyst_blueprint, 1);
const dual_toxocyst = new Item("Dual Toxocyst", "Blueprint obtained from the Bio Lab in a Clan Dojo for 15,000 credits.");
const craft_dual_toxocyst = new Recipe("Craft Dual Toxocyst", "Craft a Dual Toxocyst from the blueprint.")
    .addInput(dual_toxocyst_blueprint, 1)
    .addInput(credits, 30000)
    .addInput(mutagen_mass, 4)
    .addInput(nano_spores, 6500)
    .addInput(plastids, 1100)
    .addInput(forma, 1)
    .addOutput(dual_toxocyst, 1);

// dual zoren
// bp market 15k

const dual_zoren_blueprint = new Item("Dual Zoren Blueprint", "Blueprint obtained from the Market for 15,000 credits.");
const buy_dual_zoren_blueprint = new Recipe("Buy Dual Zoren Blueprint", "Buy a Dual Zoren Blueprint from the Market for 15,000 credits.")
    .addInput(credits, 15000)
    .addOutput(dual_zoren_blueprint, 1);
const dual_zoren = new Item("Dual Zoren", "Blueprint obtained from the Market for 15,000 credits.");
const craft_dual_zoren = new Recipe("Craft Dual Zoren", "Craft a Dual Zoren from the blueprint.")
    .addInput(dual_zoren_blueprint, 1)
    .addInput(credits, 30000)
    .addInput(morphics, 4)
    .addInput(salvage, 900)
    .addInput(ferrite, 1100)
    .addInput(alloy_plate, 800)
    .addOutput(dual_zoren, 1);

// edun
// bp teshins cave 50pc

const edun_blueprint = new Item("Edun Blueprint", "Blueprint obtained from Teshin's Cave for 50 Pathos Clamp.");
const buy_edun_blueprint = new Recipe("Buy Edun Blueprint", "Buy a Edun Blueprint from Teshin's Cave for 50 Pathos Clamp.")
    .addInput(pathos_clamp, 50)
    .addOutput(edun_blueprint, 1);
const edun = new Item("Edun", "Blueprint obtained from Teshin's Cave for 50 Pathos Clamp.");
const craft_edun = new Recipe("Craft Edun", "Craft a Edun from the blueprint.")
    .addInput(edun_blueprint, 1)
    .addInput(credits, 30000)
    .addInput(tasoma_extract, 30)
    .addInput(rune_marrow, 30)
    .addInput(nacreous_pebble, 50)
    .addInput(connla_sprout, 40)
    .addOutput(edun, 1);

// embolist
// bp bio lab 50k

const embolist_blueprint = new Item("Embolist Blueprint", "Blueprint obtained from the Bio Lab in a Clan Dojo for 50,000 credits.");
const buy_embolist_blueprint = new Recipe("Buy Embolist Blueprint", "Buy a Embolist Blueprint from the Bio Lab in a Clan Dojo for 50,000 credits.")
    .addInput(credits, 50000)
    .addOutput(embolist_blueprint, 1);
const embolist = new Item("Embolist", "Blueprint obtained from the Bio Lab in a Clan Dojo for 50,000 credits.");
const craft_embolist = new Recipe("Craft Embolist", "Craft a Embolist from the blueprint.")
    .addInput(embolist_blueprint, 1)
    .addInput(credits, 30000)
    .addInput(mutagen_mass, 5)
    .addInput(salvage, 15000)
    .addInput(circuits, 1200)
    .addInput(forma, 1)
    .addOutput(embolist, 1);

// endura
// bp tenno lab 15k

const endura_blueprint = new Item("Endura Blueprint", "Blueprint obtained from the Tenno Lab in a Clan Dojo for 15,000 credits.");
const buy_endura_blueprint = new Recipe("Buy Endura Blueprint", "Buy a Endura Blueprint from the Tenno Lab in a Clan Dojo for 15,000 credits.")
    .addInput(credits, 15000)
    .addOutput(endura_blueprint, 1);
const endura = new Item("Endura", "Blueprint obtained from the Tenno Lab in a Clan Dojo for 15,000 credits.");
const craft_endura = new Recipe("Craft Endura", "Craft a Endura from the blueprint.")
    .addInput(endura_blueprint, 1)
    .addInput(credits, 20000)
    .addInput(alloy_plate, 12000)
    .addInput(plastids, 1200)
    .addInput(gallium, 2)
    .addInput(argon_crystal, 2)
    .addOutput(endura, 1);

// epitaph
// bp void storm railjack
// barrel and receiver void storm railjack

const epitaph_blueprint = new Item("Epitaph Blueprint", "Blueprint obtained from Void Storm Railjack missions.");
const epitaph_barrel = new Item("Epitaph Barrel", "Item obtained from Void Storm Railjack missions.");
const epitaph_receiver = new Item("Epitaph Receiver", "Item obtained from Void Storm Railjack missions.");
const epitaph = new Item("Epitaph", "Blueprint obtained from Void Storm Railjack missions.");
const craft_epitaph = new Recipe("Craft Epitaph", "Craft a Epitaph from the blueprint.")
    .addInput(epitaph_blueprint, 1)
    .addInput(epitaph_barrel, 1)
    .addInput(epitaph_receiver, 1)
    .addInput(orokin_cell, 7)
    .addInput(credits, 20000)
    .addOutput(epitaph, 1);
    

// ether daggers
// bp stolen dreams quest

const ether_daggers_blueprint = new Item("Ether Daggers Blueprint", "Blueprint obtained from the Stolen Dreams quest.");
const ether_daggers = new Item("Ether Daggers", "Blueprint obtained from the Stolen Dreams quest.");
const craft_ether_daggers = new Recipe("Craft Ether Daggers", "Craft a Ether Daggers from the blueprint.")
    .addInput(ether_daggers_blueprint, 1)
    .addInput(credits, 20000)
    .addInput(morphics, 5)
    .addInput(polymer_bundle, 600)
    .addInput(ferrite, 600)
    .addInput(nano_spores, 1200)
    .addOutput(ether_daggers, 1);

// ether reaper
// bp market 50k

const ether_reaper_blueprint = new Item("Ether Reaper Blueprint", "Blueprint obtained from the Market for 50,000 credits.");
const buy_ether_reaper_blueprint = new Recipe("Buy Ether Reaper Blueprint", "Buy a Ether Reaper Blueprint from the Market for 50,000 credits.")
    .addInput(credits, 50000)
    .addOutput(ether_reaper_blueprint, 1);
const ether_reaper = new Item("Ether Reaper", "Blueprint obtained from the Market for 50,000 credits.");
const craft_ether_reaper = new Recipe("Craft Ether Reaper", "Craft a Ether Reaper from the blueprint.")
    .addInput(ether_reaper_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(polymer_bundle, 1000)
    .addInput(rubedo, 1000)
    .addInput(morphics, 10)
    .addInput(ferrite, 1000)
    .addOutput(ether_reaper, 1);

// ether sword
// bp market 20k

const ether_sword_blueprint = new Item("Ether Sword Blueprint", "Blueprint obtained from the Market for 20,000 credits.");
const buy_ether_sword_blueprint = new Recipe("Buy Ether Sword Blueprint", "Buy a Ether Sword Blueprint from the Market for 20,000 credits.")
    .addInput(credits, 20000)
    .addOutput(ether_sword_blueprint, 1);
const ether_sword = new Item("Ether Sword", "Blueprint obtained from the Market for 20,000 credits.");
const craft_ether_sword = new Recipe("Craft Ether Sword", "Craft a Ether Sword from the blueprint.")
    .addInput(ether_sword_blueprint, 1)
    .addInput(credits, 20000)
    .addInput(morphics, 4)
    .addInput(rubedo, 700)
    .addInput(ferrite, 900)
    .addInput(alloy_plate, 700)
    .addOutput(ether_sword, 1);

// exergis
// bp market 20k

const exergis_blueprint = new Item("Exergis Blueprint", "Blueprint obtained from the Market for 20,000 credits.");
const buy_exergis_blueprint = new Recipe("Buy Exergis Blueprint", "Buy a Exergis Blueprint from the Market for 20,000 credits.")
    .addInput(credits, 20000)
    .addOutput(exergis_blueprint, 1);
const exergis = new Item("Exergis", "Blueprint obtained from the Market for 20,000 credits.");
const craft_exergis = new Recipe("Craft Exergis", "Craft a Exergis from the blueprint.")
    .addInput(exergis_blueprint, 1)
    .addInput(credits, 20000)
    .addInput(argon_crystal, 2)
    .addInput(repeller_systems, 2)
    .addInput(oxium, 175)
    .addInput(salvage, 8500)
    .addOutput(exergis, 1);

// falcor
// bp energy lab 15k

const falcor_blueprint = new Item("Falcor Blueprint", "Blueprint obtained from the Energy Lab in a Clan Dojo for 15,000 credits.");
const buy_falcor_blueprint = new Recipe("Buy Falcor Blueprint", "Buy a Falcor Blueprint from the Energy Lab in a Clan Dojo for 15,000 credits.")
    .addInput(credits, 15000)
    .addOutput(falcor_blueprint, 1);
const falcor = new Item("Falcor", "Blueprint obtained from the Energy Lab in a Clan Dojo for 15,000 credits.");
const craft_falcor = new Recipe("Craft Falcor", "Craft a Falcor from the blueprint.")
    .addInput(falcor_blueprint, 1)
    .addInput(credits, 20000)
    .addInput(fieldron, 5)
    .addInput(alloy_plate, 8500)
    .addInput(circuits, 1650)
    .addInput(forma, 1)
    .addOutput(falcor, 1);

// fang
// bp market 20k

const fang_blueprint = new Item("Fang Blueprint", "Blueprint obtained from the Market for 20,000 credits.");
const buy_fang_blueprint = new Recipe("Buy Fang Blueprint", "Buy a Fang Blueprint from the Market for 20,000 credits.")
    .addInput(credits, 20000)
    .addOutput(fang_blueprint, 1);
const fang = new Item("Fang", "Blueprint obtained from the Market for 20,000 credits.");
const craft_fang = new Recipe("Craft Fang", "Craft a Fang from the blueprint.")
    .addInput(fang_blueprint, 1)
    .addInput(credits, 20000)
    .addInput(polymer_bundle, 600)
    .addInput(ferrite, 600)
    .addInput(nano_spores, 900)
    .addInput(morphics, 1)
    .addOutput(fang, 1);

// felarx
// bp cavalero 8k standing rank 3

const felarx_blueprint = new Item("Felarx Blueprint", "Blueprint obtained from Cavalero for 8,000 Holdfast Standing at Rank 3.");
const buy_felarx_blueprint = new Recipe("Buy Felarx Blueprint", "Buy a Felarx Blueprint from Cavalero for 8,000 Holdfast Standing at Rank 3.")
    .addInput(holdfasts, 8000)
    .addOutput(felarx_blueprint, 1);
const felarx = new Item("Felarx", "Blueprint obtained from Cavalero for 8,000 Holdfast Standing at Rank 3.");
const craft_felarx = new Recipe("Craft Felarx", "Craft a Felarx from the blueprint.")
    .addInput(felarx_blueprint, 1)
    .addInput(credits, 30000)
    .addInput(voidplume_quill, 15)
    .addInput(voidplume_pinion, 10)
    .addInput(voidgel_orb, 30)
    .addInput(alloy_plate, 8000)
    .addOutput(felarx, 1);

// ferrox
// bp energy lab 15k

const ferrox_blueprint = new Item("Ferrox Blueprint", "Blueprint obtained from the Energy Lab in a Clan Dojo for 15,000 credits.");
const buy_ferrox_blueprint = new Recipe("Buy Ferrox Blueprint", "Buy a Ferrox Blueprint from the Energy Lab in a Clan Dojo for 15,000 credits.")
    .addInput(credits, 15000)
    .addOutput(ferrox_blueprint, 1);
const ferrox = new Item("Ferrox", "Blueprint obtained from the Energy Lab in a Clan Dojo for 15,000 credits.");
const craft_ferrox = new Recipe("Craft Ferrox", "Craft a Ferrox from the blueprint.")
    .addInput(ferrox_blueprint, 1)
    .addInput(credits, 30000)
    .addInput(fieldron, 5)
    .addInput(alloy_plate, 30000)
    .addInput(salvage, 35000)
    .addInput(forma, 1)
    .addOutput(ferrox, 1);

// fluctus
// bp tenno lab 15k
// full parts syndicate 20k

const fluctus_blueprint = new Item("Fluctus Blueprint", "Blueprint obtained from the Tenno Lab in a Clan Dojo for 15,000 credits.");
const buy_fluctus_blueprint = new Recipe("Buy Fluctus Blueprint", "Buy a Fluctus Blueprint from the Tenno Lab in a Clan Dojo for 15,000 credits.")
    .addInput(credits, 15000)
    .addOutput(fluctus_blueprint, 1);
const fluctus_barrel = new Item("Fluctus Barrel", "Item obtained from Cephalon Suda for 20,000 Standing.");
const buy_fluctus_barrel = new Recipe("Buy Fluctus Barrel", "Buy a Fluctus Barrel from Cephalon Suda for 20,000 Standing.")
    .addInput(cephalon_suda, 20000)
    .addOutput(fluctus_barrel, 1);
const fluctus_stock = new Item("Fluctus Stock", "Item obtained from Steel Meridian for 20,000 Standing.");
const buy_fluctus_stock = new Recipe("Buy Fluctus Stock", "Buy a Fluctus Stock from Steel Meridian for 20,000 Standing.")
    .addInput(steel_meridian, 20000)
    .addOutput(fluctus_stock, 1);
const fluctus_limbs = new Item("Fluctus Limbs", "Item obtained from Red Veil for 20,000 Standing.");
const buy_fluctus_limbs = new Recipe("Buy Fluctus Limbs", "Buy Fluctus Limbs from Red Veil for 20,000 Standing.")
    .addInput(red_veil, 20000)
    .addOutput(fluctus_limbs, 1);
const fluctus = new Item("Fluctus", "Blueprint obtained from the Tenno Lab in a Clan Dojo for 15,000 credits.");
const craft_fluctus = new Recipe("Craft Fluctus", "Craft a Fluctus from the blueprint.")
    .addInput(fluctus_blueprint, 1)
    .addInput(fluctus_barrel, 1)
    .addInput(fluctus_stock, 1)
    .addInput(fluctus_limbs, 1)
    .addInput(credits, 45000)
    .addInput(argon_crystal, 2)
    .addOutput(fluctus, 1);

// flux rifle
// bp energy lab 15k

const flux_rifle_blueprint = new Item("Flux Rifle Blueprint", "Blueprint obtained from the Energy Lab in a Clan Dojo for 15,000 credits.");
const buy_flux_rifle_blueprint = new Recipe("Buy Flux Rifle Blueprint", "Buy a Flux Rifle Blueprint from the Energy Lab in a Clan Dojo for 15,000 credits.")
    .addInput(credits, 15000)
    .addOutput(flux_rifle_blueprint, 1);
const flux_rifle = new Item("Flux Rifle", "Blueprint obtained from the Energy Lab in a Clan Dojo for 15,000 credits.");
const craft_flux_rifle = new Recipe("Craft Flux Rifle", "Craft a Flux Rifle from the blueprint.")
    .addInput(flux_rifle_blueprint, 1)
    .addInput(credits, 25000)
    .addInput(fieldron, 5)
    .addInput(circuits, 900)
    .addInput(ferrite, 6000)
    .addInput(forma, 1)
    .addOutput(flux_rifle, 1);

// fragor
// bp market 15k

const fragor_blueprint = new Item("Fragor Blueprint", "Blueprint obtained from the Market for 15,000 credits.");
const buy_fragor_blueprint = new Recipe("Buy Fragor Blueprint", "Buy a Fragor Blueprint from the Market for 15,000 credits.")
    .addInput(credits, 15000)
    .addOutput(fragor_blueprint, 1);
const fragor = new Item("Fragor", "Blueprint obtained from the Market for 15,000 credits.");
const craft_fragor = new Recipe("Craft Fragor", "Craft a Fragor from the blueprint.")
    .addInput(fragor_blueprint, 1)
    .addInput(credits, 30000)
    .addInput(gallium, 3)
    .addInput(salvage, 750)
    .addInput(rubedo, 300)
    .addInput(alloy_plate, 80)
    .addOutput(fragor, 1);

// fulmin
// bp market 20k

const fulmin_blueprint = new Item("Fulmin Blueprint", "Blueprint obtained from the Market for 20,000 credits.");
const buy_fulmin_blueprint = new Recipe("Buy Fulmin Blueprint", "Buy a Fulmin Blueprint from the Market for 20,000 credits.")
    .addInput(credits, 20000)
    .addOutput(fulmin_blueprint, 1);
const fulmin = new Item("Fulmin", "Blueprint obtained from the Market for 20,000 credits.");
const craft_fulmin = new Recipe("Craft Fulmin", "Craft a Fulmin from the blueprint.")
    .addInput(fulmin_blueprint, 1)
    .addInput(credits, 25000)
    .addInput(rubedo, 2100)
    .addInput(nano_spores, 7500)
    .addInput(argon_crystal, 2)
    .addInput(hexenon, 350)
    .addOutput(fulmin, 1);

// furax
// bp market 15k

const furax_blueprint = new Item("Furax Blueprint", "Blueprint obtained from the Market for 15,000 credits.");
const buy_furax_blueprint = new Recipe("Buy Furax Blueprint", "Buy a Furax Blueprint from the Market for 15,000 credits.")
    .addInput(credits, 15000)
    .addOutput(furax_blueprint, 1);
const furax = new Item("Furax", "Blueprint obtained from the Market for 15,000 credits.");
const craft_furax = new Recipe("Craft Furax", "Craft a Furax from the blueprint.")
    .addInput(furax_blueprint, 1)
    .addInput(credits, 30000)
    .addInput(nano_spores, 1000)
    .addInput(salvage, 900)
    .addInput(ferrite, 600)
    .addInput(alloy_plate, 500)
    .addOutput(furax, 1);

// furax wraith
// bp and parts cetus bounties

const furax_wraith_blueprint = new Item("Furax Wraith Blueprint", "Blueprint obtained from Cetus Bounties.");
const furax_wraith_left_gauntlet = new Item("Furax Wraith Left Gauntlet", "Blueprint obtained from Cetus Bounties.");
const furax_wraith_right_gauntlet = new Item("Furax Wraith Right Gauntlet", "Blueprint obtained from Cetus Bounties.");
const furax_wraith = new Item("Furax Wraith", "Blueprint obtained from Cetus Bounties.");
const craft_furax_wraith = new Recipe("Craft Furax Wraith", "Craft a Furax Wraith from the blueprint.")
    .addInput(furax_wraith_blueprint, 1)
    .addInput(furax_wraith_left_gauntlet, 1)
    .addInput(furax_wraith_right_gauntlet, 1)
    .addInput(credits, 25000)
    .addOutput(furax_wraith, 1);

// fusilai
// bp market 20k

const fusilai_blueprint = new Item("Fusilai Blueprint", "Blueprint obtained from the Market for 20,000 credits.");
const buy_fusilai_blueprint = new Recipe("Buy Fusilai Blueprint", "Buy a Fusilai Blueprint from the Market for 20,000 credits.")
    .addInput(credits, 20000)
    .addOutput(fusilai_blueprint, 1);
const fusilai = new Item("Fusilai", "Blueprint obtained from the Market for 20,000 credits.");
const craft_fusilai = new Recipe("Craft Fusilai", "Craft a Fusilai from the blueprint.")
    .addInput(fusilai_blueprint, 1)
    .addInput(credits, 20000)
    .addInput(rubedo, 2950)
    .addInput(salvage, 10000)
    .addInput(polymer_bundle, 1350)
    .addInput(nitain, 2)
    .addOutput(fusilai, 1);

// galatine
// bp market 25k

const galatine_blueprint = new Item("Galatine Blueprint", "Blueprint obtained from the Market for 25,000 credits.");
const buy_galatine_blueprint = new Recipe("Buy Galatine Blueprint", "Buy a Galatine Blueprint from the Market for 25,000 credits.")
    .addInput(credits, 25000)
    .addOutput(galatine_blueprint, 1);
const galatine = new Item("Galatine", "Blueprint obtained from the Market for 25,000 credits.");
const craft_galatine = new Recipe("Craft Galatine", "Craft a Galatine from the blueprint.")
    .addInput(galatine_blueprint, 1)
    .addInput(credits, 30000)
    .addInput(gallium, 4)
    .addInput(salvage, 750)
    .addInput(rubedo, 500)
    .addInput(alloy_plate, 200)
    .addOutput(galatine, 1);

// galvacord
// bp market 20k

const galvacord_blueprint = new Item("Galvacord Blueprint", "Blueprint obtained from the Market for 20,000 credits.");
const buy_galvacord_blueprint = new Recipe("Buy Galvacord Blueprint", "Buy a Galvacord Blueprint from the Market for 20,000 credits.")
    .addInput(credits, 20000)
    .addOutput(galvacord_blueprint, 1);
const galvacord = new Item("Galvacord", "Blueprint obtained from the Market for 20,000 credits.");
const craft_galvacord = new Recipe("Craft Galvacord", "Craft a Galvacord from the blueprint.")
    .addInput(galvacord_blueprint, 1)
    .addInput(credits, 20000)
    .addInput(argon_crystal, 2)
    .addInput(atmo_systems, 5)
    .addInput(ferrite, 3600)
    .addInput(circuits, 1000)
    .addOutput(galvacord, 1);

// gammacor
// bp market 35k

const gammacor_blueprint = new Item("Gammacor Blueprint", "Blueprint obtained from the Market for 35,000 credits.");
const buy_gammacor_blueprint = new Recipe("Buy Gammacor Blueprint", "Buy a Gammacor Blueprint from the Market for 35,000 credits.")
    .addInput(credits, 35000)
    .addOutput(gammacor_blueprint, 1);
const gammacor = new Item("Gammacor", "Blueprint obtained from the Market for 35,000 credits.");
const craft_gammacor = new Recipe("Craft Gammacor", "Craft a Gammacor from the blueprint.")
    .addInput(gammacor_blueprint, 1)
    .addInput(credits, 20000)
    .addInput(alloy_plate, 2500)
    .addInput(plastids, 650)
    .addInput(circuits, 400)
    .addInput(argon_crystal, 2)
    .addOutput(gammacor, 1);

// gazal machete
// bp tenno lab 15k

const gazal_machete_blueprint = new Item("Gazal Machete Blueprint", "Blueprint obtained from the Tenno Lab in the Dojo for 15,000 credits.");
const buy_gazal_machete_blueprint = new Recipe("Buy Gazal Machete Blueprint", "Buy a Gazal Machete Blueprint from the Tenno Lab in the Dojo for 15,000 credits.")
    .addInput(credits, 15000)
    .addOutput(gazal_machete_blueprint, 1);
const gazal_machete = new Item("Gazal Machete", "Blueprint obtained from the Tenno Lab in the Dojo for 15,000 credits.");
const craft_gazal_machete = new Recipe("Craft Gazal Machete", "Craft a Gazal Machete from the blueprint.")
    .addInput(gazal_machete_blueprint, 1)
    .addInput(credits, 20000)
    .addInput(argon_crystal, 2)
    .addInput(salvage, 2600)
    .addInput(alloy_plate, 1900)
    .addInput(plastids, 1400)
    .addOutput(gazal_machete, 1);

// ghoulsaw

const ghoulsaw = new Item("Ghoulsaw", "good luck lol");

// glaive
// bp nora cred 50

const glaive_blueprint = new Item("Glaive Blueprint", "Blueprint obtained from Nightwave Cred Offerings for 50 Nora Creds.");
const buy_glaive_blueprint = new Recipe("Buy Glaive Blueprint", "Buy a Glaive Blueprint from Nightwave Cred Offerings for 50 Nora Creds.")
    .addInput(nora_cred, 50)
    .addOutput(glaive_blueprint, 1);
const glaive = new Item("Glaive", "Blueprint obtained from Nightwave Cred Offerings for 50 Nora Creds.");
const craft_glaive = new Recipe("Craft Glaive", "Craft a Glaive from the blueprint.")
    .addInput(glaive_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(morphics, 10)
    .addInput(ferrite, 5000)
    .addInput(nano_spores, 6000)
    .addInput(salvage, 4500)
    .addOutput(glaive, 1);

// glaxion
// bp energy lab 15k

const glaxion_blueprint = new Item("Glaxion Blueprint", "Blueprint obtained from the Energy Lab in the Dojo for 15,000 credits.");
const buy_glaxion_blueprint = new Recipe("Buy Glaxion Blueprint", "Buy a Glaxion Blueprint from the Energy Lab in the Dojo for 15,000 credits.")
    .addInput(credits, 15000)
    .addOutput(glaxion_blueprint, 1);
const glaxion = new Item("Glaxion", "Blueprint obtained from the Energy Lab in the Dojo for 15,000 credits.");
const craft_glaxion = new Recipe("Craft Glaxion", "Craft a Glaxion from the blueprint.")
    .addInput(glaxion_blueprint, 1)
    .addInput(credits, 20000)
    .addInput(fieldron, 1)
    .addInput(circuits, 550)
    .addInput(cryotic, 2500)
    .addInput(forma, 1)
    .addOutput(glaxion, 1);

// glaxion vandal
// full weapon baro 475 ducats 250k creds

const glaxion_vandal = new Item("Glaxion Vandal", "Weapon obtained from Baro Ki'Teer for 475 Ducats and 250,000 credits.");
const buy_glaxion_vandal = new Recipe("Buy Glaxion Vandal", "Buy a Glaxion Vandal from Baro Ki'Teer for 475 Ducats and 250,000 credits.")
    .addInput(ducats, 475)
    .addInput(credits, 250000)
    .addOutput(glaxion_vandal, 1);

// gorgon
// bp from certain grineer enemies

const gorgon_blueprint = new Item("Gorgon Blueprint", "Blueprint obtained from certain Grineer enemies.");
const gorgon = new Item("Gorgon", "Blueprint obtained from certain Grineer enemies.");
const craft_gorgon = new Recipe("Craft Gorgon", "Craft a Gorgon from the blueprint.")
    .addInput(gorgon_blueprint, 1)
    .addInput(credits, 25000)
    .addInput(morphics, 5)
    .addInput(ferrite, 5000)
    .addInput(salvage, 6000)
    .addInput(circuits, 1000)
    .addOutput(gorgon, 1);

// gorgon wraith
// bp and full parts from Razorback Armada

const gorgon_wraith_blueprint = new Item("Gorgon Wraith Blueprint", "Blueprint obtained from Razorback Armada.");
const gorgon_wraith_barrel = new Item("Gorgon Wraith Barrel", "Item obtained from Razorback Armada.");
const gorgon_wraith_receiver = new Item("Gorgon Wraith Receiver", "Item obtained from Razorback Armada.");
const gorgon_wraith_stock = new Item("Gorgon Wraith Stock", "Item obtained from Razorback Armada.");
const gorgon_wraith = new Item("Gorgon Wraith", "Blueprint obtained from Razorback Armada.");
const craft_gorgon_wraith = new Recipe("Craft Gorgon Wraith", "Craft a Gorgon Wraith from the blueprint.")
    .addInput(gorgon_wraith_blueprint, 1)
    .addInput(gorgon_wraith_barrel, 1)
    .addInput(gorgon_wraith_receiver, 1)
    .addInput(gorgon_wraith_stock, 1)
    .addInput(credits, 25000)
    .addOutput(gorgon_wraith, 1);

// grakata
// bp market 15k

const grakata_blueprint = new Item("Grakata Blueprint", "Blueprint obtained from the Market for 15,000 credits.");
const buy_grakata_blueprint = new Recipe("Buy Grakata Blueprint", "Buy a Grakata Blueprint from the Market for 15,000 credits.")
    .addInput(credits, 15000)
    .addOutput(grakata_blueprint, 1);
const grakata = new Item("Grakata", "Blueprint obtained from the Market for 15,000 credits.");
const craft_grakata = new Recipe("Craft Grakata", "Craft a Grakata from the blueprint.")
    .addInput(grakata_blueprint, 1)
    .addInput(credits, 25000)
    .addInput(neurodes, 2)
    .addInput(alloy_plate, 400)
    .addInput(salvage, 900)
    .addInput(polymer_bundle, 100)
    .addOutput(grakata, 1);

// gram
// bp market 15k

const gram_blueprint = new Item("Gram Blueprint", "Blueprint obtained from the Market for 15,000 credits.");
const buy_gram_blueprint = new Recipe("Buy Gram Blueprint", "Buy a Gram Blueprint from the Market for 15,000 credits.")
    .addInput(credits, 15000)
    .addOutput(gram_blueprint, 1);
const gram = new Item("Gram", "Blueprint obtained from the Market for 15,000 credits.");
const craft_gram = new Recipe("Craft Gram", "Craft a Gram from the blueprint.")
    .addInput(gram_blueprint, 1)
    .addInput(credits, 30000)
    .addInput(gallium, 3)
    .addInput(salvage, 750)
    .addInput(rubedo, 300)
    .addInput(alloy_plate, 80)
    .addOutput(gram, 1);

// grattler
// bp chem lab 15k

const grattler_blueprint = new Item("Grattler Blueprint", "Blueprint obtained from the Chem Lab in the Dojo for 15,000 credits.");
const buy_grattler_blueprint = new Recipe("Buy Grattler Blueprint", "Buy a Grattler Blueprint from the Chem Lab in the Dojo for 15,000 credits.")
    .addInput(credits, 15000)
    .addOutput(grattler_blueprint, 1);
const grattler = new Item("Grattler", "Blueprint obtained from the Chem Lab in the Dojo for 15,000 credits.");
const craft_grattler = new Recipe("Craft Grattler", "Craft a Grattler from the blueprint.")
    .addInput(grattler_blueprint, 1)
    .addInput(credits, 65000)
    .addInput(tellurium, 5)
    .addInput(salvage, 6000)
    .addInput(oxium, 3500)
    .addInput(forma, 1)
    .addOutput(grattler, 1);

// grinlok
// bp chem lab 15k

const grinlok_blueprint = new Item("Grinlok Blueprint", "Blueprint obtained from the Chem Lab in the Dojo for 15,000 credits.");
const buy_grinlok_blueprint = new Recipe("Buy Grinlok Blueprint", "Buy a Grinlok Blueprint from the Chem Lab in the Dojo for 15,000 credits.")
    .addInput(credits, 15000)
    .addOutput(grinlok_blueprint, 1);
const grinlok = new Item("Grinlok", "Blueprint obtained from the Chem Lab in the Dojo for 15,000 credits.");
const craft_grinlok = new Recipe("Craft Grinlok", "Craft a Grinlok from the blueprint.")
    .addInput(grinlok_blueprint, 1)
    .addInput(credits, 30000)
    .addInput(detonite_injector, 2)
    .addInput(polymer_bundle, 5000)
    .addInput(ferrite, 5000)
    .addInput(forma, 1)
    .addOutput(grinlok, 1);

// guandao
// bp tenno lab 15k

const guandao_blueprint = new Item("Guandao Blueprint", "Blueprint obtained from the Tenno Lab in the Dojo for 15,000 credits.");
const buy_guandao_blueprint = new Recipe("Buy Guandao Blueprint", "Buy a Guandao Blueprint from the Tenno Lab in the Dojo for 15,000 credits.")
    .addInput(credits, 15000)
    .addOutput(guandao_blueprint, 1);
const guandao = new Item("Guandao", "Blueprint obtained from the Tenno Lab in the Dojo for 15,000 credits.");
const craft_guandao = new Recipe("Craft Guandao", "Craft a Guandao from the blueprint.")
    .addInput(guandao_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(gallium, 3)
    .addInput(oxium, 65)
    .addInput(polymer_bundle, 750)
    .addInput(ferrite, 2500)
    .addOutput(guandao, 1);

// gunsen
// bp tenno lab 15k

const gunsen_blueprint = new Item("Gunsen Blueprint", "Blueprint obtained from the Tenno Lab in the Dojo for 15,000 credits.");
const buy_gunsen_blueprint = new Recipe("Buy Gunsen Blueprint", "Buy a Gunsen Blueprint from the Tenno Lab in the Dojo for 15,000 credits.")
    .addInput(credits, 15000)
    .addOutput(gunsen_blueprint, 1);
const gunsen = new Item("Gunsen", "Blueprint obtained from the Tenno Lab in the Dojo for 15,000 credits.");
const craft_gunsen = new Recipe("Craft Gunsen", "Craft a Gunsen from the blueprint.")
    .addInput(gunsen_blueprint, 1)
    .addInput(credits, 20000)
    .addInput(oxium, 200)
    .addInput(tellurium, 3)
    .addInput(plastids, 1150)
    .addInput(nano_spores, 19750)
    .addOutput(gunsen, 1);

// halikar
// bp market 20k

const halikar_blueprint = new Item("Halikar Blueprint", "Blueprint obtained from the Market for 20,000 credits.");
const buy_halikar_blueprint = new Recipe("Buy Halikar Blueprint", "Buy a Halikar Blueprint from the Market for 20,000 credits.")
    .addInput(credits, 20000)
    .addOutput(halikar_blueprint, 1);
const halikar = new Item("Halikar", "Blueprint obtained from the Market for 20,000 credits.");
const craft_halikar = new Recipe("Craft Halikar", "Craft a Halikar from the blueprint.")
    .addInput(halikar_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(argon_crystal, 2)
    .addInput(ferrite, 4800)
    .addInput(nano_spores, 5000)
    .addInput(oxium, 500)
    .addOutput(halikar, 1);

// halikar wraith
// bp baro 450 ducats 350k

const halikar_wraith = new Item("Halikar Wraith", "Weapon obtained from Baro Ki'Teer for 450 Ducats and 350,000 credits.");
const buy_halikar_wraith_blueprint = new Recipe("Buy Halikar Wraith", "Buy a Halikar Wraith from Baro Ki'Teer for 450 Ducats and 350,000 credits.")
    .addInput(ducats, 450)
    .addInput(credits, 350000)
    .addOutput(halikar_wraith, 1);

// harpak
// bp market 40k

const harpak_blueprint = new Item("Harpak Blueprint", "Blueprint obtained from the Market for 40,000 credits.");
const buy_harpak_blueprint = new Recipe("Buy Harpak Blueprint", "Buy a Harpak Blueprint from the Market for 40,000 credits.")
    .addInput(credits, 40000)
    .addOutput(harpak_blueprint, 1);
const harpak = new Item("Harpak", "Blueprint obtained from the Market for 40,000 credits.");
const craft_harpak = new Recipe("Craft Harpak", "Craft a Harpak from the blueprint.")
    .addInput(harpak_blueprint, 1)
    .addInput(credits, 30000)
    .addInput(argon_crystal, 2)
    .addInput(gallium, 5)
    .addInput(nano_spores, 6000)
    .addInput(rubedo, 3600)
    .addOutput(harpak, 1);

// hate
// bp stalker

const hate_blueprint = new Item("Hate Blueprint", "Blueprint obtained from Shadow Stalker");
const hate = new Item("Hate", "Blueprint obtained from Shadow Stalker");
const craft_hate = new Recipe("Craft Hate", "Craft a Hate from the blueprint.")
    .addInput(hate_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(morphics, 10)
    .addInput(ferrite, 5000)
    .addInput(nano_spores, 6000)
    .addInput(salvage, 4500)
    .addOutput(hate, 1);

// heat dagger
// bp nightwave 50 nora cred

const heat_dagger_blueprint = new Item("Heat Dagger Blueprint", "Blueprint obtained from Nightwave Offerings for 50 Nora Creds.");
const buy_heat_dagger_blueprint = new Recipe("Buy Heat Dagger Blueprint", "Buy a Heat Dagger Blueprint from Nightwave Offerings for 50 Nora Creds.")
    .addInput(nora_cred, 50)
    .addOutput(heat_dagger_blueprint, 1);
const heat_dagger = new Item("Heat Dagger", "Blueprint obtained from Nightwave Offerings for 50 Nora Creds.");
const craft_heat_dagger = new Recipe("Craft Heat Dagger", "Craft a Heat Dagger from the blueprint.")
    .addInput(heat_dagger_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(ferrite, 500)
    .addInput(circuits, 150)
    .addInput(polymer_bundle, 75)
    .addInput(neural_sensor, 1)
    .addOutput(heat_dagger, 1);

// heat sword
// bp once awake quest

const heat_sword_blueprint = new Item("Heat Sword Blueprint", "Blueprint obtained from the Once Awake quest.");
const heat_sword = new Item("Heat Sword", "Blueprint obtained from the Once Awake quest.");
const craft_heat_sword = new Recipe("Craft Heat Sword", "Craft a Heat Sword from the blueprint.")
    .addInput(heat_sword_blueprint, 1)
    .addInput(credits, 20000)
    .addInput(neurodes, 1)
    .addInput(ferrite, 500)
    .addInput(circuits, 300)
    .addInput(polymer_bundle, 300)
    .addOutput(heat_sword, 1);

// hek
// bp market 25k

const hek_blueprint = new Item("Hek Blueprint", "Blueprint obtained from the Market for 25,000 credits.");
const buy_hek_blueprint = new Recipe("Buy Hek Blueprint", "Buy a Hek Blueprint from the Market for 25,000 credits.")
    .addInput(credits, 25000)
    .addOutput(hek_blueprint, 1);
const hek = new Item("Hek", "Blueprint obtained from the Market for 25,000 credits.");
const craft_hek = new Recipe("Craft Hek", "Craft a Hek from the blueprint.")
    .addInput(hek_blueprint, 1)
    .addInput(credits, 25000)
    .addInput(neurodes, 5)
    .addInput(circuits, 900)
    .addInput(salvage, 1200)
    .addInput(rubedo, 1000)
    .addOutput(hek, 1);

// heliocor
// bp simaris 75k

const heliocor_blueprint = new Item("Heliocor Blueprint", "Blueprint obtained from Cephalon Simaris for 75,000 standing.");
const buy_heliocor_blueprint = new Recipe("Buy Heliocor Blueprint", "Buy a Heliocor Blueprint from Cephalon Simaris for 75,000 standing.")
    .addInput(cephalon_simaris, 75000)
    .addOutput(heliocor_blueprint, 1);
const heliocor = new Item("Heliocor", "Blueprint obtained from Cephalon Simaris for 75,000 standing.");
const craft_heliocor = new Recipe("Craft Heliocor", "Craft a Heliocor from the blueprint.")
    .addInput(heliocor_blueprint, 1)
    .addInput(credits, 20000)
    .addInput(gammacor, 1)
    .addInput(plastids, 700)
    .addInput(rubedo, 1200)
    .addInput(morphics, 1)
    .addOutput(heliocor, 1);

// hema
// bp dojo bio lab 15k

const hema_blueprint = new Item("Hema Blueprint", "Blueprint obtained from the Bio Lab in a Clan Dojo for 15,000 credits.");
const buy_hema_blueprint = new Recipe("Buy Hema Blueprint", "Buy a Hema Blueprint from the Bio Lab in a Clan Dojo for 15,000 credits.")
    .addInput(credits, 15000)
    .addOutput(hema_blueprint, 1);
const hema = new Item("Hema", "Blueprint obtained from the Bio Lab in a Clan Dojo for 15,000 credits.");
const craft_hema = new Recipe("Craft Hema", "Craft a Hema from the blueprint.")
    .addInput(hema_blueprint, 1)
    .addInput(credits, 30000)
    .addInput(mutagen_mass, 5)
    .addInput(salvage, 50000)
    .addInput(circuits, 5000)
    .addInput(forma, 1)
    .addOutput(hema, 1);

// hespar
// bp tier 4 chrysalith bounty
// blade bp void armageddon c rotation
// handle bp void cascade c rotation

const hespar_blade_blueprint = new Item("Hespar Blade Blueprint", "Blueprint obtained from void armageddon C rotation.");
const hespar_blade = new Item("Hespar Blade", "Blueprint obtained from void armageddon C rotation.");
const craft_hespar_blade = new Recipe("Craft Hespar Blade", "Craft a Hespar Blade from the blueprint.")
    .addInput(hespar_blade_blueprint, 1)
    .addInput(credits, 30000)
    .addInput(thrax_plasm, 60)
    .addInput(voidplume_quill, 10)
    .addInput(ferrite, 5500)
    .addInput(voidgel_orb, 15)
    .addOutput(hespar_blade, 1);
const hespar_handle_blueprint = new Item("Hespar Handle Blueprint", "Blueprint obtained from void cascade C rotation.");
const hespar_handle = new Item("Hespar Handle", "Blueprint obtained from void cascade C rotation.");
const craft_hespar_handle = new Recipe("Craft Hespar Handle", "Craft a Hespar Handle from the blueprint.")
    .addInput(hespar_handle_blueprint, 1)
    .addInput(credits, 30000)
    .addInput(thrax_plasm, 40)
    .addInput(voidplume_quill, 10)
    .addInput(alloy_plate, 4200)
    .addInput(entrati_lanthorn, 5)
    .addOutput(hespar_handle, 1);
const hespar_blueprint = new Item("Hespar Blueprint", "Blueprint obtained from tier 4 chrysalith bounty.");
const hespar = new Item("Hespar", "Blueprint obtained from tier 4 chrysalith bounty.");
const craft_hespar = new Recipe("Craft Hespar", "Craft a Hespar from the blueprint.")
    .addInput(hespar_blueprint, 1)
    .addInput(hespar_blade, 1)
    .addInput(hespar_handle, 1)
    .addInput(thrax_plasm, 50)
    .addInput(credits, 15000)
    .addOutput(hespar, 1);

// hikou
// bp market 15k

const hikou_blueprint = new Item("Hikou Blueprint", "Blueprint obtained from the Market for 15,000 credits.");
const buy_hikou_blueprint = new Recipe("Buy Hikou Blueprint", "Buy a Hikou Blueprint from the Market for 15,000 credits.")
    .addInput(credits, 15000)
    .addOutput(hikou_blueprint, 1);
const hikou = new Item("Hikou", "Blueprint obtained from the Market for 15,000 credits.");
const craft_hikou = new Recipe("Craft Hikou", "Craft a Hikou from the blueprint.")
    .addInput(hikou_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(morphics, 5)
    .addInput(plastids, 500)
    .addInput(rubedo, 600)
    .addInput(salvage, 4000)
    .addOutput(hikou, 1);

// hind
// bp market 40k

const hind_blueprint = new Item("Hind Blueprint", "Blueprint obtained from the Market for 40,000 credits.");
const buy_hind_blueprint = new Recipe("Buy Hind Blueprint", "Buy a Hind Blueprint from the Market for 40,000 credits.")
    .addInput(credits, 40000)
    .addOutput(hind_blueprint, 1);
const hind = new Item("Hind", "Blueprint obtained from the Market for 40,000 credits.");
const craft_hind = new Recipe("Craft Hind", "Craft a Hind from the blueprint.")
    .addInput(hind_blueprint, 1)
    .addInput(credits, 25000)
    .addInput(neurodes, 6)
    .addInput(circuits, 700)
    .addInput(salvage, 1000)
    .addInput(rubedo, 1200)
    .addOutput(hind, 1);

// kogake
// bp market 15k

const kogake_blueprint = new Item("Kogake Blueprint", "Blueprint obtained from the Market for 15,000 credits.");
const buy_kogake_blueprint = new Recipe("Buy Kogake Blueprint", "Buy a Kogake Blueprint from the Market for 15,000 credits.")
    .addInput(credits, 15000)
    .addOutput(kogake_blueprint, 1);
const kogake = new Item("Kogake", "Blueprint obtained from the Market for 15,000 credits.");
const craft_kogake = new Recipe("Craft Kogake", "Craft a Kogake from the blueprint.")
    .addInput(kogake_blueprint, 1)
    .addInput(credits, 30000)
    .addInput(rubedo, 400)
    .addInput(morphics, 3)
    .addInput(ferrite, 1200)
    .addInput(alloy_plate, 500)
    .addOutput(kogake, 1);

// hirudo
// bp market 15k

const hirudo_blueprint = new Item("Hirudo Blueprint", "Blueprint obtained from the Market for 15,000 credits.");
const buy_hirudo_blueprint = new Recipe("Buy Hirudo Blueprint", "Buy a Hirudo Blueprint from the Market for 15,000 credits.")
    .addInput(credits, 15000)
    .addOutput(hirudo_blueprint, 1);
const hirudo = new Item("Hirudo", "Blueprint obtained from the Market for 15,000 credits.");
const craft_hirudo = new Recipe("Craft Hirudo", "Craft a Hirudo from the blueprint.")
    .addInput(hirudo_blueprint, 1)
    .addInput(credits, 30000)
    .addInput(kogake, 1)
    .addInput(nitain, 3)
    .addInput(plastids, 1100)
    .addInput(nano_spores, 4600)
    .addOutput(hirudo, 1);

// viper
// bp market 20k

const viper_blueprint = new Item("Viper Blueprint", "Blueprint obtained from the Market for 20,000 credits.");
const buy_viper_blueprint = new Recipe("Buy Viper Blueprint", "Buy a Viper Blueprint from the Market for 20,000 credits.")
    .addInput(credits, 20000)
    .addOutput(viper_blueprint, 1);
const viper = new Item("Viper", "Blueprint obtained from the Market for 20,000 credits.");
const craft_viper = new Recipe("Craft Viper", "Craft a Viper from the blueprint.")
    .addInput(viper_blueprint, 1)
    .addInput(credits, 20000)
    .addInput(salvage, 300)
    .addInput(ferrite, 600)
    .addInput(nano_spores, 900)
    .addInput(morphics, 1)
    .addOutput(viper, 1);

// hystrix
// bp market 25k

const hystrix_blueprint = new Item("Hystrix Blueprint", "Blueprint obtained from the Market for 25,000 credits.");
const buy_hystrix_blueprint = new Recipe("Buy Hystrix Blueprint", "Buy a Hystrix Blueprint from the Market for 25,000 credits.")
    .addInput(credits, 25000)
    .addOutput(hystrix_blueprint, 1);
const hystrix = new Item("Hystrix", "Blueprint obtained from the Market for 25,000 credits.");
const craft_hystrix = new Recipe("Craft Hystrix", "Craft a Hystrix from the blueprint.")
    .addInput(hystrix_blueprint, 1)
    .addInput(credits, 20000)
    .addInput(bolto, 1)
    .addInput(viper, 1)
    .addInput(ferrite, 9750)
    .addInput(control_module, 15)
    .addOutput(hystrix, 1);

// ignis
// bp chem lab 15k

const ignis_blueprint = new Item("Ignis Blueprint", "Blueprint obtained from the Chem Lab in the Dojo for 15,000 credits.");
const buy_ignis_blueprint = new Recipe("Buy Ignis Blueprint", "Buy a Ignis Blueprint from the Chem Lab in the Dojo for 15,000 credits.")
    .addInput(credits, 15000)
    .addOutput(ignis_blueprint, 1);
const ignis = new Item("Ignis", "Blueprint obtained from the Chem Lab in the Dojo for 15,000 credits.");
const craft_ignis = new Recipe("Craft Ignis", "Craft a Ignis from the blueprint.")
    .addInput(ignis_blueprint, 1)
    .addInput(credits, 30000)
    .addInput(detonite_injector, 2)
    .addInput(nano_spores, 5000)
    .addInput(ferrite, 5000)
    .addInput(forma, 1)
    .addOutput(ignis, 1);

// ignis wraith
// bp grineer veil proxima cache b

const ignis_wraith_blueprint = new Item("Ignis Wraith Blueprint", "Blueprint obtained from Grineer Veil Proxima Cache B.");
const ignis_wraith = new Item("Ignis Wraith", "Blueprint obtained from Grineer Veil Proxima Cache B, or weapon bought from Baro");
const craft_ignis_wraith = new Recipe("Craft Ignis Wraith", "Craft a Ignis Wraith from the blueprint.")
    .addInput(ignis_wraith_blueprint, 1)
    .addInput(credits, 30000)
    .addInput(detonite_injector, 5)
    .addInput(ferrite, 10000)
    .addInput(rubedo, 5000)
    .addInput(argon_crystal, 3)
    .addOutput(ignis_wraith, 1);
const buy_ignis_wraith = new Recipe("Buy Ignis Wraith", "Buy a Ignis Wraith from Baro for 550 ducats and 250,000 credits.")
    .addInput(ducats, 550)
    .addInput(credits, 250000)
    .addOutput(ignis_wraith, 1);

// imperator vandal
// bp and parts fomorian

const imperator_vandal_blueprint = new Item("Imperator Vandal Blueprint", "Blueprint obtained from Fomorian Sabotage missions.");
const imperator_vandal_barrel = new Item("Imperator Vandal Barrel", "Blueprint obtained from Fomorian Sabotage missions.");
const imperator_vandal_receiver = new Item("Imperator Vandal Receiver", "Blueprint obtained from Fomorian Sabotage missions.");
const imperator_vandal = new Item("Imperator Vandal", "Blueprint obtained from Fomorian Sabotage missions.");
const craft_imperator_vandal = new Recipe("Craft Imperator Vandal", "Craft a Imperator Vandal from the blueprint.")
    .addInput(imperator_vandal_blueprint, 1)
    .addInput(imperator_vandal_barrel, 1)
    .addInput(imperator_vandal_receiver, 1)
    .addInput(credits, 25000)
    .addInput(tellurium, 10)
    .addOutput(imperator_vandal, 1);

// innodem
// bp cavalero 5.5k rank 1

const innodem_blueprint = new Item("Innodem Blueprint", "Blueprint obtained from Cavalero (Rank 1) for 5,500 Holdfast Standing.");
const buy_innodem_blueprint = new Recipe("Buy Innodem Blueprint", "Buy a Innodem Blueprint from Cavalero (Rank 1) for 5,500 Holdfast Standing.")
    .addInput(holdfasts, 5500)
    .addOutput(innodem_blueprint, 1);
const innodem = new Item("Innodem", "Blueprint obtained from Cavalero (Rank 1) for 5,500 Holdfast Standing.");
const craft_innodem = new Recipe("Craft Innodem", "Craft a Innodem from the blueprint.")
    .addInput(innodem_blueprint, 1)
    .addInput(credits, 30000)
    .addInput(voidplume_pinion, 5)
    .addInput(voidplume_quill, 10)
    .addInput(entrati_lanthorn, 15)
    .addInput(thrax_plasm, 20)
    .addOutput(innodem, 1);

// jat kittag
// bp chem lab 15k

const jat_kittag_blueprint = new Item("Jat Kittag Blueprint", "Blueprint obtained from the Chem Lab in the Dojo for 15,000 credits.");
const buy_jat_kittag_blueprint = new Recipe("Buy Jat Kittag Blueprint", "Buy a Jat Kittag Blueprint from the Chem Lab in the Dojo for 15,000 credits.")
    .addInput(credits, 15000)
    .addOutput(jat_kittag_blueprint, 1);
const jat_kittag = new Item("Jat Kittag", "Blueprint obtained from the Chem Lab in the Dojo for 15,000 credits.");
const craft_jat_kittag = new Recipe("Craft Jat Kittag", "Craft a Jat Kittag from the blueprint.")
    .addInput(jat_kittag_blueprint, 1)
    .addInput(credits, 30000)
    .addInput(detonite_injector, 5)
    .addInput(salvage, 5000)
    .addInput(rubedo, 600)
    .addInput(forma, 1)
    .addOutput(jat_kittag, 1);

// jat kusar
// bp chem lab 15k

const jat_kusar_blueprint = new Item("Jat Kusar Blueprint", "Blueprint obtained from the Chem Lab in the Dojo for 15,000 credits.");
const buy_jat_kusar_blueprint = new Recipe("Buy Jat Kusar Blueprint", "Buy a Jat Kusar Blueprint from the Chem Lab in the Dojo for 15,000 credits.")
    .addInput(credits, 15000)
    .addOutput(jat_kusar_blueprint, 1);
const jat_kusar = new Item("Jat Kusar", "Blueprint obtained from the Chem Lab in the Dojo for 15,000 credits.");
const craft_jat_kusar = new Recipe("Craft Jat Kusar", "Craft a Jat Kusar from the blueprint.")
    .addInput(jat_kusar_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(detonite_injector, 7)
    .addInput(salvage, 7500)
    .addInput(rubedo, 2000)
    .addInput(forma, 1)
    .addOutput(jat_kusar, 1);

// javlok
// bp chem lab 15k

const javlok_blueprint = new Item("Javlok Blueprint", "Blueprint obtained from the Chem Lab in the Dojo for 15,000 credits.");
const buy_javlok_blueprint = new Recipe("Buy Javlok Blueprint", "Buy a Javlok Blueprint from the Chem Lab in the Dojo for 15,000 credits.")
    .addInput(credits, 15000)
    .addOutput(javlok_blueprint, 1);
const javlok = new Item("Javlok", "Blueprint obtained from the Chem Lab in the Dojo for 15,000 credits.");
const craft_javlok = new Recipe("Craft Javlok", "Craft a Javlok from the blueprint.")
    .addInput(javlok_blueprint, 1)
    .addInput(credits, 30000)
    .addInput(detonite_injector, 5)
    .addInput(alloy_plate, 10000)
    .addInput(nitain, 5)
    .addInput(javlok_capacitor, 6)
    .addOutput(javlok, 1);

// jaw sword
// bp nightwave 50 cred

const jaw_sword_blueprint = new Item("Jaw Sword Blueprint", "Blueprint obtained from Nightwave for 50 Nora Creds.");
const buy_jaw_sword_blueprint = new Recipe("Buy Jaw Sword Blueprint", "Buy a Jaw Sword Blueprint from Nightwave for 50 Nora Creds.")
    .addInput(nora_cred, 50)
    .addOutput(jaw_sword_blueprint, 1);
const jaw_sword = new Item("Jaw Sword", "Blueprint obtained from Nightwave for 50 Nora Creds.");
const craft_jaw_sword = new Recipe("Craft Jaw Sword", "Craft a Jaw Sword from the blueprint.")
    .addInput(jaw_sword_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(ferrite, 500)
    .addInput(morphics, 1)
    .addInput(polymer_bundle, 75)
    .addInput(rubedo, 300)
    .addOutput(jaw_sword, 1);

// karak
// bp market 30k

const karak_blueprint = new Item("Karak Blueprint", "Blueprint obtained from the Market for 30,000 credits.");
const buy_karak_blueprint = new Recipe("Buy Karak Blueprint", "Buy a Karak Blueprint from the Market for 30,000 credits.")
    .addInput(credits, 30000)
    .addOutput(karak_blueprint, 1);
const karak = new Item("Karak", "Blueprint obtained from the Market for 30,000 credits.");
const craft_karak = new Recipe("Craft Karak", "Craft a Karak from the blueprint.")
    .addInput(karak_blueprint, 1)
    .addInput(credits, 30000)
    .addInput(neurodes, 2)
    .addInput(alloy_plate, 400)
    .addInput(salvage, 900)
    .addInput(polymer_bundle, 100)
    .addOutput(karak, 1);

// karak wraith
// bp and parts invasion

const karak_wraith_blueprint = new Item("Karak Wraith Blueprint", "Blueprint obtained from Invasions.");
const karak_wraith_barrel = new Item("Karak Wraith Barrel", "Item obtained from Invasions.");
const karak_wraith_receiver = new Item("Karak Wraith Receiver", "Item obtained from Invasions.");
const karak_wraith_stock = new Item("Karak Wraith Stock", "Item obtained from Invasions.");
const karak_wraith = new Item("Karak Wraith", "Blueprint obtained from Invasions.");
const craft_karak_wraith = new Recipe("Craft Karak Wraith", "Craft a Karak Wraith from the blueprint.")
    .addInput(karak_wraith_blueprint, 1)
    .addInput(karak_wraith_barrel, 1)
    .addInput(karak_wraith_receiver, 1)
    .addInput(karak_wraith_stock, 1)
    .addInput(credits, 25000)
    .addOutput(karak_wraith, 1);

// karyst
// bp market 20k

const karyst_blueprint = new Item("Karyst Blueprint", "Blueprint obtained from the Market for 20,000 credits.");
const buy_karyst_blueprint = new Recipe("Buy Karyst Blueprint", "Buy a Karyst Blueprint from the Market for 20,000 credits.")
    .addInput(credits, 20000)
    .addOutput(karyst_blueprint, 1);
const karyst = new Item("Karyst", "Blueprint obtained from the Market for 20,000 credits.");
const craft_karyst = new Recipe("Craft Karyst", "Craft a Karyst from the blueprint.")
    .addInput(karyst_blueprint, 1)
    .addInput(credits, 20000)
    .addInput(salvage, 1500)
    .addInput(polymer_bundle, 800)
    .addInput(oxium, 100)
    .addInput(argon_crystal, 1)
    .addOutput(karyst, 1);

// kaszas
// bp market 35k
// parts syndicate 20k

const kaszas_blueprint = new Item("Kaszas Blueprint", "Blueprint obtained from the Market for 35,000 credits.");
const buy_kaszas_blueprint = new Recipe("Buy Kaszas Blueprint", "Buy a Kaszas Blueprint from the Market for 35,000 credits.")
    .addInput(credits, 35000)
    .addOutput(kaszas_blueprint, 1);
const kaszas_blade = new Item("Kaszas Blade", "Item obtained from Red Veil for 20,000 Standing.");
const buy_kaszas_blade = new Recipe("Buy Kaszas Blade", "Buy a Kaszas Blade from Red Veil for 20,000 Standing.")
    .addInput(red_veil, 20000)
    .addOutput(kaszas_blade, 1);
const kaszas_handle = new Item("Kaszas Handle", "Item obtained from Steel Meridian for 20,000 Standing.");
const buy_kaszas_handle = new Recipe("Buy Kaszas Handle", "Buy a Kaszas Handle from Steel Meridian for 20,000 Standing.")
    .addInput(steel_meridian, 20000)    
    .addOutput(kaszas_handle, 1);
const kaszas = new Item("Kaszas", "Blueprint obtained from the Market for 35,000 credits.");
const craft_kaszas = new Recipe("Craft Kaszas", "Craft a Kaszas from the blueprint.")
    .addInput(kaszas_blueprint, 1)  
    .addInput(kaszas_blade, 2)
    .addInput(kaszas_handle, 2)
    .addInput(tellurium, 3)
    .addInput(credits, 25000)
    .addOutput(kaszas, 1);
    
// keratinos
// bp father 1000 standing
// parts bp father 500 standing

const keratinos_blueprint = new Item("Keratinos Blueprint", "Blueprint obtained from Father for 1000 Standing.");
const buy_keratinos_blueprint = new Recipe("Buy Keratinos Blueprint", "Buy a Keratinos Blueprint from Father for 1000 Standing.")
    .addInput(entrati, 1000)
    .addOutput(keratinos_blueprint, 1);
const keratinos_blade_blueprint = new Item("Keratinos Blade Blueprint", "Blueprint obtained from Father for 500 Standing.");
const buy_keratinos_blade_blueprint = new Recipe("Buy Keratinos Blade Blueprint", "Buy a Keratinos Blade Blueprint from Father for 500 Standing.")
    .addInput(entrati, 500)
    .addOutput(keratinos_blade_blueprint, 1);
const keratinos_blade = new Item("Keratinos Blade", "Blueprint obtained from Father for 500 Standing.");
const craft_keratinos_blade = new Recipe("Craft Keratinos Blade", "Craft a Keratinos Blade from the blueprint.")
    .addInput(keratinos_blade_blueprint, 1)
    .addInput(credits, 20000)
    .addInput(adramal_alloy, 40)
    .addInput(pustulite, 24)
    .addInput(purged_dagonic, 6)
    .addInput(gallium, 4)
    .addOutput(keratinos_blade, 1);
const keratinos_gauntlet_blueprint = new Item("Keratinos Gauntlet Blueprint", "Blueprint obtained from Father for 500 Standing.");
const buy_keratinos_gauntlet_blueprint = new Recipe("Buy Keratinos Gauntlet Blueprint", "Buy a Keratinos Gauntlet Blueprint from Father for 500 Standing.")
    .addInput(entrati, 500)
    .addOutput(keratinos_gauntlet_blueprint, 1);
const keratinos_gauntlet = new Item("Keratinos Gauntlet", "Blueprint obtained from Father for 500 Standing.");
const craft_keratinos_gauntlet = new Recipe("Craft Keratinos Gauntlet", "Craft a Keratinos Gauntlet from the blueprint.")
    .addInput(keratinos_gauntlet_blueprint, 1)
    .addInput(credits, 20000)
    .addInput(ferment_bladder, 20)
    .addInput(ganglion, 16)
    .addInput(waxen_sebum_deposit, 6)
    .addInput(neurodes, 4)
    .addOutput(keratinos_gauntlet, 1);
const keratinos = new Item("Keratinos", "Blueprint obtained from Father for 1000 Standing.");
const craft_keratinos = new Recipe("Craft Keratinos", "Craft a Keratinos from the blueprint.")
    .addInput(keratinos_blueprint, 1)
    .addInput(keratinos_blade, 2)
    .addInput(keratinos_gauntlet, 2)
    .addInput(credits, 20000)
    .addOutput(keratinos, 1);

// kesheg
// bp chem lab 15k

const kesheg_blueprint = new Item("Kesheg Blueprint", "Blueprint obtained from the Chem Lab in the Dojo for 15,000 credits.");
const buy_kesheg_blueprint = new Recipe("Buy Kesheg Blueprint", "Buy a Kesheg Blueprint from the Chem Lab in the Dojo for 15,000 credits.")
    .addInput(credits, 15000)
    .addOutput(kesheg_blueprint, 1);
const kesheg = new Item("Kesheg", "Blueprint obtained from the Chem Lab in the Dojo for 15,000 credits.");
const craft_kesheg = new Recipe("Craft Kesheg", "Craft a Kesheg from the blueprint.")
    .addInput(kesheg_blueprint, 1)
    .addInput(credits, 20000)
    .addInput(detonite_injector, 5)
    .addInput(kuva, 1400)
    .addInput(ferrite, 6000)
    .addInput(alloy_plate, 8000)
    .addOutput(kesheg, 1);

// kestrel
// bp market 20k

const kestrel_blueprint = new Item("Kestrel Blueprint", "Blueprint obtained from the Market for 20,000 credits.");
const buy_kestrel_blueprint = new Recipe("Buy Kestrel Blueprint", "Buy a Kestrel Blueprint from the Market for 20,000 credits.")
    .addInput(credits, 20000)
    .addOutput(kestrel_blueprint, 1);
const kestrel = new Item("Kestrel", "Blueprint obtained from the Market for 20,000 credits.");
const craft_kestrel = new Recipe("Craft Kestrel", "Craft a Kestrel from the blueprint.")
    .addInput(kestrel_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(morphics, 8)
    .addInput(ferrite, 4800)
    .addInput(nano_spores, 5000)
    .addInput(salvage, 4000)
    .addOutput(kestrel, 1);

// knell
// bp market 20000

const knell_blueprint = new Item("Knell Blueprint", "Blueprint obtained from the Market for 20,000 credits.");
const buy_knell_blueprint = new Recipe("Buy Knell Blueprint", "Buy a Knell Blueprint from the Market for 20,000 credits.")
    .addInput(credits, 20000)
    .addOutput(knell_blueprint, 1);
const knell = new Item("Knell", "Blueprint obtained from the Market for 20,000 credits.");
const craft_knell = new Recipe("Craft Knell", "Craft a Knell from the blueprint.")
    .addInput(knell_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(argon_crystal, 2)
    .addInput(rubedo, 5200)
    .addInput(cryotic, 3800)
    .addInput(salvage, 20000)
    .addOutput(knell, 1);

// knux
// bp chem lab 15k

const knux_blueprint = new Item("Knux Blueprint", "Blueprint obtained from the Chem Lab in the Dojo for 15,000 credits.");
const buy_knux_blueprint = new Recipe("Buy Knux Blueprint", "Buy a Knux Blueprint from the Chem Lab in the Dojo for 15,000 credits.")
    .addInput(credits, 15000)
    .addOutput(knux_blueprint, 1);
const knux = new Item("Knux", "Blueprint obtained from the Chem Lab in the Dojo for 15,000 credits.");
const craft_knux = new Recipe("Craft Knux", "Craft a Knux from the blueprint.")
    .addInput(knux_blueprint, 1)
    .addInput(credits, 30000)
    .addInput(detonite_injector, 5)
    .addInput(gallium, 10)
    .addInput(forma, 1)
    .addInput(furax, 1)
    .addOutput(knux, 1);

// kohm
// bp market 20k

const kohm_blueprint = new Item("Kohm Blueprint", "Blueprint obtained from the Market for 20,000 credits.");
const buy_kohm_blueprint = new Recipe("Buy Kohm Blueprint", "Buy a Kohm Blueprint from the Market for 20,000 credits.")
    .addInput(credits, 20000)
    .addOutput(kohm_blueprint, 1);
const kohm = new Item("Kohm", "Blueprint obtained from the Market for 20,000 credits.");
const craft_kohm = new Recipe("Craft Kohm", "Craft a Kohm from the blueprint.")
    .addInput(kohm_blueprint, 1)
    .addInput(credits, 20000)
    .addInput(salvage, 2500)
    .addInput(oxium, 500)
    .addInput(cryotic, 500)
    .addInput(argon_crystal, 2)
    .addOutput(kohm, 1);

// kohmak
// bp chem lab 15k

const kohmak_blueprint = new Item("Kohmak Blueprint", "Blueprint obtained from the Chem Lab in the Dojo for 15,000 credits.");
const buy_kohmak_blueprint = new Recipe("Buy Kohmak Blueprint", "Buy a Kohmak Blueprint from the Chem Lab in the Dojo for 15,000 credits.")
    .addInput(credits, 30000)
    .addOutput(kohmak_blueprint, 1);
const kohmak = new Item("Kohmak", "Blueprint obtained from the Chem Lab in the Dojo for 15,000 credits.");
const craft_kohmak = new Recipe("Craft Kohmak", "Craft a Kohmak from the blueprint.")
    .addInput(kohmak_blueprint, 1)
    .addInput(credits, 30000)
    .addInput(detonite_injector, 2)
    .addInput(ferrite, 5000)
    .addInput(plastids, 5000)
    .addInput(forma, 1)
    .addOutput(kohmak, 1);

// komorex
// bp energy lab 15k

const komorex_blueprint = new Item("Komorex Blueprint", "Blueprint obtained from the Energy Lab in the Dojo for 15,000 credits.");
const buy_komorex_blueprint = new Recipe("Buy Komorex Blueprint", "Buy a Komorex Blueprint from the Energy Lab in the Dojo for 15,000 credits.")
    .addInput(credits, 15000)
    .addOutput(komorex_blueprint, 1);
const komorex = new Item("Komorex", "Blueprint obtained from the Energy Lab in the Dojo for 15,000 credits.");
const craft_komorex = new Recipe("Craft Komorex", "Craft a Komorex from the blueprint.")
    .addInput(komorex_blueprint, 1)
    .addInput(credits, 20000)
    .addInput(fieldron, 5)
    .addInput(ferrite, 6200)
    .addInput(hexenon, 300)
    .addInput(forma, 1)
    .addOutput(komorex, 1);

// kompressa
// bp ventkids 25k
// parts bp ventkids 25k

const kompressa_blueprint = new Item("Kompressa Blueprint", "Blueprint obtained from the Ventkids for 25,000 standing.");
const buy_kompressa_blueprint = new Recipe("Buy Kompressa Blueprint", "Buy a Kompressa Blueprint from the Ventkids for 25,000 standing.")
    .addInput(ventkids, 25000)
    .addOutput(kompressa_blueprint, 1);
const kompressa_barrel_blueprint = new Item("Kompressa Barrel Blueprint", "Blueprint obtained from the Ventkids for 25,000 standing.");
const buy_kompressa_barrel_blueprint = new Recipe("Buy Kompressa Barrel Blueprint", "Buy a Kompressa Barrel Blueprint from the Ventkids for 25,000 standing.")
    .addInput(ventkids, 25000)
    .addOutput(kompressa_barrel_blueprint, 1);
const kompressa_barrel = new Item("Kompressa Barrel", "Blueprint obtained from the Ventkids for 25,000 standing.");
const craft_kompressa_barrel = new Recipe("Craft Kompressa Barrel", "Craft a Kompressa Barrel from the blueprint.")
    .addInput(kompressa_barrel_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(hespazym_alloy, 10)
    .addInput(goblite_tears, 10)
    .addInput(longwinder_lathe_coagulant, 20)
    .addInput(tepa_nodule, 35)
    .addOutput(kompressa_barrel, 1);
const kompressa_receiver_blueprint = new Item("Kompressa Receiver Blueprint", "Blueprint obtained from the Ventkids for 25,000 standing.");
const buy_kompressa_receiver_blueprint = new Recipe("Buy Kompressa Receiver Blueprint", "Buy a Kompressa Receiver Blueprint from the Ventkids for 25,000 standing.")
    .addInput(ventkids, 25000)
    .addOutput(kompressa_receiver_blueprint, 1);
const kompressa_receiver = new Item("Kompressa Receiver", "Blueprint obtained from the Ventkids for 25,000 standing.");
const craft_kompressa_receiver = new Recipe("Craft Kompressa Receiver", "Craft a Kompressa Receiver from the blueprint.")
    .addInput(kompressa_receiver_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(axidrol_alloy, 20)
    .addInput(star_amarast, 6)
    .addInput(tink_dissipator_coil, 10)
    .addInput(mytocardia_spore, 40)
    .addOutput(kompressa_receiver, 1);
const kompressa = new Item("Kompressa", "Blueprint obtained from the Ventkids for 25,000 standing.");
const craft_kompressa = new Recipe("Craft Kompressa", "Craft a Kompressa from the blueprint.")
    .addInput(kompressa_blueprint, 1)
    .addInput(kompressa_barrel, 1)
    .addInput(kompressa_receiver, 1)
    .addInput(credits, 25000)
    .addInput(orokin_cell, 3)
    .addOutput(kompressa, 1);

// korrudo
// bp tusk thumper

const korrudo_blueprint = new Item("Korrudo Blueprint", "Blueprint obtained from Tusk Thumpers.");
const korrudo = new Item("Korrudo", "Blueprint obtained from Tusk Thumpers.");
const craft_korrudo = new Recipe("Craft Korrudo", "Craft a Korrudo from the blueprint.")
    .addInput(korrudo_blueprint, 1)
    .addInput(credits, 30000)
    .addInput(auroxium_alloy, 25)
    .addInput(esher_devar, 15)
    .addInput(breath_of_the_eidolon, 5)
    .addInput(mawfish_bones, 20)
    .addOutput(korrudo, 1);

// korumm
// bp narmer bounties

const korumm_blueprint = new Item("Korumm Blueprint", "Blueprint obtained from Narmer Bounties.");
const korumm = new Item("Korumm", "Blueprint obtained from Narmer Bounties.");
const craft_korumm = new Recipe("Craft Korumm", "Craft a Korumm from the blueprint.")
    .addInput(korumm_blueprint, 1)
    .addInput(credits, 20000)
    .addInput(narmer_isoplast, 16)
    .addInput(radiant_zodian, 6)
    .addInput(coprite_alloy, 60)
    .addInput(rubedo, 3200)
    .addOutput(korumm, 1);

// kraken
// bp market 20k

const kraken_blueprint = new Item("Kraken Blueprint", "Blueprint obtained from the Market for 20,000 credits.");
const buy_kraken_blueprint = new Recipe("Buy Kraken Blueprint", "Buy a Kraken Blueprint from the Market for 20,000 credits.")
    .addInput(credits, 20000)
    .addOutput(kraken_blueprint, 1);
const kraken = new Item("Kraken", "Blueprint obtained from the Market for 20,000 credits.");
const craft_kraken = new Recipe("Craft Kraken", "Craft a Kraken from the blueprint.")
    .addInput(kraken_blueprint, 1)
    .addInput(credits, 25000)
    .addInput(neurodes, 2)
    .addInput(alloy_plate, 200)
    .addInput(salvage, 750)
    .addInput(polymer_bundle, 120)
    .addOutput(kraken, 1);

// kreska 
// bp energy lab 15k

const kreska_blueprint = new Item("Kreska Blueprint", "Blueprint obtained from the Energy Lab in the Dojo for 15,000 credits.");
const buy_kreska_blueprint = new Recipe("Buy Kreska Blueprint", "Buy a Kreska Blueprint from the Energy Lab in the Dojo for 15,000 credits.")
    .addInput(credits, 15000)
    .addOutput(kreska_blueprint, 1);
const kreska = new Item("Kreska", "Blueprint obtained from the Energy Lab in the Dojo for 15,000 credits.");
const craft_kreska = new Recipe("Craft Kreska", "Craft a Kreska from the blueprint.")
    .addInput(kreska_blueprint, 1)
    .addInput(credits, 25000)
    .addInput(fieldron, 10)
    .addInput(mytocardia_spore, 40)
    .addInput(star_amarast, 25)
    .addInput(longwinder_lathe_coagulant, 20)
    .addOutput(kreska, 1);

// krohkur 
// bp market 25k

const krohkur_blueprint = new Item("Krohkur Blueprint", "Blueprint obtained from the Market for 25,000 credits.");
const buy_krohkhur_blueprint = new Recipe("Buy Krohkur Blueprint", "Buy a Krohkur Blueprint from the Market for 25,000 credits.")
    .addInput(credits, 25000)
    .addOutput(krohkur_blueprint, 1);
const krohkur = new Item("Krohkur", "Blueprint obtained from the Market for 25,000 credits.");
const craft_krohkur = new Recipe("Craft Krohkur", "Craft a Krohkur from the blueprint.")
    .addInput(krohkur_blueprint, 1)
    .addInput(credits, 20000)
    .addInput(tellurium, 5)
    .addInput(morphics, 8)
    .addInput(oxium, 125)
    .addInput(alloy_plate, 4375)
    .addOutput(krohkur, 1);

// kulstar
// bp market 40k

const kulstar_blueprint = new Item("Kulstar Blueprint", "Blueprint obtained from the Market for 40,000 credits.");
const buy_kulstar_blueprint = new Recipe("Buy Kulstar Blueprint", "Buy a Kulstar Blueprint from the Market for 40,000 credits.")
    .addInput(credits, 40000)
    .addOutput(kulstar_blueprint, 1);
const kulstar = new Item("Kulstar", "Blueprint obtained from the Market for 40,000 credits.");
const craft_kulstar = new Recipe("Craft Kulstar", "Craft a Kulstar from the blueprint.")
    .addInput(kulstar_blueprint, 1)
    .addInput(credits, 30000)
    .addInput(kraken, 1)
    .addInput(tellurium, 2)
    .addInput(cryotic, 4800)
    .addInput(plastids, 3600)
    .addOutput(kulstar, 1);

// kunai
// bp market 15k

const kunai_blueprint = new Item("Kunai Blueprint", "Blueprint obtained from the Market for 15,000 credits.");
const buy_kunai_blueprint = new Recipe("Buy Kunai Blueprint", "Buy a Kunai Blueprint from the Market for 15,000 credits.")
    .addInput(credits, 15000)
    .addOutput(kunai_blueprint, 1);
const kunai = new Item("Kunai", "Blueprint obtained from the Market for 15,000 credits.");
const craft_kunai = new Recipe("Craft Kunai", "Craft a Kunai from the blueprint.")
    .addInput(kunai_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(morphics, 5)
    .addInput(ferrite, 3000)
    .addInput(nano_spores, 4000)
    .addInput(salvage, 4000)
    .addOutput(kunai, 1);

// lacera
// bp tenno lab 15k

const lacera_blueprint = new Item("Lacera Blueprint", "Blueprint obtained from the Tenno Lab in the Dojo for 15,000 credits.");
const buy_lacera_blueprint = new Recipe("Buy Lacera Blueprint", "Buy a Lacera Blueprint from the Tenno Lab in the Dojo for 15,000 credits.")
    .addInput(credits, 15000)
    .addOutput(lacera_blueprint, 1);
const lacera = new Item("Lacera", "Blueprint obtained from the Tenno Lab in the Dojo for 15,000 credits.");
const craft_lacera = new Recipe("Craft Lacera", "Craft a Lacera from the blueprint.")
    .addInput(lacera_blueprint, 1)
    .addInput(credits, 20000)
    .addInput(morphics, 2)
    .addInput(polymer_bundle, 4200)
    .addInput(rubedo, 1200)
    .addInput(gallium, 20)
    .addOutput(lacera, 1);

// laetum
// bp cavalero 3000 standing rank 0

const laetum_blueprint = new Item("Laetum Blueprint", "Blueprint obtained from Cavalero for 3000 Holdfasts Standing at Rank 0.");
const buy_laetum_blueprint = new Recipe("Buy Laetum Blueprint", "Buy a Laetum Blueprint from Cavalero for 3000 Holdfasts Standing at Rank 0.")
    .addInput(holdfasts, 3000)
    .addOutput(laetum_blueprint, 1);
const laetum = new Item("Laetum", "Blueprint obtained from Cavalero for 3000 Holdfasts Standing at Rank 0.");
const craft_laetum = new Recipe("Craft Laetum", "Craft a Laetum from the blueprint.")
    .addInput(laetum_blueprint, 1)
    .addInput(credits, 30000)
    .addInput(voidplume_pinion, 1)
    .addInput(voidplume_quill, 5)
    .addInput(voidgel_orb, 20)
    .addInput(salvage, 4000)
    .addOutput(laetum, 1);

// lanka
// bp energy lab 15k

const lanka_blueprint = new Item("Lanka Blueprint", "Blueprint obtained from the Energy Lab in the Dojo for 15,000 credits.");
const buy_lanka_blueprint = new Recipe("Buy Lanka Blueprint", "Buy a Lanka Blueprint from the Energy Lab in the Dojo for 15,000 credits.")
    .addInput(credits, 15000)
    .addOutput(lanka_blueprint, 1);
const lanka = new Item("Lanka", "Blueprint obtained from the Energy Lab in the Dojo for 15,000 credits.");
const craft_lanka = new Recipe("Craft Lanka", "Craft a Lanka from the blueprint.")
    .addInput(lanka_blueprint, 1)
    .addInput(credits, 30000)
    .addInput(fieldron, 5)
    .addInput(gallium, 20)
    .addInput(alloy_plate, 600)
    .addInput(forma, 1)
    .addOutput(lanka, 1);

// larkspur
// bp tenno lab 15k

const larkspur_blueprint = new Item("Larkspur Blueprint", "Blueprint obtained from the Tenno Lab in the Dojo for 15,000 credits.");
const buy_larkspur_blueprint = new Recipe("Buy Larkspur Blueprint", "Buy a Larkspur Blueprint from the Tenno Lab in the Dojo for 15,000 credits.")
    .addInput(credits, 15000)
    .addOutput(larkspur_blueprint, 1);
const larkspur = new Item("Larkspur", "Blueprint obtained from the Tenno Lab in the Dojo for 15,000 credits.");
const craft_larkspur = new Recipe("Craft Larkspur", "Craft a Larkspur from the blueprint.")
    .addInput(larkspur_blueprint, 1)
    .addInput(credits, 20000)
    .addInput(crisma_toroid, 2)
    .addInput(venerdo_alloy, 80)
    .addInput(radiant_zodian, 5)
    .addInput(synathid_ecosynth_analyzer, 5)
    .addOutput(larkspur, 1);

// lato vandal
// bp ESO

const lato_vandal_blueprint = new Item("Lato Vandal Blueprint", "Blueprint obtained from Elite Sanctuary Onslaught Rotation B.");
const lato_vandal_barrel = new Item("Lato Vandal Barrel", "Item obtained from Elite Sanctuary Onslaught Rotation C.");
const lato_vandal_receiver = new Item("Lato Vandal Receiver", "Item obtained from Elite Sanctuary Onslaught Rotation A.");
const lato_vandal = new Item("Lato Vandal", "Blueprint obtained from Elite Sanctuary Onslaught Rotation B.");
const craft_lato_vandal = new Recipe("Craft Lato Vandal", "Craft a Lato Vandal from the blueprint.")
    .addInput(lato_vandal_blueprint, 1)
    .addInput(lato_vandal_barrel, 1)
    .addInput(lato_vandal_receiver, 1)
    .addInput(credits, 25000)
    .addOutput(lato_vandal, 1);

// latron
// bp market 20k

const latron_blueprint = new Item("Latron Blueprint", "Blueprint obtained from the Market for 20,000 credits.");
const buy_latron_blueprint = new Recipe("Buy Latron Blueprint", "Buy a Latron Blueprint from the Market for 20,000 credits.")
    .addInput(credits, 20000)
    .addOutput(latron_blueprint, 1);
const latron = new Item("Latron", "Blueprint obtained from the Market for 20,000 credits.");
const craft_latron = new Recipe("Craft Latron", "Craft a Latron from the blueprint.")
    .addInput(latron_blueprint, 1)
    .addInput(credits, 20000)
    .addInput(morphics, 5)
    .addInput(plastids, 800)
    .addInput(alloy_plate, 1000)
    .addInput(salvage, 900)
    .addOutput(latron, 1);

// latron wraith
// bp invasion
// full parts invasion

const latron_wraith_blueprint = new Item("Latron Wraith Blueprint", "Blueprint obtained as a reward from an Invasion.");
const latron_wraith_barrel = new Item("Latron Wraith Barrel", "Item obtained as a reward from an Invasion.");
const latron_wraith_receiver = new Item("Latron Wraith Receiver", "Item obtained as a reward from an Invasion.");
const latron_wraith_stock = new Item("Latron Wraith Stock", "Item obtained as a reward from an Invasion.");
const latron_wraith = new Item("Latron Wraith", "Blueprint obtained as a reward from an Invasion.");
const craft_latron_wraith = new Recipe("Craft Latron Wraith", "Craft a Latron Wraith from the blueprint.")
    .addInput(latron_wraith_blueprint, 1)
    .addInput(latron_wraith_barrel, 1)
    .addInput(latron_wraith_receiver, 1)
    .addInput(latron_wraith_stock, 1)
    .addInput(credits, 25000)
    .addOutput(latron_wraith, 1);

// lecta
// bp market 30k

const lecta_blueprint = new Item("Lecta Blueprint", "Blueprint obtained from the Market for 30,000 credits.");
const buy_lecta_blueprint = new Recipe("Buy Lecta Blueprint", "Buy a Lecta Blueprint from the Market for 30,000 credits.")
    .addInput(credits, 30000)
    .addOutput(lecta_blueprint, 1);
const lecta = new Item("Lecta", "Blueprint obtained from the Market for 30,000 credits.");
const craft_lecta = new Recipe("Craft Lecta", "Craft a Lecta from the blueprint.")
    .addInput(lecta_blueprint, 1)
    .addInput(credits, 20000)
    .addInput(morphics, 2)
    .addInput(salvage, 900)
    .addInput(ferrite, 1000)
    .addInput(neural_sensor, 3)
    .addOutput(lecta, 1);

// lenz
// bp energy lab 50k

const lenz_blueprint = new Item("Lenz Blueprint", "Blueprint obtained from the Energy Lab in the Dojo for 50,000 credits.");
const buy_lenz_blueprint = new Recipe("Buy Lenz Blueprint", "Buy a Lenz Blueprint from the Energy Lab in the Dojo for 50,000 credits.")
    .addInput(credits, 50000)
    .addOutput(lenz_blueprint, 1);
const lenz = new Item("Lenz", "Blueprint obtained from the Energy Lab in the Dojo for 50,000 credits.");
const craft_lenz = new Recipe("Craft Lenz", "Craft a Lenz from the blueprint.")
    .addInput(lenz_blueprint, 1)
    .addInput(credits, 25000)
    .addInput(fieldron, 10)
    .addInput(alloy_plate, 8200)
    .addInput(cryotic, 2400)
    .addInput(nitain, 3)
    .addOutput(lenz, 1);

// tipedo
// bp market 20k

const tipedo_blueprint = new Item("Tipedo Blueprint", "Blueprint obtained from the Market for 20,000 credits.");
const buy_tipedo_blueprint = new Recipe("Buy Tipedo Blueprint", "Buy a Tipedo Blueprint from the Market for 20,000 credits.")
    .addInput(credits, 20000)
    .addOutput(tipedo_blueprint, 1);
const tipedo = new Item("Tipedo", "Blueprint obtained from the Market for 20,000 credits.");
const craft_tipedo = new Recipe("Craft Tipedo", "Craft a Tipedo from the blueprint.")
    .addInput(tipedo_blueprint, 1)
    .addInput(credits, 20000)
    .addInput(neural_sensor, 2)
    .addInput(polymer_bundle, 1600)
    .addInput(kunai, 1)
    .addInput(bo, 1)
    .addOutput(tipedo, 1);

// lesion
// bp market 25k

const lesion_blueprint = new Item("Lesion Blueprint", "Blueprint obtained from the Market for 25,000 credits.");
const buy_lesion_blueprint = new Recipe("Buy Lesion Blueprint", "Buy a Lesion Blueprint from the Market for 25,000 credits.")
    .addInput(credits, 25000)
    .addOutput(lesion_blueprint, 1);
const lesion = new Item("Lesion", "Blueprint obtained from the Market for 25,000 credits.");
const craft_lesion = new Recipe("Craft Lesion", "Craft a Lesion from the blueprint.")
    .addInput(lesion_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(tipedo, 1)
    .addInput(plastids, 1400)
    .addInput(neurodes, 4)
    .addInput(nano_spores, 2300)
    .addOutput(lesion, 1);

// machete
// bp simaris 100k standing

const machete_blueprint = new Item("Machete Blueprint", "Blueprint obtained from Cephalon Simaris for 100,000 standing.");
const buy_machete_blueprint = new Recipe("Buy Machete Blueprint", "Buy a Machete Blueprint from Cephalon Simaris for 100,000 standing.")
    .addInput(cephalon_simaris, 100000)
    .addOutput(machete_blueprint, 1);
const machete = new Item("Machete", "Blueprint obtained from Cephalon Simaris for 100,000 standing.");
const craft_machete = new Recipe("Craft Machete", "Craft a Machete from the blueprint.")
    .addInput(machete_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(gallium, 4)
    .addInput(salvage, 750)
    .addInput(plastids, 800)
    .addInput(alloy_plate, 900)
    .addOutput(machete, 1);

// machete wraith
// full weapon baro 410 ducats 250k credits

const machete_wraith = new Item("Machete Wraith", "Weapon obtained from Baro Ki'Teer for 410 ducats and 250,000 credits.");
const buy_machete_wraith = new Recipe("Buy Machete Wraith", "Buy a Machete Wraith from Baro Ki'Teer for 410 ducats and 250,000 credits.")
    .addInput(ducats, 410)
    .addInput(credits, 250000)
    .addOutput(machete_wraith, 1);

// magistar
// bp market 25k

const magistar_blueprint = new Item("Magistar Blueprint", "Blueprint obtained from the Market for 25,000 credits.");
const buy_magistar_blueprint = new Recipe("Buy Magistar Blueprint", "Buy a Magistar Blueprint from the Market for 25,000 credits.")
    .addInput(credits, 25000)
    .addOutput(magistar_blueprint, 1);
const magistar = new Item("Magistar", "Blueprint obtained from the Market for 25,000 credits.");
const craft_magistar = new Recipe("Craft Magistar", "Craft a Magistar from the blueprint.")
    .addInput(magistar_blueprint, 1)
    .addInput(credits, 25000)
    .addInput(gallium, 3)
    .addInput(ferrite, 750)
    .addInput(rubedo, 300)
    .addInput(alloy_plate, 80)
    .addOutput(magistar, 1);

// mara detron
// full weapon baro 500 ducats 200k credits

const mara_detron = new Item("Mara Detron", "Weapon obtained from Baro Ki'Teer for 500 ducats and 200,000 credits.");
const buy_mara_detron = new Recipe("Buy Mara Detron", "Buy a Mara Detron from Baro Ki'Teer for 500 ducats and 200,000 credits.")
    .addInput(ducats, 500)
    .addInput(credits, 200000)
    .addOutput(mara_detron, 1);

// marelok
// bp chem lab 15k

const marelok_blueprint = new Item("Marelok Blueprint", "Blueprint obtained from the Chem Lab in the Dojo for 15,000 credits.");
const buy_marelok_blueprint = new Recipe("Buy Marelok Blueprint", "Buy a Marelok Blueprint from the Chem Lab in the Dojo for 15,000 credits.")
    .addInput(credits, 15000)
    .addOutput(marelok_blueprint, 1);
const marelok = new Item("Marelok", "Blueprint obtained from the Chem Lab in the Dojo for 15,000 credits.");
const craft_marelok = new Recipe("Craft Marelok", "Craft a Marelok from the blueprint.")
    .addInput(marelok_blueprint, 1)
    .addInput(credits, 30000)
    .addInput(detonite_injector, 2)
    .addInput(polymer_bundle, 5000)
    .addInput(salvage, 5000)
    .addInput(forma, 1)
    .addOutput(marelok, 1);

// masseter
// bp tenno lab 15k

const masseter_blueprint = new Item("Masseter Blueprint", "Blueprint obtained from the Tenno Lab in the Dojo for 15,000 credits.");
const buy_masseter_blueprint = new Recipe("Buy Masseter Blueprint", "Buy a Masseter Blueprint from the Tenno Lab in the Dojo for 15,000 credits.")
    .addInput(credits, 15000)
    .addOutput(masseter_blueprint, 1);
const masseter = new Item("Masseter", "Blueprint obtained from the Tenno Lab in the Dojo for 15,000 credits.");
const craft_masseter = new Recipe("Craft Masseter", "Craft a Masseter from the blueprint.")
    .addInput(masseter_blueprint, 1)
    .addInput(credits, 20000)
    .addInput(argon_crystal, 2)
    .addInput(cryotic, 650)
    .addInput(oxium, 225)
    .addInput(salvage, 8600)
    .addOutput(masseter, 1);

// mios
// bp bio lab 50k

const mios_blueprint = new Item("Mios Blueprint", "Blueprint obtained from the Bio Lab in the Dojo for 50,000 credits.");
const buy_mios_blueprint = new Recipe("Buy Mios Blueprint", "Buy a Mios Blueprint from the Bio Lab in the Dojo for 50,000 credits.")
    .addInput(credits, 50000)
    .addOutput(mios_blueprint, 1);
const mios = new Item("Mios", "Blueprint obtained from the Bio Lab in the Dojo for 50,000 credits.");
const craft_mios = new Recipe("Craft Mios", "Craft a Mios from the blueprint.")
    .addInput(mios_blueprint, 1)
    .addInput(credits, 30000)
    .addInput(mutagen_mass, 4)
    .addInput(nano_spores, 15000)
    .addInput(plastids, 1200)
    .addInput(forma, 1)
    .addOutput(mios, 1);

// mire 
// bp market 15k

const mire_blueprint = new Item("Mire Blueprint", "Blueprint obtained from the Market for 15,000 credits.");
const buy_mire_blueprint = new Recipe("Buy Mire Blueprint", "Buy a Mire Blueprint from the Market for 15,000 credits.")
    .addInput(credits, 15000)
    .addOutput(mire_blueprint, 1);
const mire = new Item("Mire", "Blueprint obtained from the Market for 15,000 credits.");
const craft_mire = new Recipe("Craft Mire", "Craft a Mire from the blueprint.")
    .addInput(mire_blueprint, 1)
    .addInput(credits, 20000)
    .addInput(ferrite, 1000)
    .addInput(neural_sensor, 2)
    .addInput(alloy_plate, 2000)
    .addInput(nano_spores, 1500)
    .addOutput(mire, 1);

// miter
// bp and full parts from lech kril and vor

const miter_blueprint = new Item("Miter Blueprint", "Blueprint obtained from Lech Kril and Captain Vor on Ceres.")
const miter_handle = new Item("Miter Handle", "Item obtained from Lech Kril and Captain Vor on Ceres.")
const miter_blade = new Item("Miter Blade", "Item obtained from Lech Kril and Captain Vor on Ceres.")
const miter_barrel = new Item("Miter Barrel", "Item obtained from Lech Kril and Captain Vor on Ceres.")
const miter_gun_chassis = new Item("Miter Gun Chassis", "Item obtained from Lech Kril and Captain Vor on Ceres.")
const miter = new Item("Miter", "Blueprint obtained from Lech Kril and Captain Vor on Ceres.")
const craft_miter = new Recipe("Craft Miter", "Craft a Miter from the blueprint.")
    .addInput(miter_blueprint, 1)
    .addInput(miter_handle, 1)
    .addInput(miter_blade, 1)
    .addInput(miter_barrel, 1)
    .addInput(miter_gun_chassis, 1)
    .addInput(credits, 15000)
    .addOutput(miter, 1);

// mutalist cernos
// bp market 20k

const mutalist_cernos_blueprint = new Item("Mutalist Cernos Blueprint", "Blueprint obtained from the Market for 20,000 credits.");
const buy_mutalist_cernos_blueprint = new Recipe("Buy Mutalist Cernos Blueprint", "Buy a Mutalist Cernos Blueprint from the Market for 20,000 credits.")
    .addInput(credits, 20000)
    .addOutput(mutalist_cernos_blueprint, 1);
const mutalist_cernos = new Item("Mutalist Cernos", "Blueprint obtained from the Market for 20,000 credits.");
const craft_mutalist_cernos = new Recipe("Craft Mutalist Cernos", "Craft a Mutalist Cernos from the blueprint.")
    .addInput(mutalist_cernos_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(cernos, 1)
    .addInput(plastids, 1400)
    .addInput(cryotic, 1200)
    .addInput(nano_spores, 2300)
    .addOutput(mutalist_cernos, 1);

// mutalist quanta
// bp bio lab 50k

const mutalist_quanta_blueprint = new Item("Mutalist Quanta Blueprint", "Blueprint obtained from the Bio Lab in the Dojo for 50,000 credits.");
const buy_mutalist_quanta_blueprint = new Recipe("Buy Mutalist Quanta Blueprint", "Buy a Mutalist Quanta Blueprint from the Bio Lab in the Dojo for 50,000 credits.")
    .addInput(credits, 50000)
    .addOutput(mutalist_quanta_blueprint, 1);
const mutalist_quanta = new Item("Mutalist Quanta", "Blueprint obtained from the Bio Lab in the Dojo for 50,000 credits.");
const craft_mutalist_quanta = new Recipe("Craft Mutalist Quanta", "Craft a Mutalist Quanta from the blueprint.")
    .addInput(mutalist_quanta_blueprint, 1)
    .addInput(credits, 30000)
    .addInput(mutagen_mass, 5)
    .addInput(nano_spores, 15000)
    .addInput(circuits, 1200)
    .addInput(forma, 1)
    .addOutput(mutalist_quanta, 1);

// nagantaka
// bp market 40k

const nagantaka_blueprint = new Item("Nagantaka Blueprint", "Blueprint obtained from the Market for 40,000 credits.");
const buy_nagantaka_blueprint = new Recipe("Buy Nagantaka Blueprint", "Buy a Nagantaka Blueprint from the Market for 40,000 credits.")
    .addInput(credits, 40000)
    .addOutput(nagantaka_blueprint, 1);
const nagantaka = new Item("Nagantaka", "Blueprint obtained from the Market for 40,000 credits.");
const craft_nagantaka = new Recipe("Craft Nagantaka", "Craft a Nagantaka from the blueprint.")
    .addInput(nagantaka_blueprint, 1)
    .addInput(credits, 25000)
    .addInput(neurodes, 3)
    .addInput(gallium, 4)
    .addInput(nano_spores, 3000)
    .addInput(rubedo, 1200)
    .addOutput(nagantaka, 1);

// nami skyla
// bp tenno lab 15k

const nami_skyla_blueprint = new Item("Nami Skyla Blueprint", "Blueprint obtained from the Tenno Lab in the Dojo for 15,000 credits.");
const buy_nami_skyla_blueprint = new Recipe("Buy Nami Skyla Blueprint", "Buy a Nami Skyla Blueprint from the Tenno Lab in the Dojo for 15,000 credits.")
    .addInput(credits, 15000)
    .addOutput(nami_skyla_blueprint, 1);
const nami_skyla = new Item("Nami Skyla", "Blueprint obtained from the Tenno Lab in the Dojo for 15,000 credits.");
const craft_nami_skyla = new Recipe("Craft Nami Skyla", "Craft a Nami Skyla from the blueprint.")
    .addInput(nami_skyla_blueprint, 1)
    .addInput(credits, 20000)
    .addInput(neurodes, 2)
    .addInput(polymer_bundle, 800)
    .addInput(rubedo, 200)
    .addInput(gallium, 10)
    .addOutput(nami_skyla, 1);

// nami solo
// bp market 20k

const nami_solo_blueprint = new Item("Nami Solo Blueprint", "Blueprint obtained from the Market for 20,000 credits.");
const buy_nami_solo_blueprint = new Recipe("Buy Nami Solo Blueprint", "Buy a Nami Solo Blueprint from the Market for 20,000 credits.")
    .addInput(credits, 20000)
    .addOutput(nami_solo_blueprint, 1);
const nami_solo = new Item("Nami Solo", "Blueprint obtained from the Market for 20,000 credits.");
const craft_nami_solo = new Recipe("Craft Nami Solo", "Craft a Nami Solo from the blueprint.")
    .addInput(nami_solo_blueprint, 1)
    .addInput(credits, 20000)
    .addInput(ferrite, 1500)
    .addInput(polymer_bundle, 800)
    .addInput(rubedo, 200)
    .addInput(argon_crystal, 2)
    .addOutput(nami_solo, 1);

// nataruk
// full weapon new war

const nataruk = new Item("Nataruk", "Weapon obtained from The New War.");

// nepheri
// bp narmer bounties

const nepheri_blueprint = new Item("Nepheri Blueprint", "Blueprint obtained from Narmer Bounties.");
const nepheri = new Item("Nepheri", "Blueprint obtained from Narmer Bounties.");
const craft_nepheri = new Recipe("Craft Nepheri", "Craft a Nepheri from the blueprint.")
    .addInput(nepheri_blueprint, 1)
    .addInput(credits, 20000)
    .addInput(narmer_isoplast, 10)
    .addInput(tromyzon_entroplasma, 6)
    .addInput(fersteel_alloy, 80)
    .addInput(nitain, 2)
    .addOutput(nepheri, 1);

// ninkondi
// bp market 20k

const ninkondi_blueprint = new Item("Ninkondi Blueprint", "Blueprint obtained from the Market for 20,000 credits.");
const buy_ninkondi_blueprint = new Recipe("Buy Ninkondi Blueprint", "Buy a Ninkondi Blueprint from the Market for 20,000 credits.")
    .addInput(credits, 20000)
    .addOutput(ninkondi_blueprint, 1);
const ninkondi = new Item("Ninkondi", "Blueprint obtained from the Market for 20,000 credits.");
const craft_ninkondi = new Recipe("Craft Ninkondi", "Craft a Ninkondi from the blueprint.")
    .addInput(ninkondi_blueprint, 1)
    .addInput(credits, 20000)
    .addInput(ferrite, 4000)
    .addInput(polymer_bundle, 1200)
    .addInput(plastids, 800)
    .addInput(argon_crystal, 2)
    .addOutput(ninkondi, 1);

// nukor
// bp dojo chem lab 15k

const nukor_blueprint = new Item("Nukor Blueprint", "Blueprint obtained from the Chem Lab in the Dojo for 15,000 credits.");
const buy_nukor_blueprint = new Recipe("Buy Nukor Blueprint", "Buy a Nukor Blueprint from the Chem Lab in the Dojo for 15,000 credits.")
    .addInput(credits, 15000)
    .addOutput(nukor_blueprint, 1);
const nukor = new Item("Nukor", "Blueprint obtained from the Chem Lab in the Dojo for 15,000 credits.");
const craft_nukor = new Recipe("Craft Nukor", "Craft a Nukor from the blueprint.")
    .addInput(nukor_blueprint, 1)
    .addInput(credits, 30000)
    .addInput(detonite_injector, 2)
    .addInput(morphics, 2)
    .addInput(salvage, 5500)
    .addInput(forma, 1)
    .addOutput(nukor, 1);

// obex
// bp market 15k

const obex_blueprint = new Item("Obex Blueprint", "Blueprint obtained from the Market for 15,000 credits.");
const buy_obex_blueprint = new Recipe("Buy Obex Blueprint", "Buy a Obex Blueprint from the Market for 15,000 credits.")
    .addInput(credits, 15000)
    .addOutput(obex_blueprint, 1);
const obex = new Item("Obex", "Blueprint obtained from the Market for 15,000 credits.");
const craft_obex = new Recipe("Craft Obex", "Craft a Obex from the blueprint.")
    .addInput(obex_blueprint, 1)
    .addInput(credits, 30000)
    .addInput(circuits, 650)
    .addInput(salvage, 900)
    .addInput(ferrite, 700)
    .addInput(alloy_plate, 300)
    .addOutput(obex, 1);

// ocucor
// bp dojo energy lab 15k

const ocucor_blueprint = new Item("Ocucor Blueprint", "Blueprint obtained from the Energy Lab in the Dojo for 15,000 credits.");
const buy_ocucor_blueprint = new Recipe("Buy Ocucor Blueprint", "Buy a Ocucor Blueprint from the Energy Lab in the Dojo for 15,000 credits.")
    .addInput(credits, 15000)
    .addOutput(ocucor_blueprint, 1);
const ocucor = new Item("Ocucor", "Blueprint obtained from the Energy Lab in the Dojo for 15,000 credits.");
const craft_ocucor = new Recipe("Craft Ocucor", "Craft a Ocucor from the blueprint.")
    .addInput(ocucor_blueprint, 1)
    .addInput(credits, 25000)
    .addInput(fieldron, 10)
    .addInput(thermal_sludge, 40)
    .addInput(venerdo_alloy, 55)
    .addInput(charamote_sagan_module, 20)
    .addOutput(ocucor, 1);

// ogris
// bp dojo chem lab 15k

const ogris_blueprint = new Item("Ogris Blueprint", "Blueprint obtained from the Chem Lab in the Dojo for 15,000 credits.");
const buy_ogris_blueprint = new Recipe("Buy Ogris Blueprint", "Buy a Ogris Blueprint from the Chem Lab in the Dojo for 15,000 credits.")
    .addInput(credits, 15000)
    .addOutput(ogris_blueprint, 1);
const ogris = new Item("Ogris", "Blueprint obtained from the Chem Lab in the Dojo for 15,000 credits.");
const craft_ogris = new Recipe("Craft Ogris", "Craft a Ogris from the blueprint.")
    .addInput(ogris_blueprint, 1)
    .addInput(credits, 30000)
    .addInput(detonite_injector, 5)
    .addInput(salvage, 5000)
    .addInput(alloy_plate, 600)
    .addInput(forma, 1)
    .addOutput(ogris, 1);

// ohma
// bp market 55k

const ohma_blueprint = new Item("Ohma Blueprint", "Blueprint obtained from the Market for 55,000 credits.");
const buy_ohma_blueprint = new Recipe("Buy Ohma Blueprint", "Buy a Ohma Blueprint from the Market for 55,000 credits.")
    .addInput(credits, 55000)
    .addOutput(ohma_blueprint, 1);
const ohma = new Item("Ohma", "Blueprint obtained from the Market for 55,000 credits.");
const craft_ohma = new Recipe("Craft Ohma", "Craft a Ohma from the blueprint.")
    .addInput(ohma_blueprint, 1)
    .addInput(credits, 20000)
    .addInput(nitain, 4)
    .addInput(ferrite, 15000)
    .addInput(plastids, 1400)
    .addInput(argon_crystal, 2)
    .addOutput(ohma, 1);

// okina
// bp tenno lab 15k

const okina_blueprint = new Item("Okina Blueprint", "Blueprint obtained from the Tenno Lab in the Dojo for 15,000 credits.");
const buy_okina_blueprint = new Recipe("Buy Okina Blueprint", "Buy a Okina Blueprint from the Tenno Lab in the Dojo for 15,000 credits.")
    .addInput(credits, 15000)
    .addOutput(okina_blueprint, 1);
const okina = new Item("Okina", "Blueprint obtained from the Tenno Lab in the Dojo for 15,000 credits.");
const craft_okina = new Recipe("Craft Okina", "Craft a Okina from the blueprint.")
    .addInput(okina_blueprint, 1)
    .addInput(credits, 20000)
    .addInput(tellurium, 2)
    .addInput(alloy_plate, 4200)
    .addInput(polymer_bundle, 3400)
    .addInput(oxium, 1800)
    .addOutput(okina, 1);

// onorix
// bp market 35k
// full parts syndicate 20k

const onorix_blueprint = new Item("Onorix Blueprint", "Blueprint obtained from the Market for 35,000 credits.");
const buy_onorix_blueprint = new Recipe("Buy Onorix Blueprint", "Buy a Onorix Blueprint from the Market for 35,000 credits.")
    .addInput(credits, 35000)
    .addOutput(onorix_blueprint, 1);
const onorix_blade = new Item("Onorix Blade", "Item obtained from New Loka for 20,000 Standing.");
const buy_onorix_blade = new Recipe("Buy Onorix Blade", "Buy a Onorix Blade from New Loka for 20,000 Standing.")
    .addInput(new_loka, 20000)
    .addOutput(onorix_blade, 1);
const onorix_handle = new Item("Onorix Handle", "Item obtained from The Perrin Sequence for 20,000 Standing.");
const buy_onorix_handle = new Recipe("Buy Onorix Handle", "Buy a Onorix Handle from The Perrin Sequence for 20,000 Standing.")
    .addInput(the_perrin_sequence, 20000)
    .addOutput(onorix_handle, 1);
const onorix = new Item("Onorix", "Blueprint obtained from the Market for 35,000 credits.");
const craft_onorix = new Recipe("Craft Onorix", "Craft a Onorix from the blueprint.")
    .addInput(onorix_blueprint, 1)
    .addInput(credits, 25000)
    .addInput(onorix_blade, 2)
    .addInput(onorix_handle, 1)
    .addInput(neurodes, 3)
    .addOutput(onorix, 1);

// opticor
// bp energy lab 15k

const opticor_blueprint = new Item("Opticor Blueprint", "Blueprint obtained from the Energy Lab in the Dojo for 15,000 credits.");
const buy_opticor_blueprint = new Recipe("Buy Opticor Blueprint", "Buy a Opticor Blueprint from the Energy Lab in the Dojo for 15,000 credits.")
    .addInput(credits, 15000)
    .addOutput(opticor_blueprint, 1);
const opticor = new Item("Opticor", "Blueprint obtained from the Energy Lab in the Dojo for 15,000 credits.");
const craft_opticor = new Recipe("Craft Opticor", "Craft a Opticor from the blueprint.")
    .addInput(opticor_blueprint, 1)
    .addInput(credits, 30000)
    .addInput(fieldron, 5)
    .addInput(gallium, 20)
    .addInput(cryotic, 600)
    .addInput(forma, 1)
    .addOutput(opticor, 1);

// opticor vandal
// full weapon from Thermia Fractures event

const opticor_vandal = new Item("Opticor Vandal", "Weapon obtained from Thermia Fractures event.");

// orthos
// bp market 20k

const orthos_blueprint = new Item("Orthos Blueprint", "Blueprint obtained from the Market for 20,000 credits.");
const buy_orthos_blueprint = new Recipe("Buy Orthos Blueprint", "Buy a Orthos Blueprint from the Market for 20,000 credits.")
    .addInput(credits, 20000)
    .addOutput(orthos_blueprint, 1);
const orthos = new Item("Orthos", "Blueprint obtained from the Market for 20,000 credits.");
const craft_orthos = new Recipe("Craft Orthos", "Craft a Orthos from the blueprint.")
    .addInput(orthos_blueprint, 1)
    .addInput(credits, 20000)
    .addInput(morphics, 4)
    .addInput(polymer_bundle, 500)
    .addInput(ferrite, 850)
    .addInput(alloy_plate, 700)
    .addOutput(orthos, 1);

// orvius
// bp war within
// full blade kuva guardian
// full disc kuva jester

const orvius_blueprint = new Item("Orvius Blueprint", "Blueprint obtained from The War Within quest.");
const orvius_blade = new Item("Orvius Blade", "Item obtained from Kuva Guardians.");
const orvius_disc = new Item("Orvius Disc", "Item obtained from Kuva Jesters.");
const orvius = new Item("Orvius", "Blueprint obtained from The War Within quest.");
const craft_orvius = new Recipe("Craft Orvius", "Craft a Orvius from the blueprint.")
    .addInput(orvius_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(orvius_blade, 2)
    .addInput(orvius_disc, 1)
    .addInput(orokin_cell, 10)
    .addInput(kuva, 4000)
    .addOutput(orvius, 1);

// pandero
// bp market 20k

const pandero_blueprint = new Item("Pandero Blueprint", "Blueprint obtained from the Market for 20,000 credits.");
const buy_pandero_blueprint = new Recipe("Buy Pandero Blueprint", "Buy a Pandero Blueprint from the Market for 20,000 credits.")
    .addInput(credits, 20000)
    .addOutput(pandero_blueprint, 1);
const pandero = new Item("Pandero", "Blueprint obtained from the Market for 20,000 credits.");
const craft_pandero = new Recipe("Craft Pandero", "Craft a Pandero from the blueprint.")
    .addInput(pandero_blueprint, 1)
    .addInput(credits, 20000)
    .addInput(argon_crystal, 2)
    .addInput(circuits, 4500)
    .addInput(cryotic, 5500)
    .addInput(salvage, 25000)
    .addOutput(pandero, 1);

// pangolin sword
// bp nightwave 50 cred

const pangolin_sword_blueprint = new Item("Pangolin Sword Blueprint", "Blueprint obtained from Nightwave for 50 Nora Cred.");
const buy_pangolin_sword_blueprint = new Recipe("Buy Pangolin Sword Blueprint", "Buy a Pangolin Sword Blueprint from Nightwave for 50 Nora Cred.")
    .addInput(nora_cred, 50)
    .addOutput(pangolin_sword_blueprint, 1);
const pangolin_sword = new Item("Pangolin Sword", "Blueprint obtained from Nightwave for 50 Nora Cred.");
const craft_pangolin_sword = new Recipe("Craft Pangolin Sword", "Craft a Pangolin Sword from the blueprint.")
    .addInput(pangolin_sword_blueprint, 1)
    .addInput(credits, 20000)
    .addInput(control_module, 1)
    .addInput(ferrite, 750)
    .addInput(circuits, 300)
    .addInput(alloy_plate, 80)
    .addOutput(pangolin_sword, 1);

// panthera
// bp market 20k

const panthera_blueprint = new Item("Panthera Blueprint", "Blueprint obtained from the Market for 20,000 credits.");
const buy_panthera_blueprint = new Recipe("Buy Panthera Blueprint", "Buy a Panthera Blueprint from the Market for 20,000 credits.")
    .addInput(credits, 20000)
    .addOutput(panthera_blueprint, 1);
const panthera = new Item("Panthera", "Blueprint obtained from the Market for 20,000 credits.");
const craft_panthera = new Recipe("Craft Panthera", "Craft a Panthera from the blueprint.")
    .addInput(panthera_blueprint, 1)
    .addInput(credits, 20000)
    .addInput(orokin_cell, 1)
    .addInput(polymer_bundle, 600)
    .addInput(hikou, 1)
    .addInput(miter, 1)
    .addOutput(panthera, 1);

// paracesis
// bp chimera prologue

const paracesis_blueprint = new Item("Paracesis Blueprint", "Blueprint obtained from The Chimera Prologue quest.");
const paracesis = new Item("Paracesis", "Blueprint obtained from The Chimera Prologue quest.");
const craft_paracesis = new Recipe("Craft Paracesis", "Craft a Paracesis from the blueprint.")
    .addInput(paracesis_blueprint, 1)
    .addInput(credits, 30000)
    .addInput(ducats, 1000)
    .addInput(galatine, 1)
    .addInput(eidolon_shard, 5)
    .addInput(orokin_cell, 15)
    .addOutput(paracesis, 1);

// paracyst
// bp bio lab 50k

const paracyst_blueprint = new Item("Paracyst Blueprint", "Blueprint obtained from the Bio Lab in the Dojo for 50,000 credits.");
const buy_paracyst_blueprint = new Recipe("Buy Paracyst Blueprint", "Buy a Paracyst Blueprint from the Bio Lab in the Dojo for 50,000 credits.")
    .addInput(credits, 50000)   
    .addOutput(paracyst_blueprint, 1);
const paracyst = new Item("Paracyst", "Blueprint obtained from the Bio Lab in the Dojo for 50,000 credits.");
const craft_paracyst = new Recipe("Craft Paracyst", "Craft a Paracyst from the blueprint.")
    .addInput(paracyst_blueprint, 1)
    .addInput(credits, 30000)
    .addInput(mutagen_mass, 5)
    .addInput(nano_spores, 15000)
    .addInput(circuits, 1200)
    .addInput(forma, 1)
    .addOutput(paracyst, 1);

// paris
// bp market 20k

const paris_blueprint = new Item("Paris Blueprint", "Blueprint obtained from the Market for 20,000 credits.");
const buy_paris_blueprint = new Recipe("Buy Paris Blueprint", "Buy a Paris Blueprint from the Market for 20,000 credits.")
    .addInput(credits, 20000)
    .addOutput(paris_blueprint, 1);
const paris = new Item("Paris", "Blueprint obtained from the Market for 20,000 credits.");
const craft_paris = new Recipe("Craft Paris", "Craft a Paris from the blueprint.")
    .addInput(paris_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(morphics, 3)
    .addInput(plastids, 600)
    .addInput(polymer_bundle, 700)
    .addInput(nano_spores, 2000)
    .addOutput(paris, 1);

// pathocyst
// bp and full parts from zealoid prelate

const pathocyst_blueprint = new Item("Pathocyst Blueprint", "Blueprint obtained from Zealoid Prelate Assassination.");
const pathocyst_blade = new Item("Pathocyst Blade", "Item obtained from Zealoid Prelate Assassination.");
const pathocyst_subcortex = new Item("Pathocyst Subcortex", "Item obtained from Zealoid Prelate Assassination.");
const pathocyst = new Item("Pathocyst", "Blueprint obtained from Zealoid Prelate Assassination.");
const craft_pathocyst = new Recipe("Craft Pathocyst", "Craft a Pathocyst from the blueprint.")
    .addInput(pathocyst_blueprint, 1)
    .addInput(pathocyst_blade, 2)
    .addInput(pathocyst_subcortex, 1)
    .addInput(credits, 30000)
    .addInput(neurodes, 5)
    .addOutput(pathocyst, 1);

// pennant
// bp from railjack missions

const pennant_blueprint = new Item("Pennant Blueprint", "Blueprint obtained from Specific enemies in Railjack missions.");
const pennant = new Item("Pennant", "Blueprint obtained from Specific enemies in Railjack missions.");
const craft_pennant = new Recipe("Craft Pennant", "Craft a Pennant from the blueprint.")
    .addInput(pennant_blueprint, 1)
    .addInput(credits, 30000)
    .addInput(tellurium, 2)
    .addInput(rubedo, 2100)
    .addInput(polymer_bundle, 1550)
    .addInput(ferrite, 5300)
    .addOutput(pennant, 1);

// penta
// bp market 30k

const penta_blueprint = new Item("Penta Blueprint", "Blueprint obtained from the Market for 30,000 credits.");
const buy_penta_blueprint = new Recipe("Buy Penta Blueprint", "Buy a Penta Blueprint from the Market for 30,000 credits.")
    .addInput(credits, 30000)
    .addOutput(penta_blueprint, 1);
const penta = new Item("Penta", "Blueprint obtained from the Market for 30,000 credits.");
const craft_penta = new Recipe("Craft Penta", "Craft a Penta from the blueprint.")
    .addInput(penta_blueprint, 1)
    .addInput(credits, 25000)
    .addInput(control_module, 3)
    .addInput(circuits, 1000)
    .addInput(ferrite, 1200)
    .addInput(alloy_plate, 400)
    .addOutput(penta, 1);

// perigale
// bp conjunction survival rotation a
// full parts from conjunction survival rotation b

const perigale_blueprint = new Item("Perigale Blueprint", "Blueprint obtained from Conjunction Survival Rotation A.");
const perigale_barrel = new Item("Perigale Barrel", "Item obtained from Conjunction Survival Rotation B.");
const perigale_receiver = new Item("Perigale Receiver", "Item obtained from Conjunction Survival Rotation B.");
const perigale_stock = new Item("Perigale Stock", "Item obtained from Conjunction Survival Rotation B.");
const perigale = new Item("Perigale", "Blueprint obtained from Conjunction Survival Rotation A.");
const craft_perigale = new Recipe("Craft Perigale", "Craft a Perigale from the blueprint.")
    .addInput(perigale_blueprint, 1)
    .addInput(perigale_barrel, 1)
    .addInput(perigale_receiver, 1)
    .addInput(perigale_stock, 1)
    .addInput(credits, 20000)
    .addInput(lua_thrax_plasm, 50)
    .addOutput(perigale, 1);

// phaedra
// bp market 35k
// full parts syndicate 20k

const phaedra_blueprint = new Item("Phaedra Blueprint", "Blueprint obtained from the Market for 35,000 credits.");
const buy_phaedra_blueprint = new Recipe("Buy Phaedra Blueprint", "Buy a Phaedra Blueprint from the Market for 35,000 credits.")
    .addInput(credits, 35000)
    .addOutput(phaedra_blueprint, 1);
const phaedra_barrel = new Item("Phaedra Barrel", "Item obtained from Arbiters of Hexis for 20,000 standing.");
const buy_phaedra_barrel = new Recipe("Buy Phaedra Barrel", "Buy a Phaedra Barrel from Arbiters of Hexis for 20,000 standing.")
    .addInput(arbiters_of_hexis, 20000)
    .addOutput(phaedra_barrel, 1);
const phaedra_receiver = new Item("Phaedra Receiver", "Item obtained from The Perrin Sequence for 20,000 standing.");
const buy_phaedra_receiver = new Recipe("Buy Phaedra Receiver", "Buy a Phaedra Receiver from The Perrin Sequence for 20,000 standing.")
    .addInput(the_perrin_sequence, 20000)
    .addOutput(phaedra_receiver, 1);
const phaedra_stock = new Item("Phaedra Stock", "Item obtained from New Loka for 20,000 standing.");
const buy_phaedra_stock = new Recipe("Buy Phaedra Stock", "Buy a Phaedra Stock from New Loka for 20,000 standing.")
    .addInput(new_loka, 20000)
    .addOutput(phaedra_stock, 1);
const phaedra = new Item("Phaedra", "Blueprint obtained from the Market for 35,000 credits.");
const craft_phaedra = new Recipe("Craft Phaedra", "Craft a Phaedra from the blueprint.")
    .addInput(phaedra_blueprint, 1)
    .addInput(phaedra_barrel, 1)
    .addInput(phaedra_receiver, 1)
    .addInput(phaedra_stock, 1)
    .addInput(tellurium, 2)
    .addInput(credits, 45000)
    .addOutput(phaedra, 1);

// phage
// bp bio lab 15k

const phage_blueprint = new Item("Phage Blueprint", "Blueprint obtained from Bio Lab for 15,000 credits.");
const buy_phage_blueprint = new Recipe("Buy Phage Blueprint", "Buy a Phage Blueprint from Bio Lab for 15,000 credits.")
    .addInput(credits, 15000)
    .addOutput(phage_blueprint, 1);
const phage = new Item("Phage", "Blueprint obtained from Bio Lab for 15,000 credits.");
const craft_phage = new Recipe("Craft Phage", "Craft a Phage from the blueprint.")
    .addInput(phage_blueprint, 1)
    .addInput(credits, 30000)
    .addInput(mutagen_mass, 4)
    .addInput(circuits, 1500)
    .addInput(nano_spores, 6000)
    .addInput(forma, 1)
    .addOutput(phage, 1);

// phantasma
// bp market 25k

const phantasma_blueprint = new Item("Phantasma Blueprint", "Blueprint obtained from the Market for 25,000 credits.");
const buy_phantasma_blueprint = new Recipe("Buy Phantasma Blueprint", "Buy a Phantasma Blueprint from the Market for 25,000 credits.")
    .addInput(credits, 25000)
    .addOutput(phantasma_blueprint, 1);
const phantasma = new Item("Phantasma", "Blueprint obtained from the Market for 25,000 credits.");
const craft_phantasma = new Recipe("Craft Phantasma", "Craft a Phantasma from the blueprint.")
    .addInput(phantasma_blueprint, 1)
    .addInput(credits, 20000)
    .addInput(argon_crystal, 2)
    .addInput(intact_sentient_core, 10)
    .addInput(plastids, 650)
    .addInput(nano_spores, 12500)
    .addOutput(phantasma, 1);

// phenmor
// bp cavalero 6k rank 2

const phenmor_blueprint = new Item("Phenmor Blueprint", "Blueprint obtained from Cavalero for 6,000 standing at rank 2.");
const buy_phenmor_blueprint = new Recipe("Buy Phenmor Blueprint", "Buy a Phenmor Blueprint from Cavalero for 6,000 standing at rank 2.")
    .addInput(holdfasts, 6000)
    .addOutput(phenmor_blueprint, 1);
const phenmor = new Item("Phenmor", "Blueprint obtained from Cavalero for 6,000 standing at rank 2.");
const craft_phenmor = new Recipe("Craft Phenmor", "Craft a Phenmor from the blueprint.")
    .addInput(phenmor_blueprint, 1)
    .addInput(credits, 30000)
    .addInput(voidplume_pinion, 15)
    .addInput(voidplume_quill, 20)
    .addInput(alloy_plate, 6000)
    .addInput(entrati_lanthorn, 15)
    .addOutput(phenmor, 1);

// plasma sword
// bp nightwave 50 cred

const plasma_sword_blueprint = new Item("Plasma Sword Blueprint", "Blueprint obtained from Nightwave for 50 Nora Cred.");
const buy_plasma_sword_blueprint = new Recipe("Buy Plasma Sword Blueprint", "Buy a Plasma Sword Blueprint from Nightwave for 50 Nora Cred.")
    .addInput(nora_cred, 50)
    .addOutput(plasma_sword_blueprint, 1);
const plasma_sword = new Item("Plasma Sword", "Blueprint obtained from Nightwave for 50 Nora Cred.");
const craft_plasma_sword = new Recipe("Craft Plasma Sword", "Craft a Plasma Sword from the blueprint.")
    .addInput(plasma_sword_blueprint, 1)
    .addInput(credits, 20000)
    .addInput(orokin_cell, 1)
    .addInput(ferrite, 500)
    .addInput(salvage, 450)
    .addInput(polymer_bundle, 50)
    .addOutput(plasma_sword, 1);

// plinx
// bp market 20k

const plinx_blueprint = new Item("Plinx Blueprint", "Blueprint obtained from the Market for 20,000 credits.");
const buy_plinx_blueprint = new Recipe("Buy Plinx Blueprint", "Buy a Plinx Blueprint from the Market for 20,000 credits.")
    .addInput(credits, 20000)
    .addOutput(plinx_blueprint, 1);
const plinx = new Item("Plinx", "Blueprint obtained from the Market for 20,000 credits.");
const craft_plinx = new Recipe("Craft Plinx", "Craft a Plinx from the blueprint.")
    .addInput(plinx_blueprint, 1)
    .addInput(credits, 20000)
    .addInput(argon_crystal, 2)
    .addInput(alloy_plate, 4375)
    .addInput(cryotic, 575)
    .addInput(gyromag_systems, 10)
    .addOutput(plinx, 1);

// pox
// bp bio lab 15k

const pox_blueprint = new Item("Pox Blueprint", "Blueprint obtained from Bio Lab for 15,000 credits.");
const buy_pox_blueprint = new Recipe("Buy Pox Blueprint", "Buy a Pox Blueprint from Bio Lab for 15,000 credits.")
    .addInput(credits, 15000)
    .addOutput(pox_blueprint, 1);
const pox = new Item("Pox", "Blueprint obtained from Bio Lab for 15,000 credits.");
const craft_pox = new Recipe("Craft Pox", "Craft a Pox from the blueprint.")
    .addInput(pox_blueprint, 1)
    .addInput(credits, 30000)
    .addInput(mutagen_mass, 4)
    .addInput(nano_spores, 6500)
    .addInput(rubedo, 1200)
    .addInput(nitain, 2)
    .addOutput(pox, 1); 

// praedos
// bp cavalero 9k rank 4

const praedos_blueprint = new Item("Praedos Blueprint", "Blueprint obtained from Cavalero for 9,000 standing at rank 4.");
const buy_praedos_blueprint = new Recipe("Buy Praedos Blueprint", "Buy a Praedos Blueprint from Cavalero for 9,000 standing at rank 4.")
    .addInput(holdfasts, 9000)
    .addOutput(praedos_blueprint, 1);
const praedos = new Item("Praedos", "Blueprint obtained from Cavalero for 9,000 standing at rank 4.");
const craft_praedos = new Recipe("Craft Praedos", "Craft a Praedos from the blueprint.")
    .addInput(praedos_blueprint, 1)
    .addInput(credits, 30000)
    .addInput(voidplume_pinion, 15)
    .addInput(voidplume_quill, 30)
    .addInput(ferrite, 8000)
    .addInput(thrax_plasm, 100)
    .addOutput(praedos, 1);

// prisma angstrum
// full weapon baro 475 ducats 210k

const prisma_angstrum = new Item("Prisma Angstrum", "Weapon obtained from Baro Ki'Teer for 475 Ducats and 210,000 credits.");
const buy_prisma_angstrum = new Recipe("Buy Prisma Angstrum", "Buy a Prisma Angstrum from Baro Ki'Teer for 475 Ducats and 210,000 credits.")
    .addInput(ducats, 475)
    .addInput(credits, 210000)
    .addOutput(prisma_angstrum, 1);

// prisma dual cleavers
// full weapon baro 490 ducats 200k

const prisma_dual_cleavers = new Item("Prisma Dual Cleavers", "Weapon obtained from Baro Ki'Teer for 490 Ducats and 200,000 credits.");
const buy_prisma_dual_cleavers = new Recipe("Buy Prisma Dual Cleavers", "Buy a Prisma Dual Cleavers from Baro Ki'Teer for 490 Ducats and 200,000 credits.")
    .addInput(ducats, 490)
    .addInput(credits, 200000)
    .addOutput(prisma_dual_cleavers, 1);

// prisma dual decurions 
// full weapon baro 525 ducats 175k

const prisma_dual_decurions = new Item("Prisma Dual Decurions", "Weapon obtained from Baro Ki'Teer for 525 Ducats and 175,000 credits.");
const buy_prisma_dual_decurions = new Recipe("Buy Prisma Dual Decurions", "Buy a Prisma Dual Decurions from Baro Ki'Teer for 525 Ducats and 175,000 credits.")
    .addInput(ducats, 525)
    .addInput(credits, 175000)
    .addOutput(prisma_dual_decurions, 1);

// prisma gorgon
// full weapon baro 600 ducats 50k

const prisma_gorgon = new Item("Prisma Gorgon", "Weapon obtained from Baro Ki'Teer for 600 Ducats and 50,000 credits.");
const buy_prisma_gorgon = new Recipe("Buy Prisma Gorgon", "Buy a Prisma Gorgon from Baro Ki'Teer for 600 Ducats and 50,000 credits.")
    .addInput(ducats, 600)
    .addInput(credits, 50000)
    .addOutput(prisma_gorgon, 1);

// prisma grakata
// full weapon baro 610 ducats 100k

const prisma_grakata = new Item("Prisma Grakata", "Weapon obtained from Baro Ki'Teer for 610 Ducats and 100,000 credits.");
const buy_prisma_grakata = new Recipe("Buy Prisma Grakata", "Buy a Prisma Grakata from Baro Ki'Teer for 610 Ducats and 100,000 credits.")
    .addInput(ducats, 610)
    .addInput(credits, 100000)
    .addOutput(prisma_grakata, 1);

// prisma grinlok
// full weapon baro 500 ducats 220k

const prisma_grinlok = new Item("Prisma Grinlok", "Weapon obtained from Baro Ki'Teer for 500 Ducats and 220,000 credits.");
const buy_prisma_grinlok = new Recipe("Buy Prisma Grinlok", "Buy a Prisma Grinlok from Baro Ki'Teer for 500 Ducats and 220,000 credits.")
    .addInput(ducats, 500)
    .addInput(credits, 220000)
    .addOutput(prisma_grinlok, 1);

// prisma machete
// full weapon baro 400 ducats 200k

const prisma_machete = new Item("Prisma Machete", "Weapon obtained from Baro Ki'Teer for 400 Ducats and 200,000 credits.");
const buy_prisma_machete = new Recipe("Buy Prisma Machete", "Buy a Prisma Machete from Baro Ki'Teer for 400 Ducats and 200,000 credits.")
    .addInput(ducats, 400)
    .addInput(credits, 200000)
    .addOutput(prisma_machete, 1);

// prisma obex
// full weapon baro 500 ducats 175k

const prisma_obex = new Item("Prisma Obex", "Weapon obtained from Baro Ki'Teer for 500 Ducats and 175,000 credits.");
const buy_prisma_obex = new Recipe("Buy Prisma Obex", "Buy a Prisma Obex from Baro Ki'Teer for 500 Ducats and 175,000 credits.")
    .addInput(ducats, 500)
    .addInput(credits, 175000)
    .addOutput(prisma_obex, 1);

// prisma skana
// full weapon baro 510 ducats 175k

const prisma_skana = new Item("Prisma Skana", "Weapon obtained from Baro Ki'Teer for 510 Ducats and 175,000 credits.");
const buy_prisma_skana = new Recipe("Buy Prisma Skana", "Buy a Prisma Skana from Baro Ki'Teer for 510 Ducats and 175,000 credits.")
    .addInput(ducats, 510)
    .addInput(credits, 175000)
    .addOutput(prisma_skana, 1);

// prisma tetra
// full weapon baro 400 ducats 50k

const prisma_tetra = new Item("Prisma Tetra", "Weapon obtained from Baro Ki'Teer for 400 Ducats and 50,000 credits.");
const buy_prisma_tetra = new Recipe("Buy Prisma Tetra", "Buy a Prisma Tetra from Baro Ki'Teer for 400 Ducats and 50,000 credits.")
    .addInput(ducats, 400)
    .addInput(credits, 50000)
    .addOutput(prisma_tetra, 1);

// prisma twin gremlins
// full weapon baro 500 ducats 220k

const prisma_twin_gremlins = new Item("Prisma Twin Gremlins", "Weapon obtained from Baro Ki'Teer for 500 Ducats and 220,000 credits.");
const buy_prisma_twin_gremlins = new Recipe("Buy Prisma Twin Gremlins", "Buy a Prisma Twin Gremlins from Baro Ki'Teer for 500 Ducats and 220,000 credits.")
    .addInput(ducats, 500)
    .addInput(credits, 220000)
    .addOutput(prisma_twin_gremlins, 1);

// prisma veritux
// full weapon baro 550 ducats 150k

const prisma_veritux = new Item("Prisma Veritux", "Weapon obtained from Baro Ki'Teer for 550 Ducats and 150,000 credits.");
const buy_prisma_veritux = new Recipe("Buy Prisma Veritux", "Buy a Prisma Veritux from Baro Ki'Teer for 550 Ducats and 150,000 credits.")
    .addInput(ducats, 550)
    .addInput(credits, 150000)
    .addOutput(prisma_veritux, 1);

// proboscis cernos
// bp market 30k

const proboscis_cernos_blueprint = new Item("Proboscis Cernos Blueprint", "Blueprint obtained from Market for 30,000 credits.");
const buy_proboscis_cernos_blueprint = new Recipe("Buy Proboscis Cernos Blueprint", "Buy a Proboscis Cernos Blueprint from Market for 30,000 credits.")
    .addInput(credits, 30000)
    .addOutput(proboscis_cernos_blueprint, 1);
const proboscis_cernos = new Item("Proboscis Cernos", "Weapon obtained from crafting.")
const craft_proboscis_cernos = new Recipe("Craft Proboscis Cernos", "Craft a Proboscis Cernos from the blueprint.")
    .addInput(proboscis_cernos_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(mutalist_cernos, 1)
    .addInput(polymer_bundle, 1600)
    .addInput(nitain, 5)
    .addInput(nano_spores, 25000)
    .addOutput(proboscis_cernos, 1);

// prova
// bp energy lab 15k

const prova_blueprint = new Item("Prova Blueprint", "Blueprint obtained from Energy Lab for 15,000 credits.");
const buy_prova_blueprint = new Recipe("Buy Prova Blueprint", "Buy a Prova Blueprint from Energy Lab for 15,000 credits.")
    .addInput(credits, 15000)
    .addOutput(prova_blueprint, 1);
const prova = new Item("Prova", "Weapon obtained from crafting.")
const craft_prova = new Recipe("Craft Prova", "Craft a Prova from the blueprint.")
    .addInput(prova_blueprint, 1)
    .addInput(credits, 20000)
    .addInput(fieldron, 1)
    .addInput(alloy_plate, 300)
    .addInput(salvage, 1000)
    .addInput(forma, 1)
    .addOutput(prova, 1);

// prova vandal
// full weapon baro 410 ducats 250k

const prova_vandal = new Item("Prova Vandal", "Weapon obtained from Baro Ki'Teer for 410 Ducats and 250,000 credits.");
const buy_prova_vandal = new Recipe("Buy Prova Vandal", "Buy a Prova Vandal from Baro Ki'Teer for 410 Ducats and 250,000 credits.")
    .addInput(ducats, 410)
    .addInput(credits, 250000)
    .addOutput(prova_vandal, 1);

// pulmonars
// bp market 50k

const pulmonars_blueprint = new Item("Pulmonars Blueprint", "Blueprint obtained from Market for 50,000 credits.");
const buy_pulmonars_blueprint = new Recipe("Buy Pulmonars Blueprint", "Buy a Pulmonars Blueprint from Market for 50,000 credits.")
    .addInput(credits, 50000)
    .addOutput(pulmonars_blueprint, 1);
const pulmonars = new Item("Pulmonars", "Weapon obtained from crafting.")
const craft_pulmonars = new Recipe("Craft Pulmonars", "Craft a Pulmonars from the blueprint.")
    .addInput(pulmonars_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(argon_crystal, 2)
    .addInput(parasitic_tethermaw, 24)
    .addInput(devolved_namalon, 60)
    .addInput(nano_spores, 24000)
    .addOutput(pulmonars, 1);

// pupacyst
// bp bio lab 50k

const pupacyst_blueprint = new Item("Pupacyst Blueprint", "Blueprint obtained from Bio Lab for 50,000 credits.");
const buy_pupacyst_blueprint = new Recipe("Buy Pupacyst Blueprint", "Buy a Pupacyst Blueprint from Bio Lab for 50,000 credits.")
    .addInput(credits, 50000)
    .addOutput(pupacyst_blueprint, 1);
const pupacyst = new Item("Pupacyst", "Weapon obtained from crafting.")
const craft_pupacyst = new Recipe("Craft Pupacyst", "Craft a Pupacyst from the blueprint.")
    .addInput(pupacyst_blueprint, 1)
    .addInput(credits, 30000)
    .addInput(mutagen_mass, 4)
    .addInput(salvage, 8750)
    .addInput(rubedo, 2250)
    .addInput(forma, 1)
    .addOutput(pupacyst, 1);

// pyrana
// bp tenno lab 15k

const pyrana_blueprint = new Item("Pyrana Blueprint", "Blueprint obtained from Tenno Lab for 15,000 credits.");
const buy_pyrana_blueprint = new Recipe("Buy Pyrana Blueprint", "Buy a Pyrana Blueprint from Tenno Lab for 15,000 credits.")
    .addInput(credits, 15000)
    .addOutput(pyrana_blueprint, 1);
const pyrana = new Item("Pyrana", "Weapon obtained from crafting.")
const craft_pyrana = new Recipe("Craft Pyrana", "Craft a Pyrana from the blueprint.")
    .addInput(pyrana_blueprint, 1)
    .addInput(credits, 20000)
    .addInput(control_module, 2)
    .addInput(salvage, 800)
    .addInput(alloy_plate, 200)
    .addInput(forma, 1)
    .addOutput(pyrana, 1);

// quanta
// bp energy lab 15k

const quanta_blueprint = new Item("Quanta Blueprint", "Blueprint obtained from Energy Lab for 15,000 credits.");
const buy_quanta_blueprint = new Recipe("Buy Quanta Blueprint", "Buy a Quanta Blueprint from Energy Lab for 15,000 credits.")
    .addInput(credits, 15000)
    .addOutput(quanta_blueprint, 1);
const quanta = new Item("Quanta", "Weapon obtained from crafting.")
const craft_quanta = new Recipe("Craft Quanta", "Craft a Quanta from the blueprint.")
    .addInput(quanta_blueprint, 1)
    .addInput(credits, 25000)
    .addInput(fieldron, 7)
    .addInput(circuits, 1000)
    .addInput(salvage, 7000)
    .addInput(forma, 1)
    .addOutput(quanta, 1);

// quanta vandal
// bp baro 450 ducats 300k

const quanta_vandal = new Item("Quanta Vandal", "Weapon obtained from Baro Ki'Teer for 450 Ducats and 300,000 credits.");
const buy_quanta_vandal = new Recipe("Buy Quanta Vandal", "Buy a Quanta Vandal from Baro Ki'Teer for 450 Ducats and 300,000 credits.")
    .addInput(ducats, 450)
    .addInput(credits, 300000)
    .addOutput(quanta_vandal, 1);

// quartakk
// bp ghoul purge bounties or ghoul auger alpha

const quartakk_blueprint = new Item("Quartakk Blueprint", "Blueprint obtained from Ghoul Purge Bounties or Ghoul Auger Alpha.");
const quartakk = new Item("Quartakk", "Weapon obtained from crafting.")
const craft_quartakk = new Recipe("Craft Quartakk", "Craft a Quartakk from the blueprint.")
    .addInput(quartakk_blueprint, 1)
    .addInput(credits, 20000)
    .addInput(grokdrul, 75)
    .addInput(fersteel_alloy, 15)
    .addInput(salvage, 12450)
    .addInput(neural_sensor, 5)
    .addOutput(quartakk, 1);

// quassus
// bp necralisk bounties

const quassus_blueprint = new Item("Quassus Blueprint", "Blueprint obtained from Necralisk Bounties.");
const quassus = new Item("Quassus", "Weapon obtained from crafting.")
const craft_quassus = new Recipe("Craft Quassus", "Craft a Quassus from the blueprint.")
    .addInput(quassus_blueprint, 1)
    .addInput(credits, 20000)
    .addInput(devolved_namalon, 60)
    .addInput(spinal_core_section, 15)
    .addInput(scintillant, 5)
    .addInput(seriglass_shard, 1)
    .addOutput(quassus, 1);

// quatz
// bp market 40k

const quatz_blueprint = new Item("Quatz Blueprint", "Blueprint obtained from Market for 40,000 credits.");
const buy_quatz_blueprint = new Recipe("Buy Quatz Blueprint", "Buy a Quatz Blueprint from Market for 40,000 credits.")
    .addInput(credits, 40000)
    .addOutput(quatz_blueprint, 1);
const quatz = new Item("Quatz", "Weapon obtained from crafting.")
const craft_quatz = new Recipe("Craft Quatz", "Craft a Quatz from the blueprint.")
    .addInput(quatz_blueprint, 1)
    .addInput(credits, 30000)
    .addInput(argon_crystal, 2)
    .addInput(neurodes, 5)
    .addInput(rubedo, 4200)
    .addInput(salvage, 12750)
    .addOutput(quatz, 1);

// quellor
// bp obtained from specific enemies in railjack missions

const quellor_blueprint = new Item("Quellor Blueprint", "Blueprint obtained from specific enemies in Railjack missions.");
const quellor = new Item("Quellor", "Weapon obtained from crafting.")
const craft_quellor = new Recipe("Craft Quellor", "Craft a Quellor from the blueprint.")
    .addInput(quellor_blueprint, 1)
    .addInput(credits, 30000)
    .addInput(tellurium, 4)
    .addInput(rubedo, 6250)
    .addInput(circuits, 3600)
    .addInput(alloy_plate, 15350)
    .addOutput(quellor, 1);

// rakta ballistica
// full weapon red veil 100k standing rank 5

const rakta_ballistica = new Item("Rakta Ballistica", "Weapon obtained from Red Veil for 100,000 standing at rank 5.");
const buy_rakta_ballistica = new Recipe("Buy Rakta Ballistica", "Buy a Rakta Ballistica from Red Veil for 100,000 standing at rank 5.")
    .addInput(red_veil, 100000)
    .addOutput(rakta_ballistica, 1);

// rakta cernos
// full weapon red veil 125k standing rank 5

const rakta_cernos = new Item("Rakta Cernos", "Weapon obtained from Red Veil for 125,000 standing at rank 5.");
const buy_rakta_cernos = new Recipe("Buy Rakta Cernos", "Buy a Rakta Cernos from Red Veil for 125,000 standing at rank 5.")
    .addInput(red_veil, 125000)
    .addOutput(rakta_cernos, 1);

// rakta dark dagger
// full weapon red veil 125k standing rank 5

const rakta_dark_dagger = new Item("Rakta Dark Dagger", "Weapon obtained from Red Veil for 125,000 standing at rank 5.");
const buy_rakta_dark_dagger = new Recipe("Buy Rakta Dark Dagger", "Buy a Rakta Dark Dagger from Red Veil for 125,000 standing at rank 5.")
    .addInput(red_veil, 125000)
    .addOutput(rakta_dark_dagger, 1);

// rathbone
// bp market 35k
// full parts syndicate 20k standing rank 2

const rathbone_blueprint = new Item("Rathbone Blueprint", "Blueprint obtained from Market for 35,000 credits.");
const buy_rathbone_blueprint = new Recipe("Buy Rathbone Blueprint", "Buy a Rathbone Blueprint from Market for 35,000 credits.")
    .addInput(credits, 35000)
    .addOutput(rathbone_blueprint, 1);
const rathbone_head = new Item("Rathbone Head", "Part obtained from New Loka for 20,000 standing at rank 2.");
const buy_rathbone_head = new Recipe("Buy Rathbone Head", "Buy a Rathbone Head from New Loka for 20,000 standing at rank 2.")
    .addInput(new_loka, 20000)
    .addOutput(rathbone_head, 1);
const rathbone_handle = new Item("Rathbone Handle", "Part obtained from Red Veil for 20,000 standing at rank 2.");
const buy_rathbone_handle = new Recipe("Buy Rathbone Handle", "Buy a Rathbone Handle from Red Veil for 20,000 standing at rank 2.")
    .addInput(red_veil, 20000)
    .addOutput(rathbone_handle, 1);
const rathbone = new Item("Rathbone", "Weapon obtained from crafting.")
const craft_rathbone = new Recipe("Craft Rathbone", "Craft a Rathbone from the blueprint.")
    .addInput(rathbone_blueprint, 1)
    .addInput(rathbone_head, 1)
    .addInput(rathbone_handle, 1)
    .addInput(credits, 25000)
    .addInput(circuits, 300)
    .addInput(control_module, 1)
    .addOutput(rathbone, 1);

// redeemer
// bp market 20k

const redeemer_blueprint = new Item("Redeemer Blueprint", "Blueprint obtained from Market for 20,000 credits.");
const buy_redeemer_blueprint = new Recipe("Buy Redeemer Blueprint", "Buy a Redeemer Blueprint from Market for 20,000 credits.")
    .addInput(credits, 20000)
    .addOutput(redeemer_blueprint, 1);
const redeemer = new Item("Redeemer", "Weapon obtained from crafting.")
const craft_redeemer = new Recipe("Craft Redeemer", "Craft a Redeemer from the blueprint.")
    .addInput(redeemer_blueprint, 1)
    .addInput(credits, 20000)
    .addInput(vasto, 1)
    .addInput(dual_skana, 1)
    .addInput(argon_crystal, 2)
    .addOutput(redeemer, 1);

// ripkas
// bp market 20k

const ripkas_blueprint = new Item("Ripkas Blueprint", "Blueprint obtained from Market for 20,000 credits.");
const buy_ripkas_blueprint = new Recipe("Buy Ripkas Blueprint", "Buy a Ripkas Blueprint from Market for 20,000 credits.")
    .addInput(credits, 20000)
    .addOutput(ripkas_blueprint, 1);
const ripkas = new Item("Ripkas", "Weapon obtained from crafting.")
const craft_ripkas = new Recipe("Craft Ripkas", "Craft a Ripkas from the blueprint.")
    .addInput(ripkas_blueprint, 1)
    .addInput(credits, 40000)
    .addInput(ankyros, 1)
    .addInput(dual_cleavers, 1)
    .addInput(tellurium, 2)
    .addInput(forma, 1)
    .addOutput(ripkas, 1);

// rubico
// bp market 20k

const rubico_blueprint = new Item("Rubico Blueprint", "Blueprint obtained from Market for 20,000 credits.");
const buy_rubico_blueprint = new Recipe("Buy Rubico Blueprint", "Buy a Rubico Blueprint from Market for 20,000 credits.")
    .addInput(credits, 20000)
    .addOutput(rubico_blueprint, 1);
const rubico = new Item("Rubico", "Weapon obtained from crafting.")
const craft_rubico = new Recipe("Craft Rubico", "Craft a Rubico from the blueprint.")
    .addInput(rubico_blueprint, 1)
    .addInput(credits, 20000)
    .addInput(salvage, 3800)
    .addInput(polymer_bundle, 1300)
    .addInput(rubedo, 900)
    .addInput(argon_crystal, 2)
    .addOutput(rubico, 1);

// rumblejack
// full weapon new war

const rumblejack = new Item("Rumblejack", "Weapon obtained from The New War.");

// sampotes
// bp teshins cave 60 pc

const sampotes_blueprint = new Item("Sampotes Blueprint", "Blueprint obtained from Teshin's Cave for 60 Pathos Clamp.");
const buy_sampotes_blueprint = new Recipe("Buy Sampotes Blueprint", "Buy a Sampotes Blueprint from Teshin's Cave for 60 Pathos Clamp.")
    .addInput(pathos_clamp, 60)
    .addOutput(sampotes_blueprint, 1);
const sampotes = new Item("Sampotes", "Weapon obtained from crafting.")
const craft_sampotes = new Recipe("Craft Sampotes", "Craft a Sampotes from the blueprint.")
    .addInput(sampotes_blueprint, 1)
    .addInput(credits, 30000)
    .addInput(silphsela, 20)
    .addInput(rune_marrow, 30)
    .addInput(kovnik, 40)
    .addInput(aggristone, 150)
    .addOutput(sampotes, 1);

// sancti castanas
// full weapon new loka 100k rank 5

const sancti_castanas = new Item("Sancti Castanas", "Weapon obtained from New Loka for 100,000 standing at rank 5.");
const buy_sancti_castanas = new Recipe("Buy Sancti Castanas", "Buy a Sancti Castanas from New Loka for 100,000 standing at rank 5.")
    .addInput(new_loka, 100000)
    .addOutput(sancti_castanas, 1);

// sancti magistar
// full weapon new loka 125k rank 5

const sancti_magistar = new Item("Sancti Magistar", "Weapon obtained from New Loka for 125,000 standing at rank 5.");
const buy_sancti_magistar = new Recipe("Buy Sancti Magistar", "Buy a Sancti Magistar from New Loka for 125,000 standing at rank 5.")
    .addInput(new_loka, 125000)
    .addOutput(sancti_magistar, 1);

// sancti tigris
// full weapon new loka 125k rank 5

const sancti_tigris = new Item("Sancti Tigris", "Weapon obtained from New Loka for 125,000 standing at rank 5.");
const buy_sancti_tigris = new Recipe("Buy Sancti Tigris", "Buy a Sancti Tigris from New Loka for 125,000 standing at rank 5.")
    .addInput(new_loka, 125000)
    .addOutput(sancti_tigris, 1);

// sarofang
// bp conjunction survival rotation a
// full parts conjunction survival rotation b

const sarofang_blueprint = new Item("Sarofang Blueprint", "Blueprint obtained from Conjunction Survival Rotation A.");
const sarofang_handle = new Item("Sarofang Handle", "Part obtained from Conjunction Survival Rotation B.");
const sarofang_blade = new Item("Sarofang Blade", "Part obtained from Conjunction Survival Rotation B.");
const sarofang = new Item("Sarofang", "Weapon obtained from crafting.")
const craft_sarofang = new Recipe("Craft Sarofang", "Craft a Sarofang from the blueprint.")
    .addInput(sarofang_blueprint, 1)
    .addInput(sarofang_handle, 1)
    .addInput(sarofang_blade, 1)
    .addInput(credits, 20000)
    .addInput(lua_thrax_plasm, 50)
    .addOutput(sarofang, 1);

// sarpa
// bp market 20k

const sarpa_blueprint = new Item("Sarpa Blueprint", "Blueprint obtained from Market for 20,000 credits.");
const buy_sarpa_blueprint = new Recipe("Buy Sarpa Blueprint", "Buy a Sarpa Blueprint from Market for 20,000 credits.")
    .addInput(credits, 20000)
    .addOutput(sarpa_blueprint, 1);
const sarpa = new Item("Sarpa", "Weapon obtained from crafting.")
const craft_sarpa = new Recipe("Craft Sarpa", "Craft a Sarpa from the blueprint.")
    .addInput(sarpa_blueprint, 1)
    .addInput(credits, 20000)
    .addInput(akstiletto, 1)
    .addInput(cryotic, 3300)
    .addInput(plastids, 1000)
    .addInput(control_module, 2)
    .addOutput(sarpa, 1);

// scindo
// bp market 15k

const scindo_blueprint = new Item("Scindo Blueprint", "Blueprint obtained from Market for 15,000 credits.");
const buy_scindo_blueprint = new Recipe("Buy Scindo Blueprint", "Buy a Scindo Blueprint from Market for 15,000 credits.")
    .addInput(credits, 15000)
    .addOutput(scindo_blueprint, 1);
const scindo = new Item("Scindo", "Weapon obtained from crafting.")
const craft_scindo = new Recipe("Craft Scindo", "Craft a Scindo from the blueprint.")
    .addInput(scindo_blueprint, 1)
    .addInput(credits, 30000)
    .addInput(gallium, 3)
    .addInput(salvage, 750)
    .addInput(circuits, 300)
    .addInput(alloy_plate, 500)
    .addOutput(scindo, 1);

// scoliac
// bp bio lab 50k

const scoliac_blueprint = new Item("Scoliac Blueprint", "Blueprint obtained from Bio Lab for 50,000 credits.");
const buy_scoliac_blueprint = new Recipe("Buy Scoliac Blueprint", "Buy a Scoliac Blueprint from Bio Lab for 50,000 credits.")
    .addInput(credits, 50000)
    .addOutput(scoliac_blueprint, 1);
const scoliac = new Item("Scoliac", "Weapon obtained from crafting.")
const craft_scoliac = new Recipe("Craft Scoliac", "Craft a Scoliac from the blueprint.")
    .addInput(scoliac_blueprint, 1)
    .addInput(credits, 30000)
    .addInput(mutagen_mass, 4)
    .addInput(nano_spores, 15000)
    .addInput(plastids, 1200)
    .addInput(forma, 1)
    .addOutput(scoliac, 1);

// scourge
// bp tenno lab 15k

const scourge_blueprint = new Item("Scourge Blueprint", "Blueprint obtained from Tenno Lab for 15,000 credits.");
const buy_scourge_blueprint = new Recipe("Buy Scourge Blueprint", "Buy a Scourge Blueprint from Tenno Lab for 15,000 credits.")
    .addInput(credits, 15000)
    .addOutput(scourge_blueprint, 1);
const scourge = new Item("Scourge", "Weapon obtained from crafting.")
const craft_scourge = new Recipe("Craft Scourge", "Craft a Scourge from the blueprint.")
    .addInput(scourge_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(nitain, 2)
    .addInput(circuits, 2500)
    .addInput(oxium, 350)
    .addInput(polymer_bundle, 2500)
    .addOutput(scourge, 1);

// secura dual cestra
// full weapon perrin 100k rank 5

const secura_dual_cesta = new Item("Secura Dual Cestra", "Weapon obtained from Perrin Sequence for 100,000 standing at rank 5.");
const buy_secura_dual_cesta = new Recipe("Buy Secura Dual Cestra", "Buy a Secura Dual Cestra from Perrin Sequence for 100,000 standing at rank 5.")
    .addInput(the_perrin_sequence, 100000)
    .addOutput(secura_dual_cesta, 1);

// secura lecta
// full weapon perrin 125k rank 5

const secura_lecta = new Item("Secura Lecta", "Weapon obtained from Perrin Sequence for 125,000 standing at rank 5.");
const buy_secura_lecta = new Recipe("Buy Secura Lecta", "Buy a Secura Lecta from Perrin Sequence for 125,000 standing at rank 5.")
    .addInput(the_perrin_sequence, 125000)
    .addOutput(secura_lecta, 1);

// secura penta
// full weapon perrin 125k rank 5

const secura_penta = new Item("Secura Penta", "Weapon obtained from Perrin Sequence for 125,000 standing at rank 5.");
const buy_secura_penta = new Recipe("Buy Secura Penta", "Buy a Secura Penta from Perrin Sequence for 125,000 standing at rank 5.")
    .addInput(the_perrin_sequence, 125000)
    .addOutput(secura_penta, 1);

// seer
// bp vor
// full parts vor

const seer_blueprint = new Item("Seer Blueprint", "Blueprint obtained from Captain Vor.");
const seer_barrel = new Item("Seer Barrel", "Part obtained from Captain Vor.");
const seer_receiver = new Item("Seer Receiver", "Part obtained from Captain Vor.");
const seer = new Item("Seer", "Weapon obtained from crafting.")
const craft_seer = new Recipe("Craft Seer", "Craft a Seer from the blueprint.")
    .addInput(seer_blueprint, 1)
    .addInput(seer_barrel, 1)
    .addInput(seer_receiver, 1)
    .addInput(credits, 15000)
    .addInput(orokin_cell, 2)
    .addOutput(seer, 1);

// sepulchrum
// bp father 4k
// parts bp father 2k

const sepulchrum_blueprint = new Item("Sepulchrum Blueprint", "Blueprint obtained from Father for 4,000 standing.");
const buy_sepulchrum_blueprint = new Recipe("Buy Sepulchrum Blueprint", "Buy a Sepulchrum Blueprint from Father for 4,000 standing.")
    .addInput(entrati, 4000)
    .addOutput(sepulchrum_blueprint, 1);
const sepulchrum_barrel_blueprint = new Item("Sepulchrum Barrel Blueprint", "Blueprint obtained from Father for 2,000 standing.");
const buy_sepulchrum_barrel_blueprint = new Recipe("Buy Sepulchrum Barrel Blueprint", "Buy a Sepulchrum Barrel Blueprint from Father for 2,000 standing.")
    .addInput(entrati, 2000)
    .addOutput(sepulchrum_barrel_blueprint, 1);
const sepulchrum_barrel = new Item("Sepulchrum Barrel", "Part obtained from crafting.")
const craft_sepulchrum_barrel = new Recipe("Craft Sepulchrum Barrel", "Craft a Sepulchrum Barrel from the blueprint.")
    .addInput(sepulchrum_barrel_blueprint, 1)
    .addInput(credits, 20000)
    .addInput(travocyte_alloy, 30)
    .addInput(purified_heciphron, 5)
    .addInput(pustulent_cognitive_nodule, 20)
    .addInput(morphics, 5)
    .addOutput(sepulchrum_barrel, 1);
const sepulchrum_receiver_blueprint = new Item("Sepulchrum Receiver Blueprint", "Blueprint obtained from Father for 2,000 standing.");
const buy_sepulchrum_receiver_blueprint = new Recipe("Buy Sepulchrum Receiver Blueprint", "Buy a Sepulchrum Receiver Blueprint from Father for 2,000 standing.")
    .addInput(entrati, 2000)
    .addOutput(sepulchrum_receiver_blueprint, 1);
const sepulchrum_receiver = new Item("Sepulchrum Receiver", "Part obtained from crafting.")
const craft_sepulchrum_receiver = new Recipe("Craft Sepulchrum Receiver", "Craft a Sepulchrum Receiver from the blueprint.")
    .addInput(sepulchrum_receiver_blueprint, 1)
    .addInput(credits, 20000)
    .addInput(coprite_alloy, 40)
    .addInput(purified_heciphron, 5)
    .addInput(dendrite_blastoma, 20)
    .addInput(trapezium_xenorhast, 2)
    .addOutput(sepulchrum_receiver, 1);
const sepulchrum = new Item("Sepulchrum", "Weapon obtained from crafting.")
const craft_sepulchrum = new Recipe("Craft Sepulchrum", "Craft a Sepulchrum from the blueprint.")
    .addInput(sepulchrum_blueprint, 1)
    .addInput(sepulchrum_barrel, 1)
    .addInput(sepulchrum_receiver, 1)
    .addInput(credits, 20000)
    .addInput(seriglass_shard, 1)
    .addOutput(sepulchrum, 1);

// serro
// bp energy lab 15k

const serro_blueprint = new Item("Serro Blueprint", "Blueprint obtained from Energy Lab for 15,000 credits.");
const buy_serro_blueprint = new Recipe("Buy Serro Blueprint", "Buy a Serro Blueprint from Energy Lab for 15,000 credits.")
    .addInput(credits, 15000)
    .addOutput(serro_blueprint, 1);
const serro = new Item("Serro", "Weapon obtained from crafting.")
const craft_serro = new Recipe("Craft Serro", "Craft a Serro from the blueprint.")
    .addInput(serro_blueprint, 1)
    .addInput(credits, 20000)
    .addInput(fieldron, 1)
    .addInput(circuits, 400)
    .addInput(salvage, 1000)
    .addInput(neural_sensor, 3)
    .addOutput(serro, 1);

// shaku
// bp tenno lab 15k

const shaku_blueprint = new Item("Shaku Blueprint", "Blueprint obtained from Tenno Lab for 15,000 credits.");
const buy_shaku_blueprint = new Recipe("Buy Shaku Blueprint", "Buy a Shaku Blueprint from Tenno Lab for 15,000 credits.")
    .addInput(credits, 15000)
    .addOutput(shaku_blueprint, 1);
const shaku = new Item("Shaku", "Weapon obtained from crafting.")
const craft_shaku = new Recipe("Craft Shaku", "Craft a Shaku from the blueprint.")
    .addInput(shaku_blueprint, 1)
    .addInput(credits, 20000)
    .addInput(ninkondi, 1)
    .addInput(forma, 1)
    .addInput(plastids, 1100)
    .addInput(morphics, 10)
    .addOutput(shaku, 1);

// shedu
// full weapon erra quest

const shedu = new Item("Shedu", "Weapon obtained from Erra quest.");

// sheev

const sheev = new Item("Sheev", "Weapon obtained from Daughter in October during a special event. 200 Mother Tokens required in total.");
const buy_sheev = new Recipe("Buy Sheev", "Buy a Sheev from Daughter for 200 Mother Tokens.")
    .addInput(mother_token, 200)
    .addOutput(sheev, 1);

// sibear
// bp market 15k

const sibear_blueprint = new Item("Sibear Blueprint", "Blueprint obtained from Market for 15,000 credits.");
const buy_sibear_blueprint = new Recipe("Buy Sibear Blueprint", "Buy a Sibear Blueprint from Market for 15,000 credits.")
    .addInput(credits, 15000)
    .addOutput(sibear_blueprint, 1);
const sibear = new Item("Sibear", "Weapon obtained from crafting.")
const craft_sibear = new Recipe("Craft Sibear", "Craft a Sibear from the blueprint.")
    .addInput(sibear_blueprint, 1)
    .addInput(credits, 30000)
    .addInput(magistar, 1)
    .addInput(cryotic, 30000)
    .addInput(alloy_plate, 50000)
    .addOutput(sibear, 1);

// sicarus
// full weapon market 20k

const sicarus = new Item("Sicarus", "Weapon obtained from Market for 20,000 credits.");
const buy_sicarus = new Recipe("Buy Sicarus", "Buy a Sicarus from Market for 20,000 credits.")
    .addInput(credits, 20000)
    .addOutput(sicarus, 1);

// sigma & octantis
// full weapon login reward 300 500 700

const sigma_octantis = new Item("Sigma & Octantis", "Weapon obtained from login reward at 300, 500, and 700 days.");

// silva & aegis
// bp tenno lab 15k

const silva_aegis_blueprint = new Item("Silva & Aegis Blueprint", "Blueprint obtained from Tenno Lab for 15,000 credits.");
const buy_silva_aegis_blueprint = new Recipe("Buy Silva & Aegis Blueprint", "Buy a Silva & Aegis Blueprint from Tenno Lab for 15,000 credits.")
    .addInput(credits, 15000)
    .addOutput(silva_aegis_blueprint, 1);
const silva_aegis = new Item("Silva & Aegis", "Weapon obtained from crafting.")
const craft_silva_aegis = new Recipe("Craft Silva & Aegis", "Craft a Silva & Aegis from the blueprint.")
    .addInput(silva_aegis_blueprint, 1)
    .addInput(credits, 20000)
    .addInput(gallium, 3)
    .addInput(alloy_plate, 600)
    .addInput(ferrite, 1200)
    .addInput(forma, 1)
    .addOutput(silva_aegis, 1);

// simulor
// bp simaris 75k standing

const simulor_blueprint = new Item("Simulor Blueprint", "Blueprint obtained from Cephalon Simaris for 75,000 standing.");
const buy_simulor_blueprint = new Recipe("Buy Simulor Blueprint", "Buy a Simulor Blueprint from Cephalon Simaris for 75,000 standing.")
    .addInput(cephalon_simaris, 75000)
    .addOutput(simulor_blueprint, 1);
const simulor = new Item("Simulor", "Weapon obtained from crafting.")
const craft_simulor = new Recipe("Craft Simulor", "Craft a Simulor from the blueprint.")
    .addInput(simulor_blueprint, 1)
    .addInput(credits, 20000)
    .addInput(ferrite, 1200)
    .addInput(polymer_bundle, 850)
    .addInput(orokin_cell, 1)
    .addInput(argon_crystal, 1)
    .addOutput(simulor, 1);

// sirocco
// full weapon new war

const sirocco = new Item("Sirocco", "Weapon obtained from The New War quest.");

// skana
// bp market 15k

const skana_blueprint = new Item("Skana Blueprint", "Blueprint obtained from Market for 15,000 credits.");
const buy_skana_blueprint = new Recipe("Buy Skana Blueprint", "Buy a Skana Blueprint from Market for 15,000 credits.")
    .addInput(credits, 15000)
    .addOutput(skana_blueprint, 1);
const skana = new Item("Skana", "Weapon obtained from crafting.")
const craft_skana = new Recipe("Craft Skana", "Craft a Skana from the blueprint.")
    .addInput(skana_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(salvage, 750)
    .addInput(plastids, 500)
    .addInput(alloy_plate, 1100)
    .addInput(morphics, 3)
    .addOutput(skana, 1);

// skiajati
// full weapon sacrifice quest

const skiajati = new Item("Skiajati", "Weapon obtained from The Sacrifice quest.");

// slaytra
// bp kahls garrison 30 stock rank 2

const slaytra_blueprint = new Item("Slaytra Blueprint", "Blueprint obtained from Kahl's Garrison for 30 Stock.");
const buy_slaytra_blueprint = new Recipe("Buy Slaytra Blueprint", "Buy a Slaytra Blueprint from Kahl's Garrison for 30 Stock.")
    .addInput(stock, 30)
    .addOutput(slaytra_blueprint, 1);
const slaytra = new Item("Slaytra", "Weapon obtained from crafting.")
const craft_slaytra = new Recipe("Craft Slaytra", "Craft a Slaytra from the blueprint.")
    .addInput(slaytra_blueprint, 1)
    .addInput(credits, 20000)
    .addInput(alloy_plate, 13000)
    .addInput(rubedo, 6300)
    .addInput(kuva, 2600)
    .addInput(tellurium, 8)
    .addOutput(slaytra, 1);

// snipetron

const snipetron = new Item("Snipetron", "Go read the wiki for this one.");

// snipetron vandal
// bp and full parts invasion

const snipetron_vandal_blueprint = new Item("Snipetron Vandal Blueprint", "Blueprint obtained from Invasions.");
const snipetron_vandal_barrel = new Item("Snipetron Vandal Barrel", "Part obtained from Invasions.");
const snipetron_vandal_receiver = new Item("Snipetron Vandal Receiver", "Part obtained from Invasions.");
const snipetron_vandal_stock = new Item("Snipetron Vandal Stock", "Part obtained from Invasions.");
const snipetron_vandal = new Item("Snipetron Vandal", "Weapon obtained from crafting.")
const craft_snipetron_vandal = new Recipe("Craft Snipetron Vandal", "Craft a Snipetron Vandal from the blueprint.")
    .addInput(snipetron_vandal_blueprint, 1)
    .addInput(snipetron_vandal_barrel, 1)
    .addInput(snipetron_vandal_receiver, 1)
    .addInput(snipetron_vandal_stock, 1)
    .addInput(credits, 25000)
    .addOutput(snipetron_vandal, 1);

// sobek
// bp market 25k

const sobek_blueprint = new Item("Sobek Blueprint", "Blueprint obtained from Market for 25,000 credits.");
const buy_sobek_blueprint = new Recipe("Buy Sobek Blueprint", "Buy a Sobek Blueprint from Market for 25,000 credits.")
    .addInput(credits, 25000)
    .addOutput(sobek_blueprint, 1);
const sobek = new Item("Sobek", "Weapon obtained from crafting.")
const craft_sobek = new Recipe("Craft Sobek", "Craft a Sobek from the blueprint.")
    .addInput(sobek_blueprint, 1)
    .addInput(credits, 25000)
    .addInput(neurodes, 5)
    .addInput(circuits, 500)
    .addInput(salvage, 900)
    .addInput(polymer_bundle, 400)
    .addOutput(sobek, 1);

// soma 
// bp market 50k

const soma_blueprint = new Item("Soma Blueprint", "Blueprint obtained from Market for 50,000 credits.");
const buy_soma_blueprint = new Recipe("Buy Soma Blueprint", "Buy a Soma Blueprint from Market for 50,000 credits.")
    .addInput(credits, 50000)
    .addOutput(soma_blueprint, 1);
const soma = new Item("Soma", "Weapon obtained from crafting.")
const craft_soma = new Recipe("Craft Soma", "Craft a Soma from the blueprint.")
    .addInput(soma_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(morphics, 7)
    .addInput(plastids, 850)
    .addInput(rubedo, 1200)
    .addInput(salvage, 8000)
    .addOutput(soma, 1);

// sonicor
// bp market 20k

const sonicor_blueprint = new Item("Sonicor Blueprint", "Blueprint obtained from Market for 20,000 credits.");
const buy_sonicor_blueprint = new Recipe("Buy Sonicor Blueprint", "Buy a Sonicor Blueprint from Market for 20,000 credits.")
    .addInput(credits, 20000)
    .addOutput(sonicor_blueprint, 1);
const sonicor = new Item("Sonicor", "Weapon obtained from crafting.")
const craft_sonicor = new Recipe("Craft Sonicor", "Craft a Sonicor from the blueprint.")
    .addInput(sonicor_blueprint, 1)
    .addInput(credits, 20000)
    .addInput(alloy_plate, 6500)
    .addInput(oxium, 600)
    .addInput(plastids, 2600)
    .addInput(argon_crystal, 2)
    .addOutput(sonicor, 1);

// spectra
// bp energy lab 15k

const spectra_blueprint = new Item("Spectra Blueprint", "Blueprint obtained from Energy Lab for 15,000 credits.");
const buy_spectra_blueprint = new Recipe("Buy Spectra Blueprint", "Buy a Spectra Blueprint from Energy Lab for 15,000 credits.")
    .addInput(credits, 15000)
    .addOutput(spectra_blueprint, 1);
const spectra = new Item("Spectra", "Weapon obtained from crafting.")
const craft_spectra = new Recipe("Craft Spectra", "Craft a Spectra from the blueprint.")
    .addInput(spectra_blueprint, 1)
    .addInput(credits, 25000)
    .addInput(fieldron, 3)
    .addInput(circuits, 700)
    .addInput(ferrite, 5000)
    .addInput(forma, 1)
    .addOutput(spectra, 1);

// spectra vandal
// bp and full parts certain railjack missions

const spectra_vandal_blueprint = new Item("Spectra Vandal Blueprint", "Blueprint obtained from certain Railjack missions.");
const spectra_vandal_barrel = new Item("Spectra Vandal Barrel", "Part obtained from certain Railjack missions.");
const spectra_vandal_receiver = new Item("Spectra Vandal Receiver", "Part obtained from certain Railjack missions.");
const spectra_vandal_stock = new Item("Spectra Vandal Stock", "Part obtained from certain Railjack missions.");
const spectra_vandal = new Item("Spectra Vandal", "Weapon obtained from crafting.")
const craft_spectra_vandal = new Recipe("Craft Spectra Vandal", "Craft a Spectra Vandal from the blueprint.")
    .addInput(spectra_vandal_blueprint, 1)
    .addInput(spectra_vandal_barrel, 1)
    .addInput(spectra_vandal_receiver, 1)
    .addInput(spectra_vandal_stock, 1)
    .addInput(credits, 25000)
    .addOutput(spectra_vandal, 1);

// spira
// bp market 20k

const spira_blueprint = new Item("Spira Blueprint", "Blueprint obtained from Market for 20,000 credits.");
const buy_spira_blueprint = new Recipe("Buy Spira Blueprint", "Buy a Spira Blueprint from Market for 20,000 credits.")
    .addInput(credits, 20000)
    .addOutput(spira_blueprint, 1);
const spira = new Item("Spira", "Weapon obtained from crafting.")
const craft_spira = new Recipe("Craft Spira", "Craft a Spira from the blueprint.")
    .addInput(spira_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(gallium, 5)
    .addInput(ferrite, 2500)
    .addInput(plastids, 800)
    .addInput(salvage, 4000)
    .addOutput(spira, 1);

// sporothrix
// bp and full parts isolation vaults

const sporothrix_blueprint = new Item("Sporothrix Blueprint", "Blueprint obtained from Isolation Vaults.");
const sporothrix_barrel = new Item("Sporothrix Barrel", "Part obtained from Isolation Vaults.");
const sporothrix_receiver = new Item("Sporothrix Receiver", "Part obtained from Isolation Vaults.");
const sporothrix_stock = new Item("Sporothrix Stock", "Part obtained from Isolation Vaults.");
const sporothrix = new Item("Sporothrix", "Weapon obtained from crafting.")
const craft_sporothrix = new Recipe("Craft Sporothrix", "Craft a Sporothrix from the blueprint.")
    .addInput(sporothrix_blueprint, 1)
    .addInput(sporothrix_barrel, 1)
    .addInput(sporothrix_receiver, 1)
    .addInput(sporothrix_stock, 1)
    .addInput(credits, 20000)
    .addInput(cranial_foremount, 2)
    .addOutput(sporothrix, 1);

// stahlta
// bp jackal
// full parts granum void

const stahlta_blueprint = new Item("Stahlta Blueprint", "Blueprint obtained from Jackal.");
const stahlta_barrel = new Item("Stahlta Barrel", "Part obtained from Nightmare Granum Void C Rotation.");
const stahlta_receiver = new Item("Stahlta Receiver", "Part obtained from Granum Void C Rotation.");
const stahlta_stock = new Item("Stahlta Stock", "Part obtained from Extended Granum Void C Rotation.");
const stahlta = new Item("Stahlta", "Weapon obtained from crafting.")
const craft_stahlta = new Recipe("Craft Stahlta", "Craft a Stahlta from the blueprint.")
    .addInput(stahlta_blueprint, 1)
    .addInput(stahlta_barrel, 1)
    .addInput(stahlta_receiver, 1)
    .addInput(stahlta_stock, 1)
    .addInput(credits, 30000)
    .addOutput(stahlta, 1);

// staticor
// bp energy lab 50k

const staticor_blueprint = new Item("Staticor Blueprint", "Blueprint obtained from Energy Lab for 50,000 credits.");
const buy_staticor_blueprint = new Recipe("Buy Staticor Blueprint", "Buy a Staticor Blueprint from Energy Lab for 50,000 credits.")
    .addInput(credits, 50000)
    .addOutput(staticor_blueprint, 1);
const staticor = new Item("Staticor", "Weapon obtained from crafting.")
const craft_staticor = new Recipe("Craft Staticor", "Craft a Staticor from the blueprint.")
    .addInput(staticor_blueprint, 1)
    .addInput(credits, 25000)
    .addInput(fieldron, 10)
    .addInput(alloy_plate, 6000)
    .addInput(ferrite, 9000)
    .addInput(nitain, 3)
    .addOutput(staticor, 1);

// steflos
// bp and full parts mirror defense

const steflos_blueprint = new Item("Steflos Blueprint", "Blueprint obtained from Mirror Defense.");
const steflos_barrel = new Item("Steflos Barrel", "Part obtained from Mirror Defense.");
const steflos_receiver = new Item("Steflos Receiver", "Part obtained from Mirror Defense.");
const steflos_stock = new Item("Steflos Stock", "Part obtained from Mirror Defense.");
const steflos = new Item("Steflos", "Weapon obtained from crafting.")
const craft_steflos = new Recipe("Craft Steflos", "Craft a Steflos from the blueprint.")
    .addInput(steflos_blueprint, 1)
    .addInput(steflos_barrel, 1)
    .addInput(steflos_receiver, 1)
    .addInput(steflos_stock, 1)
    .addInput(credits, 20000)
    .addInput(neurodes, 4)
    .addOutput(steflos, 1);

// stradavar
// bp market 20k

const stradavar_blueprint = new Item("Stradavar Blueprint", "Blueprint obtained from Market for 20,000 credits.");
const buy_stradavar_blueprint = new Recipe("Buy Stradavar Blueprint", "Buy a Stradavar Blueprint from Market for 20,000 credits.")
    .addInput(credits, 20000)
    .addOutput(stradavar_blueprint, 1);
const stradavar = new Item("Stradavar", "Weapon obtained from crafting.")
const craft_stradavar = new Recipe("Craft Stradavar", "Craft a Stradavar from the blueprint.")
    .addInput(stradavar_blueprint, 1)
    .addInput(credits, 20000)
    .addInput(ferrite, 15000)
    .addInput(polymer_bundle, 8000)
    .addInput(neural_sensor, 3)
    .addInput(argon_crystal, 2)
    .addOutput(stradavar, 1);

// stropha
// bp jackal
// full parts granum void

const stropha_blueprint = new Item("Stropha Blueprint", "Blueprint obtained from Jackal.");
const stropha_barrel = new Item("Stropha Barrel", "Part obtained from Granum Void C Rotation.");
const stropha_receiver = new Item("Stropha Receiver", "Part obtained from Extended Granum Void C Rotation.");
const stropha_stock = new Item("Stropha Stock", "Part obtained from Nightmare Granum Void C Rotation.");
const stropha_blade = new Item("Stropha Blade", "Part obtained from Granum Void C Rotation.");
const stropha = new Item("Stropha", "Weapon obtained from crafting.")
const craft_stropha = new Recipe("Craft Stropha", "Craft a Stropha from the blueprint.")
    .addInput(stropha_blueprint, 1)
    .addInput(stropha_barrel, 1)
    .addInput(stropha_receiver, 1)
    .addInput(stropha_stock, 1)
    .addInput(stropha_blade, 1)
    .addInput(credits, 30000)
    .addOutput(stropha, 1);

// strun
// full weapon market 25k

const strun = new Item("Strun", "Weapon obtained from Market for 25,000 credits.");
const buy_strun = new Recipe("Buy Strun", "Buy a Strun from Market for 25,000 credits.")
    .addInput(credits, 25000)
    .addOutput(strun, 1);

// strun wraith
// bp and full parts invasion

const strun_wraith_blueprint = new Item("Strun Wraith Blueprint", "Blueprint obtained from Invasion.");
const strun_wraith_barrel = new Item("Strun Wraith Barrel", "Part obtained from Invasion.");
const strun_wraith_receiver = new Item("Strun Wraith Receiver", "Part obtained from Invasion.");
const strun_wraith_stock = new Item("Strun Wraith Stock", "Part obtained from Invasion.");
const strun_wraith = new Item("Strun Wraith", "Weapon obtained from crafting.")
const craft_strun_wraith = new Recipe("Craft Strun Wraith", "Craft a Strun Wraith from the blueprint.")
    .addInput(strun_wraith_blueprint, 1)
    .addInput(strun_wraith_barrel, 1)
    .addInput(strun_wraith_receiver, 1)
    .addInput(strun_wraith_stock, 1)
    .addInput(credits, 25000)
    .addOutput(strun_wraith, 1);

// stubba
// bp ghoul purge bounties and ghoul rictus alpha

const stubba_blueprint = new Item("Stubba Blueprint", "Blueprint obtained from Ghoul Purge Bounties and Ghoul Rictus Alpha.");
const stubba = new Item("Stubba", "Weapon obtained from crafting.")
const craft_stubba = new Recipe("Craft Stubba", "Craft a Stubba from the blueprint.")
    .addInput(stubba_blueprint, 1)
    .addInput(credits, 20000)
    .addInput(grokdrul, 45)
    .addInput(coprite_alloy, 25)
    .addInput(ferrite, 4485)
    .addInput(neurodes, 2)
    .addOutput(stubba, 1);

// stug
// bp market 20k

const stug_blueprint = new Item("Stug Blueprint", "Blueprint obtained from Market for 20,000 credits.");
const buy_stug_blueprint = new Recipe("Buy Stug Blueprint", "Buy a Stug Blueprint from Market for 20,000 credits.")
    .addInput(credits, 20000)
    .addOutput(stug_blueprint, 1);
const stug = new Item("Stug", "Weapon obtained from crafting.")
const craft_stug = new Recipe("Craft Stug", "Craft a Stug from the blueprint.")
    .addInput(stug_blueprint, 1)
    .addInput(credits, 20000)
    .addInput(neurodes, 3)
    .addInput(gallium, 4)
    .addInput(salvage, 3000)
    .addInput(alloy_plate, 1200)
    .addOutput(stug, 1);

// sun & moon
// bp duviri paradox quest

const sun_moon_blueprint = new Item("Sun & Moon Blueprint", "Blueprint obtained from Duviri Paradox Quest.");
const sun_moon = new Item("Sun & Moon", "Weapon obtained from crafting.")
const craft_sun_moon = new Recipe("Craft Sun & Moon", "Craft a Sun & Moon from the blueprint.")
    .addInput(sun_moon_blueprint, 1)
    .addInput(credits, 30000)
    .addInput(kovnik, 100)
    .addInput(rune_marrow, 35)
    .addInput(lamentus, 40)
    .addInput(silphsela, 45)
    .addOutput(sun_moon, 1);

// supra
// bp dojo energy lab 15k

const supra_blueprint = new Item("Supra Blueprint", "Blueprint obtained from Dojo Energy Lab for 15,000 credits.");
const buy_supra_blueprint = new Recipe("Buy Supra Blueprint", "Buy a Supra Blueprint from Dojo Energy Lab for 15,000 credits.")
    .addInput(credits, 15000)
    .addOutput(supra_blueprint, 1);
const supra = new Item("Supra", "Weapon obtained from crafting.")
const craft_supra = new Recipe("Craft Supra", "Craft a Supra from the blueprint.")
    .addInput(supra_blueprint, 1)
    .addInput(credits, 25000)
    .addInput(fieldron, 7)
    .addInput(alloy_plate, 1000)
    .addInput(salvage, 7000)
    .addInput(forma, 1)
    .addOutput(supra, 1);

// supra vandal
// full weapon baro 500 ducats 275k credits

const supra_vandal = new Item("Supra Vandal", "Weapon obtained from Baro Ki'Teer for 500 Ducats and 275,000 credits.");
const buy_supra_vandal = new Recipe("Buy Supra Vandal", "Buy a Supra Vandal from Baro Ki'Teer for 500 Ducats and 275,000 credits.")
    .addInput(ducats, 500)
    .addInput(credits, 275000)
    .addOutput(supra_vandal, 1);

// syam
// bp teshins cave 50 pc

const syam_blueprint = new Item("Syam Blueprint", "Blueprint obtained from Teshin's Cave for 50 Pathos Clamp.");
const buy_syam_blueprint = new Recipe("Buy Syam Blueprint", "Buy a Syam Blueprint from Teshin's Cave for 50 Pathos Clamp.")
    .addInput(pathos_clamp, 50)
    .addOutput(syam_blueprint, 1);
const syam = new Item("Syam", "Weapon obtained from crafting.")
const craft_syam = new Recipe("Craft Syam", "Craft a Syam from the blueprint.")
    .addInput(syam_blueprint, 1)
    .addInput(credits, 30000)
    .addInput(maw_fang, 4)
    .addInput(rune_marrow, 30)
    .addInput(dracroot, 30)
    .addInput(eevani, 30)
    .addOutput(syam, 1);

// sybaris
// bp tenno lab 15k

const sybaris_blueprint = new Item("Sybaris Blueprint", "Blueprint obtained from Tenno Lab for 15,000 credits.");
const buy_sybaris_blueprint = new Recipe("Buy Sybaris Blueprint", "Buy a Sybaris Blueprint from Tenno Lab for 15,000 credits.")
    .addInput(credits, 15000)
    .addOutput(sybaris_blueprint, 1);
const sybaris = new Item("Sybaris", "Weapon obtained from crafting.")
const craft_sybaris = new Recipe("Craft Sybaris", "Craft a Sybaris from the blueprint.")
    .addInput(sybaris_blueprint, 1)
    .addInput(credits, 20000)
    .addInput(morphics, 2)
    .addInput(salvage, 800)
    .addInput(rubedo, 200)
    .addInput(forma, 1)
    .addOutput(sybaris, 1);

// sydon
// bp chem lab 15k

const sydon_blueprint = new Item("Sydon Blueprint", "Blueprint obtained from Chem Lab for 15,000 credits.");
const buy_sydon_blueprint = new Recipe("Buy Sydon Blueprint", "Buy a Sydon Blueprint from Chem Lab for 15,000 credits.")
    .addInput(credits, 15000)
    .addOutput(sydon_blueprint, 1);
const sydon = new Item("Sydon", "Weapon obtained from crafting.")
const craft_sydon = new Recipe("Craft Sydon", "Craft a Sydon from the blueprint.")
    .addInput(sydon_blueprint, 1)
    .addInput(credits, 20000)
    .addInput(detonite_injector, 5)
    .addInput(circuits, 1100)
    .addInput(salvage, 4000)
    .addInput(amphis, 1)
    .addOutput(sydon, 1);

// synapse
// bp bio lab 50k

const synapse_blueprint = new Item("Synapse Blueprint", "Blueprint obtained from Bio Lab for 50,000 credits.");
const buy_synapse_blueprint = new Recipe("Buy Synapse Blueprint", "Buy a Synapse Blueprint from Bio Lab for 50,000 credits.")
    .addInput(credits, 50000)
    .addOutput(synapse_blueprint, 1);
const synapse = new Item("Synapse", "Weapon obtained from crafting.")
const craft_synapse = new Recipe("Craft Synapse", "Craft a Synapse from the blueprint.")
    .addInput(synapse_blueprint, 1)
    .addInput(credits, 30000)
    .addInput(mutagen_mass, 5)
    .addInput(salvage, 30000)
    .addInput(circuits, 3500)
    .addInput(forma, 1)
    .addOutput(synapse, 1);

// synoid gammacor
// full weapon cephalon suda 100k

const synoid_gammacor = new Item("Synoid Gammacor", "Weapon obtained from Cephalon Suda for 100,000 Standing.");
const buy_synoid_gammacor = new Recipe("Buy Synoid Gammacor", "Buy a Synoid Gammacor from Cephalon Suda for 100,000 Standing.")
    .addInput(cephalon_suda, 100000)
    .addOutput(synoid_gammacor, 1);

// synoid heliocor
// full weapon cephalon suda 125k

const synoid_heliocor = new Item("Synoid Heliocor", "Weapon obtained from Cephalon Suda for 125,000 Standing.");
const buy_synoid_heliocor = new Recipe("Buy Synoid Heliocor", "Buy a Synoid Heliocor from Cephalon Suda for 125,000 Standing.")
    .addInput(cephalon_suda, 125000)
    .addOutput(synoid_heliocor, 1);

// synoid simulor
// full weapon cephalon suda 125k

const synoid_simulor = new Item("Synoid Simulor", "Weapon obtained from Cephalon Suda for 125,000 Standing.");
const buy_synoid_simulor = new Recipe("Buy Synoid Simulor", "Buy a Synoid Simulor from Cephalon Suda for 125,000 Standing.")
    .addInput(cephalon_suda, 125000)
    .addOutput(synoid_simulor, 1);

// talons
// bp tenno lab 15k

const talons_blueprint = new Item("Talons Blueprint", "Blueprint obtained from Tenno Lab for 15,000 credits.");
const buy_talons_blueprint = new Recipe("Buy Talons Blueprint", "Buy a Talons Blueprint from Tenno Lab for 15,000 credits.")
    .addInput(credits, 15000)
    .addOutput(talons_blueprint, 1);
const talons = new Item("Talons", "Weapon obtained from crafting.")
const craft_talons = new Recipe("Craft Talons", "Craft a Talons from the blueprint.")
    .addInput(talons_blueprint, 1)
    .addInput(credits, 20000)
    .addInput(control_module, 2)
    .addInput(ferrite, 1500)
    .addInput(oxium, 1200)
    .addInput(forma, 1)
    .addOutput(talons, 1);

// tatsu
// bp market 20k

const tatsu_blueprint = new Item("Tatsu Blueprint", "Blueprint obtained from Market for 20,000 credits.");
const buy_tatsu_blueprint = new Recipe("Buy Tatsu Blueprint", "Buy a Tatsu Blueprint from Market for 20,000 credits.")
    .addInput(credits, 20000)
    .addOutput(tatsu_blueprint, 1);
const tatsu = new Item("Tatsu", "Weapon obtained from crafting.")
const craft_tatsu = new Recipe("Craft Tatsu", "Craft a Tatsu from the blueprint.")
    .addInput(tatsu_blueprint, 1)
    .addInput(credits, 5000)
    .addInput(argon_crystal, 2)
    .addInput(kuva, 1200)
    .addInput(auroxium_alloy, 100)
    .addInput(hespazym_alloy, 100)
    .addOutput(tatsu, 1);

// tekko
// bp market 25k

const tekko_blueprint = new Item("Tekko Blueprint", "Blueprint obtained from Market for 25,000 credits.");
const buy_tekko_blueprint = new Recipe("Buy Tekko Blueprint", "Buy a Tekko Blueprint from Market for 25,000 credits.")
    .addInput(credits, 25000)
    .addOutput(tekko_blueprint, 1);
const tekko = new Item("Tekko", "Weapon obtained from crafting.")
const craft_tekko = new Recipe("Craft Tekko", "Craft a Tekko from the blueprint.")
    .addInput(tekko_blueprint, 1)
    .addInput(credits, 20000)
    .addInput(gallium, 5)
    .addInput(rubedo, 700)
    .addInput(polymer_bundle, 3300)
    .addInput(ankyros, 1)
    .addOutput(tekko, 1);

// telos akbolto
// full weapon arbiters of hexis 100k

const telos_akbolto = new Item("Telos Akbolto", "Weapon obtained from Arbiters of Hexis for 100,000 Standing.");
const buy_telos_akbolto = new Recipe("Buy Telos Akbolto", "Buy a Telos Akbolto from Arbiters of Hexis for 100,000 Standing.")
    .addInput(arbiters_of_hexis, 100000)
    .addOutput(telos_akbolto, 1);

// telos boltace
// full weapon arbiters of hexis 125k

const telos_boltace = new Item("Telos Boltace", "Weapon obtained from Arbiters of Hexis for 125,000 Standing.");
const buy_telos_boltace = new Recipe("Buy Telos Boltace", "Buy a Telos Boltace from Arbiters of Hexis for 125,000 Standing.")
    .addInput(arbiters_of_hexis, 125000)
    .addOutput(telos_boltace, 1);

// telos boltor
// full weapon arbiters of hexis 125k

const telos_boltor = new Item("Telos Boltor", "Weapon obtained from Arbiters of Hexis for 125,000 Standing.");
const buy_telos_boltor = new Recipe("Buy Telos Boltor", "Buy a Telos Boltor from Arbiters of Hexis for 125,000 Standing.")
    .addInput(arbiters_of_hexis, 125000)
    .addOutput(telos_boltor, 1);

// tenora
// bp tenno lab 15k

const tenora_blueprint = new Item("Tenora Blueprint", "Blueprint obtained from Tenno Lab for 15,000 credits.");
const buy_tenora_blueprint = new Recipe("Buy Tenora Blueprint", "Buy a Tenora Blueprint from Tenno Lab for 15,000 credits.")
    .addInput(credits, 15000)
    .addOutput(tenora_blueprint, 1);
const tenora = new Item("Tenora", "Weapon obtained from crafting.")
const craft_tenora = new Recipe("Craft Tenora", "Craft a Tenora from the blueprint.")
    .addInput(tenora_blueprint, 1)
    .addInput(credits, 20000)
    .addInput(neurodes, 5)
    .addInput(salvage, 15000)
    .addInput(rubedo, 4000)
    .addInput(forma, 1)
    .addOutput(tenora, 1);

// tetra
// bp market 30k

const tetra_blueprint = new Item("Tetra Blueprint", "Blueprint obtained from Market for 30,000 credits.");
const buy_tetra_blueprint = new Recipe("Buy Tetra Blueprint", "Buy a Tetra Blueprint from Market for 30,000 credits.")
    .addInput(credits, 30000)
    .addOutput(tetra_blueprint, 1);
const tetra = new Item("Tetra", "Weapon obtained from crafting.")
const craft_tetra = new Recipe("Craft Tetra", "Craft a Tetra from the blueprint.")
    .addInput(tetra_blueprint, 1)
    .addInput(credits, 30000)
    .addInput(control_module, 2)
    .addInput(alloy_plate, 400)
    .addInput(ferrite, 900)
    .addInput(polymer_bundle, 100)
    .addOutput(tetra, 1);

// tiberon
// bp market 20k

const tiberon_blueprint = new Item("Tiberon Blueprint", "Blueprint obtained from Market for 20,000 credits.");
const buy_tiberon_blueprint = new Recipe("Buy Tiberon Blueprint", "Buy a Tiberon Blueprint from Market for 20,000 credits.")
    .addInput(credits, 20000)
    .addOutput(tiberon_blueprint, 1);
const tiberon = new Item("Tiberon", "Weapon obtained from crafting.")
const craft_tiberon = new Recipe("Craft Tiberon", "Craft a Tiberon from the blueprint.")
    .addInput(tiberon_blueprint, 1)
    .addInput(credits, 20000)
    .addInput(latron, 1)
    .addInput(plastids, 650)
    .addInput(rubedo, 600)
    .addInput(forma, 1)
    .addOutput(tiberon, 1);

// tigris
// bp market 40k

const tigris_blueprint = new Item("Tigris Blueprint", "Blueprint obtained from Market for 40,000 credits.");
const buy_tigris_blueprint = new Recipe("Buy Tigris Blueprint", "Buy a Tigris Blueprint from Market for 40,000 credits.")
    .addInput(credits, 40000)
    .addOutput(tigris_blueprint, 1);
const tigris = new Item("Tigris", "Weapon obtained from crafting.")
const craft_tigris = new Recipe("Craft Tigris", "Craft a Tigris from the blueprint.")
    .addInput(tigris_blueprint, 1)
    .addInput(credits, 25000)
    .addInput(orokin_cell, 3)
    .addInput(circuits, 900)
    .addInput(salvage, 1200)
    .addInput(rubedo, 1200)
    .addOutput(tigris, 1);

// tonbo
// bp tenno lab 15k

const tonbo_blueprint = new Item("Tonbo Blueprint", "Blueprint obtained from Tenno Lab for 15,000 credits.");
const buy_tonbo_blueprint = new Recipe("Buy Tonbo Blueprint", "Buy a Tonbo Blueprint from Tenno Lab for 15,000 credits.")
    .addInput(credits, 15000)
    .addOutput(tonbo_blueprint, 1);
const tonbo = new Item("Tonbo", "Weapon obtained from crafting.")
const craft_tonbo = new Recipe("Craft Tonbo", "Craft a Tonbo from the blueprint.")
    .addInput(tonbo_blueprint, 1)
    .addInput(credits, 20000)
    .addInput(control_module, 2)
    .addInput(plastids, 800)
    .addInput(ferrite, 2000)
    .addInput(oxium, 100)
    .addOutput(tonbo, 1);

// tonkor
// bp market 30k

const tonkor_blueprint = new Item("Tonkor Blueprint", "Blueprint obtained from Market for 30,000 credits.");
const buy_tonkor_blueprint = new Recipe("Buy Tonkor Blueprint", "Buy a Tonkor Blueprint from Market for 30,000 credits.")
    .addInput(credits, 30000)
    .addOutput(tonkor_blueprint, 1);
const tonkor = new Item("Tonkor", "Weapon obtained from crafting.")
const craft_tonkor = new Recipe("Craft Tonkor", "Craft a Tonkor from the blueprint.")
    .addInput(tonkor_blueprint, 1)
    .addInput(credits, 60000)
    .addInput(salvage, 1500)
    .addInput(oxium, 200)
    .addInput(cryotic, 800)
    .addInput(argon_crystal, 2)
    .addOutput(tonkor, 1);

// torid
// bp dojo bio lab 15k

const torid_blueprint = new Item("Torid Blueprint", "Blueprint obtained from Bio Lab for 15,000 credits.");
const buy_torid_blueprint = new Recipe("Buy Torid Blueprint", "Buy a Torid Blueprint from Bio Lab for 15,000 credits.")
    .addInput(credits, 15000)
    .addOutput(torid_blueprint, 1);
const torid = new Item("Torid", "Weapon obtained from crafting.")
const craft_torid = new Recipe("Craft Torid", "Craft a Torid from the blueprint.")
    .addInput(torid_blueprint, 1)
    .addInput(credits, 30000)
    .addInput(mutagen_mass, 2)
    .addInput(salvage, 4500)
    .addInput(circuits, 600)
    .addInput(forma, 1)
    .addOutput(torid, 1);

// trumna
// bp father 5k standing rank 3
// parts bp father 2.5k standing rank 3

const trumna_blueprint = new Item("Trumna Blueprint", "Blueprint obtained from Father for 5,000 standing at rank 3.");
const buy_trumna_blueprint = new Recipe("Buy Trumna Blueprint", "Buy a Trumna Blueprint from Father for 5,000 standing at rank 3.")
    .addInput(entrati, 5000)
    .addOutput(trumna_blueprint, 1);
const trumna_barrel_blueprint = new Item("Trumna Barrel Blueprint", "Blueprint obtained from Father for 2,500 standing at rank 3.");
const buy_trumna_barrel_blueprint = new Recipe("Buy Trumna Barrel Blueprint", "Buy a Trumna Barrel Blueprint from Father for 2,500 standing at rank 3.")
    .addInput(entrati, 2500)
    .addOutput(trumna_barrel_blueprint, 1);
const trumna_stock_blueprint = new Item("Trumna Stock Blueprint", "Blueprint obtained from Father for 2,500 standing at rank 3.");
const buy_trumna_stock_blueprint = new Recipe("Buy Trumna Stock Blueprint", "Buy a Trumna Stock Blueprint from Father for 2,500 standing at rank 3.")
    .addInput(entrati, 2500)
    .addOutput(trumna_stock_blueprint, 1);
const trumna_receiver_blueprint = new Item("Trumna Receiver Blueprint", "Blueprint obtained from Father for 2,500 standing at rank 3.");
const buy_trumna_receiver_blueprint = new Recipe("Buy Trumna Receiver Blueprint", "Buy a Trumna Receiver Blueprint from Father for 2,500 standing at rank 3.")
    .addInput(entrati, 2500)
    .addOutput(trumna_receiver_blueprint, 1);
const trumna_barrel = new Item("Trumna Barrel", "Weapon part obtained from crafting.")
const craft_trumna_barrel = new Recipe("Craft Trumna Barrel", "Craft a Trumna Barrel from the blueprint.")
    .addInput(trumna_barrel_blueprint, 1)
    .addInput(credits, 20000)
    .addInput(adramal_alloy, 45)
    .addInput(marquise_veridos, 15)
    .addInput(sporulate_sac, 20)
    .addInput(orokin_cell, 5)
    .addOutput(trumna_barrel, 1);
const trumna_stock = new Item("Trumna Stock", "Weapon part obtained from crafting.")
const craft_trumna_stock = new Recipe("Craft Trumna Stock", "Craft a Trumna Stock from the blueprint.")
    .addInput(trumna_stock_blueprint, 1)
    .addInput(credits, 20000)
    .addInput(auroxium_alloy, 45)
    .addInput(lucent_teroglobe, 30)
    .addInput(saturated_muscle_mass, 20)
    .addInput(cabochon_embolos, 2)
    .addOutput(trumna_stock, 1);
const trumna_receiver = new Item("Trumna Receiver", "Weapon part obtained from crafting.")
const craft_trumna_receiver = new Recipe("Craft Trumna Receiver", "Craft a Trumna Receiver from the blueprint.")
    .addInput(trumna_receiver_blueprint, 1)
    .addInput(credits, 20000)
    .addInput(tempered_bapholite, 30)
    .addInput(purified_heciphron, 15)
    .addInput(waxen_sebum_deposit, 10)
    .addInput(argon_crystal, 1)
    .addOutput(trumna_receiver, 1);
const trumna = new Item("Trumna", "Weapon obtained from crafting.")
const craft_trumna = new Recipe("Craft Trumna", "Craft a Trumna from the blueprint.")
    .addInput(trumna_blueprint, 1)
    .addInput(credits, 20000)
    .addInput(trumna_barrel, 1)
    .addInput(trumna_stock, 1)
    .addInput(trumna_receiver, 1)
    .addInput(seriglass_shard, 1)
    .addOutput(trumna, 1);

// twin basolk
// bp market 15k

const twin_basolk_blueprint = new Item("Twin Basolk Blueprint", "Blueprint obtained from Market for 15,000 credits.");
const buy_twin_basolk_blueprint = new Recipe("Buy Twin Basolk Blueprint", "Buy a Twin Basolk Blueprint from Market for 15,000 credits.")
    .addInput(credits, 15000)
    .addOutput(twin_basolk_blueprint, 1);
const twin_basolk = new Item("Twin Basolk", "Weapon obtained from crafting.")
const craft_twin_basolk = new Recipe("Craft Twin Basolk", "Craft a Twin Basolk from the blueprint.")
    .addInput(twin_basolk_blueprint, 1)
    .addInput(credits, 30000)
    .addInput(dual_zoren, 1)
    .addInput(atomos, 1)
    .addInput(control_module, 2)
    .addOutput(twin_basolk, 1);

// twin grakatas
// bp market 20k

const twin_grakatas_blueprint = new Item("Twin Grakatas Blueprint", "Blueprint obtained from Market for 20,000 credits.");
const buy_twin_grakatas_blueprint = new Recipe("Buy Twin Grakatas Blueprint", "Buy a Twin Grakatas Blueprint from Market for 20,000 credits.")
    .addInput(credits, 20000)
    .addOutput(twin_grakatas_blueprint, 1);
const twin_grakatas = new Item("Twin Grakatas", "Weapon obtained from crafting.")
const craft_twin_grakatas = new Recipe("Craft Twin Grakatas", "Craft a Twin Grakatas from the blueprint.")
    .addInput(twin_grakatas_blueprint, 1)
    .addInput(credits, 30000)
    .addInput(grakata, 2)
    .addInput(forma, 1)
    .addOutput(twin_grakatas, 1);

// twin gremlins
// bp lech kril and vor assasination

const twin_gremlins_blueprint = new Item("Twin Gremlins Blueprint", "Blueprint obtained from Lech Kril and Vor Assassination.");
const twin_gremlins = new Item("Twin Gremlins", "Weapon obtained from crafting.")
const craft_twin_gremlins = new Recipe("Craft Twin Gremlins", "Craft a Twin Gremlins from the blueprint.")
    .addInput(twin_gremlins_blueprint, 1)
    .addInput(credits, 25000)
    .addInput(neurodes, 5)
    .addInput(circuits, 900)
    .addInput(salvage, 1500)
    .addInput(rubedo, 1200)
    .addOutput(twin_gremlins, 1);

// twin kohmak
// bp kela de thaym assasination

const twin_kohmak_blueprint = new Item("Twin Kohmak Blueprint", "Blueprint obtained from Kela De Thaym Assassination.");
const twin_kohmak = new Item("Twin Kohmak", "Weapon obtained from crafting.")
const craft_twin_kohmak = new Recipe("Craft Twin Kohmak", "Craft a Twin Kohmak from the blueprint.")
    .addInput(twin_kohmak_blueprint, 1)
    .addInput(credits, 20000)
    .addInput(kohmak, 2)
    .addInput(forma, 1)
    .addOutput(twin_kohmak, 1);

// twin krohkur
// bp chem lab 15k

const twin_krohkur_blueprint = new Item("Twin Krohkur Blueprint", "Blueprint obtained from Chem Lab for 15,000 credits.");
const buy_twin_krohkur_blueprint = new Recipe("Buy Twin Krohkur Blueprint", "Buy a Twin Krohkur Blueprint from Chem Lab for 15,000 credits.")
    .addInput(credits, 15000)
    .addOutput(twin_krohkur_blueprint, 1);
const twin_krohkur = new Item("Twin Krohkur", "Weapon obtained from crafting.")
const craft_twin_krohkur = new Recipe("Craft Twin Krohkur", "Craft a Twin Krohkur from the blueprint.")
    .addInput(twin_krohkur_blueprint, 1)
    .addInput(credits, 20000)
    .addInput(krohkur, 2)
    .addInput(forma, 1)
    .addInput(detonite_injector, 5)
    .addOutput(twin_krohkur, 1);

// twin rogga
// bp market 30k

const twin_rogga_blueprint = new Item("Twin Rogga Blueprint", "Blueprint obtained from Market for 30,000 credits.");
const buy_twin_rogga_blueprint = new Recipe("Buy Twin Rogga Blueprint", "Buy a Twin Rogga Blueprint from Market for 30,000 credits.")
    .addInput(credits, 30000)
    .addOutput(twin_rogga_blueprint, 1);
const twin_rogga = new Item("Twin Rogga", "Weapon obtained from crafting.")
const craft_twin_rogga = new Recipe("Craft Twin Rogga", "Craft a Twin Rogga from the blueprint.")
    .addInput(twin_rogga_blueprint, 1)
    .addInput(credits, 30000)
    .addInput(argon_crystal, 2)
    .addInput(kuva, 1600)
    .addInput(alloy_plate, 2600)
    .addInput(ferrite, 15000)
    .addOutput(twin_rogga, 1);

// twin vipers
// bp market 15k

const twin_vipers_blueprint = new Item("Twin Vipers Blueprint", "Blueprint obtained from Market for 15,000 credits.");
const buy_twin_vipers_blueprint = new Recipe("Buy Twin Vipers Blueprint", "Buy a Twin Vipers Blueprint from Market for 15,000 credits.")
    .addInput(credits, 15000)
    .addOutput(twin_vipers_blueprint, 1);
const twin_vipers = new Item("Twin Vipers", "Weapon obtained from crafting.")
const craft_twin_vipers = new Recipe("Craft Twin Vipers", "Craft a Twin Vipers from the blueprint.")
    .addInput(twin_vipers_blueprint, 1)
    .addInput(credits, 20000)
    .addInput(viper, 2)
    .addInput(orokin_cell, 1)
    .addOutput(twin_vipers, 1);

// twin vipers wraith
// bp and full parts invasions

const twin_vipers_wraith_blueprint = new Item("Twin Vipers Wraith Blueprint", "Blueprint obtained from Invasions.");
const twin_vipers_wraith_barrel = new Item("Twin Vipers Wraith Barrel", "Part obtained from Invasions.");
const twin_vipers_wraith_link = new Item("Twin Vipers Wraith Link", "Part obtained from Invasions.");
const twin_vipers_wraith_receiver = new Item("Twin Vipers Wraith Receiver", "Part obtained from Invasions.");
const twin_vipers_wraith = new Item("Twin Vipers Wraith", "Weapon obtained from crafting.")
const craft_twin_vipers_wraith = new Recipe("Craft Twin Vipers Wraith", "Craft a Twin Vipers Wraith from the blueprint.")
    .addInput(twin_vipers_wraith_blueprint, 1)
    .addInput(twin_vipers_wraith_barrel, 1)
    .addInput(twin_vipers_wraith_link, 1)
    .addInput(twin_vipers_wraith_receiver, 1)
    .addInput(credits, 25000)
    .addOutput(twin_vipers_wraith, 1);

// tysis
// bp market 30k

const tysis_blueprint = new Item("Tysis Blueprint", "Blueprint obtained from Market for 30,000 credits.");
const buy_tysis_blueprint = new Recipe("Buy Tysis Blueprint", "Buy a Tysis Blueprint from Market for 30,000 credits.")
    .addInput(credits, 30000)
    .addOutput(tysis_blueprint, 1);
const tysis = new Item("Tysis", "Weapon obtained from crafting.")
const craft_tysis = new Recipe("Craft Tysis", "Craft a Tysis from the blueprint.")
    .addInput(tysis_blueprint, 1)
    .addInput(credits, 30000)
    .addInput(neurodes, 2)
    .addInput(plastids, 400)
    .addInput(nano_spores, 900)
    .addInput(polymer_bundle, 100)
    .addOutput(tysis, 1);

// vastilok
// full weapon baro 550 ducats 325k credits

const vastilok = new Item("Vastilok", "Weapon obtained from Baro Ki'Teer for 550 Ducats and 325,000 credits.")
const buy_vastilok = new Recipe("Buy Vastilok", "Buy a Vastilok from Baro Ki'Teer for 550 Ducats and 325,000 credits.")
    .addInput(ducats, 550)
    .addInput(credits, 325000)
    .addOutput(vastilok, 1);

// vaykor hek
// full weapon steel meridian 125k standing

const vaykor_hek = new Item("Vaykor Hek", "Weapon obtained from Steel Meridian for 125,000 standing.")
const buy_vaykor_hek = new Recipe("Buy Vaykor Hek", "Buy a Vaykor Hek from Steel Meridian for 125,000 standing.")
    .addInput(steel_meridian, 125000)
    .addOutput(vaykor_hek, 1);

// vaykor marelok
// full weapon steel meridian 100k standing

const vaykor_marelok = new Item("Vaykor Marelok", "Weapon obtained from Steel Meridian for 100,000 standing.")
const buy_vaykor_marelok = new Recipe("Buy Vaykor Marelok", "Buy a Vaykor Marelok from Steel Meridian for 100,000 standing.")
    .addInput(steel_meridian, 100000)
    .addOutput(vaykor_marelok, 1);

// vaykor sydon
// full weapon steel meridian 125k standing

const vaykor_sydon = new Item("Vaykor Sydon", "Weapon obtained from Steel Meridian for 125,000 standing.")
const buy_vaykor_sydon = new Recipe("Buy Vaykor Sydon", "Buy a Vaykor Sydon from Steel Meridian for 125,000 standing.")
    .addInput(steel_meridian, 125000)
    .addOutput(vaykor_sydon, 1);

// vectis
// bp market 40k

const vectis_blueprint = new Item("Vectis Blueprint", "Blueprint obtained from Market for 40,000 credits.");
const buy_vectis_blueprint = new Recipe("Buy Vectis Blueprint", "Buy a Vectis Blueprint from Market for 40,000 credits.")
    .addInput(credits, 40000)
    .addOutput(vectis_blueprint, 1);
const vectis = new Item("Vectis", "Weapon obtained from crafting.")
const craft_vectis = new Recipe("Craft Vectis", "Craft a Vectis from the blueprint.")
    .addInput(vectis_blueprint, 1)
    .addInput(credits, 25000)
    .addInput(neurodes, 4)
    .addInput(orokin_cell, 4)
    .addInput(nano_spores, 3000)
    .addInput(rubedo, 2500)
    .addOutput(vectis, 1);

// veldt
// bp tenno lab 15k

const veldt_blueprint = new Item("Veldt Blueprint", "Blueprint obtained from Tenno Lab for 15,000 credits.");
const buy_veldt_blueprint = new Recipe("Buy Veldt Blueprint", "Buy a Veldt Blueprint from Tenno Lab for 15,000 credits.")
    .addInput(credits, 15000)
    .addOutput(veldt_blueprint, 1);
const veldt = new Item("Veldt", "Weapon obtained from crafting.")
const craft_veldt = new Recipe("Craft Veldt", "Craft a Veldt from the blueprint.")
    .addInput(veldt_blueprint, 1)
    .addInput(credits, 20000)
    .addInput(morphics, 10)
    .addInput(cryotic, 600)
    .addInput(ferrite, 7250)
    .addInput(forma, 1)
    .addOutput(veldt, 1);

// velocitus
// bp tenno lab 15k
// full parts syndicate 20k standing

const velocitus_blueprint = new Item("Velocitus Blueprint", "Blueprint obtained from Tenno Lab for 15,000 credits.");
const buy_velocitus_blueprint = new Recipe("Buy Velocitus Blueprint", "Buy a Velocitus Blueprint from Tenno Lab for 15,000 credits.")   
    .addInput(credits, 15000)
    .addOutput(velocitus_blueprint, 1);
const velocitus_barrel = new Item("Velocitus Barrel", "Part obtained from Cephalon Suda for 20,000 standing.")
const buy_velocitus_barrel = new Recipe("Buy Velocitus Barrel", "Buy a Velocitus Barrel from Cephalon Suda for 20,000 standing.")
    .addInput(cephalon_suda, 20000)
    .addOutput(velocitus_barrel, 1);
const velocitus_receiver = new Item("Velocitus Receiver", "Part obtained from Steel Meridian for 20,000 standing.")
const buy_velocitus_receiver = new Recipe("Buy Velocitus Receiver", "Buy a Velocitus Receiver from Steel Meridian for 20,000 standing.")
    .addInput(steel_meridian, 20000)
    .addOutput(velocitus_receiver, 1);
const velocitus_stock = new Item("Velocitus Stock", "Part obtained from Red Veil for 20,000 standing.")
const buy_velocitus_stock = new Recipe("Buy Velocitus Stock", "Buy a Velocitus Stock from Red Veil for 20,000 standing.")
    .addInput(red_veil, 20000)
    .addOutput(velocitus_stock, 1);
const velocitus = new Item("Velocitus", "Weapon obtained from crafting.")
const craft_velocitus = new Recipe("Craft Velocitus", "Craft a Velocitus from the blueprint.")
    .addInput(velocitus_blueprint, 1)
    .addInput(velocitus_barrel, 1)
    .addInput(velocitus_receiver, 1)
    .addInput(velocitus_stock, 1)
    .addInput(control_module, 2)
    .addInput(credits, 30000)
    .addOutput(velocitus, 1);

// velox
// bp market 25k
// full parts granum void

const velox_blueprint = new Item("Velox Blueprint", "Blueprint obtained from Market for 25,000 credits.");
const buy_velox_blueprint = new Recipe("Buy Velox Blueprint", "Buy a Velox Blueprint from Market for 25,000 credits.")
    .addInput(credits, 25000)
    .addOutput(velox_blueprint, 1);
const velox_barrel = new Item("Velox Barrel", "Part obtained from Granum Void C Rotation.")
const velox_receiver = new Item("Velox Receiver", "Part obtained from Extended Granum Void C Rotation.")
const velox = new Item("Velox", "Weapon obtained from crafting.")
const craft_velox = new Recipe("Craft Velox", "Craft a Velox from the blueprint.")
    .addInput(velox_blueprint, 1)
    .addInput(velox_barrel, 1)
    .addInput(velox_receiver, 1)
    .addInput(credits, 20000)
    .addInput(orokin_cell, 3)
    .addOutput(velox, 1);

// venato
// bp tenno lab 15k

const venato_blueprint = new Item("Venato Blueprint", "Blueprint obtained from Tenno Lab for 15,000 credits.");
const buy_venato_blueprint = new Recipe("Buy Venato Blueprint", "Buy a Venato Blueprint from Tenno Lab for 15,000 credits.")
    .addInput(credits, 15000)
    .addOutput(venato_blueprint, 1);
const venato = new Item("Venato", "Weapon obtained from crafting.")
const craft_venato = new Recipe("Craft Venato", "Craft a Venato from the blueprint.")
    .addInput(venato_blueprint, 1)
    .addInput(credits, 20000)
    .addInput(narmer_isoplast, 16)
    .addInput(anomaly_shard, 5)
    .addInput(exceptional_sentient_core, 5)
    .addInput(iradite, 60)
    .addOutput(venato, 1);

// venka
// bp tenno lab 15k

const venka_blueprint = new Item("Venka Blueprint", "Blueprint obtained from Tenno Lab for 15,000 credits.");
const buy_venka_blueprint = new Recipe("Buy Venka Blueprint", "Buy a Venka Blueprint from Tenno Lab for 15,000 credits.")
    .addInput(credits, 15000)
    .addOutput(venka_blueprint, 1);
const venka = new Item("Venka", "Weapon obtained from crafting.")
const craft_venka = new Recipe("Craft Venka", "Craft a Venka from the blueprint.")
    .addInput(venka_blueprint, 1)
    .addInput(credits, 20000)
    .addInput(gallium, 4)
    .addInput(salvage, 1000)
    .addInput(plastids, 500)
    .addInput(forma, 1)
    .addOutput(venka, 1);

// verdilac
// bp narmer bounties

const verdilac_blueprint = new Item("Verdilac Blueprint", "Blueprint obtained from Narmer Bounties.")
const verdilac = new Item("Verdilac", "Weapon obtained from crafting.")
const craft_verdilac = new Recipe("Craft Verdilac", "Craft a Verdilac from the blueprint.")
    .addInput(verdilac_blueprint, 1)
    .addInput(credits, 20000)
    .addInput(narmer_isoplast, 12)
    .addInput(mortus_horn, 20)
    .addInput(intact_sentient_core, 10)
    .addInput(star_amarast, 6)
    .addOutput(verdilac, 1);

// vericres
// full weapon baro 410 ducats 200k credits

const vericres = new Item("Vericres", "Weapon obtained from Baro Ki'Teer for 410 ducats and 200,000 credits.")
const buy_vericres = new Recipe("Buy Vericres", "Buy a Vericres from Baro Ki'Teer for 410 ducats and 200,000 credits.")
    .addInput(ducats, 410)
    .addInput(credits, 200000)
    .addOutput(vericres, 1);

// viper wraith
// full weapon baro 400 ducats 75k credits

const viper_wraith = new Item("Viper Wraith", "Weapon obtained from Baro Ki'Teer for 400 ducats and 75,000 credits.")
const buy_viper_wraith = new Recipe("Buy Viper Wraith", "Buy a Viper Wraith from Baro Ki'Teer for 400 ducats and 75,000 credits.")
    .addInput(ducats, 400)
    .addInput(credits, 75000)
    .addOutput(viper_wraith, 1);

// vitrica

const vitrica_blueprint = new Item("Vitrica Blueprint", "Buy a key and oubliette from Nightwave Offerings for 60 each. Fight the boss for the blueprint")
const buy_vitrica_blueprint = new Recipe("Buy Vitrica Blueprint", "Buy a Vitrica Blueprint from Nightwave Offerings for 120 total Nora Creds.")
    .addInput(nora_cred, 120)
    .addOutput(vitrica_blueprint, 1);
const vitrica = new Item("Vitrica", "Weapon obtained from crafting.")
const craft_vitrica = new Recipe("Craft Vitrica", "Craft a Vitrica from the blueprint.")
    .addInput(vitrica_blueprint, 1)
    .addInput(credits, 20000)
    .addInput(orokin_cell, 15)
    .addInput(oxium, 925)
    .addInput(tempered_bapholite, 60)
    .addInput(purified_heciphron, 10)
    .addOutput(vitrica, 1);

// volnus
// bp market 20k

const volnus_blueprint = new Item("Volnus Blueprint", "Blueprint obtained from Market for 20,000 credits.");
const buy_volnus_blueprint = new Recipe("Buy Volnus Blueprint", "Buy a Volnus Blueprint from Market for 20,000 credits.")
    .addInput(credits, 20000)
    .addOutput(volnus_blueprint, 1);
const volnus = new Item("Volnus", "Weapon obtained from crafting.")
const craft_volnus = new Recipe("Craft Volnus", "Craft a Volnus from the blueprint.")
    .addInput(volnus_blueprint, 1)
    .addInput(credits, 20000)
    .addInput(oxium, 225)
    .addInput(argon_crystal, 2)
    .addInput(alloy_plate, 11000)
    .addInput(cryotic, 875)
    .addOutput(volnus, 1);

// vulkar
// bp market 20k

const vulkar_blueprint = new Item("Vulkar Blueprint", "Blueprint obtained from Market for 20,000 credits.");
const buy_vulkar_blueprint = new Recipe("Buy Vulkar Blueprint", "Buy a Vulkar Blueprint from Market for 20,000 credits.")
    .addInput(credits, 20000)
    .addOutput(vulkar_blueprint, 1);
const vulkar = new Item("Vulkar", "Weapon obtained from crafting.")
const craft_vulkar = new Recipe("Craft Vulkar", "Craft a Vulkar from the blueprint.")
    .addInput(vulkar_blueprint, 1)
    .addInput(credits, 20000)
    .addInput(morphics, 5)
    .addInput(circuits, 800)
    .addInput(salvage, 1200)
    .addInput(plastids, 800)
    .addOutput(vulkar, 1);

// vulkar wraith
// full weapon baro 450 ducats 300k credits

const vulkar_wraith = new Item("Vulkar Wraith", "Weapon obtained from Baro Ki'Teer for 450 ducats and 300,000 credits.")
const buy_vulkar_wraith = new Recipe("Buy Vulkar Wraith", "Buy a Vulkar Wraith from Baro Ki'Teer for 450 ducats and 300,000 credits.")
    .addInput(ducats, 450)
    .addInput(credits, 300000)
    .addOutput(vulkar_wraith, 1);

// war
// bp stalker

const war_blueprint = new Item("War Blueprint", "Blueprint obtained from Shadow Stalker")
const war = new Item("War", "Blueprint obtained from Shadow Stalker")
const craft_war = new Recipe("Craft War", "Craft a War from the blueprint.")
    .addInput(war_blueprint, 1)
    .addInput(broken_war, 1)
    .addInput(credits, 20000)
    .addInput(polymer_bundle, 2300)
    .addInput(rubedo, 1400)
    .addInput(nitain, 5)
    .addOutput(war, 1);

// wolf sledge
// bp and full parts wolf of saturn six

const wolf_sledge_blueprint = new Item("Wolf Sledge Blueprint", "Blueprint obtained from Wolf of Saturn Six.")
const wolf_sledge_head = new Item("Wolf Sledge Head", "Blueprint obtained from Wolf of Saturn Six.")
const wolf_sledge_handle = new Item("Wolf Sledge Handle", "Blueprint obtained from Wolf of Saturn Six.")
const wolf_sledge_motor = new Item("Wolf Sledge Motor", "Blueprint obtained from Wolf of Saturn Six.")
const wolf_sledge = new Item("Wolf Sledge", "Weapon obtained from crafting.")
const craft_wolf_sledge = new Recipe("Craft Wolf Sledge", "Craft a Wolf Sledge from the blueprint.")
    .addInput(wolf_sledge_blueprint, 1)
    .addInput(wolf_sledge_head, 1)
    .addInput(wolf_sledge_handle, 1)
    .addInput(wolf_sledge_motor, 1)
    .addInput(nitain, 5)
    .addInput(credits, 30000)
    .addOutput(wolf_sledge, 1);

// xoris
// full weapon deadlock protocol quest

const xoris = new Item("Xoris", "Weapon obtained from Deadlock Protocol quest.")

// zakti
// bp tenno lab 15k

const zakti_blueprint = new Item("Zakti Blueprint", "Blueprint obtained from Tenno Lab for 15,000 credits.");
const buy_zakti_blueprint = new Recipe("Buy Zakti Blueprint", "Buy a Zakti Blueprint from Tenno Lab for 15,000 credits.")
    .addInput(credits, 15000)
    .addOutput(zakti_blueprint, 1);
const zakti = new Item("Zakti", "Weapon obtained from crafting.")
const craft_zakti = new Recipe("Craft Zakti", "Craft a Zakti from the blueprint.")
    .addInput(zakti_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(control_module, 8)
    .addInput(plastids, 350)
    .addInput(alloy_plate, 6500)
    .addInput(nano_spores, 5000)
    .addOutput(zakti, 1);

// zarr
// bp market 30k

const zarr_blueprint = new Item("Zarr Blueprint", "Blueprint obtained from Market for 30,000 credits.");
const buy_zarr_blueprint = new Recipe("Buy Zarr Blueprint", "Buy a Zarr Blueprint from Market for 30,000 credits.")
    .addInput(credits, 30000)
    .addOutput(zarr_blueprint, 1);
const zarr = new Item("Zarr", "Weapon obtained from crafting.")
const craft_zarr = new Recipe("Craft Zarr", "Craft a Zarr from the blueprint.")
    .addInput(zarr_blueprint, 1)
    .addInput(credits, 30000)
    .addInput(kuva, 1800)
    .addInput(alloy_plate, 2400)
    .addInput(salvage, 5500)
    .addInput(drakgoon, 1)
    .addOutput(zarr, 1);

// zenistar
// full weapon login reward 100 300 500

const zenistar = new Item("Zenistar", "Weapon obtained from login rewards.")

// zenith
// full weapon login reward 100 300 500

const zenith = new Item("Zenith", "Weapon obtained from login rewards.")

// zhuge
// bp market 20k

const zhuge_blueprint = new Item("Zhuge Blueprint", "Blueprint obtained from Market for 20,000 credits.");
const buy_zhuge_blueprint = new Recipe("Buy Zhuge Blueprint", "Buy a Zhuge Blueprint from Market for 20,000 credits.")
    .addInput(credits, 20000)
    .addOutput(zhuge_blueprint, 1);
const zhuge = new Item("Zhuge", "Weapon obtained from crafting.")
const craft_zhuge = new Recipe("Craft Zhuge", "Craft a Zhuge from the blueprint.")
    .addInput(zhuge_blueprint, 1)
    .addInput(credits, 20000)
    .addInput(cryotic, 2800)
    .addInput(polymer_bundle, 900)
    .addInput(nitain, 2)
    .addInput(argon_crystal, 2)
    .addOutput(zhuge, 1);

// zylok
// full weapon baro 500 ducats 200k credits

const zylok = new Item("Zylok", "Weapon obtained from Baro Ki'Teer for 500 ducats and 200,000 credits.")
const buy_zylok = new Recipe("Buy Zylok", "Buy a Zylok from Baro Ki'Teer for 500 ducats and 200,000 credits.")
    .addInput(ducats, 500)
    .addInput(credits, 200000)
    .addOutput(zylok, 1);

// zymos
// bp father 2000 standing
// parts bp father 1000 standing

const zymos_blueprint = new Item("Zymos Blueprint", "Blueprint obtained from Father for 2000 standing.")
const buy_zymos_blueprint = new Recipe("Buy Zymos Blueprint", "Buy a Zymos Blueprint from Father for 2000 standing.")
    .addInput(entrati, 2000)
    .addOutput(zymos_blueprint, 1);
const zymos_barrel_blueprint = new Item("Zymos Barrel Blueprint", "Blueprint obtained from Father for 1000 standing.")
const buy_zymos_barrel_blueprint = new Recipe("Buy Zymos Barrel Blueprint", "Buy a Zymos Barrel Blueprint from Father for 1000 standing.")
    .addInput(entrati, 1000)
    .addOutput(zymos_barrel_blueprint, 1);
const zymos_receiver_blueprint = new Item("Zymos Receiver Blueprint", "Blueprint obtained from Father for 1000 standing.")
const buy_zymos_receiver_blueprint = new Recipe("Buy Zymos Receiver Blueprint", "Buy a Zymos Receiver Blueprint from Father for 1000 standing.")
    .addInput(entrati, 1000)
    .addOutput(zymos_receiver_blueprint, 1);
const zymos_barrel = new Item("Zymos Barrel", "Weapon part obtained from crafting.")
const craft_zymos_barrel = new Recipe("Craft Zymos Barrel", "Craft a Zymos Barrel from the blueprint.")
    .addInput(zymos_barrel_blueprint, 1)
    .addInput(credits, 20000)
    .addInput(tempered_bapholite, 20)
    .addInput(purified_heciphron, 5)
    .addInput(dendrite_blastoma, 8)
    .addInput(neurodes, 4)
    .addOutput(zymos_barrel, 1);
const zymos_receiver = new Item("Zymos Receiver", "Weapon part obtained from crafting.")
const craft_zymos_receiver = new Recipe("Craft Zymos Receiver", "Craft a Zymos Receiver from the blueprint.")
    .addInput(zymos_receiver_blueprint, 1)
    .addInput(credits, 20000)
    .addInput(adramal_alloy, 20)
    .addInput(purified_heciphron, 5)
    .addInput(pustulent_cognitive_nodule, 8)
    .addInput(morphics, 5)
    .addOutput(zymos_receiver, 1);
const zymos = new Item("Zymos", "Weapon obtained from crafting.")
const craft_zymos = new Recipe("Craft Zymos", "Craft a Zymos from the blueprint.")
    .addInput(zymos_blueprint, 1)
    .addInput(credits, 20000)
    .addInput(zymos_barrel, 1)
    .addInput(zymos_receiver, 1)
    .addOutput(zymos, 1);

// the sentinels section
// ---------------------
// ---------------------
// ---------------------

// carrier
// bp market 100k

const carrier_blueprint = new Item("Carrier Blueprint", "Blueprint obtained from Market for 100,000 credits.");
const buy_carrier_blueprint = new Recipe("Buy Carrier Blueprint", "Buy a Carrier Blueprint from Market for 100,000 credits.")
    .addInput(credits, 100000)
    .addOutput(carrier_blueprint, 1);
const carrier = new Item("Carrier", "Sentinel obtained from crafting.")
const sweeper = new Item("Sweeper", "Sentinel weapon obtained from crafting.")
const craft_carrier = new Recipe("Craft Carrier", "Craft a Carrier from the blueprint.")
    .addInput(carrier_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(alloy_plate, 1000)
    .addInput(circuits, 400)
    .addInput(nano_spores, 1500)
    .addInput(control_module, 3)
    .addOutput(carrier, 1)
    .addOutput(sweeper, 1);

// dethcube
// bp market 100k
// comes with deth machine rifle

const dethcube_blueprint = new Item("Dethcube Blueprint", "Blueprint obtained from Market for 100,000 credits.");
const buy_dethcube_blueprint = new Recipe("Buy Dethcube Blueprint", "Buy a Dethcube Blueprint from Market for 100,000 credits.")
    .addInput(credits, 100000)
    .addOutput(dethcube_blueprint, 1);
const dethcube = new Item("Dethcube", "Sentinel obtained from crafting.")
const deth_machine_rifle = new Item("Deth Machine Rifle", "Sentinel weapon obtained from crafting.")
const craft_dethcube = new Recipe("Craft Dethcube", "Craft a Dethcube from the blueprint.")
    .addInput(dethcube_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(alloy_plate, 500)
    .addInput(circuits, 400)
    .addInput(nano_spores, 200)
    .addInput(control_module, 1)
    .addOutput(dethcube, 1)
    .addOutput(deth_machine_rifle, 1);

// diriga
// bp market 100k
// comes with vulklok

const diriga_blueprint = new Item("Diriga Blueprint", "Blueprint obtained from Market for 100,000 credits.");
const buy_diriga_blueprint = new Recipe("Buy Diriga Blueprint", "Buy a Diriga Blueprint from Market for 100,000 credits.")
    .addInput(credits, 100000)
    .addOutput(diriga_blueprint, 1);
const diriga = new Item("Diriga", "Sentinel obtained from crafting.")
const vulklok = new Item("Vulklok", "Sentinel weapon obtained from crafting.")
const craft_diriga = new Recipe("Craft Diriga", "Craft a Diriga from the blueprint.")
    .addInput(diriga_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(alloy_plate, 500)
    .addInput(argon_crystal, 2)
    .addInput(plastids, 350)
    .addInput(polymer_bundle, 500)
    .addOutput(diriga, 1)
    .addOutput(vulklok, 1);

// djinn
// bp bio lab 50k
// comes with stinger

const djinn_blueprint = new Item("Djinn Blueprint", "Blueprint obtained from Bio Lab in Clan Dojo for 50,000 credits.");
const buy_djinn_blueprint = new Recipe("Buy Djinn Blueprint", "Buy a Djinn Blueprint from Bio Lab in Clan Dojo for 50,000 credits.")
    .addInput(credits, 50000)
    .addOutput(djinn_blueprint, 1);
const djinn = new Item("Djinn", "Sentinel obtained from crafting.")
const stinger = new Item("Stinger", "Sentinel weapon obtained from crafting.")
const craft_djinn = new Recipe("Craft Djinn", "Craft a Djinn from the blueprint.")  
    .addInput(djinn_blueprint, 1)
    .addInput(credits, 30000)
    .addInput(mutagen_mass, 6)
    .addInput(salvage, 30000)
    .addInput(circuits, 3500)
    .addInput(forma, 2)
    .addOutput(djinn, 1)
    .addOutput(stinger, 1);

// helios
// bp energy lab 50k
// comes with deconstructor

const helios_blueprint = new Item("Helios Blueprint", "Blueprint obtained from Energy Lab in Clan Dojo for 50,000 credits.");
const buy_helios_blueprint = new Recipe("Buy Helios Blueprint", "Buy a Helios Blueprint from Energy Lab in Clan Dojo for 50,000 credits.")
    .addInput(credits, 50000)
    .addOutput(helios_blueprint, 1);
const helios = new Item("Helios", "Sentinel obtained from crafting.")
const deconstructor = new Item("Deconstructor", "Sentinel weapon obtained from crafting.")
const craft_helios = new Recipe("Craft Helios", "Craft a Helios from the blueprint.")   
    .addInput(helios_blueprint, 1)
    .addInput(credits, 5000)
    .addInput(fieldron, 10)
    .addInput(oxium, 300)
    .addInput(ferrite, 5000)
    .addInput(forma, 1)
    .addOutput(helios, 1)
    .addOutput(deconstructor, 1);

// nautilus
// bp and full parts from neptune proxima missions
// comes with verglas

const nautilus_blueprint = new Item("Nautilus Blueprint", "Blueprint obtained from Neptune Proxima missions.");
const nautilus_systems = new Item("Nautilus Systems", "Sentinel part obtained from Neptune Proxima missions.");
const nautilus_cerebrum = new Item("Nautilus Cerebrum", "Sentinel part obtained from Neptune Proxima missions.");
const nautilus_carapace = new Item("Nautilus Carapace", "Sentinel part obtained from Neptune Proxima missions.");
const nautilus = new Item("Nautilus", "Sentinel obtained from crafting.")
const verglas = new Item("Verglas", "Sentinel weapon obtained from crafting.")
const craft_nautilus = new Recipe("Craft Nautilus", "Craft a Nautilus from the blueprint.")
    .addInput(nautilus_blueprint, 1)
    .addInput(nautilus_systems, 1)
    .addInput(nautilus_cerebrum, 1)
    .addInput(nautilus_carapace, 1)
    .addInput(nullstones, 5)
    .addInput(credits, 15000)
    .addOutput(nautilus, 1)
    .addOutput(verglas, 1);

// oxylus
// bp The Business in Fortuna 20k rank 5
// comes with multron

const oxylus_blueprint = new Item("Oxylus Blueprint", "Blueprint obtained from The Business in Fortuna for 20,000 standing at rank 5.");
const buy_oxylus_blueprint = new Recipe("Buy Oxylus Blueprint", "Buy an Oxylus Blueprint from The Business in Fortuna for 20,000 standing at rank 5.")
    .addInput(solaris_united, 20000)
    .addOutput(oxylus_blueprint, 1);
const oxylus = new Item("Oxylus", "Sentinel obtained from crafting.")
const multron = new Item("Multron", "Sentinel weapon obtained from crafting.")
const craft_oxylus = new Recipe("Craft Oxylus", "Craft an Oxylus from the blueprint.")
    .addInput(oxylus_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(goblite_tears, 15)
    .addInput(axidrol_alloy, 45)
    .addInput(scrap, 40)
    .addInput(longwinder_lathe_coagulant, 10)
    .addOutput(oxylus, 1)
    .addOutput(multron, 1);

// prisma shade
// full weapon baro 500 ducats 300k credits
// comes with prisma burst laser

const prisma_shade = new Item("Prisma Shade", "Sentinel obtained from Baro Ki'Teer for 500 ducats and 300,000 credits.");
const prisma_burst_laser = new Item("Prisma Burst Laser", "Sentinel weapon obtained free with Prisma Shade.");
const buy_prisma_shade = new Recipe("Buy Prisma Shade", "Buy a Prisma Shade from Baro Ki'Teer for 500 ducats and 300,000 credits.")
    .addInput(ducats, 500)
    .addInput(credits, 300000)
    .addOutput(prisma_shade, 1)
    .addOutput(prisma_burst_laser, 1);


// shade
// bp market 100k
// comes with burst laser

const shade_blueprint = new Item("Shade Blueprint", "Blueprint obtained from Market for 100,000 credits.");
const buy_shade_blueprint = new Recipe("Buy Shade Blueprint", "Buy a Shade Blueprint from Market for 100,000 credits.")
    .addInput(credits, 100000)
    .addOutput(shade_blueprint, 1);
const shade = new Item("Shade", "Sentinel obtained from crafting.")
const burst_laser = new Item("Burst Laser", "Sentinel weapon obtained from crafting.")
const craft_shade = new Recipe("Craft Shade", "Craft a Shade from the blueprint.")  
    .addInput(shade_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(alloy_plate, 500)
    .addInput(circuits, 400)
    .addInput(nano_spores, 200)
    .addInput(control_module, 1)
    .addOutput(shade, 1)
    .addOutput(burst_laser, 1);

// taxon
// bp market 5k
// comes with artax

const taxon_blueprint = new Item("Taxon Blueprint", "Blueprint obtained from Market for 5,000 credits.");
const buy_taxon_blueprint = new Recipe("Buy Taxon Blueprint", "Buy a Taxon Blueprint from Market for 5,000 credits.")
    .addInput(credits, 5000)
    .addOutput(taxon_blueprint, 1);
const taxon = new Item("Taxon", "Sentinel obtained from crafting.")
const artax = new Item("Artax", "Sentinel weapon obtained from crafting.")
const craft_taxon = new Recipe("Craft Taxon", "Craft a Taxon from the blueprint.")
    .addInput(taxon_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(ferrite, 500)
    .addInput(polymer_bundle, 200)
    .addInput(rubedo, 200)
    .addInput(neurodes, 1)
    .addOutput(taxon, 1)
    .addOutput(artax, 1);

// wyrm
// bp market 100k
// comes with laser rifle

const wyrm_blueprint = new Item("Wyrm Blueprint", "Blueprint obtained from Market for 100,000 credits.");
const buy_wyrm_blueprint = new Recipe("Buy Wyrm Blueprint", "Buy a Wyrm Blueprint from Market for 100,000 credits.")
    .addInput(credits, 100000)
    .addOutput(wyrm_blueprint, 1);
const wyrm = new Item("Wyrm", "Sentinel obtained from crafting.")
const laser_rifle = new Item("Laser Rifle", "Sentinel weapon obtained from crafting.")
const craft_wyrm = new Recipe("Craft Wyrm", "Craft a Wyrm from the blueprint.")
    .addInput(wyrm_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(alloy_plate, 500)
    .addInput(circuits, 400)
    .addInput(nano_spores, 200)
    .addInput(control_module, 1)
    .addOutput(wyrm, 1)
    .addOutput(laser_rifle, 1);

// the robot dogs section
// ------------------

// bhaira
// full hound from defeating a sister
// comes with lacerten

const bhaira = new Item("Bhaira", "Hound obtained from defeating a sister.")
const lacerten = new Item("Lacerten", "Hound weapon obtained with Bhaira.")

// dorma
// full hound from defeating a sister
// comes with batoten

const dorma = new Item("Dorma", "Hound obtained from defeating a sister.")
const batoten = new Item("Batoten", "Hound weapon obtained with Dorma.")

// hec
// full hound from defeating a sister
// comes with akaten

const hec = new Item("Hec", "Hound obtained from defeating a sister.")
const akaten = new Item("Akaten", "Hound weapon obtained with Hec.")

// moa section
// -----------

// para
// bp from Legs solaris united 500 rank 0

const para_blueprint = new Item("Para Blueprint", "Blueprint obtained from Legs in Fortuna for 500 standing at rank 0.");
const buy_para_blueprint = new Recipe("Buy Para Blueprint", "Buy a Para Blueprint from Legs in Fortuna for 500 standing at rank 0.")
    .addInput(solaris_united, 500)
    .addOutput(para_blueprint, 1);
const para = new Item("Para", "Moa Model obtained from crafting.")
const craft_para = new Recipe("Craft Para", "Craft a Para from the blueprint.")
    .addInput(para_blueprint, 1)
    .addInput(credits, 50000)
    .addInput(mytocardia_spore, 20)
    .addInput(smooth_phasmin, 10)
    .addInput(axidrol_alloy, 30)
    .addInput(morphics, 2)
    .addOutput(para, 1);

// lambeo
// bp from Legs solaris united 1000 rank 1

const lambeo_blueprint = new Item("Lambeo Blueprint", "Blueprint obtained from Legs in Fortuna for 1,000 standing at rank 1.");
const buy_lambeo_blueprint = new Recipe("Buy Lambeo Blueprint", "Buy a Lambeo Blueprint from Legs in Fortuna for 1,000 standing at rank 1.")
    .addInput(solaris_united, 1000)
    .addOutput(lambeo_blueprint, 1);
const lambeo = new Item("Lambeo", "Moa Model obtained from crafting.")
const craft_lambeo = new Recipe("Craft Lambeo", "Craft a Lambeo from the blueprint.")
    .addInput(lambeo_blueprint, 1)
    .addInput(credits, 50000)
    .addInput(gorgaricus_spore, 20)
    .addInput(heart_noctrul, 10)
    .addInput(venerdo_alloy, 30)
    .addInput(morphics, 2)
    .addOutput(lambeo, 1);

// oloro
// bp from Legs solaris united 2000 rank 2

const oloro_blueprint = new Item("Oloro Blueprint", "Blueprint obtained from Legs in Fortuna for 2,000 standing at rank 2.");
const buy_oloro_blueprint = new Recipe("Buy Oloro Blueprint", "Buy a Oloro Blueprint from Legs in Fortuna for 2,000 standing at rank 2.")
    .addInput(solaris_united, 2000)
    .addOutput(oloro_blueprint, 1);
const oloro = new Item("Oloro", "Moa Model obtained from crafting.")
const craft_oloro = new Recipe("Craft Oloro", "Craft a Oloro from the blueprint.")
    .addInput(oloro_blueprint, 1)
    .addInput(credits, 50000)
    .addInput(thermal_sludge, 20)
    .addInput(goblite_tears, 10)
    .addInput(travocyte_alloy, 30)
    .addInput(morphics, 2)
    .addOutput(oloro, 1);

// nychus
// bp from Legs solaris united 3000 rank 3

const nychus_blueprint = new Item("Nychus Blueprint", "Blueprint obtained from Legs in Fortuna for 3,000 standing at rank 3.");
const buy_nychus_blueprint = new Recipe("Buy Nychus Blueprint", "Buy a Nychus Blueprint from Legs in Fortuna for 3,000 standing at rank 3.")
    .addInput(solaris_united, 3000)
    .addOutput(nychus_blueprint, 1);
const nychus = new Item("Nychus", "Moa Model obtained from crafting.")
const craft_nychus = new Recipe("Craft Nychus", "Craft a Nychus from the blueprint.")
    .addInput(nychus_blueprint, 1)
    .addInput(credits, 50000)
    .addInput(gorgaricus_spore, 20)
    .addInput(goblite_tears, 10)
    .addInput(venerdo_alloy, 20)
    .addInput(morphics, 2)
    .addOutput(nychus, 1);

// various companion weapons section
// ------------------------

// cryotra
// bp from Legs solaris united 10k rank 5

const cryotra_blueprint = new Item("Cryotra Blueprint", "Blueprint obtained from Legs in Fortuna for 10,000 standing at rank 5.");
const buy_cryotra_blueprint = new Recipe("Buy Cryotra Blueprint", "Buy a Cryotra Blueprint from Legs in Fortuna for 10,000 standing at rank 5.")
    .addInput(solaris_united, 10000)
    .addOutput(cryotra_blueprint, 1);
const cryotra = new Item("Cryotra", "Companion weapon obtained from crafting.")
const craft_cryotra = new Recipe("Craft Cryotra", "Craft a Cryotra from the blueprint.")
    .addInput(cryotra_blueprint, 1)
    .addInput(credits, 50000)
    .addInput(esher_devar, 10)
    .addInput(heart_noctrul, 10)
    .addInput(eye_eye_rotoblade, 10)
    .addInput(charamote_sagan_module, 5)
    .addOutput(cryotra, 1);

// helstrum
// bp from Legs solaris united 10k rank 5

const helstrum_blueprint = new Item("Helstrum Blueprint", "Blueprint obtained from Legs in Fortuna for 10,000 standing at rank 5.");
const buy_helstrum_blueprint = new Recipe("Buy Helstrum Blueprint", "Buy a Helstrum Blueprint from Legs in Fortuna for 10,000 standing at rank 5.")
    .addInput(solaris_united, 10000)
    .addOutput(helstrum_blueprint, 1);
const helstrum = new Item("Helstrum", "Companion weapon obtained from crafting.")
const craft_helstrum = new Recipe("Craft Helstrum", "Craft a Helstrum from the blueprint.")
    .addInput(helstrum_blueprint, 1)
    .addInput(credits, 50000)
    .addInput(star_crimzian, 10)
    .addInput(star_amarast, 10)
    .addInput(recaster_neural_relay, 10)
    .addInput(synathid_ecosynth_analyzer, 1)
    .addOutput(helstrum, 1);

// tazicor
// bp from Legs solaris united 10k rank 5

const tazicor_blueprint = new Item("Tazicor Blueprint", "Blueprint obtained from Legs in Fortuna for 10,000 standing at rank 5.");
const buy_tazicor_blueprint = new Recipe("Buy Tazicor Blueprint", "Buy a Tazicor Blueprint from Legs in Fortuna for 10,000 standing at rank 5.")
    .addInput(solaris_united, 10000)
    .addOutput(tazicor_blueprint, 1);
const tazicor = new Item("Tazicor", "Companion weapon obtained from crafting.")
const craft_tazicor = new Recipe("Craft Tazicor", "Craft a Tazicor from the blueprint.")
    .addInput(tazicor_blueprint, 1)
    .addInput(credits, 50000)
    .addInput(esher_devar, 10)
    .addInput(smooth_phasmin, 10)
    .addInput(recaster_neural_relay, 10)
    .addInput(longwinder_lathe_coagulant, 5)
    .addOutput(tazicor, 1);

//vulcax
// bp from Legs solaris united 10k rank 5

const vulcax_blueprint = new Item("Vulcax Blueprint", "Blueprint obtained from Legs in Fortuna for 10,000 standing at rank 5.");
const buy_vulcax_blueprint = new Recipe("Buy Vulcax Blueprint", "Buy a Vulcax Blueprint from Legs in Fortuna for 10,000 standing at rank 5.")
    .addInput(solaris_united, 10000)
    .addOutput(vulcax_blueprint, 1);
const vulcax = new Item("Vulcax", "Companion weapon obtained from crafting.")
const craft_vulcax = new Recipe("Craft Vulcax", "Craft a Vulcax from the blueprint.")
    .addInput(vulcax_blueprint, 1)
    .addInput(credits, 50000)
    .addInput(marquise_veridos, 10)
    .addInput(goblite_tears, 10)
    .addInput(kriller_thermal_laser, 10)
    .addInput(tromyzon_entroplasma, 5)
    .addOutput(vulcax, 1);

// the warframes section
// ------------------------
// ------------------------

// ash
// bp market 35k
// parts bp railjack missions

const ash_neuroptics_blueprint = new Item("Ash Neuroptics Blueprint", "Blueprint obtained from Railjack missions.");
const ash_chassis_blueprint = new Item("Ash Chassis Blueprint", "Blueprint obtained from Railjack missions.");
const ash_systems_blueprint = new Item("Ash Systems Blueprint", "Blueprint obtained from Railjack missions.");
const ash_blueprint = new Item("Ash Blueprint", "Blueprint obtained from the Market for 35,000 credits.");
const buy_ash_blueprint = new Recipe("Buy Ash Blueprint", "Buy an Ash Blueprint from the Market for 35,000 credits.")
    .addInput(credits, 35000)
    .addOutput(ash_blueprint, 1);
const ash_neuroptics = new Item("Ash Neuroptics", "Warframe part obtained from crafting.")
const craft_ash_neuroptics = new Recipe("Craft Ash Neuroptics", "Craft Ash Neuroptics from the blueprint.")
    .addInput(ash_neuroptics_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(alloy_plate, 150)
    .addInput(neural_sensor, 1)
    .addInput(polymer_bundle, 150)
    .addInput(rubedo, 500)
    .addOutput(ash_neuroptics, 1);
const ash_chassis = new Item("Ash Chassis", "Warframe part obtained from crafting.")
const craft_ash_chassis = new Recipe("Craft Ash Chassis", "Craft Ash Chassis from the blueprint.")
    .addInput(ash_chassis_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(morphics, 1)
    .addInput(ferrite, 1000)
    .addInput(rubedo, 300)
    .addOutput(ash_chassis, 1);
const ash_systems = new Item("Ash Systems", "Warframe part obtained from crafting.")
const craft_ash_systems = new Recipe("Craft Ash Systems", "Craft Ash Systems from the blueprint.")
    .addInput(ash_systems_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(control_module, 1)
    .addInput(morphics, 1)
    .addInput(salvage, 500)
    .addInput(plastids, 500)
    .addOutput(ash_systems, 1);
const ash = new Item("Ash", "Warframe obtained from crafting.")
const craft_ash = new Recipe("Craft Ash", "Craft Ash from the blueprint.")
    .addInput(ash_blueprint, 1)
    .addInput(ash_neuroptics, 1)
    .addInput(ash_chassis, 1)
    .addInput(ash_systems, 1)
    .addInput(credits, 25000)
    .addInput(orokin_cell, 1)
    .addOutput(ash, 1);

// atlas
// bp jordas precept quest
// parts bp jordas golem assassination

const atlas_neuroptics_blueprint = new Item("Atlas Neuroptics Blueprint", "Blueprint obtained from Jordas Golem Assassination.");
const atlas_chassis_blueprint = new Item("Atlas Chassis Blueprint", "Blueprint obtained from Jordas Golem Assassination.");
const atlas_systems_blueprint = new Item("Atlas Systems Blueprint", "Blueprint obtained from Jordas Golem Assassination.");
const atlas_blueprint = new Item("Atlas Blueprint", "Blueprint obtained from the Jordas Precept quest.");
const atlas_neuroptics = new Item("Atlas Neuroptics", "Warframe part obtained from crafting.")
const craft_atlas_neuroptics = new Recipe("Craft Atlas Neuroptics", "Craft Atlas Neuroptics from the blueprint.")   
    .addInput(atlas_neuroptics_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(polymer_bundle, 1400)
    .addInput(alloy_plate, 1100)
    .addInput(circuits, 800)
    .addInput(neurodes, 5)
    .addOutput(atlas_neuroptics, 1);
const atlas_chassis = new Item("Atlas Chassis", "Warframe part obtained from crafting.")
const craft_atlas_chassis = new Recipe("Craft Atlas Chassis", "Craft Atlas Chassis from the blueprint.")    
    .addInput(atlas_chassis_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(nano_spores, 1800)
    .addInput(cryotic, 1300)
    .addInput(rubedo, 700)
    .addInput(argon_crystal, 2)
    .addOutput(atlas_chassis, 1);
const atlas_systems = new Item("Atlas Systems", "Warframe part obtained from crafting.")
const craft_atlas_systems = new Recipe("Craft Atlas Systems", "Craft Atlas Systems from the blueprint.")    
    .addInput(atlas_systems_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(ferrite, 4600)
    .addInput(polymer_bundle, 1700)
    .addInput(morphics, 5)
    .addInput(orokin_cell, 1)
    .addOutput(atlas_systems, 1);
const atlas = new Item("Atlas", "Warframe obtained from crafting.")
const craft_atlas = new Recipe("Craft Atlas", "Craft Atlas from the blueprint.")
    .addInput(atlas_blueprint, 1)
    .addInput(atlas_neuroptics, 1)
    .addInput(atlas_chassis, 1)
    .addInput(atlas_systems, 1)
    .addInput(credits, 30000)
    .addInput(orokin_cell, 1)
    .addOutput(atlas, 1);

// banshee
// bp tenno lab 35k
// parts bp tenno lab 15k

const banshee_blueprint = new Item("Banshee Blueprint", "Blueprint obtained from the Tenno Lab in the Dojo for 35,000 credits.");
const buy_banshee_blueprint = new Recipe("Buy Banshee Blueprint", "Buy a Banshee Blueprint from the Tenno Lab in the Dojo for 35,000 credits.")
    .addInput(credits, 35000)
    .addOutput(banshee_blueprint, 1);
const banshee_neuroptics_blueprint = new Item("Banshee Neuroptics Blueprint", "Blueprint obtained from the Tenno Lab in the Dojo for 15,000 credits.");
const buy_banshee_neuroptics_blueprint = new Recipe("Buy Banshee Neuroptics Blueprint", "Buy a Banshee Neuroptics Blueprint from the Tenno Lab in the Dojo for 15,000 credits.")
    .addInput(credits, 15000)
    .addOutput(banshee_neuroptics_blueprint, 1);
const banshee_chassis_blueprint = new Item("Banshee Chassis Blueprint", "Blueprint obtained from the Tenno Lab in the Dojo for 15,000 credits.");
const buy_banshee_chassis_blueprint = new Recipe("Buy Banshee Chassis Blueprint", "Buy a Banshee Chassis Blueprint from the Tenno Lab in the Dojo for 15,000 credits.")
    .addInput(credits, 15000)
    .addOutput(banshee_chassis_blueprint, 1);
const banshee_systems_blueprint = new Item("Banshee Systems Blueprint", "Blueprint obtained from the Tenno Lab in the Dojo for 15,000 credits.");
const buy_banshee_systems_blueprint = new Recipe("Buy Banshee Systems Blueprint", "Buy a Banshee Systems Blueprint from the Tenno Lab in the Dojo for 15,000 credits.")
    .addInput(credits, 15000)
    .addOutput(banshee_systems_blueprint, 1);
const banshee_neuroptics = new Item("Banshee Neuroptics", "Warframe part obtained from crafting.")
const craft_banshee_neuroptics = new Recipe("Craft Banshee Neuroptics", "Craft Banshee Neuroptics from the blueprint.")
    .addInput(banshee_neuroptics_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(circuits, 150)
    .addInput(neural_sensor, 1)
    .addInput(polymer_bundle, 200)
    .addInput(salvage, 500)
    .addOutput(banshee_neuroptics, 1);
const banshee_chassis = new Item("Banshee Chassis", "Warframe part obtained from crafting.")
const craft_banshee_chassis = new Recipe("Craft Banshee Chassis", "Craft Banshee Chassis from the blueprint.")
    .addInput(banshee_chassis_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(morphics, 1)
    .addInput(ferrite, 900)
    .addInput(rubedo, 50)
    .addOutput(banshee_chassis, 1);
const banshee_systems = new Item("Banshee Systems", "Warframe part obtained from crafting.")
const craft_banshee_systems = new Recipe("Craft Banshee Systems", "Craft Banshee Systems from the blueprint.")
    .addInput(banshee_systems_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(control_module, 1)
    .addInput(morphics, 1)
    .addInput(salvage, 500)
    .addInput(plastids, 400)
    .addOutput(banshee_systems, 1);
const banshee = new Item("Banshee", "Warframe obtained from crafting.")
const craft_banshee = new Recipe("Craft Banshee", "Craft Banshee from the blueprint.")
    .addInput(banshee_blueprint, 1)
    .addInput(banshee_neuroptics, 1)
    .addInput(banshee_chassis, 1)
    .addInput(banshee_systems, 1)
    .addInput(credits, 25000)
    .addInput(orokin_cell, 1)
    .addOutput(banshee, 1);

// baruuk
// bp little duck 5k rank 2
// parts bp little duck 5k rank 3

const baruuk_blueprint = new Item("Baruuk Blueprint", "Blueprint obtained from Little Duck in Fortuna for 5,000 standing at rank 2.");
const buy_baruuk_blueprint = new Recipe("Buy Baruuk Blueprint", "Buy a Baruuk Blueprint from Little Duck in Fortuna for 5,000 standing at rank 2.")
    .addInput(vox_solaris, 5000)
    .addOutput(baruuk_blueprint, 1);
const baruuk_neuroptics_blueprint = new Item("Baruuk Neuroptics Blueprint", "Blueprint obtained from Little Duck in Fortuna for 5,000 standing at rank 3.");
const buy_baruuk_neuroptics_blueprint = new Recipe("Buy Baruuk Neuroptics Blueprint", "Buy a Baruuk Neuroptics Blueprint from Little Duck in Fortuna for 5,000 standing at rank 3.")
    .addInput(vox_solaris, 5000)
    .addOutput(baruuk_neuroptics_blueprint, 1);
const baruuk_chassis_blueprint = new Item("Baruuk Chassis Blueprint", "Blueprint obtained from Little Duck in Fortuna for 5,000 standing at rank 3.");
const buy_baruuk_chassis_blueprint = new Recipe("Buy Baruuk Chassis Blueprint", "Buy a Baruuk Chassis Blueprint from Little Duck in Fortuna for 5,000 standing at rank 3.")
    .addInput(vox_solaris, 5000)
    .addOutput(baruuk_chassis_blueprint, 1);
const baruuk_systems_blueprint = new Item("Baruuk Systems Blueprint", "Blueprint obtained from Little Duck in Fortuna for 5,000 standing at rank 3.");
const buy_baruuk_systems_blueprint = new Recipe("Buy Baruuk Systems Blueprint", "Buy a Baruuk Systems Blueprint from Little Duck in Fortuna for 5,000 standing at rank 3.")
    .addInput(vox_solaris, 5000)
    .addOutput(baruuk_systems_blueprint, 1);
const baruuk_neuroptics = new Item("Baruuk Neuroptics", "Warframe part obtained from crafting.")
const craft_baruuk_neuroptics = new Recipe("Craft Baruuk Neuroptics", "Craft Baruuk Neuroptics from the blueprint.")
    .addInput(baruuk_neuroptics_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(sola_toroid, 3)
    .addInput(alloy_plate, 2850)
    .addInput(hespazym_alloy, 50)
    .addInput(synathid_ecosynth_analyzer, 5)
    .addOutput(baruuk_neuroptics, 1);
const baruuk_chassis = new Item("Baruuk Chassis", "Warframe part obtained from crafting.")
const craft_baruuk_chassis = new Recipe("Craft Baruuk Chassis", "Craft Baruuk Chassis from the blueprint.") 
    .addInput(baruuk_chassis_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(sola_toroid, 3)
    .addInput(salvage, 3250)
    .addInput(hespazym_alloy, 100)
    .addInput(marquise_thyst, 5)
    .addOutput(baruuk_chassis, 1);
const baruuk_systems = new Item("Baruuk Systems", "Warframe part obtained from crafting.")
const craft_baruuk_systems = new Recipe("Craft Baruuk Systems", "Craft Baruuk Systems from the blueprint.")
    .addInput(baruuk_systems_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(calda_toroid, 3)
    .addInput(ferrite, 2500)
    .addInput(tromyzon_entroplasma, 10)
    .addInput(radiant_zodian, 5)
    .addOutput(baruuk_systems, 1);
const baruuk = new Item("Baruuk", "Warframe obtained from crafting.")
const craft_baruuk = new Recipe("Craft Baruuk", "Craft Baruuk from the blueprint.")
    .addInput(baruuk_blueprint, 1)
    .addInput(baruuk_neuroptics, 1)
    .addInput(baruuk_chassis, 1)
    .addInput(baruuk_systems, 1)
    .addInput(credits, 25000)
    .addInput(orokin_cell, 1)
    .addOutput(baruuk, 1);

// caliban
// bp and parts bp from narmer bounties

const caliban_blueprint = new Item("Caliban Blueprint", "Blueprint obtained from Narmer Bounties in Cetus and Fortuna.");
const caliban_neuroptics_blueprint = new Item("Caliban Neuroptics Blueprint", "Blueprint obtained from Narmer Bounties in Cetus and Fortuna.");
const caliban_chassis_blueprint = new Item("Caliban Chassis Blueprint", "Blueprint obtained from Narmer Bounties in Cetus and Fortuna.");
const caliban_systems_blueprint = new Item("Caliban Systems Blueprint", "Blueprint obtained from Narmer Bounties in Cetus and Fortuna.");
const caliban_neuroptics = new Item("Caliban Neuroptics", "Warframe part obtained from crafting.")
const caliban_chassis = new Item("Caliban Chassis", "Warframe part obtained from crafting.")
const caliban_systems = new Item("Caliban Systems", "Warframe part obtained from crafting.")
const caliban = new Item("Caliban", "Warframe obtained from crafting.")
const craft_caliban_neuroptics = new Recipe("Craft Caliban Neuroptics", "Craft Caliban Neuroptics from the blueprint.")
    .addInput(caliban_neuroptics_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(anomaly_shard, 3)
    .addInput(narmer_isoplast, 12)
    .addInput(neural_sensor, 10)
    .addInput(tralok_eyes, 20)
    .addOutput(caliban_neuroptics, 1);
const craft_caliban_chassis = new Recipe("Craft Caliban Chassis", "Craft Caliban Chassis from the blueprint.")
    .addInput(caliban_chassis_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(anomaly_shard, 3)
    .addInput(narmer_isoplast, 16)
    .addInput(mortus_horn, 20)
    .addInput(hespazym_alloy, 100)
    .addOutput(caliban_chassis, 1);
const craft_caliban_systems = new Recipe("Craft Caliban Systems", "Craft Caliban Systems from the blueprint.")
    .addInput(caliban_systems_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(anomaly_shard, 3)
    .addInput(narmer_isoplast, 12)
    .addInput(breath_of_the_eidolon, 30)
    .addInput(hexenon, 30)
    .addOutput(caliban_systems, 1);
const craft_caliban = new Recipe("Craft Caliban", "Craft Caliban from the blueprint.")
    .addInput(caliban_blueprint, 1)
    .addInput(caliban_neuroptics, 1)
    .addInput(caliban_chassis, 1)
    .addInput(caliban_systems, 1)
    .addInput(credits, 25000)
    .addInput(orokin_cell, 12)
    .addOutput(caliban, 1);

// chr oma is at the bottom, under zephyr

// citrine
// bp and parts bp from mirror defense C rotation

const citrine_blueprint = new Item("Citrine Blueprint", "Blueprint obtained from the Mirror Defense C Rotation.");
const citrine_neuroptics_blueprint = new Item("Citrine Neuroptics Blueprint", "Blueprint obtained from the Mirror Defense C Rotation.");
const citrine_chassis_blueprint = new Item("Citrine Chassis Blueprint", "Blueprint obtained from the Mirror Defense C Rotation.");
const citrine_systems_blueprint = new Item("Citrine Systems Blueprint", "Blueprint obtained from the Mirror Defense C Rotation.");
const citrine_neuroptics = new Item("Citrine Neuroptics", "Warframe part obtained from crafting.")
const citrine_chassis = new Item("Citrine Chassis", "Warframe part obtained from crafting.")
const citrine_systems = new Item("Citrine Systems", "Warframe part obtained from crafting.")
const citrine = new Item("Citrine", "Warframe obtained from crafting.")
const craft_citrine_neuroptics = new Recipe("Craft Citrine Neuroptics", "Craft Citrine Neuroptics from the blueprint.")
    .addInput(citrine_neuroptics_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(rubedo, 1000)
    .addInput(salvage, 1500)
    .addInput(faceted_tiametrite, 15)
    .addInput(argon_crystal, 2)
    .addOutput(citrine_neuroptics, 1);
const craft_citrine_chassis = new Recipe("Craft Citrine Chassis", "Craft Citrine Chassis from the blueprint.")
    .addInput(citrine_chassis_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(cryotic, 1200)
    .addInput(alloy_plate, 3000)
    .addInput(stellated_necrathene, 6)
    .addInput(nano_spores, 2000)
    .addOutput(citrine_chassis, 1);
const craft_citrine_systems = new Recipe("Craft Citrine Systems", "Craft Citrine Systems from the blueprint.")
    .addInput(citrine_systems_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(circuits, 1500)
    .addInput(polymer_bundle, 1500)
    .addInput(gallium, 3)
    .addInput(morphics, 2)
    .addOutput(citrine_systems, 1);
const craft_citrine = new Recipe("Craft Citrine", "Craft Citrine from the blueprint.")
    .addInput(citrine_blueprint, 1)
    .addInput(citrine_neuroptics, 1)
    .addInput(citrine_chassis, 1)
    .addInput(citrine_systems, 1)
    .addInput(credits, 25000)
    .addInput(orokin_cell, 3)
    .addOutput(citrine, 1);

// ember
// bp market 25k
// parts bp from sargas ruk assassination

const ember_blueprint = new Item("Ember Blueprint", "Blueprint obtained from the Market for 25,000 credits.");
const buy_ember_blueprint = new Recipe("Buy Ember Blueprint", "Buy an Ember Blueprint from the Market for 25,000 credits.")
    .addInput(credits, 25000)
    .addOutput(ember_blueprint, 1);
const ember_neuroptics_blueprint = new Item("Ember Neuroptics Blueprint", "Blueprint obtained from the Sargas Ruk assassination.");
const ember_chassis_blueprint = new Item("Ember Chassis Blueprint", "Blueprint obtained from the Sargas Ruk assassination.");
const ember_systems_blueprint = new Item("Ember Systems Blueprint", "Blueprint obtained from the Sargas Ruk assassination.");
const ember_neuroptics = new Item("Ember Neuroptics", "Warframe part obtained from crafting.")
const ember_chassis = new Item("Ember Chassis", "Warframe part obtained from crafting.")
const ember_systems = new Item("Ember Systems", "Warframe part obtained from crafting.")
const ember = new Item("Ember", "Warframe obtained from crafting.")
const craft_ember_neuroptics = new Recipe("Craft Ember Neuroptics", "Craft Ember Neuroptics from the blueprint.")
    .addInput(ember_neuroptics_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(alloy_plate, 150)
    .addInput(neural_sensor, 1)
    .addInput(polymer_bundle, 150)
    .addInput(rubedo, 500)
    .addOutput(ember_neuroptics, 1);
const craft_ember_chassis = new Recipe("Craft Ember Chassis", "Craft Ember Chassis from the blueprint.")
    .addInput(ember_chassis_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(morphics, 1)
    .addInput(ferrite, 1000)
    .addInput(rubedo, 300)
    .addOutput(ember_chassis, 1);
const craft_ember_systems = new Recipe("Craft Ember Systems", "Craft Ember Systems from the blueprint.")
    .addInput(ember_systems_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(control_module, 1)
    .addInput(morphics, 1)
    .addInput(salvage, 500)
    .addInput(plastids, 220)
    .addOutput(ember_systems, 1);
const craft_ember = new Recipe("Craft Ember", "Craft Ember from the blueprint.")
    .addInput(ember_blueprint, 1)
    .addInput(ember_neuroptics, 1)
    .addInput(ember_chassis, 1)
    .addInput(ember_systems, 1)
    .addInput(credits, 25000)
    .addInput(orokin_cell, 1)
    .addOutput(ember, 1);

// equinox
// bp market 25k
// parts bp from tyl regor assassination

const equinox_blueprint = new Item("Equinox Blueprint", "Blueprint obtained from the Market for 25,000 credits.");
const buy_equinox_blueprint = new Recipe("Buy Equinox Blueprint", "Buy an Equinox Blueprint from the Market for 25,000 credits.")
    .addInput(credits, 25000)
    .addOutput(equinox_blueprint, 1);
const equ_day_neuroptics_blueprint = new Item("Equinox Day Neuroptics Blueprint", "Blueprint obtained from the Tyl Regor assassination.");
const equ_day_chassis_blueprint = new Item("Equinox Day Chassis Blueprint", "Blueprint obtained from the Tyl Regor assassination.");
const equ_day_systems_blueprint = new Item("Equinox Day Systems Blueprint", "Blueprint obtained from the Tyl Regor assassination.");
const equ_day_blueprint = new Item("Equinox Day Blueprint", "Blueprint obtained from the Tyl Regor assassination.");
const equ_night_neuroptics_blueprint = new Item("Equinox Night Neuroptics Blueprint", "Blueprint obtained from the Tyl Regor assassination.");
const equ_night_chassis_blueprint = new Item("Equinox Night Chassis Blueprint", "Blueprint obtained from the Tyl Regor assassination.");
const equ_night_systems_blueprint = new Item("Equinox Night Systems Blueprint", "Blueprint obtained from the Tyl Regor assassination.");
const equ_night_blueprint = new Item("Equinox Night Blueprint", "Blueprint obtained from the Tyl Regor assassination.");
const equ_day_neuroptics = new Item("Equinox Day Neuroptics", "Warframe part obtained from crafting.");
const equ_day_chassis = new Item("Equinox Day Chassis", "Warframe part obtained from crafting.");
const equ_day_systems = new Item("Equinox Day Systems", "Warframe part obtained from crafting.");
const equ_day = new Item("Equinox Day", "Warframe obtained from crafting.");
const equ_night_neuroptics = new Item("Equinox Night Neuroptics", "Warframe part obtained from crafting.");
const equ_night_chassis = new Item("Equinox Night Chassis", "Warframe part obtained from crafting.");
const equ_night_systems = new Item("Equinox Night Systems", "Warframe part obtained from crafting.");
const equ_night = new Item("Equinox Night", "Warframe obtained from crafting.");
const equinox = new Item("Equinox", "Warframe obtained from crafting.");
const craft_equ_day_neuroptics = new Recipe("Craft Equinox Day Neuroptics", "Craft Equinox Day Neuroptics from the blueprint.")
    .addInput(equ_day_neuroptics_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(alloy_plate, 150)
    .addInput(neural_sensor, 1)
    .addInput(ferrite, 150)
    .addInput(rubedo, 500)
    .addOutput(equ_day_neuroptics, 1);
const craft_equ_day_chassis = new Recipe("Craft Equinox Day Chassis", "Craft Equinox Day Chassis from the blueprint.")
    .addInput(equ_day_chassis_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(gallium, 1)
    .addInput(ferrite, 1000)
    .addInput(rubedo, 300)
    .addOutput(equ_day_chassis, 1);
const craft_equ_day_systems = new Recipe("Craft Equinox Day Systems", "Craft Equinox Day Systems from the blueprint.")
    .addInput(equ_day_systems_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(control_module, 1)
    .addInput(gallium, 1)
    .addInput(salvage, 500)
    .addInput(rubedo, 500)
    .addOutput(equ_day_systems, 1);
const craft_equ_day = new Recipe("Craft Equinox Day", "Craft Equinox Day from the blueprint.")
    .addInput(equ_day_blueprint, 1)
    .addInput(equ_day_neuroptics, 1)
    .addInput(equ_day_chassis, 1)
    .addInput(equ_day_systems, 1)
    .addInput(credits, 25000)
    .addInput(orokin_cell, 1)
    .addOutput(equ_day, 1);
const craft_equ_night_neuroptics = new Recipe("Craft Equinox Night Neuroptics", "Craft Equinox Night Neuroptics from the blueprint.")
    .addInput(equ_night_neuroptics_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(alloy_plate, 150)
    .addInput(neural_sensor, 1)
    .addInput(polymer_bundle, 150)
    .addInput(plastids, 500)
    .addOutput(equ_night_neuroptics, 1);
const craft_equ_night_chassis = new Recipe("Craft Equinox Night Chassis", "Craft Equinox Night Chassis from the blueprint.")
    .addInput(equ_night_chassis_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(morphics, 1)
    .addInput(polymer_bundle, 1000)
    .addInput(plastids, 300)
    .addOutput(equ_night_chassis, 1);
const craft_equ_night_systems = new Recipe("Craft Equinox Night Systems", "Craft Equinox Night Systems from the blueprint.")
    .addInput(equ_night_systems_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(control_module, 1)
    .addInput(morphics, 1)
    .addInput(nano_spores, 500)
    .addInput(plastids, 500)
    .addOutput(equ_night_systems, 1);
const craft_equ_night = new Recipe("Craft Equinox Night", "Craft Equinox Night from the blueprint.")
    .addInput(equ_night_blueprint, 1)
    .addInput(equ_night_neuroptics, 1)
    .addInput(equ_night_chassis, 1)
    .addInput(equ_night_systems, 1)
    .addInput(credits, 25000)
    .addInput(orokin_cell, 1)
    .addOutput(equ_night, 1);
const craft_equinox = new Recipe("Craft Equinox", "Craft Equinox from the blueprints.")
    .addInput(equ_day, 1)
    .addInput(equ_night, 1)
    .addInput(forma, 1)
    .addInput(credits, 25000)
    .addOutput(equinox, 1);

// excalibur
// bp market 35k
// parts bp lech kril assassination

const excalibur_blueprint = new Item("Excalibur Blueprint", "Blueprint obtained from the Market for 35,000 credits.");
const buy_excalibur_blueprint = new Recipe("Buy Excalibur Blueprint", "Buy an Excalibur Blueprint from the Market for 35,000 credits.")
    .addInput(credits, 35000)
    .addOutput(excalibur_blueprint, 1);
const excalibur_neuroptics_blueprint = new Item("Excalibur Neuroptics Blueprint", "Blueprint obtained from the Lech Kril assassination.");
const excalibur_chassis_blueprint = new Item("Excalibur Chassis Blueprint", "Blueprint obtained from the Lech Kril assassination.");
const excalibur_systems_blueprint = new Item("Excalibur Systems Blueprint", "Blueprint obtained from the Lech Kril assassination.");
const excalibur_neuroptics = new Item("Excalibur Neuroptics", "Part obtained from the Lech Kril assassination.");
const excalibur_chassis = new Item("Excalibur Chassis", "Part obtained from the Lech Kril assassination.");
const excalibur_systems = new Item("Excalibur Systems", "Part obtained from the Lech Kril assassination.");
const excalibur = new Item("Excalibur", "Warframe obtained from the Lech Kril assassination.");
const craft_excalibur_neuroptics = new Recipe("Craft Excalibur Neuroptics", "Craft Excalibur Neuroptics from the blueprint.")
    .addInput(excalibur_neuroptics_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(alloy_plate, 150)
    .addInput(neural_sensor, 1)
    .addInput(polymer_bundle, 150)
    .addInput(rubedo, 500)
    .addOutput(excalibur_neuroptics, 1);
const craft_excalibur_chassis = new Recipe("Craft Excalibur Chassis", "Craft Excalibur Chassis from the blueprint.")
    .addInput(excalibur_chassis_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(morphics, 1)
    .addInput(ferrite, 1000)
    .addInput(rubedo, 300)
    .addOutput(excalibur_chassis, 1);
const craft_excalibur_systems = new Recipe("Craft Excalibur Systems", "Craft Excalibur Systems from the blueprint.")
    .addInput(excalibur_systems_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(control_module, 1)
    .addInput(morphics, 1)
    .addInput(salvage, 500)
    .addInput(plastids, 220)
    .addOutput(excalibur_systems, 1);
const craft_excalibur = new Recipe("Craft Excalibur", "Craft Excalibur from the blueprints.")
    .addInput(excalibur_blueprint, 1)
    .addInput(excalibur_neuroptics, 1)
    .addInput(excalibur_chassis, 1)
    .addInput(excalibur_systems, 1)
    .addInput(credits, 25000)
    .addInput(orokin_cell, 1)
    .addOutput(excalibur, 1);

// frost
// bp market 25k
// parts bp lech kril and vor assassination

const frost_blueprint = new Item("Frost Blueprint", "Blueprint obtained from the Market for 25,000 credits.");
const buy_frost_blueprint = new Recipe("Buy Frost Blueprint", "Buy a Frost Blueprint from the Market for 25,000 credits.")
    .addInput(credits, 25000)
    .addOutput(frost_blueprint, 1);
const frost_neuroptics_blueprint = new Item("Frost Neuroptics Blueprint", "Blueprint obtained from the Lech Kril and Vor assassination.");
const frost_chassis_blueprint = new Item("Frost Chassis Blueprint", "Blueprint obtained from the Lech Kril and Vor assassination.");
const frost_systems_blueprint = new Item("Frost Systems Blueprint", "Blueprint obtained from the Lech Kril and Vor assassination.");
const frost_neuroptics = new Item("Frost Neuroptics", "Part obtained from the Lech Kril and Vor assassination.");
const frost_chassis = new Item("Frost Chassis", "Part obtained from the Lech Kril and Vor assassination.");
const frost_systems = new Item("Frost Systems", "Part obtained from the Lech Kril and Vor assassination.");
const frost = new Item("Frost", "Warframe obtained from the Lech Kril and Vor assassination.");
const craft_frost_neuroptics = new Recipe("Craft Frost Neuroptics", "Craft Frost Neuroptics from the blueprint.")
    .addInput(frost_neuroptics_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(alloy_plate, 150)
    .addInput(neural_sensor, 1)
    .addInput(polymer_bundle, 150)
    .addInput(rubedo, 500)
    .addOutput(frost_neuroptics, 1);
const craft_frost_chassis = new Recipe("Craft Frost Chassis", "Craft Frost Chassis from the blueprint.")
    .addInput(frost_chassis_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(morphics, 1)
    .addInput(ferrite, 1000)
    .addInput(rubedo, 300)
    .addOutput(frost_chassis, 1);
const craft_frost_systems = new Recipe("Craft Frost Systems", "Craft Frost Systems from the blueprint.")
    .addInput(frost_systems_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(control_module, 1)
    .addInput(morphics, 1)
    .addInput(salvage, 500)
    .addInput(plastids, 500)
    .addOutput(frost_systems, 1);
const craft_frost = new Recipe("Craft Frost", "Craft Frost from the blueprints.")
    .addInput(frost_blueprint, 1)
    .addInput(frost_neuroptics, 1)
    .addInput(frost_chassis, 1)
    .addInput(frost_systems, 1)
    .addInput(credits, 25000)
    .addInput(orokin_cell, 1)
    .addOutput(frost, 1);

// gara
// bp sayas vigil quest
// parts bp bounties cetus

const gara_blueprint = new Item("Gara Blueprint", "Blueprint obtained from the Saya's Vigil quest.");
const gara_neuroptics_blueprint = new Item("Gara Neuroptics Blueprint", "Blueprint obtained from the Cetus bounties.");
const gara_chassis_blueprint = new Item("Gara Chassis Blueprint", "Blueprint obtained from the Cetus bounties.");
const gara_systems_blueprint = new Item("Gara Systems Blueprint", "Blueprint obtained from the Cetus bounties.");
const gara_neuroptics = new Item("Gara Neuroptics", "Part obtained from the Cetus bounties.");
const gara_chassis = new Item("Gara Chassis", "Part obtained from the Cetus bounties.");
const gara_systems = new Item("Gara Systems", "Part obtained from the Cetus bounties.");
const craft_gara_neuroptics = new Recipe("Craft Gara Neuroptics", "Craft Gara Neuroptics from the blueprint.")
    .addInput(gara_neuroptics_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(neurodes, 2)
    .addInput(grokdrul, 65)
    .addInput(pyrotic_alloy, 90)
    .addInput(circuits, 700)
    .addOutput(gara_neuroptics, 1);
const craft_gara_chassis = new Recipe("Craft Gara Chassis", "Craft Gara Chassis from the blueprint.")
    .addInput(gara_chassis_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(cetus_wisp, 2)
    .addInput(coprite_alloy, 120)
    .addInput(iradite, 55)
    .addInput(rubedo, 800)
    .addOutput(gara_chassis, 1);
const craft_gara_systems = new Recipe("Craft Gara Systems", "Craft Gara Systems from the blueprint.")
    .addInput(gara_systems_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(morphics, 2)
    .addInput(charc_electroplax, 35)
    .addInput(esher_devar, 25)
    .addInput(circuits, 850)
    .addOutput(gara_systems, 1);

// garuda
// bp vox solaris quest
// parts bp fortuna bounties

const garuda_blueprint = new Item("Garuda Blueprint", "Blueprint obtained from the Vox Solaris quest.");
const garuda_neuroptics_blueprint = new Item("Garuda Neuroptics Blueprint", "Blueprint obtained from Fortuna bounties.");
const garuda_chassis_blueprint = new Item("Garuda Chassis Blueprint", "Blueprint obtained from Fortuna bounties.");
const garuda_systems_blueprint = new Item("Garuda Systems Blueprint", "Blueprint obtained from Fortuna bounties.");
const garuda_neuroptics = new Item("Garuda Neuroptics", "Part obtained from Fortuna bounties.");
const garuda_chassis = new Item("Garuda Chassis", "Part obtained from Fortuna bounties.");
const garuda_systems = new Item("Garuda Systems", "Part obtained from Fortuna bounties.");
const garuda = new Item("Garuda", "Warframe obtained from the blueprints.");
const craft_garuda_neuroptics = new Recipe("Craft Garuda Neuroptics", "Craft Garuda Neuroptics from the blueprint.")
    .addInput(garuda_neuroptics_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(vega_toroid, 2)
    .addInput(star_amarast, 6)
    .addInput(axidrol_alloy, 40)
    .addInput(nano_spores, 5000)
    .addOutput(garuda_neuroptics, 1);
const craft_garuda_chassis = new Recipe("Craft Garuda Chassis", "Craft Garuda Chassis from the blueprint.")
    .addInput(garuda_chassis_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(calda_toroid, 2)
    .addInput(radiant_zodian, 3)
    .addInput(travocyte_alloy, 40)
    .addInput(alloy_plate, 2200)
    .addOutput(garuda_chassis, 1);
const craft_garuda_systems = new Recipe("Craft Garuda Systems", "Craft Garuda Systems from the blueprint.")
    .addInput(garuda_systems_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(sola_toroid, 2)
    .addInput(marquise_thyst, 3)
    .addInput(venerdo_alloy, 40)
    .addInput(polymer_bundle, 2400)
    .addOutput(garuda_systems, 1);
const craft_garuda = new Recipe("Craft Garuda", "Craft Garuda from the blueprints.")
    .addInput(garuda_blueprint, 1)
    .addInput(garuda_neuroptics, 1)
    .addInput(garuda_chassis, 1)
    .addInput(garuda_systems, 1)
    .addInput(kuva, 3500)
    .addInput(credits, 25000)
    .addOutput(garuda, 1);

// gauss
// bp market 30k
// parts bp disruption sedna c rotation

const gauss_blueprint = new Item("Gauss Blueprint", "Blueprint obtained from the Market for 30,000 credits.");
const buy_gauss_blueprint = new Recipe("Buy Gauss Blueprint", "Buy a Gauss Blueprint from the Market for 30,000 credits.")
    .addInput(credits, 30000)
    .addOutput(gauss_blueprint, 1);
const gauss_neuroptics_blueprint = new Item("Gauss Neuroptics Blueprint", "Blueprint obtained from Disruption on Sedna, rotation C.");
const gauss_chassis_blueprint = new Item("Gauss Chassis Blueprint", "Blueprint obtained from Disruption on Sedna, rotation C.");
const gauss_systems_blueprint = new Item("Gauss Systems Blueprint", "Blueprint obtained from Disruption on Sedna, rotation C.");
const gauss_neuroptics = new Item("Gauss Neuroptics", "Part obtained from Disruption on Sedna, rotation C.");
const gauss_chassis = new Item("Gauss Chassis", "Part obtained from Disruption on Sedna, rotation C.");
const gauss_systems = new Item("Gauss Systems", "Part obtained from Disruption on Sedna, rotation C.");
const gauss = new Item("Gauss", "Warframe obtained from the blueprints.");
const craft_gauss_neuroptics = new Recipe("Craft Gauss Neuroptics", "Craft Gauss Neuroptics from the blueprint.")
    .addInput(gauss_neuroptics_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(argon_crystal, 1)
    .addInput(rubedo, 1600)
    .addInput(salvage, 6200)
    .addInput(alloy_plate, 2950)
    .addOutput(gauss_neuroptics, 1);
const craft_gauss_chassis = new Recipe("Craft Gauss Chassis", "Craft Gauss Chassis from the blueprint.")
    .addInput(gauss_chassis_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(radian_sentirum, 3)
    .addInput(heart_nyth, 3)
    .addInput(star_crimzian, 6)
    .addInput(grokdrul, 55)
    .addOutput(gauss_chassis, 1);
const craft_gauss_systems = new Recipe("Craft Gauss Systems", "Craft Gauss Systems from the blueprint.")
    .addInput(gauss_systems_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(radiant_zodian, 3)
    .addInput(marquise_thyst, 3)
    .addInput(mytocardia_spore, 70)
    .addInput(thermal_sludge, 85)
    .addOutput(gauss_systems, 1);
const craft_gauss = new Recipe("Craft Gauss", "Craft Gauss from the blueprints.")
    .addInput(gauss_blueprint, 1)
    .addInput(gauss_neuroptics, 1)
    .addInput(gauss_chassis, 1)
    .addInput(gauss_systems, 1)
    .addInput(credits, 25000)
    .addInput(orokin_cell, 3)
    .addOutput(gauss, 1);

// grendel
// bp market 35k
// parts bp special mission

const grendel_blueprint = new Item("Grendel Blueprint", "Blueprint obtained from the Market for 35,000 credits.");
const buy_grendel_blueprint = new Recipe("Buy Grendel Blueprint", "Buy a Grendel Blueprint from the Market for 35,000 credits.")
    .addInput(credits, 35000)
    .addOutput(grendel_blueprint, 1);
const grendel_neuroptics_blueprint = new Item("Grendel Neuroptics Blueprint", "Buy a Locator from arbitration vendor for 25 Vitus Essence, then use it.");
const buy_grendel_neuroptics_blueprint = new Recipe("Buy Grendel Neuroptics Blueprint", "Buy a locator from the arbitration vendor for 25 Vitus Essence, then use it.")
    .addInput(vitus_essence, 25)
    .addOutput(grendel_neuroptics_blueprint, 1);
const grendel_chassis_blueprint = new Item("Grendel Chassis Blueprint", "Buy a Locator from arbitration vendor for 25 Vitus Essence, then use it.");
const buy_grendel_chassis_blueprint = new Recipe("Buy Grendel Chassis Blueprint", "Buy a locator from the arbitration vendor for 25 Vitus Essence, then use it.")
    .addInput(vitus_essence, 25)
    .addOutput(grendel_chassis_blueprint, 1);
const grendel_systems_blueprint = new Item("Grendel Systems Blueprint", "Buy a Locator from arbitration vendor for 25 Vitus Essence, then use it.");
const buy_grendel_systems_blueprint = new Recipe("Buy Grendel Systems Blueprint", "Buy a locator from the arbitration vendor for 25 Vitus Essence, then use it.")
    .addInput(vitus_essence, 25)
    .addOutput(grendel_systems_blueprint, 1);
const grendel_neuroptics = new Item("Grendel Neuroptics", "Part obtained from the blueprint.");
const craft_grendel_neuroptics = new Recipe("Craft Grendel Neuroptics", "Craft Grendel Neuroptics from the blueprint.")
    .addInput(grendel_neuroptics_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(argon_crystal, 2)
    .addInput(control_module, 5)
    .addInput(ferrite, 3500)
    .addInput(alloy_plate, 3800)
    .addOutput(grendel_neuroptics, 1);
const grendel_chassis = new Item("Grendel Chassis", "Part obtained from the blueprint.");
const craft_grendel_chassis = new Recipe("Craft Grendel Chassis", "Craft Grendel Chassis from the blueprint.")
    .addInput(grendel_chassis_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(condroc_wing, 25)
    .addInput(kuaka_spinal_claw, 30)
    .addInput(tralok_eyes, 20)
    .addInput(murkray_liver, 15)
    .addOutput(grendel_chassis, 1);
const grendel_systems = new Item("Grendel Systems", "Part obtained from the blueprint.");
const craft_grendel_systems = new Recipe("Craft Grendel Systems", "Craft Grendel Systems from the blueprint.")
    .addInput(grendel_systems_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(circuits, 1125)
    .addInput(morphics, 10)
    .addInput(fish_meat, 125)
    .addInput(fish_oil, 100)
    .addOutput(grendel_systems, 1);
const grendel = new Item("Grendel", "Warframe obtained from the blueprints.");
const craft_grendel = new Recipe("Craft Grendel", "Craft Grendel from the blueprints.")
    .addInput(grendel_blueprint, 1)
    .addInput(grendel_neuroptics, 1)
    .addInput(grendel_chassis, 1)
    .addInput(grendel_systems, 1)
    .addInput(credits, 35000)
    .addInput(orokin_cell, 3)
    .addOutput(grendel, 1);

// gyre
// bp and parts bp zariman bounties

const gyre_blueprint = new Item("Gyre Blueprint", "Blueprint obtained from Zariman Bounties.");
const gyre_neuroptics_blueprint = new Item("Gyre Neuroptics Blueprint", "Blueprint obtained from Zariman Bounties.");
const gyre_chassis_blueprint = new Item("Gyre Chassis Blueprint", "Blueprint obtained from Zariman Bounties.");
const gyre_systems_blueprint = new Item("Gyre Systems Blueprint", "Blueprint obtained from Zariman Bounties.");
const gyre_neuroptics = new Item("Gyre Neuroptics", "Part obtained from the blueprint.");
const gyre_chassis = new Item("Gyre Chassis", "Part obtained from the blueprint.");
const gyre_systems = new Item("Gyre Systems", "Part obtained from the blueprint.");
const gyre = new Item("Gyre", "Warframe obtained from the blueprints.");
const craft_gyre_neuroptics = new Recipe("Craft Gyre Neuroptics", "Craft Gyre Neuroptics from the blueprint.")
    .addInput(gyre_neuroptics_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(neural_sensor, 6)
    .addInput(thrax_plasm, 300)
    .addInput(voidgel_orb, 60)
    .addInput(plastids, 4500)
    .addOutput(gyre_neuroptics, 1);
const craft_gyre_chassis = new Recipe("Craft Gyre Chassis", "Craft Gyre Chassis from the blueprint.")
    .addInput(gyre_chassis_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(morphics, 8)
    .addInput(thrax_plasm, 500)
    .addInput(entrati_lanthorn, 12)
    .addInput(alloy_plate, 3300)
    .addOutput(gyre_chassis, 1);
const craft_gyre_systems = new Recipe("Craft Gyre Systems", "Craft Gyre Systems from the blueprint.")
    .addInput(gyre_systems_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(argon_crystal, 2)
    .addInput(thrax_plasm, 300)
    .addInput(voidplume_quill, 40)
    .addInput(ferrite, 6500)
    .addOutput(gyre_systems, 1);
const craft_gyre = new Recipe("Craft Gyre", "Craft Gyre from the blueprints.")
    .addInput(gyre_blueprint, 1)
    .addInput(gyre_neuroptics, 1)
    .addInput(gyre_chassis, 1)
    .addInput(gyre_systems, 1)
    .addInput(credits, 25000)
    .addInput(orokin_cell, 3)
    .addOutput(gyre, 1);

// harrow
// bp chains of harrow quest
// parts bp around the system

const harrow_blueprint = new Item("Harrow Blueprint", "Blueprint obtained from the Chains of Harrow quest.");
const harrow_neuroptics_blueprint = new Item("Harrow Neuroptics Blueprint", "Blueprint obtained somewhere...");
const harrow_chassis_blueprint = new Item("Harrow Chassis Blueprint", "Blueprint obtained somewhere...");
const harrow_systems_blueprint = new Item("Harrow Systems Blueprint", "Blueprint obtained somewhere...");
const harrow_neuroptics = new Item("Harrow Neuroptics", "Part obtained from the blueprint.");
const harrow_chassis = new Item("Harrow Chassis", "Part obtained from the blueprint.");
const harrow_systems = new Item("Harrow Systems", "Part obtained from the blueprint.");
const harrow = new Item("Harrow", "Warframe obtained from the blueprints.");
const craft_harrow_neuroptics = new Recipe("Craft Harrow Neuroptics", "Craft Harrow Neuroptics from the blueprint.")
    .addInput(harrow_neuroptics_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(rubedo, 1500)
    .addInput(polymer_bundle, 4000)
    .addInput(plastids, 2000)
    .addInput(neural_sensor, 5)
    .addOutput(harrow_neuroptics, 1);
const craft_harrow_chassis = new Recipe("Craft Harrow Chassis", "Craft Harrow Chassis from the blueprint.")
    .addInput(harrow_chassis_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(alloy_plate, 20000)
    .addInput(salvage, 25000)
    .addInput(oxium, 800)
    .addInput(orokin_cell, 5)
    .addOutput(harrow_chassis, 1);
const craft_harrow_systems = new Recipe("Craft Harrow Systems", "Craft Harrow Systems from the blueprint.")
    .addInput(harrow_systems_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(circuits, 2500)
    .addInput(cryotic, 100)
    .addInput(ferrite, 25000)
    .addInput(control_module, 15)
    .addOutput(harrow_systems, 1);
const craft_harrow = new Recipe("Craft Harrow", "Craft Harrow from the blueprints.")
    .addInput(harrow_blueprint, 1)
    .addInput(harrow_neuroptics, 1)
    .addInput(harrow_chassis, 1)
    .addInput(harrow_systems, 1)
    .addInput(credits, 25000)
    .addInput(kuva, 2000)
    .addOutput(harrow, 1);

// hildryn
// bp little duck 5k
// parts bp exploiter orb

const hildryn_blueprint = new Item("Hildryn Blueprint", "Blueprint obtained from Little Duck in Fortuna for 5,000 standing.");
const buy_hildryn_blueprint = new Recipe("Buy Hildryn Blueprint", "Buy a Hildryn Blueprint from Little Duck in Fortuna for 5,000 standing.")
    .addInput(vox_solaris, 5000)
    .addOutput(hildryn_blueprint, 1);
const hildryn_neuroptics_blueprint = new Item("Hildryn Neuroptics Blueprint", "Blueprint obtained from the Exploiter Orb.");
const hildryn_chassis_blueprint = new Item("Hildryn Chassis Blueprint", "Blueprint obtained from the Exploiter Orb.");
const hildryn_systems_blueprint = new Item("Hildryn Systems Blueprint", "Blueprint obtained from the Exploiter Orb.");
const hildryn_neuroptics = new Item("Hildryn Neuroptics", "Part obtained from the blueprint.");
const hildryn_chassis = new Item("Hildryn Chassis", "Part obtained from the blueprint.");
const hildryn_systems = new Item("Hildryn Systems", "Part obtained from the blueprint.");
const hildryn = new Item("Hildryn", "Warframe obtained from the blueprints.");
const craft_hildryn_neuroptics = new Recipe("Craft Hildryn Neuroptics", "Craft Hildryn Neuroptics from the blueprint.")
    .addInput(hildryn_neuroptics_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(lazulite_toroid, 2)
    .addInput(argon_crystal, 1)
    .addInput(mytocardia_spore, 85)
    .addInput(circuits, 1600)
    .addOutput(hildryn_neuroptics, 1);
const craft_hildryn_chassis = new Recipe("Craft Hildryn Chassis", "Craft Hildryn Chassis from the blueprint.")
    .addInput(hildryn_chassis_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(lazulite_toroid, 2)
    .addInput(nitain, 2)
    .addInput(thermal_sludge, 90)
    .addInput(rubedo, 2300)
    .addOutput(hildryn_chassis, 1);
const craft_hildryn_systems = new Recipe("Craft Hildryn Systems", "Craft Hildryn Systems from the blueprint.")
    .addInput(hildryn_systems_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(lazulite_toroid, 2)
    .addInput(tellurium, 2)
    .addInput(gorgaricus_spore, 95)
    .addInput(plastids, 1500)
    .addOutput(hildryn_systems, 1);
const craft_hildryn = new Recipe("Craft Hildryn", "Craft Hildryn from the blueprints.")
    .addInput(hildryn_blueprint, 1)
    .addInput(hildryn_neuroptics, 1)
    .addInput(hildryn_chassis, 1)
    .addInput(hildryn_systems, 1)
    .addInput(credits, 25000)
    .addInput(orokin_cell, 3)
    .addOutput(hildryn, 1);

// hydroid
// bp market 50k
// parts bp vay hek assassination

const hydroid_blueprint = new Item("Hydroid Blueprint", "Blueprint obtained from the Market for 50,000 credits.");
const buy_hydroid_blueprint = new Recipe("Buy Hydroid Blueprint", "Buy a Hydroid Blueprint from the Market for 50,000 credits.")
    .addInput(credits, 50000)
    .addOutput(hydroid_blueprint, 1);
const hydroid_neuroptics_blueprint = new Item("Hydroid Neuroptics Blueprint", "Blueprint obtained from the Vay Hek assassination mission.");
const hydroid_chassis_blueprint = new Item("Hydroid Chassis Blueprint", "Blueprint obtained from the Vay Hek assassination mission.");
const hydroid_systems_blueprint = new Item("Hydroid Systems Blueprint", "Blueprint obtained from the Vay Hek assassination mission.");
const hydroid_neuroptics = new Item("Hydroid Neuroptics", "Part obtained from the blueprint.");
const hydroid_chassis = new Item("Hydroid Chassis", "Part obtained from the blueprint.");
const hydroid_systems = new Item("Hydroid Systems", "Part obtained from the blueprint.");
const hydroid = new Item("Hydroid", "Warframe obtained from the blueprints.");
const craft_hydroid_neuroptics = new Recipe("Craft Hydroid Neuroptics", "Craft Hydroid Neuroptics from the blueprint.")
    .addInput(hydroid_neuroptics_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(alloy_plate, 150)
    .addInput(control_module, 1)
    .addInput(polymer_bundle, 150)
    .addInput(argon_crystal, 2)
    .addOutput(hydroid_neuroptics, 1);
const craft_hydroid_chassis = new Recipe("Craft Hydroid Chassis", "Craft Hydroid Chassis from the blueprint.")
    .addInput(hydroid_chassis_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(argon_crystal, 2)
    .addInput(polymer_bundle, 1000)
    .addInput(rubedo, 300)
    .addInput(nano_spores, 1200)
    .addOutput(hydroid_chassis, 1);
const craft_hydroid_systems = new Recipe("Craft Hydroid Systems", "Craft Hydroid Systems from the blueprint.")
    .addInput(hydroid_systems_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(orokin_cell, 1)
    .addInput(gallium, 4)
    .addInput(polymer_bundle, 500)
    .addInput(alloy_plate, 220)
    .addOutput(hydroid_systems, 1);
const craft_hydroid = new Recipe("Craft Hydroid", "Craft Hydroid from the blueprints.")
    .addInput(hydroid_blueprint, 1)
    .addInput(hydroid_neuroptics, 1)
    .addInput(hydroid_chassis, 1)
    .addInput(hydroid_systems, 1)
    .addInput(credits, 25000)
    .addInput(orokin_cell, 1)
    .addOutput(hydroid, 1);

// inaros

const sands_of_inaros = new Item("Sands of Inaros", "Quest obtained from Baro Ki'Teer for 100 ducats and 25,000 credits.");
const buy_sands_of_inaros = new Recipe("Buy Sands of Inaros", "Buy the Sands of Inaros quest from Baro Ki'Teer for 100 ducats and 25,000 credits.")
    .addInput(ducats, 100)
    .addInput(credits, 25000)
    .addOutput(sands_of_inaros, 1);
const inaros_blueprint = new Item("Inaros Blueprint", "Blueprint obtained from the Sands of Inaros quest.");
const inaros_neuroptics_blueprint = new Item("Inaros Neuroptics Blueprint", "Blueprint obtained from the Sands of Inaros quest.");
const inaros_chassis_blueprint = new Item("Inaros Chassis Blueprint", "Blueprint obtained from the Sands of Inaros quest.");
const inaros_systems_blueprint = new Item("Inaros Systems Blueprint", "Blueprint obtained from the Sands of Inaros quest.");
const do_the_sands_of_inaros_quest = new Recipe("Do the Sands of Inaros Quest", "Do the Sands of Inaros quest to get the blueprints.")
    .addInput(sands_of_inaros, 1)
    .addOutput(inaros_blueprint, 1)
    .addOutput(inaros_neuroptics_blueprint, 1)
    .addOutput(inaros_chassis_blueprint, 1)
    .addOutput(inaros_systems_blueprint, 1);
const inaros_neuroptics = new Item("Inaros Neuroptics", "Part obtained from the blueprint.");
const inaros_chassis = new Item("Inaros Chassis", "Part obtained from the blueprint.");
const inaros_systems = new Item("Inaros Systems", "Part obtained from the blueprint.");
const inaros = new Item("Inaros", "Warframe obtained from the blueprints.");
const craft_inaros_neuroptics = new Recipe("Craft Inaros Neuroptics", "Craft Inaros Neuroptics from the blueprint.")
    .addInput(inaros_neuroptics_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(alloy_plate, 1500)
    .addInput(nitain, 2)
    .addInput(polymer_bundle, 350)
    .addInput(plastids, 500)
    .addOutput(inaros_neuroptics, 1);
const craft_inaros_chassis = new Recipe("Craft Inaros Chassis", "Craft Inaros Chassis from the blueprint.")
    .addInput(inaros_chassis_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(neurodes, 3)
    .addInput(nano_spores, 1000)
    .addInput(plastids, 300)
    .addInput(oxium, 100)
    .addOutput(inaros_chassis, 1);
const craft_inaros_systems = new Recipe("Craft Inaros Systems", "Craft Inaros Systems from the blueprint.")
    .addInput(inaros_systems_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(argon_crystal, 2)
    .addInput(polymer_bundle, 300)
    .addInput(nano_spores, 1600)
    .addInput(circuits, 500)
    .addOutput(inaros_systems, 1);
const craft_inaros = new Recipe("Craft Inaros", "Craft Inaros from the blueprints.")
    .addInput(inaros_blueprint, 1)
    .addInput(inaros_neuroptics, 1)
    .addInput(inaros_chassis, 1)
    .addInput(inaros_systems, 1)
    .addInput(credits, 25000)
    .addInput(orokin_cell, 1)
    .addOutput(inaros, 1);

// ivara
// bp and parts bp spy missions

const ivara_blueprint = new Item("Ivara Blueprint", "Blueprint obtained from spy missions.");
const ivara_neuroptics_blueprint = new Item("Ivara Neuroptics Blueprint", "Blueprint obtained from spy missions.");
const ivara_chassis_blueprint = new Item("Ivara Chassis Blueprint", "Blueprint obtained from spy missions.");
const ivara_systems_blueprint = new Item("Ivara Systems Blueprint", "Blueprint obtained from spy missions.");
const ivara_neuroptics = new Item("Ivara Neuroptics", "Part obtained from spy missions.");
const ivara_chassis = new Item("Ivara Chassis", "Part obtained from spy missions.");
const ivara_systems = new Item("Ivara Systems", "Part obtained from spy missions.");
const ivara = new Item("Ivara", "Warframe obtained from spy missions.");
const craft_ivara_neuroptics = new Recipe("Craft Ivara Neuroptics", "Craft Ivara Neuroptics from the blueprint.")
    .addInput(ivara_neuroptics_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(neurodes, 5)
    .addInput(plastids, 800)
    .addInput(polymer_bundle, 2600)
    .addInput(argon_crystal, 2)
    .addOutput(ivara_neuroptics, 1);
const craft_ivara_chassis = new Recipe("Craft Ivara Chassis", "Craft Ivara Chassis from the blueprint.")
    .addInput(ivara_chassis_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(morphics, 5)
    .addInput(cryotic, 2000)
    .addInput(rubedo, 700)
    .addInput(nitain, 4)
    .addOutput(ivara_chassis, 1);
const craft_ivara_systems = new Recipe("Craft Ivara Systems", "Craft Ivara Systems from the blueprint.")
    .addInput(ivara_systems_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(control_module, 5)
    .addInput(rubedo, 1000)
    .addInput(nitain, 5)
    .addInput(argon_crystal, 1)
    .addOutput(ivara_systems, 1);
const craft_ivara = new Recipe("Craft Ivara", "Craft Ivara from the blueprints.")
    .addInput(ivara_blueprint, 1)
    .addInput(ivara_neuroptics, 1)
    .addInput(ivara_chassis, 1)
    .addInput(ivara_systems, 1)
    .addInput(credits, 25000)
    .addInput(orokin_cell, 1)
    .addOutput(ivara, 1);

// khora
// bp and parts bp sanctuary onslaught

const khora_blueprint = new Item("Khora Blueprint", "Blueprint obtained from sanctuary onslaught.");
const khora_neuroptics_blueprint = new Item("Khora Neuroptics Blueprint", "Blueprint obtained from sanctuary onslaught.");
const khora_chassis_blueprint = new Item("Khora Chassis Blueprint", "Blueprint obtained from sanctuary onslaught.");
const khora_systems_blueprint = new Item("Khora Systems Blueprint", "Blueprint obtained from sanctuary onslaught.");
const khora_neuroptics = new Item("Khora Neuroptics", "Part obtained from sanctuary onslaught.");
const khora_chassis = new Item("Khora Chassis", "Part obtained from sanctuary onslaught.");
const khora_systems = new Item("Khora Systems", "Part obtained from sanctuary onslaught.");
const khora = new Item("Khora", "Warframe obtained from sanctuary onslaught.");
const craft_khora_neuroptics = new Recipe("Craft Khora Neuroptics", "Craft Khora Neuroptics from the blueprint.")
    .addInput(khora_neuroptics_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(kavat_genetic_code, 2)
    .addInput(kuaka_spinal_claw, 35)
    .addInput(polymer_bundle, 1500)
    .addInput(salvage, 16000)
    .addOutput(khora_neuroptics, 1);
const craft_khora_chassis = new Recipe("Craft Khora Chassis", "Craft Khora Chassis from the blueprint.")
    .addInput(khora_chassis_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(kavat_genetic_code, 5)
    .addInput(iradite, 65)
    .addInput(alloy_plate, 12250)
    .addInput(rubedo, 4300)
    .addOutput(khora_chassis, 1);
const craft_khora_systems = new Recipe("Craft Khora Systems", "Craft Khora Systems from the blueprint.")
    .addInput(khora_systems_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(kavat_genetic_code, 2)
    .addInput(plastids, 1000)
    .addInput(circuits, 2600)
    .addInput(ferrite, 11500)
    .addOutput(khora_systems, 1);   
const craft_khora = new Recipe("Craft Khora", "Craft Khora from the blueprints.")
    .addInput(khora_blueprint, 1)
    .addInput(khora_neuroptics, 1)
    .addInput(khora_chassis, 1)
    .addInput(khora_systems, 1)
    .addInput(credits, 25000)
    .addInput(orokin_cell, 3)
    .addOutput(khora, 1);

// lavos
// bp and parts bp father 5k standing

const lavos_blueprint = new Item("Lavos Blueprint", "Blueprint obtained from Father for 5,000 standing.");
const lavos_neuroptics_blueprint = new Item("Lavos Neuroptics Blueprint", "Blueprint obtained from Father for 5,000 standing.");
const lavos_chassis_blueprint = new Item("Lavos Chassis Blueprint", "Blueprint obtained from Father for 5,000 standing.");
const lavos_systems_blueprint = new Item("Lavos Systems Blueprint", "Blueprint obtained from Father for 5,000 standing.");
const buy_lavos_blueprint = new Recipe("Buy Lavos Blueprint", "Buy a Lavos Blueprint from Father for 5,000 standing.")
    .addInput(entrati, 5000)
    .addOutput(lavos_blueprint, 1);
const buy_lavos_neuroptics_blueprint = new Recipe("Buy Lavos Neuroptics Blueprint", "Buy a Lavos Neuroptics Blueprint from Father for 5,000 standing.")
    .addInput(entrati, 5000)
    .addOutput(lavos_neuroptics_blueprint, 1);
const buy_lavos_chassis_blueprint = new Recipe("Buy Lavos Chassis Blueprint", "Buy a Lavos Chassis Blueprint from Father for 5,000 standing.")
    .addInput(entrati, 5000)
    .addOutput(lavos_chassis_blueprint, 1);
const buy_lavos_systems_blueprint = new Recipe("Buy Lavos Systems Blueprint", "Buy a Lavos Systems Blueprint from Father for 5,000 standing.")
    .addInput(entrati, 5000)
    .addOutput(lavos_systems_blueprint, 1);
const lavos_neuroptics = new Item("Lavos Neuroptics", "Part obtained from Father for 5,000 standing.");
const lavos_chassis = new Item("Lavos Chassis", "Part obtained from Father for 5,000 standing.");
const lavos_systems = new Item("Lavos Systems", "Part obtained from Father for 5,000 standing.");
const lavos = new Item("Lavos", "Warframe obtained from Father for 5,000 standing.");
const craft_lavos_neuroptics = new Recipe("Craft Lavos Neuroptics", "Craft Lavos Neuroptics from the blueprint.")
    .addInput(lavos_neuroptics_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(trapezium_xenorhast, 6)
    .addInput(titanium, 2000)
    .addInput(oxium, 750)
    .addInput(rubedo, 2750)
    .addOutput(lavos_neuroptics, 1);
const craft_lavos_chassis = new Recipe("Craft Lavos Chassis", "Craft Lavos Chassis from the blueprint.")
    .addInput(lavos_chassis_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(argon_crystal, 2)
    .addInput(nitain, 5)
    .addInput(cryotic, 1500)
    .addInput(polymer_bundle, 5500)
    .addOutput(lavos_chassis, 1);
const craft_lavos_systems = new Recipe("Craft Lavos Systems", "Craft Lavos Systems from the blueprint.")
    .addInput(lavos_systems_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(cabochon_embolos, 6)
    .addInput(nano_spores, 5500)
    .addInput(hexenon, 550)
    .addInput(circuits, 3000)
    .addOutput(lavos_systems, 1);
const craft_lavos = new Recipe("Craft Lavos", "Craft Lavos from the blueprints.")
    .addInput(lavos_blueprint, 1)
    .addInput(lavos_neuroptics, 1)
    .addInput(lavos_chassis, 1)
    .addInput(lavos_systems, 1)
    .addInput(credits, 25000)
    .addInput(orokin_cell, 3)
    .addOutput(lavos, 1);

// limbo
// bp market 35k
// parts bp limbo theorem quest

const limbo_blueprint = new Item("Limbo Blueprint", "Blueprint obtained from the Market for 35,000 credits.");
const buy_limbo_blueprint = new Recipe("Buy Limbo Blueprint", "Buy a Limbo Blueprint from the Market for 35,000 credits.")
    .addInput(credits, 35000)
    .addOutput(limbo_blueprint, 1);
const limbo_neuroptics_blueprint = new Item("Limbo Neuroptics Blueprint", "Blueprint obtained from the Limbo Theorem quest.");
const limbo_chassis_blueprint = new Item("Limbo Chassis Blueprint", "Blueprint obtained from the Limbo Theorem quest.");
const limbo_systems_blueprint = new Item("Limbo Systems Blueprint", "Blueprint obtained from the Limbo Theorem quest.");
const limbo_neuroptics = new Item("Limbo Neuroptics", "Part obtained from the Limbo Theorem quest.");
const limbo_chassis = new Item("Limbo Chassis", "Part obtained from the Limbo Theorem quest.");
const limbo_systems = new Item("Limbo Systems", "Part obtained from the Limbo Theorem quest.");
const limbo = new Item("Limbo", "Warframe obtained from the Limbo Theorem quest.");
const craft_limbo_neuroptics = new Recipe("Craft Limbo Neuroptics", "Craft Limbo Neuroptics from the blueprint.")
    .addInput(limbo_neuroptics_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(alloy_plate, 150)
    .addInput(neurodes, 2)
    .addInput(polymer_bundle, 150)
    .addInput(rubedo, 500)
    .addOutput(limbo_neuroptics, 1);
const craft_limbo_chassis = new Recipe("Craft Limbo Chassis", "Craft Limbo Chassis from the blueprint.")
    .addInput(limbo_chassis_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(neural_sensor, 1)
    .addInput(ferrite, 1000)
    .addInput(rubedo, 300)
    .addInput(argon_crystal, 1)
    .addOutput(limbo_chassis, 1);
const craft_limbo_systems = new Recipe("Craft Limbo Systems", "Craft Limbo Systems from the blueprint.")
    .addInput(limbo_systems_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(control_module, 1)
    .addInput(morphics, 3)
    .addInput(salvage, 500)
    .addInput(plastids, 220)
    .addOutput(limbo_systems, 1);
const craft_limbo = new Recipe("Craft Limbo", "Craft Limbo from the blueprints.")
    .addInput(limbo_blueprint, 1)
    .addInput(limbo_neuroptics, 1)
    .addInput(limbo_chassis, 1)
    .addInput(limbo_systems, 1)
    .addInput(credits, 25000)
    .addInput(orokin_cell, 3)
    .addOutput(limbo, 1);

// loki
// bp market 35k
// parts bp hyena pack

const loki_blueprint = new Item("Loki Blueprint", "Blueprint obtained from the Market for 35,000 credits.");
const buy_loki_blueprint = new Recipe("Buy Loki Blueprint", "Buy a Loki Blueprint from the Market for 35,000 credits.")
    .addInput(credits, 35000)
    .addOutput(loki_blueprint, 1);
const loki_neuroptics_blueprint = new Item("Loki Neuroptics Blueprint", "Blueprint obtained from the Hyena Pack.");
const loki_chassis_blueprint = new Item("Loki Chassis Blueprint", "Blueprint obtained from the Hyena Pack.");
const loki_systems_blueprint = new Item("Loki Systems Blueprint", "Blueprint obtained from the Hyena Pack.");
const loki_neuroptics = new Item("Loki Neuroptics", "Part obtained from the Hyena Pack.");
const loki_chassis = new Item("Loki Chassis", "Part obtained from the Hyena Pack.");
const loki_systems = new Item("Loki Systems", "Part obtained from the Hyena Pack.");
const loki = new Item("Loki", "Warframe obtained from the Hyena Pack.");
const craft_loki_neuroptics = new Recipe("Craft Loki Neuroptics", "Craft Loki Neuroptics from the blueprint.")
    .addInput(loki_neuroptics_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(alloy_plate, 150)
    .addInput(neural_sensor, 1)
    .addInput(polymer_bundle, 150)
    .addInput(rubedo, 500)
    .addOutput(loki_neuroptics, 1);
const craft_loki_chassis = new Recipe("Craft Loki Chassis", "Craft Loki Chassis from the blueprint.")
    .addInput(loki_chassis_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(morphics, 1)
    .addInput(ferrite, 1000)
    .addInput(rubedo, 300)
    .addOutput(loki_chassis, 1);
const craft_loki_systems = new Recipe("Craft Loki Systems", "Craft Loki Systems from the blueprint.")
    .addInput(loki_systems_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(control_module, 1)
    .addInput(morphics, 1)
    .addInput(salvage, 500)
    .addInput(plastids, 220)
    .addOutput(loki_systems, 1);
const craft_loki = new Recipe("Craft Loki", "Craft Loki from the blueprints.")
    .addInput(loki_blueprint, 1)
    .addInput(loki_neuroptics, 1)
    .addInput(loki_chassis, 1)
    .addInput(loki_systems, 1)
    .addInput(credits, 25000)
    .addInput(orokin_cell, 1)
    .addOutput(loki, 1);

// mag
// bp market 25k
// parts bp sergeant assassination

const mag_blueprint = new Item("Mag Blueprint", "Blueprint obtained from the Market for 25,000 credits.");
const buy_mag_blueprint = new Recipe("Buy Mag Blueprint", "Buy a Mag Blueprint from the Market for 25,000 credits.")
    .addInput(credits, 25000)
    .addOutput(mag_blueprint, 1);
const mag_neuroptics_blueprint = new Item("Mag Neuroptics Blueprint", "Blueprint obtained from the Sergeant.");
const mag_chassis_blueprint = new Item("Mag Chassis Blueprint", "Blueprint obtained from the Sergeant.");
const mag_systems_blueprint = new Item("Mag Systems Blueprint", "Blueprint obtained from the Sergeant.");
const mag_neuroptics = new Item("Mag Neuroptics", "Part obtained from the Sergeant.");
const mag_chassis = new Item("Mag Chassis", "Part obtained from the Sergeant.");
const mag_systems = new Item("Mag Systems", "Part obtained from the Sergeant.");
const mag = new Item("Mag", "Warframe obtained from the Sergeant.");
const craft_mag_neuroptics = new Recipe("Craft Mag Neuroptics", "Craft Mag Neuroptics from the blueprint.")
    .addInput(mag_neuroptics_blueprint, 1)
    .addInput(credits, 15000)   
    .addInput(alloy_plate, 150)
    .addInput(neural_sensor, 1)
    .addInput(polymer_bundle, 150)
    .addInput(rubedo, 500)
    .addOutput(mag_neuroptics, 1);
const craft_mag_chassis = new Recipe("Craft Mag Chassis", "Craft Mag Chassis from the blueprint.")
    .addInput(mag_chassis_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(morphics, 1)
    .addInput(ferrite, 1000)
    .addInput(rubedo, 300)
    .addOutput(mag_chassis, 1);
const craft_mag_systems = new Recipe("Craft Mag Systems", "Craft Mag Systems from the blueprint.")
    .addInput(mag_systems_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(control_module, 1)
    .addInput(morphics, 1)
    .addInput(salvage, 500)
    .addInput(plastids, 220)
    .addOutput(mag_systems, 1);
const craft_mag = new Recipe("Craft Mag", "Craft Mag from the blueprints.")
    .addInput(mag_blueprint, 1)
    .addInput(mag_neuroptics, 1)
    .addInput(mag_chassis, 1)
    .addInput(mag_systems, 1)
    .addInput(credits, 25000)
    .addInput(orokin_cell, 1)
    .addOutput(mag, 1);

// mesa
// bp market 35k
// parts bp mutalist alad v assassination

const mesa_blueprint = new Item("Mesa Blueprint", "Blueprint obtained from the Market for 35,000 credits.");
const buy_mesa_blueprint = new Recipe("Buy Mesa Blueprint", "Buy a Mesa Blueprint from the Market for 35,000 credits.")
    .addInput(credits, 35000)
    .addOutput(mesa_blueprint, 1);
const mesa_neuroptics_blueprint = new Item("Mesa Neuroptics Blueprint", "Blueprint obtained from Mutalist Alad V.");
const mesa_chassis_blueprint = new Item("Mesa Chassis Blueprint", "Blueprint obtained from Mutalist Alad V.");
const mesa_systems_blueprint = new Item("Mesa Systems Blueprint", "Blueprint obtained from Mutalist Alad V.");
const mesa_neuroptics = new Item("Mesa Neuroptics", "Part obtained from Mutalist Alad V.");
const mesa_chassis = new Item("Mesa Chassis", "Part obtained from Mutalist Alad V.");
const mesa_systems = new Item("Mesa Systems", "Part obtained from Mutalist Alad V.");
const mesa = new Item("Mesa", "Warframe obtained from Mutalist Alad V.");
const craft_mesa_neuroptics = new Recipe("Craft Mesa Neuroptics", "Craft Mesa Neuroptics from the blueprint.")
    .addInput(mesa_neuroptics_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(alloy_plate, 1500)
    .addInput(neural_sensor, 2)
    .addInput(polymer_bundle, 350)
    .addInput(plastids, 500)
    .addOutput(mesa_neuroptics, 1);
const craft_mesa_chassis = new Recipe("Craft Mesa Chassis", "Craft Mesa Chassis from the blueprint.")
    .addInput(mesa_chassis_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(morphics, 1)
    .addInput(oxium, 50)
    .addInput(plastids, 300)
    .addInput(nano_spores, 1000)
    .addOutput(mesa_chassis, 1);
const craft_mesa_systems = new Recipe("Craft Mesa Systems", "Craft Mesa Systems from the blueprint.")
    .addInput(mesa_systems_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(argon_crystal, 1)
    .addInput(nano_spores, 1600)
    .addInput(polymer_bundle, 300)
    .addInput(circuits, 500)
    .addOutput(mesa_systems, 1);
const craft_mesa = new Recipe("Craft Mesa", "Craft Mesa from the blueprints.")
    .addInput(mesa_blueprint, 1)
    .addInput(mesa_neuroptics, 1)
    .addInput(mesa_chassis, 1)
    .addInput(mesa_systems, 1)
    .addInput(credits, 25000)
    .addInput(orokin_cell, 1)
    .addOutput(mesa, 1);

// mirage
// bp market 35k
// parts bp hidden messages quest

const mirage_blueprint = new Item("Mirage Blueprint", "Blueprint obtained from the Market for 35,000 credits.");
const buy_mirage_blueprint = new Recipe("Buy Mirage Blueprint", "Buy a Mirage Blueprint from the Market for 35,000 credits.")
    .addInput(credits, 35000)
    .addOutput(mirage_blueprint, 1);
const mirage_neuroptics_blueprint = new Item("Mirage Neuroptics Blueprint", "Blueprint obtained from the Hidden Messages quest.");
const mirage_chassis_blueprint = new Item("Mirage Chassis Blueprint", "Blueprint obtained from the Hidden Messages quest.");
const mirage_systems_blueprint = new Item("Mirage Systems Blueprint", "Blueprint obtained from the Hidden Messages quest.");
const mirage_neuroptics = new Item("Mirage Neuroptics", "Part obtained from the Hidden Messages quest.");
const mirage_chassis = new Item("Mirage Chassis", "Part obtained from the Hidden Messages quest.");
const mirage_systems = new Item("Mirage Systems", "Part obtained from the Hidden Messages quest.");
const mirage = new Item("Mirage", "Warframe obtained from the Hidden Messages quest.");
const craft_mirage_neuroptics = new Recipe("Craft Mirage Neuroptics", "Craft Mirage Neuroptics from the blueprint.")
    .addInput(mirage_neuroptics_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(alloy_plate, 250)
    .addInput(neurodes, 1)
    .addInput(polymer_bundle, 400)
    .addInput(orokin_cell, 1)
    .addOutput(mirage_neuroptics, 1);
const craft_mirage_chassis = new Recipe("Craft Mirage Chassis", "Craft Mirage Chassis from the blueprint.")
    .addInput(mirage_chassis_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(orokin_cell, 1)
    .addInput(ferrite, 2500)
    .addInput(plastids, 450)
    .addInput(gallium, 1)
    .addOutput(mirage_chassis, 1);
const craft_mirage_systems = new Recipe("Craft Mirage Systems", "Craft Mirage Systems from the blueprint.")
    .addInput(mirage_systems_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(control_module, 1)
    .addInput(circuits, 250)
    .addInput(polymer_bundle, 650)
    .addInput(orokin_cell, 1)
    .addOutput(mirage_systems, 1);
const craft_mirage = new Recipe("Craft Mirage", "Craft Mirage from the blueprints.")
    .addInput(mirage_blueprint, 1)
    .addInput(mirage_neuroptics, 1)
    .addInput(mirage_chassis, 1)
    .addInput(mirage_systems, 1)
    .addInput(credits, 25000)
    .addInput(argon_crystal, 1)
    .addOutput(mirage, 1);

// nekros
// bp market 100k
// parts bp lephantis assassination

const nekros_blueprint = new Item("Nekros Blueprint", "Blueprint obtained from the Market for 100,000 credits.");
const buy_nekros_blueprint = new Recipe("Buy Nekros Blueprint", "Buy a Nekros Blueprint from the Market for 100,000 credits.")
    .addInput(credits, 100000)
    .addOutput(nekros_blueprint, 1);
const nekros_neuroptics_blueprint = new Item("Nekros Neuroptics Blueprint", "Blueprint obtained from the Lephantis Assassination.");
const nekros_chassis_blueprint = new Item("Nekros Chassis Blueprint", "Blueprint obtained from the Lephantis Assassination.");
const nekros_systems_blueprint = new Item("Nekros Systems Blueprint", "Blueprint obtained from the Lephantis Assassination.");
const nekros_neuroptics = new Item("Nekros Neuroptics", "Part obtained from the Lephantis Assassination.");
const nekros_chassis = new Item("Nekros Chassis", "Part obtained from the Lephantis Assassination.");
const nekros_systems = new Item("Nekros Systems", "Part obtained from the Lephantis Assassination.");
const nekros = new Item("Nekros", "Warframe obtained from the Lephantis Assassination.");
const craft_nekros_neuroptics = new Recipe("Craft Nekros Neuroptics", "Craft Nekros Neuroptics from the blueprint.")
    .addInput(nekros_neuroptics_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(alloy_plate, 150)
    .addInput(neural_sensor, 1)
    .addInput(polymer_bundle, 150)
    .addInput(rubedo, 500)
    .addOutput(nekros_neuroptics, 1);
const craft_nekros_chassis = new Recipe("Craft Nekros Chassis", "Craft Nekros Chassis from the blueprint.")
    .addInput(nekros_chassis_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(morphics, 1)
    .addInput(ferrite, 1000)
    .addInput(rubedo, 300)
    .addOutput(nekros_chassis, 1);
const craft_nekros_systems = new Recipe("Craft Nekros Systems", "Craft Nekros Systems from the blueprint.")
    .addInput(nekros_systems_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(control_module, 1)
    .addInput(morphics, 1)
    .addInput(salvage, 500)
    .addInput(plastids, 220)
    .addOutput(nekros_systems, 1);
const craft_nekros = new Recipe("Craft Nekros", "Craft Nekros from the blueprints.")
    .addInput(nekros_blueprint, 1)
    .addInput(nekros_neuroptics, 1)
    .addInput(nekros_chassis, 1)
    .addInput(nekros_systems, 1)
    .addInput(credits, 25000)
    .addInput(orokin_cell, 3)
    .addOutput(nekros, 1);

// nezha
// bp and parts bp tenno lab 15k

const nezha_blueprint = new Item("Nezha Blueprint", "Blueprint obtained from the Tenno Lab in the Dojo for 15,000 credits.");
const buy_nezha_blueprint = new Recipe("Buy Nezha Blueprint", "Buy a Nezha Blueprint from the Tenno Lab in the Dojo for 15,000 credits.")
    .addInput(credits, 15000)
    .addOutput(nezha_blueprint, 1);
const nezha_neuroptics_blueprint = new Item("Nezha Neuroptics Blueprint", "Blueprint obtained from the Tenno Lab in the Dojo for 15,000 credits.");
const buy_nezha_neuroptics_blueprint = new Recipe("Buy Nezha Neuroptics Blueprint", "Buy a Nezha Neuroptics Blueprint from the Tenno Lab in the Dojo for 15,000 credits.")
    .addInput(credits, 15000)
    .addOutput(nezha_neuroptics_blueprint, 1);
const nezha_chassis_blueprint = new Item("Nezha Chassis Blueprint", "Blueprint obtained from the Tenno Lab in the Dojo for 15,000 credits.");
const buy_nezha_chassis_blueprint = new Recipe("Buy Nezha Chassis Blueprint", "Buy a Nezha Chassis Blueprint from the Tenno Lab in the Dojo for 15,000 credits.")
    .addInput(credits, 15000)
    .addOutput(nezha_chassis_blueprint, 1);
const nezha_systems_blueprint = new Item("Nezha Systems Blueprint", "Blueprint obtained from the Tenno Lab in the Dojo for 15,000 credits.");
const buy_nezha_systems_blueprint = new Recipe("Buy Nezha Systems Blueprint", "Buy a Nezha Systems Blueprint from the Tenno Lab in the Dojo for 15,000 credits.")
    .addInput(credits, 15000)
    .addOutput(nezha_systems_blueprint, 1);
const nezha_neuroptics = new Item("Nezha Neuroptics", "Part obtained from the Tenno Lab in the Dojo for 15,000 credits.");
const nezha_chassis = new Item("Nezha Chassis", "Part obtained from the Tenno Lab in the Dojo for 15,000 credits.");
const nezha_systems = new Item("Nezha Systems", "Part obtained from the Tenno Lab in the Dojo for 15,000 credits.");
const nezha = new Item("Nezha", "Warframe obtained from the Tenno Lab in the Dojo for 15,000 credits.");
const craft_nezha_neuroptics = new Recipe("Craft Nezha Neuroptics", "Craft Nezha Neuroptics from the blueprint.")
    .addInput(nezha_neuroptics_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(argon_crystal, 1)
    .addInput(neural_sensor, 1)
    .addInput(polymer_bundle, 2100)
    .addInput(salvage, 4500)
    .addOutput(nezha_neuroptics, 1);
const craft_nezha_chassis = new Recipe("Craft Nezha Chassis", "Craft Nezha Chassis from the blueprint.")
    .addInput(nezha_chassis_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(morphics, 2)
    .addInput(ferrite, 3200)
    .addInput(rubedo, 600)
    .addInput(argon_crystal, 1)
    .addOutput(nezha_chassis, 1);
const craft_nezha_systems = new Recipe("Craft Nezha Systems", "Craft Nezha Systems from the blueprint.")
    .addInput(nezha_systems_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(control_module, 1)
    .addInput(morphics, 1)
    .addInput(ferrite, 5000)
    .addInput(plastids, 4200)
    .addOutput(nezha_systems, 1);
const craft_nezha = new Recipe("Craft Nezha", "Craft Nezha from the blueprints.")
    .addInput(nezha_blueprint, 1)
    .addInput(nezha_neuroptics, 1)
    .addInput(nezha_chassis, 1)
    .addInput(nezha_systems, 1)
    .addInput(credits, 25000)
    .addInput(orokin_cell, 1)
    .addOutput(nezha, 1);

// nidus
// bp glast gambit quest
// parts bp infested salvage c rotation

const nidus_blueprint = new Item("Nidus Blueprint", "Blueprint obtained from the Glast Gambit quest.");
const nidus_neuroptics_blueprint = new Item("Nidus Neuroptics Blueprint", "Blueprint obtained from the Infested Salvage mission on rotation C.");
const nidus_chassis_blueprint = new Item("Nidus Chassis Blueprint", "Blueprint obtained from the Infested Salvage mission on rotation C.");
const nidus_systems_blueprint = new Item("Nidus Systems Blueprint", "Blueprint obtained from the Infested Salvage mission on rotation C.");
const nidus_neuroptics = new Item("Nidus Neuroptics", "Part obtained from the Infested Salvage mission on rotation C.");
const nidus_chassis = new Item("Nidus Chassis", "Part obtained from the Infested Salvage mission on rotation C.");
const nidus_systems = new Item("Nidus Systems", "Part obtained from the Infested Salvage mission on rotation C.");
const nidus = new Item("Nidus", "Warframe obtained from the Glast Gambit quest and the Infested Salvage mission on rotation C.");
const craft_nidus_neuroptics = new Recipe("Craft Nidus Neuroptics", "Craft Nidus Neuroptics from the blueprint.")
    .addInput(nidus_neuroptics_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(mutagen_sample, 10)
    .addInput(polymer_bundle, 2600)
    .addInput(plastids, 1000)
    .addInput(neural_sensor, 3)
    .addOutput(nidus_neuroptics, 1);
const craft_nidus_chassis = new Recipe("Craft Nidus Chassis", "Craft Nidus Chassis from the blueprint.")
    .addInput(nidus_chassis_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(polymer_bundle, 6000)
    .addInput(nano_spores, 5000)
    .addInput(plastids, 1400)
    .addInput(neurodes, 3)
    .addOutput(nidus_chassis, 1);
const craft_nidus_systems = new Recipe("Craft Nidus Systems", "Craft Nidus Systems from the blueprint.")
    .addInput(nidus_systems_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(nano_spores, 6000)
    .addInput(circuits, 3500)
    .addInput(morphics, 14)
    .addInput(orokin_cell, 6)
    .addOutput(nidus_systems, 1);
const craft_nidus = new Recipe("Craft Nidus", "Craft Nidus from the blueprints.")
    .addInput(nidus_blueprint, 1)
    .addInput(nidus_neuroptics, 1)
    .addInput(nidus_chassis, 1)
    .addInput(nidus_systems, 1)
    .addInput(credits, 25000)
    .addInput(kuva, 2000)
    .addOutput(nidus, 1);

// nova
// bp market 35k
// parts bp raptors assassination

const nova_blueprint = new Item("Nova Blueprint", "Blueprint obtained from the Market for 35,000 credits.");
const buy_nova_blueprint = new Recipe("Buy Nova Blueprint", "Buy a Nova Blueprint from the Market for 35,000 credits.")
    .addInput(credits, 35000)
    .addOutput(nova_blueprint, 1);
const nova_neuroptics_blueprint = new Item("Nova Neuroptics Blueprint", "Blueprint obtained from the Raptors assassination mission.");
const nova_chassis_blueprint = new Item("Nova Chassis Blueprint", "Blueprint obtained from the Raptors assassination mission.");
const nova_systems_blueprint = new Item("Nova Systems Blueprint", "Blueprint obtained from the Raptors assassination mission.");
const nova_neuroptics = new Item("Nova Neuroptics", "Part obtained from the Raptors assassination mission.");
const nova_chassis = new Item("Nova Chassis", "Part obtained from the Raptors assassination mission.");
const nova_systems = new Item("Nova Systems", "Part obtained from the Raptors assassination mission.");
const nova = new Item("Nova", "Warframe obtained from the Market for 35,000 credits and the Raptors assassination mission.");
const craft_nova_neuroptics = new Recipe("Craft Nova Neuroptics", "Craft Nova Neuroptics from the blueprint.")
    .addInput(nova_neuroptics_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(alloy_plate, 150)
    .addInput(neural_sensor, 1)
    .addInput(polymer_bundle, 150)
    .addInput(rubedo, 500)
    .addOutput(nova_neuroptics, 1);
const craft_nova_chassis = new Recipe("Craft Nova Chassis", "Craft Nova Chassis from the blueprint.")
    .addInput(nova_chassis_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(morphics, 1)
    .addInput(ferrite, 1000)
    .addInput(rubedo, 300)
    .addOutput(nova_chassis, 1);
const craft_nova_systems = new Recipe("Craft Nova Systems", "Craft Nova Systems from the blueprint.")
    .addInput(nova_systems_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(control_module, 1)
    .addInput(morphics, 1)
    .addInput(salvage, 500)
    .addInput(plastids, 600)
    .addOutput(nova_systems, 1);
const craft_nova = new Recipe("Craft Nova", "Craft Nova from the blueprints.")
    .addInput(nova_blueprint, 1)
    .addInput(nova_neuroptics, 1)
    .addInput(nova_chassis, 1)
    .addInput(nova_systems, 1)
    .addInput(credits, 25000)
    .addInput(orokin_cell, 1)
    .addOutput(nova, 1);

// nyx
// bp market 25k
// parts bp phorid assassination

const nyx_blueprint = new Item("Nyx Blueprint", "Blueprint obtained from the Market for 25,000 credits.");
const buy_nyx_blueprint = new Recipe("Buy Nyx Blueprint", "Buy a Nyx Blueprint from the Market for 25,000 credits.")
    .addInput(credits, 25000)
    .addOutput(nyx_blueprint, 1);
const nyx_neuroptics_blueprint = new Item("Nyx Neuroptics Blueprint", "Blueprint obtained from the Phorid assassination mission.");
const nyx_chassis_blueprint = new Item("Nyx Chassis Blueprint", "Blueprint obtained from the Phorid assassination mission.");
const nyx_systems_blueprint = new Item("Nyx Systems Blueprint", "Blueprint obtained from the Phorid assassination mission.");
const nyx_neuroptics = new Item("Nyx Neuroptics", "Part obtained from the Phorid assassination mission.");
const nyx_chassis = new Item("Nyx Chassis", "Part obtained from the Phorid assassination mission.");
const nyx_systems = new Item("Nyx Systems", "Part obtained from the Phorid assassination mission.");
const nyx = new Item("Nyx", "Warframe obtained from the Market for 25,000 credits and the Phorid assassination mission.");
const craft_nyx_neuroptics = new Recipe("Craft Nyx Neuroptics", "Craft Nyx Neuroptics from the blueprint.")
    .addInput(nyx_neuroptics_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(alloy_plate, 150)
    .addInput(neural_sensor, 1)
    .addInput(polymer_bundle, 150)
    .addInput(rubedo, 500)
    .addOutput(nyx_neuroptics, 1);
const craft_nyx_chassis = new Recipe("Craft Nyx Chassis", "Craft Nyx Chassis from the blueprint.")
    .addInput(nyx_chassis_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(morphics, 1)
    .addInput(ferrite, 1000)
    .addInput(rubedo, 300)
    .addOutput(nyx_chassis, 1);
const craft_nyx_systems = new Recipe("Craft Nyx Systems", "Craft Nyx Systems from the blueprint.")
    .addInput(nyx_systems_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(control_module, 1)
    .addInput(morphics, 1)
    .addInput(salvage, 500)
    .addInput(plastids, 220)
    .addOutput(nyx_systems, 1);
const craft_nyx = new Recipe("Craft Nyx", "Craft Nyx from the blueprints.")
    .addInput(nyx_blueprint, 1)
    .addInput(nyx_neuroptics, 1)
    .addInput(nyx_chassis, 1)
    .addInput(nyx_systems, 1)
    .addInput(credits, 25000)
    .addInput(orokin_cell, 1)
    .addOutput(nyx, 1);

// oberon
// bp market 30k
// parts bp railjack missions

const oberon_blueprint = new Item("Oberon Blueprint", "Blueprint obtained from the Market for 30,000 credits.");
const buy_oberon_blueprint = new Recipe("Buy Oberon Blueprint", "Buy an Oberon Blueprint from the Market for 30,000 credits.")
    .addInput(credits, 30000)
    .addOutput(oberon_blueprint, 1);
const oberon_neuroptics_blueprint = new Item("Oberon Neuroptics Blueprint", "Blueprint obtained from the Railjack missions.");
const oberon_chassis_blueprint = new Item("Oberon Chassis Blueprint", "Blueprint obtained from the Railjack missions.");
const oberon_systems_blueprint = new Item("Oberon Systems Blueprint", "Blueprint obtained from the Railjack missions.");
const oberon_neuroptics = new Item("Oberon Neuroptics", "Part obtained from the Railjack missions.");
const oberon_chassis = new Item("Oberon Chassis", "Part obtained from the Railjack missions.");
const oberon_systems = new Item("Oberon Systems", "Part obtained from the Railjack missions.");
const oberon = new Item("Oberon", "Warframe obtained from the Market for 30,000 credits and the Railjack missions.");
const craft_oberon_neuroptics = new Recipe("Craft Oberon Neuroptics", "Craft Oberon Neuroptics from the blueprint.")
    .addInput(oberon_neuroptics_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(alloy_plate, 150)
    .addInput(control_module, 1)
    .addInput(polymer_bundle, 150)
    .addInput(circuits, 500)
    .addOutput(oberon_neuroptics, 1);
const craft_oberon_chassis = new Recipe("Craft Oberon Chassis", "Craft Oberon Chassis from the blueprint.")
    .addInput(oberon_chassis_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(gallium, 1)
    .addInput(polymer_bundle, 1000)
    .addInput(rubedo, 300)
    .addOutput(oberon_chassis, 1);
const craft_oberon_systems = new Recipe("Craft Oberon Systems", "Craft Oberon Systems from the blueprint.")
    .addInput(oberon_systems_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(orokin_cell, 1)
    .addInput(gallium, 1)
    .addInput(polymer_bundle, 500)
    .addInput(alloy_plate, 220)
    .addOutput(oberon_systems, 1);
const craft_oberon = new Recipe("Craft Oberon", "Craft Oberon from the blueprints.")
    .addInput(oberon_blueprint, 1)
    .addInput(oberon_neuroptics, 1)
    .addInput(oberon_chassis, 1)
    .addInput(oberon_systems, 1)
    .addInput(credits, 25000)
    .addInput(orokin_cell, 1)
    .addOutput(oberon, 1);

// octavia
// bp octavia quest
// chassis bp music puzzle lua
// neuroptics bp terrorem rotation c
// systems bp plato rotation a

const octavia_blueprint = new Item("Octavia Blueprint", "Blueprint obtained from the Octavia's Anthem quest.");
const octavia_neuroptics_blueprint = new Item("Octavia Neuroptics Blueprint", "Blueprint obtained from the Terrorem mission on C rotation.");
const octavia_chassis_blueprint = new Item("Octavia Chassis Blueprint", "Blueprint obtained from the music puzzle on Lua.");
const octavia_systems_blueprint = new Item("Octavia Systems Blueprint", "Blueprint obtained from Plato on A rotation.");
const octavia_neuroptics = new Item("Octavia Neuroptics", "Part obtained from the Terrorem mission on C rotation.");
const octavia_chassis = new Item("Octavia Chassis", "Part obtained from the music puzzle on Lua.");
const octavia_systems = new Item("Octavia Systems", "Part obtained from Plato on A rotation.");
const octavia = new Item("Octavia", "Warframe obtained from the Octavia's Anthem quest, Terrorem mission on C rotation, music puzzle on Lua, and Plato on A rotation.");
const craft_octavia_neuroptics = new Recipe("Craft Octavia Neuroptics", "Craft Octavia Neuroptics from the blueprint.")
    .addInput(octavia_neuroptics_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(oxium, 1000)
    .addInput(polymer_bundle, 4800)
    .addInput(plastids, 2600)
    .addInput(neural_sensor, 5)
    .addOutput(octavia_neuroptics, 1);
const craft_octavia_chassis = new Recipe("Craft Octavia Chassis", "Craft Octavia Chassis from the blueprint.")
    .addInput(octavia_chassis_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(polymer_bundle, 6000)
    .addInput(salvage, 25000)
    .addInput(plastids, 1500)
    .addInput(neurodes, 3)
    .addOutput(octavia_chassis, 1);
const craft_octavia_systems = new Recipe("Craft Octavia Systems", "Craft Octavia Systems from the blueprint.")
    .addInput(octavia_systems_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(kuva, 2000)
    .addInput(circuits, 3000)
    .addInput(morphics, 20)
    .addInput(orokin_cell, 5)
    .addOutput(octavia_systems, 1);
const craft_octavia = new Recipe("Craft Octavia", "Craft Octavia from the blueprints.")
    .addInput(octavia_blueprint, 1)
    .addInput(octavia_neuroptics, 1)
    .addInput(octavia_chassis, 1)
    .addInput(octavia_systems, 1)
    .addInput(credits, 25000)
    .addOutput(octavia, 1);

// protea
// bp deadlock protocol quest
// parts bp granum void

const protea_blueprint = new Item("Protea Blueprint", "Blueprint obtained from the Deadlock Protocol quest.");
const protea_neuroptics_blueprint = new Item("Protea Neuroptics Blueprint", "Blueprint obtained from the Granum Void rotation C.");
const protea_chassis_blueprint = new Item("Protea Chassis Blueprint", "Blueprint obtained from Nightmare Granum Void rotation C.");
const protea_systems_blueprint = new Item("Protea Systems Blueprint", "Blueprint obtained from Extended Granum Void rotation C.");
const protea_neuroptics = new Item("Protea Neuroptics", "Part obtained from the Granum Void rotation C.");
const protea_chassis = new Item("Protea Chassis", "Part obtained from Nightmare Granum Void rotation C.");
const protea_systems = new Item("Protea Systems", "Part obtained from Extended Granum Void rotation C.");
const protea = new Item("Protea", "Warframe obtained from the Deadlock Protocol quest, Granum Void rotation C, Nightmare Granum Void rotation C, and Extended Granum Void rotation C.");
const craft_protea_neuroptics = new Recipe("Craft Protea Neuroptics", "Craft Protea Neuroptics from the blueprint.")
    .addInput(protea_neuroptics_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(salvage, 11500)
    .addInput(polymer_bundle, 5150)
    .addInput(cubic_diodes, 1250)
    .addInput(neural_sensor, 5)
    .addOutput(protea_neuroptics, 1);
const craft_protea_chassis = new Recipe("Craft Protea Chassis", "Craft Protea Chassis from the blueprint.")
    .addInput(protea_chassis_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(alloy_plate, 20000)
    .addInput(carbides, 2750)
    .addInput(oxium, 550)
    .addInput(morphics, 12)
    .addOutput(protea_chassis, 1);
const craft_protea_systems = new Recipe("Craft Protea Systems", "Craft Protea Systems from the blueprint.")
    .addInput(protea_systems_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(ferrite, 13400)
    .addInput(cryotic, 1000)
    .addInput(titanium, 1750)
    .addInput(control_module, 10)
    .addOutput(protea_systems, 1);
const craft_protea = new Recipe("Craft Protea", "Craft Protea from the blueprints.")
    .addInput(protea_blueprint, 1)
    .addInput(protea_neuroptics, 1)
    .addInput(protea_chassis, 1)
    .addInput(protea_systems, 1)
    .addInput(credits, 25000)
    .addInput(orokin_cell, 3)
    .addOutput(protea, 1);

// revenant
// bp revenant quest
// parts bp cetus bounties

const revenant_blueprint = new Item("Revenant Blueprint", "Blueprint obtained from the Mask of the Revenant quest.");
const revenant_neuroptics_blueprint = new Item("Revenant Neuroptics Blueprint", "Blueprint obtained from Cetus bounties.");
const revenant_chassis_blueprint = new Item("Revenant Chassis Blueprint", "Blueprint obtained from Cetus bounties.");
const revenant_systems_blueprint = new Item("Revenant Systems Blueprint", "Blueprint obtained from Cetus bounties.");
const revenant_neuroptics = new Item("Revenant Neuroptics", "Part obtained from Cetus bounties.");
const revenant_chassis = new Item("Revenant Chassis", "Part obtained from Cetus bounties.");
const revenant_systems = new Item("Revenant Systems", "Part obtained from Cetus bounties.");
const revenant = new Item("Revenant", "Warframe obtained from the Mask of the Revenant quest and Cetus bounties.");
const craft_revenant_neuroptics = new Recipe("Craft Revenant Neuroptics", "Craft Revenant Neuroptics from the blueprint.")
    .addInput(revenant_neuroptics_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(neural_sensor, 3)
    .addInput(intact_sentient_core, 15)
    .addInput(polymer_bundle, 6000)
    .addInput(rubedo, 2200)
    .addOutput(revenant_neuroptics, 1);
const craft_revenant_chassis = new Recipe("Craft Revenant Chassis", "Craft Revenant Chassis from the blueprint.")
    .addInput(revenant_chassis_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(morphics, 3)
    .addInput(intact_sentient_core, 10)
    .addInput(rubedo, 1500)
    .addInput(iradite, 50)
    .addOutput(revenant_chassis, 1);
const craft_revenant_systems = new Recipe("Craft Revenant Systems", "Craft Revenant Systems from the blueprint.")
    .addInput(revenant_systems_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(control_module, 3)
    .addInput(cetus_wisp, 3)
    .addInput(salvage, 8000)
    .addInput(polymer_bundle, 3000)
    .addOutput(revenant_systems, 1);
const craft_revenant = new Recipe("Craft Revenant", "Craft Revenant from the blueprints.")
    .addInput(revenant_blueprint, 1)
    .addInput(revenant_neuroptics, 1)
    .addInput(revenant_chassis, 1)
    .addInput(revenant_systems, 1)
    .addInput(credits, 25000)
    .addInput(orokin_cell, 1)
    .addOutput(revenant, 1);

// rhino
// bp market 35k
// parts bp jackal assassination

const rhino_blueprint = new Item("Rhino Blueprint", "Blueprint obtained from the Market for 35,000 credits.");
const buy_rhino_blueprint = new Recipe("Buy Rhino Blueprint", "Buy a Rhino Blueprint from the Market for 35,000 credits.")
    .addInput(credits, 35000)
    .addOutput(rhino_blueprint, 1);
const rhino_neuroptics_blueprint = new Item("Rhino Neuroptics Blueprint", "Blueprint obtained from the Jackal assassination on Fossa, Venus.");
const rhino_chassis_blueprint = new Item("Rhino Chassis Blueprint", "Blueprint obtained from the Jackal assassination on Fossa, Venus.");
const rhino_systems_blueprint = new Item("Rhino Systems Blueprint", "Blueprint obtained from the Jackal assassination on Fossa, Venus.");
const rhino_neuroptics = new Item("Rhino Neuroptics", "Part obtained from the Jackal assassination on Fossa, Venus.");
const rhino_chassis = new Item("Rhino Chassis", "Part obtained from the Jackal assassination on Fossa, Venus.");
const rhino_systems = new Item("Rhino Systems", "Part obtained from the Jackal assassination on Fossa, Venus.");
const rhino = new Item("Rhino", "Warframe obtained from the Market and the Jackal assassination on Fossa, Venus.");
const craft_rhino_neuroptics = new Recipe("Craft Rhino Neuroptics", "Craft Rhino Neuroptics from the blueprint.")
    .addInput(rhino_neuroptics_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(alloy_plate, 150)
    .addInput(morphics, 1)
    .addInput(polymer_bundle, 150)
    .addInput(rubedo, 500)
    .addOutput(rhino_neuroptics, 1);
const craft_rhino_chassis = new Recipe("Craft Rhino Chassis", "Craft Rhino Chassis from the blueprint.")
    .addInput(rhino_chassis_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(morphics, 1)
    .addInput(ferrite, 1000)
    .addInput(rubedo, 300)
    .addOutput(rhino_chassis, 1);
const craft_rhino_systems = new Recipe("Craft Rhino Systems", "Craft Rhino Systems from the blueprint.")
    .addInput(rhino_systems_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(gallium, 1)
    .addInput(morphics, 1)
    .addInput(salvage, 500)
    .addInput(plastids, 600)
    .addOutput(rhino_systems, 1);
const craft_rhino = new Recipe("Craft Rhino", "Craft Rhino from the blueprints.")
    .addInput(rhino_blueprint, 1)
    .addInput(rhino_neuroptics, 1)
    .addInput(rhino_chassis, 1)
    .addInput(rhino_systems, 1)
    .addInput(credits, 25000)
    .addInput(gallium, 1)
    .addOutput(rhino, 1);

// saryn
// bp market 35k
// parts bp kela de thaym assassination

const saryn_blueprint = new Item("Saryn Blueprint", "Blueprint obtained from the Market for 35,000 credits.");
const buy_saryn_blueprint = new Recipe("Buy Saryn Blueprint", "Buy a Saryn Blueprint from the Market for 35,000 credits.")
    .addInput(credits, 35000)
    .addOutput(saryn_blueprint, 1);
const saryn_neuroptics_blueprint = new Item("Saryn Neuroptics Blueprint", "Blueprint obtained from the Kela De Thaym assassination on Merrow, Sedna.");
const saryn_chassis_blueprint = new Item("Saryn Chassis Blueprint", "Blueprint obtained from the Kela De Thaym assassination on Merrow, Sedna.");
const saryn_systems_blueprint = new Item("Saryn Systems Blueprint", "Blueprint obtained from the Kela De Thaym assassination on Merrow, Sedna.");
const saryn_neuroptics = new Item("Saryn Neuroptics", "Part obtained from the Kela De Thaym assassination on Merrow, Sedna.");
const saryn_chassis = new Item("Saryn Chassis", "Part obtained from the Kela De Thaym assassination on Merrow, Sedna.");
const saryn_systems = new Item("Saryn Systems", "Part obtained from the Kela De Thaym assassination on Merrow, Sedna.");
const saryn = new Item("Saryn", "Warframe obtained from the Market and the Kela De Thaym assassination on Merrow, Sedna.");
const craft_saryn_neuroptics = new Recipe("Craft Saryn Neuroptics", "Craft Saryn Neuroptics from the blueprint.")
    .addInput(saryn_neuroptics_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(circuits, 150)
    .addInput(neural_sensor, 1)
    .addInput(polymer_bundle, 300)
    .addInput(salvage, 400)
    .addOutput(saryn_neuroptics, 1);
const craft_saryn_chassis = new Recipe("Craft Saryn Chassis", "Craft Saryn Chassis from the blueprint.")
    .addInput(saryn_chassis_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(morphics, 1)
    .addInput(ferrite, 1000)
    .addInput(rubedo, 50)
    .addOutput(saryn_chassis, 1);
const craft_saryn_systems = new Recipe("Craft Saryn Systems", "Craft Saryn Systems from the blueprint.")
    .addInput(saryn_systems_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(control_module, 1)
    .addInput(morphics, 1)
    .addInput(salvage, 550)
    .addInput(plastids, 350)
    .addOutput(saryn_systems, 1);
const craft_saryn = new Recipe("Craft Saryn", "Craft Saryn from the blueprints.")
    .addInput(saryn_blueprint, 1)
    .addInput(saryn_neuroptics, 1)
    .addInput(saryn_chassis, 1)
    .addInput(saryn_systems, 1)
    .addInput(credits, 25000)
    .addInput(orokin_cell, 1)
    .addOutput(saryn, 1);

// sevagoth
// bp call of the tempestarii quest
// parts bp void storm missions

const sevagoth_blueprint = new Item("Sevagoth Blueprint", "Blueprint obtained from the Call of the Tempestarii quest.");
const sevagoth_neuroptics_blueprint = new Item("Sevagoth Neuroptics Blueprint", "Blueprint obtained from Void Storm missions.");
const sevagoth_chassis_blueprint = new Item("Sevagoth Chassis Blueprint", "Blueprint obtained from Void Storm missions.");
const sevagoth_systems_blueprint = new Item("Sevagoth Systems Blueprint", "Blueprint obtained from Void Storm missions.");
const sevagoth_neuroptics = new Item("Sevagoth Neuroptics", "Part obtained from Void Storm missions.");
const sevagoth_chassis = new Item("Sevagoth Chassis", "Part obtained from Void Storm missions.");
const sevagoth_systems = new Item("Sevagoth Systems", "Part obtained from Void Storm missions.");
const sevagoth = new Item("Sevagoth", "Warframe obtained from the Call of the Tempestarii quest and Void Storm missions.");
const craft_sevagoth_neuroptics = new Recipe("Craft Sevagoth Neuroptics", "Craft Sevagoth Neuroptics from the blueprint.")
    .addInput(sevagoth_neuroptics_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(neural_sensor, 6)
    .addInput(titanium, 1200)
    .addInput(rubedo, 750)
    .addInput(salvage, 2750)
    .addOutput(sevagoth_neuroptics, 1);
const craft_sevagoth_chassis = new Recipe("Craft Sevagoth Chassis", "Craft Sevagoth Chassis from the blueprint.")
    .addInput(sevagoth_chassis_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(morphics, 8)
    .addInput(cryotic, 650)
    .addInput(nullstones, 2)
    .addInput(alloy_plate, 3300)
    .addOutput(sevagoth_chassis, 1);
const craft_sevagoth_systems = new Recipe("Craft Sevagoth Systems", "Craft Sevagoth Systems from the blueprint.")
    .addInput(sevagoth_systems_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(argon_crystal, 2)
    .addInput(oxium, 250)
    .addInput(asterite, 15)
    .addInput(nano_spores, 2950)
    .addOutput(sevagoth_systems, 1);
const craft_sevagoth = new Recipe("Craft Sevagoth", "Craft Sevagoth from the blueprints.")
    .addInput(sevagoth_blueprint, 1)
    .addInput(sevagoth_neuroptics, 1)
    .addInput(sevagoth_chassis, 1)
    .addInput(sevagoth_systems, 1)
    .addInput(credits, 25000)
    .addInput(orokin_cell, 3)
    .addOutput(sevagoth, 1);

// styanax
// bp and parts bp kahls garrison 90, 60 stock

const styanax_blueprint = new Item("Styanax Blueprint", "Blueprint obtained from Kahls Garrison for 90 Stock at rank 5.");
const buy_styanax_blueprint = new Recipe("Buy Styanax Blueprint", "Buy a Styanax Blueprint from Kahls Garrison for 90 Stock at rank 5.")
    .addInput(stock, 90)
    .addOutput(styanax_blueprint, 1);
const styanax_neuroptics_blueprint = new Item("Styanax Neuroptics Blueprint", "Blueprint obtained from Kahls Garrison for 60 Stock at rank 3.");
const buy_styanax_neuroptics_blueprint = new Recipe("Buy Styanax Neuroptics Blueprint", "Buy a Styanax Neuroptics Blueprint from Kahls Garrison for 60 Stock at rank 3.")
    .addInput(stock, 60)
    .addOutput(styanax_neuroptics_blueprint, 1);
const styanax_chassis_blueprint = new Item("Styanax Chassis Blueprint", "Blueprint obtained from Kahls Garrison for 60 Stock at rank 4.");
const buy_styanax_chassis_blueprint = new Recipe("Buy Styanax Chassis Blueprint", "Buy a Styanax Chassis Blueprint from Kahls Garrison for 60 Stock at rank 4.")
    .addInput(stock, 60)
    .addOutput(styanax_chassis_blueprint, 1);
const styanax_systems_blueprint = new Item("Styanax Systems Blueprint", "Blueprint obtained from Kahls Garrison for 60 Stock at rank 2.");
const buy_styanax_systems_blueprint = new Recipe("Buy Styanax Systems Blueprint", "Buy a Styanax Systems Blueprint from Kahls Garrison for 60 Stock at rank 2.")
    .addInput(stock, 60)
    .addOutput(styanax_systems_blueprint, 1);
const styanax_neuroptics = new Item("Styanax Neuroptics", "Part obtained from Kahls Garrison for 60 Stock at rank 3.");
const styanax_chassis = new Item("Styanax Chassis", "Part obtained from Kahls Garrison for 60 Stock at rank 4.");
const styanax_systems = new Item("Styanax Systems", "Part obtained from Kahls Garrison for 60 Stock at rank 2.");
const styanax = new Item("Styanax", "Warframe obtained from Kahls Garrison for 90 Stock at rank 5.");
const craft_styanax_neuroptics = new Recipe("Craft Styanax Neuroptics", "Craft Styanax Neuroptics from the blueprint.")
    .addInput(styanax_neuroptics_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(argon_crystal, 2)
    .addInput(ferrite, 3000)
    .addInput(purged_dagonic, 40)
    .addInput(norg_brain, 5)
    .addOutput(styanax_neuroptics, 1);
const craft_styanax_chassis = new Recipe("Craft Styanax Chassis", "Craft Styanax Chassis from the blueprint.")
    .addInput(styanax_chassis_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(entrati_lanthorn, 5)
    .addInput(hespazym_alloy, 60)
    .addInput(star_crimzian, 20)
    .addInput(oxium, 1200)
    .addOutput(styanax_chassis, 1);
const craft_styanax_systems = new Recipe("Craft Styanax Systems", "Craft Styanax Systems from the blueprint.")
    .addInput(styanax_systems_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(rubedo, 1200)
    .addInput(radian_sentirum, 5)
    .addInput(thrax_plasm, 400)
    .addInput(voidplume_quill, 15)
    .addOutput(styanax_systems, 1);
const craft_styanax = new Recipe("Craft Styanax", "Craft Styanax from the blueprints.")
    .addInput(styanax_blueprint, 1)
    .addInput(styanax_neuroptics, 1)
    .addInput(styanax_chassis, 1)
    .addInput(styanax_systems, 1)
    .addInput(credits, 25000)
    .addInput(orokin_cell, 12)
    .addOutput(styanax, 1);

// titania
// bp and parts bp silver grove quest

const titania_blueprint = new Item("Titania Blueprint", "Blueprint obtained from the Silver Grove quest.");
const titania_neuroptics_blueprint = new Item("Titania Neuroptics Blueprint", "Blueprint obtained from the Silver Grove quest.");
const titania_chassis_blueprint = new Item("Titania Chassis Blueprint", "Blueprint obtained from the Silver Grove quest.");
const titania_systems_blueprint = new Item("Titania Systems Blueprint", "Blueprint obtained from the Silver Grove quest.");
const titania_neuroptics = new Item("Titania Neuroptics", "Part obtained from the Silver Grove quest.");
const titania_chassis = new Item("Titania Chassis", "Part obtained from the Silver Grove quest.");
const titania_systems = new Item("Titania Systems", "Part obtained from the Silver Grove quest.");
const titania = new Item("Titania", "Warframe obtained from the Silver Grove quest.");
const craft_titania_neuroptics = new Recipe("Craft Titania Neuroptics", "Craft Titania Neuroptics from the blueprint.")
    .addInput(titania_neuroptics_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(alloy_plate, 1500)
    .addInput(neurodes, 2)
    .addInput(polymer_bundle, 2500)
    .addInput(circuits, 700)
    .addOutput(titania_neuroptics, 1);
const craft_titania_chassis = new Recipe("Craft Titania Chassis", "Craft Titania Chassis from the blueprint.")
    .addInput(titania_chassis_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(nitain, 3)
    .addInput(ferrite, 3000)
    .addInput(rubedo, 900)
    .addInput(tellurium, 1)
    .addOutput(titania_chassis, 1);
const craft_titania_systems = new Recipe("Craft Titania Systems", "Craft Titania Systems from the blueprint.")
    .addInput(titania_systems_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(control_module, 1)
    .addInput(plastids, 800)
    .addInput(cryotic, 2200)
    .addInput(tellurium, 1)
    .addOutput(titania_systems, 1);
const craft_titania = new Recipe("Craft Titania", "Craft Titania from the blueprints.")
    .addInput(titania_blueprint, 1)
    .addInput(titania_neuroptics, 1)
    .addInput(titania_chassis, 1)
    .addInput(titania_systems, 1)
    .addInput(credits, 25000)
    .addInput(orokin_cell, 3)
    .addOutput(titania, 1);

// trinity
// bp market 25k
// parts bp ambulas assassination

const trinity_blueprint = new Item("Trinity Blueprint", "Blueprint obtained from the Market for 25,000 credits.");
const buy_trinity_blueprint = new Recipe("Buy Trinity Blueprint", "Buy a Trinity Blueprint from the Market for 25,000 credits.")
    .addInput(credits, 25000)
    .addOutput(trinity_blueprint, 1);
const trinity_neuroptics_blueprint = new Item("Trinity Neuroptics Blueprint", "Blueprint obtained from the Ambulas assassination mission.");
const trinity_chassis_blueprint = new Item("Trinity Chassis Blueprint", "Blueprint obtained from the Ambulas assassination mission.");
const trinity_systems_blueprint = new Item("Trinity Systems Blueprint", "Blueprint obtained from the Ambulas assassination mission.");  
const trinity_neuroptics = new Item("Trinity Neuroptics", "Part obtained from the Ambulas assassination mission.");
const trinity_chassis = new Item("Trinity Chassis", "Part obtained from the Ambulas assassination mission.");
const trinity_systems = new Item("Trinity Systems", "Part obtained from the Ambulas assassination mission.");
const trinity = new Item("Trinity", "Warframe obtained from the Ambulas assassination mission.");
const craft_trinity_neuroptics = new Recipe("Craft Trinity Neuroptics", "Craft Trinity Neuroptics from the blueprint.")
    .addInput(trinity_neuroptics_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(alloy_plate, 150)
    .addInput(neural_sensor, 1)
    .addInput(polymer_bundle, 150)
    .addInput(rubedo, 500)
    .addOutput(trinity_neuroptics, 1);
const craft_trinity_chassis = new Recipe("Craft Trinity Chassis", "Craft Trinity Chassis from the blueprint.")
    .addInput(trinity_chassis_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(morphics, 1)
    .addInput(ferrite, 1000)
    .addInput(rubedo, 300)
    .addOutput(trinity_chassis, 1);
const craft_trinity_systems = new Recipe("Craft Trinity Systems", "Craft Trinity Systems from the blueprint.")
    .addInput(trinity_systems_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(control_module, 1)
    .addInput(morphics, 1)
    .addInput(salvage, 500)
    .addInput(plastids, 220)
    .addOutput(trinity_systems, 1);
const craft_trinity = new Recipe("Craft Trinity", "Craft Trinity from the blueprints.")
    .addInput(trinity_blueprint, 1)
    .addInput(trinity_neuroptics, 1)
    .addInput(trinity_chassis, 1)
    .addInput(trinity_systems, 1)
    .addInput(credits, 25000)
    .addInput(orokin_cell, 1)
    .addOutput(trinity, 1);

// valkyr
// bp market 35k
// parts bp alad v assassination

const valkyr_blueprint = new Item("Valkyr Blueprint", "Blueprint obtained from the Market for 35,000 credits.");
const buy_valkyr_blueprint = new Recipe("Buy Valkyr Blueprint", "Buy a Valkyr Blueprint from the Market for 35,000 credits.")
    .addInput(credits, 35000)
    .addOutput(valkyr_blueprint, 1);
const valkyr_neuroptics_blueprint = new Item("Valkyr Neuroptics Blueprint", "Blueprint obtained from the Alad V assassination mission.");
const valkyr_chassis_blueprint = new Item("Valkyr Chassis Blueprint", "Blueprint obtained from the Alad V assassination mission.");
const valkyr_systems_blueprint = new Item("Valkyr Systems Blueprint", "Blueprint obtained from the Alad V assassination mission.");
const valkyr_neuroptics = new Item("Valkyr Neuroptics", "Part obtained from the Alad V assassination mission.");
const valkyr_chassis = new Item("Valkyr Chassis", "Part obtained from the Alad V assassination mission.");
const valkyr_systems = new Item("Valkyr Systems", "Part obtained from the Alad V assassination mission.");
const valkyr = new Item("Valkyr", "Warframe obtained from the Alad V assassination mission.");
const craft_valkyr_neuroptics = new Recipe("Craft Valkyr Neuroptics", "Craft Valkyr Neuroptics from the blueprint.")
    .addInput(valkyr_neuroptics_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(circuits, 150)
    .addInput(neural_sensor, 1)
    .addInput(polymer_bundle, 200)
    .addInput(salvage, 500)
    .addOutput(valkyr_neuroptics, 1);
const craft_valkyr_chassis = new Recipe("Craft Valkyr Chassis", "Craft Valkyr Chassis from the blueprint.")
    .addInput(valkyr_chassis_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(morphics, 1)
    .addInput(ferrite, 900)
    .addInput(rubedo, 50)
    .addOutput(valkyr_chassis, 1);
const craft_valkyr_systems = new Recipe("Craft Valkyr Systems", "Craft Valkyr Systems from the blueprint.")
    .addInput(valkyr_systems_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(control_module, 1)
    .addInput(morphics, 1)
    .addInput(salvage, 500)
    .addInput(plastids, 400)
    .addOutput(valkyr_systems, 1);
const craft_valkyr = new Recipe("Craft Valkyr", "Craft Valkyr from the blueprints.")
    .addInput(valkyr_blueprint, 1)
    .addInput(valkyr_neuroptics, 1)
    .addInput(valkyr_chassis, 1)
    .addInput(valkyr_systems, 1)
    .addInput(credits, 25000)
    .addInput(orokin_cell, 1)
    .addOutput(valkyr, 1);

// vauban
// bp market 35k
// parts bp nightwave 25 cred

const vauban_blueprint = new Item("Vauban Blueprint", "Blueprint obtained from the Market for 35,000 credits.");
const buy_vauban_blueprint = new Recipe("Buy Vauban Blueprint", "Buy a Vauban Blueprint from the Market for 35,000 credits.")
    .addInput(credits, 35000)
    .addOutput(vauban_blueprint, 1);
const vauban_neuroptics_blueprint = new Item("Vauban Neuroptics Blueprint", "Blueprint obtained from Nightwave for 25 Nora Cred.");
const buy_vauban_neuroptics_blueprint = new Recipe("Buy Vauban Neuroptics Blueprint", "Buy a Vauban Neuroptics Blueprint from Nightwave for 25 Nora Cred.")
    .addInput(nora_cred, 25)
    .addOutput(vauban_neuroptics_blueprint, 1);
const vauban_chassis_blueprint = new Item("Vauban Chassis Blueprint", "Blueprint obtained from Nightwave for 25 Nora Cred.");
const buy_vauban_chassis_blueprint = new Recipe("Buy Vauban Chassis Blueprint", "Buy a Vauban Chassis Blueprint from Nightwave for 25 Nora Cred.")
    .addInput(nora_cred, 25)
    .addOutput(vauban_chassis_blueprint, 1);
const vauban_systems_blueprint = new Item("Vauban Systems Blueprint", "Blueprint obtained from Nightwave for 25 Nora Cred.");
const buy_vauban_systems_blueprint = new Recipe("Buy Vauban Systems Blueprint", "Buy a Vauban Systems Blueprint from Nightwave for 25 Nora Cred.")
    .addInput(nora_cred, 25)
    .addOutput(vauban_systems_blueprint, 1);
const vauban_neuroptics = new Item("Vauban Neuroptics", "Part obtained from Nightwave.");
const vauban_chassis = new Item("Vauban Chassis", "Part obtained from Nightwave.");
const vauban_systems = new Item("Vauban Systems", "Part obtained from Nightwave.");
const vauban = new Item("Vauban", "Warframe obtained from the blueprints.");
const craft_vauban_neuroptics = new Recipe("Craft Vauban Neuroptics", "Craft Vauban Neuroptics from the blueprint.")
    .addInput(vauban_neuroptics_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(alloy_plate, 150)
    .addInput(neural_sensor, 1)
    .addInput(polymer_bundle, 150)
    .addInput(rubedo, 500)
    .addOutput(vauban_neuroptics, 1);
const craft_vauban_chassis = new Recipe("Craft Vauban Chassis", "Craft Vauban Chassis from the blueprint.")
    .addInput(vauban_chassis_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(morphics, 1)
    .addInput(ferrite, 1000)
    .addInput(rubedo, 300)
    .addOutput(vauban_chassis, 1);
const craft_vauban_systems = new Recipe("Craft Vauban Systems", "Craft Vauban Systems from the blueprint.")
    .addInput(vauban_systems_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(control_module, 1)
    .addInput(morphics, 1)
    .addInput(salvage, 500)
    .addInput(plastids, 220)
    .addOutput(vauban_systems, 1);
const craft_vauban = new Recipe("Craft Vauban", "Craft Vauban from the blueprints.")
    .addInput(vauban_blueprint, 1)
    .addInput(vauban_neuroptics, 1)
    .addInput(vauban_chassis, 1)
    .addInput(vauban_systems, 1)
    .addInput(credits, 25000)
    .addInput(orokin_cell, 1)
    .addOutput(vauban, 1);

// volt
// bp dojo 35k
// parts bp tenno lab 15k

const volt_blueprint = new Item("Volt Blueprint", "Blueprint obtained from the Tenno Lab in the Dojo for 35,000 credits.");
const buy_volt_blueprint = new Recipe("Buy Volt Blueprint", "Buy a Volt Blueprint from the Tenno Lab in the Dojo for 35,000 credits.")
    .addInput(credits, 35000)
    .addOutput(volt_blueprint, 1);
const volt_neuroptics_blueprint = new Item("Volt Neuroptics Blueprint", "Blueprint obtained from the Tenno Lab in the Dojo for 15,000 credits.");
const buy_volt_neuroptics_blueprint = new Recipe("Buy Volt Neuroptics Blueprint", "Buy a Volt Neuroptics Blueprint from the Tenno Lab in the Dojo for 15,000 credits.")
    .addInput(credits, 15000)
    .addOutput(volt_neuroptics_blueprint, 1);
const volt_chassis_blueprint = new Item("Volt Chassis Blueprint", "Blueprint obtained from the Tenno Lab in the Dojo for 15,000 credits.");
const buy_volt_chassis_blueprint = new Recipe("Buy Volt Chassis Blueprint", "Buy a Volt Chassis Blueprint from the Tenno Lab in the Dojo for 15,000 credits.")
    .addInput(credits, 15000)
    .addOutput(volt_chassis_blueprint, 1);
const volt_systems_blueprint = new Item("Volt Systems Blueprint", "Blueprint obtained from the Tenno Lab in the Dojo for 15,000 credits.");
const buy_volt_systems_blueprint = new Recipe("Buy Volt Systems Blueprint", "Buy a Volt Systems Blueprint from the Tenno Lab in the Dojo for 15,000 credits.")
    .addInput(credits, 15000)
    .addOutput(volt_systems_blueprint, 1);
const volt_neuroptics = new Item("Volt Neuroptics", "Part obtained from the Tenno Lab in the Dojo.");
const volt_chassis = new Item("Volt Chassis", "Part obtained from the Tenno Lab in the Dojo.");
const volt_systems = new Item("Volt Systems", "Part obtained from the Tenno Lab in the Dojo.");
const volt = new Item("Volt", "Warframe obtained from the blueprints.");
const craft_volt_neuroptics = new Recipe("Craft Volt Neuroptics", "Craft Volt Neuroptics from the blueprint.")
    .addInput(volt_neuroptics_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(alloy_plate, 150)
    .addInput(neural_sensor, 1)
    .addInput(polymer_bundle, 150)
    .addInput(rubedo, 500)
    .addOutput(volt_neuroptics, 1);
const craft_volt_chassis = new Recipe("Craft Volt Chassis", "Craft Volt Chassis from the blueprint.")
    .addInput(volt_chassis_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(morphics, 1)
    .addInput(ferrite, 1000)
    .addInput(rubedo, 300)
    .addOutput(volt_chassis, 1);
const craft_volt_systems = new Recipe("Craft Volt Systems", "Craft Volt Systems from the blueprint.")
    .addInput(volt_systems_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(control_module, 1)
    .addInput(morphics, 1)
    .addInput(salvage, 500)
    .addInput(plastids, 220)
    .addOutput(volt_systems, 1);
const craft_volt = new Recipe("Craft Volt", "Craft Volt from the blueprints.")
    .addInput(volt_blueprint, 1)
    .addInput(volt_neuroptics, 1)
    .addInput(volt_chassis, 1)
    .addInput(volt_systems, 1)
    .addInput(credits, 25000)
    .addInput(orokin_cell, 1)
    .addOutput(volt, 1);

// voruna
// bp and parts bp conjunction survival c rotation

const voruna_blueprint = new Item("Voruna Blueprint", "Blueprint obtained from Conjunction Survival C Rotation.");
const voruna_neuroptics_blueprint = new Item("Voruna Neuroptics Blueprint", "Blueprint obtained from Conjunction Survival C Rotation.");
const voruna_chassis_blueprint = new Item("Voruna Chassis Blueprint", "Blueprint obtained from Conjunction Survival C Rotation.");
const voruna_systems_blueprint = new Item("Voruna Systems Blueprint", "Blueprint obtained from Conjunction Survival C Rotation.");
const voruna_neuroptics = new Item("Voruna Neuroptics", "Part obtained from Conjunction Survival C Rotation.");
const voruna_chassis = new Item("Voruna Chassis", "Part obtained from Conjunction Survival C Rotation.");
const voruna_systems = new Item("Voruna Systems", "Part obtained from Conjunction Survival C Rotation.");
const voruna = new Item("Voruna", "Warframe obtained from the blueprints.");
const craft_voruna_neuroptics = new Recipe("Craft Voruna Neuroptics", "Craft Voruna Neuroptics from the blueprint.")
    .addInput(voruna_neuroptics_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(somatic_fibers, 20)
    .addInput(alloy_plate, 2500)
    .addInput(polymer_bundle, 800)
    .addInput(lua_thrax_plasm, 25)
    .addOutput(voruna_neuroptics, 1);
const craft_voruna_chassis = new Recipe("Craft Voruna Chassis", "Craft Voruna Chassis from the blueprint.")
    .addInput(voruna_chassis_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(voidgel_orb, 20)
    .addInput(ferrite, 1000)
    .addInput(rubedo, 300)
    .addInput(lua_thrax_plasm, 25)
    .addOutput(voruna_chassis, 1);
const craft_voruna_systems = new Recipe("Craft Voruna Systems", "Craft Voruna Systems from the blueprint.")
    .addInput(voruna_systems_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(nitain, 5)
    .addInput(voidgel_orb, 30)
    .addInput(salvage, 5000)
    .addInput(lua_thrax_plasm, 25)
    .addOutput(voruna_systems, 1);
const craft_voruna = new Recipe("Craft Voruna", "Craft Voruna from the blueprints.")
    .addInput(voruna_blueprint, 1)
    .addInput(voruna_neuroptics, 1)
    .addInput(voruna_chassis, 1)
    .addInput(voruna_systems, 1)
    .addInput(credits, 25000)
    .addInput(lua_thrax_plasm, 50)
    .addOutput(voruna, 1);

// wisp
// bp and parts bp ropalolyst assassination

const wisp_blueprint = new Item("Wisp Blueprint", "Blueprint obtained from Ropalolyst Assassination.");
const wisp_neuroptics_blueprint = new Item("Wisp Neuroptics Blueprint", "Blueprint obtained from Ropalolyst Assassination.");
const wisp_chassis_blueprint = new Item("Wisp Chassis Blueprint", "Blueprint obtained from Ropalolyst Assassination.");
const wisp_systems_blueprint = new Item("Wisp Systems Blueprint", "Blueprint obtained from Ropalolyst Assassination.");
const wisp_neuroptics = new Item("Wisp Neuroptics", "Part obtained from Ropalolyst Assassination.");
const wisp_chassis = new Item("Wisp Chassis", "Part obtained from Ropalolyst Assassination.");
const wisp_systems = new Item("Wisp Systems", "Part obtained from Ropalolyst Assassination.");
const wisp = new Item("Wisp", "Warframe obtained from the blueprints.");
const craft_wisp_neuroptics = new Recipe("Craft Wisp Neuroptics", "Craft Wisp Neuroptics from the blueprint.")
    .addInput(wisp_neuroptics_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(hexenon, 300)
    .addInput(tellurium, 2)
    .addInput(plastids, 950)
    .addInput(polymer_bundle, 2200)
    .addOutput(wisp_neuroptics, 1);
const craft_wisp_chassis = new Recipe("Craft Wisp Chassis", "Craft Wisp Chassis from the blueprint.")
    .addInput(wisp_chassis_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(hexenon, 500)
    .addInput(argon_crystal, 1)
    .addInput(oxium, 700)
    .addInput(alloy_plate, 2750)
    .addOutput(wisp_chassis, 1);
const craft_wisp_systems = new Recipe("Craft Wisp Systems", "Craft Wisp Systems from the blueprint.")
    .addInput(wisp_systems_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(hexenon, 400)
    .addInput(nitain, 2)
    .addInput(rubedo, 950)
    .addInput(salvage, 10000)
    .addOutput(wisp_systems, 1);
const craft_wisp = new Recipe("Craft Wisp", "Craft Wisp from the blueprints.")
    .addInput(wisp_blueprint, 1)
    .addInput(wisp_neuroptics, 1)
    .addInput(wisp_chassis, 1)
    .addInput(wisp_systems, 1)
    .addInput(credits, 25000)
    .addInput(orokin_cell, 3)
    .addOutput(wisp, 1);

// wukong
// bp and parts bp tenno lab 35k, 15k

const wukong_blueprint = new Item("Wukong Blueprint", "Blueprint obtained from the Tenno Lab in the Dojo for 35,000 credits.");
const buy_wukong_blueprint = new Recipe("Buy Wukong Blueprint", "Buy a Wukong Blueprint from the Tenno Lab in the Dojo for 35,000 credits.")
    .addInput(credits, 35000)
    .addOutput(wukong_blueprint, 1);
const wukong_neuroptics_blueprint = new Item("Wukong Neuroptics Blueprint", "Blueprint obtained from the Tenno Lab in the Dojo for 15,000 credits.");
const buy_wukong_neuroptics_blueprint = new Recipe("Buy Wukong Neuroptics Blueprint", "Buy a Wukong Neuroptics Blueprint from the Tenno Lab in the Dojo for 15,000 credits.")
    .addInput(credits, 15000)
    .addOutput(wukong_neuroptics_blueprint, 1);
const wukong_chassis_blueprint = new Item("Wukong Chassis Blueprint", "Blueprint obtained from the Tenno Lab in the Dojo for 15,000 credits.");
const buy_wukong_chassis_blueprint = new Recipe("Buy Wukong Chassis Blueprint", "Buy a Wukong Chassis Blueprint from the Tenno Lab in the Dojo for 15,000 credits.")
    .addInput(credits, 15000)
    .addOutput(wukong_chassis_blueprint, 1);
const wukong_systems_blueprint = new Item("Wukong Systems Blueprint", "Blueprint obtained from the Tenno Lab in the Dojo for 15,000 credits.");
const buy_wukong_systems_blueprint = new Recipe("Buy Wukong Systems Blueprint", "Buy a Wukong Systems Blueprint from the Tenno Lab in the Dojo for 15,000 credits.")
    .addInput(credits, 15000)
    .addOutput(wukong_systems_blueprint, 1);
const wukong_neuroptics = new Item("Wukong Neuroptics", "Part obtained from the Wukong Neuroptics Blueprint.");
const craft_wukong_neuroptics = new Recipe("Craft Wukong Neuroptics", "Craft Wukong Neuroptics from the blueprint.")
    .addInput(wukong_neuroptics_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(circuits, 1400)
    .addInput(neural_sensor, 1)
    .addInput(polymer_bundle, 2600)
    .addInput(nitain, 2)
    .addOutput(wukong_neuroptics, 1);
const wukong_chassis = new Item("Wukong Chassis", "Part obtained from the Wukong Chassis Blueprint.");
const craft_wukong_chassis = new Recipe("Craft Wukong Chassis", "Craft Wukong Chassis from the blueprint.")
    .addInput(wukong_chassis_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(morphics, 1)
    .addInput(ferrite, 900)
    .addInput(rubedo, 50)
    .addInput(nitain, 4)
    .addOutput(wukong_chassis, 1);
const wukong_systems = new Item("Wukong Systems", "Part obtained from the Wukong Systems Blueprint.");
const craft_wukong_systems = new Recipe("Craft Wukong Systems", "Craft Wukong Systems from the blueprint.")
    .addInput(wukong_systems_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(argon_crystal, 2)
    .addInput(neurodes, 2)
    .addInput(salvage, 8000)
    .addInput(plastids, 4000)
    .addOutput(wukong_systems, 1);
const wukong = new Item("Wukong", "Warframe obtained from the Wukong Blueprint.");
const craft_wukong = new Recipe("Craft Wukong", "Craft Wukong from the blueprints.")
    .addInput(wukong_blueprint, 1)
    .addInput(wukong_neuroptics, 1)
    .addInput(wukong_chassis, 1)
    .addInput(wukong_systems, 1)
    .addInput(credits, 35000)
    .addInput(orokin_cell, 1)
    .addOutput(wukong, 1);

// xaku
// bp heart of deimos quest
// parts bp necralisk bounties

const xaku_blueprint = new Item("Xaku Blueprint", "Blueprint obtained from the Heart of Deimos quest.");
const xaku_neuroptics_blueprint = new Item("Xaku Neuroptics Blueprint", "Blueprint obtained from the Necralisk bounties.");
const xaku_chassis_blueprint = new Item("Xaku Chassis Blueprint", "Blueprint obtained from the Necralisk bounties.");
const xaku_systems_blueprint = new Item("Xaku Systems Blueprint", "Blueprint obtained from the Necralisk bounties.");
const xaku_neuroptics = new Item("Xaku Neuroptics", "Part obtained from the Xaku Neuroptics Blueprint.");
const xaku_chassis = new Item("Xaku Chassis", "Part obtained from the Xaku Chassis Blueprint.");
const xaku_systems = new Item("Xaku Systems", "Part obtained from the Xaku Systems Blueprint.");
const xaku = new Item("Xaku", "Warframe obtained from the Xaku Blueprint.");
const craft_xaku_neuroptics = new Recipe("Craft Xaku Neuroptics", "Craft Xaku Neuroptics from the blueprint.")
    .addInput(xaku_neuroptics_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(neural_sensor, 10)
    .addInput(thaumic_distillate, 60)
    .addInput(sharrac_teeth, 20)
    .addInput(esher_devar, 40)
    .addOutput(xaku_neuroptics, 1);
const craft_xaku_chassis = new Recipe("Craft Xaku Chassis", "Craft Xaku Chassis from the blueprint.")
    .addInput(xaku_chassis_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(gyromag_systems, 5)
    .addInput(spinal_core_section, 3)
    .addInput(venerdo_alloy, 50)
    .addInput(lucent_teroglobe, 50)
    .addOutput(xaku_chassis, 1);
const craft_xaku_systems = new Recipe("Craft Xaku Systems", "Craft Xaku Systems from the blueprint.")
    .addInput(xaku_systems_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(breath_of_the_eidolon, 10)
    .addInput(scintillant, 5)
    .addInput(pustulite, 45)
    .addInput(ganglion, 60)
    .addOutput(xaku_systems, 1);
const craft_xaku = new Recipe("Craft Xaku", "Craft Xaku from the blueprints.")
    .addInput(xaku_blueprint, 1)
    .addInput(xaku_neuroptics, 1)
    .addInput(xaku_chassis, 1)
    .addInput(xaku_systems, 1)
    .addInput(credits, 25000)
    .addInput(orokin_cell, 3)
    .addOutput(xaku, 1);

// yareli
// bp waverider quest
// parts bp ventkids bash lab 15k

const yareli_blueprint = new Item("Yareli Blueprint", "Blueprint obtained from the Waverider quest.");
const yareli_neuroptics_blueprint = new Item("Yareli Neuroptics Blueprint", "Blueprint obtained from the Ventkids Bash Lab in the Dojo for 15,000 credits.");
const buy_yareli_neuroptics_blueprint = new Recipe("Buy Yareli Neuroptics Blueprint", "Buy a Yareli Neuroptics Blueprint from the Ventkids Bash Lab in the Dojo for 15,000 credits.")
    .addInput(credits, 15000)
    .addOutput(yareli_neuroptics_blueprint, 1);
const yareli_chassis_blueprint = new Item("Yareli Chassis Blueprint", "Blueprint obtained from the Ventkids Bash Lab in the Dojo for 15,000 credits.");
const buy_yareli_chassis_blueprint = new Recipe("Buy Yareli Chassis Blueprint", "Buy a Yareli Chassis Blueprint from the Ventkids Bash Lab in the Dojo for 15,000 credits.")
    .addInput(credits, 15000)
    .addOutput(yareli_chassis_blueprint, 1);
const yareli_systems_blueprint = new Item("Yareli Systems Blueprint", "Blueprint obtained from the Ventkids Bash Lab in the Dojo for 15,000 credits.");
const buy_yareli_systems_blueprint = new Recipe("Buy Yareli Systems Blueprint", "Buy a Yareli Systems Blueprint from the Ventkids Bash Lab in the Dojo for 15,000 credits.")
    .addInput(credits, 15000)
    .addOutput(yareli_systems_blueprint, 1);
const yareli_neuroptics = new Item("Yareli Neuroptics", "Part obtained from the Yareli Neuroptics Blueprint.");
const yareli_chassis = new Item("Yareli Chassis", "Part obtained from the Yareli Chassis Blueprint.");
const yareli_systems = new Item("Yareli Systems", "Part obtained from the Yareli Systems Blueprint.");
const yareli = new Item("Yareli", "Warframe obtained from the Yareli Blueprint.");
const craft_yareli_neuroptics = new Recipe("Craft Yareli Neuroptics", "Craft Yareli Neuroptics from the blueprint.")
    .addInput(yareli_neuroptics_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(argon_crystal, 2)
    .addInput(plastids, 150)
    .addInput(salvage, 875)
    .addInput(heart_noctrul, 10)
    .addOutput(yareli_neuroptics, 1);
const craft_yareli_chassis = new Recipe("Craft Yareli Chassis", "Craft Yareli Chassis from the blueprint.")
    .addInput(yareli_chassis_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(tellurium, 2)
    .addInput(venerdo_alloy, 20)
    .addInput(circuits, 350)
    .addInput(nano_spores, 1500)
    .addOutput(yareli_chassis, 1);
const craft_yareli_systems = new Recipe("Craft Yareli Systems", "Craft Yareli Systems from the blueprint.")
    .addInput(yareli_systems_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(nitain, 2)
    .addInput(cryotic, 350)
    .addInput(scrubber_exa_brain, 5)
    .addInput(alloy_plate, 1750)
    .addOutput(yareli_systems, 1);
const craft_yareli = new Recipe("Craft Yareli", "Craft Yareli from the blueprints.")
    .addInput(yareli_blueprint, 1)
    .addInput(yareli_neuroptics, 1)
    .addInput(yareli_chassis, 1)
    .addInput(yareli_systems, 1)
    .addInput(credits, 25000)
    .addInput(orokin_cell, 3)
    .addOutput(yareli, 1);

// zephyr
// bp tenno lab 35k
// parts bp tenno lab 15k

const zephyr_blueprint = new Item("Zephyr Blueprint", "Blueprint obtained from the Tenno Lab in the Dojo for 35,000 credits.");
const buy_zephyr_blueprint = new Recipe("Buy Zephyr Blueprint", "Buy a Zephyr Blueprint from the Tenno Lab in the Dojo for 35,000 credits.")
    .addInput(credits, 35000)
    .addOutput(zephyr_blueprint, 1);
const zephyr_neuroptics_blueprint = new Item("Zephyr Neuroptics Blueprint", "Blueprint obtained from the Tenno Lab in the Dojo for 15,000 credits.");
const buy_zephyr_neuroptics_blueprint = new Recipe("Buy Zephyr Neuroptics Blueprint", "Buy a Zephyr Neuroptics Blueprint from the Tenno Lab in the Dojo for 15,000 credits.")
    .addInput(credits, 15000)
    .addOutput(zephyr_neuroptics_blueprint, 1);
const zephyr_chassis_blueprint = new Item("Zephyr Chassis Blueprint", "Blueprint obtained from the Tenno Lab in the Dojo for 15,000 credits.");
const buy_zephyr_chassis_blueprint = new Recipe("Buy Zephyr Chassis Blueprint", "Buy a Zephyr Chassis Blueprint from the Tenno Lab in the Dojo for 15,000 credits.")
    .addInput(credits, 15000)
    .addOutput(zephyr_chassis_blueprint, 1);
const zephyr_systems_blueprint = new Item("Zephyr Systems Blueprint", "Blueprint obtained from the Tenno Lab in the Dojo for 15,000 credits.");
const buy_zephyr_systems_blueprint = new Recipe("Buy Zephyr Systems Blueprint", "Buy a Zephyr Systems Blueprint from the Tenno Lab in the Dojo for 15,000 credits.")
    .addInput(credits, 15000)
    .addOutput(zephyr_systems_blueprint, 1);
const zephyr_neuroptics = new Item("Zephyr Neuroptics", "Part obtained from the Zephyr Neuroptics Blueprint.");
const zephyr_chassis = new Item("Zephyr Chassis", "Part obtained from the Zephyr Chassis Blueprint.");
const zephyr_systems = new Item("Zephyr Systems", "Part obtained from the Zephyr Systems Blueprint.");
const zephyr = new Item("Zephyr", "Warframe obtained from the Zephyr Blueprint.");
const craft_zephyr_neuroptics = new Recipe("Craft Zephyr Neuroptics", "Craft Zephyr Neuroptics from the blueprint.")
    .addInput(zephyr_neuroptics_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(circuits, 150)
    .addInput(oxium, 200)
    .addInput(polymer_bundle, 200)
    .addInput(salvage, 500)
    .addOutput(zephyr_neuroptics, 1);
const craft_zephyr_chassis = new Recipe("Craft Zephyr Chassis", "Craft Zephyr Chassis from the blueprint.")
    .addInput(zephyr_chassis_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(oxium, 200)
    .addInput(nano_spores, 900)
    .addInput(rubedo, 50)
    .addOutput(zephyr_chassis, 1);
const craft_zephyr_systems = new Recipe("Craft Zephyr Systems", "Craft Zephyr Systems from the blueprint.")
    .addInput(zephyr_systems_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(control_module, 1)
    .addInput(oxium, 200)
    .addInput(polymer_bundle, 500)
    .addInput(plastids, 400)
    .addOutput(zephyr_systems, 1);
const craft_zephyr = new Recipe("Craft Zephyr", "Craft Zephyr from the blueprints.")
    .addInput(zephyr_blueprint, 1)
    .addInput(zephyr_neuroptics, 1)
    .addInput(zephyr_chassis, 1)
    .addInput(zephyr_systems, 1)
    .addInput(credits, 25000)
    .addInput(orokin_cell, 1)
    .addOutput(zephyr, 1);

// chroma
// bp new strange quest
// parts bp junctions

const chroma_blueprint = new Item("Chroma Blueprint", "Blueprint obtained from the New Strange quest.");
const chroma_neuroptics_blueprint = new Item("Chroma Neuroptics Blueprint", "Blueprint obtained from Uranus Junction.");
const chroma_chassis_blueprint = new Item("Chroma Chassis Blueprint", "Blueprint obtained from Neptune Junction.");
const chroma_systems_blueprint = new Item("Chroma Systems Blueprint", "Blueprint obtained from Pluto Junction.");
const chroma_neuroptics = new Item("Chroma Neuroptics", "Part obtained from the Chroma Neuroptics Blueprint.");
const chroma_chassis = new Item("Chroma Chassis", "Part obtained from the Chroma Chassis Blueprint.");
const chroma_systems = new Item("Chroma Systems", "Part obtained from the Chroma Systems Blueprint.");
const chroma = new Item("Chroma", "Warframe obtained from the Chroma Blueprint.");  
const craft_chroma_neuroptics = new Recipe("Craft Chroma Neuroptics", "Craft Chroma Neuroptics from the blueprint.")
    .addInput(chroma_neuroptics_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(plastids, 200)
    .addInput(neural_sensor, 2)
    .addInput(polymer_bundle, 350)
    .addInput(ember_neuroptics, 1)
    .addOutput(chroma_neuroptics, 1);
const craft_chroma_chassis = new Recipe("Craft Chroma Chassis", "Craft Chroma Chassis from the blueprint.")
    .addInput(chroma_chassis_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(neurodes, 2)
    .addInput(salvage, 900)
    .addInput(plastids, 50)
    .addInput(frost_chassis, 1)
    .addOutput(chroma_chassis, 1);
const craft_chroma_systems = new Recipe("Craft Chroma Systems", "Craft Chroma Systems from the blueprint.")
    .addInput(chroma_systems_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(oxium, 400)
    .addInput(argon_crystal, 2)
    .addInput(neurodes, 1)
    .addInput(saryn_systems, 1)
    .addOutput(chroma_systems, 1);
const craft_chroma = new Recipe("Craft Chroma", "Craft Chroma from the blueprints.")
    .addInput(chroma_blueprint, 1)
    .addInput(chroma_neuroptics, 1)
    .addInput(chroma_chassis, 1)
    .addInput(chroma_systems, 1)
    .addInput(credits, 25000)
    .addInput(volt_neuroptics, 1)
    .addOutput(chroma, 1);



    













// the prime section
// ------------------------
// ------------------------



// the archwing section
// ------------------------

// amesha
// bp and parts bp tenno lab 15k

const amesha_blueprint = new Item("Amesha Blueprint", "Blueprint obtained from the Tenno Lab in the Dojo for 15,000 credits.");
const buy_amesha_blueprint = new Recipe("Buy Amesha Blueprint", "Buy an Amesha Blueprint from the Tenno Lab in the Dojo for 15,000 credits.")
    .addInput(credits, 15000)
    .addOutput(amesha_blueprint, 1);
const amesha_systems_blueprint = new Item("Amesha Systems Blueprint", "Blueprint obtained from the Tenno Lab in the Dojo for 15,000 credits.");
const buy_amesha_systems_blueprint = new Recipe("Buy Amesha Systems Blueprint", "Buy an Amesha Systems Blueprint from the Tenno Lab in the Dojo for 15,000 credits.")
    .addInput(credits, 15000)
    .addOutput(amesha_systems_blueprint, 1);
const amesha_wings_blueprint = new Item("Amesha Wings Blueprint", "Blueprint obtained from the Tenno Lab in the Dojo for 15,000 credits.");
const buy_amesha_wings_blueprint = new Recipe("Buy Amesha Wings Blueprint", "Buy an Amesha Wings Blueprint from the Tenno Lab in the Dojo for 15,000 credits.")
    .addInput(credits, 15000)
    .addOutput(amesha_wings_blueprint, 1);
const amesha_harness_blueprint = new Item("Amesha Harness Blueprint", "Blueprint obtained from the Tenno Lab in the Dojo for 15,000 credits.");
const buy_amesha_harness_blueprint = new Recipe("Buy Amesha Harness Blueprint", "Buy an Amesha Harness Blueprint from the Tenno Lab in the Dojo for 15,000 credits.")
    .addInput(credits, 15000)
    .addOutput(amesha_harness_blueprint, 1);
const amesha_systems = new Item("Amesha Systems", "Archwing part obtained from crafting.")
const craft_amesha_systems = new Recipe("Craft Amesha Systems", "Craft Amesha Systems from the blueprint.")
    .addInput(amesha_systems_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(nitain, 2)
    .addInput(control_module, 1)
    .addInput(salvage, 6700)
    .addInput(circuits, 2800)
    .addOutput(amesha_systems, 1);
const amesha_wings = new Item("Amesha Wings", "Archwing part obtained from crafting.")
const craft_amesha_wings = new Recipe("Craft Amesha Wings", "Craft Amesha Wings from the blueprint.")
    .addInput(amesha_wings_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(nitain, 2)
    .addInput(neurodes, 5)
    .addInput(alloy_plate, 5600)
    .addInput(polymer_bundle, 4200)
    .addOutput(amesha_wings, 1);
const amesha_harness = new Item("Amesha Harness", "Archwing part obtained from crafting.")
const craft_amesha_harness = new Recipe("Craft Amesha Harness", "Craft Amesha Harness from the blueprint.")
    .addInput(amesha_harness_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(nitain, 2)
    .addInput(circuits, 900)
    .addInput(polymer_bundle, 3600)
    .addInput(alloy_plate, 5500)
    .addOutput(amesha_harness, 1);
const amesha = new Item("Amesha", "Archwing obtained from crafting.")
const craft_amesha = new Recipe("Craft Amesha", "Craft Amesha from the blueprint.")
    .addInput(amesha_blueprint, 1)
    .addInput(amesha_systems, 1)
    .addInput(amesha_wings, 1)
    .addInput(amesha_harness, 1)
    .addInput(nitain, 4)
    .addInput(credits, 25000)
    .addOutput(amesha, 1);

// elytron
// bp and parts bp tenno lab 15k

const elytron_blueprint = new Item("Elytron Blueprint", "Blueprint obtained from the Tenno Lab in the Dojo for 15,000 credits.");
const buy_elytron_blueprint = new Recipe("Buy Elytron Blueprint", "Buy an Elytron Blueprint from the Tenno Lab in the Dojo for 15,000 credits.")
    .addInput(credits, 15000)
    .addOutput(elytron_blueprint, 1);
const elytron_systems_blueprint = new Item("Elytron Systems Blueprint", "Blueprint obtained from the Tenno Lab in the Dojo for 15,000 credits.");
const buy_elytron_systems_blueprint = new Recipe("Buy Elytron Systems Blueprint", "Buy an Elytron Systems Blueprint from the Tenno Lab in the Dojo for 15,000 credits.")
    .addInput(credits, 15000)
    .addOutput(elytron_systems_blueprint, 1);
const elytron_wings_blueprint = new Item("Elytron Wings Blueprint", "Blueprint obtained from the Tenno Lab in the Dojo for 15,000 credits.");
const buy_elytron_wings_blueprint = new Recipe("Buy Elytron Wings Blueprint", "Buy an Elytron Wings Blueprint from the Tenno Lab in the Dojo for 15,000 credits.")
    .addInput(credits, 15000)
    .addOutput(elytron_wings_blueprint, 1);
const elytron_harness_blueprint = new Item("Elytron Harness Blueprint", "Blueprint obtained from the Tenno Lab in the Dojo for 15,000 credits.");
const buy_elytron_harness_blueprint = new Recipe("Buy Elytron Harness Blueprint", "Buy an Elytron Harness Blueprint from the Tenno Lab in the Dojo for 15,000 credits.")
    .addInput(credits, 15000)
    .addOutput(elytron_harness_blueprint, 1);
const elytron_systems = new Item("Elytron Systems", "Archwing part obtained from crafting.")
const craft_elytron_systems = new Recipe("Craft Elytron Systems", "Craft Elytron Systems from the blueprint.")
    .addInput(elytron_systems_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(control_module, 1)
    .addInput(morphics, 5)
    .addInput(salvage, 6000)
    .addInput(cryotic, 3800)
    .addOutput(elytron_systems, 1);
const elytron_wings = new Item("Elytron Wings", "Archwing part obtained from crafting.")
const craft_elytron_wings = new Recipe("Craft Elytron Wings", "Craft Elytron Wings from the blueprint.")
    .addInput(elytron_wings_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(alloy_plate, 6000)
    .addInput(neural_sensor, 2)
    .addInput(polymer_bundle, 5500)
    .addInput(rubedo, 1100)
    .addOutput(elytron_wings, 1);
const elytron_harness = new Item("Elytron Harness", "Archwing part obtained from crafting.")
const craft_elytron_harness = new Recipe("Craft Elytron Harness", "Craft Elytron Harness from the blueprint.")
    .addInput(elytron_harness_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(ferrite, 1000)
    .addInput(morphics, 1)
    .addInput(rubedo, 300)
    .addInput(orokin_cell, 3)
    .addOutput(elytron_harness, 1);
const elytron = new Item("Elytron", "Archwing obtained from crafting.")
const craft_elytron = new Recipe("Craft Elytron", "Craft Elytron from the blueprint.")
    .addInput(elytron_blueprint, 1)
    .addInput(elytron_systems, 1)
    .addInput(elytron_wings, 1)
    .addInput(elytron_harness, 1)
    .addInput(control_module, 5)
    .addInput(credits, 25000)
    .addOutput(elytron, 1);

// itzal
// bp and parts bp tenno lab 15k

const itzal_blueprint = new Item("Itzal Blueprint", "Blueprint obtained from the Tenno Lab in the Dojo for 15,000 credits.");
const buy_itzal_blueprint = new Recipe("Buy Itzal Blueprint", "Buy an Itzal Blueprint from the Tenno Lab in the Dojo for 15,000 credits.")
    .addInput(credits, 15000)
    .addOutput(itzal_blueprint, 1);
const itzal_systems_blueprint = new Item("Itzal Systems Blueprint", "Blueprint obtained from the Tenno Lab in the Dojo for 15,000 credits.");
const buy_itzal_systems_blueprint = new Recipe("Buy Itzal Systems Blueprint", "Buy an Itzal Systems Blueprint from the Tenno Lab in the Dojo for 15,000 credits.")
    .addInput(credits, 15000)
    .addOutput(itzal_systems_blueprint, 1);
const itzal_wings_blueprint = new Item("Itzal Wings Blueprint", "Blueprint obtained from the Tenno Lab in the Dojo for 15,000 credits.");
const buy_itzal_wings_blueprint = new Recipe("Buy Itzal Wings Blueprint", "Buy an Itzal Wings Blueprint from the Tenno Lab in the Dojo for 15,000 credits.")
    .addInput(credits, 15000)
    .addOutput(itzal_wings_blueprint, 1);
const itzal_harness_blueprint = new Item("Itzal Harness Blueprint", "Blueprint obtained from the Tenno Lab in the Dojo for 15,000 credits.");
const buy_itzal_harness_blueprint = new Recipe("Buy Itzal Harness Blueprint", "Buy an Itzal Harness Blueprint from the Tenno Lab in the Dojo for 15,000 credits.")
    .addInput(credits, 15000)
    .addOutput(itzal_harness_blueprint, 1);
const itzal_systems = new Item("Itzal Systems", "Archwing part obtained from crafting.")
const craft_itzal_systems = new Recipe("Craft Itzal Systems", "Craft Itzal Systems from the blueprint.")
    .addInput(itzal_systems_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(control_module, 1)
    .addInput(oxium, 320)
    .addInput(salvage, 800)
    .addInput(neurodes, 2)
    .addOutput(itzal_systems, 1);
const itzal_wings = new Item("Itzal Wings", "Archwing part obtained from crafting.")
const craft_itzal_wings = new Recipe("Craft Itzal Wings", "Craft Itzal Wings from the blueprint.")
    .addInput(itzal_wings_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(alloy_plate, 150)
    .addInput(oxium, 400)
    .addInput(ferrite, 900)
    .addInput(tellurium, 2)
    .addOutput(itzal_wings, 1);
const itzal_harness = new Item("Itzal Harness", "Archwing part obtained from crafting.")
const craft_itzal_harness = new Recipe("Craft Itzal Harness", "Craft Itzal Harness from the blueprint.")
    .addInput(itzal_harness_blueprint, 1)
    .addInput(credits, 15000)
    .addInput(oxium, 180)
    .addInput(ferrite, 700)
    .addInput(rubedo, 300)
    .addInput(tellurium, 2)
    .addOutput(itzal_harness, 1);
const itzal = new Item("Itzal", "Archwing obtained from crafting.")
const craft_itzal = new Recipe("Craft Itzal", "Craft Itzal from the blueprint.")
    .addInput(itzal_blueprint, 1)
    .addInput(itzal_systems, 1)
    .addInput(itzal_wings, 1)
    .addInput(itzal_harness, 1)
    .addInput(control_module, 2)
    .addInput(credits, 25000)
    .addOutput(itzal, 1);

// other
// ------------------------

// odonata, imperator, veritux
// do the archwing quest

const odonata = new Item("Odonata", "Archwing obtained from The Archwing Quest.");
const imperator = new Item("Imperator", "Archwing weapon obtained from The Archwing Quest.");
const veritux = new Item("Veritux", "Archwing melee weapon obtained from The Archwing Quest.");
const do_the_archwing_quest = new Recipe("Do The Archwing Quest", "Do the Archwing Quest to unlock the Archwing.")
    .addOutput(odonata, 1)
    .addOutput(imperator, 1)
    .addOutput(veritux, 1);

// finalize

const warframe_handler = handler;

export { warframe_handler };