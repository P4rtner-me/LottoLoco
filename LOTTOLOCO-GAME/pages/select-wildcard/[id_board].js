import React from 'react';
import NavbarStyleSix from "@/components/_App/NavbarStyleSix";
import MainBanner from '@/components/DigitalAgencyPortfolio/MainBanner';
import Footer from "@/components/_App/Footer";
import { useRouter } from 'next/router';
import Masonry from 'react-masonry-component';
import Link from 'next/link';

const masonryOptions = {
    transitionDuration: 0
};

const DigitalAgencyPortfolio = () => {

    const { query } = useRouter();

    const boardSelected = query.id_board;

    const arrNftCard = [1, 19, 25, 36];

    var arrNftCardSelected = [false, false, false, false];

    var selectWildCard = (wildCardIndex) => {

        console.log("selectWildCard:", wildCardIndex);
    
        if (wildCardIndex < wildCardIndex.length) {
            arrNftCardSelected[wildCardIndex] = !arrNftCardSelected[wildCardIndex];
        }
        
    }

    const wildCardsChooser = arrNftCard.map((cardId, idx) => {
        return (
            <div className="col-lg-3 col-sm-3 item" key={idx}>
                
                <div className={arrNftCardSelected[idx]?"single-latest-projects seleccionado":"single-latest-projects"}>
                    
                        <img src={"/images/cards/" + (idx+1) + ".jpg"} alt={"LOTTO CARD #" + (cardId)} />
                        <div className="content">
                            <span>Card # {(cardId)}</span>
                            <h3>Card # {(cardId)}</h3>
                        </div>

                        
                        <a className="link-btn" onClick={() => selectWildCard(idx)}></a>    
                    
                    
                </div>
                
            </div>
        )
    });

    return (
        <>
            <NavbarStyleSix />
            <MainBanner />
            
            <div className="row" style={{paddingTop: '70px'}} id="div-board-selected">
            <div className="col-lg-4 col-sm-4" style={{padding: '40px'}}>
                <h2>Board selected #{boardSelected}</h2>
                <img src={"/images/boards/" + (boardSelected) + ".jpeg"} alt={"LOTTO BOARD #" + (boardSelected)} />
            </div>
            <div className="col-lg-8 col-sm-8" style={{padding: '40px'}}>
                <h2>You own some NFT WILDCARDS, you can choose up to 3 to play with them:</h2>
                <Masonry
                    className={'row'} // default ''
                    elementType={'div'} // default 'div'
                    options={masonryOptions} // default {}
                    disableImagesLoaded={false} // default false
                    updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
                >
                    {wildCardsChooser}
                </Masonry>
                <div className="row textCenter" id="div-timer">
                    <div className="col-lg-6 col-sm-6" style={{padding: '40px'}}>
                        <Link href={"/#div-select-board"}>
                            <a className="btn">Change board</a>
                        </Link>
                    </div>
                    <div className="col-lg-6 col-sm-6" style={{padding: '40px'}}>
                        <Link href={"#div-timer"}>
                            <a className="btn btn-primary">Save selection and play</a>
                        </Link>
                    </div>
                    <div className="col-lg-12 col-sm-12" style={{padding: '40px', textAlign: 'center'}}>
                        <h1><b>LOTTOLOCO</b> will start in:</h1>
                        <img src="https://i.mailtimer.io/CFarTqHehI.gif" alt="mailtimer.io"/>
                    </div>
                    
                </div>
            </div>
            
        </div>

            <Footer />
        </>
    )
}

export default DigitalAgencyPortfolio;