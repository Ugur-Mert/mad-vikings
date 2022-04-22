import React from "react";
import "./Home.css";
import { FaDiscord } from "react-icons/fa";
export default function Home() {
  return (
    <div className="home">
      <h1 className="motto">
        Kan Kokarsa Şayet Yeleğin, Kükresin Motorun VALHALLA' ya!
      </h1>
      <div className="parag">
        <p>
          İsmimiz; ön görülemeyen karşısında duyulan korkuyu, doğal bir esin
          kaynağına çevirmiş olan Viking' lere dayanmaktadır. Mad Vikings MC,
          Norveç/OSLO merkezli olup, yapısı bakımından geleneklerine bağlı bir
          Motosiklet Kulübü'dür. Berserker' lar, sürünüzü takip ederken, saf ve
          tavizsiz bireyselliğinizi ön plana çıkartmanızı beklemektedir. Çünkü
          gelenek, rüzgarınızın özgürlüğe doğru alınmasından yanadır..
        </p>
        <img
          className="home-img"
          src="https://media.discordapp.net/attachments/840131151321628672/877561215696637982/1.png.f6d499d888e7118ba525b4b0777dbfb6.png"
          alt="biker"
        />
      </div>

      <div className="parag">
        <img
          className="home-img2"
          src="https://image.spreadshirtmedia.net/image-server/v1/designs/171704802,width=300,height=300,backgroundColor=666666/fuck-heaven-valhalla-attende.jpg"
          alt="biker"
        />
        <p>
          Bu özgürlük doğrultusunda, sivillerin haklarını koruyup kollamak,
          toplum ile sınırları belirlenmiş bir bağ oluşturup, Berserker' lar
          tarafından bir "HEDEF" haline getirilmiştir. %1'er bizler için,
          motorsikleti bir yaşam tarzı olarak gördüğümüz, kendi yazılı ve yazılı
          olmayan kurallarımız neticesinde onu bir parçamız olarak kabul
          ettiğimiz özgürlük olgusudur. Toplum bizi ne kadar kavgacı ve yakıp
          yıkan bir topluluk olarak görse de, toplumun kurallarından ayrı, fakat
          toplum yasalarına bağlı özgür ruhlar olarak kendimizi
          değerlendiriyoruz.
        </p>
      </div>
      <div className="description">
        <h1>
          Mad Vikings, internet ortamında karşılabileceğiniz standart oyuncu
          topluluklarından biri değildir.
        </h1>
        <p>
          Katılım konusunda ise zaman içerisinde hem sizi hem de düşünce
          yapınızı tanımamız doğrultusunda aramıza katılabilirsiniz.
        </p>
        <img
          src="https://cdn.discordapp.com/attachments/799797447459209226/813092859842002994/unknown.png"
          alt="casual"
        />
      </div>
      <div className="footer">
        <h1>Copyright © 2019 Tüm Hakları Saklıdır.</h1>
      </div>
    </div>
  );
}
