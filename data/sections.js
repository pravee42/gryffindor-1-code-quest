export const sections = [
  {
    "id": "start",
    "title": "The Entrance Hall",
    "content": "You stand at the entrance of Hogwarts. The Sorting Hat whispers, 'Choose wisely.'",
    "options": ["greatHall", "grandStaircase", "courtyard"]
  },
  {
    "id": "greatHall",
    "title": "Great Hall",
    "content": "The enchanted ceiling reflects the sky above. Floating candles flicker.",
    "challenge": "Solve this riddle: 'I speak without a mouth and hear without ears. What am I?'",
    "answer": "An Echo",
    "options": ["library", "gryffindorCommonRoom", "secretKitchen"]
  },
  {
    "id": "library",
    "title": "Library",
    "content": "Books hover mid-air. A whispering voice asks a question.",
    "challenge": "Decode this message written in Runes: 'Uhwuduw l wklqk ylw.' (Shift -3)",
    "answer": "Imagine a think pit",
    "spellUnlock": {
      "spell": "Lumos",
      "effect": "Illuminates a hidden rune revealing the path to the Restricted Section."
    },
    "options": ["restrictedSection", "divinationTower"]
  },
  {
    "id": "gryffindorCommonRoom",
    "title": "Gryffindor Common Room",
    "content": "The Fat Lady demands a password.",
    "challenge": "Which magical plant makes you laugh uncontrollably?",
    "answer": "Gillyweed",
    "options": ["dumbledoresOffice", "quidditchPitch"]
  },
  {
    "id": "divinationTower",
    "title": "Divination Tower",
    "content": "Professor Trelawney peers at you through thick glasses.",
    "challenge": "Predict the correct number sequence based on this pattern: 2, 3, 5, 8, ?",
    "answer": "13",
    "spellUnlock": {
      "spell": "Revelio",
      "effect": "Reveals a hidden scroll with instructions for navigating a hidden path."
    },
    "options": ["ravenclawTower", "astronomyTower"]
  },
  {
    "id": "dumbledoresOffice",
    "title": "Dumbledore's Office",
    "content": "The Pensieve swirls with memories. You glimpse a flash of Tom Riddle’s past.",
    "challenge": "Who was Tom Riddle's mother?",
    "answer": "Merope Gaunt",
    "options": ["secretPassage", "basement"]
  },
  {
    "id": "secretPassage",
    "title": "Secret Passage",
    "content": "A hidden tunnel carved through the wall leads downward. Strange symbols glow faintly.",
    "challenge": "What's the first password ever spoken to the Fat Lady?",
    "answer": "Caput Draconis",
    "spellUnlock": {
      "spell": "Alohomora",
      "effect": "Unlocks a hidden door that bypasses a trap room."
    },
    "options": ["roomOfRequirement", "potionDungeon"]
  },
  {
    "id": "roomOfRequirement",
    "title": "Room of Requirement",
    "content": "The room shifts and changes based on what you need most.",
    "challenge": "Complete this spell to unlock the door: 'Alohomora... _______'",
    "answer": "Maxima",
    "options": ["vaultOfSecrets", "mysteryDoor"]
  },
  {
    "id": "vaultOfSecrets",
    "title": "Vault of Secrets",
    "content": "Inside lies the final Horcrux, concealed among a mountain of treasure.",
    "challenge": "Which of Voldemort's Horcruxes was destroyed by Hermione in the Chamber of Secrets?",
    "answer": "Hufflepuff’s Cup",
    "spellUnlock": {
      "spell": "Incendio",
      "effect": "Burns away a cursed object, revealing the true Horcrux."
    },
    "options": ["winner", "loopOfDeception"]
  },
  {
    "id": "loopOfDeception",
    "title": "Loop of Deception",
    "content": "The room twists in circles. Each turn seems identical to the last.",
    "challenge": "I am the house where Luna Lovegood belongs. Who am I?",
    "answer": "Ravenclaw",
    "spellUnlock": {
      "spell": "Protego",
      "effect": "Shields you from a cursed loop, revealing the exit."
    },
    "options": ["loop1", "loop2"]
  },
  {
    "id": "mysteryDoor",
    "title": "Mystery Door",
    "content": "A heavy wooden door marked with an unusual emblem stands before you.",
    "challenge": "Which spell repels a Dementor?",
    "answer": "Expecto Patronum",
    "spellUnlock": {
      "spell": "Expecto Patronum",
      "effect": "Summons your Patronus, unlocking the enchanted door."
    },
    "options": ["vaultOfSecrets"]
  },
  {
    "id": "winner",
    "title": "The Prize Chamber",
    "content": "You found the secret chamber! The treasure you’ve been seeking lies before you, bathed in golden light.",
    "isWinnerSection": true,
    "options": ["start"]
  }
]
