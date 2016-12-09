import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('donation-goals/account-form', 'Integration | Component | donation goals/account form', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{donation-goals/account-form}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#donation-goals/account-form}}
      template block text
    {{/donation-goals/account-form}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
