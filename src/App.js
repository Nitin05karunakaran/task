import { useState, useEffect } from "react";
import Slider from "react-slick";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function SampleArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "#E0E0E0",
          borderRadius: "50%",
        }}
        onClick={onClick}
      />
    );
  }
  const customerList = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 4000,
    cssEase: "linear",
    nextArrow: <SampleArrow />,
    prevArrow: <SampleArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const clientList = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 2,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 4000,
    cssEase: "linear",
    nextArrow: <SampleArrow />,
    prevArrow: <SampleArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const features = [
    {
      title: "Zero-touch Enrollment",
      description:
        "Onboard endpoints and users with minimal user intervention. Provision devices and set up configurations well before the user gets their hands on.",
      image: "/enrolled.webp", // Replace with actual image path
    },
    {
      title: "Automation",
      description:
        "Automate endpoint compliance with dynamic grouping and breeze through day-to-day IT tasks with scripting capabilities. Hexnode also allows the creation of automated reports.",
      image: "/automation.webp",
    },
    {
      title: "Remote Access Management",
      description:
        "Hexnode UEM enables the enterprise to manage every single device in the corporate ecosystem for optimal and secure operation.",
      image: "/remote-access.webp",
    },
    {
      title: "Endpoint Security and Compliance",
      description:
        "Hexnode helps you maintain compliance with international regulatory bodies and set up custom rules for compliance within your business for security purposes.",
      image: "/endpoint-security.webp",
    },
    {
      title: "Integrations",
      description:
        "Hexnode's various integrations make it easy to fit into your current endpoint ecosystem. These integrations include Azure AD, Okta, Android Enterprise, Apple School and Business manager, and many more enterprise and technology integrations.",
      image: "/integrations.webp",
    },
    {
      title: "App Management",
      description:
        "Set up a bespoke app store, enable mandatory apps, and ensure endpoints come equipped with all the required applications, custom enterprise apps included.",
      image: "/app-management.webp",
    },
  ];
  return (
    <>
      <div className="relative  bg-gray-900 text-white">
        {/* Navbar */}
        <nav
          className={`fixed top-0 w-full z-10 transition-all duration-300 ${
            scrolled ? "bg-gray-900 shadow-md" : "bg-gray-900"
          }`}
        >
          <div className="container mx-auto flex justify-between items-center py-4 px-6">
            <div className="text-2xl font-bold">hexnode</div>
            <div className="hidden md:flex space-x-8">
              <div className="cursor-pointer hover:text-gray-300">
                Why Hexnode
              </div>
              <div className="cursor-pointer hover:text-gray-300">Features</div>
              <div className="cursor-pointer hover:text-gray-300">
                Platforms
              </div>
              <div className="cursor-pointer hover:text-gray-300">
                Customers
              </div>
            </div>
            <button className="bg-red-600 px-6 py-2 text-white font-medium rounded">
              14 DAY FREE TRIAL
            </button>
          </div>
        </nav>

        {/* Hero Section */}
        {/* <div className="container mx-auto pt-24 pb-16 px-6">
      <div className="flex flex-col md:flex-row items-start justify-between gap-12">
        <div className="md:w-5/12 pt-8">
          <div className="text-gray-400 mb-4">Unified Endpoint Management</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Gain control and visibility over your endpoints</h1>
          <p className="text-lg mb-8 text-gray-300">
            Hexnode's UEM solution allows you to simplify endpoint management and free up IT. Focus on the big picture while Hexnode works on the details.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Email"
              className="p-3 w-full sm:w-64 border border-gray-700 bg-gray-800 text-white rounded"
            />
            <button className="bg-red-600 px-6 py-3 text-white font-medium rounded whitespace-nowrap">LET'S TRY IT OUT!</button>
          </div>
        </div>

        <div className="md:w-7/12 mt-8 md:mt-0">
          <div className="relative">
            <img
              src="/hexnode1.webp"
              alt="Woman using laptop"
              className="rounded-lg "
            />
            <div className="absolute top-10 left-10 bg-yellow-100 text-yellow-800 px-4 py-1 rounded-full flex items-center">
              <span className="mr-2 bg-yellow-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-sm">✓</span>
              Password policy applied
            </div>
            <div className="absolute bottom-10 left-10 bg-green-100 text-green-800 px-4 py-1 rounded-full flex items-center">
              <span className="mr-2 bg-green-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-sm">✓</span>
              Device Enrolled
            </div>
            <div className="absolute top-1/2 right-10 transform -translate-y-1/2 bg-blue-100 text-blue-800 px-4 py-1 rounded-full flex items-center">
              <span className="mr-2 bg-blue-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-sm">✓</span>
              TvOS Kiosk Active
            </div>
          </div>
        </div>
      </div>
    </div> */}
        <div className="container mx-auto pt-24 pb-16 px-6">
          <div className="flex md:flex-row flex-col-reverse justify-between md:py-2  md:mt-3">
            <div className="flex flex-col justify-center items-start">
              <div className="flex md:flex-row flex-col  p-5 ">
                <div className="mr-6">
                  <div className="text-gray-400 mb-4">
                    Unified Endpoint Management
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-6">
                    Gain control and visibility over your endpoints
                  </h1>
                  <p className="text-lg mb-8 text-gray-300">
                    Hexnode's UEM solution allows you to simplify endpoint
                    management and free up IT. Focus on the big picture while
                    Hexnode works on the details.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <input
                      type="email"
                      placeholder="Email"
                      className="p-3 w-full sm:w-64 border border-gray-700 bg-gray-800 text-white rounded"
                    />
                    <button className="bg-red-600 px-6 py-3 text-white font-medium rounded whitespace-nowrap">
                      LET'S TRY IT OUT!
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative lg:w-[60%]">
              <img
                src="/hexnode1.webp"
                alt="Woman using laptop"
                className="rounded-lg w-full"
              />
              <div className="absolute lg:top-10 top-3 left-10 bg-yellow-100 text-yellow-800 px-4 py-1 rounded-full flex items-center">
                <span className="mr-2 bg-yellow-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-sm">
                  ✓
                </span>
                Password policy applied
              </div>
              <div className="absolute bottom-10 left-10 bg-green-100 text-green-800 px-4 py-1 rounded-full flex items-center">
                <span className="mr-2 bg-green-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-sm">
                  ✓
                </span>
                Device Enrolled
              </div>
              <div className="absolute lg:top-1/2 top-40 lg:right-10 -right-4 transform -translate-y-1/2 bg-blue-100 text-blue-800 px-4 py-1 rounded-full flex items-center">
                <span className="mr-2 bg-blue-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-sm">
                  ✓
                </span>
                TvOS Kiosk Active
              </div>
            </div>
          </div>
        </div>
        {/* Logo Section */}
        <div className="border-t border-gray-800 bg-[rgb(26_28_43)] bg-opacity-[var(--tw-bg-opacity)] py-8">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center md:items-start border-r">
                <img src="/idc.webp" alt="IDC" className="h-8 mb-4" />
                <p className="text-sm text-gray-400 text-center md:text-left">
                  Hexnode is listed as a leader and a major player in IDC
                  MarketScape UEM Vendors Assessment Reports 2024.
                </p>
              </div>
              <div className="flex flex-col items-center md:items-start border-r">
                <img src="/gartner.webp" alt="Gartner" className="h-8 mb-4" />
                <p className="text-sm text-gray-400 text-left">
                  Hexnode was recognized in the 2025 Gartner® Market Guide for
                  Unified Endpoint Management Tools.
                </p>
              </div>
              <div className="flex flex-col items-center md:items-start">
                <img
                  src="/forrester.webp"
                  alt="Forrester"
                  className="h-8 mb-4"
                />
                <p className="text-sm text-gray-400 text-center md:text-left">
                  Forrester includes Hexnode as a Notable vendor in The Unified
                  Endpoint Management Landscape, Q3 2023.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="why-hex py-[60px] lg:py-[80px] bg-[#F7F7F7] relative">
        <div className="w-[88%] mx-auto max-w-[1300px]">
          <h2 className="text-[32px] md:text-[40px] leading-[40px] md:leading-[1.3] text-center font-bold text-[#020a19] pb-[10px] max-w-[800px] mx-auto">
            Why Hexnode?
          </h2>
          <div className="flex flex-wrap justify-center items-start md:justify-between relative">
            <div className=" max-w-[340px] md:max-w-[48%] xl:max-w-[480px] flex items-center basis-full md:basis-[47%] lg:basis-[100%] xl:basis-1/2 flex-shrink-0 my-[10px] md:my-[20px] xl:my-0 xl:h-[320px] transition-all duration-300 ease-in-out">
              <div className="relative z-[10] p-[20px] lg:p-[40px] lg:pb-[20px] rounded-[16px] border border-[#D7D7D7] bg-[#FFFFFF] my-[10px] first:mt-0 last:mb-0 group transition-all duration-300 ease-in-out">
                <div>
                  <div className="flex items-center space-x-[10px]">
                    <div className="flex justify-center w-full max-w-[28px] lg:max-w-[40px] h-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                      >
                        <g id="icon" transform="translate(-350 -1026)">
                          <rect
                            id="bg"
                            width="40"
                            height="40"
                            rx="6"
                            transform="translate(350 1026)"
                            fill="#f8faff"
                          ></rect>
                          <g
                            id="icon-2"
                            data-name="icon"
                            transform="translate(360.637 1033.314)"
                          >
                            <path
                              id="Path_4886"
                              data-name="Path 4886"
                              d="M31.112,22.38a.25.25,0,0,0-.274.055l-1.547,1.56L27.217,21.9a6.527,6.527,0,0,0-.766-8.236A6.347,6.347,0,0,0,23.1,11.88V8.921h2.188a.254.254,0,0,0,.168-.442l-3.372-3.4a.25.25,0,0,0-.355,0l-3.381,3.41a.255.255,0,0,0-.054.276.251.251,0,0,0,.232.156h2.187v2.958a6.345,6.345,0,0,0-3.355,1.788,6.526,6.526,0,0,0-.766,8.236l-2.075,2.092-1.547-1.56a.25.25,0,0,0-.274-.055.253.253,0,0,0-.155.234v4.822a.253.253,0,0,0,.251.254h4.782a.254.254,0,0,0,.168-.442L16.2,25.7l2.074-2.092c.15.1.3.2.461.291a6.38,6.38,0,0,0,3.163.836h0a6.524,6.524,0,0,0,.719-.04,6.356,6.356,0,0,0,2.9-1.087L27.6,25.7l-1.547,1.56a.255.255,0,0,0-.054.276.252.252,0,0,0,.232.157h4.782a.252.252,0,0,0,.251-.254V22.614A.252.252,0,0,0,31.112,22.38Z"
                              transform="translate(-12.54 -5.004)"
                              fill="#3371ed"
                              stroke="#3371ed"
                              stroke-width="1"
                            ></path>
                            <ellipse
                              id="Ellipse_25"
                              data-name="Ellipse 25"
                              cx="3.046"
                              cy="3.048"
                              rx="3.046"
                              ry="3.048"
                              transform="translate(6.317 10.111)"
                              fill="#e0eafd"
                              stroke="#3371ed"
                              stroke-width="1"
                            ></ellipse>
                          </g>
                        </g>
                      </svg>
                    </div>
                    <h4 className="antialiased text-[20px] lg:text-[24px] leading-[32px] text-left font-bold text-[#020a19] ">
                      Adapt to the new normal
                    </h4>
                  </div>
                  <p className="text-[16px] lg:text-[18px] leading-[28px] text-left font-regular text-[#333333] mt-[15px] mb-[15px] lg:mb-[20px]">
                    Hybrid, remote or onsite, you can trust Hexnode UEM to
                    deliver. Create policies that cater to your organization’s
                    protocols. Whether it be BYOD, COPE, or platform limited,
                    Hexnode can manage it all.
                  </p>
                </div>
                <a
                  rel="noreferrer"
                  className="text-[16px] lg:text-[18px] leading-[28px] text-[#DD0735] font-semibold hidden md:inline-block lg:pb-[10px] delay-[50ms] transition-all duration-[0.3s] ease-out xl:absolute xl:opacity-0 xl:invisible xl:group-hover:opacity-[1] xl:group-hover:visible"
                  href="https://www.hexnode.com/mobile-device-management/cloud/signup/"
                >
                  Try Hexnode on your endpoints
                </a>
              </div>
            </div>
            <div className="why-hex__grid1 max-w-[340px] md:max-w-[48%] xl:max-w-[480px] flex items-center basis-full md:basis-[47%] lg:basis-[100%] xl:basis-1/2 flex-shrink-0 my-[10px] md:my-[20px] xl:my-0 xl:h-[320px] transition-all duration-300 ease-in-out whyHexnode_resourceTransitionKit__BGUBE">
              <div className="why-hex__wrap1 relative z-[10] p-[20px] lg:p-[40px] lg:pb-[20px] rounded-[16px] border border-[#D7D7D7] bg-[#FFFFFF] my-[10px] first:mt-0 last:mb-0 group transition-all duration-300 ease-in-out whyHexnode_resourceTransitionKit__BGUBE">
                <div>
                  <div className="flex items-center space-x-[10px]">
                    <div className="flex justify-center w-full max-w-[28px] lg:max-w-[40px] h-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                      >
                        <g id="icon" transform="translate(-350 -1026)">
                          <rect
                            id="bg"
                            width="40"
                            height="40"
                            rx="6"
                            transform="translate(350 1026)"
                            fill="#f8faff"
                          ></rect>
                          <g
                            id="icon-2"
                            data-name="icon"
                            transform="translate(360.652 1034.657)"
                          >
                            <path
                              id="Path_4884"
                              data-name="Path 4884"
                              d="M274.137,195.4l1.177.515a.562.562,0,0,0,.538,0l1.345-.584a13.1,13.1,0,0,0,7.9-12.118v-6.66a.726.726,0,0,0-.37-.618l-8.776-2.56a.7.7,0,0,0-.639,0l-8.574,2.594a.724.724,0,0,0-.336.618v6.8a13.143,13.143,0,0,0,7.734,12.015Z"
                              transform="translate(-266.403 -173.299)"
                              fill="#3371ed"
                            ></path>
                            <path
                              id="Path_6831"
                              data-name="Path 6831"
                              d="M-12748.986,956.841l3.372,3.372,5.7-5.7"
                              transform="translate(12754.033 -946.022)"
                              fill="none"
                              stroke="#fff"
                              stroke-width="1"
                            ></path>
                          </g>
                        </g>
                      </svg>
                    </div>
                    <h4 className="antialiased text-[20px] lg:text-[24px] leading-[32px] text-left font-bold text-[#020a19] ">
                      Zero compromise security
                    </h4>
                  </div>
                  <p className="text-[16px] lg:text-[18px] leading-[28px] text-left font-regular text-[#333333] mt-[15px] mb-[15px] lg:mb-[20px]">
                    Enable full-fledged device encryption, data loss prevention,
                    and all-rounded device security with Hexnode UEM. Be at the
                    bleeding edge of device security without any compromises.
                  </p>
                </div>
                <a
                  className="text-[16px] lg:text-[18px] leading-[28px] text-[#DD0735] font-semibold hidden md:inline-block lg:pb-[10px] delay-[50ms] transition-all duration-[0.3s] ease-out xl:absolute xl:opacity-0 xl:invisible xl:group-hover:opacity-[1] xl:group-hover:visible"
                  href="https://www.hexnode.com/mobile-device-management/cloud/signup/"
                >
                  Try Hexnode on your endpoints
                </a>
              </div>
            </div>
            <div className="why-hex__grid2 max-w-[340px] md:max-w-[48%] xl:max-w-[480px] flex items-center basis-full md:basis-[47%] lg:basis-[100%] xl:basis-1/2 flex-shrink-0 my-[10px] md:my-[20px] xl:my-0 xl:h-[320px] transition-all duration-300 ease-in-out whyHexnode_resourceTransitionKit__BGUBE">
              <div className="why-hex__wrap2 relative z-[10] p-[20px] lg:p-[40px] lg:pb-[20px] rounded-[16px] border border-[#D7D7D7] bg-[#FFFFFF] my-[10px] first:mt-0 last:mb-0 group transition-all duration-300 ease-in-out whyHexnode_resourceTransitionKit__BGUBE">
                <div>
                  <div className="flex items-center space-x-[10px]">
                    <div className="flex justify-center w-full max-w-[28px] lg:max-w-[40px] h-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                      >
                        <g id="icon" transform="translate(-350 -1026)">
                          <rect
                            id="bg"
                            width="40"
                            height="40"
                            rx="6"
                            transform="translate(350 1026)"
                            fill="#f8faff"
                          ></rect>
                          <path
                            id="settings"
                            d="M18.17,15.878l2.118.733a13.582,13.582,0,0,0,.652,1.629L19.962,20.2a.866.866,0,0,0,.163.978L22.651,23.7a.866.866,0,0,0,.978.163l1.955-.978a9.709,9.709,0,0,0,1.629.652l.733,2.118a.782.782,0,0,0,.733.57h3.584a.981.981,0,0,0,.815-.57l.733-2.118a13.583,13.583,0,0,0,1.629-.652l1.955.978a.866.866,0,0,0,.978-.163L40.9,21.174a.866.866,0,0,0,.163-.978l-.978-1.955a9.71,9.71,0,0,0,.652-1.629l2.118-.733a.809.809,0,0,0,.57-.815V11.479a.981.981,0,0,0-.57-.815l-2.118-.57a9.71,9.71,0,0,0-.652-1.629l.978-1.955a.888.888,0,0,0-.163-.978L38.292,2.925a.866.866,0,0,0-.978-.163l-1.955.978a9.709,9.709,0,0,0-1.629-.652L33,.97A.809.809,0,0,0,32.182.4H28.6a.782.782,0,0,0-.733.57l-.733,2.118A13.582,13.582,0,0,0,25.5,3.74l-1.874-.9a.866.866,0,0,0-.978.163L20.125,5.532a.866.866,0,0,0-.163.978l.978,1.955a9.71,9.71,0,0,0-.652,1.629l-2.118.733a.809.809,0,0,0-.57.815v3.584A.912.912,0,0,0,18.17,15.878Z"
                            transform="translate(339.488 1032.688)"
                            fill="#3371ed"
                          ></path>
                          <path
                            id="play"
                            d="M5.2,1.067a1,1,0,0,1,1.6,0l4,5.333A1,1,0,0,1,10,8H2a1,1,0,0,1-.8-1.6Z"
                            transform="translate(375.55 1040) rotate(90)"
                            fill="#fff"
                          ></path>
                        </g>
                      </svg>
                    </div>
                    <h4 className="antialiased text-[20px] lg:text-[24px] leading-[32px] text-left font-bold text-[#020a19] ">
                      Get more done with automation
                    </h4>
                  </div>
                  <p className="text-[16px] lg:text-[18px] leading-[28px] text-left font-regular text-[#333333] mt-[15px] mb-[15px] lg:mb-[20px]">
                    Hexnode UEM automation features help free up IT’s time spent
                    on mundane and repetitive tasks. Do hours’ worth of work in
                    a few minutes.
                  </p>
                </div>
                <a
                  rel="noreferrer"
                  className="text-[16px] lg:text-[18px] leading-[28px] text-[#DD0735] font-semibold hidden md:inline-block lg:pb-[10px] delay-[50ms] transition-all duration-[0.3s] ease-out xl:absolute xl:opacity-0 xl:invisible xl:group-hover:opacity-[1] xl:group-hover:visible"
                  href="https://www.hexnode.com/mobile-device-management/cloud/signup/"
                >
                  Try Hexnode on your endpoints
                </a>
              </div>
            </div>
            <div className="why-hex__grid3 max-w-[340px] md:max-w-[48%] xl:max-w-[480px] flex items-center basis-full md:basis-[47%] lg:basis-[100%] xl:basis-1/2 flex-shrink-0 my-[10px] md:my-[20px] xl:my-0 xl:h-[320px] transition-all duration-300 ease-in-out whyHexnode_resourceTransitionKit__BGUBE">
              <div className="why-hex__wrap3 relative z-[10] p-[20px] lg:p-[40px] lg:pb-[20px] rounded-[16px] border border-[#D7D7D7] bg-[#FFFFFF] my-[10px] first:mt-0 last:mb-0 group transition-all duration-300 ease-in-out whyHexnode_resourceTransitionKit__BGUBE">
                <div>
                  <div className="flex items-center space-x-[10px]">
                    <div className="flex justify-center w-full max-w-[28px] lg:max-w-[40px] h-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                      >
                        <g id="icon" transform="translate(-350 -1026)">
                          <rect
                            id="bg"
                            width="40"
                            height="40"
                            rx="6"
                            transform="translate(350 1026)"
                            fill="#f8faff"
                          ></rect>
                          <g
                            id="icon-2"
                            data-name="icon"
                            transform="translate(-169.518 -292.287)"
                          >
                            <path
                              id="Path_4890"
                              data-name="Path 4890"
                              d="M-2352.028,1328.551l1.324.582.872,1.594v6.487l-.7.673-1.919.251-2.3-.251v-7.31l.875-1.268.872-.758Z"
                              transform="translate(2900.665 -1.124)"
                              fill="#3371ed"
                            ></path>
                            <path
                              id="Path_4888"
                              data-name="Path 4888"
                              d="M-2400.021,1328.551l-1.22,1.094-.512,1.688v18.06l-1.005.341h-15.724l-1.012-.765v-19.027l1.012-1.391Z"
                              transform="translate(2947.591 -1.124)"
                              fill="#3371ed"
                            ></path>

                            <g
                              id="noun-policy-5740034"
                              transform="translate(527.942 1327)"
                            >
                              <path
                                id="Path_4887"
                                data-name="Path 4887"
                                d="M27.34,3H9.253A2.313,2.313,0,0,0,6.942,5.311V23.967a1.381,1.381,0,0,0,1.379,1.379H23.959a1.381,1.381,0,0,0,1.379-1.379v-10.7h3.377a1.38,1.38,0,0,0,1.379-1.379V6.036A2.91,2.91,0,0,0,27.34,3ZM24.586,23.967a.627.627,0,0,1-.627.627H8.321a.627.627,0,0,1-.627-.627V5.311A1.56,1.56,0,0,1,9.252,3.752H25.528a3.168,3.168,0,0,0-.943,2.284Zm4.756-12.082a.627.627,0,0,1-.627.627H25.338V6.036a2.159,2.159,0,0,1,2-2.284,2.16,2.16,0,0,1,2,2.284ZM23.131,25.2a.376.376,0,0,1-.376.376H9.525a.376.376,0,1,1,0-.752H22.755A.376.376,0,0,1,23.131,25.2Z"
                                transform="translate(-6.942 -3)"
                                fill="#f8faff"
                              ></path>
                              <path
                                id="Path_6795"
                                data-name="Path 6795"
                                d="M6.341,35.232h10.3"
                                transform="translate(-2.296 -21.896)"
                                fill="none"
                                stroke="#f8faff"
                                stroke-linecap="round"
                                stroke-width="1"
                              ></path>
                              <path
                                id="Path_6796"
                                data-name="Path 6796"
                                d="M6.341,35.232h10.3"
                                transform="translate(-2.296 -19.151)"
                                fill="none"
                                stroke="#f8faff"
                                stroke-linecap="round"
                                stroke-width="1"
                              ></path>
                              <path
                                id="Path_6797"
                                data-name="Path 6797"
                                d="M6.341,35.232h10.3"
                                transform="translate(-2.296 -16.406)"
                                fill="none"
                                stroke="#f8faff"
                                stroke-linecap="round"
                                stroke-width="1"
                              ></path>
                            </g>
                            <path
                              id="Path_6966"
                              data-name="Path 6966"
                              d="M533.9,1334.671l2.109,2.109,4.777-4.777"
                              fill="none"
                              stroke="#f8faff"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="1"
                            ></path>
                          </g>
                        </g>
                      </svg>
                    </div>
                    <h4 className="antialiased text-[20px] lg:text-[24px] leading-[32px] text-left font-bold text-[#020a19] ">
                      Unified Policy Management
                    </h4>
                  </div>
                  <p className="text-[16px] lg:text-[18px] leading-[28px] text-left font-regular text-[#333333] mt-[15px] mb-[15px] lg:mb-[20px]">
                    Create a single policy through Hexnode and apply it on all
                    the devices in your organization. Any platform or form
                    factor, achive single pane of glass management with Hexnode.
                  </p>
                </div>
                <a
                  rel="noreferrer"
                  className="text-[16px] lg:text-[18px] leading-[28px] text-[#DD0735] font-semibold hidden md:inline-block lg:pb-[10px] delay-[50ms] transition-all duration-[0.3s] ease-out xl:absolute xl:opacity-0 xl:invisible xl:group-hover:opacity-[1] xl:group-hover:visible"
                  href="https://www.hexnode.com/mobile-device-management/cloud/signup/"
                >
                  Try Hexnode on your endpoints
                </a>
              </div>
            </div>
            <div className=" hidden xl:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              <div className="relative z-[10] max-w-[85px] xl:max-w-[105px]">
                <img
                  alt="Hexnode App Icon"
                  loading="lazy"
                  width="200"
                  height="80"
                  decoding="async"
                  data-nimg="1"
                  className="w-auto h-auto mx-auto"
                  style={{ color: "transparent" }}
                  src="https://static.hexnode.com/v2/assets/img/ads-pages/hexnode-app-icon.svg"
                />
              </div>
              <div className="line-wrapper">
                <div className="line-animation left-top absolute top-[50%] left-[50%] translate-x-[-200px] xl:translate-x-[-210px] translate-y-[-170px] z-[5]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="177"
                    height="134.928"
                    viewBox="0 0 177.49 134.928"
                  >
                    <path
                      id="path"
                      d="M-18870.2-4879.633v-95.043c0-26.781-22.783-38.885-35.471-38.885h-141.02"
                      transform="translate(19047.193 5014.062)"
                      fill="none"
                      stroke="#020a19"
                      stroke-linecap="round"
                      stroke-width="1"
                      stroke-dasharray="7"
                    >
                      <animate
                        attributeName="stroke-dashoffset"
                        repeatCount="indefinite"
                        dur="2s"
                        calcMode="linear"
                        values="0; -177.49"
                      ></animate>
                    </path>
                  </svg>
                </div>
                <div className="line-animation right-top absolute top-[50%] left-[50%] translate-x-[20px] xl:translate-x-[30px] translate-y-[-170px] z-[5]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="177"
                    height="134.928"
                    viewBox="0 0 177.49 134.928"
                  >
                    <path
                      id="path"
                      d="M-19046.7-4879.633v-95.043c0-26.781,22.783-38.885,35.471-38.885h141.02"
                      transform="translate(19047.195 5014.062)"
                      fill="none"
                      stroke="#020a19"
                      stroke-linecap="round"
                      stroke-width="1"
                      stroke-dasharray="7"
                    >
                      <animate
                        attributeName="stroke-dashoffset"
                        repeatCount="indefinite"
                        dur="2s"
                        calcMode="linear"
                        values="0; -177.49"
                      ></animate>
                    </path>
                  </svg>
                </div>
                <div className="line-animation left-bottom absolute top-[50%] left-[50%] translate-x-[-200px] xl:translate-x-[-210px] translate-y-[40px] z-[5]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="177"
                    height="134.928"
                    viewBox="0 0 177.49 134.928"
                  >
                    <path
                      id="path"
                      d="M-18870.2-5013.562v95.043c0,26.781-22.783,38.885-35.471,38.885h-141.02"
                      transform="translate(19047.193 5014.062)"
                      fill="none"
                      stroke="#020a19"
                      stroke-linecap="round"
                      stroke-width="1"
                      stroke-dasharray="7"
                    >
                      <animate
                        attributeName="stroke-dashoffset"
                        repeatCount="indefinite"
                        dur="2s"
                        calcMode="linear"
                        values="0; -177.49"
                      ></animate>
                    </path>
                  </svg>
                </div>
                <div className="line-animation right-bottom absolute top-[50%] left-[50%] translate-x-[20px] xl:translate-x-[30px] translate-y-[40px] z-[5]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="177"
                    height="134.928"
                    viewBox="0 0 177.49 134.928"
                  >
                    <path
                      id="path"
                      d="M-19046.7-5013.562v95.043c0,26.781,22.783,38.885,35.471,38.885h141.02"
                      transform="translate(19047.195 5014.062)"
                      fill="none"
                      stroke="#020a19"
                      stroke-linecap="round"
                      stroke-width="1"
                      stroke-dasharray="7"
                    >
                      <animate
                        attributeName="stroke-dashoffset"
                        repeatCount="indefinite"
                        dur="2s"
                        calcMode="linear"
                        values="0; -177.49"
                      ></animate>
                    </path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <a
            rel="noreferrer"
            className="text-[18px] leading-[28px] text-[#DD0735] font-semibold text-center block md:hidden mt-[20px]"
            href="https://www.hexnode.com/mobile-device-management/cloud/signup/"
          >
            Try Hexnode on your endpoints
          </a>
        </div>
      </section>
      <div className="lg:w-[88%] mx-auto lg:max-w-[1300px] w-full">
        <div className="text-[32px] md:text-[40px] leading-[40px] md:leading-[1.3] text-center font-bold text-[#020a19] py-[10px] max-w-[800px] mx-auto">
          Powerful endpoint management, built for the devices you choose
        </div>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 text-center">
              <div className="relative w-full mb-4">
                <img
                  src={feature.image}
                  alt={feature.title}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <h3 className="ttext-[24px] xl:text-[32px] leading-[26px] xl:leading-[40px] text-center md:text-left font-bold text-[#020a19] pb-[15px] pt-[20px] md:pb-[20px] md:pt-[40px]">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-left">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="lg:w-[88%] mx-auto lg:max-w-[1300px] w-full">
        <section className="text-center py-16 px-6 bg-white">
          <h1 className="text-4xl font-bold mb-4">
            Multi-platform Endpoint Management
          </h1>
          <p className="text-gray-500 mb-6">
            Devices of varying platforms? Hexnode thrives in a diverse
            environment.
          </p>
        </section>

        {/* Main Content */}
        <div className="flex lg:flex-row flex-col justify-center items-start gap-8 p-12">
          {/* Image Section */}
          <div className="lg:w-1/2">
            <div className="bg-gray-200 h-96 rounded-xl shadow-xl">
              <img
                src="/multi.webp"
                alt="Woman using laptop"
                className="rounded-lg "
              />
            </div>
          </div>

          {/* Text Section */}
          <div className="lg:w-1/2 space-y-6">
            <div className="shadow-lg border border-slate-200">
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">Android</h2>
                <p className="text-gray-600 mb-4">
                  Remotely deploy, manage, monitor and secure Android devices in
                  your organization. Set compliance benchmarks and leverage
                  Android Enterprise to its full capabilities.
                </p>
                <button className="text-red-500">
                  Try Hexnode on your endpoints
                </button>
              </div>
            </div>

            <div className="space-y-4">
              {["iOS", "macOS", "Windows", "tvOS", "FireOS"].map((platform) => (
                <div
                  key={platform}
                  className="py-2 px-4 bg-white rounded-lg border-b border-slate-200 text-[24px] font-bold text-left"
                >
                  {platform}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="lg:w-[88%] mx-auto lg:max-w-[1300px] w-full  flex flex-col justify-center items-center  bg-white py-10 text-center">
        <div className="text-3xl md:text-4xl font-semibold mb-6 ">
          What our customers say
        </div>
        {/* <div className="flex py-16 bg-white text-center ">
          <button onClick={prevSlide} className=" bg-gray-200 p-3 rounded-md">
            <img src="/prev-arrow-icon-black.svg" alt="Marriott" className="h-5" />
          </button>
          <div className="flex justify-center">

            <div className="flex lg:flex-row flex-col bg-gray-100 p-8 rounded-lg shadow-lg max-w-3xl items-center">
              <img src={testimonials[currentIndex].image} alt="Testimonial" className="w-40 h-40 rounded-lg object-cover" />
              <div className="ml-6 text-left">
                <p className="text-lg font-medium">{testimonials[currentIndex].quote}</p>
                <div className="mt-4">
                  <p className="font-semibold">{testimonials[currentIndex].name}</p>
                  <p className="text-gray-600 text-sm">{testimonials[currentIndex].position}</p>
                </div>
              </div>
            </div>

          </div>
          <button onClick={nextSlide} className=" bg-gray-200 p-3 rounded-md">
            <img src="/next-arrow-icon-black.svg" alt="Marriott" className="h-5" />
          </button>



        </div> */}
        <Slider
          {...customerList}
          className="flex justify-center items-center lg:max-w-[1300px] w-[80vw] mx-auto "
        >
          <div className="flex py-16 bg-white text-center ">
            <div className="flex justify-center">
              <div className="flex lg:flex-row flex-col bg-gray-100 rounded-lg shadow-lg max-w-3xl items-center">
                <img
                  src="/person3.webp"
                  alt="Testimonial"
                  className="w-80 h-80 rounded-lg object-cover"
                />
                <div className="ml-6 text-left p-2">
                  <p className="text-lg font-medium">
                    "It seemed to be in-line with everything we were looking
                    at."
                  </p>
                  <div className="mt-4">
                    <p className="font-semibold">Chris Robinson</p>
                    <p className="text-gray-600 text-sm">
                      Executive Account Manager, NCS
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex py-16 bg-white text-center ">
            <div className="flex justify-center">
              <div className="flex lg:flex-row flex-col bg-gray-100 rounded-lg shadow-lg max-w-3xl items-center">
                <img
                  src="/person2.webp"
                  alt="Testimonial"
                  className="w-80 h-80 rounded-lg object-cover"
                />
                <div className="ml-6 text-left p-2">
                  <p className="text-lg font-medium">
                    "Most complete MDM solution I found, and I tested many of
                    them, including major names"
                  </p>
                  <div className="mt-4">
                    <p className="font-semibold">Dalibor Kruljac</p>
                    <p className="text-gray-600 text-sm">KAMELEYA LTD</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex py-16 bg-white text-center ">
            <div className="flex justify-center">
              <div className="flex lg:flex-row flex-col bg-gray-100 rounded-lg shadow-lg max-w-3xl items-center">
                <img
                  src="/person1.webp"
                  alt="Testimonial"
                  className="w-80 h-80 rounded-lg object-cover"
                />
                <div className="ml-6 text-left p-2">
                  <p className="text-lg font-medium">
                    Hexnode is of great value. Works great with Android and
                    iOS!"
                  </p>
                  <div className="flex flex-col mt-4">
                    <p className="font-semibold">Justin Modrak</p>
                    <p className="text-gray-600 text-sm">
                      Technology Coordinator
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slider>

        <div className="">
          <Slider
            {...clientList}
            className="flex justify-center items-center lg:max-w-[1300px] w-[80vw] mx-auto "
          >
            <div>
              <div className="flex justify-center items-center rounded-md mr-2">
                <img src="/wolt.svg" alt="wolt" className="h-20" />
              </div>
            </div>
            <div>
              <div className="flex justify-center items-center rounded-md mr-2">
                <img src="/merck.svg" alt="Merck" className="h-20" />
              </div>
            </div>
            <div>
              <div className="flex justify-center items-center rounded-md mr-2">
                <img src="/costco.svg" alt="Costco" className="h-20" />
              </div>
            </div>
            <div>
              {" "}
              <div className="flex justify-center items-center rounded-md mr-2">
                <img src="/saic.svg" alt="SAIC" className="h-20" />
              </div>
            </div>
            <div>
              <div className="flex justify-center items-center rounded-md mr-2">
                <img src="/hilton.svg" alt="Hilton" className="h-20" />
              </div>
            </div>

            <div>
              <div className="flex justify-center items-center rounded-md mr-2">
                <img
                  src="/group1-automotive.webp"
                  alt="Group1"
                  className="h-20"
                />
              </div>
            </div>
            <div>
              <div className="flex justify-center items-center rounded-md mr-2">
                <img src="/lowes.svg" alt="Lowe's" className="h-20" />
              </div>
            </div>

            {/* <div>
                  <div className="flex justify-center items-center rounded-md mr-2">
                    <Image
                      src="/images/kems1.png"
                      width={300}
                      height={52}
                      className=""
                      alt="kems"
                    />
                  </div>
                </div> */}
          </Slider>
        </div>
      </div>
      <div className="bg-[#0A0E14] text-white py-16 text-center">
        <div className="lg:w-[88%] mx-auto lg:max-w-[1300px] w-full">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Get Hexnode UEM and start securing your endpoints
          </h2>
          <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg text-lg">
            TRY HEXNODE FOR FREE
          </button>
        </div>
      </div>
      <div className="lg:w-[88%] mx-auto lg:max-w-[1300px] w-full flex lg:flex-row flex-col lg:justify-between justify-center items-center bg-white py-10">
        <div className="flex text-[12px] leading-[24px] text-text-default font-medium">
          <div>Terms of Use</div>
          <div>-</div>
          <div>Privacy</div>
          <div>-</div>
          <div>Cookies</div>
        </div>
        <div className="flex text-[12px] leading-[24px] text-text-default font-medium">
          Copyright © 2025 Mitsogo Inc. All Rights Reserved.
        </div>
      </div>
    </>
  );
}
