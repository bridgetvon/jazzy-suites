import Head from 'next/head'


export default function Meta({title, keywords, description}) {
    return (
      <Head>
        <meta name='viewport'
        content= 'width=device-width, initial-scale=1' />
        <meta name='keywords' content={keywords} />
        <meta name='description' content={description} />
        <meta charSet='utf-8' />
        <link rel='icon' href='/favicon.ico' />
        <title>{title}</title>
      </Head>
    )
  }
  
  Meta.defaultProps = {
    title: 'Utah Jazz Premium Seating',
    keywords: "NBA, basketball, Vivent Arena, premium suites, clubs",
    description: 'Get the best seats to watch the Utah Jazz'
  }