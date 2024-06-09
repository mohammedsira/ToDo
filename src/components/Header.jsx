import React, { useState } from 'react'
import Cards from './Cards'

function Header({ data, setData }) {
    let [title, setTitle] = useState("")
    let [description, setDescription] = useState("")
    let [filter, setFilter] = useState("All")

    const handleFilter = (option) => {
        setFilter(option);
    }

    //Filter Data based on selcetde Filter option
    const filteredData = data.filter((ele) =>
        filter === "All" ? true : ele.status === (filter === "Completed" ? "Completed" : "Not Completed")
    );
    //console.log(filteredData)


    const handleTitleChange = (e) => {
        setTitle(e.target.value)
    }
    const handleDescriptionChange = (e) => {
        setDescription(e.target.value)
    }

    const handleAddData = () => {
        const newAddedData = {
            id: data.length ? data[data.length - 1].id + 1 : 1,
            title,
            description,
            status: 'Not Completed'
        }
        //Update the data state
        setData([...data, newAddedData])
        //clear the input fields
        setTitle("")
        setDescription("")
    }

    return (
        <div className="container mt-5">
            <h3 style={{ textAlign: "center" }}>ToDo Application</h3>
            <div className="row mt-5">
                <div className="col-md-4">
                    <input type="text" className="form-control" id="autoSizingInput1" value={title} onChange={handleTitleChange} placeholder="Todo Name" />
                </div>
                <div className="col-md-4">
                    <input type="text" className="form-control" id="autoSizingInput2" value={description} onChange={handleDescriptionChange} placeholder="Todo Description" />
                </div>
                <div className="col-md-4">
                    <button type="submit" className="btn btn-warning" onClick={handleAddData}>Add Todo</button>
                </div>
            </div>


            <div className="row mt-5">
                <div className="col ">
                    <h5>My ToDos:-</h5>
                </div>



                <div className="col-md-6 text-center">
                    <div className="dropdown">
                        <button className="btn btn-info dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            Status Filter :{filter}
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a className="dropdown-item" href="#" onClick={() => handleFilter("All")}>All</a></li>
                            <li><a className="dropdown-item" href="#" onClick={() => handleFilter("Completed")}>Completed</a></li>
                            <li><a className="dropdown-item" href="#" onClick={() => handleFilter("Not Completed")}>Not completed</a></li>
                        </ul>
                    </div>
                </div>
            </div>



            <div className="row mt-3">
                <div className="col">
                    <Cards data={filteredData} setData={setData} />
                </div>
            </div>



        </div>
    )
}

export default Header