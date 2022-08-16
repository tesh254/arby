import { stringify } from "querystring";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

type Arbitrage = {
  [key in "home-win" | "draw" | "away-win"]: {
    platform: string;
    odd: number;
    arb: number;
  };
};

const IndexPage = () => {
  const [arbs, setArbitrage] = React.useState<Arbitrage>({
    "home-win": {
      platform: "",
      odd: 0.0,
      arb: 0.0,
    },
    draw: {
      platform: "",
      odd: 0.0,
      arb: 0.0,
    },
    "away-win": {
      platform: "",
      odd: 0.0,
      arb: 0.0,
    },
  });
  const [totalArbPercentile, setTotalArbPercentile] = React.useState(0);
  const [profit, setProfit] = React.useState<number>(0);
  const [inv, setInv] = React.useState<number>(0);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  function calcIndividualArb() {}

  function calcProfit() {}

  function calculateEverything() {}

  console.log(watch());

  useEffect(() => {
    const arb: unknown = {};
    Object.entries(watch()).forEach(([key, value]) => {
      if (key === "home-win" || key === "away-win" || key === "draw") {
        const percentile: unknown = (1 / parseFloat(value)) * 100;

        Object.assign(arb as Arbitrage, {
          [key]: {
            platform: "",
            odd: parseFloat(value),
            arb: percentile,
          },
        });
      }

      if (key === "investment") {
        setInv(value);
      }
    });

    // @ts-ignore
    setArbitrage((prev: Arbitrage) => ({
      ...prev,
      ...(arb as Arbitrage),
    }));
  }, [JSON.stringify(watch())]);

  useEffect(() => {
    let totalPerc = 0;
    Object.entries(arbs).forEach(
      // @ts-ignore
      ([_, value]: [
        "home-win" | "draw" | "away-win",
        {
          platform: string;
          odd: number;
        }
      ]) => {
        if (value.odd) {
          totalPerc += (1 / value.odd) * 100;
        }
      }
    );

    setTotalArbPercentile(totalPerc);
  }, [JSON.stringify(arbs)]);

  useEffect(() => {
    if (totalArbPercentile) {
      const prof = (inv * 100) / totalArbPercentile - inv;

      setProfit(prof);
    }
  }, [totalArbPercentile]);

  return (
    <div className="max-w-screen w-full place-items-center justify-center flex flex-col">
      <h1 className="text-2xl font-bold mb-[8px]">Calc Football Arb</h1>
      <div className="my-[8px] min-w-[300px]">
        <h6>Investment</h6>
        <input
          type="number"
          defaultValue={0.0}
          min={0.0}
          step={0.01}
          {...register("investment")}
        />
      </div>
      <div className="my-[8px] min-w-[300px]">
        <h6>
          Home Win {arbs["home-win"].arb.toFixed(2)}%{" "}
          {inv &&
            totalArbPercentile &&
            `KES.${((inv * arbs["home-win"].arb) / totalArbPercentile).toFixed(
              2
            )}`}
        </h6>
        <input
          type="number"
          defaultValue={0.0}
          min={0.0}
          step={0.01}
          {...register("home-win")}
        />
      </div>
      <div className="my-[8px] min-w-[300px]">
        <h6>
          Draw {arbs["draw"].arb.toFixed(2)}%{" "}
          {inv &&
            totalArbPercentile &&
            `KES.${((inv * arbs["draw"].arb) / totalArbPercentile).toFixed(2)}`}
        </h6>
        <input
          type="number"
          defaultValue={0.0}
          min={0.0}
          step={0.01}
          {...register("draw")}
        />
      </div>
      <div className="my">
        <h6>
          Away Win {arbs["away-win"].arb.toFixed(2)}%{" "}
          {inv &&
            totalArbPercentile &&
            `KES.${((inv * arbs["away-win"].arb) / totalArbPercentile).toFixed(
              2
            )}`}
        </h6>
        <input
          type="number"
          defaultValue={0.0}
          min={0.0}
          step={0.01}
          {...register("away-win")}
        />
      </div>
      <div className="mt-[8px] flex flex-col">
        <span>Investment: {inv}</span>
        <span>Percentile: {totalArbPercentile.toFixed(2)}</span>
        <span>Profit: {profit.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default IndexPage;