interface Topic {
  id: number;
  title: string;
  content: string;
}

type Props = {
  topics: Topic[];
  onTopicClick: () => void;
};

export function TopicCard({ topics, onTopicClick }: Props) {
  const arrayOfTopics = topics.map((topic, index) => {
    return (
      <div key={index} onClick={onTopicClick}>
        <h1>{topic.title}</h1>
        <p>{topic.content}</p>
      </div>
    );
  });
  return <>{arrayOfTopics}</>;
}
