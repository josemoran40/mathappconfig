
import { LoginForm } from '../../components/organisms';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

export default function Home() {

  return (
   <div className={"`w-screen min-h-screen bg-gray-primary flex flex-col items-center justify-center"}>
     <LoginForm />     
     <ToastContainer theme='colored'/>
   </div>
  )
}
