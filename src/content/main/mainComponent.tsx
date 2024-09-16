import { MyBorrowingsComponent } from "../../myBorrowings/myBorrowingsComponent";

export const MainComponent = () => {
    return(
        <>
        
        <div className="content bgup">
            <div className="" style={{marginTop:'15px'}} >
                <div className="row align-items-center m-0">

                    <div className="col-md-6 text-center">
                        <img src="./uphome5.png" className="imageShadow"/>
                    </div>

                    <div className="col-md-5 p-0" style={{marginTop:'40px'}}>
                        {/* <img src="./sgslogov2.png" width={300}/> */}
                        {/* <h1 style={{marginTop:"20px"}}>SGS Library Center</h1> */}
                        <MyBorrowingsComponent/>
                    </div>
                    <div className="col-md-1"></div>

                </div>
            </div>
            <div className="row text-center justify-content-md-center m-0">
                <div className="col-md-3 " style={{marginTop:'70px',marginBottom:'30px'}}>
                    <i className="fa-solid fa-book-open fa-5x" style={{color: '#363a55'}}></i>
                    <h2 style={{color:'#363a55'}}>Books</h2>
                    <h1 style={{color:'#363a55'}}>2700</h1>
                </div>
                <div className="col-md-3" style={{marginTop:'70px',marginBottom:'30px'}}>
                    <i className="fa-solid fa-file-lines fa-5x" style={{color: '#d0a461'}}></i>
                    <h2 style={{color:'#d0a461'}}>Report</h2>
                    <h1 style={{color:'#d0a461'}}>4000</h1>
                </div>
                <div className="col-md-3" style={{marginTop:'70px',marginBottom:'30px'}}>
                    <i className="fa-solid fa-map fa-5x" style={{color: 'rgb(79, 181, 162)'}}></i>
                    <h2 style={{color:'rgb(79, 181, 162)'}}>Maps</h2>
                    <h1 style={{color:'rgb(79, 181, 162)'}}>1200</h1>
                </div>
            </div>

            <div className="row justify-content-md-center m-0">

                <div className="col-md-1"></div>
                <div className="col-md-5">
                    <div className="card">
                        <div className="card-header">
                            <i className="fa-solid fa-layer-group fa-xl" style={{color: '#202043',marginRight:'5px'}}></i>
                            <span style={{fontSize:'14pt',color: '#202043',marginLeft:'5px'}}>New SGS Library</span>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <div className="row m-1">
                                    <div className="col-md-2 text-start">
                                        <i className="fa-solid fa-map fa-2x " style={{color: 'rgb(79, 181, 162)'}}></i>
                                    </div>
                                    <div className="col-md-7">
                                        <span>GM-001-2024</span>
                                        <h6>SGS Map Name</h6>
                                    </div>
                                    <div className="col-md-3 text-end">
                                        <a className="btn btn-outline-danger">more <i className="fa-solid fa-angle-right"></i></a>
                                    </div>
                                </div>
                            </li>
                            <li className="list-group-item">
                                <div className="row m-1">
                                    <div className="col-md-2 text-start">
                                        <i className="fa-solid fa-file-lines fa-2x" style={{color: '#d0a461'}}></i>
                                    </div>
                                    <div className="col-md-7">
                                        <span>SGS-TR-001-2024</span>
                                        <h6>SGS Report Name</h6>
                                    </div>
                                    <div className="col-md-3 text-end">
                                        <a className="btn btn-outline-danger">more <i className="fa-solid fa-angle-right"></i></a>
                                    </div>
                                </div>
                            </li>
                            <li className="list-group-item">
                                <div className="row m-1">
                                    <div className="col-md-2 text-start">
                                        <i className="fa-solid fa-file-lines fa-2x" style={{color: '#d0a461'}}></i>
                                    </div>
                                    <div className="col-md-7">
                                        <span>SGS-TR-001-2024</span>
                                        <h6>SGS Report Name</h6>
                                    </div>
                                    <div className="col-md-3 text-end">
                                        <a className="btn btn-outline-danger">more <i className="fa-solid fa-angle-right"></i></a>
                                    </div>
                                </div>
                            </li>
                            <li className="list-group-item">
                                <div className="row m-1">
                                    <div className="col-md-2 text-start">
                                        <i className="fa-solid fa-map fa-2x " style={{color: 'rgb(79, 181, 162)'}}></i>
                                    </div>
                                    <div className="col-md-7">
                                        <span>GM-001-2024</span>
                                        <h6>SGS Map Name</h6>
                                    </div>
                                    <div className="col-md-3 text-end">
                                        <a className="btn btn-outline-danger">more <i className="fa-solid fa-angle-right"></i></a>
                                    </div>
                                </div>
                            </li>
                            <li className="list-group-item">
                                <div className="row m-1">
                                    <div className="col-md-2 text-start">
                                        <i className="fa-solid fa-book-open fa-2x" style={{color: '#363a55'}}></i>
                                    </div>
                                    <div className="col-md-7">
                                        <span>Geology Book</span>
                                        <h6>SGS Book Name</h6>
                                    </div>
                                    <div className="col-md-3 text-end">
                                        <a className="btn btn-outline-danger">more <i className="fa-solid fa-angle-right"></i></a>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <div className="card-footer text-muted text-end">
                            <a href="#" style={{textDecoration:'none'}}>more <i className="fa-solid fa-angle-right"></i></a>
                        </div>
                    </div>
                </div>
                
                <div className="col-md-5">
                    <div className="card">
                        <div className="card-header">
                            <i className="fa-solid fa-heart fa-xl" style={{color: '#202043',marginRight:'5px'}}></i>
                            <span style={{fontSize:'14pt',color: '#202043',marginLeft:'5px'}}>My Favorites</span>
                            
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">An item</li>
                            <li className="list-group-item">A second item</li>
                            <li className="list-group-item">A third item</li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-1"></div>
            </div>
        </div>
        </>
        
    )
};