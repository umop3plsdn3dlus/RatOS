"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[7951],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return c}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),p=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),s=p(a),c=r,h=s["".concat(u,".").concat(c)]||s[c]||m[c]||l;return a?n.createElement(h,i(i({ref:t},d),{},{components:a})):n.createElement(h,i({ref:t},d))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=s;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},3287:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return d},default:function(){return s}});var n=a(3117),r=a(102),l=(a(7294),a(3905)),i=["components"],o={},u="Configuring RatOS Macros",p={unversionedId:"configuration/macros",id:"configuration/macros",title:"Configuring RatOS Macros",description:"RatOS comes with a bunch of flexible predefined macro's that can be customized via variables. In your printer.cfg at the bottom of the Macro's section, you'll notice this:",source:"@site/docs/configuration/macros.md",sourceDirName:"configuration",slug:"/configuration/macros",permalink:"/docs/configuration/macros",editUrl:"https://github.com/Rat-OS/RatOS/edit/master/site/docs/configuration/macros.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Includes & Overrides",permalink:"/docs/configuration/includes-and-overrides"},next:{title:"Connecting a 4028 fan",permalink:"/docs/guides/4028"}},d=[{value:"Relative Extrusion",id:"relative-extrusion",children:[],level:3},{value:"Preheat Extruder",id:"preheat-extruder",children:[],level:3},{value:"Bed Mesh Calibration",id:"bed-mesh-calibration",children:[],level:3},{value:"Nozzle Priming",id:"nozzle-priming",children:[],level:3},{value:"Parking",id:"parking",children:[],level:3},{value:"Speed",id:"speed",children:[],level:3},{value:"Skew profile",id:"skew-profile",children:[],level:3}],m={toc:d};function s(e){var t=e.components,a=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"configuring-ratos-macros"},"Configuring RatOS Macros"),(0,l.kt)("p",null,"RatOS comes with a bunch of flexible predefined macro's that can be customized via variables. In your printer.cfg at the bottom of the Macro's section, you'll notice this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-properties"},"### MACRO CONFIGURATION\n[gcode_macro RatOS]\n....\n")),(0,l.kt)("p",null,"This is a macro that serves as a place to store variables that all the RatOS macro's refer to when they're executed. Here's a list of the available variables and what they do."),(0,l.kt)("h3",{id:"relative-extrusion"},"Relative Extrusion"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Possible Values"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"variable_relative_extrusion"),(0,l.kt)("td",{parentName:"tr",align:null},"True / False"),(0,l.kt)("td",{parentName:"tr",align:null},"False")))),(0,l.kt)("p",null,"Controls which extrusion mode START_PRINT ends in. Which value you use here depends on your slicer configuration, in other words this variable should always correspond to the extrusion mode setting in your slicer. It is recommended to configure your slicer for relative extrusion and set this variable to True."),(0,l.kt)("h3",{id:"preheat-extruder"},"Preheat Extruder"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Possible Values"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"variable_preheat_extruder"),(0,l.kt)("td",{parentName:"tr",align:null},"True / False"),(0,l.kt)("td",{parentName:"tr",align:null},"True")))),(0,l.kt)("p",null,"Enables or disables preheating of the nozzle to 150 degrees during the START_PRINT macro. There are several benefits to preheating the nozzle."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Gives the bed additional time to diffuse the heat"),(0,l.kt)("li",{parentName:"ul"},"Softens plastic that may be stuck in the nozzle so it doesn't block your probe from triggering."),(0,l.kt)("li",{parentName:"ul"},"If using a non thermally compensated inductive probe, it makes the temperature and thus the offset of the probe more predictable and consistent.")),(0,l.kt)("h3",{id:"bed-mesh-calibration"},"Bed Mesh Calibration"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Possible Values"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"variable_calibrate_bed_mesh"),(0,l.kt)("td",{parentName:"tr",align:null},"True / False"),(0,l.kt)("td",{parentName:"tr",align:null},"True")))),(0,l.kt)("p",null,'Whether or not to calibrate a bed mesh before each print. If you prefer calibrating your bed mesh manually instead of on each print, you can disable it by setting this to False. With bed meshing disabled you must have a mesh saved under the "ratos" profile, use BED_MESH_CALIBRATE PROFILE=ratos and SAVE_CONFIG to calibrate and save a mesh.\nIf you want to implement additional mesh handling logic you can override the ',(0,l.kt)("inlineCode",{parentName:"p"},"_START_PRINT_BED_MESH")," macro in your printer.cfg ",(0,l.kt)("inlineCode",{parentName:"p"},"USER OVERRIDES")," section."),(0,l.kt)("h3",{id:"nozzle-priming"},"Nozzle Priming"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Possible Values"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"variable_nozzle_priming"),(0,l.kt)("td",{parentName:"tr",align:null},'"primeline" / "primeblob" / False'),(0,l.kt)("td",{parentName:"tr",align:null},'"primeline"')))),(0,l.kt)("p",null,'Whether or not to prime the nozzle during the START_PRINT macro. "primeline" will make START_PRINT draw a short line to prime the nozzle. "primeblob" will put a small blob at the edge of the bed that is intended to wrap around the nozzle, then lifts the toolhead out of it while extruding a small line, effective for cleaning the nozzle and it\'s easy to clean up.'),(0,l.kt)("h3",{id:"parking"},"Parking"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Possible Values"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"variable_start_print_park_in"),(0,l.kt)("td",{parentName:"tr",align:null},'"back" / "center" / "front"'),(0,l.kt)("td",{parentName:"tr",align:null},'"back"'),(0,l.kt)("td",{parentName:"tr",align:null},"Where to park the toolhead during final nozzle heating.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"variable_start_print_park_x"),(0,l.kt)("td",{parentName:"tr",align:null},"number / undefined"),(0,l.kt)("td",{parentName:"tr",align:null},"undefined"),(0,l.kt)("td",{parentName:"tr",align:null},"Custom X coordinate to park the toolhead during final nozzle heating.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"variable_start_print_park_z_height"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"50"),(0,l.kt)("td",{parentName:"tr",align:null},"The z height at which to park the toolhead during final nozzle heating.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"variable_end_print_park_in"),(0,l.kt)("td",{parentName:"tr",align:null},'"back" / "center" / "front"'),(0,l.kt)("td",{parentName:"tr",align:null},'"back"'),(0,l.kt)("td",{parentName:"tr",align:null},"Where to park the toolhead after ending or canceling a print.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"variable_end_print_park_x"),(0,l.kt)("td",{parentName:"tr",align:null},"number / undefined"),(0,l.kt)("td",{parentName:"tr",align:null},"undefined"),(0,l.kt)("td",{parentName:"tr",align:null},"Custom X coordinate to park the toolhead after ending or canceling a print.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"variable_pause_print_park_in"),(0,l.kt)("td",{parentName:"tr",align:null},'"back" / "center" / "front"'),(0,l.kt)("td",{parentName:"tr",align:null},'"back"'),(0,l.kt)("td",{parentName:"tr",align:null},"Where to park the toolhead when pausing a print.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"variable_pause_print_park_x"),(0,l.kt)("td",{parentName:"tr",align:null},"number / undefined"),(0,l.kt)("td",{parentName:"tr",align:null},"undefined"),(0,l.kt)("td",{parentName:"tr",align:null},"Custom X coordinate to park the toolhead when pausing a print.")))),(0,l.kt)("h3",{id:"speed"},"Speed"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Possible Values"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"variable_macro_travel_speed"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"300")))),(0,l.kt)("p",null,"Travel speed to use for gcode moves in RatOS Macro's in mm/s."),(0,l.kt)("h3",{id:"skew-profile"},"Skew profile"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Possible Values"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"variable_skew_profile"),(0,l.kt)("td",{parentName:"tr",align:null},"string or undefined"),(0,l.kt)("td",{parentName:"tr",align:null},'"my_skew_Profile"')))),(0,l.kt)("p",null,"Use this if you have calibrated and saved a skew profile that you want to load in the START_PRINT macro. To activate it, set the variable to the name of your saved skew profile."))}s.isMDXComponent=!0}}]);