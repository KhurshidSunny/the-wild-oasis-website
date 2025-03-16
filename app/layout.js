import Header from "./_components/Header";
import Logo from "./_components/Logo";
import Navigation from "./_components/Navigation";
import { ReservationProvider } from "./_components/ReservationContext";
import "./_styles/globals.css"

import {Josefin_Sans} from "next/font/google";

const josefin = Josefin_Sans({
  subsets: ['latin'],
  display: 'swap'
  
})

export const metadata = {
  title: {
    template: "%s / The Wild Oasis",
    default: "Welcome / The Wild Oasis"
  },
  description: "Luxurious cabin hotel, located in the heart of the Italian Dolomites, surrounded by beautiful mountains and dark forests"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={` ${josefin.className} bg-primary-950 min-h-screen antialiased  text-primary-100 flex flex-col`}>
        <Header />
        <div className="flex-1  px-8 py-12  w-full"> 
        <main className="max-w-4xl   grid ">

          <ReservationProvider>
            {children}
          </ReservationProvider>
          </main>
        </div>
        
      </body>
    </html>
  );
}
