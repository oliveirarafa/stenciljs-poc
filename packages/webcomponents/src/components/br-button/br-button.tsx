import { Component, Event, EventEmitter, Prop, h } from '@stencil/core';
import { CssClassMap } from '../../utils/interfaces';

@Component({
  tag: 'br-button',
  styleUrl: 'br-button.scss',
  shadow: true,
})
export class BrButton {
  // TODO: Validar e definir atributos obrigatórios
  // Classes
  @Prop({ reflect: true }) emphasis: 'primary' | 'secondary' | '' = '';
  @Prop({ reflect: true }) density: 'small' | 'large' | '' = '';
  @Prop({ reflect: true }) isBlock: boolean = false;
  @Prop({ reflect: true }) isCircle: boolean = false;
  @Prop({ reflect: true }) active: boolean = false;
  @Prop() loading: boolean = false;

  // Atributos
  @Prop({ reflect: true }) type: 'button' | 'reset' | 'submit' = 'button';
  @Prop({ reflect: true }) autofocus: boolean = false;
  @Prop({ reflect: true }) disabled: boolean = false;
  // TODO: Testar os 3 atributos abaixo
  @Prop({ reflect: true }) name!: string;
  @Prop({ reflect: true }) labelAria: string;
  @Prop({ reflect: true }) value: string;

  /**
   * Ciclo de vida
   * https://stenciljs.com/docs/component-lifecycle
   */
  @Event() connectedCallbackEvent: EventEmitter<this>;
  @Event() componentWillLoadEvent: EventEmitter<this>;
  @Event() componentDidLoadEvent: EventEmitter<this>;
  @Event() componentWillRenderEvent: EventEmitter<this>;
  @Event() componentDidRenderEvent: EventEmitter<this>;
  @Event() componentShouldUpdateEvent: EventEmitter<this>;
  @Event() componentWillUpdateEvent: EventEmitter<this>;
  @Event() componentDidUpdateEvent: EventEmitter<this>;
  @Event() disconnectedCallbackEvent: EventEmitter<this>;

  // TODO: Avaliar uma maneira melhor de disponibilizar esses eventos do ciclo de vida
  connectedCallback() {
    this.connectedCallbackEvent.emit(this);
  }

  componentWillLoad() {
    this.componentWillLoadEvent.emit(this);
  }

  componentDidLoad() {
    this.componentDidLoadEvent.emit(this);
  }

  componentWillRender() {
    this.componentWillRenderEvent.emit(this);
  }

  componentDidRender() {
    this.componentDidRenderEvent.emit(this);
  }

  componentShouldUpdate() {
    this.componentShouldUpdateEvent.emit(this);
  }

  componentWillUpdate() {
    this.componentWillUpdateEvent.emit(this);
  }

  componentDidUpdate() {
    this.componentDidUpdateEvent.emit(this);
  }

  disconnectedCallback() {
    this.disconnectedCallbackEvent.emit(this);
  }

  private setClasses(): CssClassMap {
    return {
      'br-button': true,
      'primary': this.emphasis === 'primary',
      'secondary': this.emphasis === 'secondary',
      'large': this.density === 'large',
      'small': this.density === 'small',
      ['block']: this.isBlock,
      ['circle']: this.isCircle,
      ['active']: this.active,
      ['loading']: this.loading,
    };
  }

  render() {
    return (
      <button
        class={this.setClasses()}
        type={this.type}
        autoFocus={this.autofocus}
        disabled={this.disabled}
        name={this.name}
        value={this.value}
        aria-label={this.labelAria}>
        <slot></slot>
      </button>
    );
  }
}
