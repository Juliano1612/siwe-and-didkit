import type { NextPage } from 'next'
import { ethers } from 'ethers';
import { useState } from 'react';
import FirstStep from '../components/steps/FirstStep';
import ConnectWallet from '../components/steps/ConnectWallet';
import SignIn from '../components/steps/SignIn';
import VerifiableCredentials from '../components/steps/VerifiableCredentials';
import BasePage from '../components/base/BasePage';
import NavBar from '../components/base/Navbar';
import Card from '../components/base/Card';
import Head from 'next/head';


const Home: NextPage = () => {
  const [domain, setDomain] = useState<string>('');
  const [origin, setOrigin] = useState<string>('');
  const [provider, setProvider] = useState<any>({});
  const [signer, setSigner] = useState<any>({});
  const [step, goTo] = useState<number>(0);


  const initializeProcess = () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    setDomain(window.location.host);
    setOrigin(window.location.origin);
    setProvider(provider);
    setSigner(provider.getSigner());
  };

  const nextStep = () => {
    goTo(step + 1);
  };

  const steps = [
    <FirstStep nextStep={nextStep} />,
    <ConnectWallet
      initializeProcess={initializeProcess}
      provider={provider}
      nextStep={nextStep}
    />,
    <SignIn
      signer={signer}
      domain={domain}
      origin={origin}
      nextStep={nextStep}
    />,
    <VerifiableCredentials signer={signer} />
  ];

  return <>
  <Head>
      <title>Sign-In with Ethereum</title>
  </Head>
  <BasePage
    navbar={<NavBar />}
  >
    <Card>
      {steps[step]}
    </Card>
  </BasePage>
  </>
};

export default Home;
