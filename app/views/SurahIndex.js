// ==========================================================================
// The M-Project - Mobile HTML5 Application Framework
// Generated with: Espresso 0.0.7-1
//
// Project: QuickQuranMobile
// Page: SurahIndex
// ==========================================================================

QuickQuranMobile.SurahIndex = M.ListItemView.design({

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
	
});