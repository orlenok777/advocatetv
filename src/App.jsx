import React, { useState } from "react";

function App() {
  const [lang, setLang] = useState("ru");

  const [contentByLang, setContentByLang] = useState({
    ru: {
      headerTitle: "Профессиональная юридическая защита",
      headerSubtitle: "25 лет успешной практики в Израиле",
      lawyerName: "Илина Циперсон-Ясловиц",
      servicesTitle: "Наши услуги",
      aboutTitle: "О нас",
      aboutText:
        "Адвокат-Нотариус Илина Циперсон-Ясловиц ведет успешную юридическую практику в Израиле...",
      contactTitle: "Контакты",
      contactAddress: "г. Хайфа, ул. Ха-ацмаут 43, 2 этаж",
      footerText1: "© 2024 Адвокат-Нотариус Илина Циперсон-Ясловиц",
      footerText2: "Член коллегии адвокатов Израиля с 1999 года",
      statsYears: "25+",
      statsCases: "1000+",
      statsSupport: "24/7",
      statsClients: "98%",
      serviceDamage: "Взыскание ущерба",
      serviceFamily: "Семейное право",
      serviceNotary: "Нотариальные услуги",
      serviceDamageItems:
        "ДТП и аварии\nПроизводственные травмы\nМедицинская халатность\nСтраховые споры",
      serviceFamilyItems:
        "Разводы\nАлименты\nРаздел имущества\nБрачные договоры",
      serviceNotaryItems:
        "Заверение документов\nДоверенности\nЗавещания\nДекларации",
      consultBtn: "Бесплатная консультация",
      yearsLabel: "Лет практики",
      casesLabel: "Выигранных дел",
      supportLabel: "Поддержка",
      clientsLabel: "Довольных клиентов",
    },
    he: {
      headerTitle: "הגנה משפטית מקצועית",
      headerSubtitle: "25 שנות ניסיון מוצלח בישראל",
      lawyerName: "אילינה ציפרסון-יסלוביץ",
      servicesTitle: "השירותים שלנו",
      aboutTitle: "עלינו",
      aboutText:
        "עורכת הדין והנוטריון אילינה ציפרסון-יסלוביץ בעלת ניסיון רב שנים בישראל...",
      contactTitle: "יצירת קשר",
      contactAddress: "חיפה, רח' העצמאות 43, קומה 2",
      footerText1: '© 2024 עו"ד ונוטריון אילינה ציפרסון-יסלוביץ',
      footerText2: "חברת לשכת עורכי הדין בישראל משנת 1999",
      statsYears: "25+",
      statsCases: "1000+",
      statsSupport: "24/7",
      statsClients: "98%",
      serviceDamage: "תביעות נזיקין",
      serviceFamily: "דיני משפחה",
      serviceNotary: "שירותי נוטריון",
      serviceDamageItems:
        "תאונות דרכים\nתאונות עבודה\nרשלנות רפואית\nסכסוכי ביטוח",
      serviceFamilyItems: "גירושין\nמזונות\nחלוקת רכוש\nהסכמי ממון",
      serviceNotaryItems: "אימות מסמכים\nייפויי כוח\nצוואות\nתצהירים",
      consultBtn: "ייעוץ חינם",
      yearsLabel: "שנות ניסיון",
      casesLabel: "תיקים מוצלחים",
      supportLabel: "תמיכה",
      clientsLabel: "לקוחות מרוצים",
    },
    en: {
      headerTitle: "Professional Legal Protection",
      headerSubtitle: "25 Years of Successful Practice in Israel",
      lawyerName: "Ilina Tsiperson-Yaslovitz",
      servicesTitle: "Our Services",
      aboutTitle: "About Us",
      aboutText:
        "Attorney-Notary Ilina Tsiperson-Yaslovitz has a long-standing successful legal practice in Israel...",
      contactTitle: "Contact",
      contactAddress: "Haifa, Ha'atzmaut 43, 2nd floor",
      footerText1: "© 2024 Attorney-Notary Ilina Tsiperson-Yaslovitz",
      footerText2: "Member of the Israeli Bar Association since 1999",
      statsYears: "25+",
      statsCases: "1000+",
      statsSupport: "24/7",
      statsClients: "98%",
      serviceDamage: "Damage Claims",
      serviceFamily: "Family Law",
      serviceNotary: "Notary Services",
      serviceDamageItems:
        "Car accidents\nWork injuries\nMedical malpractice\nInsurance disputes",
      serviceFamilyItems:
        "Divorces\nChild support\nProperty division\nPrenuptial agreements",
      serviceNotaryItems:
        "Document verification\nPowers of attorney\nWills\nAffidavits",
      consultBtn: "Free Consultation",
      yearsLabel: "Years of Practice",
      casesLabel: "Successful Cases",
      supportLabel: "Support",
      clientsLabel: "Satisfied Clients",
    },
  });

  const [images, setImages] = useState({
    headerBg:
      "https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80",
    headerLawyer:
      "https://images.unsplash.com/photo-1520591799317-7f5f34b2efa5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    lawyerPortrait:
      "https://images.unsplash.com/photo-1582121187343-4ec30daa78ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  });

  const changeLang = (newLang) => {
    setLang(newLang);
    document.documentElement.dir = newLang === "he" ? "rtl" : "ltr";
  };

  const [editingKey, setEditingKey] = useState(null);
  const [tempValue, setTempValue] = useState("");

  const texts = contentByLang[lang];

  const startEditing = (key) => {
    setEditingKey(key);
    setTempValue(texts[key]);
  };

  const finishEditing = () => {
    if (editingKey) {
      setContentByLang((prev) => ({
        ...prev,
        [lang]: {
          ...prev[lang],
          [editingKey]: tempValue,
        },
      }));
      setEditingKey(null);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      finishEditing();
    }
  };

  const EditableText = ({ textKey, style, multiline }) => {
    if (editingKey === textKey) {
      return multiline ? (
        <textarea
          style={{ ...style, width: "100%", minHeight: "100px" }}
          value={tempValue}
          onChange={(e) => setTempValue(e.target.value)}
          onBlur={finishEditing}
          onKeyDown={handleKeyDown}
          autoFocus
        />
      ) : (
        <input
          style={style}
          type="text"
          value={tempValue}
          onChange={(e) => setTempValue(e.target.value)}
          onBlur={finishEditing}
          onKeyDown={handleKeyDown}
          autoFocus
        />
      );
    }
    return (
      <span style={style} onClick={() => startEditing(textKey)}>
        {texts[textKey]}
      </span>
    );
  };

  const containerStyle = {
    fontFamily: "'Roboto', sans-serif",
    position: "relative",
    minHeight: "100vh",
    color: "#333",
    background: "linear-gradient(to top right, #e2e8f0, #f0fdfa)",
    overflowX: "hidden",
  };

  const navStyle = {
    backgroundColor: "#1e3a8a",
    color: "#fff",
    padding: "16px 24px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const navLinks = {
    display: "flex",
    gap: "24px",
    alignItems: "center",
  };

  const navLink = {
    color: "#fff",
    textDecoration: "none",
    fontWeight: "bold",
  };

  const headerStyle = {
    position: "relative",
    color: "#fff",
    padding: "80px 24px",
    backgroundColor: "#000",
    background: "linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.3))",
  };

  const headerBgImg = {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    filter: "brightness(0.5)",
  };

  const headerContainer = {
    position: "relative",
    zIndex: 10,
    maxWidth: "1200px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: "48px",
    alignItems: "center",
    textAlign: lang === "he" ? "right" : "left",
  };

  const headerTitle = {
    fontSize: "48px",
    fontWeight: "bold",
    marginBottom: "24px",
    cursor: "pointer",
    textShadow: "0px 2px 5px rgba(0,0,0,0.5)",
  };

  const headerSubtitle = {
    fontSize: "20px",
    marginBottom: "24px",
    cursor: "pointer",
    textShadow: "0px 2px 5px rgba(0,0,0,0.5)",
  };

  const headerButton = {
    display: "inline-block",
    backgroundColor: "#fff",
    color: "#1e3a8a",
    fontWeight: "bold",
    padding: "12px 20px",
    borderRadius: "6px",
    textDecoration: "none",
    marginTop: "16px",
    cursor: "pointer",
    boxShadow: "0 2px 5px rgba(0,0,0,0.3)",
  };

  const headerImageStyle = {
    width: "100%",
    maxWidth: "400px",
    borderRadius: "8px",
    border: "4px solid #fff",
    boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
  };

  const mainStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "64px 24px",
    textAlign: lang === "he" ? "right" : "left",
  };

  const sectionTitle = {
    textAlign: "center",
    fontSize: "28px",
    fontWeight: "bold",
    marginBottom: "48px",
    cursor: "pointer",
    color: "#1e3a8a",
    textShadow: "0 1px 3px rgba(0,0,0,0.2)",
  };

  const statsGrid = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px,1fr))",
    gap: "24px",
    marginBottom: "64px",
  };

  const statCard = {
    backgroundColor: "#fff",
    padding: "24px",
    borderRadius: "8px",
    textAlign: "center",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
  };

  const statNumber = {
    fontSize: "32px",
    fontWeight: "bold",
    color: "#2563eb",
    marginBottom: "8px",
    cursor: "pointer",
  };

  const servicesGrid = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px,1fr))",
    gap: "24px",
    marginBottom: "64px",
  };

  const serviceCard = {
    backgroundColor: "#fff",
    padding: "24px",
    borderRadius: "8px",
    cursor: "pointer",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
  };

  const serviceTitle = {
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "16px",
    color: "#1e3a8a",
  };

  const aboutSection = {
    backgroundColor: "#fff",
    borderRadius: "8px",
    padding: "48px",
    marginBottom: "64px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
  };

  const aboutTextStyle = {
    fontSize: "18px",
    lineHeight: "1.6",
    color: "#333",
    whiteSpace: "pre-wrap",
    cursor: "pointer",
  };

  const aboutImageStyle = {
    width: "200px",
    borderRadius: "8px",
    margin: "24px 0",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
  };

  const contactSection = {
    textAlign: "center",
    marginBottom: "64px",
  };

  const contactCard = {
    display: "inline-block",
    backgroundColor: "#fff",
    padding: "24px",
    borderRadius: "8px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
  };

  const contactLink = {
    display: "block",
    color: "#2563eb",
    textDecoration: "none",
    marginTop: "8px",
    fontWeight: "bold",
  };

  const footerStyleComp = {
    backgroundColor: "#1e3a8a",
    color: "#fff",
    padding: "32px 24px",
    textAlign: "center",
  };

  const contactButtonsWrapper = {
    position: "fixed",
    bottom: "16px",
    right: "16px",
    zIndex: 50,
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  };

  const circleButtonBase = {
    width: "48px",
    height: "48px",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textDecoration: "none",
    color: "#fff",
    boxShadow: "0 2px 5px rgba(0,0,0,0.3)",
    fontWeight: "bold",
    fontSize: "12px",
    textAlign: "center",
    lineHeight: "1.2",
    cursor: "pointer",
  };

  const whatsappButton = {
    ...circleButtonBase,
    backgroundColor: "#22c55e",
  };

  const langButtonsContainer = {
    display: "flex",
    gap: "8px",
    alignItems: "center",
  };

  const langButtonBase = {
    padding: "4px 8px",
    borderRadius: "4px",
    border: "none",
    fontWeight: "bold",
    cursor: "pointer",
    fontSize: "14px",
    backgroundColor: "#fff",
    color: "#1e3a8a",
  };

  const langButtonActive = {
    ...langButtonBase,
    backgroundColor: "#2563eb",
    color: "#fff",
  };

  const langButtonInactive = {
    ...langButtonBase,
    backgroundColor: "#cbd5e1",
    color: "#000",
  };

  return (
    <div style={containerStyle}>
      {lang === "ru" && (
        <div lang="ru">
          <nav style={navStyle}>
            <div style={langButtonsContainer}>
              <button
                onClick={() => changeLang("ru")}
                style={lang === "ru" ? langButtonActive : langButtonInactive}
              >
                RU
              </button>
              <button
                onClick={() => changeLang("he")}
                style={lang === "he" ? langButtonActive : langButtonInactive}
              >
                HE
              </button>
              <button
                onClick={() => changeLang("en")}
                style={lang === "en" ? langButtonActive : langButtonInactive}
              >
                EN
              </button>
            </div>

            <div style={navLinks}>
              <a href="#services" style={navLink}>
                <EditableText textKey="servicesTitle" />
              </a>
              <a href="#about" style={navLink}>
                <EditableText textKey="aboutTitle" />
              </a>
              <a href="#contact" style={navLink}>
                <EditableText textKey="contactTitle" />
              </a>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <a href="tel:054-5983937" style={navLink}>
                  054-5983937
                </a>
                <a href="tel:0523-404848" style={navLink}>
                  0523-404848
                </a>
              </div>
            </div>
          </nav>

          <header style={headerStyle}>
            <img src={images.headerBg} alt="Фон" style={headerBgImg} />
            <div style={headerContainer}>
              <div>
                <h1 style={headerTitle}>
                  <EditableText textKey="headerTitle" />
                </h1>
                <p style={headerSubtitle}>
                  <EditableText textKey="headerSubtitle" />
                </p>
                <a href="#contact" style={headerButton}>
                  <EditableText textKey="consultBtn" />
                </a>
              </div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <img
                  src={images.headerLawyer}
                  alt="Адвокат"
                  style={headerImageStyle}
                />
              </div>
            </div>
          </header>

          <div style={contactButtonsWrapper}>
            <a href="https://wa.me/0545983937" style={whatsappButton}>
              W
            </a>
          </div>

          <main style={mainStyle}>
            <section style={statsGrid}>
              <div style={statCard}>
                <div style={statNumber}>
                  <EditableText textKey="statsYears" />
                </div>
                <div>
                  <EditableText textKey="yearsLabel" />
                </div>
              </div>
              <div style={statCard}>
                <div style={statNumber}>
                  <EditableText textKey="statsCases" />
                </div>
                <div>
                  <EditableText textKey="casesLabel" />
                </div>
              </div>
              <div style={statCard}>
                <div style={statNumber}>
                  <EditableText textKey="statsSupport" />
                </div>
                <div>
                  <EditableText textKey="supportLabel" />
                </div>
              </div>
              <div style={statCard}>
                <div style={statNumber}>
                  <EditableText textKey="statsClients" />
                </div>
                <div>
                  <EditableText textKey="clientsLabel" />
                </div>
              </div>
            </section>

            <section id="services">
              <h2 style={sectionTitle}>
                <EditableText textKey="servicesTitle" />
              </h2>
              <div style={servicesGrid}>
                <div style={serviceCard}>
                  <h3 style={serviceTitle}>
                    <EditableText textKey="serviceDamage" />
                  </h3>
                  <EditableText
                    textKey="serviceDamageItems"
                    style={aboutTextStyle}
                    multiline={true}
                  />
                </div>
                <div style={serviceCard}>
                  <h3 style={serviceTitle}>
                    <EditableText textKey="serviceFamily" />
                  </h3>
                  <EditableText
                    textKey="serviceFamilyItems"
                    style={aboutTextStyle}
                    multiline={true}
                  />
                </div>
                <div style={serviceCard}>
                  <h3 style={serviceTitle}>
                    <EditableText textKey="serviceNotary" />
                  </h3>
                  <EditableText
                    textKey="serviceNotaryItems"
                    style={aboutTextStyle}
                    multiline={true}
                  />
                </div>
              </div>
            </section>

            <section id="about" style={aboutSection}>
              <h2 style={{ ...sectionTitle, marginBottom: "24px" }}>
                <EditableText textKey="aboutTitle" />
              </h2>
              <img
                src={images.lawyerPortrait}
                alt="Адвокат"
                style={aboutImageStyle}
              />
              <EditableText
                textKey="aboutText"
                style={aboutTextStyle}
                multiline={true}
              />
            </section>

            <section id="contact" style={contactSection}>
              <h2 style={sectionTitle}>
                <EditableText textKey="contactTitle" />
              </h2>
              <div style={contactCard}>
                <p style={{ marginBottom: "16px", cursor: "pointer" }}>
                  <EditableText textKey="contactAddress" />
                </p>
                <a href="tel:054-5983937" style={contactLink}>
                  054-5983937
                </a>
                <a href="tel:0523-404848" style={contactLink}>
                  0523-404848
                </a>
              </div>
            </section>
          </main>

          <footer style={footerStyleComp}>
            <p style={{ cursor: "pointer" }}>
              <EditableText textKey="footerText1" />
            </p>
            <p style={{ marginTop: "8px", cursor: "pointer" }}>
              <EditableText textKey="footerText2" />
            </p>
          </footer>
        </div>
      )}

      {lang === "he" && (
        <div lang="he" dir="rtl">
          <nav style={navStyle}>
            <div style={langButtonsContainer}>
              <button
                onClick={() => changeLang("ru")}
                style={lang === "ru" ? langButtonActive : langButtonInactive}
              >
                RU
              </button>
              <button
                onClick={() => changeLang("he")}
                style={lang === "he" ? langButtonActive : langButtonInactive}
              >
                HE
              </button>
              <button
                onClick={() => changeLang("en")}
                style={lang === "en" ? langButtonActive : langButtonInactive}
              >
                EN
              </button>
            </div>

            <div style={navLinks}>
              <a href="#services" style={navLink}>
                <EditableText textKey="servicesTitle" />
              </a>
              <a href="#about" style={navLink}>
                <EditableText textKey="aboutTitle" />
              </a>
              <a href="#contact" style={navLink}>
                <EditableText textKey="contactTitle" />
              </a>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <a href="tel:054-5983937" style={navLink}>
                  054-5983937
                </a>
                <a href="tel:0523-404848" style={navLink}>
                  0523-404848
                </a>
              </div>
            </div>
          </nav>

          <header style={headerStyle}>
            <img src={images.headerBg} alt="רקע" style={headerBgImg} />
            <div style={headerContainer}>
              <div>
                <h1 style={headerTitle}>
                  <EditableText textKey="headerTitle" />
                </h1>
                <p style={headerSubtitle}>
                  <EditableText textKey="headerSubtitle" />
                </p>
                <a href="#contact" style={headerButton}>
                  <EditableText textKey="consultBtn" />
                </a>
              </div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <img
                  src={images.headerLawyer}
                  alt='עו"ד'
                  style={headerImageStyle}
                />
              </div>
            </div>
          </header>

          <div style={contactButtonsWrapper}>
            <a href="https://wa.me/0545983937" style={whatsappButton}>
              W
            </a>
          </div>

          <main style={mainStyle}>
            <section style={statsGrid}>
              <div style={statCard}>
                <div style={statNumber}>
                  <EditableText textKey="statsYears" />
                </div>
                <div>
                  <EditableText textKey="yearsLabel" />
                </div>
              </div>
              <div style={statCard}>
                <div style={statNumber}>
                  <EditableText textKey="statsCases" />
                </div>
                <div>
                  <EditableText textKey="casesLabel" />
                </div>
              </div>
              <div style={statCard}>
                <div style={statNumber}>
                  <EditableText textKey="statsSupport" />
                </div>
                <div>
                  <EditableText textKey="supportLabel" />
                </div>
              </div>
              <div style={statCard}>
                <div style={statNumber}>
                  <EditableText textKey="statsClients" />
                </div>
                <div>
                  <EditableText textKey="clientsLabel" />
                </div>
              </div>
            </section>

            <section id="services">
              <h2 style={sectionTitle}>
                <EditableText textKey="servicesTitle" />
              </h2>
              <div style={servicesGrid}>
                <div style={serviceCard}>
                  <h3 style={serviceTitle}>
                    <EditableText textKey="serviceDamage" />
                  </h3>
                  <EditableText
                    textKey="serviceDamageItems"
                    style={aboutTextStyle}
                    multiline={true}
                  />
                </div>
                <div style={serviceCard}>
                  <h3 style={serviceTitle}>
                    <EditableText textKey="serviceFamily" />
                  </h3>
                  <EditableText
                    textKey="serviceFamilyItems"
                    style={aboutTextStyle}
                    multiline={true}
                  />
                </div>
                <div style={serviceCard}>
                  <h3 style={serviceTitle}>
                    <EditableText textKey="serviceNotary" />
                  </h3>
                  <EditableText
                    textKey="serviceNotaryItems"
                    style={aboutTextStyle}
                    multiline={true}
                  />
                </div>
              </div>
            </section>

            <section id="about" style={aboutSection}>
              <h2 style={{ ...sectionTitle, marginBottom: "24px" }}>
                <EditableText textKey="aboutTitle" />
              </h2>
              <img
                src={images.lawyerPortrait}
                alt='עו"ד'
                style={aboutImageStyle}
              />
              <EditableText
                textKey="aboutText"
                style={aboutTextStyle}
                multiline={true}
              />
            </section>

            <section id="contact" style={contactSection}>
              <h2 style={sectionTitle}>
                <EditableText textKey="contactTitle" />
              </h2>
              <div style={contactCard}>
                <p style={{ marginBottom: "16px", cursor: "pointer" }}>
                  <EditableText textKey="contactAddress" />
                </p>
                <a href="tel:054-5983937" style={contactLink}>
                  054-5983937
                </a>
                <a href="tel:0523-404848" style={contactLink}>
                  0523-404848
                </a>
              </div>
            </section>
          </main>

          <footer style={footerStyleComp}>
            <p style={{ cursor: "pointer" }}>
              <EditableText textKey="footerText1" />
            </p>
            <p style={{ marginTop: "8px", cursor: "pointer" }}>
              <EditableText textKey="footerText2" />
            </p>
          </footer>
        </div>
      )}

      {lang === "en" && (
        <div lang="en">
          <nav style={navStyle}>
            <div style={langButtonsContainer}>
              <button
                onClick={() => changeLang("ru")}
                style={lang === "ru" ? langButtonActive : langButtonInactive}
              >
                RU
              </button>
              <button
                onClick={() => changeLang("he")}
                style={lang === "he" ? langButtonActive : langButtonInactive}
              >
                HE
              </button>
              <button
                onClick={() => changeLang("en")}
                style={lang === "en" ? langButtonActive : langButtonInactive}
              >
                EN
              </button>
            </div>

            <div style={navLinks}>
              <a href="#services" style={navLink}>
                <EditableText textKey="servicesTitle" />
              </a>
              <a href="#about" style={navLink}>
                <EditableText textKey="aboutTitle" />
              </a>
              <a href="#contact" style={navLink}>
                <EditableText textKey="contactTitle" />
              </a>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <a href="tel:054-5983937" style={navLink}>
                  054-5983937
                </a>
                <a href="tel:0523-404848" style={navLink}>
                  0523-404848
                </a>
              </div>
            </div>
          </nav>

          <header style={headerStyle}>
            <img src={images.headerBg} alt="Background" style={headerBgImg} />
            <div style={headerContainer}>
              <div>
                <h1 style={headerTitle}>
                  <EditableText textKey="headerTitle" />
                </h1>
                <p style={headerSubtitle}>
                  <EditableText textKey="headerSubtitle" />
                </p>
                <a href="#contact" style={headerButton}>
                  <EditableText textKey="consultBtn" />
                </a>
              </div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <img
                  src={images.headerLawyer}
                  alt="Lawyer"
                  style={headerImageStyle}
                />
              </div>
            </div>
          </header>

          <div style={contactButtonsWrapper}>
            <a href="https://wa.me/0545983937" style={whatsappButton}>
              W
            </a>
          </div>

          <main style={mainStyle}>
            <section style={statsGrid}>
              <div style={statCard}>
                <div style={statNumber}>
                  <EditableText textKey="statsYears" />
                </div>
                <div>
                  <EditableText textKey="yearsLabel" />
                </div>
              </div>
              <div style={statCard}>
                <div style={statNumber}>
                  <EditableText textKey="statsCases" />
                </div>
                <div>
                  <EditableText textKey="casesLabel" />
                </div>
              </div>
              <div style={statCard}>
                <div style={statNumber}>
                  <EditableText textKey="statsSupport" />
                </div>
                <div>
                  <EditableText textKey="supportLabel" />
                </div>
              </div>
              <div style={statCard}>
                <div style={statNumber}>
                  <EditableText textKey="statsClients" />
                </div>
                <div>
                  <EditableText textKey="clientsLabel" />
                </div>
              </div>
            </section>

            <section id="services">
              <h2 style={sectionTitle}>
                <EditableText textKey="servicesTitle" />
              </h2>
              <div style={servicesGrid}>
                <div style={serviceCard}>
                  <h3 style={serviceTitle}>
                    <EditableText textKey="serviceDamage" />
                  </h3>
                  <EditableText
                    textKey="serviceDamageItems"
                    style={aboutTextStyle}
                    multiline={true}
                  />
                </div>
                <div style={serviceCard}>
                  <h3 style={serviceTitle}>
                    <EditableText textKey="serviceFamily" />
                  </h3>
                  <EditableText
                    textKey="serviceFamilyItems"
                    style={aboutTextStyle}
                    multiline={true}
                  />
                </div>
                <div style={serviceCard}>
                  <h3 style={serviceTitle}>
                    <EditableText textKey="serviceNotary" />
                  </h3>
                  <EditableText
                    textKey="serviceNotaryItems"
                    style={aboutTextStyle}
                    multiline={true}
                  />
                </div>
              </div>
            </section>

            <section id="about" style={aboutSection}>
              <h2 style={{ ...sectionTitle, marginBottom: "24px" }}>
                <EditableText textKey="aboutTitle" />
              </h2>
              <img
                src={images.lawyerPortrait}
                alt="Lawyer"
                style={aboutImageStyle}
              />
              <EditableText
                textKey="aboutText"
                style={aboutTextStyle}
                multiline={true}
              />
            </section>

            <section id="contact" style={contactSection}>
              <h2 style={sectionTitle}>
                <EditableText textKey="contactTitle" />
              </h2>
              <div style={contactCard}>
                <p style={{ marginBottom: "16px", cursor: "pointer" }}>
                  <EditableText textKey="contactAddress" />
                </p>
                <a href="tel:054-5983937" style={contactLink}>
                  054-5983937
                </a>
                <a href="tel:0523-404848" style={contactLink}>
                  0523-404848
                </a>
              </div>
            </section>
          </main>

          <footer style={footerStyleComp}>
            <p style={{ cursor: "pointer" }}>
              <EditableText textKey="footerText1" />
            </p>
            <p style={{ marginTop: "8px", cursor: "pointer" }}>
              <EditableText textKey="footerText2" />
            </p>
          </footer>
        </div>
      )}
    </div>
  );
}

export default App;
