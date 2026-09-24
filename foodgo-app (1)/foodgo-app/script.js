/* ===================== Original restaurant logo marks (inline SVG) ===================== */
/* Each is a flat, rounded "sticker" icon in its own accent color, built from simple
 shapes rather than photos or borrowed brand art — original artwork for this demo. */
const LOGO_PATTY = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Patty Republic logo">
  <circle cx="50" cy="50" r="50" fill="#14213D"/>
  <ellipse cx="50" cy="36" rx="26" ry="13" fill="#FFE8B0"/>
  <circle cx="40" cy="33" r="1.6" fill="#14213D"/><circle cx="50" cy="29" r="1.6" fill="#14213D"/><circle cx="60" cy="33" r="1.6" fill="#14213D"/>
  <rect x="24" y="47" width="52" height="8" rx="4" fill="#FFD23F"/>
  <rect x="22" y="57" width="56" height="11" rx="5" fill="#8B5A2B"/>
  <rect x="24" y="70" width="52" height="10" rx="5" fill="#FFE8B0"/>
</svg>`;
const LOGO_SLICE = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cheesy Slice Co. logo">
  <circle cx="50" cy="50" r="50" fill="#FFD23F"/>
  <path d="M50 22 L78 74 L22 74 Z" fill="#FFF3D0"/>
  <rect x="22" y="70" width="56" height="8" rx="4" fill="#E8B84B"/>
  <circle cx="50" cy="46" r="4.2" fill="#FF5D5D"/><circle cx="38" cy="60" r="4.2" fill="#FF5D5D"/><circle cx="61" cy="58" r="4.2" fill="#FF5D5D"/>
</svg>`;
const LOGO_WINGS = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Crispy Wings PH logo">
  <circle cx="50" cy="50" r="50" fill="#FF5D5D"/>
  <ellipse cx="41" cy="42" rx="22" ry="17" fill="#FFE8B0"/>
  <rect x="55" y="52" width="10" height="27" rx="5" fill="#FFF3D0"/>
  <circle cx="60" cy="80" r="6" fill="#FFF3D0"/>
</svg>`;
const LOGO_NANAY = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Nanay's Table logo">
  <circle cx="50" cy="50" r="50" fill="#00C2A8"/>
  <path d="M22 50 a28 20 0 0 0 56 0 Z" fill="#FFE8B0"/>
  <ellipse cx="50" cy="50" rx="26" ry="7" fill="#FFF3D0"/>
  <path d="M40 30 q3 -8 0 -14" stroke="#F2FBF9" stroke-width="3" fill="none" stroke-linecap="round"/>
  <path d="M50 28 q3 -8 0 -14" stroke="#F2FBF9" stroke-width="3" fill="none" stroke-linecap="round"/>
  <path d="M60 30 q3 -8 0 -14" stroke="#F2FBF9" stroke-width="3" fill="none" stroke-linecap="round"/>
</svg>`;
const LOGO_SUGAR = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Sugar Rush logo">
  <circle cx="50" cy="50" r="50" fill="#FF8FB1"/>
  <path d="M30 72 L50 30 L70 72 Z" fill="#FFF3D0"/>
  <rect x="30" y="64" width="40" height="8" fill="#E86A98"/>
  <rect x="34" y="52" width="32" height="6" fill="#FFD23F"/>
  <circle cx="50" cy="25" r="5" fill="#FF5D5D"/>
</svg>`;
const LOGO_BREW = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Brew &amp; Chill logo">
  <circle cx="50" cy="50" r="50" fill="#4EA8FF"/>
  <path d="M34 40 L66 40 L60 78 a4 4 0 0 1 -4 4 L44 82 a4 4 0 0 1 -4 -4 Z" fill="#FFF3D0"/>
  <rect x="30" y="34" width="40" height="8" rx="3" fill="#F2FBF9"/>
  <rect x="46" y="18" width="6" height="22" rx="3" fill="#F2FBF9"/>
  <circle cx="44" cy="66" r="3.4" fill="#7B4B2A"/><circle cx="55" cy="70" r="3.4" fill="#7B4B2A"/><circle cx="49" cy="59" r="3.4" fill="#7B4B2A"/>
</svg>`;
const LOGO_QUICK = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Quick Bite Express logo">
  <circle cx="50" cy="50" r="50" fill="#FF9F43"/>
  <rect x="28" y="46" width="10" height="30" rx="2" fill="#FFF3D0"/>
  <rect x="41" y="40" width="10" height="36" rx="2" fill="#FFF3D0"/>
  <rect x="54" y="46" width="10" height="30" rx="2" fill="#FFF3D0"/>
  <rect x="24" y="74" width="46" height="8" rx="3" fill="#E8752B"/>
  <path d="M66 20 L52 42 L60 42 L46 64 L70 38 L58 38 Z" fill="#FFD23F"/>
</svg>`;

/* ===================== "Database" — persisted to localStorage ===================== */
const DB_KEY = 'foodgo_db';
const SEED_VERSION = 2; // bump when seed data shape changes, so returning browsers get the update

function seed() {
  return {
    categories: [
      { id: 'burgers', name: 'Burgers', icon: '🍔' }, { id: 'pizza', name: 'Pizza', icon: '🍕' },
      { id: 'chicken', name: 'Chicken', icon: '🍗' }, { id: 'filipino', name: 'Filipino Food', icon: '🍚' },
      { id: 'desserts', name: 'Desserts', icon: '🍰' }, { id: 'drinks', name: 'Drinks', icon: '🧋' },
      { id: 'fastfood', name: 'Fast Food', icon: '🍟' }
    ],
    restaurants: [
      { id: 'r1', ownerId: 'owner1', name: 'Patty Republic', icon: '🍔', logo: LOGO_PATTY, category: 'burgers', rating: 4.5, fee: 49, time: '25-35 min', loc: 'Ortigas, Pasig City' },
      { id: 'r2', ownerId: 'owner2', name: 'Cheesy Slice Co.', icon: '🍕', logo: LOGO_SLICE, category: 'pizza', rating: 4.7, fee: 39, time: '20-30 min', loc: 'BGC, Taguig City' },
      { id: 'r3', ownerId: null, name: 'Crispy Wings PH', icon: '🍗', logo: LOGO_WINGS, category: 'chicken', rating: 4.3, fee: 45, time: '30-40 min', loc: 'Quezon City' },
      { id: 'r4', ownerId: null, name: "Nanay's Table", icon: '🍚', logo: LOGO_NANAY, category: 'filipino', rating: 4.8, fee: 30, time: '20-25 min', loc: 'Makati City' },
      { id: 'r5', ownerId: null, name: 'Sugar Rush', icon: '🍰', logo: LOGO_SUGAR, category: 'desserts', rating: 4.6, fee: 35, time: '15-25 min', loc: 'Mandaluyong City' },
      { id: 'r6', ownerId: null, name: 'Brew & Chill', icon: '🧋', logo: LOGO_BREW, category: 'drinks', rating: 4.4, fee: 25, time: '10-20 min', loc: 'Manila' },
      { id: 'r7', ownerId: null, name: 'Quick Bite Express', icon: '🍟', logo: LOGO_QUICK, category: 'fastfood', rating: 4.2, fee: 40, time: '20-30 min', loc: 'Pasay City' }
    ],
    foodItems: [
      { id: 'f1', rid: 'r1', name: 'Classic Republic Burger', desc: 'Beef patty, cheddar, house sauce.', price: 129, img: '🍔' },
      { id: 'f2', rid: 'r1', name: 'Double Stack Burger', desc: 'Two patties, double cheese, bacon.', price: 189, img: '🍔' },
      { id: 'f3', rid: 'r1', name: 'Crinkle Fries', desc: 'Garlic aioli dip.', price: 79, img: '🍟' },
      { id: 'f4', rid: 'r2', name: 'Pepperoni Fiesta', desc: '12-inch pie, mozzarella.', price: 349, img: '🍕' },
      { id: 'f5', rid: 'r2', name: 'Four Cheese Supreme', desc: 'Mozzarella, cheddar, parmesan.', price: 379, img: '🍕' },
      { id: 'f6', rid: 'r2', name: 'Garlic Bread Sticks', desc: 'Garlic butter, parsley.', price: 99, img: '🥖' },
      { id: 'f7', rid: 'r3', name: 'Crispy Fried Chicken (2pc)', desc: 'Marinated overnight.', price: 149, img: '🍗' },
      { id: 'f8', rid: 'r3', name: 'Spicy Wings (6pc)', desc: 'House hot sauce.', price: 159, img: '🍗' },
      { id: 'f9', rid: 'r4', name: 'Adobo Rice Bowl', desc: 'Pork adobo, garlic rice.', price: 119, img: '🍚' },
      { id: 'f10', rid: 'r4', name: 'Sinigang na Baboy', desc: 'Sour tamarind pork soup.', price: 159, img: '🍲' },
      { id: 'f11', rid: 'r5', name: 'Leche Flan Cup', desc: 'Silky caramel custard.', price: 65, img: '🍮' },
      { id: 'f12', rid: 'r5', name: 'Ube Halaya Cake', desc: 'Cream cheese frosting.', price: 95, img: '🍰' },
      { id: 'f13', rid: 'r6', name: 'Classic Milk Tea', desc: 'Brown sugar pearls.', price: 89, img: '🧋' },
      { id: 'f14', rid: 'r6', name: 'Mango Sago Shake', desc: 'Fresh mango, sago.', price: 99, img: '🥭' },
      { id: 'f15', rid: 'r7', name: 'Cheeseburger Meal', desc: 'Burger, fries, soda.', price: 139, img: '🍔' },
      { id: 'f16', rid: 'r7', name: 'Loaded Cheese Fries', desc: 'Cheese sauce, bacon bits.', price: 89, img: '🍟' }
    ],
    users: [
      { id: 'u1', name: 'Maria Santos', email: 'maria@example.com', phone: '09171234567', password: 'password123', role: 'customer' },
      { id: 'owner1', name: 'Carlo Reyes', email: 'owner@pattyrepublic.com', phone: '09179876543', password: 'owner123', role: 'owner', rid: 'r1' },
      { id: 'admin1', name: 'FoodGo Admin', email: 'admin@foodgo.ph', phone: '09170000000', password: 'admin123', role: 'admin' }
    ],
    orders: [], session: null, cart: null
  };
}

function loadDB() {
  let raw = localStorage.getItem(DB_KEY);
  if (!raw) {
    const d = seed();
    d.version = SEED_VERSION;
    localStorage.setItem(DB_KEY, JSON.stringify(d));
    return d;
  }
  let d = JSON.parse(raw);
  if (d.version !== SEED_VERSION) {
    // Refresh restaurant records (e.g. to pick up new logos) without touching this browser's own orders/accounts/menu edits.
    d.restaurants = seed().restaurants;
    d.version = SEED_VERSION;
    localStorage.setItem(DB_KEY, JSON.stringify(d));
  }
  return d;
}

function saveDB(d) { localStorage.setItem(DB_KEY, JSON.stringify(d)); }
let db = loadDB();

/* ===================== Helpers ===================== */
const esc = s => { const d = document.createElement('div'); d.textContent = s ?? ''; return d.innerHTML; };
const money = n => '₱' + Number(n).toFixed(2);
const uid = p => p + '_' + Math.random().toString(36).slice(2, 9);
const currentUser = () => db.session ? db.users.find(u => u.id === db.session) : null;
const restaurant = id => db.restaurants.find(r => r.id === id);
const menuOf = rid => db.foodItems.filter(f => f.rid === rid);
const STATUSES = ['Pending', 'Confirmed', 'Preparing', 'Out for Delivery', 'Delivered', 'Cancelled'];

function go(hash) { location.hash = hash; }

function requireLogin(next) { if (!currentUser()) {
  go('#/login?next=' + encodeURIComponent(next));
  return false;
} return true; }

/* ===================== Nav ===================== */

function renderNav() {
  const u = currentUser();
  let right = '';
  if (u) {
    if (u.role === 'admin')
      right += `<a href="#/admin">Admin</a>`;
    else if (u.role === 'owner')
      right += `<a href="#/owner">My Restaurant</a>`;
    else
      right += `<a href="#/orders">My Orders</a>`;
    right += `<a href="#" onclick="logout();return false;">Log out (${esc(u.name.split(' ')[0])})</a>`;
  }
  else {
    right += `<a href="#/login">Log in</a><button class="btn btn-primary btn-sm" onclick="go('#/register')">Sign up</button>`;
  }
  const count = db.cart ? db.cart.items.reduce((s, i) => s + i.qty, 0) : 0;
  document.getElementById('nav').innerHTML = `
    <a href="#/" class="brand">FoodGo<span class="dot">.PH</span></a>
    <div class="nav-links">
      <a href="#/">Browse</a>
      <a href="#/cart" class="cart-pill">🛵 Cart ${count > 0 ? `<span class="cart-badge">${count}</span>` : ''}</a>
      ${right}
    </div>`;
}

function logout() { db.session = null; saveDB(db); go('#/'); }

/* ===================== Cart ===================== */

function handleAdd(rid, fid) {
  const r = restaurant(rid), item = db.foodItems.find(f => f.id === fid);
  if (r && item && addToCart(r, item))
    render();
}

function addToCart(r, item) {
  if (db.cart && db.cart.rid !== r.id) {
    if (!confirm(`Your cart has items from ${db.cart.rname}. Start a new order from ${r.name} instead?`))
      return false;
    db.cart = null;
  }
  if (!db.cart)
    db.cart = { rid: r.id, rname: r.name, fee: r.fee, items: [] };
  const ex = db.cart.items.find(i => i.fid === item.id);
  if (ex)
    ex.qty++;
  else
    db.cart.items.push({ fid: item.id, name: item.name, price: item.price, img: item.img, qty: 1 });
  saveDB(db);
  return true;
}

function changeQty(fid, d) {
  if (!db.cart)
    return;
  const it = db.cart.items.find(i => i.fid === fid);
  if (!it)
    return;
  it.qty += d;
  if (it.qty <= 0)
    db.cart.items = db.cart.items.filter(i => i.fid !== fid);
  if (db.cart.items.length === 0)
    db.cart = null;
  saveDB(db);
}

function cartSubtotal() { return db.cart ? db.cart.items.reduce((s, i) => s + i.price * i.qty, 0) : 0; }

/* ===================== Views ===================== */

function viewHome(params) {
  const cat = params.get('cat');
  const q = (params.get('q') || '').toLowerCase();
  let list = db.restaurants;
  if (cat)
    list = list.filter(r => r.category === cat);
  if (q)
    list = list.filter(r => r.name.toLowerCase().includes(q) || menuOf(r.id).some(f => f.name.toLowerCase().includes(q)));
  return `
  <header class="hero">
    <div class="hero-inner">
      <h1>Order food, on the go.</h1>
      <p>Burgers, pizza, ulam, dessert or a milk tea run — from restaurants near you, delivered fast.</p>
      <form class="search-bar" onsubmit="event.preventDefault(); go('#/?q='+encodeURIComponent(this.q.value));">
        <input name="q" placeholder="Search for food or restaurants" value="${esc(q)}">
        <button class="btn btn-primary" type="submit">Search</button>
      </form>
    </div>
  </header>
  <main class="container">
    <h2 class="section-title">Categories</h2>
    <div class="categories">
      ${db.categories.map(c => `<button class="chip ${cat === c.id ? 'active' : ''}" onclick="go('#/?cat=${c.id}')"><span class="circle">${c.icon}</span><span class="label">${esc(c.name)}</span></button>`).join('')}
    </div>
    <h2 class="section-title">${q ? `Results for "${esc(q)}"` : cat ? 'Filtered restaurants' : 'Popular restaurants near you'}</h2>
    <div class="grid">
      ${list.length ? list.map(r => `
    <a class="rcard" href="#/restaurant/${r.id}">
     <div class="banner">${r.logo}</div>
     <div class="body">
      <h3>${esc(r.name)}</h3>
      <div class="meta"><span class="rating">⭐ ${r.rating}</span><span>🛵 ${esc(r.time)}</span><span>${money(r.fee)} delivery</span></div>
     </div>
    </a>`).join('') : `<div class="empty">No restaurants matched. Try a different search or category.</div>`}
    </div>
  </main>`;
}

function viewRestaurant(id) {
  const r = restaurant(id);
  if (!r)
    return `<main class="container"><p>Restaurant not found.</p></main>`;
  const items = menuOf(id);
  return `
  <section class="rheader"><div class="container" style="display:flex;gap:16px;align-items:center">
    <div class="icon">${r.logo}</div>
    <div><h1>${esc(r.name)}</h1><div class="meta" style="margin-top:6px"><span class="rating">⭐ ${r.rating}</span> &nbsp; 🛵 ${esc(r.time)} &nbsp; ${money(r.fee)} delivery fee</div><p style="color:var(--gray);margin:6px 0 0">📍 ${esc(r.loc)}</p></div>
  </div></section>
  <main class="container">
    <h2 class="section-title">Menu</h2>
    ${items.map(it => {
        const inCart = db.cart && db.cart.rid === id ? db.cart.items.find(i => i.fid === it.id) : null;
        return `<div class="food-row">
    <div class="emoji">${it.img}</div>
    <div class="info"><h4>${esc(it.name)}</h4><p>${esc(it.desc)}</p><div class="price">${money(it.price)}</div></div>
    ${inCart ? `<div class="stepper"><button onclick="changeQty('${it.id}',-1);render()">−</button><span>${inCart.qty}</span><button onclick="changeQty('${it.id}',1);render()">+</button></div>`
      : `<button class="btn btn-primary btn-sm" onclick="handleAdd('${r.id}','${it.id}')">Add to Cart</button>`}
   </div>`;
    }).join('')}
  </main>`;
}

function viewCart() {
  if (!db.cart || db.cart.items.length === 0)
    return `<main class="container"><h1 style="margin:26px 0">Your Cart</h1><div class="empty">Your cart is empty.<br><br><a class="btn btn-primary" href="#/">Browse restaurants</a></div></main>`;
  const sub = cartSubtotal(), fee = db.cart.fee, total = sub + fee;
  return `<main class="container"><h1 style="margin:26px 0">Your Cart</h1>
  <div class="two-col">
    <div>
      <p style="font-weight:600;margin-bottom:12px">Ordering from <strong>${esc(db.cart.rname)}</strong></p>
      ${db.cart.items.map(i => `
   <div class="citem"><div style="font-size:28px">${i.img}</div>
    <div class="info"><h4>${esc(i.name)}</h4><div class="sub">${money(i.price)} each</div></div>
    <div class="stepper"><button onclick="changeQty('${i.fid}',-1);render()">−</button><span>${i.qty}</span><button onclick="changeQty('${i.fid}',1);render()">+</button></div>
    <button class="rm" onclick="changeQty('${i.fid}',-999);render()">Remove</button>
   </div>`).join('')}
    </div>
    <div class="summary">
      <h3 style="margin:0 0 14px">Order Summary</h3>
      <div class="srow"><span>Subtotal</span><span>${money(sub)}</span></div>
      <div class="srow"><span>Delivery fee</span><span>${money(fee)}</span></div>
      <div class="srow total"><span>Total</span><span>${money(total)}</span></div>
      <button class="btn btn-primary btn-block" style="margin-top:14px" onclick="go('#/checkout')">Proceed to Checkout</button>
    </div>
  </div></main>`;
}

function viewCheckout() {
  if (!db.cart || db.cart.items.length === 0)
    return `<main class="container"><div class="empty" style="margin-top:26px">Your cart is empty.</div></main>`;
  const u = currentUser();
  const sub = cartSubtotal(), fee = db.cart.fee;
  return `<main class="container"><h1 style="margin:26px 0">Checkout</h1><div id="ck-alert"></div>
  <div class="two-col">
    <form id="ckform" onsubmit="submitOrder(event)">
      <div class="form-group"><label>Full name</label><input id="ck-name" required value="${esc(u?.name || '')}"></div>
      <div class="form-group"><label>Phone number</label><input id="ck-phone" required value="${esc(u?.phone || '')}"></div>
      <div class="form-group"><label>Delivery address</label><textarea id="ck-addr" required rows="2" placeholder="House/Unit No., Street, Barangay, City"></textarea></div>
      <div class="form-group"><label>Order notes (optional)</label><textarea id="ck-notes" rows="2"></textarea></div>
      <div class="form-group"><label>Payment method</label>
        <div class="pay-opts">
          <label class="pay-opt sel" id="opt-cod"><input type="radio" name="pay" value="Cash on Delivery" checked onchange="selPay('opt-cod')">💵 Cash on Delivery</label>
          <label class="pay-opt" id="opt-online"><input type="radio" name="pay" value="Online Payment" onchange="selPay('opt-online')">💳 Online Payment</label>
        </div>
      </div>
      <button class="btn btn-primary btn-block" type="submit">Place Order</button>
    </form>
    <div class="summary">
      <h3 style="margin:0 0 12px">From ${esc(db.cart.rname)}</h3>
      <ul style="padding-left:18px;font-size:13px">${db.cart.items.map(i => `<li>${i.qty}× ${esc(i.name)} — ${money(i.price * i.qty)}</li>`).join('')}</ul>
      <div class="srow"><span>Subtotal</span><span>${money(sub)}</span></div>
      <div class="srow"><span>Delivery fee</span><span>${money(fee)}</span></div>
      <div class="srow total"><span>Total</span><span>${money(sub + fee)}</span></div>
    </div>
  </div></main>`;
}

function selPay(id) { document.querySelectorAll('.pay-opt').forEach(e => e.classList.remove('sel')); document.getElementById(id).classList.add('sel'); }

function submitOrder(e) {
  e.preventDefault();
  const u = currentUser();
  const items = db.cart.items.map(i => ({ fid: i.fid, name: i.name, price: i.price, qty: i.qty }));
  const sub = cartSubtotal(), fee = db.cart.fee;
  const order = { id: uid('ord'), status: 'Pending', createdAt: new Date().toISOString(),
    customerId: u ? u.id : null, customerName: document.getElementById('ck-name').value.trim(),
    customerPhone: document.getElementById('ck-phone').value.trim(), addr: document.getElementById('ck-addr').value.trim(),
    notes: document.getElementById('ck-notes').value.trim(), rid: db.cart.rid, rname: db.cart.rname,
    items, subtotal: sub, fee, total: sub + fee, pay: document.querySelector('input[name="pay"]:checked').value };
  db.orders.push(order);
  db.cart = null;
  saveDB(db);
  go('#/confirm/' + order.id);
}

function viewConfirm(id) {
  const o = db.orders.find(x => x.id === id);
  if (!o)
    return `<main class="container"><p>Order not found.</p></main>`;
  const r = restaurant(o.rid);
  return `<main class="container"><div class="confirm-box">
    <div class="check">✓</div><h1>Order placed!</h1>
    <p style="color:var(--gray);margin-top:6px">Order #${o.id} from ${esc(o.rname)}</p>
    <div style="text-align:left;margin-top:20px">
      <ul class="olines">${o.items.map(i => `<li>${i.qty}× ${esc(i.name)} — ${money(i.price * i.qty)}</li>`).join('')}</ul>
      <div class="srow"><span>Subtotal</span><span>${money(o.subtotal)}</span></div>
      <div class="srow"><span>Delivery fee</span><span>${money(o.fee)}</span></div>
      <div class="srow total"><span>Total</span><span>${money(o.total)}</span></div>
      <div class="srow"><span>Payment</span><span>${esc(o.pay)}</span></div>
      <div class="srow"><span>Estimated delivery</span><span>${esc(r?.time || '—')}</span></div>
      <div class="srow"><span>Status</span><span class="badge b-${o.status.replace(/ /g, '-')}">${o.status}</span></div>
    </div>
    <div style="margin-top:20px;display:flex;gap:10px;justify-content:center;flex-wrap:wrap">
      <a class="btn btn-outline" href="#/">Back to home</a><a class="btn btn-primary" href="#/orders">View my orders</a>
    </div>
  </div></main>`;
}

function statusTrack(status) {
  if (status === 'Cancelled')
    return `<span class="badge b-Cancelled">Cancelled</span>`;
  const idx = STATUSES.indexOf(status);
  return `<div class="status-track">${STATUSES.slice(0, 5).map((s, i) => `<div class="dot ${i <= idx ? 'done' : ''}"></div>${i < 4 ? `<div class="seg ${i < idx ? 'done' : ''}"></div>` : ''}`).join('')}</div>
  <div class="status-labels"><span>Pending</span><span>Confirmed</span><span>Preparing</span><span>On the way</span><span>Delivered</span></div>`;
}

function viewOrders() {
  if (!requireLogin('#/orders'))
    return '';
  const u = currentUser();
  const mine = db.orders.filter(o => o.customerId === u.id).sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  return `<main class="container"><h1 style="margin:26px 0">My Orders</h1>
  ${mine.length ? mine.map(o => `
  <div class="order-card">
   <div class="otop"><div><strong>#${o.id}</strong> · ${esc(o.rname)}<div style="font-size:12px;color:var(--gray)">${new Date(o.createdAt).toLocaleString()}</div></div>
   <span class="badge b-${o.status.replace(/ /g, '-')}">${o.status}</span></div>
   ${statusTrack(o.status)}
   <ul class="olines">${o.items.map(i => `<li>${i.qty}× ${esc(i.name)}</li>`).join('')}</ul>
   <div style="font-weight:700">Total: ${money(o.total)} · ${esc(o.pay)}</div>
  </div>`).join('') : `<div class="empty">You haven't placed any orders yet.<br><br><a class="btn btn-primary" href="#/">Browse restaurants</a></div>`}
  </main>`;
}

/* ===================== Auth ===================== */

function viewLogin(params) {
  return `<main class="container"><div class="auth-card">
    <h1>Welcome back</h1><p class="hint">Log in to track orders and check out faster.</p>
    <div id="au-alert"></div>
    <form onsubmit="doLogin(event,'${esc(params.get('next') || '')}')">
      <div class="form-group"><label>Email</label><input id="lg-email" type="email" required></div>
      <div class="form-group"><label>Password</label><input id="lg-pass" type="password" required></div>
      <button class="btn btn-primary btn-block" type="submit">Log in</button>
    </form>
    <p class="switch">New to FoodGo.PH? <a href="#/register">Create an account</a></p>
    <p class="switch" style="color:var(--gray)">Demo: maria@example.com/password123 · owner@pattyrepublic.com/owner123 · admin@foodgo.ph/admin123</p>
  </div></main>`;
}

function doLogin(e, next) {
  e.preventDefault();
  const email = document.getElementById('lg-email').value.trim(), pass = document.getElementById('lg-pass').value;
  const u = db.users.find(x => x.email.toLowerCase() === email.toLowerCase() && x.password === pass);
  if (!u) {
    document.getElementById('au-alert').innerHTML = `<div class="alert alert-err">Incorrect email or password.</div>`;
    return;
  }
  db.session = u.id;
  saveDB(db);
  if (next)
    go(decodeURIComponent(next));
  else if (u.role === 'admin')
    go('#/admin');
  else if (u.role === 'owner')
    go('#/owner');
  else
    go('#/');
}

function viewRegister() {
  return `<main class="container"><div class="auth-card">
    <h1>Create your account</h1><p class="hint">Order from your favorite spots in a few taps.</p>
    <div id="au-alert"></div>
    <form onsubmit="doRegister(event)">
      <div class="form-group"><label>Full name</label><input id="rg-name" required></div>
      <div class="form-group"><label>Email</label><input id="rg-email" type="email" required></div>
      <div class="form-group"><label>Phone number</label><input id="rg-phone" required></div>
      <div class="form-group"><label>Password</label><input id="rg-pass" type="password" minlength="6" required></div>
      <button class="btn btn-primary btn-block" type="submit">Sign up</button>
    </form>
    <p class="switch">Already have an account? <a href="#/login">Log in</a></p>
  </div></main>`;
}

function doRegister(e) {
  e.preventDefault();
  const email = document.getElementById('rg-email').value.trim();
  if (db.users.some(u => u.email.toLowerCase() === email.toLowerCase())) {
    document.getElementById('au-alert').innerHTML = `<div class="alert alert-err">An account with this email already exists.</div>`;
    return;
  }
  const u = { id: uid('u'), name: document.getElementById('rg-name').value.trim(), email, phone: document.getElementById('rg-phone').value.trim(), password: document.getElementById('rg-pass').value, role: 'customer' };
  db.users.push(u);
  db.session = u.id;
  saveDB(db);
  go('#/');
}

/* ===================== Owner dashboard ===================== */
let ownerTab = 'orders';

function viewOwner() {
  if (!requireLogin('#/owner'))
    return '';
  const u = currentUser();
  if (u.role !== 'owner')
    return `<main class="container"><p>This page is only available to restaurant owners.</p></main>`;
  const r = restaurant(u.rid);
  const orders = db.orders.filter(o => o.rid === u.rid).sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  const items = menuOf(u.rid);
  return `<main class="container"><h1 style="margin:26px 0">${esc(r.name)} — Dashboard</h1>
  <div class="tabs">
    <button class="tab ${ownerTab === 'orders' ? 'active' : ''}" onclick="ownerTab='orders';render()">Incoming Orders</button>
    <button class="tab ${ownerTab === 'menu' ? 'active' : ''}" onclick="ownerTab='menu';render()">Manage Menu</button>
  </div>
  ${ownerTab === 'orders' ? (orders.length ? orders.map(o => `
  <div class="order-card">
   <div class="otop"><div><strong>#${o.id}</strong><div style="font-size:12px;color:var(--gray)">${new Date(o.createdAt).toLocaleString()}</div></div><span class="badge b-${o.status.replace(/ /g, '-')}">${o.status}</span></div>
   <p style="margin:8px 0 0;font-size:13px"><strong>Customer:</strong> ${esc(o.customerName)} · ${esc(o.customerPhone)}</p>
   <p style="margin:4px 0 0;font-size:13px"><strong>Deliver to:</strong> ${esc(o.addr)}</p>
   ${o.notes ? `<p style="margin:4px 0 0;font-size:13px"><strong>Notes:</strong> ${esc(o.notes)}</p>` : ''}
   <ul class="olines">${o.items.map(i => `<li>${i.qty}× ${esc(i.name)} — ${money(i.price * i.qty)}</li>`).join('')}</ul>
   <div style="font-weight:700">Total: ${money(o.total)} · ${esc(o.pay)}</div>
   <div class="oactions">
    ${o.status === 'Pending' ? `<button class="btn btn-sm btn-primary" onclick="setStatus('${o.id}','Confirmed')">Accept</button><button class="btn btn-sm btn-danger" onclick="setStatus('${o.id}','Cancelled')">Reject</button>` : ''}
    <select class="status-sel" onchange="setStatus('${o.id}',this.value)">${STATUSES.map(s => `<option ${s === o.status ? 'selected' : ''}>${s}</option>`).join('')}</select>
   </div>
  </div>`).join('') : `<div class="empty">No orders yet. Once customers order, they'll show up here.</div>`)
        : `<button class="btn btn-primary" style="margin-bottom:16px" onclick="openItemForm()">+ Add Food Item</button>
  <div id="item-form"></div>
  <table class="dt"><thead><tr><th></th><th>Name</th><th>Description</th><th>Price</th><th></th></tr></thead><tbody>
  ${items.map(i => `<tr><td style="font-size:20px">${i.img}</td><td>${esc(i.name)}</td><td>${esc(i.desc)}</td><td>${money(i.price)}</td>
       <td style="white-space:nowrap"><button class="btn btn-sm btn-outline" onclick="openItemForm('${i.id}')">Edit</button> <button class="btn btn-sm btn-danger" onclick="deleteItem('${i.id}')">Delete</button></td></tr>`).join('')}
  </tbody></table>`}
  </main>`;
}

function setStatus(id, status) { const o = db.orders.find(x => x.id === id); if (o) {
  o.status = status;
  saveDB(db);
  render();
} }

function openItemForm(itemId) {
  const item = itemId ? db.foodItems.find(f => f.id === itemId) : null;
  const editing = !!item;
  const u = currentUser();
  document.getElementById('item-form').innerHTML = `
  <form id="itform" class="order-card">
    <h3 style="margin:0 0 12px">${editing ? 'Edit' : 'Add'} Food Item</h3>
    <div class="form-group"><label>Emoji</label><input id="it-img" value="${editing ? item.img : '🍽️'}"></div>
    <div class="form-group"><label>Name</label><input id="it-name" required value="${editing ? esc(item.name) : ''}"></div>
    <div class="form-group"><label>Description</label><textarea id="it-desc">${editing ? esc(item.desc) : ''}</textarea></div>
    <div class="form-group"><label>Price (₱)</label><input id="it-price" type="number" min="0" step="0.01" required value="${editing ? item.price : ''}"></div>
    <div style="display:flex;gap:10px"><button class="btn btn-primary" type="submit">${editing ? 'Save Changes' : 'Add Item'}</button>
    <button class="btn btn-outline" type="button" onclick="document.getElementById('item-form').innerHTML=''">Cancel</button></div>
  </form>`;
  document.getElementById('itform').addEventListener('submit', ev => {
    ev.preventDefault();
    const vals = { img: document.getElementById('it-img').value.trim() || '🍽️', name: document.getElementById('it-name').value.trim(), desc: document.getElementById('it-desc').value.trim(), price: Number(document.getElementById('it-price').value) };
    if (editing)
      Object.assign(item, vals);
    else
      db.foodItems.push({ id: uid('f'), rid: u.rid, ...vals });
    saveDB(db);
    render();
  });
}

function deleteItem(id) { if (!confirm('Delete this food item?'))
  return; db.foodItems = db.foodItems.filter(f => f.id !== id); saveDB(db); render(); }

/* ===================== Admin dashboard ===================== */
let adminTab = 'orders';

function viewAdmin() {
  if (!requireLogin('#/admin'))
    return '';
  const u = currentUser();
  if (u.role !== 'admin')
    return `<main class="container"><p>This page is only available to FoodGo.PH admins.</p></main>`;
  const orders = db.orders.slice().sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  const sales = orders.filter(o => o.status !== 'Cancelled').reduce((s, o) => s + o.total, 0);
  const customers = db.users.filter(x => x.role === 'customer').length;
  return `<main class="container"><h1 style="margin:26px 0">Admin Dashboard</h1>
  <div class="stat-grid">
    <div class="stat"><div class="val">${orders.length}</div><div class="lab">Total Orders</div></div>
    <div class="stat"><div class="val">${customers}</div><div class="lab">Total Customers</div></div>
    <div class="stat"><div class="val">${db.restaurants.length}</div><div class="lab">Total Restaurants</div></div>
    <div class="stat"><div class="val">${money(sales)}</div><div class="lab">Total Sales</div></div>
  </div>
  <div class="tabs">
    <button class="tab ${adminTab === 'orders' ? 'active' : ''}" onclick="adminTab='orders';render()">All Orders</button>
    <button class="tab ${adminTab === 'rest' ? 'active' : ''}" onclick="adminTab='rest';render()">Restaurants</button>
  </div>
  ${adminTab === 'orders' ? `<table class="dt"><thead><tr><th>Order</th><th>Restaurant</th><th>Customer</th><th>Total</th><th>Payment</th><th>Status</th><th>Placed</th></tr></thead><tbody>
  ${orders.map(o => `<tr><td>#${o.id}</td><td>${esc(o.rname)}</td><td>${esc(o.customerName)}</td><td>${money(o.total)}</td><td>${esc(o.pay)}</td><td><span class="badge b-${o.status.replace(/ /g, '-')}">${o.status}</span></td><td>${new Date(o.createdAt).toLocaleDateString()}</td></tr>`).join('') || '<tr><td colspan="7">No orders yet.</td></tr>'}
  </tbody></table>`
        : `<table class="dt"><thead><tr><th></th><th>Name</th><th>Category</th><th>Rating</th><th>Fee</th><th>Location</th></tr></thead><tbody>
  ${db.restaurants.map(r => `<tr><td style="font-size:20px">${r.icon}</td><td>${esc(r.name)}</td><td>${esc(r.category)}</td><td>⭐ ${r.rating}</td><td>${money(r.fee)}</td><td>${esc(r.loc)}</td></tr>`).join('')}
  </tbody></table>`}
  </main>`;
}

/* ===================== Router ===================== */

function render() {
  renderNav();
  const hash = location.hash.slice(1) || '/';
  const [pathPart, queryPart] = hash.split('?');
  const params = new URLSearchParams(queryPart || '');
  const parts = pathPart.split('/').filter(Boolean);
  let html = '';
  if (parts.length === 0)
    html = viewHome(params);
  else if (parts[0] === 'restaurant')
    html = viewRestaurant(parts[1]);
  else if (parts[0] === 'cart')
    html = viewCart();
  else if (parts[0] === 'checkout')
    html = viewCheckout();
  else if (parts[0] === 'confirm')
    html = viewConfirm(parts[1]);
  else if (parts[0] === 'orders')
    html = viewOrders();
  else if (parts[0] === 'login')
    html = viewLogin(params);
  else if (parts[0] === 'register')
    html = viewRegister();
  else if (parts[0] === 'owner')
    html = viewOwner();
  else if (parts[0] === 'admin')
    html = viewAdmin();
  else
    html = `<main class="container"><p>Page not found.</p></main>`;
  document.getElementById('app').innerHTML = html;
  window.scrollTo(0, 0);
}
window.addEventListener('hashchange', render);
render();
