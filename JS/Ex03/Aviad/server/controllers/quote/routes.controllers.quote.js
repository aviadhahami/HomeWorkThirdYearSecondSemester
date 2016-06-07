/**
 * Created by aviad on 6/8/2016.
 */
'use strict';
const quotesStore = require('../../stores/server.stores.quotesStore'),
	randomizer = require('../../external_modules/server.external_modules.randomGenerator');
let QuotesService = {
	retrieveRandomQuote: (req,res)=> res.status(200).json({quote:quotesStore[randomizer.random(0,quotesStore.length)]})
};
module.exports = QuotesService;
