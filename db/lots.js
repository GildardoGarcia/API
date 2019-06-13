const name = 'lots'

let schema = {
    id: 'number',
    lotNumber: 'number',
    title: 'string',
    description: 'string',
    location: 'string'
}

// contenido inicial
let data = [
    {
        id: 1,
        lotNumber: 100,
        title: "Car Maintance",
        description: "Engine Oil",
        location: "Zone A-6"
    },

    {
        id: 2,
        lotNumber: 101,
        title: "Car Maintance",
        description: "Air Filter",
        location: "Zone A-2"
    },

    {
        id: 3,
        lotNumber: 103,
        title: "Car Maintance",
        description: "Oil Filter",
        location: "Zone A-1"
    },

    {
        id: 4,
        lotNumber: 200,
        title: "Car Accesories",
        description: "Cellphone",
        location: "Zone B-1"
    },

    {
        id: 5,
        lotNumber: 300,
        title: "Car Spares",
        Description: "Tires",
        location: "Zone F-3"
    },

    {
        id: 6,
        lotNumber: 301,
        title: "Car Spares",
        Description: "Radiator Hoses",
        location: "Zone C-9"
    }
]

module.exports = {
    schema,
    data,
}
