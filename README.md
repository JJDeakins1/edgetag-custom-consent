# Cookie Consent Script

## Overview

This script checks if a cookie banner has been accepted by the user. If the consent is granted, it sets the Edge Tag consent mode to true. This functionality is essential for ensuring compliance with cookie consent regulations and enhancing user experience.

## Installation

To integrate this script into your Shopify store, follow these steps:

1. Open your Shopify admin panel.
2. Navigate to **Apps** and select the **Edge Tag** app.
3. Go to **Settings**.
4. Click on **Theme Code**.
5. Add the following code snippet to your theme:

![alt text](https://i.imgur.com/KjXZ1Q1.png)


## Functionality

- **Cookie Consent Check**: The script retrieves the cookie consent value from local storage.
- **Edge Tag Consent Mode**: If the consent is accepted, it sets the Edge Tag consent mode to true.
- **Event Listeners**: The script listens for the `edgetag-initialized` event and user interactions with the cookie banner.

## Usage

After adding the script, it will automatically check for cookie consent when the page loads. You can also manually trigger the consent check by calling `window.checkCookieConsent()` in the browser console.

## Logging

The script includes console logs to help with debugging and to confirm the flow of execution. You can view these logs in the browser's developer console.

## Notes

- Ensure that the Edge Tag app is properly installed and configured in your Shopify store.
- This script should be tested in a development environment before deploying to production.
