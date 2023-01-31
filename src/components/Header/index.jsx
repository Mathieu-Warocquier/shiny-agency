import { Link } from 'react-router-dom'
import styled from 'styled-components'
import DarkLogo from '../../assets/dark-logo.png'

function Header() {

  const StyledLink = styled(Link)`
    padding: 15px;
    color: #8186a0;
    text-decoration: none;
    font-size: 18px;
    ${(props) =>
      props.$isFullLink &&
      `color: white; border-radius: 30px; background-color: #5843E4;`}
    `

  const NavContainer = styled.nav`
    padding: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
   `

  const HomeLogo = styled.img `
    height: 70px;
  `

    return (
        <NavContainer>
            <Link to="/"> <HomeLogo src={DarkLogo} /> </Link>
            <StyledLink to="/" $isFullLink>Accueil</StyledLink>
            <StyledLink to="/survey/1" $isFullLink>Questionnaire</StyledLink>
            <StyledLink to="/freelances" $isFullLink>Freelances</StyledLink>
        </NavContainer>
    )
}

export default Header
