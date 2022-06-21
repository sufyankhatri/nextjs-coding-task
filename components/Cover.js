import React from 'react';
import { MainContainer, InnerContainer, InfoContainer, ImageContainer, ImageElem, RadialBlurDiv, GradientX, GradientY } from './styled';
import Button from './Button';

export default function Cover({ primary, children }) {
    return (
        <MainContainer>
            <InnerContainer>
                <InfoContainer>
                    <h1> Future-proof your business. WiFi 6E is here.</h1>
                    <p> Offer your customers the fastest performance <br /> possible with Plume.They’ re ready. </p>
                    <Button primary size="large">
                        Learn more about WiFi 6E
                    </Button>
                </InfoContainer>
                <ImageContainer>
                    <GradientX/>
                    <GradientY/>
                    <ImageElem src="/mobile-image.png" />
                </ImageContainer>
            </InnerContainer>
        </MainContainer>
    );
}

Cover.propTypes = {
    primary: PropTypes.bool,
    children: PropTypes.string.isRequired,
};

Cover.defaultProps = {
    primary: false,
    onClick: 'click me',
};