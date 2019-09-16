!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define("ReactBootstrap_Carousel",["react"],t):"object"==typeof exports?exports.ReactBootstrap_Carousel=t(require("react")):e.ReactBootstrap_Carousel=t(e.react)}(window,function(e){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(t,n){t.exports=e},function(e,t,n){e.exports=n(2)()},function(e,t,n){"use strict";var r=n(3);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,i,a){if(a!==r){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:o};return n.PropTypes=n,n}},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),i=n(1),a=n.n(i);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var d=function(e){function t(e){var n,r,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,o=l(t).call(this,e),n=!o||"object"!==c(o)&&"function"!=typeof o?s(r):o,p(s(n),"safeSetState",function(e){!n.isUnmount&&n.setState(e)}),n.isUnmounted=!1,n}var n,r,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,o.a.PureComponent),n=t,(r=[{key:"componentDidMount",value:function(){window.addEventListener("beforeunload",this.unmount),window.addEventListener("visibilitychange",this.visibilitychange),"function"==typeof this.init&&this.init()}},{key:"componentWillUnmount",value:function(){this.isUnmount=!0,"function"==typeof this.unmount&&this.unmount(),window.removeEventListener("beforeunload",this.unmount),window.removeEventListener("visibilitychange",this.visibilitychange)}},{key:"render",value:function(){return o.a.createElement("div",null,"The Base Component")}}])&&u(n.prototype,r),i&&u(n,i),t}();function y(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function m(e){var t=this,n=e.activeIndex,i=e.data,a=y(Object(r.useState)({css:"carousel-indicators"}),1)[0],c=Object(r.useCallback)(function(t){var r=n<t?"next":"prev";e.indClick(t,r)},[n]);if(!Array.isArray(i))return null;var u=i.map(function(e,r){var i=r==n?"active":"";return o.a.createElement("li",{key:r,onClick:c.bind(t,r),className:i,style:{marginLeft:10}})});return o.a.createElement("ol",{className:a.css},u)}p(d,"propTypes",{init:a.a.func,unmount:a.a.func}),m.defaultProps={data:[],activeIndex:0,indClick:function(){}};var v=o.a.memo(m);function h(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function b(e){var t=this,n=e.dataLength,i=e.version,a=e.rightIcon,c=e.leftIcon,u=h(Object(r.useState)({ver_4:{leftCss:"left carousel-control-prev",rightCss:"right carousel-control-next",leftIcon:o.a.createElement("i",{className:"icon icon-chevron-left"}),rightIcon:o.a.createElement("i",{className:"icon icon-chevron-right"})},ver_3:{leftCss:"left carousel-control",rightCss:"right carousel-control",leftIcon:o.a.createElement("i",{className:"glyphicon glyphicon-chevron-left"}),rightIcon:o.a.createElement("i",{className:"glyphicon glyphicon-chevron-right"})}}),1)[0],l=Object(r.useCallback)(function(t){return e.controlsClick(t)},[]),s=Object(r.useMemo)(function(){var e=c,n=a,r="",s="";switch(i){case 4:r=u.ver_4.leftCss,s=u.ver_4.rightCss,e=c||u.ver_4.leftIcon,n=a||u.ver_4.rightIcon;break;default:r=u.ver_3.leftCss,s=u.ver_3.rightCss,e=c||u.ver_3.leftIcon,n=a||u.ver_3.rightIcon}return o.a.createElement(o.a.Fragment,null,o.a.createElement("a",{className:r,onClick:l.bind(t,"prev")},o.a.createElement(g,{icon:e})),o.a.createElement("a",{className:s,onClick:l.bind(t,"next")},o.a.createElement(_,{icon:n})))},[i,c,a]);return n<2?null:o.a.createElement("div",null,s)}b.defaultProps={dataLength:0,controlsClick:function(){},version:3};var _=o.a.memo(function(e){var t=e.icon;return o.a.createElement("span",{className:"rightControl"},t)}),g=o.a.memo(function(e){var t=e.icon;return o.a.createElement("span",{className:"leftControl"},t)}),O=o.a.memo(b);function x(e){return(x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function w(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function P(e,t){return!t||"object"!==x(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function S(e){return(S=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function j(e,t){return(j=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var C,I,k,E=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),P(this,S(t).call(this,e))}var n,r,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&j(e,t)}(t,o.a.PureComponent),n=t,(r=[{key:"render",value:function(){var e,t=this.props,n=t.children,r=t.activeIndex,i=t.version,a=t.animation,c=4==i?"carousel-item":"item";return Array.isArray(n)?(e=n.map(function(e,t){var n,u;switch(!0){case!0===a&&t>r&&4==i:n="carousel-item-right",u="carousel-item-next";break;case!0===a&&t>r:n="right",u="next";break;case!0===a&&t<r&&4==i:n="carousel-item-left",u="carousel-item-prev";break;case!0===a&&t<r:n="left",u="prev"}var l="".concat(c," ").concat(u," ").concat(n);return t===r&&(l="".concat(c," active")),o.a.createElement("div",{key:t,className:l},e)}),o.a.createElement("div",{className:"carousel-inner",role:"listbox"},e)):o.a.createElement("div",{className:"".concat(c," active")},n)}}])&&w(n.prototype,r),i&&w(n,i),t}();function T(e){return(T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function N(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function A(e){return(A=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function L(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function M(e,t){return(M=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function R(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}k={children:[],activeIndex:0,animation:!1,direction:null,version:3},(I="defaultProps")in(C=E)?Object.defineProperty(C,I,{value:k,enumerable:!0,configurable:!0,writable:!0}):C[I]=k;var U=o.a.memo(function(e){var t=e.children,n=e.indicators,r=e.activeIndex;if(n)return o.a.createElement(v,{data:t,activeIndex:r,indClick:e._indClick})}),B=o.a.memo(function(e){var t=e.children,n=e.controls,r=e.leftIcon,i=e.rightIcon,a=e.version;if(n)return o.a.createElement(O,{dataLength:t.length,leftIcon:r,rightIcon:i,prev:e.slidePrev,next:e.slideNext,controlsClick:e._controlsClick,version:a})}),D=function(e){function t(e){var n,r,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,o=A(t).call(this,e),n=!o||"object"!==T(o)&&"function"!=typeof o?L(r):o,R(L(n),"visibilitychange",function(){(document.hidden||n.props.hidden)&&n.props.pauseOnVisibility?n._pause():n._autoPlay()}),R(L(n),"_checkChildrenLength",function(){var e=n.props.children;Array.isArray(e)&&e.length>0&&n._autoPlay()}),R(L(n),"_autoPlay",function(){n._pause(),n.props.autoplay&&n._play()}),R(L(n),"slideNext",function(){var e=n.state.activeIndex,t=n.props.wrap,r=e+1;if(r>n.props.children.length-1){if(!t)return;r=0}n.safeSetState({activeIndex:r,direction:"next"})}),R(L(n),"goToSlide",function(e){n.timeout&&clearTimeout(n.timeout),n.setState({activeIndex:e})}),R(L(n),"slidePrev",function(){var e=n.state.activeIndex,t=n.props.wrap,r=e-1,o=n.props.children.length;if(r<0){if(!t)return;r=o-1}n.setState({activeIndex:r,direction:"prev"})}),R(L(n),"_handleMouseOver",function(){n._pause()}),R(L(n),"_handleMouseOut",function(){n.isPaused&&n.props.autoplay&&n._play()}),R(L(n),"_pause",function(){n.isPaused=!0,n.timeout&&clearTimeout(n.timeout)}),R(L(n),"_play",function(){n.isPaused=!1,n._waitForNext()}),R(L(n),"_indClick",function(e,t){n.timeout&&clearTimeout(n.timeout),n.setState({activeIndex:e,direction:t}),n.isPaused=!1}),R(L(n),"_controlsClick",function(e){n.timeout&&clearTimeout(n.timeout),n.isPaused=!1,"prev"==e?n.slidePrev():n.slideNext()}),n.state={activeIndex:n.props.defaultActiveIndex,className:"carousel slide ".concat(n.props.className)},n}var n,r,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&M(e,t)}(t,d),n=t,(r=[{key:"componentDidUpdate",value:function(e,t){if(this._checkChildrenLength(),this.props.autoplay!==e.autoplay&&this._autoPlay(),t.activeIndex!==this.state.activeIndex){var n=this.state,r=n.direction,o=n.activeIndex;this.props.onSelect(o,r)}}},{key:"init",value:function(){this._checkChildrenLength()}},{key:"unmount",value:function(){this.timeout&&clearTimeout(this.timeout)}},{key:"_waitForNext",value:function(){this.timeout=setTimeout(this.slideNext,this.props.slideshowSpeed)}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.version,r=this.state,i=r.activeIndex,a=r.className,c=this.props,u=c.animation,l=c.indicators,s=this.props,f=s.leftIcon,p=s.rightIcon,d=s.controls;return o.a.createElement("div",{className:a,onMouseOver:this._handleMouseOver,onMouseOut:this._handleMouseOut},o.a.createElement(U,{activeIndex:i,indicators:l,_indClick:this._indClick},t),o.a.createElement(E,{animation:u,activeIndex:i,version:n},t),o.a.createElement(B,{controls:d,leftIcon:f,rightIcon:p,version:n,slidePrev:this.slidePrev,slideNext:this.slideNext,_controlsClick:this._controlsClick},t))}}])&&N(n.prototype,r),i&&N(n,i),t}();R(D,"defaultProps",{indicators:!0,controls:!0,slideshowSpeed:7e3,defaultActiveIndex:0,wrap:!0,autoplay:!0,children:[],animation:!0,className:"",version:3,pauseOnVisibility:!1,hidden:!1,onSelect:function(){}}),n.d(t,"React_Bootstrap_Carousel",function(){return D});t.default=D}])});