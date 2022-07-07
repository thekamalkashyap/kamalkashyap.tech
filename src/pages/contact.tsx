import Navbar from '../components/navbar';
export default function Resume() {
  return (
    <div className="dark">
      <div className="dark:bg-[#242424]">
        <div className="absolute w-full top-0 left-0">
          <Navbar />
        </div>
        <main className=" flex justify-center items-center flex-col h-[100vh] text-white">
          <div
            id="alert"
            className="bg-blue-100 border border-blue-400 text-black px-4 py-3 rounded relative"
            role="alert"
          >
            <strong className="font-bold">Note:</strong>
            <br />
            <span className="block sm:inline">
              The contact form is not working currently.
            </span>
            <span
              className="absolute top-0 bottom-0 right-0 px-4 py-3"
              onClick={() => {
                document.getElementById('alert').style.display = 'none';
              }}
            >
              <svg
                className="fill-current h-6 w-6 text-red-500"
                role="button"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <title>Close</title>
                <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
              </svg>
            </span>
          </div>
          <form>
            <fieldset className="mb-5 p-5 dark:bg-[#242424] border-[#08fdd8] border rounded-lg">
              <legend className="bold px-2 font-bold">Hire me</legend>
              <input
                className="mb-5 pl-3 rounded-md bg-transparent border-b border-[#08fdd8]"
                type="text"
                placeholder="Name"
                id="Name"
                required
              />
              <br />
              <input
                className="mb-5 pl-3 rounded-md bg-transparent border-b border-[#08fdd8]"
                type="email"
                placeholder="mail"
                // value={email}
                id="mail"
                required
              />
              <br />
              <textarea
                className=" mb-5 px-3 rounded-lg bg-transparent border border-[#08fdd8] "
                id="message"
                placeholder="Mesaage"
                cols={25}
                rows={10}
                required
              ></textarea>
              <br />
              <input
                className=" cursor-pointer bg-[#08fdd8] rounded-lg px-2"
                type="submit"
                value="Send"
              />
            </fieldset>
          </form>
        </main>
      </div>
    </div>
  );
}
