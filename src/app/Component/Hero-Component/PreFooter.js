function PreFooter() {
  return (
      <div  style={{paddingBlock: "10rem", paddingInline:"5rem"}} className="flex justify-center items-center bg-gradient-to-r from-[var(--primary)] to-gray-900 text-white w-full">
        <div className="container flex flex-col justify-center items-center mx-auto px-6">
          <div className="flex flex-col justify-center items-center gap-10 mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Start Your Investment Journey?
            </h2>
            <p className="w-120 text-gray-200 mb-8 text-lg">
              Join thousands of investors who are already growing their wealth
              and financial knowledge with our platform.
            </p>

            <div
             style={{position:"relative"}}
             className="bg-white rounded-lg p-1 flex flex-col sm:flex-row mb-8 mx-auto shadow-lg">
              <input
                type="email"
                placeholder="Enter your email"
                style={{paddingInline: "1rem", paddingBlock:"1rem"} }
                className="flex-grow w-128 bg-white rounded-lg focus:outline-none text-gray-800 border-none focus:ring-2 focus:ring-blue-500 transition-colors !rounded-button sm:rounded-r-none sm:rounded-l-lg"
              />
              <button 
              style={{padding: "1rem", marginBlock:"5px", marginRight:"4px"}}
              className="bg-[var(--primary)] text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors mt-2 sm:mt-0 !rounded-button cursor-pointer whitespace-nowrap">
                Get Started
              </button>
            </div>
            <p className="text-sm text-gray-400">
              Free 14-day trial. No credit card required.
            </p>
          </div>
        </div>
    </div>

    // <div
    //   style={{
    //     padding: " 3rem 10rem",

    //     borderRadius: "25px",
    //     background: "linear-gradient(to right, #799ea7, #505597)",
    //   }}
    // >
    //   <h2
    //     style={{
    //       textTransform: "uppercase",
    //       fontSize: "2rem",
    //       textAlign: "center",
    //       marginBottom: "1.5rem",
    //     }}
    //   >
    //     are you ready?
    //   </h2>
    //   <h1
    //     style={{
    //       textTransform: "capitalize",
    //       color: "white",
    //       fontSize: "4rem",
    //       textAlign: "center",
    //       marginBottom: "1.5rem",
    //       maxWidth: "40rem",
    //       display: "flex",
    //       justifySelf: "center",
    //       lineHeight: "0.9",
    //     }}
    //   >
    //     become financially educated
    //   </h1>
    //   <Button
    //     style={{
    //       background: "black",
    //       textTransform: "uppercase",
    //       display: "flex",
    //       justifySelf: "center",
    //       fontSize: "1.5rem",
    //     }}
    //     content="start learning"
    //   />
    // </div>
  );
}

export default PreFooter;
