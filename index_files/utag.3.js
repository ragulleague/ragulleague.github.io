//disabled clickzone by changing scriptOnClickZone from 2 to null
window.xtnv = document; //parent.document or top.document or document 
window.xtsite = window.xtsite || "534845"; //site number 
//window.xtn2 = ""; //level 2 site
window.xtn2 = utag.data.site_id_2; //level 2 site 
window.xtpage = ""; //page name (with the use of :: to create chapters) 
window.xtdi = ""; //implication degree 
window.xt_multc = ""; //customised indicators 
window.xt_an = ""; //numeric identifier (visitor id) 
window.xt_ac = ""; //visitor category 
window.xttp = ""; // set to "cart" on cart page
window.xt_ordermc = "";
window.xt_orderid = "";
window.xtergo = window.xtergo === "" ? window.xtergo : 0; //disable ATI clickzone (auto link tracking)
window.xtsd = (document.location.protocol.indexOf("https")>-1)?"https://logs1405":"http://logc405";
// VENDOR INITIALIZATION CODE START ////////////////////////////////////////////
var xt1 = '.' + utag.cfg.domain,
  xtLogDom = '.xiti.com/hit.xiti',
  xtpreview = false,
  xtfirst = true,
  xtcode = '',
  xt46 = '1',
  xt50 = '1',
  xt48 = '',
  xt54 = false,
  xt58 = false,
  xtdocl = false,
  xtud = 'undefined',
  xt2 = '1',
  xt3 = 365,
  xttredir = 500,
  xtkwv = 'xtmc',
  xtkwp = 'xtnp',
  xtadch = new Array,
  xt4 = new Array;
xt4['sec'] = '20';
xt4['rss'] = '20';
xt4['epr'] = '20';
xt4['erec'] = '20';
xt4['adi'] = '20';
xt4['adc'] = '20';
xt4['al'] = '20';
xt4['es'] = '20';
xt4['ad'] = '20';
//do not modify below
var xtoid = new Array,
  xtnop = true,
  xtkey = false,
  xt49 = null,
  xt5 = 30,
  xw = window,
  xd = document,
  xtg = navigator,
  xtv = (xw.xtczv != null) ? '43007-' + xw.xtczv : '43007',
  xt1 = xw.xtdmc ? ';domain=' + xw.xtdmc : (xt1 != '') ? ';domain=' + xw.xt1 : '',
  xt6 = (xw.xtnv != null) ? xw.xtnv : xd,
  xt7 = (xw.xtsdi != null) ? xw.xtsdi : (xw.xtsd != null) ? xw.xtsd + xtLogDom : (((xd.location.protocol == 'https:') ? 'https://logs1405' : 'http://logc405') + xtLogDom),
  xt36 = (xw.xtsts != null) ? xw.xtsts : 0,
  xt37 = '';
if (xt54) {
  var xturl = '';
  try {
    xturl = xt6.location.href;
  } catch (e) {
    xturl = xw.location.href;
  }
  xt37 = xtestr(xturl, /#.*/, 1);
  xt37 = xt37 ? '&sta=' + encodeURIComponent(xtclURL(xt37)) : '';
}
var xt38 = (xw.xtcustom != null) ? xtserial(xw.xtcustom) : '',
  xt8 = (xw.xtsite != null) ? xw.xtsite : 0,
  xt9 = (xw.xtn2 != null) ? '&s2=' + xw.xtn2 : '',
  
    
  xt8b = ((xt8 == 0) ? '' : 's=' + xt8) + ((xt36 == 0) ? '' : ((xt8 == 0) ? 'sts=' + xt36 : '&sts=' + xt36));


// ONE MORE FRAGMENT START
var Xt_id=xt7+'?';
// ONE MORE FRAGMENT END

// ONE MORE FRAGMENT START
var xts=screen,xt21=new Date(),xt22=xt21.getTime()/(1000*3600);
// ONE MORE FRAGMENT END
  
// VENDOR INITIALIZATION CODE END //////////////////////////////////////////////

//tealium universal tag - utag.sender.template_script ut4.0.201606101551, Copyright 2016 Tealium.com Inc. All Rights Reserved.
try {
  
  if(!utag.libloader){utag.libloader=function(src,handler,a,b){a=document;b=a.createElement('script');b.language='javascript';b.type='text/javascript';b.src=src;if(typeof handler=='function'){b.handlerFlag=0; b.onreadystatechange=function(){ if((this.readyState=='complete'||this.readyState=='loaded')&&!b.handlerFlag){b.handlerFlag=1;handler()}};b.onload=function(){if(!b.handlerFlag){b.handlerFlag=1;handler()}};a.getElementsByTagName('head')[0].appendChild(b)}}};
  
  (function(id,loader,u){

    try{u=utag.o[loader].sender[id]={}}catch(e){u=utag.sender[id]};

    u.ev = {'view' : 1, 'link' : 1};

    u.qsp_delim = "&";

    u.kvp_delim = "=";

      u.map={"site_id_2":"xtn2,x20","pageName":"xtpage","subSection1":"chap1","subSection2":"chap2","subSection3":"chap3","search_result_page":"xt_mtcl","custom1":"x1","content_type":"x2","user_sgmt_pref_team":"x3","url_newsid_id":"x4","ext_domain":"x5","hompage_takeover":"x6","partners":"x6","url_language_code":"x7","url_videoid_id":"x8","url_season_id":"x9","url_team_id":"x10","url_match_id":"x11","url_round_id":"x12","parent_id":"x13","url_club_id":"x14","match_day":"x15","contentId":"x16","ati_url":"x18","publish_date":"x19","user_smgt_user_ID":"xt_an","user_status":"xt_ac","site_id_1":"xtsite"};
  u.extend=[function(a,b){
var url = document.URL;
var sponsor_top = "";
var sponsor_bottom = "";
// UCL
if (url.indexOf("/uefachampionsleague/") !== -1 && url.indexOf("/uefachampionsleague/news/") === -1) {
    jQuery(document).ready(function() {
        if (jQuery("#sponsorUcl.sponsorBar ul li [class^='spn_bottom_']") !== -1) {
            // Bottom Page
            jQuery("#sponsorUcl.sponsorBar ul li").find("a").each(function() {
                sponsor_bottom += ("PUB-" + "[" + jQuery(this).attr("title") + "]-["+ b['channel'] +"]-[Bottom]-[" + b['pageName'] + "],");
            });
            sponsor_bottom = sponsor_bottom.slice(0, -1);
            sponsor_bottom = sponsor_bottom.replace(/ /g, "_");

            function sponsor_displayed_bottom() {
                return sponsor_bottom;
            }
        }
        //PUB-[Nissan]-[UCL]-[Top]-[index]
        // Top Banner for "Presented by"
        var selector_li = jQuery(".sponsorBar ul li").attr('class');
        if (selector_li && selector_li.indexOf("spn_bottom_") === -1) {
            var banner_name = jQuery(".sponsorBar ul li").not('li [class^="spn_bottom_"]').find("a img").attr("alt");
            sponsor_top = ("PUB-" + "[" + banner_name + "]-["+ b['channel'] +"]-[Top]-[" + b['pageName'] + "],");
            //sponsor_top = sponsor_top.slice(0, -1);
            sponsor_top = sponsor_top.replace(/ /g, "_");

            function sponsor_displayed_top() {
                return sponsor_top;
            }
        }
        // UCL banners top of the page
        if (jQuery("#randomSponsor.d3-plugin.randomSponsor div.clearfix.random_list ul li") !== -1) {
            jQuery("#randomSponsor.d3-plugin.randomSponsor div.clearfix.random_list ul li").find("a").each(function() {
                sponsor_top += ("PUB-" + "[" + jQuery(this).attr("title") +"]-["+ b['channel'] + "]-[Top]-[" + b['pageName'] + "],");
            });
            sponsor_top = sponsor_top.slice(0, -1);
            sponsor_top = sponsor_top.replace(/ /g, "_");

            function sponsor_displayed_top() {
                return sponsor_top;
            }
        }
        ///////////////////////// ATI TRACKING ////////////////////////////
        if (sponsor_displayed_bottom() !== "" && sponsor_displayed_top() !== "") {
            xt_ati = sponsor_displayed_bottom() + "," + sponsor_displayed_top(); //Ad Tracking
        }
        if (sponsor_displayed_bottom() === "") {
            xt_ati = sponsor_displayed_top(); //Ad Tracking
        }
        if (window.xtparam !== null) {
            window.xtparam = "&ati=" + xt_ati;
        } 
    });
} // End if UCL
},
function(a,b){
// UCL banners top for the section news
var url = document.URL;
var sponsor_top = "";
var sponsor_bottom = "";
//if (url.indexOf("/uefachampionsleague/news/") !== -1 || url.) {

    if (url.indexOf("/uefachampionsleague/") !== -1 && (url.indexOf("/standings/") !==-1 || url.indexOf("/clubs/") !==-1 || url.indexOf("/draws/") !==-1) ) {


    if (typeof jQuery("#randomSponsor.d3-plugin.randomSponsor div.clearfix.random_list ul li").find("a").attr("title") !== "undefined") {
        jQuery("#randomSponsor.d3-plugin.randomSponsor div.clearfix.random_list ul li").find("a").each(function() {
            sponsor_top += ("PUB-" + "[" + jQuery(this).attr("title") +"]-["+ b['channel'] + "]-[Top]-[" + b['pageName'] + "],");
        });
        sponsor_top = sponsor_top.slice(0, -1);
        sponsor_top = sponsor_top.replace(/ /g, "_");

        function sponsor_displayed_top() {
            return sponsor_top;
        }
    }

if (sponsor_displayed_top() !== "") {
    xt_ati = sponsor_displayed_top(); //Ad Tracking
}

///////////////////////// ATI TRACKING ////////////////////////////
    console.log("xt_ati : " + xt_ati);
    window.xtparam = "&ati=" + xt_ati;


} // end if /uefachampionsleague/news/


},
function(a,b){
//var b = {};

// uefaeuro  banners top for the section season 2015

if (document.URL.indexOf("/uefaeuro/") !== -1) {
    
    var sponsor_top = "";
    var sponsor_bottom = "";

    // top of the page

    jQuery("#randomSponsor.d3-plugin.randomSponsor div.clearfix.random_list ul li div.promo").find("a").each(function() {
        sponsor_top += ("PUB-" + "[" + jQuery(this).attr("title") + "]-[Top]-[" + b['pageName'] + "],");
    });
    sponsor_top = sponsor_top.slice(0, -1);
    sponsor_top = sponsor_top.replace(/ /g, "_");

    function sponsor_displayed_top() {
        return sponsor_top;
    }

    // Bottom of the page

    jQuery("#customSponsors.js-target.customSponsors ul li div.promo ").find("a").each(function() {
        sponsor_bottom += ("PUB-" + "[" + jQuery(this).attr("title") + "]-[Bottom]-[" + b['pageName'] + "],");
    });
    sponsor_bottom = sponsor_bottom.slice(0, -1);
    sponsor_bottom = sponsor_bottom.replace(/ /g, "_");

    function sponsor_displayed_bottom() {
        return sponsor_bottom;
    }

///////////////////////// ATI TRACKING ////////////////////////////
if (sponsor_displayed_bottom() !== "" && sponsor_displayed_top() !== "") {
    xt_ati = sponsor_displayed_bottom() + "," + sponsor_displayed_top(); //Ad Tracking
}
if (sponsor_displayed_bottom() === "") {
    xt_ati = sponsor_displayed_top(); //Ad Tracking
}
    console.log(xt_ati);
    window.xtparam = "&ati=" + xt_ati;


}
},
function(a,b){

var url = document.URL;
// UEL Banner bottom of the page
if (url.indexOf("/uefaeuropaleague/") !== -1) {
    jQuery(document).ready(function() {
        if (jQuery("#sponsorUel ul li") !== -1) {
            function sponsor_displayed_bottom() {
                var sponsor_bottom = "";
                jQuery("#sponsorUel.sponsorBar ul li").find("a").each(function() {
                    sponsor_bottom += ("PUB-" + "[" + jQuery(this).attr("title") +"]-["+ b['channel'] + "]-[Bottom]-[" + b['pageName'] + "],");
                });
                sponsor_bottom = sponsor_bottom.slice(0, -1);
                sponsor_bottom = sponsor_bottom.replace(/ /g, "_");
                return sponsor_bottom;
            }
        }
        // UEL banners top of the page
        if (jQuery("#randomSponsor.d3-plugin.randomSponsor div.clearfix.random_list ul li") !== -1) {
            function sponsor_displayed_top() {
                var sponsor_top = "";
                jQuery("#randomSponsor.d3-plugin.randomSponsor div.clearfix.random_list ul li").find("a").each(function() {
                    sponsor_top += ("PUB-" + "[" + jQuery(this).attr("title") +"]-["+ b['channel'] + "]-[Top]-[" + b['pageName'] + "],");
                });
                sponsor_top = sponsor_top.slice(0, -1);
                sponsor_top = sponsor_top.replace(/ /g, "_");
                return sponsor_top;
            }
        }
        ///////////////////////// ATI TRACKING ////////////////////////////
        if (sponsor_displayed_bottom() !== "" || sponsor_displayed_top() !== "") {
            if (sponsor_displayed_bottom() !== "" && sponsor_displayed_top() !== "") {
                xt_ati = sponsor_displayed_bottom() + "," + sponsor_displayed_top(); //Ad Tracking
            }
            if (sponsor_displayed_top() === "") {
                xt_ati = sponsor_displayed_bottom(); //Ad Tracking
            }
            if (sponsor_displayed_bottom() === "") {
                xt_ati = sponsor_displayed_top(); //Ad Tracking
            }
            
            console.log("xt_ati : " + xt_ati);
                window.xtparam = "&ati=" + xt_ati;
            
            
        }
    });
} // End if UEL
},
function(a,b){
var url = document.URL;

// Uefa.com
if (url.indexOf("uefa.com") !== -1) {
    var url = document.URL;
    var directorySplit = new Array();
    var subSection = new Array();
    var tempDirectory = url.split("/");
    var i;
    var j = 0;
    var url_trunc;
    var last_index;

    // Section and subsections
    for (i = 3; i < tempDirectory.length; i++) {
        if (tempDirectory[i].indexOf("=") === -1) {
            if (tempDirectory[i].indexOf(".html") === -1) {
                directorySplit[i] = tempDirectory[i];
                j = j + 1;
                subSection[j] = directorySplit[i];
            } 
        } 
    } 

    // Sections an Subsections
    if (typeof subSection[2] !== "undefined") {
        b['subSection1'] = subSection[2];
    } else {
        b['subSection1'] = "";
    }

    b['content_type'] = b['subSection1'].replace(/[^\w\s]/gi, '');

    if (typeof b["content_type"] === "undefined" || b["content_type"] === "") {
        b['content_type'] = "hub";
    }
}


// Uefa.org
if (url.indexOf("uefa.org") !== -1) {
    b['content_type'] = utag.data.channel;

    if (typeof b['content_type'] === "undefined" || b['content_type'] === "") {
        b['content_type'] = "hub";
    }

}
},
function(a,b){ try{ if(1){try{b['pageName']=b['pageName'] = b['pageName'].replace(/\:/g,'::');}catch(e){};try{b['pageName']= b['pageName'] = b['pageName'].replace(/::::/g,'::');}catch(e){}} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if(typeof b['ext_domain']=='undefined'||typeof b['ext_domain']!='undefined'&&b['ext_domain']==''){b['ext_domain']=''} } catch(e){ utag.DB(e) }  },
function(a,b){
var url = document.URL;

if (jQuery('a[href*="DOWNLOAD.pdf"]') != -1) {
    jQuery('a[href*="DOWNLOAD.pdf"]').click(function() {


        var file_name = jQuery(this).text();
        file_name = file_name.replace(/\s/g, '_'); //replace(/\s+/g, "_");
        var file_number = jQuery(this).closest("a").attr("href");
        file_number = file_number.substring(file_number.lastIndexOf("/") + 1, file_number.lastIndexOf("_"));



        // GA 
        if (window._gaq && window._gaq.push) {

            window._gaq.push(["_trackEvent", "Download ", file_name]);
        } else {
            console.log("_gaq not present, aborting");
        }
        // ATI
        window.xtclzone = 0;
        window.xt_med(
            "C", b['site_id_2'],
            file_name + "+" + file_number + "&x6=" + b['partners'],
            "T"
        );
        // activate all click tracking again
        window.xtclzone = window.scriptOnClickZone || 0;
        //return false;

    });

} else {


    // Quick links


    if (jQuery(".quicklinkslist li.pdf") !== -1) {

        jQuery(".quicklinkslist li.pdf").click(function() {

            var file_name = jQuery(this).find("a").text();

            var file_number = jQuery(this).find("a").attr("href");
            file_number = file_number.substring(file_number.lastIndexOf("/") + 1, file_number.lastIndexOf("_"));


            window.xtclzone = 0;
            window.xt_med(
                "C", b['site_id_2'],
                file_name + "+" + file_number + "&x6=" + b['partners'],
                "T"
            );
            // activate all click tracking again
            window.xtclzone = window.scriptOnClickZone || 0;

        });

    }

    // end quicklinks



    // matchpresskits
    if (jQuery(".matchpresskits-items") !== "undefined") {
        jQuery(".matchpresskits-items").find("a[href *=pdf]").click(function() {
            var file_name = "";
            var match = "";
            file_name = jQuery(this).closest("a").text();
            file_name = file_name.substring(0, file_name.indexOf(file_name.match(/\d/))) + ".pdf";
            file_name = file_name.replace(/\s/g, '_');

            var file_number = jQuery(this).closest("a").attr("href");
            file_number = file_number.substring(file_number.lastIndexOf("/") + 1, file_number.lastIndexOf("_"));

            // GA 
            if (window._gaq && window._gaq.push) {

                window._gaq.push(["_trackEvent", "Download ", file_name + "-" + file_number]);

            } else {
                console.log("_gaq not present, aborting");
            }
            window.xtclzone = 0;
            window.xt_med(
                "C", b['site_id_2'],
                file_name + "+" + file_number + "&x6=" + b['partners'],
                "T"
            );
            // activate all click tracking again
            window.xtclzone = window.scriptOnClickZone || 0;
            //return false;
        });
    }
} // end else
},
function(a,b){
if (jQuery("ul.wList li.loadingBlack img.w2") !== -1)
    window.jQuery("img[class *= arrow]").on("click", function() {

        window.setTimeout(function() {

            var image = jQuery("p.wInfoTitle").text();
            var match = jQuery(".mb-beta > caption").text();
            if (jQuery(".mb-beta > caption").text() === "") {
                match = _sf_async_config.title.substring(0, _sf_async_config.title.lastIndexOf("UEFA.com") - 2);
            }

            //console.log("photos viewed : " + image + " - match : " + match);

            if (image !== "") {

                // ATI
                if (typeof window.xt_med === "function") {
                    // temporarely de-activate all click tracking
                    // this is needed for the method xt_med to fire correctly with
                    // custom link tracking requests such as these
                    window.xtclzone = 0;

                    // "photos viewed" + "::" + match + "::" + image + "&x6=" + sponsorname,

                    if (match !== "") {

                        window.xt_med(
                            "C", b['site_id_2'],
                            "photos viewed" + "::" +
                            match + "::" +
                            image +
                            "&x6=" + utag.data.partners, "A"
                        );
                    }

                    if (match === "") {

                        window.xt_med(
                            "C", b['site_id_2'],
                            "photos viewed" + "::" +
                            image +
                            "&x6=" + utag.data.partners, "A"
                        );
                    }

                    // activate all click tracking again
                    window.xtclzone = window.scriptOnClickZone || 0;

                }

                // GA

                if (window._gaq && window._gaq.push) {
                    window._gaq.push(["_trackEvent", "match ", match]);
                    window._gaq.push(["_trackEvent", "photos viewed ", image]);

                } else {
                    console.log("_gaq not present, aborting");
                }
            }

        }, 500);
    });
},
function(a,b){ try{ if(1){try{b['ati_url']=window.encodeURIComponent(document.URL);}catch(e){}} } catch(e){ utag.DB(e) }  },
function(a,b){
//user_smgt_user_ID
// extension dependency: set user_sgmt_* data source from uefa_login cookie
b._ccustid = b["user_smgt_user_ID"] || "";
//window.xt_ac = b["user_status"];
},
function(a,b){ try{ if(1){try{b['video_title']=window.OVPlayer ? window.OVPlayer.videoTitle : (PlayerVideo.omntitle ? PlayerVideo.omntitle : "");}catch(e){}} } catch(e){ utag.DB(e) }  },
function(a,b){
var url = document.URL;
var event_page;

if (url.indexOf("/matches/live/index.html?day=") !== -1 || url.indexOf("/matches/live/day=") !== -1) {

	if (url.indexOf("/matches/live/index.html?day=") !== -1) {
		event_page = "match_center_full";
	} else {
		event_page = "match_center";
	}



	// *************************  ATI Tracking **********************************

	function ati_tracking(ati_event, event_page) {

		// temporarely de-activate all click tracking
		// this is needed for the method xt_med to fire correctly with
		// custom link tracking requests such as these

		window.xtclzone = 0;


		window.xt_med(
			"C", b['site_id_2'],
			event_page + "::" +
			ati_event + "::" +
			utag.data.matchID.replace("=", "_"), "C"
		);

		// activate all click tracking again
		window.xtclzone = window.scriptOnClickZone || 0;

	}


	// ************************ Full match center  **********************************

	jQuery("div.backto").click(function() {
		var ati_event = "minimize";
		ati_tracking(ati_event, event_page);

	});


	// ************************ match center & full match center **********************************

	// Listen

	jQuery("a.mc-listen-live").click(function() {

		var ati_event = "listen live";
		ati_tracking(ati_event, event_page);

	});



	// ************************ match center  **********************************

	// Maximize

	jQuery("#ml3_gotomc.last a span").click(function() {

		var ati_event = "maximize";
		ati_tracking(ati_event, event_page);

	});


} // end if url
},
function(a,b){
//var b = {};

var url = document.URL;
if (url.indexOf("/leaguematchcentre/") !== -1) {
	// *************************  ATI Tracking **********************************

	function ati_tracking(ati_event) {

		// temporarely de-activate all click tracking
		// this is needed for the method xt_med to fire correctly with
		// custom link tracking requests such as these

		window.xtclzone = 0;

		window.xt_med(
			"C", b['site_id_2'],
			"domestic_match_centre::" +
			ati_event, "C"
		);

		// activate all click tracking again
		window.xtclzone = window.scriptOnClickZone || 0;

	}

	//Tabs all matches, live, favourites

	jQuery("#leaguestab.infotab div.clearfix.tabs-header ul.main-nav li.main-nav-li a").click(function() {
		var ati_event = jQuery(this).text();
		ati_tracking(ati_event);

	});


	//Standings
	//var team = jQuery("div.clearfix.comp-row").find("h3").text();

	jQuery("div.clearfix.comp-row span").live("click", function() {
		var ati_event = jQuery(this).attr("class").split("-");
		var team = jQuery("div.clearfix.comp-row").find("h3").text();;
		ati_event = team + "::" + ati_event[1];
		ati_tracking(ati_event);
		//alert("hello");

	});



	//Calendar

	jQuery("#domestic-calendar ul li").click(function() {

		var action = jQuery(this).attr("class");
		var date_selected = jQuery(this).text();
		ati_event = action + "::" + date_selected;
		var ati_event = jQuery(this).text();
		ati_tracking(ati_event);

	});

	//league button 

	jQuery("#leagues-all.off ul li a").click(function() {
		var team = jQuery(this).closest("li").find("span").attr("data-omni-cupname");
		var ati_event = team + "::" + jQuery(this).attr("title");

		ati_tracking(ati_event);

	});

	//Audio button – “audio on” or “audio off” (only 1)

	jQuery("#fixtures-results div.ls-header a").click(function() {
		var ati_event = jQuery(this).attr("class").split(" ");
		ati_event = ati_event[1].substring(ati_event[1].indexOf("-") + 1);
		ati_tracking(ati_event);

	});

}
},
function(a,b){
/*
* @author: Simon Browning - tealium, inc.
*
* @extension name: UEFA.org chapter1 rather than x2
*
* https://basecamp.com/2555704/projects/6632064/todos/144796446
*
* extension scope: All Tags
*
**/
if(b['dom.domain'] === "www.uefa.org"){
	var path = b['dom.pathname'].split("/");
	b['channel'] = "UEFA";
	b['subSection1'] = path[1] || "";
	b['subSection2'] = path[2] || "";
	b['subSection3'] = path[3] || "";
}
},
function(a,b,c,d,e,f,g){d=b['dom.url'];if(typeof d=='undefined')return;c=[{'eqpredictor':'eq'},{'uelpredictor':'uel'},{'uclpredictor':'ucl'},{'eqfantasy':'eq'},{'uelfantasy':'uel'},{'uclfantasy':'ucl'},{'/uefaeuro/qualifiers/':'eq'},{'uefa.org':'UEFA'},{'toty.uefa.com':'toty'},{'friendlies/season=2016/matches':'eq'},{'uclratings.uefa.com':'ucl'},{'ucltrophytour.uefa.com':'ucl'},{'uefachampionsleaguefinal2015-club.hospitality':'ucl'},{'boss.uefa.com':'trainingground'},{'tactx.uefa.com':'trainingground'},{'calendars.uefa.com':'calendars'},{'help.uefa.com':'help'},{'iwasthere.uefa.com':'iwasthere'},{'gotd.uefa.com':'eq'},{'potd.uefa.com':'ucl'},{'championsleague.tickets.uefa.com':'ucl'},{'europaleague.tickets.uefa.com':'uel'},{'legendarymoments.uefa.com':'ucl'},{'u21predictor':'u21'},{'u21fantasy':'u21'},{'uefa.com/goal-of-the-season':'goaloftheseason'},{'uefa.com/save-of-the-season':'saveoftheseason'},{'uclmvp.uefa.com':'ucl'},{'uelmvp.uefa.com':'uel'},{'euro2016.tickets.uefa.com':'euro2016'},{'.mascot.':'euro2016'},{'club.hospitality.uefa.com':'euro2016'},{'uefaeuro2016-club.hospitality.uefa.com':'euro2016'},{'euro2016':'euro2016'},{'euro-2016':'euro2016'},{'euro16':'euro2016'},{'uefaeuro-finals':'euro2016'},{'alltime11.uefa.com':'euro2016'},{'ecocalculator.uefa.com':'euro2016'},{'alltime-int.uefa.com':'euro2016'},{'europredictor.uefa.com':'euro2016'},{'mascot.uefa.com':'euro2016'},{'eurofantasy-pre.uefa.com':'euro2016'},{'eurofantasy.uefa.com':'euro2016'},{'eurofantasy-int.uefa.com':'euro2016'},{'uefa.com/uefaeuro/panini-sticker-album':'euro2016'},{'euro2016.stg.infra.uefa.com/fanzone/panini-sticker-album':'euro2016'},{'uefa.cn':'euro2016'},{'eurogotr.uefa.com':'euro2016'},{'euromotm.uefa.com':'euro2016'}];var m=false;for(e=0;e<c.length;e++){for(f in c[e]){if(d.toString().indexOf(f)>-1){b['new_channel']=c[e][f];m=true};};if(m)break};if(!m)b['new_channel']='';},
function(a,b){ try{ if(typeof b['new_channel']!='undefined'&&b['new_channel']!=''){b['channel']=b['new_channel']} } catch(e){ utag.DB(e) }  },
function(a,b,c,d,e,f,g){d=b['dom.url'];if(typeof d=='undefined')return;c=[{'eqpredictor':'predictor'},{'uelpredictor':'predictor'},{'uclpredictor':'predictor'},{'eqfantasy':'fantasy'},{'uelfantasy':'fantasy'},{'uclfantasy':'fantasy'},{'season=2014':'history'},{'season=2013':'history'},{'season=2012':'history'},{'season=2011':'history'},{'season=2010':'history'},{'season=200':'history'},{'season=19':'history'},{'friendlies/season=2016/matches':'matches'},{'uclratings.uefa.com':'playerrater'},{'ucltrophytour.uefa.com':'trophytour'},{'uefachampionsleaguefinal2015-club.hospitality':'tickets&hospitality'},{'boss.uefa.com':'Youaretheboss'},{'tactx.uefa.com':'tactx'},{'gotd.uefa.com':'gotd'},{'potd.uefa.com':'potd'},{'legendarymoments.uefa.com':'legendarymoments'},{'euro2016.tickets.uefa.com':'tickets&hospitality'},{'championsleague.tickets.uefa.com':'tickets&hospitality'},{'europaleague.tickets.uefa.com':'tickets&hospitality'},{'u21predictor':'predictor'},{'u21fantasy':'fantasy'},{'season=2015':'history'},{'uclmvp.uefa.com':'mvp'},{'uelmvp.uefa.com':'mvp'},{'/careers':'careers'},{'mascot.uefa.com':'mascot'},{'club.hospitality.uefa.com/':'hospitality'},{'alltime11.uefa.com':'fanzone'},{'ecocalculator.uefa.com':'about-euro'},{'alltime-int.uefa.com':'fanzone'},{'europredictor.uefa.com':'fanzone'},{'eurofantasy-pre.uefa.com':'fanzone'},{'eurofantasy-int.uefa.com':'fanzone'},{'eurofantasy.uefa.com':'fanzone'},{'uefa.com/uefaeuro/be-there-with-hyundai':'fanzone'},{'euro2016.stg.infra.uefa.com/fanzone/panini-sticker-album':'fanzone'},{'uefa.com/uefaeuro/panini-sticker-album':'fanzone'},{'uefa.com/uefaeuro/golden-boot/':'fanzone'},{'euromotm.uefa.com':'fanzone'},{'eurogotr.uefa.com':'fanzone'}];var m=false;for(e=0;e<c.length;e++){for(f in c[e]){if(d.toString().indexOf(f)>-1){b['new_chapter1']=c[e][f];m=true};};if(m)break};if(!m)b['new_chapter1']='';},
function(a,b){ try{ if(typeof b['new_chapter1']!='undefined'&&b['new_chapter1']!=''){b['subSection1']=b['new_chapter1']} } catch(e){ utag.DB(e) }  },
function(a,b,c,d,e,f,g){d=b['dom.url'];if(typeof d=='undefined')return;c=[{'friendlies/season=2016/matches':'friendlies'},{'mascot.uefa.com/news':'news'},{'mascot.uefa.com/photos':'photos'},{'mascot.uefa.com/videos':'videos'},{'alltime11.uefa.com':'alltimeeuro11'},{'alltime-int.uefa.com':'alltimeeuro11'},{'europredictor.uefa.com':'europredictor'},{'eurofantasy-int.uefa.com':'eurofantasy'},{'eurofantasy.uefa.com':'eurofantasy'},{'eurofantasy-pre.uefa.com':'eurofantasy'},{'uefa.com/uefaeuro/be-there-with-hyundai':'be-there-with-hyundai'},{'uefa.com/uefaeuro/panini-sticker-album':'panini-sticker-album'},{'euro2016.stg.infra.uefa.com/fanzone/panini-sticker-album':'panini-sticker-album'},{'uefa.com/uefaeuro/golden-boot':'golden-boot'},{'uefa.com/uefaeuro/season=2016/teams/player':'playerpage'},{'uefa.com/uefaeuro/season=2016/teams/team':'teampage'},{'eurogotr.uefa.com':'gotr'},{'euromotm.uefa.com':'motm'}];var m=false;for(e=0;e<c.length;e++){for(f in c[e]){if(d.toString().indexOf(f)>-1){b['new_chapter2']=c[e][f];m=true};};if(m)break};if(!m)b['new_chapter2']='';},
function(a,b){ try{ if(typeof b['new_chapter2']!='undefined'&&b['new_chapter2']!=''){b['subSection2']=b['new_chapter2']} } catch(e){ utag.DB(e) }  },
function(a,b,c,d,e,f,g){d=b['dom.url'];if(typeof d=='undefined')return;c=[{'europredictor.uefa.com/bracket':'bracket'},{'europredictor.uefa.com/match':'match'},{'eurofantasy.uefa.com/en/daily7s':'daily7s'},{'eurofantasy.uefa.com/fr/daily7s':'daily7s'},{'eurofantasy.uefa.com/it/daily7s':'daily7s'},{'eurofantasy.uefa.com/de/daily7s':'daily7s'},{'eurofantasy.uefa.com/ru/daily7s':'daily7s'},{'eurofantasy.uefa.com/pt/daily7s':'daily7s'},{'eurofantasy.uefa.com/es/daily7s':'daily7s'}];var m=false;for(e=0;e<c.length;e++){for(f in c[e]){if(d.toString().indexOf(f)>-1){b['new_chapter3']=c[e][f];m=true};};if(m)break};if(!m)b['new_chapter3']='';},
function(a,b){ try{ if(typeof b['new_chapter3']!='undefined'&&b['new_chapter3']!=''){b['subSection3']=b['new_chapter3']} } catch(e){ utag.DB(e) }  },
function(a,b,c,d,e,f,g){d=b['dom.url'];if(typeof d=='undefined')return;c=[{'':''}];var m=false;for(e=0;e<c.length;e++){for(f in c[e]){if(d.toString().indexOf(f)>-1){b['new_chapter4']=c[e][f];m=true};};if(m)break};if(!m)b['new_chapter4']='';},
function(a,b){ try{ if(typeof b['new_chapter4']!='undefined'&&b['new_chapter4']!=''){b['subSection4']=b['new_chapter4']} } catch(e){ utag.DB(e) }  },
function(a,b){
/* 
 * @author: kevin thomas faurholt - tealium, inc.
 * 
 * basecamp project: https://basecamp.com/2555704/projects/6632064/todos/128177338
 * 
 * extension: global-pagename
 * 
 * new global pagename naming convention:
 * [channel]_[subSection1]::[subSection2]::[subSection3]_[subSection4]::[<title>]
 * 
 */
var pagename = [];

if (b.channel) { pagename.push(b.channel); }
if (b.subSection1) { pagename.push("_" + b.subSection1); }
if (b.subSection2) { pagename.push("::" + b.subSection2); }
if (b.subSection3) { pagename.push("::" + b.subSection3); }
if (b.subSection4) { pagename.push("_" + b.subSection4); }

pagename.push("::"+document.title);

b.pageName = pagename.join("");
},
function(a,b){
/*
 * @author: kevin thomas faurholt - tealium, inc
 * 
 * basecamp:
 * https://basecamp.com/2555704/projects/6632064/todos/123768887
 * https://basecamp.com/2555704/projects/6632064/todos/159856280
 * 
 * extension: global-track-srp-sponsor-logos
 * 
 * other extension dependencies:
 * - >> VITAL << Page name, sections ATI - uefa.com
 * >> VITAL << Page names, sections ATI uefa.org
 * 
 * 2014.10.24: New SRP data-attributes on elements is already in place for the
 * UCL section, except Predictor, Fantasy and other 3rd party sites.
 * 
 * data structure: PUB-[partner]-[section]-[top/bottom]-[page]
 * Example: PUB-[gazprom]-[ucl]-[Top]-[index]
 * 
 * UCL = http://www.uefa.com/uefachampionsleague/index.html
 * UEL = http://www.uefa.com/uefaeuropaleague/index.html
 * EURO16 = http://www.uefa.com/uefaeuro/finals/index.html
 * EQ = http://www.uefa.com/uefaeuro/qualifiers/index.html
 *
 *  * WARNING: this extension should be UNDER any other banner tracking extension!
 * 
 */

function log(type, msg) {
    
  if (!/prod/.test(window.utag.cfg.path) || /tealium_debug=1/.test(document.cookie)) {

    console.log(type + " :: " + msg);
  }
}

var sponsors = [];

jQuery("[data-track='true'][data-sponsor]").each(function() {

  var pagename = b.pageName.replace(/\&/g," and "),
    channel = b.channel || "none",
    identifier = "",
    $self = jQuery(this),
    sponsor = $self.attr("data-sponsor"),
    position = $self.attr("data-scope");

  if (channel && sponsor && position) {

    identifier = ("PUB-" + "[" + sponsor + "]-[" + channel + "]-[" + position + "]-[" + pagename + "]");
    
    // check that we only have one unique logo instance + position in the sponsors array
    if (sponsors.join(",").indexOf(identifier) === -1) {

      sponsors.push(identifier);
    }
  }
  else {
    
    log("WARNING", "could not identify sponsor SRP data-attribute!");
  }

  
});

if (sponsors.length) {

  log("SRP sponsors found", "\n" + sponsors.join("\n"));
  
  window.xtparam = window.xtparam || "";

  if (!/ati=/.test(window.xtparam)) {
    
    window.xtparam += "&ati=" + sponsors.join(",");
  }
  else {
   
    // previous sponsors are set by old extensions that should be deleted
    // some day once SRP attributes are added globally
    var xtparams = window.xtparam.split("&");

    for (var i = 0, plen = xtparams.length; i < plen; i ++) {

      if (/^ati=/.test(xtparams[i])) {

        xtparams[i] = "ati=" + sponsors.join(",");
      }
    }
    
    window.xtparam = xtparams.join("&");
  }
}
},
function(a,b){
/*
 * @author: kevin thomas faurholt - tealium, inc.
 *
 * extension: uefa-custom-url-params-x4+x7-x16
 *
 * @purpose: populate custom variables from url
 *
 * @basecamp: https://basecamp.com/2555704/projects/6632064/todos/144852492
 *
 * supported url identifiers
 * - newsid (x4)
 * - videoid (x8)
 * - season (x9)
 * - team (x10)
 * - match (x11)
 * - round (x12)
 * - group (x13)
 * - club (x14)
 * - player (x15)
 * - people (x16 - never had data)
 *
 * TEST CASES:
 *
 * input: http://www.uefa.com/uefachampionsleague/news/newsid=2197734.html
 * output:
 * - url_newsid_id (x4) = 2197734
 * 
 * input: http://www.uefa.com/uefachampionsleague/video/videoid=2197745.html?autoplay=true
 * output:
 * - url_videoid_id (x8) = 2197745
 *
 * input: http://www.uefa.com/uefachampionsleague/season=2015/matches/round=2000549/match=2014403/prematch/background/index.html
 * output:
 * - url_season_id (x9) = 2015
 * - url_match_id (x11) = 2014403
 * - url_round_id (x12) = 2000549
 *
 * input: http://www.uefa.com/uefachampionsleague/season=2015/clubs/club=52747/index.html
 * output:
 * - url_season_id (x9) = 2015
 * - url_club_id (x14) = 52747
 *
 * input: http://www.uefa.com/uefachampionsleague/season=2015/clubs/player=250039525/index.html
 * output:
 * - url_season_id (x9) = 2015
 * - url_player_id (x15) = 50039525
 *
 * input: http://www.uefa.com/uefaeuro/qualifiers/season=2016/teams/team=58837/index.html
 * - url_season_id (x9) = 2016
 * - url_team_id (x10) = 58837
 *
 * input: http://www.uefa.com/uefaeuro/qualifiers/season=2016/standings/round=2000446/group=2002429/index.html
 * output:
 * - url_season_id (x9) = 2016
 * - url_round_id (x12) = 2000446
 * - url_group_id (x13) = 2002429
 */
var valid_country_codes = {
  "en" : 1, "es" : 1, "it" : 1, "ru" : 1, "de" : 1, "jp" : 1, "fr" : 1, "pt" : 1, "cn" : 1
};

// custom parameter x7
b.url_language_code = document.URL.match(/^https?:\/\/([a-z]{2})\..*|m\.uefa\.com\/([a-z]{2})\/.*/i) ? (RegExp.$1 ? RegExp.$1.toLowerCase() : RegExp.$2.toLowerCase()) : "en";

if (!valid_country_codes[b.url_language_code]) {
  
  b.url_language_code = "en";
}

// custom parameter x4 + x8-x16
var regex = /(newsid|videoid|season|team|match|round|group|club|player|people)=([^/&.]+)/gi;

var match;

while (match = regex.exec(document.URL)) {

  b["url_" + match[1].toLowerCase() + "_id"] = match[2];
}
},
function(a,b){
/*
 * @author: kevin thomas faurholt - tealium, inc
 * 
 * basecamp: https://basecamp.com/2555704/projects/6632064/todos/127542367
 * pages:
 * - http://en.staging.toty.uefa.com
 * - http://en.staging.toty.uefa.com/my-team.html (after building a team)
 * - http://en.toty.uefa.com/results.html
 * 
 * extension: uefa-click-track-toty-clicks
 * 
 * Please find below TOTY click titles (same to all pages since we differentiate through selected date range):
 *
 * a) team social shares (facebook, twitter) + save team photo buttons at top and bottom of page.
 * toty::team::facebook
 * toty::team::twitter
 * toty::team::compare_your_team
 * toty::team::save_team_photo
 *
 * b) players social shares (facebook, twitter) at my team page
 * toty::player::facebook
 * toty::player::twitter
 *
 * 3rd compare teams page
 * a) every time someone clicks on arrow to change compared team
 * toty::compare_teams
 */
(function(jQuery) {
  
if (!/\.toty\./i.test(document.domain)) { return true; }

//debugger;

// IMPORTANT: site ID needs to be fixed to s2 =10 at all TOTY pages (both phases).
b["site_id_2"] = "10";

function log(type, msg) {
    
  if (!/prod/.test(window.utag.cfg.path) || /tealium_debug=1/.test(document.cookie)) {

    console.log(type + " :: " + msg);
  }
}

function track($link, container, share, target, player) {
  
  if ($link.attr("data-tealium-" + container + "-tracked")) { return true; }

  $link.attr("data-tealium-" + container + "-tracked", "true");
  
  var site_id_2 = "10",
    event_title = "";
  
  event_title += "toty";
  event_title += "::" + share;
  event_title += target ? "::" + target : "";
  //player name not yet requested by moari but maybe in the future
  //event_title += player ? "::" + player : "";
  
  event_title = event_title.toLowerCase();
  
  $link.on("click", function(e) {
    
    log("uefa-click-track-toty-clicks", event_title);
    
    // at internet click tracking method
    if (window.xt_med !== undefined) {
      
      window.xt_med("C", site_id_2, event_title, "A");
    }
    
    // compare teams does not open in a new window. hence the need for a timeout
    // to ensure that the pixel call to ati does not get canceled prematurely
    if (target === "compare_your_team") {
      
      e.preventDefault();
      
      var $self = jQuery(this);
      
      window.setTimeout(function() {
        
        document.location.href = $self.attr("href");
        
      }, 500);
    }
  });
}

if (!jQuery) {
  
  log("Warning", "jQuery is is missing!");
  
  return true;
}

// a) team social shares (facebook, twitter) + save team photo buttons at top and bottom of page.
// http://en.staging.toty.uefa.com/my-team.html
// toty::team::facebook
// toty::team::twitter
// toty::team::compare_your_team
// toty::team::save_team_photo
jQuery("div.confirmation-shares").find("a").each(function(index) {
  
  var $self = jQuery(this), share = "team", target = undefined;
 
  switch(index) {
    case 0 : target = "facebook"; break;
    case 1 : target = "twitter"; break;
    case 2 : target = "save_team_foto"; break;
    default :
  }
  
  if (target !== undefined) {
    
    track($self, "team-share", share, target);
  }

});

jQuery("div.your-line-up-shares").find("a").each(function(index) {
  
  var $self = jQuery(this), share = "team", target = undefined;
 
  switch(index) {    
    case 0 : target = "facebook"; break;
    case 1 : target = "twitter"; break;
    case 2 : target = "save_team_foto"; break;
    default :
  }
  
  if (target !== undefined) {
    
    track($self, "team-share", share, target);
  }

});



// b) players social shares (facebook, twitter) at my team page
// http://en.staging.toty.uefa.com/my-team.html
// toty::player::facebook
// toty::player::twitter
jQuery("[data-player-name]").each(function() {

  jQuery(this).find("a").each(function() {

    var $self = jQuery(this), 
        player = $self.closest("[data-player-name]").attr("data-player-name"),
        target = "";

    if ($self.hasClass("fb-share-btn")) {

      target = "facebook";
    }
    else if ($self.hasClass("tw-share-btn")) {

      target = "twitter";
    }

    track($self, "player-share", "player", target, player);

  });
});

//3rd compare teams page
//a) every time someone clicks on arrow to change compared team
// toty::compare_teams
// SIMON NEED TO COMPLETE THIS ONE.

}(window.jQuery));
},
function(a,b){
/*
 * @author: kevin thomas faurholt
 * 
 * extension: ucl-click-track-bsu-clicks
 * 
 * @basecamp: https://basecamp.com/2555704/projects/6632064/todos/124838498
 *
 * staging: http://www.uefa.com/uefachampionsleague/video/livematchcoverage/country=FR/_testpage.html
 * live: http://www.uefa.com/uefachampionsleague/video/livematchcoverage/
 *
 * sections: UCL (most important), UEL, European Qualifiers.
 *
 * clicktracking for the following:
 *
 * 1. "live matches" clicks i.e. "ucl::live matches::olympiacos x atletico"
 *
 * 2. "watch live" clicks i.e. "ucl::watch live::olympiacos x atletico"
 *
 * 3. "learn more" clicks i.e. "ucl::learn more::olympiacos x atletico"
 *
 * 4. exit clicks i.e. mymatchstream.com, http://www.canalplus.fr
 *
 */
(function() {

  if (jQuery === undefined) { return true; }

  if (!/livematchcoverage/i.test(document.URL)) { return true; }

  function log(type, msg) {
    
    if (!/prod/.test(window.utag.cfg.path) || /tealium_debug=1/.test(document.cookie)) {

      console.log(type + " :: " + msg);
    }
  }
  
  // namespace for this extension
  utag.uefa = utag.uefa || {};
  utag.uefa.bsu = utag.uefa.bsu || { "site_id_2" : "", "league" : "", "match" : "" };

  if(/.+\/uefachampionsleague\/.+/.test(document.URL)) {

    utag.uefa.bsu.site_id_2 = "1";

    utag.uefa.bsu.league = "ucl";
  }
  
  if(/.+\/uefaeuropaleague\/.+/.test(document.URL)) {

    utag.uefa.bsu.site_id_2 = "2";

    utag.uefa.bsu.league = "uel";
  }
  
  if(/.+\/uefaeuro\/.+/.test(document.URL)) {

    utag.uefa.bsu.site_id_2 = "13";
    
    utag.uefa.bsu.league = "euro";
  }
  
  if(/.+\/qualifiers\/.+/.test(document.URL)) {

    utag.uefa.bsu.site_id_2 = "43";
    
    utag.uefa.bsu.league = "eq";
  }
  
  //////////////////////////////////////////////////////////////////////////////
    
  jQuery("body").on( "click", "a", function() {

    var $link = jQuery(this),    
      $parent = $link.parent(),
      id = $link.attr("id"),
      href = $link.attr("href")
      
    
    // 1. "live matches" clicks i.e. "ucl::live matches::olympiacos x atletico"
    if ($parent.prop("tagName") === "LI" && /matchlive/.test($parent.attr("class"))) {

      var match = [], team = "";

      jQuery(this).find("div.infobottom").contents().filter(function() {

        return (this.nodeType === 3);

      }).each(function() {

        if (team = jQuery.trim(this.nodeValue)) {

          match.push(team.toLowerCase());
        }
      });

      utag.uefa.bsu.match = match.join(" vs ");


      //////////////////////////////////////////////////////////////////////////
            
      log("bsu-click", utag.uefa.bsu.league + "::live matches::" + utag.uefa.bsu.match);      
      
      // at internet click tracking method
      window.xt_med("C", utag.uefa.bsu.site_id_2, utag.uefa.bsu.league + "::live matches::" + utag.uefa.bsu.match, "A");
    }
    
    // 2. "watch live" clicks i.e. "ucl::watch live::olympiacos x atletico"
    if (id && /livemode/i.test(id)) {

      if (utag.uefa.bsu.match !== "") {

        log("bsu-click", utag.uefa.bsu.league + "::watch live::" + utag.uefa.bsu.match);
    
        // at internet click tracking method
        window.xt_med("C", utag.uefa.bsu.site_id_2, utag.uefa.bsu.league + "::watch live::" + utag.uefa.bsu.match, "A");
      }
    }
    // 3. "learn more" clicks i.e. "ucl::learn more::olympiacos x atletico"
    else if (id && /learnmore/i.test(id)) {

      if (utag.uefa.bsu.match !== "") {

        log("bsu-click", utag.uefa.bsu.league + "::learn more::" + utag.uefa.bsu.match);      

        // at internet click tracking method
        window.xt_med("C", utag.uefa.bsu.site_id_2, utag.uefa.bsu.league + "::learn more::" + utag.uefa.bsu.match, "A");
      }
    }
    
    
    ////////////////////////////////////////////////////////////////////////////


    // 4. exit clicks i.e. mymatchstream.com, http://www.canalplus.fr
    // @todo: on which page(s) should this logic trigger?
    // @todo: what should be the click title syntax?
    
    // deltatre is putting css class ids, e.g. "#fbMatches" in href, so
    // forced to test that href does not start with "#" + at least 1 dot
    if (href && /^#/.test(href) === false && /[.]+/.test(href) === true) {
      
      var domain = href.replace(/^https?:\/\/(?:www)?(?:[0-9]+?\.)?(?:\.)?([^/]+).*$/, "$1");
      
      if (!new RegExp(domain, "i").test(document.domain)) {
        
        // it's an exit link
        log("bsu-click", utag.uefa.bsu.league + "::exit::" + domain);      

        // at internet click tracking method
        window.xt_med("C", utag.uefa.bsu.site_id_2, utag.uefa.bsu.league + "::exit::" + domain, "A");
      }
    }
  });

}());
},
function(a,b){
/*
 * @author: kevin thomas faurholt - tealium, inc.
 *
 * @extension name: ucl-click-track-vote-goal-of-the-week
 *
 * @modification date: 2014.09.19
 *
 * @task: uefa.com gotw vote click tracking with jquery
 *
 * extension scope: at internet
 * 
 * where to find:
 * - http://www.uefa.com/uefachampionsleague/goal-of-the-week/index.html
 *
 * what to track:
 * - step 1 : click on "Watch and Vote" button
 * - step 2 : track video title clicks on "VOTE FOR THIS GOAL"
 *
 * this extension is looking for the list element closest to the button
 * and we will take the data attribute data-tw as video title
 * 
 */
if (a !== "view") { return true; }
if (window.jQuery === undefined) { return true; }
if( !/goal-of-the-week/.test(document.URL)) { return true; }

window.jQuery("div.gotw-vote").each(function() {

  var container = window.jQuery(this);

  if (container.attr("data-tealium-tracked") === undefined) {

    container.attr("data-tealium-tracked", "true");

    container.on("click", function() {

      try {
        
        // uefa champions league site id = 1
        var site_id_2 = "1";

        var page_name = "ucl::goal-of-the-week::vote::";

        page_name += window.jQuery(".gotw-video.selected").attr("data-tw").replace("- Goal of the week", "").trim();

        window.xtclzone = 0;
        
        // at internet click tracking method
        window.xt_med("C", site_id_2, page_name, "A");
        
        window.xtclzone = window.scriptOnClickZone || 0;
      }
      catch(e) {

        // do something
      }
    });
  }
});
},
function(a,b){
/*
 * @author: kevin thomas faurholt
 * UCL UniCredit Stickers Quiz - Submit Click Tracking
 * https://basecamp.com/2555704/projects/6632064/todos/130290186
 * http://www.uefa.com/uefachampionsleague/news/live-coverage/panini/index.html
 *
 * Proposed naming convention: ucl::news::live_coverage::stickers_quiz_submit
 * Type of click: Action
 */
(function($, a){

  if (!/\/uefachampionsleague\/news\/live-coverage\/panini\//.test(document.URL)) { return true; }

  // no jquery
  if (!$) { return true; }
  
  // only apply on view
  if (a !== "view") { return true; }
  
  // onclick listener already applied
  if ($("button.panquiz-submit").attr("data-tealium-panquiz-tracked")) { return true; }
  
  $("button.panquiz-submit").attr("data-tealium-panquiz-tracked", "true");
  
  function log(type, msg) {
    
    if (!/prod/.test(window.utag.cfg.path) || /tealium_debug=1/.test(document.cookie)) {

      console.log(type + " :: " + msg);
    }
  }
  
  $("button.panquiz-submit").on("click", function() {

    if ($("input[name=answer]").is(":checked")) {

      log("panquiz", "submit-button clicked");
      
      // input name label of player
      //var player = $.trim($("input[name=answer]:checked").parent("label").text());
      
      //log("panquiz", "player selected: " + player);
      
      // give the quiz some time to render the result
      //window.setTimeout(function() {
      
        //var answer = $("div.panquiz-msg.panquiz-correct").is(":visible") ? "correct" : "incorrect";
        
        //log("panquiz", "answer was " + answer);
        
      //}, 500);
      
      // at internet click tracking method
      if (window.xt_med !== undefined) {
        
        window.xt_med("C", utag.data.site_id_2, "ucl::news::live_coverage::stickers_quiz_submit", "A");
      }
    }
  });

}(window.jQuery, a));
},
function(a,b){
/*
 * @author: kevin thomas faurholt - tealium, inc.
 * @author: bruno buous - tealium, inc.
 *
 * extension: at-internet-videoplayer-extension
 *
 * © 2014 tealium, inc. all rights reserved. this material may not be reproduced,
 * displayed, modified or distributed without the express prior written permission of the copyright holder.
 */
if (a !== "view") { return true;}

if (!window.jQuery) { return true; }

if (/tealium_debug=1/.test(document.cookie)) {
  
  var debugmode = true;
}

function log(msg, obj) {

  // activate console.logging in debug mode only
  if (!debugmode) {
    return true;
  }

  if (obj) {
    window.console.warn(msg, obj);
  }
  else {
    window.console.warn(msg);
  }
}

function toType(obj) {

  return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
}

window.utag.uefa = window.utag.uefa || {};

window.utag.uefa.video = window.utag.uefa.video || {};

window.utag.uefa.video.atinternet = window.utag.uefa.video.atinternet || {

  "extensionloaded" : false
};

if (window.utag.uefa.video.atinternet.extensionloaded) {

  return true;
}

window.utag.uefa.video.atinternet.extensionloaded = true;


////////////////////////////////////////////////////////////////////////////////


// uefa.com videos:
// https://basecamp.com/2555704/projects/6632064/todos/122481719#comment_204381571
// channel::chapter1::chapter2::video title 
// i.e. ucl::goal-of-the-week::Nani v NK Maribor
// 
// external domain::video title
// i.e. nissan.de::Nani gegen NK Maribor

// uefa has started to use the iframed jwplayer both internally and externally
// due to the fact that most data sources are scraped from the parent window when
// framed, we'll have to try reach out to parent window and refer b to the top
// window's utag.data layer. If this trick fails to work, we need to find another
// way
if (/includerjw\.html/.test(document.URL)) {
  
  // suppress implicit page view recording from within the iframe
  window.xtnopage = "1"; 
  
  try {
    
    // this will only work on uefa.com videos and fail for all other domains
    if (parent && parent.window.utag.data) {
      
      // take a copy (do NOT make a reference to parent data layer)
      var property;
      
      for (property in parent.window.utag.data) {
        
        if (parent.window.utag.data.hasOwnProperty(property)) {
          
          // only interested in bruno's data sources so we'll avoid the dot ones
          if (/[.]/.test(property) === false) {
            
            b[property] = parent.window.utag.data[property];
          }
        }
      }
    }
  }
  catch(e) {
    
    // do something else
  }
}


// @todo: site_id_2 extension should be setting this in a pre-loader scope
// currently there are dependencies between extension order which is bad
var site = b["site_id_2"] || "UNKNOWN_SITE_ID_2";

var video_prefix = "", prefixes = [];
 
if (b["channel"] && b["channel"] !== "") {
 
  prefixes.push(b["channel"]); 
}

if (b["subSection1"] && b["subSection1"] !== "") {
  
  prefixes.push(b["subSection1"]);
}

if (b["subSection2"] && b["subSection2"] !== "") {
  
  prefixes.push(b["subSection2"]);
}

if (prefixes.length > 0) {
 
  video_prefix = prefixes.join("::");
}

// @todo: partner detection extension should be setting this in a pre-loader scope
// currently there are dependencies between extension order which is bad
var partners = b["partners"] || "";

var external = false;


//if OVPlayer.parentLocation (URL) is populated , this is an external domain
// warning: deltatre sometimes pass in a boolean in OVPlayer.parentLocation,
// sometimes document.URL
var domain = window.OVPlayer ? window.OVPlayer.parentLocation : "";

if (toType(domain) === "string" && domain !== "") {

  // extract the main domain, that going to be used in the page name as first chapter in ATI
  domain = domain.match(/(?:https?:\/\/)?(?:www\.)?(.*?)\//)[1];

  if (new RegExp(domain, "i").test(document.domain) === false) {
    
    external = true;
    
    // regarding the JWPlayer on external pages, on ATI + Site Id 2 (s2) = 22
    site = "22";
    
    video_prefix = domain;
  }
}

window.utag.uefa.video.atinternet.play = function(e, player) {

  e.stopPropagation();

  log("AT Internet Extension :: videoplayer play", player);

  var video_title = video_prefix + "::" + (window.OVPlayer ? window.OVPlayer.videoTitle : player.title);

  // force at-internet library to refresh rate 25/50/75/100
  var refreshrate = Math.round(player.duration / 4);

  window.xt_rm(
    "video", site, video_title + (partners ? "&x6=" + partners : ""), "play",
    "0", refreshrate, player.duration, "rmp=" + player.elapsedtime + "&rmpf=" + player.elapsedtime + "&rmbufp=0",
    "", "1", external ? "ext" : "int", player.type, "300", "7"
  );

};

window.jQuery("#tealium-videoplayer").on("tealium-uefa-video-player-play", window.utag.uefa.video.atinternet.play); // new
window.jQuery(window.utag.uefa.video).on("tealium-uefa-video-player-play", window.utag.uefa.video.atinternet.play); // legacy


////////////////////////////////////////////////////////////////////////////////


window.utag.uefa.video.atinternet.pause = function(e, player) {

  e.stopPropagation();

  log("AT Internet Extension :: videoplayer paused", player);

  var video_title = video_prefix + "::" + (window.OVPlayer ? window.OVPlayer.videoTitle : player.title);
  
  // force at-internet library to refresh rate 25/50/75/100
  var refreshrate = Math.round(player.duration / 4);

  window.xt_rm(
    "video", site, video_title + (partners ? "&x6=" + partners : ""), "pause",
    "0", refreshrate, player.duration, "rmp=" + player.elapsedtime + "&rmpf=" + player.elapsedtime + "&rmbufp=0",
    "", "1", external ? "ext" : "int", player.type, "300", "7"
  );

};


window.jQuery("#tealium-videoplayer").on("tealium-uefa-video-player-paused", window.utag.uefa.video.atinternet.pause); // new
window.jQuery(window.utag.uefa.video).on("tealium-uefa-video-player-paused", window.utag.uefa.video.atinternet.pause); // legacy


////////////////////////////////////////////////////////////////////////////////


window.utag.uefa.video.atinternet.stop = function(e, player) {

  e.stopPropagation();

  log("AT Internet Extension :: videoplayer stopped", player);
  
  var video_title = video_prefix + "::" + (window.OVPlayer ? window.OVPlayer.videoTitle : player.title);
  
  var refreshrate = Math.round(player.duration / 4);

  window.xt_rm(
    "video", site, video_title + (partners ? "&x6=" + partners : ""), "stop",
    "0", refreshrate, player.duration, "rmp=" + player.elapsedtime + "&rmpf=" + player.elapsedtime + "&rmbufp=0",
    "", "1", external ? "ext" : "int", player.type, "300", "7"
  );

};

window.jQuery("#tealium-videoplayer").on("tealium-uefa-video-player-stopped", window.utag.uefa.video.atinternet.stop); // new
window.jQuery(window.utag.uefa.video).on("tealium-uefa-video-player-stopped", window.utag.uefa.video.atinternet.stop); // legacy


////////////////////////////////////////////////////////////////////////////////


window.utag.uefa.video.atinternet.finish = function(e, player) {

  e.stopPropagation();

  log("AT Internet Extension :: videoplayer finished", player);
  
  var video_title = video_prefix + "::" + (window.OVPlayer ? window.OVPlayer.videoTitle : player.title);
  
  // force at-internet library to refresh rate 25/50/75/100
  var refreshrate = Math.round(player.duration / 4);

  window.xt_rm(
    "video", site, video_title + (partners ? "&x6=" + partners : ""), "stop",
    "0", refreshrate, player.duration, "rmp=" + player.elapsedtime + "&rmpf=" + player.elapsedtime + "&rmbufp=0",
    "", "1", external ? "ext" : "int", player.type, "300", "7"
  );

};

window.jQuery("#tealium-videoplayer").on("tealium-uefa-video-player-finished", window.utag.uefa.video.atinternet.finish); // new
window.jQuery(window.utag.uefa.video).on("tealium-uefa-video-player-finished", window.utag.uefa.video.atinternet.finish); // legacy


////////////////////////////////////////////////////////////////////////////////


window.utag.uefa.video.atinternet.milestone = function(e, player) {

  e.stopPropagation();

  log("AT Internet Extension :: videoplayer " + player.milestone + "milestone", player);
  
};

window.jQuery("#tealium-videoplayer").on("tealium-uefa-video-player-milestone", window.utag.uefa.video.atinternet.milestone); // new
window.jQuery(window.utag.uefa.video).on("tealium-uefa-video-player-milestone", window.utag.uefa.video.atinternet.milestone); // legacy
  

////////////////////////////////////////////////////////////////////////////////


window.utag.uefa.video.atinternet.timeshift = function(e, player) {

  e.stopPropagation();

  log("AT Internet Extension :: videoplayer timeshifted", player);
    
  var video_title = video_prefix + "::" + (window.OVPlayer ? window.OVPlayer.videoTitle : player.title);

  // force at-internet library to refresh rate 25/50/75/100
  var refreshrate = Math.round(player.duration / 4);

  window.xt_rm(
    "video", site, video_title + (partners ? "&x6=" + partners : ""), "move",
    "0", refreshrate, player.duration, "rmp=" + player.elapsedtime + "&rmpf=" + player.grabbedtime + "&rmbufp=0",
    "", "1", external ? "ext" : "int", player.type, "300", "7"
  );
};

window.jQuery("#tealium-videoplayer").on("tealium-uefa-video-player-timeshifted", window.utag.uefa.video.atinternet.timeshift); // new
window.jQuery(window.utag.uefa.video).on("tealium-uefa-video-player-timeshifted", window.utag.uefa.video.atinternet.timeshift); // legacy


////////////////////////////////////////////////////////////////////////////////


window.utag.uefa.video.atinternet.mute = function(e, player) {

  e.stopPropagation();

  log("AT Internet Extension :: videoplayer muted", player);

};

window.jQuery("#tealium-videoplayer").on("tealium-uefa-video-player-muted", window.utag.uefa.video.atinternet.mute); // new
window.jQuery(window.utag.uefa.video).on("tealium-uefa-video-player-muted", window.utag.uefa.video.atinternet.mute); // legacy
},
function(a,b){
/*
* @original author: Bruno - tealium, inc
* @author: Simon Browning - tealium, inc.
*
* @extension name: Fantasy & eqfantasy Button tracking
*
* @modification date: 2014.10.28
* @modification date: 2014.11.11 - converted jQuery handlers
* @task: UCL Fantasy - Name of parameter incorrect
* https://basecamp.com/2555704/projects/6632064/todos/131338552
*
* extension scope: at internet
*
**/


/*
* Rewritten jQuery handler for "Enter Team" button
* Take the first 2|3 letters from the domain and dynamically use that for the path
* Grab the site_id_2 from utag.data
* update jQuery selector
*/
jQuery(document.body).on('mousedown','div.ctv-gameContent button#addBasketPay',function() {

	//Dynamically take the 
	var domain = document.domain,
	path = "::fantasy::pick_a_team::enter_team",
	prefix = domain.match(/^\w+\.(\w+)fantasy/)[1],
	ati_acct = utag.data.site_id_2;

	//Send ATi request
	if (typeof window.xt_med === "function") {
		
		window.xtclzone = 0;
		window.xt_med("C", ati_acct, (prefix+path), "A");
		window.xtclzone = window.scriptOnClickZone || 0;
	} else {
		console.log("xt_med not present, aborting");
	}

});



//Next step, pick your team

// jQuery("span:contains('Next step, pick your team')").click(function() {

// 	//Dynamically take the 
// 	var domain = document.domain,
// 	path = "::fantasy::pick_a_team::Next_step_pick_your_team",
// 	prefix = domain.match(/^\w+\.(\w+)fantasy/)[1],
// 	ati_acct = utag.data.site_id_2;

// 	//Send ATi request
// 	if (typeof window.xt_med === "function") {
		
// 		window.xtclzone = 0;
// 		window.xt_med("C", ati_acct, (prefix+path), "A");
// 		window.xtclzone = window.scriptOnClickZone || 0;
// 	} else {
// 		console.log("xt_med not present, aborting");
// 	}
// });



//Make Transfers
if (document.URL.indexOf("selecttransfers") !== -1) {
	jQuery(document.body).on('mousedown', 'button#submitButton', function() {

		var domain = document.domain,
			path = "::fantasy::transfer::make_transfer",
			prefix = domain.match(/^\w+\.(\w+)fantasy/)[1],
			ati_acct = utag.data.site_id_2;
		if (typeof window.xt_med === "function") {
			window.xtclzone = 0;
			window.xt_med("C", ati_acct, (prefix + path), "A");
			window.xtclzone = window.scriptOnClickZone || 0;
		} else {
			console.log("xt_med not present, aborting");
		}

	});
}
},
function(a,b){
/*
* @author: Simon Browning - tealium, inc.
*
* @extension name: careers tracking
*
* @modification date: 2014.10.08
*
* @task: uefa.com uefa.org career tracking
* https://basecamp.com/2555704/projects/6632064/todos/124546832
*
* extension scope: at internet
*
* where to find:
* Item 1 - http://www.uefa.com - footer of page
* Item 2 -3 - http://www.uefa.org - header and footer of page
* Item 4 - http://www.uefa.org/careers/job-opportunities/index.html - View UEFA EURO 2016 opportunities
* Item 5 - http://www.uefa.org/careers/job-opportunities/index.html
* Item 6 - http://www.uefa.org/careers/life-at-uefa/index.html
* Item 7 - http://www.uefa.org/careers/life-at-uefa/index.html
*/
//Item 1
if (document.domain === "www.uefa.com") {
  jQuery('body').on('mousedown', 'div.uefaorg-uefalinks ul.moreLinks li:last a[href*=careers], .quicklinks__uefa a[href*=careers]', function(e) {
    var site_id_2 = utag.data.site_id_2 || "";
    var dom = document.domain.substr(4);
    var page_name = "career::" + dom + "::bottom";
    
    window.xtclzone = 0;
    
    // at internet click tracking method
    window.xt_med("C", site_id_2, page_name, "A");
    
    window.xtclzone = window.scriptOnClickZone || 0;
  });
}

//Item 2 -3
jQuery('body').on('mousedown', 'a[href*=careers][data-track=true]', function(e) {
  var site_id_2 = utag.data.site_id_2 || "";
  var dom = document.domain.substr(4);
  var state = jQuery(this).attr('data-scope') === 'Header' ? 'top' : jQuery(this).attr('data-scope') === 'Footer' ? 'bottom' : '';
  var page_name = "career::" + dom + "::" + state;
  
  window.xtclzone = 0;
  
  // at internet click tracking method
  window.xt_med("C", site_id_2, page_name, "A");
  
  window.xtclzone = window.scriptOnClickZone || 0;
});

//Item 4
if (document.URL.indexOf('www.uefa.org/careers/job-opportunities/index.html') > -1) {
  jQuery('body').on('mousedown', 'div.eufa2016-wrap a.btn[href*="/organisation/recruitment/index.html"]', function(e) {
    var site_id_2 = utag.data.site_id_2 || "";
    var page_name = "career::uefa.org::2016-opportunities";
    
    
    window.xtclzone = 0;
    
    // at internet click tracking method
    window.xt_med("C", site_id_2, page_name, "A");
    
    window.xtclzone = window.scriptOnClickZone || 0;
  });
}

//Item 5 & 6
jQuery('div.box.jcBox.newsSlide.w3').on('mousedown', '#vpcarousel-prev,div.vpcarousel-dots li a, #vpcarousel-next', function(e) {
  var site_id_2 = utag.data.site_id_2 || "";
  var selector = "";
  var picture = "";
  
  //Find Image to be tracked
  if (e.currentTarget.classList.toString().indexOf('vpcarousel-page jcarousel-page') > -1) {
    selector = jQuery(e.currentTarget).text();
  } else if(/next/.test(e.currentTarget.className)) {
    selector = parseInt(jQuery('.vpcarousel-dots a.selected').text()) + 1;
  } else {
    selector = parseInt(jQuery('.vpcarousel-dots a.selected').text()) - 1;
  }
  picture = jQuery('#vpcarousel li[jcarouselindex=' + (selector) + '] span img').attr('alt');
  if (!picture) {
    return false;
  }
  //Set page_name based on the URL
  if(document.URL.indexOf('www.uefa.org/careers/job-opportunities/index.html') >-1){
    
    page_name = "career::uefa.org::In-the-spotlight::"+picture;
  }else if(document.URL.indexOf('www.uefa.org/careers/life-at-uefa/index.html') >-1){
    
    page_name = "career::uefa.org::Inside UEFA::"+picture;
  }else{
    
    return false;
  }
  
  window.xtclzone = 0;
  
  // at internet click tracking method
  window.xt_med("C", site_id_2, page_name, "A");
  
  window.xtclzone = window.scriptOnClickZone || 0;
})
  //Item 7
  
  if (document.URL.indexOf('www.uefa.org/careers/life-at-uefa/index.html') > -1) {
    jQuery('body').on('mousedown','div#div_liteAccordion h2',function(e) {
      var site_id_2 = utag.data.site_id_2 || "";
      var slider = jQuery(e.currentTarget.childNodes[0]).text();
      var page_name = "career::uefa.org::Values::"+slider;
      
      
      window.xtclzone = 0;
      
      // at internet click tracking method
      window.xt_med("C", site_id_2, page_name, "A");
      
      window.xtclzone = window.scriptOnClickZone || 0;
    })
      }
//Job Oppitunities
if (document.URL.indexOf('www.uefa.com/uefaeuro/finals/organisation/recruitment/index.html') > -1) {
    jQuery('body').on('mousedown','div.all-jobs-wrap a.btn[href*="/careers/job-opportunities/index.html"]',function(e) {
      var site_id_2 = utag.data.site_id_2 || "";
      var page_name = "career:uefa.org::UEFA-opportunities";
            
      window.xtclzone = 0;
      
      // at internet click tracking method
      window.xt_med("C", site_id_2, page_name, "A");
      
      window.xtclzone = window.scriptOnClickZone || 0;
    })
      }
},
function(a,b){
/*
* @author: Simon Browning - tealium, inc.
*
* @extension name: Popup Gazprom tracking
*
* @modification date: 2015.01.12
* @task: UCL Gazprom Ticket Mania Pop Up
* https://basecamp.com/2555704/projects/6632064/todos/130295262
*
* extension scope: at internet
*
**/
jQuery('body').on('mousedown','div#tm-ucl div.dv_mn_cont div.match',function() {
window.xtclzone = 0;   
    window.xt_med(
        "C", b['site_id_2'],
        "popup" + "::" +
        "Lightbox Gazprom", "A"
    );
window.xtclzone = window.scriptOnClickZone || 0;
});
},
function(a,b){
/*
* @author: Simon Browning - tealium, inc.
*
* @extension name: Registration / Login tracking
*
* https://basecamp.com/2555704/projects/6632064/todos/135667099
*
* extension scope: at internet
*
**/

//Social Login
jQuery('body').on('mousedown', 'a[class*="facebook"],a[class*="windows"],a[class*="google"],a[class*="yahoo"]', function(e) {
    
    var site_id_2 = utag.data.site_id_2 || "",$self = jQuery(this),social = $self.attr('class'),page_name,provider,type;

	provider = social.match(/(facebook|google|windows|yahoo)/)[0];
	page_name = "::id_providers::" + provider + (/^\:\:/.test(b.pageName) ? "" : "::") + b.pageName;
	if($self.closest("form#loginPopup,div.login").length>0){
		type = "login";
	}else if($self.closest("div.signup_options").length>0){
		type = "registration";
	}else if($self.closest("div.ctv-socialBar,form#gotwlogin,div.std-login").length>0 || $self.closest(".social-login-section").length >0 ){
		type = "registration_login";
	}else{
		type = "";
	}
	
  page_name = ""+type + page_name;
    
    //ATI Tracking method
    window.xtclzone = 0;
    
    // at internet click tracking method
    window.xt_med("C", site_id_2, page_name, "A");
    
    window.xtclzone = window.scriptOnClickZone || 0;
  });

//Register

jQuery('body').on('mousedown', 'div.d3cmsHeader li#registerH,div.ctv-registerText>a,div.signup_options a.create,div.login-popup p>a,a.std-login-register, fieldset.register-section>a.js-std-login-register', function(e) {
    
    var site_id_2 = utag.data.site_id_2 || "",$self = jQuery(this),page_name= "registration::",type;
		
	if($self.attr("class") == "create"){
		type = "or_create_a_new_account";
	}else if($self.attr("id") == "registerH" || /signup/i.test($self.attr('href'))){
		type = "register";
	}else{
		type = "";
	}
	
   page_name += (type+ (/^\:\:/.test(b.pageName) ? "" : "::")) + b.pageName.replace(/\s/g,'_');
    
    //ATI Tracking method
    window.xtclzone = 0;
    
    // at internet click tracking method
    window.xt_med("C", site_id_2, page_name, "A");
    
    window.xtclzone = window.scriptOnClickZone || 0;
  });

//Login

jQuery('body').on('mousedown', 'div.d3cmsHeader li#loginH,form#loginPopup a.button,button.std-login-button, .uefa-login-section>button', function(e) {
    e.stopPropagation();
    var site_id_2 = utag.data.site_id_2 || "",$self = jQuery(this),page_name= "registration::",type;
		
	if($self.attr("id") === "loginH" || this.className.indexOf("std-login-button") > -1 || $self.parent().hasClass("uefa-login-section")){
	  type = "login";
	}else if($self.closest("form#loginPopup").length > 0 && /uefa\.com$/.test(utag.data['dom.domain'])){
	  type = "uefa_com";
	}else{
		type = "";
	}
	
   page_name += (type+ (/^\:\:/.test(b.pageName) ? "" : "::")) + b.pageName.replace(/\s/g,'_');
    
    //ATI Tracking method
    window.xtclzone = 0;
    
    // at internet click tracking method
    window.xt_med("C", site_id_2, page_name, "A");
    
    window.xtclzone = window.scriptOnClickZone || 0;
  });

},
function(a,b){ try{ if(1){try{b['publish_date']=jQuery("div.pubText.pubDate:eq(0)").text().replace(/\s/g,"_").substring(0,jQuery("div.pubText.pubDate:eq(0)").text().indexOf(','))}catch(e){}} } catch(e){ utag.DB(e) }  },
function(a,b){
/*
 * @author: Simon Browning - tealium, inc.
 * @extension name: newsid + Article title (h1 class)
 * https://basecamp.com/2555704/projects/6632064/todos/149112656
 * extension scope: at internet
 */

var newsId, title, video, $span;
//Check newsId
// Update 2/06/15 to check for data attribute first then fallback to old code.
$span = jQuery("span.editorial-track");
if($span.length > 0){
 newsId = $span.data("id");
} else if (/newsid\=(\d+)\.html$/i.test(utag.data["dom.pathname"])) {
    newsId = utag.data["dom.pathname"].match(/newsid\=(\d+)\.html$/)[1];
} else if (window._newsid) {
    newsId = window._newsid;
}
b.contentId = newsId;
//Get Article Title
if (jQuery("div.topNews h1.newsTitle").length > 0) {
    title = jQuery("div.topNews h1.newsTitle").text().replace(/\s/g, "_");
} else if (jQuery("h2#vHubTitle").length > 0) {
    title = jQuery("h2#vHubTitle").text().replace(/\s/g, "_");
    video = "::video";
}
//Concat result
if (newsId && newsId !== "") {
    b.url_newsid_id = "" + newsId + "::" + title + (video ? video : "");
}

},
function(a,b){
/*
* @author: Simon Browning - tealium, inc.
* @extension name: videoId + Article title (h2 class)
* https://basecamp.com/2555704/projects/6632064/todos/163392848
* extension scope: at internet
*/

var videoId, title;
 //Check newsId
 if(/videoid\=(\d+)\.html$/i.test(utag.data["dom.pathname"])){
 	videoId = utag.data["dom.pathname"].match(/videoid\=(\d+)\.html$/)[1];
 }else if(jQuery("div.d3-plugin.ovplayer-plugin").length>0){
        videoId = jQuery("div.d3-plugin.ovplayer-plugin").data('options').videoid;	  
 }else{
     videoId = "";
 }
//Get Article Title
if(jQuery("h2#vHubTitle,h1.newsTitle").length > 0){
 	title = jQuery("h2#vHubTitle:eq(0), h1.newsTitle:eq(0)").text().replace(/\s/g,"_");
 }
//Concat result
if(videoId && videoId !== ""){
	b.url_videoid_id = ""+ videoId +"::"+ title;
}
},
function(a,b){ try{ if(1){try{b['pageName']=b.pageName.replace(/\&/g," and ")}catch(e){}} } catch(e){ utag.DB(e) }  },
function(a,b){
/*
* @author: Simon Browning - tealium, inc.
* @extension name: Parent ID new CV x13
* https://basecamp.com/2555704/projects/6632064/todos/180076243
* extension scope: at internet
*/
var $edit = jQuery("span.editorial-track");
if($edit.length > 0){
  b.parent_id = $edit.data("parent");
}
},
function(a,b){
/*
 * @author: Simon Browning - tealium, inc.
 * @extension name: Match Day Window as new CV x15
 * https://basecamp.com/2555704/projects/6632064/todos/171628719
 * extension scope: at internet
 */
var date = new Date();
b.current_date = ""+date.getUTCDate() +"/"+(date.getUTCMonth() +1)+"/"+date.getUTCFullYear();
},
function(a,b,c,d,e,f,g){d=b['current_date'];if(typeof d=='undefined')return;c=[{'1/6/2015':'NA'},{'2/6/2015':'NA'},{'3/6/2015':'NA'},{'4/6/2015':'NA'},{'5/6/2015':'NA'},{'6/6/2015':'ucl:final'},{'7/6/2015':'NA'},{'8/6/2015':'eq'},{'9/6/2015':'eq'},{'10/6/2015':'eq'},{'11/6/2015':'eq'},{'12/6/2015':'eq'},{'13/6/2015':'eq'},{'14/6/2015':'eq'},{'15/6/2015':'eq'},{'16/6/2015':'eq'},{'17/6/2015':'NA'},{'18/6/2015':'NA'},{'19/6/2015':'NA'},{'20/6/2015':'NA'},{'21/6/2015':'NA'},{'22/6/2015':'NA'},{'23/6/2015':'NA'},{'24/6/2015':'NA'},{'25/6/2015':'NA'},{'26/6/2015':'NA'},{'27/6/2015':'NA'},{'28/6/2015':'NA'},{'29/6/2015':'NA'},{'30/6/2015':'ucl:q1'},{'1/7/2015':'ucl:q1'},{'2/7/2015':'uel:q1'},{'3/7/2015':'NA'},{'4/7/2015':'NA'},{'5/7/2015':'NA'},{'6/7/2015':'NA'},{'7/7/2015':'ucl:q1'},{'8/7/2015':'ucl:q1'},{'9/7/2015':'uel:q1'},{'10/7/2015':'NA'},{'11/7/2015':'NA'},{'12/7/2015':'NA'},{'13/7/2015':'NA'},{'14/7/2015':'ucl:q2'},{'15/7/2015':'ucl:q2'},{'16/7/2015':'uel:q2'},{'17/7/2015':'NA'},{'18/7/2015':'NA'},{'19/7/2015':'NA'},{'20/7/2015':'NA'},{'21/7/2015':'ucl:q2'},{'22/7/2015':'ucl:q2'},{'23/7/2015':'uel:q2'},{'24/7/2015':'NA'},{'25/7/2015':'NA'},{'26/7/2015':'NA'},{'27/7/2015':'NA'},{'28/7/2015':'ucl:q3'},{'29/7/2015':'ucl:q3'},{'30/7/2015':'uel:q3'},{'31/7/2015':'NA'},{'1/8/2015':'NA'},{'2/8/2015':'NA'},{'3/8/2015':'NA'},{'4/8/2015':'ucl:q3'},{'5/8/2015':'ucl:q3'},{'6/8/2015':'uel:q3'},{'7/8/2015':'draw'},{'8/8/2015':'NA'},{'9/8/2015':'NA'},{'10/8/2015':'NA'},{'11/8/2015':'supercup'},{'12/8/2015':'NA'},{'13/8/2015':'NA'},{'14/8/2015':'NA'},{'15/8/2015':'NA'},{'16/8/2015':'NA'},{'17/8/2015':'NA'},{'18/8/2015':'ucl:po'},{'19/8/2015':'ucl:po'},{'20/8/2015':'uel:po'},{'21/8/2015':'NA'},{'22/8/2015':'NA'},{'23/8/2015':'NA'},{'24/8/2015':'NA'},{'25/8/2015':'ucl:po'},{'26/8/2015':'ucl:po'},{'27/8/2015':'uel:po'},{'28/8/2015':'draw'},{'29/8/2015':'draw'},{'30/8/2015':'NA'},{'31/8/2015':'eq'},{'1/9/2015':'eq'},{'2/9/2015':'eq'},{'3/9/2015':'eq'},{'4/9/2015':'eq'},{'5/9/2015':'eq'},{'6/9/2015':'eq'},{'7/9/2015':'eq'},{'8/9/2015':'eq'},{'9/9/2015':'NA'},{'10/9/2015':'NA'},{'11/9/2015':'NA'},{'12/9/2015':'NA'},{'13/9/2015':'NA'},{'14/9/2015':'NA'},{'15/9/2015':'ucl:md1'},{'16/9/2015':'ucl:md1'},{'17/9/2015':'uel:md1'},{'18/9/2015':'NA'},{'19/9/2015':'NA'},{'20/9/2015':'NA'},{'21/9/2015':'NA'},{'22/9/2015':'NA'},{'23/9/2015':'NA'},{'24/9/2015':'NA'},{'25/9/2015':'NA'},{'26/9/2015':'NA'},{'27/9/2015':'NA'},{'28/9/2015':'NA'},{'29/9/2015':'ucl:md2'},{'30/9/2015':'ucl:md2'},{'1/10/2015':'uel:md2'},{'2/10/2015':'NA'},{'3/10/2015':'NA'},{'4/10/2015':'NA'},{'5/10/2015':'eq'},{'6/10/2015':'eq'},{'7/10/2015':'eq'},{'8/10/2015':'eq'},{'9/10/2015':'eq'},{'10/10/2015':'eq'},{'11/10/2015':'eq'},{'12/10/2015':'eq'},{'13/10/2015':'eq'},{'14/10/2015':'NA'},{'15/10/2015':'draw'},{'16/10/2015':'NA'},{'17/10/2015':'NA'},{'18/10/2015':'NA'},{'19/10/2015':'NA'},{'20/10/2015':'ucl:md2'},{'21/10/2015':'ucl:md2'},{'22/10/2015':'uel:md2'},{'23/10/2015':'NA'},{'24/10/2015':'NA'},{'25/10/2015':'NA'},{'26/10/2015':'NA'},{'27/10/2015':'NA'},{'28/10/2015':'NA'},{'29/10/2015':'NA'},{'30/10/2015':'NA'},{'31/10/2015':'NA'},{'1/11/2015':'NA'},{'2/11/2015':'NA'},{'3/11/2015':'ucl:md2'},{'4/11/2015':'ucl:md2'},{'5/11/2015':'uel:md2'},{'6/11/2015':'NA'},{'7/11/2015':'NA'},{'8/11/2015':'NA'},{'9/11/2015':'eq'},{'10/11/2015':'eq'},{'11/11/2015':'eq'},{'12/11/2015':'eq'},{'13/11/2015':'eq'},{'14/11/2015':'eq'},{'15/11/2015':'eq'},{'16/11/2015':'eq'},{'17/11/2015':'eq'},{'18/11/2015':'NA'},{'19/11/2015':'NA'},{'20/11/2015':'NA'},{'21/11/2015':'NA'},{'22/11/2015':'NA'},{'23/11/2015':'NA'},{'24/11/2015':'ucl:md2'},{'25/11/2015':'ucl:md2'},{'26/11/2015':'uel:md2'},{'27/11/2015':'NA'},{'28/11/2015':'NA'},{'29/11/2015':'NA'},{'30/11/2015':'NA'},{'1/12/2015':'NA'},{'2/12/2015':'NA'},{'3/12/2015':'NA'},{'4/12/2015':'NA'},{'5/12/2015':'NA'},{'6/12/2015':'NA'},{'7/12/2015':'NA'},{'8/12/2015':'ucl:md2'},{'9/12/2015':'ucl:md2'},{'10/12/2015':'uel:md2'},{'11/12/2015':'NA'},{'12/12/2015':'draw'},{'13/12/2015':'NA'},{'14/12/2015':'NA'},{'15/12/2015':'NA'},{'16/12/2015':'NA'},{'17/12/2015':'NA'},{'18/12/2015':'NA'},{'19/12/2015':'NA'},{'20/12/2015':'NA'},{'21/12/2015':'NA'},{'22/12/2015':'NA'},{'23/12/2015':'NA'},{'24/12/2015':'NA'},{'25/12/2015':'NA'},{'26/12/2015':'NA'},{'27/12/2015':'NA'},{'28/12/2015':'NA'},{'29/12/2015':'NA'},{'30/12/2015':'NA'},{'31/12/2015':'NA'},{'1/1/2016':'NA'},{'2/1/2016':'NA'},{'3/1/2016':'NA'},{'4/1/2016':'NA'},{'5/1/2016':'NA'},{'6/1/2016':'NA'},{'7/1/2016':'NA'},{'8/1/2016':'NA'},{'9/1/2016':'NA'},{'10/1/2016':'NA'},{'11/1/2016':'NA'},{'12/1/2016':'NA'},{'13/1/2016':'NA'},{'14/1/2016':'NA'},{'15/1/2016':'NA'},{'16/1/2016':'NA'},{'17/1/2016':'NA'},{'18/1/2016':'NA'},{'19/1/2016':'NA'},{'20/1/2016':'NA'},{'21/1/2016':'NA'},{'22/1/2016':'NA'},{'23/1/2016':'NA'},{'24/1/2016':'NA'},{'25/1/2016':'NA'},{'26/1/2016':'NA'},{'27/1/2016':'NA'},{'28/1/2016':'NA'},{'29/1/2016':'NA'},{'30/1/2016':'NA'},{'31/1/2016':'NA'},{'1/2/2016':'NA'},{'2/2/2016':'NA'},{'3/2/2016':'NA'},{'4/2/2016':'NA'},{'5/2/2016':'NA'},{'6/2/2016':'NA'},{'7/2/2016':'NA'},{'8/2/2016':'NA'},{'9/2/2016':'NA'},{'10/2/2016':'NA'},{'11/2/2016':'NA'},{'12/2/2016':'NA'},{'13/2/2016':'NA'},{'14/2/2016':'NA'},{'15/2/2016':'NA'},{'16/2/2016':'ucl:1_8'},{'17/2/2016':'ucl:1_8'},{'18/2/2016':'uel:1_8'},{'19/2/2016':'NA'},{'20/2/2016':'NA'},{'21/2/2016':'NA'},{'22/2/2016':'NA'},{'23/2/2016':'ucl:1_8'},{'24/2/2016':'ucl:1_8'},{'25/2/2016':'uel:1_8'},{'26/2/2016':'NA'},{'27/2/2016':'NA'},{'28/2/2016':'NA'},{'29/2/2016':'NA'},{'1/3/2016':'NA'},{'2/3/2016':'NA'},{'3/3/2016':'NA'},{'4/3/2016':'NA'},{'5/3/2016':'NA'},{'6/3/2016':'NA'},{'7/3/2016':'NA'},{'8/3/2016':'ucl:1_8'},{'9/3/2016':'ucl:1_8'},{'10/3/2016':'uel:1_8'},{'11/3/2016':'NA'},{'12/3/2016':'NA'},{'13/3/2016':'NA'},{'14/3/2016':'NA'},{'15/3/2016':'ucl:1_8'},{'16/3/2016':'ucl:1_8'},{'17/3/2016':'uel:1_8'},{'18/3/2016':'draw'},{'19/3/2016':'NA'},{'20/3/2016':'NA'},{'21/3/2016':'eq'},{'22/3/2016':'eq'},{'23/3/2016':'eq'},{'24/3/2016':'eq'},{'25/3/2016':'eq'},{'26/3/2016':'eq'},{'27/3/2016':'eq'},{'28/3/2016':'eq'},{'29/3/2016':'eq'},{'30/3/2016':'NA'},{'31/3/2016':'NA'},{'1/4/2016':'NA'},{'2/4/2016':'NA'},{'3/4/2016':'NA'},{'4/4/2016':'NA'},{'5/4/2016':'ucl:1_4'},{'6/4/2016':'ucl:1_4'},{'7/4/2016':'uel:1_4'},{'8/4/2016':'NA'},{'9/4/2016':'NA'},{'10/4/2016':'NA'},{'11/4/2016':'NA'},{'12/4/2016':'ucl:1_4'},{'13/4/2016':'ucl:1_4'},{'14/4/2016':'uel:1_4'},{'15/4/2016':'draw'},{'16/4/2016':'NA'},{'17/4/2016':'NA'},{'18/4/2016':'NA'},{'19/4/2016':'NA'},{'20/4/2016':'NA'},{'21/4/2016':'NA'},{'22/4/2016':'NA'},{'23/4/2016':'NA'},{'24/4/2016':'NA'},{'25/4/2016':'NA'},{'26/4/2016':'ucl:1_2'},{'27/4/2016':'ucl:1_2'},{'28/4/2016':'uel:1_2'},{'29/4/2016':'NA'},{'30/4/2016':'NA'},{'1/5/2016':'NA'},{'2/5/2016':'NA'},{'3/5/2016':'ucl:1_2'},{'4/5/2016':'ucl:1_2'},{'5/5/2016':'uel:1_2'},{'6/5/2016':'NA'},{'7/5/2016':'NA'},{'8/5/2016':'NA'},{'9/5/2016':'NA'},{'10/5/2016':'NA'},{'11/5/2016':'NA'},{'12/5/2016':'NA'},{'13/5/2016':'NA'},{'14/5/2016':'NA'},{'15/5/2016':'NA'},{'16/5/2016':'NA'},{'17/5/2016':'NA'},{'18/5/2016':'uel:final'},{'19/5/2016':'NA'},{'20/5/2016':'NA'},{'21/5/2016':'NA'},{'22/5/2016':'NA'},{'23/5/2016':'NA'},{'24/5/2016':'NA'},{'25/5/2016':'NA'},{'26/5/2016':'NA'},{'27/5/2016':'NA'},{'28/5/2016':'ucl:final'},{'29/5/2016':'NA'},{'30/5/2016':'NA'},{'31/5/2016':'NA'},{'1/6/2016':'NA'},{'2/6/2016':'NA'},{'3/6/2016':'NA'},{'4/6/2016':'NA'},{'5/6/2016':'NA'},{'6/6/2016':'NA'},{'7/6/2016':'NA'},{'8/6/2016':'NA'},{'9/6/2016':'NA'},{'10/6/2016':'euro:day1'},{'11/6/2016':'euro:day2'},{'12/6/2016':'euro:day3'},{'13/6/2016':'euro:day4'},{'14/6/2016':'euro:day5'},{'15/6/2016':'euro:day6'},{'16/6/2016':'euro:day7'},{'17/6/2016':'euro:day8'},{'18/6/2016':'euro:day9'},{'19/6/2016':'euro:day10'},{'20/6/2016':'euro:day11'},{'21/6/2016':'euro:day12'},{'22/6/2016':'euro:day13'},{'23/6/2016':'euro:day14'},{'24/6/2016':'euro:day15'},{'25/6/2016':'euro:day16'},{'26/6/2016':'euro:day17'},{'27/6/2016':'euro:day18'},{'28/6/2016':'euro:day19'},{'29/6/2016':'euro:day20'},{'30/6/2016':'euro:day21'},{'1/7/2016':'euro:day22'},{'2/7/2016':'euro:day23'},{'3/7/2016':'euro:day24'},{'4/7/2016':'euro:day25'},{'5/7/2016':'euro:day26'},{'6/7/2016':'euro:day27'},{'7/7/2016':'euro:day28'},{'8/7/2016':'euro:day29'},{'9/7/2016':'euro:day30'},{'10/7/2016':'euro:final'}];var m=false;for(e=0;e<c.length;e++){for(f in c[e]){if(d==f){b['match_day']=c[e][f];m=true};};if(m)break};if(!m)b['match_day']='';},
function(a,b){
/*
 * @author: Simon Browning - tealium, inc.
 * @extension name: Match Day Window as new CV x15
 * https://basecamp.com/2555704/projects/6632064/todos/171628719
 * extension scope: at internet
 */
//remove default value set by lookup table
if(b.match_day === "NA"){
  b.match_day = "";
}
},
function(a,b,c,d,e,f,g){d=b['current_date'];if(typeof d=='undefined')return;c=[{'16/9/2015':'Mastercard'},{'30/9/2015':'Mastercard'},{'20/10/2015':'Mastercard'},{'3/11/2015':'Mastercard'},{'25/11/2015':'Mastercard'},{'9/12/2015':'Mastercard'},{'15/9/2015':'Adidas'},{'29/9/2015':'Adidas'},{'21/10/2015':'Adidas'},{'4/11/2015':'Adidas'},{'24/11/2015':'Adidas'},{'8/12/2015':'Adidas'},{'16/2/2016':'Mastercard'},{'24/2/2016':'Mastercard'},{'8/3/2016':'Mastercard'},{'16/3/2016':'Mastercard'},{'17/2/2016':'Adidas'},{'23/2/2016':'Adidas'},{'9/3/2016':'Adidas'},{'15/3/2016':'Adidas'}];var m=false;for(e=0;e<c.length;e++){for(f in c[e]){if(d==f){b['hompage_takeover']=c[e][f];m=true};};if(m)break};if(!m)b['hompage_takeover']='';},
function(a,b){
/*
 * @author: Simon Browning - tealium, inc.
 * @extension name: Homepage takeover / partner x6 extra extention
 * https://basecamp.com/2555704/projects/6632064/todos/196106518
 * extension scope: at internet
 */
//only set on homepage
if(b['dom.pathname'] !== "/uefachampionsleague/index.html"){
  b.hompage_takeover = "";
}
},
function(a,b){
/*
* @author: Simon Browning - tealium, inc.
*
* @extension name: Logo click tracking
*
* https://basecamp.com/2555704/projects/6632064/todos/180708103
*
* extension scope: AT Internet
*
**/
jQuery("*[data-sponsor]").on("click",function(){
  this.target="_self";
  var sponsor = "PUB-["+jQuery(this).data("sponsor")+"]-["+(b.channel || "none")+"]-["+jQuery(this).data("scope")+"]-["+b.pageName+"]";
  xt_adc(this,sponsor);
});
},
function(a,b){
var loadTest = document.location.pathname.indexOf("tagloadtest_index.html");
if(loadTest > 0) {
  window.xtsite = window.xt8 = "545641";
  window.xt8b = "s="+window.xt8;
}
},
function(a,b){ try{ if(/^\/uefaeuro\//i.test(b['dom.pathname'])||b['dom.url'].toString().indexOf('eurofantasy.uefa.com')>-1||b['dom.url'].toString().indexOf('europredictor.uefa.com')>-1||b['dom.url'].toString().indexOf('alltime11.uefa.com')>-1){try{b['user_sgmt_pref_team']=$('.team-favourite-link').attr('title') || ""}catch(e){}} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if(/cn$/i.test(b['dom.domain'])){b['url_language_code']='cn'} } catch(e){ utag.DB(e) }  }];


    u.send = function(a,b,c,d,e,f) {

      if (u.ev[a] || typeof u.ev.all != "undefined") {

        for(c=0;c<u.extend.length;c++){try{d=u.extend[c](a,b);if(d==false)return}catch(e){}};
        
        // view requests
        if (a === "view") {

          c=[];
          for(d in utag.loader.GV(u.map)) {
            if(typeof b[d]!="undefined"&&b[d]!="") {
              e=u.map[d].split(",");
              for(f=0;f<e.length;f++){
                if(e[f]=='xtpage'){xtpage=b[d]}
                else if(e[f]=='xtdi'){xtdi=b[d]}
                else if(e[f].match(/x[0-9]/)){xt_multc+='&'+e[f]+'='+b[d]}
                else if(e[f]=='xt_an'){xt_an=b[d]}
                else if(e[f]=='xt_ac'){xt_ac=b[d]}
                else if(e[f]=='xt_orderid'){xt_orderid=b[d]}
                else if(e[f]=='xt_newcus'){xt_newcus=b[d]}
                else if(e[f]=='xt_roimt'){xt_roimt=b[d]}
                else if(e[f]=='xt_totalTF'){xt_totalTF=b[d]}
                else if(e[f]=='xt_totalATI'){xt_totalATI=b[d]}
                else if(e[f]=='xt_shipATI'){xt_shipATI=b[d]}
                else if(e[f]=='xt_shipTF'){xt_shipTF=b[d]}
                else if(e[f]=='xtn2'){xtn2=b[d]}
                else if(e[f]=='xt_tax'){xt_tax=b[d]}
                else if(e[f]=='xt_paym'){xt_paym=b[d]}
                else if(e[f]=='xt_status'){xt_status=b[d]}
                else if(e[f]=='xt_delivery'){xt_delivery=b[d]}
                else if(e[f]=='xt_promocode'){xt_promocode=b[d]}
                else if(e[f]=='xt_discountATI'){xt_discountATI=b[d]}
                else if(e[f]=='xt_discountTF'){xt_discountTF=b[d]}
                else if(e[f]=='xtidcart'){xtidcart=b[d]}
                else if(e[f]=='xt_aisle'){xt_aisle=b[d];c.push('aisl='+xt_aisle);}
                else if(e[f].match(/o[0-6]/)){xt_ordermc+='&'+e[f]+'='+b[d]}
                else{window[e[f]] = b[d]}
              }
            }
          }
          if(xt_an==''){xt_an=b._ccustid};
          c.push('ac='+xt_ac+'&an='+xt_an+xt_multc);
          if(b._corder || xt_orderid){
            if(b._ctax=='')b._ctax='0';
            if(b._cship=='')b._cship='0';
            if(typeof xt_orderid=='undefined'){xt_orderid=b._corder};c.push("cmd="+xt_orderid);
            if(typeof xt_newcus=='undefined'){xt_newcus="1"};c.push("newcus="+xt_newcus);
            if(typeof xt_roimt=='undefined'){xt_roimt=b._ctotal};c.push("roimt="+xt_roimt);
            if(typeof xt_totalTF=='undefined'){xt_totalTF=b._csubtotal};c.push("mtht="+xt_totalTF);
            if(typeof xt_totalATI=='undefined'){xt_totalATI=b._ctotal};c.push("mtttc="+xt_totalATI);
            if(typeof xt_shipATI=='undefined'){xt_shipATI=""+(parseInt(b._cship)+parseInt(b._ctax))};c.push("fp="+xt_shipATI);
            if(typeof xt_shipTF=='undefined'){xt_shipTF=b._cship};c.push("fpht="+xt_shipTF);
            if(typeof xt_tax=='undefined'){xt_tax=b._ctax};c.push("tax="+xt_tax);
            if(typeof xt_paym=='undefined'){xt_paym="1"};c.push("mp="+xt_paym);
            if(typeof xt_status=='undefined'){xt_status="1"};c.push("st="+xt_status);
            if(typeof xt_delivery=='undefined'){xt_delivery="1"};c.push("dl="+xt_delivery);
            if(typeof xt_promocode=='undefined'){xt_promocode=b._cpromo};c.push("pcd="+xt_promocode);
            if(typeof xt_discountATI=='undefined'){xt_discountATI=""+parseInt(b._ctax)};c.push("dsc="+xt_discountATI);
            if(typeof xt_discountTF=='undefined'){xt_discountTF="0"};c.push("dscht="+xt_discountTF);
            if(typeof xtidcart=='undefined'){xtidcart=b['cp.utag_main_ses_id']};c.push("idcart="+xtidcart+xt_ordermc);
          }

          if(xttp=='cart' || xt_orderid){
            xt_cart=new Function("for(var d=0;d<utag.data._cprod.length;d++){xt_addProduct_v2(utag.data._ccat[d],utag.data._cprod[d],utag.data._cquan[d],utag.data._cprice[d],utag.data._cprice[d],utag.data._cpdisc[d],utag.data._cpdisc[d])};");
          }

          if (window.xtparam!=null){
            window.xtparam+='&'+c.join(u.qsp_delim);
          } 
          else{
            window.xtparam = '&'+c.join(u.qsp_delim);
          }
          
        }
        // link
        else if (a === "link") {

          // xiti_link_category
          // - C = "click"
          // - F = "flash"

          // xiti_link_type
          // "T" = Download
          // "S" = Exit
          // "A" = Action
          // "N" = Navigation
          var destination, value, linktype, linkcategory, linklabel, parameters = [];

          for(d in utag.loader.GV(u.map)) {

            if (typeof b[d] !== "undefined" && b[d] !== "") {
            
              e = u.map[d].split(",");
            
              for(f=0; f < e.length; f++) {

                destination = e[f];

                value = b[d];

                if (destination === "linktype") {

                  linktype = value;
                } 
                else if (destination === "linkcategory") {

                  linkcategory = value;
                }
                else if(destination === "linklabel") {

                  linklabel = value;
                }
                else {

                  //"download"
                  //"document/413"
                  //"perform mobile.pdf/no file title"
                  parameters.push(value);
                }
              }
            }
          }

          if (linktype !== undefined && linkcategory !== undefined) {

            // Structure of the dynamic variables
            // In order to dynamically control each xt_med() variable all you need to do is populate them in the following names:
            // type: type of the item to be tracked. Enter the value of ‘C’ to show that it is a click measurement.
            // xtn2: level 2 site in which the content is stored.
            // clicname: click label (use “::” if necessary).
            // clic : type of click to be tracked (with 4 values to be entered: S for Exit, N for Navigation, T for Download and A for Action).
            // url: to specify a destination URL after a click (optional).
            // window: enter the value ‘newWin’ if a new window opens after a click (optional).
            if (typeof window.xt_med === "function") {
              
              // temporarely de-activate all click tracking
              // this is needed for the method xt_med to fire correctly with
              // custom link tracking requests such as these
              window.xtclzone = 0;

              if (linklabel !== undefined) {

                window.xt_med(linkcategory, xtn2, linklabel, linktype);  
              }
              else {

                window.xt_med(linkcategory, xtn2, parameters.join("::"), linktype);  
              }

              // activate all click tracking again
              window.xtclzone = window.scriptOnClickZone || 0;
            }
          }
        }
      }
    };
    
    try {
      utag.o[loader].loader.LOAD(id);
    }
    catch(e) {
      utag.loader.LOAD(id);
    }
    
})('3','uefa.poc');

}
catch(e){

}

// START of vendor code ////////////////////////////////////////////////////////

//-- AT Ergonomics A-B-C 3.2.004 -- Copyright 2013 AT INTERNET, All Rights Reserved.
//-- (to be used with AT Tag 3.3.001 or later)
var scriptOnClickZone=2,xtautoredir=true,xtczv='32004',xtdtmp=0,xtdt2=new Date(),xtel=new xtE(xtdt2.getTime()),xtn=navigator,un=undefined,nu=null,cZ='xtcz',oC='onclick',cL='xtclib',cT='xtcltype',dT='xtdztype',tR=true,fA=false,isI=(/MSIE/.test(xtn.userAgent))?tR:fA,isOP=(/Opera/.test(xtn.userAgent))?tR:fA,isS=(/Safari/.test(xtn.userAgent))?tR:fA,isM=(xtn.appVersion.indexOf('Mac',0)>=0)?tR:fA,xtobj=new Array(),xtcz=new Array(),typcz=new Array(),sizex=new Array(),sizey=new Array(),posx=new Array(),posy=new Array(),larg=0,haut=0,xt_valdz=nu,hit=fA,fO=fA,xt_valsv=nu;
var timecz=new Array(),timerefcz=new Array(),timercz=new Array(),xttime=typeof(window['xttimez'])!='undefined'?window['xttimez']:5,xtczdom;
function xtP(oEl,inTYPE){if(typeof(oEl.offsetParent)!=un){var sType='oEl.offset'+inTYPE;for(var iVal=0;oEl;oEl=oEl.offsetParent){iVal+=eval(sType)}return iVal}else{if(inTYPE=='Left')return oEl.x;if(inTYPE=='Top')return oEl.y}return-1}
function xtSx(xl){var szx=(xtnN(xl)=='AREA')?xtAs(xl).w:xl.offsetWidth;if((szx==nu)||(szx==un)||(szx=='')){if(xl.style.width!=nu)szx=xl.style.width;else szx=0}if(isS&&isM&&(xtnN(xl)=='TR')&&(xl.firstChild!=nu)&&(xl.lastChild!=nu))szx=xl.lastChild.offsetLeft+xl.lastChild.offsetWidth-xl.firstChild.offsetLeft;if((szx==nu)||(szx==un)||(szx=='')){szx=0}return parseInt(szx,10)}
function xtSy(xl){var szy=(xtnN(xl)=='AREA')?xtAs(xl).h:xl.offsetHeight;if((szy==nu)||(szy==un)||(szy=='')){if(xl.style.height!=nu)szy=xl.style.height;else szy=0}if(isS&&isM&&(xtnN(xl)=='TR')&&(xl.firstChild!=nu)&&(xl.lastChild!=nu))szy=xl.lastChild.offsetTop+xl.lastChild.offsetHeight-xl.firstChild.offsetTop;if((szy==nu)||(szy==un)||(szy=='')){szy=0}return parseInt(szy,10)}
function xtPx(xl){var psx=(xtnN(xl)=='AREA')?xtAp(xl).x:xtP(xl,'Left');return parseInt(psx,10)}
function xtPy(xl){var psy=(xtnN(xl)=='AREA')?xtAp(xl).y:xtP(xl,'Top');if(isS&&isM&&(xtnN(xl)=='TR')&&(xl.firstChild!=nu))psy+=xl.firstChild.offsetTop;return parseInt(psy,10)}
function xtAs(xl){var rect=xtAb(xl),width=rect.right-rect.left,height=rect.bottom-rect.top;return{w:width,h:height}}
function xtAb(xl){if(xl['rectDefined'])return{left:xl.rLeft,top:xl.rTop,right:xl.rRight,bottom:xl.rBottom};if(!xl.shape)xl.shape='rect';var coords=xl.coords.split(','),result;if(xl.shape.toLowerCase()=='rectangle'||xl.shape.toLowerCase()=='rect'){result={left:parseInt(coords[0]),top:parseInt(coords[1]),right:parseInt(coords[2]),bottom:parseInt(coords[3])}}if(xl.shape.toLowerCase()=='circle'||xl.shape.toLowerCase()=='circ'){result={left:parseInt(coords[0])-parseInt(coords[2]),top:parseInt(coords[1])-parseInt(coords[2]),right:parseInt(coords[0])+parseInt(coords[2]),bottom:parseInt(coords[1])+parseInt(coords[2])}}if(xl.shape.toLowerCase()=='polygon'||xl.shape.toLowerCase()=='poly'){var l_ex,t_ex,r_ex,b_ex;for(var i=0;i<coords.length;i+=2){var co=parseInt(coords[i]);if(l_ex==un||co<l_ex)l_ex=co;if(r_ex==un||co>r_ex)r_ex=co}for(var i=1;i<coords.length;i+=2){var co=parseInt(coords[i]);if(t_ex==un||co<t_ex)t_ex=co;if(b_ex==un||co>b_ex)b_ex=co}result={left:l_ex,top:t_ex,right:r_ex,bottom:b_ex}}xl.rectDefined=tR;xl.rLeft=result.left;xl.rRight=result.right;xl.rTop=result.top;xl.rBottom=result.bottom;return result}
function xtAp(area,target){var map=xtpN(area);if(!map.dstElement){if(!target){target=xd}var elts=target.getElementsByTagName('*');if(elts['toArray'])elts=elts.toArray();for(var i=0;i<elts.length;i++){var xl=elts[i];if(xl.useMap){if(xl.useMap.replace('#','')==map.name)break}xl=nu}map.dstElement=xl}if(map.dstElement){var basePx=xtP(map.dstElement,'Left'),basePy=xtP(map.dstElement,'Top'),rect=xtAb(area);return{x:(basePx+rect.left),y:(basePy+rect.top)}}else{return{x:-1,y:-1}}}
function xtNodesload(){if(xw.xt8!=0){xw.xtczdom=xw.xtLogDom?xw.xtLogDom:'.xiti.com/hit.xiti';var desc=xd.getElementsByTagName('*');for(var i=0;i<desc.length;i++){if(xtL(desc[i]))xtel.xttab.push(desc[i]);if(xtLDz(desc[i]))xtobj.push(desc[i])}for(var j=0;j<xtel.xttab.length;j++){if(xtel.xttab[j].nodeName=='OBJECT'||xtel.xttab[j].nodeName=='EMBED'){if(xd.addEventListener)xtel.xttab[j].addEventListener('mousedown',xtR,fA);else if(xd.attachEvent)xtel.xttab[j].attachEvent('onmousedown',xtR)}else{if(xd.addEventListener)xtel.xttab[j].addEventListener('click',xtR,fA);else if(xd.attachEvent)xtel.xttab[j].attachEvent('onclick',xtR)}}for(var l=0;l<xtobj.length;l++){xtcz[l]=xtG(xtobj[l],cZ);if((xtG(xtobj[l],dT)!=nu)&&(xtG(xtobj[l],dT)!=un))typcz[l]=xtG(xtobj[l],dT);else typcz[l]='0';sizex[l]=xtSx(xtobj[l]);sizey[l]=xtSy(xtobj[l]);posx[l]=xtPx(xtobj[l]);posy[l]=xtPy(xtobj[l]);timecz[xtcz[l]]=0;timerefcz[xtcz[l]]=0;timercz[xtcz[l]]=nu}xtReload();if(xw.addEventListener){xw.addEventListener('scroll',xtReload,fA);xw.addEventListener('resize',xtReload,fA);xw.addEventListener('focus',xtReload,fA);xw.addEventListener('blur',xtCTimer,fA)}else if(xw.attachEvent){xw.attachEvent('onscroll',xtReload);xw.attachEvent('onresize',xtReload)}if(xd.addEventListener){xd.addEventListener('mousemove',xtRefresh,fA);xd.addEventListener('keydown',xtRefresh,fA)}else if(xd.attachEvent){xd.attachEvent('onfocusin',xtReload);xd.attachEvent('onfocusout',xtCTimer);xd.attachEvent('onmousemove',xtRefresh);xd.attachEvent('onkeydown',xtRefresh)}}}
function xtRefresh(){for(var m=0;m<xtobj.length;m++){timerefcz[xtcz[m]]=0}}
function xtReload(){larg=xtcW();haut=xtcH();xtAffDz();xtAffSv()}
function xtCTimer(){for(var m=0;m<xtobj.length;m++){if(timercz[xtcz[m]]!=nu){xw.clearInterval(timercz[xtcz[m]]);timercz[xtcz[m]]=nu;timerefcz[xtcz[m]]=0}}}
function xtTime(i){if(timercz[xtcz[i]]!=nu){timecz[xtcz[i]]+=1;timerefcz[xtcz[i]]+=1;if((timerefcz[xtcz[i]]%xttime)==0){xw.clearInterval(timercz[xtcz[i]]);timercz[xtcz[i]]=nu;timerefcz[xtcz[i]]=0;if(xd.addEventListener){xd.addEventListener('mousemove',xtAffDz,fA);xd.addEventListener('keydown',xtAffDz,fA)}else if(xd.attachEvent){xd.attachEvent('onmousemove',xtAffDz);xd.attachEvent('onkeydown',xtAffDz)}}}}
function xtAffDz(){if(xd.removeEventListener){xd.removeEventListener('mousemove',xtAffDz,fA);xd.removeEventListener('keydown',xtAffDz,fA)}else if(xd.detachEvent){xd.detachEvent('onmousemove',xtAffDz);xd.detachEvent('onkeydown',xtAffDz)}for(var m=0;m<xtobj.length;m++){var scTop=xtsT(),scLeft=xtsL();var p=0,pX=0,pY=0;if((posy[m]>=scTop)&&((posy[m]+sizey[m])<=(scTop+haut)))pY=100;else if(((posy[m]<scTop)&&((posy[m]+sizey[m])<=(scTop)))||(posy[m]>=(scTop+haut)))pY=0;else if((posy[m]<=scTop)&&((posy[m]+sizey[m])>=(scTop+haut)))pY=(haut/sizey[m])*100;else if(posy[m]<scTop)pY=((posy[m]+sizey[m]-scTop)/sizey[m])*100;else if((posy[m]+sizey[m])>(scTop+haut))pY=((scTop+haut-posy[m])/sizey[m])*100;if((posx[m]>=scLeft)&&((posx[m]+sizex[m])<=(scLeft+larg)))pX=100;else if(((posx[m]<scLeft)&&((posx[m]+sizey[m])<=(scLeft)))||(posx[m]>=(scLeft+larg)))pX=0;else if((posx[m]<=scLeft)&&((posx[m]+sizex[m])>=(scLeft+larg)))pX=(larg/sizex[m])*100;else if(posx[m]<scLeft)pX=((posx[m]+sizex[m]-scLeft)/sizex[m])*100;else if((posx[m]+sizex[m])>(scLeft+larg))pX=((scLeft+larg-posx[m])/sizex[m])*100;var Ly=(pY*sizey[m])/100,Lx=(pX*sizex[m])/100,areaA=Lx*Ly,areaT=sizex[m]*sizey[m];p=Math.round((areaA/areaT)*100);if(timercz[xtcz[m]]!=nu){xw.clearInterval(timercz[xtcz[m]]);timercz[xtcz[m]]=nu;timerefcz[xtcz[m]]=0}if(p>0){timercz[xtcz[m]]=xw.setInterval("xtTime("+m+");",1000)}xtCDz(xtcz[m],p,(p==0)?0:1,typcz[m])}}
function xtAffSv(){var lY=xtdH(),scTop=xtsT(),pY=Math.round((scTop+haut)/lY*100);pY=(pY>100)?100:pY;pY=(pY<0)?0:pY;if(scTop==0)fO=tR;if(fO)xtCSv(pY)}
function xtLDz(xl){var xlel=['DIV','TABLE','TR','TD','UL','LI','ARTICLE','FOOTER','ASIDE','HEADER','NAV','SECTION'],xeln=xtnN(xl);for(var i=0;i<xlel.length;i++){if((xeln==xlel[i])&&(xl.nodeType==1)&&(xtG(xl,cZ)!=nu)&&(xtG(xl,cZ)!=un)){var xelp=xtpN(xl);while(xelp){if((xelp.nodeType==1)&&(xtG(xelp,cZ)!=nu)&&(xtG(xelp,cZ)!=un))return fA;xelp=xtpN(xelp)}return tR}}return fA}
function xtEx2(xat){var r=new RegExp('&s2=','gi');if(r.test(xat.toString())){xat=xat.replace(r,'')}return xat}
function xtEx(xext){var valext=['.aac','.ace','.ape','.art','.avi','.bak','.bat','.bin','.bmp','.bsp','.cab','.ccd','.cda','.chm','.clp','.css','.csv','.cue','dic','dll','.doc','.dot','.exe','.fla','.flac','.gif','.gz','.hlp','.ico','.img','.iso','.jpeg','.jpg','.js','.lnk','.m2a','.m2v','.m3u','.mdb','.mdf','.mds','.mid','.midi','.mkv','.mod','.mov','.mp2','.mp3','.mp4','.mpc','.mpg','.mpeg','.msi','.nfo','.nrg','.obd','.ocx','.ogg','.old','.ogm','.pdf','.png','.pps','.ppt','.psd','.psp','.rar','.raw','.reg','.rm','.ram','.rtf','.swf','.tar','.tga','.tgz','.theme','.tif','.tiff','.tmp','.torrent','.ttf','.txt','.url','.vbs','.vob','.wab','.wav','.wdb','.wks','.wml','.wma','.wmv','.wpf','.xls','.xml','.zip','.7z'];for(var i=0;i<valext.length;i++){if(xext==valext[i])return tR}return fA}
function xtTr(xl){var xut=['BODY','HTML'];for(var i=0;i<xut.length;i++){if(xl.tagName==xut[i])return fA}return tR}
function xtEv(evt){var e_out,ie_var='srcElement',moz_var='target';evt[moz_var]?e_out=evt[moz_var]:e_out=evt[ie_var];return(e_out)}
function xtBdEv(evt){var e_out=(xw.event)?(xw.event.button==2):(evt.which==3);return(e_out)}
function xtCSv(p){var lY=xtdH(),percWin=Math.round((haut/lY)*100),nP=0,oldp=0;if(xt_valsv!=nu){oldp=parseInt(xt_valsv,10);if((p>oldp)&&(p<(oldp+percWin)))xt_valsv=p}else{xt_valsv=p}}
function xtV(xat){var r=/xt_med\(\s*.?C/i,r2=/xt_click\(\s*this\s*\,\s*.?C/i;return(r.test(xat.toString())||r2.test(xat.toString())||(xw.xtczcustomtag?xw.xtczcustomtag.isPresent(xat):false))}
function xtExT(xat){var page='',pageclz='',type='',section=-1,custom=(typeof xw.xtczcustomtag!='undefined')?xw.xtczcustomtag.getCustomTag(xat):null;if(!custom){var idx=(xat.indexOf('xt_med')>=0)?0:1,IdxSt=(idx==0)?xat.indexOf('xt_med'):xat.indexOf('xt_click'),start=xat.indexOf('(',IdxSt),stop=xat.indexOf(')',IdxSt),content=xtSub(xat,start+1,stop),tmp=start;while(content.indexOf('(')>0){tmp=stop+1;stop=xat.indexOf(')',stop+1);content=xtSub(xat,tmp+1,stop)}content=xtSub(xat,start+1,stop);xatab=content.split(/\,/);try{section=(xatab[idx+1])?String(eval(xatab[idx+1])):''}catch(e){section=(xatab[idx+1]||'')}try{page=(xatab[idx+2])?String(eval(xatab[idx+2])):''}catch(e){page=(xatab[idx+2]||'')}try{type=(xatab[idx+3])?String(eval(xatab[idx+3])):''}catch(e){type=(xatab[idx+3]||'')}}else{type=custom.typ||'';page=custom.lab||'';section=custom.sec||''}pageclz=page.replace(/(::)/g,'/');return{typ:type,pag:page,pagcl:pageclz,sec:section}}
function xtIdxOf(tab,v,n){n=(n==nu)?0:n;var m=tab.length;for(var i=n;i<m;i++)if(tab[i]==v)return i;return-1}
function xtT(xl){if(xl.innerHTML){var xtx=xl.innerHTML,r=new RegExp('<script[^>]*>','gi');if(r.test(xtx.toString()))return fA;xtx=(xtx.toString()).replace(/<\/?[^>]+>/gi,'');var regex=new RegExp('(&nbsp;)','g');xtx=(xtx.toString()).replace(regex,'');xtx=xtEn(xtx);var regex2=new RegExp('(%C2%A0)','g');xtx=(xtx.toString()).replace(regex2,'');try{xtx=xtDe(xtx)}catch(e){}xtx=(xtx.toString()).replace(/[\s]/gm,'');if((xtx.length==0)||(xtx==un)||(xtx==nu))return fA;return xtx}return fA}
function xtE(st){this.xttab=new Array();this.xst=st;this.xc=0;this.yc=0;this.sx=0;this.sy=0;this.px=0;this.py=0;this.xr=0;this.yr=0;this.bf='';this.af='';this.curr='';this.cliccz='';this.dest='';this.s=0;this.pcz='';this.s2cz='';this.t=0;this.idmod=0;this.p='';this.s2='';this.idpage=-1}
function xtH(){var d2=new Date();return(d2.getTime()-xtel.xst)}
function xtC(e){if(!e){if(xw.event){e=xw.event}else{return{x:-1,y:-1}}}var xc=-1,yc=-1;if(typeof(e.pageX)=='number'){xc=e.pageX;yc=e.pageY}else if(typeof(e.clientX)=='number'){xc=e.clientX;yc=e.clientY;var bad=(xw.xtn.userAgent.indexOf('Opera')+1)||(xw.ScriptEngine&&ScriptEngine().indexOf('InScript')+1)||(xtn.vendor=='KDE');if(!bad){if(xd.body&&(xd.body.scrollLeft||xd.body.scrollTop)){xc+=xd.body.scrollLeft;yc+=xd.body.scrollTop}else if(xd.documentElement&&(xd.documentElement.scrollLeft||xd.documentElement.scrollTop)){xc+=xd.documentElement.scrollLeft;yc+=xd.documentElement.scrollTop}}}else{return{x:-1,y:-1}}return{x:xc,y:yc}}
function xtExD(url){var u=url.replace(/((http)|(https)):\/\//g,''),p=u.indexOf('/');p=(p!=-1)?p:u.length;u=xtSub(u,0,p);return u}
function xtCt(xl,a){var xclict='',xext='',xurld='',target='',check='',xdoms=(xw.xt1!=nu&&xw.xt1!='')?xtSub(xw.xt1,8,xw.xt1.length):xd.domain,xdomd='';if(xl){if((xtnN(xl)=='INPUT')&&(xl.type=='submit')){try{xurld=xtG(xl.form,'action').toString()}catch(e){}xext=xtSub(xurld,xurld.lastIndexOf('.'),xurld.length);xdomd=xtExD(xurld)}if((xtnN(xl)!='IMG')&&xl.href){xurld=(xl.href).toString();if(xl.getAttribute('target'))target=(xl.getAttribute('target')).toString();if(xl.getAttribute('data-xtredir'))check=(xl.getAttribute('data-xtredir'));xext=xtSub(xurld,xurld.lastIndexOf('.'),xurld.length);xdomd=xtExD(xurld)}else{var xlp=xtpN(xl);while(xlp&&xtnN(xlp)!='BODY'){if(xlp.href){xurld=(xlp.href).toString();xext=xtSub(xurld,xurld.lastIndexOf('.'),xurld.length);xdomd=xtExD(xurld);if(xlp.getAttribute('target'))target=(xlp.getAttribute('target')).toString();if(xlp.getAttribute('data-xtredir'))check=(xlp.getAttribute('data-xtredir'));break}xlp=xtpN(xlp)}}}if(xtEx(xext))xclict='T';else if((xdomd!='')&&(xdomd.indexOf(xdoms,0)<0)&&(xdomd!=xtSub(xdoms,1,xdoms.length)))xclict='S';else{xclict='N'}if(!a){if(xurld.length>255)xurld=xtSub(xurld,0,255);var ch=xurld;if(ch.charAt(ch.length-1)=='/')ch=xtSub(ch,0,ch.length-1);var pos=ch.lastIndexOf('/?',ch.length);if(pos>=0)ch=ch.replace('/?','?');xurld=ch;try{if((xtDe(xurld)!=nu)&&(xtDe(xurld)!=un))xurld=xtDe(xurld)}catch(e){}}return{typ:xclict,url:xurld,tgt:target,ck:check}}
function xtL(xl){var xlel=['INPUT','SELECT','IFRAME','OBJECT','AREA','BUTTON'],xeln=xtnN(xl);if((xeln=='EMBED')&&(xtnN(xtpN(xl)))!='OBJECT'){return tR}if((xeln=='DIV')&&(xtG(xl,cL))){return tR}if((xeln=='SPAN')&&(xtG(xl,oC))){return tR}if((xeln=='SELECT')&&((xtG(xl,'onchange')==nu)||(xtG(xl,'onchange')==un)||(xtG(xl,'onchange')==''))){return fA}if((xeln=='INPUT')&&(xl.type!='submit')&&(xl.type!='image')&&(xl.type!='button')){return fA}if((xeln=='BUTTON')&&(xl.type!='submit')){return fA}if(xeln=='IMG'){var xlp=xtpN(xl);var xtTr=fA;while(xlp){if(xtnN(xlp)=='A'){xtTr=tR;if((((xtG(xlp,oC)!=nu)&&(xtG(xlp,oC)!=un)&&(xtG(xlp,oC)!=''))||((xtG(xlp,'href')!=nu)&&(xtG(xlp,'href')!=un)&&(xtG(xlp,'href')!='')))){return tR}}xlp=xtpN(xlp)}if((xtG(xl,oC)!=nu)&&(xtG(xl,oC)!=un)&&(xtG(xl,oC)!='')&&!xtTr)return tR}if((xeln=='A')&&(((xtG(xl,oC)!=nu)&&(xtG(xl,oC)!=un)&&(xtG(xl,oC)!=''))||((xtG(xl,'href')!=nu)&&(xtG(xl,'href')!=un)&&(xtG(xl,'href')!='')))){var xlp=xtpN(xl);while(xlp){if(((xtnN(xlp)=='DIV')&&(xtG(xlp,cL)))||((xtnN(xlp)=='SPAN')&&(xtG(xlp,oC))))return fA;xlp=xtpN(xlp)}var xtImg=fA,xtTxt=fA;if(xl.childNodes){var xtChild=xl.childNodes,j=0;while(j<xtChild.length&&!(xtImg&&xtTxt)){if(xtnN(xtChild[j])=='IMG'){xtImg=tR}else{xtTxt=tR}j++}}if(xtImg&&xtTxt)return tR;else if(xtImg)return fA;else return tR}for(var i=0;i<xlel.length;i++){if(xeln==xlel[i])return tR}return fA}
function xtLCz(xl){var xlel=['DIV','TABLE','TR','TD','UL','LI','ARTICLE','FOOTER','ASIDE','HEADER','NAV','SECTION'],xeln=xtnN(xl);for(var i=0;i<xlel.length;i++){if((xeln==xlel[i])&&(xl.nodeType==1)&&(xtG(xl,cZ)!=nu)&&(xtG(xl,cZ)!=un)){return tR}}return fA}
function xtNa(xl){if(xl&&!xtL(xl)){var xlp=xtpN(xl);while(xlp){if(xtL(xlp)){xl=xlp;break}xlp=xtpN(xlp)}}var obj=null,xid='',xtmedat='',xtmedp='',xtmeds='',type='',xurld='',xtTr=fA;if(xl){if((xtnN(xl)=='A')&&(xl.childNodes)){var xtChild=xl.childNodes,j=0;while((j<xtChild.length)&&!xtTr){if((xtChild[j].nodeType==1)&&!xtL(xtChild[j])&&(xtG(xtChild[j],cL))){xid=cL+xtG(xtChild[j],cL);xtTr=tR}j++}}if(!xtTr){if(xtG(xl,oC)&&xtV(xtG(xl,oC)))xid=xtG(xl,oC);else if(xl.href&&xtV(xl.href)){xid=xl.href;try{if((xtDe(xid)!=nu)&&(xtDe(xid)!=un))xid=xtDe(xid)}catch(e){}}else if(xtG(xl,cL))xid=cL+xtG(xl,cL);else if(xtT(xl))xid=xtT(xl);else if(xl.id)xid=xl.id;else if(xl.name)xid=xl.name;else if(xl.title)xid=xl.title;else if(xl.value)xid=xl.value;else if(xl.href){var ch=xl.href.toString();if(ch.charAt(ch.length-1)=='/')ch=xtSub(ch,0,ch.length-1);var pos=ch.lastIndexOf('/?',ch.length);if(pos>=0)ch=ch.replace('/?','?');xid=ch;try{if((xtDe(xid)!=nu)&&(xtDe(xid)!=un))xid=xtDe(xid)}catch(e){}}else if(xl.src){var ch=xl.src.toString();if(ch.charAt(ch.length-1)=='/')ch=xtSub(ch,0,ch.length-1);var pos=ch.lastIndexOf('/?',ch.length);if(pos>=0)ch=ch.replace('/?','?');xid=ch;try{if((xtDe(xid)!=nu)&&(xtDe(xid)!=un))xid=xtDe(xid)}catch(e){}}else{var xlp=xtpN(xl);while(xlp&&xtnN(xlp)!='BODY'){if(xtG(xlp,oC)&&xtV(xtG(xlp,oC))){xid=xtG(xlp,oC);break}else if(xlp.href&&xtV(xlp.href)){xid=xlp.href;try{if((xtDe(xid)!=nu)&&(xtDe(xid)!=un))xid=xtDe(xid)}catch(e){}break}else if(xtG(xl,cL)){xid=cL+xtG(xl,cL);break}else if(xtT(xlp)){xid=xtT(xlp);break}else if(xlp.id){xid=xlp.id;break}else if(xlp.name){xid=xlp.name;break}else if(xlp.title){xid=xlp.title;break}else if(xlp.value){xid=xlp.value;break}else if(xlp.href){var ch=xlp.href.toString();if(ch.charAt(ch.length-1)=='/')ch=xtSub(ch,0,ch.length-1);var pos=ch.lastIndexOf('/?',ch.length);if(pos>=0)ch=ch.replace('/?','?');xid=ch;try{if((xtDe(xid)!=nu)&&(xtDe(xid)!=un))xid=xtDe(xid)}catch(e){}break}else if(xlp.src){var ch=xlp.src.toString();if(ch.charAt(ch.length-1)=='/')ch=xtSub(ch,0,ch.length-1);var pos=ch.lastIndexOf('/?',ch.length);if(pos>=0)ch=ch.replace('/?','?');xid=ch;try{if((xtDe(xid)!=nu)&&(xtDe(xid)!=un))xid=xtDe(xid)}catch(e){}break}xlp=xtpN(xlp)}}}xid=(xid.toString()).replace(/[\s]/gm,'');if(xtV(xid)){obj=xtExT(xid);type=obj.typ;xtmedp=obj.pag;xtmeds=obj.sec;if(xtG(xl,cL))xid=cL+xtG(xl,cL);else xid=obj.pagcl}else{var xlp=xtpN(xl);while(xlp&&(xtnN(xlp)!='BODY')){if(xtG(xlp,oC)&&xtV(xtG(xlp,oC))){xtmedat=xtG(xlp,oC);xtmedat=(xtmedat.toString()).replace(/[\s]/gm,'');obj=xtExT(xtmedat);type=obj.typ;xtmedp=obj.pag;xtmeds=obj.sec;break}else if(xlp.href&&xtV(xlp.href)){xtmedat=xlp.href;try{if((xtDe(xtmedat)!=nu)&&(xtDe(xtmedat)!=un))xtmedat=xtDe(xtmedat)}catch(e){}xtmedat=(xtmedat.toString()).replace(/[\s]/gm,'');obj=xtExT(xtmedat);type=obj.typ;xtmedp=obj.pag;xtmeds=obj.sec;break}xlp=xtpN(xlp)}}if(type==''){if(xtG(xl,cT)!=nu){type=xtG(xl,cT)}else{var xlp=xtpN(xl);while(xlp&&(xtnN(xlp)!='BODY')){if(xtG(xlp,cT)!=nu){type=xtG(xlp,cT);break}xlp=xtpN(xlp)}}}if(type=='')type=xtCt(xl).typ;xurld=xtCt(xl).url;if(xtmedp==''){xtmedp=(xid.indexOf(cL,0)>=0)?xtExTc(xid):xid;if(xtmeds=='')xtmeds=xtEx2(xw.xt9)}var regex=new RegExp('(&)|[?]','g');xtmedp=(xtmedp.toString()).replace(regex,'_');if(xtmeds=='')xtmeds='0';var r=new RegExp('(::)','g');xid=(xid.toString()).replace(r,'/');var k=0,xlp=xtpN(xl);while(xlp&&(xtnN(xlp)!='BODY')){if(xtLCz(xlp)&&(k<2)){xid=xtG(xlp,cZ)+'::'+xid;k+=1}xlp=xtpN(xlp)}}xid=xtSub(xid,0,255);xtmedp=xtSub(xtmedp,0,255);return{id:xid,pag:xtmedp,sec:xtmeds,typ:type,url:xurld}}
function xtExTc(xid){var r=new RegExp(cL,'gi');xid=xid.replace(r,'');return xid}
function xtR(e){xtel.t=Math.round(xtH()/1000);if(xtdtmp!=0&&(xtel.t-xtdtmp<1))return;xtdtmp=xtel.t;if(!e)e=xw.event;if(xtBdEv(e))return;var obj=null,xel=xtEv(e);if(xtTr(xel)){if(xtnN(xel)=='OPTION'){var xelp=xtpN(xel);while(xelp){xel=xelp;if(xtnN(xel)=='SELECT')break;xelp=xtpN(xelp)}}xtel.s=xw.xt8;xtel.pcz=xw.xtp;xtel.s2cz=xtEx2(xw.xt9);xtel.idmod=typeof(xw['xtidmod'])!='undefined'?xw['xtidmod']:0;obj=xtNa(xel);xtel.curr=obj.id;xtel.cliccz=obj.typ;xtel.dest=obj.url;xtel.p=obj.pag;xtel.s2=obj.sec;xtel.p=((xtel.p!='')&&(xtel.cliccz!='F'))?'&pmed='+xtEn(xtel.p):'';xtel.s2=((xtel.s2!='')&&(xtel.cliccz!='F'))?'&s2med='+xtEn(xtel.s2):'';if(xtel.cliccz=='F'){xtel.cliccz=xtCt(xl).typ}xtel.sx=xtSx(xel);xtel.sy=xtSy(xel);xtel.px=xtPx(xel);xtel.py=xtPy(xel);xtel.idpage=(xw.xtidpg!=nu)?xw.xtidpg:-1;if((xtel.px==-1)&&(xtel.py==-1))return;var tmpelt=xtEv(e);xtel.xc=((xtnN(tmpelt)=='OPTION')&&!isOP)?xtC(e).x+xtel.px:xtC(e).x;xtel.yc=xtC(e).y;if((xtel.xc==-1)&&(xtel.yc==-1))return;if(xd.compatMode=='BackCompat'&&isI){xtel.xc-=2;xtel.yc-=2}xtel.xr=(xtel.xc-xtel.px)/xtel.sx;xtel.yr=(xtel.yc-xtel.py)/xtel.sy;if((0<xtel.sx)&&(xtel.sx<=40))xtel.xr=0.5;if((40<xtel.sx)&&(xtel.sx<=250))xtel.xr=(Math.round(xtel.xr*10))/10;if(250<xtel.sx)xtel.xr=(Math.round(xtel.xr*100))/100;if((0<xtel.sy)&&(xtel.sy<=40))xtel.yr=0.5;if((40<xtel.sy)&&(xtel.sy<=250))xtel.yr=(Math.round(xtel.yr*10))/10;if(250<xtel.sy)xtel.yr=(Math.round(xtel.yr*100))/100;if(xtel.xr<0)xtel.xr=0;if(xtel.yr<0)xtel.yr=0;if(xtel.xr>1)xtel.xr=1;if(xtel.yr>1)xtel.yr=1;if((xtel.curr).indexOf(cL,0)<0){var idx=xtIdxOf(xtel.xttab,xel);var xelp=xtpN(xel);while((idx==-1)&&xelp){idx=xtIdxOf(xtel.xttab,xelp);xelp=xtpN(xelp)}xtel.bf=xtNa(xtel.xttab[idx-1]).id;xtel.af=xtNa(xtel.xttab[idx+1]).id;xtel.bf=((xtel.bf).indexOf(cL,0)>=0)?xtExTc(xtel.bf):xtel.bf;xtel.af=((xtel.af).indexOf(cL,0)>=0)?xtExTc(xtel.af):xtel.af}else{xtel.curr=xtExTc(xtel.curr);xtel.bf='';xtel.af='';xtel.dest=''}var name='';if((xtnN(xel)=='EMBED')&&isOP&&(xtpN(xel)!=nu)&&(xtpN(xel)!=un))name=xtpN(xel).name;else name=xel.name;if((name!=nu)&&(name!=un)&&((name).indexOf(cT)>=0))xtel.cliccz=name.replace(cT,'');var type=xtCt(xel).typ;var hitn=fA;if((xtel.cliccz=='N')&&(type!='N'))hitn=tR;var regex=new RegExp('(&)|[?]','g');xtel.curr=(xtel.curr.toString()).replace(regex,'_');xtel.bf=(xtel.bf.toString()).replace(regex,'_');xtel.af=(xtel.af.toString()).replace(regex,'_');xtel.dest=(xtel.dest.toString()).replace(regex,'_');var res='&xtczv='+xtczv+'&idmod='+xtel.idmod+'&current='+xtEn(xtel.curr)+'&before='+xtEn(xtel.bf)+'&after='+xtEn(xtel.af)+'&cliccz='+xtel.cliccz+'&dest='+xtEn(xtel.dest)+'&posx='+xtel.xr+'&posy='+xtel.yr+'&time='+xtel.t+xtel.p+xtel.s2;var dz='&dz=';if(xt_valdz!=nu){var reg1=new RegExp('XTL','gi'),reg2=new RegExp('[|]{2}','gi'),tabL=new Array();tabL=xt_valdz.split(reg1);for(var i=0;i<tabL.length;i++){if((tabL[i].length>0)&&(parseInt(tabL[i].split(reg2)[1],10)>0)){dz+=tabL[i].split(reg2)[0]+',';dz+=tabL[i].split(reg2)[1]+',';dz+=tabL[i].split(reg2)[2]+',';dz+=tabL[i].split(reg2)[4]+',';dz+=timecz[tabL[i].split(reg2)[0]]+'|'}}}var redir=xtCt(xel,1),redir_url=redir.url,redir_tgt=redir.tgt,redir_ok=!1,redir_chck=redir.ck;if(xtautoredir&&e.type=='click'&&redir_chck!='no'&&redir_url.indexOf('http')==0&&redir_tgt!='_blank'&&!e.defaultPrevented&&xtel.cliccz!='N'){e.preventDefault();redir_ok=1}if(((scriptOnClickZone==2)&&(xtel.cliccz!='N'))||(hitn==tR)){var hitdz='';if(xtel.cliccz=='S'){hit=tR;hitdz='&pv='+xt_valsv+dz}xtHit(xtsd+xw.xtczdom+'?s='+xtel.s+'&pcz='+xtEn(xtel.pcz)+'&s2cz='+xtEn(xtel.s2cz)+((typeof(xt40)!='undefined')?'&idclient='+xt40:''),res+hitdz,1,1,xtel.idpage);if(redir_ok)xtRedir(redir_url,redir_tgt)}else if((scriptOnClickZone!=2)&&(xtel.cliccz=='S')){hit=tR;xtHit(xtsd+xw.xtczdom+'?s='+xtel.s+'&pcz='+xtEn(xtel.pcz)+'&s2cz='+xtEn(xtel.s2cz)+'&idmod='+xtel.idmod+'&xtczv='+xtczv+((typeof(xt40)!='undefined')?'&idclient='+xt40:''),'&pv='+xt_valsv+dz,1,1,xtel.idpage);if(redir_ok)xtRedir(redir_url,redir_tgt)}else if(xtel.cliccz=='N'){hit=tR;xtCzW('&idpcz='+xtel.idpage+((parseInt(xw.xtv.substring(0,xw.xtv.indexOf('-')),10)>43005)?res.replace('&current=','&c=').replace('&before=','&b=').replace('&after=','&a='):res)+dz+'&pv='+xt_valsv)}}}
function xtRedir(url,tgt){var a='.location.href="',b=typeof xw.xttredir!='undefined'?xw.xttredir:500;switch(tgt){case'_self':setTimeout('self'+a+url+'"',b);break;case'_top':setTimeout('top'+a+url+'"',b);break;case'_parent':setTimeout('parent'+a+url+'"',b);break;case'':setTimeout('self'+a+url+'"',b);break;default:setTimeout('self'+a+url+'"',b);break}}
function xtCDz(name,p,nbf,typcz){var nbFv=nbf,ok=false,nP=0,valP=0,trv=fA,reg1=new RegExp('XTL','gi'),reg2=new RegExp('[|]{2}','gi'),valC='';if(xt_valdz!=nu){var tabL=new Array();tabL=xt_valdz.split(reg1);for(var i=0;i<tabL.length;i++){if(tabL[i].length>0){nP=parseInt(tabL[i].split(reg2)[1],10);nbFv=parseInt(tabL[i].split(reg2)[2],10);valP=parseInt(tabL[i].split(reg2)[3],10);if((valP==0)&&(parseInt(p,10)>0)&&(nP!=parseInt(p,10))){try{xt_areaDisplayed(tabL[i].split(reg2)[0])}catch(e){}}if(name==tabL[i].split(reg2)[0]){trv=tR;if(parseInt(p,10)>parseInt(tabL[i].split(reg2)[1],10)){nP=parseInt(p,10);nbFv=1;valP=parseInt(p,10);if(valP==100)ok=true}else if((parseInt(p,10)==parseInt(tabL[i].split(reg2)[1],10))&&(parseInt(tabL[i].split(reg2)[3],10)<parseInt(p,10))){nbFv=parseInt(tabL[i].split(reg2)[2],10)+1;valP=parseInt(p,10)}else if(parseInt(p,10)<parseInt(tabL[i].split(reg2)[1],10))valP=parseInt(p,10)}valC+=tabL[i].split(reg2)[0]+'||'+nP+'||'+nbFv+'||'+valP+'||'+tabL[i].split(reg2)[4]+'XTL'}}if(!trv)valC+=name+'||'+p+'||'+nbf+'||'+p+'||'+typcz+'XTL'}else{valC=name+'||'+p+'||'+nbf+'||'+p+'||'+typcz+'XTL'}xt_valdz=valC;if(ok)console.log(xt_valdz)}
function xtCzW(v){var xtcznb=new Date();xtcznb.setTime(xtcznb.getTime()+45000);xd.cookie='xtvalCZ='+v+';expires='+xtcznb.toGMTString()+' ;path=/'+xw.xt1}
function xtdH(){var off=xd.documentElement?parseInt(xd.documentElement.offsetHeight,10):0,sc=xd.documentElement?parseInt(xd.documentElement.scrollHeight,10):0,boff=xd.body?parseInt(xd.body.offsetHeight,10):0,bsc=xd.body?parseInt(xd.body.scrollHeight,10):0;return xtMax(xtMax(off,boff),xtMax(sc,bsc))}
function xtcW(){var val=xtfR(xw.innerWidth?parseInt(xw.innerWidth,10):0,xd.documentElement?parseInt(xd.documentElement.clientWidth,10):0),val2=xd.body?parseInt(xd.body.clientWidth,10):0;return((val==0)?val2:val)}
function xtcH(){var val=xtfR(xw.innerHeight?parseInt(xw.innerHeight,10):0,xd.documentElement?parseInt(xd.documentElement.clientHeight,10):0),val2=xd.body?parseInt(xd.body.clientHeight,10):0;return((val==0)?val2:val)}
function xtsL(){var pag=xw.pageXOffset?parseInt(xw.pageXOffset,10):0,sl=xd.documentElement?parseInt(xd.documentElement.scrollLeft,10):0,bsl=xd.body?parseInt(xd.body.scrollLeft,10):0;return xtMax(xtMax(pag,sl),bsl)}
function xtsT(){var pag=xw.pageYOffset?parseInt(xw.pageYOffset,10):0,st=xd.documentElement?parseInt(xd.documentElement.scrollTop,10):0,bst=xd.body?parseInt(xd.body.scrollTop,10):0;return xtMax(xtMax(pag,st),bst)}
function xtHit(str1,str2,nt,ntg,idpcz){var xt_imgc=new Image(),lim=1500,mh='&mh='+nt+'-'+ntg+'-'+idpcz;if(str2.length>lim){var reg=new RegExp('[|]','gi'),tab=str2.split(reg),hit='',l=tab[0].length,i=0;while((l<lim)&&(i<tab.length)){hit+=tab[i]+'|';if(i<tab.length-1)l+=(tab[i+1].length)+1;i+=1}ntg=(ntg==1)?Math.ceil(str2.length/lim):ntg;mh='&mh='+nt+'-'+ntg+'-'+idpcz;if(hit!=''){xt_imgc.src=str1+'&idpcz='+idpcz+mh+hit;xt_imgc.onload=function(){xt_imgc.onload=null}}else{xt_imgc.src=str1+'&idpcz='+idpcz+mh+str2.substring(0,lim)+'&mherr=1';xt_imgc.onload=function(){xt_imgc.onload=null};return}str2='&dz=';for(var j=i;j<tab.length;j++){str2+=tab[j]+((j==(tab.length-1))?'':'|')}xtHit(str1,str2,nt+1,ntg,idpcz)}else if(str2.length>4){xt_imgc.src=(nt==1)?str1+'&idpcz='+idpcz+str2:str1+'&idpcz='+idpcz+mh+str2;xt_imgc.onload=function(){xt_imgc.onload=null}}}
function xtG(o,a){var att=null;try{att=o.getAttribute(a)}catch(e){}return(att==null)?null:(((a==cZ)&&(att.length>255))?xtSub(att,0,255):att)}
function xtfR(w,d){var n_result=w?w:0;if(d&&(!n_result||(n_result>d)))n_result=d;return n_result}
function xtEn(v){return encodeURIComponent(v)}
function xtDe(v){return decodeURIComponent(v)}
function xtnN(o){return o.nodeName}
function xtpN(o){return o.parentNode}
function xtSub(o,d,f){return o.substring(d,f)}
function xtMax(a,b){return((a>b)?a:b)}

//-- Copyright 2013 AT Internet, All Rights Reserved.
//-- AT Internet Tag 4.3.007

// FRAGMENTS MOVED TO THE TOP UNTIL DECLARATION OF xt8b
//var xt1='.'+utag.cfg.domain,xtLogDom='.xiti.com/hit.xiti',xtpreview=false,xtfirst=false,xtcode='',xt46='1',xt50='1',xt48='',xt54=false,xt58=false,xtdocl=false,xtud='undefined',xt2='1',xt3=365,xttredir=500,xtkwv='xtmc',xtkwp='xtnp',xtadch=new Array,xt4=new Array;xt4['sec']='20';xt4['rss']='20';xt4['epr']='20';xt4['erec']='20';xt4['adi']='20';xt4['adc']='20';xt4['al']='20';xt4['es']='20';xt4['ad']='20';
//do not modify below
//var xtoid=new Array,xtnop=true,xtkey=false,xt49=null,xt5=30,xw=window,xd=document,xtg=navigator,xtv=(xw.xtczv!=null)?'43007-'+xw.xtczv:'43007',xt1=xw.xtdmc?';domain='+xw.xtdmc:(xt1!='')?';domain='+xw.xt1:'',xt6=(xw.xtnv!=null)?xw.xtnv:xd,xt7=(xw.xtsdi!=null)?xw.xtsdi:(xw.xtsd!=null)?xw.xtsd+xtLogDom:(((xd.location.protocol=='https:')?'https://logs1204':'http://logc204')+xtLogDom),xt36=(xw.xtsts!=null)?xw.xtsts:0,xt37='';if(xt54){var xturl='';try{xturl=xt6.location.href;}catch(e){xturl=xw.location.href;}xt37=xtestr(xturl,/#.*/,1);xt37=xt37?'&sta='+encodeURIComponent(xtclURL(xt37)):'';}var xt38=(xw.xtcustom!=null)?xtserial(xw.xtcustom):'',xt8=(xw.xtsite!=null)?xw.xtsite:0,xt9=(xw.xtn2!=null)?'&s2='+xw.xtn2:'',xt8b=((xt8==0)?'':'s='+xt8)+((xt36==0)?'':((xt8==0)?'sts='+xt36:'&sts='+xt36)),xtp=(xw.xtpage!=null)?xw.xtpage:'',xt10=xw.xto_force?xw.xto_force.toLowerCase():null,xt11=(xt8=='redirect')?true:false,xtdi=xw.xtdi?'&di='+xw.xtdi:'',xt12=xw.xtidp?'&idpays='+xw.xtidp:'',xt13=xw.xtidprov?'&idprov='+xw.xtidprov:'',xtm=(xw.xtparam!=null)?xw.xtparam:'';xt46=((typeof(xw.xtnopage)!='undefined')&&(xw.xtnopage=='1'))?'0':xt46;xt50=((typeof(xw.xtergo)!='undefined')&&(xw.xtergo=='0'))?'0':xt50;var xtclzone=((typeof(xw.scriptOnClickZone)!='undefined')&&(xt50=='1'))?xw.scriptOnClickZone:0,xt15=(xw.xt_orderid!=null)?xw.xt_orderid:'',xt17=(xw.xtidcart!=null)?xw.xtidcart:'',xt44=(xw.xtprod_load!=null)?'&pdtl='+xw.xtprod_load:'',xt47=(xw.xtcode!='')?'&code='+xw.xtcode:'',xt60={i:[],u:[],d:[],l:[],e:[],p:[]},xtpre=false,xtone=true;
var xtp = (xw.xtpage != null) ? xw.xtpage : '',
  xt10 = xw.xto_force ? xw.xto_force.toLowerCase() : null,
  xt11 = (xt8 == 'redirect') ? true : false,
  xtdi = xw.xtdi ? '&di=' + xw.xtdi : '',
  xt12 = xw.xtidp ? '&idpays=' + xw.xtidp : '',
  xt13 = xw.xtidprov ? '&idprov=' + xw.xtidprov : '',
  xtm = (xw.xtparam != null) ? xw.xtparam : '';
xt46 = ((typeof(xw.xtnopage) != 'undefined') && (xw.xtnopage == '1')) ? '0' : xt46;
xt50 = ((typeof(xw.xtergo) != 'undefined') && (xw.xtergo == '0')) ? '0' : xt50;
var xtclzone = ((typeof(xw.scriptOnClickZone) != 'undefined') && (xt50 == '1')) ? xw.scriptOnClickZone : 0,
  xt15 = (xw.xt_orderid != null) ? xw.xt_orderid : '',
  xt17 = (xw.xtidcart != null) ? xw.xtidcart : '',
  xt44 = (xw.xtprod_load != null) ? '&pdtl=' + xw.xtprod_load : '',
  xt47 = (xw.xtcode != '') ? '&code=' + xw.xtcode : '',
  xt60 = {
    i: [],
    u: [],
    d: [],
    l: [],
    e: [],
    p: []
  }, xtpre = false,
  xtone = true;

if(xw.addEventListener){xw.addEventListener('unload',function(){},false);}else if(xw.attachEvent){xw.attachEvent('onunload',function(){});}
if(xd.addEventListener){xd.addEventListener('keydown',function(){xtkey=true},false);xd.addEventListener('keyup',function(){xtkey=false},false);}else if(xd.attachEvent){xd.attachEvent('onkeydown',function(){xtkey=true});xd.attachEvent('onkeyup',function(){xtkey=false});}
var xt18=(xw.roimt&&(xtm.indexOf('&roimt',0)<0))?'&roimt='+xw.roimt:'',xtmc=(xtm.indexOf('&mc=',0)<0)?(xw.xtmc?'&mc='+xw.xtmc:xtf3(xtkwv)?'&mc='+xtf3(xtkwv):xtf3('xtmc')?'&mc='+xtf3('xtmc'):''):'',xtcr=xtf3('xtcr')?'&mcrg='+xtf3('xtcr'):'',xtac=(xw.xtac&&(xtm.indexOf('&ac=',0)<0))?'&ac='+xw.xtac:'',xtat=(xw.xtat&&(xtm.indexOf('&at=',0)<0))?'&at='+xw.xtat:'',xtan=(xw.xtan&&(xtm.indexOf('&an=',0)<0))?'&an='+xw.xtan:'',xtnp=(xtm.indexOf('&np=',0)<0)?(xw.xtnp?'&np='+xw.xtnp:xtf3(xtkwp)?'&np='+xtf3(xtkwp):xtf3('xtnp')?'&np='+xtf3('xtnp'):''):'',xt19=((xw.xtprm!=null)&&(xtm.indexOf('&x',0)<0))?xw.xtprm:'';xtm+=xt18+xtmc+xtcr+xtac+((xtan!='')?xtan:xtat)+xtnp+xt19+xt37;var xt20='';try{xt20=top.document.referrer;}catch(e){try{xt20=xt6.referrer;}catch(e){}};

// moved to the top
//var xts=screen,xt21=new Date(),xt22=xt21.getTime()/(1000*3600);

function xtserial(obj){var t=typeof(obj);if (t!="object"||obj===null){if(t=="string")obj=encodeURIComponent('"'+obj+'"');return String(obj);}else{var n,v,json=[],arr=(obj&&obj.constructor==Array);for(n in obj){v=obj[n];t=typeof(v);if(t=="string")v=encodeURIComponent('"'+v.replace(/[^\\]"/g,'\\"')+'"');else if(t=="object"&&v!==null)v=xtserial(v);json.push((arr?"":encodeURIComponent('"'+n+'":'))+String(v));}return(arr?"[":"{")+String(json)+(arr?"]":"}");}}
function xtclURL(ch){return ch.replace(/%3C/g,'<').replace(/%3E/g,'>').replace(/[<>]/g,'');}
function xtf1(nom,xtenc){xtenc=((xtenc!=null)&&(xtenc!=xtud))?xtenc:'0';var cookies=xd.cookie,re=new RegExp('(?:^| )'+nom+'=([^;]+)'),result=re.exec(cookies)||null;if(result){result=xtclURL(result[1]);if(xtenc!='1'){result=unescape(result)}}return result}
function xt_addchain(val,varch){xtvarch=varch?varch:'abmv';itemp=(!xtadch[xtvarch])?0:xtadch[xtvarch];itemp++;xtm+='&'+xtvarch+''+itemp+'='+val;xtadch[xtvarch]=itemp;}if(typeof(xt_adch)=='function'){xt_adch();}
function wck(p1,p2,p3,p4,fmt){p2=(fmt==0)?p2:escape(p2);xd.cookie=p1+'='+p2+';expires='+p3.toGMTString()+';path=/'+p4;}
function xtf3(param,chba,a){try{var xtdeb=xt6.location.href}catch(e){var xtdeb=xw.location.href}var xturl=(chba==null||chba==xtud)?xtclURL(xtdeb.toLowerCase().replace(/%3d/g,'=')):chba,xtpos=xturl.indexOf(param+'=');if(xtpos>0){var chq=xturl.substr(1),mq=chq.substr(chq.indexOf(param+'='));if(a!=1){try{mq=decodeURIComponent(mq)}catch(e){mq=unescape(mq)}}var cr=mq.match(/(\[[^\]]*\])/g);if(cr){var str='';for(var i=0,l=cr.length;i<l;i++){str=cr[i].substring(1,cr[i].length-1);mq=mq.replace(str,encodeURIComponent(str))}}var posa=mq.indexOf("#"),pos=mq.search(/&.[^&]+=/gi);pos=(pos==-1)?((posa==-1)?mq.length:posa):((posa>0&&posa<pos)?posa:pos);if(a==1){return decodeURIComponent(mq.substring(mq.indexOf('=')+1,pos))}else{return mq.substring(mq.indexOf('=')+1,pos).replace('&','%26')}}else{return null}}
function xt_mvt(page,section,test,detail,varch){if(detail){for(var i=1;i<detail.length+1;i++){test+='&'+((varch)?varch:'abmv')+i+"="+detail[i-1]}}xtf4('','&p='+page+'&s2='+section+'&abmvc='+test+"&type=mvt")}
function xt_med(type,section,page,x1,x2,x3,x4,x5){xt_ajout=((type=='F')&&((x1==null)||(x1==xtud)))?'':(type=='M')?'&a='+x1+'&m1='+x2+'&m2='+x3+'&m3='+x4+'&m4='+x5:'&clic='+x1;xtf4(type,'&s2='+section+'&p='+page+xt_ajout,x2,x3);}

xtfirst=((xtg.userAgent.indexOf('Safari')!=-1&&xtg.userAgent.indexOf('Chrome')<0)||xtg.userAgent.indexOf('iPhone')!=-1||xtg.userAgent.indexOf('iPod')!=-1||xtg.userAgent.indexOf('iPad')!=-1||xtfirst||xw.xtidc);
if(xtfirst){var xt40=(xw.xtidc)?xw.xtidc:xtf1('xtidc');if(xt40==null){var xt40=Math.floor(Math.random()*999999),xtane=xt21.getYear();if(xtane<100)xtane+=2000;if((xtane>100)&&(xtane<2000))xtane+=1900;var xt41=f_nb(xtane)+''+f_nb(xt21.getMonth())+''+f_nb(xt21.getDate())+''+f_nb(xt21.getHours())+''+f_nb(xt21.getMinutes())+''+f_nb(xt21.getSeconds());xt40=xt41+''+xt40}var xtdrc=new Date();xtdrc.setTime(xtdrc.getTime()+(315360000000));wck('xtidc',xt40,xtdrc,xt1,1);xt42=xtf1('xtidc');xt40+=(!xw.xtidc&&((xt42 == null)||(xt42 != xt40)))?'-NO':''}

function xt_ad(x1,x2,x3){xtf4('AT','&atc='+x1+'&type=AT&patc='+xtp+'&s2atc='+xw.xtn2,x2,x3);}
function xt_adc(obj,x1,x2,x3){xtf4('AT','&atc='+x1+'&type=AT&patc='+xtp+'&s2atc='+xw.xtn2);return AT_click.do_navig(obj,x2,(x3)?'_blank':null,true)}
function xt_click(obj,type,n2,page,x1,x2,x3){xt_ajout=((type=='F')&&((x1==null)||(x1==xtud)))?'':'&clic='+x1;xtf4(type,'&s2='+n2+'&p='+page+xt_ajout);return AT_click.do_navig(obj,x2,(x3)?'_blank':null,true)}
function xt_form(obj,type,n2,page,x1,x2){xt_ajout=((type=='F')&&((x1==null)||(x1==xtud)))?'':'&clic='+x1;xtf4(type,'&s2='+n2+'&p='+page+xt_ajout);return AT_click.do_submit(obj,true,x2)}
var AT_click={id:0,objs:[],elem:function(a,d,e,b,c,g,h){var f={};f.urlDest=c;f.type=a;f.n2=d;f.label=e;f.typeClick=b;f.target=g;f.submit=!1===c?!1:!0;f.redir=null==h?!0:h;return f},addListener:function(a,d,e){window.addEventListener?a.addEventListener(d,e,!1):window.attachEvent&&a.attachEvent("on"+d,e)},tag:function(a,d,e,b,c,g,h,f){if(a.setAttribute)this.addElem(a,d,e,b,c,g,h,f);else for(var j in a)a[j].setAttribute&&this.addElem(a[j],d,e,b,c,g,h,f)},addElem:function(a,d,e,b,c,g,h,f){this.id++;a.setAttribute("data-xtclickid",
this.id);this.objs[this.id]=this.elem(d,e,b,c,g,h,f);"FORM"!=a.nodeName?this.addListener(a,"click",this.on_click_submit):this.addListener(a,"submit",this.on_click_submit)},on_click_submit:function(a){try{for(var d=a.target||a.srcElement,e,b={},c="",g=a.defaultPrevented,h=AT_click;!d.getAttribute("data-xtclickid")&&"BODY"!=d.nodeName;)d=d.parentNode;(e=d.getAttribute("data-xtclickid"))&&(b=h.objs[e],"AT"!=b.type?c+="&p="+b.label+("C"==b.type?"&clic="+b.typeClick:""):"AT"==b.type&&(c+="&type=AT&atc="+
b.label),xtf4(b.type,"&s2="+b.n2+c),!g&&d.redir&&(a.preventDefault(),"FORM"!=d.nodeName?h.do_navig(d,b.urlDest,b.target):h.do_submit(d,null,b.submit)))}catch(f){}},do_navig:function(a,d,e,b){var c=null;if("A"!=a.nodeName)for(var g=a.parentNode;g;){if("A"==g.nodeName){c=g;break}g=g.parentNode}else c=a;if(c){if(c.target=e||a.target||"_self",c.href=d||a.href,!b||b&&!xtkey)if("_self"==c.target.toLowerCase()){if(setTimeout('self.location.href="'+c.href+'"',xw.xttredir),b)return!1}else if("_top"==c.target.toLowerCase()){if(setTimeout('top.location.href="'+
c.href+'"',xw.xttredir),b)return!1}else if("_parent"==c.target.toLowerCase()){if(setTimeout('parent.location.href="'+c.href+'"',xw.xttredir),b)return!1}else if("_blank"==c.target.toLowerCase()&&(setTimeout('(xw.open("'+c.href+'","_blank")).focus();',1),b))return!1}else d&&("_blank"==e?setTimeout('(xw.open("'+d+'","_blank")).focus();',xw.xttredir):setTimeout('self.location.href="'+d+'"',xw.xttredir));if(b)return xtkey=!1,!0},do_submit:function(a,d,e){if(e&&(setTimeout(function(){a.submit()},xw.xttredir),d&&e))return!1}};
function xt_rm(x1,x2,x3,x4,x5,x6,x7,x8,x9,x10,x11,x12,x13,x14){var rmprm='&p='+x3+'&s2='+x2+'&type='+x1+'&a='+x4+'&m5='+x11+'&m6='+x12+(((x5!=null)&&(x5!='0'))?'&'+x5:'')+(((x7!=null)&&(x4!='pause')&&(x4!='stop'))?'&m1='+x7+'&'+x8+'&m3='+x9+'&m4='+x10+'&m7='+x13+'&m8='+x14+'&prich='+xtp+'&s2rich='+xw.xtn2:'')+(((x6!=null)&&(x6!='0')&&(x7!=null))?'&rfsh='+x6:'');xtf4(x1,rmprm);var t=new Date();if((x6!=null)&&(x6!='0')&&((x4=='play')||(x4=='play&buf=1')||(x4=='refresh'))){if(xt60.p[x1]&&(((t.getTime())-xt60.p[x1])>1800000)){xt60.d[x1]=0}if(((x4=='play')||(x4=='play&buf=1'))&&!xt60.d[x1]){xt60.d[x1]=t.getTime()/1e3;xt60.l[x1]=parseInt(x7);var y=Math.floor(x6),x=(y>1500)?1500:(y<5)?5:y;xt60.i[x1]=x;xt60.u[x1]=x;xt60.p[x1]=!1}else if(x4=='refresh'&&(x12=='live'||!xt60.l[x1]||(xt60.l[x1]>300&&xt60.i[x1]*100/xt60.l[x1]<2))){var e=(xt60.p[x1])?xt60.e[x1]:(t.getTime()/1e3)-xt60.d[x1];if(xt60.u[x1]*100/(e+30)<5){xt60.u[x1]=(e+30)/100*5}if(xt60.p[x1]){xt60.p[x1]=!1;xt60.d[x1]=(t.getTime()/1e3)-xt60.e[x1]}xt60.e[x1]=e}xtoid[x1]=xw.setTimeout("xt_rm('"+x1+"','"+x2+"','"+x3+"','refresh','0','"+x6+"',null,'"+x8+"','"+x9+"','"+x10+"','"+x11+"','"+x12+"')",xt60.u[x1]*1e3)}else if(((x4=='pause')||(x4=='stop'))&&(xw.xtoid!=null)){xw.clearTimeout(xtoid[x1]);if(x4=='stop'){xt60.i[x1]=0}else{xt60.p[x1]=t.getTime()}}}
function xtf4(x1,x2,x3,x4){if(((xtclzone==0)||(xtclzone==3)||(x1!='C'))&&(x1!='P')){if(x2.indexOf('&ati=')>-1){var a=xtf3('ati',x2,1)||"";if(a.length>1500){x2=x2.replace('&ati='+a,"");xt_ParseUrl3(Xt_id+xt8b+'&type=AT'+(xtfirst?'&idclient='+xt40:''),'&ati='+a.replace(/&/g,'%26'),1,1,'&ati=',',')}}if(xtnop&&xt46=='0'&&x1=='F'){Xt_param=Xt_param.replace('&p='+xtf3('p',Xt_param),'');Xt_param=Xt_param.replace('&s2='+xtf3('s2',Xt_param),'');if(window.navigator&&window.navigator.loadPurpose==="preview"&&xtg.userAgent.indexOf('Safari')!=-1&&xtg.userAgent.indexOf('Chrome')<0){if(xtpreview)xtLhit(Xt_param+x2+"&pvw=1")}else if(xd.webkitVisibilityState=="prerender"){xtpre=true;Xt_param=Xt_param+x2;xd.addEventListener("webkitvisibilitychange",xtLhit,false)}else{xtLhit(Xt_param+x2)}xtnop=false}else{var xt22=new Date(),params=xt8b+x2+'&hl='+xt22.getHours()+'x'+xt22.getMinutes()+'x'+xt22.getSeconds();if(parseFloat(xtg.appVersion)>=4){try{params+='&r='+xts.width+'x'+xts.height+'x'+xts.pixelDepth+'x'+xts.colorDepth}catch(e){}}xt_ParseUrl(Xt_id,params+(xtfirst?'&idclient='+xt40:''),'','1')}}if((x3!=null)&&(x3!=xtud)&&(x1!='M')){if((x4=='')||(x4==null)){xd.location=x3}else{xfen=window.open(x3,'xfen','');xfen.focus()}}else{return}}
function f_nb(a){a=a-Math.floor(a/100)*100;if(a<10){return '0'+a;}else{return a;}}
var xtidpg=f_nb(xt21.getHours())+''+f_nb(xt21.getMinutes())+''+f_nb(xt21.getSeconds())+''+xt_rd(7),xt23=0,xt16='',xt43=0;
function xt_addProduct(rg,pdt,qtt,unp,dsc,dscc){xt23++;xt16+='&pdt'+xt23+'=';xt16+=rg?rg+'::':'';xt16+=pdt?pdt:'';xt16+=qtt?'&qte'+xt23+'='+qtt:'';xt16+=unp?'&mt'+xt23+'='+unp:'';xt16+=dsc?'&dsc'+xt23+'='+dsc:'';xt16+=dscc?'&pcode'+xt23+'='+dscc:'';}
function xt_rd(nb){return Math.floor(Math.random()*Math.pow(10,nb));}
function xt_addProduct_v2(rg,pdt,qtt,unp,unpht,dsc,dscht,dscc,roimtp){xt23++;xt16+='&pdt'+xt23+'=';xt16+=rg?rg+'::':'';xt16+=pdt?pdt:'';xt16+=qtt?'&qte'+xt23+'='+qtt:'';xt16+=unp?'&mt'+xt23+'='+unp:'';xt16+=unpht?'&mtht'+xt23+'='+unpht:'';xt16+=dsc?'&dsc'+xt23+'='+dsc:'';xt16+=dscht?'&dscht'+xt23+'='+dscht:'';xt16+=roimtp?'&roimt'+xt23+'='+roimtp:'';xt16+=dscc?'&pcode'+xt23+'='+dscc:'';}
function xt_addProduct_load(rg,pdt,xv){if(pdt){xt43++;xt44+=(xt43==1)?'&pdtl=':'|';xt44+=rg?rg+'::':'';xt44+=pdt;xt44+=xv?';'+xv:'';}}if(typeof(xt_cart)=='function'){xt_cart();}else{xt16='';}
function xt_ParseUrl(hit,xtch,xtrefP,thit){var tabUrl=new Array;if(xtch.length>0){var xtlg=1600-xtrefP.length,i=0,j=0,xtch_prec='',xterr=0;while((xtch.length>xtlg)&&(xtch_prec!=xtch)&&(xterr==0)){xtch_prec=xtch;var xsep='&pdt';if(xtch.lastIndexOf(xsep,xtlg)<=0){if(xtch.lastIndexOf('&',xtlg)<=0){xterr=1}else{xsep='&'}}if(xterr==1){tabUrl[i]=xtch.substring(0,1600)+'&mherr=1'}else{tabUrl[i]=xtch.substring(0,xtch.lastIndexOf(xsep,xtlg));xtch=xtch.substring(xtch.lastIndexOf(xsep,xtlg),xtch.length);i++;xtlg=1600}}if(xterr==0){tabUrl[i]=xtch;if(xt38!=''&&xtch.indexOf('&stc=')==-1){var stc='&stc=';if((stc.length+xt38.length+xtch.length)<xtlg){tabUrl[i]+=(stc+xt38)}else{i++;xt38=stc+xt38;while((xt38.length>xtlg)&&(xtch_prec!=xt38)){xtch_prec=xt38;var xsep=',';if(xt38.lastIndexOf(xsep,xtlg)<=5){xterr=1}if(xterr==1){tabUrl[i]=xt38.substring(0,1600)+'&mherr=1'}else{tabUrl[i]=xt38.substring(0,xt38.lastIndexOf(xsep,xtlg));xt38=stc+xt38.substring(xt38.lastIndexOf(xsep,xtlg),xt38.length);i++;xtlg=1600}}if(xterr==0){tabUrl[i]=xt38}}xt38=''}}for(j=0;j<=i;j++){if(i>0){tabUrl[j]+='&mh='+(j+1)+'-'+(i+1)+'-'+xtidpg}if(j>0){tabUrl[j]=((xt15!='')||(xt17!=''))?xt8b+'&cmd='+xt15+'&idcart='+xt17+tabUrl[j]:xt8b+tabUrl[j]}else{tabUrl[j]+=xtrefP}if(thit=='1'){var xt_img=new Image();xt_img.src=hit+tabUrl[j];xt_img.onload=function(){xt_img.onload=null}}}}}
function xt_ParseUrl3(str1,str2,nt,ntg,name,sep,idp){if(idp){}else{idp=xtidpg.substring(0,6)+xt_rd(8)}var xt_imgc=new Image(),lim=1500,mh='&mh='+nt+'-'+ntg+'-'+idp;if(str2.length>lim){var reg=new RegExp('['+sep+']','gi'),tab=str2.split(reg),hit='',l=tab[0].length,i=0;while((l<lim)&&(i<tab.length)){hit+=tab[i]+sep;if(i<tab.length-1)l+=(tab[i+1].length)+1;i+=1}ntg=(ntg==1)?Math.ceil(str2.length/lim):ntg;mh='&mh='+nt+'-'+ntg+'-'+idp;if(hit!=''){xt_imgc.src=str1+'&idp='+idp+mh+hit;xt_imgc.onload=function(){xt_imgc.onload=null}}else{xt_imgc.src=str1+'&idp='+idp+mh+str2.substring(0,lim)+'&mherr=1';xt_imgc.onload=function(){xt_imgc.onload=null};return}str2=name;for(var j=i;j<tab.length;j++){str2+=tab[j]+((j==(tab.length-1))?'':sep)}xt_ParseUrl3(str1,str2,nt+1,ntg,name,sep,idp)}else if(str2.length>name.length){xt_imgc.src=(nt==1)?str1+'&idp='+idp+str2:str1+'&idp='+idp+mh+str2;xt_imgc.onload=function(){xt_imgc.onload=null}}}
function xtestr(str,expr,pos){var xtid=null;try{xtid=str.match(expr)[pos-1];}catch(e){xtid=null}return xtid;}
function xtLhit(hitclick){if((!xtpre&&xtone)||(!xd.webkitHidden&&xtone)){if(hitclick){xt_ParseUrl(Xt_id,(typeof hitclick=="string"?hitclick:Xt_param)+(xtfirst?'&idclient='+xt40:''),'&ref='+Xt_r.replace(/&/g,'$'),'1');xtone=false}else if(xt46=='1'){xt_ParseUrl(Xt_id,Xt_param+(xtfirst?'&idclient='+xt40:''),'&ref='+Xt_r.replace(/&/g,'$'),xt46);xtone=false}if(xtone==false){if(xt44!=''){xt_ParseUrl3(Xt_id+xt8b+'&p='+xtp+(xtfirst?'&idclient='+xt40:'')+(xw.xt_pageID?'&pid='+xw.xt_pageID+'&pchap='+(xw.xt_chap||'')+'&pidt='+(xw.xt_pageDate||''):'')+'&type=PDT'+xthl,xt44,1,1,'&pdtl=','|')}if(xtati.length>1500){xt_ParseUrl3(Xt_id+xt8b+'&p='+xtp+'&s2='+xw.xtn2+'&type=AT'+(xtfirst?'&idclient='+xt40:''),'&ati='+xtati.replace(/&/g,'%26'),1,1,'&ati=',',')}(function(){if(typeof(xtscript)!='undefined'){var at=document.createElement('script');at.type='text/javascript';at.async=true;at.src=xtscript;(document.getElementsByTagName('head')[0]||document.getElementsByTagName('body')[0]||document.getElementsByTagName('script')[0].parentNode).insertBefore(at,null)}})()}}}
if((xt8!=0)||(xt36!=0)||(xt11)){if(xt48!=''){var xtvid=xtf1('xtvid');if(!xtvid){xtvid=xt21.getTime()+''+xt_rd(6);xt49=xtvid;}var xtexp=new Date();xtexp.setMinutes(xtexp.getMinutes()+30);wck('xtvid',xtvid,xtexp,'',1);}var xtpm='xtor',xtpmd='xtdate',xtpmc='xtocl',xtpan='xtan',xtpat='xtat',xtpant='xtant',xt24=xtf3('xtor'),xtdtgo=xtf3('xtdt'),xt25=xtf3('xtref'),xt26=xtf3('xtan'),xt55=xtf3('xtat'),xt27=xtf3('an',xtm),xt56=xtf3('at',xtm),xt28=xtf3('ac',xtm),cookie_xtpmc=xtf1(xtpmc),cookie_xtgo=xtf1('xtgo'),cookie_xtord=xtf1('xtord'),cookie_xtvrn=xtf1('xtvrn'),xtocl=(cookie_xtpmc!=null)?cookie_xtpmc:'$',xtord=(cookie_xtgo=='0')?cookie_xtord:null,xtgord=(cookie_xtgo!=null)?cookie_xtgo:'0',xtvrn=(cookie_xtvrn!=null)?cookie_xtvrn:'$',xtgmt=xt21.getTime()/60000,xtgo=(xtdtgo!=null)?(((xtgmt-xtdtgo)<30)&&(xtgmt-xtdtgo)>=0)?'2':'1':xtgord,xtpgt=(xtgord=='1')?'&pgt='+cookie_xtord:((xtgo=='1')&&(xt24!=null))?'&pgt='+xt24:'',xto=(xt10!=null)?xt10:((xt24!=null)&&(xtgo=='0'))?xt24:(!xt11)?xtord:null;
xto=((xtocl.indexOf('$'+xto+'$')<0)||(xtocl=='$'))?xto:null;var xtock=(xtgo=='0')?xto:(xtgord=='2')?cookie_xtord:(xtgo=='2')?xt24:null;if(xtock!=null){tmpxto=xtock.substring(0,xtock.indexOf('-'));var xtdrm=xt4[tmpxto];}else{xtdrm='1';}if((xtdrm==null)||(xtdrm==xtud)){xtdrm=xt4['ad'];}if((xt26==null)&&(!xt11)){xt26=xtf1('xtanrd');}if((xt55==null)&&(!xt11)){xt55=xtf1('xtatrd');}var xtanc=xtf1(xtpan),xtattc=xtf1(xtpat),xtanct=xtf1(xtpant),xtxp=new Date(),xt29=new Date(),xt30=new Date();
if(!xt11){xtxp.setTime(xtxp.getTime()+(xtdrm*24*3600*1000));}else{xtxp.setTime(xtxp.getTime()+(xt5*1000));}xt30.setTime(xt30.getTime()+1800000);xt29.setTime(xt29.getTime()+(xt3*24*3600*1000));var xt31=(xt26!=null)?xt26.indexOf('-'):0,xt57=(xt55!=null)?xt55.indexOf('-'):0,xtan2=(xt27!=null)?'':((xt26!=null)&&(xt31>0))?'&ac='+xt26.substring(0,xt31)+'&ant=0&an='+xt26.substring(xt31+1,xt26.length):(xtanc!=null)?'&anc='+xtanc+'&anct='+xtanct:'',xtat2=(xt56!=null)?'':((xt55!=null)&&(xt57>0))?'&ac='+xt55.substring(0,xt57)+'&ant=0&at='+xt55.substring(xt57+1,xt55.length):(xtattc!=null)?'&attc='+xtattc+'&anct='+xtanct:'',xt32=(xtvrn.indexOf('$'+xt8+'$')<0)?'&vrn=1':'',xt35=((xtf3('xtatc')!=null)&&(xtf3('atc',xtm)==null))?'&atc='+xtf3('xtatc'):'';
if(xt32!=''){wck('xtvrn',(xtvrn.length<141)?xtvrn+xt8+'$':xtvrn.substring(0,141),xt29,xt1,0);}xt32+=(xto==null)?'':'&xto='+xto;xt32+=((xtan2!='')?xtan2:xtat2)+xtpgt+xt35;if(xt27!=null){wck(xtpan,xt28+'-'+xt27,xt29,xt1,1);wck(xtpant,'1',xt29,xt1,1);}else if((xt26!=null)&&(xtanct!='1')){wck(xtpan,xt26,xt29,xt1,1);wck(xtpant,'0',xt29,xt1,1);}if(xt56!=null){wck(xtpat,xt28+'-'+xt56,xt29,xt1,1);wck(xtpant,'1',xt29,xt1,1);}else if((xt55!=null)&&(xtanct!='1')){wck(xtpat,xt55,xt29,xt1,1);wck(xtpant,'0',xt29,xt1,1);}
var xtor=xtf1(xtpm),xtor_duree=xtf1(xtpmd),xtdate2=(xtor_duree!=null)?new Date(xtor_duree):new Date(),xt34=xtdate2.getTime()/(1000*3600),xtecart=(Math.floor(xt22-xt34)>=0)?Math.floor(xt22-xt34):0;xt32+=(xtor==null)?'':'&xtor='+xtor+'&roinbh='+xtecart;var xt33='',Xt_r=(xt25!=null)?xt25.replace(/[<>]/g,''):xtf1('xtref');if(Xt_r==null){Xt_r=xt20.replace(/[<>]/g,'');}if(Xt_r!=null)Xt_r=Xt_r.substring(0,1000);if (!xt11){if((xtock!=null)&&((xtocl.indexOf('$'+escape(xtock)+'$')<0)||(xtocl=='$'))){wck(xtpmc,xtocl+xtock+'$',xt30,xt1,1);}xt33+=xtg.javaEnabled()?'&jv=1':'&jv=0';var xtnav=xtg.appName+' '+xtg.appVersion,xtIE=(xtnav.indexOf('MSIE'));if(xtIE>=0){var xtvers=parseInt(xtnav.substr(xtIE+5));xtIE=true;}else{xtvers=parseFloat(xtg.appVersion);xtIE=false;}var xtnet=(xtnav.indexOf('Netscape')>=0),xtmac=(xtnav.indexOf('Mac')>=0),xtOP=(xtg.userAgent.indexOf('Opera')>=0);if((xtIE)&&(xtvers >=5)&&(!xtmac)&&(!xtOP)&&(!xt11)){try{xd.body.addBehavior('#default#clientCaps');}catch(e){}var xtconn='&cn='+xd.body.connectionType;xtconn+='&ul='+xd.body.UserLanguage;try{xd.body.addBehavior('#default#homePage');}catch(e){}var xthome='';try{xthome=(xd.body.isHomePage(location.href))?'&hm=1':'&hm=0';}catch(e){};var xtresr='&re='+xd.body.offsetWidth+'x'+xd.body.offsetHeight;}else{var xtconn='',xthome='';if(xtvers>=5){xtresr='&re='+xw.innerWidth+'x'+xw.innerHeight;}else{xtresr=''}}
if((xtnet)&&(xtvers >=4)||(xtOP)){var xtlang='&lng='+xtg.language;}else{if((xtIE)&&(xtvers >=4)&&(!xtOP)){var xtlang='&lng='+xtg.userLanguage;}else{xtlang='';}}wck('xtord','',xt21,xt1,1);if(xtock!=null){if((xtor==null)||(xt2=='1')){wck(xtpm,xtock,xtxp,xt1,1);wck(xtpmd,xt21,xtxp,xt1,1);}}var xthl='&hl='+xt21.getHours()+'x'+xt21.getMinutes()+'x'+xt21.getSeconds(),xt45=(xtdocl)?'&docl='+encodeURIComponent(xt6.location.href.replace(/&/g,'#ec#')):'',Xt_param=xt8b+xt9+'&p='+xtp+xthl+xtdi+xt12+xt13+xt32+xt45+xt47+xtm+xtconn+xthome+xtlang+'&vtag='+xtv+'&idp='+xtidpg;var xtvalCZ=xtf1('xtvalCZ',1);if(xtvalCZ!=null){Xt_param+=xtvalCZ.replace('&c=','&current=').replace('&b=','&before=').replace('&a=','&after=');var xtdateo=new Date();xtdateo.setTime(xtdateo.getTime()-3600000);wck('xtvalCZ',xtvalCZ,xtdateo,xt1,1);}

// MOVED TO THE TOP
//var Xt_id=xt7+'?';

if(xtvers >=4){try{xt33+='&r='+xts.width+'x'+xts.height+'x'+xts.pixelDepth+'x'+xts.colorDepth;}catch(e){}}
var xtide=xtf1('xtide');if(xtock!=null){switch(tmpxto.toLowerCase()){case'erec':case'epr':case'es':var xtmpide=null;try{var xtide_t=xtock.match(/(\[[^\]]*\])|([^\-]+)|(-)/g);var xtide_c=0;for(elem in xtide_t){if(xtide_t[elem]=="-"){xtide_c++}if(xtide_c==5&&xtide_t[elem]!="-"){xtmpide=xtide_t[elem]}}}catch(e){xtmpide=null}if(xtmpide!=null){xtide=xtmpide;wck('xtide',xtide,xt29,'',1)}break;default:break}}Xt_param+=xt33+xtresr+xt16+((xtide!=null)?'&ide='+xtide:'');var Xt_i=Xt_id+Xt_param+'&ref='+Xt_r.replace(/&/g,'$');if(xt49){Xt_param+='&lnk='+xt48+'&vid='+xt49;}var xtati=xtf3('ati',Xt_param,1)||'';if(xtati.length>1500){Xt_param=Xt_param.replace('&ati='+xtati,'')}if(window.navigator&&window.navigator.loadPurpose==="preview"&&xtg.userAgent.indexOf('Safari')!=-1&&xtg.userAgent.indexOf('Chrome')<0){if(xtpreview&&xt46=='1')xtLhit(Xt_param+"&pvw=1")}else if(xd.webkitVisibilityState=="prerender"){xtpre=true;xd.addEventListener("webkitvisibilitychange",xtLhit,false)}else{xtLhit()}}else{wck('xtgo',xtgo,xtxp,xt1,1);if(xt24!=null){wck('xtord',xt24,xtxp,xt1,1);}if(xt26!=null){wck('xtanrd',xt26,xtxp,xt1,1);}if(xt55!=null){wck('xtatrd',xt55,xtxp,xt1,1);}if(Xt_r!=''){wck('xtref',Xt_r.replace(/&/g,'$'),xtxp,xt1,0);}if(xw.xtloc!=null){xt6.location=xw.xtloc;}}}
if((xtclzone>0)&&(typeof(xtNodesload)=='function')){if(!xt58){xtNodesload();}else if(xw.addEventListener){xw.addEventListener('load',xtNodesload,false);}else if(xw.attachEvent){xw.attachEvent('onload',xtNodesload);}}

// END of vendor code //////////////////////////////////////////////////////////


//end tealium universal tag

//~~tv:1101.20131210
