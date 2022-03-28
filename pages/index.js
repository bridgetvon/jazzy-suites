import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Tickets from '../components/Tickets';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <div>
      <Layout>
      <Tickets />
      </Layout>
    </div>
  )
}
