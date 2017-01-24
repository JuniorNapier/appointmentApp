/*
 * Serve JSON to our AngularJS client
 */
var _ = require('underscore'),
    appointments = require('../models/appointments');

exports.name = function name(req, res) {
  res.json({
    name: 'Bob'
  });
};

exports.getappointment = function getappointment(req, res) {
  console.log("getting appointments: ", appointments);
  var results = {};

  if (req.params && req.params.id ) {
    results = appointments[req.params.id]||{id: -1};
  } else {
    results = appointments;
  }

  res.json( results );
};

exports.postappointment = function postappointment(req, res) {
  var appointment = req && req.body || {}

  if (req.params && req.params.id ) {
    appointments[req.params.id] = _.extend(appointments[req.params.id]||{}, req.body);
  }
  console.log("posting appointment: ", appointment);

  res.json(  appointments[req.params.id] );
};

exports.putappointment = function putappointment(req, res) {
  var appointment = req && req.body || {}

  if (req.params && req.params.id ) {
    appointments[req.params.id] = _.extend(appointments[req.params.id]||{}, req.body);
  }
  console.log("putting appointments: ", appointment);

  res.json(  appointments[req.params.id] );
};


exports.deleteappointment = function putappointment(req, res) {
  console.log("deleting appointments: ", req);

  if (req.params && req.params.id ) {
    appointments[req.params.id] = _.extend(appointments[req.params.id]||{}, {name: null, phone: null, available: true});
  }
};