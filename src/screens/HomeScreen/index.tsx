import React, { useCallback, useState } from 'react';
import FormContainer from '../../components/Layout/FromContainer';
import { generateColors } from '../../utils/generateColors';
import HomeInfo from './components/HomeInfo';

const HomeScreen = () => {
    const [backgroundColor, setBackgroundColor] = useState<string>('#FFFFFF');

    const handlePress = useCallback(() => {
        setBackgroundColor(generateColors());
    }, []);

    return (
        <FormContainer backgroundColor={backgroundColor} onPress={() => handlePress()}>
            <HomeInfo backgroundColor={backgroundColor} />
        </FormContainer >
    );
};

export default HomeScreen;
