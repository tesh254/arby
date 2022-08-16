import React from "react";
import { useForm } from "react-hook-form";

type Arbitrage = {
  [key in "home-win" | "draw" | "away-win"]: {
    platform: string;
    odd: number;
  };
};

const IndexPage = () => {
  const [arbs, setArbitrage] = React.useState<Arbitrage>();
  const [totalArbPercentile, setTotalArbPercentile] = React.useState(0);
  const [profit, setProfit] = React.useState<number>(0);
  const [inv, setInv] = React.useState<number>(0);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();

  function calcIndividualArb() {}

  function calcProfit() {}

  function calculateEverything() {}

  return (
    <div className="max-w-screen flex flex-col">
      <h1 className="text-2xl font-bold mb-[8px]">Calc Football Arb</h1>
      <div className="my-[8px]">
        <h6>Home Win</h6>
        <input
          type="number"
          defaultValue={0.0}
          min={0.0}
          step={0.01}
          {...register("home-win")}
        />
      </div>
      <div className="my-[8px]">
        <h6>Draw</h6>
        <input
          type="number"
          defaultValue={0.0}
          min={0.0}
          step={0.01}
          {...register("draw")}
        />
      </div>
      <div className="my">
        <h6>Away Win</h6>
        <input
          type="number"
          defaultValue={0.0}
          min={0.0}
          step={0.01}
          {...register("away-win")}
        />
      </div>
    </div>
  );
};

export default IndexPage;
