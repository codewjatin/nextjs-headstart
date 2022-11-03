import Link from 'next/link';

export default function CustomLink({ href, ...props }) {
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

  if (isInternalLink) {
    return <Link {...props}></Link>;
  }
  return <a target="_blank" rel="noopener noreferrer" {...props}></a>;
}
