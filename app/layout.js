import './globals.css'

export const metadata = {
  title: 'ProseAI Free - Book Editor & YouTube Creator',
  description: 'Completely free AI tools. No API costs. No credit card needed.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
