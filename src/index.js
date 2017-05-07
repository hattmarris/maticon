global.reLoadModule = () => {
	delete require.cache[require.resolve('./get-icon.js')];
	var GetIcon = require('./get-icon.js');
	getIcon = new GetIcon();
}
