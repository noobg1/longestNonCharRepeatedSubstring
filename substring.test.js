const { getLongestNonRepeatingSubstring } = require('./substring');
const assert = require('assert')

let result = getLongestNonRepeatingSubstring('pxxkfx');
assert.equal(result, 'xkf')

result = getLongestNonRepeatingSubstring('pxxkfxabc');
assert.equal(result, 'kfxabc')

result = getLongestNonRepeatingSubstring('pxxkfxafcdeabnx');
assert.equal(result, 'fcdeabnx')

