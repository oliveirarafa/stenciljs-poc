import { newSpecPage } from '@stencil/core/testing'
import { BrInput } from './br-input'

describe('br-input', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BrInput],
      html: `<br-input></br-input>`,
    })
    expect(page.root).toEqualHtml(`
      <br-input>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </br-input>
    `)
  })
})
