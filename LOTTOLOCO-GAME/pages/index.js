import React from 'react';
import NavbarStyleSix from "@/components/_App/NavbarStyleSix";
import MainBanner from '@/components/DigitalAgencyPortfolio/MainBanner';
import Projects from '@/components/DigitalAgencyPortfolio/Projects';
import Footer from "@/components/_App/Footer";
/* WORLDCOIN*/
import { WorldIDWidget } from '@worldcoin/id'
/*walletconnect */
import {ConnectButton, useAccount} from "@web3modal/react";
import {Web3Modal} from '@web3modal/react'

const config = {
    projectId: '8cfa08919878a7997aafa3d51bfea954',
    theme: 'dark',
    accentColor: 'default',
    ethereum: {
      appName: 'web3modal'
    }
  }
  
const DigitalAgencyPortfolio = () => {
    const [merkleRoot, setMerkleRoot] = useState(props.form);
    const [nullifierHash, setNullifierHash] = useState(props.form);
    const [proof, setProof] = useState(props.form);
    const {isConnected } = useAccount();

    const selectMerkleRoot = (merkleRoot) => {
        setMerkleRoot(merkleRoot);                
        props.selectMerkleRoot(merkleRoot);                
    };
    const selectNullifierHash = (nullifierHash) => {
        console.log("nullifierHash1: " + nullifierHash);
        setNullifierHash(nullifierHash);          
        props.selectNullifierHash(nullifierHash);                
    };
    const selectProof = (proof) => {
        setProof(proof);                
        props.selectProof(proof);                
    };

    return (
        <>
            <NavbarStyleSix />
            <MainBanner />
            <WorldIDWidget
                    actionId="wid_365c1b857b79eba8af13f6732c196241" //Login Action 
                    signal="my_signal"
                    enableTelemetry
                    onSuccess={(verificationResponse) => {            
                        console.log(verificationResponse); 
                        
                        selectMerkleRoot(verificationResponse.merkle_root);
                        selectNullifierHash(verificationResponse.nullifier_hash);
                        selectProof(verificationResponse.proof);
                        }            
                    } 
                    onError={(error) => console.error(error)}
                    />
                
                 {isConnected ? (
                <div className="container-home">
                        You are connected with WalletConnect
                </div>
                ) :  (
                    <div className="container-home">
                    <Login />
                    <Web3Modal config={config}/>
                    </div>
                )}



            <Projects 
                selectNullifierHash={(nullifierHash) => selectNullifierHash(nullifierHash)}/>
            <Footer />
        </>
    )
}

export default DigitalAgencyPortfolio;