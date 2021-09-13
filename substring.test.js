const { getLongestNonRepeatingSubstring } = require('./substring');
const assert = require('assert')

let result = getLongestNonRepeatingSubstring('pxxkfx');
assert.equal(result, 'xkf')

result = getLongestNonRepeatingSubstring('pxxkfxabc');
assert.equal(result, 'kfxabc')

result = getLongestNonRepeatingSubstring('pxxkfxafcdeabnx');
assert.equal(result, 'fcdeabnx')

result = getLongestNonRepeatingSubstring('qweqweqweqeqweqgyugbytrfrt');
assert.equal(result, 'ugbytrf')

result = getLongestNonRepeatingSubstring('manmannmannnmannmannmann');
assert.equal(result, 'anm')

result = getLongestNonRepeatingSubstring('trycatchfinally');
assert.equal(result, 'tchfinal')

result = getLongestNonRepeatingSubstring('qwertyqwertyuqwertyui');
assert.equal(result, 'qwertyui')
