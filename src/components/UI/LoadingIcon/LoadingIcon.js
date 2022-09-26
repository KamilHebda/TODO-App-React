import { Oval } from "react-loader-spinner";

function LoadingIcon() {
  const style = { margin: "10px auto" };
  return (
    <div style={style}>
      <Oval
        padding={50}
        height={50}
        width={50}
        color="#3A234B"
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#6E2496"
      />
    </div>
  );
}

export default LoadingIcon;
