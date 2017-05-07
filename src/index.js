global.GetIcon = {};
global.reLoadModule = () => {
	delete require.cache[require.resolve('./get-icon.js')];
	GetIcon = require('./get-icon.js');
}
reLoadModule();
