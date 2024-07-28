import { useState } from 'react';
import { languages } from './data';

export function Languages() {
  const [activeLanguage, setActiveLanguage] = useState('');

  return (
    <ul className="space-y-1">
      {languages.map((language, index) => {
        return (
          <Language
            key={index}
            language={language}
            activeLanguage={activeLanguage}
            setActiveLanguage={setActiveLanguage}
          />
        );
      })}
    </ul>
  );
}

type LanguageProps = {
  language: string;
  activeLanguage: string;
  setActiveLanguage: (arg1: string) => void;
};

function Language({
  language,
  activeLanguage,
  setActiveLanguage,
}: LanguageProps) {
  const display = activeLanguage === language ? '' : 'hidden';
  let description = '';

  switch (language) {
    case 'Hypertext Markup Language':
      description = 'Hypertext Markup Language (HTML)';
      break;
    case 'Cascading Style Sheets':
      description = 'Cascading Style Sheets (CSS)';
      break;
    case 'JavaScript':
      description = 'JavaScript,';
      break;
  }

  function handleClick() {
    if (activeLanguage) return setActiveLanguage('');
    setActiveLanguage(language);
  }

  return (
    <li onClick={() => handleClick()}>
      <div className="w-96 pl-3 py-3 bg-gradient-to-r from-slate-900 to-slate-700 cursor-pointer ring-slate-900 hover:ring-2 hover:bg-gradient-to-l">
        <h1 className="text-2xl font-semibold tracking-wide text-white">
          {language}
        </h1>
      </div>
      <div
        className={`w-96 pl-3 py-3 bg-gradient-to-r from-slate-900 to-slate-700 cursor-pointer ring-slate-900 hover:ring-2 hover:bg-gradient-to-l ${display}`}>
        <p className="text-white">{description}</p>
      </div>
    </li>
  );
}
