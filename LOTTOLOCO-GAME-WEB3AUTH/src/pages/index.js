import React from 'react';
import NavbarStyleSix from "@/components/_App/NavbarStyleSix";
import MainBanner from '@/components/DigitalAgencyPortfolio/MainBanner';
import Projects from '@/components/DigitalAgencyPortfolio/Projects';
import Footer from "@/components/_App/Footer";
import { WorldIDWidget } from '@worldcoin/id'
import { Web3Auth } from "@web3auth/web3auth";

const clientId = "BP1HsgbiB2CywQhfpD360CtDDLB82GNn1jQeExoAgb12RCOAhZfeaA4IemNfwon-Wt62sAXjplR4kF6ZaotwUB0"; // get from https://dashboard.web3auth.io

const DigitalAgencyPortfolio = () => {

    const [merkleRoot, setMerkleRoot] = useState(props.form);
    const [nullifierHash, setNullifierHash] = useState(props.form);
    const [proof, setProof] = useState(props.form);

    const [web3auth, setWeb3auth] = useState<Web3Auth | null>(null);
  const [provider, setProvider] = useState<SafeEventEmitterProvider | null>(null);
  const [form, setForm] = useState("");
  const [userAddress, setUserAddress]=useState("");

  const selectForm = (form: any) => {
    console.log("Selected form2: " + form);
    setForm(form);                
  };
  const selectUserAddress = (userAddress: any) => {
    console.log("Selected form2: " + userAddress);
    setUserAddress(userAddress);                
  };

  useEffect(() => {
    const init = async () => {
      try {

        const web3auth = new Web3Auth({
          clientId,
          chainConfig: {
            chainNamespace: "eip155",
            chainId: "0x13881", // hex of 80001, polygon testnet
            rpcTarget: "https://rpc.ankr.com/polygon_mumbai",
            // Avoid using public rpcTarget in production.
            // Use services like Infura, Quicknode etc
            displayName: "Polygon Mainnet",
            blockExplorer: "https://mumbai.polygonscan.com/",
            ticker: "MATIC",
            tickerName: "Matic",
          },
        });

      setWeb3auth(web3auth);

      await web3auth.initModal();
        if (web3auth.provider) {
          setProvider(web3auth.provider);          
        };
      } catch (error) {
        console.error(error);
      }
    };

    init();
  }, []);

  const login = async () => {
    if (!web3auth) {
      console.log("web3auth not initialized yet");
      return;
    }
    const web3authProvider = await web3auth.connect();
    setProvider(web3authProvider);
  };

  const getUserInfo = async () => {
    if (!web3auth) {
      console.log("web3auth not initialized yet");
      return;
    }
    const user = await web3auth.getUserInfo();
    console.log(user);
    selectUserAddress(user);
    
  };

  const logout = async () => {
    if (!web3auth) {
      console.log("web3auth not initialized yet");
      return;
    }
    await web3auth.logout();
    setProvider(null);
  };

  const getChainId = async () => {
    if (!provider) {
      console.log("provider not initialized yet");
      return;
    }
    const rpc = new RPC(provider);
    const chainId = await rpc.getChainId();
    console.log(chainId);
  };
  const getAccounts = async () => {
    if (!provider) {
      console.log("provider not initialized yet");
      return;
    }
    const rpc = new RPC(provider);
    const address = await rpc.getAccounts();
    console.log(address);
  };

  const getBalance = async () => {
    if (!provider) {
      console.log("provider not initialized yet");
      return;
    }
    const rpc = new RPC(provider);
    const balance = await rpc.getBalance();
    console.log(balance);
  };

  const sendTransaction = async () => {
    if (!provider) {
      console.log("provider not initialized yet");
      return;
    }
    const rpc = new RPC(provider);
    const receipt = await rpc.sendTransaction();
    console.log(receipt);
  };

  const signMessage = async () => {
    if (!provider) {
      console.log("provider not initialized yet");
      return;
    }
    const rpc = new RPC(provider);
    const signedMessage = await rpc.signMessage();
    console.log(signedMessage);
  };

  const getPrivateKey = async () => {
    if (!provider) {
      console.log("provider not initialized yet");
      return;
    }
    const rpc = new RPC(provider);
    const privateKey = await rpc.getPrivateKey();
    console.log(privateKey);
  };

    return (
        <>
            <NavbarStyleSix />
            <WorldIDWidget
                    actionId="wid_staging_8725a23b15a10e5d48a1e41fca800328" //Login Action 
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
            <MainBanner />
            <Projects />
            <Footer />
        </>
    )
}

export default DigitalAgencyPortfolio;