"use strict";
(function(root, factory) {
  if(typeof exports === 'object') {
    module.exports = factory();
  }
  else if(typeof define === 'function' && define.amd) {
    define(['jquery', 'googlemaps!'], factory);
  }
  else {
    root.GMaps = factory();
  }


}(this, function() {
"use strict";(function(a,b){if(typeof exports==="object"){module.exports=b()}else{if(typeof define==="function"&&define.amd){define(["jquery","googlemaps!"],b)}else{a.GMaps=b()}}}(this,function(){
/*!
 * GMaps.js v0.4.25
 * http://hpneo.github.com/gmaps/
 *
 * Copyright 2017, Gustavo Leon
 * Released under the MIT License.
 */
;var h=function(o,p){var n;if(o===p){return o}for(n in p){if(p[n]!==undefined){o[n]=p[n]}}return o};var d=function(p,o){var n;if(p===o){return p}for(n in o){if(p[n]!=undefined){p[n]=o[n]}}return p};var l=function(s,r){var o=Array.prototype.slice.call(arguments,2),q=[],n=s.length,p;if(Array.prototype.map&&s.map===Array.prototype.map){q=Array.prototype.map.call(s,function(u){var t=o.slice(0);t.splice(0,0,u);return r.apply(this,t)})}else{for(p=0;p<n;p++){callback_params=o;callback_params.splice(0,0,s[p]);q.push(r.apply(this,callback_params))}}return q};var f=function(p){var o=[],n;for(n=0;n<p.length;n++){o=o.concat(p[n])}return o};var m=function(o,p){var q=o[0],n=o[1];if(p){q=o[1];n=o[0]}return new google.maps.LatLng(q,n)};var i=function(o,p){var n;for(n=0;n<o.length;n++){if(!(o[n] instanceof google.maps.LatLng)){if(o[n].length>0&&typeof(o[n][0])==="object"){o[n]=i(o[n],p)}else{o[n]=m(o[n],p)}}}return o};var k=function(q,p){var o,n=q.replace(".","");if("jQuery" in this&&p){o=$("."+n,p)[0]}else{o=document.getElementsByClassName(n)[0]}return o};var a=function(p,o){var n,p=p.replace("#","");if("jQuery" in window&&o){n=$("#"+p,o)[0]}else{n=document.getElementById(p)}return n};var g=function(p){var s=0,o=0;if(p.getBoundingClientRect){var n=p.getBoundingClientRect();var r=-(window.scrollX?window.scrollX:window.pageXOffset);var q=-(window.scrollY?window.scrollY:window.pageYOffset);return[(n.left-r),(n.top-q)]}if(p.offsetParent){do{s+=p.offsetLeft;o+=p.offsetTop}while(p=p.offsetParent)}return[s,o]};var j=(function(o){var p=document;var n=function(w){if(!(typeof window.google==="object"&&window.google.maps)){if(typeof window.console==="object"&&window.console.error){console.error("Google Maps API is required. Please register the following JavaScript library https://maps.googleapis.com/maps/api/js.")}return function(){}}if(!this){return new n(w)}w.zoom=w.zoom||15;w.mapType=w.mapType||"roadmap";var J=function(U,T){return U===undefined?T:U};var M=this,O,y=["bounds_changed","center_changed","click","dblclick","drag","dragend","dragstart","idle","maptypeid_changed","projection_changed","resize","tilesloaded","zoom_changed"],C=["mousemove","mouseout","mouseover"],E=["el","lat","lng","mapType","width","height","markerClusterer","enableNewStyle"],u=w.el||w.div,A=w.markerClusterer,P=google.maps.MapTypeId[w.mapType.toUpperCase()],K=new google.maps.LatLng(w.lat,w.lng),S=J(w.zoomControl,true),r=w.zoomControlOpt||{style:"DEFAULT",position:"TOP_LEFT"},N=r.style||"DEFAULT",s=r.position||"TOP_LEFT",F=J(w.panControl,true),z=J(w.mapTypeControl,true),D=J(w.scaleControl,true),B=J(w.streetViewControl,true),x=J(x,true),L={},H={zoom:this.zoom,center:K,mapTypeId:P},q={panControl:F,zoomControl:S,zoomControlOptions:{style:google.maps.ZoomControlStyle[N],position:google.maps.ControlPosition[s]},mapTypeControl:z,scaleControl:D,streetViewControl:B,overviewMapControl:x};if(typeof(w.el)==="string"||typeof(w.div)==="string"){if(u.indexOf("#")>-1){this.el=a(u,w.context)}else{this.el=k.apply(this,[u,w.context])}}else{this.el=u}if(typeof(this.el)==="undefined"||this.el===null){throw"No element defined."}window.context_menu=window.context_menu||{};window.context_menu[M.el.id]={};this.controls=[];this.overlays=[];this.layers=[];this.singleLayers={};this.markers=[];this.polylines=[];this.routes=[];this.polygons=[];this.infoWindow=null;this.overlay_el=null;this.zoom=w.zoom;this.registered_events={};this.el.style.width=w.width||this.el.scrollWidth||this.el.offsetWidth;this.el.style.height=w.height||this.el.scrollHeight||this.el.offsetHeight;google.maps.visualRefresh=w.enableNewStyle;for(O=0;O<E.length;O++){delete w[E[O]]}if(w.disableDefaultUI!=true){H=h(H,q)}L=h(H,w);for(O=0;O<y.length;O++){delete L[y[O]]}for(O=0;O<C.length;O++){delete L[C[O]]}this.map=new google.maps.Map(this.el,L);if(A){this.markerClusterer=A.apply(this,[this.map])}var G=function(X,ac){var ab="",ag=window.context_menu[M.el.id][X];for(var Y in ag){if(ag.hasOwnProperty(Y)){var aa=ag[Y];ab+='<li><a id="'+X+"_"+Y+'" href="#">'+aa.title+"</a></li>"}}if(!a("gmaps_context_menu")){return}var ad=a("gmaps_context_menu");ad.innerHTML=ab;var T=ad.getElementsByTagName("a"),af=T.length,Y;for(Y=0;Y<af;Y++){var V=T[Y];var W=function(ah){ah.preventDefault();ag[this.id.replace(X+"_","")].action.apply(M,[ac]);M.hideContextMenu()};google.maps.event.clearListeners(V,"click");google.maps.event.addDomListenerOnce(V,"click",W,false)}var Z=g.apply(this,[M.el]),U=Z[0]+ac.pixel.x-15,ae=Z[1]+ac.pixel.y-15;ad.style.left=U+"px";ad.style.top=ae+"px"};this.buildContextMenu=function(V,U){if(V==="marker"){U.pixel={};var T=new google.maps.OverlayView();T.setMap(M.map);T.draw=function(){var Y=T.getProjection(),X=U.marker.getPosition();U.pixel=Y.fromLatLngToContainerPixel(X);G(V,U)}}else{G(V,U)}var W=a("gmaps_context_menu");setTimeout(function(){W.style.display="block"},0)};this.setContextMenu=function(T){window.context_menu[M.el.id][T.control]={};var V,U=p.createElement("ul");for(V in T.options){if(T.options.hasOwnProperty(V)){var W=T.options[V];window.context_menu[M.el.id][T.control][W.name]={title:W.title,action:W.action}}}U.id="gmaps_context_menu";U.style.display="none";U.style.position="absolute";U.style.minWidth="100px";U.style.background="white";U.style.listStyle="none";U.style.padding="8px";U.style.boxShadow="2px 2px 6px #ccc";if(!a("gmaps_context_menu")){p.body.appendChild(U)}var X=a("gmaps_context_menu");google.maps.event.addDomListener(X,"mouseout",function(Y){if(!Y.relatedTarget||!this.contains(Y.relatedTarget)){window.setTimeout(function(){X.style.display="none"},400)}},false)};this.hideContextMenu=function(){var T=a("gmaps_context_menu");if(T){T.style.display="none"}};var I=function(U,T){google.maps.event.addListener(U,T,function(V){if(V==undefined){V=this}w[T].apply(this,[V]);M.hideContextMenu()})};google.maps.event.addListener(this.map,"zoom_changed",this.hideContextMenu);for(var Q=0;Q<y.length;Q++){var R=y[Q];if(R in w){I(this.map,R)}}for(var Q=0;Q<C.length;Q++){var R=C[Q];if(R in w){I(this.map,R)}}google.maps.event.addListener(this.map,"rightclick",function(T){if(w.rightclick){w.rightclick.apply(this,[T])}if(window.context_menu[M.el.id]["map"]!=undefined){M.buildContextMenu("map",T)}});this.refresh=function(){google.maps.event.trigger(this.map,"resize")};this.fitZoom=function(){var V=[],T=this.markers.length,U;for(U=0;U<T;U++){if(typeof(this.markers[U].visible)==="boolean"&&this.markers[U].visible){V.push(this.markers[U].getPosition())}}this.fitLatLngBounds(V)};this.fitLatLngBounds=function(W){var V=W.length,U=new google.maps.LatLngBounds(),T;for(T=0;T<V;T++){U.extend(W[T])}this.map.fitBounds(U)};this.setCenter=function(U,T,V){this.map.panTo(new google.maps.LatLng(U,T));if(V){V()}};this.getElement=function(){return this.el};this.zoomIn=function(T){T=T||1;this.zoom=this.map.getZoom()+T;this.map.setZoom(this.zoom)};this.zoomOut=function(T){T=T||1;this.zoom=this.map.getZoom()-T;this.map.setZoom(this.zoom)};var v=[],t;for(t in this.map){if(typeof(this.map[t])=="function"&&!this[t]){v.push(t)}}for(O=0;O<v.length;O++){(function(T,V,U){T[U]=function(){return V[U].apply(V,arguments)}})(this,this.map,v[O])}};return n})(this);j.prototype.createControl=function(n){var q=document.createElement("div");q.style.cursor="pointer";if(n.disableDefaultStyles!==true){q.style.fontFamily="Roboto, Arial, sans-serif";q.style.fontSize="11px";q.style.boxShadow="rgba(0, 0, 0, 0.298039) 0px 1px 4px -1px"}for(var o in n.style){q.style[o]=n.style[o]}if(n.id){q.id=n.id}if(n.title){q.title=n.title}if(n.classes){q.className=n.classes}if(n.content){if(typeof n.content==="string"){q.innerHTML=n.content}else{if(n.content instanceof HTMLElement){q.appendChild(n.content)}}}if(n.position){q.position=google.maps.ControlPosition[n.position.toUpperCase()]}for(var p in n.events){(function(s,r){google.maps.event.addDomListener(s,r,function(){n.events[r].apply(this,[this])})})(q,p)}q.index=1;return q};j.prototype.addControl=function(n){var o=this.createControl(n);this.controls.push(o);this.map.controls[o.position].push(o);return o};j.prototype.removeControl=function(q){var n=null,p;for(p=0;p<this.controls.length;p++){if(this.controls[p]==q){n=this.controls[p].position;this.controls.splice(p,1)}}if(n){for(p=0;p<this.map.controls.length;p++){var o=this.map.controls[q.position];if(o.getAt(p)==q){o.removeAt(p);break}}}return q};j.prototype.createMarker=function(y){if(y.lat==undefined&&y.lng==undefined&&y.position==undefined){throw"No latitude or longitude defined."}var x=this,o=y.details,s=y.fences,u=y.outside,r={position:new google.maps.LatLng(y.lat,y.lng),map:null},p=h(r,y);delete p.lat;delete p.lng;delete p.fences;delete p.outside;var t=new google.maps.Marker(p);t.fences=s;if(y.infoWindow){t.infoWindow=new google.maps.InfoWindow(y.infoWindow);var n=["closeclick","content_changed","domready","position_changed","zindex_changed"];for(var v=0;v<n.length;v++){(function(A,z){if(y.infoWindow[z]){google.maps.event.addListener(A,z,function(B){y.infoWindow[z].apply(this,[B])})}})(t.infoWindow,n[v])}}var w=["animation_changed","clickable_changed","cursor_changed","draggable_changed","flat_changed","icon_changed","position_changed","shadow_changed","shape_changed","title_changed","visible_changed","zindex_changed"];var q=["dblclick","drag","dragend","dragstart","mousedown","mouseout","mouseover","mouseup"];for(var v=0;v<w.length;v++){(function(A,z){if(y[z]){google.maps.event.addListener(A,z,function(){y[z].apply(this,[this])})}})(t,w[v])}for(var v=0;v<q.length;v++){(function(B,A,z){if(y[z]){google.maps.event.addListener(A,z,function(C){if(!C.pixel){C.pixel=B.getProjection().fromLatLngToPoint(C.latLng)}y[z].apply(this,[C])})}})(this.map,t,q[v])}google.maps.event.addListener(t,"click",function(){this.details=o;if(y.click){y.click.apply(this,[this])}if(t.infoWindow){x.hideInfoWindows();t.infoWindow.open(x.map,t)}});google.maps.event.addListener(t,"rightclick",function(z){z.marker=this;if(y.rightclick){y.rightclick.apply(this,[z])}if(window.context_menu[x.el.id]["marker"]!=undefined){x.buildContextMenu("marker",z)}});if(t.fences){google.maps.event.addListener(t,"dragend",function(){x.checkMarkerGeofence(t,function(z,A){u(z,A)})})}return t};j.prototype.addMarker=function(o){var n;if(o.hasOwnProperty("gm_accessors_")){n=o}else{if((o.hasOwnProperty("lat")&&o.hasOwnProperty("lng"))||o.position){n=this.createMarker(o)}else{throw"No latitude or longitude defined."}}n.setMap(this.map);if(this.markerClusterer){this.markerClusterer.addMarker(n)}this.markers.push(n);j.fire("marker_added",n,this);return n};j.prototype.addMarkers=function(p){for(var o=0,n;n=p[o];o++){this.addMarker(n)}return this.markers};j.prototype.hideInfoWindows=function(){for(var o=0,n;n=this.markers[o];o++){if(n.infoWindow){n.infoWindow.close()}}};j.prototype.removeMarker=function(n){for(var o=0;o<this.markers.length;o++){if(this.markers[o]===n){this.markers[o].setMap(null);this.markers.splice(o,1);if(this.markerClusterer){this.markerClusterer.removeMarker(n)}j.fire("marker_removed",n,this);break}}return n};j.prototype.removeMarkers=function(r){var n=[];if(typeof r=="undefined"){for(var q=0;q<this.markers.length;q++){var o=this.markers[q];o.setMap(null);j.fire("marker_removed",o,this)}if(this.markerClusterer&&this.markerClusterer.clearMarkers){this.markerClusterer.clearMarkers()}this.markers=n}else{for(var q=0;q<r.length;q++){var p=this.markers.indexOf(r[q]);if(p>-1){var o=this.markers[p];o.setMap(null);if(this.markerClusterer){this.markerClusterer.removeMarker(o)}j.fire("marker_removed",o,this)}}for(var q=0;q<this.markers.length;q++){var o=this.markers[q];if(o.getMap()!=null){n.push(o)}}this.markers=n}};j.prototype.drawOverlay=function(o){var n=new google.maps.OverlayView(),p=true;n.setMap(this.map);if(o.auto_show!=null){p=o.auto_show}n.onAdd=function(){var t=document.createElement("div");t.style.borderStyle="none";t.style.borderWidth="0px";t.style.position="absolute";t.style.zIndex=100;t.innerHTML=o.content;n.el=t;if(!o.layer){o.layer="overlayLayer"}var s=this.getPanes(),q=s[o.layer],r=["contextmenu","DOMMouseScroll","dblclick","mousedown"];q.appendChild(t);for(var u=0;u<r.length;u++){(function(w,v){google.maps.event.addDomListener(w,v,function(x){if(navigator.userAgent.toLowerCase().indexOf("msie")!=-1&&document.all){x.cancelBubble=true;x.returnValue=false}else{x.stopPropagation()}})})(t,r[u])}if(o.click){s.overlayMouseTarget.appendChild(n.el);google.maps.event.addDomListener(n.el,"click",function(){o.click.apply(n,[n])})}google.maps.event.trigger(this,"ready")};n.draw=function(){var q=this.getProjection(),s=q.fromLatLngToDivPixel(new google.maps.LatLng(o.lat,o.lng));o.horizontalOffset=o.horizontalOffset||0;o.verticalOffset=o.verticalOffset||0;var t=n.el,u=t.children[0],r=u.clientHeight,v=u.clientWidth;switch(o.verticalAlign){case"top":t.style.top=(s.y-r+o.verticalOffset)+"px";break;default:case"middle":t.style.top=(s.y-(r/2)+o.verticalOffset)+"px";break;case"bottom":t.style.top=(s.y+o.verticalOffset)+"px";break}switch(o.horizontalAlign){case"left":t.style.left=(s.x-v+o.horizontalOffset)+"px";break;default:case"center":t.style.left=(s.x-(v/2)+o.horizontalOffset)+"px";break;case"right":t.style.left=(s.x+o.horizontalOffset)+"px";break}t.style.display=p?"block":"none";if(!p){o.show.apply(this,[t])}};n.onRemove=function(){var q=n.el;if(o.remove){o.remove.apply(this,[q])}else{n.el.parentNode.removeChild(n.el);n.el=null}};this.overlays.push(n);return n};j.prototype.removeOverlay=function(n){for(var o=0;o<this.overlays.length;o++){if(this.overlays[o]===n){this.overlays[o].setMap(null);this.overlays.splice(o,1);break}}};j.prototype.removeOverlays=function(){for(var n=0,o;o=this.overlays[n];n++){o.setMap(null)}this.overlays=[]};j.prototype.drawPolyline=function(v){var u=[],s=v.path;if(s.length){if(s[0][0]===undefined){u=s}else{for(var o=0,n;n=s[o];o++){u.push(new google.maps.LatLng(n[0],n[1]))}}}var p={map:this.map,path:u,strokeColor:v.strokeColor,strokeOpacity:v.strokeOpacity,strokeWeight:v.strokeWeight,geodesic:v.geodesic,clickable:true,editable:false,visible:true};if(v.hasOwnProperty("clickable")){p.clickable=v.clickable}if(v.hasOwnProperty("editable")){p.editable=v.editable}if(v.hasOwnProperty("icons")){p.icons=v.icons}if(v.hasOwnProperty("zIndex")){p.zIndex=v.zIndex}var r=new google.maps.Polyline(p);var t=["click","dblclick","mousedown","mousemove","mouseout","mouseover","mouseup","rightclick"];for(var q=0;q<t.length;q++){(function(x,w){if(v[w]){google.maps.event.addListener(x,w,function(y){v[w].apply(this,[y])})}})(r,t[q])}this.polylines.push(r);j.fire("polyline_added",r,this);return r};j.prototype.removePolyline=function(n){for(var o=0;o<this.polylines.length;o++){if(this.polylines[o]===n){this.polylines[o].setMap(null);this.polylines.splice(o,1);j.fire("polyline_removed",n,this);break}}};j.prototype.removePolylines=function(){for(var n=0,o;o=this.polylines[n];n++){o.setMap(null)}this.polylines=[]};j.prototype.drawCircle=function(n){n=h({map:this.map,center:new google.maps.LatLng(n.lat,n.lng)},n);delete n.lat;delete n.lng;var o=new google.maps.Circle(n),q=["click","dblclick","mousedown","mousemove","mouseout","mouseover","mouseup","rightclick"];for(var p=0;p<q.length;p++){(function(s,r){if(n[r]){google.maps.event.addListener(s,r,function(t){n[r].apply(this,[t])})}})(o,q[p])}this.polygons.push(o);return o};j.prototype.drawRectangle=function(n){n=h({map:this.map},n);var q=new google.maps.LatLngBounds(new google.maps.LatLng(n.bounds[0][0],n.bounds[0][1]),new google.maps.LatLng(n.bounds[1][0],n.bounds[1][1]));n.bounds=q;var o=new google.maps.Rectangle(n),r=["click","dblclick","mousedown","mousemove","mouseout","mouseover","mouseup","rightclick"];for(var p=0;p<r.length;p++){(function(t,s){if(n[s]){google.maps.event.addListener(t,s,function(u){n[s].apply(this,[u])})}})(o,r[p])}this.polygons.push(o);return o};j.prototype.drawPolygon=function(n){var q=false;if(n.hasOwnProperty("useGeoJSON")){q=n.useGeoJSON}delete n.useGeoJSON;n=h({map:this.map},n);if(q==false){n.paths=[n.paths.slice(0)]}if(n.paths.length>0){if(n.paths[0].length>0){n.paths=f(l(n.paths,i,q))}}var o=new google.maps.Polygon(n),r=["click","dblclick","mousedown","mousemove","mouseout","mouseover","mouseup","rightclick"];for(var p=0;p<r.length;p++){(function(t,s){if(n[s]){google.maps.event.addListener(t,s,function(u){n[s].apply(this,[u])})}})(o,r[p])}this.polygons.push(o);j.fire("polygon_added",o,this);return o};j.prototype.removePolygon=function(o){for(var n=0;n<this.polygons.length;n++){if(this.polygons[n]===o){this.polygons[n].setMap(null);this.polygons.splice(n,1);j.fire("polygon_removed",o,this);break}}};j.prototype.removePolygons=function(){for(var n=0,o;o=this.polygons[n];n++){o.setMap(null)}this.polygons=[]};j.prototype.getFromFusionTables=function(o){var q=o.events;delete o.events;var n=o,p=new google.maps.FusionTablesLayer(n);for(var r in q){(function(t,s){google.maps.event.addListener(t,s,function(u){q[s].apply(this,[u])})})(p,r)}this.layers.push(p);return p};j.prototype.loadFromFusionTables=function(n){var o=this.getFromFusionTables(n);o.setMap(this.map);return o};j.prototype.getFromKML=function(o){var n=o.url,q=o.events;delete o.url;delete o.events;var s=o,p=new google.maps.KmlLayer(n,s);for(var r in q){(function(u,t){google.maps.event.addListener(u,t,function(v){q[t].apply(this,[v])})})(p,r)}this.layers.push(p);return p};j.prototype.loadFromKML=function(n){var o=this.getFromKML(n);o.setMap(this.map);return o};j.prototype.addLayer=function(p,o){o=o||{};var q;switch(p){case"weather":this.singleLayers.weather=q=new google.maps.weather.WeatherLayer();break;case"clouds":this.singleLayers.clouds=q=new google.maps.weather.CloudLayer();break;case"traffic":this.singleLayers.traffic=q=new google.maps.TrafficLayer();break;case"transit":this.singleLayers.transit=q=new google.maps.TransitLayer();break;case"bicycling":this.singleLayers.bicycling=q=new google.maps.BicyclingLayer();break;case"panoramio":this.singleLayers.panoramio=q=new google.maps.panoramio.PanoramioLayer();q.setTag(o.filter);delete o.filter;if(o.click){google.maps.event.addListener(q,"click",function(s){o.click(s);delete o.click})}break;case"places":this.singleLayers.places=q=new google.maps.places.PlacesService(this.map);if(o.search||o.nearbySearch||o.radarSearch){var n={bounds:o.bounds||null,keyword:o.keyword||null,location:o.location||null,name:o.name||null,radius:o.radius||null,rankBy:o.rankBy||null,types:o.types||null};if(o.radarSearch){q.radarSearch(n,o.radarSearch)}if(o.search){q.search(n,o.search)}if(o.nearbySearch){q.nearbySearch(n,o.nearbySearch)}}if(o.textSearch){var r={bounds:o.bounds||null,location:o.location||null,query:o.query||null,radius:o.radius||null};q.textSearch(r,o.textSearch)}break}if(q!==undefined){if(typeof q.setOptions=="function"){q.setOptions(o)}if(typeof q.setMap=="function"){q.setMap(this.map)}return q}};j.prototype.removeLayer=function(o){if(typeof(o)=="string"&&this.singleLayers[o]!==undefined){this.singleLayers[o].setMap(null);delete this.singleLayers[o]}else{for(var n=0;n<this.layers.length;n++){if(this.layers[n]===o){this.layers[n].setMap(null);this.layers.splice(n,1);break}}}};var b,c;j.prototype.getRoutes=function(s){switch(s.travelMode){case"bicycling":b=google.maps.TravelMode.BICYCLING;break;case"transit":b=google.maps.TravelMode.TRANSIT;break;case"driving":b=google.maps.TravelMode.DRIVING;break;default:b=google.maps.TravelMode.WALKING;break}if(s.unitSystem==="imperial"){c=google.maps.UnitSystem.IMPERIAL}else{c=google.maps.UnitSystem.METRIC}var r={avoidHighways:false,avoidTolls:false,optimizeWaypoints:false,waypoints:[]},q=h(r,s);q.origin=/string/.test(typeof s.origin)?s.origin:new google.maps.LatLng(s.origin[0],s.origin[1]);q.destination=/string/.test(typeof s.destination)?s.destination:new google.maps.LatLng(s.destination[0],s.destination[1]);q.travelMode=b;q.unitSystem=c;delete q.callback;delete q.error;var p=this,o=[],n=new google.maps.DirectionsService();n.route(q,function(t,u){if(u===google.maps.DirectionsStatus.OK){for(var v in t.routes){if(t.routes.hasOwnProperty(v)){o.push(t.routes[v])}}if(s.callback){s.callback(o,t,u)}}else{if(s.error){s.error(t,u)}}})};j.prototype.removeRoutes=function(){this.routes.length=0};j.prototype.getElevations=function(o){o=h({locations:[],path:false,samples:256},o);if(o.locations.length>0){if(o.locations[0].length>0){o.locations=f(l([o.locations],i,false))}}var q=o.callback;delete o.callback;var n=new google.maps.ElevationService();if(!o.path){delete o.path;delete o.samples;n.getElevationForLocations(o,function(r,s){if(q&&typeof(q)==="function"){q(r,s)}})}else{var p={path:o.locations,samples:o.samples};n.getElevationAlongPath(p,function(r,s){if(q&&typeof(q)==="function"){q(r,s)}})}};j.prototype.cleanRoute=j.prototype.removePolylines;j.prototype.renderRoute=function(q,p){var o=this,n=((typeof p.panel==="string")?document.getElementById(p.panel.replace("#","")):p.panel),r;p.panel=n;p=h({map:this.map},p);r=new google.maps.DirectionsRenderer(p);this.getRoutes({origin:q.origin,destination:q.destination,travelMode:q.travelMode,waypoints:q.waypoints,unitSystem:q.unitSystem,error:q.error,avoidHighways:q.avoidHighways,avoidTolls:q.avoidTolls,optimizeWaypoints:q.optimizeWaypoints,callback:function(t,u,s){if(s===google.maps.DirectionsStatus.OK){r.setDirections(u)}}})};j.prototype.drawRoute=function(o){var n=this;this.getRoutes({origin:o.origin,destination:o.destination,travelMode:o.travelMode,waypoints:o.waypoints,unitSystem:o.unitSystem,error:o.error,avoidHighways:o.avoidHighways,avoidTolls:o.avoidTolls,optimizeWaypoints:o.optimizeWaypoints,callback:function(p){if(p.length>0){var q={path:p[p.length-1].overview_path,strokeColor:o.strokeColor,strokeOpacity:o.strokeOpacity,strokeWeight:o.strokeWeight};if(o.hasOwnProperty("icons")){q.icons=o.icons}n.drawPolyline(q);if(o.callback){o.callback(p[p.length-1])}}}})};j.prototype.travelRoute=function(o){if(o.origin&&o.destination){this.getRoutes({origin:o.origin,destination:o.destination,travelMode:o.travelMode,waypoints:o.waypoints,unitSystem:o.unitSystem,error:o.error,callback:function(v){if(v.length>0&&o.start){o.start(v[v.length-1])}if(v.length>0&&o.step){var s=v[v.length-1];if(s.legs.length>0){var r=s.legs[0].steps;for(var t=0,u;u=r[t];t++){u.step_number=t;o.step(u,(s.legs[0].steps.length-1))}}}if(v.length>0&&o.end){o.end(v[v.length-1])}}})}else{if(o.route){if(o.route.legs.length>0){var n=o.route.legs[0].steps;for(var p=0,q;q=n[p];p++){q.step_number=p;o.step(q)}}}}};j.prototype.drawSteppedRoute=function(q){var p=this;if(q.origin&&q.destination){this.getRoutes({origin:q.origin,destination:q.destination,travelMode:q.travelMode,waypoints:q.waypoints,error:q.error,callback:function(y){if(y.length>0&&q.start){q.start(y[y.length-1])}if(y.length>0&&q.step){var v=y[y.length-1];if(v.legs.length>0){var u=v.legs[0].steps;for(var w=0,x;x=u[w];w++){x.step_number=w;var t={path:x.path,strokeColor:q.strokeColor,strokeOpacity:q.strokeOpacity,strokeWeight:q.strokeWeight};if(q.hasOwnProperty("icons")){t.icons=q.icons}p.drawPolyline(t);q.step(x,(v.legs[0].steps.length-1))}}}if(y.length>0&&q.end){q.end(y[y.length-1])}}})}else{if(q.route){if(q.route.legs.length>0){var o=q.route.legs[0].steps;for(var r=0,s;s=o[r];r++){s.step_number=r;var n={path:s.path,strokeColor:q.strokeColor,strokeOpacity:q.strokeOpacity,strokeWeight:q.strokeWeight};if(q.hasOwnProperty("icons")){n.icons=q.icons}p.drawPolyline(n);q.step(s)}}}}};j.Route=function(o){this.origin=o.origin;this.destination=o.destination;this.waypoints=o.waypoints;this.map=o.map;this.route=o.route;this.step_count=0;this.steps=this.route.legs[0].steps;this.steps_length=this.steps.length;var n={path:new google.maps.MVCArray(),strokeColor:o.strokeColor,strokeOpacity:o.strokeOpacity,strokeWeight:o.strokeWeight};if(o.hasOwnProperty("icons")){n.icons=o.icons}this.polyline=this.map.drawPolyline(n).getPath()};j.Route.prototype.getRoute=function(o){var n=this;this.map.getRoutes({origin:this.origin,destination:this.destination,travelMode:o.travelMode,waypoints:this.waypoints||[],error:o.error,callback:function(){n.route=e[0];if(o.callback){o.callback.call(n)}}})};j.Route.prototype.back=function(){if(this.step_count>0){this.step_count--;var o=this.route.legs[0].steps[this.step_count].path;for(var n in o){if(o.hasOwnProperty(n)){this.polyline.pop()}}}};j.Route.prototype.forward=function(){if(this.step_count<this.steps_length){var o=this.route.legs[0].steps[this.step_count].path;for(var n in o){if(o.hasOwnProperty(n)){this.polyline.push(o[n])}}this.step_count++}};j.prototype.checkGeofence=function(o,n,p){return p.containsLatLng(new google.maps.LatLng(o,n))};j.prototype.checkMarkerGeofence=function(n,p){if(n.fences){for(var o=0,q;q=n.fences[o];o++){var r=n.getPosition();if(!this.checkGeofence(r.lat(),r.lng(),q)){p(n,q)}}}};j.prototype.toImage=function(o){var o=o||{},q={};q.size=o.size||[this.el.clientWidth,this.el.clientHeight];q.lat=this.getCenter().lat();q.lng=this.getCenter().lng();if(this.markers.length>0){q.markers=[];for(var p=0;p<this.markers.length;p++){q.markers.push({lat:this.markers[p].getPosition().lat(),lng:this.markers[p].getPosition().lng()})}}if(this.polylines.length>0){var n=this.polylines[0];q.polyline={};q.polyline["path"]=google.maps.geometry.encoding.encodePath(n.getPath());q.polyline["strokeColor"]=n.strokeColor;q.polyline["strokeOpacity"]=n.strokeOpacity;q.polyline["strokeWeight"]=n.strokeWeight}return j.staticMapURL(q)};j.staticMapURL=function(o){var u=[],M,q=(location.protocol==="file:"?"http:":location.protocol)+"//maps.googleapis.com/maps/api/staticmap";if(o.url){q=o.url;delete o.url}q+="?";var J=o.markers;delete o.markers;if(!J&&o.marker){J=[o.marker];delete o.marker}var x=o.styles;delete o.styles;var C=o.polyline;delete o.polyline;if(o.center){u.push("center="+o.center);delete o.center}else{if(o.address){u.push("center="+o.address);delete o.address}else{if(o.lat){u.push(["center=",o.lat,",",o.lng].join(""));delete o.lat;delete o.lng}else{if(o.visible){var n=encodeURI(o.visible.join("|"));u.push("visible="+n)}}}}var A=o.size;if(A){if(A.join){A=A.join("x")}delete o.size}else{A="630x300"}u.push("size="+A);if(!o.zoom&&o.zoom!==false){o.zoom=15}var K=o.hasOwnProperty("sensor")?!!o.sensor:true;delete o.sensor;u.push("sensor="+K);for(var v in o){if(o.hasOwnProperty(v)){u.push(v+"="+o[v])}}if(J){var w,y;for(var G=0;M=J[G];G++){w=[];if(M.size&&M.size!=="normal"){w.push("size:"+M.size);delete M.size}else{if(M.icon){w.push("icon:"+encodeURI(M.icon));delete M.icon}}if(M.color){w.push("color:"+M.color.replace("#","0x"));delete M.color}if(M.label){w.push("label:"+M.label[0].toUpperCase());delete M.label}y=(M.address?M.address:M.lat+","+M.lng);delete M.address;delete M.lat;delete M.lng;for(var v in M){if(M.hasOwnProperty(v)){w.push(v+":"+M[v])}}if(w.length||G===0){w.push(y);w=w.join("|");u.push("markers="+encodeURI(w))}else{w=u.pop()+encodeURI("|"+y);u.push(w)}}}if(x){for(var G=0;G<x.length;G++){var z=[];if(x[G].featureType){z.push("feature:"+x[G].featureType.toLowerCase())}if(x[G].elementType){z.push("element:"+x[G].elementType.toLowerCase())}for(var F=0;F<x[G].stylers.length;F++){for(var D in x[G].stylers[F]){var H=x[G].stylers[F][D];if(D=="hue"||D=="color"){H="0x"+H.substring(1)}z.push(D+":"+H)}}var t=z.join("|");if(t!=""){u.push("style="+t)}}}function I(p,N){if(p[0]==="#"){p=p.replace("#","0x");if(N){N=parseFloat(N);N=Math.min(1,Math.max(N,0));if(N===0){return"0x00000000"}N=(N*255).toString(16);if(N.length===1){N+=N}p=p.slice(0,8)+N}}return p}if(C){M=C;C=[];if(M.strokeWeight){C.push("weight:"+parseInt(M.strokeWeight,10))}if(M.strokeColor){var E=I(M.strokeColor,M.strokeOpacity);C.push("color:"+E)}if(M.fillColor){var L=I(M.fillColor,M.fillOpacity);C.push("fillcolor:"+L)}var B=M.path;if(B.join){for(var F=0,s;s=B[F];F++){C.push(s.join(","))}}else{C.push("enc:"+B)}C=C.join("|");u.push("path="+encodeURI(C))}var r=window.devicePixelRatio||1;u.push("scale="+r);u=u.join("&");return q+u};j.prototype.addMapType=function(n,o){if(o.hasOwnProperty("getTileUrl")&&typeof(o.getTileUrl)=="function"){o.tileSize=o.tileSize||new google.maps.Size(256,256);var p=new google.maps.ImageMapType(o);this.map.mapTypes.set(n,p)}else{throw"'getTileUrl' function required."}};j.prototype.addOverlayMapType=function(n){if(n.hasOwnProperty("getTile")&&typeof(n.getTile)=="function"){var o=n.index;delete n.index;this.map.overlayMapTypes.insertAt(o,n)}else{throw"'getTile' function required."}};j.prototype.removeOverlayMapType=function(n){this.map.overlayMapTypes.removeAt(n)};j.prototype.addStyle=function(o){var n=new google.maps.StyledMapType(o.styles,{name:o.styledMapName});this.map.mapTypes.set(o.mapTypeId,n)};j.prototype.setStyle=function(n){this.map.setMapTypeId(n)};j.prototype.createPanorama=function(n){if(!n.hasOwnProperty("lat")||!n.hasOwnProperty("lng")){n.lat=this.getCenter().lat();n.lng=this.getCenter().lng()}this.panorama=j.createPanorama(n);this.map.setStreetView(this.panorama);return this.panorama};j.createPanorama=function(o){var r=a(o.el,o.context);o.position=new google.maps.LatLng(o.lat,o.lng);delete o.el;delete o.context;delete o.lat;delete o.lng;var s=["closeclick","links_changed","pano_changed","position_changed","pov_changed","resize","visible_changed"],n=h({visible:true},o);for(var q=0;q<s.length;q++){delete n[s[q]]}var p=new google.maps.StreetViewPanorama(r,n);for(var q=0;q<s.length;q++){(function(u,t){if(o[t]){google.maps.event.addListener(u,t,function(){o[t].apply(this)})}})(p,s[q])}return p};j.prototype.on=function(o,n){return j.on(o,this,n)};j.prototype.off=function(n){j.off(n,this)};j.prototype.once=function(o,n){return j.once(o,this,n)};j.custom_events=["marker_added","marker_removed","polyline_added","polyline_removed","polygon_added","polygon_removed","geolocated","geolocation_failed"];j.on=function(q,n,p){if(j.custom_events.indexOf(q)==-1){if(n instanceof j){n=n.map}return google.maps.event.addListener(n,q,p)}else{var o={handler:p,eventName:q};n.registered_events[q]=n.registered_events[q]||[];n.registered_events[q].push(o);return o}};j.off=function(o,n){if(j.custom_events.indexOf(o)==-1){if(n instanceof j){n=n.map}google.maps.event.clearListeners(n,o)}else{n.registered_events[o]=[]}};j.once=function(p,n,o){if(j.custom_events.indexOf(p)==-1){if(n instanceof j){n=n.map}return google.maps.event.addListenerOnce(n,p,o)}};j.fire=function(r,n,q){if(j.custom_events.indexOf(r)==-1){google.maps.event.trigger(n,r,Array.prototype.slice.apply(arguments).slice(2))}else{if(r in q.registered_events){var p=q.registered_events[r];for(var o=0;o<p.length;o++){(function(u,t,s){u.apply(t,[s])})(p[o]["handler"],q,n)}}}};j.geolocate=function(n){var o=n.always||n.complete;if(navigator.geolocation){navigator.geolocation.getCurrentPosition(function(p){n.success(p);if(o){o()}},function(p){n.error(p);if(o){o()}},n.options)}else{n.not_supported();if(o){o()}}};j.geocode=function(n){this.geocoder=new google.maps.Geocoder();var o=n.callback;if(n.hasOwnProperty("lat")&&n.hasOwnProperty("lng")){n.latLng=new google.maps.LatLng(n.lat,n.lng)}delete n.lat;delete n.lng;delete n.callback;this.geocoder.geocode(n,function(q,p){o(q,p)})};if(typeof window.google==="object"&&window.google.maps){if(!google.maps.Polygon.prototype.getBounds){google.maps.Polygon.prototype.getBounds=function(q){var o=new google.maps.LatLngBounds();var t=this.getPaths();var s;for(var r=0;r<t.getLength();r++){s=t.getAt(r);for(var n=0;n<s.getLength();n++){o.extend(s.getAt(n))}}return o}}if(!google.maps.Polygon.prototype.containsLatLng){google.maps.Polygon.prototype.containsLatLng=function(s){var n=this.getBounds();if(n!==null&&!n.contains(s)){return false}var q=false;var o=this.getPaths().getLength();for(var r=0;r<o;r++){var y=this.getPaths().getAt(r);var v=y.getLength();var t=v-1;for(var u=0;u<v;u++){var x=y.getAt(u);var w=y.getAt(t);if(x.lng()<s.lng()&&w.lng()>=s.lng()||w.lng()<s.lng()&&x.lng()>=s.lng()){if(x.lat()+(s.lng()-x.lng())/(w.lng()-x.lng())*(w.lat()-x.lat())<s.lat()){q=!q}}t=u}}return q}}if(!google.maps.Circle.prototype.containsLatLng){google.maps.Circle.prototype.containsLatLng=function(n){if(google.maps.geometry){return google.maps.geometry.spherical.computeDistanceBetween(this.getCenter(),n)<=this.getRadius()}else{return true}}}google.maps.Rectangle.prototype.containsLatLng=function(n){return this.getBounds().contains(n)};google.maps.LatLngBounds.prototype.containsLatLng=function(n){return this.contains(n)};google.maps.Marker.prototype.setFences=function(n){this.fences=n};google.maps.Marker.prototype.addFence=function(n){this.fences.push(n)};google.maps.Marker.prototype.getId=function(){return this["__gm_id"]}}if(!Array.prototype.indexOf){Array.prototype.indexOf=function(q){if(this==null){throw new TypeError()}var r=Object(this);var o=r.length>>>0;if(o===0){return -1}var s=0;if(arguments.length>1){s=Number(arguments[1]);if(s!=s){s=0}else{if(s!=0&&s!=Infinity&&s!=-Infinity){s=(s>0||-1)*Math.floor(Math.abs(s))}}}if(s>=o){return -1}var p=s>=0?s:Math.max(o-Math.abs(s),0);for(;p<o;p++){if(p in r&&r[p]===q){return p}}return -1}}return j}));
/*!
 * GMaps.js v0.4.25
 * http://hpneo.github.com/gmaps/
 *
 * Copyright 2017, Gustavo Leon
 * Released under the MIT License.
 */

var extend_object = function(obj, new_obj) {
  var name;

  if (obj === new_obj) {
    return obj;
  }

  for (name in new_obj) {
    if (new_obj[name] !== undefined) {
      obj[name] = new_obj[name];
    }
  }

  return obj;
};

var replace_object = function(obj, replace) {
  var name;

  if (obj === replace) {
    return obj;
  }

  for (name in replace) {
    if (obj[name] != undefined) {
      obj[name] = replace[name];
    }
  }

  return obj;
};

var array_map = function(array, callback) {
  var original_callback_params = Array.prototype.slice.call(arguments, 2),
      array_return = [],
      array_length = array.length,
      i;

  if (Array.prototype.map && array.map === Array.prototype.map) {
    array_return = Array.prototype.map.call(array, function(item) {
      var callback_params = original_callback_params.slice(0);
      callback_params.splice(0, 0, item);

      return callback.apply(this, callback_params);
    });
  }
  else {
    for (i = 0; i < array_length; i++) {
      callback_params = original_callback_params;
      callback_params.splice(0, 0, array[i]);
      array_return.push(callback.apply(this, callback_params));
    }
  }

  return array_return;
};

var array_flat = function(array) {
  var new_array = [],
      i;

  for (i = 0; i < array.length; i++) {
    new_array = new_array.concat(array[i]);
  }

  return new_array;
};

var coordsToLatLngs = function(coords, useGeoJSON) {
  var first_coord = coords[0],
      second_coord = coords[1];

  if (useGeoJSON) {
    first_coord = coords[1];
    second_coord = coords[0];
  }

  return new google.maps.LatLng(first_coord, second_coord);
};

var arrayToLatLng = function(coords, useGeoJSON) {
  var i;

  for (i = 0; i < coords.length; i++) {
    if (!(coords[i] instanceof google.maps.LatLng)) {
      if (coords[i].length > 0 && typeof(coords[i][0]) === "object") {
        coords[i] = arrayToLatLng(coords[i], useGeoJSON);
      }
      else {
        coords[i] = coordsToLatLngs(coords[i], useGeoJSON);
      }
    }
  }

  return coords;
};

var getElementsByClassName = function (class_name, context) {
    var element,
        _class = class_name.replace('.', '');

    if ('jQuery' in this && context) {
        element = $("." + _class, context)[0];
    } else {
        element = document.getElementsByClassName(_class)[0];
    }
    return element;

};

var getElementById = function(id, context) {
  var element,
  id = id.replace('#', '');

  if ('jQuery' in window && context) {
    element = $('#' + id, context)[0];
  } else {
    element = document.getElementById(id);
  };

  return element;
};

var findAbsolutePosition = function(obj)  {
  var curleft = 0,
      curtop = 0;

  if (obj.getBoundingClientRect) {
      var rect = obj.getBoundingClientRect();
      var sx = -(window.scrollX ? window.scrollX : window.pageXOffset);
      var sy = -(window.scrollY ? window.scrollY : window.pageYOffset);

      return [(rect.left - sx), (rect.top - sy)];
  }

  if (obj.offsetParent) {
    do {
      curleft += obj.offsetLeft;
      curtop += obj.offsetTop;
    } while (obj = obj.offsetParent);
  }

  return [curleft, curtop];
};

var GMaps = (function(global) {
  "use strict";

  var doc = document;
  /**
   * Creates a new GMaps instance, including a Google Maps map.
   * @class GMaps
   * @constructs
   * @param {object} options - `options` accepts all the [MapOptions](https://developers.google.com/maps/documentation/javascript/reference#MapOptions) and [events](https://developers.google.com/maps/documentation/javascript/reference#Map) listed in the Google Maps API. Also accepts:
   * * `lat` (number): Latitude of the map's center
   * * `lng` (number): Longitude of the map's center
   * * `el` (string or HTMLElement): container where the map will be rendered
   * * `markerClusterer` (function): A function to create a marker cluster. You can use MarkerClusterer or MarkerClustererPlus.
   */
  var GMaps = function(options) {

    if (!(typeof window.google === 'object' && window.google.maps)) {
      if (typeof window.console === 'object' && window.console.error) {
        console.error('Google Maps API is required. Please register the following JavaScript library https://maps.googleapis.com/maps/api/js.');
      }

      return function() {};
    }

    if (!this) return new GMaps(options);

    options.zoom = options.zoom || 15;
    options.mapType = options.mapType || 'roadmap';

    var valueOrDefault = function(value, defaultValue) {
      return value === undefined ? defaultValue : value;
    };

    var self = this,
        i,
        events_that_hide_context_menu = [
          'bounds_changed', 'center_changed', 'click', 'dblclick', 'drag',
          'dragend', 'dragstart', 'idle', 'maptypeid_changed', 'projection_changed',
          'resize', 'tilesloaded', 'zoom_changed'
        ],
        events_that_doesnt_hide_context_menu = ['mousemove', 'mouseout', 'mouseover'],
        options_to_be_deleted = ['el', 'lat', 'lng', 'mapType', 'width', 'height', 'markerClusterer', 'enableNewStyle'],
        identifier = options.el || options.div,
        markerClustererFunction = options.markerClusterer,
        mapType = google.maps.MapTypeId[options.mapType.toUpperCase()],
        map_center = new google.maps.LatLng(options.lat, options.lng),
        zoomControl = valueOrDefault(options.zoomControl, true),
        zoomControlOpt = options.zoomControlOpt || {
          style: 'DEFAULT',
          position: 'TOP_LEFT'
        },
        zoomControlStyle = zoomControlOpt.style || 'DEFAULT',
        zoomControlPosition = zoomControlOpt.position || 'TOP_LEFT',
        panControl = valueOrDefault(options.panControl, true),
        mapTypeControl = valueOrDefault(options.mapTypeControl, true),
        scaleControl = valueOrDefault(options.scaleControl, true),
        streetViewControl = valueOrDefault(options.streetViewControl, true),
        overviewMapControl = valueOrDefault(overviewMapControl, true),
        map_options = {},
        map_base_options = {
          zoom: this.zoom,
          center: map_center,
          mapTypeId: mapType
        },
        map_controls_options = {
          panControl: panControl,
          zoomControl: zoomControl,
          zoomControlOptions: {
            style: google.maps.ZoomControlStyle[zoomControlStyle],
            position: google.maps.ControlPosition[zoomControlPosition]
          },
          mapTypeControl: mapTypeControl,
          scaleControl: scaleControl,
          streetViewControl: streetViewControl,
          overviewMapControl: overviewMapControl
        };

      if (typeof(options.el) === 'string' || typeof(options.div) === 'string') {
        if (identifier.indexOf("#") > -1) {
            /**
             * Container element
             *
             * @type {HTMLElement}
             */
            this.el = getElementById(identifier, options.context);
        } else {
            this.el = getElementsByClassName.apply(this, [identifier, options.context]);
        }
      } else {
          this.el = identifier;
      }

    if (typeof(this.el) === 'undefined' || this.el === null) {
      throw 'No element defined.';
    }

    window.context_menu = window.context_menu || {};
    window.context_menu[self.el.id] = {};

    /**
     * Collection of custom controls in the map UI
     *
     * @type {array}
     */
    this.controls = [];
    /**
     * Collection of map's overlays
     *
     * @type {array}
     */
    this.overlays = [];
    /**
     * Collection of KML/GeoRSS and FusionTable layers
     *
     * @type {array}
     */
    this.layers = [];
    /**
     * Collection of data layers (See {@link GMaps#addLayer})
     *
     * @type {object}
     */
    this.singleLayers = {};
    /**
     * Collection of map's markers
     *
     * @type {array}
     */
    this.markers = [];
    /**
     * Collection of map's lines
     *
     * @type {array}
     */
    this.polylines = [];
    /**
     * Collection of map's routes requested by {@link GMaps#getRoutes}, {@link GMaps#renderRoute}, {@link GMaps#drawRoute}, {@link GMaps#travelRoute} or {@link GMaps#drawSteppedRoute}
     *
     * @type {array}
     */
    this.routes = [];
    /**
     * Collection of map's polygons
     *
     * @type {array}
     */
    this.polygons = [];
    this.infoWindow = null;
    this.overlay_el = null;
    /**
     * Current map's zoom
     *
     * @type {number}
     */
    this.zoom = options.zoom;
    this.registered_events = {};

    this.el.style.width = options.width || this.el.scrollWidth || this.el.offsetWidth;
    this.el.style.height = options.height || this.el.scrollHeight || this.el.offsetHeight;

    google.maps.visualRefresh = options.enableNewStyle;

    for (i = 0; i < options_to_be_deleted.length; i++) {
      delete options[options_to_be_deleted[i]];
    }

    if(options.disableDefaultUI != true) {
      map_base_options = extend_object(map_base_options, map_controls_options);
    }

    map_options = extend_object(map_base_options, options);

    for (i = 0; i < events_that_hide_context_menu.length; i++) {
      delete map_options[events_that_hide_context_menu[i]];
    }

    for (i = 0; i < events_that_doesnt_hide_context_menu.length; i++) {
      delete map_options[events_that_doesnt_hide_context_menu[i]];
    }

    /**
     * Google Maps map instance
     *
     * @type {google.maps.Map}
     */
    this.map = new google.maps.Map(this.el, map_options);

    if (markerClustererFunction) {
      /**
       * Marker Clusterer instance
       *
       * @type {object}
       */
      this.markerClusterer = markerClustererFunction.apply(this, [this.map]);
    }

    var buildContextMenuHTML = function(control, e) {
      var html = '',
          options = window.context_menu[self.el.id][control];

      for (var i in options){
        if (options.hasOwnProperty(i)) {
          var option = options[i];

          html += '<li><a id="' + control + '_' + i + '" href="#">' + option.title + '</a></li>';
        }
      }

      if (!getElementById('gmaps_context_menu')) return;

      var context_menu_element = getElementById('gmaps_context_menu');

      context_menu_element.innerHTML = html;

      var context_menu_items = context_menu_element.getElementsByTagName('a'),
          context_menu_items_count = context_menu_items.length,
          i;

      for (i = 0; i < context_menu_items_count; i++) {
        var context_menu_item = context_menu_items[i];

        var assign_menu_item_action = function(ev){
          ev.preventDefault();

          options[this.id.replace(control + '_', '')].action.apply(self, [e]);
          self.hideContextMenu();
        };

        google.maps.event.clearListeners(context_menu_item, 'click');
        google.maps.event.addDomListenerOnce(context_menu_item, 'click', assign_menu_item_action, false);
      }

      var position = findAbsolutePosition.apply(this, [self.el]),
          left = position[0] + e.pixel.x - 15,
          top = position[1] + e.pixel.y- 15;

      context_menu_element.style.left = left + "px";
      context_menu_element.style.top = top + "px";

      // context_menu_element.style.display = 'block';
    };

    this.buildContextMenu = function(control, e) {
      if (control === 'marker') {
        e.pixel = {};

        var overlay = new google.maps.OverlayView();
        overlay.setMap(self.map);

        overlay.draw = function() {
          var projection = overlay.getProjection(),
              position = e.marker.getPosition();

          e.pixel = projection.fromLatLngToContainerPixel(position);

          buildContextMenuHTML(control, e);
        };
      }
      else {
        buildContextMenuHTML(control, e);
      }

      var context_menu_element = getElementById('gmaps_context_menu');

      setTimeout(function() {
        context_menu_element.style.display = 'block';
      }, 0);
    };

    /**
     * Add a context menu for a map or a marker.
     *
     * @param {object} options - The `options` object should contain:
     * * `control` (string): Kind of control the context menu will be attached. Can be "map" or "marker".
     * * `options` (array): A collection of context menu items:
     *   * `title` (string): Item's title shown in the context menu.
     *   * `name` (string): Item's identifier.
     *   * `action` (function): Function triggered after selecting the context menu item.
     */
    this.setContextMenu = function(options) {
      window.context_menu[self.el.id][options.control] = {};

      var i,
          ul = doc.createElement('ul');

      for (i in options.options) {
        if (options.options.hasOwnProperty(i)) {
          var option = options.options[i];

          window.context_menu[self.el.id][options.control][option.name] = {
            title: option.title,
            action: option.action
          };
        }
      }

      ul.id = 'gmaps_context_menu';
      ul.style.display = 'none';
      ul.style.position = 'absolute';
      ul.style.minWidth = '100px';
      ul.style.background = 'white';
      ul.style.listStyle = 'none';
      ul.style.padding = '8px';
      ul.style.boxShadow = '2px 2px 6px #ccc';

      if (!getElementById('gmaps_context_menu')) {
        doc.body.appendChild(ul);
      }

      var context_menu_element = getElementById('gmaps_context_menu');

      google.maps.event.addDomListener(context_menu_element, 'mouseout', function(ev) {
        if (!ev.relatedTarget || !this.contains(ev.relatedTarget)) {
          window.setTimeout(function(){
            context_menu_element.style.display = 'none';
          }, 400);
        }
      }, false);
    };

    /**
     * Hide the current context menu
     */
    this.hideContextMenu = function() {
      var context_menu_element = getElementById('gmaps_context_menu');

      if (context_menu_element) {
        context_menu_element.style.display = 'none';
      }
    };

    var setupListener = function(object, name) {
      google.maps.event.addListener(object, name, function(e){
        if (e == undefined) {
          e = this;
        }

        options[name].apply(this, [e]);

        self.hideContextMenu();
      });
    };

    //google.maps.event.addListener(this.map, 'idle', this.hideContextMenu);
    google.maps.event.addListener(this.map, 'zoom_changed', this.hideContextMenu);

    for (var ev = 0; ev < events_that_hide_context_menu.length; ev++) {
      var name = events_that_hide_context_menu[ev];

      if (name in options) {
        setupListener(this.map, name);
      }
    }

    for (var ev = 0; ev < events_that_doesnt_hide_context_menu.length; ev++) {
      var name = events_that_doesnt_hide_context_menu[ev];

      if (name in options) {
        setupListener(this.map, name);
      }
    }

    google.maps.event.addListener(this.map, 'rightclick', function(e) {
      if (options.rightclick) {
        options.rightclick.apply(this, [e]);
      }

      if(window.context_menu[self.el.id]['map'] != undefined) {
        self.buildContextMenu('map', e);
      }
    });

    /**
     * Trigger a `resize` event, useful if you need to repaint the current map (for changes in the viewport or display / hide actions).
     */
    this.refresh = function() {
      google.maps.event.trigger(this.map, 'resize');
    };

    /**
     * Adjust the map zoom to include all the markers added in the map.
     */
    this.fitZoom = function() {
      var latLngs = [],
          markers_length = this.markers.length,
          i;

      for (i = 0; i < markers_length; i++) {
        if(typeof(this.markers[i].visible) === 'boolean' && this.markers[i].visible) {
          latLngs.push(this.markers[i].getPosition());
        }
      }

      this.fitLatLngBounds(latLngs);
    };

    /**
     * Adjust the map zoom to include all the coordinates in the `latLngs` array.
     *
     * @param {array} latLngs - Collection of `google.maps.LatLng` objects.
     */
    this.fitLatLngBounds = function(latLngs) {
      var total = latLngs.length,
          bounds = new google.maps.LatLngBounds(),
          i;

      for(i = 0; i < total; i++) {
        bounds.extend(latLngs[i]);
      }

      this.map.fitBounds(bounds);
    };

    /**
     * Center the map using the `lat` and `lng` coordinates.
     *
     * @param {number} lat - Latitude of the coordinate.
     * @param {number} lng - Longitude of the coordinate.
     * @param {function} [callback] - Callback that will be executed after the map is centered.
     */
    this.setCenter = function(lat, lng, callback) {
      this.map.panTo(new google.maps.LatLng(lat, lng));

      if (callback) {
        callback();
      }
    };

    /**
     * Return the HTML element container of the map.
     *
     * @returns {HTMLElement} the element container.
     */
    this.getElement = function() {
      return this.el;
    };

    /**
     * Increase the map's zoom.
     *
     * @param {number} [magnitude] - The number of times the map will be zoomed in.
     */
    this.zoomIn = function(value) {
      value = value || 1;

      this.zoom = this.map.getZoom() + value;
      this.map.setZoom(this.zoom);
    };

    /**
     * Decrease the map's zoom.
     *
     * @param {number} [magnitude] - The number of times the map will be zoomed out.
     */
    this.zoomOut = function(value) {
      value = value || 1;

      this.zoom = this.map.getZoom() - value;
      this.map.setZoom(this.zoom);
    };

    var native_methods = [],
        method;

    for (method in this.map) {
      if (typeof(this.map[method]) == 'function' && !this[method]) {
        native_methods.push(method);
      }
    }

    for (i = 0; i < native_methods.length; i++) {
      (function(gmaps, scope, method_name) {
        gmaps[method_name] = function(){
          return scope[method_name].apply(scope, arguments);
        };
      })(this, this.map, native_methods[i]);
    }
  };

  return GMaps;
})(this);

GMaps.prototype.createControl = function(options) {
  var control = document.createElement('div');

  control.style.cursor = 'pointer';

  if (options.disableDefaultStyles !== true) {
    control.style.fontFamily = 'Roboto, Arial, sans-serif';
    control.style.fontSize = '11px';
    control.style.boxShadow = 'rgba(0, 0, 0, 0.298039) 0px 1px 4px -1px';
  }

  for (var option in options.style) {
    control.style[option] = options.style[option];
  }

  if (options.id) {
    control.id = options.id;
  }

  if (options.title) {
    control.title = options.title;
  }

  if (options.classes) {
    control.className = options.classes;
  }

  if (options.content) {
    if (typeof options.content === 'string') {
      control.innerHTML = options.content;
    }
    else if (options.content instanceof HTMLElement) {
      control.appendChild(options.content);
    }
  }

  if (options.position) {
    control.position = google.maps.ControlPosition[options.position.toUpperCase()];
  }

  for (var ev in options.events) {
    (function(object, name) {
      google.maps.event.addDomListener(object, name, function(){
        options.events[name].apply(this, [this]);
      });
    })(control, ev);
  }

  control.index = 1;

  return control;
};

/**
 * Add a custom control to the map UI.
 *
 * @param {object} options - The `options` object should contain:
 * * `style` (object): The keys and values of this object should be valid CSS properties and values.
 * * `id` (string): The HTML id for the custom control.
 * * `classes` (string): A string containing all the HTML classes for the custom control.
 * * `content` (string or HTML element): The content of the custom control.
 * * `position` (string): Any valid [`google.maps.ControlPosition`](https://developers.google.com/maps/documentation/javascript/controls#ControlPositioning) value, in lower or upper case.
 * * `events` (object): The keys of this object should be valid DOM events. The values should be functions.
 * * `disableDefaultStyles` (boolean): If false, removes the default styles for the controls like font (family and size), and box shadow.
 * @returns {HTMLElement}
 */
GMaps.prototype.addControl = function(options) {
  var control = this.createControl(options);

  this.controls.push(control);
  this.map.controls[control.position].push(control);

  return control;
};

/**
 * Remove a control from the map. `control` should be a control returned by `addControl()`.
 *
 * @param {HTMLElement} control - One of the controls returned by `addControl()`.
 * @returns {HTMLElement} the removed control.
 */
GMaps.prototype.removeControl = function(control) {
  var position = null,
      i;

  for (i = 0; i < this.controls.length; i++) {
    if (this.controls[i] == control) {
      position = this.controls[i].position;
      this.controls.splice(i, 1);
    }
  }

  if (position) {
    for (i = 0; i < this.map.controls.length; i++) {
      var controlsForPosition = this.map.controls[control.position];

      if (controlsForPosition.getAt(i) == control) {
        controlsForPosition.removeAt(i);

        break;
      }
    }
  }

  return control;
};

GMaps.prototype.createMarker = function(options) {
  if (options.lat == undefined && options.lng == undefined && options.position == undefined) {
    throw 'No latitude or longitude defined.';
  }

  var self = this,
      details = options.details,
      fences = options.fences,
      outside = options.outside,
      base_options = {
        position: new google.maps.LatLng(options.lat, options.lng),
        map: null
      },
      marker_options = extend_object(base_options, options);

  delete marker_options.lat;
  delete marker_options.lng;
  delete marker_options.fences;
  delete marker_options.outside;

  var marker = new google.maps.Marker(marker_options);

  marker.fences = fences;

  if (options.infoWindow) {
    marker.infoWindow = new google.maps.InfoWindow(options.infoWindow);

    var info_window_events = ['closeclick', 'content_changed', 'domready', 'position_changed', 'zindex_changed'];

    for (var ev = 0; ev < info_window_events.length; ev++) {
      (function(object, name) {
        if (options.infoWindow[name]) {
          google.maps.event.addListener(object, name, function(e){
            options.infoWindow[name].apply(this, [e]);
          });
        }
      })(marker.infoWindow, info_window_events[ev]);
    }
  }

  var marker_events = ['animation_changed', 'clickable_changed', 'cursor_changed', 'draggable_changed', 'flat_changed', 'icon_changed', 'position_changed', 'shadow_changed', 'shape_changed', 'title_changed', 'visible_changed', 'zindex_changed'];

  var marker_events_with_mouse = ['dblclick', 'drag', 'dragend', 'dragstart', 'mousedown', 'mouseout', 'mouseover', 'mouseup'];

  for (var ev = 0; ev < marker_events.length; ev++) {
    (function(object, name) {
      if (options[name]) {
        google.maps.event.addListener(object, name, function(){
          options[name].apply(this, [this]);
        });
      }
    })(marker, marker_events[ev]);
  }

  for (var ev = 0; ev < marker_events_with_mouse.length; ev++) {
    (function(map, object, name) {
      if (options[name]) {
        google.maps.event.addListener(object, name, function(me){
          if(!me.pixel){
            me.pixel = map.getProjection().fromLatLngToPoint(me.latLng)
          }

          options[name].apply(this, [me]);
        });
      }
    })(this.map, marker, marker_events_with_mouse[ev]);
  }

  google.maps.event.addListener(marker, 'click', function() {
    this.details = details;

    if (options.click) {
      options.click.apply(this, [this]);
    }

    if (marker.infoWindow) {
      self.hideInfoWindows();
      marker.infoWindow.open(self.map, marker);
    }
  });

  google.maps.event.addListener(marker, 'rightclick', function(e) {
    e.marker = this;

    if (options.rightclick) {
      options.rightclick.apply(this, [e]);
    }

    if (window.context_menu[self.el.id]['marker'] != undefined) {
      self.buildContextMenu('marker', e);
    }
  });

  if (marker.fences) {
    google.maps.event.addListener(marker, 'dragend', function() {
      self.checkMarkerGeofence(marker, function(m, f) {
        outside(m, f);
      });
    });
  }

  return marker;
};

GMaps.prototype.addMarker = function(options) {
  var marker;
  if(options.hasOwnProperty('gm_accessors_')) {
    // Native google.maps.Marker object
    marker = options;
  }
  else {
    if ((options.hasOwnProperty('lat') && options.hasOwnProperty('lng')) || options.position) {
      marker = this.createMarker(options);
    }
    else {
      throw 'No latitude or longitude defined.';
    }
  }

  marker.setMap(this.map);

  if(this.markerClusterer) {
    this.markerClusterer.addMarker(marker);
  }

  this.markers.push(marker);

  GMaps.fire('marker_added', marker, this);

  return marker;
};

GMaps.prototype.addMarkers = function(array) {
  for (var i = 0, marker; marker=array[i]; i++) {
    this.addMarker(marker);
  }

  return this.markers;
};

GMaps.prototype.hideInfoWindows = function() {
  for (var i = 0, marker; marker = this.markers[i]; i++){
    if (marker.infoWindow) {
      marker.infoWindow.close();
    }
  }
};

GMaps.prototype.removeMarker = function(marker) {
  for (var i = 0; i < this.markers.length; i++) {
    if (this.markers[i] === marker) {
      this.markers[i].setMap(null);
      this.markers.splice(i, 1);

      if(this.markerClusterer) {
        this.markerClusterer.removeMarker(marker);
      }

      GMaps.fire('marker_removed', marker, this);

      break;
    }
  }

  return marker;
};

GMaps.prototype.removeMarkers = function (collection) {
  var new_markers = [];

  if (typeof collection == 'undefined') {
    for (var i = 0; i < this.markers.length; i++) {
      var marker = this.markers[i];
      marker.setMap(null);

      GMaps.fire('marker_removed', marker, this);
    }

    if(this.markerClusterer && this.markerClusterer.clearMarkers) {
      this.markerClusterer.clearMarkers();
    }

    this.markers = new_markers;
  }
  else {
    for (var i = 0; i < collection.length; i++) {
      var index = this.markers.indexOf(collection[i]);

      if (index > -1) {
        var marker = this.markers[index];
        marker.setMap(null);

        if(this.markerClusterer) {
          this.markerClusterer.removeMarker(marker);
        }

        GMaps.fire('marker_removed', marker, this);
      }
    }

    for (var i = 0; i < this.markers.length; i++) {
      var marker = this.markers[i];
      if (marker.getMap() != null) {
        new_markers.push(marker);
      }
    }

    this.markers = new_markers;
  }
};

GMaps.prototype.drawOverlay = function(options) {
  var overlay = new google.maps.OverlayView(),
      auto_show = true;

  overlay.setMap(this.map);

  if (options.auto_show != null) {
    auto_show = options.auto_show;
  }

  overlay.onAdd = function() {
    var el = document.createElement('div');

    el.style.borderStyle = "none";
    el.style.borderWidth = "0px";
    el.style.position = "absolute";
    el.style.zIndex = 100;
    el.innerHTML = options.content;

    overlay.el = el;

    if (!options.layer) {
      options.layer = 'overlayLayer';
    }
    
    var panes = this.getPanes(),
        overlayLayer = panes[options.layer],
        stop_overlay_events = ['contextmenu', 'DOMMouseScroll', 'dblclick', 'mousedown'];

    overlayLayer.appendChild(el);

    for (var ev = 0; ev < stop_overlay_events.length; ev++) {
      (function(object, name) {
        google.maps.event.addDomListener(object, name, function(e){
          if (navigator.userAgent.toLowerCase().indexOf('msie') != -1 && document.all) {
            e.cancelBubble = true;
            e.returnValue = false;
          }
          else {
            e.stopPropagation();
          }
        });
      })(el, stop_overlay_events[ev]);
    }

    if (options.click) {
      panes.overlayMouseTarget.appendChild(overlay.el);
      google.maps.event.addDomListener(overlay.el, 'click', function() {
        options.click.apply(overlay, [overlay]);
      });
    }

    google.maps.event.trigger(this, 'ready');
  };

  overlay.draw = function() {
    var projection = this.getProjection(),
        pixel = projection.fromLatLngToDivPixel(new google.maps.LatLng(options.lat, options.lng));

    options.horizontalOffset = options.horizontalOffset || 0;
    options.verticalOffset = options.verticalOffset || 0;

    var el = overlay.el,
        content = el.children[0],
        content_height = content.clientHeight,
        content_width = content.clientWidth;

    switch (options.verticalAlign) {
      case 'top':
        el.style.top = (pixel.y - content_height + options.verticalOffset) + 'px';
        break;
      default:
      case 'middle':
        el.style.top = (pixel.y - (content_height / 2) + options.verticalOffset) + 'px';
        break;
      case 'bottom':
        el.style.top = (pixel.y + options.verticalOffset) + 'px';
        break;
    }

    switch (options.horizontalAlign) {
      case 'left':
        el.style.left = (pixel.x - content_width + options.horizontalOffset) + 'px';
        break;
      default:
      case 'center':
        el.style.left = (pixel.x - (content_width / 2) + options.horizontalOffset) + 'px';
        break;
      case 'right':
        el.style.left = (pixel.x + options.horizontalOffset) + 'px';
        break;
    }

    el.style.display = auto_show ? 'block' : 'none';

    if (!auto_show) {
      options.show.apply(this, [el]);
    }
  };

  overlay.onRemove = function() {
    var el = overlay.el;

    if (options.remove) {
      options.remove.apply(this, [el]);
    }
    else {
      overlay.el.parentNode.removeChild(overlay.el);
      overlay.el = null;
    }
  };

  this.overlays.push(overlay);
  return overlay;
};

GMaps.prototype.removeOverlay = function(overlay) {
  for (var i = 0; i < this.overlays.length; i++) {
    if (this.overlays[i] === overlay) {
      this.overlays[i].setMap(null);
      this.overlays.splice(i, 1);

      break;
    }
  }
};

GMaps.prototype.removeOverlays = function() {
  for (var i = 0, item; item = this.overlays[i]; i++) {
    item.setMap(null);
  }

  this.overlays = [];
};

GMaps.prototype.drawPolyline = function(options) {
  var path = [],
      points = options.path;

  if (points.length) {
    if (points[0][0] === undefined) {
      path = points;
    }
    else {
      for (var i = 0, latlng; latlng = points[i]; i++) {
        path.push(new google.maps.LatLng(latlng[0], latlng[1]));
      }
    }
  }

  var polyline_options = {
    map: this.map,
    path: path,
    strokeColor: options.strokeColor,
    strokeOpacity: options.strokeOpacity,
    strokeWeight: options.strokeWeight,
    geodesic: options.geodesic,
    clickable: true,
    editable: false,
    visible: true
  };

  if (options.hasOwnProperty("clickable")) {
    polyline_options.clickable = options.clickable;
  }

  if (options.hasOwnProperty("editable")) {
    polyline_options.editable = options.editable;
  }

  if (options.hasOwnProperty("icons")) {
    polyline_options.icons = options.icons;
  }

  if (options.hasOwnProperty("zIndex")) {
    polyline_options.zIndex = options.zIndex;
  }

  var polyline = new google.maps.Polyline(polyline_options);

  var polyline_events = ['click', 'dblclick', 'mousedown', 'mousemove', 'mouseout', 'mouseover', 'mouseup', 'rightclick'];

  for (var ev = 0; ev < polyline_events.length; ev++) {
    (function(object, name) {
      if (options[name]) {
        google.maps.event.addListener(object, name, function(e){
          options[name].apply(this, [e]);
        });
      }
    })(polyline, polyline_events[ev]);
  }

  this.polylines.push(polyline);

  GMaps.fire('polyline_added', polyline, this);

  return polyline;
};

GMaps.prototype.removePolyline = function(polyline) {
  for (var i = 0; i < this.polylines.length; i++) {
    if (this.polylines[i] === polyline) {
      this.polylines[i].setMap(null);
      this.polylines.splice(i, 1);

      GMaps.fire('polyline_removed', polyline, this);

      break;
    }
  }
};

GMaps.prototype.removePolylines = function() {
  for (var i = 0, item; item = this.polylines[i]; i++) {
    item.setMap(null);
  }

  this.polylines = [];
};

GMaps.prototype.drawCircle = function(options) {
  options =  extend_object({
    map: this.map,
    center: new google.maps.LatLng(options.lat, options.lng)
  }, options);

  delete options.lat;
  delete options.lng;

  var polygon = new google.maps.Circle(options),
      polygon_events = ['click', 'dblclick', 'mousedown', 'mousemove', 'mouseout', 'mouseover', 'mouseup', 'rightclick'];

  for (var ev = 0; ev < polygon_events.length; ev++) {
    (function(object, name) {
      if (options[name]) {
        google.maps.event.addListener(object, name, function(e){
          options[name].apply(this, [e]);
        });
      }
    })(polygon, polygon_events[ev]);
  }

  this.polygons.push(polygon);

  return polygon;
};

GMaps.prototype.drawRectangle = function(options) {
  options = extend_object({
    map: this.map
  }, options);

  var latLngBounds = new google.maps.LatLngBounds(
    new google.maps.LatLng(options.bounds[0][0], options.bounds[0][1]),
    new google.maps.LatLng(options.bounds[1][0], options.bounds[1][1])
  );

  options.bounds = latLngBounds;

  var polygon = new google.maps.Rectangle(options),
      polygon_events = ['click', 'dblclick', 'mousedown', 'mousemove', 'mouseout', 'mouseover', 'mouseup', 'rightclick'];

  for (var ev = 0; ev < polygon_events.length; ev++) {
    (function(object, name) {
      if (options[name]) {
        google.maps.event.addListener(object, name, function(e){
          options[name].apply(this, [e]);
        });
      }
    })(polygon, polygon_events[ev]);
  }

  this.polygons.push(polygon);

  return polygon;
};

GMaps.prototype.drawPolygon = function(options) {
  var useGeoJSON = false;

  if(options.hasOwnProperty("useGeoJSON")) {
    useGeoJSON = options.useGeoJSON;
  }

  delete options.useGeoJSON;

  options = extend_object({
    map: this.map
  }, options);

  if (useGeoJSON == false) {
    options.paths = [options.paths.slice(0)];
  }

  if (options.paths.length > 0) {
    if (options.paths[0].length > 0) {
      options.paths = array_flat(array_map(options.paths, arrayToLatLng, useGeoJSON));
    }
  }

  var polygon = new google.maps.Polygon(options),
      polygon_events = ['click', 'dblclick', 'mousedown', 'mousemove', 'mouseout', 'mouseover', 'mouseup', 'rightclick'];

  for (var ev = 0; ev < polygon_events.length; ev++) {
    (function(object, name) {
      if (options[name]) {
        google.maps.event.addListener(object, name, function(e){
          options[name].apply(this, [e]);
        });
      }
    })(polygon, polygon_events[ev]);
  }

  this.polygons.push(polygon);

  GMaps.fire('polygon_added', polygon, this);

  return polygon;
};

GMaps.prototype.removePolygon = function(polygon) {
  for (var i = 0; i < this.polygons.length; i++) {
    if (this.polygons[i] === polygon) {
      this.polygons[i].setMap(null);
      this.polygons.splice(i, 1);

      GMaps.fire('polygon_removed', polygon, this);

      break;
    }
  }
};

GMaps.prototype.removePolygons = function() {
  for (var i = 0, item; item = this.polygons[i]; i++) {
    item.setMap(null);
  }

  this.polygons = [];
};

GMaps.prototype.getFromFusionTables = function(options) {
  var events = options.events;

  delete options.events;

  var fusion_tables_options = options,
      layer = new google.maps.FusionTablesLayer(fusion_tables_options);

  for (var ev in events) {
    (function(object, name) {
      google.maps.event.addListener(object, name, function(e) {
        events[name].apply(this, [e]);
      });
    })(layer, ev);
  }

  this.layers.push(layer);

  return layer;
};

GMaps.prototype.loadFromFusionTables = function(options) {
  var layer = this.getFromFusionTables(options);
  layer.setMap(this.map);

  return layer;
};

GMaps.prototype.getFromKML = function(options) {
  var url = options.url,
      events = options.events;

  delete options.url;
  delete options.events;

  var kml_options = options,
      layer = new google.maps.KmlLayer(url, kml_options);

  for (var ev in events) {
    (function(object, name) {
      google.maps.event.addListener(object, name, function(e) {
        events[name].apply(this, [e]);
      });
    })(layer, ev);
  }

  this.layers.push(layer);

  return layer;
};

GMaps.prototype.loadFromKML = function(options) {
  var layer = this.getFromKML(options);
  layer.setMap(this.map);

  return layer;
};

GMaps.prototype.addLayer = function(layerName, options) {
  //var default_layers = ['weather', 'clouds', 'traffic', 'transit', 'bicycling', 'panoramio', 'places'];
  options = options || {};
  var layer;

  switch(layerName) {
    case 'weather': this.singleLayers.weather = layer = new google.maps.weather.WeatherLayer();
      break;
    case 'clouds': this.singleLayers.clouds = layer = new google.maps.weather.CloudLayer();
      break;
    case 'traffic': this.singleLayers.traffic = layer = new google.maps.TrafficLayer();
      break;
    case 'transit': this.singleLayers.transit = layer = new google.maps.TransitLayer();
      break;
    case 'bicycling': this.singleLayers.bicycling = layer = new google.maps.BicyclingLayer();
      break;
    case 'panoramio':
        this.singleLayers.panoramio = layer = new google.maps.panoramio.PanoramioLayer();
        layer.setTag(options.filter);
        delete options.filter;

        //click event
        if (options.click) {
          google.maps.event.addListener(layer, 'click', function(event) {
            options.click(event);
            delete options.click;
          });
        }
      break;
      case 'places':
        this.singleLayers.places = layer = new google.maps.places.PlacesService(this.map);

        //search, nearbySearch, radarSearch callback, Both are the same
        if (options.search || options.nearbySearch || options.radarSearch) {
          var placeSearchRequest  = {
            bounds : options.bounds || null,
            keyword : options.keyword || null,
            location : options.location || null,
            name : options.name || null,
            radius : options.radius || null,
            rankBy : options.rankBy || null,
            types : options.types || null
          };

          if (options.radarSearch) {
            layer.radarSearch(placeSearchRequest, options.radarSearch);
          }

          if (options.search) {
            layer.search(placeSearchRequest, options.search);
          }

          if (options.nearbySearch) {
            layer.nearbySearch(placeSearchRequest, options.nearbySearch);
          }
        }

        //textSearch callback
        if (options.textSearch) {
          var textSearchRequest  = {
            bounds : options.bounds || null,
            location : options.location || null,
            query : options.query || null,
            radius : options.radius || null
          };

          layer.textSearch(textSearchRequest, options.textSearch);
        }
      break;
  }

  if (layer !== undefined) {
    if (typeof layer.setOptions == 'function') {
      layer.setOptions(options);
    }
    if (typeof layer.setMap == 'function') {
      layer.setMap(this.map);
    }

    return layer;
  }
};

GMaps.prototype.removeLayer = function(layer) {
  if (typeof(layer) == "string" && this.singleLayers[layer] !== undefined) {
     this.singleLayers[layer].setMap(null);

     delete this.singleLayers[layer];
  }
  else {
    for (var i = 0; i < this.layers.length; i++) {
      if (this.layers[i] === layer) {
        this.layers[i].setMap(null);
        this.layers.splice(i, 1);

        break;
      }
    }
  }
};

var travelMode, unitSystem;

GMaps.prototype.getRoutes = function(options) {
  switch (options.travelMode) {
    case 'bicycling':
      travelMode = google.maps.TravelMode.BICYCLING;
      break;
    case 'transit':
      travelMode = google.maps.TravelMode.TRANSIT;
      break;
    case 'driving':
      travelMode = google.maps.TravelMode.DRIVING;
      break;
    default:
      travelMode = google.maps.TravelMode.WALKING;
      break;
  }

  if (options.unitSystem === 'imperial') {
    unitSystem = google.maps.UnitSystem.IMPERIAL;
  }
  else {
    unitSystem = google.maps.UnitSystem.METRIC;
  }

  var base_options = {
        avoidHighways: false,
        avoidTolls: false,
        optimizeWaypoints: false,
        waypoints: []
      },
      request_options =  extend_object(base_options, options);

  request_options.origin = /string/.test(typeof options.origin) ? options.origin : new google.maps.LatLng(options.origin[0], options.origin[1]);
  request_options.destination = /string/.test(typeof options.destination) ? options.destination : new google.maps.LatLng(options.destination[0], options.destination[1]);
  request_options.travelMode = travelMode;
  request_options.unitSystem = unitSystem;

  delete request_options.callback;
  delete request_options.error;

  var self = this,
      routes = [],
      service = new google.maps.DirectionsService();

  service.route(request_options, function(result, status) {
    if (status === google.maps.DirectionsStatus.OK) {
      for (var r in result.routes) {
        if (result.routes.hasOwnProperty(r)) {
          routes.push(result.routes[r]);
        }
      }

      if (options.callback) {
        options.callback(routes, result, status);
      }
    }
    else {
      if (options.error) {
        options.error(result, status);
      }
    }
  });
};

GMaps.prototype.removeRoutes = function() {
  this.routes.length = 0;
};

GMaps.prototype.getElevations = function(options) {
  options = extend_object({
    locations: [],
    path : false,
    samples : 256
  }, options);

  if (options.locations.length > 0) {
    if (options.locations[0].length > 0) {
      options.locations = array_flat(array_map([options.locations], arrayToLatLng,  false));
    }
  }

  var callback = options.callback;
  delete options.callback;

  var service = new google.maps.ElevationService();

  //location request
  if (!options.path) {
    delete options.path;
    delete options.samples;

    service.getElevationForLocations(options, function(result, status) {
      if (callback && typeof(callback) === "function") {
        callback(result, status);
      }
    });
  //path request
  } else {
    var pathRequest = {
      path : options.locations,
      samples : options.samples
    };

    service.getElevationAlongPath(pathRequest, function(result, status) {
     if (callback && typeof(callback) === "function") {
        callback(result, status);
      }
    });
  }
};

GMaps.prototype.cleanRoute = GMaps.prototype.removePolylines;

GMaps.prototype.renderRoute = function(options, renderOptions) {
  var self = this,
      panel = ((typeof renderOptions.panel === 'string') ? document.getElementById(renderOptions.panel.replace('#', '')) : renderOptions.panel),
      display;

  renderOptions.panel = panel;
  renderOptions = extend_object({
    map: this.map
  }, renderOptions);
  display = new google.maps.DirectionsRenderer(renderOptions);

  this.getRoutes({
    origin: options.origin,
    destination: options.destination,
    travelMode: options.travelMode,
    waypoints: options.waypoints,
    unitSystem: options.unitSystem,
    error: options.error,
    avoidHighways: options.avoidHighways,
    avoidTolls: options.avoidTolls,
    optimizeWaypoints: options.optimizeWaypoints,
    callback: function(routes, response, status) {
      if (status === google.maps.DirectionsStatus.OK) {
        display.setDirections(response);
      }
    }
  });
};

GMaps.prototype.drawRoute = function(options) {
  var self = this;

  this.getRoutes({
    origin: options.origin,
    destination: options.destination,
    travelMode: options.travelMode,
    waypoints: options.waypoints,
    unitSystem: options.unitSystem,
    error: options.error,
    avoidHighways: options.avoidHighways,
    avoidTolls: options.avoidTolls,
    optimizeWaypoints: options.optimizeWaypoints,
    callback: function(routes) {
      if (routes.length > 0) {
        var polyline_options = {
          path: routes[routes.length - 1].overview_path,
          strokeColor: options.strokeColor,
          strokeOpacity: options.strokeOpacity,
          strokeWeight: options.strokeWeight
        };

        if (options.hasOwnProperty("icons")) {
          polyline_options.icons = options.icons;
        }

        self.drawPolyline(polyline_options);

        if (options.callback) {
          options.callback(routes[routes.length - 1]);
        }
      }
    }
  });
};

GMaps.prototype.travelRoute = function(options) {
  if (options.origin && options.destination) {
    this.getRoutes({
      origin: options.origin,
      destination: options.destination,
      travelMode: options.travelMode,
      waypoints : options.waypoints,
      unitSystem: options.unitSystem,
      error: options.error,
      callback: function(e) {
        //start callback
        if (e.length > 0 && options.start) {
          options.start(e[e.length - 1]);
        }

        //step callback
        if (e.length > 0 && options.step) {
          var route = e[e.length - 1];
          if (route.legs.length > 0) {
            var steps = route.legs[0].steps;
            for (var i = 0, step; step = steps[i]; i++) {
              step.step_number = i;
              options.step(step, (route.legs[0].steps.length - 1));
            }
          }
        }

        //end callback
        if (e.length > 0 && options.end) {
           options.end(e[e.length - 1]);
        }
      }
    });
  }
  else if (options.route) {
    if (options.route.legs.length > 0) {
      var steps = options.route.legs[0].steps;
      for (var i = 0, step; step = steps[i]; i++) {
        step.step_number = i;
        options.step(step);
      }
    }
  }
};

GMaps.prototype.drawSteppedRoute = function(options) {
  var self = this;

  if (options.origin && options.destination) {
    this.getRoutes({
      origin: options.origin,
      destination: options.destination,
      travelMode: options.travelMode,
      waypoints : options.waypoints,
      error: options.error,
      callback: function(e) {
        //start callback
        if (e.length > 0 && options.start) {
          options.start(e[e.length - 1]);
        }

        //step callback
        if (e.length > 0 && options.step) {
          var route = e[e.length - 1];
          if (route.legs.length > 0) {
            var steps = route.legs[0].steps;
            for (var i = 0, step; step = steps[i]; i++) {
              step.step_number = i;
              var polyline_options = {
                path: step.path,
                strokeColor: options.strokeColor,
                strokeOpacity: options.strokeOpacity,
                strokeWeight: options.strokeWeight
              };

              if (options.hasOwnProperty("icons")) {
                polyline_options.icons = options.icons;
              }

              self.drawPolyline(polyline_options);
              options.step(step, (route.legs[0].steps.length - 1));
            }
          }
        }

        //end callback
        if (e.length > 0 && options.end) {
           options.end(e[e.length - 1]);
        }
      }
    });
  }
  else if (options.route) {
    if (options.route.legs.length > 0) {
      var steps = options.route.legs[0].steps;
      for (var i = 0, step; step = steps[i]; i++) {
        step.step_number = i;
        var polyline_options = {
          path: step.path,
          strokeColor: options.strokeColor,
          strokeOpacity: options.strokeOpacity,
          strokeWeight: options.strokeWeight
        };

        if (options.hasOwnProperty("icons")) {
          polyline_options.icons = options.icons;
        }

        self.drawPolyline(polyline_options);
        options.step(step);
      }
    }
  }
};

GMaps.Route = function(options) {
  this.origin = options.origin;
  this.destination = options.destination;
  this.waypoints = options.waypoints;

  this.map = options.map;
  this.route = options.route;
  this.step_count = 0;
  this.steps = this.route.legs[0].steps;
  this.steps_length = this.steps.length;

  var polyline_options = {
    path: new google.maps.MVCArray(),
    strokeColor: options.strokeColor,
    strokeOpacity: options.strokeOpacity,
    strokeWeight: options.strokeWeight
  };

  if (options.hasOwnProperty("icons")) {
    polyline_options.icons = options.icons;
  }

  this.polyline = this.map.drawPolyline(polyline_options).getPath();
};

GMaps.Route.prototype.getRoute = function(options) {
  var self = this;

  this.map.getRoutes({
    origin : this.origin,
    destination : this.destination,
    travelMode : options.travelMode,
    waypoints : this.waypoints || [],
    error: options.error,
    callback : function() {
      self.route = e[0];

      if (options.callback) {
        options.callback.call(self);
      }
    }
  });
};

GMaps.Route.prototype.back = function() {
  if (this.step_count > 0) {
    this.step_count--;
    var path = this.route.legs[0].steps[this.step_count].path;

    for (var p in path){
      if (path.hasOwnProperty(p)){
        this.polyline.pop();
      }
    }
  }
};

GMaps.Route.prototype.forward = function() {
  if (this.step_count < this.steps_length) {
    var path = this.route.legs[0].steps[this.step_count].path;

    for (var p in path){
      if (path.hasOwnProperty(p)){
        this.polyline.push(path[p]);
      }
    }
    this.step_count++;
  }
};

GMaps.prototype.checkGeofence = function(lat, lng, fence) {
  return fence.containsLatLng(new google.maps.LatLng(lat, lng));
};

GMaps.prototype.checkMarkerGeofence = function(marker, outside_callback) {
  if (marker.fences) {
    for (var i = 0, fence; fence = marker.fences[i]; i++) {
      var pos = marker.getPosition();
      if (!this.checkGeofence(pos.lat(), pos.lng(), fence)) {
        outside_callback(marker, fence);
      }
    }
  }
};

GMaps.prototype.toImage = function(options) {
  var options = options || {},
      static_map_options = {};

  static_map_options['size'] = options['size'] || [this.el.clientWidth, this.el.clientHeight];
  static_map_options['lat'] = this.getCenter().lat();
  static_map_options['lng'] = this.getCenter().lng();

  if (this.markers.length > 0) {
    static_map_options['markers'] = [];
    
    for (var i = 0; i < this.markers.length; i++) {
      static_map_options['markers'].push({
        lat: this.markers[i].getPosition().lat(),
        lng: this.markers[i].getPosition().lng()
      });
    }
  }

  if (this.polylines.length > 0) {
    var polyline = this.polylines[0];
    
    static_map_options['polyline'] = {};
    static_map_options['polyline']['path'] = google.maps.geometry.encoding.encodePath(polyline.getPath());
    static_map_options['polyline']['strokeColor'] = polyline.strokeColor
    static_map_options['polyline']['strokeOpacity'] = polyline.strokeOpacity
    static_map_options['polyline']['strokeWeight'] = polyline.strokeWeight
  }

  return GMaps.staticMapURL(static_map_options);
};

GMaps.staticMapURL = function(options){
  var parameters = [],
      data,
      static_root = (location.protocol === 'file:' ? 'http:' : location.protocol ) + '//maps.googleapis.com/maps/api/staticmap';

  if (options.url) {
    static_root = options.url;
    delete options.url;
  }

  static_root += '?';

  var markers = options.markers;
  
  delete options.markers;

  if (!markers && options.marker) {
    markers = [options.marker];
    delete options.marker;
  }

  var styles = options.styles;

  delete options.styles;

  var polyline = options.polyline;
  delete options.polyline;

  /** Map options **/
  if (options.center) {
    parameters.push('center=' + options.center);
    delete options.center;
  }
  else if (options.address) {
    parameters.push('center=' + options.address);
    delete options.address;
  }
  else if (options.lat) {
    parameters.push(['center=', options.lat, ',', options.lng].join(''));
    delete options.lat;
    delete options.lng;
  }
  else if (options.visible) {
    var visible = encodeURI(options.visible.join('|'));
    parameters.push('visible=' + visible);
  }

  var size = options.size;
  if (size) {
    if (size.join) {
      size = size.join('x');
    }
    delete options.size;
  }
  else {
    size = '630x300';
  }
  parameters.push('size=' + size);

  if (!options.zoom && options.zoom !== false) {
    options.zoom = 15;
  }

  var sensor = options.hasOwnProperty('sensor') ? !!options.sensor : true;
  delete options.sensor;
  parameters.push('sensor=' + sensor);

  for (var param in options) {
    if (options.hasOwnProperty(param)) {
      parameters.push(param + '=' + options[param]);
    }
  }

  /** Markers **/
  if (markers) {
    var marker, loc;

    for (var i = 0; data = markers[i]; i++) {
      marker = [];

      if (data.size && data.size !== 'normal') {
        marker.push('size:' + data.size);
        delete data.size;
      }
      else if (data.icon) {
        marker.push('icon:' + encodeURI(data.icon));
        delete data.icon;
      }

      if (data.color) {
        marker.push('color:' + data.color.replace('#', '0x'));
        delete data.color;
      }

      if (data.label) {
        marker.push('label:' + data.label[0].toUpperCase());
        delete data.label;
      }

      loc = (data.address ? data.address : data.lat + ',' + data.lng);
      delete data.address;
      delete data.lat;
      delete data.lng;

      for(var param in data){
        if (data.hasOwnProperty(param)) {
          marker.push(param + ':' + data[param]);
        }
      }

      if (marker.length || i === 0) {
        marker.push(loc);
        marker = marker.join('|');
        parameters.push('markers=' + encodeURI(marker));
      }
      // New marker without styles
      else {
        marker = parameters.pop() + encodeURI('|' + loc);
        parameters.push(marker);
      }
    }
  }

  /** Map Styles **/
  if (styles) {
    for (var i = 0; i < styles.length; i++) {
      var styleRule = [];
      if (styles[i].featureType){
        styleRule.push('feature:' + styles[i].featureType.toLowerCase());
      }

      if (styles[i].elementType) {
        styleRule.push('element:' + styles[i].elementType.toLowerCase());
      }

      for (var j = 0; j < styles[i].stylers.length; j++) {
        for (var p in styles[i].stylers[j]) {
          var ruleArg = styles[i].stylers[j][p];
          if (p == 'hue' || p == 'color') {
            ruleArg = '0x' + ruleArg.substring(1);
          }
          styleRule.push(p + ':' + ruleArg);
        }
      }

      var rule = styleRule.join('|');
      if (rule != '') {
        parameters.push('style=' + rule);
      }
    }
  }

  /** Polylines **/
  function parseColor(color, opacity) {
    if (color[0] === '#'){
      color = color.replace('#', '0x');

      if (opacity) {
        opacity = parseFloat(opacity);
        opacity = Math.min(1, Math.max(opacity, 0));
        if (opacity === 0) {
          return '0x00000000';
        }
        opacity = (opacity * 255).toString(16);
        if (opacity.length === 1) {
          opacity += opacity;
        }

        color = color.slice(0,8) + opacity;
      }
    }
    return color;
  }

  if (polyline) {
    data = polyline;
    polyline = [];

    if (data.strokeWeight) {
      polyline.push('weight:' + parseInt(data.strokeWeight, 10));
    }

    if (data.strokeColor) {
      var color = parseColor(data.strokeColor, data.strokeOpacity);
      polyline.push('color:' + color);
    }

    if (data.fillColor) {
      var fillcolor = parseColor(data.fillColor, data.fillOpacity);
      polyline.push('fillcolor:' + fillcolor);
    }

    var path = data.path;
    if (path.join) {
      for (var j=0, pos; pos=path[j]; j++) {
        polyline.push(pos.join(','));
      }
    }
    else {
      polyline.push('enc:' + path);
    }

    polyline = polyline.join('|');
    parameters.push('path=' + encodeURI(polyline));
  }

  /** Retina support **/
  var dpi = window.devicePixelRatio || 1;
  parameters.push('scale=' + dpi);

  parameters = parameters.join('&');
  return static_root + parameters;
};

GMaps.prototype.addMapType = function(mapTypeId, options) {
  if (options.hasOwnProperty("getTileUrl") && typeof(options["getTileUrl"]) == "function") {
    options.tileSize = options.tileSize || new google.maps.Size(256, 256);

    var mapType = new google.maps.ImageMapType(options);

    this.map.mapTypes.set(mapTypeId, mapType);
  }
  else {
    throw "'getTileUrl' function required.";
  }
};

GMaps.prototype.addOverlayMapType = function(options) {
  if (options.hasOwnProperty("getTile") && typeof(options["getTile"]) == "function") {
    var overlayMapTypeIndex = options.index;

    delete options.index;

    this.map.overlayMapTypes.insertAt(overlayMapTypeIndex, options);
  }
  else {
    throw "'getTile' function required.";
  }
};

GMaps.prototype.removeOverlayMapType = function(overlayMapTypeIndex) {
  this.map.overlayMapTypes.removeAt(overlayMapTypeIndex);
};

GMaps.prototype.addStyle = function(options) {
  var styledMapType = new google.maps.StyledMapType(options.styles, { name: options.styledMapName });

  this.map.mapTypes.set(options.mapTypeId, styledMapType);
};

GMaps.prototype.setStyle = function(mapTypeId) {
  this.map.setMapTypeId(mapTypeId);
};

GMaps.prototype.createPanorama = function(streetview_options) {
  if (!streetview_options.hasOwnProperty('lat') || !streetview_options.hasOwnProperty('lng')) {
    streetview_options.lat = this.getCenter().lat();
    streetview_options.lng = this.getCenter().lng();
  }

  this.panorama = GMaps.createPanorama(streetview_options);

  this.map.setStreetView(this.panorama);

  return this.panorama;
};

GMaps.createPanorama = function(options) {
  var el = getElementById(options.el, options.context);

  options.position = new google.maps.LatLng(options.lat, options.lng);

  delete options.el;
  delete options.context;
  delete options.lat;
  delete options.lng;

  var streetview_events = ['closeclick', 'links_changed', 'pano_changed', 'position_changed', 'pov_changed', 'resize', 'visible_changed'],
      streetview_options = extend_object({visible : true}, options);

  for (var i = 0; i < streetview_events.length; i++) {
    delete streetview_options[streetview_events[i]];
  }

  var panorama = new google.maps.StreetViewPanorama(el, streetview_options);

  for (var i = 0; i < streetview_events.length; i++) {
    (function(object, name) {
      if (options[name]) {
        google.maps.event.addListener(object, name, function(){
          options[name].apply(this);
        });
      }
    })(panorama, streetview_events[i]);
  }

  return panorama;
};

GMaps.prototype.on = function(event_name, handler) {
  return GMaps.on(event_name, this, handler);
};

GMaps.prototype.off = function(event_name) {
  GMaps.off(event_name, this);
};

GMaps.prototype.once = function(event_name, handler) {
  return GMaps.once(event_name, this, handler);
};

GMaps.custom_events = ['marker_added', 'marker_removed', 'polyline_added', 'polyline_removed', 'polygon_added', 'polygon_removed', 'geolocated', 'geolocation_failed'];

GMaps.on = function(event_name, object, handler) {
  if (GMaps.custom_events.indexOf(event_name) == -1) {
    if(object instanceof GMaps) object = object.map; 
    return google.maps.event.addListener(object, event_name, handler);
  }
  else {
    var registered_event = {
      handler : handler,
      eventName : event_name
    };

    object.registered_events[event_name] = object.registered_events[event_name] || [];
    object.registered_events[event_name].push(registered_event);

    return registered_event;
  }
};

GMaps.off = function(event_name, object) {
  if (GMaps.custom_events.indexOf(event_name) == -1) {
    if(object instanceof GMaps) object = object.map; 
    google.maps.event.clearListeners(object, event_name);
  }
  else {
    object.registered_events[event_name] = [];
  }
};

GMaps.once = function(event_name, object, handler) {
  if (GMaps.custom_events.indexOf(event_name) == -1) {
    if(object instanceof GMaps) object = object.map;
    return google.maps.event.addListenerOnce(object, event_name, handler);
  }
};

GMaps.fire = function(event_name, object, scope) {
  if (GMaps.custom_events.indexOf(event_name) == -1) {
    google.maps.event.trigger(object, event_name, Array.prototype.slice.apply(arguments).slice(2));
  }
  else {
    if(event_name in scope.registered_events) {
      var firing_events = scope.registered_events[event_name];

      for(var i = 0; i < firing_events.length; i++) {
        (function(handler, scope, object) {
          handler.apply(scope, [object]);
        })(firing_events[i]['handler'], scope, object);
      }
    }
  }
};

GMaps.geolocate = function(options) {
  var complete_callback = options.always || options.complete;

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      options.success(position);

      if (complete_callback) {
        complete_callback();
      }
    }, function(error) {
      options.error(error);

      if (complete_callback) {
        complete_callback();
      }
    }, options.options);
  }
  else {
    options.not_supported();

    if (complete_callback) {
      complete_callback();
    }
  }
};

GMaps.geocode = function(options) {
  this.geocoder = new google.maps.Geocoder();
  var callback = options.callback;
  if (options.hasOwnProperty('lat') && options.hasOwnProperty('lng')) {
    options.latLng = new google.maps.LatLng(options.lat, options.lng);
  }

  delete options.lat;
  delete options.lng;
  delete options.callback;
  
  this.geocoder.geocode(options, function(results, status) {
    callback(results, status);
  });
};

if (typeof window.google === 'object' && window.google.maps) {
  //==========================
  // Polygon containsLatLng
  // https://github.com/tparkin/Google-Maps-Point-in-Polygon
  // Poygon getBounds extension - google-maps-extensions
  // http://code.google.com/p/google-maps-extensions/source/browse/google.maps.Polygon.getBounds.js
  if (!google.maps.Polygon.prototype.getBounds) {
    google.maps.Polygon.prototype.getBounds = function(latLng) {
      var bounds = new google.maps.LatLngBounds();
      var paths = this.getPaths();
      var path;

      for (var p = 0; p < paths.getLength(); p++) {
        path = paths.getAt(p);
        for (var i = 0; i < path.getLength(); i++) {
          bounds.extend(path.getAt(i));
        }
      }

      return bounds;
    };
  }

  if (!google.maps.Polygon.prototype.containsLatLng) {
    // Polygon containsLatLng - method to determine if a latLng is within a polygon
    google.maps.Polygon.prototype.containsLatLng = function(latLng) {
      // Exclude points outside of bounds as there is no way they are in the poly
      var bounds = this.getBounds();

      if (bounds !== null && !bounds.contains(latLng)) {
        return false;
      }

      // Raycast point in polygon method
      var inPoly = false;

      var numPaths = this.getPaths().getLength();
      for (var p = 0; p < numPaths; p++) {
        var path = this.getPaths().getAt(p);
        var numPoints = path.getLength();
        var j = numPoints - 1;

        for (var i = 0; i < numPoints; i++) {
          var vertex1 = path.getAt(i);
          var vertex2 = path.getAt(j);

          if (vertex1.lng() < latLng.lng() && vertex2.lng() >= latLng.lng() || vertex2.lng() < latLng.lng() && vertex1.lng() >= latLng.lng()) {
            if (vertex1.lat() + (latLng.lng() - vertex1.lng()) / (vertex2.lng() - vertex1.lng()) * (vertex2.lat() - vertex1.lat()) < latLng.lat()) {
              inPoly = !inPoly;
            }
          }

          j = i;
        }
      }

      return inPoly;
    };
  }

  if (!google.maps.Circle.prototype.containsLatLng) {
    google.maps.Circle.prototype.containsLatLng = function(latLng) {
      if (google.maps.geometry) {
        return google.maps.geometry.spherical.computeDistanceBetween(this.getCenter(), latLng) <= this.getRadius();
      }
      else {
        return true;
      }
    };
  }

  google.maps.Rectangle.prototype.containsLatLng = function(latLng) {
    return this.getBounds().contains(latLng);
  };

  google.maps.LatLngBounds.prototype.containsLatLng = function(latLng) {
    return this.contains(latLng);
  };

  google.maps.Marker.prototype.setFences = function(fences) {
    this.fences = fences;
  };

  google.maps.Marker.prototype.addFence = function(fence) {
    this.fences.push(fence);
  };

  google.maps.Marker.prototype.getId = function() {
    return this['__gm_id'];
  };
}

//==========================
// Array indexOf
// https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Array/indexOf
if (!Array.prototype.indexOf) {
  Array.prototype.indexOf = function (searchElement /*, fromIndex */ ) {
      "use strict";
      if (this == null) {
          throw new TypeError();
      }
      var t = Object(this);
      var len = t.length >>> 0;
      if (len === 0) {
          return -1;
      }
      var n = 0;
      if (arguments.length > 1) {
          n = Number(arguments[1]);
          if (n != n) { // shortcut for verifying if it's NaN
              n = 0;
          } else if (n != 0 && n != Infinity && n != -Infinity) {
              n = (n > 0 || -1) * Math.floor(Math.abs(n));
          }
      }
      if (n >= len) {
          return -1;
      }
      var k = n >= 0 ? n : Math.max(len - Math.abs(n), 0);
      for (; k < len; k++) {
          if (k in t && t[k] === searchElement) {
              return k;
          }
      }
      return -1;
  }
}

return GMaps;
}));