import Account from "components/account";
import DecCalendar from "components/decCalendar";
import Gest from "components/gest";
import ImageGallery from "components/imageGallery";
import Invition from "components/invition";
import Location from "components/location";
import Main from "components/main";

export default function Home() {
  return (
    <main className="relative max-w-screen-sm mx-auto">
      <Main />
      <Invition />
      <ImageGallery />
      <DecCalendar />
      <Location />
      <Account />
      <Gest />
    </main>
  );
}
