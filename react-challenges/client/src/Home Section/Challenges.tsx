import { challenges, type Challenge } from '../lib/data';
import { Link } from 'react-router-dom';
import { nameToUrl } from '../lib/data';

export function Challenges() {
  return (
    <>
      {challenges.map((challenge: Challenge, index) => {
        return (
          <div key={index} className="mt-10 px-8 flex lg:justify-center">
            <Challenge
              name={challenge.name}
              caption={challenge.caption}
              description={challenge.description}
            />
          </div>
        );
      })}
    </>
  );
}

type ChallengeProps = {
  name: string;
  caption: string;
  description: string;
};

function Challenge({ name, caption, description }: ChallengeProps) {
  const path = `/${nameToUrl(name)}`;

  return (
    <div className="shadow-lg p-8 space-y-6 basis-full bg-white lg:p-16 lg:space-y-8 lg:basis-1/2">
      <h1 className="text-2xl font-bold tracking-wide text-center sm:text-3xl md:text-4xl drop-shadow-lg">
        {name}
      </h1>
      <p className="text-xl font-semibold sm:text-2xl md:text-3xl">{caption}</p>
      <h3 className="tracking-wide text-lg sm:text-xl text-slate-700 md:text-2xl">
        {description}
      </h3>
      <div className="flex justify-center">
        <Link
          to={path}
          className="px-10 py-3 rounded-2xl shadow-md text-white text-lg tracking-wide bg-gradient-to-r from-slate-900 to-slate-800 hover:ring-2 ring-slate-900 sm:text-2xl md:text-3xl">
          Solution
        </Link>
      </div>
    </div>
  );
}
