const name = 'items'

let schema = {
    id: 'number',
    name: 'string',
    description: 'string',
    lotId: 'number',
}

// contenido inicial
let data = [
    {
        id: 1,
        name: "Engine Oil",
        description: "Valvoline 10W-30",
        lotId: 100,
    },

    {
        id: 2,
        name: "Engine Oil",
        description: "Castrol 10W-30",
        lotId: 100,
    },

    {
        id: 3,
        name: "Oil Filter",
        description: "FRAM PH-7248",
        lotId: 103,
    },

    {
        id: 4,
        name: "Air Filter",
        description: "FRAM CA11113",
        lotId: 101,
    },

    {
        id: 5,
        name: "Air Filter",
        description: "K&N 33-2468",
        lotId: 101
    },

    {
        id: 6,
        name: "Beam Electronics",
        description: "Universal Smartphone Car Air Vent Mount Holder",
        lotId: 101
    },

    {
        id: 7,
        name: "Car Spares",
        description: "Firestone Tires 205/55R16",
        lotId: 300
    }
]

module.exports = {
    schema,
    data,
}
