import styled from "styled-components";

export const Container = styled.div`
    .wrapper {
        width: 8rem;
        height: 1rem;
        position: relative;
        z-index: 1;
    }

    .circle {
        width: .8rem;
        height: .8rem;
        position: absolute;
        border-radius: 50%;
        background-color: #fff;
        left: 15%;
        transform-origin: 50%;
        animation: circle7124 .5s alternate infinite ease;
    }

    @keyframes circle7124 {
        0% {
            top: 1rem;
            height: 5px;
            border-radius: 50px 50px 25px 25px;
            transform: scaleX(1.7);
        }

        40% {
            height: .4rem;
            border-radius: 50%;
            transform: scaleX(1);
        }

        100% {
            top: 0%;
        }
    }

    .circle:nth-child(2) {
        left: 45%;
        animation-delay: .2s;
    }

    .circle:nth-child(3) {
        left: auto;
        right: 15%;
        animation-delay: .3s;
    }
`;
