import { Router } from '~/client/router/Router';
import { useEffect } from 'react';
import { useSignIn, useSignOut } from '~/client/contexts/UserContext';

function Main() {
  const { signIn } = useSignIn();
  const { signOut } = useSignOut();
  useEffect(() => {
    const User = {
      id: 1,
      name: 'John Doe',
      email: 'e@gmail.com',
    };
    // signIn(User);

    // onAuthStateChanged(auth, (user) => {
    //   if (user) {
    //     signIn(user);
    //   } else {
    //     signOut();
    //   }
    // });
  }, []);
  return (
    <main>
      <Router />
    </main>
  );
}

export default Main;
