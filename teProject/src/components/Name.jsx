export const Name = ( { name, carnet } ) => {
    return (
        <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
            <h5>{name}</h5>
            <ul className="list-unstyled mb-0">
                <li>
                {carnet}
                </li>                                
            </ul>
        </div>  
    )
}