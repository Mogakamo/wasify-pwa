import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'
import { withApollo } from '../lib/withApollo'
import { useFetchUser } from '../lib/user'

function Home() {
  const { user, loading } = useFetchUser()

  return (
    <>
    <div>
      <Head>
        <title>Wasify</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>

    if (loading) {
      return <div></div>
    }
    </>
  )
}

export default withApollo()(Home)