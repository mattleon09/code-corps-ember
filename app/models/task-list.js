import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  name: attr('string'),
  position: attr('number'),

  project: belongsTo('project', { async: true }),
  tasks: hasMany('task', { async: true })
});
