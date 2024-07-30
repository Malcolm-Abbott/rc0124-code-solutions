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
      description =
        'Hypertext Markup Language (HTML) is the standard markup language for creating web pages and web applications. With Cascading Style Sheets (CSS) and JavaScript, it forms a triad of cornerstone technologies for the World Wide Web.';
      break;
    case 'Cascading Style Sheets':
      description =
        'Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language like HTML. CSS is a cornerstone technology of the Wolrd Wide Web alongside HTML and JavaScript.';
      break;
    case 'JavaScript':
      description =
        'JavaScript, often abbreviated as JS, is a high-level interpreted programming language that conforms to the ECMAScript specification. JavaScript has curly-bracket syntax, dynamic typing, prototype-based object-orientation and first-class function.';
      break;
  }

  function handleClick() {
    if (activeLanguage && language === activeLanguage)
      return setActiveLanguage('');
    if (!activeLanguage) return setActiveLanguage(language);
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
        className={`w-96 pl-3 py-3 bg-gradient-to-r from-slate-900 to-slate-700 cursor-pointer ring-slate-900 hover:ring-2 hover:bg-gradient-to-l ${display} mt-1`}>
        <p className="text-white">{description}</p>
      </div>
    </li>
  );
}
