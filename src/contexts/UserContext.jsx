// src/contexts/UserContext.jsx

import { createContext, useState } from 'react';

const UserContext = createContext();

function UserProvider({ children }) {
  
  const [user, setUser] = useState(null);

  
  const value = { user, setUser };

  return (
    <UserContext.Provider value={value}>
      {/* The data we pass to the value prop above is now available to */}
      {/* all the children of the UserProvider component. */}
      {children}
    </UserContext.Provider>
  );
};

// When components need to use the value of the user context, they will need
// access to the UserContext object to know which context to access.
// Therefore, we export it here.
export { UserProvider, UserContext };

