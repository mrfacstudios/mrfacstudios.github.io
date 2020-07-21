var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

;// bundle: clientinstaller___314f308d3ee5c45cda5a32683651a4a8_m
;// files: EventTracker.js, ClientInstaller.js, InstallationInstructions.js, IEMetroInstructions.js

;// EventTracker.js
EventTracker=new function(){var n=this;n.logMetrics=!1,n.transmitMetrics=!0;var i=new function(){var n={};this.get=function(t){return n[t]},this.set=function(t,i){n[t]=i},this.remove=function(t){delete n[t]}},r=function(){return(new Date).valueOf()},t=function(n,t){var i=r();$.each(n,function(n,r){u(r,t,i)})},u=function(t,r,u){var e=i.get(t),f;e?(i.remove(t),f=u-e,n.logMetrics&&console.log("[event]",t,r,f),n.transmitMetrics&&$.ajax({type:"GET",async:!0,cache:!1,timeout:5e4,url:"/Game/JoinRate.ashx?c="+t+"&r="+r+"&d="+f,success:function(){}})):n.logMetrics&&console.log("[event]","ERROR: event not started -",t,r)};n.start=function(){var n=r();$.each(arguments,function(t,r){i.set(r,n)})},n.endSuccess=function(){t(arguments,"Success")},n.endCancel=function(){t(arguments,"Cancel")},n.endFailure=function(){t(arguments,"Failure")}};

;// ClientInstaller.js
Type.registerNamespace("Roblox.Client"),Roblox.Client._installHost=null,Roblox.Client._installSuccess=null,Roblox.Client._CLSID=null,Roblox.Client._continuation=null,Roblox.Client._skip=null,Roblox.Client._isIDE=null,Roblox.Client._isRobloxBrowser=null,Roblox.Client._isPlaceLaunch=!1,Roblox.Client._silentModeEnabled=!1,Roblox.Client._bringAppToFrontEnabled=!1,Roblox.Client._numLocks=0,Roblox.Client._logTiming=!1,Roblox.Client._logStartTime=null,Roblox.Client._logEndTime=null,Roblox.Client._hiddenModeEnabled=!1,Roblox.Client._runInstallABTest=function(){},Roblox.Client.ReleaseLauncher=function(n,t,i){if(t&&Roblox.Client._numLocks--,(i||Roblox.Client._numLocks<=0)&&(n!=null&&(document.getElementById("pluginObjDiv").innerHTML="",n=null),Roblox.Client._numLocks=0),Roblox.Client._logTiming){Roblox.Client._logEndTime=new Date;var r=Roblox.Client._logEndTime.getTime()-Roblox.Client._logStartTime.getTime();console&&console.log&&console.log("Roblox.Client: "+r+"ms from Create to Release.")}},Roblox.Client.GetInstallHost=function(n){if(Roblox.Client.IsIE())return n.InstallHost;var t=n.Get_InstallHost();return t.match(/roblox.com$/)?t:t.substring(0,t.length-1)},Roblox.Client.IsIE=function(){try{return!!new ActiveXObject("htmlfile")}catch(n){return!1}},Roblox.Client.CreateLauncher=function(n){var t,u,i,r;Roblox.Client._logTiming&&(Roblox.Client._logStartTime=new Date),n&&Roblox.Client._numLocks++,(Roblox.Client._installHost==null||Roblox.Client._CLSID==null)&&typeof initClientProps=="function"&&initClientProps(),t=document.getElementById("robloxpluginobj"),u=$("#pluginObjDiv"),t||(Roblox.Client._hiddenModeEnabled=!1,Roblox.Client.IsIE()?(i='<object classid="clsid:'+Roblox.Client._CLSID+'"',i+=' id="robloxpluginobj" type="application/x-vnd-roblox-launcher"',i+=' codebase="'+Roblox.Client._installHost+'">Failed to INIT Plugin</object>',$(u).append(i)):(i='<object id="robloxpluginobj" type="application/x-vnd-roblox-launcher"></object>',$(u).append(i)),t=document.getElementById("robloxpluginobj"));try{if(t||(typeof console.log=="undefined"?alert("Plugin installation failed!"):console.log("Plugin installation failed!")),t.Hello(),r=Roblox.Client.GetInstallHost(t),!r||r!=Roblox.Client._installHost)throw"wrong InstallHost: (plugins):  "+r+"  (servers):  "+Roblox.Client._installHost;return t}catch(f){return Roblox.Client.ReleaseLauncher(t,n,!1),null}},Roblox.Client.isIDE=function(){if(Roblox.Client._isIDE==null&&(Roblox.Client._isIDE=!1,Roblox.Client._isRobloxBrowser=!1,window.external))try{window.external.IsRobloxAppIDE!==undefined&&(Roblox.Client._isIDE=window.external.IsRobloxAppIDE,Roblox.Client._isRobloxBrowser=!0)}catch(n){}return Roblox.Client._isIDE},Roblox.Client.isRobloxBrowser=function(){return Roblox.Client.isIDE(),Roblox.Client._isRobloxBrowser},Roblox.Client.robloxBrowserInstallHost=function(){if(window.external)try{return window.external.InstallHost}catch(n){}return""},Roblox.Client.IsRobloxProxyInstalled=function(){var t=Roblox.Client.CreateLauncher(!1),n=!1;return(t!=null&&(n=!0),Roblox.Client.ReleaseLauncher(t,!1,!1),n||Roblox.Client.isRobloxBrowser())?!0:!1},Roblox.Client.IsRobloxInstalled=function(){try{var t=Roblox.Client.CreateLauncher(!1),n=Roblox.Client.GetInstallHost(t);return Roblox.Client.ReleaseLauncher(t,!1,!1),n==Roblox.Client._installHost}catch(i){return Roblox.Client.isRobloxBrowser()?(n=Roblox.Client.robloxBrowserInstallHost(),n==Roblox.Client._installHost):!1}},Roblox.Client.SetStartInHiddenMode=function(n){try{var t=Roblox.Client.CreateLauncher(!1);if(t!==null)return t.SetStartInHiddenMode(n),Roblox.Client._hiddenModeEnabled=n,!0}catch(i){}return!1},Roblox.Client.UnhideApp=function(){try{if(Roblox.Client._hiddenModeEnabled){var n=Roblox.Client.CreateLauncher(!1);n.UnhideApp()}}catch(t){}},Roblox.Client.Update=function(){EventTracker.start("UpdateClient");try{var n=Roblox.Client.CreateLauncher(!1);n.Update(),Roblox.Client.ReleaseLauncher(n,!1,!1)}catch(t){EventTracker.endFailure("UpdateClient"),alert("Error updating: "+t)}},Roblox.Client.WaitForRoblox=function(n){var t,i;return Roblox.Client._skip?(window.location=Roblox.Client._skip,!1):(Roblox.Client._continuation=n,Roblox.Client._cancelled=!1,!Roblox.Client.IsRobloxProxyInstalled()&&Roblox.Client.ImplementsProxy?(EventTracker.start("InstallClient"),Roblox.InstallationInstructions.show(),Roblox.Client._runInstallABTest(),t="Windows",navigator.appVersion.indexOf("Mac")!=-1&&(t="Mac"),GoogleAnalyticsEvents&&GoogleAnalyticsEvents.FireEvent(["Install Begin",t]),RobloxEventManager.triggerEvent("rbx_evt_install_begin",{os:t}),window.chrome&&(window.location.hash="#chromeInstall",$.cookie("chromeInstall",n.toString().replace(/play_placeId/,play_placeId.toString()))),window.setTimeout(function(){Roblox.Client._ontimer()},1e3),i=document.getElementById("downloadInstallerIFrame"),i.src="/install/setup.ashx",!0):(Roblox.Client._continuation(),!1))},Roblox.Client.ResumeTimer=function(n){Roblox.Client._continuation=n,Roblox.Client._cancelled=!1,window.setTimeout(function(){Roblox.Client._ontimer()},0)},Roblox.Client.Refresh=function(){try{navigator.plugins.refresh(!1)}catch(n){}},Roblox.Client._onCancel=function(){return Roblox.InstallationInstructions.hide(),Roblox.Client._cancelled=!0,EventTracker.endCancel("InstallClient"),!1},Roblox.Client._ontimer=function(){Roblox.Client._cancelled||(Roblox.Client.Refresh(),Roblox.Client.IsRobloxProxyInstalled()?(Roblox.InstallationInstructions.hide(),window.setTimeout(function(){window.chrome&&window.location.hash=="#chromeInstall"&&(window.location.hash="",$.cookie("chromeInstall",null))},5e3),EventTracker.endSuccess("InstallClient"),Roblox.Client._continuation(),Roblox.Client._installSuccess&&Roblox.Client._installSuccess()):window.setTimeout(function(){Roblox.Client._ontimer()},1e3))};

;// InstallationInstructions.js
typeof Roblox=="undefined"&&(Roblox={}),Roblox.InstallationInstructions=function(){function i(){var t,i,r;n(),t=0,i=$(".InstallInstructionsImage"),i&&typeof $(i).attr("modalwidth")!="undefined"&&(t=$(".InstallInstructionsImage").attr("modalwidth")),t>0?(r=($(window).width()-(t-10))/2,$("#InstallationInstructions").modal({escClose:!0,opacity:50,minWidth:t,maxWidth:t,overlayCss:{backgroundColor:"#000"},position:[20,r]})):$("#InstallationInstructions").modal({escClose:!0,opacity:50,maxWidth:$(window).width()/2,minWidth:$(window).width()/2,overlayCss:{backgroundColor:"#000"},position:[20,"25%"]})}function r(){$.modal.close()}function n(){var n=$(".InstallInstructionsImage");navigator.userAgent.match(/Mac OS X 10[_|\.]5/)?n&&typeof $(n).attr("oldmacdelaysrc")!="undefined"&&$(".InstallInstructionsImage").attr("src",$(".InstallInstructionsImage").attr("oldmacdelaysrc")):n&&typeof $(n).attr("delaysrc")!="undefined"&&$(".InstallInstructionsImage").attr("src",$(".InstallInstructionsImage").attr("delaysrc"))}return{show:i,hide:r}}();

;// IEMetroInstructions.js
(function(){function u(){return navigator.userAgent.indexOf("MSIE 10.0")!=-1}function r(){try{return!!new ActiveXObject("htmlfile")}catch(n){return!1}}var i=Roblox.Client.WaitForRoblox;Roblox.Client.WaitForRoblox=function(n){return u()&&!r()?($("#IEMetroInstructions").modal({overlayClose:!0,escClose:!0,opacity:80,overlayCss:{backgroundColor:"#000"}}),!1):i(n)}})(window);


}
/*
     FILE ARCHIVED ON 14:40:14 May 09, 2014 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 18:02:10 Jun 30, 2020.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  esindex: 0.021
  RedisCDXSource: 4.285
  PetaboxLoader3.resolve: 157.686 (2)
  PetaboxLoader3.datanode: 146.169 (5)
  captures_list: 200.638
  CDXLines.iter: 17.862 (3)
  exclusion.robots: 0.36
  LoadShardBlock: 170.526 (3)
  exclusion.robots.policy: 0.34
  load_resource: 233.1
*/