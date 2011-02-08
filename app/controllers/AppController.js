// ==========================================================================
// The M-Project - Mobile HTML5 Application Framework
// Generated with: Espresso 0.0.7-1
//
// Project: QuranApp
// Controller: AppController
// ==========================================================================

QuranApp.AppController = M.Controller.extend({

	surahsList: null,
		
	init: function() {
		
		M.Request.init({
			url: 'quranIndex.json',
			isJSON: YES,
			beforeSend: function(req) {
				//...
			},
			onSuccess: function(data){
				QuranApp.AppController.set('surahsList', data);
			},
			onError: function(request, message){
				console.log(message);
			}
		}).send()
	},
	
	searchStringDidChange: function(searchString){
		console.log(searchString);
	}

});