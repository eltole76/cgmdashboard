import Cards from '../app/components/cards'
import data  from '../app/utils/data.json';
import Head from 'next/head';

export default function Home() {
  return (

      <main className="flex min-h-screen flex-col items-center justify-between p-8">
        <Head>
{/*           <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/> */}
          <link rel="icon" href="./favicon.ico" sizes="any" />
          <link rel="manifest" href="/site.webmanifest"/>
          <meta name="description" content="Descripción de mi página" />
        
      </Head>
        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
          <Cards data={data} /> {/* Agregar el componente Cards con los datos */}
          
        </div>
        <footer className="text-center text-gray-500 text-sm mt-8">
        {/* Pie de página opcional */}
        © 2024 Mi Web de Medicina. Todos los derechos reservados.
          </footer>
      </main>

  );
}
