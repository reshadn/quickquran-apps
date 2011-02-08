// ==========================================================================
// The M-Project - Mobile HTML5 Application Framework
// Generated with: Espresso 0.0.7-1
//
// Project: QuickQuranMobile
// Controller: AppController
// ==========================================================================

QuickQuranMobile.AppController = M.Controller.extend({

	surahsList: null,
		
	init: function() {
		
		M.Request.init({
			// update to full url when deploying on web
			url: 'quranIndex.json',
			isJSON: YES,
			beforeSend: function(req) {
				//...
			},
			onSuccess: function(data){
				QuickQuranMobile.AppController.set('surahsList', data);
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