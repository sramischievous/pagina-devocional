export default function Home() {
  return (
    <main style={{ fontFamily: "system-ui, sans-serif", lineHeight: 1.6, color: "#1a1a1a" }}>

      {/* HERO */}
     <section
  style={{
    padding: "100px 1px",
    textAlign: "center",
    backgroundImage: "url('/images/vitral.jpeg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "bblack",
    position: "relative"
  }}
>
  <div
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      background: "rgba(0, 0, 0, 0)",
      pointerEvents: "none"
    }}
  ></div>

  <div style={{  fontSize: "32px",
    maxWidth: "900px",
    margin: "0 auto",
    fontWeight: "700",
    lineHeight: "1.2",
    letterSpacing: "-0.5px"}}>
    <h1>1 minuto por dia pode transformar
      <p></p>sua vida com Deus</h1>

<p
  style={{
    marginTop: "20px",
    fontSize: "20px",
    maxWidth: "600px",
    marginInline: "auto",
    fontWeight: "400",
    opacity: 0.9
  }}
>
  Descubra como ter mais paz, direção e proximidade com Deus
</p>

    <a href="https://pay.kiwify.com.br/BaglSbF" style={buttonStyle}>
      QUERO COMEÇAR MEU MOMENTO COM DEUS
    </a>
  </div>
</section>

      {/* DOR */}
      <section style={{ padding: "50px 20px", maxWidth: "700px", margin: "0 auto", textAlign: "center", fontSize: "20px" }}>
        <p>
          Você sente que poderia estar mais próxima de Deus… mas nunca consegue manter constância?
        </p>

        <div
  style={{
    background: "#e9f0f7",
    padding: "10px",
    borderRadius: "16px",
    marginTop: "10px",
    display: "flex",
    flexDirection: "column",
    gap: "10px"
  }}
>
  {[
    "Ansiedade e preocupação constante",
    "Sensação de estar distante de Deus",
    "Falta de direção na vida",
    "Dificuldade em manter uma rotina espiritual"
  ].map((item, index) => (
    <div
      key={index}
      style={{
        background: "white",
        padding: "12px 15px",
        borderRadius: "10px",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.03)",
        fontSize: "15px"
      }}
    >
      {item}
    </div>
  ))}
</div>

        <p style={{ marginTop: "20px" }}>
          No fundo, isso pesa no coração…
        </p>
        <p>
          Porque você sabe que precisa de Deus,
          <br />mas a correria sempre atrapalha.
        </p>
      </section>
      
      {/* SOLUÇÃO */}
      <section
  style={{
    padding: "80px 20px",
    background: "#f4f8fc"
  }}
>
  <div
    style={{
      maxWidth: "1000px",
      margin: "0 auto",
      display: "flex",
      alignItems: "center",
      gap: "40px",
      flexWrap: "wrap"
    }}
  >

    {/* TEXTO */}
    <div style={{ flex: 1, minWidth: "280px" }}>
      <h2 style={{ fontSize: "28px", fontWeight: "700" }}>
        1 Minuto com Deus – 365 Dias de Paz e Direção
      </h2>

      <p style={{ marginTop: "20px", fontSize: "18px", lineHeight: "1.6" }}>
        Um devocional simples e guiado para te ajudar a criar um momento diário com Deus,
        mesmo nos dias mais corridos.
      </p>
    </div>

    {/* IMAGEM */}
    <div style={{ flex: 1, textAlign: "center" }}>
      <img
        src="/images/devocional.jpeg"
        style={{
          width: "100%",
          maxWidth: "350px",
          borderRadius: "12px",
          boxShadow: "0 8px 25px rgba(0,0,0,0.1)"
        }}
      />
    </div>

  </div>
</section>

      {/* BENEFÍCIOS */}
      <section style={{ padding: "50px 20px", maxWidth: "700px", margin: "0 auto", textAlign: "center" }}>
        <h3>O que você vai receber:</h3>

        <ul style={{ marginTop: "20px" }}>
          <li>• 365 mensagens curtas e profundas</li>
          <li>• Versículos bíblicos selecionados</li>
          <li>• Reflexões práticas</li>
          <li>• Orações simples para o dia a dia</li>
        </ul>

        <p style={{ marginTop: "20px", fontWeight: "bold" }}>
          Tudo isso em apenas 1 minuto por dia.
        </p>
      </section>

      {/* TRANSFORMAÇÃO */}
      
      <section style={{ padding: "60px 20px", background: "#f8fbff", textAlign: "center", fontSize: "20px" }}>
        <h3>Imagine como sua vida pode mudar…</h3>

        <div
  style={{
    background: "#f4f8fc",
    padding: "30px",
    borderRadius: "16px",
    margin: "25px auto 0",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    maxWidth: "700px",
    width: "100%"
  }}
>
  {[
    "Mais paz no coração",
    "Mais proximidade com Deus",
    "Mais clareza nas decisões",
    "Menos ansiedade"
  ].map((item, index) => (
    <div
      key={index}
      style={{
        background: "white",
        padding: "12px 15px",
        borderRadius: "10px",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0)",
        fontSize: "15px"
      }}
    >
      {item}
    </div>
  ))}
</div>
      </section>

      {/* OBJEÇÕES */}
      <section style={{ padding: "60px 20px", background: "#f8fbff", textAlign: "center", fontSize: "20px" }}>
        <h3>Ainda com dúvidas?</h3>

        <p style={{ marginTop: "30px" }}><strong>“Não tenho tempo”</strong><br />Você só precisa de 1 minuto.</p>

        <p style={{ marginTop: "30px" }}><strong>“Nunca consigo manter rotina”</strong><br />Aqui você é guiada todos os dias.</p>

        <p style={{ marginTop: "30px" }}><strong>“Não entendo a Bíblia”</strong><br />Tudo é simples e explicado.</p>
      </section>

      {/* OFERTA */}
      <section style={{ padding: "40px 20px 20px", background: "#f0f3f7", textAlign: "center" }}>
        <p style={{ textDecoration: "line-through" }}>De R$149,00</p>

        <h2 style={{ fontSize: "36px", color: "#01a337" }}>
          Por R$27,00
        </h2>

        <p style={{ marginTop: "10px" }}>
          Acesso imediato
        </p>

        <a href="https://pay.kiwify.com.br/BaglSbF" style={buttonStyle}>
          QUERO GARANTIR MEU CONTATO COM DEUS AGORA
        </a>
      </section>

      {/* GARANTIA */}
      <section style={{ padding: "10px 0 40px", textAlign: "center", background: "#f0f3f7" }}>
        <h3>Garantia de 7 dias</h3>
        <p>
          Se você não gostar, devolvemos 100% do seu dinheiro.
        </p>
      </section>

      {/* CTA FINAL */}
      <section style={{ padding: "60px 20px", textAlign: "center", background: "#f8fbff", fontSize: "20px" }}>
        <h2>
          Comece hoje seu momento com Deus
        </h2>

        <a href="https://pay.kiwify.com.br/BaglSbF" style={buttonStyle}>
          COMEÇAR AGORA
        </a>
      </section>

    </main>
  );
}

const buttonStyle = {
  display: "inline-block",
  marginTop: "30px",
  background: "#27e657",
  color: "black",
  padding: "12px 22px",
  borderRadius: "8px",
  textDecoration: "none",
  fontWeight: "600",
  fontSize: "14px",
  boxShadow: "0 3px 10px rgba(0, 0, 0, 0.57)"
};