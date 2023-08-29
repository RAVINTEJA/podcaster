import '@/styles/globals.css'

import { ThemeProvider } from "@material-tailwind/react";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <div className=' min-w-fit'>
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  )
}
