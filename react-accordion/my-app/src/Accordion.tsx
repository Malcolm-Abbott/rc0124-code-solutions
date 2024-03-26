// import { useState } from "react";
import { TopicCard } from './TopicCard';
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
  function topicHandler() {
    return true;
  }

  return (
    <>
      <TopicCard topics={topics} onTopicClick={topicHandler} />
    </>
  );
}
