import styled from 'styled-components'
import { border, color, compose, flexbox, layout, space, typography } from 'styled-system'

export const SVG = styled.svg(
  compose(
    space,
    color,
    layout,
    flexbox,
    typography,
    border
  )
);
