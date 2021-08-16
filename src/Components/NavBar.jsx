
const NavBar = ({ getData }) => {
  return (
    <>
      <div id="navBar">
        <div id="navbarDiv">
          <h1>User Information</h1>
          <button onClick={getData}>Get Data</button>
        </div>
      </div>
      <div id="emptyData">
        <h1>No Data </h1>
      </div>
    </>
  );
};

const NavBarSecond = ({getData}) => {
  return (
    <>
      <div id="navBar">
        <div id="navbarDiv">
          <h1>User Information</h1>
          <button onClick={getData}>Get Data</button>
        </div>
      </div>
    </>
  );
};

export { NavBar,NavBarSecond };
