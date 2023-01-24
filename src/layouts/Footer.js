function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer className='footer bg-slate-500 p-4 text-white capitalize mt-4'>
            <p className='text-center mx-auto'>copyright &copy; {currentYear}</p>
        </footer>
    );
}

export default Footer;
