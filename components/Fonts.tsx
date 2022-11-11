import { Global } from '@emotion/react'


const Fonts = () => (
  <Global
    styles={`
      
      @font-face {
        font-family: 'Sharp Grotesk';
        font-weight: 500;
        src: url('../public/fonts/SharpGrotesk-Medium25.otf') format('opentype');
      },
      
      `}
  />
)

export default Fonts