const v_base = require('./v_base');


const port_cond = (value) => {
    return typeof value === 'number' && value >= 0 && value <= 65535;
};


class v9_port extends v_base {
    constructor(value) {
        super(value, port_cond);
    }
}

module.exports = v9_port;