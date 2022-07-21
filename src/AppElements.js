import styled from "styled-components";

export const Container = styled.div`
    z-index: 0;
    position: relative;
    opacity: 0;
    filter: blur(10px);
    transition: all 1s ease-in-out;
    min-height: 100vh;
    overflow: hidden;
`;

export const Header = styled.header`
    margin-top: 3em;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (max-width: 500px) {
        margin-top: 1em;
    }
`;

export const Avatar = styled.img`
    width: 6em;
    height: 6em;
    border-radius: 100%;
    border: 1px solid #fff;
    box-shadow: rgb(28 32 93 / 24%) 0px 2px 8px 0px;
    z-index: 1;
`;

export const InsTag = styled.a`
    display: inline-block;
    margin-top: 20px;
    text-decoration: none;
    font-size: 0.9em;
    font-weight: bold;
    border-radius: 1em;
    background-color: rgba(0, 0, 0, 60%);
    backdrop-filter: blur(10px) saturate(150%) contrast(180%);
    -webkit-backdrop-filter: blur(10px) saturate(160%) contrast(180%);
    color: #fff;
    padding: 0.3em 0.8em;
    border: 0.5px solid #fffa;
`;

export const LinksWrapper = styled.ul`
    box-sizing: border-box;
    list-style: none;
    margin: 0 auto;
    padding: 2em;
    max-width: 480px;
`;

export const ButtonLinks = styled.li`
    background-color: rgba(255, 255, 255, 60%);
    backdrop-filter: blur(10px) saturate(160%) contrast(180%);
    -webkit-backdrop-filter: blur(10px) saturate(160%) contrast(180%);
    border-radius: 10em;
    margin: 1.4em 0;
    box-shadow: rgb(28 32 93 / 24%) 0px 2px 8px 2px;
    transition: all 0.3s ease-in-out;

    &:hover {
        background-color: rgba(200, 200, 200, 30%);
    }
`;

export const Link = styled.a`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 1em;
    color: #000;
    text-decoration: none;
    letter-spacing: 0.7px;
`;

export const Icon = styled.img``;

export const RightsWrapper = styled.div`
    position: absolute;
    width: 100%;
    bottom: 5%;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    text-align: center;
`;

export const Rights = styled.small`
    font-weight: 500;
    font-family: "Open Sans", sans-serif;
    letter-spacing: 1.5px;
`;
