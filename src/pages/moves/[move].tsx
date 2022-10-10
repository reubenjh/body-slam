import Image, { ImageLoaderProps } from "next/future/image";
import { useRouter } from "next/router";
import PageTitle from "../../components/molecules/PageTitle";
import { MoveTypeMap, MoveType } from "../../types/MoveTypeMap";
import { trpc } from "../../utils/trpc";
import snorlax from "public/snorlax.webp";
import DataRow from "../../components/molecules/DataRow";

const MoveTypeColorMap: MoveTypeMap = {
  normal: "#A8A877",
  psychic: "#F85888",
};

const loader = ({ src, width }: ImageLoaderProps) => `${src}?w=${width}`;

function MovesPage() {
  const router = useRouter();
  const move = router.query.move as string;
  const { data, isLoading } = trpc.snorlax.getMove.useQuery(move, {
    refetchOnWindowFocus: false,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (!data) {
    return <div>No data to display</div>;
  }
  const bgColor = MoveTypeColorMap[data.type as MoveType];
  return (
    <main
      className={`flex-column container min-h-screen min-w-full p-4`}
      style={{ backgroundColor: bgColor }}
    >
      <PageTitle text={data?.name} />
      <div className="w-96">
        <Image
          loader={loader}
          src={data?.imageSrc ?? snorlax}
          alt={data.name}
          width={265}
          height={265}
        />
      </div>
      <div>
        <DataRow label="Name" value={data.name} />
        <DataRow label="Type" value={data.type} />
        <DataRow label="Damage" value={data.damage.toFixed()} />
        <DataRow label="PP" value={data.pp.toFixed()} />
        <DataRow
          label="Potential damage"
          value={(data.pp * data.damage).toFixed()}
        />
      </div>
    </main>
  );
}

export default MovesPage;
