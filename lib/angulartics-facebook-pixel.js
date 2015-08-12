(function(window, angular, undefined) {'use strict';

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

            $analyticsProvider.registerPageTrack(function (path) {
                if (window.fbq) {
                    fbq('track', 'PageView');
                }
            });

        }]);
})(window, window.angular);