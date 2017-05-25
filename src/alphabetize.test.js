const alph = require('./alphabetize');

const json = {
	"Butnot": 1,
	"Alphabetical": 2,
	"Currently": 3
}

const json = {
	"Alphabetical": 2,
	"Butnot": 1,
	"Currently": 3
}

test('Sorts unalphabetized json keys into alphabetized order by first letter', () => {
	expect(alph.order(json)).toEqual(ordredJson)
})
