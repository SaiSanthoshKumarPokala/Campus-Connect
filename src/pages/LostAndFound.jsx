import { useEffect, useRef , useState } from "react";
import { XCircleIcon } from "@heroicons/react/24/solid";
import { v4 as uuidv4 } from 'uuid';
import ChatBot from "../components/Chatbot";

export default function LostAndFound() {

    const lost = useRef(null);
    const found = useRef(null);

    const [lostitem, setLostitem] = useState("");
    const [founditem, setFounditem] = useState("");
    const [name, setName] = useState("");
    const [year, setYear] = useState("1st");
    const [dept, setDept] = useState("CSE");
    const [desc, setDesc] = useState("");
    const [lostitems, setLostitems] = useState([]);
    const [founditems, setFounditems] = useState([]);
    const [photo, setPhoto] = useState("");

    useEffect(() => {
        let Lostitems = localStorage.getItem("Lost Items");
        if (Lostitems) {
            let Lost = JSON.parse(Lostitems);
            setLostitems(Lost);
        }
        let Founditems = localStorage.getItem("Found Items");
        if (Founditems) {
            let Found = JSON.parse(Founditems);
            setFounditems(Found);
        }
    }, [])

    const saveToLS = () => {
        localStorage.setItem("Lost Items", JSON.stringify(lostitems));
        localStorage.setItem("Found Items", JSON.stringify(founditems));
    }

    useEffect(() => {
        saveToLS();
    }, [lostitems,founditems]);


    const SubmitLost = (e) => {
        e.preventDefault();
        setLostitems([...lostitems, { id: uuidv4(), Name: name, Year: year, Department: dept, Description: desc, Lostitem: lostitem, Photo: photo }]);
        console.log(lostitems);
        lost.current.close();
        setName("");
        setDept("CSE");
        setDesc("");
        setYear(1);
        setLostitem("");
    }
    
    const SubmitFound = (e) => {
        e.preventDefault();
        setFounditems([...founditems, { id: uuidv4(), Name: name, Year: year, Department: dept, Description: desc, Founditem: founditem, Photo: photo }]);
        console.log(founditems);
        found.current.close();
        setName("");
        setDept("CSE");
        setDesc("");
        setYear(1);
        setLostitem("");
    }
    // localStorage.clear()

    return (
        <>
            <title>Lost and Found</title>
            <div className="min-h-dvh">
                {/* Lost */}
                <div className="flex md:flex-row md:justify-evenly flex-col items-center justify-center sticky top-0 bg-orange-300 z-10">
                    <div className="flex flex-row gap-2 items-center justify-center m-4">
                        <p className="text-center">Lost an item?</p>
                        <button type="button" className="border-2 hover:bg-green-400 rounded-md cursor-pointer border-black bg-white p-2" onClick={() => { lost.current.showModal() }}>Click here</button>
                    </div>
                    <dialog ref={lost} className="m-auto p-6 rounded-md backdrop:bg-orange-300/70">
                        <form action="">
                            <div className="flex flex-col gap-4">
                                <div className="flex flex-row items-center justify-end">
                                    <p>Close</p>
                                    <button type="button" className="cursor-pointer" onClick={() => { lost.current.close() }}>
                                        <XCircleIcon className="size-8" />
                                    </button>
                                </div>
                                <div className="flex flex-row gap-2">
                                    <label htmlFor="Name">Name: </label>
                                    <input type="text" name="" id="Name" value={name} onChange={(e) => setName(e.target.value)} className="border-b-2 border-b-amber-400" />
                                </div>
                                <div className="flex flex-row gap-2">
                                    <label htmlFor="Year">Year: </label>
                                    <select name="" id="Year" value={year} onChange={(e) => setYear(e.target.value)}>
                                        <option value="1st">1st</option>
                                        <option value="2nd">2nd</option>
                                        <option value="3rd">3rd</option>
                                        <option value="4th">4th</option>
                                    </select>
                                </div>
                                <div className="flex flex-row gap-2">
                                    <label htmlFor="Department">Department: </label>
                                    <select name="" id="Department" value={dept} onChange={(e) => setDept(e.target.value)}>
                                        <option value="CSE">CSE</option>
                                        <option value="ECE">ECE</option>
                                        <option value="EEE">EEE</option>
                                        <option value="MECH">MECH</option>
                                    </select>
                                </div>
                                <div className="flex flex-row gap-2">
                                    <label htmlFor="Description">Description: </label>
                                    <input type="text" name="" id="Description" value={desc} onChange={(e) => setDesc(e.target.value)} className="border-b-2 border-b-amber-400" />
                                </div>
                                <div className="flex flex-row gap-2">
                                    <label htmlFor="LostItem">Lost Item: </label>
                                    <input type="text" name="" id="LostItem" value={lostitem} onChange={(e) => setLostitem(e.target.value)} className="border-b-2 border-b-amber-400" />
                                </div>
                                <div className="flex flex-row gap-2">
                                    <label htmlFor="Photo">Photo: </label>
                                    <input type="file" name="Photo" id="Photo" accept="image/*" className="" onChange={(e)=>{setPhoto(e.target)}} />
                                </div>
                                <div className="text-center">
                                    <button type="submit" className="p-2 rounded-md border-2 cursor-pointer border-black" onClick={SubmitLost}>Submit</button>
                                </div>
                            </div>
                        </form>
                    </dialog>

                    {/* Found */}
                    <div className="flex flex-row gap-2 items-center justify-center m-4">
                        <p className="text-center">Found an item?</p>
                        <button type="button" className="border-2 rounded-md cursor-pointer hover:bg-green-400 border-black bg-white p-2" onClick={() => { found.current.showModal() }}>Click here</button>
                    </div>
                    <dialog ref={found} className="m-auto p-6 rounded-md backdrop:bg-orange-300/70">
                        <form action="">
                            <div className="flex flex-col gap-4">
                                <div className="flex flex-row items-center justify-end">
                                    <p>Close</p>
                                    <button type="button" className="cursor-pointer" onClick={() => { found.current.close() }}>
                                        <XCircleIcon className="size-8" />
                                    </button>
                                </div>
                                <div className="flex flex-row gap-2">
                                    <label htmlFor="Name">Name: </label>
                                    <input type="text" name="" id="Name" value={name} className="border-b-2 border-b-amber-400" onChange={(e) => setName(e.target.value)} />
                                </div>
                                <div className="flex flex-row gap-2">
                                    <label htmlFor="Year">Year: </label>
                                    <select name="" id="Year" value={year} onChange={(e) => setYear(e.target.value)}>
                                        <option value="1st">1st</option>
                                        <option value="2nd">2nd</option>
                                        <option value="3rd">3rd</option>
                                        <option value="4th">4th</option>
                                    </select>
                                </div>
                                <div className="flex flex-row gap-2">
                                    <label htmlFor="Department">Department: </label>
                                    <select name="" id="Department" value={dept} onChange={(e) => setDept(e.target.value)}>
                                        <option value="CSE">CSE</option>
                                        <option value="ECE">ECE</option>
                                        <option value="EEE">EEE</option>
                                        <option value="MECH">MECH</option>
                                    </select>
                                </div>
                                <div className="flex flex-row gap-2">
                                    <label htmlFor="Description">Description: </label>
                                    <input type="text" name="" id="Description" value={desc} onChange={(e) => setDesc(e.target.value)} className="border-b-2 border-b-amber-400" />
                                </div>
                                <div className="flex flex-row gap-2">
                                    <label htmlFor="FoundItem">Found Item: </label>
                                    <input type="text" name="" id="FoundItem" value={founditem} onChange={(e) => setFounditem(e.target.value)} className="border-b-2 border-b-amber-400" />
                                </div>
                                <div className="flex flex-row gap-2">
                                    <label htmlFor="Photo">Photo: </label>
                                    <input type="file" name="Photo" id="Photo" accept="image/*" className="" />
                                </div>
                                <div className="text-center">
                                    <button type="submit" className="p-2 rounded-md cursor-pointer border-2 border-black" onClick={SubmitFound}>Submit</button>
                                </div>
                            </div>
                        </form>
                    </dialog>
                </div>



                <p className="text-center mt-4 font-serif text-3xl font-bold text-white">Lost items</p>
                <table className="w-11/12 border-2 border-black m-auto table-fixed mt-2 mb-8">
                    <thead>
                        <tr className="odd:bg-green-300 even:bg-green-400">
                            <th className="border-2 border-black p-2">Name</th>
                            <th className="border-2 border-black p-2">Lost item</th>
                            <th className="border-2 border-black p-2">Description</th>
                            <th className="border-2 border-black p-2">Image</th>
                            <th className="border-2 border-black p-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {lostitems.map(items => {
                            return (
                                <tr className="odd:bg-green-300 even:bg-green-400" key={items.id}>
                                    <td className="p-2 border-2 border-black">{items.Name}</td>
                                    <td className="p-2 border-2 border-black">{items.Lostitem}</td>
                                    <td className="p-2 border-2 border-black">{items.Description}</td>
                                    <td className="p-2 border-2 border-black"></td>
                                    <td className="p-2 border-2 border-black">Found this item?<a href="https://wa.me/916301014568">Click here</a></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>


                <p className="text-center mt-4 font-serif text-3xl font-bold text-white">Found items</p>
                <table className="w-11/12 border-2 border-black m-auto table-fixed mt-2 mb-4">
                    <thead>
                        <tr className="odd:bg-green-300 even:bg-green-400">
                            <th className="border-2 border-black p-2">Name</th>
                            <th className="border-2 border-black p-2">Found item</th>
                            <th className="border-2 border-black p-2">Description</th>
                            <th className="border-2 border-black p-2">Image</th>
                            <th className="border-2 border-black p-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {founditems.map(items => {
                            return (
                                <tr className="odd:bg-green-300 even:bg-green-400" key={items.id}>
                                    <td className="p-2 border-2 border-black">{items.Name}</td>
                                    <td className="p-2 border-2 border-black">{items.Founditem}</td>
                                    <td className="p-2 border-2 border-black">{items.Description}</td>
                                    <td className="p-2 border-2 border-black"></td>
                                    <td className="p-2 border-2 border-black">Lost this item?<a href="https://wa.me/916301014568">Click here</a></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
            <ChatBot />
        </>


    )
}; 