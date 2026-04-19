import { type Herb, HerbItem } from "./HerbItem";

export function HerbList({
  herbs,
  onHerbSelect,
  isTouchDevice,
}: {
  herbs: Herb[];
  onHerbSelect?: (id: string) => void;
  isTouchDevice: boolean;
}) {
  return (
    <ul
      className="h-full overflow-y-auto w-full overflow-x-hidden"
      style={{ scrollbarWidth: "none" }}
    >
      {herbs.map((herb) => (
        <HerbItem herb={herb} key={herb.id} onSelect={onHerbSelect} isTouchDevice={isTouchDevice} />
      ))}
    </ul>
  );
}
