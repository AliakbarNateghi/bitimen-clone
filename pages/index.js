import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/Home.module.css';
import VerticalNav from '@/components/vertical-nav';
import HorizentalNav from '@/components/horizental-nav';
import Sell from '@/components/sell';
import Buy from '@/components/buy';

export default function Home() {
  return (
    <>
      <VerticalNav />
      <HorizentalNav />
      <Sell />
      <Buy />
    </>
  )
}
