export default function Notices() {
    return (
        <>
            <div className="md:grid flex flex-col items-center gap-4 justify-center justify-items-center m-2 p-4 w-10/12 h-auto border-1 bg-white/10 rounded-2xl backdrop-blur-2xl text-black border-none">
                <div className="m-auto">
                    <img src="https://storage.googleapis.com/campusconnect-iomp.firebasestorage.app/Website%20Images/Poster.png" alt="" className="w-11/12 h-auto m-auto rounded-2xl" />
                </div>
                <div className="p-4 place-self-center text-white">
                    What is this event?
                    <br />
                    <br />
                    If you love drawing, choose a poem or short story provided by the Literary Club and bring it to life through your artwork. Once completed, submit your drawing to Art Meraki.
                    <br />
                    <br />
                    If writing is your passion, select an artwork from the collection provided by Art Meraki and use it as inspiration to craft a poem or short story. Submit your literary piece to the Literary Club.
                    <br />
                    <br />
                    Poems and artwork will be provided on Sunday for you to work on! Get ready!
                    <br />
                    <a className="text-blue-300 underline underline-offset-2 hover:text-white" href="https://www.instagram.com/p/DHv1aC-B3HV/?igsh=ajFuajF5NG1ubmJo">Click here to know more</a>
                </div>
            </div>
        </>
    )
}