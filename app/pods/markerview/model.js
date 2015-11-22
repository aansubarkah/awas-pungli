import DS from 'ember-data';

export default DS.Model.extend({
    category: DS.belongsTo('category', {
        async: true
    }),
    respondent: DS.belongsTo('respondent', {
        async: true
    }),
    category_id: DS.attr('number'),
    respondent_id: DS.attr('number'),
    respondent_name: DS.attr('string', {defaultValue: ''}),
    respondent_contact: DS.attr('string', {defaultValue: ''}),
    lat: DS.attr('number'),
    lng: DS.attr('number'),
    created: DS.attr('string'),
    modified: DS.attr('string'),
    info: DS.attr('string'),
    twitUserID:DS.attr('number'),
    twitID:DS.attr('number'),
    twitTime: DS.attr('string'),
    twitPlaceID: DS.attr('string'),
    twitPlaceName: DS.attr('string'),
    isTwitPlacePrecise: DS.attr('boolean', {defaultValue: 0}),
    twitImage: DS.attr('string'),
    pinned: DS.attr('boolean', {defaultValue: 0}),
    cleared: DS.attr('boolean', {defaultValue: 0}),
    active: DS.attr('boolean', {defaultValue: 1}),
    category_name: DS.attr('string', {defaultValue: ''}),
    respondent_name: DS.attr('string', {defaultValue: ''}),
    respondent_contact: DS.attr('string', {defaultValue: ''}),
    place_name: DS.attr('string', {defaultValue: ''}),
    isTwitImageExist: DS.attr('boolean', {defaultValue: 0}),
    isTwitURLExist: DS.attr('boolean', {defaultValue: 0}),
    isPlaceNameExist: DS.attr('boolean', {defaultValue: 0})
});
