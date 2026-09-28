import React from 'react';
import { Link } from 'react-router-dom';

export default function CTASection() {
  return (
    <section className="relative bg-white pt-10 pb-0">
      {/* Pink Background Banner Section with Texture */}
      <div 
        className="relative bg-[#D81B60] text-white pt-20 pb-28 px-6 my-10"
        style={{
          backgroundImage: "url('/assets/images/page/bg-counter.png')",
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        }}
      >
        
        {/* Top Cutting Line Image */}
        <img 
          src="/assets/images/page/couter-top.png" 
          alt="counter-top" 
          className="absolute -top-[35px] sm:-top-[40px] left-0 right-0 w-full h-[70px] sm:h-[80px] pointer-events-none z-10" 
        />

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 relative z-20">
          <div className="flex items-center gap-5">
            {/* Exact Mountain Icon Image from reference site */}
            <div className="shrink-0 flex items-center justify-center">
              <img 
                src="/assets/images/page/ready.png" 
                alt="Ready to Adventure Icon" 
                className="w-16 h-16 sm:w-20 sm:h-20 object-contain" 
              />
            </div>

            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white">
              Ready To Adventure And Enjoy Natural
            </h2>
          </div>

          <Link
            to="/contact-us"
            className="bg-white text-[#D81B60] hover:bg-gray-50 font-black text-xs uppercase tracking-wider px-7 py-3.5 rounded-md shadow-md transition-all duration-200 shrink-0"
          >
            LET,S GET STARTED
          </Link>
        </div>

        {/* Bottom Cutting Line Image */}
        <img 
          src="/assets/images/page/counter-bottom.png" 
          alt="counter-bottom" 
          className="absolute -bottom-[40px] sm:-bottom-[50px] left-0 right-0 w-full h-[70px] sm:h-[80px] pointer-events-none z-10" 
        />
      </div>

      {/* 4 Overlapping White Counter Cards */}
      <div className="max-w-7xl mx-auto px-6 -mt-20 md:-mt-24 relative z-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1: Happy Traveller */}
          <div className="tf-counter-card">
            <div className="icon-wrap">
              <svg width="85" height="78" viewBox="0 0 85 78" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_73_163)">
                  <path d="M0.0001297 62.7258V40.8836H13.8123L23.6738 56.5469V30.7932C21.8717 30.3047 20.5539 28.7854 20.5539 26.9907C20.5539 25.1959 21.8719 23.6766 23.6738 23.1882V19.6274H26.164V23.0228H34.0214L42.2742 20.2923C40.5417 19.4812 39.2295 18.1339 38.5631 16.4693L37.0245 12.6269C36.3224 10.8736 36.4162 8.97097 37.2889 7.26997C38.1617 5.56883 39.7044 4.28055 41.6335 3.64238C45.629 2.32045 50.0632 4.19982 51.5178 7.83194L52.8295 11.1081H56.9344V13.3717H53.4829C53.6137 14.5576 53.4036 15.7347 52.9075 16.8001C53.9147 16.5731 54.9711 16.6649 55.929 17.0709C56.0077 17.1043 56.0845 17.1399 56.1604 17.1769L65.7933 16.4479L69.3985 24.9877L67.0736 25.7987L64.1378 18.8444L58.2401 19.2907C58.256 19.3271 58.2726 19.363 58.2874 19.3998L66.2437 38.2462L70.9088 34.8833L67.9658 27.9121L70.2907 27.1011L73.8887 35.6241L67.2858 40.3839C68.9118 43.0765 71.0927 47.0103 67.9751 52.0045L75.2358 68.2575V71.7799H85V74.0435H0.0001297V64.9892H2.49036V71.7799H55.9091L43.2514 61.9348H18.818V59.6712H22.7718L12.3683 43.1471H2.49036V62.7258H0.0001297ZM42.4663 52.8814H37.4858V57.4085H36.2407C34.5033 57.4085 34.208 57.9361 34.082 58.1612C33.8733 58.5338 33.7961 59.0659 33.7674 59.6712H42.4661V52.8814H42.4663ZM31.8627 57.1345C32.4504 56.0851 33.5014 55.4469 34.9957 55.2293V44.618C34.9957 41.4976 37.7885 38.9591 41.2213 38.9591H49.0128L43.2766 30.034L36.6066 30.9582H26.1642V59.671H31.2763C31.3129 58.7726 31.4375 57.8938 31.8627 57.1345ZM23.0439 26.9907C23.0439 27.9303 23.885 28.6948 24.9188 28.6948H28.3347V25.2863H24.9189C23.885 25.2863 23.0439 26.051 23.0439 26.9907ZM49.1776 8.60609C48.4067 6.68069 46.3994 5.48281 44.2657 5.48281C43.674 5.48281 43.0724 5.57501 42.485 5.76923C40.0504 6.57476 38.6741 8.86534 39.1402 11.1079H50.1792L49.1776 8.60609ZM39.9726 13.3717L40.9031 15.6951C41.3776 16.8803 42.3376 17.8292 43.6063 18.3669C44.874 18.9043 46.29 18.963 47.593 18.5326L47.5977 18.5311C49.9664 17.7462 51.3333 15.5556 50.9743 13.3717H39.9726ZM55.9589 20.2021L55.9514 20.1836C55.5601 19.2061 54.367 18.7004 53.2915 20.0562L34.4603 25.2863H30.8249V28.6948H36.4177L48.098 27.0762L48.4734 29.3138L45.9247 29.6671L51.8968 38.9591H63.8777L55.9589 20.2021ZM65.5325 51.3102C68.465 47.0397 66.6045 43.949 64.9514 41.2228H41.2213C39.1617 41.2228 37.486 42.7459 37.486 44.6181V50.618H42.4664V45.7499H51.1799C51.1955 45.7499 51.2112 45.7499 51.2269 45.7499C53.9151 45.7499 57.1612 46.1462 58.5555 49.159L64.8782 62.8197H70.1189L65.1962 51.8L65.5325 51.3102ZM72.7456 68.6997L71.1301 65.0834H65.9258L68.0211 69.6105H66.1464C64.4214 69.6105 64.1195 70.1567 63.9905 70.39C63.796 70.742 63.715 71.2352 63.6809 71.7801H72.7456V68.6997ZM61.1867 71.7799C61.2292 70.9343 61.3602 70.1061 61.7654 69.3733C62.2821 68.4389 63.1513 67.8246 64.3596 67.5368L56.2599 50.0368C55.5865 48.5821 54.173 48.0135 51.2211 48.0135H51.1819H44.9563V60.2821L59.7389 71.7801L61.1867 71.7799Z" fill="currentColor"></path>
                  <path d="M7.47058 45.4106H4.98035V47.6742H7.47058V45.4106Z" fill="currentColor"></path>
                  <path d="M7.47058 49.938H4.98035V52.2016H7.47058V49.938Z" fill="currentColor"></path>
                  <path d="M54.4991 23.7441L53.6076 21.63L51.2819 22.4403L52.1734 24.5544L54.4991 23.7441Z" fill="currentColor"></path>
                  <path d="M56.2822 27.9688L55.3907 25.8546L53.0648 26.6649L53.9563 28.7791L56.2822 27.9688Z" fill="currentColor"></path>
                </g>
                <defs>
                  <clipPath id="clip0_73_163">
                    <rect width="85" height="77.2632" fill="white" transform="matrix(-1 0 0 1 85 0)"></rect>
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="text-3xl font-bold text-[#D81B60] mb-1">
              5,489
            </div>
            <div className="w-10 border-b-2 border-dotted border-[#D81B60] my-2"></div>
            <div className="text-[#081e2a] font-semibold text-sm leading-tight">
              Happy <br /> Traveller
            </div>
          </div>

          {/* Card 2: Total Postive Reviews */}
          <div className="tf-counter-card">
            <div className="icon-wrap">
              <svg width="69" height="68" viewBox="0 0 69 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_73_177)">
                  <mask id="mask0_73_177" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="0" y="0" width="69" height="68">
                    <path d="M0.947388 0.30294H68.0527V67.4082H0.947388V0.30294Z" fill="white"></path>
                  </mask>
                  <g mask="url(#mask0_73_177)">
                    <path d="M26.505 2.26924C13.4757 2.26924 2.91333 12.8315 2.91333 25.8609C2.91333 32.2223 5.44315 37.9842 9.53644 42.2273L2.91333 49.4526H26.505C39.5343 49.4526 50.0967 38.8902 50.0967 25.8609C50.0967 12.8315 39.5343 2.26924 26.505 2.26924Z" stroke="currentColor" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                    <path d="M29.5166 49.2619C30.5896 58.3735 38.3375 65.4424 47.7375 65.4424H66.0866L60.9352 59.8227C64.1191 56.5225 66.0866 52.041 66.0866 47.0933C66.0866 37.6932 59.0178 29.9454 49.9061 28.8724" stroke="currentColor" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                    <path d="M33.0583 16.3586C30.0046 16.3586 27.2325 18.4469 26.5051 21.2735V21.2734C25.7776 18.4469 23.0054 16.3586 19.9518 16.3586C16.3324 16.3586 13.3986 19.2924 13.3986 22.9118C13.3986 31.1034 26.5051 39.2949 26.5051 39.2949C26.5051 39.2949 39.6115 31.1034 39.6115 22.9118C39.6115 19.2924 36.6777 16.3586 33.0583 16.3586Z" stroke="currentColor" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_73_177">
                    <rect width="67.1053" height="67.1053" fill="white" transform="translate(0.947388 0.302734)"></rect>
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="text-3xl font-bold text-[#D81B60] mb-1">
              100%
            </div>
            <div className="w-10 border-b-2 border-dotted border-[#D81B60] my-2"></div>
            <div className="text-[#081e2a] font-semibold text-sm leading-tight">
              Total Postive <br /> Reviews
            </div>
          </div>

          {/* Card 3: Tour Completed */}
          <div className="tf-counter-card">
            <div className="icon-wrap">
              <svg width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.5935 13.1632C18.5935 9.99769 16.0182 7.42236 12.8527 7.42236C9.68721 7.42236 7.11176 9.99769 7.11176 13.1632C7.11176 16.3287 9.68709 18.904 12.8526 18.904C16.0181 18.904 18.5935 16.3287 18.5935 13.1632ZM12.8526 15.2753C11.6879 15.2753 10.7405 14.3279 10.7405 13.1632C10.7405 11.9985 11.6879 11.0511 12.8526 11.0511C14.0172 11.0511 14.9647 11.9985 14.9647 13.1632C14.9647 14.3279 14.0172 15.2753 12.8526 15.2753Z" fill="currentColor"></path>
                <path d="M61.9985 30.1427C61.9699 29.4278 61.5237 28.7965 60.8594 28.5308L41.5731 20.8162C41.014 20.5927 40.3806 20.6609 39.882 20.9983C39.3834 21.3358 39.0848 21.8986 39.0848 22.5008V49.1118C36.8673 49.7672 35.148 51.5914 34.6425 53.8686H8.97854C7.04404 53.8686 5.4701 52.2947 5.4701 50.3602C5.4701 48.4257 7.04404 46.8518 8.97854 46.8518H25.3964C29.1293 46.8518 32.1663 43.8148 32.1663 40.0819C32.1663 36.349 29.1293 33.312 25.3964 33.312H16.0524L23.8586 20.2611C25.1816 18.0492 25.881 15.5177 25.881 12.9404C25.881 5.80508 20.0759 0 12.9405 0C5.80521 0 0 5.80496 0 12.9403V12.9866C0 15.5292 0.681958 18.0315 1.97207 20.2225L11.2895 36.0468C11.5802 36.5141 12.1159 36.9451 12.8468 36.9406H25.3966C27.1286 36.9406 28.5377 38.3497 28.5377 40.0818C28.5377 41.8138 27.1286 43.2229 25.3966 43.2229H8.97854C5.04308 43.2229 1.84124 46.4247 1.84124 50.3602C1.84124 54.2956 5.04308 57.4975 8.97854 57.4975H34.8937C35.8039 59.9304 38.1517 61.6673 40.8982 61.6673C44.4322 61.6673 47.3073 58.7923 47.3073 55.2582C47.3073 52.3548 45.3661 49.8976 42.7136 49.1127V40.9138L60.9922 31.841C61.6331 31.5227 62.0273 30.8576 61.9985 30.1427ZM5.09901 18.3813C4.13715 16.7476 3.62874 14.8821 3.62874 12.9864V12.9402C3.62874 7.80579 7.80592 3.6285 12.9404 3.6285C18.0749 3.6285 22.2521 7.80579 22.2521 12.9402C22.2521 14.8617 21.7307 16.749 20.7444 18.3982L12.8653 31.5711L5.09901 18.3813ZM43.6784 55.2581C43.6784 56.7912 42.431 58.0383 40.8982 58.0383C39.3654 58.0383 38.118 56.7911 38.118 55.2581C38.118 53.7269 39.3624 52.481 40.8928 52.478C40.8951 52.478 40.8973 52.4784 40.8993 52.4784C40.9013 52.4784 40.9033 52.4782 40.9052 52.4782C42.435 52.4817 43.6784 53.7273 43.6784 55.2581ZM42.7136 36.8623V25.1808L55.7456 30.3936L42.7136 36.8623Z" fill="currentColor"></path>
              </svg>
            </div>
            <div className="text-3xl font-bold text-[#D81B60] mb-1">
              190+
            </div>
            <div className="w-10 border-b-2 border-dotted border-[#D81B60] my-2"></div>
            <div className="text-[#081e2a] font-semibold text-sm leading-tight">
              Tour <br /> Completed
            </div>
          </div>

          {/* Card 4: Awwards Winning */}
          <div className="tf-counter-card active-card">
            <div className="icon-wrap">
              <svg width="74" height="62" viewBox="0 0 74 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M45.798 35.4259L53.2507 28.1614C53.5033 27.9151 53.5945 27.5463 53.4853 27.2108C53.3762 26.8749 53.0861 26.6301 52.7367 26.5794L42.4382 25.0839L37.8318 15.7518C37.6756 15.4352 37.3533 15.2349 37.0003 15.2349C36.6473 15.2349 36.3248 15.4356 36.1688 15.7518L31.564 25.0839L21.2639 26.5794C20.9147 26.6301 20.6244 26.8751 20.5153 27.2108C20.4061 27.5463 20.4971 27.9151 20.75 28.1614L28.2026 35.4259L26.4442 45.6828C26.3845 46.0306 26.5275 46.3823 26.8131 46.5896C27.0984 46.7972 27.4768 46.8246 27.7897 46.6603L37.0007 41.8183L46.2117 46.6603C46.3472 46.7317 46.4954 46.7668 46.6429 46.7668C46.8352 46.7668 47.0265 46.7071 47.188 46.5896C47.4737 46.3825 47.6169 46.0306 47.5569 45.6828L45.798 35.4259Z" fill="currentColor"></path>
              </svg>
            </div>
            <div className="text-3xl font-bold text-[#D81B60] mb-1">
              30
            </div>
            <div className="w-10 border-b-2 border-dotted border-[#D81B60] my-2"></div>
            <div className="text-[#081e2a] font-semibold text-sm leading-tight">
              Awwards <br /> Winning
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}


