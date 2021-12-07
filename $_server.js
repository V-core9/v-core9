
const v9_port = require('./server/class/v9_port');
const v9_protocol = require('./server/class/v9_protocol');
const v9_bool = require('./server/class/v9_bool');


const v9 = {

    app: null,
    server: null,

    cfg: {
        static: './public',
        protocol: new v9_protocol('http'),
        port: new v9_port(3000),
        compress: new v9_bool(true),
    },

    server_start: async () => {

        //? Express server 
        var express = require('express');
        v9.app = express();


        //? Compression init part
        if (await v9.cfg.compress.get()) {
            var compression = require('compression');
            v9.app.use(compression());
        }


        //? Static files directory
        v9.app.use(express.static(v9.cfg.static));

        v9.server = v9.app.listen(await v9.cfg.port.get(), async () => {
            // Just Print that it started.
            console.log(`Started >> ${await v9.cfg.protocol.get()}://localhost:${await v9.cfg.port.get()}/  || Compression [ ${await v9.cfg.compress.get()} ]`);
        });
    },

    server_stop: async () => {
        return v9.server.close();
    },

    server_restart: async () => {
        await v9.server_stop();
        await v9.server_start();
    },

    //? Initializing the Application
    init: async () => {

        //? Start server
        await v9.server_start();
        
    }

};

process.v9 = v9;

v9.init();