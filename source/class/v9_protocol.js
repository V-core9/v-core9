
const v_base = require('./v_base');

const protocol_cond = (value) => {
    return value === 'http' || value === 'https';
};

class v9_protocol extends v_base {
    constructor(value) {
        super(value, protocol_cond);
    }
}

module.exports = v9_protocol;
