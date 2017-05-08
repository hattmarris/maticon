const https = require('https');
const xml2js = require('xml2js');

class GetIcon {
	constructor(iconName) {
		this.options = {
			hostname: 'storage.googleapis.com',
			port: 443,
			path: `/material-icons/external-assets/v4/icons/svg/ic_${iconName}_black_24px.svg`,
			method: 'GET'
		};
		this.icon = {};
	}

	request() {
		const req = https.get(this.options, (res) => {
			// console.log('statusCode:', res.statusCode);
	 		// console.log('headers:', res.headers);
			let xmlString = "";
			res.setEncoding('utf8');
			res.on('data', (d) => {
				xmlString += d;
			});
			res.on('end', () => {
				xml2js.parseString(xmlString, (err, result) => {
					if(err) throw new Error(err);
					this.icon = result;
					const path = this.parsePath(result);
					console.log(path);
				});
			});
		});

		req.on('error', (e) => {
			console.error(e);
		});

		req.end()
	}
	
	parsePath(icon) {
		const paths = icon.svg.path;
		for(let i=0; i<paths.length; i++) {
			let path = paths[i];
			if(path.$.d != 'M0 0h24v24H0z' && !path.$.hasOwnProperty('fill')) {
				return path.$.d; 
			}
		}
	}

}

module.exports = GetIcon;
