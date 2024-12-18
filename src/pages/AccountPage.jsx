import React, { useEffect, useState } from "react";

import Navbar from "../components/Fragments/Navbar/Navbar";
import HeaderLogin from "../components/Fragments/Header/Header";
import AccountMenu from "../components/Fragments/AccountMenu/AccountMenu";
import { useUser } from "../hooks/useProfile";
import { AuthProvider } from "../contexts/AuthContext";
import AccountForm from "../components/Fragments/AccountMenu/AccountForm";
import FooterMobile from "../components/Elements/Footer/FooterMobile";

function AccountPage() {
  const { user, loading, error, setUser, setError, setLoading, refreshUser } =
    useUser();
  const [isMobile, setIsMobile] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(null);

  useEffect(() => {
    const updateScreen = () => setIsMobile(window.innerWidth < 500);
    updateScreen();
    window.addEventListener("resize", updateScreen);

    return () => window.removeEventListener("resize", updateScreen);
  }, []);

  return (
    <>
      <AuthProvider>
        {isMobile ? (
          <>
            <p className="mx-8 pt-10 text-2xl font-semibold text-black">Akun</p>
            {!isFormOpen ? (
              <AccountMenu onClick={() => setIsFormOpen(true)} />
            ) : (
              <AccountForm onClose={() => setIsFormOpen(false)} />
            )}

            <FooterMobile active={"akun"} />
          </>
        ) : (
          <>
            <Navbar />
            <HeaderLogin title="Akun" buttonText="Beranda" />
            <div className="mx-auto flex w-3/4 justify-between gap-4">
              <AccountMenu />
              {error ? (
                <div>Error: {error}</div>
              ) : loading ? (
                <div>Loading...</div>
              ) : (
                <AccountForm />
              )}
            </div>
          </>
        )}
      </AuthProvider>
    </>
  );
}

export default AccountPage;
