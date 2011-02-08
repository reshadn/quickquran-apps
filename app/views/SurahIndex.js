// ==========================================================================
// The M-Project - Mobile HTML5 Application Framework
// Generated with: Espresso 0.0.7-1
//
// Project: QuranApp
// Page: SurahIndex
// ==========================================================================

QuranApp.SurahIndex = M.ListItemView.design({
	
/* temporarily removing surahNameEng, readOnly and audioLink
	childViews: 'surahNum surahName surahNameEng readOnly audioLink readLink',
*/

	childViews: 'surahNum surahName readLink',
	
	//display surah number
	surahNum: M.LabelView.design({
		computedValue: {
			valuePattern: '<%= surahNum %>',
			operation: function(v) {
				return '<a href="#">' + v + '</a>&#160; - &#160;';
			}
		},
		isInline: YES
	}),
	
	//display surah name
	surahName : M.LabelView.design({
		computedValue: {
            valuePattern: '<%= surahName %>',
            operation: function(v) {
                return '<a href="#">' + v + '</a>&#160;';
            }
        },		
		isInline: YES,
		cssClass: 'surahName'
	}),

/*	
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
		
	// testing read-only button, use method from controller
	// launch new view (page) with just 1 image
	readOnly: M.ButtonView.design({
		value: 'Read Only',
		target:
		action:
		isInline: YES	
	}),	
	
//temporarily removing audio "Play" link	
	audioLink: M.LabelView.design({
		computedValue: {
			valuePattern: '<%= audioURL %>',
			operation: function(v, label) {
				return '<a href="' + v + '">Play</a>';
			}
		},
		isInline: YES
	}),
*/

	// read text and play audio through Quran.com
	// set up entire listItem as link
	// add page transition
	readLink: M.LabelView.design({
		computedValue: {
			valuePattern: '<%= readURL %>',
			operation: function(v, label) {
				return '<a href="' + v + '">Read</a>';
			}
		},
		isInline: YES
	})
	
});