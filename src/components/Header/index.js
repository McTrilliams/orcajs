import React from 'react';
import { Link } from 'react-router-dom';
// Components
import MimeLogo from '../../images/mime_logo.jpg';

import { Wrapper, Content, MimeLogoImg } from './Header.styles';

const Header = () => (
    <Wrapper>
        <Content>
            <Link to='/'>
                <MimeLogoImg src={MimeLogo} alt='DrMime Logo' />
            </Link>
            <Link to='/singlecalcgen'>
                <div><h1>Single Calculation Generator</h1></div>
            </Link>
        </Content>
    </Wrapper>
);

export default Header;