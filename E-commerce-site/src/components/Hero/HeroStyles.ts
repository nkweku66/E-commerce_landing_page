import styled, {css, createGlobalStyle} from 'styled-components'



interface Props {
    variant?: 'transparent' | 'default';
    mobile?: boolean;
    handleClick?: SubmitEvent;
    type: string;
  }
  
// Main container styling
const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 375px;
  // border: 1px solid red;

  @media (min-width: 414px) {
    width: 414px;
  }

  @media (1366px <= width <= 1440px) {
      display: grid;
      grid-template: 534px / 840px 600px;
      // border: 1px solid red;
      width: 100%;
      transition: ease-out 0.5s;

  }
`

  const buttonStyles = css<Props>`
    background-color: ${(props) => (props.variant === 'default' ? '#000' : 'transparent')};
    border: none;
    cursor: pointer;
    padding: ${(props) => (props.variant === 'default' ? '0.6em 1.2em' : '0')};
    margin-top: ${(props) => (props.variant === 'default' ? '2em' : '0')}
    letter-spacing: 12.5px;
    font-family: "League Spartan", sans-serif;
    font-weight: 700;
    font-size: 1em;

    &:active {
      background-color: ${(props) => (props.variant === 'default' ? '#444444' : 'none')};
      color: #444444;
  }

    @media (1366px <= width <= 1440px) {
      margin-top: 0;

      &:hover {
        background-color: ${(props) => (props.variant === 'default' ? '#444444' : 'none')};
        color: #444444; 
      }
    }
  `;



// Mobile first
  
const Button = styled.button<Props>`
    ${buttonStyles}
  `;

const Section = styled.section<Props>`
    width: 311px;
    height: ${(props) => props.type === 'default' ? '375px' : '275px'};
    margin: ${(props) => props.type === 'default' ? '0' : '30px'};
    padding: ${(props) => props.type === 'default' ? '0' : ' 10px 10px'};
    // border: 1px solid blue;
    position: relative;

    & > h1 {
        width: 311px;
        font-size: 40px;
        margin-bottom: 15px;
        letter-spacing: -1.67px;
        font-weight: 600;
    }

    & > p {
      margin-bottom: 41px;
      width: 311px;
    }

    & > Button {
      display: flex;
      text-transformation: uppercase;
      justify-content: space-between;
    
      & > svg {
        margin-left: 30px;
      }

      & > .mobile-view {
        display: none;
      }

      & > img.desktop-hidden {
        display: none;
      }
    }

    @media (min-width: 414px) {
      img.mobile-view {
        width: 414px;
      }
    }

    @media (1366px <= width <= 1440px) {
      width: 100%;
      padding: 0;
      margin: 0;

      h1 {
        font-size: 48px;
        width: 100%;
        transition: ease-out 0.5s;
      }

      p {
        width: 100%;
        margin-bottom: 26px;
        // border: 1px solid red;
        transition: ease-out 0.5s;
      }

    }

`

const Aside = styled.aside`
  height: 409px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  & > p {
    padding-top: 16px;
  }

  @media (min-width: 414px) {
    padding-top: 25px;

    h5 {
      color: #000;
    }
  }

  @media (1366px <= width <= 1440px) {
    padding: 120px 100px;
    transition: ease-out 0.5s;
  }

`

const Nav = styled.div`
    display: ${(props) => (props.mobile ? 'flex' : 'none')};
    width: fit-content;
    position: absolute;
    // border: 1px solid red;
    top: 313px;
    left: 270px;

    @media  (1366px <= width <= 1440px) {
      display: ${(props) => (props.mobile ? 'none' : 'none')};
      display: ${(props) => (props.desktop ? 'block' : '')};

      top: 367px;
      left: -100px;
      transition: ease-out 0.5s;
    }
`

// desktop next

const DesktopScreen = createGlobalStyle`

  .image-container .desktop-hidden {
    display: none;
  }

  @media (1366px <= width <= 1440px) {
    .image-container .desktop-hidden {
      display: flex;
      object-fit: cover;
      transition: ease-out 0.5s;
    }

    .image-container .mobile-view {
      display: none;
      transition: ease-out 0.5s;
    }

}
`

  export {
    Div,
    Aside,
    Button,
    Nav,
    Section,
    DesktopScreen
  };

