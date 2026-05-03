import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "HedgeInvoice — Protect Your Freelance Income from Currency Risk",
  description: "Automatically calculate currency exposure on pending invoices and execute forward contract hedges. Built for international freelancers with invoices over $5k."
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="c5a8bc40-c7f4-406e-b342-574e421043b7"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
