const Maticon = require('./maticon');

describe('Maticon module unit tests', () => {

  test('Insert new key value pair into ICONS', () => {
    // Mock maticon instance
    const maticon = new Maticon('book');
          maticon.ICONS = {"ORIGINAL": "value", "ALPHA": "check"}
          maticon.parsedPath = "A fake path string";
    
    const after = {"ALPHA": "check", "BOOK": "A fake path string", "ORIGINAL": "value"}
	  
		maticon.insertPath("BOOK");  

    expect(maticon.ICONS).toEqual(after);
  });

  test('Replace spaces with _ character in string', () => {
    const maticon = new Maticon('book');
    expect(maticon.underScore("a name with spaces")).toEqual("a_name_with_spaces");
  })
	
	test('Write instance icons to file', () => {
		const fs = require('fs');
		const maticon = new Maticon('book')
		
		maticon.ICONS = {"I_AM_A": "new icons object"}		
		CONFIG.FILE = './Icons.test.json';
		
		maticon.saveToFile();
			
		expect(require('../Icons.test.json')).toEqual(maticon.ICONS);

		fs.unlinkSync('./Icons.test.json'); // cleanup / delete test file
	})
});
