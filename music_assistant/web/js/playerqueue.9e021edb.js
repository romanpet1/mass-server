(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["playerqueue"],{b097:function(e,t,i){"use strict";i.r(t);var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("section",[i("v-tabs",{attrs:{grow:"","show-arrows":""},model:{value:e.activeTab,callback:function(t){e.activeTab=t},expression:"activeTab"}},[i("v-tab",[e._v(" "+e._s(e.$t("queue_next_tracks")+" ("+e.next_items.length+")"))]),i("v-tab-item",[i("v-list",{attrs:{"two-line":""}},[i("RecycleScroller",{staticClass:"scroller",attrs:{items:e.next_items,"item-size":72,"key-field":"queue_item_id","page-mode":""},scopedSlots:e._u([{key:"default",fn:function(t){var s=t.item;return[i("ListviewItem",{attrs:{item:s,hideavatar:3==s.media_type&&e.$store.isMobile,hidetracknum:!0,hideproviders:e.$store.isMobile,hidelibrary:e.$store.isMobile,hidemenu:e.$store.isMobile,onclickHandler:e.itemClicked}})]}}])})],1)],1),i("v-tab",[e._v(" "+e._s(e.$t("queue_previous_tracks")+" ("+e.previous_items.length+")"))]),i("v-tab-item",[i("v-list",{attrs:{"two-line":""}},[i("RecycleScroller",{staticClass:"scroller",attrs:{items:e.previous_items,"item-size":72,"key-field":"queue_item_id","page-mode":""},scopedSlots:e._u([{key:"default",fn:function(t){var s=t.item;return[i("ListviewItem",{attrs:{item:s,hideavatar:3==s.media_type&&e.$store.isMobile,hidetracknum:!0,hideproviders:e.$store.isMobile,hidelibrary:e.$store.isMobile,hidemenu:e.$store.isMobile,onclickHandler:e.itemClicked}})]}}])})],1)],1),i("v-menu",{attrs:{"offset-y":""},scopedSlots:e._u([{key:"activator",fn:function(t){var s=t.on;return[e.$store.isMobile?e._e():i("v-btn",e._g({staticClass:"align-self-center mr-4",attrs:{text:""}},s),[e._v(" "+e._s(e.$t("queue_options"))+" "),i("v-icon",{attrs:{right:""}},[e._v("arrow_drop_down")])],1),e.$store.isMobile?i("v-btn",e._g({staticClass:"align-self-center mr-4",attrs:{icon:""}},s),[i("v-icon",[e._v("settings")])],1):e._e()]}}])},[i("v-list",[i("v-list-item",{on:{click:function(t){return e.sendQueueCommand("repeat_enabled",!e.playerQueueDetails.repeat_enabled)}}},[i("v-list-item-icon",[i("v-icon",{domProps:{textContent:e._s("repeat")}})],1),i("v-list-item-content",[i("v-list-item-title",{domProps:{textContent:e._s(e.playerQueueDetails.repeat_enabled?e.$t("disable_repeat"):e.$t("enable_repeat"))}})],1)],1),i("v-list-item",{on:{click:function(t){return e.sendQueueCommand("shuffle_enabled",!e.playerQueueDetails.shuffle_enabled)}}},[i("v-list-item-icon",[i("v-icon",{domProps:{textContent:e._s("shuffle")}})],1),i("v-list-item-content",[i("v-list-item-title",{domProps:{textContent:e._s(e.playerQueueDetails.shuffle_enabled?e.$t("disable_shuffle"):e.$t("enable_shuffle"))}})],1)],1),i("v-list-item",{on:{click:function(t){return e.sendQueueCommand("clear")}}},[i("v-list-item-icon",[i("v-icon",{domProps:{textContent:e._s("clear")}})],1),i("v-list-item-content",[i("v-list-item-title",{domProps:{textContent:e._s(e.$t("queue_clear"))}})],1)],1)],1)],1)],1),i("v-dialog",{attrs:{"max-width":"500px"},model:{value:e.showPlayMenu,callback:function(t){e.showPlayMenu=t},expression:"showPlayMenu"}},[i("v-card",[i("v-subheader",{staticClass:"title"},[e._v(e._s(e.selectedItem.name))]),i("v-list",[i("v-list-item",{on:{click:function(t){return e.sendQueueCommand("index",e.selectedItem.queue_item_id)}}},[i("v-list-item-icon",[i("v-icon",{domProps:{textContent:e._s("play_circle_outline")}})],1),i("v-list-item-content",[i("v-list-item-title",{domProps:{textContent:e._s(e.$t("play_now"))}})],1)],1),i("v-list-item",{on:{click:function(t){return e.sendQueueCommand("next",e.selectedItem.queue_item_id)}}},[i("v-list-item-icon",[i("v-icon",{domProps:{textContent:e._s("queue_play_next")}})],1),i("v-list-item-content",[i("v-list-item-title",{domProps:{textContent:e._s(e.$t("play_next"))}})],1)],1),i("v-list-item",{on:{click:function(t){return e.sendQueueCommand("move_up",e.selectedItem.queue_item_id)}}},[i("v-list-item-icon",[i("v-icon",{domProps:{textContent:e._s("arrow_upward")}})],1),i("v-list-item-content",[i("v-list-item-title",{domProps:{textContent:e._s(e.$t("queue_move_up"))}})],1)],1),i("v-list-item",{on:{click:function(t){return e.sendQueueCommand("move_down",e.selectedItem.queue_item_id)}}},[i("v-list-item-icon",[i("v-icon",{domProps:{textContent:e._s("arrow_downward")}})],1),i("v-list-item-content",[i("v-list-item-title",{domProps:{textContent:e._s(e.$t("queue_move_down"))}})],1)],1)],1)],1)],1)],1)},n=[],r=(i("fb6a"),i("4fad"),i("3835")),a=(i("96cf"),i("1da1")),o=i("2b0e"),l=i("d3cc"),u={components:{ListviewItem:l["a"]},props:{},data:function(){return{items:[],activeTab:0,playerQueueDetails:{},showPlayMenu:!1,selectedItem:{}}},computed:{next_items:function(){return this.playerQueueDetails?this.items.slice(this.playerQueueDetails.cur_index):[]},previous_items:function(){return this.playerQueueDetails&&this.$server.activePlayer?this.items.slice(0,this.playerQueueDetails.cur_index):[]}},created:function(){this.$store.windowtitle=this.$t("queue"),this.$server.$on("queue updated",this.onQueueDetailsEvent),this.$server.$on("queue items updated",this.onQueueItemsEvent),this.$server.$on("new player selected",this.activePlayerChanged),this.$server.activePlayerId&&this.activePlayerChanged()},methods:{itemClicked:function(e){this.selectedItem=e,this.showPlayMenu=!this.showPlayMenu},activePlayerChanged:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){var i,s,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return i=e.$server.players[e.$server.activePlayerId].active_queue,s="players/"+i+"/queue",t.next=4,e.$server.getData(s);case 4:return n=t.sent,t.next=7,e.onQueueDetailsEvent(n);case 7:return t.next=9,e.onQueueItemsEvent(n);case 9:case"end":return t.stop()}}),t)})))()},onQueueDetailsEvent:function(e){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function i(){var s,n,a,l,u,c;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:if(s=t.$server.players[t.$server.activePlayerId].active_queue,e.player_id===s)for(n=0,a=Object.entries(e);n<a.length;n++)l=Object(r["a"])(a[n],2),u=l[0],c=l[1],o["a"].set(t.playerQueueDetails,u,c);case 2:case"end":return i.stop()}}),i)})))()},onQueueItemsEvent:function(e){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function i(){var s,n;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:if(s=t.$server.players[t.$server.activePlayerId].active_queue,e.player_id!==s){i.next=5;break}return n="players/"+e.player_id+"/queue/items",i.next=5,t.$server.getAllItems(n,t.items);case 5:case"end":return i.stop()}}),i)})))()},sendQueueCommand:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=this.$server.players[this.$server.activePlayerId].active_queue,s="players/"+i+"/queue/"+e;this.$server.putData(s,t)}}},c=u,m=i("2877"),d=i("6544"),v=i.n(d),_=i("8336"),p=i("b0af"),h=i("169a"),f=i("132d"),b=i("8860"),y=i("da13"),$=i("5d23"),w=i("34c3"),x=i("e449"),C=i("e0c7"),k=i("71a3"),P=i("c671"),g=i("fe57"),I=Object(m["a"])(c,s,n,!1,null,null,null);t["default"]=I.exports;v()(I,{VBtn:_["a"],VCard:p["a"],VDialog:h["a"],VIcon:f["a"],VList:b["a"],VListItem:y["a"],VListItemContent:$["a"],VListItemIcon:w["a"],VListItemTitle:$["c"],VMenu:x["a"],VSubheader:C["a"],VTab:k["a"],VTabItem:P["a"],VTabs:g["a"]})}}]);
//# sourceMappingURL=playerqueue.9e021edb.js.map