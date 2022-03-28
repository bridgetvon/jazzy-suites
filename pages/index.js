import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Tickets from '../components/Tickets';
import Layout from '../components/Layout';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <div>
      <Layout>
      <Tickets />
      <Contact />
      </Layout>
    </div>
  )
}
