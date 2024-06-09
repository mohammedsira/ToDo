import React, { useState } from 'react'
import Edit from './Edit'

function Cards({ data, setData }) {
    const [editCardId, setEditCardId] = useState(null);


    //to mnanually select the  status
    const handleToggle = (id, newStatus) => {
        //to find the index of the item with the given id
        const index = data.findIndex(item => item.id === id)
        if (index !== -1) {
            const newData = [...data]
            newData[index].status = newStatus
            setData(newData);
        }

    }


    //to handle delete todo

    const handleDelete = (id) => {
        // console.log(id)
        const editedIndex = data.findIndex(item => item.id === id);
        if (editedIndex !== -1) {

            data.splice(editedIndex, 1)
            setData([...data])
        }
        else {
            alert("Invalid Id")
        }

    }

    //to handle edit

    const handleEditClick = (id) => {
        setEditCardId(id);
    };




    return (

        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 mt-5">
            {data.map((e, i) => (
                <div className="col mb-4" key={e.id}>
                    <div className="card ms-3">
                        <div className="card-body" >
                            <h6 className="card-title">Name:{e.title}</h6>
                            <p className="card-text">Description: {e.description}</p>

                            <div className="btn-group">
                                <span>Status: &nbsp;</span>
                                <button className="btn btn-info dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    {e.status === 'Completed' ? 'Completed' : 'Not Completed'}
                                </button>

                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">

                                    <li><a className="dropdown-item" href="#" onClick={() => handleToggle(e.id, "Completed")}>Completed</a></li>
                                    <li><a className="dropdown-item" href="#" onClick={() => handleToggle(e.id, "Not Completed")}>Not completed</a></li>
                                </ul>
                            </div>
                        </div>


                        <div className="card-footer">
                            <div className="d-grid gap-2 d-md-block py-2">
                                <button className="btn btn-success " type="button" onClick={() => handleEditClick(e.id)} >Edit</button>
                                <button className="btn btn-danger ms-3" type="button" onClick={() => handleDelete(e.id)} >Delete</button>
                            </div>
                        </div>
                    </div>
                    {/* when editCardId is not null, the Edit component will be rendered, allowing the user to edit the card corresponding to the editCardId. */}

                    {editCardId === e.id && (
                        <Edit
                            data={data}
                            setData={setData}
                            title={e.title}
                            setTitle={(title) => {
                                const newData = [...data];
                                newData[i].title = title;
                                setData(newData);
                            }}
                            description={e.description}
                            setDescription={(description) => {
                                const newData = [...data];
                                newData[i].description = description;
                                setData(newData);
                            }}
                            setEditCardId={setEditCardId}
                            resetEditForm={() => setEditCardId(null)}
                        />
                    )}

                </div>
            ))}



        </div>

    )

}

export default Cards