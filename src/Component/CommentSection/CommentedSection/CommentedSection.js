import CommentCard from "./ComentCard";
import commentData from "./commentData";

const CommentedSection = () => {
  return (
    <>
      <div>
        <h2>Comments ( 04 )</h2>
        {commentData &&
          Array.isArray(commentData) &&
          [...commentData].map((data, index, array) => {
            const isLast = index === array.length - 1;
            return <CommentCard key={index} {...data} isLast={isLast} />;
          })}
      </div>
    </>
  );
};

export default CommentedSection;
