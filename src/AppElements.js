import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
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

    @media screen and (max-width: 480px) {
        width: 5.5em;
        height: 5.5em;
    }
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

    @media screen and (max-width: 480px) {
        font-size: 0.8em;
    }
`;

export const LinksWrapper = styled.ul`
    box-sizing: border-box;
    list-style: none;
    padding: 2em;
    min-width: 480px;

    @media screen and (max-width: 480px) {
        min-width: 350px;
        margin-top: -5px;
        font-size: 0.85em;
    }

    @media screen and (max-width: 280px) {
        min-width: 250px;
        margin-top: -5px;
        font-size: 0.5em;
    }
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

    @media screen and (max-width: 480px) {
        margin: 1.6em 0;
    }

    @media screen and (max-width: 280px) {
        padding: 5px;
        margin: 2.5em 0;
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
    position: fixed;
    width: 100%;
    left: 0;
    bottom: 0;
    margin-bottom: 100px;
    text-align: center;
`;

export const Rights = styled.text`
    font-size: smaller;
    font-family: "Open Sans", sans-serif;
    letter-spacing: 1.5px;

    @media screen and (max-width: 480px) {
        font-size: 10px;
    }

    @media screen and (max-width: 375px) {
        font-size: 8px;
    }

    @media screen and (max-width: 280px) {
        font-size: 4px;
    }
`;
