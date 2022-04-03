const router = require("express").Router();
const request = require('request')

const moedas = 'USD-BRL'

const options ={ 
    url: `https://economia.awesomeapi.com.br/json/daily/${moedas}/5`,
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        'Accept-Charset': 'utf-8'
    }
}

var infoCoin = []
const dollar_brl = async function(erro,res,body){
    let json = JSON.parse(body)
    infoCoin.push(json)
    console.log(json[0]['bid'])
    cotacao = json[0]['bid']
    nome = json[0]['name']
    alta = json[0]['high']
    baixa = json[0]['low']
    dia =  json[0]['create_date']
    infoCoin.push(cotacao,nome,alta,baixa,dia)
    console.log(cotacao, dia, nome, alta)
    console.log('zedo')
}

request(options, dollar_brl)

router.get("/", async (req, res) => {
	try { 
        await request(options, dollar_brl)
        res.send(infoCoin )
        infoCoin = []  
	} catch (error) {
		res.status(500).send({ message: "Internal Server Error" });
	}
});

module.exports = router;