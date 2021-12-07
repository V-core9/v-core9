
const v_base = require('./v_base');

const bool_cond = async (value) => {
    return typeof value === 'boolean';
};

class v9_bool extends v_base {
    constructor(value) {
        super(value, bool_cond);
    }
}

module.exports = v9_bool;