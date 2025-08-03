/**
 * setting references
 * https://arkenfox.github.io/gui/
 * https://codeberg.org/12bytes/firefox-user.js-supplement
 */ 
user_pref("_user.js.parrot", "syntax error @ README"); // troubleshooting pref - do not edit
user_pref("_user.js.parrot", "syntax error @ TESTING"); // troubleshooting pref - do not edit

/**
 * === ARKENFOX DIFFS ===
 */
user_pref("_user.js.parrot", "syntax error @ ARKENFOX DIFFS"); // troubleshooting pref - do not edit

/* override recipe: (enable) session restore ***/
user_pref("browser.startup.page", 3);                               // what to load when Firefox starts - 0=a blank page, 1=your home page, 2=the last visited page, 3=restore the previous session - note that the previous session will not be restored if 'privacy.clearOnShutdown.history' is set to 'false'
user_pref("browser.sessionstore.privacy_level", 0); // 1003 optional [to restore cookies/formdata]

user_pref("privacy.clearOnShutdown_v2.historyFormDataAndDownloads", false); // FF128-136 + migration code
user_pref("privacy.clearOnShutdown_v2.browsingHistoryAndDownloads", false); // FF136+


/** other stuff */
user_pref("signon.rememberSignons", false);
user_pref("ui.key.menuAccessKeyFocuses", false); //disable alt shortcut-key
user_pref("ui.key.menuAccessKey", 0); //no needed? to disable alt shortcut-key
user_pref("browser.bookmarks.openInTabClosesMenu", false); // open multiple bookmarks without closing menu
user_pref("browser.tabs.loadBookmarksInBackground", true); // open bookmark in background tab
user_pref("browser.download.open_pdf_attachments_inline", true);    // by default Firefox will automatically download some PDF files to disk before opening them - setting this pref to 'true' will avoid downloading the file

//enable it(true) when we use container.
user_pref("privacy.userContext.enabled", false);                    // [SET] whether to enable containers
user_pref("privacy.userContext.ui.enabled", false);                 // [SET] whether to enable user interface for containers
// when needed (when we use container)
user_pref("privacy.userContext.newTabContainerOnLeftClick.enabled", false); // [SET] whether to display the container context menu when right-clicking the new tab button

//open search result in new tab
user_pref("browser.search.openintab", true);
//open urlbar result in new tab
user_pref("browser.urlbar.openintab", true);
// disable caret browsing, when press f7
user_pref("accessibility.browsewithcaret_shortcut.enabled", false); 
user_pref("accessibility.browsewithcaret", false);
//auto fill disable
user_pref("extensions.formautofill.addresses.enabled", false); // [FF55+]
user_pref("extensions.formautofill.creditCards.enabled", false); // [FF56+]
user_pref("extensions.formautofill.heuristics.enabled", false); // [FF55+]

user_pref("browser.bookmarks.autoExportHTML", true); //automatically export bookmark.html after exiting ff. By default, exported to each profile root directory.

user_pref("browser.urlbar.maxRichResults", 20);                     // max number of results shown in the address bar drop-down menu
user_pref("browser.tabs.tabmanager.enabled", true);                     //display list all tabs button or not


//socks-proxy-settings | mullvad
//user_pref("network.proxy.socks", "jp-tyo-wg-socks5-203.relays.mullvad.net");

/**
 * -----------------------
 * USER CUSTOM PREFERENCES
 * -----------------------
 */
user_pref("_user.js.parrot", "syntax error @ USER CUSTOM PREFERENCES");

/**
 * misc. personal preferences
 */
user_pref("accessibility.tabfocus", 3);                             // which elements can be focused using the Tab key - 1=text fields, 2=all form fields except text, 4=links ony (values can be added together)
user_pref("app.update.auto", false);                                // whether to disable auto app updates (non-Windows)
user_pref("app.update.staging.enabled", false);                     // [SET] [UNBREAK=true] whether to enable Firefox update staging - *TODO* - better description

user_pref("browser.bookmarks.max_backups", 5);                      // how many backups of bookmark to keep
user_pref("browser.cache.memory.enable", true);                     // [SET] [SAFE=true] whether to enable memory cache
user_pref("browser.cache.memory.capacity", 10240);                  // [SET] memory cache size (KB) see: http://kb.mozillazine.org/Browser.cache.memory.capacity
user_pref("browser.contentblocking.report.lockwise.enabled", false);    // [SET] [SAFE=true] [*PRIV=false] whether to enable Lockwise reporting of sites visited to check if they've been breached
user_pref("browser.contentblocking.report.monitor.enabled", false);     // [SET] [UNBREAK=true] *TODO* unsure - assumed to affect reporting of blocked content
//user_pref("browser.display.use_document_fonts", 0);                 // [UNBREAK=1] [*PRIV=1] whether to allow websites to use fonts they specify - 0=no, 1=yes - setting this to '0' causes fonts to be more uniform across the web, however it can uglify some websites - this value can be quickly flipped with an add-on - WARNING: setting this to '0' may increase entropy significantly
user_pref("browser.download.autohideButton", false);                // whether to auto-hide the Downloads button
user_pref("browser.download.folderList", 2);                        // where to save downloaded files - 0=desktop 1=downloads 2=last used
user_pref("browser.download.forbid_open_with", false);              // whether to allow the `open with` option when downloading a file
user_pref("browser.link.open_newwindow.override.external", 3);      // open links from external programs in: 1=the current tab, 2=a new window, 3=a new tab
user_pref("browser.menu.showViewImageInfo", true);                  // whether to enable the context menu item to view image information
user_pref("browser.safebrowsing.allowOverride", true);              // whether to provide a means to override Safe Browsing warnings
user_pref("browser.safebrowsing.blockedURIs.enabled", false);       // [SET] [SAFE=true] whether to use Mozilla's blocklist for known Flash tracking/fingerprinting - can set to 'false' if using uBlock with appropriate lists enabled
user_pref("browser.safebrowsing.downloads.enabled", false);         // [SET] [SAFE=true] whether to enable 'Safe Browsing', downloads (list of sites provided by Google) - can set to 'false' if using uBlock with appropriate lists enabled
user_pref("browser.safebrowsing.malware.enabled", false);           // [SET] [SAFE=true] whether to enable 'Safe Browsing', malware (list of sites provided by Google) - can set to 'false' if using uBlock with appropriate lists enabled
user_pref("browser.safebrowsing.phishing.enabled", false);          // [SET] [SAFE=true] whether to enable 'Safe Browsing', phishing (list of sites provided by Google) - can set to 'false' if using uBlock with appropriate lists enabled
user_pref("browser.search.update", false);                          // [SET] whether to enable automatic updates for search engine plugins (e.g. OpenSearch)
user_pref("browser.search.widget.inNavBar", true);                  // [SET] whether to show the search bar on the navigation bar
user_pref("browser.sessionstore.cleanup.forget_closed_after", 600); // time in seconds after which Firefox 'forgets' about closed tabs
user_pref("browser.sessionstore.interval.idle", 9999999);           // [UNBREAK=(default value)] interval in seconds at which session data is stored when browser is idle (restore session after browser crash) - '9999999' essentially disables session store to reduce disk writes - previous opened tabs will still be restored on startup
user_pref("browser.sessionstore.max_tabs_undo", 4);                 // how many tabs that can be restored when restarting the browser if session restore is enabled, as well as how many closed tabs can be re-opened while browsing
user_pref("browser.tabs.allowTabDetach", false);                    // whether to enable the ability to 'detach' a tab by dragging it downward and having it open in a new window
user_pref("browser.tabs.closeWindowWithLastTab", false);            // whether to close the browser when the last tab is closed
user_pref("browser.tabs.loadDivertedInBackground", true);           // whether to keep Firefox in the background when loading a link from an external application

user_pref("browser.tabs.warnOnCloseOtherTabs", false);              // whether you want to be bugged when you close multiple tabs other than the one from which the option was invoked
//user_pref("browser.tabs.warnOnOpen", false);                        // whether to warn when too many tabs are opened
user_pref("browser.triple_click_selects_paragraph", false);         // whether to select paragraphs on triple click
user_pref("browser.urlbar.autoFill", true);                         // whether to allow auto-complete of text entered in the address bar
user_pref("browser.urlbar.formatting.enabled", false);              // whether to highlight the base domain by dimming the rest of the URL
//user_pref("browser.urlbar.quicksuggest.remoteSettings.enabled", false); // ? TODO
user_pref("browser.urlbar.quicksuggest.scenario", "offline");       // mode in which quick suggest operates
//user_pref("browser.urlbar.quicksuggest.shouldShowOnboardingDialog", false); // ? TODO
user_pref("browser.urlbar.suggest.engines", false);                 // whether to suggest search engines when focusing the address bar
user_pref("browser.urlbar.suggest.openpage", false);                // whether to suggest currently open pages when entering text in the address bar
user_pref("browser.urlbar.suggest.topsites", false);                // whether to suggest top sites when editing the address bar
user_pref("devtools.aboutdebugging.showSystemAddons", true);        // whether to show system add-ons in about:debugging
//user_pref("devtools.toolbox.zoomValue", "1.4");                     // size of content (fonts, etc.) in developer tool box
//user_pref("dom.block_download_insecure", false);                    // [SET] [*SAFE=true] [PRIV=true] whether to block downloads served over a non-secure protocol, such as HTTP
user_pref("dom.push.connection.enabled", false);                    // [UNBREAK=true] [*PRIV=false] push notifications connection
user_pref("dom.push.enabled", false);                               // [*PRIV=false] whether to enable push notifications
user_pref("dom.push.userAgentID", "");                              // user-agent ID for push services
user_pref("dom.webnotifications.enabled", false);                   // [UNBREAK=true] [*PRIV=false] whether to enable web notifications
user_pref("dom.webnotifications.serviceworker.enabled", false);     // [UNBREAK=true] [*PRIV=false] whether to enable background web notifications
user_pref("extensions.pocket.enabled", false);                      // [SET] [*PRIV=false] set to 'true' if you use the Pocket service, a "save for later" cloud service
user_pref("extensions.systemAddon.update.enabled", false);          // [SET] whether to check for updates to system add-ons - this should be disabled only if you delete all system add-ons which i personally do because Mozilla has abused user trust in the past with these add-ons
user_pref("extensions.systemAddon.update.url", "");                 // [SET] system- add-on update URL
user_pref("extensions.update.autoUpdateDefault", false);            // [SET] [*PRIV=false] whether to allow automatic installation of updated add-ons - i HIGHLY recommend setting this to 'false' and reading all change logs, privacy policies, etc., before installing add-on updates
user_pref("extensions.update.enabled", false);                      // [SET] [*SAFE=true] [UNBREAK=true] whether to enable automatic checking (not installation) for extension updates - it is fine to enable this, just don't enable automatic installation of add-on updates
user_pref("extensions.webextensions.restrictedDomains", "");        // [*UNBREAK=(default value)] [PRIV=""] a list of domains where WebExtensions (add-ons) are not allowed to run
user_pref("extensions.webextensions.userScripts.enabled", true);    // whether to enable the WebExtension API for user scripts (see: https://wiki.mozilla.org/WebExtensions/UserScripts)
user_pref("findbar.highlightAll", true);                            // whether to highlight all instances of search terms entered in the Find Bar
//user_pref("font.name.serif.x-unicode", "Bitstream Vera Sans");      // font preference
//user_pref("font.name.serif.x-western", "Bitstream Vera Sans");      // font preference
user_pref("full-screen-api.warning.delay", 0);                      // how long wait before displaying full screen warning
user_pref("full-screen-api.warning.timeout", 0);                    // how long to display a warning when a page enters full-screen mode
user_pref("identity.fxaccounts.enabled", false);                    // [SET] [UNBREAK=true] [*PRIV=false] whether to enable Firefox Accounts and Sync - if you want to sync browser data between devices, consider using an open source, self-hosted solution
//2022-07-07 need or not animation
user_pref("image.animation_mode", "once");                          // [SET] how to display animated GIF images - none=do not animate, once=play animation once, normal=play the animation normally
user_pref("layout.css.scrollbar-color.enabled", false);             // whether to allow web pages to style scroll bars
user_pref("layout.css.scrollbar-width.enabled", false);             // whether to allow web pages to style scroll bars
user_pref("layout.spellcheckDefault", 2);                           // what to spell-check - 0=disabled, 1=enable for multi-line text controls, 2=enable for single and multi-line text controls
user_pref("mathml.disabled", true);                                 // [UNBREAK=false] [*PRIV=true] mathematical markup language - suggested to disable because of security concerns
user_pref("media.autoplay.default", 5);                             // [SET] media playback - 0=allow all, 1=block non-muted, 2=prompt (removed in FF66), 5=block all (FF69+)
//user_pref("media.videocontrols.picture-in-picture.enabled", false); // [SET] whether to enable picture-in-picture functionality for video
//user_pref("media.videocontrols.picture-in-picture.video-toggle.enabled", false); // [SET] whether to enable picture-in-picture control for video
user_pref("mousewheel.with_shift.action", 0);                       // what to do when Shift key is used with the mouse wheel - 0=do nothing, 1=scroll contents, 2=go back or forward in history, 3=zoom contents in or out
user_pref("network.manage-offline-status", false);                  // whether to auto-enter work off-line mode if network drops
user_pref("network.trr.mode", 5);                                   // [SET] [UNBREAK=(default value)] whether to enable Trusted Recursive Resolver (DNS over HTTPS) - 0=standard mode, 1=let Firefox choose fastest method, 2=encrypted DNS with unencrypted fallback, 3=encrypted DNS only, 4=for testing, 5=essentially same as '0' - it is strongly suggested to encrypt DNS lookups by setting this to 2 or 3 unless you are encrypting DNS another way or using an encrypted VPN which also offers DNS - IMPORTANT! enabling this alone does not provide DNS encryption, see: https://tinyurl.com/ycp3cbbp
user_pref("nglayout.enable_drag_images", false);                    // whether to allow image dragging - also seems to have an effect on highlighting and dragging text - this feature can be very annoying
//user_pref("reader.parse-on-load.enabled", false);                   // whether to create the Reader View version of page when page is first loaded
user_pref("security.osclientcerts.autoload", true);                 // [SET] whether to use security certificates provided by the OS (Windows, Mac - Linux support is unknown at this time)
user_pref("signon.generation.enabled", false);                      // [*SAFE=true] whether to suggest and generate strong passwords
user_pref("signon.management.page.breach-alerts.enabled", false);   // [SET] [*SAFE=true] [PRIV=false] whether to display an alert when you visit a website for which log-on credentials are stored which has been previously breached
user_pref("startup.homepage_override_url", "");                     // [PRIV=""] 'What's New' page after browser update
user_pref("startup.homepage_welcome_url", "");                      // [PRIV=""] 'Welcome' URL
user_pref("startup.homepage_welcome_url.additional", "");           // [PRIV=""] 'Welcome' URL, additional
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true); // (ff 69+) whether to allow styling chrome with userChrome.css
user_pref("ui.caretWidth", 2);                                      // width of the blinking caret in edit controls
user_pref("ui.popup.disable_autohide", false);                      // (for developers) useful if you forget to disable 'Disable Popup Auto-Hide' option in Browser Toolbox
user_pref("view_source.wrap_long_lines", true);                     // whether to wrap long lines when viewing page source
user_pref("widget.disable-dark-scrollbar", true);                   // whether to disable dynamically colored scroll bars

/**
 * media preferences
 *
 * [SET] ALL OF THE PREFS IN THIS SECTION NEED TO BE CHECKED!
 */
/* disable WebRTC audio post processing (https://wiki.archlinux.org/title/Firefox/Tweaks#Disable_WebRTC_audio_post_processing) */
user_pref("media.getusermedia.aec_enabled", false);                 // microphone echo cancellation
user_pref("media.getusermedia.agc_enabled", false);                 // microphone automatic gain control
user_pref("media.getusermedia.noise_enabled", false);               // microphone noise supression
user_pref("media.getusermedia.hpf_enabled", false);                 // microphone highpass filter

/**
 * [SET] the following preferences adjusts the smooth scrolling feature of
 * Firefox when using a mouse wheel or keyboard keys to scroll
 */
user_pref("general.smoothScroll.lines.durationMaxMS", 400);         // smooth the start/end of line scrolling operations in ms (up/down arrow/page keys)
user_pref("general.smoothScroll.lines.durationMinMS", 200);         // smooth the start/end of line scrolling operations in ms (up/down arrow/page keys)
user_pref("general.smoothScroll.mouseWheel.durationMaxMS", 600);    // smooth the start/end of scrolling operations in ms
user_pref("general.smoothScroll.mouseWheel.durationMinMS", 300);    // smooth the start/end of scrolling operations in ms
user_pref("general.smoothScroll.other.durationMaxMS", 400);         // smooth the start/end of other scrolling operations in ms
user_pref("general.smoothScroll.other.durationMinMS", 200);         // smooth the start/end of other scrolling operations in ms
user_pref("general.smoothScroll.pages.durationMaxMS", 400);         // smooth the start/end of page scrolling operations in ms (PgUp/PgDn keys)
user_pref("general.smoothScroll.pages.durationMinMS", 200);         // smooth the start/end of page scrolling operations in ms (PgUp/PgDn keys)
user_pref("mousewheel.acceleration.factor", 10);                    // sets acceleration factor if mouse wheel.acceleration.start > -1
user_pref("mousewheel.acceleration.start", 0);                      // when to apply mouse wheel.acceleration.factor (after how many scroll clicks of mouse wheel) - value must be greater than -1
user_pref("mousewheel.default.delta_multiplier_x", 85);             // sets the x-axis step size
user_pref("mousewheel.default.delta_multiplier_y", 85);             // sets the y-axis step size
user_pref("mousewheel.default.delta_multiplier_z", 85);             // sets the z-axis step size
user_pref("mousewheel.min_line_scroll_amount", 10);                 // if the CSS line height is smaller than this value in pixels, each scroll click will scroll this amount


/*
 * -------------------------------------
 * YOUR CUSTOM CODE GOES ABOVE THIS LINE
 */

/**
 *  !!! IMPORTANT !!!  !!! IMPORTANT !!!  !!! IMPORTANT !!!  !!! IMPORTANT !!!
 *  ==========================================================================
 *
 * below is the "_user.js.parrot" preference you must check in about:config -
 * if the value is "SUCCESS! USER-OVERRIDES SETTINGS LOADED" then there was no syntax
 * error above this point
 */
user_pref("_user.js.parrot", "SUCCESS! USER-OVERRIDES SETTINGS LOADED"); // troubleshooting pref - do not edit
