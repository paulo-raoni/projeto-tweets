const request = require('request');

exports.getTweets = async (req, res) => {
	const tweets = await buscaTweets(); 

	const hashTagList = tweets.map(el => {
		return {
			hashTag: el.hashTag
		}
	});

	const valoresHashTagList = hashTagList.map(el => {
		const valorHashTag = Object.values(el);
		return valorHashTag;
	});

	const valoresHashTagUnicos = [...new Set(valoresHashTagList)];
	const tweetsAgrupados = {};
	valoresHashTagUnicos.forEach(valorHashTag => {
		tweetsAgrupados[valorHashTag] = [];
		tweets.forEach(tweet => {
			if(tweet.hashTag == valorHashTag) {
				tweetsAgrupados[valorHashTag].push({usuario: tweet.usuario, tweetPost: tweet.tweetPost, hashTag: tweet.hashTag});
			}
		});
	});

	console.info("Retornando tweetsAgrupados: ", JSON.stringify(tweetsAgrupados)); // Resultado final
	return res.status(200).send(tweetsAgrupados);
};

const buscaTweets = () => {
	return new Promise((resolve, reject) => {
        const url = "http://localhost:8082/api-tweets/";
        request({
            url: url,
            method: 'GET'
        }, function (error, response, body) {
            if (error) {
    			reject(error);
            } else {
                if (response.statusCode == 200) {
                    resolve(JSON.parse(body));
                } else {
                    reject(body);
                }
            }
        });
    })
}