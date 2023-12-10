import AuthButton from "../components/AuthButton";
import Header from "@/components/Header";

export default async function Index() {
  return (
    <div className="">
      <nav className="">
        <div className="">
          <AuthButton />
        </div>
      </nav>
      <Header />
    </div>
  );
}
