import { topics, type Topic } from '../lib/data';
import { useState, useEffect } from 'react';

export function Topics() {
  const [item, setItem] = useState<Topic>();

  useEffect(() => {
    console.log('item:', item);
  }, [item]);

  function topicHandler(card: Topic) {
    if (card !== item) {
      setItem(card);
    } else {
      setItem(undefined);
    }
  }

  return (
    <div className="container">
      {topics.map((topic: Topic, index) => {
        return (
          <div
            key={index}
            className="w-full border-2 border-black px-3 py-2 bg-slate-300 cursor-pointer"
            onClick={() => topicHandler(topic)}>
            <h1 className="font-semibold text-4xl">{topic.title}</h1>
            {item === topic ? (
              <p className="ring-2 ring-black my-4 bg-white px-4 text-lg font-semibold">
                {topic.content}
              </p>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
