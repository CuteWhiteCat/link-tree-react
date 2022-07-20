import styled from "styled-components";

export const Container = styled.div``;

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
`;

export const InsTag = styled.h1`
    display: inline-block;
    font-size: 0.8em;
    font-weight: bold;
    border-radius: 1em;
    background-color: #000a;
    color: #fff;
    padding: 0.3em 0.6em;
    border: 1px solid #fffa;
    box-shadow: rgb(28 32 93 / 24%) 1px 2px 8px 0px;
`;

export const LinksWrapper = styled.ul`
    box-sizing: border-box;
    list-style: none;
    margin: 0 auto;
    padding: 2em;
`;

export const ButtonLinks = styled.li`
    background-color: #fff;
    border-radius: 10em;
    padding: 1em;
    margin: 1.4em 0;
    box-shadow: rgb(28 32 93 / 24%) 0px 2px 8px 0px;
`;

export const Link = styled.a``;

export const Icon = styled.img``;
