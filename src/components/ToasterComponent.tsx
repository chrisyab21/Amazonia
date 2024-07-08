import { Toaster } from "react-hot-toast"


export const ToasterComponent = () => {
  return (
    <Toaster
      position="top-right"
      toastOptions={{
        style: {
          color: 'whitesmoke',
        },
        success: {
          style: {
            background: '#22bb33',
          },
          duration: 4000
        },
        error: {
          style: {
            background: '#bb2124',
          },
        },
        loading: {
          style: {
            color: 'black',
          },
        },
      }}
    />
  );
};
