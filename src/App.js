import logo from "./logo.svg";
import "./App.css";
import Sider from "./Components/Sider";
import ProfileSide from "./Components/ProfileSide";
import PersonalInfo from "./Components/PersonalInfo";
function App() {
  return (
    <main className="enrollment App">
      <Sider />

      <div className="container-fluid customCOntainerfluid ">
        <div className="row mt-1">
          <div
            className="col-md-12 col-lg-4 p-lg-0"
            style={{ height: "370px", width: "370px" }}
          >
            <ProfileSide />
          </div>

          <div className="col-md-12 col-lg-8">
            <div className="profileInfo">
              {/* <PersonalInfo /> */}

              {/* <AddressInfo />

              <BusinessInfo />

              <BankDetails /> */}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
