
// main.js — создаёт страницу целиком (HTML + CSS + JS)

// --------- CSS (вставляем в <style>) ----------
const css = `:root {
  --bg: #060507;
  --accent-1: #ffd36b;
  --accent-2: #b88b2f;
  --muted: rgba(255,211,107,0.14);
  --card: linear-gradient(180deg, rgba(15,13,15,0.5), rgba(10,8,9,0.25));
  --radius: 14px;
  --max-w: 1200px;
  --trans: 220ms cubic-bezier(.2,.9,.2,1);
}
*{box-sizing:border-box;margin:0;padding:0}
html,body{height:100%}
body {
  font-family: "Poppins", sans-serif;
  background: var(--bg);
  color: #f6eecb;
  line-height: 1.45;
  overflow-x: hidden;
  position: relative;
  min-height: 100vh;
  zoom: 0.9;
}
.hero-card{padding:30px 25px;line-height:1.6;font-size:1.05rem;color:#f6eecb;text-align:center}
.hero-title{font-size:2.4rem;font-weight:700;margin-bottom:20px;letter-spacing:0.5px;line-height:1.2;color:#ffd36b}
.hero-title .highlight{color:#ffb84d;text-shadow:0 2px 6px rgba(0,0,0,0.3)}
.hero-text{font-size:1.1rem;max-width:720px;margin:0 auto 25px auto;color:#f6eecb}
.hero-text .highlight{color:#ffd36b;font-weight:600}
.hero-text em{font-style:italic;color:#ffcc66}
.hero-actions{display:flex;justify-content:center;gap:16px;flex-wrap:wrap;margin-top:20px}
.bubbles{position:fixed;inset:0;overflow:hidden;z-index:0;pointer-events:none;filter:blur(6px)}
.bubble{position:absolute;border-radius:50%;background:radial-gradient(circle at 30% 30%, rgba(255,211,107,0.8), rgba(184,139,47,0.1));box-shadow:0 0 20px rgba(255,211,107,0.5),0 0 40px rgba(184,139,47,0.2);animation:float linear infinite;opacity:0.5}
@keyframes float{0%{transform:translateY(0) translateX(0) scale(1);opacity:0.4}50%{opacity:0.8}100%{transform:translateY(-120vh) translateX(var(--moveX)) scale(1.2);opacity:0}}
.wrap{position:relative;z-index:5;max-width:var(--max-w);margin:22px auto;padding:18px}
header{position:sticky;top:0;left:0;width:100%;z-index:80;backdrop-filter:blur(8px);background:linear-gradient(180deg, rgba(8,6,6,0.45), rgba(8,6,6,0.25));border-bottom:1px solid rgba(255,211,107,0.06);box-shadow:0 6px 30px rgba(0,0,0,0.6)}
header .wrap{display:flex;align-items:center;justify-content:space-between;gap:14px;padding:12px;max-width:var(--max-w);margin:auto}
.brand{display:flex;gap:12px;align-items:center}
.logo{width:56px;height:56px;border-radius:12px;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,var(--accent-1),var(--accent-2));box-shadow:0 6px 22px rgba(184,139,47,0.08),inset 0 -6px 18px rgba(0,0,0,0.12)}
.brand h1{font-family:"Cinzel Decorative",serif;font-size:18px;color:var(--accent-1)}
.copy-row{display:flex;gap:8px;align-items:center;margin-top:12px}
.copy-input{flex:1;background:transparent;border:1px solid rgba(184,139,47,0.12);padding:8px 10px;color:#ffd36b;border-radius:8px}
.social-buttons{display:flex;justify-content:center;gap:10px;flex-wrap:wrap;margin-top:10px}
.copy-button{display:inline-flex;align-items:center;justify-content:center;padding:6px 12px;border-radius:6px;border:1px solid transparent;text-decoration:none;font-weight:500;transition:all 0.2s ease;background:rgba(255,255,255,0.1);color:white;backdrop-filter:blur(6px);box-sizing:border-box}
.copy-button i{margin-right:6px;font-size:1.1em}
.copy-button:hover{transform:scale(1.05);box-shadow:0 0 10px rgba(255,255,255,0.4)}
nav{display:flex;gap:8px;align-items:center}
.nav-btn{background:transparent;border:0;color:var(--accent-1);padding:8px 12px;border-radius:10px;font-weight:600;cursor:pointer;transition:var(--trans);opacity:0.95}
.nav-btn.active{background:linear-gradient(90deg, rgba(255,211,107,0.12), rgba(184,139,47,0.06));backdrop-filter:blur(4px)}
.hero{padding:28px;border-radius:18px;background:linear-gradient(180deg, rgba(255,211,107,0.02), rgba(255,211,107,0.01));border:1px solid rgba(255,211,107,0.04);box-shadow:0 20px 50px rgba(0,0,0,0.6);transition:opacity 0.5s ease}
.hero h2{font-family:"Cinzel Decorative",serif;color:var(--accent-1);font-size:36px}
.hero-actions{display:flex;gap:12px;flex-wrap:wrap}
.btn{display:inline-flex;align-items:center;gap:10px;padding:10px 16px;border-radius:12px;font-weight:700;border:0;cursor:pointer;transition:transform 160ms ease,box-shadow 160ms ease}
.btn-primary{background:linear-gradient(90deg,var(--accent-1),var(--accent-2));color:#000;box-shadow:0 10px 28px rgba(184,139,47,0.12)}
.btn-ghost{background:transparent;border:1px solid var(--muted);color:var(--accent-1)}
.btn:hover{transform:translateY(-4px)}
.projects-columns{display:grid;gap:75px}
@media(min-width:980px){.projects-columns{grid-template-columns:1fr 1fr}}
.grid{display:grid;gap:18px}
.card{padding:24px;border-radius:var(--radius);background:linear-gradient(135deg, rgba(255, 211, 107, 0.15), rgba(184, 139, 47, 0.05));border:1px solid rgba(255,211,107,0.04);box-shadow:0 12px 20px rgba(0,0,0,0.6);margin-bottom:24px;transition:transform 220ms,box-shadow 220ms,opacity 0.4s ease}
.card:hover{transform:translateY(-2px);box-shadow:0 10px 30px rgba(184,139,47,0.5)}
.card h4{font-family:"Cinzel Decorative",serif;color:var(--accent-1);font-size:20px;margin-bottom:8px;align-items:center}
.card ul{color:var(--accent-1);list-style:disc;padding-left:18px}
.tags{margin-top:10px;display:flex;gap:8px;flex-wrap:wrap}
.tag{font-size:12px;padding:6px 8px;border-radius:8px;background:rgba(25,20,22,0.56);border:1px solid rgba(184,139,47,0.08);color:var(--accent-1)}
.actions{margin-top:12px;display:flex;gap:10px;align-items:center}
.btn-download{background:linear-gradient(90deg,var(--accent-1),var(--accent-2));color:#000;padding:8px 14px;border-radius:10px;border:none;font-weight:700;cursor:pointer}
.btn-details{background:transparent;border:1px solid var(--muted);color:var(--accent-1);padding:8px 14px;border-radius:10px;cursor:pointer}
.modal-overlay{position:fixed;inset:0;display:none;align-items:center;justify-content:center;background:rgba(0,0,0,0.7);backdrop-filter:blur(5px);z-index:200;transition:opacity 0.3s ease}
.modal-overlay.show{display:flex;animation:fadeIn 0.3s forwards}
.modal-overlay.hide{animation:fadeOut 0.3s forwards}
@keyframes fadeIn{from{opacity:0}to{opacity:1}}@keyframes fadeOut{from{opacity:1}to{opacity:0}}
.modal{max-width:820px;width:100%;background:rgba(10,10,10,0.96);border-radius:12px;padding:22px;border:2px solid rgba(184,139,47,0.18);color:#ffd36b;box-shadow:0 24px 60px rgba(0,0,0,0.6);transform:scale(0.9);opacity:0;animation:popIn 0.35s forwards}
@keyframes popIn{to{transform:scale(1);opacity:1}}.modal.hide{animation:popOut 0.25s forwards}@keyframes popOut{from{transform:scale(1);opacity:1}to{transform:scale(0.9);opacity:0}}
.modal h3{font-family:"Cinzel Decorative",serif;margin-bottom:8px}
.modal-body{max-height:60vh;overflow:auto;padding-right:8px}
.close-btn{margin-top:14px;background:transparent;border:1px solid rgba(184,139,47,0.2);padding:10px 16px;border-radius:8px;color:#f6eecb;cursor:pointer}
footer{margin-top:28px;text-align:center;color:rgba(255,211,107,0.9);opacity:0.95;font-size:13px;z-index:5;position:relative}
main{position:relative;height:auto; transition: min-height 0.5s ease;}
main section{ position:relative;height: 0; overflow: hidden;opacity:0;visibility:hidden;transition:opacity 0.5s ease}
main section.active{opacity:1;visibility:visible; height: auto;position:relative;z-index:2}
#projects-section .projects-columns,
#founders-section .projects-columns {
  margin-top: -8px; /* или padding-top: 10px; регулируй по вкусу */
}
.no-select { user-select: none; -webkit-user-select: none; -ms-user-select: none; }

`;

// --------- HTML (создаём элементы) ----------
const html = `
  <div class="bubbles" id="bubbles"></div>

  <header>
    <div class="wrap">
      <div class="brand">
        <div class="logo"><img alt="SFF Logo" src="logo.jpg" style="max-width:86%;max-height:86%;border-radius:8px"/></div>
        <h1>Shadow Fight Forum</h1>
      </div>
      <nav>
        <button class="nav-btn active" id="nav-home">Home</button>
        <button class="nav-btn" id="nav-projects">Projects</button>
        <button class="nav-btn" id="nav-founders">Contact</button>
      </nav>
    </div>
  </header>

  <div class="wrap">
    <main>
      <section class="hero active" id="home-section">
        <div class="card hero-card">
          <h2 class="hero-title">
            Welcome to
            <span class="highlight">Shadow Fight Forum</span>
          </h2>
          <p class="hero-text">
            Over the last 6 years, <span class="highlight">Shadow Fight Forum</span> has dominated the Shadow Fight 2 community &mdash;
            surpassing the main servers and silencing the haters. With an unbreakable fanbase, its goal remains clear:
            <em>to rule the entire Shadow Fight universe.</em>
          </p>
          <div class="hero-actions">
            <button class="btn btn-primary" id="explore-projects">Explore Projects</button>
          </div>
        </div>
      </section>

      <section id="projects-section">
        <h2 style="font-family:'Cinzel Decorative',serif;color:var(--accent-1);margin-bottom:16px;text-align:center;">Projects</h2>
        <div class="projects-columns">
          <div class="column">
            <div class="grid">
              <div class="card">
                <h4>SF2 Private Server</h4>
                <ul>
                  <li>⚡ Fair Gameplay & Strong Anti-Cheat.</li>
                  <li>🔥 Amazing Events & Bosses.</li>
                  <li>🔥 Exciting Items & Features.</li>
                  <li>⚙️ Enhanced Experience.</li>
                </ul>
                <div class="tags"><span class="tag">SFF</span><span class="tag">Server</span></div>
                <div class="actions">
                  <a class="download-now" download href="http://sf2privateserver.com:169/sf2_private_server/data/apk/SF2%20Private%20Server%20v1.1.0-prod.apk">
                    <button class="btn-download">Download</button>
                  </a>
                  <button class="btn-details" id="information-sff">Details</button>
                </div>
              </div>

              <div class="card">
                <h4>SF2 Unity Mod</h4>
                <ul><li>Latest Unity Version For Modding!</li></ul>
                <div class="tags"><span class="tag">Mods</span></div>
                <div class="actions">
                  <button class="btn-download" id="unity-sff">Buy</button>
                  <button class="btn-details" id="unity-info-sff">Details</button>
                </div>
              </div>
            </div>
          </div>

          <div class="column">
            <div class="grid">
              <div class="card">
                <h4>SF2 Rating Hack</h4>
                <ul><li>Most Powerful Hack To Grind Ratings, Useful To Take Top Place In The Leaderboard!</li></ul>
                <div class="tags"><span class="tag">Rating Hack</span></div>
                <div class="actions">
                  <button class="btn-download" id="buy_hack-sff">Buy</button>
                  <button class="btn-details" id="detail_hack-sff">Details</button>
                </div>
              </div>

              <div class="card">
                <h4>AES Tools</h4>
                <ul><li>AES Tools For SF2 & Shades</li></ul>
                <div class="tags"><span class="tag">Tools</span></div>
                <div class="actions">
                  <button class="btn-download" id="tools_buy-sff">Buy</button>
                  <button class="btn-details" id="tools_info-sff">Details</button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section id="founders-section">
        <h2 style="font-family:'Cinzel Decorative',serif;color:var(--accent-1);margin-bottom:12px;text-align:center;">Contact</h2>

        <div class="projects-columns">
          <div class="column"><div class="grid"><div class="card"><h4>AKUZA</h4><div class="tags"><span class="tag">Developer</span></div><ul><li>Founder</li><li>Main Developer</li><li>Marketing Director</li><li>Manager</li></ul><a class="copy-button" href="https://t.me/Akuza007" target="_blank" style="transform: scale(0.8); display:inline-block; transform-origin:center; margin-top:8px; position:relative; left: -12px; top:4px;"><i class="fa-brands fa-telegram"></i> Telegram</a></div></div></div>
		  
          <div class="column"><div class="grid"><div class="card"><h4>Galaktica</h4><div class="tags"><span class="tag">Artist</span><span class="tag">Tester</span></div><ul><li>2D Artist</li><li>Works For In-Game UI</li></ul><a class="copy-button" href="https://t.me/Decipher74" target="_blank" style="transform: scale(0.8); display:inline-block; transform-origin:center; margin-top:8px; position:relative; left: -12px; top:4px;"><i class="fa-brands fa-telegram"></i> Telegram</a></div></div></div>
		  
		  <div class="column"><div class="grid"><div class="card"><h4>Twilight Sparkle</h4><div class="tags"><span class="tag">Developer</span><span class="tag"><img src="https://flagcdn.com/w20/id.png" alt="Indonesia" style="width:16px;height:12px;vertical-align:middle;margin-right:4px;transform:scale(1.2);"> Merchant</span></div><ul><li>Side Developer</li><li>Game Designer</li></ul><a class="copy-button" href="https://t.me/ShadePartisanThePony" target="_blank" style="transform: scale(0.8); display:inline-block; transform-origin:center; margin-top:8px; position:relative; left: -12px; top:4px;"><i class="fa-brands fa-telegram"></i> Telegram</a></div></div></div>

          <div class="column"><div class="grid"><div class="card"><h4>Azusa</h4><div class="tags"><span class="tag"><img src="https://flagcdn.com/w20/cn.png" alt="CN" style="width:16px;height:12px;vertical-align:middle;margin-right:4px;transform:scale(1.2);"> Merchant</span></div><ul><li>Chinese Marketing Director</li><li>Works For Regional Transaction</li></ul><a class="copy-button" href="https://t.me/Azusa002" target="_blank" style="transform: scale(0.8); display:inline-block; transform-origin:center; margin-top:8px; position:relative; left: -12px; top:4px;"><i class="fa-brands fa-telegram"></i> Telegram</a></div></div></div>

          <div class="column"><div class="grid"><div class="card"><h4>Akidori</h4><div class="tags"><span class="tag"><img src="https://flagcdn.com/w20/ru.png" alt="RU" style="width:16px;height:12px;vertical-align:middle;margin-right:4px;transform:scale(1.2);"> Merchant</span></div><ul><li>Works For Regional Transaction</li></ul><a class="copy-button" href="https://t.me/akidorii" target="_blank" style="transform: scale(0.8); display:inline-block; transform-origin:center; margin-top:8px; position:relative; left: -12px; top:4px;"><i class="fa-brands fa-telegram"></i> Telegram</a></div></div></div>

          <div class="column"><div class="grid"><div class="card"><h4>SANCHEZ4431</h4><div class="tags"><span class="tag">Tester</span><span class="tag">Developer</span><span class="tag"><img src="https://flagcdn.com/w20/ua.png" alt="UA" style="width:16px;height:12px;vertical-align:middle;margin-right:4px;transform:scale(1.2);"> Merchant</span></div><ul><li>Group Moderator</li><li>Bug Hunter</li></ul><a class="copy-button" href="https://t.me/SANCHEZ4431" target="_blank" style="transform: scale(0.8); display:inline-block; transform-origin:center; margin-top:8px; position:relative; left: -12px; top:4px;"><i class="fa-brands fa-telegram"></i> Telegram</a></div></div></div>

          <div class="column"><div class="grid"><div class="card"><h4>Lilyyycat</h4><div class="tags"><span class="tag"><img src="https://flagcdn.com/w20/in.png" alt="India" style="width:16px;height:12px;vertical-align:middle;margin-right:4px;transform:scale(1.2);"> Merchant</span></div><ul><li>Works For Regional Transaction</li></ul><a class="copy-button" href="https://t.me/Lilyyycat" target="_blank" style="transform: scale(0.8); display:inline-block; transform-origin:center; margin-top:8px; position:relative; left: -12px; top:4px;"><i class="fa-brands fa-telegram"></i> Telegram</a></div></div></div>

        </div>
      </section>

    </main>

    <div class="tags" style="display:flex;justify-content:center;margin-top:10px;">
      <span class="tag" style="font-size:24px;padding:8px 12px;font-family:'Cinzel Decorative',serif;">Join Our Community</span>
    </div>

    <div class="modal-body">
  <div class="social-buttons" style="margin-top:10px;width:100%;height:80%;padding-bottom:15px;overflow:visible;">
    <a class="copy-button" href="https://www.youtube.com/@ShadowFightForum" target="_blank" style="transform:none; margin:0; transition:none;">
      <i class="fa-brands fa-youtube"></i>Youtube
    </a>
    <a class="copy-button" href="https://discord.gg/ZwDeAGFw54" target="_blank" style="transform:none; margin:0; transition:none;">
      <i class="fa-brands fa-discord"></i>Discord
    </a>
    <a class="copy-button" href="https://t.me/SF2PrivateServerNews" target="_blank" style="transform:none; margin:0; transition:none;">
      <i class="fa-brands fa-telegram"></i>Telegram
    </a>
  </div>
</div>

    </div>

    <footer style="margin-top:20px;">&copy;<span id="year"></span> Shadow Fight Forum</footer>

  </div>

  <!-- Modals - don't touch this part code -->
  <div class="modal-overlay" id="contact-modal" aria-hidden="true">
    <div class="modal contact-content">
      <h3>✨ OUR SOCIALS ✨</h3>
      <div class="modal-body">
        <p>The creator of this website is <strong>Akuza</strong> &mdash; Founder and Developer of SFF.</p>
        <div class="copy-row">
          <input class="copy-input" id="tg-id" readonly value="@SF2PrivateServerNews"/>
          <button class="copy-button" id="copy-tg"><i class="fa-solid fa-copy"></i>Copy</button>
        </div>
        <div class="copy-row" style="display:flex;justify-content:center;margin-top:8px;">
          <a class="copy-button" href="https://discord.gg/yourinvite" target="_blank" style="width:100%;text-align:center;padding:6px 10px;"><i class="fa-brands fa-discord"></i>Discord</a>
        </div>
        <div class="copy-row" style="display:flex;justify-content:center;margin-top:8px;">
          <a class="copy-button" href="https://t.me/SF2PrivateServerNews" target="_blank" style="width:100%;text-align:center;padding:6px 10px;"><i class="fa-brands fa-telegram"></i>Telegram</a>
        </div>
      </div>
      <div style="text-align:center"><button class="close-btn" id="contact-close">Close</button></div>
    </div>
  </div>

  <!-- SF2 Private Server Patch Note -->
  <div class="modal-overlay" id="information-modal" aria-hidden="true">
    <div class="modal">
      <h3>APK Available for Download</h3>
      <div class="modal-body">
        <div style="text-align:center;margin-bottom:12px"></div>
        <div class="notes">
          <strong>🔄 Major Update [1.1.0] - Part 1</strong>
          <hr style="border:none;border-top:1px solid rgba(184,139,47,0.08);margin:8px 0 10px"/>
          <ul style="padding-left:16px;margin-top:6px">
            <li>✔️ Added New Ancient Dragon Event</li>
            <li>✔️ Added New Battle Pass With Dragon Set</li>
            <li>✔️ Added New Chests (Iron Flames &amp; Emberlord)</li>
            <li>✔️ Added New Torturous Nightmare Set</li>
            <li>✔️ Added New Composite Glaive &amp; Powerfists</li>
            <li>✔️ Added New Boss In Void World</li>
            <li>✔️ Added New Dojo &amp; Music</li>
            <li>✔️ Added New Location For Tzitzimitl 3 &amp; 4 Players Clan Raids</li>
            <li>✔️ Added Tier 4 Powermode Clans Raid</li>
            <li>✔️ Added Cybermania Set</li>
            <li>✔️ Added Quick Mythical Perk Selection</li>
            <li>✔️ Added All Vanilla Items</li>
            <li>✔️ Added Old PS Items</li>
            <li>✔️ Added Old Fonts</li>
            <li>✔️ Added 120 FPS Support</li>
            <li>✔️ Fixed Major Bugs</li>
            <li>✔️ Improved In-Game UI</li>
          </ul>
          <hr style="border:none;border-top:1px solid rgba(184,139,47,0.08);margin:10px 0"/>
          <p><strong>Promocode: </strong>OCT05 (Requirement To Redeem: Dan-6)</p>
        </div>
      </div>
      <div style="margin-top:14px;text-align:center">
        <button class="close-btn" id="information-close">Close</button>
      </div>
    </div>
  </div>

 <!-- SF2 Rating hack Info -->
  <div class="modal-overlay" id="information-modal-hack" aria-hidden="true">
    <div class="modal">
      <h3 style="text-align:center">SF2 Rating Hack</h3>
      <div class="modal-body">
        <div class="notes">
          <strong>FEATURES</strong>
          <hr style="border:none;border-top:1px solid rgba(184,139,47,0.08);margin:8px 0 10px"/>
          <ul style="padding-left:16px;margin-top:6px">
            <li>🔥 Rating Hack</li>
            <li>🔥️ 12k Bypass</li>
            <li>🔥️ Auto Destruction</li>
            <li>🔥️ Raid Not Found Bypass</li>
            <li>🔥️ Anti-Ban Protection</li>
            <li>🔥️ Anti-Spam Protection</li>
            <li>🔥️ Tier 4 Supports</li>
            <li>🔥️ Public PowerMode</li>
            <li>🔥️ Long Name</li>
            <li>🔥️ Space In Clan Name</li>
            <li>🔥️ Unlimited Account Switch</li>
            <li>🔥️ Permanent Access</li>
            <li>🔥️ Permanent Google Play Games Login</li>
            <li>🔥️ Textures Removal</li>
            <li>🔥️ 100% Safe, Bugs Free</li>
          </ul>
          <hr style="border:none;border-top:1px solid rgba(184,139,47,0.08);margin:10px 0"/>
          <p><strong>Note: </strong>Public Powermode Feature Only Available For 4 Access! Write The Creator To Get Discount!</p>
        </div>
      </div>
      <div style="margin-top:14px;text-align:center"><button class="close-btn" id="detail_hack-close">Close</button></div>
    </div>
  </div>

	<!-- SF2 Rating Hack Price List -->
  <div class="modal-overlay" id="buy-hack-modal" aria-hidden="true">
    <div class="modal">
      <h3 style="text-align:center">SF2 Rating Hack</h3>
      <div class="modal-body">
        <div class="notes">
          <strong>✍️ Price List  For Access</strong>
          <hr style="border:none;border-top:1px solid rgba(184,139,47,0.08);margin:8px 0 10px"/>
          <ul style="padding-left:16px;margin-top:6px">
            <li><strong>💲 4.99$</strong> = 1 Month 15 Days</li>
            <li><strong>💲 9.99$</strong> = 3 Months</li>
            <li><strong>💲 19.99$</strong> = 6 Months</li>
            <li><strong>💲 29.99$</strong> = Permanent</li>
          </ul>
          <hr style="border:none;border-top:1px solid rgba(184,139,47,0.08);margin:10px 0"/>
          <p><strong>Note: </strong>For More Information, Join Our Community</p>
        </div>
      </div>
      <div style="margin-top:14px;text-align:center">
        <button class="close-btn" id="buy_hack-close">Close</button>
        <a class="download-now" download href="https://t.me/SF2_Rating_Hack"><button class="btn-download">Buy</button></a>
      </div>
    </div>
  </div>
  
  <!-- SF2 Unity Mod Info -->
<div aria-hidden="true" class="modal-overlay" id="buy-unity-mod-info-modal">
  <div class="modal">
    <h3 style="text-align:center">SF2 Unity Mod — Information</h3>
    <div class="modal-body">
      <div style="text-align:center;margin-bottom:12px"></div>
      <div class="notes">
        <strong>FEATURES</strong>
        <hr style="border: none; border-top: 1px solid rgba(184, 139, 47, 0.08); margin: 8px 0 10px;" />
        <ul style="padding-left: 16px; margin-top: 6px">
          <li>🔥 Files Editable In GameData</li>
          <li>🔥 Custom Assets</li>
          <li>🔥 Supports Raid</li>
		  <li>🔥 Supports New Features</li>
        </ul>
      </div>
    </div>
    <div style="margin-top: 14px; text-align: center">
      <button class="close-btn" id="unity-info-close">Close</button>
    </div>
  </div>
</div>

<!-- SF2 Unity Mod Price List -->
<div aria-hidden="true" class="modal-overlay" id="buy-unity-mod-modal">
  <div class="modal">
    <h3 style="text-align:center">SF2 Unity Mod — Price List</h3>
    <div class="modal-body">
      <div style="text-align:center;margin-bottom:12px"></div>
      <div class="notes">
        <strong>✍️ Price List For Access</strong>
        <hr style="border: none; border-top: 1px solid rgba(184, 139, 47, 0.08); margin: 8px 0 10px;" />
        <ul style="padding-left: 16px; margin-top: 6px">
		  <li><strong>💲️ 19.99$</strong> = 1 Month</li>
          <li><strong>💲️ 59.99$</strong> = Permanent</li>
        </ul>
      </div>
    </div>
    <div style="margin-top: 14px; text-align: center">
      <button class="close-btn" id="unity-close">Close</button>
      <a class="download-now" href="https://t.me/Akuza007" target="_blank">
        <button class="btn-download">Buy</button>
      </a>
    </div>
  </div>
</div>

<!-- AES Tools Info -->
<div aria-hidden="true" class="modal-overlay" id="buy-tools-info-modal">
  <div class="modal">
    <h3 style="text-align:center">AES Tools — Information</h3>
    <div class="modal-body">
      <div style="text-align:center;margin-bottom:12px"></div>
      <div class="notes">
        <strong>FEATURES</strong>
        <hr style="border: none; border-top: 1px solid rgba(184, 139, 47, 0.08); margin: 8px 0 10px;" />
        <ul style="padding-left: 16px; margin-top: 6px">
          <li>🔥 Shadow Fight 2 Xml Files Encrypt/Decrypt</li>
          <li>🔥 Shades Xml Files Encrypt/Decrypt</li>
        </ul>
      </div>
    </div>
    <div style="margin-top: 14px; text-align: center">
      <button class="close-btn" id="tools_info-close">Close</button>
    </div>
  </div>
</div>

<!-- AES Tools Price List -->
<div aria-hidden="true" class="modal-overlay" id="buy-tools-modal">
  <div class="modal">
    <h3 style="text-align:center">AES Tools — Price List</h3>
    <div class="modal-body">
      <div style="text-align:center;margin-bottom:12px"></div>
      <div class="notes">
        <strong>✍️ Price List For Access</strong>
        <hr style="border: none; border-top: 1px solid rgba(184, 139, 47, 0.08); margin: 8px 0 10px;" />
        <ul style="padding-left: 16px; margin-top: 6px">
          <li><strong>💲️ 29.99$</strong> = 1 Month</li>
        </ul>
      </div>
    </div>
    <div style="margin-top: 14px; text-align: center">
      <button class="close-btn" id="tools_buy-close">Close</button>
      <a class="download-now" href="https://t.me/Akuza007" target="_blank">
        <button class="btn-download">Buy</button>
      </a>
    </div>
  </div>
</div>
`;

// --------- Добавляем CSS и HTML в документ ----------
function inject() {
  // head: шрифты и font-awesome (через link)
  const head = document.head;

  // Google Fonts
  const gf = document.createElement('link');
  gf.rel = 'stylesheet';
  gf.href = 'https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@700&family=Poppins:wght@400;600;700&display=swap';
  head.appendChild(gf);

  // Font Awesome (icons)
  const fa = document.createElement('link');
  fa.rel = 'stylesheet';
  fa.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css';
  head.appendChild(fa);

  // style
  const style = document.createElement('style');
  style.textContent = css;
  head.appendChild(style);

  // root HTML
  document.body.innerHTML = html;

  // add basic meta favicon if exists
  const linkIcon = document.createElement('link');
  linkIcon.rel = 'icon';
  linkIcon.type = 'image/x-icon';
  linkIcon.href = 'logo.jpg';
  head.appendChild(linkIcon);
}

// --------- JS логика (навигация, модалки, копирование, пузыри и т.д.) ----------
function attachLogic() {
  // элементы
  const navHome = document.getElementById("nav-home");
  const navProjects = document.getElementById("nav-projects");
  const navFounders = document.getElementById("nav-founders");
  const homeSection = document.getElementById("home-section");
  const projectsSection = document.getElementById("projects-section");
  const foundersSection = document.getElementById("founders-section");
  const sections = [homeSection, projectsSection, foundersSection];
  const buttons = [navHome, navProjects, navFounders];

  function setActive(tab) {
  const target = tab === "home" ? homeSection :
                 tab === "projects" ? projectsSection : foundersSection;

  // кнопки
  buttons.forEach(b => b.classList.remove("active"));
  if (tab === "home") navHome.classList.add("active");
  if (tab === "projects") navProjects.classList.add("active");
  if (tab === "founders") navFounders.classList.add("active");

  const mainEl = document.querySelector("main");
  const current = sections.find(s => s && s.classList.contains("active"));

  if (current === target) return;

  function showTarget() {
    // скрыть все секции кроме target
    sections.forEach(s => { if (s !== target) s.style.visibility = "hidden"; });

    target.style.visibility = "visible";
    target.classList.add("active");

    target.style.opacity = 0;
    target.offsetHeight; // форсируем reflow

    // плавный fade-in
    target.style.transition = "opacity 0.5s ease";
    requestAnimationFrame(() => target.style.opacity = 1);

    // плавно адаптируем высоту main к новой секции
    if (mainEl) {
      const newHeight = target.offsetHeight;
      mainEl.style.transition = "height 0.5s ease";
      mainEl.style.height = newHeight + "px";

      const onTargetEnd = (e) => {
        if (e.propertyName !== "opacity") return;
        mainEl.style.height = ""; // убрать фиксированную высоту
        target.removeEventListener("transitionend", onTargetEnd);
      };
      target.addEventListener("transitionend", onTargetEnd);
    }
  }

  if (current) {
    // зафиксировать текущую высоту main
    if (mainEl) mainEl.style.height = current.offsetHeight + "px";

    current.style.transition = "opacity 0.45s ease";
    current.style.opacity = 0;

    const onCurrentEnd = (e) => {
      if (e.propertyName !== "opacity") return;
      current.style.visibility = "hidden";
      current.classList.remove("active");
      current.removeEventListener("transitionend", onCurrentEnd);

      requestAnimationFrame(showTarget);
    };
    current.addEventListener("transitionend", onCurrentEnd);

    // fallback на случай, если transitionend не сработает
    setTimeout(() => {
      if (current.classList.contains("active")) {
        current.style.visibility = "hidden";
        current.classList.remove("active");
        showTarget();
      }
    }, 600);
  } else {
    showTarget();
  }
}

  navHome && (navHome.onclick = () => setActive("home"));
  navProjects && (navProjects.onclick = () => setActive("projects"));
  navFounders && (navFounders.onclick = () => setActive("founders"));
  const exploreBtn = document.getElementById("explore-projects");
  exploreBtn && (exploreBtn.onclick = () => setActive("projects"));

  // модалки
  const contactModal = document.getElementById("contact-modal");
  const informationModal = document.getElementById("information-modal");
  const informationHackModal = document.getElementById("information-modal-hack");
  const buyHackModal = document.getElementById("buy-hack-modal");
  const buyToolModal = document.getElementById("buy-tools-modal");
  const buyToolInfoModal = document.getElementById("buy-tools-info-modal");
  const buyUnityModModal = document.getElementById("buy-unity-mod-modal");
  const buyUnityModInfoModal = document.getElementById("buy-unity-mod-info-modal");

  // массив кнопок и модалок для удобства
  const modalButtons = [
    {btnId: "contact-close", modal: contactModal, hide: true},
    {btnId: "information-sff", modal: informationModal},
    {btnId: "information-close", modal: informationModal, hide: true},
    {btnId: "detail_hack-sff", modal: informationHackModal},
    {btnId: "detail_hack-close", modal: informationHackModal, hide: true},
    {btnId: "buy_hack-sff", modal: buyHackModal},
    {btnId: "buy_hack-close", modal: buyHackModal, hide: true},
    {btnId: "tools_info-sff", modal: buyToolInfoModal},
    {btnId: "tools_info-close", modal: buyToolInfoModal, hide: true},
	{btnId: "tools_buy-sff", modal: buyToolModal},
    {btnId: "tools_buy-close", modal: buyToolModal, hide: true},
    {btnId: "unity-sff", modal: buyUnityModModal},
    {btnId: "unity-close", modal: buyUnityModModal, hide: true},
    {btnId: "unity-info-sff", modal: buyUnityModInfoModal},
    {btnId: "unity-info-close", modal: buyUnityModInfoModal, hide: true},
  ];

  modalButtons.forEach(({btnId, modal, hide}) => {
    const btn = document.getElementById(btnId);
    if (btn && modal) {
      btn.addEventListener('click', () => hide ? hideModal(modal) : showModal(modal));
    }
  });

  // закрытие при клике по фону модалки (overlay)
  document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) hideModal(overlay);
    });
  });

  function showModal(modal) {
  if (!modal) return;
  modal.classList.add("show");
  modal.classList.remove("hide");
  modal.setAttribute("aria-hidden", "false");
  modal.removeAttribute("inert"); // активируем интерактивность
}

(function detectDevTools() {
  const threshold = 160;
  setInterval(() => {
    const widthDiff = window.outerWidth - window.innerWidth;
    const heightDiff = window.outerHeight - window.innerHeight;
    if (widthDiff > threshold || heightDiff > threshold) {
      console.warn('DevTools detected');
      // можно спрятать контент или показать предупреждение
    }
  }, 1000);
})();

function hideModal(modal, returnFocusTo) {
  if (!modal) return;

  // Move focus before hiding to avoid aria-hidden on focused element
  if (returnFocusTo) returnFocusTo.focus();

  modal.classList.add("hide");
  setTimeout(() => {
    modal.classList.remove("show");
    modal.setAttribute("aria-hidden", "true");
  }, 300);
}

  // ESC закрытие всех модалок
  window.addEventListener("keydown", e => {
    if (e.key === "Escape") {
      [
        contactModal,
        informationModal,
        informationHackModal,
        buyHackModal,
        buyToolModal,
		buyToolInfoModal,
        buyUnityModModal,
        buyUnityModInfoModal
      ].forEach(hideModal);
    }
  });
  
  // block hotkeys and contex menu
	window.addEventListener("keydown", function(e) {
	const key = e.key.toLowerCase();
	
	const zoomKeys = ["+", "-", "=", "_"];
	
	// Block combo buttons
	if (e.ctrlKey || e.metaKey) {
		if (
		zoomKeys.includes(key) ||       // Ctrl + +/-/=/_ (зум)
		key === "s" ||                  // Ctrl+S
		key === "u" ||                  // Ctrl+U
		(key === "i" && e.shiftKey) ||  // Ctrl+Shift+I
		(key === "c" && e.shiftKey)     // Ctrl+Shift+C
		) {
		e.preventDefault();
		alert("Action blocked!");
		}
	}
	
	// F12
	if (e.key === "F12") {
		e.preventDefault();
		alert("Action blocked!");
	}
	});
	
	// Block right click
	window.addEventListener("contextmenu", function(e) {
	e.preventDefault();
	alert("Right click is disabled!");
	});


  // копирование телеги
  document.getElementById("copy-tg")?.addEventListener('click', () => {
    const val = document.getElementById("tg-id")?.value || '';
    navigator.clipboard.writeText(val).then(() => {
      alert("Telegram handle copied!");
    }).catch(() => {
      // fallback
      try {
        const input = document.getElementById("tg-id");
        input.select();
        document.execCommand('copy');
        alert("Telegram handle copied!");
      } catch (err) {
        alert("Failed to copy. Please copy manually: " + val);
      }
    });
  });
  
  document.addEventListener('copy', function(e) {
  e.clipboardData.setData('text/plain', 'The content is protected by copyright - copying is prohibited.');
  e.preventDefault();
});

  // год в футере
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // пузыри
  const container = document.getElementById("bubbles");
  const bubblesCount = 50;
  if (container) {
    for (let i = 0; i < bubblesCount; i++) {
      const b = document.createElement("div");
      b.classList.add("bubble");
      const size = Math.random() * 60 + 20;
      b.style.width = b.style.height = `${size}px`;
      b.style.left = `${Math.random() * 100}%`;
      b.style.top = `${Math.random() * 100}%`;
      b.style.animationDuration = `${10 + Math.random() * 20}s`;
      b.style.animationDelay = `${Math.random() * 10}s`;
      b.style.setProperty("--moveX", `${Math.random() * 200 - 100}px`);
      container.appendChild(b);
    }
  }

  // (опционально) lazy load external icons/fonts if needed — уже подключили в head
}

// --------- Запуск ----------
(function init() {
  inject();
  attachLogic();
})();

