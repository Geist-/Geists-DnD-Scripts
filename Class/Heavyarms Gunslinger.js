/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.
	-KEEP IN MIND-
	It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/*	-INFORMATION-
	Subject:	Class and Subclasses
	Effect:		This script adds the Gunslinger Class and its Subclasses from Heavyarms' Gunslinger Class.
				If you intend to use this script, please consider supporting the creator at https://www.heavyarms.com/products/gunslinger?variant=40542343102628
				This script uses version v1.11, the latest edition released as of 2024/03/04

	Code by:	Geist
	Date:		2024-03-04 (sheet v13.1.12)
*/

var iFileName = "ha-gunslinger.js";
RequiredSheetVersion("13.1.7");
SourceList["HA:G"] = {
    name: "Heavy Arms: Gunslinger",
    abbreviation: "HA:G",
    group: "Heavy Arms",
    url: "https://www.heavyarms.com/products/gunslinger?variant=40542343102628",
    date: "2021/08/30",
};

AmmoList["ha:rounds"] = {
    name: "Rounds",
    source: ["HA:G", 10],
    icon: "Bullets",
	checks : [".Bullet"],
    weight: 0.05,
    invName: "Rounds",
};

GearList["ha:rounds"] = {
    infoname: "Rounds, (20) [3 gp]",
    name: "Rounds",
    amount: 20,
    weight: 0.05,
    type: "ammunition",
    source: ["HA:G", 10],
};

AmmoList["ha:heat_seekers"] = {
    name: "Heat Seekers",
    source: ["HA:G", 10],
    icon: "Bullets",
	checks : [".Bullet"],
    weight: 0.05,
    invName: "Heat Seekers",
    alternatives: [/^(?=.*heat)(?=.*seekers).*$/i],
};

GearList["ha:heat_seekers"] = {
    infoname: "Heat Seekers, (20) [100 gp]",
    name: "Heat Seekers",
    amount: 20,
    weight: 0.05,
    type: "ammunition",
    source: ["HA:G", 10],
};

AmmoList["ha:incendiary"] = {
    name: "Incendiary",
    source: ["HA:G", 10],
    icon: "Bullets",
	checks : [".Bullet"],
    weight: 0.05,
    invName: "Incendiary",
};

GearList["ha:incendiaries"] = {
    infoname: "Incendiaries, (20) [100 gp]",
    name: "Incediaries",
    amount: 20,
    weight: 0.05,
    type: "ammunition",
    source: ["HA:G", 10],
};

AmmoList["ha:silvered"] = {
    name: "Silvered",
    source: ["HA:G", 10],
    icon: "Bullets",
	checks : [".Bullet"],
    weight: 0.05,
    invName: "Round, Silvered",
};

GearList["ha:silvered"] = {
    infoname: "Silvered, (20) [50 gp]",
    name: "Silvered",
    amount: 20,
    weight: 0.05,
    type: "ammunition",
    source: ["HA:G", 10],
};

AmmoList["ha:shotshells"] = {
    name: "Shotshells",
    source: ["HA:G", 10],
    icon: "Bullets",
	checks : [".Bullet"],
    weight: 0.05,
    display: 6,
    invName: "Shotshells",
};

GearList["ha:shotshells"] = {
    infoname: "Shotshells, (20) [3 gp]",
    name: "Shotshells",
    amount: 20,
    weight: 0.05,
    type: "ammunition",
    source: ["HA:G", 10],
};

WeaponsList["ha:pistol_hand_cannon"] = {
    name: "Pistol, hand cannon",
    source: ["HA:G", 10],
    regExpSearch: /^(?=.*pistol)(?=.*hand)(?=.*cannon).*$/i,
    ability: 2,
    type: "Firearms",
    list: "firearm",
    damage: [1, 8, "piercing"],
    range: "60/180 ft",
    description: "Ammunition, kick (12), loud, reload (6 shots)",
    weight: 3,
    ammo: "ha:rounds",
};

WeaponsList["ha:pistol_side_arm"] = {
    name: "Pistol, Sidearm",
    source: ["HA:G", 10],
    ability: 2,
    regExpSearch: /^(?=.*pistol)(?=.*sidearm).*$/i,
    type: "Firearms",
    list: "firearm",
    damage: [1, 6, "piercing"],
    range: "40/120 ft",
    description: "Ammunition, loud, pocket , reload (6 shots)",
    weight: 2,
    ammo: "ha:rounds",
};

WeaponsList["ha:rifle"] = {
    name: "Rifle, repeating",
    source: ["HA:G", 10],
    ability: 2,
    regExpSearch: /^(?=.*rifle)(?=.*repeating).*$/i,
    type: "Firearms",
    list: "firearm",
    damage: [1, 10, "piercing"],
    range: "150/450 ft",
    description: "Ammunition, loud, reload (6 shots), two-handed",
    weight: 8,
    ammo: "ha:rounds",
};

WeaponsList["ha:shotgun_repeating"] = {
    name: "Shotgun, repeating",
    source: ["HA:G", 10],
    regExpSearch: /^(?=.*shotgun)(?=.*repeating).*$/i,
    type: "Firearms",
    list: "firearm",
    ability: 2,
    damage: [1, 10, "piercing"],
    range: "20/30 ft",
    description: "Ammunition, loud, reload (6 shots), special, two-handed",
    weight: 7,
    ammo: "ha:shotshells",
    special: true,
};

WeaponsList["ha:shotgun_sawed"] = {
    name: "Shotgun, sawed-off",
    source: ["HA:G", 10],
    regExpSearch: /^(?=.*shotgun)(?=.*sawed).*$/i,
    type: "Firearms",
    ability: 2,
    damage: [1, 10, "piercing"],
    range: "10/20 ft",
    description: "Ammunition, kick (14), loud, reload (2 shots), special",
    list: "ranged",
    weight: 7,
    modifiers: [1, ""],
    ammo: "ha:shotshells",
    special: true,
};

MagicItemsList["ace of spades"] = {
	name : "Ace of Spades",
	source : ["HA:G", 12],
	type : "weapon (firearm)",
	rarity : "very rare",
	description : "I gain a +2 bonus to attack and damage rolls made with this magic weapon.",
	descriptionFull : 'I gain a +2 bonus to attack and damage rolls made with\n this magic weapon.\n\n Firefly. When I kill a hostile creature with a critical\n hit using this weapon, the target explodes in a sudden conflagration,\n as if a fireball spell were cast centered on it.\n\n Inscription: "Read \'em and weep"',
	attunement : true,
	weight : 3,
	weaponsAdd : ["Ace of Spades"],
	weaponOptions : {
		baseWeapon : "ha:pistol_hand_cannon",
		regExpSearch : /^(?=.*ace)(?=.*spade).*$/i,
		name : "Ace of Spades",
		source : ["HA:G", 12],
		description : "I gain a +2 bonus to attack and damage rolls made with this magic weapon.",
		modifiers : [2, 2]
	},
};

MagicItemsList["bad juju"] = {
	name : "Bad Juju",
	source : ["HA:G", 12],
	type : "weapon (any firearm)",
	rarity : "very rare",
	description : "I gain a +1 bonus to attack and damage rolls made with this magic weapon.",
	descriptionFull : "I gain a +1 bonus to attack and damage rolls made with\n this magic weapon.\n\n Ghostbuster. While holding this weapon, I can\n see into the Ethereal Plane within 60 feet of me.\n Furthermore, attacks with this weapon can hit targets on\n the Ethereal Plane.",
	attunement : true,
	weight : 3,
	chooseGear : {
		type : "weapon",
		prefixOrSuffix : "brackets",
		descriptionChange : ["replace", "firearm"],
		itemName1stPage : ["suffix", "Bad Juju"],
		excludeCheck : function (inObjKey, inObj) {
			var testRegex = /ha:pistol_hand_cannon|ha:pistol_side_arm|ha:rifle|ha:shotgun_repeating|ha:shotgun_sawed/i;
			return !(testRegex).test(inObjKey) && (!inObj.baseWeapon || !(testRegex).test(inObj.baseWeapon));
		}
	},
	calcChanges : {
		atkAdd : [
			function (fields, v) {
				if (!v.theWea.isMagicWeapon && v.isRangedWeapon && (/ha:pistol_hand_cannon|ha:pistol_side_arm|ha:rifle|ha:shotgun_repeating|ha:shotgun_sawed/i).test(v.baseWeaponName) && (/\bbad juju?\b/i).test(v.WeaponTextName)) {
					v.theWea.isMagicWeapon = true;
					fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
				}
			},
			'If I include the words "Bad Juju" in a the name of a firearm, it will be treated as the magic weapon Bad Juju. While holding this weapon, I can see into the Ethereal Plane within 60 feet of me. Furthermore, attacks with this weapon can hit targets on the Ethereal Plane.'
		],
		atkCalc : [
			function (fields, v, output) {
				if (v.isRangedWeapon && (/ha:pistol_hand_cannon|ha:pistol_side_arm|ha:rifle|ha:shotgun_repeating|ha:shotgun_sawed/i).test(v.baseWeaponName) && (/\bbad juju?\b/i).test(v.WeaponTextName)) {
					output.magic = v.thisWeapon[1] + 1;
				}
			},
			''
		]
	}
};

MagicItemsList["boomstick"] = {
	name : "Boomstick",
	source : ["HA:G", 12],
	type : "weapon (any shotgun)",
	rarity : "rare",
	description : "I gain a +1 bonus to attack and damage rolls made with this magic weapon.",
	descriptionFull : 'I gain a +1 bonus to attack and damage rolls made with\n this magic weapon.\n\n Fireball. While I am holding this weapon, I can\nuse my action to cast the fireball spell from it. Once used,\nthis property can\'t be used again until the following dawn.\n\nInscription: "Shop smart"',
	attunement : true,
	weight : 3,
	fixedDC : 16,
	spellcastingBonus : {
		name : "Once per dawn",
		spells : ["fireball"],
		selection : ["fireball"],
		firstCol : 'oncelr'
	},
	chooseGear : {
		type : "weapon",
		prefixOrSuffix : "brackets",
		descriptionChange : ["replace", "firearm"],
		itemName1stPage : ["suffix", "Bad Juju"],
		excludeCheck : function (inObjKey, inObj) {
			var testRegex = /ha:shotgun_repeating|ha:shotgun_sawed/i;
			return !(testRegex).test(inObjKey) && (!inObj.baseWeapon || !(testRegex).test(inObj.baseWeapon));
		}
	},
	calcChanges : {
		atkAdd : [
			function (fields, v) {
				if (!v.theWea.isMagicWeapon && v.isRangedWeapon && (/ha:shotgun_repeating|ha:shotgun_sawed/i).test(v.baseWeaponName) && (/\bboomstick?\b/i).test(v.WeaponTextName)) {
					v.theWea.isMagicWeapon = true;
					fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
				}
			},
			'If I include the words "Bad Juju" in a the name of a firearm, it will be treated as the magic weapon Bad Juju. While holding this weapon, I can see into the Ethereal Plane within 60 feet of me. Furthermore, attacks with this weapon can hit targets on the Ethereal Plane.'
		],
		atkCalc : [
			function (fields, v, output) {
				if (v.isRangedWeapon && (/ha:shotgun_repeating|ha:shotgun_sawed/i).test(v.baseWeaponName) && (/\bboomstick?\b/i).test(v.WeaponTextName)) {
					output.magic = v.thisWeapon[1] + 1;
				}
			},
			''
		]
	}
};

MagicItemsList["borealis"] = {
	name : "Borealis",
	source : ["HA:G", 12],
	type : "weapon (any rifle)",
	rarity : "uncommon",
	description : "I gain a +1 bonus to attack and damage rolls made with this magic weapon.",
	descriptionFull : "I gain a +1 bonus to attack and damage rolls made with\n this magic weapon.\n\n Prism. While I am holding this weapon, I can take\n a bonus action to change its damage type to acid, cold,\n fire, lightning, or poison. This effect lasts until I use this\n property again or I dismiss it as a bonus action.",
	attunement : true,
	weight : 3,
	weaponsAdd : ["Borealis"],
	weaponOptions : {
		baseWeapon : "ha:rifle",
		regExpSearch : /^(?=.*borealis).*$/i,
		name : "Borealis",
		source : ["HA:G", 12],
		description : "I gain a +1 bonus to attack and damage rolls made with this magic weapon.",
		modifiers : [1, 1]
	},
};

MagicItemsList["good medicine"] = {
	name : "Good Medicine",
	source : ["HA:G", 12],
	type : "weapon (any firearm)",
	rarity : "rare",
	description : "I gain a +1 bonus to attack and damage rolls made with this magic weapon.",
	descriptionFull : "I gain a +1 bonus to attack and damage rolls made with\n this magic weapon. When I score a critical hit with this\n weapon during combat, I can forgo rolling any number\n of additional damage dice granted by my Bad Medicine\n feature. When I do so, choose another creature within\n 10 feet of the original target and roll the forgone dice.\n The chosen creature regains hit points equal to the result\n + my Wisdom modifier (minimum of 1 hit point). This\n property has no effect on Constructs or Undead.\n Inscription: \u201CJust what the doctor ordered\u201D",
	attunement : true,
	weight : 3,
	chooseGear : {
		type : "weapon",
		prefixOrSuffix : "brackets",
		descriptionChange : ["replace", "firearm"],
		itemName1stPage : ["suffix", "Good Medicine"],
		excludeCheck : function (inObjKey, inObj) {
			var testRegex = /ha:pistol_hand_cannon|ha:pistol_side_arm|ha:rifle|ha:shotgun_repeating|ha:shotgun_sawed/i;
			return !(testRegex).test(inObjKey) && (!inObj.baseWeapon || !(testRegex).test(inObj.baseWeapon));
		}
	},
	calcChanges : {
		atkAdd : [
			function (fields, v) {
				if (!v.theWea.isMagicWeapon && v.isRangedWeapon && (/ha:pistol_hand_cannon|ha:pistol_side_arm|ha:rifle|ha:shotgun_repeating|ha:shotgun_sawed/i).test(v.baseWeaponName) && (/\bgood medicine?\b/i).test(v.WeaponTextName)) {
					v.theWea.isMagicWeapon = true;
					fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
				}
			},
			'If I include the words "Good Medicine" in a the name of a firearm, it will be treated as the magic weapon Good Medicine. When I score a critical hit with this weapon during combat, I can forgo rolling any number of additional damage dice granted by my Bad Medicine feature. When I do so, choose another creature within 10 feet of the original target and roll the forgone dice. The chosen creature regains hit points equal to the result + my Wisdom modifier (minimum of 1 hit point). This property has no effect on Constructs or Undead.'
		],
		atkCalc : [
			function (fields, v, output) {
				if (v.isRangedWeapon && (/ha:pistol_hand_cannon|ha:pistol_side_arm|ha:rifle|ha:shotgun_repeating|ha:shotgun_sawed/i).test(v.baseWeaponName) && (/\bgood medicine?\b/i).test(v.WeaponTextName)) {
					output.magic = v.thisWeapon[1] + 1;
				}
			},
			''
		]
	}
};

MagicItemsList["iconoclast"] = {
	name : "Iconoclast",
	source : ["HA:G", 12],
	type : "weapon (any firearm)",
	rarity : "very rare",
	description : "I gain a +2 bonus to attack and damage rolls made with this magic weapon.",
	descriptionFull : 'I gain a +2 bonus to attack and damage rolls made with\n this magic weapon.\n\n Kingslayer. When I score a critical hit with this weapon,\nif the target has the Legendary Resistance trait, it loses\none use of that trait if it has any uses remaining.\n\nInscription: "If it ain\'t broke, break it"',
	attunement : true,
	weight : 3,
	chooseGear : {
		type : "weapon",
		prefixOrSuffix : "brackets",
		descriptionChange : ["replace", "firearm"],
		itemName1stPage : ["suffix", "Iconoclast"],
		excludeCheck : function (inObjKey, inObj) {
			var testRegex = /ha:pistol_hand_cannon|ha:pistol_side_arm|ha:rifle|ha:shotgun_repeating|ha:shotgun_sawed/i;
			return !(testRegex).test(inObjKey) && (!inObj.baseWeapon || !(testRegex).test(inObj.baseWeapon));
		}
	},
	calcChanges : {
		atkAdd : [
			function (fields, v) {
				if (!v.theWea.isMagicWeapon && v.isRangedWeapon && (/ha:pistol_hand_cannon|ha:pistol_side_arm|ha:rifle|ha:shotgun_repeating|ha:shotgun_sawed/i).test(v.baseWeaponName) && (/\biconoclast?\b/i).test(v.WeaponTextName)) {
					v.theWea.isMagicWeapon = true;
					fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
				}
			},
			'If I include the words "Iconoclast" in a the name of a firearm, it will be treated as the magic weapon Iconoclast. When I score a critical hit with this weapon, if the target has the Legendary Resistance trait, it loses one use of that trait if it has any uses remaining.'
		],
		atkCalc : [
			function (fields, v, output) {
				if (v.isRangedWeapon && (/ha:pistol_hand_cannon|ha:pistol_side_arm|ha:rifle|ha:shotgun_repeating|ha:shotgun_sawed/i).test(v.baseWeaponName) && (/\biconoclast?\b/i).test(v.WeaponTextName)) {
					output.magic = v.thisWeapon[2] + 2;
				}
			},
			''
		]
	}
};

MagicItemsList["lawgiver"] = {
	name : "Lawgiver",
	source : ["HA:G", 12],
	type : "weapon (firearm)",
	rarity : "very rare",
	description : "I gain a +1 bonus to attack and damage rolls made with this magic weapon.",
	descriptionFull : "I gain a +1 bonus to attack and damage rolls made with\n this magic weapon.\n\n Death Sentence. If a creature that isn't attuned to this\nweapon attempts to make an attack with it, the weapon\ncasts the disintegrate spell on that creature before the attack\nis made.",
	attunement : true,
	weight : 3,
	weaponsAdd : ["Lawgiver"],
	weaponOptions : {
		baseWeapon : "ha:pistol_hand_cannon",
		regExpSearch : /^(?=.*lawgiver).*$/i,
		name : "Lawgiver",
		source : ["HA:G", 12],
		description : "I gain a +1 bonus to attack and damage rolls made with this magic weapon.",
		modifiers : [1, 1]
	},
};

MagicItemsList["little rascal"] = {
	name : "Little Rascal",
	source : ["HA:G", 12],
	type : "weapon (firearm)",
	rarity : "Uncommon",
	description : "Underdog. When I hit a Large or larger creature with an attack using this weapon, the target takes an extra 1d6 damage of the weapon's type.",
	descriptionFull : "Underdog. When I hit a Large or larger creature with\n an attack using this weapon, the target takes an extra 1d6\n damage of the weapon's type.",
	attunement : true,
	weight : 2,
	weaponsAdd : ["Little Rascal"],
	weaponOptions : {
		baseWeapon : "ha:pistol_side_arm",
		regExpSearch : /^(?=.*little)(?=.*rascal).*$/i,
		name : "Little Rascal",
		source : ["HA:G", 12],
		description : "Underdog. When I hit a Large or larger creature with an attack using this weapon, the target takes an extra 1d6 damage of the weapon's type.",
	},
};

MagicItemsList["old faithful"] = {
	name : "Old Faithful",
	source : ["HA:G", 12],
	type : "weapon (any firearm)",
	rarity : "rare",
	description : "I gain a +1 bonus to attack and damage rolls made with this magic weapon.",
	descriptionFull : "I gain a +1 bonus to attack and damage rolls made with\n this magic weapon.\n\n Sureshot. I ignore the loading and reload properties\nof this weapon.",
	attunement : true,
	weight : 3,
	chooseGear : {
		type : "weapon",
		prefixOrSuffix : "brackets",
		descriptionChange : ["replace", "firearm"],
		itemName1stPage : ["suffix", "Old Faithful"],
		excludeCheck : function (inObjKey, inObj) {
			var testRegex = /ha:pistol_hand_cannon|ha:pistol_side_arm|ha:rifle|ha:shotgun_repeating|ha:shotgun_sawed/i;
			return !(testRegex).test(inObjKey) && (!inObj.baseWeapon || !(testRegex).test(inObj.baseWeapon));
		}
	},
	calcChanges : {
		atkAdd : [
			function (fields, v) {
				if (!v.theWea.isMagicWeapon && v.isRangedWeapon && (/ha:pistol_hand_cannon|ha:pistol_side_arm|ha:rifle|ha:shotgun_repeating|ha:shotgun_sawed/i).test(v.baseWeaponName) && (/\bold faithful?\b/i).test(v.WeaponTextName)) {
					v.theWea.isMagicWeapon = true;
					fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
				}
			},
			'If I include the words "Old Faithful" in a the name of a firearm, it will be treated as the magic weapon Old Faithful. I can ignore the loading and reload properties of this weapon'
		],
		atkCalc : [
			function (fields, v, output) {
				if (v.isRangedWeapon && (/ha:pistol_hand_cannon|ha:pistol_side_arm|ha:rifle|ha:shotgun_repeating|ha:shotgun_sawed/i).test(v.baseWeaponName) && (/\bold faithful?\b/i).test(v.WeaponTextName)) {
					output.magic = v.thisWeapon[1] + 1;
				}
			},
			''
		]
	}
};

MagicItemsList["pilgrims path"] = {
	name : "Pilgrim's Path",
	source : ["HA:G", 12],
	type : "weapon (any firearm)",
	rarity : "very rare",
	description : "I gain a +2 bonus to attack and damage rolls made with this magic weapon.",
	descriptionFull : "I gain a +2 bonus to attack and damage rolls made with\n this magic weapon. Whenever score a critical hit with it,\n I can regain 2 expended grit points, instead of 1.",
	attunement : true,
	weight : 3,
	chooseGear : {
		type : "weapon",
		prefixOrSuffix : "brackets",
		descriptionChange : ["replace", "firearm"],
		itemName1stPage : ["suffix", "Pilgrim's Path"],
		excludeCheck : function (inObjKey, inObj) {
			var testRegex = /ha:pistol_hand_cannon|ha:pistol_side_arm|ha:rifle|ha:shotgun_repeating|ha:shotgun_sawed/i;
			return !(testRegex).test(inObjKey) && (!inObj.baseWeapon || !(testRegex).test(inObj.baseWeapon));
		}
	},
	calcChanges : {
		atkAdd : [
			function (fields, v) {
				if (!v.theWea.isMagicWeapon && v.isRangedWeapon && (/ha:pistol_hand_cannon|ha:pistol_side_arm|ha:rifle|ha:shotgun_repeating|ha:shotgun_sawed/i).test(v.baseWeaponName) && (/\bpilgrims path?\b/i).test(v.WeaponTextName)) {
					v.theWea.isMagicWeapon = true;
					fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
				}
			},
			'If I include the words "Pilgrim\'s Path" in a the name of a firearm, it will be treated as the magic weapon Pilgrim\'s Path. Whenever score a critical hit with it, I can regain 2 expended grit points, instead of 1'
		],
		atkCalc : [
			function (fields, v, output) {
				if (v.isRangedWeapon && (/ha:pistol_hand_cannon|ha:pistol_side_arm|ha:rifle|ha:shotgun_repeating|ha:shotgun_sawed/i).test(v.baseWeaponName) && (/\bpilgrims path?\b/i).test(v.WeaponTextName)) {
					output.magic = v.thisWeapon[2] + 2;
				}
			},
			''
		]
	}
};

MagicItemsList["showstopper"] = {
	name : "Showstopper",
	source : ["HA:G", 12],
	type : "weapon (any shotgun)",
	rarity : "legendary",
	description : "I gain a +3 bonus to attack and damage rolls made with this magic weapon.",
	descriptionFull : 'I gain a +3 bonus to attack and damage rolls made with\n this magic weapon.\n\n Curtain Call. When I score a critical hit with this\n weapon, the target must succeed on a Constitution saving\n throw or be reduced to 0 hit points.\n\n Inscription: "Show\'s over"',
	attunement : true,
	weight : 3,
	chooseGear : {
		type : "weapon",
		prefixOrSuffix : "brackets",
		descriptionChange : ["replace", "firearm"],
		itemName1stPage : ["suffix", "Showstopper"],
		excludeCheck : function (inObjKey, inObj) {
			var testRegex = /ha:shotgun_repeating|ha:shotgun_sawed/i;
			return !(testRegex).test(inObjKey) && (!inObj.baseWeapon || !(testRegex).test(inObj.baseWeapon));
		}
	},
	calcChanges : {
		atkAdd : [
			function (fields, v) {
				if (!v.theWea.isMagicWeapon && v.isRangedWeapon && (/ha:shotgun_repeating|ha:shotgun_sawed/i).test(v.baseWeaponName) && (/\bshowstopper?\b/i).test(v.WeaponTextName)) {
					v.theWea.isMagicWeapon = true;
					fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
				}
			},
			'If I include the words "Showstopper" in a the name of a firearm, it will be treated as the magic weapon Showstopper. Curtain Call. When I score a critical hit with this weapon, the target must succeed on a Constitution saving throw or be reduced to 0 hit points.'
		],
		atkCalc : [
			function (fields, v, output) {
				if (v.isRangedWeapon && (/ha:shotgun_repeating|ha:shotgun_sawed/i).test(v.baseWeaponName) && (/\bshowstopper?\b/i).test(v.WeaponTextName)) {
					output.magic = v.thisWeapon[3] + 3;
				}
			},
			''
		]
	}
};

MagicItemsList["the long view"] = {
	name : "The Long View",
	source : ["HA:G", 12],
	type : "weapon (any rifle)",
	rarity : "uncommon",
	description : "I gain a +1 bonus to attack and damage rolls made with this magic weapon.",
	descriptionFull : "I gain a +1 bonus to attack and damage rolls made with\n this magic weapon.\n\n Hawkeye. Attacking at long range doesn't impose disadvantage\non my ranged attack rolls made with this weapon.",
	attunement : true,
	weight : 3,
	weaponsAdd : ["The Long View"],
	weaponOptions : {
		baseWeapon : "ha:rifle",
		regExpSearch : /^(?=.*long)(?=.*view).*$/i,
		name : "The Long View",
		source : ["HA:G", 12],
		description : "I gain a +1 bonus to attack and damage rolls made with this magic weapon.",
		modifiers : [1, 1]
	},
};

FeatsList["bully"] = {
    name: "Bully",
    source: ["HA:G", 10],
    prerequisite: "Proficiency with at least one firearm",
    allowDuplicates: true,
    description:
        "I am adept at using firearms in close quarters, gaining the following benefits:\n \u2022 Being within 5 feet of a hostile creature doesn't impose disadvantage on my ranged attack rolls.\n \u2022 Once per turn, when I hit a creature within 10 feet of me with a ranged attack using a firearm, I can force the target to make a Strength saving throw (DC equal to 8 + my proficiency bonus + my Dexterity modifier). On a failed save, I push the target 5 feet away from I and knock it prone.",
    descriptionFull:
        "I am adept at using firearms in close quarters, gaining the following benefits:\n \u2022 Being within 5 feet of a hostile creature doesn't impose disadvantage on my ranged attack rolls.\n \u2022 Once per turn, when I hit a creature within 10 feet of me with a ranged attack using a firearm, I can force the target to make a Strength saving throw (DC equal to 8 + my proficiency bonus + my Dexterity modifier). On a failed save, I push the target 5 feet away from I and knock it prone.",
};

FeatsList["marksman"] = {
    name: "Marksman",
    source: ["HA:G", 10],
    prerequisite: "",
    allowDuplicates: true,
    description:
        "I am an expert at hitting my mark with ranged weapons, gaining the following benefits:\n \u2022 Being prone doesn't impose disadvantage on my ranged weapon attacks.\n \u2022 Attacking a prone target doesn't impose disadvantage on my ranged weapon attack rolls if the target is within my weapon's normal range.\n \u2022 If I haven't moved since the start of my turn, I can use a bonus action to steady my aim. Until the end of my next turn, I have advantage on the next ranged weapon attack roll I make. This effect ends early if I move or take damage.",
    descriptionFull:
        "I am an expert at hitting my mark with ranged weapons, gaining the following benefits:\n \u2022 Being prone doesn't impose disadvantage on my ranged weapon attacks.\n \u2022 Attacking a prone target doesn't impose disadvantage on my ranged weapon attack rolls if the target is within my weapon's normal range.\n \u2022 If I haven't moved since the start of my turn, I can use a bonus action to steady my aim. Until the end of my next turn, I have advantage on the next ranged weapon attack roll I make. This effect ends early if I move or take damage.",
};

FeatsList["pistolero"] = {
    name: "Pistolero",
    source: ["HA:G", 10],
    prerequisite: "Proficiency with pistols",
    allowDuplicates: true,
    description:
        "my speed and skill with a six-gun is unmatched. I gain the following benefits:\n \u2022 When I take the Attack action and attack with a one-handed weapon, I can use a bonus action to attack with a pistol I am holding in my other hand.\n \u2022 If I am surprised at the beginning of combat and aren't incapacitated, I can act normally on my first turn, but only if I attack with a pistol before doing anything else on that turn.",
    descriptionFull:
        "my speed and skill with a six-gun is unmatched. I gain the following benefits:\n \u2022 When I take the Attack action and attack with a one-handed weapon, I can use a bonus action to attack with a pistol I am holding in my other hand.\n \u2022 If I am surprised at the beginning of combat and aren't incapacitated, I can act normally on my first turn, but only if I attack with a pistol before doing anything else on that turn.",
};

ClassList.gunslinger = {
	regExpSearch: /^(?=.*gunslinger).*$/i,
	name : "Gunslinger",
	source: ["HA:G", 5],
	primaryAbility : "Dexterity",
	abilitySave : 2,
	prereqs : "Dexterity 13 and Wisdom 13",
	improvements : [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5],
	die : 8,
	saves : ["Dex", "Cha"],
	skillstxt : {
		primary : "Choose two from Animal Handling, Athletics, Insight, Intimidation, Perception, Sleight of Hand, Stealth, and Survival"
	},
	toolProfs : {
		primary : [["Thieves' tools", "Dex"], "Tinker's tools", ["Gaming set", 1]],
		secondary : [["Thieves' tools", "Dex"], "Tinker's tools"]
	},
	armorProfs : {
		primary : [true, false, false, false],
		secondary : [true, false, false, false]
	},
	weaponProfs : {
		primary : [true, false, ["Firearms", "Whips"]]
	},
	equipment : "Gunslinger starting equipment:" +
		"\n \u2022 leather armor and a simple weapon of my choice;" +
		"\n \u2022 a sidearm and 20 rounds;" +
		"\n \u2022 (a) a hand cannon and 20 rounds or (b) a repeating rifle and 20 rounds or (c) a sawed-off shotgun and 20 shotshells;" +
		"\n \u2022 A dungeoneer's pack -or- an explorer's pack." +
		"\n\nAlternatively, choose 6d4 \xD7 10 gp worth of starting equipment instead of both the class' and the background's starting equipment.",
	subclasses : ["Gunslinger Trails", []],
	attacks : [1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
	features : {
			"deadeye" : {
				name : "Deadeye",
				source : ["HA:G", 6],
				minlevel : 1,
				description : desc(["Whenever I hit a creature with a ranged weapon attack, my critical hit threshhold is reduced by one to a minimum of 16",
				"I lose this benefit if I miss an attack, I become incapacitated, or if my turn ends without attacking a creature", 
				"From 14th level, I gain this benefit twice for each successful ranged weapon attack to a minimum of 16"
			])
			},
			"bad medicine" : {
				name : "Bad Medicine",
				source : ["HA:G", 6],
				minlevel : 1,
				description : desc([
					"I roll one additional weapon damage die when determining extra damage for a critical hit with a firearm",
					"The number of additional dice increases at level 3, 5, 9, 13, and 17."
			])
			},
			"grit" : {
				name : "Grit",
				source : ["HA:G", 6],
				minlevel : 2,
				description : desc([
					"I can spend grit points to fuel various grit features.",
					"I regain 1 expended grit point whenever I score a critical hit against a hostile creature, and I regain all expended grit points when I finish a short or long rest."
				]),
				limfeaname : "Grit Points",
				usages : "1 + Wisdom modifier per ",
				usagescalc : "event.value = 1 + What('Wis Mod');",
				recovery : "short rest",
				"buck up" : {
					name : "Buck Up",
					extraname : "Grit Feature",
					source : ["HA:G", 6],
					description : " [1 grit point]" + desc("As a bonus action, I can spend one or more hit dice, up to my proficiency bonus."),
					action : ["bonus action", ""]
				},
				"bullet time" : {
					name : "Bullet Time",
					extraname : "Grit Feature",
					source : ["HA:G", 6],
					description : " [1 grit point]" + desc("I can impose disadvantage on a attack roll."),
					action : [" (when I see someone attack me)", ""]
				},
				"covering fire" : {
					name : "Covering Fire",
					extraname : "Grit Feature",
					source : ["HA:G", 6],
					description : " [1 grit point]" + desc("As a reaction, I can impose disadvantage on attacks made against creatures other than myself."),
					action : ["reaction", ""]
				},
				"dodge roll" : {
					name : "Dodge Roll",
					extraname : "Grit Feature",
					source : ["HA:G", 6],
					description : " [1 grit point]" + desc("As a bonus action, I can move up to 10 feet without provoking opportunity attacks."),
					action : ["bonus action", ""]
				},
				autoSelectExtrachoices : [{
					extrachoice : "buck up"
				}, {
					extrachoice : "bullet time"
				}, {
					extrachoice : "covering fire"
				}, {
					extrachoice : "dodge roll"
				}]
			},
			"quickdraw" : {
				name : "Quickdraw",
				source : ["HA:G", 6],
				minlevel : 1,
				description : desc([
					"You have advantage on initiative rolls. In addition, whenever you draw or stow a firearm, you can draw or stow any",
					"number of weapons as part of the same move or action."
				])
				advantages : [["Initiative", true]],
			},
			"subclassfeature3" : {
				name : "Gunslinger Trails",
				source : ["HA:G", 6],
				minlevel : 3,
				description : desc("Choose a Gunslinger Trail to commit to and put it in the 'Class' field ")
			},
			"lock n load" : {
				name : "Lock N' Load",
				source : ["HA:G", 6],
				minlevel : 5,
				description : desc("I can load or reload a firearm I am holding as part of my move or my action.")
			},
			"ace in the hole" : {
				name : "Ace in the Hole",
				source : ["HA:G", 6],
				minlevel : 7,
				description : desc("Once per turn when I miss with an attack roll, I can spend 1 grit point to add my Wisdom modifier to the roll."),
			},
			"born lucky" : {
				name : "Born Lucky",
				source : ["HA:G", 6],
				minlevel : 9,
				description : desc("When I am forced to make a saving throw, I can spend 1 grit point to make it with advantage."),
			},
			"frontier justice" : {
				name : "Frontier Justice",
				source : ["HA:G", 6],
				minlevel : 11,
				description : desc("When a creature I can see willingly moves into a space within 10 feet of me while I am wielding a firearm, I can use my reaction to make one ranged weapon attack against that creature."),
				action : ["reaction", ""]
			},
			"skullcracker" : {
				name : "Skullcracker",
				source : ["HA:G", 6],
				minlevel : 13,
				description : desc("When I deal damage with a ranged weapon attack to a creature that is concentrating, the target has disadvantage on the saving throw it makes to maintain its concentration. If the attack is a critical hit, the target automatically fails this saving throw."),
			},
			"cheat death" : {
				name : "Cheat Death",
				source : ["HA:G", 6],
				minlevel : 15,
				description : desc("When I am reduced to 0 hit points but not killed outright, I can spend 1 grit point to drop to 1 hit point instead. Each time I do so, I gain 1 level of exhaustion."),
			},
			"true grit" : {
				name : "True Grit",
				source : ["HA:G", 6],
				minlevel : 18,
				description : desc("When I start my turn and have no grit points remaining, I regain 1 grit point.")
			},
			"golden gun" : {
				name : "Golden Gun",
				source : ["HA:G", 6],
				minlevel : 20,
				description : desc("I have advantage on ranged weapon attack rolls while the threshold for scoring a critical hit is 16 or lower."),
			},
	},
};
	
AddSubClass("gunslinger", "ha:gsmaverick", {
    regExpSearch: /^(?=.*maverick).*$/i,
    subname: "Maverick",
    source: ["HA:G", 7],
    fullname: "Maverick",
    features: {
        "subclassfeature3" : {
            name: "Wild Card",
            source: ["HA:G", 7],
            minlevel: 3,
            description:
                "my inscrutable manner veils my intentions. I gain proficiency in the Intimidation skill. If I already have this proficiency, I gain proficiency in the Persuasion skill or one skill of my choice from the gunslinger skill list instead. my proficiency bonus is doubled for any ability check I make against an intelligent creature that uses Intimidation while I am carrying a weapon.",
			skills : ["Intimidation"],
        },
        "subclassfeature3.1" : {
            name: "Snapshot",
            source: ["HA:G", 7],
            minlevel: 3,
            description:
                "When I roll initiative, I can spend 1 grit point as a reaction to draw a firearm and make one ranged attack with it against a creature or object I can see.",
			action : ["reaction", ""]
        },
        "subclassfeature6" : {
            name: "Rough and Tumble",
            source: ["HA:G", 7],
            minlevel: 6,
            description:
                "I can use a bonus action to dash an object I am holding against a creature within 5 feet of me. The target must succeed on a Constitution saving throw (DC equal to 8 + my proficiency bonus + my Dexterity modifier) or be blinded until the end of my turn.",
			action : ["bonus action", ""]
        },
        "subclassfeature10" : {
            name: "Notorious",
            source: ["HA:G", 7],
            minlevel: 10,
            description:
                "Dramatic tales of my virtue or villainy have traveled far enough to establish a well-known alias. Whenever I make a Charisma check against a creature that is aware of my alias, I can treat a d20 roll of 9 or lower as a 10.",
        },
        "subclassfeature17" : {
            name: "High Noon",
            source: ["HA:G", 7],
            minlevel: 17,
            description:
                "I can target up to six creatures or objects I can see with my Snapshot, making a separate attack roll for each.",
        },
    },
});
AddSubClass("gunslinger", "ha:gsbeastrider", {
    regExpSearch: /^(?=.*beast rider).*$/i,
    subname: "Beast Rider",
    source: ["HA:G", 8],
    fullname: "Beast Rider",
    features: {
        "subclassfeature3" : {
            name: "To the Manor Born",
            source: ["HA:G", 8],
            minlevel: 3,
            description:
                "Whether through hard work or natural talent, I possess a level and breadth of skill few can match. I gain proficiency in two skills of my choice from the gunslinger skill list, one of which should be Animal Handling if I am not already proficient in it. In addition, choose one of my skill proficiencies. my proficiency bonus is doubled for any ability check I make that uses the chosen skill.",
			skillstxt : "Choose two additional skills from the gunslinger skill list. Choose one skill I have proficiency in to gain expertise."
        },
        "subclassfeature3.1" : {
            name: "Broncbuster",
            source: ["HA:G", 8],
            minlevel: 3,
            description:
                "As an action, I can touch a Beast that is at least one size larger than I and that has an appropriate anatomy to serve as a mount. It must succeed on a Wisdom saving throw (DC equal to 8 + my proficiency bonus + my Wisdom modifier) or become charmed by me until I dismiss it, I use this feature to charm a different creature, or I die. While charmed in this way, the target is friendly to I and acts under my control while I am riding it. A creature that successfully saves against this effect is immune to it for 24 hours, after which time it can be affected again. A creature I am fighting automatically succeeds on the saving throw. See book for more details.",
			action : ["action", ""]
        },
        "subclassfeature6" : {
            name: "Rough Rider",
            source: ["HA:G", 8],
            minlevel: 6,
            description:
                "Whenever I take the Attack action, I can forgo one of the attacks from that action to command a mount I am controlling to use its action to make one weapon attack, choosing from those in its stat block.",
        },
        "subclassfeature6.1" : {
            name: "Rider's Reflexes",
            source: ["HA:G", 8],
            minlevel: 6,
            description:
                "When a creature I can see hits my mount with an attack, I can spend 1 grit point as a reaction to halve the attack's damage against it.",
			action : ["reaction", ""]
        },
        "subclassfeature10" : {
            name: "Blazing Saddles",
            source: ["HA:G", 8],
            minlevel: 10,
            description:
                "While I am mounted and aren't incapacitated, my mount ignores difficult terrain. Furthermore, whenever my mount takes the Dash action, it gains additional movement equal to my walking speed.",
        },
        "subclassfeature17" : {
            name: "Air Superiority",
            source: ["HA:G", 8],
            minlevel: 17,
            description:
                "Bestride my mount, I soar, I am the eagle. When I use my Covering Fire while flying, I can make one ranged weapon attack against the attacking creature as part of the same reaction, provided the target is within my weapon's range.",
        },
    },
});
AddSubClass("gunslinger", "ha:gsenforcer", {
    regExpSearch: /^(?=.*enforcer).*$/i,
    subname: "Enforcer",
    source: ["HA:G", 8],
    fullname: "Enforcer",
    features: {
        "subclassfeature3" : {
            name: "Bloodhound",
            source: ["HA:G", 8],
            minlevel: 3,
            description:
                "I learn the telltale signs of dishonesty and evasiveness. I gain proficiency in the Insight skill. If I already have this proficiency, I gain proficiency in another skill of my choice from the gunslinger skill list instead. my proficiency bonus is doubled for any ability check I make to determine the motive or intent of a Humanoid that uses Insight.",
			skills : ["Insight"],
        },
        "subclassfeature3.1" : {
            name: "Double Tough",
            source: ["HA:G", 8],
            minlevel: 3,
            description:
                "I know how to roll with the punches, so to speak. Whenever I regain hit points during combat, I gain the same number of temporary hit points. These temporary hit points last until the end of my next turn.",
        },
        "subclassfeature3.2" : {
            name: "Unforgiven",
            source: ["HA:G", 8],
            minlevel: 3,
            description:
                "If my first attack on my turn hits a creature that attacked me or targeted me with a spell or other harmful effect since the end of my last turn, I can roll one additional weapon damage die and add it to the damage of my attack.",
        },
        "subclassfeature6" : {
            name: "Sharp Eye",
            source: ["HA:G", 8],
            minlevel: 6,
            description:
                "Experience and necessity have honed my ability to discern my surroundings at a glance. I can take the Search action as a bonus action on my turn. In addition, while I am resting, or I am engaged in another activity while traveling (such as foraging, navigating, or tracking), I remain alert to danger.",
			action : ["action", ""],			
        },
        "subclassfeature10" : {
            name: "Hard Case",
            source: ["HA:G", 8],
            minlevel: 10,
            description:
                "While I have temporary hit points, I can't be charmed or frightened. Furthermore, when I use my Buck Up, I can make a saving throw to end one effect on myself that is causing I to be charmed or frightened.",
        },
        "subclassfeature17" : {
            name: "King of the Hill",
            source: ["HA:G", 8],
            minlevel: 17,
            description:
                "Once per turn, I can spend 1 grit point to use my Frontier Justice feature without using my reaction.",
        },
    },
});
AddSubClass("gunslinger", "ha:gspreacher", {
    regExpSearch: /^(?=.*preacher).*$/i,
    subname: "Preacher",
    source: ["HA:G", 9],
    fullname: "Preacher",
	abilitySave : 5,
	spellcastingFactor : 3,
	spellcastingList : {
		"class" : "cleric",
		level : [0]
	},
	spellcastingKnown : {
		cantrips : [2],
	},
    features: {
        "subclassfeature3" : {
            name: "Man of the Cloth",
            source: ["HA:G", 9],
            minlevel: 3,
            description:
                "I have proven myself worthy to take my god's holy vows. I gain proficiency in the Religion skill. If I already have this proficiency, I gain proficiency in one skill of my choice from the gunslinger skill list instead. In addition, I learn two cantrips of my choice from the cleric spell list. Wisdom is my spellcasting ability for these spells.",
			skills : ["Religion"],
        },
        "subclassfeature3.1" : {
            name: "Sacrifice",
            source: ["HA:G", 9],
            minlevel: 3,
            description:
                "Through the ardency of my faith, I can heal others at a cost to myself. When I use my Buck Up, I can choose another creature within 60 feet of me that I can see to regain hit points instead of me. For each Hit Die spent, roll the die and add my Wisdom modifier to it. The target regains hit points equal to the total (minimum of 1 hit point). This feature has no effect on Constructs or Undead.",
        },
        "subclassfeature6" : {
            name: "Strength of Spirit",
            source: ["HA:G", 7],
            minlevel: 6,
            description:
                "My unwavering resolve is a balm to my spirit. At the end of a long rest, I regain all spent Hit Dice, instead of up to half my total number of them.",
        },
        "subclassfeature10" : {
            name: "Cleanse",
            source: ["HA:G", 7],
            minlevel: 10,
            description:
                "Whenever I restore hit points to a creature using my Buck Up or my Sacrifice, it also ends the blinded, deafened, and poisoned conditions on the target, and cures any diseases or poisons affecting it.",
        },
        "subclassfeature17" : {
            name: "Revitalize",
            source: ["HA:G", 7],
            minlevel: 17,
            description:
                "I can target a creature that has been dead for no longer than one minute with my Sacrifice. When I do so, the target returns to life if its soul is free and willing, regaining hit points from Sacrifice normally. This ability can't restore to life a creature that has died of old age or is a Construct or an Undead, nor can it restore any missing body parts. A creature can be returned to life in this way no more than once between long rests.",
        },
    },
});
AddSubClass("gunslinger", "ha:gsrevelator", {
    regExpSearch: /^(?=.*revelator).*$/i,
    subname: "Revelator",
    source: ["HA:G", 9],
    fullname: "Revelator",
    features: {
        "subclassfeature3" : {
            name: "Path of the Righteous",
            source: ["HA:G", 9],
            minlevel: 3,
            description:
                "I arm myself with knowledge of evil and its crooked ways. I gain proficiency in one of the following skills of my choice: Arcana, History, or Religion. my proficiency bonus is doubled for any Intelligence check I make to recall information about Fiends or Undead.",
			skillstxt: "Choose one from Arcana, History, or Religion.",
        },
        "subclassfeature3.1" : {
            name: "Consecrate Arms",
            source: ["HA:G", 9],
            minlevel: 3,
            description:
                "As an action, I can touch a willing creature and utter a prayer to sanctify it. Whenever that creature hits with a weapon attack, the attack deals radiant damage instead of the weapon's normal damage type. This benefit lasts until the creature dismisses it (no action required), the creature dies, or it finishes a short or long rest. I can use this feature a number of times equal to my Wisdom modifier (minimum of once), and I regain all expended uses when I finish a long rest.",
			action : ["action", ""],
        },
        "subclassfeature3.2" : {
            name: "Baptism of Fire",
            source: ["HA:G", 9],
            minlevel: 3,
            description:
                "With holy fire I deliver judgment unto my enemies. When I hit a creature with a ranged weapon attack while benefiting from my Consecrate Arms, I can spend 1 grit point to deal 1d8 radiant damage to the target, in addition to the weapon's damage. The damage increases by 1d8 if the target is a Fiend or an Undead.",
        },
        "subclassfeature6" : {
            name: "Dead Reckoning",
            source: ["HA:G", 9],
            minlevel: 6,
            description:
                "I develop a keen instinct for the presence or influence of outsiders and undead. I am always under the effect of a detect evil and good spell, and I always know when I am in the lair of an Aberration, Celestial, Elemental, Fey, Fiend, or Undead.",
			spellcastingBonus : [{
				name : "Dead Reckoning",
				spells : ["detect evil and good"],
				selection : ["detect evil and good"],
				firstCol : "atwill",
			}],
        },
        "subclassfeature10" : {
            name: "Spirit Shackles",
            source: ["HA:G", 9],
            minlevel: 10,
            description:
                "When a creature I can see within 60 feet of me attempts to travel using teleportation or by extradimensional or interplanar means, I can spend 1 grit point as a reaction to force the creature to make a Charisma saving throw (DC equal to 8 + my proficiency bonus + my Wisdom modifier). On a failed save, the attempt at travel fails and is wasted.",
        },
        "subclassfeature17" : {
            name: "Ashes to Ashes",
            source: ["HA:G", 9],
            minlevel: 17,
            description:
                "Whenever I deal damage to a Fiend or an Undead with a weapon attack while benefiting from my Consecrate Arms, the target is destroyed if the damage reduces it to 50 hit points or fewer.",
        },
    },
});
