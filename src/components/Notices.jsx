export default function Notices() {
    return (
        <>
            <div className="md:grid md:grid-rows-2 flex flex-col items-center gap-4 justify-center justify-items-center m-2 p-4 w-11/12 md:w-5/12 h-auto border-1 bg-white/15 rounded-2xl backdrop-blur-2xl text-black border-none">
                <div className="img">
                    <img src="https://storage.googleapis.com/campusconnect-iomp.firebasestorage.app/Website%20Images/Poster.png" alt="" className="h-60 md:h-70 lg:h-80" />
                </div>
                <div className="p-4 place-self-center text-black">
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
                    <a className="text-blue-500 underline underline-offset-2 hover:text-white" href="https://www.instagram.com/p/DHv1aC-B3HV/?igsh=ajFuajF5NG1ubmJo">Click here to know more</a>
                </div>
            </div>
        </>
    )
}