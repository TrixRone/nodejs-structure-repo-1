var app = require('app/test-app')
var test = require('tape')

test('app/site/router', function (assert) {
  app.get('/favicon.ico')
    .expect(200)
    .expect('Content-Type', /^image/)
    .end(assert.end)
})

test('app/site/router', function (assert) {
  app.get('/')
    .expect(200)
    .expect('Content-Type', 'text/html; charset=utf-8')
    .end(assert.end)
})

test('app/site/router should serve the team page', function (assert) {
  app.get('/team')
    .expect(200)
    .expect('Content-Type', 'text/html; charset=utf-8')
    .end(assert.end)
})
