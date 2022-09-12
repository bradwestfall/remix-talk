import type { MetaFunction } from '@remix-run/node'
import styles from './styles/global.css'
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react'
import { AppProvider } from './context'
import { MainLayout } from './components/MainLayout'

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'Remix Demo',
  viewport: 'width=device-width,initial-scale=1',
})

export function links() {
  return [{ rel: 'stylesheet', href: styles }]
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;600&family=Source+Code+Pro&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <AppProvider>
          <MainLayout>
            <Outlet />
          </MainLayout>
        </AppProvider>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
