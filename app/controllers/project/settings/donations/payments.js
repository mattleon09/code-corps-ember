import Ember from 'ember';
const {
  Controller,
  get,
  inject: { service },
  merge
} = Ember;

export default Controller.extend({
  store: service(),

  actions: {
    onAccountInformationSubmitted(organization, accountInformation) {
      let accountParams = merge(accountInformation, { organization });
      get(this, 'store').createRecord('stripe-connect-account', accountParams)
                        .save();
    }
  }
});
