import dog5 from "./photos/dog5.jpg";

const AboutPage = () => {
    return (
        <div className="container">
            <h1>Про нас</h1>
            <p>Ми — команда ентузіастів, які присвятили своє життя вивченню та популяризації кінології.</p>
            <p>Наша мета — допомагати власникам собак краще розуміти своїх улюбленців та розвивати гармонійні стосунки з ними.</p>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '20px',
                marginTop: '30px',
                flexWrap: 'nowrap'
            }}>
                <img src={dog5} alt="Собака 5" style={{ width: '300px', borderRadius: '60px' }} />
            </div>
        </div>
    );
};

export default AboutPage;
