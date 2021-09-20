import React from 'react';

import MimeLogo from '../../images/mime_logo.jpg';

import { Wrapper, Content, MimeLogoImg } from './Header.styles';

const Header = () => (
    <Wrapper>
        <Content>
            <MimeLogoImg src={MimeLogo} alt='DrMime Logo' />
        </Content>
    </Wrapper>
);

export default Header;