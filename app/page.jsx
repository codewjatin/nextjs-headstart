import GithubTag from '../components/utilities/GithubTag';
import Icons from '../components/utilities/Icons';

export default function Page() {
  return (
    <section className="flex flex-col justify-center items-center">
      <GithubTag href="https://github.com/codewjatin/nextjs-headstart" />
      <Icons name="next" height="58" width="auto" className="mb-20" />
      <text className="text-2xl text-center grid gap-4">
        <span>
          Headstart by <strong>Jatin Kumar</strong>
        </span>
        <span>
          Bootstrap your project with this clean <code>Next.js</code> starter
        </span>
      </text>
    </section>
  );
}
