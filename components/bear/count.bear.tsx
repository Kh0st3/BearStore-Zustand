import { useBearsStore } from "@/store/bear.store";

const CountBear = () => {

    const bears = useBearsStore((state) => state.bears)

  return (
    <div>
      CountBear: {bears}
    </div>
  );
}

export default CountBear;
