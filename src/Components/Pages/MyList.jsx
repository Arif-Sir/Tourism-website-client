
import { useContext, useEffect, useState } from "react";
import { Authcontext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";



const MyList = () => {
    const { user } = useContext(Authcontext);
    const [userAdd, setUserAdd] = useState([]);
    const handelDelete = _id =>{
        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
             
              console.log('korsi Delete');

            //   for getting id for delete
            fetch(`http://localhost:3000/spots/${_id}`,{
                method:'DELETE'
            })
            .then(res=> res.json())
            .then(data => {
                console.log(data);
                if(data.deletedCount>0){
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                      });
               // Update state to remove the deleted item
               setUserAdd(prevUserAdd => prevUserAdd.filter(item => item._id !== _id));
            }
            })
            }
          });
    }

    useEffect(() => {
        fetch('http://localhost:3000/spots')
            .then(res => res.json())
            .then(data => {
                console.log(data.filter(singleData => singleData.email == user.email));
                const filterData = data.filter(singleData => singleData.email == user.email);
                setUserAdd(filterData);
            })

    }, [user.email]);
    // }, []);



    return (
        <div>
            <h1 className="text-center text-blue-600  text-3xl mt-2">Spot Added By <span className="font-bold text-red-600">{user.displayName}</span> </h1>
            <hr className="border-black mt-4 mx-auto" />
            <div>
                {
                    userAdd.map(item => (
                        <div key={item._id}>
                            {/* <img src={item.image}  />
                        <h2>Place: {item.spot}</h2>
                        <p>Cost:${item.cost}</p> */}
                            <div className="card lg:card-side bg-amber-100 shadow-xl m-4">
                                <figure className="lg:w-2/3"><img className="" src={item.image} alt="Album" /></figure>
                                <div className="card-body">
                                    <div>
                                        <h4 className="">{item.country} , {item.location}.</h4>
                                        <h1 className="text-3xl font-bold mb-3">{item.spot}</h1>
                                    </div>
                                    <p>{item.description}</p>

                                    <p className="">Season : <span className="font-bold"> {item.season} </span></p>
                                    <p>Visitor per Year : <span className="font-bold"> {item.visitor} </span></p>
                                    <p>Travel Time: <span className="font-bold"> {item.time} Days </span> </p>
                                    <p>Average Cost: <span className="font-bold"> ${item.cost} </span></p>
                                    <div className="flex gap-4 mt-4">
                                        <Link to={`/update/${item._id}`}>
                                        <button  className="btn btn-success">Update</button>
                                        </Link>
                                        
                                        <button onClick={()=>handelDelete(item._id)} className="btn btn-error">Delete</button>
                                    </div>


                                </div>
                            </div>

                        </div>
                    ))
                }

            </div>


        </div>
    );
};

export default MyList;