

const RowsNew = ({
    name,
    image,
    createdAt, 
    deleteNews }) => {

    const date = new Date( createdAt );
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
        
    return (
        <tr>
            <td className="col-3 text-center h4 " style={{paddingTop:'35px'}}>{name}</td>
            <td className="col-3 text-center "><img src={image} alt="avatar"  width='80'/></td>
            <td className="col-3 text-center h4 "  style={{paddingTop:'35px'}}>{ new Intl.DateTimeFormat('es-Es', options).format(date) }</td>

            <td className="col-3 text-center h4 " style={{ paddingTop: '35px' }}>
                <div className="d-sm-inline-flex justify-content-center">

                <button onClick={()=>{console.log('open edit form')}} className="btn btn-light mx-1 display-1 ">
                    <i class="bi bi-pencil-fill h3"></i>
                    Editar
                    </button>
                <button onClick={()=>deleteNews()} className="btn btn-danger mx-1 display-1">
                    <i class="bi bi-trash3 h3"></i>
                    Eliminar
                    </button>
                </div>
            </td>
        </tr>
    );
}

export default RowsNew;