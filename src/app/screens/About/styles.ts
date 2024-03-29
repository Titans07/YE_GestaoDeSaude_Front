import styled from "styled-components/native";

export const Container = styled.View`
    width: 80%;
    height: 80%;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.COLORS.GREEN_700};
    padding: 10px;
    margin-top: 50px;
`;

export const Logon = styled.Image`
    margin-top: 40px;
    margin-bottom: 10px;
`;

export const Txt = styled.Text`
    color: ${({ theme }) => theme.COLORS.WHITE};
    margin-top: 20px;
    margin-bottom: 5px;
    font-size: ${({ theme }) => theme.FONT_SIZE.LG};
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`;

export const SecTxt = styled.Text`
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: ${({ theme }) => theme.FONT_SIZE.LG};
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
    padding: 5px;
`;

export const ThirdTxt = styled.Text`
    color: ${({ theme }) => theme.COLORS.WHITE};
    margin-bottom: 5px;
    font-size: ${({ theme }) => theme.FONT_SIZE.XL};
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`;

export const SecTxtCont = styled.View`
    width: 100%;
`;

export const SubTxt = styled.Text`
    color: ${({ theme }) => theme.COLORS.WHITE};
    margin-bottom: 5px;
    margin-left: 10px;
    font-size: ${({ theme }) => theme.FONT_SIZE.LG};
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`;
