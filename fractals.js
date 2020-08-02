// This is used to provide better information for the "Daily Recommended" fractals.
// We only need the first 50 because the Daily Recommended fractals don't go above
// level 50.
var fractalNames = {
    "en": {
        1: "Volcanic",
        2: "Uncategorized",
        3: "Snowblind",
        4: "Urban Battleground",
        5: "Swampland",
        6: "Cliffside",
        7: "Aquatic Ruins",
        8: "Underground Facility",
        9: "Molten Furnace",
        10: "Molten Boss",
        11: "Deepstone",
        12: "Siren's Reef",
        13: "Chaos Isles",
        14: "Aetherblade",
        15: "Thaumanova Reactor",
        16: "Twilight Oasis",
        17: "Underground Facility",
        18: "Captain Mai Trin Boss",
        19: "Volcanic",
        20: "Solid Ocean",
        21: "Swampland",
        22: "Cliffside",
        23: "Molten Furnace",
        24: "Nightmare",
        25: "Shattered Observatory",
        26: "Aquatic Ruins",
        27: "Snowblind",
        28: "Volcanic",
        29: "Underground Facility",
        30: "Chaos Isles",
        31: "Urban Battleground",
        32: "Swampland",
        33: "Deepstone",
        34: "Thaumanova Reactor",
        35: "Solid Ocean",
        36: "Uncategorized",
        37: "Siren's Reef",
        38: "Chaos Isles",
        39: "Molten Furnace",
        40: "Molten Boss",
        41: "Twilight Oasis",
        42: "Captain Mai Trin Boss",
        43: "Underground Facility",
        44: "Uncategorized",
        45: "Solid Ocean",
        46: "Aetherblade",
        47: "Cliffside",
        48: "Thaumanova Reactor",
        49: "Nightmare",
        50: "Shattered Observatory",
        51: "Snowblind",
        52: "Volcanic",
        53: "Underground Facility",
        54: "Siren's Reef",
        55: "Thaumanova Reactor",
        56: "Swampland",
        57: "Urban Battleground",
        58: "Molten Furnace",
        59: "Twilight Oasis",
        60: "Solid Ocean",
        61: "Aquatic Ruins",
        62: "Uncategorized",
        63: "Chaos Isles",
        64: "Thaumanova Reactor",
        65: "Aetherblade",
        66: "Urban Battleground",
        67: "Deepstone",
        68: "Snowblind",
        69: "Cliffside",
        70: "Molten Boss",
        71: "Aetherblade",
        72: "Volcanic",
        73: "Captain Mai Trin Boss",
        74: "Nightmare",
        75: "Shattered Observatory",
        76: "Aquatic Ruins",
        77: "Swampland",
        78: "Siren's Reef",
        79: "Uncategorized",
        80: "Solid Ocean",
        81: "Underground Facility",
        82: "Cliffside",
        83: "Molten Furnace",
        84: "Deepstone",
        85: "Urban Battleground",
        86: "Snowblind",
        87: "Twilight Oasis",
        88: "Chaos Isles",
        89: "Swampland",
        90: "Molten Boss",
        91: "Uncategorized",
        92: "Volcanic",
        93: "Snowblind",
        94: "Cliffside",
        95: "Captain Mai Trin Boss",
        96: "Aetherblade",
        97: "Thaumanova Reactor",
        98: "Chaos Isles",
        99: "Nightmare",
        100: "Shattered Observatory"
    },
    "es": {
        1: "Fractal volcánico",
        2: "Fractal sin clasificar",
        3: "Fractal de la ceguera de la nieve",
        4: "Fractal del campo de batalla urbano",
        5: "Fractal del cenagal",
        6: "Fractal del despeñadero",
        7: "Fractal de las Ruinas Acuáticas",
        8: "Fractal de la instalación subterránea",
        9: "Fractal de la fragua fundida",
        10: "Fractal de los jefes fundidos",
        11: "Fractal de Rocahonda",
        12: "Fractal del Arrecife de la Sirena",
        13: "Fractal del Caos",
        14: "Fractal de los filoetéreos",
        15: "Fractal del reactor taumanova",
        16: "Fractal del Oasis del Crepúsculo",
        17: "Fractal de la instalación subterránea",
        18: "Fractal de la jefa Capitana Mai Trin",
        19: "Fractal volcánico",
        20: "Fractal del océano sólido",
        21: "Fractal del cenagal",
        22: "Fractal del despeñadero",
        23: "Fractal de la fragua fundida",
        24: "Fractal de la Pesadilla",
        25: "Fractal del Observatorio Asolado",
        26: "Fractal de las ruinas acuáticas",
        27: "Fractal de la ceguera de la nieve",
        28: "Fractal volcánico",
        29: "Fractal de la instalación subterránea",
        30: "Fractal del Caos",
        31: "Fractal del campo de batalla urbano",
        32: "Fractal del cenagal",
        33: "Fractal de Rocahonda",
        34: "Fractal del reactor taumanova",
        35: "Fractal del océano sólido",
        36: "Fractal sin clasificar",
        37: "Fractal del Arrecife de la Sirena",
        38: "Fractal del Caos",
        39: "Fractal de la fragua fundida",
        40: "Fractal de los jefes fundidos",
        41: "Fractal del Oasis del Crepúsculo",
        42: "Fractal de la jefa Capitana Mai Trin",
        43: "Fractal de la instalación subterránea",
        44: "Fractal sin clasificar",
        45: "Fractal del océano sólido",
        46: "Fractal de los filoetéreos",
        47: "Fractal del despeñadero",
        48: "Fractal del reactor taumanova",
        49: "Fractal de la Pesadilla",
        50: "Fractal del Observatorio Asolado",
        51: "Fractal de la ceguera de la nieve",
        52: "Fractal volcánico",
        53: "Fractal de la instalación subterránea",
        54: "Fractal del Arrecife de la Sirena",
        55: "Fractal del reactor taumanova",
        56: "Fractal del cenagal",
        57: "Fractal del campo de batalla urbano",
        58: "Fractal de la fragua fundida",
        59: "Fractal del Oasis del Crepúsculo",
        60: "Fractal del océano sólido",
        61: "Fractal de las ruinas acuáticas",
        62: "Fractal sin clasificar",
        63: "Fractal del Caos",
        64: "Fractal del reactor taumanova",
        65: "Fractal de los filoetéreos",
        66: "Fractal del campo de batalla urbano",
        67: "Fractal de Rocahonda",
        68: "Fractal de la ceguera de la nieve",
        69: "Fractal del despeñadero",
        70: "Fractal de los jefes fundidos",
        71: "Fractal de los filoetéreos",
        72: "Fractal volcánico",
        73: "Fractal de la jefa Capitana Mai Trin",
        74: "Fractal de la Pesadilla",
        75: "Fractal del Observatorio Asolado",
        76: "Fractal de las Ruinas Acuáticas",
        77: "Fractal del cenagal",
        78: "Fractal del Arrecife de la Sirena",
        79: "Fractal sin clasificar",
        80: "Fractal del océano sólido",
        81: "Fractal de la instalación subterránea",
        82: "Fractal del despeñadero",
        83: "Fractal de la fragua fundida",
        84: "Fractal de Rocahonda",
        85: "Fractal del campo de batalla urbano",
        86: "Fractal de la ceguera de la nieve",
        87: "Fractal del Oasis del Crepúsculo",
        88: "Fractal del Caos",
        89: "Fractal del cenagal",
        90: "Fractal de los jefes fundidos",
        91: "Fractal sin clasificar",
        92: "Fractal volcánico",
        93: "Fractal de la ceguera de la nieve",
        94: "Fractal del despeñadero",
        95: "Fractal de la jefa Capitana Mai Trin",
        96: "Fractal de los filoetéreos",
        97: "Fractal del reactor taumanova",
        98: "Fractal del Caos",
        99: "Fractal de la Pesadilla",
        100: "Fractal del Observatorio Asolado"
    }
}