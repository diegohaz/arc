import React, { PropTypes } from 'react'
import styled from 'styled-components'

import { Icon, Link, Paragraph, Heading, Badge } from 'components'

const Wrapper = styled.div`
  position: relative;
  display: flex;
  padding: 1rem;
  box-sizing: border-box;
  opacity: ${(props) => props.soon ? 0.4 : 1};
`

const StyledIcon = styled(Icon)`
  flex: none;
`

const Text = styled.div`
  margin-left: 1rem;
  & > :first-child {
    margin: 0;
  }
`

const StyledBadge = styled(Badge)`
  position: absolute;
  top: 1rem;
  right: 1rem;
`

const Feature = ({ icon, title, link, children, ...props, soon }) => {
  return (
    <Wrapper {...props}>
      {icon && <StyledIcon icon={icon} size={64} />}
      <Text>
        <Heading level={2}>
          {link && <Link href={link}>{title}</Link> || title}
        </Heading>
        <Paragraph>{children}</Paragraph>
      </Text>
      {soon && <StyledBadge kind="grayscale">soon</StyledBadge>}
    </Wrapper>
  )
}

Feature.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
  link: PropTypes.string,
  soon: PropTypes.bool,
  children: PropTypes.any
}

export default Feature
