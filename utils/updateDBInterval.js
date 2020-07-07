const mongoose = require('mongoose');
const Config = mongoose.model('configs');

const updateDb = require('./updateDB');

const getConfig = async () => {
    const config = await Config.find({ type: 'BTS' });
    return {
        allow: config[0].allow,
        times: config[0].times,
    };
};

module.exports = async () => {
    let allow = false;
    let interval = 5 * 60 * 1000;

    const config = await getConfig();
    allow = config.allow;
    interval = config.times;
    console.log(allow, ' ', interval);

    setInterval(async () => {
        console.log('inside interval');
        const config = await getConfig();
        allow = config.allow;
        interval = config.times;
        console.log(allow, ' ', interval);

        if (allow) {
            updateDb();
        }
    }, interval);
};
