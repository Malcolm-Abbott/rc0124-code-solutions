// import { useState } from "react";
import { TopicCard } from './TopicCard';
import { useState } from 'react';
import './Accordion.css';

interface Topic {
  id: number;
  title: string;
  content: string;
}

type Props = {
  topics: Topic[];
};

export function Accordion({ topics }: Props) {
  const [topic, setTopic] = useState<Topic>();

  function topicHandler(card: Topic) {
    if (card !== topic) {
      setTopic(card);
    } else {
      setTopic(undefined);
    }
  }

  return (
    <>
      <TopicCard
        topics={topics}
        onTopicClick={topicHandler}
        currentTopic={topic}
      />
    </>
  );
}
