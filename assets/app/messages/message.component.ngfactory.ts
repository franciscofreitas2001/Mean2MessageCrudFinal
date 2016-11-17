/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/render/api';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from './message.component';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from './message.service';
import * as import9 from '@angular/core/src/metadata/view';
import * as import10 from '@angular/core/src/linker/component_factory';
import * as import11 from '@angular/common/src/directives/ng_if';
import * as import12 from '@angular/core/src/linker/template_ref';
var renderType_MessageComponent_Host:import0.RenderComponentType = (null as any);
class _View_MessageComponent_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import2.AppElement;
  _MessageComponent_0_4:import3.MessageComponent;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_MessageComponent_Host0,renderType_MessageComponent_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.selectOrCreateHostElement('app-message',rootSelector,(null as any));
    this._appEl_0 = new import2.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_MessageComponent0(this.viewUtils,this.injector(0),this._appEl_0);
    this._MessageComponent_0_4 = new import3.MessageComponent(this.parentInjector.get(import8.MessageService));
    this._appEl_0.initComponent(this._MessageComponent_0_4,[],compView_0);
    compView_0.create(this._MessageComponent_0_4,this.projectableNodes,(null as any));
    this.init([].concat([this._el_0]),[this._el_0],[],[]);
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import3.MessageComponent) && (0 === requestNodeIndex))) { return this._MessageComponent_0_4; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    if (((this.numberOfChecks === 0) && !throwOnChange)) { this._MessageComponent_0_4.ngOnInit(); }
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_MessageComponent_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  if ((renderType_MessageComponent_Host === (null as any))) { (renderType_MessageComponent_Host = viewUtils.createRenderComponentType('',0,import9.ViewEncapsulation.None,[],{})); }
  return new _View_MessageComponent_Host0(viewUtils,parentInjector,declarationEl);
}
export const MessageComponentNgFactory:import10.ComponentFactory<import3.MessageComponent> = new import10.ComponentFactory<import3.MessageComponent>('app-message',viewFactory_MessageComponent_Host0,import3.MessageComponent);
const styles_MessageComponent:any[] = ['.author[_ngcontent-%COMP%]{\n          display: inline-block;\n          font-style: italic;\n          font-size: 12px;\n          width: 80%\n      }  \n      .config[_ngcontent-%COMP%]{\n          display: inline-block;\n          text-align: right;\n          font-size: 12px;\n          width: 19%;\n      }'];
var renderType_MessageComponent:import0.RenderComponentType = (null as any);
class _View_MessageComponent0 extends import1.AppView<import3.MessageComponent> {
  _text_0:any;
  _text_1:any;
  _text_2:any;
  _el_3:any;
  _text_4:any;
  _el_5:any;
  _text_6:any;
  _text_7:any;
  _el_8:any;
  _text_9:any;
  _el_10:any;
  _text_11:any;
  _text_12:any;
  _anchor_13:any;
  /*private*/ _appEl_13:import2.AppElement;
  _TemplateRef_13_5:any;
  _NgIf_13_6:import11.NgIf;
  _text_14:any;
  _text_15:any;
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_MessageComponent0,renderType_MessageComponent,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this._text_1 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this._text_2 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this._el_3 = this.renderer.createElement(parentRenderNode,'article',(null as any));
    this.renderer.setElementAttribute(this._el_3,'class','panel panel-default');
    this._text_4 = this.renderer.createText(this._el_3,'\n	',(null as any));
    this._el_5 = this.renderer.createElement(this._el_3,'div',(null as any));
    this.renderer.setElementAttribute(this._el_5,'class','panel-body');
    this._text_6 = this.renderer.createText(this._el_5,'',(null as any));
    this._text_7 = this.renderer.createText(this._el_3,'\n	',(null as any));
    this._el_8 = this.renderer.createElement(this._el_3,'footer',(null as any));
    this.renderer.setElementAttribute(this._el_8,'class','panel-footer');
    this._text_9 = this.renderer.createText(this._el_8,'\n		',(null as any));
    this._el_10 = this.renderer.createElement(this._el_8,'div',(null as any));
    this.renderer.setElementAttribute(this._el_10,'class','author');
    this._text_11 = this.renderer.createText(this._el_10,'',(null as any));
    this._text_12 = this.renderer.createText(this._el_8,'\n		',(null as any));
    this._anchor_13 = this.renderer.createTemplateAnchor(this._el_8,(null as any));
    this._appEl_13 = new import2.AppElement(13,8,this,this._anchor_13);
    this._TemplateRef_13_5 = new import12.TemplateRef_(this._appEl_13,viewFactory_MessageComponent1);
    this._NgIf_13_6 = new import11.NgIf(this._appEl_13.vcRef,this._TemplateRef_13_5);
    this._text_14 = this.renderer.createText(this._el_8,'\n	',(null as any));
    this._text_15 = this.renderer.createText(this._el_3,'\n',(null as any));
    this._expr_0 = import7.UNINITIALIZED;
    this._expr_1 = import7.UNINITIALIZED;
    this._expr_2 = import7.UNINITIALIZED;
    this.init([],[
      this._text_0,
      this._text_1,
      this._text_2,
      this._el_3,
      this._text_4,
      this._el_5,
      this._text_6,
      this._text_7,
      this._el_8,
      this._text_9,
      this._el_10,
      this._text_11,
      this._text_12,
      this._anchor_13,
      this._text_14,
      this._text_15
    ]
    ,[],[]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import12.TemplateRef) && (13 === requestNodeIndex))) { return this._TemplateRef_13_5; }
    if (((token === import11.NgIf) && (13 === requestNodeIndex))) { return this._NgIf_13_6; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_2:any = this.context.belongsToUser();
    if (import4.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this._NgIf_13_6.ngIf = currVal_2;
      this._expr_2 = currVal_2;
    }
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_0:any = import4.interpolate(1,'\n		',this.context.message.content,'\n	');
    if (import4.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this.renderer.setText(this._text_6,currVal_0);
      this._expr_0 = currVal_0;
    }
    const currVal_1:any = import4.interpolate(1,'\n			',this.context.message.username,'\n		');
    if (import4.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this.renderer.setText(this._text_11,currVal_1);
      this._expr_1 = currVal_1;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
}
export function viewFactory_MessageComponent0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<import3.MessageComponent> {
  if ((renderType_MessageComponent === (null as any))) { (renderType_MessageComponent = viewUtils.createRenderComponentType('C:/CURSO-MEAN-2/assets/app/messages/message.component.html',0,import9.ViewEncapsulation.Emulated,styles_MessageComponent,{})); }
  return new _View_MessageComponent0(viewUtils,parentInjector,declarationEl);
}
class _View_MessageComponent1 extends import1.AppView<any> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _text_4:any;
  _el_5:any;
  _text_6:any;
  _text_7:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_MessageComponent1,renderType_MessageComponent,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'div',(null as any));
    this.renderer.setElementAttribute(this._el_0,'class','config');
    this._text_1 = this.renderer.createText(this._el_0,'\n			',(null as any));
    this._el_2 = this.renderer.createElement(this._el_0,'a',(null as any));
    this._text_3 = this.renderer.createText(this._el_2,'Edit',(null as any));
    this._text_4 = this.renderer.createText(this._el_0,'\n			',(null as any));
    this._el_5 = this.renderer.createElement(this._el_0,'a',(null as any));
    this._text_6 = this.renderer.createText(this._el_5,'Delete',(null as any));
    this._text_7 = this.renderer.createText(this._el_0,'\n		',(null as any));
    var disposable_0:Function = this.renderer.listen(this._el_2,'click',this.eventHandler(this._handle_click_2_0.bind(this)));
    var disposable_1:Function = this.renderer.listen(this._el_5,'click',this.eventHandler(this._handle_click_5_0.bind(this)));
    this.init([].concat([this._el_0]),[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._text_4,
      this._el_5,
      this._text_6,
      this._text_7
    ]
    ,[
      disposable_0,
      disposable_1
    ]
    ,[]);
    return (null as any);
  }
  private _handle_click_2_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.parent.context.onEdit()) !== false);
    return (true && pd_0);
  }
  private _handle_click_5_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.parent.context.onDelete()) !== false);
    return (true && pd_0);
  }
}
function viewFactory_MessageComponent1(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  return new _View_MessageComponent1(viewUtils,parentInjector,declarationEl);
}