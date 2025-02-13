const Team = () => {
    const teamMembers = [
        { name: "Parveen Anand", role: "Lead Designer", img: "1.jpg" },
        { name: "Diana Petersen", role: "Lead Marketer", img: "2.jpg" },
        { name: "Larry Parker", role: "Lead Developer", img: "3.jpg" },
    ];

    return (
        <section className="page-section bg-light" id="team">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Our Amazing Team</h2>
                    <h3 className="section-subheading text-muted">
                        Lorem ipsum dolor sit amet consectetur.
                    </h3>
                </div>
                <div className="row">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="col-lg-4">
                            <div className="team-member">
                                <img
                                    className="mx-auto rounded-circle"
                                    src={`assets/img/team/${member.img}`}
                                    alt={member.name}
                                />
                                <h4>{member.name}</h4>
                                <p className="text-muted">{member.role}</p>
                                <a className="btn btn-dark btn-social mx-2" href="#!" aria-label={`${member.name} Twitter Profile`}>
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a className="btn btn-dark btn-social mx-2" href="#!" aria-label={`${member.name} Facebook Profile`}>
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                                <a className="btn btn-dark btn-social mx-2" href="#!" aria-label={`${member.name} LinkedIn Profile`}>
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="row">
                    <div className="col-lg-8 mx-auto text-center">
                        <p className="large text-muted">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque,
                            laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias
                            ut unde.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Team;
