const fse = require('fs-extra');
const webpack = require('webpack');

const config= require('../webpack.config');

const build = () => {
    return new Promise((resolve, reject) =>{
        console.log("Webpack config");

        const compiler= webpack(config);

        compiler.run((error, stats) => {
            if(error) return reject(error); 
            return resolve(stats);
        })
    })
}

const copyPublic= () => {
   fse.copySync("public", "dist")
}
build()
    .then(() => copyPublic())
    .then(() => console.log("Copie terminée"))
    .catch((e) => console.log(e));