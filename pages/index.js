import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/Home.module.css';
import VerticalNav from '@/components/vertical-nav';
import HorizentalNav from '@/components/horizental-nav';
import Sell from '@/components/sell';
import Buy from '@/components/buy';
import Exchange from '@/components/exchange';
import LastTransaction from '@/components/lasttransaction';
import Purchases from '@/components/purchases';
import Sales from '@/components/sales';
import Graph from '@/components/graph';

export default function Home() {

  return (
    <div className={styles.CustomStyles}>
      <VerticalNav />
      <HorizentalNav />
      <div className={styles.customStyles}>
        <Exchange />
        <Graph />
        <Sales />
        <Purchases />
        <Sell />
        <Buy />
        <LastTransaction />
      </div>
    </div>
  )
}
