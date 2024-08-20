import theme from "@/app/theme";
import { TouchableOpacityProps } from "react-native";
import styled from "styled-components/native";

export interface ButtonProps extends TouchableOpacityProps {
    backgroundColor?: string;
    borderColor?: string;
    borderRadius?: number;
    height?: number;
}

const Button = styled.TouchableOpacity.attrs(() => ({
    activeOpacity: 0.75,
}))<ButtonProps>`
    background-color: ${({backgroundColor}) => backgroundColor ? backgroundColor : theme.colors.dark300};
    border-color: ${({borderColor}) => borderColor ? borderColor : theme.colors.gray300};
    border-width: ${({borderColor}) => borderColor ? borderColor : 1}px;
    border-radius: ${({borderRadius}) => borderRadius ? borderRadius : 18}px;
    height: ${({height}) => height ? height : 54}px;
    justify-content: center;
    width: 300px;
`;

export default Button;
