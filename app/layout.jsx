import Footer from '../components/Footer';
import Nav from '../components/Nav';
import { Outfit } from '@next/font/google';
import cn from 'classnames';
import './globals.css';

const outfitFont = Outfit({ display: 'swap', subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={cn(
          outfitFont.className,
          'flex justify-center items-center px-4'
        )}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
