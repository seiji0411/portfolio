import headerNavLinks from '@/data/headerNavLinks';
import { ReactNode } from 'react';
import Footer from './Footer';
import Link from './Link';
import MobileNav from './MobileNav';
import SectionContainer from './SectionContainer';
import ThemeSwitch from './ThemeSwitch';
import Image from "next/image";

interface Props {
  children: ReactNode;
}

const LayoutWrapper = ({ children }: Props) => {
  return (
    <SectionContainer>
      <div className='flex h-screen flex-col justify-between'>
        <header className='flex items-center justify-between'>
          <div className='flex justify-center'>
            <div className='flex items-center'>
              <Image
                  src={'/static/avatar.jpg'}
                  alt='avatar'
                  width='48px'
                  height='48px'
                  className='h-48 w-48 rounded-full'
              />
            </div>
            <p className='my-2 text-xl lg:my-4 lg:text-2xl pl-4'>
              {'Seiji'}
            </p>
          </div>
          <div className='flex items-center text-base leading-5'>
            <div className='hidden sm:block'>
              {headerNavLinks.map(link => (
                <Link
                  key={link.title}
                  href={link.href}
                  className='p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4'
                >
                  {link.title}
                </Link>
              ))}
            </div>
            <ThemeSwitch />
            <MobileNav />
          </div>
        </header>
        <main className='mb-auto flex-grow'>
          {children}
        </main>
        <Footer />
      </div>
    </SectionContainer>
  );
};

export default LayoutWrapper;
