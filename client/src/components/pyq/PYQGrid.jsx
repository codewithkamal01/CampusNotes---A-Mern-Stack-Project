import PYQCard from "./PYQCard";

function PYQGrid({ papers }) {
  return (
    <div
      className="
        grid
        grid-cols-1
        gap-6
        md:grid-cols-2
        xl:grid-cols-3
      "
    >
      {papers.map((paper, index) => {
        return <PYQCard key={index} {...paper} />;
      })}
    </div>
  );
}

export default PYQGrid;
