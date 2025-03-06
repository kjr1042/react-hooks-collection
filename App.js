import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import ButtonClickDemo from './EventDemo/ButtonClickDemo';
import FunctionWithParamaeterComponent from './EventDemo/FunctionWithParamaeterComponent';
import HandlingEventWithState from './EventDemo/HandlingEventWithState';
import HandlingInputEvent from './EventDemo/HandlingInputEvent.js';
import UseState from './HookDemo/UseState.js';
import UseStateUser from './HookDemo/UseStateUser.js';
import UseEffect from './HookDemo/UseEffect.js';
import Parent from './HookDemo/PropDrilling/Parent.js';
import UserConsumer from './HookDemo/UseContextDemo/UserConsumer.js';
import SetCustomerDetails from './HookDemo/LocalStorageDemo/SetCustomerDetails.js';
import GetCustomerDetails from './HookDemo/LocalStorageDemo/GetCustomerDetails.js';
import UseCustomHook from './HookDemo/CustomHookDemo/UseCustomHook.js';

const UserData = {
  firstName: "Abhishek",
  lastName: "Sharma",
};

function App() {
  return (
    <div className='App'>
      <h3>
        Event Demo
      </h3>
      <ButtonClickDemo />
      <FunctionWithParamaeterComponent/>
      <HandlingEventWithState/>
      <HandlingInputEvent/>
      <hr/>
      <h3 className='display-5'>HookDemo</h3>
      <UseState/>
      <hr/>
      <UseStateUser/>
      <hr/>
      <UseEffect/>
      <hr/>
      <Parent user={UserData}/>
      <hr/>
      <UserConsumer/>
      <hr/>
      <SetCustomerDetails/>
      <GetCustomerDetails/>
      <hr/>
      <UseCustomHook/>
    </div>
  );
}

export default App;
