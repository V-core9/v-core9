
const cond = async (value) => {
    return true;
};

//? Base class for vBase
class vBase {
    
    constructor(value, condition = cond) {

        this.$_val = undefined;

        //? Always returns true for root class
        this.condition = condition;

        //? Getting the value from this
        this.get = async () => {
            return this.$_val;
        };

        //? Setting the value
        this.set = async (value) => {
            if (value !== undefined) {
                if (await this.condition(value)) {
                    return (this.$_val = value);
                }
            }
            return false;
        };
        
        this.$_val = (this.condition(value) === true) ? value : undefined;
    }
}
//!<_EOF_> 

module.exports = vBase;