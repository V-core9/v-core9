
const v9_port = require('./server/class/v9_port');
const v9_protocol = require('./server/class/v9_protocol');
const v9_bool = require('./server/class/v9_bool');


const v9 = {

    app: null,

    cfg: {
        static: './public',
        protocol: new v9_protocol('http'),
        port: new v9_port(3000),
        compress: new v9_bool(true),
    },

    //? Initializing the Application
    init: async () => {
        console.log(v9);

        //? Express server 
        var express = require('express');
        v9.app = express();


        //? Compression init part
        if (await v9.cfg.compress.get()) {
            console.log('Compression is enabled');
            var compression = require('compression');
            v9.app.use(compression());
        }


        //? Static files directory
        v9.app.use(express.static(v9.cfg.static));


        //? Start listening to port

        v9.app.listen(await v9.cfg.port.get(), async () => {
            console.log(`Started >> ${await v9.cfg.protocol.get()}://localhost:${await v9.cfg.port.get()}/`);
        });

    }

};

process.v9 = v9;

v9.init();