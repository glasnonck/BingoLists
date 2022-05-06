var bingoListVersion = "0.1";
var bingoList = [];

bingoList[1] = [
  { name: "Reach the Star Forge", types: [] },
  { name: "Ship Parts", types: [] },
  { name: "10,000 Credits", types: ["Credits"] },
  { name: "15 Tach Glands", types: [] },
  { name: "20 Gaffi Sticks", types: ["Tatooine"] },
  { name: "Adrenaline Stimulator", types: ["Belts"] },
  { name: "Bondar Crystal", types: ["Crystal"] },
  { name: "Carbonite Projector Mark II", types: ["Tombs"] },
];
bingoList[2] = [
  { name: "Circlet of Saresh", types: ["AlignedItem"] },
  { name: "Convict Both Rickard and Handon", types: ["Murder"] },
  { name: "Damind Crystal", types: ["Crystal"] },
  { name: "Davik's War Suit", types: [] },
  { name: "Discover Zelka Forn's Secret", types: [] },
  { name: "Dominator Gauntlets", types: ["Gloves"] },
  { name: "Eralam Crystal", types: ["Crystal"] },
  { name: "Escape the Mind Prison", types: ["Riddles"] },
];
bingoList[3] = [
  { name: "Firkrann Crystal", types: ["Crystal"] },
  { name: "Heart of the Guardian", types: ["Colors"] },
  { name: "Help with Lyn Sekla's Audition", types: ["Taris"] },
  { name: "Jenruax Crystal", types: ["Crystal"] },
  { name: "Kill the Duros on Lehon", types: [] },
  { name: "Luxum Crystal", types: ["Crystal"] },
  { name: "Mantle of the Force", types: ["Colors"] },
  { name: "Naga Sadow's Poison Blade", types: [] },
];
bingoList[4] = [
  { name: "Nextor Crystal", types: ["Crystal"] },
  { name: "Opila Crystal", types: ["Crystal"] },
  { name: "Phond Crystal", types: ["Crystal"] },
  { name: "Poison Both Yuthura and Uthar", types: [] },
  { name: "Qel-Droma Robes", types: ["AlignedItem"] },
  { name: "Rescue the Mandalorian on Korriban", types: [] },
  { name: "Rubat Crystal", types: ["Crystal"] },
  { name: "Rescue Tanis", types: [] },
];
bingoList[5] = [
  { name: "Sith Power Gauntlets", types: ["Gloves"] },
  { name: "Solari Crystal", types: ["Crystal","AlignedItem"] },
  { name: "Verpine Prototype Shield", types: ["Armband", "Verpine"] },
  { name: "Verpine Zal Alloy Mesh", types: ["Verpine"] },
  { name: "Win 4 Fighter Skirmishes", types: [] },
  { name: "Kill a Rancor", types: [] },  
  { name: "Purchase a Store's Entire Inventory", types: ["Credits"] },
  { name: "Exactly 0 Credits", types: ["Credits"] },
];
bingoList[6] = [
  { name: "Attend Yun Genda's Party", types: ["Gender"] },
  { name: "Blow Up Matrik's Apartment", types: ["Bounty"] },
  { name: "Both Exoskeletons", types: ["Credits"] },
  { name: "Complete \"Honest Debt\"", types: [] },
  { name: "Two Sapith Crystals", types: ["Crystals"] },
  { name: "Kill the Lavin Thugs", types: [] },
  { name: "Sell Sharina's Wraid Plate", types: [] },
  { name: "Token From Tortured Selkath", types: [] },
  { name: "Two Bendak's Blasters", types: ["Blasters"] },
];
bingoList[7] = [
  { name: "Kill Selven", types: ["Bounty"] },
  { name: "Two Krayt Dragon Pearls", types: ["Crystal"] },
  { name: "Get Dia's Bounty Lifted", types: ["Taris","Bounty"] },
  { name: "Kill the Whimpering Locker", types: ["Alignment"] },
  { name: "Czerka Corp. Resource ID", types: [] },
  { name: "Recruit HK-47", types: ["Party", "HK"] },
  { name: "Sith Armor", types: ["Disguise"] },
  { name: "Solve the Light Ring Puzzle", types: ["Tombs"] },  
  { name: "Successfully Interrogate the Sith Prisoner", types: [] },
];
bingoList[8] = [
  { name: "Three Viper Kinrath Corpses", types: ["Zaalbar","Hunt"] },
  { name: "Kill Kel Algwinn", types: ["Alignment"] }, 
  { name: "Redeem Ajunta Pall's Spirit", types: ["Alignment","Tombs"] },
  { name: "Kill a Shyrack Alpha", types: [] },  
  { name: "Kill a Hive Kinrath", types: [] },
  { name: "Kill an Albino Kath Hound", types: [] },
  { name: "Kill Kandon Ark", types: [] },
  { name: "100,000 Credits", types: ["Credits"] },
  { name: "20 Net Stealth Skill", types: ["Character"] },
];
bingoList[9] = [
  { name: "All Three Great Hunt Journals", types: ["Hunt"] },
  { name: "Fully Upgraded Republic Mod Armor", types: ["Upgrade"] },
  { name: "Fully Upgraded Echani Fiber Armor", types: ["Upgrade"] },
  { name: "Redeem Two Sith to the Light", types: ["Redeem", "Tombs"] },
  { name: "Three Light Alignment-Restricted Items", types: ["AlignedItem"] },
  { name: "Three Unique Bowcasters", types: [] },
  { name: "Complete \"The Trouble with Gizka\"", types: [] },
  { name: "Complete \"Sandral-Matale Feud\"", types: [] },
  { name: "Complete \"The Promised Land\"", types: [] },
];
bingoList[10] = [
  { name: "Defend the Sandcrawler Miners", types: [] },
  { name: "Free Hudrow", types: [] },
  { name: "100 Base Maximum Vitality", types: ["Character"] },
  { name: "Destroy Droid (Force Power)", types: ["Force power","Character"] },
  { name: "Implant Level 3", types: ["Character"] },
  { name: "One Droid with Upgrade Class 3", types: ["Character", "HK", "T3", "Party"] },
  { name: "Improved Scoundrel's Luck", types: ["Character"] },
  { name: "Uncanny Dodge 2", types: ["Character"] },
  { name: "Kill Griff", types: ["Mission","Party", "Alignment"] },
];
bingoList[11] = [
  { name: "All 4 Sith Lord Artifacts", types: ["Tombs","AlignedItem"] },
  { name: "All Four Disguises", types: ["Disguise"] },
  { name: "Fully Upgraded Baragwin Assault Blade", types: ["Upgrade"] },
  { name: "Fully Upgraded Mission's Vibroblade", types: ["Upgrade"] },
  { name: "Give Motta the Mysterious Box", types: ["Riddles"] },
  { name: "Have Sunry Declared Innocent", types: ["Murder","Party","Jolee"] },
  { name: "Redeem Four Sith to the Light", types: ["Tombs", "Redeem"] },
  { name: "Resolve All 3 Murder Cases", types: ["Murder"] },
  { name: "Talk to Samnt", types: [] },
];
bingoList[12] = [
  { name: "Zaalbar Wielding Bacca's Ceremonial Blade", types: ["Zaalbar"] },
  { name: "Complete \"Mission for the Republic\"", types: ["Manaan"] },  
  { name: "Dark Side Mastery", types: ["Character","Alignment"] },
  { name: "Fully Repair HK-47", types: ["Party","HK"] },
  { name: "Romance Carth", types: ["Party", "Gender"] },
  { name: "Romance Bastila", types: ["Party", "Gender"] },
  { name: "Complete \"Pazaak Rules\"", types: ["Pazaak"] },
  { name: "Complete \"Hidden Hunters\"", types: ["Mandos"] },
  { name: "Defeat Both Defense Droids", types: [] },  
];
bingoList[13] = [
  { name: "Kill Jorak Uln", types: ["Tombs", "Redeem"] },
  { name: "Kill the One", types: ["Lehon"] },
  { name: "20 Completed Quests in Journal", types: ["Quests"] },
  { name: "5 Different Lightsaber Colors", types: ["Colors"] },
  { name: "All 5 Star Maps", types: [] },
  { name: "Both Holocrons", types: ["Family"] },
  { name: "Complete \"Mandalorian Raiders\"", types: ["Mandos"] },
  { name: "Complete \"Premium Merchant\"", types: [] },
  { name: "Download 5 Area Schematics", types: [] },
];
bingoList[14] = [
  { name: "Five Alignment-Restricted Items", types: ["Tombs","AlignedItem"] },
  { name: "Fully Upgraded Bendak's Blaster", types: ["Upgrade","Blasters"] },
  { name: "Give Griff a Tach Gland", types: ["Mission"] },
  { name: "Raito's Gaderffii", types: ["Tatooine"] },
  { name: "Return Sasha to Dantooine", types: ["Party", "Zaalbar"] },
  { name: "Talk to Yuthura on Dantooine", types: ["Redeem"] }, 
  { name: "Complete \"Rakatan Research\"", types: [] },
  { name: "Complete \"Rakghoul Serum\"", types: [] }, 
  { name: "Get Banned From Manaan", types: [] }, 
];
bingoList[15] = [
  { name: "Kill Belaya", types: ["Juhani","Party"] },  
  { name: "Moisture Vaporators", types: ["HK"] },
  { name: "Complete \"Finding Dustil\"", types: ["Party"] },
  { name: "Clear the Endar Spire", types: ["Clear"] },
  { name: "Defeat Furko Nellis's Tournament Deck", types: ["Pazaak"] },
  { name: "Sith Medallion", types: [] },
  { name: "150 Base Maximum Force Points", types: ["Character"] },
  { name: "Strand Zaalbar on Kashyyyk", types: ["Zaalbar","Party"] },
  { name: "Talk to Komad on Kashyyyk", types: [] },
];
bingoList[16] = [
  { name: "10 Prestige Points", types: [] },
  { name: "150 Racing Bonds", types: ["Swoops"] },
  { name: "30 Completed Quests in Journal", types: ["Quests"] },
  { name: "All 6 Stealth Generators", types: ["Collect", "Belts"] },
  { name: "Become Sector Champion on Manaan", types: ["Swoops"] },
  { name: "Clear the Sith Academy", types: ["Clear"] },
  { name: "Kill Calo Nord", types: ["Bosses"] },
  { name: "Kill Jolee and Juhani", types: ["Juhani"] },
  { name: "Clear Davik's Estate", types: ["Clear"] },
];
bingoList[17] = [
  { name: "Clear the Sand People Enclave", types: ["Clear"] },
  { name: "Defeat Twitch", types: ["Bounty"] },
  { name: "Niklos Accuses You of Cheating", types: ["Pazaak"] },
  { name: "20 Net Rank in Three Skills", types: ["Character"] },
  { name: "At Least 8 Defense from Feats", types: ["Character"] },
  { name: "Master Toughness and Master Conditioning", types: ["Character"] }, 
  { name: "Two Weapon Specializations", types: ["Character"] },
  { name: "All 7 Different Lightsaber Colors", types: ["Colors", "Credits"] },
  { name: "Complete All 5 Taris Bounty Quests", types: ["Bounty"] },
];
bingoList[18] = [
  { name: "Complete All Kashyyyk Quests", types: ["Quests"] },
  { name: "Clear Both Sith Bases", types: ["Clear"] },
  { name: "One of All 4 Deadly Mines", types: ["Character"] },
  { name: "Clear the Hidden Bek Base", types: ["Clear"] },
  { name: "Kill 12 Mandalorians", types: ["Mandos"] },
  { name: "Clear the Hrakert Rift Station", types: ["Clear"] },
  { name: "Kill Saul Karath", types: ["Bosses"] },
  { name: "GenoHaradan Poison Blade", types: ["Bounty","Geno"] },
];
bingoList[19] = [
  { name: "8 Unique Lightsaber Power Crystals", types: ["Crystal"] },
  { name: "Kill Darth Bandon", types: ["Bosses"] }, 
  { name: "Kill Vorn", types: ["Bounty", "Geno"] },
  { name: "Kill Rulan", types: ["Bounty", "Geno"] },
  { name: "Kill Zuulan", types: ["Bounty","Blasters","Geno"] },
  { name: "Clear the Vulkar Base", types: ["Clear"] },
  { name: "Kill Four Terentateks", types: ["Hunt"] },
  { name: "Complete \"Chieftain in Need\"", types: ["Party"] },
];
bingoList[20] = [
  { name: "All 3 Force Immunity Feats", types: ["Character"] },  
  { name: "Level 6 in Two Classes", types: ["Character"] }, 
  { name: "GenoHaradan Visor", types: ["Bounty", "Geno"] },
  { name: "GenoHaradan Stealth Unit", types: ["Bounty", "Geno", "Belts"] },
  { name: "GenoHaradan Power Gloves", types: ["Bounty","Geno","Gloves"] }, 
  { name: "GenoHaradan Blaster", types: ["Bounty","Geno","Blasters"] },  
  { name: "Defeat Malak on the Leviathan", types: [] },
  { name: "Clear the Warrior Rakatan Compound", types: ["Clear"] },
];
bingoList[21] = [
  { name: "21 Base Charisma", types: ["Character"] },
  { name: "All Master-Level Blaster Feats", types: ["Character"] },
  { name: "15 in All Saves", types: ["Character"] },
  { name: "Master Caution, Empathy, and Gear Head", types: ["Character"] },
  { name: "Three Third-Tier Force Powers", types: ["Character"] },
  { name: "40 Completed Quests in Journal", types: ["Quests"] }, 
  { name: "All 10 Armbands", types: ["Collect","Armband"] },
  { name: "Complete \"Threat from Xor\"", types: ["Juhani","Party"] },
];
bingoList[22] = [
  { name: "Force Zaalbar to Kill Mission", types: ["Lehon"] },
  { name: "Star Map: Kashyyyk as Revan", types: ["Kashyyyk"] },
  { name: "Kill 20 Mandalorians", types: ["Mandos"] },
  { name: "Clear the Shadowlands", types: ["Clear"] },
  { name: "Kill Hulas", types: ["Bounty", "Geno"] },
  { name: "One of Each Pazaak Card", types: ["Pazaak"] },
  { name: "All 12 Gloves", types: ["Collect","Gloves"] },
  { name: "Fully Upgraded Armor, Blaster, and Sword", types: ["Upgrade"] },
];
bingoList[23] = [
  { name: "Get Suvam Tam's Pazaak Discount", types: ["Pazaak"] }, 
  { name: "13 Unique Lightsaber Power Crystals", types: ["Crystal", "Collect"] },
  { name: "Complete All Manaan Quests", types: ["Manaan","Quests"] },
  { name: "Complete All Dantooine Quests", types: ["Dantooine","Quests"] },
  { name: "Kill the Trandoshan Smugglers", types: [] }, 
  { name: "All 14 Medium Armors", types: ["Collect"] },
  { name: "All 14 Light Armors", types: ["Collect"] },
  { name: "Clear the Leviathan", types: ["Clear"] },
];
bingoList[24] = [
  { name: "Kill 25 Mandalorians", types: ["Mandos"] },
  { name: "All 15 Lightsaber Power Crystals", types: ["Crystal", "Collect"] },
  { name: "Recruit All Party Members", types: ["Party","Mission","Zaalbar","Juhani","Jolee","HK","T3"] },  
  { name: "Complete All Korriban Quests", types: ["Quests"] },
  { name: "Level 8 in Two Classes", types: ["Character"] },
  { name: "Complete All Tatooine Quests", types: ["Tatooine","Quests"] },
  { name: "Resolve All Party Family Disputes", types: ["Party","Mission","Zaalbar","Family"] },
  { name: "Win All 8 Swoop Races", types: ["Swoops"] },
];
bingoList[25] = [
  { name: "All 23 Blaster Pistols", types: ["Credits","Blasters","Collect"] }, 
  { name: "Kill Calo, Davik, Bandon, and Saul", types: ["Bosses"] },
  { name: "Complete All 11 Bounty Quests", types: ["Geno", "Bounty"] },  
  { name: "Complete All Taris Quests", types: ["Quests"] },
  { name: "Kill 40 Unique Enemies", types: ["Bounty", "Bosses"] },
  { name: "Defeat Every Pazaak Player Once", types: ["Pazaak"] },
  { name: "Light Side Mastery", types: ["Character","Alignment","Bounty"] },
  { name: "Complete All 9 Companion Sidequests", types: ["Party","Zaalbar","Juhani","Mission","Jolee","HK","T3"] },
];

$(function () { bingo(bingoList, 5, bingoListVersion); });
