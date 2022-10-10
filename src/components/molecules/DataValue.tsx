type LabelProps = {
  text: string;
};

function DataValue({ text }: LabelProps) {
  return <div className="inline-block w-96">{text}</div>;
}

export default DataValue;
