// import readme from './readme.md?raw'

export default {
  title: 'Components/BrButton',
  argTypes: {
    emphasis: {
      name: 'Emphasis',
      control: 'text',
    },
    density: {
      name: 'Density',
      control: 'text',
    },
    content: {
      name: 'Content',
      control: 'text',
    },
    isBlock: {
      name: 'isBlock',
      control: 'text',
    },
    isCircle: {
      name: 'isCircle',
      control: 'text',
    },
    active: {
      name: 'Active',
      control: 'text',
    },
    loading: {
      name: 'Loading',
      control: 'text',
    },
    type: {
      name: 'Type',
      control: 'text',
    },
    autofocus: {
      name: 'autofocus',
      control: 'text',
    },
    disabled: {
      name: 'disabled',
      control: 'text',
    },
    name: {
      name: 'Name',
      control: 'text',
    },
    value: {
      name: 'Value',
      control: 'text',
    },
    ariaLabel: {
      name: 'AriaLabel',
      control: 'text',
    },
  },
  // Default Values
  args: {
    emphasis: '',
    density: '',
    content: '',
  },
}

const Template = (args) =>
  `<br-button emphasis="${args.emphasis}" density="${args.density}">${args.content}</br-button>`

export const Example = Template.bind({})
Example.args = {
  emphasis: 'primary',
  density: 'large',
  content: 'Primario',
}
