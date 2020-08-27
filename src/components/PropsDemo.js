import React from 'react'
import {LandingPageWrapper} from '../styles/LandingPage.style'

const PropsDemo = (props) => {
    const {s1, s2} = props
    return (
        <LandingPageWrapper>
            Hello {s1} and {s2}
        </LandingPageWrapper>
    )
}

export default PropsDemo;