
    Polymer({
      eventDelegates: {
        'animationend': 'reset',
        'webkitAnimationEnd': 'reset'
      },
      publish: {
        /**
         * Displays the spinner.
         *
         * @attribute active
         * @type boolean
         * @default false
         */
        active: {value: false, reflect: true}
      },

      activeChanged: function() {
        if (this.active) {
          this.$.spinnerContainer.classList.add('active');
        } else {
          this.$.spinnerContainer.classList.add('warmdown');
        }
      },

      reset: function() {
        this.$.spinnerContainer.classList.remove('active', 'warmdown');
      }
    });
  