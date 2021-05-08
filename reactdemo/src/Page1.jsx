import Clock from './components/Clock'
import SetStateDemo from "./components/SetStateDemo" 
import {Toggle} from "./components/Toggle"
import Heading from './components/Heading'
import Text from './components/Text';
import DivEvent from  './components/DivEvent';

export default function Page1() {
  return (
    <div>
      <h1>Page1 Study</h1>
      <h2>state 同步和异步更新</h2>
      <SetStateDemo /> 
      <hr></hr>
      <h2>时钟，定时更新及声明周期函数使用</h2>
      <Clock />
      <hr></hr>
      <h2>Event</h2> 
      <Toggle/>
      <hr></hr>
      <Heading id="3" text="head"></Heading>
      <Text id="2" text="line"></Text>
      <hr/>
      <h2>div event</h2>
      <DivEvent />
    </div>
  );
}