import { css } from "styled-components";
export const mobile = (props) => {
    return css`
    @media only screen and (max-width: 380px) {
        ${props}

    }`
}
// if the devuice is tablet
export const tablet = (props) => {
    return css`
    @media only screen and (max-width: 380px) {
        ${props}

    }`
}