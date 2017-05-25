global.MatIcon = {};
global.reLoadModule = () => {
	delete require.cache[require.resolve('./maticon.js')];
	MatIcon = require('./maticon.js');
}
reLoadModule();
