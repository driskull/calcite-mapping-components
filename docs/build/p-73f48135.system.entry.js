System.register(["./p-b7d4d9b1.system.js","./p-9e77e74d.system.js","./p-b996c942.system.js"],(function(e){"use strict";var a,t,i,c,r,o,l,n;return{setters:[function(e){a=e.r;t=e.h;i=e.H;c=e.g;r=e.c},function(e){o=e.g;l=e.b},function(e){n=e.c}],execute:function(){var p={main:"main",mainReversed:"main--reversed",content:"content",footer:"footer"};var d={primaryPanel:"primary-panel",contextualPanel:"contextual-panel",header:"shell-header",footer:"shell-footer",tipManager:"tip-manager"};var s=":host{-webkit-box-sizing:border-box;box-sizing:border-box;color:var(--calcite-app-foreground);font-family:var(--calcite-app-font-family);font-size:var(--calcite-app-font-size-0);line-height:var(--calcite-app-line-height);background-color:var(--calcite-app-background)}:host *{-webkit-box-sizing:border-box;box-sizing:border-box}:host{width:100%;height:100%;position:absolute;top:0;bottom:0;left:0;right:0;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;overflow:hidden;--calcite-app-shell-tip-spacing:26vw}:host([hidden]){display:none}:host([theme=dark]){--calcite-app-background:#404040;--calcite-app-foreground:#dfdfdf;--calcite-app-background-hover:#2b2b2b;--calcite-app-foreground-hover:#f3f3f3;--calcite-app-background-active:#151515;--calcite-app-foreground-active:#59d6ff;--calcite-app-foreground-subtle:#eaeaea;--calcite-app-background-content:#2b2b2b;--calcite-app-border:#2b2b2b;--calcite-app-border-hover:#2b2b2b;--calcite-app-border-subtle:#2b2b2b;--calcite-app-scrim:rgba(64, 64, 64, 0.8)}:host([theme=light]){--calcite-app-background:#ffffff;--calcite-app-foreground:#404040;--calcite-app-background-hover:#eaeaea;--calcite-app-foreground-hover:#2b2b2b;--calcite-app-background-active:#c7eaff;--calcite-app-foreground-active:#00619b;--calcite-app-foreground-subtle:#757575;--calcite-app-foreground-link:#007ac2;--calcite-app-background-content:#f3f3f3;--calcite-app-background-clear:transparent;--calcite-app-border:#eaeaea;--calcite-app-border-hover:#dfdfdf;--calcite-app-border-subtle:#f3f3f3;--calcite-app-border-active:#007ac2;--calcite-app-disabled-opacity:0.25;--calcite-app-scrim:rgba(255, 255, 255, 0.8)}.main{height:100%;width:100%;-ms-flex:1 1 auto;flex:1 1 auto;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;position:relative;border-top:1px solid var(--calcite-app-border-subtle);border-bottom:1px solid var(--calcite-app-border-subtle);-ms-flex-pack:justify;justify-content:space-between;overflow:hidden}.main--reversed{-ms-flex-direction:row-reverse;flex-direction:row-reverse}.content{height:100%;width:100%;position:absolute;left:0;right:0;bottom:0;top:0;z-index:0}::slotted(calcite-shell-panel){position:relative;z-index:1}::slotted(calcite-tip-manager){-webkit-animation:calcite-app-fade-in-up var(--calcite-app-animation-time) var(--calcite-app-easing-function);animation:calcite-app-fade-in-up var(--calcite-app-animation-time) var(--calcite-app-easing-function);border-radius:var(--calcite-app-border-radius);bottom:var(--calcite-app-cap-spacing);-webkit-box-shadow:var(--calcite-app-shadow-2);box-shadow:var(--calcite-app-shadow-2);-webkit-box-sizing:border-box;box-sizing:border-box;left:var(--calcite-app-shell-tip-spacing);position:absolute;right:var(--calcite-app-shell-tip-spacing);z-index:2}.footer{padding:var(--calcite-app-cap-spacing-half) var(--calcite-app-side-spacing)}";var b=e("calcite_shell",function(){function e(e){a(this,e)}e.prototype.renderHeader=function(){var e=!!o(this.el,d.header);return e?t("slot",{name:d.header}):null};e.prototype.renderContent=function(){return t("div",{class:p.content},t("slot",null))};e.prototype.renderFooter=function(){var e=!!o(this.el,d.footer);return e?t("div",{class:p.footer},t("slot",{name:d.footer})):null};e.prototype.renderMain=function(){var e;var a=o(this.el,d.primaryPanel);var i=(e={},e[p.mainReversed]=l(a===null||a===void 0?void 0:a.position,a===null||a===void 0?void 0:a.layout)==="end",e);return t("div",{class:n(p.main,i)},t("slot",{name:d.primaryPanel}),this.renderContent(),t("slot",{name:d.contextualPanel}),t("slot",{name:d.tipManager}))};e.prototype.render=function(){return t(i,null,this.renderHeader(),this.renderMain(),this.renderFooter())};Object.defineProperty(e.prototype,"el",{get:function(){return c(this)},enumerable:true,configurable:true});return e}());b.style=s;var h={content:"content",contentDetached:"content--detached"};var f={actionBar:"action-bar"};var u=":host{-webkit-box-sizing:border-box;box-sizing:border-box;color:var(--calcite-app-foreground);font-family:var(--calcite-app-font-family);font-size:var(--calcite-app-font-size-0);line-height:var(--calcite-app-line-height);background-color:var(--calcite-app-background)}:host *{-webkit-box-sizing:border-box;box-sizing:border-box}:host{display:-ms-flexbox;display:flex;-ms-flex-align:stretch;align-items:stretch;background-color:var(--calcite-app-background-transparent);pointer-events:none;--calcite-app-shell-panel-width:20vw;--calcite-app-shell-panel-min-width:240px;--calcite-app-shell-panel-max-width:360px;--calcite-app-shell-panel-min-height:4rem;--calcite-app-shell-panel-max-height-small:35vh;--calcite-app-shell-panel-max-height-medium:55vh;--calcite-app-shell-panel-max-height-large:85vh}:host([hidden]){display:none}:host([theme=dark]){--calcite-app-background:#404040;--calcite-app-foreground:#dfdfdf;--calcite-app-background-hover:#2b2b2b;--calcite-app-foreground-hover:#f3f3f3;--calcite-app-background-active:#151515;--calcite-app-foreground-active:#59d6ff;--calcite-app-foreground-subtle:#eaeaea;--calcite-app-background-content:#2b2b2b;--calcite-app-border:#2b2b2b;--calcite-app-border-hover:#2b2b2b;--calcite-app-border-subtle:#2b2b2b;--calcite-app-scrim:rgba(64, 64, 64, 0.8)}:host([theme=light]){--calcite-app-background:#ffffff;--calcite-app-foreground:#404040;--calcite-app-background-hover:#eaeaea;--calcite-app-foreground-hover:#2b2b2b;--calcite-app-background-active:#c7eaff;--calcite-app-foreground-active:#00619b;--calcite-app-foreground-subtle:#757575;--calcite-app-foreground-link:#007ac2;--calcite-app-background-content:#f3f3f3;--calcite-app-background-clear:transparent;--calcite-app-border:#eaeaea;--calcite-app-border-hover:#dfdfdf;--calcite-app-border-subtle:#f3f3f3;--calcite-app-border-active:#007ac2;--calcite-app-disabled-opacity:0.25;--calcite-app-scrim:rgba(255, 255, 255, 0.8)}.content{-ms-flex-align:stretch;align-items:stretch;-ms-flex-item-align:stretch;align-self:stretch;background-color:var(--calcite-app-background-content);-ms-flex-flow:column nowrap;flex-flow:column nowrap;display:-ms-flexbox;display:flex;width:var(--calcite-app-shell-panel-width);min-width:var(--calcite-app-shell-panel-min-width);max-width:var(--calcite-app-shell-panel-max-width);min-height:var(--calcite-app-shell-panel-min-height);border-left:1px solid var(--calcite-app-border);border-right:1px solid var(--calcite-app-border);padding:0;pointer-events:auto}.content--detached{border:1px solid var(--calcite-app-border);border-radius:var(--calcite-app-border-radius);-webkit-box-shadow:var(--calcite-app-shadow-0);box-shadow:var(--calcite-app-shadow-0);margin:var(--calcite-app-cap-spacing-half) var(--calcite-app-side-spacing-half) auto;max-height:var(--calcite-app-shell-panel-max-height-medium);overflow:auto}:host([detached-scale=s]) .content--detached{max-height:var(--calcite-app-shell-panel-max-height-small)}:host([detached-scale=l]) .content--detached{max-height:var(--calcite-app-shell-panel-max-height-large)}.content[hidden]{display:none}:host([layout=leading]) slot[name=action-bar]::slotted(calcite-action-bar),:host([position=start]) slot[name=action-bar]::slotted(calcite-action-bar){border-right:1px solid var(--calcite-app-border)}:host([layout=trailing]) slot[name=action-bar]::slotted(calcite-action-bar),:host([position=end]) slot[name=action-bar]::slotted(calcite-action-bar){border-left:1px solid var(--calcite-app-border)}";var g=e("calcite_shell_panel",function(){function e(e){a(this,e);this.collapsed=false;this.detached=false;this.detachedScale="m";this.calciteShellPanelToggle=r(this,"calciteShellPanelToggle",7)}e.prototype.watchHandler=function(){this.calciteShellPanelToggle.emit()};e.prototype.render=function(){var e;var a=this,c=a.collapsed,r=a.detached,o=a.layout,p=a.position;var d=t("div",{class:n(h.content,(e={},e[h.contentDetached]=r,e)),hidden:c},t("slot",null));var s=t("slot",{name:f.actionBar});var b=[s,d];if(l(p,o)==="end"){b.reverse()}return t(i,null,b)};Object.defineProperty(e,"watchers",{get:function(){return{collapsed:["watchHandler"]}},enumerable:true,configurable:true});return e}());g.style=u}}}));