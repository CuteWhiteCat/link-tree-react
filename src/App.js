import {
    Header,
    Avatar,
    InsTag,
    LinksWrapper,
    Link,
    Icon,
    ButtonLinks,
    Container,
} from "./AppElements";

import AvatarIcon from "./images/WhiteCat.jpg";
import HomePage from "./images/homepage.svg";

function App() {
    return (
        <Container>
            <Header>
                <Avatar src={AvatarIcon} alt="avatar" />
                <InsTag>@ whitecatstudy</InsTag>
            </Header>
            <LinksWrapper>
                <ButtonLinks>
                    <Link href="https://www.google.com/">
                        <Icon src={HomePage} alt="homepage" width="20" />
                        My Profile
                    </Link>
                </ButtonLinks>
                <ButtonLinks>
                    <Link href="https://www.google.com/">Youtube</Link>
                </ButtonLinks>
                <ButtonLinks>
                    <Link href="https://www.google.com/">Twitter</Link>
                </ButtonLinks>
                <ButtonLinks>
                    <Link href="https://www.google.com/">Github</Link>
                </ButtonLinks>
            </LinksWrapper>
        </Container>
    );
}

export default App;
