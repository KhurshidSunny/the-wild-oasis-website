
import Cabin from "@/app/_components/Cabin";
import Reservation from "@/app/_components/Reservation";
import ReservationReminder from "@/app/_components/ReservationReminder";
import Spinner from "@/app/_components/Spinner";
import { getCabin, getCabins } from "@/app/_lib/data-service";
import { Suspense } from "react";

export async function generateMetadata({params}) {
    const cabin = await getCabin(params.cabinId);
    const {name} = cabin;
    return {title: `Cabin ${name}`}
}

export async function generateStaticParams() {
  const cabins = await getCabins();
  
  const ids = cabins.map((cabin) => {
    return {cabinId: String(cabin.id)}
  })
  return ids;
}

export default async function Page({params}) {

    const cabin = await getCabin(params.cabinId)

  return (
    <div className="max-w-6xl mx-auto mt-8">
      <Cabin  cabin={cabin} />

      <div > 
        <h2 className="text-5xl font-semibold text-center mb-10 text-accent-400">
          Reserve today {cabin.name}. Pay on arrival.
        </h2>

        <Suspense fallback={<Spinner />}>
          <Reservation cabin={cabin} />
          <ReservationReminder />
        </Suspense>
      </div>
    </div>
  );
}
