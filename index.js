const { Client, MessageEmbed } = require('discord.js');
//var request = require('request');
const fetch = require("node-fetch");
const client = new Client();

client.on('ready', () => {
    console.log(`Bot is ready as: ${client.user.tag}`);
});

/*request({
    url : 'https://api.estadisticasbcra.com/usd_of',
    headers : {
        'Authorization' : 'Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2Mzg2NDIwODIsInR5cGUiOiJleHRlcm5hbCIsInVzZXIiOiJtYXNzaW1vXzkwNkBob3RtYWlsLmNvbSJ9.tzgGdGd6_GwzFCbSwjX-PrQoykY-h1N8WkO6PYg8FMz1NCVicz7Gjb81u-4D9zMKE31z8YXdIxAwsjwN6CasQA'
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

fetch("https://api-dolar-argentina.herokuapp.com/api/nacion")
    .then(promesaFetch => promesaFetch.json())
    .then(contenido => {
        client.on('message', message => {
            if(message.content === '!dolar'){
                const embed = new MessageEmbed()
                    .setTitle('Cotización Euro Banco Nación')
                    .setColor('#FF5733')
                    .setAuthor('KakuBot', 'https://i.ytimg.com/vi/3llt4DA90Ds/maxresdefault.jpg')
                    .setDescription(`Fecha Cotizacion Dolar: ${contenido.fecha} | Compra: ${contenido.compra} | Venta: ${contenido.venta}`)

                message.channel.send(embed);
                //message.channel.send(`Fecha Cotizacion Dolar: ${contenido.fecha} | Compra: ${contenido.compra} | Venta: ${contenido.venta}`);
            }
        });
    });

fetch("https://api-dolar-argentina.herokuapp.com/api/euro/nacion")
    .then(promesaFetch => promesaFetch.json())
    .then(contenido => {
        client.on('message', message => {
            if(message.content === '!euro'){
                const embed = new MessageEmbed()
                    .setTitle('Cotización Euro Banco Nación')
                    .setColor('#FF5733')
                    .setAuthor('KakuBot', 'https://i.ytimg.com/vi/3llt4DA90Ds/maxresdefault.jpg')
                    .setDescription(`Fecha Cotizacion Euro: ${contenido.fecha} | Compra: ${contenido.compra} | Venta: ${contenido.venta}`)

                //message.channel.send(`Fecha Cotizacion Euro: ${contenido.fecha} | Compra: ${contenido.compra} | Venta: ${contenido.venta}`);
                message.channel.send(embed);
            }
        });
});

const token = 'Nzg0MzkxODQ0MTgzNTM5NzEy.X8on1A.6bK0IHRKtLA2LbWn3gNvErXXCqM';
client.login(token);