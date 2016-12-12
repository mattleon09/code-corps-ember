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
    onRecipientInformationSubmitted(organization, email, recipientInformation) {
      let accountParams = merge(recipientInformation, { organization, email });
      get(this, 'store').createRecord('stripe-connect-account', accountParams)
                        .save();
    },

    onBankAccountInformationSubmitted(/* bankAccountInformation */) {
      // TODO: Handle receiving bank account information
    }
  }
});
