import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck';

const ServiceSection = () => {
  return (
    <section id="our-service" className="mt-5">
      <div className="container our-service-container">
        <div className="row row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-2 row-cols-xl-2 g-4 row-cols-xxl-2 py-5">
          <div className="col our-service-col-one d-flex justify-content-center">
            <img src="https://i.ibb.co/tBg2059/our-service-image.png" alt=""
              className="img-fluid our-service-img" />
          </div>
          <div className="col our-service-col-two py-5 d-flex justify-content-center flex-column">
            <h1 className="our-service-title">
              Best Car Rental for any kind of trip in (Lokasimu)!
            </h1>
            <p>
              Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga 
              lebih murah dibandingkan yang lain, kondisi mobil baru, serta
              kualitas pelayanan terbaik untuk perjalanan wisata, bisnis,
              wedding, meeting, dll.
            </p>
            <ul>
              <li>
                <div className="bulatan-icon">
                  <FontAwesomeIcon icon={faCheck} />
                </div>
                Sewa Mobil Dengan Supir di Bali 12 Jam
              </li>
              <li>
                <div className="bulatan-icon">
                  <FontAwesomeIcon icon={faCheck} />
                </div>
                Sewa Mobil Lepas Kunci di Bali 24 Jam
              </li>
              <li>
                <div className="bulatan-icon">
                  <FontAwesomeIcon icon={faCheck} />
                </div>
                Sewa Mobil Jangka Panjang Bulanan
              </li>
              <li>
                <div className="bulatan-icon">
                  <FontAwesomeIcon icon={faCheck} />
                </div>
                Gratis Antar - Jemput Mobil di Bandara
              </li>
              <li>
                <div className="bulatan-icon">
                  <FontAwesomeIcon icon={faCheck} />
                </div>
                Layanan Airport Transfer / Drop In Out
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
