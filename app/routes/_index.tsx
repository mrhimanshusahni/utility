// External Dependencies
import type { MetaFunction } from "@remix-run/node";

// Internal Dependencies
import Loader from "../components/loader";
import { CustomButton } from "../components/custom-button";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex flex-col items-center gap-16">
        <header className="flex flex-col items-center gap-9">
          <h1 className="leading text-2xl font-bold">Welcome to Remix</h1>
        </header>

        <Loader />
        <Loader speed="slow" />
        <Loader speed="fast" />

        <CustomButton variant="solid" className="p-2 px-3.5">
          Solid Button
        </CustomButton>

        <CustomButton variant="solid" className="p-2 px-3.5" disabled>
          Solid Disabled Button
        </CustomButton>

        <CustomButton
          variant="solid"
          className="p-2 px-3.5"
          disabled
          isButtonLoading
          buttonLoaderClassName="text-white"
        >
          Solid Disabled Button in Loading
        </CustomButton>
      </div>
    </div>
  );
}
