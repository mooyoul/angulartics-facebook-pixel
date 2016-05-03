(function(window, angular, undefined) {
    'use strict';

    /**
     * @ngdoc overview
     * @name angulartics.facebook.pixel
     * Enables analytics support for Facebook Pixel (https://www.facebook.com/business/a/online-sales/custom-audiences-website)
     */
    angular.module('angulartics.facebook.pixel', ['angulartics'])
        .config(['$analyticsProvider', function ($analyticsProvider) {

            // Pixel already supports buffered invocations so we don't need
            // to wrap these inside angulartics.waitForVendorApi

            $analyticsProvider.settings.pageTracking.trackRelativePath = true;


            // Pixel dosen't provide setting user information into analytics session.
            // So, we doesn't need to set default settings.

            // Pixel has built-in `pushState`, `replaceState`, `popstate` handlers which sending Pageviews
            // and supports hash based routes (hashbang locations) since Apr 04, 2016.
            // we don't need to register pageview handlers by using `$analyticsProvider.registerPageTrack` API anymore.
            // @todo Remove `$analyticsProvider.registerPageTrack` API
            $analyticsProvider.registerPageTrack(function (path) {
                if (window.fbq) {
                    fbq('track', 'PageView');
                }
            });

            $analyticsProvider.registerEventTrack(function (action, properties) {
                properties = properties || {};
                var eventList = [
                            'ViewContent', 'Search', 'AddToCart',
                            'AddToWishlist', 'InitiateCheckout',
                            'AddPaymentInfo', 'Purchase', 'Lead',
                            'CompleteRegistration'];
                if (window.fbq) {
                    eventList.indexOf(action) === -1 ?
                       fbq('trackCustom', action, properties) :
                       fbq('track', action, properties);
                }
            });

        }]);
})(window, window.angular);