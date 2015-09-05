## angulartics-facebook-pixel

[![NPM version][npm-image]][npm-url] [![NPM downloads][npm-downloads-image]][npm-downloads-url] [![Bower version][bower-image]][bower-url] [![Dependencies status][dep-status-image]][dep-status-url] [![MIT license][license-image]][license-url] [![Join the Slack chat][slack-image]][slack-url]

Facebook Pixel plugin for [Angulartics](http://github.com/luisfarzati/angulartics).

## Install

First make sure you've read installation and setup instructions for [Angulartics](https://github.com/luisfarzati/angulartics#install).

Then you can install this package either with `npm` or with `bower`.

### npm

```shell
npm install angulartics-facebook-pixel
```

Then add `angulartics.facebook.pixel` as a dependency for your app:

```javascript
require('angulartics')

angular.module('myApp', [
  'angulartics', 
  require('angulartics-facebook-pixel')
]);
```

> Please note that core Angulartics doesn't export the name yet, but it will once we move it into [the new organization](http://github.com/angulartics).

### bower

```shell
bower install angulartics-facebook-pixel
```

Add the `<script>` to your `index.html`:

```html
<script src="/bower_components/angulartics-facebook-pixel/dist/angulartics-facebook-pixel.min.js"></script>
```

Then add `angulartics.facebook.pixel` as a dependency for your app:

```javascript
angular.module('myApp', [
  'angulartics', 
  'angulartics.facebook.pixel'
]);
```

## Consider using Upgraded pixel tracking code

Facebook upgraded their pixel code which supports multiple PageViews.
This is required when website uses Single Page Application.

If you want to track PageView correctly, Please consider using upgraded code (like below):

```html
    <!-- Facebook Pixel Code -->
    <script>
      !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
        n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
              document,'script','//connect.facebook.net/en_US/fbevents.js');
      fbq('init', YOUR_PIXEL_ID);
    </script>
    <noscript>
      <img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=YOUR_PIXEL_ID&ev=PageView&noscript=1">
    </noscript>
    <!-- End Facebook Pixel Code -->
```

## Changes in the Facebook Pixel snippet

The snippet code provided by Facebook Pixel does an automatic pageview hit, but this is already done by Angulartics (unless you disable it) so make sure to delete the tracking line:

```js
      ...
      fbq('init', '121732008170404');
      fbq('track', 'PageView'); // DELETE THIS LINE!
    </script>
```

Done. Open your app, browse across the different routes and check [the Custom Audience Pixel page in Ads Manager](https://www.facebook.com/ads/manager/data_sources/pixels/) to see the hits.

## Facebook Pixel Helper (Chrome Extension)

The Facebook Pixel Helper is a troubleshooting tool that helps you validate your Facebook Conversion Pixel and Custom Audience Pixels.

You can use this helper to validate that PageView was sent to facebook correctly.

[See details on Facebook Official Documentation](https://developers.facebook.com/docs/ads-for-websites/pixel-troubleshooting), or [Download directly on Chrome Webstore](https://chrome.google.com/webstore/detail/fb-pixel-helper/fdgfkebogiimcoedlicjlajpkdmockpc)

## Documentation

Documentation is available on the [Angulartics site](http://luisfarzati.github.io/angulartics).

## Development

```shell
npm run build
```

## License

[MIT](LICENSE)

[npm-image]: https://img.shields.io/npm/v/angulartics-facebook-pixel.svg
[npm-url]: https://npmjs.org/package/angulartics-facebook-pixel
[npm-downloads-image]: https://img.shields.io/npm/dm/angulartics-facebook-pixel.svg
[npm-downloads-url]: https://npmjs.org/package/angulartics-facebook-pixel
[bower-image]: https://img.shields.io/bower/v/angulartics-facebook-pixel.svg
[bower-url]: http://bower.io/search/?q=angulartics-facebook-pixel
[dep-status-image]: https://img.shields.io/david/mooyoul/angulartics-facebook-pixel.svg
[dep-status-url]: https://david-dm.org/mooyoul/angulartics-facebook-pixel
[license-image]: http://img.shields.io/badge/license-MIT-blue.svg
[license-url]: LICENSE
[slack-image]: https://angulartics.herokuapp.com/badge.svg
[slack-url]: https://angulartics.herokuapp.com