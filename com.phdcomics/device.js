// -*- mode: js; indent-tabs-mode: nil; js-basic-offset: 4 -*-
//
// Copyright 2016 Shloka Desai <shloka@stanford.edu>
//                Giovanni Campagna <gcampagn@cs.stanford.edu>
//
// See LICENSE for details

const Tp = require('thingpedia');

module.exports = new Tp.DeviceClass({
    Name: "RSSDevice",

    _init: function(engine, state) {
         this.parent(engine, state);

	 this.url = "http://phdcomics.com/gradfeed.php";

         this.uniqueId = 'com.phdcomics';
         this.name = "PhD comics RSS Feed";
         this.description = "This is the PhD comics RSS Feed";
    },
});
