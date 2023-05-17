import '@aws-amplify/ui-react/styles.css';
import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';
import {Authenticator, Button} from "@aws-amplify/ui-react";
Amplify.configure(awsExports);

export default function app() {
  return (
  <Authenticator loginMechanisms={['email']}>
    {({ signOut, user }) => (
        <>
          <h1>Hello {user.username}</h1>
          <Button onClick={signOut}>Sign out</Button>
        </>
    )}
  </Authenticator>
  );
}


