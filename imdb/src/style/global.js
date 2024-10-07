import { createGlobalStyle } from "styled-components";
import { colorPallete, typography } from "./theme";

export const GlobalStyle = createGlobalStyle`
:root {
    --font-size:  ${typography.baseFont};
}
body{
    margin: 0px;
    background-color: ${colorPallete.primaryBackground};
    color: ${colorPallete.primaryColor};
    font-family: 'Roboto';
}
a {
    text-decoration: none;
}
ul,ol{
    list-style-type: none;
    padding: 0;
    margin: 0;
}

.container-fluid{
    width: 100%;
    padding: 0;
    margin: 0;
}
.container{
    padding: 0 7.5rem;
}
.hero-section{
    img{
        width: 100%;
    }
}
.title{
    font-size: ${typography.largeFontSize};
    font-weight: 700;
    line-height: ${typography.largeLineHeight};
    margin-bottom : 24px;
}
.subtitle{
    line-height: 21.9px;
    font-size:18px;
}

@media (max-width : 768px) {
    .container{
        padding: 0 1rem;
    }
    .title{
        font-size: ${typography.mediumFontSize};
        line-height: ${typography.mediumLineHeight};
    }
    .subtitle{
        line-height: 18.75px;
        font-size: 16px;
    }
}
`
