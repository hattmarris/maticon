const Maticon = require('./maticon');

describe('Maticon module unit tests', () => {

  test('Insert new key value pair into ICONS', () => {
    // Mock maticon instance
    const maticon = new Maticon('book');
          maticon.ICONS = {"ORIGINAL": "value", "ALPHA": "check"}
          maticon.parsedPath = "A fake path string";
    
    const after = {"ALPHA": "check", "ORIGINAL": "value", "THIRD": "A fake path string"}
	  
    expect(maticon.insertPath("THIRD")).toEqual(after);
  });

  test('Replace spaces with _ character in string', () => {
    const maticon = new Maticon('book');
    expect(maticon.underScore("a name with spaces")).toEqual("a_name_with_spaces");
  })
});
