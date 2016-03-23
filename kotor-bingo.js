var bingoListVersion = 1.01;
var bingoList = [];

/* Very Easy Tasks - Taris and Early Dantooine */
// Easy item upgrades
bingoList[1] = [
  { name: "Fully upgraded Republic Mod Armor", types: ["light_armor"] },
  { name: "Fully upgraded Echani Fiber Armor", types: ["light_armor"] },
  { name: "Fully upgraded Bendak's Blaster", types: ["blaster_pistol","bounty"] },
  { name: "Fully upgraded Mission's Vibroblade", types: ["sword","companions"] },
  { name: "Fully upgraded armor, blaster, sword", types: [] },
  { name: "Clear Davik's Estate", types: ["davik"] },
];
// Easy tasks
bingoList[2] = [
  { name: "Kill Calo Nord", types: ["calo"] },
  { name: "Recruit HK-47", types: ["hk-47","companions"] },
  { name: "Five available Jedi Party Members", types: [] },
  { name: "Sith Medallion", types: [] },
  { name: "Kill Belaya", types: ["juhani"] },
  { name: "Complete \"The Trouble with Gizka\"", types: [] },
  { name: "Exactly 0 Credits", types: ["credits"] },
];
// Taris bounties
bingoList[3] = [
  { name: "Get Dia's Bounty Lifted", types: ["bounty"] },
  { name: "Defeat Twitch", types: [] },
  { name: "Kill Selven", types: ["bounty"] },
  { name: "Kill Bendak Starkiller", types: ["bounty"] },
  { name: "Blow up Matrik's apartment", types: ["bounty"] },
  { name: "Complete all Taris bounty quests", types: ["bounty"] },
];
// Other Taris tasks
bingoList[4] = [
  { name: "Complete \"The Promised Land\"", types: [] },
  { name: "Break 18s on Taris Swoops", types: [] },
  { name: "Kill Gadon Thek", types: [] },
  { name: "Davik's War Suit", types: ["medium_armor","davik"] },
  { name: "Free Hudrow", types: [] },
  { name: "Recruit Mission but not Zaalbar", types: ["mission","companions"] },
];
// Dantooine tasks
bingoList[5] = [
  { name: "Kill Juhani", types: ["juhani"] },
  { name: "Complete \"Mandalorian Raiders\"", types: [] },
  { name: "Complete \"Sandral-Matale Feud\"", types: [] },
  { name: "Talk to Samnt", types: [] },
  { name: "Kill all kinrath on Dantooine", types: [] },
  { name: "Kill an Albino Kath Hound", types: [] },
];

/* Easy Tasks - Simple multiplanet, collection, and build */
// Easy multiplanet tasks
bingoList[6] = [
  { name: "Above 30 Net Awareness skill", types: ["skills"] },
  { name: "Opila Crystal", types: ["power_crystal"] },
  { name: "Damind Crystal", types: ["power_crystal"] },
  { name: "Destroy Droid (Force power)", types: ["force_master"] },
  { name: "Force Storm", types: ["force_master"] },
  { name: "Jurgan Kalta's Assault Rifle", types: ["blaster_rifle","purchase"] },
  { name: "Shoot down 40 Sith fighters", types: [] },
  { name: "Kill Darth Bandon", types: ["bandon"] },
];
// Easy Character Build tasks
bingoList[7] = [
  { name: "Above 30 Net Stealth skill", types: ["skills"] },
  { name: "Bondar Crystal", types: ["power_crystal"] },
  { name: "Jenruax Crystal", types: ["power_crystal"] },
  { name: "Sith Regenerator", types: ["implant","purchase"] },
  { name: "Karakan Gauntlets", types: ["glove","purchase"] },
  { name: "Implant Level 3", types: [] },
  { name: "Dark Side Mastery", types: ["alignment"] },
  { name: "Two Weapon Specializations", types: ["weapon_master"] },
];
// Nonunique power crystals
bingoList[8] = [
  { name: "Pistol Targetting Optics", types: ["head","purchase"] },
  { name: "Rubat Crystal", types: ["power_crystal"] },
  { name: "Firkrann Crystal", types: ["power_crystal"] },
  { name: "Sith Armor", types: [] },
  { name: "Sneak Attack IX", types: ["base_class"] },
  { name: "Level 6 in two classes", types: ["class_levels","level"] },
  { name: "Recruit all Party Members", types: ["companions","juhani"] },
];
// Easy purchase tasks
bingoList[9] = [
  { name: "Nextor Crystal", types: ["power_crystal"] },
  { name: "Eralam Crystal", types: ["power_crystal"] },
  { name: "Solve the Rakatan Riddles", types: [] },
  { name: "Jamoh Hogra's Battle Armor", types: ["medium_armor","purchase"] },
  { name: "Five lightsabers of different colors", types: ["rainbow_sabers"] },
  { name: "Above 30 Net Demolitions skill", types: ["skills"] },
];
// Unique power crystals
bingoList[10] = [
  { name: "Luxum Crystal", types: ["power_crystal"] },
  { name: "Phond Crystal", types: ["power_crystal"] },
  { name: "Solari Crystal", types: ["power_crystal","solari"] },
  { name: "One of each Pazaak Card", types: ["pazaak","purchase"] },
  { name: "Purchase a store's entire inventory", types: ["purchase"] },
  { name: "150 Maximum Vitality", types: ["attributes"] },
  { name: "Calo, Davik, and Bandon's Armors", types: ["armor","light_armor","medium_armor","heavy_armor","bandon","calo","davik"] },
];

/* Medium Tasks - Medium multiplanet and single star map*/
// Kashyyyk tasks
bingoList[11] = [
  { name: "Strand Zaalbar on Kashyyyk", types: ["companions"] },
  { name: "Bacca's Ceremonial Blade", types: ["zaalbar","sword","ritual_beast"] },
  { name: "Circlet of Saresh", types: ["head"] },
  { name: "Complete \"Hidden Hunters\"", types: [] },
  { name: "Complete \"Honest Debt\"", types: [] },
  { name: "20 tach glands", types: ["tach"] },
  { name: "Three Viper Kinrath corpses", types: ["ritual_beast"] },
  { name: "Czerka Corp. Resource ID", types: [] },
  { name: "Three Unique Bowcasters", types: ["zaalbar"] },
];
// Korriban tasks
bingoList[12] = [
  { name: "Kill Kel Algwinn", types: [] },
  { name: "Qel-Droma Robes", types: ["qel-droma"] },
  { name: "Naga Sadow's Poison Blade", types: ["tomb_raider","sword"] },
  { name: "Carbonite Projector Mark II", types: ["tomb_raider"] },
  { name: "Clear the Sith Academy", types: ["sith_bases","yuthura"] },
  { name: "Defeat Ajunta Pall's Spirit", types: ["tomb_raider"] },
  { name: "Visit Kel Algwinn on Dantooine", types: [] },
];
// Tatooine tasks
bingoList[13] = [
  { name: "Moisture Vaporators", types: [] },
  { name: "150 Racing Bonds", types: ["swoops"] },
  { name: "20 Gaffi Sticks", types: ["gaffi","two_handed_melee"] },
  { name: "Defeat Furko Nellis' Tournament Deck", types: ["pazaak"] },
  { name: "Two Krayt Dragon Pearls", types: ["komad","power_crystal"] },
  { name: "Raito's Gaderffii", types: ["gaffi","two_handed_melee"] },
  { name: "Kill Griff", types:["griff"] },
];
// Manaan tasks
bingoList[14] = [
  { name: "Become Sector Champion on Manaan", types: ["swoops"] },
  { name: "Get banned from Manaan", types: [] },
  { name: "Token from tortured Selkath", types: [] },
  { name: "Clear both Sith Bases", types: ["sith_bases"] },
  { name: "Clear the Hrakert Rift Station", types: [] },
  { name: "Sonic Emitter", types: [] },
  { name: "Kill whimpering locker", types: [] },
];
// Medium multiplanet tasks
bingoList[15] = [
  { name: "Kill four terentateks", types: ["terentatek"] },
  { name: "Resolve all three murder cases", types: ["murder","jolee"] },
  { name: "All three Great Hunt journals", types: ["solari","qel-droma","terentatek","ritual_beast"] },
  { name: "Win all 8 Swoop Races", types: ["swoops"] },
  { name: "Loot all Sith Lord Sarcophagi", types: ["tomb_raider"] },
  { name: "Both Holocrons", types: [] },
  { name: "Talk to Komad on Kashyyyk", types: ["komad"] },
  { name: "Talk to Yuthura on Dantooine", types: ["yuthura"] },
];

/* Hard Tasks */
// Easy GenoHaradan tasks
bingoList[16] = [
  { name: "Kill Rulan", types: ["bounty"] },
  { name: "Kill Vorn", types: ["bounty"] },
  { name: "Kill Zuulan", types: ["bounty"] },
  { name: "Both Manaan GenoHaradan Bounties", types: ["bounty"] },
  { name: "GenoHaradan Power Gloves", types: ["glove"] },
  { name: "GenoHaradan Poison Blade", types: ["sword"] },
  { name: "GenoHaradan Blaster", types: ["blaster_pistol"] },
  { name: "GenoHaradan Stealth Unit", types: ["belt"] },
  { name: "GenoHaradan Visor", types: ["head"] },
];
// Companion tasks
bingoList[17] = [
  { name: "Complete \"Threat from Xor\"", types: ["juhani"] },
  { name: "Complete \"Jagi's Challenge\"", types: ["canderous"] },
  { name: "Kiss Bastila", types: ["bastila","gendered"] },
  { name: "Complete \"Finding Dustil\"", types: ["carth"] },
  { name: "Give Griff a tach gland", types:["mission","griff","tach"] },
  { name: "Fully repair HK-47", types: ["hk-47"] },
  { name: "Have Sunry declared innocent", types: ["jolee","murder"] },
  { name: "Complete \"Chieftain in Need\"", types: ["zaalbar"] },
];
// Medium Character Build tasks
bingoList[18] = [
  { name: "All Master-level Blaster Feats", types: ["blaster_master"] },
  { name: "All Master-level Melee Feats", types: ["melee_master"] },
  { name: "All characters use blasters only", types: ["restriction"] },
  { name: "All three Force Immunity feats", types: ["jedi_class"] },
  { name: "Four third tier Force powers", types: ["force_master"] },
  { name: "Master Caution, Empathy, Gear Head", types: ["utility_master"] },
];
// Medium tasks (grab bag)
bingoList[19] = [
  { name: "Fully upgraded Baragwin Assault Blade", types: ["baragwin","sword"] },
  { name: "Kill Carth", types: ["endgame","gendered"] },
  { name: "Both Exoskeletons", types: ["armor","light_armor","medium_armor"] },
  { name: "Wear Light and Dark Equipment", types: ["endgame","alignment"] },
  { name: "13 unique power crystals", types: ["power_crystal","power_crystal"] },
  { name: "Kill Hulas", types: [] },
  { name: "Complete all 11 bounty quests", types: ["bounty"] },
  { name: "Defeat every Pazaak player once", types: ["pazaak"] },
];
// Hard Character Build tasks
bingoList[20] = [
  { name: "21 Base Charisma", types: ["attributes"] },
  { name: "40 points in all skills", types: ["skills"] },
  { name: "Achieve Level 20", types: ["level"] },
  { name: "Level 8 in two classes", types: ["class_levels","level"] },
  { name: "Never use universal Force Powers", types: ["restriction"] },
];

/* Very Hard Tasks */
// Short Leviathan tasks
bingoList[21] = [
  { name: "Any 4 Star Maps", types: ["maps"] },
  { name: "Use HK-47 to Rescue Party", types: ["hk-47"] },
  { name: "Release the Rodian Captives", types: [] },
  { name: "Icebreaker", types: [] },
  { name: "Clear the Leviathan's Detention Level", types: [] },
  { name: "Space Suit", types: [] },
  { name: "Breathe the vacuum of space", types: [] },
  { name: "100,000 Credits", types: ["credits"] },
];
// Longer Leviathan tasks
bingoList[22] = [
  { name: "Escape the Leviathan", types: [] },
  { name: "Only 2 available party members", types: ["companions","restriction"] },
  /*{ name: "Kill Darth Revan", types: ["endgame"] },*/
  { name: "Visit Dantooine after the Leviathan", types: [] },
  { name: "Kill Saul Karath", types: [] },
  { name: "Verpine Prototype Shield", types: [] },
  { name: "Dominator Gauntlets", types: [] },
  { name: "Clear the Leviathan", types: [] },
];
// Hard collection tasks
bingoList[23] = [
  { name: "All 16 Implants", types: ["implant"] },
  { name: "All 18 Belts", types: ["belt"] },
  { name: "All 12 Gloves", types: ["glove"] },
  { name: "All 14 Light Armors", types: ["light_armor"] },
  { name: "All 14 Medium Armors", types: ["medium_armor"] },
  { name: "All 23 Blaster Pistols", types: ["blaster_pistol"] },
  { name: "All 14 Two-Handed Melee Weapons", types: ["two_handed_melee"] },
  { name: "All 8 Heavy Armors", types: ["heavy_armor"] },
  { name: "All Baragwin items", types: ["baragwin"] },
];
// Endgame tasks
bingoList[24] = [
  { name: "Light Side Mastery", types: ["alignment"] },
  { name: "All 5 Star Maps", types: ["endgame","maps"] },
  { name: "Kill Keeper Orsaa", types: ["endgame"] },
  { name: "Kill the Trandoshan Smugglers", types: ["endgame"] },
  { name: "Mantle of the Force", types: ["rainbow_sabers"] },
  { name: "Heart of the Guardian", types: ["rainbow_sabers"] },
  { name: "Kill Bastila", types: ["endgame"] },
];
// Hard multiplanet tasks
bingoList[25] = [
  { name: "Complete all companion sidequests", types: ["companions","juhani","kill_juhani","zaalbar","mission","canderous","carth","bastila","hk-47","jolee"] },
  { name: "50 completed quests in Journal", types: [] },
  { name: "Complete map for four planets", types: ["reveal_map"] },
  { name: "Seven lightsabers of different colors", types: ["rainbow_sabers"] },
  { name: "Clear all four Sith Strongholds", types: ["sith_bases","yuthura"] },
  { name: "Kill Darth Malak", types: ["endgame"] },
];

$(function () { bingo(bingoList, 5, bingoListVersion); });
