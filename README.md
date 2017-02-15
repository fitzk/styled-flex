# styled-flex
Styled FlexBox Components

Styled components, for flexbox powered container components.

## NPM
```
npm install --save styled-flex
```

## Components

### Flex
```
  <Flex row alignCenter justifyStart>
    ...
  </Flex>
```

```
  <Display column alignStart justifySpaceAround width={"50vw"}>
    ...
  </Display>
```

### Row
```
  <Row alignCenter justifyStart width={"100vw"}>
    ...
  </Row>
```

### Column
```
<Column alignCenter justifyStart flexBasis="0">
  ...
</Column>
```

## Example Usage

### Conditional Layouts
Use with [react responsive](https://github.com/contra/react-responsive)
for conditional layouts

```
  import { Row, Column } from "styled-flex"
  import MediaQuery from "react-responsive"

  export const RowColumn = props => {
    return <div>
            <MediaQuery query="(min-device-width: 1224px)">
              <Row alignCenter
                       {...props}>
                { props.children }
              </Row>
            </MediaQuery>
            <MediaQuery query="(max-device-width: 1224px)">
              <Column alignStart
                       {...props}>
                { props.children }
              </Column>
            </MediaQuery>
          </div>
  }
```

### As A Base Component

my/components.js
```

  import { Row, Column } from "styled-flex"
  import styled from "styled-components"

  const MainContainer = styled(Column)`
    background-color: black;
  `;

  export { MainContainer }

```
my/views/app.js
```

  import { MainContainer } from "my/components"

   export class App extends Component {
    ...
      render() {
          return <MainContainer flexGrow="2" alignStart>
                    { children }
                 </MainContainer>  
         }
    }

```
