import React from "react";
import "./Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Image } from "react-bootstrap";
export default function Home() {
  return (
    <Container fluid className="home">
      <h1 className="motto">
        Kan Kokarsa Şayet Yeleğin, Kükresin Motorun VALHALLA' ya!
      </h1>
      <Row>
        <Col>
          <div className="parag">
            İsmimiz; ön görülemeyen karşısında duyulan korkuyu, doğal bir esin
            kaynağına çevirmiş olan Viking' lere dayanmaktadır. Mad Vikings MC,
            Norveç/OSLO merkezli olup, yapısı bakımından geleneklerine bağlı bir
            Motosiklet Kulübü'dür. Berserker' lar, sürünüzü takip ederken, saf
            ve tavizsiz bireyselliğinizi ön plana çıkartmanızı beklemektedir.
            Çünkü gelenek, rüzgarınızın özgürlüğe doğru alınmasından yanadır..
          </div>
        </Col>
        <Col>
          <div className="parag">
            Bu özgürlük doğrultusunda, sivillerin haklarını koruyup kollamak,
            toplum ile sınırları belirlenmiş bir bağ oluşturup, Berserker' lar
            tarafından bir "HEDEF" haline getirilmiştir. %1'er bizler için,
            motorsikleti bir yaşam tarzı olarak gördüğümüz, kendi yazılı ve
            yazılı olmayan kurallarımız neticesinde onu bir parçamız olarak
            kabul ettiğimiz özgürlük olgusudur. Toplum bizi ne kadar kavgacı ve
            yakıp yıkan bir topluluk olarak görse de, toplumun kurallarından
            ayrı, fakat toplum yasalarına bağlı özgür ruhlar olarak kendimizi
            değerlendiriyoruz.
          </div>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col xl="auto">
          <Image
            fluid
            src="https://media.discordapp.net/attachments/840131151321628672/877561215696637982/1.png.f6d499d888e7118ba525b4b0777dbfb6.png"
          />
        </Col>
      </Row>
    </Container>
  );
}
