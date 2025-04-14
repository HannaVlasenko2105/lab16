const ContactPage = () => {
    return (
        <div className="container">
            <h1>Контакти</h1>
            <p>Маєте питання або пропозиції? Зв'яжіться з нами:</p>
            <p>📞 Телефон: 380990000000</p>
            <p>Або напишіть нам повідомлення і ми з вами зв'яжимось.</p>
            <form>
                <div className="component">
                    <input type="text" placeholder="Ім'я" />
                    <input type="email" placeholder="Email" />
                    <textarea placeholder="Ваше повідомлення" />
                    <button type="submit">Надіслати</button>
                </div>
            </form>
        </div>
    );
  };
  
  export default ContactPage;