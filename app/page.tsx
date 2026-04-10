export default function Home() {
  return (
    <main style={{ fontFamily: "system-ui, sans-serif", lineHeight: 1.6, color: "#1a1a1a" }}>

      {/* HERO */}
      <section style={{ padding: "60px 20px", textAlign: "center", background: "#f8fbff" }}>
        <h1 style={{ fontSize: "32px", maxWidth: "700px", margin: "0 auto", fontWeight: "600" }}>
          1 minuto por dia pode transformar sua vida com Deus…
        </h1>

        <p style={{ marginTop: "20px", fontSize: "18px", maxWidth: "600px", marginInline: "auto" }}>
          Descubra como ter mais paz, direção e proximidade com Deus — mesmo com uma rotina corrida
        </p>

        <a href="https://pay.kiwify.com.br/BaglSbF" style={buttonStyle}>
          QUERO COMEÇAR MEU MOMENTO COM DEUS
        </a>
      </section>

      {/* DOR */}
      <section style={{ padding: "50px 20px", maxWidth: "700px", margin: "0 auto" }}>
        <p>
          Você sente que poderia estar mais próxima de Deus… mas nunca consegue manter constância?
        </p>

        <ul style={{ marginTop: "20px" }}>
          <li>Ansiedade e preocupação constante</li>
          <li>Sensação de estar distante de Deus</li>
          <li>Falta de direção na vida</li>
          <li>Dificuldade em manter uma rotina espiritual</li>
        </ul>

        <p style={{ marginTop: "20px" }}>
          No fundo, isso pesa no coração…
        </p>

        <p>
          Porque você sabe que precisa de Deus — mas a correria sempre atrapalha.
        </p>
      </section>

      {/* SOLUÇÃO */}
      <section style={{ padding: "60px 20px", background: "#f4f8fc", textAlign: "center" }}>
        <h2 style={{ fontSize: "26px" }}>
          1 Minuto com Deus – 365 Dias de Paz e Direção
        </h2>

        <p style={{ maxWidth: "600px", margin: "20px auto" }}>
          Um devocional simples e guiado para te ajudar a criar um momento diário com Deus,
          mesmo nos dias mais corridos.
        </p>
      </section>

      {/* BENEFÍCIOS */}
      <section style={{ padding: "50px 20px", maxWidth: "700px", margin: "0 auto" }}>
        <h3>O que você vai receber:</h3>

        <ul style={{ marginTop: "20px" }}>
          <li>365 mensagens curtas e profundas</li>
          <li>Versículos bíblicos selecionados</li>
          <li>Reflexões práticas</li>
          <li>Orações simples para o dia a dia</li>
        </ul>

        <p style={{ marginTop: "20px", fontWeight: "bold" }}>
          Tudo isso em apenas 1 minuto por dia.
        </p>
      </section>

      {/* TRANSFORMAÇÃO */}
      <section style={{ padding: "60px 20px", background: "#f8fbff", textAlign: "center" }}>
        <h3>Imagine como sua vida pode mudar…</h3>

        <ul style={{ marginTop: "20px", listStyle: "none", padding: 0 }}>
          <li>Mais paz no coração</li>
          <li>Mais proximidade com Deus</li>
          <li>Mais clareza nas decisões</li>
          <li>Menos ansiedade</li>
        </ul>
      </section>

      {/* OBJEÇÕES */}
      <section style={{ padding: "50px 20px", maxWidth: "700px", margin: "0 auto" }}>
        <h3>Ainda com dúvidas?</h3>

        <p><strong>“Não tenho tempo”</strong><br />Você só precisa de 1 minuto.</p>

        <p><strong>“Nunca consigo manter rotina”</strong><br />Aqui você é guiada todos os dias.</p>

        <p><strong>“Não entendo a Bíblia”</strong><br />Tudo é simples e explicado.</p>
      </section>

      {/* OFERTA */}
      <section style={{ padding: "60px 20px", background: "#fff8f0", textAlign: "center" }}>
        <p style={{ textDecoration: "line-through" }}>De R$149,00</p>

        <h2 style={{ fontSize: "36px", color: "#c89b3c" }}>
          Por R$27,00
        </h2>

        <p style={{ marginTop: "10px" }}>
          Acesso imediato
        </p>

        <a href="https://pay.kiwify.com.br/BaglSbF" style={buttonStyle}>
          QUERO GARANTIR AGORA
        </a>
      </section>

      {/* GARANTIA */}
      <section style={{ padding: "50px 20px", textAlign: "center" }}>
        <h3>Garantia de 7 dias</h3>
        <p>
          Se você não gostar, devolvemos 100% do seu dinheiro.
        </p>
      </section>

      {/* CTA FINAL */}
      <section style={{ padding: "60px 20px", textAlign: "center", background: "#f8fbff" }}>
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
  background: "#c89b3c",
  color: "white",
  padding: "15px 25px",
  borderRadius: "8px",
  textDecoration: "none",
  fontWeight: "bold"
};