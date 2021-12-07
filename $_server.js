
const v9_port = require('./source/class/v9_port');
const v9_protocol = require('./source/class/v9_protocol');
const v9_bool = require('./source/class/v9_bool');


const v9 = {

    app: null,

    cfg: {
        static: './public',
        protocol: new v9_protocol('http'),
        port: new v9_port("asdb"),
        compress: new v9_bool(true),
    },

    //? Initializing the Application
    init: async () => {

        //? Express server 
        var express = require('express');
        v9.app = express();


        //? Compression init part
        if (v9.cfg.compress.get()) {
            var compression = require('compression');
            v9.app.use(compression());
        }


        //? Static files directory
        v9.app.use(express.static(v9.cfg.static));


        //? Start listening to port
        if (await v9.cfg.port.get() === undefined) {
            console.log("ERROR: Application start failed. \nDETECTED: [v9.cfg.port] value not ok. \nHINTS: \n-> Port may not be defined. \n-> Bad value for port set.\n-> Port number maybe got reset/unset.");
            return false;
        }
        v9.app.listen(await v9.cfg.port.get(), async () => {
            console.log(`Started >> ${await v9.cfg.protocol.get()}://localhost:${await v9.cfg.port.get()}/`);
        });

    }

};

process.v9 = v9;

v9.init();