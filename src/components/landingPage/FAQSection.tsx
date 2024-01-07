import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

const FAQSection: React.FC = () => {
  return (
    <>
      <section className="faq mt-4" id="faq">
        <div className="container faq-section">
          <div className="row faq-details">
            <div className="col-md-4">
              {/* Left Section */}
              <div className="left-sectionn mb-3">
                <h1
                  className="heading-faqq"
                  style={{ fontSize: "30px", fontWeight: "bold" }}
                >
                  Frequently Asked Question
                </h1>
                <p className="faq-textt">
                  Temukan jawaban atas pertanyaan umum tentang layanan kami di
                  sini.
                </p>
              </div>
            </div>
            <div className="col-md-8">
              {/* Right Section */}
              <div className="right-section ms-1">
                <Accordion>
                  <Card style={{ border: "0px solid black" }}>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>
                        Apa saja syarat yang dibutuhkan?
                      </Accordion.Header>
                      <Accordion.Body>
                        Untuk menyewa mobil dari kami, Anda perlu memenuhi
                        beberapa persyaratan dasar, termasuk usia minimal yang
                        biasanya berkisar antara 21 hingga 25 tahun, memiliki
                        kartu kredit yang valid untuk pembayaran dan deposito,
                        serta SIM atau surat izin mengemudi yang masih berlaku
                        sesuai dengan persyaratan wilayah tempat Anda menyewa.
                        Identifikasi pribadi seperti KTP atau dokumen serupa
                        juga mungkin diperlukan. Pastikan untuk membaca syarat
                        dan ketentuan lengkap kami sebelum melakukan pemesanan,
                        dan tim kami selalu siap untuk membantu menjawab
                        pertanyaan lebih lanjut tentang persyaratan penyewaan.
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="1">
                      <Accordion.Header>
                        Berapa hari minimal sewa mobil lepas kunci?
                      </Accordion.Header>
                      <Accordion.Body>
                        Kami memiliki kebijakan minimal hari sewa sebanyak dua
                        hari untuk penyewaan mobil lepas kunci. Ini berarti Anda
                        perlu menyewa mobil setidaknya selama dua hari untuk
                        menggunakan layanan kami. Kebijakan ini dirancang untuk
                        memberikan pelanggan kami waktu yang cukup untuk
                        menikmati manfaat dari penyewaan mobil dengan harga yang
                        kompetitif. Kami berharap Anda dapat memanfaatkan
                        penawaran kami dan menjadikan perjalanan Anda lebih
                        nyaman dan efisien dengan menggunakan layanan sewa mobil
                        kami selama minimal dua hari.
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="2">
                      <Accordion.Header>
                        Berapa hari sebelumnya sebaiknya booking sewa mobil?
                      </Accordion.Header>
                      <Accordion.Body>
                        Sebaiknya Anda melakukan pemesanan sewa mobil
                        secepatnya, terutama jika Anda memiliki tanggal atau
                        waktu tertentu yang Anda inginkan, terutama saat
                        merencanakan perjalanan pada musim liburan atau saat
                        acara khusus. Dalam beberapa situasi, pemesanan sebulan
                        sebelumnya dapat memberikan kepastian yang lebih besar
                        dalam memilih mobil dan tanggal yang sesuai dengan
                        kebutuhan Anda. Namun, kami juga memahami bahwa
                        perencanaan perjalanan dapat berubah, jadi kami berusaha
                        untuk menerima pemesanan bahkan beberapa hari sebelum
                        tanggal yang diinginkan, asalkan masih tersedia. Yang
                        paling penting, kami selalu merekomendasikan untuk
                        memeriksa ketersediaan secepatnya dan menghubungi kami
                        agar kami dapat membantu Anda menemukan solusi terbaik
                        sesuai dengan jadwal dan preferensi Anda.
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="3">
                      <Accordion.Header>
                        Apakah Ada biaya antar-jemput?
                      </Accordion.Header>
                      <Accordion.Body>
                        Ya, kami menyediakan layanan antar-jemput bagi pelanggan
                        kami. Namun, biaya antar-jemput dapat bervariasi
                        tergantung pada lokasi penjemputan dan pengembalian
                        mobil. Untuk beberapa lokasi yang dekat dengan kantor
                        kami, mungkin biaya antar-jemputnya minimal atau bahkan
                        gratis. Namun, untuk lokasi yang lebih jauh, biaya
                        antar-jemput mungkin dikenakan sesuai dengan jarak dan
                        waktu yang dibutuhkan untuk mengantar dan menjemput
                        Anda.
                      </Accordion.Body>
                    </Accordion.Item>

                    {/* Add more Accordion.Items for each question */}
                  </Card>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br />
    </>
  );
};

export default FAQSection;
