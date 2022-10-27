import { Global } from '@emotion/react'


const Fonts = () => (
  <Global
    styles={`
      
      @font-face {
        font-family: 'Sharp Grotesk';
        font-weight: 500;
        src: url('../public/fonts/SharpGrotesk-Medium25.otf') format('opentype');
      }
      @font-face {
        font-family: 'Roobert-Regular';
        font-weight: 400;
        src: url('../public/fonts/Roobert-Regular.tff') format('truetype');
      }
      @font-face {
        font-family: 'Roobert TWHINT SemiBold';
        src: url('../public/fonts/Roobert-SemiBold.otf') format('opentype');
      }
      @font-face {
        font-family: 'Roobert TWHINT Bold';
        src: url('../public/fonts/Roobert-Bold.otf') format('opentype');
      }
      @font-face {
        font-family: 'Basis Grotesque Pro';
        src: url('../public/fonts/BasisGrotesquePro-Bold.tff') format('truetype');
      }
      
     

      `}
  />
)

export default Fonts