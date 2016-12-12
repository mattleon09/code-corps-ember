import Ember from 'ember';
const {
  Controller,
  get,
  inject: { service },
  merge,
  set
} = Ember;

const PROBLEM_SAVING_DONATION_GOAL = 'There was a problem saving your donation goal. Please try again.';

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
