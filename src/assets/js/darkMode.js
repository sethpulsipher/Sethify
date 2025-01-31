/*
// Icons
const sunIcon = document.querySelector(".sun");
const moonIcon = document.querySelector(".moon");

// Theme Vars
const userTheme = localStorage.getItem("theme");
const darkSystemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

// Icon Toggling
const iconToggle = () => {
    moonIcon.classList.toggle("display-none");
    sunIcon.classList.toggle("display-none");
};

// Initial Theme Check - if user theme is dark then apply dark - else hide the sun icon
const themeCheck = () => {
    if(userTheme === "dark" || (!userTheme && darkSystemTheme)) {
        document.documentElement.classList.add("dark");
        moonIcon.classList.add("display-none");
        return;
    }
    sunIcon.classList.add("display-none");
};

// Manual Theme Switch
const themeSwitch = () => {
    if(document.documentElement.classList.contains("dark")) {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
        iconToggle();
        return;
    }
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
    iconToggle();
};

//call theme switch on clicking buttons
sunIcon.addEventListener("click", () => {
    themeSwitch();
});

moonIcon.addEventListener("click", () => {
    themeSwitch();
});

// invoke theme check on initial load
themeCheck();
*/


//
//    The Dark Mode System
//

/*
// helper functions to toggle dark mode
function enableDarkMode() {
	document.documentElement.classList.add('dark');
	localStorage.setItem('theme', 'dark');
    document.querySelector('.sun').classList.remove('hidden'); // Show sun
    document.querySelector('.moon').classList.add('hidden'); // Hide moon
}
function disableDarkMode() {
	document.documentElement.classList.remove('dark');
	localStorage.setItem('theme', 'light');
    document.querySelector('.sun').classList.add('hidden'); // Hide sun
    document.querySelector('.moon').classList.remove('hidden'); // Show moon
}

// determines a new users dark mode preferences
function detectColorScheme() {
	// default to the light theme
	let theme = 'light';

	// check localStorage for a saved 'theme' variable. if it's there, the user has visited before, so apply the necessary theme choices
	if (localStorage.getItem('theme')) {
		theme = localStorage.getItem('theme');
	}
	// if it's not there, check to see if the user has applied dark mode preferences themselves in the browser
	else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
		theme = 'dark';
	}

	// if there is no preference set, the default of light will be used. apply accordingly
	theme === 'dark' ? enableDarkMode() : disableDarkMode();
}

// run on page load
detectColorScheme();

// add event listener to the dark mode button toggle
document.getElementById('dark-mode-toggle').addEventListener('click', () => {
	// on click, check localStorage for the dark mode value, use to apply the opposite of what's saved
	localStorage.getItem('theme') === 'light' ? enableDarkMode() : disableDarkMode();
});
*/