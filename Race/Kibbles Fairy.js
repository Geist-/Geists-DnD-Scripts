/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.

	-KEEP IN MIND-
	It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/*	-INFORMATION-
	Subject:	Race
	Effect:		This script adds the race "Fairy" and its 2 subraces
				This is taken from the subreddit Unearthed Arcana (https://www.reddit.com/r/UnearthedArcana/comments/m3fmls/kibbles_revised_fairy_race_flutter_on_tiny_sized/)
				This race and its subraces were made by KibblesTasty
	Code by:	Geist
	Date:		2024-03-01 (sheet v13.1.12)

*/

var iFileName = "Kibbles Fairy.js";
RequiredSheetVersion(13);

SourceList["KTF"] = {
	name : "KibblesTasty's Revised Fairy",
	abbreviation : "KTF",
	group : "Reddit",
	url : "https://www.reddit.com/r/UnearthedArcana/comments/m3fmls/kibbles_revised_fairy_race_flutter_on_tiny_sized/",
	date : "2024/03/01"
};

RaceList["sprite"] = {
	regExpSearch : /sprite/i,
	name : "Sprite",
	source : [["KTF", 1]],
	plural : "Sprites",
	size : 5,
	speed : {
		walk : { spd : 30, enc : 20 },
		fly : { spd : "walk", enc : 0 }
	},
  languageProfs : ["Common", 1],
  toolProfs : [["Poisoner's kit"]],
	scoresGeneric : true,
	spellcastingAbility : [4, 5, 6],
	spellcastingBonus : {
		name : "Fairy Magic",
		spells : ["druidcraft"],
		selection : ["druidcraft"],
		firstCol : "atwill"
	},
	features : {
		"fairy magic" : {
			name : "Fairy Magic",
			minlevel : 1,
			spellcastingBonus : {
				name : "Fairy Magic",
				spells : ["faerie fire"],
				selection : ["faerie fire"],
				firstCol : 'oncelr',
				allowUpCasting : true
			},
			extraLimitedFeatures : [{
				name : "Faerie Fire",
				usages : 1,
				recovery: "long rest",
				altResource : "SS 1+"
			}]
		},
		"tiny creature" : {
			name : "Tiny Creature",
			minLevel : 1,
			toNotesPage : [{
				name : "Tiny Creature Rules",
				note : [
				"\n \u2022 Tiny Appetite: I require 1/lOth as much as food and water. A single ration can last me 10 days."+
				"\n \u2022 Tiny Armor: I can only wear armor for tiny creatures. Though potentially rare, it costs only 1/4 as much and weighs 1/8th as much."+
				"\n \u2022 Tiny Build: My carrying capacity is my Strength score multiplied by 5. I only use weapons for medium or small sized creatures if they have the light property. These weapons gain the two-handed property and lose the Light property for me. I can wield tiny weapons."+
				"\n \u2022 Tiny Weapons: Tiny weapons are scaled for tiny creatures. Their damage dice are reduced by one size, and their weight is 1/4 the normal weapon weight. There is no tiny equivalent weapons with the heavy property."
				]
			}]
		}
	},
	trait : "Sprite"+	
	(typePF ? "\n \u2022 Fey: My " : " (") + "creature type is fey, rather than humanoid" + (typePF ? "." : ")") +
	"\n \u2022 Flutter: I have a flying speed equal to your walking speed. This benefit works only in short bursts; I fall if I end your turn in the air and nothing else is holding me aloft."+
	"\n \u2022 Fairy Magic: I know the Druidcraft and Faerie Fire spells, and can cast the latter without using a spell slot once per long rest, as well as using slots as normal."+
	"\n \u2022 Poisoner's Tricks: You gain proficiency with Poisoner's Kit"+
	"\n \u2022 Clever Strikes: You deal additional damage with all weapons you are proficient with. The weapon dice of all weapons is increased by one size"
};

RaceList["pixie"] = {
	regExpSearch : /pixie/i,
	name : "Pixie",
	source : [["KTF", 1]],
	plural : "Pixies",
	size : 5,
	speed : {
		walk : { spd : 30, enc : 20 },
		fly : { spd : "walk", enc : 0 }
	},
  languageProfs : ["Common", 1],
	scoresGeneric : true,
	action : [["bonus action", "Whimsical Presence"]],
	spellcastingAbility : [4, 5, 6],
	spellcastingBonus : {
		name : "Fairy Magic",
		spells : ["druidcraft"],
		selection : ["druidcraft"],
		firstCol : "atwill"
	},
	features : {
		"fairy magic (level 3)" : {
			name : "Fairy Magic",
			minlevel : 1,
			spellcastingBonus : {
				name : "Fairy Magic",
				spells : ["faerie fire"],
				selection : ["faerie fire"],
				firstCol : 'oncelr',
				allowUpCasting : true
			},
			extraLimitedFeatures : [{
				name : "Faerie Fire",
				usages : 1,
				recovery: "long rest",
				altResource : "SS 1+"
			}]
		},
		"tiny creature" : {
			name : "Tiny Creature",
			minLevel : 1,
			toNotesPage : [{
				name : "Tiny Creature Rules",
				note : [
				"\n \u2022 Tiny Appetite: I require 1/lOth as much as food and water. A single ration can last me 10 days."+
				"\n \u2022 Tiny Armor: I can only wear armor for tiny creatures. Though potentially rare, it costs only 1/4 as much and weighs 1/8th as much."+
				"\n \u2022 Tiny Build: My carrying capacity is my Strength score multiplied by 5. I only use weapons for medium or small sized creatures if they have the light property. These weapons gain the two-handed property and lose the Light property for me. I can wield tiny weapons."+
				"\n \u2022 Tiny Weapons: Tiny weapons are scaled for tiny creatures. Their damage dice are reduced by one size, and their weight is 1/4 the normal weapon weight. There is no tiny equivalent weapons with the heavy property."
				]
			}]
		}
	},
	trait : "Pixie"+	
	(typePF ? "\n \u2022 Fey: My " : " (") + "creature type is fey, rather than humanoid" + (typePF ? "." : ")") +
	"\n \u2022 Flutter: I have a flying speed equal to your walking speed. This benefit works only in short bursts; I fall if I end your turn in the air and nothing else is holding me aloft."+
	"\n \u2022 Fairy Magic: I know the Druidcraft and Faerie Fire spells, and can cast the latter without using a spell slot once per long rest, as well as using slots as normal."+
	"\n \u2022 Whimsical Presence. As a bonus action, you can magically turn invisible until the start of your next turn or until you attack, make a damage rolL or force someone to make a saving throw. Once you use this trait, you can't use it again until you finish a short or long rest."+
	"\n \u2022 Pixie Dust. You can grant another creature the Flutter trait for 1 minute. Once you do this, you cannot do so again until you complete a long rest."
};
