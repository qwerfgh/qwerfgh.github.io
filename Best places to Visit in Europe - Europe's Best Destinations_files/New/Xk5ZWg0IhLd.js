/*!CK:1008945846!*//*1455727159,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["Fk+6G"]); }

__d("EmbeddedPostPluginActions",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={EMBEDDED_POSTS_COMMENT:"embedded_post_comment",EMBEDDED_POSTS_LIKE:"embedded_post_like",EMBEDDED_POSTS_SHARE:"embedded_post_share",EMBEDDED_POSTS_UNLIKE:"embedded_post_unlike"};},null);
__d("EmbeddedPostPluginActionTypes",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={CLICK:"click"};},null);
__d("FBFeedLocations",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={NEWSFEED:1,GROUP:2,GROUP_PERMALINK:3,COMMUNITY:4,PERMALINK:5,SHARE_OVERLAY:6,PERMALINK_STREAM:7,GROUP_PINNED:8,FRIEND_LIST:9,TIMELINE:10,HASHTAG_FEED:11,TOPIC_FEED:12,PAGE:13,NOTIFICATION_FEED:14,GROUP_REPORTED:15,GROUP_PENDING:16,PAGES_FEED_IN_PAGES_MANAGER:17,TICKER_CLASSIC:18,PAGES_SUGGESTED_FEED_IN_PAGES_MANAGER:19,SEARCH:20,GROUP_SEARCH:21,NO_ATTACHMENT:22,EMBED:23,EMBED_FEED:24,ATTACHMENT_PREVIEW:25,STORIES_TO_SHARE:26,PROMPT_PERMALINK:27,TREND_HOVERCARD:28,OPEN_GRAPH_PREVIEW:30,HOTPOST_IN_PAGES_FEED:31,SCHEDULED_POSTS:32,TIMELINE_NOTES:33,PAGE_INSIGHTS:34,COMMENT_ATTACHMENT:35,PAGE_TIMELINE:36,GOODWILL_THROWBACK_PERMALINK:37,AGGREGATED_STORY_DIALOG:38,LIKE_CONFIRM:39,GOODWILL_THROWBACK_PROMOTION:40,SPACES_FEED:41,BROWSE_CONSOLE:42,GROUP_FOR_SALE_COMPACT:43,ENTITY_FEED:44,GROUP_FOR_SALE_DISCUSSION:45,PAGES_CONTENT_TAB_PREVIEW:46,GOODWILL_THROWBACK_SHARE:47,TIMELINE_VIDEO_SHARES:48,EVENT:49,PAGE_PLUGIN:50,SRT:51,PAGES_CONTENT_TAB_INSIGHTS:52,ADS_PE_CONTENT_TAB_INSIGHTS:53,PAGE_ACTIVITY_FEED:54,VIDEO_CHANNEL:55,POST_TO_PAGE:56,GROUPS_GSYM_HOVERCARD:57,GROUP_POST_TOPIC_FEED:58,FEED_SURVEY:59,PAGES_MODERATION:60,SAVED_DASHBOARD:61,PULSE_SEARCH:62,GROUP_NUX:63,GROUP_NUX_POST_VIEW:64,EVENT_PERMALINK:65,FUNDRAISER_PAGE:66,EXPLORE_FEED:67,CRT:68,REVIEWS_FEED:69,VIDEO_HOME_CHANNEL:70,NEWS:71,TIMELINE_FRIENDSHIP:72,SAVED_REMINDERS:73,PSYM:74,ADMIN_FEED:75,CAMPFIRE_NOTE:76,PAGES_CONTEXT_CARD:77,ACTIVITY_LOG:78,WALL_POST_REPORT:79,TIMELINE_BREAKUP:80,POLITICIANS_FEED:81,PRODUCT_DETAILS:82,SPORTS_PLAY_FEED:83,GROUP_TOP_STORIES:84};},null);
__d("VideoPlayerReason",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={AUTOPLAY:"autoplay_initiated",USER:"user_initiated",PAGE_VISIBILITY:"page_visibility_initiated",SEEK:"seek_initiated",LOOP:"loop_initiated",EMBEDDED_VIDEO_API:"embedded_video_api_initiated",CONNECTION:"host-connection-error",VIDEO_DATA_REPLACED:"video_data_replaced",VOD_NOT_READY:"vod_not_ready",VIDEO_DATA_SWITCH:"video_data_switch",FALLBACK_MODE:"fallback_mode"};},null);
__d('LinkshimAsyncLink',['$','AsyncSignal','DOM','UserAgent_DEPRECATED','LinkshimHandlerConfig'],function a(b,c,d,e,f,g,h,i,j,k,l){if(c.__markCompiled)c.__markCompiled();var m={addTrackingToken:function(n,o){n.setAttribute('data-xt',o.token);},setupWithTrackingTokenReference:function(n,o){var p='xt='+o.token,q=n.href.split('#'),r=q[0].indexOf('?')!==-1,s=r?q[0].replace(/([\?|&]xt=[^&]*)/,'')+'&'+p+(q[1]||''):n.href+='?'+p;n.href=s;var t=n.onmousedown;n.onmousedown=function(u){m.swap(this,s);n.href=n.href.replace(/([\?|&]sig=[^&]*)/,'')+'&sig='+Math.floor(Math.random()*65535+65536);if(typeof t==='function')t();};},swap:function(n,o){var p=k.ie()<=8;if(p){var q=j.create('wbr',{},null);j.appendContent(n,q);}n.href=o;if(p)j.remove(q);},referrer_log:function(n,o,p){var q=h('meta_referrer');q.content=l.switched_meta_referrer_policy;m.swap(n,o);setTimeout(function(){q.content=l.default_meta_referrer_policy;new i(p,{}).send();},100);}};f.exports=m;},null);
__d('legacy:dom-asynclinkshim',['LinkshimAsyncLink'],function a(b,c,d,e){if(c.__markCompiled)c.__markCompiled();b.LinkshimAsyncLink=c('LinkshimAsyncLink');},3);
__d('DeferredComponent.react',['React','createCancelableFunction'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();var j,k,l=h.PropTypes;j=babelHelpers.inherits(m,h.Component);k=j&&j.prototype;function m(n,o){'use strict';k.constructor.call(this,n,o);this.$DeferredComponent1=this.$DeferredComponent1.bind(this);this.state={ComponentClass:null,cancelableModulesLoaded:i(this.$DeferredComponent1)};}m.prototype.componentWillMount=function(){'use strict';this.props.deferredComponent(this.state.cancelableModulesLoaded);};m.prototype.componentWillUnmount=function(){'use strict';this.state.cancelableModulesLoaded.cancel();};m.prototype.render=function(){'use strict';var n=this.state.ComponentClass;if(!n||this.props.deferredForcePlaceholder)return this.props.deferredPlaceholder;var o=this.props,p=o.deferredPlaceholder,q=o.deferredComponent,r=o.onComponentLoad,s=o.deferredForcePlaceholder,t=babelHelpers.objectWithoutProperties(o,['deferredPlaceholder','deferredComponent','onComponentLoad','deferredForcePlaceholder']);return h.createElement(n,t);};m.prototype.$DeferredComponent1=function(n){'use strict';this.setState({ComponentClass:n},(function(){this.props.onComponentLoad&&this.props.onComponentLoad(n);}).bind(this));};m.propTypes={deferredPlaceholder:l.element.isRequired,deferredComponent:l.func.isRequired,onComponentLoad:l.func,deferredForcePlaceholder:l.bool};f.exports=m;},null);
__d('JSResource',['Promise','Bootloader'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();function j(l){'use strict';this.$JSResourceReference1=l;}j.prototype.getModuleId=function(){'use strict';return this.$JSResourceReference1;};j.prototype.load=function(){'use strict';return new h((function(l){i.loadModules.call(i,[this.$JSResourceReference1],l);}).bind(this));};j.prototype.equals=function(l){'use strict';return this===l||this.$JSResourceReference1==l.$JSResourceReference1;};var k=function(l){return new j(l);};k.Reference=j;f.exports=k;},null);
__d('BootloadedComponent.react',['Bootloader','DeferredComponent.react','JSResource','React'],function a(b,c,d,e,f,g,h,i,j,k){if(c.__markCompiled)c.__markCompiled();var l,m,n=k.PropTypes;l=babelHelpers.inherits(o,k.Component);m=l&&l.prototype;function o(p,q){'use strict';m.constructor.call(this,p,q);this.$BootloadedComponent1=this.$BootloadedComponent1.bind(this);}o.prototype.render=function(){'use strict';var p=this.props,q=p.bootloadLoader,r=p.bootloadPlaceholder,s=p.bootloadForcePlaceholder,t=babelHelpers.objectWithoutProperties(p,['bootloadLoader','bootloadPlaceholder','bootloadForcePlaceholder']);return (k.createElement(i,babelHelpers._extends({deferredPlaceholder:r,deferredComponent:this.$BootloadedComponent1,deferredForcePlaceholder:s},t)));};o.prototype.$BootloadedComponent1=function(p){'use strict';h.loadModules.call(h,[this.props.bootloadLoader.getModuleId()],p);};f.exports=Object.assign(o,{propTypes:{bootloadPlaceholder:n.element.isRequired,bootloadLoader:n.instanceOf(j.Reference).isRequired,bootloadForcePlaceholder:n.bool},create:function(p){var q,r;q=babelHelpers.inherits(s,k.Component);r=q&&q.prototype;s.prototype.render=function(){'use strict';var t=this.props,u=t.bootloadLoader,v=babelHelpers.objectWithoutProperties(t,['bootloadLoader']);return (k.createElement(o,babelHelpers._extends({bootloadLoader:p},v)));};function s(){'use strict';q.apply(this,arguments);}s.displayName='BootloadedComponent('+p.getModuleId()+')';return s;}});},null);
__d('randomInt',['invariant'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();function i(j,k){var l=arguments.length;!(l>0&&l<=2)?h(0):undefined;if(l===1){k=j;j=0;}!(k>j)?h(0):undefined;var m=this.random||Math.random;return Math.floor(j+m()*(k-j));}f.exports=i;},null);
__d('ClientIDs',['randomInt'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i={},j={getNewClientID:function(){var k=Date.now(),l=k+':'+(h(0,4294967295)+1);i[l]=true;return l;},isExistingClientID:function(k){return !!i[k];}};f.exports=j;},null);
__d('ServerTime',['InitialServerTime'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();l(h.serverTime);var i;function j(){return Date.now()-i;}function k(){return i;}function l(m){i=Date.now()-m;}f.exports={getMillis:j,getOffsetMillis:k,update:l,get:j,getSkew:k};},null);
__d('AttachmentRelatedShareConstants',[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={ARTICLE_CLICK:'article_click',VIDEO_CLICK:'video_click',FBVIDEO_CLICK:'fbvideo_click',GAME_CLICK:'game_click',EVENT_DELAY:1000,HIDE_DELAY:100,PHOTO_CLICK:'photo_click',EVENT_JOIN:'event_join'};f.exports=h;},null);
__d("XPubcontentInlinePhotoPivotsEventsController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/pubcontent\/inline_photo_pivots_chaining\/events\/",{});},null);
__d('tidyEvent',['Run'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i=[];function j(){while(i.length){var m=i.shift();m&&m.remove?m.remove():m.unsubscribe();}}function k(m){var n;function o(){if(!n)return;n.apply(m,arguments);n=null;m=null;}if(m.remove){n=m.remove;m.remove=o;}else{n=m.unsubscribe;m.unsubscribe=o;}return m;}function l(m){if(!i.length)h.onLeave(j);if(Array.isArray(m)){for(var n=0;n<m.length;n++)i.push(k(m[n]));}else i.push(k(m));return m;}f.exports=l;},null);
__d('EntstreamAttachmentRelatedShare',['Arbiter','AsyncRequest','AttachmentRelatedShareConstants','CSS','DOM','Event','XPubcontentInlinePhotoPivotsEventsController','csx','cx','ge','getOrCreateDOMID','tidyEvent'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){if(c.__markCompiled)c.__markCompiled();var t=2,u=3,v={loadRelatedAttachment:function(w,x,y){var z=null;if(typeof w==="string"){z=q(w);}else z=w;if(!z)return;var aa=m.listen(z,'click',function(){aa.remove();h.inform(j.ARTICLE_CLICK,{attachment:z,global_share_id:x,is_right_click:false,share_id:y});}),ba=m.listen(z,'mousedown',function(event){if(event.which===u||event.button===t){ba.remove();h.inform(j.ARTICLE_CLICK,{attachment:z,global_share_id:x,is_right_click:true});}});},loadInlineStoryPivotAttachment:function(w,x){var y=q(w);if(!y)return;var z=m.listen(y,'click',function(){z.remove();h.inform(j.PHOTO_CLICK,{attachment:y,storyid:x});});},loadRelatedGameAttachment:function(w,x){var y=null;if(typeof w==="string"){y=q(w);}else y=w;if(!y)return;s(m.listen(y,'click',function(){h.inform(j.GAME_CLICK,{attachment:y,global_share_id:x});}));s(m.listen(y,'mousedown',function(event){if(event.which===u||event.button===t)h.inform(j.GAME_CLICK,{attachment:y,global_share_id:x});}));},loadRelatedLSCVideoAttachment:function(w,x){var y=null;if(typeof w==='string'){y=q(w);}else y=w;if(!y)return;var z="^div._4-u2",aa=l.scry(y,z),ba=m.listen(y,'click',function(){ba.remove();h.inform(j.VIDEO_CLICK,{attachment:y,global_share_id:x});});},loadRelatedLSCInlineVideoAttachment:function(w,x){var y=null;if(typeof w==='string'){y=q(w);}else y=w;if(!y)return;m.listen(y,'click',function(){var z="^div._4-u2",aa="_1d8v",ba=l.scry(y,z),ca=ba.length===1?ba[0]:null,da=ca.parentNode,ea=da.previousSibling;while(!ea){da=da.parentNode;ea=da.previousSibling;}if(!k.hasClass(ea,aa)){var fa=l.create('div',{className:aa}),ga=l.insertBefore(ca.parentNode,fa),ha=ga.length>=1?ga[0]:null;}else ha=ea;var ia=r(ha);new i().setURI('/ajax/flash/expand_inline.php').setData({share_id:x,target_div:ia,max_width:470,max_height:264,replace_target_div:true}).setMethod('GET').setReadOnly(true).setRelativeTo(y.parentNode).send();});},loadRelatedEventsPivotAttachment:function(w,x){var y=null;if(typeof w==="string"){y=q(w);}else y=w;if(!y)return;s(m.listen(y,'click',function(){h.inform(j.EVENT_JOIN,{attachment:y,event_id:x});}));},closeButton:function(w,x){m.listen(w,'click',function(){l.remove(x);});},closeButtonPhotoPivots:function(w,x,y,z){m.listen(w,'click',function(){var aa=n.getURIBuilder(),ba={story_id:y,search_query_type:z,event:'hide'};new i().setMethod('POST').setURI(aa.getURI()).setData(ba).send();l.remove(x);});},seeAllLinkPhotoPivots:function(w,x,y){m.listen(w,'click',function(){var z=n.getURIBuilder(),aa={story_id:x,search_query_type:y,event:'see_all'};new i().setMethod('POST').setURI(z.getURI()).setData(aa).send();});},removeOldSuggestions:function(w){var x=q(w);if(!x)return;var y=l.scry(x.parentNode,"._5d73");for(var z=1;z<y.length;z++)l.remove(y[z]);setTimeout(function(){k.show(y[0]);},1000);},showHiddenSuggestions:function(w){var x=m.listen(w,'click',function(){x.remove();var y="^._1ui8",z=l.scry(w,y);if(!z)return;k.hide(z[0]);var aa=z[0].previousSibling;while(aa){k.show(aa);aa=aa.previousSibling;}});}};f.exports=v;},null);
__d('FeedTrackingAsync',['Arbiter','Run','collectDataAttributes'],function a(b,c,d,e,f,g,h,i,j){if(c.__markCompiled)c.__markCompiled();var k;f.exports.init=function(){if(k)return;k=h.subscribe('AsyncRequest/send',function(l,m){var n=m.request,o=n.getRelativeTo();if(o){var p=n.getData(),q=j(o,['ft']);if(q.ft&&Object.keys(q.ft).length)Object.assign(p,q);}});i.onLeave(function(){k.unsubscribe();k=null;});};},null);
__d('LiveTimer',['CSS','DOM','ServerTime','fbt','csx','cx'],function a(b,c,d,e,f,g,h,i,j,k,l,m){if(c.__markCompiled)c.__markCompiled();var n=1000,o=60,p=3600,q=43200,r=86400,s=60,t=60000,u={restart:function(v){j.update(v*1000);this.updateTimeStamps();},getApproximateServerTime:function(){return j.get();},getServerTimeOffset:function(){return -1*j.getSkew();},updateTimeStamps:function(){this.timestamps=i.scry(document.body,'abbr.livetimestamp');this.startLoop(t);},addTimeStamps:function(v){if(!v)return;this.timestamps=this.timestamps||[];if(i.isNodeOfType(v,'abbr')&&h.hasClass(v,'livetimestamp')){this.timestamps.push(v);}else{var w=i.scry(v,'abbr.livetimestamp');for(var x=0;x<w.length;++x)this.timestamps.push(w[x]);}this.startLoop(0);},removeTimestamp:function(v){if(!this.timestamps||!v)return;var w=this.timestamps.indexOf(v);if(w>-1)this.timestamps.splice(w,1);},startLoop:function(v){this.stop();this.timeout=setTimeout((function(){this.loop();}).bind(this),v);},stop:function(){clearTimeout(this.timeout);},loop:function(v){if(v)this.updateTimeStamps();var w=Math.floor(j.get()/n),x=-1;this.timestamps&&this.timestamps.forEach((function(z){var aa=z.getAttribute('data-utime'),ba=z.getAttribute('data-shorten'),ca=z.getAttribute('data-minimize'),da=this.renderRelativeTime(w,aa,ba,ca);if(da.text){var ea={'class':"timestampContent"},fa=i.scry(z,".timestampContent")[0],ga=fa&&fa.getAttribute('id');if(ga)ea.id=ga;i.setContent(z,i.create('span',ea,da.text));}if(da.next!=-1&&(da.next<x||x==-1))x=da.next;}).bind(this));if(x!=-1){var y=Math.max(t,x*n);this.timeout=setTimeout((function(){this.loop();}).bind(this),y);}},renderRelativeTime:function(v,w,x,y){var z={text:"",next:-1};if(v-w>r)return z;var aa=v-w,ba=Math.floor(aa/o),ca=Math.floor(ba/s);if(ba<1){if(y){z.text=k._("1 min");z.next=20-aa%20;}else if(x){z.text=k._("\u00c0 l\u2019instant");z.next=20-aa%20;}else{z.text=k._("il y a quelques secondes");z.next=o-aa%o;}return z;}if(ca<1){if(y){z.text=k._({"*":"{number} m"},[k.param('number',ba,[0])]);}else if(x&&ba==1){z.text=k._("1 min");}else if(x){z.text=k._({"*":"{number} min"},[k.param('number',ba,[0])]);}else z.text=ba==1?k._("il y a environ une minute"):k._({"*":"il y a {number} minutes"},[k.param('number',ba,[0])]);z.next=o-aa%o;return z;}if(ca<11)z.next=p-aa%p;if(y){z.text=k._({"*":"{number}h"},[k.param('number',ca,[0])]);}else if(x&&ca==1){z.text=k._("1 h");}else if(x){z.text=k._({"*":"{number} h"},[k.param('number',ca,[0])]);}else z.text=ca==1?k._("il y a environ une heure"):k._({"*":"il y a {number} heures"},[k.param('number',ca,[0])]);return z;},renderRelativeTimeToServer:function(v,w,x){return this.renderRelativeTime(Math.floor(j.get()/n),v,w,x);}};f.exports=u;f.exports.CONSTS={MS_IN_SEC:n,SEC_IN_MIN:o,SEC_IN_HOUR:p,SEC_IN_12_HOUR:q,SEC_IN_24_HOUR:r,MIN_IN_HOUR:s,HEARTBEAT:t};},null);
__d('AsyncFormRequestUtils',['Arbiter'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i={subscribe:function(j,k,l){h.subscribe('AsyncRequest/'+k,function(m,n){var o=n.request.relativeTo;if(o&&o===j)l(n);});}};f.exports=i;},null);
__d('PluginTabLoadMore',['CSS','Event'],function a(b,c,d,e,f,g,h,i){'use strict';if(c.__markCompiled)c.__markCompiled();var j={noMoreContent:function(){i.fire(this.root,'noMoreContent');h.hide(this.spinner);},setCursor:function(k){i.fire(this.root,'setCursor',k);},init:function(k,l){this.root=k;this.spinner=l;}};f.exports=j;},null);
__d('PluginFeedFooterActionLogger',['BanzaiLogger','DOM','Event','EmbeddedPostPluginActions','EmbeddedPostPluginActionTypes'],function a(b,c,d,e,f,g,h,i,j,k,l){if(c.__markCompiled)c.__markCompiled();var m={initializeClickLoggers:function(n,o,p,q,r,s,t,u,v){var w=function(x,y){try{var aa=i.find(n,'.'+x);j.listen(aa,'click',function(ba){h.log('PostPluginActionsLoggerConfig',{embedded_post_action:y,embedded_post_action_type:l.CLICK,embedded_post_source:s,story_token:t,referer_url:u,is_sdk:v});});}catch(z){}};w(o,k.EMBEDDED_POSTS_LIKE);w(p,k.EMBEDDED_POSTS_UNLIKE);w(q,k.EMBEDDED_POSTS_COMMENT);w(r,k.EMBEDDED_POSTS_SHARE);}};f.exports=m;},null);
__d('PluginFeedLikeButton',['Arbiter','AsyncFormRequestUtils','ClientIDs','CSS','DOM','DOMEventListener','FBFeedLocations','FormSubmit','Keys','PluginOptin','URI'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){if(c.__markCompiled)c.__markCompiled();window.resetConfirmStoryLike=function(t){k.show(l.find(document,'#likeStory_'+t));l.remove(l.find(document,'#confirmStory_'+t));};var s={addClientId:function(t){t.setAttribute('value',j.getNewClientID());},loggedOutLikeButton:function(t,u,v){var w='';if(u===n.EMBED){w='post';}else if(u===n.PAGE_PLUGIN){w='page';}else throw new Error('Invalid FBFeedLocation type.');var x=new q(w).addReturnParams({act:'like_'+t});m.add(v,'click',x.start.bind(x));},init:function(t,u,v,w,x){var y=function(ba){if(ba.type==='keypress')if(ba.keyCode===p.RETURN||ba.keyCode===p.SPACE){o.send(x);}else return;o.send(x);};m.add(u,'click',y);m.add(v,'click',y);m.add(u,'keypress',y);m.add(v,'keypress',y);var z=w.getAttribute('value')==='1';i.subscribe(x,'send',function(ba){z=w.getAttribute('value')==='1';if(z){k.hide(u);k.show(v);}else{k.hide(v);k.show(u);}h.inform('embeddedUfiToggle');w.setAttribute('value',z?'':'1');});var aa=new r(window.location.search).getQueryData();if(z&&aa.act==='like_'+t)o.send(x);}};f.exports=s;},null);
__d('FbFeedAccessible',['AccessibilityConfig','Arbiter','ARIA','Bootloader','BootloadedComponent.react','CSS','DOMQuery','JSResource','React','ReactDOM','cx','csx','fbt','ge','getOrCreateDOMID','invariant'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w){if(c.__markCompiled)c.__markCompiled();var x='Accessibility/StoriesRequested',y='Accessibility/StoriesLoaded',z='Accessibility/StoryContentInserted',aa='Accessibility/SubstreamInserted',ba=undefined,ca=undefined,da={init:function(ea){ba=ea;if(h.a11yNewsfeedStoryEnumeration)k.loadModules(["LitestandMessages","SubscriptionsHandler"],(function(fa,ga){var ha=new ga();ha.addSubscriptions(i.subscribe(fa.STORIES_REQUESTED,this._onStoriesRequested.bind(this)),i.subscribe(fa.STORIES_INSERTED,this._onInsertedSubstream.bind(this)),i.subscribe(fa.NEWER_STORIES_INSERTED,this._onInsertedSubstream.bind(this)),i.subscribe(y,this._processStoriesLoaded.bind(this)),i.subscribe(x,this._processStoriesRequested.bind(this)),i.subscribe(z,this._processStoryContentInserted.bind(this)),i.subscribe(aa,this._processInsertedSubstream.bind(this)));this._enumerateStories();}).bind(this));},informStoryContentInserted:function(ea){i.inform(z,ea);this.setAriaLabelledBy(ea);},setAriaLabelledBy:function(ea){var fa=u(ea),ga;if(fa&&this._isStory(fa)){if(fa.getAttribute('aria-labelledby'))return;ga=this._filterForElement(fa,["._4gns","._5pbw",".timestampContent",".uiStreamSponsoredLink","._5pbx"]);if(ga.length>0)fa.setAttribute('aria-labelledby',ga.map(function(ha){return v(ha);}).join(' '));}},_getStories:function(ea){return n.scry(ea||ba,"._5jmm");},_onInsertedSubstream:function(ea,fa){if(fa&&fa.substream_id)i.inform(aa,fa.substream_id);},_onStoriesRequested:function(){i.inform(x);},_setEnumerationText:function(ea,fa,ga){var ha=p.createElement(l,{bootloadLoader:o('FbFeedPager.react'),bootloadPlaceholder:p.createElement('div',null),position:fa,total:ga,'aria-hidden':'true'});q.render(ha,ea);},_enumerateStories:function(){var ea=this._getStories(ba);ca=ea.length;ea.forEach((function(fa,ga){this._enumerateStory(fa,ga+=1);}).bind(this));},_enumerateSubstream:function(ea){var fa=this._getStories();ca=fa.length;var ga=this._getStories(u(ea)),ha=ga.length||0;for(var ia=0;ia<ha;ia++)this._registerStoryEnumerationPosition(ga[ia],ca-ha+(ia+1),ia+1);},_enumerateStory:function(ea,fa){!this._isStory(ea)?w(0):undefined;if(fa>0){var ga=n.scry(ea,"._4gns");if(ga&&ga[0])this._setEnumerationText(ga[0],fa,ca);}},_processStoriesLoaded:function(){j.notify(t._("More stories loaded."));},_processStoriesRequested:function(){j.notify(t._("More stories requested."));},_processInsertedSubstream:function(ea,fa){this._enumerateSubstream(fa);this._enumerateStories();},_processStoryContentInserted:function(ea,fa){var ga=undefined,ha=u(fa);if(ha)ga=JSON.parse(ha.getAttribute('data-ft'));if(ga&&ga.ordinal_position){var ia=ga.ordinal_position.split(':'),ja=ia[0],ka=ia[1];ja=parseInt(ja,10);ka=parseInt(ka,10);this._enumerateStory(ha,ja);if(ka===1)i.inform(y);}},_registerStoryEnumerationPosition:function(ea,fa,ga){var ha=JSON.parse(ea.getAttribute('data-ft'));if(ha){ha.ordinal_position=fa+':'+ga;ea.setAttribute('data-ft',JSON.stringify(ha));}},_isStory:function(ea){return m.hasClass(ea,"_5jmm");},_filterForElement:function(ea,fa){return fa.map(function(ga){return n.scry(ea||document,ga)[0];}).filter(function(ga){return !!ga;});}};f.exports=da;},null);