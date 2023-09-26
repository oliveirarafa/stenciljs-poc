import { newSpecPage } from '@stencil/core/testing'
import { BrButton } from './br-button'

describe('br-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BrButton],
      html: `<br-button></br-button>`,
    })
    expect(page.root).toEqualHtml(`
      <br-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </br-button>
    `)
  })
})
