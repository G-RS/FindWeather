import styled from "styled-components/native";
import theme from "@/theme";

interface TextProps {
    font?: string;
    fontSize?: number;
    color?: string;
}

const Text = styled.Text<TextProps>`
    font-family: ${props => props.font ? props.font : theme.fontFamily.OverpassRegular};
    font-size: ${props => props.fontSize ? props.fontSize : theme.fontSize.md22}px;
    color: ${props => props.color ? props.color : theme.colors.gray100};
    text-align: center;
`;

export default Text;
