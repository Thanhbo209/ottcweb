import React, { useState, useEffect } from 'react';
import Logo from '../picture/output-onlinepngtools (1).png';
import './MainPage.css';
import Modal from 'react-modal';
import ChatGPT from '../picture/gpttrainpng.webp';
import NetFlix from '../picture/netflix-transparent-netflix-free-free-png.webp';
import Canva from '../picture/1691829400logo-canva-png.png';
import CapCut from '../picture/1664284918capcut-icon-png.webp';
import TikTok from '../picture/pngimg.com - tiktok_PNG22.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import dividerImg from '../picture/gold-luxury-line-png.webp';
import Typewriter from 'typewriter-effect';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow'; // import styles for the Coverflow effect

import capCut from '../picture/Thiết kế chưa có tên.png';
import duoLingo from '../picture/duo11.png';
import youTube from '../picture/youtube1.png';
import netFlix from '../picture/netflix11.png';
import chatGpt from '../picture/chatgpt1.png';
import spoTify from '../picture/spotify1.png';
import canVa from '../picture/canva1.png';
import elSa from '../picture/elsa1.png';
import courSera from '../picture/coursera1.png';
import adoBe from '../picture/adobe1.png';
import vieOn from '../picture/ay.png';
import tikTok from '../picture/tiktoc.png';
import ScrollReveal from 'scrollreveal';
import Zalo1 from '../picture/z5673257561264_71a40834f3efbb626e3566d1fad899e0.jpg';
import Zalo2 from '../picture/z5673257602984_068d987b0dcd2a111897e2d3684f4aa6.jpg';
import Zalo3 from '../picture/z5673258688949_4b6fe0ed6adc6673c2311d724ccee89d.jpg';


const MainPage = () => {
  const [isActive, setIsActive] = useState(false);
  const handleJoinGroup = (url) => {
    
    window.open(url, '_blank');
  };
  const handleUpgrade = (url) => {
    
    window.open(url, '_blank');
  };
  const handleClick = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.sidebar ul li a');

    const onScroll = () => {
      let scrollY = window.pageYOffset;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          navLinks.forEach((link) => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(sectionId)) {
              link.classList.add('active');
            }
          });
        }
      });
    };

    window.addEventListener('scroll', onScroll);

    navLinks.forEach((link) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').slice(1);
        const targetSection = document.getElementById(targetId);
  
        targetSection.scrollIntoView({ behavior: 'smooth' });
      });
    });

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);


  useEffect(() => {
    // Chọn phần tử bằng ID
    const element = document.getElementById('content-container');
    if (element) {
      // Ghi đè padding
      element.style.padding = '0';
    }
  }, []); // Mảng phụ thuộc rỗng để chạy một lần khi component được mount
  

  useEffect(() => {
    const circle = document.querySelector('.circle');
    if (circle) {
      let textCircle = circle.innerText.split('');
      circle.innerText = '';
      textCircle.forEach((value, key) => {
        let newSpan = document.createElement('span');
        newSpan.innerText = value;
        let rotateThisSpan = (360 / textCircle.length) * (key + 1);
        newSpan.style.setProperty('--rotate', rotateThisSpan + 'deg');
        circle.appendChild(newSpan);
      });
    }

    const list = document.querySelector('.list');
    const items = document.querySelectorAll('.item');
    const prev = document.getElementById('prev');
    const next = document.getElementById('next');
    let active = 0;
    let count = 5;
    let width_item = items[active].offsetWidth;
    let leftTransform = 0;

    next.onclick = () => {
      active = active >= count - 1 ? count - 1 : active + 1;
      runCarousel();
    };

    prev.onclick = () => {
      active = active <= 0 ? 0 : active - 1;
      runCarousel();
    };

    function runCarousel() {
      prev.style.display = active === 0 ? 'none' : 'block';
      next.style.display = active === count -1 ? 'none' : 'block';
      let old_active = document.querySelector('.item.active');
      if (old_active) old_active.classList.remove('active');
      items[active].classList.add('active');
      leftTransform = width_item * (active - 2) * -1;
      list.style.transform = `translateX(${leftTransform}px)`;
    }

    runCarousel();
  }, []);

  useEffect(() => {
    ScrollReveal().reveal('#home', {
      origin: 'top',
      distance: '50px',
      duration: 1000,
      easing: 'ease-in-out',
      reset: true,
    });
    ScrollReveal().reveal('#shop', {
      origin: 'top',
      distance: '50px',
      duration: 1000,
      easing: 'ease-in-out',
      reset: true,
    });
    ScrollReveal().reveal('#contact', {
      origin: 'top',
      distance: '50px',
      duration: 1000,
      easing: 'ease-in-out',
      reset: true,
    });
  }, []);

  

  /* PRODUCT */
  const items = [
    {
      id: 'CAPCUT PRO',
      name: ' ⭐CAPCUT',
      highlightedName: 'PRO',
      image: capCut,
      options: [
        { duration: ' 1 năm / Cấp TK / MK', price: '599k' },
        { duration: '1 năm / Nâng cấp Chính Chủ ', price: '899k' },
       
      ],
      highlightColor: '#ff6347' // Example color
    },
    {
      id: 'CANVA PRO',
      name: '⭐ Canva ',
      highlightedName: 'PRO',
      highlightColor: '#31d0f0',
      image: canVa,
      options: [
        { duration: '1 năm', price: '109k' },
        { duration: '2 năm', price: '169k' },
        { duration: 'Vĩnh Viễn ', price: '199k' },
        { duration: 'Vĩnh Viễn (VIP)', price: '399k' }
      ]
    },
    {
      id: 'YOUTUBE PREMIUM',
      name: '⭐ Youtube ',
      highlightedName: 'Premium',
      highlightColor: '#4f5d5f',
      image: youTube,
      options: [
        { duration: '1 năm', price: '295k' },
        { duration: '2 năm', price: '550k' }
      ]
    },
    {
      id: 'DUOLINGO',
      name: '⭐ Duolingo ',
      highlightedName: 'Super',
      highlightColor: '#33b23f',
      image: duoLingo,
      options: [
        { duration: '1 năm', price: '279k' }
      ]
    },
    {
      id: 'NETFLIX',
      name: '⭐ Netflix',
      highlightedName: 'Riêng Tư',
      highlightColor: '#de281f',
      image: netFlix,
      options: [
        { duration: '1 tháng', price: '79k' }
      ]
    },
    {
      id: 'CHATGPT',
      name: '⭐ ChatGPT',
      highlightColor: '#3ec586',
      highlightedName: '4.0',
      image: chatGpt,
      options: [
        { duration: '3.5 (Vĩnh Viễn)', price: '49k' },
        { duration: '4.0 Plus (1 tháng)', price: '179k' }
      ]
    },
    {
      id: 'SPOTIFY PREMIUM',
      name: '⭐ Spotify ',
      highlightColor: '#29cd36',
      highlightedName: 'Premium',
      image: spoTify,
      options: [
        { duration: '1 năm', price: '229k' },
        { duration: '2 năm', price: '359k' },
        { duration: '3 năm', price: '529k' }
      ]
    },
    {
      id: 'ELSA',
      name: '⭐ Elsa ',
      highlightColor: '#e844db',
      highlightedName: 'Chính Chủ',
      image: elSa,
      options: [
        { duration: 'Pro (1 năm)', price: '459k' },
        { duration: 'Premium (1 năm)', price: '899k' }
      ]
    },
    {
      id: 'COURSERA',
      name: '⭐ Cousera',
      highlightColor: '#4478e8',
      highlightedName: 'Chính Chủ',
      image: courSera,
      options: [
        { duration: 'Plus (1 năm)', price: '799k' }
      ]
    },
    {
      id: 'ADOBE FULL',
      name: '⭐ Adobe Full App',
      image: adoBe,
      options: [
        { duration: '100GB-1TB (1 năm)', price: '789k' },
        { duration: 'Chính chủ (1 năm)', price: '999k' }
      ]
    },
    {
      id: 'VIEON',
      name: '⭐ Vieon',
      highlightColor: '#21c3d9',
      highlightedName: 'Chính Chủ',
      image: vieOn,
      options: [
        { duration: 'Vip (6 tháng)', price: '259k' },
        { duration: 'Full (1 năm)', price: '1tr399k' }
      ]
    },
    {
      id: 'TIKTOK',
      name: '⭐ Tài khoản',
      highlightColor: '#5f6768',
      highlightedName: 'TikTok',
      image: tikTok,
      options: [
        { duration: '1k Fl + TikTok Shop + LiveStream (Gốc)', price: '90k' }
      ]
    }
  ];
const [modalIsOpen, setModalIsOpen] = useState(false);
const [selectedItem, setSelectedItem] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState('');
const openModal = (item) => {
  setSelectedItem(item);
  setModalIsOpen(true);
};

const closeModal = () => {
  setModalIsOpen(false);
  setSelectedItem(null);
};
const handleOptionClick = (option) => {
  setSelectedPrice(`Giá của ${option.duration} là: ${option.price}`);
};
  

  return (
    <div className="page-container">
      <div className={`sidebar ${isActive ? 'active' : ''}`}>
        <div className="top">
          <div className="logo">
            <img src={Logo} alt="" className='w-[50px]' />
            <span className='text-xs font-bold'>ONGTRUMTOICHOI</span>
          </div>
          <i className="fa-solid fa-list" onClick={handleClick} id='btn'></i>
        </div>
        <ul>
          <li>
            <a href="#home" >
              <i className="fa-solid fa-house"></i>
              <span className='nav-items text-xs'>Trang chủ</span>
            </a>
            <span className="tooltip text-xs">Trang chủ</span>
          </li>
          <li>
            <a href="#shop">
              <i className="fa-solid fa-cart-shopping"></i>
              <span className='nav-items text-xs'>Dịch vụ</span>
            </a>
            <span className="tooltip text-xs">Dịch vụ</span>
          </li>
          <li>
            <a href="#contact">
              <i className="fa-solid fa-phone"></i>
              <span className='nav-items text-xs'>Liên hệ</span>
            </a>
            <span className="tooltip text-xs">Liên hệ</span>
          </li>
        </ul>
      </div>

      <div className="main-content">
        <div className="container-box">
          <section id='home' className='slider'>
            <div className="list">
              <div className="item">
                <img src={Canva} alt="" />
              </div>
              <div className="item">
                <img src={ChatGPT} alt="" />
              </div>
              <div className="item">
                <img src={CapCut} alt="" />
              </div>
              <div className="item">
                <img src={NetFlix} alt="" />
              </div>
              <div className="item">
                <img src={TikTok} alt="" />
              </div>
            </div>
            <div className="circle">
              DỊCH VỤ BÁN CHẠY TẠI ONGTRUMTOICHOI UY TÍN TẠO THƯƠNG HIỆU
            </div>
            <div className="content">
              <div className="font-bold text-orange-400">DỊCH VỤ</div>
              <div className="OTTC">ONGTRUMTOICHOI</div>
            
            </div>
            <div className="arrow">
              <button id='prev' className='font-bold'>←</button>
              <button id='next' className='font-bold'>→</button>
            </div>
          </section>


          <div className="divider">
        <img src={dividerImg} alt="" />
      </div>


      
          <section id='shop'>
          <h1 className='text-3xl font-bold text-center '>
           <span className='inline'>CÁC DỊCH VỤ:
          <span className="text-orange-400 ">

        <Typewriter
          options={{
            strings: ['CHATGPT', 'CANVA PRO', 'SPOTIFY', 'NETFLIX', 'YOUTUBE PREMIUM'],
            autoStart: true,
            loop: true,
            
          }}
          />
          </span>
          </span> 
      </h1>
          
      <Swiper
              modules={[Navigation, Pagination]}
              navigation
              pagination={{ clickable: true }}
              spaceBetween={20}
              slidesPerView={3}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  spaceBetween: 10
                },
                395: {
                  slidesPerView: 1,
                  spaceBetween: 10
                },
                740: {
                  slidesPerView: 1,
                  spaceBetween: 10
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 20
                }
              }}
            
            >
              {items.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="item-card" onClick={() => openModal(item)}>
                    <img src={item.image} alt={item.id} className='animate-bounce' />
                    <h3 className='product-name text-lg font-bold mt-[10px]'>
                      {item.name} <span style={{ color: item.highlightColor }}>{item.highlightedName}</span>
                    </h3>
                    <div className="product-options">
                      {item.options.map((option, index) => (
                        <div key={index} className="option-box">{option.duration}</div>
                      ))}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

          </section>


                {/* Div trang trí để ngăn cách hai section */}
      <div className="divider">
        <img src={dividerImg} alt="" />
      </div>




          <section id='contact' className='introSec'>
            <div className="items-container">

               <div className="intro-layout">
                <div className="logo-container"> <img src={Logo} alt="" className='w-[100px] h-[100px] border-solid border-[1px] border-[white] rounded-[50%] m-auto' /></div>
               
                <h3 className='font-bold text-center mt-[10px]'>Ongtrumtoichoi Shop - Bản Quyền</h3>
                <p className='text-orange-400 text-xs text-center mb-[20px] mt-[10px]'>NÂNG CẤP TRƯỚC - THANH TOÁN SAU</p>
               </div>
               
             
            </div>


               <div className="ZaloSec w-[650px] h-[600px]">
                
               
                <div className="containers">
                    <h1 className='text-black font-bold mt-[20px] text-xl'>Zalo Offficial Ongtrumtoichoi Shop</h1>
                    <p className='text-black text-xs font-thin '>Hiện tại chỉ có 3 chi nhánh Zalo</p>
                    <div className="scroll-box">
                        <div className="box-item">
                            <img src={Zalo1} alt="Zalo chi nhánh 1" />
                            <p className='font-bold mt-[20px]'>Zalo chi nhánh 3 - Ongtrumtoichoi</p>
                            <p className='text-xs font-thin mb-[20px]'>102 Thành Viên </p>
                            <button onClick={() => handleJoinGroup('https://zalo.me/g/skzvtv378')}>Vào Nhóm</button>
                        </div>
                        <div className="box-item">
                            <img src={Zalo2} alt="Zalo chi nhánh 2" />
                            <p className='font-bold mt-[20px]'>Zalo chi nhánh 2 - Ongtrumtoichoi</p>
                            <p className='text-xs font-thin mb-[20px] text-red-600'>1000 Thành Viên ( Full )</p>
                            <button onClick={() => handleJoinGroup('https://zalo.me/g/owjycn967')}>Vào Nhóm</button>
                        </div>
                        <div className="box-item">
                            <img src={Zalo3} alt="Zalo chi nhánh 3" />
                            <p className='font-bold mt-[20px]'>Zalo chi nhánh 1 - Ongtrumtoichoi</p>
                            <p className='text-xs font-thin mb-[20px]  text-red-600'>1000 Thành Viên ( Full )</p>
                            <button onClick={() => handleJoinGroup('https://zalo.me/g/hzgabm759')}>Vào Nhóm</button>
                        </div>
                    </div>
                    <button id='ZALOCONNECT' onClick={() => handleUpgrade('https://zalo.me/0965927951')} className="explore-button relative"><span>Liên hệ để nâng cấp</span> <i class="fa-solid fa-square-arrow-up-right absolute right-[20px]"></i></button>
                </div>
               </div>
          </section>
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Item Details"
            className="modal"
            overlayClassName="overlay"
          >
            {selectedItem && (
              <div>
                <button className="close-button" onClick={closeModal}>X</button>
                <img src={selectedItem.image} alt={selectedItem.id} />
                <h3 className='product-name text-lg font-bold mt-[10px]'>
                  {selectedItem.name} <span style={{ color: selectedItem.highlightColor }}>{selectedItem.highlightedName}</span>
                </h3>
                <div className="product-options">
                  {selectedItem.options.map((option, index) => (
                    <button key={index} className="option-button" onClick={() => handleOptionClick(option)}>
                      {option.duration}
                    </button>
                  ))}
                </div>
                {selectedPrice && <p className="selected-price">{selectedPrice}</p>}
                <a href='#ZALOCONNECT' className="upgrade-button" onClick={closeModal}>Nâng Cấp</a>
              </div>
            )}
          </Modal>
 

        </div>
      </div>
    </div>
  );
};

export default MainPage;
