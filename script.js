const PRODUCTS = [
  {id:'makhana-spicy', category:'Bites', sub:'Crunch', name:'Spicy Masala Makhana', price:45, size:'150 g', description:'Roasted makhana with a bold, savoury masala profile.', image:'assets/products/makhana-spicy-masala.jpg', monogram:'M'},
  {id:'makhana-cheesy', category:'Bites', sub:'Crunch', name:'Cheesy Herbs Makhana', price:45, size:'150 g', description:'Roasted makhana with a creamy, herb-led flavour.', image:'assets/products/makhana-cheesy-herbs.jpg', monogram:'M'},
  {id:'dry-fruit-powder', category:'Bites', sub:'Nut Essentials', name:'Dry Fruit Power Blend', price:129, size:'100 g', description:'Cashew, almonds, dates, groundnuts and makhana in one blend.', image:'assets/products/dry-fruit-powder.jpg', monogram:'D'},
  {id:'peanut-butter', category:'Bites', sub:'Spreads', name:'Peanut Butter', price:199, size:'200 g', description:'A rich, creamy pantry spread made for everyday moments.', image:'assets/products/peanut-butter.jpg', monogram:'P'},
  {id:'almond-butter', category:'Bites', sub:'Spreads', name:'Almond Butter', price:199, size:'200 g', description:'Smooth almond goodness for toast, bowls, blends and more.', image:'assets/products/almond-butter.jpg', monogram:'A'},
  {id:'cashew-almond-ladoo', category:'Bites', sub:'Sweet Bites', name:'Cashew & Almond Ladoos', price:325, size:'250 g', description:'A traditional-inspired sweet bite built around cashews and almonds.', image:'assets/products/cashew-almond-ladoos.jpg', monogram:'C'},
  {id:'dates-nuts-bites', category:'Bites', sub:'Sweet Bites', name:'Dates & Nuts Bites', price:325, size:'250 g', description:'Dates and nuts shaped into an easy, naturally sweet bite.', image:'assets/products/dates-nuts-bites.jpg', monogram:'D'},
  {id:'mixed-dry-fruit-rolls', category:'Bites', sub:'Sweet Bites', name:'Mixed Dry Fruit Rolls', price:325, size:'250 g', description:'A rich dry-fruit roll made for sharing or slow snacking.', image:'assets/products/mixed-dry-fruit-rolls.jpg', monogram:'R'},
  {id:'mixed-dry-fruits', category:'Bites', sub:'Crunch', name:'Mixed Dry Fruits', price:380, size:'400 g', description:'A generous everyday mix of carefully selected dry fruits.', image:'assets/products/mixed-dry-fruits.jpg', monogram:'N'},

  {id:'cashew-milk', category:'Blends', sub:'Nut Milks', name:'Cashew Milk', price:70, size:'500 ml', description:'Silky cashew-based nourishment for any time of day.', image:'assets/products/cashew-milk.jpg', monogram:'C'},
  {id:'almond-milk', category:'Blends', sub:'Nut Milks', name:'Almond Milk', price:70, size:'500 ml', description:'A smooth almond blend designed for everyday sipping.', image:'assets/products/almond-milk.jpg', monogram:'A'},
  {id:'peanut-milk', category:'Blends', sub:'Nut Milks', name:'Peanut Milk', price:70, size:'500 ml', description:'A nutty, satisfying milk made around the familiar peanut.', image:'assets/products/peanut-milk.jpg', monogram:'P'},
  {id:'makhana-milk', category:'Blends', sub:'Nut Milks', name:'Makhana Milk', price:70, size:'500 ml', description:'A modern take on makhana in a smooth drinkable blend.', image:'assets/products/makhana-milk.jpg', monogram:'M'},
  {id:'dates-nut-milk', category:'Blends', sub:'Nut Milks', name:'Dates & Nut Milk', price:70, size:'500 ml', description:'Dates and nuts blended into a naturally rounded drink.', image:'assets/products/dates-nut-milk.jpg', monogram:'D'},
  {id:'saffron-cashew-date-milkshake', category:'Blends', sub:'Milkshakes', name:'Saffron Cashew Date Milkshake', price:145, size:'250 ml', description:'A rich blend of cashew, dates and saffron-inspired warmth.', image:'assets/products/saffron-cashew-date-milkshake.jpg', monogram:'S'},
  {id:'vanilla-almond-milkshake', category:'Blends', sub:'Milkshakes', name:'Vanilla Almond Milkshake', price:145, size:'250 ml', description:'Creamy almond blend with a soft vanilla finish.', image:'assets/products/vanilla-almond-milkshake.jpg', monogram:'V'},
  {id:'vanilla-makhana-shake', category:'Blends', sub:'Milkshakes', name:'Vanilla Makhana Shake', price:145, size:'250 ml', description:'A smooth makhana blend lifted with vanilla.', image:'assets/products/vanilla-makhana-shake.jpg', monogram:'V'},
  {id:'saffron-peanut-milkshake', category:'Blends', sub:'Milkshakes', name:'Saffron Peanut Milkshake', price:145, size:'250 ml', description:'Peanut richness with a refined saffron note.', image:'assets/products/saffron-peanut-milkshake.jpg', monogram:'S'},
  {id:'masala-chaas', category:'Blends', sub:'Buttermilks', name:'Masala Chaas', price:45, size:'250 ml', description:'A savoury, spiced buttermilk-style blend for everyday refreshment.', image:'assets/products/masala-chaas.jpg', monogram:'C'},
  {id:'jeera-chaas', category:'Blends', sub:'Buttermilks', name:'Curd Base + Jeera Chaas', price:45, size:'250 ml', description:'A cumin-forward classic with a familiar savoury finish.', image:'assets/products/jeera-chaas.jpg', monogram:'J'},
  {id:'pudina-chaas', category:'Blends', sub:'Buttermilks', name:'Pudina Chaas', price:45, size:'250 ml', description:'Cooling mint notes in a savoury everyday blend.', image:'assets/products/pudina-chaas.jpg', monogram:'P'},
  {id:'shahi-cashew-almond-lassi', category:'Blends', sub:'Lassi', name:'Shahi Cashew & Almond Lassi', price:60, size:'200 ml', description:'A rich, festive-inspired lassi with cashew and almond notes.', image:'assets/products/shahi-cashew-almond-lassi.jpg', monogram:'S'},
  {id:'date-peanut-lassi', category:'Blends', sub:'Lassi', name:'Date & Peanut Lassi', price:60, size:'200 ml', description:'Dates and peanut come together in a smooth, satisfying lassi.', image:'assets/products/date-peanut-lassi.jpg', monogram:'D'}
];

function getCart(){
  try { return JSON.parse(localStorage.getItem('nutloreCart')) || []; } catch { return []; }
}
function saveCart(cart){ localStorage.setItem('nutloreCart', JSON.stringify(cart)); updateCartCount(); }
function updateCartCount(){
  const total = getCart().reduce((sum,item)=>sum+item.qty,0);
  document.querySelectorAll('[data-cart-count]').forEach(el=>el.textContent=total);
}
function money(value){return `₹${value}`}

function addToCart(id){
  const product = PRODUCTS.find(p=>p.id===id);
  if(!product) return;
  const cart=getCart();
  const existing=cart.find(i=>i.id===id);
  if(existing) existing.qty += 1; else cart.push({id,qty:1});
  saveCart(cart);
  showToast(`${product.name} added to cart`);
}
function removeFromCart(id){saveCart(getCart().filter(i=>i.id!==id)); renderCart();}
function changeQty(id, delta){
  const cart=getCart();
  const item=cart.find(i=>i.id===id);
  if(!item) return;
  item.qty += delta;
  if(item.qty<=0) return removeFromCart(id);
  saveCart(cart); renderCart();
}
function showToast(message){
  let toast=document.querySelector('.toast');
  if(!toast){toast=document.createElement('div');toast.className='toast';document.body.appendChild(toast)}
  toast.textContent=message; toast.classList.add('show');
  clearTimeout(window.__toastTimer); window.__toastTimer=setTimeout(()=>toast.classList.remove('show'),2200);
}

function imageMarkup(product){
  return `<div class="product-photo">
    <img src="${product.image}" alt="${product.name}" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.classList.remove('hidden')">
    <div class="photo-placeholder hidden"><div class="monogram">${product.monogram}</div><small>Product photo</small></div>
    <span class="product-badge">${product.sub}</span>
  </div>`;
}
function productCard(product){
  return `<article class="product-card">
    ${imageMarkup(product)}
    <div class="product-body">
      <span class="product-kicker">${product.category} / ${product.sub}</span>
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <div class="product-bottom">
        <div class="price"><strong>${money(product.price)}</strong><span>${product.size}</span></div>
        <button class="add-btn" type="button" data-add-to-cart="${product.id}">Add to cart</button>
      </div>
    </div>
  </article>`;
}
function renderShop(){
  document.querySelectorAll('[data-products-group]').forEach(el=>{
    const [category,sub]=el.dataset.productsGroup.split('|');
    el.innerHTML=PRODUCTS.filter(p=>p.category===category && p.sub===sub).map(productCard).join('');
  });
  const all=document.querySelector('[data-products-all]');
  if(all) all.innerHTML=PRODUCTS.map(productCard).join('');
}
function renderFeatured(){
  const el=document.querySelector('[data-featured-products]');
  if(!el) return;
  const ids=['makhana-spicy','almond-butter','cashew-milk'];
  el.innerHTML=ids.map(id=>productCard(PRODUCTS.find(p=>p.id===id))).join('');
}
function renderCart(){
  const mount=document.querySelector('[data-cart-items]');
  const empty=document.querySelector('[data-empty-cart]');
  if(!mount) return;
  const cart=getCart();
  if(!cart.length){
    mount.innerHTML=''; if(empty) empty.classList.remove('hidden');
    document.querySelectorAll('[data-cart-subtotal]').forEach(el=>el.textContent='₹0');
    return;
  }
  if(empty) empty.classList.add('hidden');
  let subtotal=0;
  mount.innerHTML=cart.map(item=>{
    const p=PRODUCTS.find(x=>x.id===item.id); if(!p) return '';
    subtotal += p.price*item.qty;
    return `<article class="cart-item">
      <div class="cart-thumb">
        <img src="${p.image}" alt="${p.name}" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='block'">
        <span style="display:none">${p.monogram}</span>
      </div>
      <div><p>${p.category} / ${p.sub}</p><h3>${p.name}</h3><div class="qty-controls"><button type="button" data-qty="${p.id}" data-delta="-1">−</button><span>${item.qty}</span><button type="button" data-qty="${p.id}" data-delta="1">+</button></div><br><button class="remove-btn" type="button" data-remove="${p.id}">Remove</button></div>
      <div class="cart-price">${money(p.price*item.qty)}</div>
    </article>`;
  }).join('');
  document.querySelectorAll('[data-cart-subtotal]').forEach(el=>el.textContent=money(subtotal));
}

function setupNav(){
  const menuToggle=document.querySelector('.menu-toggle');
  const nav=document.querySelector('.nav');
  if(menuToggle && nav){
    menuToggle.addEventListener('click',()=>{
      const open=nav.classList.toggle('open'); menuToggle.setAttribute('aria-expanded',String(open)); menuToggle.textContent=open?'✕':'☰';
    });
    nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{nav.classList.remove('open');menuToggle.setAttribute('aria-expanded','false');menuToggle.textContent='☰';}));
  }
  const current=location.pathname.split('/').pop() || 'index.html';
  nav?.querySelectorAll('a[data-page]').forEach(a=>{
    if(a.getAttribute('data-page')===current) a.classList.add('active');
  });
}

function setupActions(){
  document.addEventListener('click',event=>{
    const add=event.target.closest('[data-add-to-cart]'); if(add){addToCart(add.dataset.addToCart);return;}
    const remove=event.target.closest('[data-remove]'); if(remove){removeFromCart(remove.dataset.remove);return;}
    const qty=event.target.closest('[data-qty]'); if(qty){changeQty(qty.dataset.qty,Number(qty.dataset.delta));return;}
    const checkout=event.target.closest('[data-checkout]'); if(checkout){
      if(!getCart().length){showToast('Your cart is empty');return;}
      showToast('Checkout is ready to connect to your order system.');
    }
  });
}

document.querySelectorAll('[data-current-year]').forEach(el=>el.textContent=new Date().getFullYear());
document.querySelectorAll('.newsletter-form').forEach(form=>form.addEventListener('submit',event=>{
  event.preventDefault(); const email=form.querySelector('input[type="email"]'); const note=form.querySelector('.form-note'); if(!email||!note)return; note.textContent=email.validity.valid?'Thank you — welcome to Nutlore.':'Please enter a valid email address.'; if(email.validity.valid) email.value='';
}));

setupNav(); setupActions(); renderShop(); renderFeatured(); renderCart(); updateCartCount();
