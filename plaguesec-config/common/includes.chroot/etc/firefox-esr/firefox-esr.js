// This is the Debian specific preferences file for Firefox ESR
// You can make any change in here, it is the purpose of this file.
// You can, with this file and all files present in the
// /etc/firefox-esr directory, override any preference you can see in
// about:config.
//
// Note that pref("name", value, locked) is allowed in these
// preferences files if you don't want users to be able to override
// some preferences.

pref("extensions.update.enabled", true);

// Set Light Theme on Firefox
pref("extensions.activeThemeID", "firefox-compact-light@mozilla.org");

// Use LANG environment variable to choose locale
pref("intl.locale.requested", "");

// Disable default browser checking.
pref("browser.shell.checkDefaultBrowser", false);

// Disable openh264.
pref("media.gmp-gmpopenh264.enabled", false);

// Default to classic view for about:newtab
pref("browser.newtabpage.enhanced", false, sticky);

// Disable health report upload
pref("datareporting.healthreport.uploadEnabled", false);

// Default to no suggestions in the urlbar. This still brings a panel asking
// the user whether they want to opt-in on first use.
pref("browser.urlbar.suggest.searches", false);

// Allow Localhost Hijack for Burp Suite
pref("network.proxy.allow_hijacking_localhost", true)

// Set Default Proxy Settings
pref("network.proxy.ftp", "127.0.0.1");
pref("network.proxy.ftp_port", 8080);
pref("network.proxy.http", "127.0.0.1");
pref("network.proxy.http_port", 8080);
pref("network.proxy.share_proxy_settings", true);
pref("network.proxy.ssl", "127.0.0.1");
pref("network.proxy.ssl_port", 8080);
pref("network.proxy.type", 0);
