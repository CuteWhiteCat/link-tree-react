import styled from "styled-components";

export const Container = styled.div`
    z-index: 0;
    position: relative;
    opacity: 0;
    filter: blur(10px);
    transition: all 2s ease-in-out;
    min-height: 100vh;
`;

export const Header = styled.header`
    margin-top: 1em;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
`;

export const Avatar = styled.img`
    width: 6em;
    height: 6em;
    border-radius: 100%;
    border: 1px solid #fff;
    box-shadow: rgb(28 32 93 / 24%) 0px 2px 8px 0px;
    z-index: 1;
`;

export const InsTag = styled.h1`
    display: inline-block;
    font-size: 0.8em;
    font-weight: bold;
    border-radius: 1em;
    background-color: rgba(0, 0, 0, 50%);
    backdrop-filter: blur(10px) saturate(150%) contrast(180%);
    -webkit-backdrop-filter: blur(10px) saturate(160%) contrast(180%);
    color: #fff;
    padding: 0.3em 0.6em;
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
    padding: 1em;
    margin: 1.4em 0;
    box-shadow: rgb(28 32 93 / 24%) 0px 2px 8px 2px;
`;

export const Link = styled.a`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 0.5em;
    color: #000;
    text-decoration: none;
`;

export const Icon = styled.img``;
