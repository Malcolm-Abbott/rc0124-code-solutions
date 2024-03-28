interface Topic {
  id: number;
  title: string;
  content: string;
}

type Props = {
  topics: Topic[];
  onTopicClick: (arg1: Topic) => void;
  currentTopic: Topic | undefined;
};

export function TopicCard({ topics, onTopicClick, currentTopic }: Props) {
  const arrayOfTopics = topics.map((topic, index) => {
    return (
      <div
        key={index}
        onClick={() => onTopicClick(topic)}
        className="topic-wrapper">
        <h1>{topic.title}</h1>
        {topic === currentTopic && <p>{topic.content}</p>}
      </div>
    );
  });
  return <>{arrayOfTopics}</>;
}
