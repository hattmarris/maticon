const https = require('https');

class GetIcon {
	constructor() {
		this.options = {
			hostname: 'storage.googleapis.com',
			port: 443,
			path: '/material-icons/external-assets/v4/icons/svg/ic_accessibility_black_24px.svg',
			method: 'GET'
		};
		this.icon = {};
	}
	
	request() {
		const req = https.request(this.options, (res) => {
			// console.log('statusCode:', res.statusCode);
	 		// console.log('headers:', res.headers);

			res.on('data', (d) => {
				this.parseXml(d);
			});
		});

		req.on('error', (e) => {
			console.error(e);
		});

		req.end()
	}

	parseXml(d) {
		console.log(typeof d);
		this.icon = d;
		process.stdout.write(d);
	};
}

module.exports = GetIcon;
