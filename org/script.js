// ==========================================================================
// BYREDO 앱 스켈레톤 — 최소 동작 스크립트 (구조 검증용)
// 다음 단계에서 실제 인터랙션/데이터 로직으로 교체 예정
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {

  /* -------- 히어로 배너 캐러셀 : 화살표 + 점(●○○) 인디케이터 -------- */
  const track = document.getElementById('hero-track');
  const prevBtn = document.getElementById('hero-prev');
  const nextBtn = document.getElementById('hero-next');
  const dots = Array.from(document.querySelectorAll('.hero-banner__dot'));

  if (track) {
    const slides = Array.from(track.querySelectorAll('.hero-banner__slide'));
    let activeIndex = 0;

    const setActiveDot = (index) => {
      dots.forEach((dot, i) => dot.classList.toggle('is-active', i === index));
    };

    const goTo = (index) => {
      const clamped = Math.max(0, Math.min(slides.length - 1, index));
      activeIndex = clamped;
      track.scrollTo({ left: slides[clamped].offsetLeft, behavior: 'smooth' });
      setActiveDot(clamped);
    };

    prevBtn?.addEventListener('click', () => goTo(activeIndex - 1));
    nextBtn?.addEventListener('click', () => goTo(activeIndex + 1));

    // 점 클릭으로 바로 이동
    dots.forEach((dot) => {
      dot.addEventListener('click', () => goTo(Number(dot.dataset.index)));
    });

    // 스크롤(스와이프) -> 인디케이터 동기화
    let scrollTimer = null;
    track.addEventListener('scroll', () => {
      if (scrollTimer) clearTimeout(scrollTimer);
      scrollTimer = setTimeout(() => {
        const index = Math.round(track.scrollLeft / track.clientWidth);
        activeIndex = index;
        setActiveDot(index);
      }, 80);
    });
  }

  /* -------- 앱 헤더 햄버거 메뉴 오버레이 -------- */
  const menuBtn = document.getElementById('btn-menu');
  const menuCloseBtn = document.getElementById('btn-menu-close');
  const hamburgerMenu = document.getElementById('hamburger-menu');

  if (menuBtn && hamburgerMenu) {
    menuBtn.addEventListener('click', () => {
      hamburgerMenu.classList.add('is-open');
    });
  }

  if (menuCloseBtn && hamburgerMenu) {
    menuCloseBtn.addEventListener('click', () => {
      hamburgerMenu.classList.remove('is-open');
    });
  }

  /* -------- 장바구니 화면 토글 -------- */
  const cartTriggers = document.querySelectorAll('.trigger-cart, #btn-cart-open');
  const cartBackBtn = document.getElementById('btn-cart-back');
  const homeHeader = document.getElementById('home-header');
  const homeMain = document.getElementById('home-main');
  const cartHeader = document.getElementById('cart-header');
  const cartMain = document.getElementById('cart-main');

  if (cartTriggers.length > 0 && cartBackBtn) {
    cartTriggers.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        homeHeader.style.display = 'none';
        homeMain.style.display = 'none';
        if(typeof productListMain !== 'undefined' && productListMain) productListMain.style.display = 'none';
        if(typeof productDetailMain !== 'undefined' && productDetailMain) productDetailMain.style.display = 'none';
        if(typeof mypageMain !== 'undefined' && mypageMain) mypageMain.style.display = 'none';
        if(typeof authHeader !== 'undefined' && authHeader) authHeader.style.display = 'none';
        if(typeof loginMain !== 'undefined' && loginMain) loginMain.style.display = 'none';
        if(typeof signupMain !== 'undefined' && signupMain) signupMain.style.display = 'none';
        if(typeof aboutMain !== 'undefined' && aboutMain) aboutMain.style.display = 'none';
        if(typeof wishlistMain !== 'undefined' && wishlistMain) wishlistMain.style.display = 'none';
        if(typeof reviewMain !== 'undefined' && reviewMain) reviewMain.style.display = 'none';
        if(typeof quizMain !== 'undefined' && quizMain) quizMain.style.display = 'none';

        cartHeader.style.display = 'flex';
        cartMain.style.display = 'block';
        if(typeof hMenu !== 'undefined' && hMenu) hMenu.classList.remove('is-open');
      });
    });

    cartBackBtn.addEventListener('click', () => {
      cartHeader.style.display = 'none';
      cartMain.style.display = 'none';
      homeHeader.style.display = 'flex';
      homeMain.style.display = 'block';
    });
  }

  /* -------- 결제 화면 토글 -------- */
  const checkoutBtn = document.getElementById('btn-checkout');
  const checkoutBackBtn = document.getElementById('btn-checkout-back');
  const checkoutHeader = document.getElementById('checkout-header');
  const checkoutMain = document.getElementById('checkout-main');

  if (checkoutBtn && checkoutBackBtn) {
    checkoutBtn.addEventListener('click', () => {
      cartHeader.style.display = 'none';
      cartMain.style.display = 'none';
      checkoutHeader.style.display = 'flex';
      checkoutMain.style.display = 'block';
    });

    checkoutBackBtn.addEventListener('click', () => {
      checkoutHeader.style.display = 'none';
      checkoutMain.style.display = 'none';
      cartHeader.style.display = 'flex';
      cartMain.style.display = 'block';
    });
  }

  /* -------- 결제하기 버튼 → 주문 완료 화면 -------- */
  const btnPay = document.querySelector('.btn-pay');
  const orderCompleteHeader = document.getElementById('order-complete-header');
  const orderCompleteMain = document.getElementById('order-complete-main');
  const btnOrderCompleteBack = document.getElementById('btn-order-complete-back');
  const btnContinueShopping = document.getElementById('btn-continue-shopping');

  function hideAllScreens() {
    if(homeHeader) homeHeader.style.display = 'none';
    if(homeMain) homeMain.style.display = 'none';
    if(cartHeader) cartHeader.style.display = 'none';
    if(cartMain) cartMain.style.display = 'none';
    if(checkoutHeader) checkoutHeader.style.display = 'none';
    if(checkoutMain) checkoutMain.style.display = 'none';
    if(orderCompleteHeader) orderCompleteHeader.style.display = 'none';
    if(orderCompleteMain) orderCompleteMain.style.display = 'none';
    const _pl = document.getElementById('product-list-main');
    const _pd = document.getElementById('product-detail-main');
    const _mp = document.getElementById('mypage-main');
    const _ab = document.getElementById('about-main');
    const _wl = document.getElementById('wishlist-main');
    const _rv = document.getElementById('review-main');
    const _wr = document.getElementById('write-review-main');
    const _qz = document.getElementById('quiz-main');
    const _ah = document.getElementById('auth-header');
    const _lm = document.getElementById('login-main');
    const _sm = document.getElementById('signup-main');
    if(_pl) _pl.style.display = 'none';
    if(_pd) _pd.style.display = 'none';
    if(_mp) _mp.style.display = 'none';
    if(_ab) _ab.style.display = 'none';
    if(_wl) _wl.style.display = 'none';
    if(_rv) _rv.style.display = 'none';
    if(_wr) _wr.style.display = 'none';
    if(_qz) _qz.style.display = 'none';
    if(_ah) _ah.style.display = 'none';
    if(_lm) _lm.style.display = 'none';
    if(_sm) _sm.style.display = 'none';
    const _sr = document.getElementById('search-main');
    if(_sr) _sr.style.display = 'none';
    const _odh = document.getElementById('order-detail-header');
    const _odm = document.getElementById('order-detail-main');
    if(_odh) _odh.style.display = 'none';
    if(_odm) _odm.style.display = 'none';
    
    const _och = document.getElementById('order-cancel-header');
    const _ocm = document.getElementById('order-cancel-main');
    const _occm = document.getElementById('order-cancel-complete-main');
    if(_och) _och.style.display = 'none';
    if(_ocm) _ocm.style.display = 'none';
    if(_occm) _occm.style.display = 'none';
    
    const _olh = document.getElementById('order-list-header');
    const _olm = document.getElementById('order-list-main');
    if(_olh) _olh.style.display = 'none';
    if(_olm) _olm.style.display = 'none';
  }



  if (btnPay && orderCompleteHeader && orderCompleteMain) {
    btnPay.addEventListener('click', () => {
      // 주문번호 생성 (예: BRD-YYYYMMDD-NNN)
      const now = new Date();
      const ymd = now.getFullYear().toString() +
        String(now.getMonth() + 1).padStart(2, '0') +
        String(now.getDate()).padStart(2, '0');
      const seq = String(Math.floor(Math.random() * 900) + 100);
      const orderNumber = `BRD-${ymd}-${seq}`;

      // 결제금액 동기화
      const totalAmountEl = document.querySelector('.checkout-summary__total strong');
      const ocTotalEl = document.getElementById('oc-total-amount');
      if (totalAmountEl && ocTotalEl) {
        const raw = totalAmountEl.textContent.replace('₩', '').trim();
        ocTotalEl.textContent = '₩ ' + raw;
      }

      // 주문번호 표시
      const ocOrderNumberEl = document.getElementById('oc-order-number');
      if (ocOrderNumberEl) ocOrderNumberEl.textContent = orderNumber;

      // 배송 주소 동기화 (checkout 폼의 주소 인풋에서 가져옴)
      const addrInputs = document.querySelectorAll('.checkout-form input[type="text"]');
      const phoneInput = document.querySelector('.checkout-form input[value="010-1234-5678"]');
      const ocAddressEl = document.getElementById('oc-address');
      if (ocAddressEl && addrInputs.length >= 4) {
        // 4번째 인풋 = 상세 주소, 3번째 인풋 = 기본 주소
        const baseAddr = addrInputs[2]?.value || '서울특별시 강남구 도산대로 45길 10-5';
        const detailAddr = addrInputs[3]?.value || '바이레도 플래그십 스토어 앞';
        const phone = phoneInput?.value || '02-1234-5678';
        const addrLine = baseAddr.replace('서울특별시', '서울').replace('강남구 ', '강남구 ');
        ocAddressEl.innerHTML = `${addrLine}<br>${detailAddr || '바이레도 플래그십 스토어 앞'}<br>${phone}`;
      }

      // 화면 전환
      hideAllScreens();
      orderCompleteHeader.style.display = 'flex';
      orderCompleteMain.style.display = 'flex';
      orderCompleteMain.scrollTop = 0;
    });
  }

  // 주문완료 뒤로가기 → 결제 화면
  if (btnOrderCompleteBack && orderCompleteHeader && orderCompleteMain) {
    btnOrderCompleteBack.addEventListener('click', () => {
      orderCompleteHeader.style.display = 'none';
      orderCompleteMain.style.display = 'none';
      if(checkoutHeader) checkoutHeader.style.display = 'flex';
      if(checkoutMain) checkoutMain.style.display = 'block';
    });
  }

  // 쇼핑 계속하기 → 홈
  if (btnContinueShopping && orderCompleteHeader && orderCompleteMain) {
    btnContinueShopping.addEventListener('click', () => {
      orderCompleteHeader.style.display = 'none';
      orderCompleteMain.style.display = 'none';
      if(homeHeader) homeHeader.style.display = 'flex';
      if(homeMain) {
        homeMain.style.display = 'block';
        homeMain.scrollTop = 0;
      }
    });
  }


  /* -------- 상품 목록 화면 토글 -------- */
  const productListTriggers = document.querySelectorAll('.trigger-product-list');
  const productListMain = document.getElementById('product-list-main');
  // hamburger menu elements to close menu if opened from there
  const hMenu = document.getElementById('hamburger-menu');

  if (productListMain) {
    productListTriggers.forEach(trigger => {
      trigger.addEventListener('click', (e) => {
        e.preventDefault();
        // Hide other screens
        homeMain.style.display = 'none';
        if(cartHeader) cartHeader.style.display = 'none';
        if(cartMain) cartMain.style.display = 'none';
        if(checkoutHeader) checkoutHeader.style.display = 'none';
        if(checkoutMain) checkoutMain.style.display = 'none';
        if(productDetailMain) productDetailMain.style.display = 'none';
        if(mypageMain) mypageMain.style.display = 'none';
        if(authHeader) authHeader.style.display = 'none';
        if(loginMain) loginMain.style.display = 'none';
        if(signupMain) signupMain.style.display = 'none';
        if(aboutMain) aboutMain.style.display = 'none';
        if(wishlistMain) wishlistMain.style.display = 'none';
        if(reviewMain) reviewMain.style.display = 'none';

        // Show header and product list
        homeHeader.style.display = 'flex';
        productListMain.style.display = 'block';

        // Close hamburger if it was open
        if (hMenu) {
          hMenu.classList.remove('is-open');
        }

        // Scroll to top
        productListMain.scrollTop = 0;
      });
    });
  }

  /* -------- HOME 탭 버튼으로 홈 화면 복귀 -------- */
  const tabHome = document.querySelector('.bottom-tabbar__item:first-child');
  if (tabHome) {
    tabHome.addEventListener('click', (e) => {
      e.preventDefault();
      // Hide other screens
      if(cartHeader) cartHeader.style.display = 'none';
      if(cartMain) cartMain.style.display = 'none';
      if(checkoutHeader) checkoutHeader.style.display = 'none';
      if(checkoutMain) checkoutMain.style.display = 'none';
      if(productListMain) productListMain.style.display = 'none';
      if(productDetailMain) productDetailMain.style.display = 'none';
      if(mypageMain) mypageMain.style.display = 'none';
      if(authHeader) authHeader.style.display = 'none';
      if(loginMain) loginMain.style.display = 'none';
      if(signupMain) signupMain.style.display = 'none';
      if(aboutMain) aboutMain.style.display = 'none';
      if(wishlistMain) wishlistMain.style.display = 'none';
      if(reviewMain) reviewMain.style.display = 'none';
      if(quizMain) quizMain.style.display = 'none';
      const _wrMain = document.getElementById('write-review-main');
      if(_wrMain) _wrMain.style.display = 'none';
      const _odh = document.getElementById('order-detail-header');
      const _odm = document.getElementById('order-detail-main');
      if(_odh) _odh.style.display = 'none';
      if(_odm) _odm.style.display = 'none';


      // Show home header and home main
      homeHeader.style.display = 'flex';
      homeMain.style.display = 'block';
      homeMain.scrollTop = 0;
    });
  }

  /* -------- 마이페이지 화면 토글 -------- */
  const mypageTriggers = document.querySelectorAll('.trigger-mypage');
  const mypageMain = document.getElementById('mypage-main');

  if (mypageMain) {
    mypageTriggers.forEach(trigger => {
      trigger.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Hide other screens
        homeMain.style.display = 'none';
        if(cartHeader) cartHeader.style.display = 'none';
        if(cartMain) cartMain.style.display = 'none';
        if(checkoutHeader) checkoutHeader.style.display = 'none';
        if(checkoutMain) checkoutMain.style.display = 'none';
        if(productListMain) productListMain.style.display = 'none';
        if(productDetailMain) productDetailMain.style.display = 'none';
        if(authHeader) authHeader.style.display = 'none';
        if(loginMain) loginMain.style.display = 'none';
        if(signupMain) signupMain.style.display = 'none';
        if(aboutMain) aboutMain.style.display = 'none';
        if(wishlistMain) wishlistMain.style.display = 'none';
        if(reviewMain) reviewMain.style.display = 'none';
        if(quizMain) quizMain.style.display = 'none';
        const _gm = document.getElementById('google-main');
        const _km = document.getElementById('kakao-main');
        if(_gm) _gm.style.display = 'none';
        if(_km) _km.style.display = 'none';

        // Show header and mypage
        homeHeader.style.display = 'flex';
        mypageMain.style.display = 'block';

        // Close hamburger if it was open
        if (hMenu) {
          hMenu.classList.remove('is-open');
        }

        // Scroll to top
        mypageMain.scrollTop = 0;
      });
    });
  }

  /* -------- 상품 상세 화면 토글 및 기능 -------- */
  const productDetailTriggers = document.querySelectorAll('.trigger-product-detail');
  const productDetailMain = document.getElementById('product-detail-main');

  if (productDetailMain) {
    productDetailTriggers.forEach(trigger => {
      trigger.addEventListener('click', (e) => {
        // 위시리스트 삭제, 장바구니 삭제 등 버튼 클릭 시 상세 화면 진입 무시
        if (e.target.closest('.wishlist-item-remove') || e.target.closest('.cart-item__remove') || e.target.closest('.cart-item__qty') || e.target.closest('.btn-add-cart')) return;
        
        e.preventDefault();
        
        // Hide other screens
        homeMain.style.display = 'none';
        if(cartHeader) cartHeader.style.display = 'none';
        if(cartMain) cartMain.style.display = 'none';
        if(checkoutHeader) checkoutHeader.style.display = 'none';
        if(checkoutMain) checkoutMain.style.display = 'none';
        if(productListMain) productListMain.style.display = 'none';
        if(mypageMain) mypageMain.style.display = 'none';
        if(authHeader) authHeader.style.display = 'none';
        if(loginMain) loginMain.style.display = 'none';
        if(signupMain) signupMain.style.display = 'none';
        if(aboutMain) aboutMain.style.display = 'none';
        if(wishlistMain) wishlistMain.style.display = 'none';
        if(reviewMain) reviewMain.style.display = 'none';
        if(quizMain) quizMain.style.display = 'none';

        // Show header and product detail
        homeHeader.style.display = 'flex';
        productDetailMain.style.display = 'block';

        // Scroll to top
        productDetailMain.scrollTop = 0;
      });
    });

    // Size Selection
    const sizeBtns = productDetailMain.querySelectorAll('.product-detail-options__sizes button');
    sizeBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        sizeBtns.forEach(b => b.classList.remove('is-active'));
        btn.classList.add('is-active');
      });
    });

    // Quantity Increment/Decrement
    const qtyMinus = productDetailMain.querySelector('.qty-btn-minus');
    const qtyPlus = productDetailMain.querySelector('.qty-btn-plus');
    const qtyVal = productDetailMain.querySelector('.qty-val');
    
    if (qtyMinus && qtyPlus && qtyVal) {
      qtyMinus.addEventListener('click', () => {
        let current = parseInt(qtyVal.textContent, 10);
        if (current > 1) {
          qtyVal.textContent = current - 1;
        }
      });
      qtyPlus.addEventListener('click', () => {
        let current = parseInt(qtyVal.textContent, 10);
        qtyVal.textContent = current + 1;
      });
    }

    // Sync to Cart
    const addToCartBtn = productDetailMain.querySelector('.btn-action--cart');
    const buyNowBtn = productDetailMain.querySelector('.btn-action--buy');
    
    function syncCartData() {
      const selectedSizeBtn = productDetailMain.querySelector('.product-detail-options__sizes button.is-active');
      const cartSizeEl = document.querySelector('.cart-main .cart-item:first-child .cart-item__option-select');
      const cartQtyEl = document.querySelector('.cart-main .cart-item:first-child .cart-qty__val');
      
      if (cartSizeEl && selectedSizeBtn) {
        cartSizeEl.value = selectedSizeBtn.textContent;
      }
      if (cartQtyEl && qtyVal) {
        cartQtyEl.textContent = qtyVal.textContent;
      }
      
      const productNameEl = productDetailMain.querySelector('.product-detail-info__title');
      const productPriceEl = productDetailMain.querySelector('.product-detail-info__price');
      const productImgEl = productDetailMain.querySelector('.product-detail-hero img');
      const cartNameEl = document.querySelector('.cart-main .cart-item:first-child .cart-item__name');
      const cartPriceEl = document.querySelector('.cart-main .cart-item:first-child .cart-item__price');
      const cartImgEl = document.querySelector('.cart-main .cart-item:first-child .cart-item__img img');
      
      if (productNameEl && cartNameEl) {
        cartNameEl.textContent = productNameEl.textContent;
      }
      if (productPriceEl && cartPriceEl) {
        cartPriceEl.textContent = productPriceEl.textContent;
      }
      if (productImgEl && cartImgEl) {
        cartImgEl.src = productImgEl.src;
        cartImgEl.alt = productImgEl.alt;
      }

      // 갱신 후 장바구니 총 금액 다시 계산
      if (typeof updateCartTotal === 'function') updateCartTotal();

      // Sync Gift Message
      const giftToggle = productDetailMain.querySelector('#gift-toggle');
      const giftTextarea = productDetailMain.querySelector('.gift-box__content textarea');
      const cartGiftEl = document.querySelector('.cart-main .cart-item:first-child .cart-gift');
      if (cartGiftEl) {
        if (giftToggle && giftToggle.checked && giftTextarea && giftTextarea.value.trim()) {
          cartGiftEl.classList.add('added');
          cartGiftEl.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="8" width="18" height="14" rx="2"/><path d="M12 8v14M8 8V6a2 2 0 114 0v2M12 8V6a2 2 0 114 0v2"/></svg>
                <div>
                  <span class="cart-gift__label">GIFT MESSAGE ADDED</span>
                  <p class="cart-gift__text">"${giftTextarea.value}"</p>
                </div>`;
        } else {
          cartGiftEl.classList.remove('added');
          cartGiftEl.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="8" width="18" height="14" rx="2"/><path d="M12 8v14M8 8V6a2 2 0 114 0v2M12 8V6a2 2 0 114 0v2"/></svg>
                <span class="cart-gift__add">ADD GIFT MESSAGE</span>`;
        }
      }
    }

    if (addToCartBtn) {
      addToCartBtn.addEventListener('click', syncCartData);
    }
    if (buyNowBtn) {
      buyNowBtn.addEventListener('click', syncCartData);
    }

    // Accordion Toggle
    const accordions = productDetailMain.querySelectorAll('.accordion-header');
    accordions.forEach(acc => {
      acc.addEventListener('click', () => {
        acc.parentElement.classList.toggle('is-expanded');
      });
    });

    // Gift Message Toggle
    const giftToggle = document.getElementById('gift-toggle');
    const giftTextarea = productDetailMain.querySelector('.gift-box__content textarea');
    if (giftToggle && giftTextarea) {
      giftToggle.addEventListener('change', (e) => {
        if (e.target.checked) {
          giftTextarea.disabled = false;
        } else {
          giftTextarea.disabled = true;
          giftTextarea.value = '';
        }
      });
    }

    // Buy Now Button -> Checkout Screen
    const btnBuy = productDetailMain.querySelector('.btn-action--buy');
    if (btnBuy) {
      btnBuy.addEventListener('click', (e) => {
        e.preventDefault();
        productDetailMain.style.display = 'none';
        homeHeader.style.display = 'none';
        if(checkoutHeader) checkoutHeader.style.display = 'flex';
        if(checkoutMain) checkoutMain.style.display = 'block';
        if(checkoutMain) checkoutMain.scrollTop = 0;
      });
    }
  }

  /* -------- 인증(로그인/회원가입) 화면 토글 및 기능 -------- */
  const loginTriggers = document.querySelectorAll('.trigger-login');
  const authHeader = document.getElementById('auth-header');
  const loginMain = document.getElementById('login-main');
  const signupMain = document.getElementById('signup-main');
  const btnAuthClose = document.getElementById('btn-auth-close');
  const btnGoSignup = document.getElementById('btn-go-signup');
  const btnGoLogin = document.getElementById('btn-go-login');
  const btnLoginSubmit = document.getElementById('btn-login-submit');
  const btnSignupSubmit = document.getElementById('btn-signup-submit');

  const googleMain = document.getElementById('google-main');
  const kakaoMain = document.getElementById('kakao-main');

  const showAuthFlow = (targetMain) => {
    // Hide other screens
    homeMain.style.display = 'none';
    if(homeHeader) homeHeader.style.display = 'none';
    if(cartHeader) cartHeader.style.display = 'none';
    if(cartMain) cartMain.style.display = 'none';
    if(checkoutHeader) checkoutHeader.style.display = 'none';
    if(checkoutMain) checkoutMain.style.display = 'none';
    if(productListMain) productListMain.style.display = 'none';
    if(productDetailMain) productDetailMain.style.display = 'none';
    if(mypageMain) mypageMain.style.display = 'none';
    if(loginMain) loginMain.style.display = 'none';
    if(signupMain) signupMain.style.display = 'none';
    if(aboutMain) aboutMain.style.display = 'none';
    if(wishlistMain) wishlistMain.style.display = 'none';
    if(reviewMain) reviewMain.style.display = 'none';
    if(quizMain) quizMain.style.display = 'none';
    if(googleMain) googleMain.style.display = 'none';
    if(kakaoMain) kakaoMain.style.display = 'none';

    // Show auth header and target main
    if(authHeader) authHeader.style.display = 'flex';
    if(targetMain) {
      targetMain.style.display = 'block';
      targetMain.scrollTop = 0;
    }
  };

  const closeAuthFlow = () => {
    if(authHeader) authHeader.style.display = 'none';
    if(loginMain) loginMain.style.display = 'none';
    if(signupMain) signupMain.style.display = 'none';
    if(googleMain) googleMain.style.display = 'none';
    if(kakaoMain) kakaoMain.style.display = 'none';
    
    // Show home
    if(homeHeader) homeHeader.style.display = 'flex';
    homeMain.style.display = 'block';
    homeMain.scrollTop = 0;
  };

  if (authHeader) {
    loginTriggers.forEach(trigger => {
      trigger.addEventListener('click', (e) => {
        e.preventDefault();
        showAuthFlow(loginMain);
        
        // Close hamburger if it was open
        if (hMenu) {
          hMenu.classList.remove('is-open');
        }
      });
    });

    if (btnAuthClose) {
      btnAuthClose.addEventListener('click', (e) => {
        e.preventDefault();
        closeAuthFlow();
      });
    }

    if (btnGoSignup) {
      btnGoSignup.addEventListener('click', (e) => {
        e.preventDefault();
        if(loginMain) loginMain.style.display = 'none';
        if(signupMain) {
          signupMain.style.display = 'block';
          signupMain.scrollTop = 0;
        }
      });
    }

    if (btnGoLogin) {
      btnGoLogin.addEventListener('click', (e) => {
        e.preventDefault();
        if(signupMain) signupMain.style.display = 'none';
        if(loginMain) {
          loginMain.style.display = 'block';
          loginMain.scrollTop = 0;
        }
      });
    }

    // Submit actions (Login / Sign up) -> Go to home
    const authForms = document.querySelectorAll('.auth-form');
    authForms.forEach(form => {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        closeAuthFlow();
      });
    });

    // Google 버튼 -> 구글 온보딩 화면
    const googleBtn = document.querySelector('.auth-btn--google');
    if (googleBtn && googleMain) {
      googleBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if(loginMain) loginMain.style.display = 'none';
        if(signupMain) signupMain.style.display = 'none';
        if(authHeader) authHeader.style.display = 'flex';
        googleMain.style.display = 'flex';
        googleMain.scrollTop = 0;
      });
    }

    // Kakao 버튼 -> 카카오 온보딩 화면
    const kakaoBtn = document.querySelector('.auth-btn--kakao');
    if (kakaoBtn && kakaoMain) {
      kakaoBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if(loginMain) loginMain.style.display = 'none';
        if(signupMain) signupMain.style.display = 'none';
        if(authHeader) authHeader.style.display = 'flex';
        kakaoMain.style.display = 'flex';
        kakaoMain.scrollTop = 0;
      });
    }

    // 카카오 전체 동의 체크박스 연동
    const kakaoAgreeAll = document.getElementById('kakao-agree-all');
    const kakaoItems = document.querySelectorAll('.kakao-agree-item');
    if (kakaoAgreeAll) {
      kakaoAgreeAll.addEventListener('change', () => {
        kakaoItems.forEach(item => { item.checked = kakaoAgreeAll.checked; });
      });
      kakaoItems.forEach(item => {
        item.addEventListener('change', () => {
          kakaoAgreeAll.checked = [...kakaoItems].every(i => i.checked);
        });
      });
    }

    // 구글 전체 동의 체크박스 연동
    const googleAgreeAll = document.getElementById('google-agree-all');
    const googleItems = document.querySelectorAll('.google-agree-item');
    if (googleAgreeAll) {
      googleAgreeAll.addEventListener('change', () => {
        googleItems.forEach(item => { item.checked = googleAgreeAll.checked; });
      });
      googleItems.forEach(item => {
        item.addEventListener('change', () => {
          googleAgreeAll.checked = [...googleItems].every(i => i.checked);
        });
      });
    }
  }

  /* -------- 브랜드 스토리 화면 토글 -------- */
  const aboutTriggers = document.querySelectorAll('.trigger-about');
  const aboutMain = document.getElementById('about-main');

  if (aboutMain) {
    aboutTriggers.forEach(trigger => {
      trigger.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Hide other screens
        homeMain.style.display = 'none';
        if(cartHeader) cartHeader.style.display = 'none';
        if(cartMain) cartMain.style.display = 'none';
        if(checkoutHeader) checkoutHeader.style.display = 'none';
        if(checkoutMain) checkoutMain.style.display = 'none';
        if(productListMain) productListMain.style.display = 'none';
        if(productDetailMain) productDetailMain.style.display = 'none';
        if(mypageMain) mypageMain.style.display = 'none';
        if(authHeader) authHeader.style.display = 'none';
        if(loginMain) loginMain.style.display = 'none';
        if(signupMain) signupMain.style.display = 'none';
        if(wishlistMain) wishlistMain.style.display = 'none';
        if(reviewMain) reviewMain.style.display = 'none';
        if(quizMain) quizMain.style.display = 'none';

        // Show header and about main
        homeHeader.style.display = 'flex';
        aboutMain.style.display = 'block';

        // Close hamburger if it was open
        if (hMenu) {
          hMenu.classList.remove('is-open');
        }

        // Scroll to top
        aboutMain.scrollTop = 0;
      });
    });
  }

  /* -------- 위시리스트 화면 토글 -------- */
  const wishlistTriggers = document.querySelectorAll('.trigger-wishlist');
  const wishlistMain = document.getElementById('wishlist-main');

  if (wishlistMain) {
    wishlistTriggers.forEach(trigger => {
      trigger.addEventListener('click', (e) => {
        e.preventDefault();
        
        homeMain.style.display = 'none';
        if(cartHeader) cartHeader.style.display = 'none';
        if(cartMain) cartMain.style.display = 'none';
        if(checkoutHeader) checkoutHeader.style.display = 'none';
        if(checkoutMain) checkoutMain.style.display = 'none';
        if(productListMain) productListMain.style.display = 'none';
        if(productDetailMain) productDetailMain.style.display = 'none';
        if(mypageMain) mypageMain.style.display = 'none';
        if(authHeader) authHeader.style.display = 'none';
        if(loginMain) loginMain.style.display = 'none';
        if(signupMain) signupMain.style.display = 'none';
        if(aboutMain) aboutMain.style.display = 'none';
        if(reviewMain) reviewMain.style.display = 'none';
        if(quizMain) quizMain.style.display = 'none';

        homeHeader.style.display = 'flex';
        wishlistMain.style.display = 'block';
        if (hMenu) hMenu.classList.remove('is-open');
        wishlistMain.scrollTop = 0;
      });
    });
  }

  /* -------- 리뷰 화면 토글 -------- */
  const reviewTriggers = document.querySelectorAll('.trigger-review');
  const reviewMain = document.getElementById('review-main');

  if (reviewMain) {
    reviewTriggers.forEach(trigger => {
      trigger.addEventListener('click', (e) => {
        e.preventDefault();
        
        homeMain.style.display = 'none';
        if(cartHeader) cartHeader.style.display = 'none';
        if(cartMain) cartMain.style.display = 'none';
        if(checkoutHeader) checkoutHeader.style.display = 'none';
        if(checkoutMain) checkoutMain.style.display = 'none';
        if(productListMain) productListMain.style.display = 'none';
        if(productDetailMain) productDetailMain.style.display = 'none';
        if(mypageMain) mypageMain.style.display = 'none';
        if(authHeader) authHeader.style.display = 'none';
        if(loginMain) loginMain.style.display = 'none';
        if(signupMain) signupMain.style.display = 'none';
        if(aboutMain) aboutMain.style.display = 'none';
        if(wishlistMain) wishlistMain.style.display = 'none';
        if(quizMain) quizMain.style.display = 'none';

        homeHeader.style.display = 'flex';
        reviewMain.style.display = 'block';
        if (hMenu) hMenu.classList.remove('is-open');
        reviewMain.scrollTop = 0;
      });
    });
  }


  /* -------- 검색 화면 토글 -------- */
  const searchTriggers = document.querySelectorAll('.trigger-search');
  const searchMain = document.getElementById('search-main');
  const searchInput = document.querySelector('.search-input');
  const searchClear = document.querySelector('.search-clear');

  if (searchMain) {
    searchTriggers.forEach(trigger => {
      trigger.addEventListener('click', (e) => {
        e.preventDefault();
        
        hideAllScreens();

        homeHeader.style.display = 'flex';
        searchMain.style.display = 'flex';
        if (hMenu) hMenu.classList.remove('is-open');
        searchMain.scrollTop = 0;
        if(searchInput) searchInput.focus();
      });
    });

    if (searchClear && searchInput) {
      searchClear.addEventListener('click', () => {
        searchInput.value = '';
        searchInput.focus();
      });
    }
  }

  /* -------- 주문 상세 화면 토글 -------- */
  const orderDetailHeader = document.getElementById('order-detail-header');
  const orderDetailMain = document.getElementById('order-detail-main');
  const btnOrderDetailBack = document.getElementById('btn-order-detail-back');
  const btnOrderDetailList = document.getElementById('btn-order-detail-list');

  function showOrderDetail() {
    hideAllScreens();
    if(orderDetailHeader) orderDetailHeader.style.display = 'flex';
    if(orderDetailMain) {
      orderDetailMain.style.display = 'flex';
      orderDetailMain.scrollTop = 0;
    }
  }

  document.body.addEventListener('click', (e) => {
    // 공통 네비게이션 트리거
    if (e.target.closest('.trigger-home')) {
      e.preventDefault();
      hideAllScreens();
      const hm = document.getElementById('hamburger-menu');
      if(hm) hm.classList.remove('is-open');
      if(homeHeader) homeHeader.style.display = 'flex';
      if(homeMain) { homeMain.style.display = 'block'; homeMain.scrollTop = 0; }
    }
    
    if (e.target.closest('.trigger-mypage')) {
      e.preventDefault();
      hideAllScreens();
      const hm = document.getElementById('hamburger-menu');
      if(hm) hm.classList.remove('is-open');
      if(homeHeader) homeHeader.style.display = 'flex';
      const mMain = document.getElementById('mypage-main');
      if(mMain) { mMain.style.display = 'block'; mMain.scrollTop = 0; }
    }
    
    // 주문 내역 보기 화면 트리거
    if (e.target.closest('.trigger-order-list')) {
      e.preventDefault();
      hideAllScreens();
      const olHeader = document.getElementById('order-list-header');
      const olMain = document.getElementById('order-list-main');
      if(olHeader) olHeader.style.display = 'flex';
      if(olMain) {
        olMain.style.display = 'block';
        olMain.scrollTop = 0;
      }
    }
    
    // 주문 내역 화면에서 뒤로 가기
    if (e.target.closest('#btn-order-list-back')) {
      e.preventDefault();
      hideAllScreens();
      if(homeHeader) homeHeader.style.display = 'flex';
      if(document.getElementById('mypage-main')) {
        document.getElementById('mypage-main').style.display = 'block';
      }
    }

    if (e.target.closest('.trigger-order-detail') || e.target.closest('#btn-order-detail')) {
      e.preventDefault();
      showOrderDetail();
    }
    
    // 주문 취소 화면으로 진입
    if (e.target.closest('.btn-order-cancel')) {
      e.preventDefault();
      hideAllScreens();
      const cancelHeader = document.getElementById('order-cancel-header');
      const cancelMain = document.getElementById('order-cancel-main');
      if(cancelHeader) cancelHeader.style.display = 'flex';
      if(cancelMain) {
        cancelMain.style.display = 'block';
        cancelMain.scrollTop = 0;
      }
    }
    
    // 취소 화면에서 돌아가기
    if (e.target.closest('#btn-cancel-go-back')) {
      e.preventDefault();
      hideAllScreens();
      homeHeader.style.display = 'flex';
      if (document.getElementById('mypage-main')) {
        document.getElementById('mypage-main').style.display = 'block';
      }
    }
    
    // 취소 신청하기 -> 취소 완료 화면
    if (e.target.closest('#btn-cancel-submit')) {
      e.preventDefault();
      hideAllScreens();
      homeHeader.style.display = 'flex'; // 일반 헤더 표시
      const cancelComplete = document.getElementById('order-cancel-complete-main');
      if (cancelComplete) {
        cancelComplete.style.display = 'flex';
        cancelComplete.scrollTop = 0;
      }
      // 취소 상태 변경 등의 로직 (임시)
      const statusEls = document.querySelectorAll('.mypage-order-card__status');
      statusEls.forEach(el => {
        if(el.textContent.includes('배송')) {
          el.textContent = '주문 취소완료';
          el.style.color = '#e03e2d';
        }
      });
    }
  });

  if (btnOrderDetailBack) {
    btnOrderDetailBack.addEventListener('click', (e) => {
      e.preventDefault();
      hideAllScreens();
      // 돌아가기 기본 동작: 마이페이지로
      homeHeader.style.display = 'flex';
      if(mypageMain) {
        mypageMain.style.display = 'block';
        mypageMain.scrollTop = 0;
      }
    });
  }

  if (btnOrderDetailList) {
    btnOrderDetailList.addEventListener('click', (e) => {
      e.preventDefault();
      hideAllScreens();
      homeHeader.style.display = 'flex';
      if(mypageMain) {
        mypageMain.style.display = 'block';
        mypageMain.scrollTop = 0;
      }
    });
  }

  /* -------- 리뷰 작성 화면 -------- */
  const writeReviewMain = document.getElementById('write-review-main');
  const btnWriteReview = document.getElementById('btn-write-review');
  const btnSubmitReview = document.getElementById('btn-submit-review');
  const wrStars = document.querySelectorAll('.wr-star');
  const wrTextarea = document.getElementById('wr-textarea');

  let wrSelectedRating = 4; // 초기 기본 별점 (시안: 4점)

  // 별점 렌더링 함수
  function renderStars(rating, isHover) {
    wrStars.forEach((star, i) => {
      star.classList.remove('is-active', 'is-hover');
      if (isHover) {
        if (i < rating) star.classList.add('is-hover');
      } else {
        if (i < rating) star.classList.add('is-active');
      }
    });
  }

  // 초기 별점 렌더링 (4점)
  renderStars(wrSelectedRating, false);

  // 별점 호버
  wrStars.forEach((star) => {
    star.addEventListener('mouseenter', () => {
      renderStars(parseInt(star.dataset.value), true);
    });
    star.addEventListener('mouseleave', () => {
      renderStars(wrSelectedRating, false);
    });
    star.addEventListener('click', () => {
      wrSelectedRating = parseInt(star.dataset.value);
      renderStars(wrSelectedRating, false);
    });
  });

  // 리뷰 작성 화면 열기
  function showWriteReview() {
    homeMain.style.display = 'none';
    if(cartHeader) cartHeader.style.display = 'none';
    if(cartMain) cartMain.style.display = 'none';
    if(checkoutHeader) checkoutHeader.style.display = 'none';
    if(checkoutMain) checkoutMain.style.display = 'none';
    if(productListMain) productListMain.style.display = 'none';
    if(productDetailMain) productDetailMain.style.display = 'none';
    if(mypageMain) mypageMain.style.display = 'none';
    if(authHeader) authHeader.style.display = 'none';
    if(loginMain) loginMain.style.display = 'none';
    if(signupMain) signupMain.style.display = 'none';
    if(aboutMain) aboutMain.style.display = 'none';
    if(wishlistMain) wishlistMain.style.display = 'none';
    if(reviewMain) reviewMain.style.display = 'none';
    if(quizMain) quizMain.style.display = 'none';

    homeHeader.style.display = 'flex';
    if(writeReviewMain) {
      writeReviewMain.style.display = 'flex';
      writeReviewMain.scrollTop = 0;
    }
    // 폼 초기화
    wrSelectedRating = 4;
    renderStars(wrSelectedRating, false);
    if(wrTextarea) wrTextarea.value = '';
  }

  if (btnWriteReview && writeReviewMain) {
    btnWriteReview.addEventListener('click', showWriteReview);
  }

  // 리뷰 등록하기 → 목록에 실시간 추가
  if (btnSubmitReview && writeReviewMain) {
    btnSubmitReview.addEventListener('click', () => {
      const text = wrTextarea ? wrTextarea.value.trim() : '';
      if (!text) {
        wrTextarea && wrTextarea.focus();
        return;
      }

      // 별점 문자열 생성
      const filledStar = '★';
      const emptyStar = '☆';
      const starsStr = filledStar.repeat(wrSelectedRating) + emptyStar.repeat(5 - wrSelectedRating);

      // 오늘 날짜
      const now = new Date();
      const dateStr = `${now.getFullYear()}년 ${now.getMonth() + 1}월 ${now.getDate()}일`;

      // 상품명
      const productName = document.getElementById('wr-product-name')?.textContent || 'BLANCHE';
      const productImg = document.getElementById('wr-product-img')?.src || 'img/product-blanche.jpg';

      // 새 리뷰 아이템 생성
      const newItem = document.createElement('div');
      newItem.className = 'review-list-item review-list-item--new';
      newItem.innerHTML = `
        <div class="review-list-item__img">
          <img src="${productImg}" alt="${productName}">
        </div>
        <div class="review-list-item__content">
          <div class="review-list-item__top">
            <h4 class="review-list-item__name">${productName}</h4>
            <span class="review-list-item__date">${dateStr}</span>
          </div>
          <div class="review-list-item__stars">${starsStr}</div>
          <p class="review-list-item__text">${text.replace(/\n/g, '<br>')}</p>
          <div class="review-list-item__actions">
            <button>수정</button>
            <button>삭제</button>
          </div>
        </div>
      `;

      // 리뷰 목록 맨 앞에 추가
      const reviewList = document.querySelector('.review-list');
      if (reviewList) {
        reviewList.insertBefore(newItem, reviewList.firstChild);
        // 새 아이템 강조 애니메이션
        requestAnimationFrame(() => {
          newItem.style.transition = 'background 0.5s';
          newItem.style.background = '#f0f0ec';
          setTimeout(() => { newItem.style.background = ''; }, 600);
        });
      }

      // 리뷰 화면으로 복귀
      writeReviewMain.style.display = 'none';
      homeHeader.style.display = 'flex';
      if(reviewMain) {
        reviewMain.style.display = 'block';
        reviewMain.scrollTop = 0;
      }
    });
  }

  // mypage variable needs to be accessible in home tab logic,
  // Since we declared it later, wait actually we declared it below the home tab logic,
  // let's just make sure it's available. The tabHome event listener is a closure so it will pick up mypageMain correctly.


  /* -------- 향 취향 퀴즈 화면 토글 -------- */
  const quizTriggers = document.querySelectorAll('.trigger-quiz');
  const quizMain = document.getElementById('quiz-main');
  
  const btnQuizClose = document.getElementById('btn-quiz-close');
  const btnQuizStart = document.getElementById('btn-quiz-start');
  const btnQuizResult = document.getElementById('btn-quiz-result');
  const btnQuizRec = document.getElementById('btn-quiz-recommendation');
  const btnQuizRetake1 = document.getElementById('btn-quiz-retake-1');
  
  const quizStep1 = document.getElementById('quiz-step-1');
  const quizStep2 = document.getElementById('quiz-step-2');
  const quizStep3 = document.getElementById('quiz-step-3');
  const quizStep4 = document.getElementById('quiz-step-4');

  function hideAllQuizSteps() {
    if(quizStep1) quizStep1.style.display = 'none';
    if(quizStep2) quizStep2.style.display = 'none';
    if(quizStep3) quizStep3.style.display = 'none';
    if(quizStep4) quizStep4.style.display = 'none';
  }

  if (quizMain) {
    // Open Quiz
    quizTriggers.forEach(trigger => {
      trigger.addEventListener('click', (e) => {
        e.preventDefault();
        
        homeMain.style.display = 'none';
        homeHeader.style.display = 'none'; // Quiz has its own header
        if(cartHeader) cartHeader.style.display = 'none';
        if(cartMain) cartMain.style.display = 'none';
        if(checkoutHeader) checkoutHeader.style.display = 'none';
        if(checkoutMain) checkoutMain.style.display = 'none';
        if(productListMain) productListMain.style.display = 'none';
        if(productDetailMain) productDetailMain.style.display = 'none';
        if(mypageMain) mypageMain.style.display = 'none';
        if(authHeader) authHeader.style.display = 'none';
        if(loginMain) loginMain.style.display = 'none';
        if(signupMain) signupMain.style.display = 'none';
        if(aboutMain) aboutMain.style.display = 'none';
        if(wishlistMain) wishlistMain.style.display = 'none';
        if(reviewMain) reviewMain.style.display = 'none';

        quizMain.style.display = 'block';
        if (hMenu) hMenu.classList.remove('is-open');
        quizMain.scrollTop = 0;

        hideAllQuizSteps();
        if(quizStep1) quizStep1.style.display = 'flex';
      });
    });

    // Close Quiz
    if(btnQuizClose) {
      btnQuizClose.addEventListener('click', () => {
        quizMain.style.display = 'none';
        homeHeader.style.display = 'flex';
        homeMain.style.display = 'block';
      });
    }

    // Start Quiz
    if(btnQuizStart) {
      btnQuizStart.addEventListener('click', () => {
        hideAllQuizSteps();
        if(quizStep2) quizStep2.style.display = 'flex';
        quizMain.scrollTop = 0;
      });
    }

    // Show Result
    if(btnQuizResult) {
      btnQuizResult.addEventListener('click', () => {
        hideAllQuizSteps();
        if(quizStep3) quizStep3.style.display = 'flex';
        quizMain.scrollTop = 0;
      });
    }

    // Show Recommendation
    if(btnQuizRec) {
      btnQuizRec.addEventListener('click', () => {
        hideAllQuizSteps();
        if(quizStep4) quizStep4.style.display = 'block';
        quizMain.scrollTop = 0;
      });
    }

    // Retake Quiz
    if(btnQuizRetake1) {
      btnQuizRetake1.addEventListener('click', () => {
        hideAllQuizSteps();
        if(quizStep1) quizStep1.style.display = 'flex';
        quizMain.scrollTop = 0;
      });
    }
  }
  
  /* -------- 하단 탭바 활성 상태 전환 -------- */
  const tabItems = document.querySelectorAll('.bottom-tabbar__item');
  tabItems.forEach((item) => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      tabItems.forEach((i) => i.classList.remove('is-active'));
      item.classList.add('is-active');
    });
  });

  // Cart and Wishlist Interactions
  document.addEventListener('click', (e) => {
    // 1. Wishlist Remove
    if (e.target.closest('.wishlist-item-remove')) {
      e.preventDefault();
      e.stopPropagation();
      const item = e.target.closest('.product-card');
      if (item) { item.remove(); }
      const wishlistCount = document.querySelector('.wishlist-subtitle');
      if (wishlistCount) {
        const remaining = document.querySelectorAll('.wishlist-main .product-card').length;
        wishlistCount.textContent = remaining + '개 상품';
      }
    }

    // 2. Cart Remove
    if (e.target.closest('.cart-item__remove')) {
      e.preventDefault();
      e.stopPropagation();
      const item = e.target.closest('.cart-item');
      if (item) { item.remove(); }
      updateCartTotal();
    }

    // 3. Cart Qty Minus
    if (e.target.closest('.cart-qty__btn') && e.target.textContent === '−') {
      e.preventDefault();
      e.stopPropagation();
      const qtyVal = e.target.parentElement.querySelector('.cart-qty__val');
      if (qtyVal) {
        let current = parseInt(qtyVal.textContent, 10);
        if (current > 1) {
          qtyVal.textContent = current - 1;
          updateCartTotal();
        }
      }
    }

    // 4. Cart Qty Plus
    if (e.target.closest('.cart-qty__btn') && e.target.textContent === '+') {
      e.preventDefault();
      e.stopPropagation();
      const qtyVal = e.target.parentElement.querySelector('.cart-qty__val');
      if (qtyVal) {
        let current = parseInt(qtyVal.textContent, 10);
        qtyVal.textContent = current + 1;
        updateCartTotal();
      }
    }
  });

  function updateCartTotal() {
    const cartItems = document.querySelectorAll('.cart-item');
    let total = 0;
    cartItems.forEach(item => {
      if(item.style.display === 'none') return;
      const qtyStr = item.querySelector('.cart-qty__val')?.textContent || "1";
      const qty = parseInt(qtyStr, 10);
      const priceStr = item.querySelector('.cart-item__price')?.textContent || "₩70,000";
      const price = parseInt(priceStr.replace(/[^0-9]/g, ''), 10) || 70000;
      total += price * qty;
    });
    const totalStr = '₩' + total.toLocaleString();
    const finalEl = document.querySelector('.cart-summary__final strong');
    if (finalEl) finalEl.textContent = totalStr;
    const sumEl = document.querySelector('.cart-summary__totals li:first-child span:last-child');
    if (sumEl) sumEl.textContent = totalStr;

    // 체크아웃 화면 연동
    const checkoutProductContainer = document.querySelector('.checkout-section:nth-of-type(2) .checkout-product');
    if (checkoutProductContainer) {
      if (total === 0) {
        checkoutProductContainer.style.display = 'none';
      } else {
        checkoutProductContainer.style.display = 'flex';
      }
    }

    const checkoutSumEl = document.querySelector('.checkout-summary ul li:first-child span:last-child');
    if (checkoutSumEl) checkoutSumEl.textContent = totalStr;
    const checkoutTotalEl = document.querySelector('.checkout-summary__total strong');
    if (checkoutTotalEl) checkoutTotalEl.textContent = totalStr;
    const btnPay = document.querySelector('.btn-pay');
    if (btnPay) btnPay.textContent = totalStr + ' 결제하기';
  }

});
