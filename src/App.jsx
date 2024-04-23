import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button, MantineProvider, createTheme } from '@mantine/core'
import { Sidebar } from './modules/partials/Sidebar'
import 'remixicon/fonts/remixicon.css'
import { Dashboard } from './modules/accounts/Dashboard'
import { Transactions } from './modules/transaction/Transactions'
import { Accountlist } from './modules/accounts/Accountlist'
// import { Accountlist } from './modules/accounts/Accountlist'

import { Stats } from './modules/stats/stats'
import { Route, Routes } from 'react-router'
import TransactionTable from './modules/accounts/TransactionTable'
import { Schedule } from './modules/scheduleTransactions/Schedule'

// import { Button } from '@mantine/core'
// import '@mantine/core/styles.css';

function App() {
  // const [count, setCount] = useState(0)

  const theme = createTheme({
    /** Put your mantine theme override here */
  });
  

  return (<>
  <Routes>
  <Route exact path="/" element={<Dashboard />} />
 <Route path="/transactions" element={<Transactions/>} />
 <Route path="/stats" element={<Stats/>} />
 <Route path="/accountlist" element={<Accountlist/>} />
 <Route path="/schedule" element={<Schedule/>} />

          
  </Routes>
  
    
    

    </>
  )
}

export default App
