
var memoryAdapter = require('sails-memory');
var diskAdapter = require('sails-disk');
var postgresqlAdapter = require('sails-postgresql');

// konfiguráció
var config = {
    adapters: {
        memory:     memoryAdapter,
        disk:       diskAdapter,
        postgresql: postgresqlAdapter
    },
    connections: {
        default: {
            adapter: 'disk',
        },
        memory: {
            adapter: 'memory'
        },
        disk: {
            adapter: 'disk'
        },
        postgresql: {
            adapter: 'postgresql',
            database: 'tickets',
            host: 'localhost',
            user: 'ubuntu',
            password: 'ubuntu',
            url: process.env.DATABASE_URL,
            pool: false,
            ssl      : true,
        }
    },
    defaults: {
        //migrate: 'alter'
        migrate: 'safe'
    },
};

module.exports = config;
