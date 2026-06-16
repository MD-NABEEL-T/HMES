import { useState } from "react";
import { Login } from "./components/Login";
import { Layout, type ModuleName } from "./components/Layout";
import { Dashboard } from "./components/Dashboard";
import { Patients } from "./components/Patients";
import { Appointments } from "./components/Appointments";
import { Doctors } from "./components/Doctors";
import { Staff } from "./components/Staff";
import { OPManagement } from "./components/OPManagement";
import { IPManagement } from "./components/IPManagement";
import { Prescriptions } from "./components/Prescriptions";
import { Pharmacy } from "./components/Pharmacy";
import { Laboratory } from "./components/Laboratory";
import { Vehicles } from "./components/Vehicles";
import { Finance } from "./components/Finance";
import { Followups } from "./components/Followups";
import { Reports } from "./components/Reports";
import { SettingsModule } from "./components/SettingsModule";

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [active, setActive] = useState<ModuleName>("dashboard");

  if (!loggedIn) {
    return <Login onLogin={() => setLoggedIn(true)} />;
  }

  const renderModule = () => {
    switch (active) {
      case "dashboard": return <Dashboard />;
      case "patients": return <Patients />;
      case "appointments": return <Appointments />;
      case "doctors": return <Doctors />;
      case "staff": return <Staff />;
      case "op": return <OPManagement />;
      case "ip": return <IPManagement />;
      case "prescriptions": return <Prescriptions />;
      case "pharmacy": return <Pharmacy />;
      case "laboratory": return <Laboratory />;
      case "vehicles": return <Vehicles />;
      case "finance": return <Finance />;
      case "followups": return <Followups />;
      case "reports": return <Reports />;
      case "settings": return <SettingsModule />;
      default: return <Dashboard />;
    }
  };

  return (
    <Layout active={active} onNavigate={setActive} onLogout={() => setLoggedIn(false)}>
      {renderModule()}
    </Layout>
  );
}
