import { Children } from "@/types/generics";

interface IPage extends Children {
  className?: string;
}

const Page = ({ children, className }: IPage) => {
  return <div className={`p-8 ${className}`}>{children}</div>;
};

export default Page;
