# SPHINX JS

A browser extension for the Sphinx app

## Getting Started

1. clone the repo
1. `> cd sphinx-js`
1. `> npm i`
1. `> npm run build`
1. Open chrome web browser and create a new tab, in the url bar type `chrome://extensions/` and hit enter.
1. In the extensions window toggle "Developer mode" on in the upper right corner.
1. Click the "Load unpacked" button in the upper left corner of the window. Navigate to the `dist` directory in this project and click open or select.
1. You'll see the Sphinx extension listed in the window. The extension may need to be pinned to your chrome toolbar by clicking the extension "puzzle piece" icon on the browser bar and clicking the pin icon next to the Sphinx extension.

### Popup

You can now click the Sphinx icon in the browser and see the popup browser action. To make code changes, edit `src/App.svelte` and the extension will automatically rebuild the app with your changes. You can hit the refresh icon on the Sphinx extension listing in `chrome://extensions/` and you'll see your changes when you click into the browser action popup again.

### Content Script

A content script executes javascript on the websites that you visit. To test that it's working, after installing the extension, go to any website and open the javascript console (option + command + j). In the console you can type `window.sphinx` and hit return. You'll see that the object exists and looks like this `{ name: 'Sphinx' }`
