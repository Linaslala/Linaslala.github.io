(() => {
  const ORDER = ["about", "cv", "projects", "learned", "ai", "bookshelf", "contact"];
  const SVG = "http://www.w3.org/2000/svg";

  // ----- Tallgrenen på knapparna -----
  // En minimalistisk gren av tallen i hero-bilden: mörk, kantig gren som smalnar av,
  // platta gröna barrmoln som tallens krona och ett litet rött löv med samma form som
  // det fallande lövet. Grenen följer knappens underkant och speglas så att varje rad blir symmetrisk.
  function rng(seed) { // mulberry32: samma frö ger samma gren varje gång
    return () => {
      seed |= 0; seed = seed + 0x6D2B79F5 | 0;
      let t = Math.imul(seed ^ seed >>> 15, 1 | seed);
      t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
      return ((t ^ t >>> 14) >>> 0) / 4294967296;
    };
  }
  const f = n => n.toFixed(1);
  const PAD = 16;   // hur långt utanför knappen grenen får gå
  const LEAF = "M0 -7 C5 -4 6 3 0 7 C-6 3 -5 -4 0 -7Z";   // samma form som det fallande lövet

  // Gren från x0 till x1 längs underkanten. Fröet styr allt som gör grenen unik:
  // antal leder, om den reser sig eller hänger, tjocklek, barrmolnens antal och storlek,
  // en eventuell sidokvist och hur många löv som ligger under den.
  function branch(w, h, x0, x1, seed) {
    const r = rng(seed);
    const len = (x1 - x0) * (0.92 + r() * 0.08);
    const joints = 2 + Math.floor(r() * 3);                 // 2–4 leder
    const trend = (r() - 0.35) * 6;                         // reser sig (oftast) eller hänger lite
    const thick = 3.6 + r() * 1.4;
    const pts = [[x0, h + 2]];
    for (let k = 1; k <= joints; k++) {
      const x = x0 + len * k / joints * (0.88 + r() * 0.12);
      const y = h + 1 - k * trend - (r() - 0.5) * 5;
      pts.push([x, y]);
    }
    let out = "";
    // Grenen: varje led lite smalare och med en lätt böj, som tallens grenar
    for (let k = 0; k < pts.length - 1; k++) {
      const [a, b] = [pts[k], pts[k + 1]];
      const wd = Math.max(1.3, thick - k * (thick - 1.3) / joints);
      const mx = (a[0] + b[0]) / 2, my = (a[1] + b[1]) / 2 + (r() - 0.5) * 6;
      out += `<path class="bbranch" stroke-width="${f(wd)}" d="M${f(a[0])} ${f(a[1])} Q${f(mx)} ${f(my)} ${f(b[0])} ${f(b[1])}"/>`;
    }
    // Barrmoln: platta, överlappande ellipser, olika många och olika stora
    const cloud = (x, y, size) => {
      const cy = y - 5 - r() * 4, rx = size, lift = 2 + r() * 2;
      let o = `<path class="btwig" d="M${f(x)} ${f(y)} L${f(x + 2)} ${f(cy + 2)}"/>`;
      o += `<ellipse class="bneedles" cx="${f(x + 2)}" cy="${f(cy)}" rx="${f(rx)}" ry="${f(3.8 + r() * 1.6)}"/>`;
      o += `<ellipse class="bneedles" cx="${f(x + 2 + rx * (r() - 0.3) * 0.7)}" cy="${f(cy - lift)}" rx="${f(rx * (0.45 + r() * 0.2))}" ry="${f(3 + r())}"/>`;
      if (r() < 0.2) o += `<ellipse class="bneedles" cx="${f(x + 2 - rx * 0.4)}" cy="${f(cy + 1)}" rx="${f(rx * 0.4)}" ry="2.6"/>`;
      return o;
    };
    for (let k = 1; k < pts.length; k++) {
      if (k < pts.length - 1 && r() < 0.25) continue;       // hoppa ibland över ett moln, toppen har alltid ett
      // molnet får aldrig vara bredare än ungefär en tredjedel av leden, så kronan blir luftig
      const seg = pts[k][0] - pts[k - 1][0];
      out += cloud(pts[k][0], pts[k][1], Math.min(12 + r() * 8, seg * 0.36));
    }
    // Ibland en kort sidokvist med ett litet eget moln
    if (r() < 0.55) {
      const k = 1 + Math.floor(r() * (pts.length - 1)), [a, b] = [pts[k - 1], pts[k]];
      const t = 0.4 + r() * 0.3, sx = a[0] + (b[0] - a[0]) * t, sy = a[1] + (b[1] - a[1]) * t;
      const ex = sx + 6 + r() * 6, ey = sy - 9 - r() * 5;
      out += `<path class="btwig" d="M${f(sx)} ${f(sy)} Q${f(sx + 1)} ${f(ey + 4)} ${f(ex)} ${f(ey)}"/>`;
      out += `<ellipse class="bneedles" cx="${f(ex + 2)}" cy="${f(ey - 2)}" rx="${f(6 + r() * 4)}" ry="2.8"/>`;
    }
    // Noll, ett eller två röda löv som just har landat
    const leaves = r() < 0.15 ? 0 : (r() < 0.75 ? 1 : 2);
    for (let k = 0; k < leaves; k++) {
      const lx = x0 + len * (0.25 + r() * 0.6), la = 40 + r() * 100;
      out += `<path class="bleaf" transform="translate(${f(lx)} ${f(h + 3 + r() * 3)}) rotate(${f(la)}) scale(${f(0.6 + r() * 0.25)})" d="${LEAF}"/>`;
    }
    return out;
  }

  // Layouter: L = gren från vänstra hörnet, R = spegling av L,
  // C = gren längs hela underkanten, D = spegling av C.
  // Varje rad speglas kring mitten, både med 4 knappar per rad och med 2 per rad (mobil).
  const WIDE = matchMedia("(min-width: 720px)");
  const LAYOUTS = { wide: ["L", "C", "D", "R", "L", "C", "R"], narrow: ["L", "R", "C", "D", "L", "R", "C"] };

  function drawVine(btn, i) {
    btn.querySelector(".vine")?.remove();
    const w = btn.offsetWidth, h = btn.offsetHeight;
    if (!w || !h) return;
    const kind = LAYOUTS[WIDE.matches ? "wide" : "narrow"][i % 7];
    const seed = i * 7919 + 11;
    let inner = (kind === "C" || kind === "D") ? branch(w, h, w * 0.06, w * 0.96, seed) : branch(w, h, -6, w * 0.84, seed);
    if (kind === "R" || kind === "D") inner = `<g transform="translate(${w} 0) scale(-1 1)">${inner}</g>`;
    const svg = document.createElementNS(SVG, "svg");
    svg.setAttribute("viewBox", `${-PAD} ${-PAD} ${w + 2 * PAD} ${h + 2 * PAD}`);
    svg.setAttribute("aria-hidden", "true");
    svg.setAttribute("class", "vine");
    svg.innerHTML = `<g filter="url(#brush)">${inner}</g>`;
    btn.prepend(svg);
  }
  const drawVines = () => document.querySelectorAll(".room").forEach(drawVine);
  let resizeTimer;
  addEventListener("resize", () => { clearTimeout(resizeTimer); resizeTimer = setTimeout(drawVines, 150); });

  const root = document.documentElement;
  const modal = document.getElementById("modal");
  const modalTitle = document.getElementById("modal-title");
  const modalBody = document.getElementById("modal-body");
  let lang = "sv";
  let openKey = null;

  // ----- Lagring (kan saknas i privat läge) -----
  const store = {
    get(k) { try { return localStorage.getItem(k); } catch { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch {} }
  };

  // ----- Hjälpare -----
  const el = (tag, cls, text) => {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) appendText(n, text);
    return n;
  };

  // [[platshållare]] markeras visuellt
  function appendText(node, text) {
    String(text).split(/(\[\[.*?\]\])/).forEach(part => {
      if (!part) return;
      if (part.startsWith("[[")) {
        const ph = document.createElement("span");
        ph.className = "ph";
        ph.textContent = part.slice(2, -2);
        node.append(ph);
      } else node.append(part);
    });
  }

  const get = (path) => path.split(".").reduce((o, k) => (o ? o[k] : undefined), TEXTS[lang]);

  // ----- Block-rendering -----
  function renderBlocks(blocks, parent) {
    blocks.forEach(b => {
      if (b.p) parent.append(el("p", null, b.p));
      else if (b.note) parent.append(el("p", null, b.note));
      else if (b.h3) parent.append(el("h3", null, b.h3));
      else if (b.quote) {
        const fig = el("figure", "quote");
        fig.append(el("blockquote", null, b.quote), el("figcaption", null, b.who));
        parent.append(fig);
      }
      else if (b.steps) {
        // Numrerade steg där **början** är fetstil
        const ol = el("ol", "steps");
        b.steps.forEach(s => {
          const li = el("li");
          s.split(/\*\*(.+?)\*\*/).forEach((part, i) => { if (part) i % 2 ? li.append(el("strong", null, part)) : appendText(li, part); });
          ol.append(li);
        });
        parent.append(ol);
      }
      else if (b.list) {
        const ul = el("ul");
        b.list.forEach(item => ul.append(el("li", null, item)));
        parent.append(ul);
      }
      else if (b.timeline) {
        const ul = el("ul", "timeline");
        b.timeline.forEach(([when, what]) => {
          const li = el("li");
          li.append(el("span", "when", when), el("span", null, what));
          ul.append(li);
        });
        parent.append(ul);
      }
      else if (b.tags) parent.append(tagList(b.tags));
      else if (b.cards) parent.append(cards(b.cards[0], b.cards[1]));
      else if (b.cols) {
        const wrap = el("div", "cols");
        b.cols.forEach(col => { const d = el("div"); renderBlocks(col, d); wrap.append(d); });
        parent.append(wrap);
      }
      else if (b.courses) {
        const ul = el("ul", "courses");
        b.courses.forEach(([state, name]) => {
          const li = el("li", "course-" + state);
          const mark = { done: "✓", now: "●", next: "○" }[state];
          li.append(el("span", "mark", mark), el("span", null, name));
          if (state === "now") li.append(el("span", "badge", get("ui.ongoing")));
          ul.append(li);
        });
        parent.append(ul);
      }
      else if (b.open) {
        const btn = b.button ? el("button", "btn btn-outline btn-download", b.label) : el("button", "more-link", b.label + " →");
        btn.type = "button";
        btn.dataset.open = b.open;
        parent.append(btn);
      }
      else if (b.tools) {
        AI_TOOLS.forEach(g => {
          parent.append(el("h3", null, g.group[lang]));
          const ul = el("ul", "tools");
          g.items.forEach(([name, desc]) => {
            const li = el("li");
            li.append(el("strong", null, name), el("span", null, desc[lang]));
            ul.append(li);
          });
          parent.append(ul);
        });
      }
      else if (b.credits) {
        // Tvåkolumnslista: namn till vänster, beskrivning till höger (AI-stöd)
        const dl = el("dl", "credits");
        b.credits.forEach(([role, who]) => { dl.append(el("dt", null, role), el("dd", null, who)); });
        parent.append(dl);
      }
      else if (b.shelf) {
        // Tomma bokryggar tills Bokhyllan API levererar riktiga böcker
        const shelf = el("div", "shelf");
        for (let i = 0; i < b.shelf; i++) shelf.append(el("span", "spine"));
        parent.append(shelf);
      }
      else if (b.link) {
        // Textrad med en extern länk, till exempel GitHub
        const p = el("p", "more-projects", b.text + " ");
        const link = el("a", null, b.label);
        link.href = b.link; link.target = "_blank"; link.rel = "noopener";
        p.append(link);
        parent.append(p);
      }
      else if (b.download) {
        const link = el("a", "btn btn-outline btn-download", b.label);
        link.href = b.download;
        link.setAttribute("download", b.file || "");
        parent.append(link);
      }
      else if (b.form) parent.append(contactForm());
    });
  }

  function tagList(items) {
    const ul = el("ul", "tags");
    items.forEach(t => ul.append(el("li", null, t)));
    return ul;
  }

  function cards(from, to) {
    const grid = el("div", "cards");
    PROJECTS.filter(p => p.n >= from && p.n <= to).forEach(p => {
      const c = el("article", "card");
      c.append(
        el("span", "num", String(p.n).padStart(2, "0")),
        el("h4", null, p.name),
        el("p", "course", p.course[lang]),
        el("p", null, p.what[lang]),
        tagList(p.stack),
        el("span", "status", get("ui.status"))
      );
      grid.append(c);
    });
    return grid;
  }

  function contactForm() {
    const f = get("form");
    const form = el("form", "form");
    // Web3Forms: nyckeln är publik per design och får ligga i koden.
    form.action = "https://api.web3forms.com/submit";
    form.method = "POST";
    const key = "d6f500f7-8462-40f5-8d49-ddfcde9874f7";
    form.innerHTML = `
      <input type="hidden" name="access_key" value="${key}">
      <input type="hidden" name="subject" value="Nytt meddelande från portfolion">
      <input type="hidden" name="from_name" value="Portfolion">
      <input type="checkbox" name="botcheck" class="hp" tabindex="-1" autocomplete="off">`;
    const field = (label, name, type) => {
      const l = el("label", null, label);
      const input = type === "textarea" ? el("textarea") : el("input");
      if (type !== "textarea") input.type = type;
      input.name = name; input.required = true;
      if (name === "email") input.autocomplete = "email";
      if (name === "name") input.autocomplete = "name";
      l.append(input);
      return l;
    };
    const btn = el("button", "btn btn-outline", f.send);
    btn.type = "submit";
    form.append(field(f.name, "name", "text"), field(f.email, "email", "email"), field(f.message, "message", "textarea"), btn);
    if (!key) { btn.disabled = true; form.append(el("p", null, f.pending)); }
    // Skicka utan att lämna sidan och visa svaret i rutan
    const status = el("p", "form-status");
    status.setAttribute("role", "status");
    form.append(status);
    form.addEventListener("submit", async e => {
      e.preventDefault();
      btn.disabled = true;
      status.textContent = f.sending;
      try {
        const res = await fetch(form.action, { method: "POST", headers: { Accept: "application/json" }, body: new FormData(form) });
        const data = await res.json();
        if (!res.ok || !data.success) throw new Error(data.message);
        form.reset();
        status.textContent = f.sent;
      } catch {
        status.textContent = f.error;
      } finally {
        btn.disabled = false;
      }
    });
    return form;
  }

  // ----- Rum och modal -----
  function renderRooms() {
    const nav = document.getElementById("rooms");
    nav.setAttribute("aria-label", get("ui.rooms"));
    nav.replaceChildren();
    ORDER.forEach((key, i) => {
      const s = get("sections." + key);
      const b = el("button", "room");
      b.type = "button";
      b.dataset.open = key;
      b.append(el("span", "label", s.title));
      nav.append(b);
    });
    requestAnimationFrame(drawVines); // rankorna ritas när knapparnas storlek är känd
  }

  function open(key) {
    const s = get("sections." + key);
    if (!s) return;
    openKey = key;
    modalTitle.textContent = s.title;
    modalBody.replaceChildren();
    if (s.back) {
      const back = el("button", "linkish back", "← " + get("ui.back"));
      back.type = "button";
      back.dataset.open = s.back;
      modalBody.append(back);
    }
    renderBlocks(s.blocks, modalBody);
    if (!modal.open) {
      modal.showModal();
      modal.focus(); // fokus på rutan i stället för krysset, så att ingen fokusmarkering syns direkt
    }
    modalBody.scrollTop = 0;
  }

  document.addEventListener("click", e => {
    const t = e.target.closest("[data-open]");
    if (t) open(t.dataset.open);
  });
  document.getElementById("modal-close").addEventListener("click", () => modal.close());
  modal.addEventListener("click", e => { if (e.target === modal) modal.close(); }); // klick på bakgrunden
  modal.addEventListener("close", () => { openKey = null; });

  // ----- Eftertexter i sidfoten: rullar från höger till vänster, två kopior för en sömlös slinga -----
  function renderCredits() {
    const box = document.getElementById("credits");
    if (!box) return;
    const track = el("div", "marquee-track");
    for (let copy = 0; copy < 2; copy++) {
      const group = el("div", "marquee-group");
      if (copy) group.setAttribute("aria-hidden", "true");
      get("credits").forEach(([role, who]) => {
        const item = el("span", "marquee-item");
        item.append(el("span", "marquee-role", role));
        if (who) item.append(el("span", "marquee-name", who));
        group.append(item);
      });
      track.append(group);
    }
    box.replaceChildren(track);
  }

  // ----- Språk -----
  function applyLang(next) {
    lang = next;
    root.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach(n => {
      const v = get(n.dataset.i18n);
      if (v != null) n.textContent = v;
    });
    document.querySelectorAll("[data-i18n-label]").forEach(n => n.setAttribute("aria-label", get(n.dataset.i18nLabel)));
    const lt = document.getElementById("lang-toggle");
    lt.textContent = lang === "sv" ? "EN" : "SV";
    lt.setAttribute("aria-label", get("ui.lang"));
    document.getElementById("theme-toggle").setAttribute("aria-label", get("ui.theme"));
    renderRooms();
    renderCredits();
    if (openKey) open(openKey);
    store.set("lang", lang);
  }
  document.getElementById("lang-toggle").addEventListener("click", () => applyLang(lang === "sv" ? "en" : "sv"));

  // ----- Tema -----
  const isDark = () => root.dataset.theme
    ? root.dataset.theme === "dark"
    : matchMedia("(prefers-color-scheme: dark)").matches;
  document.getElementById("theme-toggle").addEventListener("click", () => {
    root.dataset.theme = isDark() ? "light" : "dark";
    store.set("theme", root.dataset.theme);
  });

  WIDE.addEventListener("change", drawVines);
  document.fonts?.ready.then(drawVines);
  document.getElementById("year").textContent = new Date().getFullYear();
  applyLang(store.get("lang") === "en" ? "en" : "sv"); // svenska som standard
})();
