import styled from "styled-components"

export const Container = styled.div`
    max-width: 80%;
    width: 100%;
    margin: 0 auto;
    margin-top: 120px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center; 
`

export const Title = styled.h2`
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    width: 320px;
    margin-bottom: 20px;
    line-height: 44px;

    color: #FFFFFF;
`

export const TitleLogin = styled.p`
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    margin-bottom: 20px;
    line-height: 44px;

    color: inherit;
`

export const SubtitleLogin = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    margin-bottom: 35px;
    line-height: 25px;

    color: inherit;
`

export const EsqueciText = styled.p`
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;
    
    color: #e5e044; 
    
    &:hover {
        cursor: default;
        color: #23dd7a;
    }
`

export const CriarText = styled.p`
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;

    color: #e23dd7;

    &:hover {
        cursor: default;
        color: #23dd7a;
    }
`

export const Wrapper = styled.div`
    max-width: 300px;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
`

export const Column = styled.div`
    flex: 1;
`

