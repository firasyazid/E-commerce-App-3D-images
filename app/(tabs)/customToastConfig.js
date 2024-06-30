// customToastConfig.js
import { BaseToast, ErrorToast } from 'react-native-toast-message';

export const customToastConfig = {
  success: (props) => (
    <BaseToast
      {...props}
      style={{
        borderLeftColor: '#1B3C73', // Change the left border color here
        backgroundColor: 'white',
      }}
     />
  ),
  error: (props) => (
    <ErrorToast
      {...props}
      style={{
        borderLeftColor: 'red', 
        backgroundColor: 'white',
      }}
     />
  ),
 };
