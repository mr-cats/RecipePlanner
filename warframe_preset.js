// dont try this at home

import { Item } from "./item";
import { Recipe } from "./recipe";
import { Handler } from "./handler";

export const handler = new Handler();

// time

const second = new Item("Second", "A unit of time equal to 1/60th of a minute.");

// base resources
const aggristone = new Item("Aggristone", "A resource that can be found in Duviri.");
const alloy_plate = new Item("Alloy Plate", "A common component that can be found on Venus, Jupiter, Sedna, and Ceres.");
const argon_crystal = new Item("Argon Crystal", "A rare crystal formed in the Origin System's void.");
const ariette_scale = new Item("Ariette Scale", "A resource that can be found by feeding the maw in Duviri.");
const carbides = new Item("Carbides", "An uncommon component that can be found from Eximus enemies on the Grineer Shipyard tileset.");
const circuits = new Item("Circuits", "A common component that can be found on Venus, Ceres, and the Kuva Fortress.");
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
const hexenon = new Item("Hexenon", "A rare component that can be found on Jupiter and the Kuva Fortress.");
const isos = new Item("Isos", "An uncommon component that can be found in Corpus Railjack missions.");
const kovnik = new Item("Kovnik", "A resource that can be found in Duviri.");
const kuva = new Item("Kuva", "A rare component that can be found on the Kuva Fortress.");
const lamentus = new Item("Lamentus", "A resource that can be found in Duviri.");
const lucent_teroglobe = new Item("Lucent Teroglobe", "A resource that can be found in the Cambion Drift.");
const maw_fang = new Item("Maw Fang", "A component found from feeding the maw in Duviri.");
const morphics = new Item("Morphics", "A component used in many weapons and Warframe parts.");
const mutagen_sample = new Item("Mutagen Sample", "A rare component that can be found on Eris and the Derelict.");
const nacreous_pebble = new Item("Nacreous Pebble", "A resource that can be found by feeding the maw in Duviri.");
const nano_spores = new Item("Nano Spores", "A common component that is often found in quantities of over 1000.");
const neural_sensor = new Item("Neural Sensor", "A rare component that can be found on Jupiter, Kuva Fortress, and the Kuva Fortress.");
const neurodes = new Item("Neurode", "A neural relay of mysterious origin.");
const nitain = new Item("Nitain Extract", "A rare component that is often used in the construction of Warframes and weapons.");
const nullstones = new Item("Nullstones", "A rare component that can be found in Railjack missions.");
const orokin_cell = new Item("Orokin Cell", "A cell extracted from the insides of any large orokin construct.");
const oxium = new Item("Oxium", "A rare component that can be found on Venus, Jupiter, and the Kuva Fortress.");
const pathos_clamp = new Item("Pathos Clamp", "A resource found in Duviri.");
const plastids = new Item("Plastids", "A common component that can be found on Saturn, Uranus, Phobos, and Pluto.");
const polymer_bundle = new Item("Polymer Bundle", "A common component that can be found on Mercury, Venus, and Uranus.");
const rubedo = new Item("Rubedo", "A common component that can be found on Phobos, Earth, Pluto, and Europa.");
const rune_marrow = new Item("Rune Marrow", "A component found in the Circuit (Duviri).");
const saggen_pearl = new Item("Saggen Pearl", "A component found in Duviri.");
const salvage = new Item("Salvage", "A common component that can be found on Mars, Jupiter, and Eris.");
const scintillant = new Item("Scintillant", "A rare component that can be found on Deimos in Isolation Vaults.");
const silphsela = new Item("Silphsela", "A resource that can be found in Duviri.");
const tasoma_extract = new Item("Tasoma Extract", "A resource that can be found in Duviri.");
const tellurium = new Item("Tellurium", "A rare component that can be found on Archwing missions and Uranus Sabotage missions.");
const tepa_nodule = new Item("Tepa Nodule", "A component found in the Orb Vallis.");
const thrax_plasm = new Item("Thrax Plasm", "Dropped by Thrax enemies in the Chrysalith.");
const titanium = new Item("Titanium", "A component found in Railjack missions.");
const void_traces = new Item("Void Traces", "A rare component that can be found on the Void.");
const voidgel_orb = new Item("Voidgel Orb", "A rare component that can be found on the Chrysalith.");
const voidplume_quill = new Item("Voidplume Quill", "Found in the Chrysalith.");
const voidplume_pinion = new Item("Voidplume Pinion", "Dropped from Void Angels.");
const yao_shrub = new Item("Yao Shrub", "A component found in Duviri.");

// other 

const nora_cred = new Item("Nora Cred", "A currency used to purchase items from Nightwave.");
const damaged_necramech_weapon_barrel = new Item("Damaged Necramech Weapon Barrel", "Reward from Isolation Vault Bounties Rotation A.");
const damaged_necramech_weapon_receiver = new Item("Damaged Necramech Weapon Receiver", "Reward from Isolation Vault Bounties Rotation B.");
const damaged_necramech_weapon_stock = new Item("Damaged Necramech Weapon Stock", "Reward from Isolation Vault Bounties Rotation C.");
const atmo_systems = new Item("Atmo Systems", "Obtainable from Heist Bounties or Little Duck.");
const repeller_systems = new Item("Repeller Systems", "Obtainable from Heist Bounties or Little Duck.");

// standing

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

// minerals

const adramalium = new Item("Adramalium", "A mineral found in the Cambion Drift.");
const bapholite = new Item("Bapholite", "A mineral found in the Cambion Drift.");
const embolos = new Item("Embolos", "A gem found in the Cambion Drift.");
const ferros = new Item("Ferros", "A mineral found in the Plains of Eidolon.");
const namalon = new Item("Namalon", "A gem found in the Cambion Drift.");
const necrathene = new Item("Necrathene", "A gem found in the Cambion Drift.");
const noctrul = new Item("Noctrul", "A gem found in the Orb Vallis.");
const pyrol = new Item("Pyrol", "A mineral found in the Plains of Eidolon.");
const travoride = new Item("Travoride", "A gem found in the Orb Vallis.");
const xenorhast = new Item("Xenorhast", "A gem found in the Cambion Drift.");

// refined minerals

const adramal_alloy = new Item("Adramal Alloy", "A resource crafted from adramalium.");
const craft_adramal_alloy = new Recipe("Craft Adramal Alloy", "Reusable Blueprint from Otak at Entrati Rank 0.")
    .addInput(adramalium, 20)
    .addInput(credits, 1000)
    .addInput(travoride, 20)
    .addInput(plastids, 600)
    .addInput(lucent_teroglobe, 15)
    .addOutput(adramal_alloy, 20);

const cabochon_embolos = new Item("Cabochon Embolos", "A resource crafted from embolos.");
const craft_cabochon_embolos = new Recipe("Craft Cabochon Embolos", "Reusable Blueprint from Otak at Entrati Rank 3.")
    .addInput(embolos, 3)
    .addInput(credits, 1000)
    .addOutput(cabochon_embolos, 3);

const devolved_namalon = new Item("Devolved Namalon", "A resource crafted from namalon.");
const craft_devolved_namalon = new Recipe("Craft Devolved Namalon", "Reusable Blueprint from Otak at Entrati Rank 1.")
    .addInput(namalon, 20)
    .addInput(credits, 1000)
    .addInput(ferros, 20)
    .addInput(rubedo, 160)
    .addInput(lucent_teroglobe, 15)
    .addOutput(devolved_namalon, 20);

const fersteel_alloy = new Item("Fersteel Alloy", "A resource crafted from ferros.");
const craft_fersteel_alloy = new Recipe("Craft Fersteel Alloy", "Reusable Blueprint from Old Man Suumbat at rank Visitor.")
    .addInput(ferros, 20)
    .addInput(credits, 1000)
    .addInput(plastids, 400)
    .addInput(rubedo, 200)
    .addOutput(fersteel_alloy, 20);

const heart_noctrul = new Item("Heart Noctrul", "A resource crafted from noctrul.");
const craft_heart_noctrul = new Recipe("Craft Heart Noctrul", "Reusable Blueprint from Smokefinger at rank 0.")
    .addInput(noctrul, 10)
    .addInput(credits, 1000)
    .addOutput(heart_noctrul, 10);

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

const trapezium_xenorhast = new Item("Trapezium Xenorhast", "A resource crafted from xenorhast.");
const craft_trapezium_xenorhast = new Recipe("Craft Trapezium Xenorhast", "Reusable Blueprint from Otak at Entrati Rank 3.")
    .addInput(xenorhast, 3)
    .addInput(credits, 1000)
    .addOutput(trapezium_xenorhast, 3);

// fish

const chondrichord_small = new Item("Chondrichord (Small)", "A fish found in the Cambion Drift.");
const chondrichord_medium = new Item("Chondrichord (Medium)", "A fish found in the Cambion Drift.");
const chondrichord_large = new Item("Chondrichord (Large)", "A fish found in the Cambion Drift.");

const flagellocanth_small = new Item("Flagellocanth (Small)", "A fish found in the Cambion Drift.");
const flagellocanth_medium = new Item("Flagellocanth (Medium)", "A fish found in the Cambion Drift.");
const flagellocanth_large = new Item("Flagellocanth (Large)", "A fish found in the Cambion Drift.");

const tink_basic = new Item("Tink (Basic)", "A servofish found in the Orb Vallis.");
const tink_adorned = new Item("Tink (Adorned)", "A servofish found in the Orb Vallis.");
const tink_magnificent = new Item("Tink (Magnificent)", "A servofish found in the Orb Vallis.");

const tromyzon_basic = new Item("Tromyzon (Basic)", "A servofish found in the Orb Vallis.");
const tromyzon_adorned = new Item("Tromyzon (Adorned)", "A servofish found in the Orb Vallis.");
const tromyzon_magnificent = new Item("Tromyzon (Magnificent)", "A servofish found in the Orb Vallis."); 

const vitreospina_basic = new Item("Vitreospina (Basic)", "A fish found in the Cambion Drift.");
const vitreospina_adorned = new Item("Vitreospina (Adorned)", "A fish found in the Cambion Drift.");
const vitreospina_magnificent = new Item("Vitreospina (Magnificent)", "A fish found in the Cambion Drift.");

// fish parts

const benign_infested_tumor = new Item("Benign Infested Tumor", "A resource acquired from cutting all Deimos fish.");
const dendrite_blastoma = new Item("Dendrite Blastoma", "A resource acquired from cutting some Deimos fish.");
const ferment_bladder = new Item("Ferment Bladder", "A resource acquired from cutting some Deimos fish.");
const ocular_stem_root = new Item("Ocular Stem Root", "A resource acquired from cutting flagellocanth.");
const scrap = new Item("Scrap", "A resource acquired from cutting Servofish.");
const spinal_core_section = new Item("Spinal Core Section", "A resource acquired from cutting some Deimos fish.");
const tink_dissipator_coil = new Item("Tink Dissipator Coil", "A resource acquired from cutting Tink.");
const tromyzon_entroplasma = new Item("Tromyzon Entroplasma", "A resource acquired from cutting Tromyzon.");
const tubercular_gill_system = new Item("Tubercular Gill System", "A resource acquired from cutting some Deimos fish.");

// filet those fish

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
    .addInput(nora_creds, 50)
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



// parts recipes

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

// warframes

// finalize