import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo, hasMany } from 'ember-data/relationships';
import ContainsCodeMixin from '../mixins/contains-code';

export default Model.extend(ContainsCodeMixin, {
  body: attr(),
  insertedAt: attr('date'),
  markdown: attr(),
  number: attr('number'),
  position: attr('number'),
  taskType: attr(),
  status: attr(),
  title: attr(),

  comments: hasMany('comment', { async: true }),
  commentUserMentions: hasMany('comment-user-mention', { asnyc: true }),
  taskList: belongsTo('task-list', { async: true }),
  taskUserMentions: hasMany('task-user-mention', { asnyc: true }),
  project: belongsTo('project', { async: true }),
  user: belongsTo('user', { async: true })
});
