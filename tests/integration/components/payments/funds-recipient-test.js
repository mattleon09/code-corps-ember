import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('payments/funds-recipient', 'Integration | Component | payments/funds recipient', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{payments/funds-recipient}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#payments/funds-recipient}}
      template block text
    {{/payments/funds-recipient}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
