import './ExploreContainer.css';

import {
  SignInWithApple,
  SignInWithAppleResponse,
  SignInWithAppleOptions,
} from '@capacitor-community/apple-sign-in';

interface ContainerProps { }

let options: SignInWithAppleOptions = {
  clientId: process.env.clientId || '',
  redirectURI: process.env.clieredirectURIntId || '',
  scopes: process.env.scopes || '',
  state: process.env.state || '',
  nonce: process.env.nonce || '',
};

const ExploreContainer: React.FC<ContainerProps> = () => {

  const handleAppleLogin = (e: any) => {
    SignInWithApple.authorize(options)
    .then((result: SignInWithAppleResponse) => {
      fetch((process.env.endpoint||''), {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(result)
      }).then(res => res.json())
      .then(data => {
        alert("All ok!!!")
      })
    })
    .catch(error => {
      console.log(error)
    });
  }

  return (
    <div className="container">
      <strong>Ready to create an app?</strong>
      <button onClick={handleAppleLogin}>Apple Login</button>
    </div>
  );
};

export default ExploreContainer;
