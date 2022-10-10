import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/future/image";
import { trpc } from "../utils/trpc";
import snorlax from "public/snorlax.webp";
import { useCallback, useMemo } from "react";
import { Table } from "../components/molecules/Table";
import { CellProps } from "react-table";
import { SnorlaxMoves } from "@prisma/client";
import Link from "next/link";

const Home: NextPage = () => {
  const { data: moves, isLoading } = trpc.snorlax.getAll.useQuery();

  const getCellProps = useCallback(() => {
    return { className: "px-2 py-2 text-left" };
  }, []);

  const getRowProps = useCallback(() => {
    return {
      className: "border-b bg-transparent hover:bg-neutral-200",
    };
  }, []);

  const columns = useMemo(
    () => [
      {
        Header: "Name",
        accessor: "name",
        Cell: ({ value, data, row }: CellProps<SnorlaxMoves>) => (
          <Link href={`/moves/${data[row.index]?.identifier}`}>{value}</Link>
        ),
      },
      { Header: "Type", accessor: "type" },
      { Header: "Damage", accessor: "damage" },
      { Header: "pp", accessor: "pp" },
    ],
    []
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Head>
        <title>Body Slam</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto flex min-h-screen flex-col items-center justify-center p-4">
        <div className="flex">
          <Image
            src={snorlax}
            alt="Snorlax image"
            height={512}
            className="pr-12"
          />

          <Table
            columns={columns}
            data={moves || []}
            getCellProps={getCellProps}
            getRowProps={getRowProps}
          />
          <div className="flex-column"></div>
        </div>
      </main>
    </>
  );
};

export default Home;
