import { moduleForModel, test } from 'ember-qunit';

moduleForModel('party', 'Unit | Model | party', {
  // Specify the other units that are required for this test.
  needs: ['model:character']
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});
