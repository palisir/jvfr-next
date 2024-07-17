type Props = {
  children?: React.ReactNode;
};

const Container = ({ children }: Props) => {
  return <div className="container mx-auto px-16 md:w-10/12">{children}</div>;
};

export default Container;
