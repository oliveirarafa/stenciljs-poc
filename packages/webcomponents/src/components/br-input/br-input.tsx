import { Component, Event, EventEmitter, Prop, State, Watch, h } from '@stencil/core';
import { CssClassMap } from '../../utils/interfaces';

export interface InputChangeEventDetail {
  value: string | number | undefined | null;
}

@Component({
  tag: 'br-input',
  styleUrl: 'br-input.scss',
  shadow: true,
})
export class BrInput {
  inputElement: HTMLInputElement;

  @State() userInput: string;

  @Prop({ reflect: true }) id: string;
  @Prop({ reflect: true }) type:
    | 'text'
    | 'password'
    | 'reset'
    | 'color'
    | 'email'
    | 'number'
    | 'search'
    | 'tel'
    | 'time'
    | 'url' = 'text';
  @Prop({ reflect: true, mutable: true }) value: string;
  @Prop({ reflect: true }) label: string;
  @Prop({ reflect: true }) density: 'small' | 'large' | '' = '';

  @Prop({ reflect: true }) readonly: boolean;
  @Prop({ reflect: true }) placeholder: string;
  // ADD: Validação
  @Prop({ reflect: true }) required: boolean;
  @Prop({ reflect: true }) disabled: boolean;
  @Prop({ reflect: true }) autofocus: boolean;

  @Watch('value')
  protected valueChanged() {
    this.myChange.emit({ value: this.value == null ? this.value : this.value.toString() });
  }
  @Event() myChange!: EventEmitter<InputChangeEventDetail>;

  private onUserInput(event: Event) {
    this.value = (event.target as HTMLInputElement).value;
  }

  private setClasses(): CssClassMap {
    return {
      'br-input': true,
      'large': this.density === 'large',
      'small': this.density === 'small',
    };
  }

  render() {
    return (
      <div class={this.setClasses()}>
        <label htmlFor={this.id}>{this.label}</label>
        <input
          id={this.id}
          type={this.type}
          placeholder={this.placeholder}
          value={this.value}
          onInput={this.onUserInput.bind(this)}
          readOnly={this.readonly}
          required={this.required}
          disabled={this.disabled}
          autofocus={this.autofocus}
        />
      </div>
    );
  }
}
