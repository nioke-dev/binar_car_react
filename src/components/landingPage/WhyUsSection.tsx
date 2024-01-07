const WhyUsSection = () => {
  return (
    <section id="why-us">
      <div className="container">
        <h1 className="heading-why-us">Why Us?</h1>
        <p className="subHeading-why-us">Mengapa harus pilih Binar Car Rental?</p>
      </div>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-4 row-cols-xl-4 g-4 row-cols-xxl-4 py-5">
          {/* Column 1 */}
          <div className="col">
            <div data-aos="zoom-in-up" className="card" style={{ width: '100%', borderRadius: '8px' }}>
              <div className="card-body card-body-why-us-section">
                <div className="cover-icon-like" style={{ background: 'var(--allert-warning, #f9cc00)' }}>
                  {/* Your SVG icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M5.83329 18.3333H3.33329C2.89127 18.3333 2.46734 18.1577 2.15478 17.8452C1.84222 17.5326 1.66663 17.1087 1.66663 16.6667V10.8333C1.66663 10.3913 1.84222 9.96738 2.15478 9.65482C2.46734 9.34226 2.89127 9.16666 3.33329 9.16666H5.83329M11.6666 7.5V4.16666C11.6666 3.50362 11.4032 2.86774 10.9344 2.3989C10.4656 1.93006 9.82967 1.66666 9.16663 1.66666L5.83329 9.16666V18.3333H15.2333C15.6352 18.3379 16.0253 18.197 16.3315 17.9367C16.6378 17.6763 16.8397 17.3141 16.9 16.9167L18.05 9.41666C18.0862 9.17779 18.0701 8.9339 18.0027 8.70187C17.9354 8.46985 17.8184 8.25524 17.6598 8.07293C17.5013 7.89061 17.305 7.74494 17.0846 7.64601C16.8642 7.54708 16.6249 7.49726 16.3833 7.5H11.6666Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
</svg>

                </div>
                <h5 className="card-title">Mobil Lengkap</h5>
                <p className="card-text">
                  Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat
                </p>
              </div>
            </div>
          </div>

          {/* Column 2 */}
          <div className="col">
            <div data-aos="zoom-in-up" className="card" style={{ width: '100%', borderRadius: '8px' }}>
              <div className="card-body card-body-why-us-section">
                <div className="cover-icon-like" style={{ background: 'var(--allert-danger, #fa2c5a)' }}>
                  {/* Your SVG icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M5.83329 18.3333H3.33329C2.89127 18.3333 2.46734 18.1577 2.15478 17.8452C1.84222 17.5326 1.66663 17.1087 1.66663 16.6667V10.8333C1.66663 10.3913 1.84222 9.96738 2.15478 9.65482C2.46734 9.34226 2.89127 9.16666 3.33329 9.16666H5.83329M11.6666 7.5V4.16666C11.6666 3.50362 11.4032 2.86774 10.9344 2.3989C10.4656 1.93006 9.82967 1.66666 9.16663 1.66666L5.83329 9.16666V18.3333H15.2333C15.6352 18.3379 16.0253 18.197 16.3315 17.9367C16.6378 17.6763 16.8397 17.3141 16.9 16.9167L18.05 9.41666C18.0862 9.17779 18.0701 8.9339 18.0027 8.70187C17.9354 8.46985 17.8184 8.25524 17.6598 8.07293C17.5013 7.89061 17.305 7.74494 17.0846 7.64601C16.8642 7.54708 16.6249 7.49726 16.3833 7.5H11.6666Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
</svg>

                </div>
                <h5 className="card-title">Harga Murah</h5>
                <p className="card-text">
                  Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain
                </p>
              </div>
            </div>
          </div>

          {/* Column 3 */}
          <div className="col">
            <div data-aos="zoom-in-up" className="card" style={{ width: '100%', borderRadius: '8px' }}>
              <div className="card-body card-body-why-us-section">
                <div className="cover-icon-like" style={{ background: 'var(--primary-dark-blue-04, #0d28a6)' }}>
                  {/* Your SVG icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M9.99996 18.3333C14.6023 18.3333 18.3333 14.6024 18.3333 10C18.3333 5.39762 14.6023 1.66666 9.99996 1.66666C5.39759 1.66666 1.66663 5.39762 1.66663 10C1.66663 14.6024 5.39759 18.3333 9.99996 18.3333Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
  <path d="M10 5V10L13.3333 11.6667" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
</svg>

                </div>
                <h5 className="card-title">Layanan 24 Jam</h5>
                <p className="card-text">
                  Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu
                </p>
              </div>
            </div>
          </div>

          {/* Column 4 */}
          <div className="col">
            <div data-aos="zoom-in-up" className="card" style={{ width: '100%', borderRadius: '8px' }}>
              <div className="card-body card-body-why-us-section">
                <div className="cover-icon-like" style={{ background: 'var(--primary-lime-green-04, #5cb85f)' }}>
                  {/* Your SVG icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M9.99996 18.3333C14.6023 18.3333 18.3333 14.6024 18.3333 10C18.3333 5.39762 14.6023 1.66666 9.99996 1.66666C5.39759 1.66666 1.66663 5.39762 1.66663 10C1.66663 14.6024 5.39759 18.3333 9.99996 18.3333Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
  <path d="M10 5V10L13.3333 11.6667" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
</svg>
    
                </div>
                <h5 className="card-title">Sopir Profesional</h5>
                <p className="card-text">
                  Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
