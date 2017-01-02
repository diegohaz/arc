import React, { PropTypes } from 'react'
import styled, { css, keyframes } from 'styled-components'

import { Icon, Button } from 'components'

const fadeIn = keyframes`
  0% { display: none; opacity: 0; }
  1% { display: block: opacity: 0; }
  100% { display: block; opacity: 1; }
`

const buttonStyles = ({ hasText, right, responsive, breakpoint, collapsed }) => css`
  max-width: ${hasText && !collapsed ? '100%' : 'calc(2.5em + 0.6em * 2)'};
  width: ${hasText ? 'auto' : '2.5em'};
  padding: ${hasText ? '0 0.6em' : 0};
  flex: 0 0 2.5em;
  box-sizing: border-box;
  ${collapsed && css`
    overflow: hidden;
    transition: max-width 250ms ease-in-out;
    will-change: max-width;
    & .text {
      display: none;
    }
    &:hover {
      max-width: 100%;
      & .text {
        display: block;
        animation: ${fadeIn} 250ms;
      }
    }
  `}
  ${responsive && css`
    @media screen and (max-width: ${breakpoint}px) {
      width: auto;
      flex: 0 !important;
    }
  `}
`

const textStyle = ({ responsive, breakpoint }) => css`
  padding: 0.6em;
  @media screen and (max-width: ${breakpoint}px) {
    display: ${responsive && 'none !important'};
  }
`

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`

const StyledIcon = styled(Icon)`
  flex: none;
`

const StyledButton = styled(({ hasText, right, responsive, collapsed, breakpoint, ...props }) =>
  <Button {...props} />
)`${buttonStyles}`

const Text = styled.span`${textStyle}`

const IconButton = ({ color, icon, children, ...props, breakpoint, right, responsive, height }) => {
  const iconElement = <StyledIcon height={height / 2.5} icon={icon} color={color} />
  return (
    <StyledButton hasText={!!children} {...props}>
      <Wrapper>
        {right || iconElement}
        {children &&
          <Text className="text" responsive={responsive} breakpoint={breakpoint}>{children}</Text>
        }
        {right && iconElement}
      </Wrapper>
    </StyledButton>
  )
}

IconButton.propTypes = {
  icon: PropTypes.string.isRequired,
  responsive: PropTypes.bool,
  breakpoint: PropTypes.number,
  collapsed: PropTypes.bool,
  right: PropTypes.bool,
  height: PropTypes.number,
  color: PropTypes.string,
  children: PropTypes.any
}

IconButton.defaultProps = {
  breakpoint: 420
}

export default IconButton
