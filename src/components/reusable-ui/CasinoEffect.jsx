import React from 'react'
import { styled } from 'styled-components';
import { TransitionGroup, CSSTransition } from 'react-transition-group';


export default function CasinoEffect({ count }) {
    return (
        <TransitionGroup className={"transition-group"} component={CasinoEffectStyled}>

            <CSSTransition
                classNames={"count-animated"}
                timeout={1000}
                key={count}>
                <span>{count}</span>
            </CSSTransition>

        </TransitionGroup>
    )
}

const CasinoEffectStyled = styled.div`

position: relative;
overflow-y: hidden;


span {
    display: inline-block;
}

.count-animated-enter {
    transform: translateY(100%);

}
.count-animated-enter-active {
    transition: 300ms;
    transform: translateY(0%);

}

.count-animated-exit {
    
    transform: translateY(0%);
    position: absolute;
    right: 0;
    bottom: 0;

}
.count-animated-exit-active {
    transform: translateY(-100%);
    transition: 300ms;

}


  
`;
