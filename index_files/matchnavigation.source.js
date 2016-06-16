/* exclude for JSLint parsing */
/*jslint unparam: true, nomen: true, vars: true, white: true, todo: true, plusplus: true */
/*global window, jQuery */

(function ($, win, undefined) {
  'use strict';

  //shortcut
  var d3 = win.Deltatre;
  var p3 = d3.plugins;
  var trace = d3.Trace;
  //var core = d3.core.getInstance();

  // Default configuration properties.
  var defaults = {
    version: 1,
    handlersDelay: 100
  };

  /*
	* The match navigation object.
  * This plugin handles the behavior of the navigation in a match page.
	*/
  p3.matchnavigation = function (e, o) {
    /* ------------------------- */
    /* Variables */
    var _this = this;
    var _opt = $.extend(true, {}, defaults, o || {});  //options
    var $dom = e; //the jquery element we are working with
    var $de = {}; //dom elements
    var $win = $(win);


    /* ------------------------- */
    /* Declaring private functions */
    var _throttle, _toggleFullMenu, _manageCustomProps, _handleGeoVisibility;

    /* ------------------------- */
    //Public Functions
    this.init = function () {
      // Cache dom elements    	
      $de.wrapper = $dom.find('.js-nav-wrap');
      $de.toggle = $de.wrapper.find('.js-toggle');
      $de.menu = $de.wrapper.find('.js-nav');

      // Init event handlers
      $de.toggle.on('click', function (e) {
        e.preventDefault();

        $de.wrapper.toggleClass('open');
      });
      $win.on('load.matchmenu resize.matchmenu', _throttle(_toggleFullMenu, _opt.handlersDelay));

      _manageCustomProps();

    };

    /* ------------------------- */
    //Private Functions
    _throttle = function (fn, threshhold) {
      threshhold = threshhold || _opt.handlersDelay;
      var last,
        deferTimer;
      return function () {
        var context = this;

        var now = +new Date(),
          args = arguments;
        if (last && now < last + threshhold) {
          // hold on to it
          clearTimeout(deferTimer);
          deferTimer = setTimeout(function () {
            last = now;
            fn.apply(context, args);
          }, threshhold);
        } else {
          last = now;
          fn.apply(context, args);
        }
      };
    };

    _toggleFullMenu = function () {
      // Define if the button that toggles the full menu should be visible
      var _menuW = 0;
      $de.menu.find('li').each(function () {
        _menuW += $(this).outerWidth();
      });
      var _containerW = $de.menu.width();

      $de.toggle.toggleClass('hidden', (_menuW <= _containerW));
    };

    _manageCustomProps = function () {
      var checkUserGeo = false;
      $de.menu.find('li.with-custom-props').each(function () {
        var _this = this, _customProps = this.getAttribute('data-custom-props'), _customPropsObj = {};
        try {
          _customPropsObj = eval('(' + _customProps + ')');
        }
        catch (e) { }
        if (_customPropsObj.hasOwnProperty('country-visibility')) {
          checkUserGeo = true;
          var countries = _customPropsObj['country-visibility'].split('|'), i = 0, l = countries.length, class_buf = [];
          for (i; i < l; i++) {
            class_buf.push(' geo-enabled-', countries[i]);
          }
          _this.className += class_buf.join('');
        }
      });
      if (checkUserGeo) {
        _handleGeoVisibility();
      }
    };

    _handleGeoVisibility = function () {
      $.ajax({
        type: 'get',
        cache: true,
        url: '/esicontent/esi-geo.html',
        success: function (data) {
          if (!data) { return; }
          data = JSON.parse(data);
          $de.menu.find('li.geo-enabled-' + data.countryCode).removeClass('hidden');
        }
      });
    };
  };
}(jQuery, window));