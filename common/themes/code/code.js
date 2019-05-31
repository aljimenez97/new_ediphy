
export const DEFINITION = {
    /*
    * viewName: [<Nombre del tema en inglés>, <Nombre del tema es español>],
    * font: Fuente principal del tema (tiene que ser de Google Fonts),
    * background: [
    *   Insertar colores o url a las imágenes del tema. Por ejemplo: 'url(/themes/orange/background_images/orange0.jpg)',...
    * ],
    * colors: {
    *   themeColor1: color principal del tema,
    *   themeColor2:
    *   themeColor3:
    *   themeColor4:
    *   themeColor5:
    * },
    * images: {
    *   template1: { left: '' },
    *   template3: { topLeft: 'topLeft.png', topRight: 'topRight.png', bottomLeft: 'bottomLeft.png', bottomRight: 'bottomRight.png' },
    *   template7: { left: '' },
    * }
    * */
    viewName: ['Code', 'Código'],
    font: 'Source Code Pro',
    background: {
        f16_9: [
            'url(/themes/code/background_images/code_169.jpg)',
        ],
        f4_3: [
            'url(/themes/code/background_images/code_43.jpg)',
        ],
    },
    colors: {
        themeColor1: '#D906FB',
        themeColor2: '#F62B73',
        themeColor3: '#A6DF3E',
        themeColor4: '#FFE40B',
        themeColor5: '#6BD5EA',
        themeColor6: '#FFFFFF',
    },
    images: {
        template1: { left: 'left.jpg' },
        template3: { topLeft: 'topLeft.jpg', topRight: 'topRight.jpg', bottomLeft: 'bottomLeft.jpg', bottomRight: 'bottomRight.jpg' },
        template7: { left: 'seven.jpg' },
    },
};
