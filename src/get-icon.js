const https = require('https');
const xml2js = require('xml2js');
const StringDecoder = require('string_decoder').StringDecoder;

class GetIcon {
	constructor(iconName) {
		this.options = {
			hostname: 'storage.googleapis.com',
			port: 443,
			path: `/material-icons/external-assets/v4/icons/svg/ic_${iconName}_black_24px.svg`,
			method: 'GET'
		};
		this.icon = {};
		this.decoder = new StringDecoder('utf8');
	}

	request() {
		const req = https.request(this.options, (res) => {
			// console.log('statusCode:', res.statusCode);
	 		// console.log('headers:', res.headers);

			res.on('data', (d) => {
				const xmlString = this.decoder.write(d);
				xml2js.parseString(xmlString, (err, result) => {
					if(err) throw new Error(err);
					this.icon = result;
				});
			});
		});

		req.on('error', (e) => {
			console.error(e);
		});

		req.end()
	}
}

module.exports = GetIcon;
