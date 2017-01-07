const test   = require('ava')
const format = require('./lib/format')
const greetings = require('./lib/greetings')

test('select one option', t => {
   // normal case
   t.truthy(greetings.get('new'))

   // error check
   t.false(greetings.get())
   t.false(greetings.get('all'))
   t.false(greetings.get('help'))
   t.false(greetings.get('l'))
   t.false(greetings.get('hoge'))
   t.is(greetings.replace_ex('hoge'), 'Cannot parse greeting file')
})

test('select multi options', t => {
   const opts = ['new', 'last', 'summer', 'winter', 'hoge']

   // error check
   t.false(greetings.get(opts))
})

test('show option list', t => {
   const list = greetings.list()

   // error check
   t.is(list.length, 4)
   t.true(list.indexOf('new') >= 0)
   t.true(list.indexOf('summer') >= 0)
   t.true(list.indexOf('winter') >= 0)
   t.true(list.indexOf('last') >= 0)
   t.false(list.indexOf('hoge') >= 0)
})
