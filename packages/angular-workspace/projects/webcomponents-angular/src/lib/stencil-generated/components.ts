/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, NgZone } from '@angular/core';

import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';

import { Components } from '@govbr-ds/webcomponents-stencil';


@ProxyCmp({
  inputs: ['active', 'autofocus', 'density', 'disabled', 'emphasis', 'isBlock', 'isCircle', 'labelAria', 'loading', 'name', 'type', 'value']
})
@Component({
  selector: 'br-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['active', 'autofocus', 'density', 'disabled', 'emphasis', 'isBlock', 'isCircle', 'labelAria', 'loading', 'name', 'type', 'value'],
})
export class BrButton {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['connectedCallbackEvent', 'componentWillLoadEvent', 'componentDidLoadEvent', 'componentWillRenderEvent', 'componentDidRenderEvent', 'componentShouldUpdateEvent', 'componentWillUpdateEvent', 'componentDidUpdateEvent', 'disconnectedCallbackEvent']);
  }
}


export declare interface BrButton extends Components.BrButton {
  /**
   * Ciclo de vida
https://stenciljs.com/docs/component-lifecycle
   */
  connectedCallbackEvent: EventEmitter<CustomEvent<this>>;

  componentWillLoadEvent: EventEmitter<CustomEvent<this>>;

  componentDidLoadEvent: EventEmitter<CustomEvent<this>>;

  componentWillRenderEvent: EventEmitter<CustomEvent<this>>;

  componentDidRenderEvent: EventEmitter<CustomEvent<this>>;

  componentShouldUpdateEvent: EventEmitter<CustomEvent<this>>;

  componentWillUpdateEvent: EventEmitter<CustomEvent<this>>;

  componentDidUpdateEvent: EventEmitter<CustomEvent<this>>;

  disconnectedCallbackEvent: EventEmitter<CustomEvent<this>>;
}


@ProxyCmp({
  inputs: ['autofocus', 'density', 'disabled', 'id', 'label', 'placeholder', 'readonly', 'required', 'type', 'value']
})
@Component({
  selector: 'br-input',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['autofocus', 'density', 'disabled', 'id', 'label', 'placeholder', 'readonly', 'required', 'type', 'value'],
})
export class BrInput {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['myChange']);
  }
}


import type { InputChangeEventDetail as IBrInputInputChangeEventDetail } from '@govbr-ds/webcomponents-stencil';

export declare interface BrInput extends Components.BrInput {

  myChange: EventEmitter<CustomEvent<IBrInputInputChangeEventDetail>>;
}


