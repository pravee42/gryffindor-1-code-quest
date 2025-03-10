// data/sections.js - Define the complete maze structure with 30 sections
export const sections = [
    {
      id: 'start',
      title: 'The Beginning',
      content: 'You stand at the entrance of the maze. Several paths lead forward into the darkness.',
      options: ['hallway', 'door', 'garden'],
      secretPath: 'basement' // Not shown in UI but accessible by URL
    },
    {
      id: 'hallway',
      title: 'Long Hallway',
      content: 'A long hallway stretches before you. The wallpaper is peeling and the floorboards creak with each step.',
      options: ['start', 'kitchen', 'stairs']
    },
    {
      id: 'door',
      title: 'The Ornate Door',
      content: 'A heavily embellished door with strange symbols carved around its frame.',
      options: ['start', 'library', 'cellar']
    },
    {
      id: 'garden',
      title: 'Overgrown Garden',
      content: 'Vines and strange plants have reclaimed this space. Something glimmers among the foliage.',
      options: ['start', 'fountain', 'shed']
    },
    {
      id: 'basement',
      title: 'The Hidden Basement',
      content: 'How did you find this place? Dusty artifacts line the shelves, and a strange mechanism sits in the center.',
      options: ['start', 'secretPassage', 'workshop']
    },
    {
      id: 'kitchen',
      title: 'Abandoned Kitchen',
      content: 'Pots and pans hang from the ceiling. The stove appears to have been recently used.',
      options: ['hallway', 'diningRoom', 'pantry']
    },
    {
      id: 'stairs',
      title: 'Winding Staircase',
      content: 'The stairs spiral upward and downward. A faint humming comes from below.',
      options: ['hallway', 'upstairs', 'downstairs']
    },
    {
      id: 'library',
      title: 'Ancient Library',
      content: 'Rows of bookshelves filled with ancient tomes. One book glows with an eerie light.',
      options: ['door', 'secretRoom', 'readingNook']
    },
    {
      id: 'cellar',
      title: 'Wine Cellar',
      content: 'Bottles of wine from centuries past line the walls. One rack seems out of place.',
      options: ['door', 'hiddenTunnel', 'storageRoom']
    },
    {
      id: 'fountain',
      title: 'Mystical Fountain',
      content: 'Water flows upward in this strange fountain. Coins of unknown origin shimmer at the bottom.',
      options: ['garden', 'reflection', 'wishinWell']
    },
    {
      id: 'shed',
      title: 'Groundskeeper\'s Shed',
      content: 'Tools hang neatly on the walls. A map of the grounds is pinned to a corkboard.',
      options: ['garden', 'toolbox', 'mapRoom']
    },
    {
      id: 'secretPassage',
      title: 'Narrow Passage',
      content: 'The walls are close enough to touch on both sides. Strange scratches mark the stone.',
      options: ['basement', 'enigmaRoom', 'hiddenChamber']
    },
    {
      id: 'workshop',
      title: 'Alchemist\'s Workshop',
      content: 'Bubbling vials and ancient equipment fill this room. Notes in an indecipherable language cover a desk.',
      options: ['basement', 'laboratoryData', 'experimentZone']
    },
    {
      id: 'diningRoom',
      title: 'Formal Dining Room',
      content: 'A long table set for a feast, but covered in dust. The chairs seem recently disturbed.',
      options: ['kitchen', 'ballroom', 'servantQuarters']
    },
    {
      id: 'pantry',
      title: 'Well-Stocked Pantry',
      content: 'Shelves of preserved foods and ingredients. A recipe book lies open on a small table.',
      options: ['kitchen', 'secretIngredient', 'recipeCollection']
    },
    {
      id: 'upstairs',
      title: 'Upper Floor',
      content: 'A long hallway with doors on both sides. A portrait at the end seems to watch you.',
      options: ['stairs', 'masterBedroom', 'gallery']
    },
    {
      id: 'downstairs',
      title: 'Lower Depths',
      content: 'The air is damp and cold. Water drips from the ceiling, and strange mushrooms grow in the corners.',
      options: ['stairs', 'cavern', 'loop1']
    },
    {
      id: 'loop1',
      title: 'Strange Room',
      content: 'This room feels familiar... The walls seem to shift when you\'re not looking directly at them.',
      options: ['loop2', 'downstairs']
    },
    {
      id: 'loop2',
      title: 'Déjà Vu',
      content: 'Haven\'t you been here before? The room is identical to the last, yet somehow different.',
      options: ['loop3', 'loop1']
    },
    {
      id: 'loop3',
      title: 'Circular Path',
      content: 'You\'re going in circles! The room spins slowly, disorienting you.',
      options: ['loop1', 'loop2', 'secret-exit'] // Hard to break out
    },
    {
      id: 'secret-exit',
      title: 'The Escape',
      content: 'You\'ve broken free from the looping rooms! A door with a bright light shines ahead.',
      options: ['crystalCave', 'ancientHall', 'winner']
    },
    {
      id: 'crystalCave',
      title: 'Crystal Cave',
      content: 'Gemstones of all colors protrude from the walls, ceiling, and floor, casting rainbow reflections.',
      options: ['secret-exit', 'mineralCollection', 'gemCutter']
    },
    {
      id: 'ancientHall',
      title: 'Hall of Ancestors',
      content: 'Statues of imposing figures line the walls. Each holds a different object of significance.',
      options: ['secret-exit', 'throneRoom', 'armory']
    },
    {
      id: 'throneRoom',
      title: 'Abandoned Throne Room',
      content: 'A massive throne sits atop a dais. The royal insignia is partially worn away.',
      options: ['ancientHall', 'treasuryChamber', 'servantEntrance']
    },
    {
      id: 'armory',
      title: 'Royal Armory',
      content: 'Weapons and armor from different eras hang on racks and walls. One display case is empty.',
      options: ['ancientHall', 'practiceYard', 'secretWeapon']
    },
    {
      id: 'treasuryChamber',
      title: 'Royal Treasury',
      content: 'Gold coins and precious artifacts fill this room. One particular chest stands out from the rest.',
      options: ['throneRoom', 'countingRoom', 'mysteriousLever']
    },
    {
      id: 'mysteriousLever',
      title: 'Hidden Mechanism',
      content: 'A single lever protrudes from the wall. The room has no other features or exits.',
      options: ['treasuryChamber', 'secretChamber', 'trapRoom']
    },
    {
      id: 'secretChamber',
      title: 'The Final Room',
      content: 'This chamber is unlike any other. Symbols on the walls seem to tell a story leading to this moment.',
      options: ['mysteriousLever', 'winner']
    },
    {
      id: 'trapRoom',
      title: 'The Deceiver',
      content: 'The room looks promising, but it\'s a trap! The floor gives way to a slide that takes you back to the beginning.',
      options: ['start']
    },
    {
      id: 'winner',
      title: 'The Prize Chamber',
      content: 'You found the secret chamber! The treasure you\'ve been seeking lies before you, bathed in golden light.',
      options: ['start'], // Back to beginning
      isWinnerSection: true
    }
  ];