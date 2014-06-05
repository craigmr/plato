
'use strict';

var History = require('./History');

module.exports = FileHistory;

function FileHistory(data) {
  History.call(this, data);
}

FileHistory.prototype = Object.create(History.prototype);


FileHistory.prototype.addReport = function(report, date, revision) {
  date = date || report.date || new Date().toUTCString();
  revision = revision || '';
  this.push({
    date : date,
    revision : revision,
    sloc : report.complexity.aggregate.complexity.sloc.physical,
    lloc : report.complexity.aggregate.complexity.sloc.logical,
    functions : report.complexity.functions.length,
    deliveredBugs : report.complexity.aggregate.complexity.halstead.bugs,
    maintainability: report.complexity.maintainability,
    lintErrors : report.jshint.messages.length,
    difficulty: report.complexity.aggregate.complexity.halstead.difficulty
  });
  return this;
};
