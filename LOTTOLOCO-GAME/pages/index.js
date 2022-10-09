import React from 'react';
import NavbarStyleSix from "@/components/_App/NavbarStyleSix";
import MainBanner from '@/components/DigitalAgencyPortfolio/MainBanner';
import Projects from '@/components/DigitalAgencyPortfolio/Projects';
import Footer from "@/components/_App/Footer";
import { WorldIDWidget } from '@worldcoin/id'

const DigitalAgencyPortfolio = () => {
    const [merkleRoot, setMerkleRoot] = useState(props.form);
    const [nullifierHash, setNullifierHash] = useState(props.form);
    const [proof, setProof] = useState(props.form);


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
            <Projects 
                selectNullifierHash={(nullifierHash) => selectNullifierHash(nullifierHash)}/>
            <Footer />
        </>
    )
}

export default DigitalAgencyPortfolio;