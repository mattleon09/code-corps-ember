import { moduleFor, test } from 'ember-qunit';
import ENV from 'code-corps-ember/config/environment';

moduleFor('service:ajax', 'Unit | Service | ajax', {
  // Specify the other units that are required for this test.
  // needs: ['service:foo']
});

test('it sets the host to the API_BASE_URL', function(assert) {
  let service = this.subject();
  assert.equal(service.get('host'), ENV.API_BASE_URL);
});
