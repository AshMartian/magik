import { MantineThemeOverride } from '@mantine/core';

export const theme: MantineThemeOverride = {
    colorScheme: "dark",
    colors: {
        brand: ['#F0BBDD', '#ED9BCF', '#EC7CC3', '#ED5DB8', '#F13EAF', '#F71FA7', '#FF00A1', '#E00890', '#C50E82','#AD1374' ],
    },
    primaryColor: 'brand',
    components: {
        Button: {
            styles: {
                root: {
                    fontSize: "2rem",
                    fontWeight: "bold",
                    padding: "0.7rem",
                    height: 'fit-content',
                    border: '2px solid rgba(140, 82, 255, 1)',
                    borderRadius: '1rem',
                },
            },
        },
    },
};