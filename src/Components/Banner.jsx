import banner from '../assets/banner.png'

const Banner = () => {
    return (
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img className='w-3/5 '
                    src={banner}/>
                <div>
                    <h1 className="text-5xl font-bold">Enchanting Smiles, One Tooth at a Time</h1>
                    <p className="py-6">
                    Empowering Smiles Through Exceptional Dental Care Solutions, Combining Innovation, Expertise, and a Touch of Magic to Ensure Your Oral Health and Confidence Shine Bright Every Day
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;