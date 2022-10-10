import DataLabel from "./DataLabel";
import DataValue from "./DataValue";

type DataRowProps = {
  label: string;
  value: string;
};

function DataRow({ label, value }: DataRowProps) {
  return (
    <div>
      <DataLabel text={label} />
      <DataValue text={value} />
    </div>
  );
}

export default DataRow;
