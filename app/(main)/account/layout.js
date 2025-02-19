import "./account.css"
import AccountHeader from "./components/accountHeader";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({ children }) {

  return (
    <section className="section_account">
      <AccountHeader />
      {children}
    </section>

  );
}
