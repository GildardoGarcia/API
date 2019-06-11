const name = 'users'

let schema = {
    id: 'number',
    name: 'string',
    lastName: 'string'
}

// contenido inicial
let data = [
    {
        id: 1,
        name: "Edwin",
        lastName: "Salinas"
    },{
        id: 2,
        name: "Enrique",
        lastName: "Fernandez"
    }
]

module.exports = {
    schema,
    data,
}
