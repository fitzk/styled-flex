# styled-flex
Styled Flexbox Components

Styled components, for flexbox powered container components.

## NPM
```
npm install --save styled-flex
```

## Components

### Flex
``` js
  <Flex row alignCenter justifyStart>
    ...
  </Flex>
```

``` js
  <Flex column alignStart justifySpaceAround width={"50vw"}>
    ...
  </Flex>
```

### Row
``` js
  <Row alignCenter justifyStart width={"100vw"}>
    ...
  </Row>
```

### Column
``` js
<Column alignCenter justifyStart flexBasis="0">
  ...
</Column>
```

## Example Usage

### Conditional Layouts
Use with [react responsive](https://github.com/contra/react-responsive)
for conditional layouts

``` js
  import { Row, Column } from "styled-flex";
  import MediaQuery from "react-responsive";

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
``` js

  import { Row, Column } from "styled-flex";
  import styled from "styled-components";

  const MainContainer = styled(Column)`
    background-color: black;
  `;

  export { MainContainer }

```
my/views/app.js
``` js

  import { MainContainer } from "my/components";

   export class App extends Component {
    ...
      render() {
          return <MainContainer flexGrow="2" alignStart>
                    { children }
                 </MainContainer>  
         }
    }

```
