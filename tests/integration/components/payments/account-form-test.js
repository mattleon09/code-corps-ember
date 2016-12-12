import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import PageObject from 'ember-cli-page-object';

import accountFormComponent from '../../../pages/components/payments/account-form';

const {
  K
} = Ember;

let page = PageObject.create(accountFormComponent);

function setHandler(context, submitHandler = K) {
  context.set('submitHandler', submitHandler);
}

moduleForComponent('payments/account-form', 'Integration | Component | payments/account form', {
  integration: true,
  beforeEach() {
    setHandler(this);
    page.setContext(this);
  },
  afterEach() {
    page.removeContext();
  }
});

test('it renders', function(assert) {
  page.render(hbs`{{payments/account-form accountInformationSubmitted=submitHandler}}`);
  assert.equal(this.$('.account-form').length, 1, 'Component renders');
});

// TODO: Write tests, remove 'it renders' test
//
// test('it renders correctly for individual', function(assert) {
//   assert.expect(0);

//   page.render(hbs`{{payments/account-form accountInformationSubmitted=submitHandler}}`);
// });

// test('it renders correctly for business', function(assert) {
//   assert.expect(0);

//   page.render(hbs`{{payments/account-form accountInformationSubmitted=submitHandler}}`);
// });

// test('it submits correctly for individual', function(assert) {
//   assert.expect(0);

//   page.render(hbs`{{payments/account-form accountInformationSubmitted=submitHandler}}`);
// });

// test('it submits correctly for business', function(assert) {
//   assert.expect(0);

//   page.render(hbs`{{payments/account-form accountInformationSubmitted=submitHandler}}`);
// });
