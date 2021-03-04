import Header from "./../components/Header/Header.jsx";

function DefaultLayout({children}) {
  return (
    <>
      <Header/>
      {children}
    </>
  );
}

export { DefaultLayout as default };
