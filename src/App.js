import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useState } from 'react';

function App() {
  const [isStarted, setIsStarted] = useState(false);
  const [randomArray, setRandomArray] = useState([]);
  const [turn, setTurn] = useState(1);
  const [correctAnswer, setCorrectAnswer] = useState(0);
  function start() {
    setIsStarted(true);
    setRandomArray(getRandomArray());
    setTurn(1);
    setCorrectAnswer(0);

  }
  function finish() {
    setIsStarted(false);
  }
  function getRandomArray() {
    var arr = [];

    for (var i = 1; i <= 20; i++) {
      arr.push(i);
    }

    arr.sort(function () {
      return 0.5 - Math.random();
    });

    return arr;
  }
  function handleEnergySaveClick() {
    if (randomArray[turn - 1] > 0 && randomArray[turn - 1] < 11) {
      setCorrectAnswer(correctAnswer + 1);

     turn < 20 ? setTurn(turn + 1): finish();
    } else {
      turn < 20 ? setTurn(turn + 1): finish();
    }
  }
  function handleNotEnergySaveClick() {
    if (randomArray[turn - 1] > 10 && randomArray[turn - 1] < 21) {
      setCorrectAnswer(correctAnswer + 1);
      turn < 20 ? setTurn(turn + 1): finish();
    } else {
      turn < 20 ? setTurn(turn + 1): finish();
    }
  }
  return (
    <Container fluid>
      <Row>
        <Col>
          <Alert variant={'info'}>
            <Alert.Heading>
              Игра-квиз по энергосбережению "Найди энергоcбрегающую лампочку"
            </Alert.Heading>
          </Alert>
        </Col>
      </Row>
      <Row>
        <Col>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="1">
              <Accordion.Header>Правила игры</Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>Нажмите кнопку "Старт!"</li>
                  <li>Перед вами появятся различные лампочки</li>
                  <li>
                    Если вы считаете,что лампочка энергосберегающая,нажмите
                    кнопку "Энергосберегающая"{' '}
                  </li>
                  <li>
                    Если вы считаете,что лампочка неэнергосберегающая,нажмите
                    кнопку "Неэнергосберегающая"
                  </li>
                  <li>По окончанию игры вы увидите результат. Удачи!</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="btnwrper">
            <Button variant="success" disabled={isStarted} onClick={start}>
              Старт!
            </Button>
          </div>
        </Col>
      </Row>
      <div className="kikiki">
        <Row>
          <Col>
            <div className="tyyt">
              {isStarted && (
                <Image
                  src={`${randomArray[turn - 1]}.jpg`}
                  thumbnail
                  width={300}
                  height={300}
                />
              )}
            </div>
          </Col>
        </Row>
      </div>
      <Row>
        <Col>
          <div className="kik">
            <Button
              variant="success"
              disabled={!isStarted}
              onClick={handleEnergySaveClick}
            >
              Энергосберегающая
            </Button>
          </div>
        </Col>
        <Col>
          <div className="kik">
            <Button
              variant="danger"
              disabled={!isStarted}
              onClick={handleNotEnergySaveClick}
            >
              Не энергосберегающая
            </Button>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="kik">
            <Alert variant="info" className="kyky">
              <Alert.Heading>{`Картинка: ${turn} из 20.Правильных ответов:${correctAnswer}`}</Alert.Heading>
            </Alert>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
