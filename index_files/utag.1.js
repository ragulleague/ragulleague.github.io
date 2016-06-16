//tealium universal tag - utag.sender.7001 ut4.0.201604281336, Copyright 2016 Tealium.com Inc. All Rights Reserved.
var _gaq = _gaq || [];
try{
(function(id,loader,u){
  try{u=utag.o[loader].sender[id]={}}catch(e){u=utag.sender[id]};
  u.ev={'view':1,'link':1};
  u.max_custom=10;
  u.clearVar=function(){for(var i=1;i<=u.max_custom;i++){_gaq.push([u.prefix+'_deleteCustomVar',i])}};
  u.domain="uefa.com" || utag.loader.lh();
  u.prefix="";
  u.prefix=((u.prefix)?u.prefix+'.':'');
  u.ga1="UA-12554578-1";
  u.setallowlinker=false;
  u.inpage_linkid=false;
  if(u.inpage_linkid){_gaq.push(['_require', 'inpage_linkid', '//www.google-analytics.com/plugins/ga/inpage_linkid.js'])};
  _gaq.push([u.prefix+'_setAccount',u.ga1]);
  u.anonymizeIp="false";
  if(u.anonymizeIp==="true"){_gaq.push(['_gat._anonymizeIp'])};
  _gaq.push([u.prefix+'_setDomainName',u.domain]);
  if(u.setallowlinker || u.domain=='none'){_gaq.push([u.prefix+'_setAllowLinker', true])};
  u.map={"user_status":"cvar1.3","content_type":"cvar2.3","service_type":"cvar3.3","url_language_code":"cvar4.3","season":"cvar5.3","euro_pageName":"ga_pageOverride"};
  u.extend=[function(a,b){
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
}];

  u.send=function(a,b,c,d,e,f,g){
    if(u.ev[a]||typeof u.ev.all!="undefined"){
      b.ga_events=b.ga_events||[];
      u.addEvent=function(v){
        if(typeof v.eventCategory=="undefined" || typeof v.eventAction=="undefined"){
          utag.DB("GA event Category or Action is not set");
          return;
        }
        if(v.eventValue && isNaN(parseInt(v.eventValue))){
          utag.DB("GA event Value is not a number");
          v.eventValue = null;
        }else{
          v.eventValue = parseInt(v.eventValue) || null;
        }
        b.ga_events.push(v);
        return b.ga_events
      }
      u.a=a;
      for(c=0;c<u.extend.length;c++){try{d=u.extend[c](a,b);if(d==false)return}catch(e){}};
      for(c in utag.loader.GV(b)){if(typeof u.map[c+":"+b[c]]!="undefined"){b[c+":"+b[c]]=b[c]}}        
      for(c in utag.loader.GV(b)){if(typeof u.map[c]!="undefined"){d=u.map[c].split(",");for(e=0;e<d.length;e++){
	if(d[e].indexOf("cvar")>-1){
          f=d[e].substring(4).split(".");
          g=parseInt(f[0]);
          if(g>u.max_custom){u.max_custom=g};
          _gaq.push([u.prefix+'_setCustomVar',g,((c.indexOf(".")>0)?(c.split("."))[1]:c),b[c],parseInt(f[1])])
        /*}else if(d[e].indexOf("EVENT_")==0){b.ga_events_old=d[e].substring(6).split(";");*/
        }else if(d[e]=="ga_pageOverride"){
          _gaq.push([u.prefix+'_set',"page",b[c]]);
        }else if(d[e]=="ga_accountOverride"){_gaq.push([u.prefix+'_setAccount',b[c]])}
        else if(d[e]=="ga_eventCategory"){b.ga_eventCat=b[c]}
        else if(d[e].indexOf("ga_")==0){ b[d[e]]=b[c] }
        else{
          _gaq.push([u.prefix+"_set",d[e],b[c]]);
        }
      }}}
      if(u.a=="view"){
        _gaq.push([u.prefix+'_trackPageview']);
        this.clearVar();
      }

      if(typeof b.ga_eventCat!="undefined"){
        u.addEvent({eventCategory:b.ga_eventCat, eventAction:b.ga_eventAction, eventLabel:b.ga_eventLabel || null, eventValue:(typeof b.ga_eventValue!="undefined"?parseInt(b.ga_eventValue):null)});
      }else if(u.a=="link" && typeof b.event_name!="undefined"){ 
        u.addEvent({eventCategory:b.event_name, eventAction:b.link_type, eventLabel:b.link_text || null});
      }

      for(e=0;e<b.ga_events.length;e++){
        _gaq.push([u.prefix+"_trackEvent", b.ga_events[e].eventCategory, b.ga_events[e].eventAction, b.ga_events[e].eventLabel, b.ga_events[e].eventValue, b.ga_events[e].nonInteraction || b.ga_nonInteraction || null]); 
      }

      this.clearVar();
      if(b._corder){
        _gaq.push([u.prefix+'_addTrans',b._corder,b._cstore,(b.ga_totalOverride?b.ga_totalOverride:b._ctotal),b._ctax,b._cship,b._ccity,b._cstate,b._ccountry]);
        for(c=0;c<b._cprod.length;c++){
          if(b._cprod[c]){
            _gaq.push([u.prefix+'_addItem',b._corder,b._cprod[c],(typeof b._cprodname[c]!="undefined"?b._cprodname[c]:""),(typeof b._ccat[c]!="undefined"?b._ccat[c]:""),(typeof b._cprice[c]!="undefined"?b._cprice[c]:""),(typeof b._cquan[c]!="undefined"?b._cquan[c]:"1")]);
          }
        }
        _gaq.push([u.prefix+'_trackTrans']);
      }
      /*
      if(typeof b.ga_events_old!="undefined"){
        c=b.ga_events_old;for(f=0;f<4;f++){if(c[f]&&c[f].indexOf("$")==0){c[f]=b[c[f].substring(1)];}c[f]=(typeof c[f]=="undefined")?"":c[f];}if(isNaN(parseInt(c[3])))c[3]=null;_gaq.push([u.prefix+'_trackEvent',c[0],c[1],c[2],c[3]]);
        this.clearVar();
      }
      */

      (function() {
	  var id='tealium-tag-7001';
	  if (document.getElementById(id)) {return;}
          var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true; ga.id=id;
          ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
          var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
      })();
    }
  }
  try{utag.o[loader].loader.LOAD(id)}catch(e){utag.loader.LOAD(id)}
})('1','uefa.poc');
}catch(e){}
//end tealium universal tag
//~~tv:7001.20130617
