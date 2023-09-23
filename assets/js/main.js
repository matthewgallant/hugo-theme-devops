/**
 * Main navigation handler for mobile
 */
class Navigation {

	/**
	 * Finds the required elements and sets up the button event listener.
	 */
	constructor() {
		this.btn = document.querySelector('.menu-btn');
		this.nav = document.querySelector('nav');
		this.btn.addEventListener('click', this.toggle.bind(this));
	}

	/**
	 * Toggles the navigation when the button event listener fires.
	 */
	toggle() {
		this.nav.classList.toggle('active');
	}
}

/**
 * Initializes the theme's Javascript
 */
const init = () => {
	new Navigation();
}

// Run the theme JS when the page is done loading
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
