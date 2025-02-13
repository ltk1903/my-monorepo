const Clients = () => {
    return (
        <div className="py-5">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-3 col-sm-6 my-3">
                        <a href="#!">
                            <img 
                                className="img-fluid img-brand d-block mx-auto" 
                                src="assets/img/logos/microsoft.svg" 
                                alt="Microsoft Logo" 
                                aria-label="Microsoft Logo" 
                            />
                        </a>
                    </div>
                    <div className="col-md-3 col-sm-6 my-3">
                        <a href="#!">
                            <img 
                                className="img-fluid img-brand d-block mx-auto" 
                                src="assets/img/logos/google.svg" 
                                alt="Google Logo" 
                                aria-label="Google Logo" 
                            />
                        </a>
                    </div>
                    <div className="col-md-3 col-sm-6 my-3">
                        <a href="#!">
                            <img 
                                className="img-fluid img-brand d-block mx-auto" 
                                src="assets/img/logos/facebook.svg" 
                                alt="Facebook Logo" 
                                aria-label="Facebook Logo" 
                            />
                        </a>
                    </div>
                    <div className="col-md-3 col-sm-6 my-3">
                        <a href="#!">
                            <img 
                                className="img-fluid img-brand d-block mx-auto" 
                                src="assets/img/logos/ibm.svg" 
                                alt="IBM Logo" 
                                aria-label="IBM Logo" 
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Clients;
