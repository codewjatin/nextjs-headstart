export default function Head() {
  const meta = {
    title: 'Next.js Headstart',
    description: `Get a headstart in developing a Next.js app`,
    image:
      'https://og-image.vercel.app/%60Next.js%60%20%3Cbr%3E%20Headstart%20by%20**Jatin%20Kumar**%20%3Cbr%3E%20Bootstrap%20your%20project%20with%20this%20clean%20Next.js%20starter.png?md=1&fontSize=50px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg',
    url: 'https://nextjs-headstart.vercel.app/',
    type: 'website',
  };
  return (
    <head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width" />
      <title>{meta.title}</title>
      <meta content="@p__jatin" name="twitter:site" />
      <meta content="summary_large_image" name="twitter:card" />
      <meta content={meta.url} property="og:image" />
      <meta content={meta.title} property="og:title" />
      <meta content={meta.url} property="og:url" />
      <meta content={meta.description} name="description" />
      <meta content={meta.description} property="og:description" />
      <link
        href="/static/icons/apple-touch-icon.png"
        rel="apple-touch-icon"
        sizes="180x180"
      />
      <link
        href="/static/icons/favicon-32x32.png"
        rel="icon"
        sizes="32x32"
        type="image/png"
      />
      <link
        href="/static/icons/favicon-16x16.png"
        rel="icon"
        sizes="16x16"
        type="image/png"
      />
      <link href="/static/icons/site.webmanifest" rel="manifest" />
      <link
        color="#000000"
        href="/static/icons/safari-pinned-tab.svg"
        rel="mask-icon"
      />
      <link href="/static/icons/favicon.ico" rel="shortcut icon" />
      <meta content="#000000" name="msapplication-TileColor" />
      <meta
        content="/static/icons/browserconfig.xml"
        name="msapplication-config"
      />
      <meta content="#fff" name="theme-color" />
      <meta
        content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        name="robots"
      />
    </head>
  );
}
