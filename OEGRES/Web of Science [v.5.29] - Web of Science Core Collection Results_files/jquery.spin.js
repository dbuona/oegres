(function(a){if(typeof exports=="object"){a(require("jquery"),require("spin"))}else{if(typeof define=="function"&&define.amd){define(["jquery","spin"],a)}else{if(!window.Spinner){throw new Error("Spin.js not present")}a(window.jQuery,window.Spinner)}}}(function(b,a){b.fn.spin=function(d,c){return this.each(function(){var f=b(this),e=f.data();if(e.spinner){e.spinner.stop();delete e.spinner}if(d!==false){d=b.extend({color:c||f.css("color")},b.fn.spin.presets[d]||d);e.spinner=new a(d).spin(this)}})};b.fn.spin.presets={tiny:{lines:8,length:2,width:2,radius:3},small:{lines:8,length:4,width:3,radius:5},large:{lines:10,length:8,width:4,radius:8}}}));