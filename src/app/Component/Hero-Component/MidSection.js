import Card from './card'

const MidSection = () => {
    return(
        <section style={{padding:"7rem 5rem"}} className="flex flex-col justify-center gap-15 items-center w-full bg-gray-200">
            <div className="flex flex-col items-center gap-4">
                <h2 className="text-4xl font-bold text-center text-gray-800">Why Choose InvestNaija</h2>
                <p className="w-150 text-lg' font-regular text-center text-gray-600"> Our comprehensive suite of tools and resources empowers you to
                    trade with confidence and build your financial knowledge.</p>
            </div>
            <div className='flex gap-5 items-center justify-center mt-10'>
                <Card 
                icon={<img src="/images/chart.png"/>}
                title ="Smart Analytics"
                text="Real-time market analysis and personalized insights to help you make informed investment decision."
                />
                <Card
                icon={<img src="/images/education.png" alt="Educational Resources"/>}
                title ="Educational Resources"
                text="Comprehensive learning materials from basics to advanced trading strategies for all experience levels."
                 />
                <Card
                icon={<img src="/images/shield.png" alt="Secure Trading"/>}
                title ="Risk Management"
                text="Advanced tools to assess and minimize risk while maximizing potential returns on your investments."
                 />
                <Card
                icon={<img src="/images/phone.png" alt="Mobile Trading"/>}
                title ="Trade On The Go"
                text="Seamless mobile experience that keeps you connected to the market wherever you go."
                 />
            </div>
            <button style={{padding:"1rem 2rem"}} className="bg-[var(--primary)] text-white px-8 py-3 rounded-lg hover:bg-emerald-600 transition-colors shadow-lg !rounded-button cursor-pointer whitespace-nowrap mt-10">Explore all 
                
            </button>
        </section>
    );
}

export default MidSection; 