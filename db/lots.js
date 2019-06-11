const name = 'lots'

let schema = {
    id: 'number',
    itemId: 'number',
    title: 'string',
    description: 'string'
}

// contenido inicial
let data = [
    {
        id: 901,
        itemId: 1005,
        title: "Car Maintance",
        description: "Engine Oil"
    },

    {
        id: 901,
        itemId: 1026,
        title: "Car Maintance",
        description: "Engine Oil"
    },

    {
        id: 908,
        itemId: 1090,
        title: "Car Spares",
        description: "Tires"
    },

    {
        id: 902,
        itemId: 1048,
        title: "Car Maintance",
        description: "Air Filter"
    },

    {
        id: 902,
        itemId: 1032,
        title: "Car Maintance",
        description: "Air Filter"
    }
]

module.exports = {
    schema,
    data,
}
