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
import Youtube from "./images/youtube.svg";
import Twitter from "./images/twitter.svg";
import Github from "./images/github.svg";

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
                    <Link href="https://www.google.com/">
                        <Icon src={Youtube} alt="youtube" width="20" />
                        Youtube
                    </Link>
                </ButtonLinks>
                <ButtonLinks>
                    <Link href="https://www.google.com/">
                        <Icon src={Twitter} alt="twitter" width="20" />
                        Twitter
                    </Link>
                </ButtonLinks>
                <ButtonLinks>
                    <Link href="https://www.google.com/">
                        <Icon src={Github} alt="github" width="20" />
                        Github
                    </Link>
                </ButtonLinks>
            </LinksWrapper>
        </Container>
    );
}

export default App;
