import React, { useState, useEffect} from 'react';
import axios from 'axios';
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

  const [lastPrice, setLastPrice] = useState([]);
  const [lastTransaction, setLastTransaction] = useState([]);

  const fetchData = async () => {
        try {
            const lastPrices = await axios.get('/api/last_prices/BTC/USD/', {
                headers: {
                    'Content-type': 'application/json',
                }
            });
            if (lastPrices.status === 200) {
                let data = lastPrices.data
                setLastPrice(data.data)
            } else {
                alert('fetching last price data went wrong!!!');
            }


            const lastTransactions = await axios.get('/api/trade_history/BTC/USD/', {
                headers: {
                    'Content-type': 'application/json',
                },
            });
            if (lastTransactions.status === 200) {
                setLastTransaction(lastTransactions.data)
            } else {
                alert('fetching last transactions data went wrong!!!');
            }

        } catch (err) {
            console.log('err :', err);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    // console.log('lastPrice :', lastPrice);
    // console.log('lastTransaction :', lastTransaction);

  return (
    <div className={styles.CustomStyles}>
      <VerticalNav />
      <HorizentalNav />
      <div className={styles.customStyles}>
        <Exchange exchange={lastPrice}/>
        <Graph />
        <Sales lastTransaction={lastTransaction}/>
        <Purchases lastTransaction={lastTransaction} exchange={lastPrice}/>
        <Sell />
        <Buy />
        <LastTransaction lastTransaction={lastTransaction}/>
      </div>
    </div>
  )
}
