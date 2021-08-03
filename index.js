var Mixpanel = require('./lib/mixpanel-node');

// import an old event
var mixpanel_importer = Mixpanel.init('xx', {
    secret: 'xx',
    debug: true,
    verbose: true
});



var batch = [
    {
        event: 'old event',
        properties: {
            time: Date.now(),
            distinct_id: 'billybob',
            gender: 'male'
        }
    },
    {
        event: 'another old event',
        properties: {
            time: Date.now(),
            distinct_id: 'billybob',
            color: 'red'
        }
    }
]

console.log(JSON.stringify(batch,null,4))
mixpanel_importer.import_batch(batch)

