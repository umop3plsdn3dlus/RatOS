"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[991],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),h=u(n),d=r,f=h["".concat(s,".").concat(d)]||h[d]||c[d]||a;return n?o.createElement(f,i(i({ref:t},p),{},{components:n})):o.createElement(f,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},7832:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return p},default:function(){return h}});var o=n(3117),r=n(102),a=(n(7294),n(3905)),i=["components"],l={},s="Connecting a 4028 fan",u={unversionedId:"guides/4028",id:"guides/4028",title:"Connecting a 4028 fan",description:"4028 server fans are becoming a popular option for part cooling because of their light weight and great pressure and flow rates. In this guide we'll go over how to connect one and use it for part cooling. 4-pin fans usually aren't used in 3d printers, and many boards only provide 2-pin ports, but fear not! There's always a way.",source:"@site/docs/guides/4028.md",sourceDirName:"guides",slug:"/guides/4028",permalink:"/docs/guides/4028",editUrl:"https://github.com/Rat-OS/RatOS/edit/master/site/docs/guides/4028.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Configuring RatOS Macros",permalink:"/docs/configuration/macros"}},p=[{value:"Power",id:"power",children:[],level:2},{value:"PWM",id:"pwm",children:[{value:"25KHZ PWM Signal",id:"25khz-pwm-signal",children:[],level:3},{value:"100HZ PWM Signal",id:"100hz-pwm-signal",children:[],level:3}],level:2},{value:"Tachometer",id:"tachometer",children:[],level:2},{value:"My fan runs at 100% until klipper boots",id:"my-fan-runs-at-100-until-klipper-boots",children:[],level:2},{value:"Bonus: What to look for in a 4028 fan?",id:"bonus-what-to-look-for-in-a-4028-fan",children:[],level:2}],c={toc:p};function h(e){var t=e.components,l=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"connecting-a-4028-fan"},"Connecting a 4028 fan"),(0,a.kt)("p",null,"4028 server fans are becoming a popular option for part cooling because of their light weight and great pressure and flow rates. In this guide we'll go over how to connect one and use it for part cooling. 4-pin fans usually aren't used in 3d printers, and many boards only provide 2-pin ports, but fear not! There's always a way."),(0,a.kt)("h2",{id:"power"},"Power"),(0,a.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Please read this carefully. You will fry your fan if you don't supply the correct voltage!"))),(0,a.kt)("p",null,"The black and the red pin are for power, you need to connect these to an always on source. Since most of these are 12v, you'll need a 12v source. Boards such as the octopus or the spider come with decent 12v rails on board so you can easily power your 4028 directly from the board via an always-on selectable voltage fan port. Simply connect the red wire to the positive terminal and the black to the negative of the always-on fan port. For other boards without a 12v option, you'll have to use a 12V PSU or a dc/dc converter. If you go that route, be sure to connect the grounds of your 24V PSU and the 12V PSU or dc/dc converter (usually dc/dc converters have the ground pins bridged, so no need to connect the grounds)."),(0,a.kt)("h2",{id:"pwm"},"PWM"),(0,a.kt)("p",null,"On Delta fans the blue wire is the PWM wire, on Sanyo's it's the brown wire. If you're unsure, refer to your fans datasheet. To control the 4028's the PWM wire is fed a 5V PWM signal from the board. An easy way to do this is to hook it up to the negative terminal of the part cooling fan port (refer to your boards wiring diagram). We need to invert the logic of the fan_part_cooling_pin to generate a PWM signal the fan can understand. You can do that with the following piece of configuration in your user overrides section."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-properties"},"[fan]\npin: !fan_part_cooling_pin\n")),(0,a.kt)("p",null,"The wiring would look like this on an Octopus board."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Octopus 4028 Wiring",src:n(3459).Z,width:"1170",height:"552"})),(0,a.kt)("p",null,"Further more, these fans usually want a 25khz PWM signal to function properly, although some work better with 100hz. Try both and test different fans speeds to find out what works best for your particular fan:"),(0,a.kt)("h3",{id:"25khz-pwm-signal"},"25KHZ PWM Signal"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-properties"},"[fan]\npin: !fan_part_cooling_pin\ncycle_time: 0.00004\n")),(0,a.kt)("h3",{id:"100hz-pwm-signal"},"100HZ PWM Signal"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-properties"},"[fan]\npin: !fan_part_cooling_pin\ncycle_time: 0.01\n")),(0,a.kt)("h2",{id:"tachometer"},"Tachometer"),(0,a.kt)("p",null,"The fourth pin is the tachometer pin, this pin is used to read the RPM of the fan, which, if configured, will be displayed next to the fan speed in Mainsail. You can use any available GPIO on your board for this, if you want, or just leave it disconnected. The following config will enable the tachometer read out:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-properties"},"[fan]\npin: !fan_part_cooling_pin\ncycle_time: 0.00004 # or 0.01\ntachometer_pin: ^PD14 # look up your boards pinout diagram to get the pin name for the pin you've chosen\ntachometer_poll_interval: 0.0005 # will support up to a 30.000 RPM fan with 2 pulses per rotation.\n")),(0,a.kt)("p",null,"Notice the ",(0,a.kt)("inlineCode",{parentName:"p"},"^")," in front of the pin name, this is a hardware pullup which is generally necessary to read the tachometer signal. For more information on tachometer configuration, refer to the ",(0,a.kt)("a",{parentName:"p",href:"https://www.klipper3d.org/Config_Reference.html?h=tachometer#fan"},"klipper configuration reference")),(0,a.kt)("h2",{id:"my-fan-runs-at-100-until-klipper-boots"},"My fan runs at 100% until klipper boots"),(0,a.kt)("p",null,"This is a safety feature of server fans, they will always run at 100% until they get a PWM signal. It's a bit annoying for 3d printer use, but there's a way around that. You can use the negative terminal of a spare heater port to only power the fan when the board is booted, by connecting the black wire (gnd) to the negative terminal of the heater port. Since these fans run high amperages, it's important that we use a pwm port backed by a properly rated mosfet, which is why the heater ports are perfect. Let's say we connect the gnd wire to the second heater of our board which is controlled by the pin ",(0,a.kt)("inlineCode",{parentName:"p"},"PA9")," (again, look up the correct pin in your boards pin diagram), the configuration would be the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-properties"},"[output_pin 4028_POWER]\npin: PA9\nvalue: 1\nshutdown_value: 0 # turn the fan power off on MCU shutdown.\n")),(0,a.kt)("p",null,"That's it! Enjoy using your 4028 for excellent part cooling :)"),(0,a.kt)("h2",{id:"bonus-what-to-look-for-in-a-4028-fan"},"Bonus: What to look for in a 4028 fan?"),(0,a.kt)("p",null,'Airflow (common units: cfm, m3/h) isn\'t everything, we want as much pressure we can get to effectively push the high airflow through our ducts, a good fan is balanced between airflow and pressure. Air pressure is usually expressed in inches of water (in. h2o) or pascals, there are online tools to convert between different units, so you can compare the fans before buying, just google "inches of water to pascal" or whatever units you need to convert.'),(0,a.kt)("p",null,"A good performing 4028 fan will have around 25-30 CFM and over 3 inches of water. For example the ",(0,a.kt)("inlineCode",{parentName:"p"},"Delta FFB0412UHN-SM36")," or the ",(0,a.kt)("inlineCode",{parentName:"p"},"Sanyo 9GAX0412P3S001"),". Take a look at the datasheet for the fan and make sure it runs at low PWM levels, you don't always want high output and it's important that the fan you choose supports low speeds as well as high speeds. Generally you want around a maximumum RPM of 20.000-25.000 to keep the rotor light, extremely fast fans such as the twice as powerful ",(0,a.kt)("inlineCode",{parentName:"p"},"Delta PFB0412EN-E")," needs a heavier rotor and is therefore slower to change speeds. Generally the ",(0,a.kt)("inlineCode",{parentName:"p"},"Sanyo 9GAX0412P3S001")," is regarded as the most well rounded 4028 fan currently, but they can be hard to get, so take a look around and see what you can find, there are many options out there."))}h.isMDXComponent=!0},3459:function(e,t,n){t.Z=n.p+"assets/images/4028-octopus-af9172c3ee0af63fb29b1feb77840cf6.png"}}]);