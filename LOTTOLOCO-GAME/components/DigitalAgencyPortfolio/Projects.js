import { useState, useEffect } from 'react';
import Masonry from 'react-masonry-component';
import Link from 'next/link';


const masonryOptions = {
    transitionDuration: 0
};

const arrImages = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
const arrNftCard = [1, 19, 25, 36];
const arrNftCardSelected = [false, false, false, false];

var playStep = 1;
var boardSelected = 0;

function selectBoard(boardId) {

    console.log("selectBoard: ", boardId)

    boardSelected = boardId;
    if (boardSelected > 0) {
        playStep = 2;
    }
    else {
        playStep = 1;
    }

    console.log("playStep: ", playStep);
}

selectBoard(0);

var selectWildCard = (wildCardIndex) => {

    console.log("selectWildCard:", wildCardIndex);

    if (wildCardIndex < wildCardIndex.length) {
        arrNftCardSelected[wildCardIndex] = !arrNftCardSelected[wildCardIndex];
    }
    
}


const Projects = () =>  {

    const images = arrImages.map((image, idx) => {
        return (
            <div className="col-lg-4 col-sm-6 item" key={idx}>
                <div className="single-latest-projects">
                    <img src={"images/boards/" + (idx+1) + ".jpeg"} alt={"LOTTO BOARD #" + (idx + 1)} />

                    <div className="content">
                        <span>Board # {(idx + 1)}</span>
                        <h3>Board # {(idx + 1)}</h3>
                    </div>

                    <Link href={"/select-wildcard/" + image + "#div-board-selected"}>
                        <a className="link-btn"></a>
                    </Link>
                    
                    
                </div>
            </div>
        )
    });

    const wildCardsChooser = arrNftCard.map((cardId, idx) => {
        return (
            <div className="col-lg-3 col-sm-3 item" key={idx}>
                
                <div className="single-latest-projects">
                    
                        <img src={"images/cards/" + (idx+1) + ".jpg"} alt={"LOTTO CARD #" + (cardId)} />
                        <div className="content">
                            <span>Board # {(idx + 1)}</span>
                            <h3>Board # {(idx + 1)}</h3>
                        </div>

                        
                        <a className="link-btn" onClick={() => selectWildCard(idx)}></a>    
                    
                    
                </div>
                
            </div>
        )
    });

        
    return (
        <>
            {playStep == 1?
            <div className="our-latest-projects ptb-80" id="div-select-board">
                <div className="container">
                    <div className="section-title text-left">
                        <h2>Select one <span>LOTTO BOARD</span> to play</h2>
                        <p>If more than one person choose the same board and the board wins a prize in the game, the prize will be spplited amoung players.</p>
                    </div>
                
                    <Masonry
                        className={'row'} // default ''
                        elementType={'div'} // default 'div'
                        options={masonryOptions} // default {}
                        disableImagesLoaded={false} // default false
                        updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
                    >
                        {images}
                    </Masonry>
                </div>
            </div>
            :
            <>
                <div className="row">
                    <div className="col-lg-4 col-sm-4" style={{padding: '40px'}}>
                        <h2>Board selected #{boardSelected}</h2>
                        <img src={"images/boards/" + (boardSelected) + ".jpeg"} alt={"LOTTO BOARD #" + (boardSelected)} />
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
                        <div className="row textCenter">
                            <a className="btn btn-primary" onClick={selectBoard(0)}>Change board</a>
                        </div>
                    </div>
                    
                </div>
                
            </>
            
            }
        </>
        
    );
    
}

export default Projects;
