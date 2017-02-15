import React from "react"
import styled from "styled-components"

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

const Base = styled.div`
  display: flex;
	align-items: ${props => align(props)};
	justify-content: ${props => justify(props)};
  ${props => `flex-wrap: ${wrap(props)}`};
  ${props => props.flexBasis && `flex-basis: ${props.flexBasis}`};
  ${props => props.flexGrow && `flex-basis: ${props.flexGrow}`};
  ${props => props.flexShrink && `flex-shrink: ${props.flexShrink}`};
`;

const Flex = styled(Base)`
  flex-direction: ${props => props.row && "row" || "column" };
`;

const Row = styled(Base)`
  flex-direction: row;
`;

const Column = styled(Base)`
  flex-direction: column;
`;

export { Base, Flex, Row, Column }
