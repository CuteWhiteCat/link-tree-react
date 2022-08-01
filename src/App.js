import {
  Header,
  Avatar,
  InsTag,
  LinksWrapper,
  Link,
  Icon,
  ButtonLinks,
  Container,
  Rights,
  RightsWrapper,
} from "./AppElements";

import AvatarIcon from "./images/WhiteCat.jpg";
import HomePage from "./images/homepage.svg";
import Notes from "./images/notes.svg";
import Website from "./images/website.svg";
import Github from "./images/github.svg";
import PullToRefresh from "react-simple-pull-to-refresh";

const handleRefresh = () => {
  window.location.reload();
};

function App() {
  return (
    <PullToRefresh onRefresh={handleRefresh}>
      <Container id="main">
        <Header>
          <Avatar src={AvatarIcon} alt="avatar" />
          <InsTag href="https://www.instagram.com/whitecatstudy/">
            @ whitecatstudy
          </InsTag>
        </Header>
        <LinksWrapper>
          <ButtonLinks>
            <Link href="https://whitecat.tk">
              <Icon src={HomePage} alt="homepage" width="22" /> &thinsp; Blog
            </Link>
          </ButtonLinks>
          <ButtonLinks>
            <Link href="https://drive.google.com/drive/folders/1AHssKp04aYFJLYQUMbb9ZXvjV1lm1j53?usp=sharing">
              <Icon src={Notes} alt="notes" width="23" /> &thinsp; 筆記下載
            </Link>
          </ButtonLinks>
          <ButtonLinks>
            <Link href="https://izcc.ckcsc.net">
              <Icon src={Website} alt="izcc-website" width="18" /> &thinsp;
              暑訓網站
            </Link>
          </ButtonLinks>
          <ButtonLinks>
            <Link href="https://github.com/CuteWhiteCat/link-tree-react">
              <Icon src={Github} alt="github" width="20" /> &thinsp; Github 專案
            </Link>
          </ButtonLinks>
        </LinksWrapper>
        <RightsWrapper>
          <Rights>
            WhiteCat © {new Date().getFullYear()} All rights reserved.
          </Rights>
        </RightsWrapper>
      </Container>
    </PullToRefresh>
  );
}

export default App;
