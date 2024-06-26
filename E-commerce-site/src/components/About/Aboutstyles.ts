import styled from "styled-components";

const Container = styled.div`
    width: 376px;
    display: block;
    // border: 1px solid red;

    & > img {
        width: 375px;
    }

    @media screen and (1366px <= width <= 1440px) {
        width: 100%;
        display: grid;
        grid-template: 266px/ 420px 580px 440px;
        transition: ease-out 0.5s;

        img {
            width: 100%;
            height: 100%;
            transition: ease-out 0.5s;
        }
    }

    @media (min-width: 414px) {
        img {
            width: 414px;
            object-fit: cover;
        }
    }

`

const Section = styled.section`
    width: 311px;
    height: 213px;
    margin: 49px 32px;
    // border: 1px solid blue;

    & > p {
      margin-top: 16px;
      width: 311px;
    }

    & > h3 {
        // padding-top: 49px;
        width: 311px;
        font-size: 1rem;
        letter-spacing: 5.83px;

    }

    @media screen and (1366px <= width <= 1440px) {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 68px 48px 58px 48px;
        // border: 1px solid blue;

        p, h3 {
            width: 100%;
            transition: ease-out 0.5s;
        }

    }

    @media (min-width: 414px) {
        margin-left: 55px; 
    }

`
export {
    Container,
    Section
};
