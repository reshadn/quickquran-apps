// ==========================================================================
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
				value: 'QuickQuran',
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