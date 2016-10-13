import React from 'react'

import * as c from 'components'
const componentNames = {
  globals: Object.keys(require('components/globals')),
  atoms: Object.keys(require('components/atoms')),
  molecules: Object.keys(require('components/molecules')),
  organisms: Object.keys(require('components/organisms')),
  templates: Object.keys(require('components/templates')),
  pages: Object.keys(require('components/pages'))
}

const HomePage = () => {
  return (
    <c.HeroTemplate
      logo={<c.LogoLink height={80} />}
      hero={<c.Hero />}
      nav={<c.PrimaryNavigation {...componentNames} />}
      footer={<c.Footer />}>

      <c.Heading id="globals" style={{ margin: '0.5rem 1rem' }}>globals</c.Heading>

      <c.ComponentSpec title="colors" path="globals.js">
        {Object.keys(c.colors).map((kind, i) =>
          <c.Palette key={i} title={kind} hexes={c.colors[kind]} />
        )}
      </c.ComponentSpec>

      <c.ComponentSpec title="fonts" path="globals.js">
        {Object.keys(c.fonts).map((kind, i) =>
          <c.Paragraph key={i} style={{ fontFamily: c.fonts[kind] }}>
            <strong>{kind}</strong>: {c.fonts[kind]}
          </c.Paragraph>
        )}
      </c.ComponentSpec>

      <c.Heading id="atoms" style={{ margin: '0.5rem 1rem' }}>atoms</c.Heading>

      <c.ComponentSpec title="Button">
        {Object.keys(c.colors).map((kind, i) => (
          <c.Button key={i} kind={kind} style={{ margin: '0.5rem' }}>
            {kind}
          </c.Button>
        ))}
      </c.ComponentSpec>

      <c.ComponentSpec title="Heading">
        <c.Heading>Heading level 1</c.Heading>
        <c.Heading level={2}>Heading level 2</c.Heading>
        <c.Heading level={3}>Heading level 3</c.Heading>
        <c.Heading level={4}>Heading level 4</c.Heading>
        <c.Heading level={5}>Heading level 5</c.Heading>
        <c.Heading level={6}>Heading level 6</c.Heading>
      </c.ComponentSpec>

      <c.ComponentSpec title="HorizontalRule">
        <c.HorizontalRule />
      </c.ComponentSpec>

      <c.ComponentSpec title="Icon">
        <c.Icon icon="github" />
        <c.Icon icon="code" />
        <c.Icon icon="arrow-top" />
      </c.ComponentSpec>

      <c.ComponentSpec title="Input">
        <c.Input />
        <c.Input type="checkbox" />
        <c.Input type="radio" />
      </c.ComponentSpec>

      <c.ComponentSpec title="Label">
        <c.Label>Field name</c.Label>
      </c.ComponentSpec>

      <c.ComponentSpec title="Link">
        {Object.keys(c.colors).map((kind, i) => (
          <c.Link
            key={i}
            kind={kind}
            style={{ display: 'block' }}
            href="https://github.com/diegohaz/arc"
            target="_blank">
            {kind}
          </c.Link>
        ))}
      </c.ComponentSpec>

      <c.ComponentSpec title="List">
        <c.List>
          <li>Item 1</li>
          <li>Item 2</li>
        </c.List>
      </c.ComponentSpec>

      <c.ComponentSpec title="LogoImage">
        <c.LogoImage />
      </c.ComponentSpec>

      <c.ComponentSpec title="Paragraph">
        <c.Paragraph>
          Non ea officia aliquip nostrud eu aute dolor fugiat cillum eu. Incididunt magna sit irure eu eiusmod nulla sunt. Velit sit adipisicing laboris voluptate magna laborum id deserunt cillum ad anim nostrud dolor pariatur dolore. Occaecat nisi sit exercitation dolor laborum labore commodo nulla ullamco cupidatat quis id eiusmod sunt aute Lorem velit. Laboris proident proident do elit voluptate aute anim sit sunt nulla quis dolore ad id irure ut. Adipisicing exercitation enim do magna aliquip nulla amet laborum Lorem sint.
        </c.Paragraph>
      </c.ComponentSpec>

      <c.ComponentSpec title="PreformattedText">
        This is an <c.PreformattedText inline>inline</c.PreformattedText> preformatted text.
        <c.PreformattedText>var foo = 'this is a block'</c.PreformattedText>
      </c.ComponentSpec>

      <c.ComponentSpec title="Select">
        <c.Select>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
        </c.Select>
      </c.ComponentSpec>

      <c.ComponentSpec title="TableCell">
        <table>
          <tbody>
            <tr>
              <c.TableCell heading>heading</c.TableCell>
              <c.TableCell>foo</c.TableCell>
              <c.TableCell>bar</c.TableCell>
            </tr>
          </tbody>
        </table>
      </c.ComponentSpec>

      <c.ComponentSpec title="TableRow">
        <table>
          <tbody>
            <c.TableRow>
              <c.TableCell heading>foo</c.TableCell>
              <c.TableCell heading>bar</c.TableCell>
              <c.TableCell heading>baz</c.TableCell>
            </c.TableRow>
            <c.TableRow filled>
              <c.TableCell>foo</c.TableCell>
              <c.TableCell>bar</c.TableCell>
              <c.TableCell>baz</c.TableCell>
            </c.TableRow>
          </tbody>
        </table>
      </c.ComponentSpec>

      <c.Heading id="molecules" style={{ margin: '0.5rem 1rem' }}>molecules</c.Heading>

      <c.ComponentSpec title="Blockquote">
        <c.Blockquote cite="Lorem Ipsum">
          Sit id anim ea do ea eiusmod cupidatat elit mollit aliqua velit ut ad reprehenderit. Qui et exercitation voluptate reprehenderit exercitation eu ut. Tempor non magna irure aute ea do magna aliquip.
        </c.Blockquote>
      </c.ComponentSpec>

      <c.ComponentSpec title="ColorBox">
        <c.ColorBox hex="#aaa" />
      </c.ComponentSpec>

      <c.ComponentSpec title="Field">
        <c.Field name="name" error="Error message" label="Label" invalid />
      </c.ComponentSpec>

      <c.ComponentSpec title="IconButton">
        <c.IconButton icon="github">With text</c.IconButton>
        <c.IconButton icon="github" style={{ margin: '0 1rem' }} />
        <c.IconButton icon="github" responsive>Responsive</c.IconButton>
      </c.ComponentSpec>

      <c.ComponentSpec title="IconLink">
        <c.IconLink href="#" icon="github">With text</c.IconLink>
        <c.IconLink href="#" icon="github" style={{ margin: '0 1rem' }} />
        <c.IconLink href="#" icon="github" responsive>Responsive</c.IconLink>
      </c.ComponentSpec>

      <c.ComponentSpec title="LogoLink">
        <c.LogoLink />
      </c.ComponentSpec>

      <c.ComponentSpec title="PrimaryNavigation">
        <c.PrimaryNavigation atoms={['atom1', 'atom2']} />
      </c.ComponentSpec>

      <c.ComponentSpec title="Table">
        <c.Table
          caption="caption"
          head={
            <c.TableRow>
              <c.TableCell heading>foo</c.TableCell>
              <c.TableCell heading>bar</c.TableCell>
              <c.TableCell heading>baz</c.TableCell>
            </c.TableRow>
          }>
          <c.TableRow filled>
            <c.TableCell>foo</c.TableCell>
            <c.TableCell>bar</c.TableCell>
            <c.TableCell>baz</c.TableCell>
          </c.TableRow>
          <c.TableRow>
            <c.TableCell>foo</c.TableCell>
            <c.TableCell>bar</c.TableCell>
            <c.TableCell>baz</c.TableCell>
          </c.TableRow>
        </c.Table>
      </c.ComponentSpec>

      <c.Heading id="organisms" style={{ margin: '0.5rem 1rem' }}>organisms</c.Heading>

      <c.ComponentSpec title="ComponentSpec">
        <c.ComponentSpec title="SomeComponent">Example</c.ComponentSpec>
      </c.ComponentSpec>

      <c.ComponentSpec title="Hero">
        <c.Hero />
      </c.ComponentSpec>

      <c.ComponentSpec title="Palette">
        <c.Palette title="My palette (click)" hexes={['#aaa', '#ff00ff', '#33e912']} />
      </c.ComponentSpec>

      <c.Heading id="templates" style={{ margin: '0.5rem 1rem' }}>templates</c.Heading>

      <c.ComponentSpec title="HeroTemplate">
        <c.HeroTemplate
          logo={<div style={{ height: 80 }}>logo</div>}
          hero={<div style={{ backgroundColor: '#ccc', height: 150 }}>hero</div>}
          nav={<div style={{ backgroundColor: '#aaa', height: 320, width: 100 }}>nav</div>}
          footer={<div style={{ backgroundColor: '#ccc', height: 50 }}>footer</div>}>
          content
        </c.HeroTemplate>
      </c.ComponentSpec>

      <c.Heading id="pages" style={{ margin: '0.5rem 1rem' }}>pages</c.Heading>

      <c.ComponentSpec title="HomePage">
        <c.HeroTemplate
          logo={<c.LogoLink height={80} />}
          hero={<c.Hero />}
          nav={<c.PrimaryNavigation {...componentNames} />}
          footer={<c.Footer />}>
          content
        </c.HeroTemplate>
      </c.ComponentSpec>

    </c.HeroTemplate>
  )
}

export default HomePage
