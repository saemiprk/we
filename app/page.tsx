import Account from "components/account";
import DecCalendar from "components/decCalendar";
import GestBook from "components/gestBook";
import Invition from "components/invition";
import Location from "components/location";
import Main from "components/main";

export default function Home() {
  return (
    <main className="relative max-w-screen-sm mx-auto">
      <Main />
      <Invition />
      <DecCalendar />
      <Location />
      <Account />
      <GestBook />
    </main>
  );
}
