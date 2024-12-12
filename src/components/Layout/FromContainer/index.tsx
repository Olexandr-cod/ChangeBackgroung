import React, { ReactNode } from 'react';
import {
    TouchableOpacity,
    View,
} from 'react-native';
import { positionHelpers } from '../../../styles';

interface Props {
    backgroundColor: string
    onPress: () => void
    children?: ReactNode;
}

const FormContainer = ({ backgroundColor, onPress, children }: Props) => {
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            style={positionHelpers.fill}
            onPress={onPress}>
            <View style={[positionHelpers.fillCenter, { backgroundColor }]}>
                {children}
            </View>
        </TouchableOpacity>
    );
};

export default FormContainer;