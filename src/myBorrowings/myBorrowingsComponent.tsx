import { myBorrowingsData } from "../utils/myBorrowingsData";


export const MyBorrowingsComponent = () => {
    return(
        <>
            <div className="card mb-3"  style={{background: 'rgba(239, 239, 239, 0.25)',boxShadow: '2px 2px 10px 2px rgba(95, 95, 95, 0.3)' }}>
                <div className="card-header"  style={{background: 'rgba(95, 95, 95, 0.3)'}}>
                    <i className="fa-solid fa-book-open-reader fa-xl" style={{color: '#202043',marginRight:'5px'}}></i>
                    <span style={{fontSize:'14pt',color: '#202043',marginLeft:'5px'}}>My Borrowings</span>
                </div>
                <div className="card-body">
                    <ul className="list-group list-group-flush">
                        {myBorrowingsData.map((item) => {
                            return (
                                <li key={item.id} className="list-group-item" style={{background: 'rgba(239, 239, 239, 0)' }}>
                                    <div className="row m-1">
                                        <div className="col-md-2 text-start">
                                            {item.type == 'book'? 
                                                <i className="fa-solid fa-book-open fa-2x" style={{color: '#363a55'}}></i> 
                                                : item.type == 'map'? <i className="fa-solid fa-map fa-2x " style={{color: 'rgb(79, 181, 162)'}}></i> 
                                                : <i className="fa-solid fa-file-lines fa-2x" style={{color: '#d0a461'}}></i>
                                            }
                                        </div>
                                        <div className="col-md-7">
                                            <span>{item.sgsId}</span>
                                            <h6>{item.title}</h6>
                                        </div>
                                        <div className="col-md-3 col-sm-12 text-end">
                                            <a className="btn btn-outline-danger">more <i className="fa-solid fa-angle-right"></i></a>
                                        </div>
                                    </div>
                                </li>
                            );
                        })}
                        {myBorrowingsData.length == 0 ? <li className="list-group-item" style={{background: 'rgba(239, 239, 239, 0)' }}>
                            <h1>No Data</h1>
                            </li> : null 
                        }
                    </ul>
                </div>
                <div className="card-footer text-muted text-end">
                    <a href="#" style={{textDecoration:'none'}}>more <i className="fa-solid fa-angle-right"></i></a>
                </div>
            </div>
        </>
    )
}