const Portfolio = () => {
    return (
        <section className="page-section bg-light" id="portfolio">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Portfolio</h2>
                    <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
                <div className="row">
                    {[
                        { id: 1, title: "Threads", subtitle: "Illustration", img: "1.jpg" },
                        { id: 2, title: "Explore", subtitle: "Graphic Design", img: "2.jpg" },
                        { id: 3, title: "Finish", subtitle: "Identity", img: "3.jpg" },
                        { id: 4, title: "Lines", subtitle: "Branding", img: "4.jpg" },
                        { id: 5, title: "Southwest", subtitle: "Website Design", img: "5.jpg" },
                        { id: 6, title: "Window", subtitle: "Photography", img: "6.jpg" },
                    ].map((item, index) => (
                        <div key={item.id} className={`col-lg-4 col-sm-6 mb-4 ${index >= 3 ? "mb-lg-0" : ""}`}>
                            <div className="portfolio-item">
                                <a className="portfolio-link" data-bs-toggle="modal" href={`#portfolioModal${item.id}`}>
                                    <div className="portfolio-hover">
                                        <div className="portfolio-hover-content">
                                            <i className="fas fa-plus fa-3x"></i>
                                        </div>
                                    </div>
                                    <img className="img-fluid" src={`assets/img/portfolio/${item.img}`} alt={item.title} />
                                </a>
                                <div className="portfolio-caption">
                                    <div className="portfolio-caption-heading">{item.title}</div>
                                    <div className="portfolio-caption-subheading text-muted">{item.subtitle}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
