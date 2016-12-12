import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('payments/contact-info', 'Integration | Component | payments/contact info', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{payments/contact-info}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#payments/contact-info}}
      template block text
    {{/payments/contact-info}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
