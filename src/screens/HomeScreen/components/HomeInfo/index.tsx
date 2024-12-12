import React, { useMemo } from 'react';
import { Text, View } from 'react-native';
import { cs } from '../../styles';
import { positionHelpers } from '../../../../styles';

const HELLO_THERE_TEXT = 'Hello there';
const BACKGROUND_COLOR_TEXT = 'BackgroundColor';

interface HomeInfoProps {
    backgroundColor: string
}

const HomeInfo = ({ backgroundColor }: HomeInfoProps) => {
    const memoizedColor = useMemo(() => backgroundColor, [backgroundColor]);

    return (
        <>
            <Text style={cs.textStyle}>{HELLO_THERE_TEXT}</Text>
            <View style={[positionHelpers.center, cs.colorContainer]}>
                <Text style={cs.textBackgroundColor}>{BACKGROUND_COLOR_TEXT}: <Text style={cs.colorStyle}>{memoizedColor}</Text></Text>
            </View>
        </>
    );
};

export default HomeInfo;
