//tealium universal tag - utag.loader ut4.26.201606151447, Copyright 2016 Tealium.com Inc. All Rights Reserved. 

var utag_condload=false;try{(function(){function ul(src,a,b){a=document;b=a.createElement('script');b.language='javascript';b.type='text/javascript';b.src=src;a.getElementsByTagName('head')[0].appendChild(b)};if((""+document.cookie).match("utag_env_uefa_poc=([^\S;]*)")){if(RegExp.$1.indexOf("/prod/") === -1) {ul(RegExp.$1);utag_condload=true;__tealium_default_path='//tags.tiqcdn.com/utag/uefa/poc/prod/';}}})();}catch(e){};try{
var url = document.URL;
jQuery("body").find(".slider").delegate(".spage img.thb.s6", "click", function() {

    // Get the image name
    var image = jQuery(this).closest("img").attr('title');

    jQuery(document).ajaxStart(function() {

        // Match - get the match info . 

        var match = jQuery(".mb-beta > caption").text();

        if (match === "") {
            match = "ucl";

            if (url.indexOf(/futsaleuro/) != -1) {
                match = "Futsal EURO";
            }

            if (url.indexOf(/worldcup/) != -1) {
                match = "FIFA World Cup";
            }
        }

        // ATI Tracking

        window.setTimeout(function() {
            var ati_acct = b["site_id_2"];


            if (typeof window.xt_med === "function") {
                window.xtclzone = 0;
                window.xt_med(
                    "C", ati_acct,
                    "photos viewed" + "::" +
                    match + "::" +
                    image +
                    "&x6=" + utag.data.partners, "A"
                );

                // activate all click tracking again
                window.xtclzone = window.scriptOnClickZone || 0;
            }
        }, 300);

        // Unbind the event
        jQuery(document).unbind("ajaxStart");
    });
});
}catch(e){};
if(!utag_condload){try{
if (document.location.pathname === "/2016/uefachampionsleague/default_matchweek.html" || /\/uefachampionsleague\/(|index\.html)/.test(document.location.pathname)) {
    jQuery("div.main-content section.section").each(function(index, el) {
        var label = "";
        switch (index) {
            case 3:
                label = "Live_Coverage";
                break;
            case 4:
                label = "Standings";
                break;
            case 6:
                label = "Videos";
                break;
            case 7:
                label = "Photos";
                break;
            case 9:
                label = "Statistics";
                break;
        }
        if (label !== "") {
            jQuery(el).attr("xtcz", label);
        }
    })
}

if (document.location.pathname === "/2016/uefachampionsleague/default_no_matchweek.html") {
    jQuery("div.main-content section.section").each(function(index, el) {
        var label = "";
        switch (index) {
            case 2:
                label = "Trending_Now";
                break;
            case 4:
                label = "Standings";
                break;
            case 5:
                label = "Videos";
                break;
            case 6:
                label = "Photos";
                break;
            case 8:
                label = "Statistics";
                break;
        }
        if (label !== "") {
            jQuery(el).attr("xtcz", label);
        }
    })
}
jQuery("footer.footer-wrap").attr("xtcz", "Footer");
}catch(e){}};
if(!utag_condload){try{
if (document.location.pathname === "/mobilesite/uefachampionsleague/default_matchweek.html") {
    jQuery("div.d3cmsCBody div.row").each(function(index, el) {
        var label = "";
        switch (index) {
            case 2:
                label = "Exclusive";
                break;
            case 3:
                label = "Tranding_Now";
                break;
            case 6:
                label = "Latest";
                break;
            case 7:
                label = "Standings";
                break;
            case 8:
                label = "Featured_Video";
                break;
            case 10:
                label = "Photos";
                break;
            case 11:
                label = "Calendar";
                break;
            case 13:
                label = "QuickLinks";
                break;
            case 14:
                label = "Offical_Sponsors";
                break;
        }
        if (label !== "") {
            jQuery(el).attr("xtcz", label);
        }
    })
}
if (document.location.pathname === "/mobilesite/uefachampionsleague/default_no_matchweek.html") {
    jQuery("div.d3cmsCBody div.row").each(function(index, el) {
        var label = "";
        switch (index) {
            case 2:
                label = "Exclusive";
                break;
            case 3:
                label = "Tranding_Now";
                break;
            case 6:
                label = "Latest";
                break;
            case 7:
                label = "Standings";
                break;
            case 8:
                label = "Featured_Video";
                break;
            case 10:
                label = "Photos";
                break;
            case 12:
                label = "Calendar";
                break;
            case 13:
                label = "QuickLinks";
                break;
            case 14:
                label = "Offical_Sponsors";
                break;
        }
        if (label !== "") {
            jQuery(el).attr("xtcz", label);
        }
    })
}
jQuery("div.d3cmsCFooter").attr("xtcz","Change_Langauge");
}catch(e){}};
if (typeof utag == "undefined" && !utag_condload) {
  var utag = {
    id:"uefa.poc",
    o:{},
    sender: {},
    send: {},
    rpt: {
      ts: {
        a: new Date()
      }
    },
    dbi: [],
    util:{
      pad:function(a,b,c,d){a=""+((a-0).toString(16));d='';if(b>a.length){for(c=0;c<(b-a.length);c++){d+='0'}}return ""+d+a},
      vi:function(t,a,b){a=this.pad(t,12);b=""+Math.random();a+=this.pad(b.substring(2,b.length),16);try{a+=this.pad((navigator.plugins.length?navigator.plugins.length:0),2)}catch(e){};a+=this.pad(navigator.userAgent.length,3);a+=this.pad(top.document.URL.length,4);a+=this.pad(navigator.appVersion.length,3);a+=this.pad(screen.width+screen.height+parseInt((screen.colorDepth)?screen.colorDepth:screen.pixelDepth),5);return a}
    },
    loader: {
      q: [],
      lc: 0,
      f: {},
      p: 0,
      ol: 0,
      wq: [],
      lq: [],
      bq: {},
      bk: {},
      rf: 0,
      ri: 0,
      rp: 0,
      rq: [],
      lh: function(a, b, c) {
        a = "" + location.hostname;
        b = a.split(".");
        c = (/\.co\.|\.com\.|\.org\.|\.edu\.|\.net\.|\.asn\./.test(a)) ? 3 : 2;
        return b.splice(b.length - c, c).join(".");
      },
      
      WQ: function(a, b, c, d) {
        utag.DB('WQ:' + utag.loader.wq.length);
        try {
          // this picks up a utag_data items added after utag.js was loaded
          // Gotcha: Data layer set after utag.js will not overwrite something already set via an extension.  Only "new" values are copied from utag_data
          // for case where utag_data is set after utag.js is loaded
          if(utag.udoname && utag.udoname.indexOf(".")<0){
            utag.ut.merge(utag.data,window[utag.udoname],0);
          }

          utag.handler.RE('view',utag.data,"bwq");
          // process load rules again if this flag is set
          if(utag.cfg.load_rules_at_wait){
            utag.handler.LR();
          }
        } catch (e) {utag.DB(e)};
	
	d=0;
        
        for (a = 0; a < utag.loader.wq.length; a++) {
          b = utag.loader.wq[a];
	  b.load = utag.loader.cfg[b.id].load;
          if (b.load == 4){
            //LOAD the bundled tag set to wait here
            this.f[b.id]=0;
            utag.loader.LOAD(b.id)
          }else if (b.load > 0) {
            utag.loader.AS(b);
	    d++;
          }else{
            // clear flag for those set to wait that were not actually loaded
            this.f[b.id]=1;
          }
        }

	if(d==0){
	  utag.loader.END();
	}
      },
      AS: function(a, b, c, d) {
        utag.send[a.id] = a;
        if (typeof a.src == 'undefined') {
          a.src = utag.cfg.path + ((typeof a.name != 'undefined') ? a.name : 'utag.' + a.id + '.js')
        }
        a.src += (a.src.indexOf('?') > 0 ? '&' : '?') + 'utv=' + (a.v?a.v:utag.cfg.v);
        utag.rpt['l_' + a.id] = a.src;
        b = document;
        this.f[a.id]=0;
        if (a.load == 2) {
          b.write('<script id="utag_' + a.id + '" src="' + a.src + '"></scr' + 'ipt>')
          if(typeof a.cb!='undefined')a.cb();
        } else if(a.load==1 || a.load==3) {
          if (b.createElement) {
            c = 'utag_uefa.poc_'+a.id;
            if (!b.getElementById(c)) {
	      d = {
	        src:a.src,
		id:c,
		loc:a.loc
              }
              if(a.load == 3){d.type="iframe"};
	      if(typeof a.cb!='undefined')d.cb=a.cb;
              utag.ut.loader(d);
            }
          }
        }
      },
      GV: function(a, b, c) {
        b = {};
        for (c in a) {
          if (a.hasOwnProperty(c) && typeof a[c] != "function") b[c] = a[c];
        }
        return b
      },
      RDdom: function(o){
        o["dom.referrer"] = eval("document." + "referrer");
        o["dom.title"] = "" + document.title;
        o["dom.domain"] = "" + location.hostname;
        o["dom.query_string"] = ("" + location.search).substring(1);
        o["dom.hash"] = ("" + location.hash).substring(1);
        o["dom.url"] = "" + document.URL;
        o["dom.pathname"] = "" + location.pathname;
      },
      RDcp: function(o, b, c, d){
        b = b || utag.loader.RC();
        for (d in b) {
          if (d.match(/utag_(.*)/)) {
            for (c in utag.loader.GV(b[d])) {
              o["cp.utag_" + RegExp.$1 + "_" + c] = b[d][c];
            }
          }
        }
        for (c in utag.loader.GV((utag.cl && !utag.cl['_all_']) ? utag.cl : b)) {
          if (c.indexOf("utag_") < 0 && typeof b[c] != "undefined") o["cp." + c] = b[c];
        }
      },
      RDqp: function(o, a, b, c){
        a = location.search + (location.hash+'').replace("#","&");
        if(utag.cfg.lowerqp){a=a.toLowerCase()};
        if (a.length > 1) {
          b = a.substring(1).split('&');
          for (a = 0; a < b.length; a++) {
            c = b[a].split("=");
            if(c.length>1){
              o["qp." + c[0]] = utag.ut.decode(c[1])
            }
          }
        }
      },
      RD: function(o, a, b, c, d, e, f, g, h) {
        utag.DB("utag.loader.RD");
        // temporary fix for multiple calls to RD
        if(typeof o["_t_session_id"]!="undefined"){return};
        a = document.getElementsByTagName("meta");
        for (b = 0; b < a.length; b++) {
          try{
            h = a[b].name || a[b].getAttribute("property") || ""; 
          }catch(e){h="";utag.DB(e)};
          if (utag.cfg.lowermeta){h=h.toLowerCase()};
          if (h != ""){o["meta." + h] = a[b].content}
        }
        this.RDqp(o);
        a = (new Date()).getTime();
        b = utag.loader.RC();
        c = a + parseInt(utag.cfg.session_timeout);
        d = a + (Math.ceil(Math.random() * 1000000));      
	
	if(!b.utag_main){
	  b.utag_main={};
	}else if(b.utag_main.ses_id&&typeof b.utag_main._st!="undefined"&&parseInt(b.utag_main._st)<a){
	  delete b.utag_main.ses_id;
	}
	
        if(!b.utag_main.v_id)b.utag_main.v_id=utag.util.vi(a);
        if(!b.utag_main.ses_id){
          b.utag_main._ss=1;
        }else{
          d=b.utag_main.ses_id;
          b.utag_main._ss=0;
        }

        utag.loader.SC("utag_main", {"v_id": b.utag_main.v_id, "_ss" : b.utag_main._ss, "_st": c, "ses_id": d + ";exp-session"});

        o["_t_visitor_id"]=b.utag_main.v_id;
        o["_t_session_id"]=d;
        o["_t_session_start"]=b.utag_main._ss;
	
        this.RDcp(o,b);
        this.RDdom(o);
      },
      RC: function(a, x, b, c, d, e, f, g, h, i, j, k, l, m, n, o, v, ck, cv, r, s, t) {
        o = {};
        b = ("" + document.cookie != "") ? (document.cookie).split("; ") : [];
        r = /^(.*?)=(.*)$/;
        s = /^(.*);exp-(.*)$/;
        t = (new Date()).getTime();
        for (c = 0; c < b.length; c++) {
          if (b[c].match(r)) {
            ck = RegExp.$1;
            cv = RegExp.$2;
          }
          e = utag.ut.decode(cv);
          if (typeof ck!="undefined"){
            if (ck.indexOf("ulog") == 0 || ck.indexOf("utag_") == 0) {
              e = e.split("$");
              g = [];
              j = {};
              for (f = 0; f < e.length; f++) {
                try{
                  g = e[f].split(":");
                  if (g.length > 2) {
                    g[1] = g.slice(1).join(":");
                  }
                  v = "";
                  if (("" + g[1]).indexOf("~") == 0) {
                    h = g[1].substring(1).split("|");
                    for (i = 0; i < h.length; i++) h[i] = utag.ut.decode(h[i]);
                    v = h
                  } else v = utag.ut.decode(g[1]);
                  j[g[0]] = v;
                }catch(er){utag.DB(er)};
              }
              o[ck] = {};
              for (f in utag.loader.GV(j)) {
                if (j[f] instanceof Array) {
                  n = [];
                  for (m = 0; m < j[f].length; m++) {
                    if (j[f][m].match(s)){
                      k = (RegExp.$2 == "session") ? (typeof j._st != "undefined" ? j._st : t - 1) : parseInt(RegExp.$2);
                      if (k > t) n[m] = (x == 0) ? j[f][m] : RegExp.$1;
                    }
                  }
                  j[f] = n.join("|");
                } else {
                  j[f] = "" + j[f];
                  if (j[f].match(s)) {
                    k = (RegExp.$2 == "session") ? (typeof j._st != "undefined" ? j._st : t - 1) : parseInt(RegExp.$2);
                    j[f] = (k < t) ? null : (x == 0 ? j[f] : RegExp.$1);
                  }
                }
                if (j[f]) o[ck][f] = j[f];
              }
            } else if (utag.cl[ck] || utag.cl['_all_']) {
              o[ck] = e
            }
          }
        }
        return (a) ? (o[a] ? o[a] : {}) : o;
      },
      SC: function(a, b, c, d, e, f, g, h, i, j, k, x, v) {
        if (!a) return 0;
        if (a=="utag_main" && utag.cfg.nocookie) return 0;
        v = "";
        var date = new Date();
        x = "Thu, 31 Dec " + (date.getFullYear()+2) + " 00:00:00 GMT";
        if (c && c == "da") {
          x = "Thu, 31 Dec 2009 00:00:00 GMT";
        } else if (a.indexOf("utag_") != 0 && a.indexOf("ulog") != 0) {
          if (typeof b != "object") {
            v = b
          }
        } else {
          d = utag.loader.RC(a, 0);
          for (e in utag.loader.GV(b)) {
            f = "" + b[e];
            if (f.match(/^(.*);exp-(\d+)(\w)$/)) {
              g = date.getTime() + parseInt(RegExp.$2) * ((RegExp.$3 == "h") ? 3600000 : 86400000);
              if (RegExp.$3 == "u") g = parseInt(RegExp.$2);
              f = RegExp.$1 + ";exp-" + g;
            }
            if (c == "i") {
              if (d[e] == null) d[e] = f;
            } else if (c == "d") delete d[e];
            else if (c == "a") d[e] = (d[e] != null) ? (f - 0) + (d[e] - 0) : f;
            else if (c == "ap" || c == "au") {
              if (d[e] == null) d[e] = f;
              else {
                if (d[e].indexOf("|") > 0) {
                  d[e] = d[e].split("|")
                }
                g = (d[e] instanceof Array) ? d[e] : [d[e]];
                g.push(f);
                if (c == "au") {
                  h = {};
                  k = {};
                  for (i = 0; i < g.length; i++) {
                    if (g[i].match(/^(.*);exp-(.*)$/)) {
                      j = RegExp.$1;
                    }
                    if (typeof k[j] == "undefined") {
                      k[j] = 1;
                      h[g[i]] = 1;
                    }
                  }
                  g = [];
                  for (i in utag.loader.GV(h)) {
                    g.push(i);
                  }
                }
                d[e] = g
              }
            } else d[e] = f;
          }
          h = new Array();
          for (g in utag.loader.GV(d)) {
            if (d[g] instanceof Array) {
              for (c = 0; c < d[g].length; c++) {
                d[g][c] = encodeURIComponent(d[g][c])
              }
              h.push(g + ":~" + d[g].join("|"))
            } else h.push(g + ":" + encodeURIComponent(d[g]))
          };
          if (h.length == 0) {
            h.push("");
            x = ""
          }
          v = (h.join("$"));
        }
        document.cookie = a + "=" + v + ";path=/;domain=" + utag.cfg.domain + ";expires=" + x;
        return 1
      },
      LOAD: function(a, b, c, d) {
        //utag.DB('utag.loader.LOAD:' + a);
	if(this.ol==0){
          if(utag.loader.cfg[a].block && utag.loader.cfg[a].cbf){
            this.f[a] = 1;
	    delete utag.loader.bq[a];
          }
	  for(b in utag.loader.GV(utag.loader.bq)){
            if(utag.loader.cfg[a].load==4 && utag.loader.cfg[a].wait==0){
              utag.loader.bk[a]=1;
              utag.DB("blocked: "+ a);
            }
	    utag.DB("blocking: " + b);
	    return;
	  }
	  utag.loader.INIT();
	  return;
	}
        utag.DB('utag.loader.LOAD:' + a);
	
        if (this.f[a] == 0) {
          this.f[a] = 1;
      	
	  if(utag.cfg.noview!=true){
	    if(utag.loader.cfg[a].send){
	      utag.DB("SENDING: "+a);
	      try{
		utag.sender[a].send('view',utag.handler.C(utag.data));
		utag.rpt['s_' + a] = 0;
	      } catch (e) {
                utag.DB(e);
		utag.rpt['s_' + a] = 1;
	      }
	    }
	  }
	  if(utag.loader.rf==0)return;
          for (b in utag.loader.GV(this.f)) {
            if (this.f[b] == 0 || this.f[b] == 2) return
          }
	  utag.loader.END();
        }
      },
      EV: function(a, b, c, d) {
        if (b == "ready") {
          if (document.readyState !== "loading") setTimeout(c, 1);
          else {
            if(typeof utag.loader.ready_q=="undefined"){
              utag.loader.ready_q=[]; 
              utag.loader.run_ready_q=function(){
                for(var i=0;i<utag.loader.ready_q.length;i++){
                  utag.DB("READY_Q:"+i);
                  try{utag.loader.ready_q[i]()}catch(e){utag.DB(e)};
                }
              }
            }
            utag.loader.ready_q.push(c);

            var RH;

            if(utag.loader.ready_q.length<=1){
              if (document.addEventListener) {
                RH = function() {
                  document.removeEventListener("DOMContentLoaded", RH, false);
                  utag.loader.run_ready_q()
                };
                document.addEventListener("DOMContentLoaded", RH, false);
                window.addEventListener("load", utag.loader.run_ready_q, false);
              } else if (document.attachEvent) {
                RH = function() {
                  if (document.readyState !== "loading") {
                    document.detachEvent("onreadystatechange", RH);
                    utag.loader.run_ready_q()
                  }
                };
                document.attachEvent("onreadystatechange", RH);
                window.attachEvent("onload", utag.loader.run_ready_q);
              }
            }
          }
        } else {
          if (a.addEventListener) {
            a.addEventListener(b, c, false)
          } else if (a.attachEvent) {
            a.attachEvent(((d == 1) ? "" : "on") + b, c)
          }
        }
      },
      END: function(b, c, d, e){
        if(this.ended){return};
        this.ended=1;
	utag.DB("loader.END");
        b = utag.data;
        // add the default values for future utag.link/view calls
	if(utag.handler.base!='*'){
          e = utag.handler.base.split(",");
          for (d = 0; d < e.length; d++) {
            if (typeof b[e[d]] != "undefined") utag.handler.df[e[d]] = b[e[d]]
          }
        }
        // add the dom properties
	for(d in utag.loader.GV(b)){
          e=''+d;
          if(utag.handler.base=='*' || (/^dom\.|^cp\.|^meta\.|^qp\./.test(e))){
            utag.handler.df[d]=b[d]
          }
        }

        utag.rpt['r_0']="t";
	for(var r in utag.loader.GV(utag.cond)){
          utag.rpt['r_'+r]=(utag.cond[r])?"t":"f";
        }

        utag.rpt.ts['s'] = new Date();
	
	if(utag.data["_t_session_start"]==1)utag.ut.loader({src:"//tags.tiqcdn.com/utag/tiqapp/utag.v.js?a="+utag.cfg.utid+(utag.cfg.nocookie?"&nocookie=1":"&cb="+(new Date).getTime()),id:"tiqapp"});
        utag.handler.RE('view',b,"end");
	utag.handler.INIT();
      }
    },
    DB: function(a, b) {
      // return right away if we've already checked the cookie
      if(utag.cfg.utagdb===false){
        return;
      }else if(typeof utag.cfg.utagdb=="undefined"){
        utag.db_log=[];
        b = document.cookie+'';
        utag.cfg.utagdb=((b.indexOf('utagdb=true') >= 0)?true:false);
      }
      if(utag.cfg.utagdb===true){
        utag.db_log.push(a);
        try{console.log(a)}catch(e){}
      }
    },
    RP: function(a, b, c) {
      if (typeof a != 'undefined' && typeof a.src != 'undefined' && a.src != '') {
        b = [];
        for (c in utag.loader.GV(a)) {
          if (c != 'src') b.push(c + '=' + escape(a[c]))
        }
        this.dbi.push((new Image()).src = a.src + '?utv=' + utag.cfg.v + '&utid=' + utag.cfg.utid + '&' + (b.join('&')))
      }
    },
    view: function(a,c,d) {
      return this.track({event:'view', data:a, cfg:{cb:c,uids:d}})
    },
    link: function(a,c) {
      return this.track({event:'link', data:a, cfg:{cb:c}})
    },
    track: function(a,b,c,d) {
      if (typeof a == "string") a = { event: a, data: b, cfg: {cb: c} };

      for(d in utag.loader.GV(utag.o)){
        try{
          utag.o[d].handler.trigger(a.event || "view", a.data || a, a.cfg)
        }catch(e){utag.DB(e)};
      }
      if(a.cfg && a.cfg.cb)try{a.cfg.cb()}catch(e){utag.DB(e)};
      return true
    },
    handler: {
      base: "",
      df: {},
      o: {},
      send: {},
      iflag: 0,
      INIT: function(a, b, c) {
        utag.DB('utag.handler.INIT');
        this.iflag = 1;
        a = utag.loader.q.length;
        if (a > 0) {
          for (b = 0; b < a; b++) {
            c = utag.loader.q[b];
	    utag.handler.RE(c.a, c.b);
            utag.handler.trigger(c.a, c.b)
          }
        }
        // Reset/clear the noview flag
        utag.cfg.noview=false;
        //##UTABSOLUTELAST##
      },
      test: function() {
        return 1
      },
      // reset and run load rules
      LR: function(){
        for(var d in utag.loader.GV(utag.cond)){
          utag.cond[d]=false;
        }
        utag.loader.loadrules();
        // TODO: Publish engine update still needed: move the setting of utag.loader.cfg to a new function (utag.loader.initcfg)
        if(utag.loader.initcfg){utag.loader.initcfg()}else{utag.loader.GET()};
      },
      // FUTURE: The third param "c" is a string that defines the location i.e. "blr" == before load rules
      RE:function(a,b,c,d,e,f,g){
        if(c && !this.cfg_extend){
          return 0; 
        }
        utag.DB('All Tags EXTENSIONS');
        if(typeof this.extend != "undefined"){
          g=0;
          for (d = 0; d < this.extend.length; d++) {
            try {
              /* FUTURE: Support for Extension Attributes */
              e=0;
              if(typeof this.cfg_extend!="undefined"){
                f=this.cfg_extend[d];
                if(typeof f.count == "undefined")f.count=0;
                if(f[a]==0 || (f.once==1 && f.count>0) || (typeof c!= "undefined" && f[c]==0)){
                  e=1
                }else{
                  if(typeof c!="undefined" && f[c]==1){g=1};
                  f.count++
                }
              }
              if(e!=1){
                this.extend[d](a, b);
                utag.rpt['ex_' + d] = 0
              }
            } catch (e) {
              utag.rpt['ex_' + d] = 1;
	      utag.ut.error({e:e.message,s:utag.cfg.path+'utag.js',l:d,t:'ge'});
            }
          }
          return g;
        }
      },
      trigger: function(a, b, c, d, e, f) {
        utag.DB('trigger:'+a);
        b = b || {};

        if (!this.iflag) {
          utag.loader.q.push({
            a: a,
            b: b
          });
          return;
        }

        utag.ut.merge(b,this.df,0);
        // make sure these values are current for AJAX pages
        utag.loader.RDqp(b);
        utag.loader.RDcp(b);
        utag.loader.RDdom(b);

        // set cfg.uids or cfg.tids to only run specific set of tags
        // utag.track( {event : ”view”, data: {myvar : “myval” }, cfg: {uids : [1,2,10] } } );
        
        if(c && c.uids){
          this.RE(a,b);
          for(f=0;f<c.uids.length;f++){
            d=c.uids[f];
            try {
                // bypass load rules
                if(typeof utag.sender[d]!="undefined"){
                  utag.sender[d].send(a, utag.handler.C(b));
                }else if (a=="view" && utag.loader.cfg[d].load!=2 && utag.loader.cfg[d].s2s!=1){
                  utag.ut.merge(utag.data,b,1);
                  utag.loader.AS({id : d, load : 1}); 
                }
            } catch (e) {utag.DB(e)}
          }
        }else if(utag.cfg.load_rules_ajax){
          // right now, load rules use utag.data (replace items in utag.data with items in b)
          this.RE(a,b,"blr");
          utag.ut.merge(utag.data,b,1);
          // clear and re-run load rules
          this.LR();
          this.RE(a,b);
          // TBD: Run through the "bwq" Extensions again here? (For now, require "bwq" is also set to "run once"?) 

          // TODO: use cfgsort? 
          for(d in utag.loader.cfg){
            try {
              if(utag.loader.cfg[d].load && utag.loader.cfg[d].send){
                if(typeof utag.sender[d]!="undefined"){
                  utag.sender[d].send(a, utag.handler.C(b));
		  utag.rpt['s_' + d] = 0;
                }else if (a=="view" && utag.loader.cfg[d].load!=2 && utag.loader.cfg[d].s2s!=1){
                  // bring in a new tag if the load rule condition is now true
                  // need to run merge again.. but can be removed when we have https://trello.com/c/XLIJxNDE fixed 
                  utag.ut.merge(utag.data,b,1);
                  utag.loader.AS({id : d, load : 1}); 
                }
              }
            }catch (e) {utag.DB(e)}
          }
        }else{
          this.RE(a,b);
          for (d in utag.loader.GV(utag.sender)) {
            try {
                utag.sender[d].send(a, utag.handler.C(b));
		utag.rpt['s_' + d] = 0;
            } catch (e) {utag.DB(e)}
          }
        }

      },
      // "sort-of" copy
      C: function(a, b, c, d) {
        b = {};
        for (c in utag.loader.GV(a)) {
          if(a[c] instanceof Array){
            b[c] = a[c].slice(0)
          }else{
            // objects are still references to the original (not copies)
            b[c] = a[c]
          }
        }
        return b
      }
    },
    ut:{
      isEmptyObject: function(o, a) {
	for (a in o) {
          return false;
        }
        return true;
      },
      merge: function(a, b, c, d) {
        if(c){
          for(d in utag.loader.GV(b)){
            a[d] = b[d]
          }
        }else{
          for(d in utag.loader.GV(b)){
            if(typeof a[d]=="undefined")a[d] = b[d]
          }
        }
      },
      decode: function(a, b) {
        b = "";
        try{b = decodeURIComponent(a)}catch(e){utag.DB(e)};
        if (b == ""){b = unescape(a)};
        return b
      },
      error: function(a, b, c){
        if(typeof utag_err!="undefined"){
          utag_err.push(a)
        }
        c="";for(b in a){c+=b+":"+a[b]+" , "};
        utag.DB(c)
      },
      //TODO: Add wrapper utag.ut.libloader to call loader (for backwards compatibility) with legacy utag.ut.libloader calls
      loader: function(o, a, b, c, l) {
        a=document;
        if (o.type=="iframe") {
          b = a.createElement("iframe");b.setAttribute("height","1");b.setAttribute("width","1");b.setAttribute("style","display:none");
          b.setAttribute("src", o.src);
        }else if (o.type=="img"){
          utag.DB("Attach img: "+o.src);
          b=new Image();b.src=o.src;
          return;
        }else{
          b = a.createElement("script");b.language="javascript";b.type="text/javascript";
          b.src = o.src;
        }
        if(o.id){b.id=o.id};
        if (typeof o.cb=="function") {
          b.hFlag=0;b.onreadystatechange=function(){if((this.readyState=='complete'||this.readyState=='loaded')&&!b.hFlag){b.hFlag=1;o.cb()}};
          b.onload=function(){if(!b.hFlag){b.hFlag=1;o.cb()}}
        }
        l = o.loc || "head";
        c = a.getElementsByTagName(l)[0];
        if (c) {
          utag.DB("Attach to "+l+": "+o.src);
          if (l == "script") {
            c.parentNode.insertBefore(b, c);
          } else {
            c.appendChild(b)
          }
        }
      }
    }
  };
  utag.o['uefa.poc']=utag;
  utag.cfg = {
    v: "ut4.26.201606151447",
    // Enable load rules ajax feature by default
    load_rules_ajax: true,
    load_rules_at_wait: false,
    lowerqp: false,
    //noview: ##UTNOVIEW##,
    session_timeout: 1800000,
    readywait: 0,
    noload: 0,
    domain: utag.loader.lh(),
    path: "//tags.tiqcdn.com/utag/uefa/poc/prod/",
    utid: "uefa/poc/201606151447"
  };try{var _gaq=_gaq || [];var pageTracker=pageTracker || {_trackEvent:function(c,d,e,f,g){g={ga_eventCat:c,ga_eventAction:d,ga_eventLabel:e,ga_eventValue:f};utag.link(g,null,[1]);},_trackPageview:function(c){_gaq.push(['_trackPageview',c?c:null]);}}}catch(e){};utag.cond={13:0,14:0,15:0};
utag.pagevars=function(ud){ud = ud || utag.data;try{ud['js_page._sf_async_config.sections']=_sf_async_config.sections}catch(e){utag.DB(e)};try{ud['js_page._sf_async_config.title']=_sf_async_config.title}catch(e){utag.DB(e)};try{ud['js_page.PlayerVideo.omntitle']=PlayerVideo.omntitle}catch(e){utag.DB(e)};try{ud['js_page._newsid']=_newsid}catch(e){utag.DB(e)};try{ud['js_page.BrowserDetect.language']=BrowserDetect.language}catch(e){utag.DB(e)};try{ud['js_page.queryterm']=queryterm}catch(e){utag.DB(e)};};
utag.loader.initdata = function() {   try {       utag.data = (typeof utag_data != 'undefined') ? utag_data : {};       utag.udoname='utag_data';    } catch (e) {       utag.data = {};       utag.DB('idf:'+e);   }};utag.loader.loadrules = function(_pd,_pc) {var d = _pd || utag.data; var c = _pc || utag.cond;for (var l in utag.loader.GV(c)) {switch(l){
case '13':try{c[13]|=(d['dom.pathname'].toString().toLowerCase()=='/uefachampionsleague/index.html'.toLowerCase())||(d['dom.pathname'].toString().toLowerCase()=='/2016/uefachampionsleague/default_matchweek.html'.toLowerCase())||(d['dom.pathname'].toString().toLowerCase()=='/mobilesite/uefachampionsleague/default_matchweek.html'.toLowerCase())||(d['dom.pathname'].toString().toLowerCase()=='/2016/uefachampionsleague/default_no_matchweek.html'.toLowerCase())||(d['dom.pathname'].toString().toLowerCase()=='/mobilesite/uefachampionsleague/default_no_matchweek.html'.toLowerCase())||(d['dom.pathname'].toString().toLowerCase()=='/2016/_default.html'.toLowerCase())||(d['dom.pathname'].toString().toLowerCase()=='/index.html'.toLowerCase()&&d['dom.domain'].toString().toLowerCase()=='www.uefa.com'.toLowerCase())||(d['dom.domain'].toString().toLowerCase()=='www.uefa.com'.toLowerCase()&&d['dom.pathname']=='/')||(/^\/uefaeuro/i.test(d['dom.pathname']))||(d['dom.domain'].toString().toLowerCase().indexOf('europredictor.uefa.com'.toLowerCase())>-1)||(d['dom.domain'].toString().toLowerCase().indexOf('alltime11.uefa.com'.toLowerCase())>-1)||(d['dom.domain'].toString().toLowerCase().indexOf('mascot.uefa.com'.toLowerCase())>-1)||(d['dom.domain'].toString().toLowerCase().indexOf('eurofantasy.uefa.com'.toLowerCase())>-1)}catch(e){utag.DB(e)}; break;
case '14':try{c[14]|=(d['dom.pathname'].toString().toLowerCase().indexOf('fantasy16'.toLowerCase())<0)||(d['dom.domain']!='eurofantasy.uefa.com')}catch(e){utag.DB(e)}; break;
case '15':try{c[15]|=(d['dom.pathname'].toString().toLowerCase().indexOf('fantasy16'.toLowerCase())>-1)||(d['dom.domain']=='eurofantasy.uefa.com')}catch(e){utag.DB(e)}; break;}}};utag.pre=function() {    utag.loader.initdata();utag.pagevars();    try{utag.loader.RD(utag.data)}catch(e){utag.DB(e)};    utag.loader.loadrules();        };utag.loader.GET=function(){utag.cl={'_all_':1};utag.pre();
  utag.handler.extend=[function(a,b){ try{ if(b['dom.pathname'].toString().indexOf('fantasy16')>-1){b['euro_pageName']=b['pageName']} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if(1){try{b['dom.url']=decodeURIComponent(b["dom.url"] );}catch(e){}} } catch(e){ utag.DB(e) }  },
function(a,b){
/*
 * @author: bruno buous
 * @purpose: populate data sources from user_login cookie
 * @example:
 * - user_sgmt_country: "cze"
 * - user_sgmt_gender: "m"
 * - user_sgmt_login_origin: "web"
 * - user_sgmt_newsletter: "no"
 * - user_sgmt_pref_lang: "en"
 * - user_sgmt_pref_team: "2"
 * - user_sgmt_yob: "1980"
 * - user_smgt_user_ID: "12185009"
 */
function getCookie(c_name)
{
var c_value = document.cookie;
var c_start = c_value.indexOf(" " + c_name + "=");
if (c_start == -1)
  {
  c_start = c_value.indexOf(c_name + "=");
  }
if (c_start == -1)
  {
  c_value = null;
  }
else
  {
  c_start = c_value.indexOf("=", c_start) + 1;
  var c_end = c_value.indexOf(";", c_start);
  if (c_end == -1)
  {
c_end = c_value.length;
}
c_value = unescape(c_value.substring(c_start,c_end));
c_value = c_value.split("&");
}
return c_value;
}

if (document.cookie.indexOf("uefa_login") >= 0) {
b["user_sgmt_pref_team"] = getCookie("uefa_login")[4].split("=")[1];
b["user_smgt_user_ID"] =getCookie("uefa_login")[6].split("=")[1];
b["user_sgmt_pref_lang"] = getCookie("uefa_login")[2].split("=")[1];
b["user_sgmt_gender"] = getCookie("uefa_login")[7].split("=")[1];
b["user_sgmt_country"] = getCookie("uefa_login")[9].split("=")[1];
b["user_sgmt_newsletter"] = getCookie("uefa_login")[10].split("=")[1];

var year = getCookie("uefa_login")[8].split("=")[1];
b["user_sgmt_yob"] = year.substring(year.lastIndexOf("%2F")+3);  
  
}
},
function(a,b,c,d,e,f,g){d=b['dom.url'];if(typeof d=='undefined')return;c=[{'uefa.com/uefaeuropaleague/season=2016/statistics':'Adidas'},{'uefa.com/uefachampionsleague/season=2016/matches/index.html':'Gazprom'},{'uefa.com/uefachampionsleague/season=2016/matches/bymonth':'Gazprom'},{'uefa.com/uefachampionsleague/season=2016/matches/results':'Gazprom'},{'uefa.com/uefachampionsleague/season=2016/matches/fixtures':'Gazprom'},{'uefa.com/uefachampionsleague/season=2016/matches/byround':'Gazprom'},{'uefa.com/uefachampionsleague/season=2016/matches/all':'Gazprom'},{'uefa.com/uefachampionsleague/goal-of-the-week':'Nissan'},{'uclpredictor.uefa.com':'Sony Mobile'},{'uclfantasy.uefa.com':'PlayStation'},{'uefa.com/uefachampionsleague/news/live-coverage':'Lays'},{'uefa.com/uefaeuropaleague/video':'Hankook'},{'uelfantasy.uefa.com':'FedEx'},{'uefa.com/uefachampionsleague/video':'Heineken'},{'uefa.com/uefachampionsleague/history':'Heineken'},{'uefa.com/uefachampionsleague/season=19':'Heineken'},{'uefa.com/uefachampionsleague/season=200':'Heineken'},{'uefa.com/uefachampionsleague/season=2010':'Heineken'},{'uefa.com/uefachampionsleague/season=2011':'Heineken'},{'uefa.com/uefachampionsleague/season=2012':'Heineken'},{'uefa.com/uefachampionsleague/season=2013':'Heineken'},{'uefa.com/livescores/index':'Interoute'},{'uefa.com/news/index.html':'Interoute'},{'domesticleague/season=2016/matches/match=':'Interoute'},{'uefa.com/teamsandplayers/index':'Interoute'},{'uefa.com/teamsandplayers/teams/atoz/index':'Interoute'},{'uefa.com/teamsandplayers/teams/bycountry/index':'Interoute'},{'uefa.com/teamsandplayers/teams/bycompetition/index':'Interoute'},{'uefa.com/teamsandplayers/players/index':'Interoute'},{'uefa.com/teamsandplayers/players/atoz/index':'Interoute'},{'uefa.com/teamsandplayers/players/byposition/index':'Interoute'},{'uefa.com/teamsandplayers/players/bynationality/index':'Interoute'},{'uefa.com/uefachampionsleague/season=2014':'Heineken'},{'eqpredictor.uefa.com':'Carlsberg'},{'uefa.com/uefaeuro/qualifiers/season=2016/statistics':'Socar'},{'eqfantasy.uefa.com':'Konami'},{'uefa.com/uefaeuro/qualifiers/season=2016/matches/index.html':'Continental'},{'uefa.com/uefaeuro/qualifiers/season=2016/matches/day=':'Continental'},{'uefa.com/friendlies/season=2016/matches/index.html':'Continental'},{'uefa.com/uefaeuro/qualifiers/season=2016/matches/all/index.html':'Continental'},{'uefa.com/memberassociations/leaguematchcentre/index.html ':'Interoute'},{'u21fantasy.uefa.com':'McDonalds'},{'u21predictor.uefa.com':'Hyundai'},{'uefa.com/under21/video':'Socar'},{'uefa.com/under21/season=2015/golden-boot':'Adidas'},{'uefa.com/under21/season=2015/matches/index':'Continental'},{'uefa.com/under21/season=2015/matches/byround':'Continental'},{'uefa.com/under21/season=2015/matches/all':'Continental'},{'uefa.com/under21/season=2015/matches/nextseason':'Continental'},{'uefa.com/under21/season=2015/matches/day':'Continental'},{'uefa.com/under21/season=2015/matches/round=2000412/index':'Continental'},{'uefa.com/under21/season=2015/matches/round=2000413/index':'Continental'},{'uefa.com/under21/season=2015/matches/round=2000408/index':'Continental'},{'uefa.com/under21/season=2015/matches/round=2000409/index':'Continental'},{'uefa.com/under21/season=2015/matches/round=2000410/index':'Continental'},{'uefa.com/under21/season=2015/matches/round=2000411/index':'Continental'},{'uefa.com/uefachampionsleague/season=2015':'Heineken'},{'uefa.com/memberassociations/leaguematchcentre':'Interoute'},{'uefa.com/uefaeuropaleague/history':'Amstel'},{'uefa.com/uefaeuropaleague/season=19':'Amstel'},{'uefa.com/uefaeuropaleague/season=200':'Amstel'},{'uefa.com/uefaeuropaleague/season=2010':'Amstel'},{'uefa.com/uefaeuropaleague/season=2011':'Amstel'},{'uefa.com/uefaeuropaleague/season=2012':'Amstel'},{'uefa.com/uefaeuropaleague/season=2013':'Amstel'},{'uefa.com/uefaeuropaleague/season=2014':'Amstel'},{'uefa.com/uefaeuropaleague/season=2015':'Amstel'},{'uefa.com/uefaeuropaleague/season=2016/matches/index.html':'Enterprise'},{'uefa.com/uefaeuropaleague/season=2016/matches/bymonth':'Enterprise'},{'uefa.com/uefaeuropaleague/season=2016/matches/results':'Enterprise'},{'uefa.com/uefaeuropaleague/season=2016/matches/fixtures':'Enterprise'},{'uefa.com/uefaeuropaleague/season=2016/matches/byround':'Enterprise'},{'uefa.com/uefaeuropaleague/season=2016/matches/all':'Enterprise'},{'uefa.com/uefachampionsleague/season=2016/matches/day':'Gazprom'},{'uefa.com/uefaeuropaleague/season=2016/matches/day':'Enterprise'},{'uclmvp.uefa.com':'UniCredit'},{'uelmvp.uefa.com':'UniCredit'},{'uefa.com/uefachampionsleague/season=2016/matches/draws':'Gazprom'},{'uefa.com/uefaeuropaleague/season=2016/matches/draws':'Enterprise'},{'uefa.com/uefaeuro/be-there-with-hyundai':'Hyundai'},{'uefa.com/uefaeuro/season=2016/matches/draws/round=2000448/index.html':'Continental'},{'uefa.com/uefaeuro-finals/season=2016/matches/day=':'Continental'},{'uefa.com/uefaeuro/season=2016/statistics/index.html':'Socar'},{'uefa.com/uefaeuro/season=2016/matches/day=':'Continental'},{'europredictor-int.uefa.com/':'Hyundai'},{'predictor.euro2016.com':'Hyundai'},{'europredictor.uefa.com':'Hyundai'},{'uefa.com/uefaeuro/season=2016/matches/index.html':'Continental'},{'uefa.com/uefaeuro/season=2016/matches/qualifiers/index.html':'Continental'},{'uefa.com/uefaeuro/matches/index.html':'Continental'},{'uefa.com/uefaeuro/video/':'Hisense'},{'eurofantasy-int.uefa.com':'McDonalds'},{'eurofantasy.uefa.com':'McDonalds'},{'eurofantasy-pre.uefa.com':'McDonalds'},{'euro2016.stg.infra.uefa.com/fanzone/panini-sticker-album/':'Coca-Cola'},{'uefa.com/uefaeuro/panini-sticker-album':'Coca-Cola'},{'uefa.com/uefaeuro/season=2016/players/index.html':'Socar'},{'uefa.com/uefaeuro/season=2016/players/faq/index.html':'Socar'},{'uefa.com/uefaeuro/golden-boot/':'Adidas'},{'euromotm.uefa.com':'Carlsberg'},{'eurogotr.uefa.com':'Carlsberg'}];var m=false;for(e=0;e<c.length;e++){for(f in c[e]){if(d.toString().indexOf(f)>-1){b['partners']=c[e][f];m=true};};if(m)break};if(!m)b['partners']='';},
function(a,b){
/*
 * @author: bruno buous - tealium, inc.
 * @author: moari avancini (logic specification) - uefa
 * 
 * extension:
 * 1. Channels (based on url)
 *
 * purpose: 
 * populate channel from url directory pattern. the extension split the url by the slashes
 * and populate the channel based on the first directory value found by default.
 *
 * exceptions:
 *
 * if the url contains any of these identifiers in the url:
 * "uclfantasy" or "uclpredictor" or "uclratings" or "uclplayers" or
 * "ucltrophytour" or "uelpredictor" or "weuropredictor" or "calendars" or
 * "boss" or "tactx" or "help"
 * then use an in page javascript variable called _sf_async_config.sections,
 * split it on a hyphen and populate channel with the first found value
 * 
 * example input: http://www.uefa.com/uefachampionsleague/season=2015/standings/index.html
 *
 * example output: channel = uefachampionsleague
 */

// uefa has started to use the iframed jwplayer both internally and externally
// due to the fact that most data sources are scraped from the parent window when
// framed, we'll have to try reach out to parent window and copy scraped data sources
// from the top window's utag.data layer. If this trick fails to work, we need to find another
// way to do it
if (/video\/includerjw\.html/.test(document.URL)) {
  return true;
}

var url = document.URL;
var tempDirectory = url.split("/");
var directorySplit = new Array();
var subSection = new Array();
var i;
var j = 0;
// Channel subdomains
if (url.indexOf("uclfantasy") != -1 || url.indexOf("uclpredictor") != -1 || url.indexOf("uclratings") != -1 || url.indexOf("uclplayers") != -1 || url.indexOf("ucltrophytour") != -1 || url.indexOf("uelpredictor") != -1 || url.indexOf("weuropredictor") != -1 || url.indexOf("calendars") != -1 || url.indexOf("boss") != -1 || url.indexOf("tactx") != -1 || url.indexOf("help") != -1) {
    tempDirectory = _sf_async_config.sections.split("-");
    b['channel'] = tempDirectory[0];
    console.log("channel sub domain : " + b['channel']);
    // Channel for UEFA.com
} else {
    // Section and subsections
    for (i = 3; i < tempDirectory.length; i++) {
        if (tempDirectory[i].indexOf("=") === -1) {
            if (tempDirectory[i].indexOf(".html") === -1) {
                directorySplit[i] = tempDirectory[i];
                j = j + 1;
                subSection[j] = directorySplit[i];
            } // end check html
        } //check =
    } // end for loop
    if (typeof subSection[1] !== "undefined") {
        b['channel'] = subSection[1];
    } else {
        b['channel'] = "";
    }

    if (url.indexOf("m.uefa.com") !== -1 || url.indexOf("ac.uefa.com") !== -1 ) {
        b['channel'] = subSection[2];
    }
} // end else channel for Uefa.com

},
function(a,b,c,d,e,f,g){d=b['channel'];if(typeof d=='undefined')return;c=[{'uefachampionsleague':'ucl'},{'uefaeuropaleague':'uel'},{'uefaeuro':'euro2016'},{'uefasupercup ':'usc'},{'uefayouthleague':'uyl'},{'under21':'u21'},{'under19':'u19'},{'under17':'u17'},{'regionscup':'rcup'},{'womenseuro':'weuro'},{'womensworldcup':'fwwc'},{'womensunder19':'wu19'},{'womensunder17':'wu17'},{'futsaleuro':'futsal'},{'futsalworldcup':'ffwc'},{'womenschampionsleague':'wcl'},{'euro_qualifier':'eq'},{'uefaeuro-2020':'euro2020'},{'worldcup':'fwc'},{'futsalcup':'futsalcup'}];var m=false;for(e=0;e<c.length;e++){for(f in c[e]){if(d==f){b['channel']=c[e][f];m=true};};if(m)break};},
function(a,b){ try{ if(b['dom.url'].toString().indexOf('uclfantasy.uefa.com')>-1){try{b['url_language_code']=LANGUAGE_PREFIX.substring(0,2);}catch(e){}} } catch(e){ utag.DB(e) }  },
function(a,b,c,d,e,f,g){d=b['channel'];if(typeof d=='undefined')return;c=[{'ucl':'1'},{'uel':'2'},{'futsal':'4'},{'worldcup':'6'},{'u17':'7'},{'trainingground':'11'},{'calendars':'12'},{'euro2016':'13'},{'help':'14'},{'newsletter':'16'},{'user':'17'},{'weuro':'19'},{'home':'20'},{'news':'21'},{'video':'22'},{'livescores':'23'},{'teamsandplayers':'24'},{'mobile':'26'},{'tickets':'27'},{'memberassociations':'28'},{'search':'29'},{'rcup':'30'},{'uyl':'31'},{'u21':'32'},{'u19':'33'},{'fwwc':'34'},{'wcl':'35'},{'wu19':'36'},{'wu17':'37'},{'ffwc':'38'},{'friendlies':'39'},{'women':'40'},{'uefa':'41'},{'futsalcup':'42'},{'uefasupercup':'46'},{'euro_qualifier':'43'},{'uefaeuro-finals':'13'},{'uefaeuro-2020':'44'},{'60-years':'47'},{'euro-qualifiers':'43'},{'euro-finals':'13'},{'photos':'48'},{'clubs':'24'}];var m=false;for(e=0;e<c.length;e++){for(f in c[e]){if(d==f){b['site_id_2']=c[e][f];m=true};};if(m)break};if(!m)b['site_id_2']='';},
function(a,b){
var url = document.URL;
if (b['channel'] === "" && url.indexOf("uefa.org") === -1) {
    b["site_id_2"] = "20";
}

if (url.indexOf("uclfantasy.uefa.com") !== -1) {
    b["site_id_2"] = "1";
}
if (url.indexOf("http://en.classics.uefa.com/") !== -1) {
    b["site_id_2"] = "1";
}
if (url.indexOf("en.uclfantasy.uefa.com/UEFA/15804/clienthome.do") !== -1) {
    b["site_id_2"] = "1";
}
if (url.indexOf("en.uelfantasy.uefa.com/UEFA/15805/clienthome.do") !== -1) {
    b["site_id_2"] = "2";
}
if (url.indexOf("http://en.uclratings.uefa.com/") !== -1) {
    b["site_id_2"] = "1";
}
if (url.indexOf("en.uclpredictor.uefa.com/UEFA/15806/clienthome.do") !== -1) {
    b["site_id_2"] = "1";
}
if (url.indexOf("en.uelpredictor.uefa.com/UEFA/15808/clienthome.do") !== -1) {
    b["site_id_2"] = "2";
}
if (url.indexOf("en.ucltrophytour.uefa.com/tt") !== -1) {
    b["site_id_2"] = "1";
}
if (url.indexOf("en.boss.uefa.com/app/") !== -1) {
    b["site_id_2"] = "11";
}
if (url.indexOf("en.tactx.uefa.com/") !== -1) {
    b["site_id_2"] = "11";
}
if (url.indexOf("en.calendars.uefa.com/en/") !== -1) {
    b["site_id_2"] = "12";
}
if (url.indexOf("ticketing.uefa.com/UCL") !== -1) {
    b["site_id_2"] = "1";
}
if (url.indexOf("ticketing.uefa.com/UEL") !== -1) {
    b["site_id_2"] = "2";
}
if (url.indexOf("ticketing.uefa.com/EUROFINALs") !== -1) {
    b["site_id_2"] = "13";
}
if (url.indexOf("help.uefa.com/") !== -1) {
    b["site_id_2"] = "14";
}
if (url.indexOf("elearning.uefa.com") !== -1) {
    b["site_id_2"] = "11";
}
if (url.indexOf("en.takeyourseat.uefa.com") !== -1) {
    b["site_id_2"] = "2";
}
if (url.indexOf("en.iwasthere.uefa.com") !== -1) {
    b["site_id_2"] = "1";
}
if (url.indexOf("newsletter.uefa.com/") !== -1) {
    b["site_id_2"] = "16";
}
if (url.indexOf("user.uefa.com") !== -1) {
    b["site_id_2"] = "17";
}
if (url.indexOf("en.mascots.uefa.com/") !== -1) {
    b["site_id_2"] = "13";
}
if (url.indexOf("en.gotd.uefa.com/videopoll/") !== -1) {
    b["site_id_2"] = "13";
}
if (url.indexOf("en.eurotrophytour.uefa.com") !== -1) {
    b["site_id_2"] = "13";
}
if (url.indexOf("euro2012players.uefa.com") !== -1) {
    b["site_id_2"] = "13";
}
if (url.indexOf("en.ufepredictor.uefa.com/UEFA/15830/clienthome.do") !== -1) {
    b["site_id_2"] = "4";
}
if (url.indexOf("en.weuropredictor.uefa.com/UEFA/15820/clienthome.do") !== -1) {
    b["site_id_2"] = "19";
}
if (url.indexOf("m.en.uclpredictor.uefa.com/UEFA/15825/clienthome.do") !== -1) {
    b["site_id_2"] = "1";
}
if (url.indexOf("m.en.uelpredictor.uefa.com/UEFA/15829/clienthome.do") !== -1) {
    b["site_id_2"] = "2";
}
if (url.indexOf("m.en.ufepredictor.uefa.com/UEFA/15830/clienthome.do") !== -1) {
    b["site_id_2"] = "4";
}
if (url.indexOf("m.en.uclfantasy.uefa.com/UEFA/15809/clienthome.do") !== -1) {
    b["site_id_2"] = "1";
}
if (url.indexOf("m.en.uelfantasy.uefa.com/UEFA/15810/clienthome.do") !== -1) {
    b["site_id_2"] = "2";
}
if (url.indexOf("en.uelfantasy.uefa.com/UEFA/15814/clientpreregconfirm.do") !== -1) {
    b["site_id_2"] = "2";
}
// Community
///teams/
if (url.indexOf("/teams/") === -1 || url.indexOf("/Player/") === -1 || url.indexOf("/clubs/") === -1 || url.indexOf("/teamsandplayers/") === -1 || url.indexOf("/news/") === -1) {
    if (b['channel'] === "community") {
        b["site_id_2"] = "25";
    }
    if (url.indexOf("account") !== -1) {
        b["site_id_2"] = "25";
    }
    if (url.indexOf("/Profile/") !== -1) {
        b["site_id_2"] = "25";
    }
    if (url.indexOf("en.toty.uefa.com/") !== -1) {
        b["site_id_2"] = "25";
    }
}
// end community
if (url.indexOf("mediaservices") !== -1) {
    b["site_id_2"] = "41";
}
if (url.indexOf("about-uefa") !== -1) {
    b["site_id_2"] = "41";
}
if (url.indexOf("disciplinary") !== -1) {
    b["site_id_2"] = "41";
}
if (url.indexOf("protecting-the-game") !== -1) {
    b["site_id_2"] = "41";
}
if (url.indexOf("football-development") !== -1) {
    b["site_id_2"] = "41";
}
if (url.indexOf("documentlibrary") !== -1) {
    b["site_id_2"] = "41";
}
if (url.indexOf("social-responsibility") !== -1) {
    b["site_id_2"] = "41";
}
if (url.indexOf("member-associations") !== -1) {
    b["site_id_2"] = "41";
}
if (url.indexOf("iwasthere.uefa.com") !== -1) {
    b["site_id_2"] = "15";
}
if (url.indexOf("uclchallenge.uefa.com") !== -1) {
    b["site_id_2"] = "1";
}

//if (url.indexOf("uefa.org/") !== -1) {
//    b["site_id_2"] = "41";
//}

if (url.search("\.uefa\.org/*") !== -1) {

    b["site_id_2"] = "41";

}

// eqpredictor

if (url.indexOf("eqpredictor.") !== -1) {
    b["site_id_2"] = "43";
}

//eqfantasy
if (url.indexOf("eqfantasy.") !== -1) {
    b["site_id_2"] = "43";
}

if (url.indexOf("Draw%20Live%20Streaming%20UEFA%20Europa%20League%") !==-1){
    b["site_id_2"] = "2";
}

// uelfantasy
if (url.indexOf("uelfantasy") !== -1) {
    b["site_id_2"] = "2";
}

// uelpredictor
if (url.indexOf("uelpredictor") !== -1) {
    b["site_id_2"] = "2";
}
// uclfantasy
if (url.indexOf("uclfantasy") !== -1) {
    b["site_id_2"] = "1";
}
// uclpredictor
if (url.indexOf("uclpredictor") !== -1) {
    b["site_id_2"] = "1";
}

//championsdraft.uefa.com

if (url.indexOf("championsdraft.uefa.com") !== -1) {
    b["site_id_2"] = "1";
}

//uefa.com/friendlies/

if (url.indexOf("uefa.com/friendlies/") !== -1) {
    b["site_id_2"] = "43";
}

if (url.indexOf("uefa.org") !== -1) {
    b["site_id_2"] = "41";
}

// added 2014.11.24 team of the year (TOTY)
if (url.indexOf("toty.uefa.com") !== -1) {
    b["site_id_2"] = "10";
}
},
function(a,b){
/*
 * @author: bruno buous
 * 
 * extension : mobile-site-level-2-based-on-urls
 * 
 * version: version2
 *
 * All the site id for the localized site (ex : http://m.uefa.com/fr/trainingground/) are assigned
 * by the extension Site level site 2 - channels ( Based on channels).
 *
 * This extension only assigns the site id2 for the En version of the site (ex : http://m.uefa.com/trainingground/)
 * since the channel for this type of URL is always ""
*/

var url = document.URL;

// default
if (url === "http://m.uefa.com/" || url === "http://ac.uefa.com/" || url === "http://m.uefa.com/en" || url === "http://ac.uefa.com/en" ) {
    b["site_id_2"] = "20";
}

//http://ac.uefa.com/en

// exception specific for ac.uefa.com , #newsbox_bc_uefa
if (url.search("ac\.uefa\.com/*") !== -1) {
    if (url.indexOf("#newsbox_bc_uefa") !== -1 || url.indexOf("/uefa/") !== -1) {
        b["site_id_2"] = "41";
    }
}

//news/
if (url.indexOf("m.uefa.com/news/") !== -1 || url.indexOf("ac.uefa.com/news/") !== -1) {
    b["site_id_2"] = "21";
}

///uefasupercup/
if (url.indexOf("m.uefa.com/uefasupercup/") !== -1 || url.indexOf("ac.uefa.com/uefasupercup/") !== -1) {
    b["site_id_2"] = "46";
}

//euro-qualifiers/
if (url.indexOf("m.uefa.com/euro-qualifiers/") !== -1 || url.indexOf("ac.uefa.com/euro-qualifiers/") !== -1) {
    b["site_id_2"] = "43";
}

//under21/news/
if (url.indexOf("m.uefa.com/under21/") !== -1 || url.indexOf("ac.uefa.com/under21/") !== -1) {
    b["site_id_2"] = "32";
}

//womenseuro/
if (url.indexOf("m.uefa.com/womenseuro/") !== -1 || url.indexOf("ac.uefa.com/womenseuro/") !== -1) {
    b["site_id_2"] = "19";
}

//womenschampionsleague/
if (url.indexOf("m.uefa.com/womenschampionsleague/") !== -1 || url.indexOf("ac.uefa.com/womenschampionsleague/") !== -1) {
    b["site_id_2"] = "35";
}

///womensunder19/
if (url.indexOf("m.uefa.com/womensunder19/") !== -1 || url.indexOf("ac.uefa.com/womensunder19/") !== -1) {
    b["site_id_2"] = "36";
}

///womensunder17/
if (url.indexOf("m.uefa.com/womensunder17/") !== -1 || url.indexOf("ac.uefa.com/womensunder17/") !== -1) {
    b["site_id_2"] = "37";
}

//under19/
if (url.indexOf("m.uefa.com/under19/") !== -1 || url.indexOf("ac.uefa.com/under19/") !== -1) {
    b["site_id_2"] = "33";
}

//m.uefa.com/under17/news/
if (url.indexOf("m.uefa.com/under17/") !== -1 || url.indexOf("ac.uefa.com/under17/") !== -1) {
    b["site_id_2"] = "7";
}

//page/... = 49
if ((url.search("m\.uefa\.com/*") !== -1 || url.search("ac\.uefa\.com/*") !== -1) && url.indexOf("/page/") !== -1) {
    b["site_id_2"] = "49";
}


// Live score
if (url.indexOf("m.uefa.com/livescores/") !== -1 || url.indexOf("ac.uefa.com/livescores/") !== -1) {
    b["site_id_2"] = "23";
}

//clubs
if (url.indexOf("m.uefa.com/clubs/") !== -1 || url.indexOf("ac.uefa.com/clubs/") !== -1) {
    b["site_id_2"] = "23";
}

//uefachampionsleague/
if (url.indexOf("m.uefa.com/uefachampionsleague/") !== -1 || url.indexOf("ac.uefa.com/uefachampionsleague/") !== -1) {
    b["site_id_2"] = "1";
}

//uefaeuropaleague/
if (url.indexOf("m.uefa.com/uefaeuropaleague/") !== -1 || url.indexOf("ac.uefa.com/uefaeuropaleague/") !== -1) {
    b["site_id_2"] = "2";
}

//m.uefa.com/futsaleuro/
if (url.indexOf("m.uefa.com/futsaleuro/") !== -1 || url.indexOf("ac.uefa.com/futsaleuro/") !== -1) {
    b["site_id_2"] = "4";
}

//futsalcup/
if (url.indexOf("m.uefa.com/futsalcup/") !== -1 || url.indexOf("ac.uefa.com/futsalcup/") !== -1) {
    b["site_id_2"] = "42";
}

//euro-finals/
if (url.indexOf("m.uefa.com/euro-finals/") !== -1 || url.indexOf("ac.uefa.com/euro-finals/") !== -1) {
    b["site_id_2"] = "13";
}

//trainingground/
if (url.indexOf("m.uefa.com/trainingground/") !== -1 || url.indexOf("ac.uefa.com/trainingground/") !== -1) {
    b["site_id_2"] = "11";
}


//memberassociations/
if (url.indexOf("m.uefa.com/memberassociations/") !== -1 || url.indexOf("ac.uefa.com/memberassociations/") !== -1) {
    b["site_id_2"] = "28";
}

// Teams

//memberassociations/
if (url.indexOf("m.uefa.com/teams/") !== -1 || url.indexOf("ac.uefa.com/teams/") !== -1) {
    b["site_id_2"] = "24";
}

//clubs

if (url.indexOf("m.uefa.com/clubs/") !== -1 || url.indexOf("ac.uefa.com/clubs/") !== -1) {
    b["site_id_2"] = "24";
}

if (url.indexOf("m.uefa.com/page/euro-organisation/") !== -1 || url.indexOf("ac.uefa.com/page/euro-organisation/") !== -1) {
    b["site_id_2"] = "13";
}

if (url.indexOf("m.uefa.com/page/euro-hosts/") !== -1 || url.indexOf("ac.uefa.com/page/euro-hosts/") !== -1) {
    b["site_id_2"] = "13";
}

if (url.indexOf("m.uefa.com/page/euro-draws/") !== -1 || url.indexOf("ac.uefa.com/page/euro-draws/") !== -1) {
    b["site_id_2"] = "13";
}

if (url.indexOf("m.uefa.com/page/euro-tournament/") !== -1 || url.indexOf("ac.uefa.com/page/euro-tournament/") !== -1) {
    b["site_id_2"] = "13";
}

if (url.indexOf("m.uefa.com/page/about-euro-qualifiers/") !== -1 || url.indexOf("ac.uefa.com/page/about-euro-qualifiers/") !== -1) {
    b["site_id_2"] = "43";
}
},
function(a,b){
// uefa has started to use the iframed jwplayer both internally and externally
// due to the fact that most data sources are scraped from the parent window when
// framed, we'll have to try reach out to parent window and copy scraped data sources
// from the top window's utag.data layer. If this trick fails to work, we need to find another
// way to do it
if (/video\/includerjw\.html/.test(document.URL)) {
  return true;
}

var url = document.URL;
b['subSection5'] = "";
var directorySplit = new Array();
var subSection = new Array();
var tempDirectory = url.split("/");
var i;
var j = 0;
var pageName;
var url_trunc;
var last_index;
var team;
var first;
var last;




// Page name and sections for subdomain Predictor (different URL structure)
if (url.indexOf("uclpredictor") != -1 || url.indexOf("uelpredictor") != -1 ) {
  b['pageName'] = utag.data.pageName;
  console.log("page name predictor " + b['pageName']);
}
// Page name and section for UEFA.com
else {
  url_trunc = url.substring(0, url.lastIndexOf(".html"));
  pageName = url_trunc.substring(url_trunc.lastIndexOf("/") + 1);
  if (pageName === "" || pageName === "www") {
    pageName = "index";
  }
  // Section and subsections
  for (i = 3; i < tempDirectory.length; i++) {
    if (tempDirectory[i].indexOf("=") === -1) {
      if (tempDirectory[i].indexOf(".html") === -1) {
	directorySplit[i] = tempDirectory[i];
	j = j + 1;
	subSection[j] = directorySplit[i];
      } // end check html
    } //check =
  } // end for loop
  // Condition for index pages
  // pulled out index logic as per moari request 2014.12.22
  //if (url.indexOf("index") !== -1) {
    //console.log("this is an index page");
    //last_index = subSection.length;
    //subSection[last_index] = "Index";
  //}
  
  // Sections an Subsections
  if (typeof subSection[2] !== "undefined" || subSection[2] === "index") {
    b['subSection1'] = subSection[2];
    pageName = "";
  } else {
    b['subSection1'] = "";
  }
  if (typeof subSection[3] !== "undefined" || subSection[3] === "index") {
    b['subSection2'] = subSection[3];// + ":" + subSection[3];
    pageName = "";
  } else {
    b['subSection2'] = "";
  }
  if (typeof subSection[4] !== "undefined" || subSection[4] === "index") {
    b['subSection3'] = subSection[2] + ":" + subSection[3] + ":" + subSection[4];
    pageName = "";
  } else {
    b['subSection3'] = "";
  }
  if (typeof subSection[5] !== "undefined" || subSection[5] === "index") {
    b['subSection4'] = subSection[2] + ":" + subSection[3] + ":" + subSection[4] + ":" + subSection[5];
    pagename = "";
  } else {
    b['subSection4'] = "";
  }
  
  // Construction Page Names
  
  b['subSection1'] = b['subSection1'].replace(/[^\w\s]/gi, '');
  
  if (/(^$)|^index$/i.test(b['subSection5'])) { // || typeof subSection[5] !== "undefined"
    b['pageName'] = b['subSection4'] + (pageName !== '' ? ':' + pageName: b['pageName'] ? ':'+b['pageName']:'');
  }
  
  if (/(^$)|^index$/i.test(b['subSection4']) && /(^$)|^index$/i.test(b['subSection5'])) {
    b['pageName'] = b['subSection3'] + (pageName !== '' ? ':' + pageName: b['pageName'] ? ':'+b['pageName']:'');
  }
  
  if (/(^$)|^index$/i.test(b['subSection4']) && /(^$)|^index$/i.test(b['subSection3'])) {
    b['pageName'] = b['subSection2'] + (pageName !== '' ? ':' + pageName: b['pageName'] ? ':'+b['pageName']:'');
  }
  
  if (/(^$)|^index$/i.test(b['subSection4']) && /(^$)|^index$/i.test(b['subSection3']) && /(^$)|^index$/i.test(b['subSection2'])) {
    b['pageName'] = b['subSection1'] + (pageName !== '' ? ':' + pageName: b['pageName'] ? ':'+b['pageName']:'');
  }
  
  if (/(^$)|^index$/i.test(b['subSection4']) && /(^$)|^index$/i.test(b['subSection3']) && /(^$)|^index$/i.test(b['subSection2']) && /(^$)|^index$/i.test(b['subSection1'])) {
    b['pageName'] = pageName;
  }
  
  /*if (b['pageName'].indexOf("Index:index") !== -1) {
b['pageName'] = b['pageName'].replace(":Index", "");
}
*/
  if (b['subSection1'] == "Index") {
    b['pageName'] = pageName;
  }
  
  // For the match pages the match ID needs to be appended to the page name
  if (url.indexOf("match=") != -1) {
    // Match Name
    team = document.title;
    first = team.substring(team.indexOf("-") + 1);
    last = first.substring(team.lastIndexOf("%20%E2%80%93%20UEFA.com"));
    b['custom3'] = jQuery(".mb-beta > caption").text();
    b['pageName'] = b['pageName'] + ":" + b['custom3'] + ":" + utag.data.matchID;
    
    // Exception for statistics section
    b['pageName'] = b['pageName'];
    if (b['pageName'].indexOf("Index:index") !== -1) {
      b['pageName'] = b['pageName'].replace(":Index", "");
    }
  }
  
  if (b['subSection4'] === "" && b['subSection3'] === "" && b['subSection2'] === "" && b['subSection1'] === "" && b['channel'] === "") {
    b['pageName'] = pageName;
  }
  // Exceptions page name for Photos section
  if (b['pageName'] == "photos:photo") {
    b['pageName'] = "photos";
  }
  // Exceptions page name for predictor section
  if (b['pageName'].indexOf("futsal:") !== -1) {
    b['pageName'] = b['pageName'].replace("futsal:", "predictor:");
  }
  
  // Exception for history section ( 25-08-2014)
  
  if(url.indexOf("uefa.com/uefachampionsleague/season=") !== -1  && url.indexOf("uefa.com/uefachampionsleague/season=2015") === -1){
    b['pageName'] = "history:" + b['pageName'];
    
  }
  
  if(url.indexOf("uefa.com/uefaeuropaleague/season=") !== -1  && url.indexOf("uefa.com/uefaeuropaleague/season=2015") === -1){
    b['pageName'] = "history:" + b['pageName'];
    
  }
  
  // Final Format Page Name for ATI
  b['pageName'] = b['pageName'].replace(/::/g, ':');
  b['pageName'] = b['pageName'].replace(/:/g, '::');
  b['pageName'] = window.encodeURIComponent(b['pageName']);
  b['pageName'] = b['pageName'].toLowerCase();
}


// UCL Fantasy

// Page name and sections for uclFantasy
if (url.indexOf("uclfantasy") != -1) {
  tempDirectory = _sf_async_config.sections.split("-");
  b['channel'] = tempDirectory[0];
  b['subSection1'] = tempDirectory[1];
  b['subSection2'] = tempDirectory[2];
  b['subSection3'] = tempDirectory[3];
  b['subSection4'] = tempDirectory[4];
  b['hierarchy'] = b['channel'] + "," + b['subSection1'] + "," + b['subSection2'] + "," + b['subSection3'];
  if (typeof tempDirectory[1] == "undefined") {
    b['subSection1'] = "";
    b['hierarchy'] = b['channel'];
  }
  if (typeof tempDirectory[2] == "undefined") {
    b['subSection2'] = "";
    b['hierarchy'] = b['channel'];
  }
  if (typeof tempDirectory[3] == "undefined") {
    b['subSection3'] = "";
    b['hierarchy'] = b['channel'] + "," + b['subSection1'];
  }
  if (typeof tempDirectory[4] == "undefined") {
    b['subSection4'] = "";
    b['hierarchy'] = b['channel'] + "," + b['subSection1'] + "," + b['subSection2'];
  }
  pageName = b['subSection1'] + ":" + b['subSection2'] + ":" + b['subSection3'] + ":" + b['subSection4'];
  b['pageName'] = pageName.slice(0, -2);
  
  
  // exception for the pagename where subsection 2 is missing
  
  if( (b['pageName']).substr(-1,1) == ':' ){
    //b['pageName'] = pageName.slice(0,-3);
    var substitute_pagename = url.substring(url.lastIndexOf("/")+1 , url.indexOf("?"));
    b['pageName'] = b['pageName'] + ":"+ substitute_pagename;
    
  }
  
  
  console.log("page_Name for subdomains " + b['pageName']);
  if (LANGUAGE_PREFIX !== -1) {
    if (LANGUAGE_PREFIX === "www") {
      LANGUAGE_PREFIX = "en";
    }
    LANGUAGE_PREFIX = LANGUAGE_PREFIX.replace(".", "");
    b['hierarchy2'] = LANGUAGE_PREFIX + "," + b['hierarchy'];
    
  }
}


},
function(a,b){
// uefa has started to use the iframed jwplayer both internally and externally
// due to the fact that most data sources are scraped from the parent window when
// framed, we'll have to try reach out to parent window and copy scraped data sources
// from the top window's utag.data layer. If this trick fails to work, we need to find another
// way to do it
if (/video\/includerjw\.html/.test(document.URL)) {
  return true;
}

//var b = {};

var url = document.URL;

// Page name and sections for uclFantasy
if (url.indexOf("uefa.org") !== -1) {
    tempDirectory = url.split("/");
    b['channel'] = tempDirectory[3];
    b['subSection1'] = tempDirectory[4];
    b['subSection2'] = tempDirectory[5];
    b['subSection3'] = tempDirectory[6];
    //b['subSection4'] = tempDirectory[5];

  
    if (typeof b['subSection3']  == "undefined") {
        b['pageName'] = b['channel'] + "::" + b['subSection1'] + "::" + b['subSection2'];      
    }

    if (typeof b['subSection2'] == "undefined" && typeof b['subSection3'] == "undefined") {
        b['pageName'] = b['channel'] + "::" + b['subSection1'];
    }

    if(b['channel'] == ""){
        b['pageName'] = "index";
    }
        
    b['pageName'] = b['pageName'].replace(".html" , "");
    b['pageName'] = window.encodeURIComponent(b['pageName']);

    console.log("channel  " + b['channel']);
    console.log("SS1  " +  b['subSection1']);
    console.log("SS2  " +  b['subSection2']);
    console.log("SS3  " +  b['subSection3']);

    console.log("page_Name  " + b['pageName']);
   
}


},
function(a,b){ try{ if(b['dom.url'].toString().indexOf('uclpredictor.uefa.com/UEFA/15825/clientpunditupdates')>-1){b['pageName']='ucl:predictor:tipster'} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if((b['dom.url'].toString().indexOf('/search/')>-1&&b['dom.url'].toString().indexOf('#')>-1)){b['search_result_page']='Search result'} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if(typeof b['user_login']!='undefined'){b['user_login']='User login'} } catch(e){ utag.DB(e) }  },
function(a,b){
var url = document.URL;
var tempDirectory = url.split("/");
var i;


for (i = 1; i < tempDirectory.length; i++) {
    if (tempDirectory[i].indexOf("association=") !=-1) {
        b['custom1']= tempDirectory[i].substring(tempDirectory[i].indexOf("=") + 1);
        } // end if
} // End Loop
},
function(a,b,c){for(c in utag.loader.GV(b)){try{b[c] = (b[c] instanceof Array || b[c] instanceof Object) ? b[c] : b[c].toString().toLowerCase()}catch(e){}}},
function(a,b,c,d,e,f,g){d=b['dom.url'];if(typeof d=='undefined')return;c=[{'.mascot.':'13'},{'euro2016.tickets.uefa.com':'13'},{'europaleague.tickets.uefa.com':'2'},{'championsleague.tickets.uefa.com':'1'},{'uefachampionsleaguefinal2015-club.hospitality':'1'},{'gotd.uefa.com':'43'},{'potd.uefa.com':'1'},{'legendarymoments.uefa.com':'1'},{'/uefaeuro/qualifiers/':'43'},{'uefaeuro-2020':'44'},{'u21predictor':'32'},{'u21fantasy':'32'},{'boss.uefa.com':'11'},{'iwasthere.uefa.com':'0'},{'help.uefa.com':'14'},{'calendars.uefa.com':'12'},{'tactx.uefa.com':'11'},{'uefachampionsleaguefinal2015-club.hospitality':'1'},{'ucltrophytour.uefa.com':'1'},{'uclratings.uefa.com':'1'},{'friendlies/season=2016/matches':'13'},{'toty.uefa.com':'10'},{'uefa.org':'41'},{'uclfantasy':'1'},{'uclpredictor':'1'},{'uelfantasy':'2'},{'uelpredictor':'2'},{'eqfantasy':'43'},{'eqpredictor':'43'},{'uefa.com/goal-of-the-season':'62'},{'uefa.com/save-of-the-season':'63'},{'uefa.com/uefasupercup':'46'},{'uclmvp.uefa.com':'1'},{'uelmvp.uefa.com':'2'},{'club.hospitality.uefa.com':'13'},{'uefaeuro2016-club.hospitality.uefa.com':'13'},{'euro2016':'13'},{'euro-2016':'13'},{'euro16':'13'},{'uefaeuro-finals':'13'},{'alltime11.uefa.com':'13'},{'ecocalculator.uefa.com':'13'},{'alltime-int.uefa.com':'13'},{'europredictor.uefa.com':'13'},{'eurofantasy-int.uefa.com':'13'},{'eurofantasy.uefa.com':'13'},{'eurofantasy-pre.uefa.com':'13'},{'euro2016.stg.infra.uefa.com/fanzone/panini-sticker-album':'13'},{'uefa.com/uefaeuro/panini-sticker-album':'13'},{'uefa.cn':'13'},{'euromotm.uefa.com':'13'},{'eurogotr.uefa.com':'13'}];var m=false;for(e=0;e<c.length;e++){for(f in c[e]){if(d.toString().indexOf(f)>-1){b['new_site_id_2']=c[e][f];m=true};};if(m)break};if(!m)b['new_site_id_2']='';},
function(a,b){ try{ if(typeof b['new_site_id_2']!='undefined'&&b['new_site_id_2']!=''){b['site_id_2']=b['new_site_id_2']} } catch(e){ utag.DB(e) }  },
function(a,b){

(function(a, b, window, utag, uefa, video, player, tealium, jQuery) {

  /*
   * @author kevin thomas faurholt - tealium inc.
   *
   * extension: generic-jwplayer-extension
   *
   * sample videos:
   * - http://uefa.stg.fame.infra.uefa.com/KISS/Materials/MaterialsDetails/1244
   * - http://www.stg.infra.uefa.com/video/includerjw.html?vid=2111419
   */
  if (a !== "view") { return true; }
  if (!jQuery) { return true; }

  var eventtrigger = [tealium, uefa, video].join("-");

  window[utag] = window[utag] || {};
  window[utag][uefa] = window[utag][uefa] || {};
  window[utag][uefa][video] = window[utag][uefa][video] || {};
  window[utag][uefa][video][player] = window[utag][uefa][video][player] || {

    "debugmode" : false,

    "log" : function(msg, obj) {

      // activate console.logging in debug mode only
      if (!this.debugmode || !window.console) {

        return true;
      }

      if (obj) {

        window.console.log("Tealium jwplayer :: " + msg, obj);
      }
      else {

        window.console.log("Tealium jwplayer :: " + msg);
      }
    },

    "player" : {

      "api" : null,

      "started" : false,

      "paused" : false,
      
      "stopped" : false,

      "ended" : false,

      "muted" : false,

      "info" : {

        "id" : null,

        "guid" : null,

        "title" : null,

        "description" : null,

        "duration" : 0
      },

      "time" : {

        "elapsed" : 0,

        "remaining" : 0
      },

      //////////////////////////////////////////////////////////////////////////

      "play" : function(event, args) {

        var self = this;

        self.log("play :: entered with args:", args);

        // mute the video during debugmode (you'll thank me later)
        if (self.debugmode) {

         self.player.api.setMute(true);
        }

        // we do not know the total duration just yet.
        // video must be playing before the api return the total duration
        if (self.player.info.duration === 0) {
          
          return false;
        }
        
        // player is paused
        if (self.player.paused) {

          self.player.started = self.player.paused = false;
        }

        // player was finished
        if (self.player.ended) {

          self.player.ended = false;
        }
        
        // there is an api bug with onPlay being called twice.
        // more here: http://support.jwplayer.com/customer/portal/questions/6551609-onplay-firing-twice-any-fix-yet
        if (self.player.started) {
          
          return true;
        }
        
        self.player.started = true;

        var data = jQuery.extend(true, {}, self.player.info);
        data.event = "play";
        data.elapsedtime = self.player.time.elapsed;
        data.remainingtime = self.player.time.remaining || self.player.info.duration;

        return bc("player-play", window[utag][uefa][video], data);
      },

      //////////////////////////////////////////////////////////////////////////

      "tick" : function(event, args) {

        var self = this;

        // get duration here, it returns -1 in the play method :(
        if (self.player.info.duration === 0) {

          self.player.info.duration = Math.round(self.player.api.getDuration());
        }

        self.player.time.elapsed = parseInt(self.player.api.getPosition());

        self.player.time.remaining = self.player.info.duration - self.player.time.elapsed;

        if (!self.player.started || self.player.paused || self.player.ended) {

          self.player.play.call(self, event, args);
        }

        self.log("tick :: " + self.player.time.elapsed);

        // calculate 25% milestone here for now: ///////////////////////////////

        var milestone25 = Math.round(self.player.info.duration / 100 * 25);

        if (self.player.time.elapsed === milestone25) {

          self.log("-------------------------------------------------------");
          self.log("player :: TRIGGER VIEW TIMER EVENT: 25% MARK!");
          self.log("-------------------------------------------------------");

          var data = jQuery.extend(true, {}, self.player.info);
          data.event = "tick";
          data.milestone = "25percentmark";
          data.elapsedtime = self.player.time.elapsed;
          data.remainingtime = self.player.time.remaining;

          return bc("player-milestone", window[utag][uefa][video], data);
        }

        // calculate 50% milestone here for now: ///////////////////////////////

        var milestone50 = Math.round(self.player.info.duration / 100 * 50);

        if (self.player.time.elapsed === milestone50) {

          self.log("-------------------------------------------------------");
          self.log("player :: TRIGGER VIEW TIMER EVENT: 50% MARK!");
          self.log("-------------------------------------------------------");

          var data = jQuery.extend(true, {}, self.player.info);
          data.event = "tick";
          data.milestone = "50percentmark";
          data.elapsedtime = self.player.time.elapsed;
          data.remainingtime = self.player.time.remaining;

          return bc("player-milestone", window[utag][uefa][video], data);
        }

        // calculate 75% milestone here for now: ///////////////////////////////

        var milestone75 = Math.round(self.player.info.duration / 100 * 75);

        if (self.player.time.elapsed === milestone75) {

          self.log("-------------------------------------------------------");
          self.log("player :: TRIGGER VIEW TIMER EVENT: 75% MARK!");
          self.log("-------------------------------------------------------");

          var data = jQuery.extend(true, {}, self.player.info);
          data.event = "tick";
          data.milestone = "75percentmark";
          data.elapsedtime = self.player.time.elapsed;
          data.remainingtime = self.player.time.remaining;

          return bc("player-milestone", window[utag][uefa][video], data);
        }
      },

      //////////////////////////////////////////////////////////////////////////

      "pause" : function(event, args) {

        var self = this;

        self.log("pause :: ", args);

        self.player.paused = true;

        var data = jQuery.extend(true, {}, self.player.info);
        data.event = "paused";
        data.elapsedtime = self.player.time.elapsed;
        data.remainingtime = self.player.time.remaining;

        return bc("player-paused", window[utag][uefa][video], data);
      },

      //////////////////////////////////////////////////////////////////////////

      "stop" : function(event, args) {

        var self = this;

        self.log("stop :: ", args);

        self.player.stopped = true;

        var data = jQuery.extend(true, {}, self.player.info);
        data.event = "stopped";
        data.elapsedtime = self.player.time.elapsed;
        data.remainingtime = 0;

        return bc("player-stopped", window[utag][uefa][video], data);
      },


      //////////////////////////////////////////////////////////////////////////

      "releasebar" : function(event, args) {

        var self = this;

        self.log("releasebar :: ", args);

        self.player.time.elapsed = Math.round(args.offset);

        self.player.time.remaining = self.player.info.duration - self.player.time.elapsed;

        var difference = args.position - self.player.time.elapsed;

        var data = jQuery.extend(true, {}, self.player.info);
        data.event = "slide";
        data.direction =  difference > 0 ? "reverse" : "forward";
        data.grabbedtime = Math.round(args.position);
        data.elapsedtime = self.player.time.elapsed;
        data.remainingtime = self.player.time.remaining;

        return bc("player-timeshifted", window[utag][uefa][video], data);
      },

      //////////////////////////////////////////////////////////////////////////

      "end" : function(event, args) {

        var self = this;

        self.log("-------------------------------------------------------");
        self.log("TRIGGER VIEW TIMER EVENT: 100% MARK!");
        self.log("-------------------------------------------------------");

        //this.log("player :: end :: entered with args:", args);

        self.player.ended = true;

        self.player.time.elapsed = self.player.info.duration;

        self.player.time.remaining = 0;

        var data = jQuery.extend(true, {}, self.player.info);
        data.event = "tick";
        data.milestone = "100percentmark";
        data.elapsedtime = self.player.time.elapsed;
        data.remainingtime = self.player.time.remaining;

        bc("player-milestone", window[utag][uefa][video], data);

        data.event = "finished";
        data.milestone = "finished";

        return bc("player-finished", window[utag][uefa][video], data);
      },

      //////////////////////////////////////////////////////////////////////////

      "mute" : function(event, args) {

        var self = this;

        self.log("mute :: entered with args:", args);

        self.player.muted = args.mute;

        //var data = jQuery.extend(true, {}, this.player.info);
        //data.event = "muted";
        //data.elapsedtime = this.player.time.elapsed;
        //data.remainingtime = this.player.time.remaining;

        return bc("player-muted", window[utag][uefa][video], data);
      }

    },

    "initiate" : function() {

      var self = this;

      if (self.player.api !== null) {

        return true;
      }

      self.player.api = window.jwplayer();

      // mute the video during debugmode (you'll thank me later)
      if (self.debugmode) {

        self.player.api.setMute(true);
      }

      // fired when new metadata has been broadcasted by the player
      self.player.api.onMeta(function(e) {

        // live streams trigger this a lot
        //self.log("initiate :: meta data: ", e.metadata);
      });

      // fired when the playlist index changes to a new playlist item.
      // this event occurs before the player begins playing the new playlist item
      self.player.api.onPlaylistItem(function(e) {

        var playlist = self.player.api.getPlaylistItem(e.index),
          
          id = playlist.mediaid || "N/A",
          
          title = playlist.title || "N/A",
          
          description = playlist.description || "N/A",

          type = /.+[/]live[/].+/.test(playlist.file) ? "live" : "clip";
        
        // uefa agency populated data object on page with video info
        if (window.OVPlayer !== undefined) {
          
          id = window.OVPlayer.videoId;
          
          title = window.OVPlayer.videoTitle;
          
          description = window.OVPlayer.videoDescription;
        }
          
        self.player.info.id = self.player.info.guid = id;

        self.player.info.title = title;

        self.player.info.description = description;

        self.player.info.type = type;

        self.log("initiate :: playlist: ", playlist);

      });

      // while the player is playing, this event is fired as the playback position gets updated.
      // this may occur as frequently as 10 times per second
      self.player.api.onTime(function(e) {

        var position = parseInt(e.position);

        // every 10 tick is too slow. using position
        //if (Math.floor(new Date().getTime() / 100) % 10 === 0) {
        //if (self.player.time.elapsed === 0 || self.player.time.elapsed !== position) {
        if (self.player.time.elapsed !== position) {

          self.player.tick.call(self, "controller-tick", e);
        }

      });

      // seems like play event is triggered before onSeek if the video is paused.
      // so for now i'm trying to see if we can force release bar to fire first
      // and then call play if the player is in a paused state
      // fired when the player enters the PLAYING state
      self.player.api.onPlay(function(e) {

        self.player.play.call(self, "controller-play", e);

      });

      // fired when the player enters the PAUSED state
      self.player.api.onPause(function(e) {

        self.player.pause.call(self, "controller-pause", e);

      });
      
      // fired when the player enters the IDLE state.
      // event attributes:  BUFFERING, PLAYING or PAUSED.
      self.player.api.onIdle(function(e) {

        var state = self.player.api.getState();
        
        if (state === "IDLE") {
         
          self.player.stop.call(self, "controller-stop", e);
        }
        else if (state === "BUFFERING") {
          
          // do something
        }
        else if (state === "PLAYING") {
          
          // do something
        }
        else if (state === "PAUSED") {
          
          // do something
        }

      });
      

      // fired after a seek has been requested either by scrubbing the
      // controlbar or through the API
      self.player.api.onSeek(function(e) {

        self.player.releasebar.call(self, "controller-releasebar", e);

      });

      // fired when the player enters the COMPLETE state
      self.player.api.onComplete(function(e) {

        self.player.end.call(self, "controller-end", e);

      });

      // fired when the player has gone into or out of the MUTE state      
      self.player.api.onMute(function(e) {

        // WARNING: seems to be a problem with deltatre framework on mute
        // so disabling listener for now. error thrown is:
        // There was an error calling back an event handler iframe-embed.js:118
        //self.player.mute.call(self, "controller-mute", e);

      });

    },

    "init" : function() {

      var self = this;

      if (/tealium_debug=1/.test(document.cookie)) {

        self.debugmode = true;
      }

      // create a video tracker dom node if it does not exist already
      if (!window.jQuery("#tealium-videoplayer").length) {

        window.jQuery("body").append("<div id='tealium-videoplayer' style='display:none !important;'><!-- --></div>");
      }
      
      (function retry(self, retries) {

        if (retries === 0) {

          self.log("init :: did not make it in time!");

          return false;
        }
        else {

          if (window.jwplayer && window.jwplayer().onReady) {

            // jwplayer already set up and fully loaded
            if (/flash|html5/i.test(window.jwplayer().getRenderingMode())) {

              self.log("init :: rendering mode: " + window.jwplayer().getRenderingMode());

              self.initiate();
            }
            else {

              // initiate when ready
              window.jwplayer().onReady(function(){

                self.log("init :: jwplayer ready!");

                self.initiate();
              });
            }
          }
          else {

            self.log("init :: not ready, waiting..");

            window.setTimeout(function() {

              retry.call(window, self, --retries);

            }, 200);
          }
        }

        return true;
      }(self, 100));
    }
  };

  window[utag][uefa][video][player].init();

  // compressed jquery event broadcaster
  function bc(event, namespace, payload) {

    var tracker = "tealium-videoplayer";
    
    event = eventtrigger + "-" + event;

    // only allow to tap in when utag is present
    if (jQuery && window[utag]) {

      // !!!!!!!!!!!!!!!!!!!!!! WARNING WARNING WARNING !!!!!!!!!!!!!!!!!!!!!!!
      // DO NOT USE PERIODS [.] IN CUSTOM EVENT NAMES
      // GOT BITTEN BY THIS WITH THE EFFECT OF WRONG BIND METHODS BEING TRIGGERED
      
      jQuery("#" + tracker).trigger(event, (payload || {}));

      return true;
    }
    
    return false;
  }

})(a, b, window, "utag", "uefa", "video", "jwplayer", "tealium", window.jQuery);
},
function(a,b){
/*
 * @author kevin thomas faurholt - tealium, inc.
 *
 * © 2013 tealium, inc. all rights reserved. this material may not be reproduced,
 * displayed, modified or distributed without the express prior written permission of the copyright holder.
 */
(function(a,b,_3,_4,_5,_6,_7,_8){if(a!=="view"){return true;}if(!_8){return true;}var _9=[_7,_5,_6].join("-");_3[_4]=_3[_4]||{};_3[_4][_5]=_3[_4][_5]||{};_3[_4][_5][_6]=_3[_4][_5][_6]||{"retries":0,"debugmode":false,"log":function(_a,_b){if(!this.debugmode){return true;}if(_b){}else{}},"player":{"api":null,"flashversion":false,"started":false,"paused":false,"ended":false,"muted":false,"info":{"id":null,"guid":null,"title":null,"duration":0},"time":{"timerId":null,"elapsed":0,"remaining":0,"slidegrab":0},"play":function(_c,_d){this.log("player :: play, entered with args:",_d);this.player.info.id=this.player.info.id||(_d.id||_d.videoId);this.player.info.guid=this.player.info.guid||(_d.guid||"N/A");this.player.info.title=this.player.info.title||(_d.title||_d.videoTitle);this.player.info.duration=Math.round(this.player.info.duration||(_d.duration||_d.videolenght));if(!this.player.started){this.player.started=true;if(this.debugmode){_3.console.clear();}}if(this.player.paused){this.player.paused=false;}var _e=_8.extend(true,{},this.player.info);_e.event="play";_e.elapsedtime=this.player.time.elapsed;_e.remainingtime=this.player.time.remaining||this.player.info.duration;bc("player-play",_e);},"tick":function(_f,_10){if(_10.timerID){if(this.player.time.timerId===null){this.player.time.timerId=_10.timerID;}else{if(this.player.time.timerId!==_10.timerID){_3.clearInterval(this.player.time.timerId);this.player.time.timerId=_10.timerID;}}}if(this.player.paused||this.player.ended){return true;}if(this.player.info.id===null){this.player.play.call(this,_f,_10);}this.player.info.duration=Math.round(_10.videolenght);if(this.player.flashversion){this.player.time.elapsed=Math.round(_10.secview);}else{this.player.time.elapsed=Math.round(this.player.api.getCurrentTime());if(this.player.api.player.volume===0){if(!this.player.muted){this.player.muted=true;var _11=_8.extend(true,{},this.player.info);_11.event="muted";_11.elapsedtime=this.player.time.elapsed;_11.remainingtime=this.player.time.remaining;bc("player-muted",_11);}}else{this.player.muted=false;}}this.player.time.remaining=this.player.info.duration-this.player.time.elapsed;if(this.player.time.elapsed===_10.sec25perc){var _11=_8.extend(true,{},this.player.info);_11.event="tick";_11.milestone="25percentmark";_11.elapsedtime=this.player.time.elapsed;_11.remainingtime=this.player.time.remaining;bc("player-milestone",_11);}else{if(this.player.time.elapsed===_10.sec50perc){var _11=_8.extend(true,{},this.player.info);_11.event="tick";_11.milestone="50percentmark";_11.elapsedtime=this.player.time.elapsed;_11.remainingtime=this.player.time.remaining;bc("player-milestone",_11);}else{if(this.player.time.elapsed===_10.sec75perc){var _11=_8.extend(true,{},this.player.info);_11.event="tick";_11.milestone="75percentmark";_11.elapsedtime=this.player.time.elapsed;_11.remainingtime=this.player.time.remaining;bc("player-milestone",_11);}}}},"pause":function(_12,_13){this.log("player :: pause :: "+_13.time,_13);this.player.paused=true;if(this.player.flashversion){this.player.time.elapsed=Math.round(_13.time);}else{this.player.time.elapsed=Math.round(this.player.api.getCurrentTime());}this.player.time.remaining=this.player.info.duration-this.player.time.elapsed;var _14=_8.extend(true,{},this.player.info);_14.event="paused";_14.elapsedtime=this.player.time.elapsed;_14.remainingtime=this.player.time.remaining;bc("player-paused",_14);},"stop":function(_15,_16){this.log("player :: stop :: "+_16.time,_16);if(this.player.flashversion){this.player.time.elapsed=Math.round(_16.time);}else{this.player.time.elapsed=Math.round(this.player.api.getCurrentTime());}this.player.time.remaining=this.player.info.duration-this.player.time.elapsed;var _17=_8.extend(true,{},this.player.info);_17.event="stopped";_17.elapsedtime=this.player.time.elapsed;_17.remainingtime=this.player.time.remaining;bc("player-stopped",_17);},"grabbar":function(_18,_19){this.log("player :: grabbar :: "+_19.time,_19);if(this.player.flashversion){this.player.time.slidegrab=Math.round(_19.time);}else{this.player.time.slidegrab=Math.round(this.player.api.getCurrentTime());}},"releasebar":function(_1a,_1b){this.log("player :: releasebar :: "+_1b.time,_1b);if(this.player.flashversion){this.player.time.elapsed=Math.round(_1b.time);}else{this.player.time.elapsed=Math.round(this.player.api.getCurrentTime());}this.player.time.remaining=this.player.info.duration-this.player.time.elapsed;var _1c=this.player.time.slidegrab-this.player.time.elapsed;var _1d=_8.extend(true,{},this.player.info);_1d.event="slide";_1d.direction=_1c>0?"reverse":"forward";_1d.grabbedtime=this.player.time.slidegrab;_1d.elapsedtime=this.player.time.elapsed;_1d.remainingtime=this.player.time.remaining;bc("player-timeshifted",_1d);if(this.player.paused){if(!this.player.flashversion){this.player.play.call(this,_1a,_1b);}}},"end":function(_1e,_1f){this.log("player :: end :: entered with args:",_1f);this.player.ended=true;var _20=_8.extend(true,{},this.player.info);_20.event="tick";_20.milestone="100percentmark";_20.elapsedtime=this.player.time.elapsed;_20.remainingtime=this.player.time.remaining;bc("player-milestone",_20);_20.event="finished";_20.milestone="finished";bc("player-finished",_20);},"flash":function(_21,_22){if(!this.player.flashversion){this.player.flashversion=true;this.player.muted=false;}if(/doMute/.test(_22)){this.player.muted=this.player.muted?false:true;if(this.player.muted){var _23=_8.extend(true,{},this.player.info);_23.event="muted";_23.elapsedtime=this.player.time.elapsed;_23.remainingtime=this.player.time.remaining;bc("player-muted",_23);}}}},"initiate":function(){this.log("initiate :: entered");if(this.player.api!==null){return true;}this.player.api=_3.PlayerVideo.Players.Main;if(this.debugmode){if(this.player.api.mutetoggle!==undefined){this.player.api.mutetoggle();}}_8(_3[_4][_5][_6]).bind(_9+"-controller-tick",this.player.tick);_8(_3[_4][_5][_6]).bind(_9+"-controller-play",this.player.play);_8(_3[_4][_5][_6]).bind(_9+"-controller-pause",this.player.pause);_8(_3[_4][_5][_6]).bind(_9+"-controller-stop",this.player.stop);_8(_3[_4][_5][_6]).bind(_9+"-controller-grabbar",this.player.grabbar);_8(_3[_4][_5][_6]).bind(_9+"-controller-releasebar",this.player.releasebar);_8(_3[_4][_5][_6]).bind(_9+"-controller-end",this.player.end);_8(_3[_4][_5][_6]).bind(_9+"-controller-flash",this.player.flash);var _24=_3.snippetview;var _25={};_25.Play=_3.OmnitureListener.Play;_25.Pause=_3.OmnitureListener.Pause;_25.Stop=_3.OmnitureListener.Stop;_25.GrabBar=_3.OmnitureListener.GrabBar;_25.ReleaseBar=_3.OmnitureListener.ReleaseBar;_25.End=_3.OmnitureListener.End;var _26=_3.Deltatre.Trace;var _27=function(_28,_29){var _2a=[],i,len;for(i=0,len=_29.length;i<len;i++){_2a.push(_29[i]);}return _28.apply(_3,_2a);};_3.snippetview=function(_2d){bc("controller-tick",_2d);return _27(_24,arguments);};_3.OmnitureListener.Play=function(_2e,_2f,_30,id){var _32={};_32["title"]=_2e;_32["duration"]=_2f;_32["guid"]=_30;_32["id"]=id;bc("controller-play",_32);return _27(_25.Play,arguments);};_3.OmnitureListener.Pause=function(_33,_34){var _35={};_35["time"]=_33;_35["guid"]=_34;bc("controller-pause",_35);return _27(_25.Pause,arguments);};_3.OmnitureListener.Stop=function(_36,_37){var _38={};_38["time"]=_36;_38["guid"]=_37;bc("controller-stop",_38);return _27(_25.Stop,arguments);};_3.OmnitureListener.GrabBar=function(_39,_3a){var _3b={};_3b["time"]=_39;_3b["guid"]=_3a;bc("controller-grabbar",_3b);return _27(_25.GrabBar,arguments);};_3.OmnitureListener.ReleaseBar=function(_3c,_3d){var _3e={};_3e["time"]=_3c;_3e["guid"]=_3d;bc("controller-releasebar",_3e);return _27(_25.ReleaseBar,arguments);};_3.OmnitureListener.End=function(_3f){var _40={};_40["guid"]=_3f;bc("controller-end",_40);return _27(_25.End,arguments);};_3.Deltatre.Trace=function(_41){bc("controller-flash",_41);return _27(_26,_41);};},"wait":function(){this.log("wait :: entered");if(++this.retries<=80){this.log("wait :: playercheck "+this.retries);if(_3.PlayerVideo&&_3.PlayerVideo.Players&&_3.PlayerVideo.Players.Main){this.log("window.PlayerVideo.Players.Main is ready!");this.initiate();}else{_3.setTimeout(function(){_3.utag.uefa.video.wait();},250);}}else{this.log("aborted");}},"init":function(){if(/tealium_debug=1/.test(document.cookie)){this.debugmode=true;}if(_3.PlayerVideo&&_3.PlayerVideo.Players&&_3.PlayerVideo.Players.Main){this.initiate();}else{this.wait();}}};_3[_4][_5][_6].init();function bc(_42,_43){var _42=_9+"-"+_42;if(_8&&_3[_4]){_8(_3[_4][_5][_6]).trigger(_42,_43);}};})(a,b,window,"utag","uefa","video","tealium",window.jQuery);
},
function(a,b){
/*
* @author: Simon Browning - tealium, inc.
*
* @extension name: “Staging URLs into DEV Site ID 1"
*
* https://basecamp.com/2555704/projects/6632064/todos/149415678
*
* extension scope: at internet
*
**/
if(/stg\.infra\.uefa\.com/.test(document.domain)){
  window.xtsite = '545641';
  }
}];
  utag.handler.cfg_extend=[{"alr":1,"bwq":0,"id":"716","blr":0,"end":0},{"alr":1,"bwq":0,"id":"587","blr":0,"end":0},{"alr":1,"bwq":0,"id":"66","blr":0,"end":0},{"alr":1,"bwq":0,"id":"101","blr":0,"end":0},{"alr":1,"bwq":0,"id":"97","blr":0,"end":0},{"alr":1,"bwq":0,"id":"94","blr":0,"end":0},{"alr":1,"bwq":0,"id":"598","blr":0,"end":0},{"alr":1,"bwq":0,"id":"581","blr":0,"end":0},{"alr":1,"bwq":0,"id":"584","blr":0,"end":0},{"alr":1,"bwq":0,"id":"638","blr":0,"end":0},{"alr":1,"bwq":0,"id":"616","blr":0,"end":0},{"alr":1,"bwq":0,"id":"637","blr":0,"end":0},{"alr":1,"bwq":0,"id":"542","blr":0,"end":0},{"alr":1,"bwq":0,"id":"50","blr":0,"end":0},{"alr":1,"bwq":0,"id":"70","blr":0,"end":0},{"alr":1,"bwq":0,"id":"95","blr":0,"end":0},{"alr":1,"bwq":0,"id":"597","blr":0,"end":0},{"alr":1,"bwq":0,"id":"649","blr":0,"end":0},{"alr":1,"bwq":0,"id":"650","blr":0,"end":0},{"alr":1,"bwq":0,"id":"607","blr":0,"end":0},{"alr":1,"bwq":0,"id":"531","blr":0,"end":0},{"alr":1,"bwq":0,"id":"665","blr":0,"end":0}];
  utag.loader.initcfg = function(){
    utag.loader.cfg={"37":{load:utag.cond[13],send:0,v:201606070914,wait:0,tid:20010},"3":{load:utag.cond[14],send:1,v:201606101551,wait:1,tid:1101},"1":{load:1,send:1,v:201604281336,wait:1,tid:7001},"40":{load:utag.cond[15],send:1,v:201606031216,wait:1,tid:1101}};
utag.loader.cfgsort=["37","3","1","40"];
  }
utag.loader.initcfg();
}

  if(typeof utag_cfg_ovrd!='undefined'){for(var i in utag.loader.GV(utag_cfg_ovrd))utag.cfg[i]=utag_cfg_ovrd[i]};
  utag.loader.PINIT = function(a,b,c){
    utag.DB("Pre-INIT");
    if (utag.cfg.noload) {
      return;
    }

    try {
      // Initialize utag.data
      this.GET();
      // FUTURE: blr = "before load rules"
      if(utag.handler.RE('view',utag.data,"blr")){
        utag.handler.LR();
      }
      utag.handler.RE('view',utag.data);
    }catch(e){utag.DB(e)};
    // process 'blocking' tags (tags that need to run first)
    a=this.cfg;
    c=0;
    for (b in this.GV(a)) {
      // external .js files (currency converter tag) are blocking
      if(a[b].load>0 && (typeof a[b].src!='undefined'&&a[b].src!='')){
        a[b].block = 1
      }
      if(a[b].block){
        // handle case of bundled and blocking (change 4 to 1)
        // (bundled tags that do not have a .src should really never be set to block... they just run first)
        if(a[b].load==4)a[b].load=1; 
	c=1;
	this.bq[b]=1;
        var d=b;
 	a[b].cb=function(){utag.loader.cfg[d].cbf=1;utag.loader.LOAD(d)};
        a[b].id=b; 
        this.AS(a[b]);
      }
    }
    if(c==0)this.INIT();
  };
  utag.loader.INIT = function(a, b, c, d, e) {
    utag.DB('utag.loader.INIT');
    if (this.ol == 1) return -1;
    else this.ol = 1;
    utag.rpt.ts['i'] = new Date();
     
    d = this.cfgsort;
    // TODO: Publish engine should sort the bundled tags first..
    for (a=0;a<d.length;a++){
      e = d[a];
      b = this.cfg[e];
      b.id = e;
      // s2s (ServerStream) tags do not load client-side
      if(b.block != 1 && b.s2s!=1){
        if (utag.loader.bk[b.id]){
          this.f[b.id]=0;
          utag.loader.LOAD(b.id)
        // do not wait if the utag.cfg.noview flag is set and the tag is bundled
        }else if (b.wait == 1 && utag.loader.rf == 0  && !(b.load==4 && utag.cfg.noview)) {
	  utag.DB('utag.loader.INIT: waiting ' + b.id);
          this.wq.push(b)
          this.f[b.id]=2;
        }else if (b.load>0){
	  utag.DB('utag.loader.INIT: loading ' + b.id);
	  this.lq.push(b);
          this.AS(b);
        }
      }
    }
          
    if (this.wq.length > 0) utag.loader.EV('', 'ready', function(a) {
      if(utag.loader.rf==0){
        utag.DB('READY:utag.loader.wq');
        utag.loader.rf=1;
        utag.loader.WQ();
      }
    });
    else if(this.lq.length>0)utag.loader.rf=1;
    else if(this.lq.length==0)utag.loader.END();

    return 1
  };
  utag.loader.EV('', 'ready', function(a) {if(utag.loader.efr!=1){utag.loader.efr=1;try{
utag.util = utag.util || {};
utag.util.atiTrack = utag.util.atiTrack || function(siteid2,path){
	if(typeof window.xt_med === "function"){
  		window.xtclzone = 0;
  		window.xt_med("C", siteid2,encodeURI(path), "A");
  		window.xtclzone = window.scriptOnClickZone || 0;
	}else{
	 utag.DB("xt_med not present, aborting");
	};
};
utag.atiTrack = utag.util.atiTrack;
}catch(e){utag.DB(e)};
try{
/*
* @author: Simon Browning - tealium, inc.
*
* @extension name: Tickets and Hospitality Click Tracking
*
* @BaseCamp: https://basecamp.com/2555704/projects/6632064/todos/149997185
*
* extension scope: DOM Ready
*
**/

//Set generic data points
utag.data.competition  = {"euro2016.tickets.uefa.com":"euro","championsleague.tickets.uefa.com":"ucl","europaleague.tickets.uefa.com":"uel"};
utag.data.tickets = "ticketsandhospitality::"+utag.data.competition[utag.data["dom.domain"]]+"::";
//==========

//Regular Tickets
jQuery(document.body).on('mousedown','div#type_selection_0 a:eq(1)',function() {
path = ""+utag.data.tickets+"ticketselection::regulartickets";
//Send ATi request
utag.util.atiTrack(utag.data.site_id_2,path);

});

//Family Tickets
jQuery(document.body).on('mousedown','div#type_selection_0 a:eq(2)', function(e){
path = ""+utag.data.tickets+"ticketselection::familypackage",
//Send ATi request
utag.util.atiTrack(utag.data.site_id_2,path);
})

//Accessible Package
jQuery(document.body).on('mousedown','div#type_selection_0 a:eq(4)', function(e){
path = ""+utag.data.tickets+"ticketselection::accessibletickets",
//Send ATi request
utag.util.atiTrack(utag.data.site_id_2,path);

});

//Confiorm my choice
jQuery(document.body).on('mousedown','div#ticket_request_0 a.button.pull-right', function(e){
path = ""+utag.data.tickets+"ticketselection::confirmmychoice",
//Send ATi request
utag.util.atiTrack(utag.data.site_id_2,path);
})

//Next Step  Stage 1
jQuery(document.body).on('mousedown','div#selection_block a.next-step-button', function(e){
path = ""+utag.data.tickets+"ticketselection::nextstep",
//Send ATi request
utag.util.atiTrack(utag.data.site_id_2,path);
})

//Next Step Stage 2
jQuery(document.body).on('mousedown','div#customer_block a.next-step-button', function(e){
	path = ""+utag.data.tickets+"yourdetails::nextstep",
//Send ATi request
utag.util.atiTrack(utag.data.site_id_2,path);
})

//Submit Your Application
jQuery(document.body).on('mousedown','div#submit_application a.button:eq(0)', function(e){
	path = ""+utag.data.tickets+"submityourapplication",
//Send ATi request
utag.util.atiTrack(utag.data.site_id_2,path);
})
}catch(e){utag.DB(e)};
try{
/*
* @author: Simon Browning - tealium, inc.
*
* @extension name: Ticketing Interest Registration Tracking
*
* https://basecamp.com/2555704/projects/6632064/todos/157821035
* https://basecamp.com/2555704/projects/6632064/todos/157818090
*
* extension scope: DOM Ready
*
**/
jQuery(document.body).one("mousedown", "a#submit,li.form.subscribe div.link", function(){
	utag.timer = setInterval(function(){
		var complete = /^\/uefaeuro/.test(utag.data['dom.pathname']) ? "#thankyou"  : "div.tickets-form-landing";
		if(jQuery(complete).is(":visible")){
			if(utag.util && utag.util.atiTrack){
				var pageName = "ticketing_interest::" +(/^\/uefaeuro/.test(utag.data['dom.pathname']) ? "euro" : "uefa");
				utag.util.atiTrack(utag.data.site_id_2,pageName);
				clearInterval(utag.timer);
			}
		}
	},1000);
});
}catch(e){utag.DB(e)};
try{
/*
* @author: Simon Browning - tealium, inc.
*
* @extension name: UCL Match Calendar for Mobile - Dropdown Menu Tracking
*
* https://basecamp.com/2555704/projects/6632064/todos/160236490
*
* extension scope: DOM Ready
*
**/
jQuery(document.body).on("change", "div#tm-teams-selection select", function(e){
  var team_no = jQuery(this).val(), team, pageName = "mobile::ucl::matches::calendar_dropdown_menu";
  jQuery.each(jQuery(this).find("option"),function(index,element){
    if(team_no === element.value){
      team = jQuery(element).text();
    }
  });
  pageName = pageName +"::"+team;
  utag.util.atiTrack(utag.data.site_id_2,pageName);
});
}catch(e){utag.DB(e)};
try{ if(1){if(typeof utag.runonce=='undefined')utag.runonce={};utag.jdh=function(h,i,j,k){h=utag.jdhc.length;if(h==0)window.clearInterval(utag.jdhi);else{for(i=0;i<h;i++){j=utag.jdhc[i];k=jQuery(j.i).is(":visible")?1:0;if(k!=j.s){if(j.e==(j.s=k))jQuery(j.i).trigger(j.e?"afterShow":"afterHide")}}}};utag.jdhi=window.setInterval(utag.jdh, 250);utag.jdhc=[];
if(typeof utag.runonce[690]=='undefined'){utag.runonce[690]=1;jQuery(document.body).on('click','button#gots-vote-btn', function(e){if (utag.util && utag.util.atiTrack) {
  var pagename = "";
  if(/goal-of-the-season/.test(location.pathname)){
    pagename = "gots::voteforthisgoal";
  }else if(/save-of-the-season/.test(location.pathname)){
    pagename = "sots::voteforthissave";
  }
  utag.util.atiTrack(utag.data.site_id_2,pagename); 
}})}}  }catch(e){utag.DB(e)};
try{ if(1){
if(typeof utag.runonce[691]=='undefined'){utag.runonce[691]=1;jQuery(document.body).on('mousedown','div.gots-share-thumbs ul a', function(e){if (utag.util && utag.util.atiTrack) {
  var pagename = "";
  if(/goal-of-the-season/.test(location.pathname)){
    pagename = "gots::thanksforvoting::thumbnail";
  }else if(/save-of-the-season/.test(location.pathname)){
    pagename = "sots::thanksforvoting::thumbnail";
  }  
 utag.util.atiTrack(utag.data.site_id_2,pagename); 
}
 });}}  }catch(e){utag.DB(e)};
try{ if(1){
if(typeof utag.runonce[692]=='undefined'){utag.runonce[692]=1;jQuery(document.body).on('click','.gots-share-facebook', function(e){if (utag.util && utag.util.atiTrack) {
  var pagename = "";
  if(/goal-of-the-season/.test(location.pathname)){
    pagename = "gots::thanksforvoting::share_facebook";
  }else if(/save-of-the-season/.test(location.pathname)){
    pagename = "sots::thanksforvoting::share_facebook";
  }  
 utag.util.atiTrack(utag.data.site_id_2,pagename); 
}})}}  }catch(e){utag.DB(e)};
try{ if(1){
if(typeof utag.runonce[693]=='undefined'){utag.runonce[693]=1;jQuery(document.body).on('click','.gots-share-twitter', function(e){if (utag.util && utag.util.atiTrack) {
var pagename = "";
  if(/goal-of-the-season/.test(location.pathname)){
    pagename = "gots::thanksforvoting::share_twitter";
  }else if(/save-of-the-season/.test(location.pathname)){
    pagename = "sots::thanksforvoting::share_twitter";
  }  
 utag.util.atiTrack(utag.data.site_id_2,pagename); 
}})}}  }catch(e){utag.DB(e)};
try{ if(1){
if(typeof utag.runonce[694]=='undefined'){utag.runonce[694]=1;jQuery(document.body).on('click','.gots-share-download a', function(e){if (utag.util && utag.util.atiTrack) {
  var pagename = "";
  if(/goal-of-the-season/.test(location.pathname)){
    pagename = "gots::thanksforvoting::download";
  }else if(/save-of-the-season/.test(location.pathname)){
    pagename = "sots::thanksforvoting::download";
  }  
 utag.util.atiTrack(utag.data.site_id_2,pagename); 
}})}}  }catch(e){utag.DB(e)};
try{ if(1){
if(typeof utag.runonce[706]=='undefined'){utag.runonce[706]=1;jQuery(document.body).on('click','button#hl-login-button', function(e){var path = (utag.data.channel || "")+"::video_highlgiths::login_for_free_button";
utag.atiTrack(utag.data.site_id_2,path);})}}  }catch(e){utag.DB(e)};
try{ if(1){
if(typeof utag.runonce[705]=='undefined'){utag.runonce[705]=1;jQuery(document.body).on('click','button#hl-login-icon', function(e){var path = "ucl::video_highlgiths::play_button";
utag.atiTrack(utag.data.site_id_2,path);})}}  }catch(e){utag.DB(e)};
try{ if(1){
if(typeof utag.runonce[707]=='undefined'){utag.runonce[707]=1;jQuery(document.body).on('click','span.btwh-vote-btn', function(e){var pageName = "euro::btwh::anonymous_submission";
if(!!utag.data['cp.uefa_login']){
  pageName = "euro::btwh::loggedin_submission";
}

utag.util.atiTrack(utag.data['site_id_2'],pageName);})}}  }catch(e){utag.DB(e)};
try{
jQuery('#uefaeuro-finals ul.fav-team-list a').mousedown(function(e) {
  var team = this.title.toLowerCase();
  var pageName = "euro::select_team::" + team;
  utag.util.atiTrack(utag.data['site_id_2'], pageName);
});
}catch(e){utag.DB(e)};
try{ if(1){
if(typeof utag.runonce[710]=='undefined'){utag.runonce[710]=1;jQuery(document.body).on('mousedown','span.btwh-slogan-submit', function(e){var team = jQuery("span.btwh-team-name").text().toLowerCase();
var solgan = jQuery("textarea.btwh-slogan-insert").val();
var pageName = "euro::btwh::anonymous_submission";
if(!!utag.data['cp.uefa_login']){
  pageName = "euro::btwh::loggedin_submission";
}
pageName = pageName +"::"+team+"::"+solgan;
utag.util.atiTrack(utag.data['site_id_2'],pageName);});}}  }catch(e){utag.DB(e)};
try{
if(/^\/uefaeuro\//i.test(utag.data['dom.pathname'])){
   jQuery(document.body).on('click', '.fav-team-item-link', function(e) {
  xt_click(this, 'F', '13', 'euro2016::Favorite_team_selection&x3=' + $(this).attr('title'))
    });
  }

if(/^\/uefaeuro\/season=2016\/teams\//i.test(utag.data['dom.pathname'])){
   jQuery(document.body).on('click', '.team-favourite-button', function(e) {
  xt_click(this,'F', '13', 'euro2016::Favorite_team_selection&x3='+$('div.team-header_team-name > .team-name').text())
    });
  }
}catch(e){utag.DB(e)};
try{ if(/^\/uefaeuro\/panini-sticker-album\//i.test(utag.data['dom.pathname'])){
if(typeof utag.runonce[727]=='undefined'){utag.runonce[727]=1;jQuery(document.body).on('click','a[href$="www.cokeurl.com/UEFAPANINI"]', function(e){var lang = utag.data['dom.domain'].split(".")[0] === "www" ? "EN" : utag.data['dom.domain'].split(".")[0].toUpperCase();
var pageName = "Panini::Play_Now::"+lang+"::Play_Now";
xt_click(this,'C','13',pageName,'S');})}}  }catch(e){utag.DB(e)};
try{ if(/^\/uefaeuro\/panini-sticker-album\//i.test(utag.data['dom.pathname'])){
if(typeof utag.runonce[728]=='undefined'){utag.runonce[728]=1;jQuery(document.body).on('click','.app-a a[href$="itunes.apple.com/app/id1083447050?mt=8"]', function(e){var lang = utag.data['dom.domain'].split(".")[0] === "www" ? "EN" : utag.data['dom.domain'].split(".")[0].toUpperCase();
var pageName = "Panini::App_Download::"+lang+"::Apple_app";
xt_click(this,'C','13',pageName,'S');})}}  }catch(e){utag.DB(e)};
try{ if(/^\/uefaeuro\/panini-sticker-album\//i.test(utag.data['dom.pathname'])){
if(typeof utag.runonce[729]=='undefined'){utag.runonce[729]=1;jQuery(document.body).on('click','.app-g a[href$="play.google.com/store/apps/details?id=it.panini.pansteuro"]', function(e){var lang = utag.data['dom.domain'].split(".")[0] === "www" ? "EN" : utag.data['dom.domain'].split(".")[0].toUpperCase();
var pageName = "Panini::App_Download::"+lang+"::Android_app";
xt_click(this,'C','13',pageName,'S');})}}  }catch(e){utag.DB(e)};
try{ if(/^\/uefaeuro\/season=2016\/teams\//i.test(utag.data['dom.pathname'])){
if(typeof utag.runonce[730]=='undefined'){utag.runonce[730]=1;jQuery(document.body).on('click','.team-favourite-button', function(e){var pageName, team, follow, followClass = jQuery(".js-follow:not('.hide'),.js-following:not('.hide')").attr('class');
    if (followClass === "js-follow") {
        follow = "unfollow"
    } else if (followClass === "js-following") {
        follow = "follow";
    }
    if(!!SCW && !!SCW.ContentProperties && !!SCW.ContentProperties.subsec2){
		team = SCW.ContentProperties.subsec2.replace('team ','');    	
    }else{
		team = jQuery(".team-name").toLowerCase();  	
    }
    team = team.length > 0 ? team.charAt(0).toUpperCase() + team.substr(1) : "";
    pageName = "EURO_Teams::teamheader::"+team+"::"+follow;
    if(!!utag && !!utag.util && !!utag.util.atiTrack){
    	utag.util.atiTrack(utag.data.site_id_2,pageName);
    }})}}  }catch(e){utag.DB(e)};
try{ if(/^\/uefaeuro\/season=2016\/teams\//i.test(utag.data['dom.pathname'])){
if(typeof utag.runonce[731]=='undefined'){utag.runonce[731]=1;jQuery(document.body).on('click','.js-section-nav li:gt(-4)', function(e){var pageName, team, nav, navHref = jQuery(this).find('a').attr('href');

if(navHref.indexOf('squad') >-1){
  nav = "Squad";
}else if(navHref.indexOf('matches') >-1){
  nav = "Matches";
}else if(navHref.indexOf('profile') >-1){
  nav = "Profile";
}

if(!!SCW && !!SCW.ContentProperties && !!SCW.ContentProperties.subsec2){
  team = SCW.ContentProperties.subsec2.replace('team ','');    	
}else{
  team = jQuery(".team-name").toLowerCase();    	
}
team = team.length > 0 ? team.charAt(0).toUpperCase() + team.substr(1) : "";
pageName = "EURO_Teams::Subsections-menu::"+nav+"::"+team;

if(!!utag && !!utag.util && !!utag.util.atiTrack){
  utag.util.atiTrack(utag.data.site_id_2,pageName);
}})}}  }catch(e){utag.DB(e)};
try{ if(/^\/uefaeuro\/season=2016\/teams\//i.test(utag.data['dom.pathname'])){
if(typeof utag.runonce[732]=='undefined'){utag.runonce[732]=1;jQuery(document.body).on('click','.owl-next', function(e){var pageName, team;

if(!!SCW && !!SCW.ContentProperties && !!SCW.ContentProperties.subsec2){
		team = SCW.ContentProperties.subsec2.replace('team ','');    	
    }else{
		team = jQuery(".team-name").toLowerCase();    	
    }
 team = team.length > 0 ? team.charAt(0).toUpperCase() + team.substr(1) : "";
pageName = "EURO_Teams::arrowmosaic::"+team+"::arrow-forward";

if(!!utag && !!utag.util && !!utag.util.atiTrack){
    	utag.util.atiTrack(utag.data.site_id_2,pageName);
    }})}}  }catch(e){utag.DB(e)};
try{ if(/^\/uefaeuro\/season=2016\/teams\//i.test(utag.data['dom.pathname'])){
if(typeof utag.runonce[733]=='undefined'){utag.runonce[733]=1;jQuery(document.body).on('click','.owl-prev', function(e){var pageName, team;

if(!!SCW && !!SCW.ContentProperties && !!SCW.ContentProperties.subsec2){
		team = SCW.ContentProperties.subsec2.replace('team ','');    	
    }else{
		team = jQuery(".team-name").toLowerCase();    	
    }
 team = team.length > 0 ? team.charAt(0).toUpperCase() + team.substr(1) : "";
pageName = "EURO_Teams::arrowmosaic::"+team+"::arrow-backwards";

if(!!utag && !!utag.util && !!utag.util.atiTrack){
    	utag.util.atiTrack(utag.data.site_id_2,pageName);
    }})}}  }catch(e){utag.DB(e)};
try{ if(/^\/uefaeuro\/season=2016\/matches\//i.test(utag.data['dom.pathname'])){
if(typeof utag.runonce[734]=='undefined'){utag.runonce[734]=1;jQuery(document.body).on('click','.js-gflt-item[data-flt-name="team"]', function(e){var team = jQuery(this).data('flt-label').replace("  ",'').replace(" ","_");
utag.util.atiTrack(utag.data.site_id_2,"EURO_Matches::filter::filter_by_team::"+team);})}}  }catch(e){utag.DB(e)};
try{ if(/^\/uefaeuro\/season=2016\/matches\//i.test(utag.data['dom.pathname'])){
if(typeof utag.runonce[735]=='undefined'){utag.runonce[735]=1;jQuery(document.body).on('click','.js-gflt-item[data-flt-name="venue"]', function(e){var venue = jQuery(this).data('flt-label').replace("  ",'').replace(/\s/g,"_");
venue = encodeURIComponent(venue);
utag.util.atiTrack(utag.data.site_id_2,"EURO_Matches::filter::filter_by_venue::"+venue);})}}  }catch(e){utag.DB(e)};
try{ if(/^\/uefaeuro\/season=2016\/matches\//i.test(utag.data['dom.pathname'])){
if(typeof utag.runonce[736]=='undefined'){utag.runonce[736]=1;jQuery(document.body).on('click','#tab-navigation a', function(e){var day = jQuery(this).data('match-day');
	var pageName = "EURO_Matches::calendar-dropdown::";

	switch(day){
		case 1: 
			pageName = pageName + "Calendar-MD1::MD1";
			break;
		case 2: 
			pageName = pageName + "Calendar-MD2::MD2";
			break;
		case 3: 
			pageName = pageName + "Calendar-MD3::MD3";
			break;
		case 4: 
			pageName = pageName + "Calendar-Round-of-16::Round-of-16";
			break;
		case 5: 
			pageName = pageName + "Calendar-QF::Quarter-Finals";
			break;
		case 6: 
			pageName = pageName + "Calendar-SF-MD1::Semi-Finals";
			break;
		case 7: 
			pageName = pageName + "Calendar-FF::Finals";
			break;
	}

	utag.util.atiTrack(utag.data.site_id_2,pageName);})}}  }catch(e){utag.DB(e)};
try{ if(/^\/uefaeuro\/season=2016\/matches\//i.test(utag.data['dom.pathname'])){
if(typeof utag.runonce[737]=='undefined'){utag.runonce[737]=1;jQuery(document.body).on('click','#filtered_matchlist a.match-row_group', function(e){var day = jQuery(this).data('match-day');
	var pageName = "EURO_Matches::calendar-dropdown::";

	switch(day){
		case 1: 
			pageName = pageName + "Calendar-MD1::MD1";
			break;
		case 2: 
			pageName = pageName + "Calendar-MD2::MD2";
			break;
		case 3: 
			pageName = pageName + "Calendar-MD3::MD3";
			break;
		case 4: 
			pageName = pageName + "Calendar-Round-of-16::Round-of-16";
			break;
		case 5: 
			pageName = pageName + "Calendar-QF::Quarter-Finals";
			break;
		case 6: 
			pageName = pageName + "Calendar-SF-MD1::Semi-Finals";
			break;
		case 7: 
			pageName = pageName + "Calendar-FF::Finals";
			break;
	}

	utag.util.atiTrack(utag.data.site_id_2,pageName);})}}  }catch(e){utag.DB(e)};
try{ if(/^\/uefaeuro\//i.test(utag.data['dom.pathname'])){
if(typeof utag.runonce[738]=='undefined'){utag.runonce[738]=1;jQuery(document.body).on('click','span.js-follow-btn', function(e){var lang = utag.data['dom.domain'].split(".")[0] === "www" ? "EN" : utag.data['dom.domain'].split(".")[0].toUpperCase();
var options = jQuery('.match-row--card div[data-plugin="matchlive"]').data('options');
var siteid2 = utag.data.site_id_2;
var round = options.matchentity.Round.Id;
var match = options.matchId;
var home_team = options.matchentity.Home.OfficialName;
var away_team = options.matchentity.Away.OfficialName;
var path = "EURO_LiveButton::round_"+ round +"::match_"+match+"::"+lang+"_"+home_team+"_"+away_team+"";
if(typeof window.xt_med === "function"){
  		window.xtclzone = 0;
  		window.xt_med("C", siteid2,encodeURI(path), "N");
  		window.xtclzone = window.scriptOnClickZone || 0;
	}else{
	 utag.DB("xt_med not present, aborting");
	};})}}  }catch(e){utag.DB(e)};}})

  utag.cfg.readywait ? utag.loader.EV('', 'ready', function(a) {
    if(utag.loader.rf==0){
      utag.loader.rf=1;
      utag.DB('READY:utag.cfg.readywait');
      utag.loader.PINIT()
    }
  }) : utag.loader.PINIT();
}
