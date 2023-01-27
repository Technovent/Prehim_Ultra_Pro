import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import LoadingCircles from "../assets/loadingcircles.svg";
import "./style.css";

const PollingStation = (props) => {
  const [candidate1URL, changeCandidate1Url] = useState(LoadingCircles);
  const [candidate2URL, changeCandidate2Url] = useState(LoadingCircles);
  const [showresults, changeResultsDisplay] = useState(false);
  const [buttonStatus, changeButtonStatus] = useState(false);
  const [candidate1Votes, changeVote1] = useState("--");
  const [candidate2Votes, changeVote2] = useState("--");
  const [prompt, changePrompt] = useState("--");

  useEffect(() => {
    const getInfo = async () => {
      // vote count stuff
      //let voteCount = await window.contract.getVotes({
       // prompt: localStorage.getItem("prompt"),
      //});
      //changeVote1(voteCount[0]);
     // changeVote2(voteCount[1]);

      // image stuff

      changeCandidate1Url(
        await window.contract.getUrl({
          name: localStorage.getItem("Candidate1"),
        })
      );
      changeCandidate2Url(
        await window.contract.getUrl({
          name: localStorage.getItem("Candidate2"),
        })
      );

      changePrompt(localStorage.getItem("prompt"));

      // vote checking stuff

      let didUserVote = await window.contract.didParticipate({
        prompt: localStorage.getItem("prompt"),
        user: window.accountId,
      });

      changeResultsDisplay(didUserVote);
      changeButtonStatus(didUserVote);
    };

    getInfo();
  }, []);

  const addVote = async (index) => {
    changeButtonStatus(true);
    await window.contract.addVote({
      prompt: localStorage.getItem("prompt"),
      index: index,
    });

    await window.contract.recordUser({
      prompt: localStorage.getItem("prompt"),
      user: window.accountId,
    });

    //let voteCount = await window.contract.getVotes({
      //prompt: localStorage.getItem("prompt"),
    //});
    //changeVote1(voteCount[0]);
    //changeVote2(voteCount[1]);
    //changeResultsDisplay(true);
  };

  return (
    <Container className="c">
      <div className="card">
      <Row className="main-row">
      <p className="title-p">{prompt}</p>
       
        
        <Col className="column">
          <Container>
            <Row>
              <div>
                <img className="images" src={candidate2URL}></img>
              </div>
            </Row>
            {showresults ? (
              <Row className="">
                <div className="vote">{candidate2Votes}</div>
              </Row>
            ) : null}
            <Row className="b1">
              <Button disabled={buttonStatus} onClick={() => addVote(1)}>
                Payment
              </Button>
            </Row>
          </Container>
        </Col>
      </Row>
      </div>
    </Container>
  );
};

export default PollingStation;
