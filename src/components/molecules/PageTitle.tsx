import Link from "next/link";

type PageTitleProps = {
  text: string;
};

function PageTitle({ text }: PageTitleProps) {
  return (
    <div>
      <Link href={"/"} className="mr-2 cursor-pointer">
        Back
      </Link>
      <h1 className=" text-xl font-bold">{text}</h1>
    </div>
  );
}

export default PageTitle;
