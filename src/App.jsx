import React from 'react'
import { createBrowserRouter, Form, RouterProvider } from 'react-router-dom'
import { About, Contact, Home, RootLayout } from './page/index'
import ThemeContextProvider from './contextx/useTheme'
import LanguageContextProvider from './contextx/useLanguage'

const App = () => {
  const routers = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: "/about",
          element: <About />
        },
        {
          path: "contact",
          element: <Contact />
        }
      ]
    }
  ])
  return (
    <ThemeContextProvider>
      <LanguageContextProvider>
        <RouterProvider router={routers} />
      </LanguageContextProvider>
    </ThemeContextProvider>
  )
}

export default App