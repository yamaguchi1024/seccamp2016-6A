/**
 * Listens for the app launching then creates the window
 *
 * @see http://developer.chrome.com/apps/app.runtime.html
 * @see http://developer.chrome.com/apps/app.window.html
 */
chrome.app.runtime.onLaunched.addListener(function() {
  // Center window on screen.
  var screenWidth = screen.availWidth;
  var screenHeight = screen.availHeight;
  var width = 1000;
  var height = 500;

  chrome.app.window.create('index.html', {
    id: "webview",
/*    outerBounds: {
      width: width,
      height: height,
      left:1000, 
      top: 500
    }
    */

    innerBounds: {
      width: 3000,
      height: 870
    }
  });
});
