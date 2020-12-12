const { Client, MessageEmbed } = require('discord.js');
//var request = require('request');
const fetch = require("node-fetch");
const express = require('express');
const PORT = process.env.PORT || 5000;
const client = new Client();

client.on('ready', () => {
    console.log(`Bot is ready as: ${client.user.tag}`);
});

/*request({
    url : 'https://api.estadisticasbcra.com/usd_of',
    headers : {
        'Authorization' : 'Bearer token'
    },
    rejectUnauthorized: false
}, function(err, res){
    if(err){
        console.log(err);
    } else{
        let bancoJSON = res.body;
        let banco = JSON.parse(bancoJSON);

        client.on('message', message => {
            if(message.content === '!dolar'){
                message.channel.send(`Fecha Cotizacion: ${banco[banco.length - 1].d} | Importe: ${banco[banco.length - 1].v}`);
            }
        });

        console.log("Mostrame la data pa: ", banco[banco.length - 1].d, banco[banco.length - 1].v);
    }
});*/

//Metodo para el Dolar Oficial
fetch("https://api-dolar-argentina.herokuapp.com/api/nacion")
    .then(promesaFetch => promesaFetch.json())
    .then(contenido => {
        client.on('message', message => {
            if(message.content === '!dolar'){
                const embed = new MessageEmbed()
                    .setTitle('Cotización Dolar Banco Nación')
                    .setColor('#FF5733')
                    .setAuthor('KakuBot', 'https://i.ytimg.com/vi/3llt4DA90Ds/maxresdefault.jpg')
                    .setDescription(`Fecha Cotizacion Dolar: ${contenido.fecha} | Compra:$ ${contenido.compra} | Venta:$ ${contenido.venta}`)

                message.channel.send(embed);
                //message.channel.send(`Fecha Cotizacion Dolar: ${contenido.fecha} | Compra: ${contenido.compra} | Venta: ${contenido.venta}`);
            }
        });
    });

//Metodo para el Euro Oficial
fetch("https://api-dolar-argentina.herokuapp.com/api/euro/nacion")
    .then(promesaFetch => promesaFetch.json())
    .then(contenido => {
        client.on('message', message => {
            if(message.content === '!euro'){
                const embed = new MessageEmbed()
                    .setTitle('Cotización Euro Banco Nación')
                    .setColor('#FF5733')
                    .setAuthor('KakuBot', 'https://i.ytimg.com/vi/3llt4DA90Ds/maxresdefault.jpg')
                    .setDescription(`Fecha Cotizacion Euro: ${contenido.fecha} | Compra:$ ${contenido.compra} | Venta:$ ${contenido.venta}`)

                //message.channel.send(`Fecha Cotizacion Euro: ${contenido.fecha} | Compra: ${contenido.compra} | Venta: ${contenido.venta}`);
                message.channel.send(embed);
            }
        });
    });

//Metodo para el Dolar Blue
fetch("https://api-dolar-argentina.herokuapp.com/api/dolarblue")
    .then(promesaFetch => promesaFetch.json())
    .then(contenido => {
        client.on('message', message => {
            if(message.content === '!dolarb'){
                const embed = new MessageEmbed()
                    .setTitle('Cotización Dolar Blue')
                    .setColor('#FF5733')
                    .setAuthor('KakuBot', 'https://i.ytimg.com/vi/3llt4DA90Ds/maxresdefault.jpg')
                    .setDescription(`Fecha Cotizacion Dolar Blue: ${contenido.fecha} | Compra:$ ${contenido.compra} | Venta:$ ${contenido.venta}`)

                //message.channel.send(`Fecha Cotizacion Euro: ${contenido.fecha} | Compra: ${contenido.compra} | Venta: ${contenido.venta}`);
                message.channel.send(embed);
            }
        });
    });

//Metodo para el Riesgo País
fetch("https://api-dolar-argentina.herokuapp.com/api/riesgopais")
    .then(promesaFetch => promesaFetch.json())
    .then(contenido => {
        client.on('message', message => {
            if(message.content === '!riesgop'){
                const embed = new MessageEmbed()
                    .setTitle('Riesgo Pais')
                    .setColor('#FF5733')
                    .setAuthor('KakuBot', 'https://i.ytimg.com/vi/3llt4DA90Ds/maxresdefault.jpg')
                    .setDescription(`Fecha Riesgo País: ${contenido.fecha} | Valor: ${contenido.valor}`)

                //message.channel.send(`Fecha Cotizacion Euro: ${contenido.fecha} | Compra: ${contenido.compra} | Venta: ${contenido.venta}`);
                message.channel.send(embed);
            }
        });
    });

//Metodo para el Real Banco Nacion
fetch("https://api-dolar-argentina.herokuapp.com/api/real/nacion")
    .then(promesaFetch => promesaFetch.json())
    .then(contenido => {
        client.on('message', message => {
            if(message.content === '!real'){
                const embed = new MessageEmbed()
                    .setTitle('Cotización Real Banco Nación')
                    .setColor('#FF5733')
                    .setAuthor('KakuBot', 'https://i.ytimg.com/vi/3llt4DA90Ds/maxresdefault.jpg')
                    .setDescription(`Fecha Cotizacion Real: ${contenido.fecha} | Compra:$ ${contenido.compra} | Venta:$ ${contenido.venta}`)

                //message.channel.send(`Fecha Cotizacion Euro: ${contenido.fecha} | Compra: ${contenido.compra} | Venta: ${contenido.venta}`);
                message.channel.send(embed);
            }
        });
    });

//Metodo para las Reservas en dolares
fetch("https://api-dolar-argentina.herokuapp.com/api/bcra/reservas")
    .then(promesaFetch => promesaFetch.json())
    .then(contenido => {
        client.on('message', message => {
            if(message.content === '!reservas'){
                const embed = new MessageEmbed()
                    .setTitle('Reservas del BCRA en dólares')
                    .setColor('#FF5733')
                    .setAuthor('KakuBot', 'https://i.ytimg.com/vi/3llt4DA90Ds/maxresdefault.jpg')
                    .setDescription(`Fecha: ${contenido.fecha} | Valor: ${contenido.valor} | Moneda: ${contenido.moneda}`)

                //message.channel.send(`Fecha Cotizacion Euro: ${contenido.fecha} | Compra: ${contenido.compra} | Venta: ${contenido.venta}`);
                message.channel.send(embed);
            }
        });
    });

//Metodo para ayuda al usuario
client.on('message', message => {
    if(message.content === '!ayuda'){
        const embed = new MessageEmbed()
            .setTitle('Ayuda al Usuario')
            .setColor('#FF5733')
            .setAuthor('KakuBot', 'https://i.ytimg.com/vi/3llt4DA90Ds/maxresdefault.jpg')
            .addField('!dolar', 'Proporciona información del Dolar Oficial.')
            .addField('!dolarb', 'Proporciona información del Dolar Blue.')
            .addField('!euro', 'Proporciona información del Euro Oficial.')
            .addField('!real', 'Proporciona información del Real Oficial.')
            .addField('!reservas', 'Proporciona información de las reservas del país en dolares.')
            .addField('!riesgop', 'Proporciona información del Riesgo País.')

        //message.channel.send(`Fecha Cotizacion Euro: ${contenido.fecha} | Compra: ${contenido.compra} | Venta: ${contenido.venta}`);
        message.channel.send(embed);
    }
});


const wakeUpDyno = (url, interval = 25, callback) => {
    const milliseconds = interval * 60000;
    setTimeout(() => {

        try { 
            console.log(`setTimeout called.`);
            // HTTP GET request to the dyno's url
            fetch(url).then(() => console.log(`Fetching ${url}.`)); 
        }
        catch (err) { // catch fetch errors
            console.log(`Error fetching ${url}: ${err.message} 
            Will try again in ${interval} minutes...`);
        }
        finally {

            try {
                callback(); // execute callback, if passed
            }
            catch (e) { // catch callback error
                callback ? console.log("Callback failed: ", e.message) : null;
            }
            finally {
                // do it all again
                return wakeUpDyno(url, interval, callback);
            }
            
        }

    }, milliseconds);
};

const DYNO_URL = "https://obscure-crag-59153.herokuapp.com/";

//Crear el servidor
const app = express();



express()
    .listen(PORT, () => {
        wakeUpDyno(DYNO_URL);
        console.log(`Listening on ${ PORT }`)
    }
);

const token = 'Tu Token del Bot de Discord';
client.login(token);