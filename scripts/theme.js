// Function to get the current preferred scheme
function getCurrentScheme() {
    // If the theme cookie is not set, use the browser/OS setting
    let scheme = localStorage.getItem('scheme');
    if (scheme === null) {
        scheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return scheme;
}

// Function to get the current color palette
function getCurrentPalette() {
    // If the palette cookie is not set, use the default palette
    let palette = localStorage.getItem('palette');
    if (palette === null) {
        palette = 'red';
    }
    return palette;
}

// Function to update the body[data-theme] attribute
function updateTheme() {
    const scheme = getCurrentScheme();
    const palette = getCurrentPalette();
    let theme = scheme + '-' + palette;

    document.body.setAttribute('data-theme', theme);
}

// Event listener for theme preference change
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', updateTheme);

// Initial update of the theme
updateTheme();