export const generateColors = () => {
    const colorHex = `#${Math.random().toString(16).slice(2, 8)}`;

    return colorHex;
};
