function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <div className='mt-4 p-4 bg-slate-500 text-white'>
            <p className="text-center">Footer &copy; {currentYear}</p>
        </div>
    );
}

export default Footer;
