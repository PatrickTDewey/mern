import { styled } from "styletron-react";
 
const StyleTronBox = styled('div', props => ({
    border: '1px solid lightgray',
    background: props.bgColor,
    width: props.width || '100px',
    height: props.height || '100px',
 
    display: 'none',
 
    ['@media screen and (min-width: ' + (props.minWidth || '500px') + ')']: {
        display: 'block'
    }
}));
 

export default StyleTronBox