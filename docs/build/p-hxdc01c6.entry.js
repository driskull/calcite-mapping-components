import{r as t,c as i,h as e,g as s}from"./p-a6db2cfa.js";import"./p-7f24b979.js";import{a}from"./p-cd1553e2.js";import"./p-4d533d6f.js";import"./p-30ecf6c3.js";import{s as r,L as l}from"./p-39cbdc60.js";import{S as h}from"./p-bce4e386.js";var c;!function(t){t.grip="grip"}(c||(c={}));const{mutationObserverCallback:n,initialize:o,initializeObserver:p,cleanUpObserver:d,calciteListItemChangeHandler:u,calciteListItemValueChangeHandler:m,setUpItems:g,deselectSiblingItems:v,selectSiblings:b,handleFilter:L,getItemData:f}=r,I=class{constructor(e){t(this,e),this.compact=!1,this.disabled=!1,this.dragEnabled=!1,this.filterEnabled=!1,this.loading=!1,this.multiple=!1,this.textFilterPlaceholder="Filter results",this.selectedValues=new Map,this.dataForFilter=[],this.lastSelectedItem=null,this.guid=`calcite-value-list-${a()}`,this.observer=new MutationObserver(n.bind(this)),this.sortables=[],this.deselectSiblingItems=v.bind(this),this.selectSiblings=b.bind(this),this.handleFilter=L.bind(this),this.getItemData=f.bind(this),this.keyDownHandler=t=>{const i=t.composedPath().find(t=>{var i;return null===(i=t.dataset)||void 0===i?void 0:i.jsHandle}),e=t.composedPath().find(t=>{var i;return"calcite-value-list-item"===(null===(i=t.tagName)||void 0===i?void 0:i.toLowerCase())});if(!i||!e.handleActivated)return;const s=this.items.length-1,a=e.value,r=this.items.findIndex(t=>t.value===a);let l,h=!1;switch(t.key){case"ArrowUp":t.preventDefault(),0===r?h=!0:l=r-1;break;case"ArrowDown":t.preventDefault(),r===s?l=0:r===s-1?h=!0:l=r+2;break;default:return}h?e.parentElement.appendChild(e):e.parentElement.insertBefore(e,this.items[l]),i.focus(),e.handleActivated=!0},this.calciteListChange=i(this,"calciteListChange",7),this.calciteListOrderChange=i(this,"calciteListOrderChange",7)}connectedCallback(){o.call(this)}componentDidLoad(){this.setUpDragAndDrop(),p.call(this)}componentDidUnload(){d.call(this),this.cleanUpDragAndDrop()}calciteListItemChangeHandler(t){u.call(this,t)}calciteListItemPropsChangeHandler(t){t.stopPropagation(),this.setUpFilter()}calciteListItemValueChangeHandler(t){m.call(this,t)}setUpItems(){g.call(this,"calcite-value-list-item")}setUpFilter(){this.filterEnabled&&(this.dataForFilter=this.getItemData())}setUpDragAndDrop(){this.dragEnabled&&this.sortables.push(h.create(this.el,{group:this.guid,handle:".handle",draggable:"calcite-value-list-item",onUpdate:()=>{this.items=Array.from(this.el.querySelectorAll("calcite-value-list-item"));const t=this.items.map(t=>t.value);this.calciteListOrderChange.emit(t)}}))}cleanUpDragAndDrop(){this.dragEnabled&&(this.sortables.forEach(t=>{t.destroy()}),this.sortables=[])}async getSelectedItems(){return this.selectedValues}getIconType(){let t=null;return this.dragEnabled&&(t=c.grip),t}render(){return e(l,{props:this,onKeyDown:this.keyDownHandler})}get el(){return s(this)}static get style(){return":host{-webkit-box-sizing:border-box;box-sizing:border-box;color:var(--calcite-app-foreground);font-family:var(--calcite-app-font-family);font-size:var(--calcite-app-font-size-0);line-height:var(--calcite-app-line-height);background-color:var(--calcite-app-background)}:host *{-webkit-box-sizing:border-box;box-sizing:border-box}:host{-ms-flex-align:stretch;align-items:stretch;background-color:var(--calcite-app-background-clear);display:-ms-flexbox;display:flex;-ms-flex:0 0 auto;flex:0 0 auto;-ms-flex-flow:column;flex-flow:column;position:relative}:host([hidden]){display:none}:host([theme=dark]){--calcite-app-background:#404040;--calcite-app-foreground:#dfdfdf;--calcite-app-background-hover:#2b2b2b;--calcite-app-foreground-hover:#f3f3f3;--calcite-app-background-active:#151515;--calcite-app-foreground-active:#59d6ff;--calcite-app-foreground-subtle:#eaeaea;--calcite-app-background-content:#2b2b2b;--calcite-app-border:#2b2b2b;--calcite-app-border-hover:#2b2b2b;--calcite-app-border-subtle:#2b2b2b;--calcite-app-scrim:rgba(64, 64, 64, 0.8)}:host([theme=light]){--calcite-app-background:#ffffff;--calcite-app-foreground:#404040;--calcite-app-background-hover:#eaeaea;--calcite-app-foreground-hover:#2b2b2b;--calcite-app-background-active:#c7eaff;--calcite-app-foreground-active:#00619b;--calcite-app-foreground-subtle:#757575;--calcite-app-foreground-link:#007ac2;--calcite-app-background-content:#f3f3f3;--calcite-app-background-clear:transparent;--calcite-app-border:#eaeaea;--calcite-app-border-hover:#dfdfdf;--calcite-app-border-subtle:#f3f3f3;--calcite-app-border-active:#007ac2;--calcite-app-disabled-opacity:0.25;--calcite-app-scrim:rgba(255, 255, 255, 0.8)}header{background-color:var(--calcite-app-background);display:-ms-flexbox;display:flex;-ms-flex-pack:end;justify-content:flex-end;-ms-flex-align:center;align-items:center;margin-bottom:var(--calcite-app-cap-spacing-quarter);-webkit-box-shadow:0 -1px 0 var(--calcite-app-border) inset;box-shadow:0 -1px 0 var(--calcite-app-border) inset}header.sticky{position:-webkit-sticky;position:sticky;top:0;z-index:1}calcite-filter{margin-bottom:1px}slot[name=menu-actions]::slotted(calcite-action){padding:0 var(--calcite-app-side-spacing-half)}"}};export{I as calcite_value_list};