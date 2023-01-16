import { useLocation } from "react-router-dom";
import Button from "../components/ui/Button";
import { IBookItemInfo } from "../types";
export default function RecommendedDetail() {
  const { state }: { state: IBookItemInfo } = useLocation();
  console.log(state);

  return (
    <main className="p-2">
      <p className="mb-10 text-zinc-500">{`> ${state.collectionDb}`}</p>
      <section className="flex flex-col md:flex-row justify-between items-end">
        <div className="w-full p-2 md:w-1/3 md:p-0 shadow-md">
          <img
            src={state.referenceIdentifier}
            alt={state.title}
            className="w-full h-full object-contain"
          />
        </div>
        <aside className="w-full mt-4 flex flex-col md:w-2/3 md:ml-6 md:mt-0">
          <h1 className="text-2xl font-bold">{state.title}</h1>
          <h3>저자 : {state.rights}</h3>
          <h4 className="mb-10">쪽수 : {state.extent}</h4>
          <Button
            text="위시리스트에 담기"
            onClick={() => {
              console.log("Clicked");
            }}
          />
        </aside>
      </section>
      <section className="my-10">
        <h5 className="text-xl md:text-2xl font-bold">추천사</h5>
        <p className="text-md md:text-xl"> {state.description}</p>
      </section>
    </main>
  );
}
