const MainHeading = (props: {
    text: string;
  }) => {
    return (
      <h1 className="text-2xl py-4 pl-4 select-none">
        {props.text}
      </h1>
    );
};

export default MainHeading;