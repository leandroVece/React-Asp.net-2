const roles = [
    {
        type: 'admin',
        read: true,
        write: true,
        delete: true
    },
    {
        type: 'cadete',
        read: true,
        write: false,
        delete: false
    },
    {
        type: 'cliente',
        read: true,
        write: false,
        delete: false
    }
]

export default roles;