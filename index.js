import React from "react"
import styled, { css } from "styled-components"

const flex = css`
  display: flex;
`
const align = ({
	alignCenter,
	alignStart,
	alignEnd,
	alignBaseline,
	alignStretch,
	alignSpaceBetween,
	alignSpaceAround
}) => {
	return alignCenter && "center"||
	alignStart && "flex-start"||
	alignEnd  && "flex-end"||
	alignBaseline  && "baseline"||
	alignStretch && "stretch" ||
	alignSpaceBetween && "space-between" ||
	alignSpaceAround && "space-around" ||
	"center"
}
const justify = ({
	justifyCenter,
	justifyStart,
	justifyEnd,
	justifySpaceBetween,
	justifySpaceAround
}) => {
	return justifyCenter && "center" ||
				 justifyStart && "flex-start" ||
				 justifyEnd &&  "flex-end" ||
				 justifySpaceBetween && "space-between" ||
				 justifySpaceAround && "space-around" ||
				 "center"
};

const wrap = ({
  nowrap,
  wrap,
  wrapReverse
}) => {
  return nowrap && "nowrap" ||
  wrap && "wrap" ||
  wrapReverse && "wrap-reverse" ||
  "wrap"
};

const orientation = styled.div`
	align-items: ${props => align(props)};
	justify-content: ${props => justify(props)};
  ${props => `flex-wrap: ${wrap(props)}`};
  ${props => props.flexBasis && `flex-basis: ${props.flexBasis}`};
  ${props => props.flexGrow && `flex-basis: ${props.flexGrow}`};
  ${props => props.flexShrink && `flex-shrink: ${props.flexShrink}`};
`

export const Display = styled(orientation)`
  ${flex}
  flex-direction: ${props => props.row && "row" || "column" };
`;

export const Row = styled(orientation)`
	${flex}
  flex-direction: row;
`;

export const Column = styled(orientation)`
	${flex}
  flex-direction: column;
`;
