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