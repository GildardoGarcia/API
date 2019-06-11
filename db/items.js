const name = 'items'

let schema = {
    lotId: 'number',
    id: 'number',
    name: 'string',
    description: 'string'
}

// contenido inicial
let data = [
    {
        lotId: 901,
        id: 1005,
        name: "Engine Oil",
        description: "Valvoline 10W-30"
    },

    {
        lotId: 901,
        id: 1026,
        name: "Engine Oil",
        description: "Castrol 10W-30"
    },

    {
        lotId: 908,
        id: 1090,
        name: "Car Spares",
        description: "Firestone Tires 205/55R16"
    },

    {
        lotId: 902,
        id: 1048,
        name: "Air Filter",
        description: "FRAM CA11113"
    },

    {
        lotId: 902,
        id: 1032,
        name: "Air Filter",
        description: "K&N 33-2468"
    },
]

module.exports = {
    schema,
    data,
}
