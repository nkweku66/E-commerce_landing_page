import {createGlobalStyle} from "styled-components"

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    li {
        font-size: 1em;
    }

    a {
        font-size: 1.2em;
    }

    nav {
        width: 100%;
        height: 5em;
        // background-color: black;
        padding: 1em;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: absolute;
        top: 0;
    }

    // .svg--element > path {
    //     fill: red;
    //     margin-left: 0;
    // }

    .burger-menu {
        width: 2.2em;
        // background-color: red;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
        cursor: pointer;
    }

    .svg--element.clicked {
        display: block;
    }

    .svg--element.unclicked {
        display: none;
    }

    .svg--element.closed {
        display: none;
    }

    .svg--element.open {
        display: block;
        // background-color: red;
        padding-left: 5px;
        margin-top: 15px;
        z-index: 1;
    }

    // .svg--element.unclosed {
    //     display: block;
    // }

    .burger-bar {
        width: 2em;
        height: 0.2em;
        background-color: black;
        margin: 0.2em;
        border-radius: 0.5em;
        z-index: 1;
    }

    .svg--logo-mobile {
        width: 100%;
        margin-left: 6.5em;

        @media screen and (min-width: 414px) {
            margin-left: 9em;
        }
    }

    .menu {
        width: 100%;
        height:  6.875em;
        background-color: white;
        position: absolute;
        top: 0;
        display: none;

        @media screen and (min-width: 414px) {
            width: 414px;
        }
    }


    // sliding menu animation
    .hidden {
        display: none;
        transition: ease-out 0.5s;
    }

    .visible {
        display: inherit;
        box-shadow: 0 0 100px 10000px rgba(0, 0, 0, 0.5);
        transition: ease-out 0.5s;
    }

    // nav links

    .nav--links {
        display: flex;
        // flex-direction: column;
        justify-content: center;
        align-items: center;
        // border: 1px solid red;
        width: fit-content;
        margin: 0 auto;
        margin-top: 2em;
        margin-left: 4.5em;

        @media screen and (min-width: 414px) {
            margin-left: 6em;
        }
    }

    a:hover {
        color: #444444;
    }


    a:active {
        color: #444444;
        transition: ease-out 0.5s;
    }

    .nav--links > li {
        margin-right: 30px;
        // transition: ease-out 0.5s;
    }

    .nav--links:nth-child(1) {
        margin-left: 80px;
    }

    // media queries
    @media screen and (1366px <= width <= 1440px) {
        .burger-menu {
            display: none;
        }

        .menu {
            width: 840px;
            display: flex;
            background-color: transparent;
            color: #fff;
            font-weight: normal;
            letter-spacing: -0.67px;
            padding: 0;
            margin: 0;
            // border: 1px solid white;
            // justify-content: space-between;
            align-items: center;
    
        }

        .nav--links {
            width: 300px;
            // border: 1px solid white;
            font-weight: normal;
            padding: 0;
            margin: auto;
            margin-left: 56.26px;
            display: flex;
            align-items: center;
            position: relative;
            justify-content: space-between;
        }

        .nav--links .last-link {
            margin-right: 0;
        }

        .nav--links > li {
            display: flex;
            justify-content: space-between;
            // align-items: center;
            padding: 0;
            margin-right: 0;
        }

        li {
            // border: 1px solid white;
            color: #fff;
        }

        li > a {
            position: relative;
            cursor: pointer;
            text-decoration: none;
            font-size: 1.2em;
            color: #fff;
            // border: 1px solid red;
        }

        a:after {
            content: '';
            position: absolute;
            background-color: #fefeff;
            border-radius: 5px;
            height: 3px;
            width: 0;
            left: 0;
            bottom: -10px;
        }
        
        a:hover {
            color: #A0A0A0;
            transition: 0.3s ease-in-out;
        }
        
        a:hover:after {
            width: 100% ;
            transition: 0.3s ease-in-out;
        }

        .svg--logo-mobile {
            display: none;
        }

        .svg--logo {
            width: fit-content;
            // margin-top: 63px;
            margin-left: 64px;
            margin-right: 20px;;
            z-index: 1;
            // border: 1px solid blue;
        }

        .visible {
            display: none;
        }
    
    }
`
export default GlobalStyle;