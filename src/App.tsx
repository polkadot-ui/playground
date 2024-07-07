import { useState } from 'react'
import './App.css'

import { AccountProvider, ExtensionProvider, SelectedAccountType } from '@polkadot-ui/react'

function App() {
  const [selectedAccount, setSelectedAccount] = useState<SelectedAccountType>(null)

  return (
    <>
      <div style={{ width: "500px" }}>
        <ExtensionProvider setSelected={setSelectedAccount}>
            <AccountProvider
              selected={selectedAccount}
              setSelected={setSelectedAccount}
            />
          </ExtensionProvider>
      </div>
      <p className="read-the-docs">Extension selected: {selectedAccount?.extension} </p>
      <p className="read-the-docs">Account name: {selectedAccount?.name}</p>
      <p className="read-the-docs">Account address: {selectedAccount?.address}</p>
    </>
  )
}

export default App
