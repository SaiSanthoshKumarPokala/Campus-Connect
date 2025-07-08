import { useEffect, useRef, useState } from "react";
import { XCircleIcon } from "@heroicons/react/24/solid";
import { v4 as uuidv4 } from 'uuid';
import { collection, updateDoc, doc, setDoc, getDocs, deleteDoc, getDoc } from "firebase/firestore";
import ChatBot from "../components/Chatbot";
import { storage, db } from "../../firebaseConfig";
import { ref, uploadBytes } from "firebase/storage";

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
    const [photo, setPhoto] = useState([]);
    const [whatsappNo, setWhatsappNo] = useState("");
    const storageRef = ref(storage, `Lost and Found/${photo.name}`);

    // const [data, setData] = useState([]);

    const fetchData = async () => {
        const LostQuerySnapshot = await getDocs(collection(db, "Lost"));
        setLostitems(LostQuerySnapshot.docs);
        const FoundQuerySnapshot = await getDocs(collection(db, "Found"));
        setFounditems(FoundQuerySnapshot.docs);
        console.log("Lost items:", lostitems);
        console.log("Found items:", founditems);

        // console.log(QuerySnapshot.docs);
        // setData(QuerySnapshot.docs);
        // console.log(data);
    }


    // useEffect(() => {
    //     let Lostitems = localStorage.getItem("Lost Items");
    //     if (Lostitems) {
    //         let Lost = JSON.parse(Lostitems);
    //         setLostitems(Lost);
    //     }
    //     let Founditems = localStorage.getItem("Found Items");
    //     if (Founditems) {
    //         let Found = JSON.parse(Founditems);
    //         setFounditems(Found);
    //     }
    // }, [])

    // const saveToLS = () => {
    //     localStorage.setItem("Lost Items", JSON.stringify(lostitems));
    //     localStorage.setItem("Found Items", JSON.stringify(founditems));
    // }

    useEffect(() => {
        // saveToLS();
        fetchData();
        console.log("Found items:", founditems)
        // console.log(photo);
    }, []);


    const fileChange = (e) => {
        const file = e.target.files[0]
        // console.log(file);
        setPhoto(file);
    }

    const SubmitLost = async (e) => {
        e.preventDefault();
        uploadBytes(storageRef, photo).then((snapshot) => {
            console.log('Uploaded a blob or file!');
        });
        await setDoc(doc(db, `Lost`, uuidv4()), { Name: name, Year: year, Department: dept, Description: desc, Lostitem: lostitem, Photo: photo.name, url: `https://storage.googleapis.com/campusconnect-iomp.firebasestorage.app/Lost%20and%20Found/${photo.name}`, whatsapp:`https://wa.me/91${whatsappNo}` }
        );
        // setLostitems([...lostitems, { id: uuidv4(), Name: name, Year: year, Department: dept, Description: desc, Lostitem: lostitem, Photo: photo.name, url: `https://storage.googleapis.com/campusconnect-iomp.firebasestorage.app/Lost%20and%20Found/${photo.name}` }]);
        // console.log(lostitems);
        lost.current.close();
        setName("");
        setDept("CSE");
        setDesc("");
        setYear(1);
        setLostitem("");
        setPhoto("");
        setWhatsappNo("");
        fetchData();
    }

    const SubmitFound = async (e) => {
        e.preventDefault();
        uploadBytes(storageRef, photo).then((snapshot) => {
            console.log('Uploaded a blob or file!');
        });
        await setDoc(doc(db, `Found`, uuidv4()), { Name: name, Year: year, Department: dept, Description: desc, Founditem: founditem, Photo: photo.name, url: `https://storage.googleapis.com/campusconnect-iomp.firebasestorage.app/Lost%20and%20Found/${photo.name}`, whatsapp:`https://wa.me/91${whatsappNo}` }
        );
        // setFounditems([...founditems, { id: uuidv4(), Name: name, Year: year, Department: dept, Description: desc, Founditem: founditem, Photo: photo.name, url: `https://storage.googleapis.com/campusconnect-iomp.firebasestorage.app/Lost%20and%20Found/${photo.name}` }]);
        // // console.log(founditems);
        found.current.close();
        setName("");
        setDept("CSE");
        setDesc("");
        setYear(1);
        setFounditem("");
        setPhoto("");
        setWhatsappNo("");
        fetchData();
    }
    // localStorage.clear()

    return (
        <>
            <title>Lost and Found</title>
            <div className="min-h-dvh">
                {/* Lost */}
                <div className="flex flex-row justify-evenly items-center md:sticky md:top-0 bg-green-500 z-10">
                    <div className="flex flex-row gap-2 items-center justify-center m-4">
                        <p className="text-center">Lost an item?</p>
                        <button type="button" className="border-2 hover:bg-orange-400 rounded-md cursor-pointer border-black bg-white p-2" onClick={() => { lost.current.showModal() }}>Click here</button>
                    </div>
                    <dialog ref={lost} className="m-auto p-6 rounded-md bg-white/50 backdrop-blur-2xl backdrop:backdrop-blur-lg">
                        <form>
                            <div className="flex flex-col gap-4 font-bold">
                                <div className="flex flex-row items-center justify-end">
                                    <p>Close</p>
                                    <button type="button" className="cursor-pointer" onClick={() => { lost.current.close() }}>
                                        <XCircleIcon className="size-8 cursor-pointer hover:rotate-90 transition-all ease-in duration-200 hover:scale-105 hover:fill-red-500 hover:stroke-white" />
                                    </button>
                                </div>
                                <div className="flex flex-row gap-2 items-center">
                                    <label htmlFor="Name">Name: </label>
                                    <input type="text" name="Name" id="Name" value={name} onChange={(e) => setName(e.target.value)} className="border-b-2 focus:outline-none border-b-black" />
                                </div>
                                <div className="flex flex-row gap-2 items-center">
                                    <label htmlFor="Year">Year: </label>
                                    <select name="Year" id="Year" className="focus:outline-none" value={year} onChange={(e) => setYear(e.target.value)}>
                                        <option value="1st">1st</option>
                                        <option value="2nd">2nd</option>
                                        <option value="3rd">3rd</option>
                                        <option value="4th">4th</option>
                                    </select>
                                </div>
                                <div className="flex flex-row gap-2 items-center">
                                    <label htmlFor="Department">Department: </label>
                                    <select name="Department" id="Department" className="focus:outline-none" value={dept} onChange={(e) => setDept(e.target.value)}>
                                        <option value="CSE">CSE</option>
                                        <option value="ECE">ECE</option>
                                        <option value="EEE">EEE</option>
                                        <option value="MECH">MECH</option>
                                    </select>
                                </div>
                                <div className="flex flex-row gap-2 items-center">
                                    <label htmlFor="Whatsapp">Whatsapp Number: </label>
                                    <input type="text" name="Whatsapp" id="Whatsapp" value={whatsappNo} onChange={(e) => setWhatsappNo(e.target.value)} className="focus:outline-none border-b-2 border-b-black" />
                                </div>
                                <div className="flex flex-row gap-2 items-center">
                                    <label htmlFor="LostItem">Lost Item: </label>
                                    <input type="text" name="LostItem" id="LostItem" value={lostitem} onChange={(e) => setLostitem(e.target.value)} className="focus:outline-none border-b-2 border-b-black" />
                                </div>
                                <div className="flex flex-row gap-2 items-center">
                                    <label htmlFor="Description">Description: </label>
                                    <input type="text" name="Description" id="Description" value={desc} onChange={(e) => setDesc(e.target.value)} className="focus:outline-none border-b-2 border-b-black" />
                                </div>
                                <div className="flex flex-row gap-2 items-center">
                                    <label htmlFor="Photo">Photo: </label>
                                    <input type="file" name="Photo" id="Photo" accept="image/*" className="focus:outline-none file:border-2 file:p-1 file:bg-gray-300 hover:file:bg-gray-400 file:cursor-pointer file:rounded-md" onChange={(e) => fileChange(e)} />
                                </div>
                                <div className="text-center">
                                    <button type="submit" className="p-2 px-4 rounded-r-full rounded-l-full rounded-md border-2 transition-colors ease-in duration-200 hover:bg-green-600 hover:text-white cursor-pointer border-black" onClick={SubmitLost}>Submit</button>
                                </div>
                            </div>
                        </form>
                    </dialog>

                    {/* Found */}
                    <div className="flex flex-row gap-2 items-center justify-center m-4">
                        <p className="text-center">Found an item?</p>
                        <button type="button" className="border-2 rounded-md cursor-pointer hover:bg-orange-400 border-black bg-white p-2" onClick={() => { found.current.showModal() }}>Click here</button>
                    </div>
                    <dialog ref={found} className="m-auto p-6 rounded-md bg-white/50 backdrop-blur-2xl backdrop:backdrop-blur-lg">
                        <form>
                            <div className="flex flex-col gap-4 font-bold">
                                <div className="flex flex-row items-center justify-end">
                                    <p>Close</p>
                                    <button type="button" className="cursor-pointer" onClick={() => { found.current.close() }}>
                                        <XCircleIcon className="size-8 cursor-pointer hover:rotate-90 transition-all ease-in duration-200 hover:scale-105 hover:fill-red-500 hover:stroke-white" />
                                    </button>
                                </div>
                                <div className="flex flex-row gap-2 items-center">
                                    <label htmlFor="Name">Name: </label>
                                    <input type="text" name="Name" id="Name" value={name} className="border-b-2 border-b-white focus:outline-none" onChange={(e) => setName(e.target.value)} />
                                </div>
                                <div className="flex flex-row gap-2 items-center">
                                    <label htmlFor="Year">Year: </label>
                                    <select name="Year" id="Year" className="focus:outline-none" value={year} onChange={(e) => setYear(e.target.value)}>
                                        <option value="1st">1st</option>
                                        <option value="2nd">2nd</option>
                                        <option value="3rd">3rd</option>
                                        <option value="4th">4th</option>
                                    </select>
                                </div>
                                <div className="flex flex-row gap-2 items-center">
                                    <label htmlFor="Department">Department: </label>
                                    <select name="Department" id="Department" className="focus:outline-none" value={dept} onChange={(e) => setDept(e.target.value)}>
                                        <option value="CSE">CSE</option>
                                        <option value="ECE">ECE</option>
                                        <option value="EEE">EEE</option>
                                        <option value="MECH">MECH</option>
                                    </select>
                                </div>
                                <div className="flex flex-row gap-2 items-center">
                                    <label htmlFor="Whatsapp">Whatsapp Number: </label>
                                    <input type="text" name="Whatsapp" id="Whatsapp" value={whatsappNo} onChange={(e) => setWhatsappNo(e.target.value)} className="focus:outline-none border-b-2 border-b-white" />
                                </div>
                                <div className="flex flex-row gap-2 items-center">
                                    <label htmlFor="FoundItem">Found Item: </label>
                                    <input type="text" name="FoundItem" id="FoundItem" value={founditem} onChange={(e) => setFounditem(e.target.value)} className="border-b-2 focus:outline-none border-b-white" />
                                </div>
                                <div className="flex flex-row gap-2 items-center">
                                    <label htmlFor="Description">Description: </label>
                                    <input type="text" name="Description" id="Description" value={desc} onChange={(e) => setDesc(e.target.value)} className="focus:outline-none border-b-2 border-b-white" />
                                </div>
                                <div className="flex flex-row gap-2 items-center">
                                    <label htmlFor="Photo">Photo: </label>
                                    <input type="file" onChange={(e) => fileChange(e)} name="Photo" id="Photo" accept="image/*" className="focus:outline-none hover:file:bg-gray-400 file:border-2 file:p-1 file:bg-gray-300 file:cursor-pointer file:rounded-md" />
                                </div>
                                <div className="text-center">
                                    <button type="submit" className="p-2 px-4 rounded-r-full rounded-l-full rounded-md cursor-pointer transition-colors ease-in duration-200 hover:bg-green-600 hover:text-white border-2 border-black" onClick={SubmitFound}>Submit</button>
                                </div>
                            </div>
                        </form>
                    </dialog>
                </div>



                <p className="text-center mt-4 font-serif text-3xl font-bold text-white">Lost items</p>
                <div className="w-11/12 lg:overflow-clip overflow-x-scroll m-auto">
                    <table className="w-[1200px] lg:w-11/12 border-2 border-black m-auto table-fixed mt-2 mb-8">
                        <thead>
                            <tr className="bg-green-500">
                                <th className="border-2 border-black p-2">Name</th>
                                <th className="border-2 border-black p-2">Lost item</th>
                                <th className="border-2 border-black p-2">Description</th>
                                <th className="border-2 border-black p-2">Image</th>
                                <th className="border-2 border-black p-2">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {lostitems.map((doc) => {
                                return (
                                    <tr className="odd:bg-white even:bg-green-300" key={doc.id}>
                                        <td className="p-2 border-2 border-black text-center text-wrap wrap-anywhere">{doc.data().Name}</td>
                                        <td className="p-2 border-2 border-black text-center text-wrap wrap-anywhere">{doc.data().Lostitem}</td>
                                        <td className="p-2 border-2 border-black text-center text-wrap wrap-anywhere">{doc.data().Description}</td>
                                        <td className="p-2 border-2 border-black text-center"><img className="size-30 m-auto" src={doc.data().url} alt="" /></td>
                                        <td className="p-2 border-2 border-black">Found this item? <a href={doc.data().whatsapp} target="_blank" className="underline underline-offset-2">Click here</a></td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>


                <p className="text-center mt-4 font-serif text-3xl font-bold text-white">Found items</p>
                <div className="w-11/12 lg:overflow-clip overflow-x-scroll m-auto">

                    <table className="w-[1200px] lg:w-11/12 border-2 border-black m-auto table-fixed mt-2 mb-4">
                        <thead>
                            <tr className="bg-green-500">
                                <th className="border-2 border-black p-2">Name</th>
                                <th className="border-2 border-black p-2">Found item</th>
                                <th className="border-2 border-black p-2">Description</th>
                                <th className="border-2 border-black p-2">Image</th>
                                <th className="border-2 border-black p-2">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {founditems.map((doc) => {
                                return (
                                    <tr className="odd:bg-white even:bg-green-300" key={doc.id}>
                                        <td className="p-2 border-2 border-black text-center text-wrap wrap-anywhere">{doc.data().Name}</td>
                                        <td className="p-2 border-2 border-black text-center text-wrap wrap-anywhere">{doc.data().Founditem}</td>
                                        <td className="p-2 border-2 border-black text-center text-wrap wrap-anywhere">{doc.data().Description}</td>
                                        <td className="p-2 border-2 border-black text-center"><img className="w-30 h-auto object-fill m-auto" src={doc.data().url} alt="" /></td>
                                        <td className="p-2 border-2 border-black text-center">Lost this item? <a href={doc.data().whatsapp} target="_blank" className="underline underline-offset-2">Click here</a></td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
            <ChatBot />
        </>
    )
}; 