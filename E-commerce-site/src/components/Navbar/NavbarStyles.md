import styled from 'styled-components'

const Navstyles = styled.nav`
    width: 375px;
    padding: 60px 10px;
    border: 1px solid red;
    font-family: "league Spartan", sans-serif;
    text-decoration: none;
    list-style: none;
`

const Ul = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    font-family: "league Spartan", sans-serif;
`

const Li = styled.li`
    display: flex-inline;
    font-size: 16px;
    font-weight: 700;
    margin-right: auto;
`
const SVG = styled.svg`
    margin-left: 10px;
    margin-right: auto;
`
export {
    Navstyles,
    Ul,
    Li,
    SVG,
}
;
