import dog1 from "./photos/dog1.webp"
import dog2 from "./photos/dog2.jpg"
import dog3 from "./photos/dog3.jpg"

const HomePage = () => {
    return (
        <div className="container">
            <h1>Головна сторінка</h1>
            <p>Тут ви знайдете корисну інформацію про породи собак, догляд, виховання та багато іншого, що стосується світу чотирилапих друзів.</p>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '20px',
                marginTop: '30px',
                flexWrap: 'nowrap'
            }}>
                <img src={dog1} alt="Собака 1" style={{ width: '250px', borderRadius: '12px' }} />
                <img src={dog2} alt="Собака 2" style={{ width: '250px', borderRadius: '12px' }} />
                <img src={dog3} alt="Собака 3" style={{ width: '250px', borderRadius: '12px' }} />
            </div>
        </div>
    );
};

export default HomePage;
