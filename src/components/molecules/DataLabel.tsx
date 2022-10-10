type LabelProps = {
  text: string;
};

function DataLabel({ text }: LabelProps) {
  return <div className="inline-block w-48 font-bold">{text}</div>;
}

export default DataLabel;
