
module.exports = {
    identity: 'book',
    connection: 'default',
    attributes: {
        date: {
            type: 'datetime',
            defaultsTo: function () { return new Date(); },
            required: true,
        },
        status: {
            type: 'string',
            enum: ['new', 'assigned', 'ready', 'rejected', 'pending'],
            required: true,
        },
        writer: {
            type: 'string',
            required: true,
        },
        booktitle: {
            type: 'string',
            required: true,
        },
        other:{
            type: 'string',
            required: true,
        },
        user: {
            model: 'user',
        },
        
    }
}