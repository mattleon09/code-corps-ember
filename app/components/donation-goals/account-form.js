import Ember from 'ember';

const {
  Component, set
} = Ember;

export default Component.extend({
  tagName: 'form',

  state: 'CA',
  country: 'United States',

  // Preset values for testing
  email: 'some@mail.com',
  recipientType: 'company',
  firstName: 'John',
  lastName: 'Doe',

  businessType: 'sole_prop',
  businessName: 'Managed LLC',
  businessEin: '1234-managed',

  dob: '06-12-1986',

  dobDay: '06',
  dobMonth: '12',
  dobYear: '1986',

  address1: 'Some street 22',
  address2: 'PO 23',
  city: 'Los Angeles',
  zip: '10000',
  ssnLast4: '1234',

  init() {
    set(this, 'recipientType', 'company');
    this._super(...arguments);
  },

  actions: {
    setBusinessType(value) {
      set(this, 'businessType', value)
    },

    setDob(value) {
      let dobDay = value.getDay() + 1;
      let dobMonth = value.getMonth() + 1;
      let dobYear = value.getFullYear();

      this.setProperties({ dobDay, dobMonth, dobYear });
    },

    setRecipientType(value) {
      set(this, 'recipientType', value);
    },

    submit() {
      let accountInformation = this.getProperties(
        'email',
        'recipientType',
        'businessType', 'businessName', 'businessEin',
        'dobDay', 'dobMonth', 'dobYear',
        'firstName', 'lastName',
        'address1', 'address2', 'city', 'state', 'zip', 'country',
        'ssnLast4'
      );

      this.sendAction('accountInformationSubmitted', accountInformation);
    }
  }
});
