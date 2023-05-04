// Packages
import { Vortex } from "react-loader-spinner";

export default function Loader() {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen overflow-hidden bg-white grid place-items-center">
      <div className="flex flex-col justify-center items-center gap-2">
        <Vortex
          visible={true}
          height="80"
          width="80"
          ariaLabel="vortex-loading"
          wrapperStyle={{}}
          wrapperClass="vortex-wrapper"
          colors={[
            "#282E30",
            "#5E958D",
            "#DAC185",
            "#282E30",
            "#5E958D",
            "#DAC185",
          ]}
        />
        <h1 className="font-medium text-center text-xl lg:text-2xl">
          Please wait a moment
        </h1>
      </div>
    </div>
  );
}
