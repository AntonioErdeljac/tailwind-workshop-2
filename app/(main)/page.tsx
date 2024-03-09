import { Hero } from "./hero";
import { List } from "./list";

export default function Home() {
  return (
    <div className="h-[calc(100vh-120px)]">
      <Hero />
      <List />
    </div>
  );
}
