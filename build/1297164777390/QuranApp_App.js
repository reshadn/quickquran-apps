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

});// ==========================================================================
// The M-Project - Mobile HTML5 Application Framework
// Generated with: Espresso 0.0.7-1
//
// Project: QuranApp
// Page: SurahIndex
// ==========================================================================

QuranApp.SurahIndex = M.ListItemView.design({
	
/* temporarily removing surahNameEng, readOnly
*/

	childViews: 'surahNum surahName audioButton readLink',
	
	//display surah number
	surahNum: M.LabelView.design({
		computedValue: {
			valuePattern: '<%= surahNum %>',
			operation: function(v) {
				return v + '&#160; - &#160;';
			}
		},
		isInline: YES
	}),
	
	//display surah name
	surahName : M.LabelView.design({
		computedValue: {
            valuePattern: '<%= surahName %>',
            operation: function(v) {
                return v + '&#160;&#160;&#160;&#160;';
            }
        },		
		isInline: YES,
		cssClass: 'surahName'
	}),

/* temporarily removed	
	//display surah english name
	surahNameEng : M.LabelView.design({
		computedValue: {
            valuePattern: '<%= surahNameEng %>',
            operation: function(v, label) {
                return '(' + v + ')&#160;&#160;';
            }
        },
		isInline: YES,
		cssClass: 'surahNameEng'
	}),
*/		

	audioButton: M.LabelView.design({
		computedValue: {
			valuePattern: '<%= audioURL %>',
			operation: function(v) {
				return '<a href="' + v + '">Click here to play audio</a>';
			}
		},
		isInline: YES
	}),

	// read text and play audio through Quran.com
	readLink: M.LabelView.design({
		computedValue: {
			valuePattern: '<%= readURL %>',
			operation: function(v) {
				return '<a href="' + v + '">Read</a>';
			}
		},
		isInline: NO
	})
	
});// ==========================================================================
// The M-Project - Mobile HTML5 Application Framework
// Generated with: Espresso 0.0.7-1
//
// Project: QuranApp 
// ==========================================================================

var QuranApp  = QuranApp || {};

QuranApp.app = M.Application.design({

	page1: M.PageView.design({
		onLoad: {
			target: QuranApp.AppController,
			action: 'init'
		},

		childViews: 'header content',     

	  	header: M.ToolbarView.design({
			childViews: 'title prayerLink',
			
			title: M.LabelView.design({
				value: 'QuickQuran Mobile',
				anchorLocation: M.CENTER,
				cssClass: 'title'
			}),
			
			
			prayerLink: M.LabelView.design({
				value: 'Prayer Times',
				hyperlinkType: M.HYPERLINK_WEBSITE,
				hyperlinkTarget: 'http://waqt.org',
				anchorLocation: M.RIGHT,
				cssClass: 'prayerTimes'
			}),
			
			anchorLocation: M.TOP
			
	  	}),

		content: M.ScrollView.design({
	      childViews: 'surahIndex',

	      	surahIndex: M.ListView.design({
			contentBinding: 'QuranApp.AppController.surahsList',
			items: '',
			listItemTemplateView: QuranApp.SurahIndex,
			removeItemsOnUpdate: NO,
			isInset: NO,
			isDividedList: YES,
			hasSearchBar: YES,
			usesDefaultSearchBehaviour: YES
	     	})
		})
	})	
});