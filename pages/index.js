import Header from '../components/Header';
    import Services from '../components/Services';
    import VisionMission from '../components/VisionMission';
    import Achievements from '../components/Achievements';
    import Footer from '../components/Footer';
    import Head from 'next/head';

    export default function Home() {
      return (
        <div>
          <Head>
            <title>THE TECH - Shaping the Future with Technology</title>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
          </Head>
          <Header />
          <main>
            <section style={{
              padding: '4rem 2rem',
              textAlign: 'center',
              backgroundColor: 'white',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <h1 style={{color: '#008080', marginBottom: '1rem', fontSize: '2.5rem'}}>Shaping the Future with Technology</h1>
              <p style={{fontSize: '1.2rem'}}>Hello, Future</p>
              <div style={{
                position: 'absolute',
                top: '0',
                left: '0',
                width: '100%',
                height: '100%',
                backgroundImage: 'url("/hero-background.svg")',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                zIndex: '-1',
                opacity: '0.2'
              }}></div>
            </section>
            <Services />
            <VisionMission />
            <Achievements />
          </main>
          <Footer />
        </div>
      );
    }
