// ==========================================================================
// The M-Project - Mobile HTML5 Application Framework
// Generated with: Espresso 0.0.7-1
//
// Project: QuickQuranMobile 
// ==========================================================================

var QuickQuranMobile  = QuickQuranMobile || {};

QuickQuranMobile.app = M.Application.design({

	page1: M.PageView.design({
		onLoad: {
			target: QuickQuranMobile.AppController,
			action: 'init'
		},

		childViews: 'header content',     

	  	header: M.ToolbarView.design({
			childViews: 'logo prayerLink',
			
			logo: M.ImageView.design({
				value: 'theme/images/logo.png',
				anchorLocation: M.CENTER,
				cssClass: 'logo'
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
			contentBinding: 'QuickQuranMobile.AppController.surahsList',
			items: '',
			listItemTemplateView: QuickQuranMobile.SurahIndex,
			removeItemsOnUpdate: NO,
			isInset: NO,
			isDividedList: YES,
			hasSearchBar: YES,
			usesDefaultSearchBehaviour: YES
	     	})
		})
	})	
});