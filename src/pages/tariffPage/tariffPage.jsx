import "./tariffPage.css";
import {useState} from "react"


function TariffPage() {
  
  var tariffData = [
    {
      bike_name: "Yamaha Fascino",
      bike_image:
        "https://d3vp2rl7047vsp.cloudfront.net/bike_models/images/000/000/026/medium/Fascino-min_2.png?1519738927",
      is_3packages: true,
      rental_package: {
        days_30: {
          price_30: 3849,
          kms_in_30: 2000,
          excess_price_km: 3.0,
        },
        days_15: {
          price_15: 2887,
          kms_in_15: 1200,
          excess_price_km: 3.0,
        },
        days_7: {
          price_7: 2166,
          kms_in_7: 720,
          excess_price_km: 3.0,
        },
        hourly: {
          mon_thu: {
            "book_<24": 20,
            "book_>24": 20,
          },
          fri_sun: {
            "book_>24": 20,
          },
          extras: {
            km_limit: 5,
            extra_charge_km: 4,
          },
        },
      },
    },
    {
      bike_name: "Honda Aviator",
      bike_image:
        "https://d3vp2rl7047vsp.cloudfront.net/bike_models/images/000/000/053/medium/Aviator.._.png?1504095942",
      is_3packages: true,
      rental_package: {
        days_30: {
          price_30: 4287,
          kms_in_30: 2000,
          excess_price_km: 2.0,
        },
        days_15: {
          price_15: 3216,
          kms_in_15: 1200,
          excess_price_km: 2.0,
        },
        days_7: {
          price_7: 2412,
          kms_in_7: 720,
          excess_price_km: 2.0,
        },
        hourly: {
          mon_thu: {
            "book_<24": 21,
            "book_>24": 21,
          },
          fri_sun: {
            "book_>24": 21,
          },
          extras: {
            km_limit: 5.0,
            extra_charge_km: 4.0,
          },
        },
      },
    },
    {
      bike_name: "Suzuki Access 125 (2019)",
      bike_image:
        "https://d3vp2rl7047vsp.cloudfront.net/bike_models/images/000/000/255/medium/Suzuki-access-125-2019.png?1563529796",
      is_3packages: true,
      rental_package: {
        days_30: {
          price_30: 4287,
          kms_in_30: 2000,
          excess_price_km: 2.0,
        },
        days_15: {
          price_15: 3216,
          kms_in_15: 1200,
          excess_price_km: 2.0,
        },
        days_7: {
          price_7: 2412,
          kms_in_7: 720,
          excess_price_km: 2.0,
        },
        hourly: {
          mon_thu: {
            "book_<24": 20,
            "book_>24": 20,
          },
          fri_sun: {
            "book_>24": 20,
          },
          extras: {
            km_limit: 5.0,
            extra_charge_km: 4.0,
          },
        },
      },
    },
    {
      bike_name: "Honda Activa 5G",
      bike_image:
        "https://d3vp2rl7047vsp.cloudfront.net/bike_models/images/000/000/233/medium/Honda_activa_5G.png?1532687566",
      is_3packages: true,
      rental_package: {
        days_30: {
          price_30: 4287,
          kms_in_30: 2000,
          excess_price_km: 2.0,
        },
        days_15: {
          price_15: 3216,
          kms_in_15: 900,
          excess_price_km: 2.0,
        },
        days_7: {
          price_7: 2412,
          kms_in_7: 540,
          excess_price_km: 2.0,
        },
        hourly: {
          mon_thu: {
            "book_<24": 20,
            "book_>24": 20,
          },
          fri_sun: {
            "book_>24": 20,
          },
          extras: {
            km_limit: 5.0,
            extra_charge_km: 4.0,
          },
        },
      },
    },
    {
      bike_name: "Bajaj Avenger Cruise 220",
      bike_image:
        "https://d3vp2rl7047vsp.cloudfront.net/bike_models/images/000/000/003/medium/Avanger_220-min_2.png?1519738474",
      is_3packages: true,
      rental_package: {
        days_30: {
          price_30: 7825,
          kms_in_30: 2500,
          excess_price_km: 3.0,
        },
        days_15: {
          price_15: 4695,
          kms_in_15: 1200,
          excess_price_km: 3.0,
        },
        days_7: {
          price_7: 2817,
          kms_in_7: 720,
          excess_price_km: 3.0,
        },
        hourly: {
          mon_thu: {
            "book_<24": 33,
            "book_>24": 33,
          },
          fri_sun: {
            "book_>24": 33,
          },
          extras: {
            km_limit: 10,
            extra_charge_km: 5.0,
          },
        },
      },
    },
    {
      bike_name: "Yamaha FZ",
      bike_image:
        "https://d3vp2rl7047vsp.cloudfront.net/bike_models/images/000/000/020/medium/FZ_Version_1.png?1504100292",
      is_3packages: true,
      rental_package: {
        days_30: {
          price_30: 6968,
          kms_in_30: 2500,
          excess_price_km: 3.0,
        },
        days_15: {
          price_15: 4181,
          kms_in_15: 1200,
          excess_price_km: 3.0,
        },
        days_7: {
          price_7: 2509,
          kms_in_7: 720,
          excess_price_km: 3.0,
        },
        hourly: {
          mon_thu: {
            "book_<24": 22,
            "book_>24": 22,
          },
          fri_sun: {
            "book_>24": 22,
          },
          extras: {
            km_limit: 10,
            extra_charge_km: 5.0,
          },
        },
      },
    },

    {
      bike_name: "Honda CB Hornet 160",
      bike_image:
        "https://d3vp2rl7047vsp.cloudfront.net/bike_models/images/000/000/151/medium/Honda-hornet.png?1510999625",
      is_3packages: true,
      rental_package: {
        days_30: {
          price_30: 6968,
          kms_in_30: 2500,
          excess_price_km: 3.0,
        },
        days_15: {
          price_15: 4181,
          kms_in_15: 1200,
          excess_price_km: 3.0,
        },
        days_7: {
          price_7: 2509,
          kms_in_7: 720,
          excess_price_km: 3.0,
        },
        hourly: {
          mon_thu: {
            "book_<24": 30,
            "book_>24": 30,
          },
          fri_sun: {
            "book_>24": 30,
          },
          extras: {
            km_limit: 10.0,
            extra_charge_km: 5.0,
          },
        },
      },
    },

    {
      bike_name: "Bajaj Pulsar 150",
      bike_image:
        "https://d3vp2rl7047vsp.cloudfront.net/bike_models/images/000/000/016/medium/Bajaj_Pulsar-min_2.png?1519738545",
      is_3packages: true,
      rental_package: {
        days_30: {
          price_30: 6002,
          kms_in_30: 2500,
          excess_price_km: 3.0,
        },
        days_15: {
          price_15: 4502,
          kms_in_15: 1200,
          excess_price_km: 3.0,
        },
        days_7: {
          price_7: 3376,
          kms_in_7: 720,
          excess_price_km: 3.0,
        },
        hourly: {
          mon_thu: {
            "book_<24": 25,
            "book_>24": 25,
          },
          fri_sun: {
            "book_>24": 25,
          },
          extras: {
            km_limit: 10.0,
            extra_charge_km: 5.0,
          },
        },
      },
    },

    {
      bike_name: "Yamaha MT 15",
      bike_image:
        "https://d3vp2rl7047vsp.cloudfront.net/bike_models/images/000/000/244/medium/MT.png?1558693263",
      is_3packages: false,
      rental_package: {
        days_30: {
          price_30: "not Available",
          kms_in_30: "not Available",
          excess_price_km: "not Available",
        },
        days_15: {
          price_15: "not Available",
          kms_in_15: "not Available",
          excess_price_km: "not Available",
        },
        days_7: {
          price_7: "not Available",
          kms_in_7: "not Available",
          excess_price_km: "not Available",
        },
        hourly: {
          mon_thu: {
            "book_<24": 49,
            "book_>24": 49,
          },
          fri_sun: {
            "book_>24": 49,
          },
          extras: {
            km_limit: 10.0,
            extra_charge_km: 5.0,
          },
        },
      },
    },

    {
      bike_name: "Royal Enfield Classic 350 ( Redditch )",
      bike_image:
        "https://d3vp2rl7047vsp.cloudfront.net/bike_models/images/000/000/021/medium/Classic-350-redditch.png?1552661989",
      is_3packages: true,
      rental_package: {
        days_30: {
          price_30: 13787,
          kms_in_30: 2500,
          excess_price_km: 4.0,
        },
        days_15: {
          price_15: 10340,
          kms_in_15: 1500,
          excess_price_km: 4.0,
        },
        days_7: {
          price_7: 7755,
          kms_in_7: 900,
          excess_price_km: 4.0,
        },
        hourly: {
          mon_thu: {
            "book_<24": 52,
            "book_>24": 52,
          },
          fri_sun: {
            "book_>24": 52,
          },
          extras: {
            km_limit: 12.0,
            extra_charge_km: 5.5,
          },
        },
      },
    },
    {
      bike_name: "Honda CBR 250R",
      bike_image:
        "https://d3vp2rl7047vsp.cloudfront.net/bike_models/images/000/000/080/medium/Honda-cbr-250-R.png?1571234245",
      is_3packages: false,
      rental_package: {
        days_30: {
          price_30: "not Available",
          kms_in_30: "not Available",
          excess_price_km: "not Available",
        },
        days_15: {
          price_15: "not Available",
          kms_in_15: "not Available",
          excess_price_km: "not Available",
        },
        days_7: {
          price_7: "not Available",
          kms_in_7: "not Available",
          excess_price_km: "not Available",
        },
        hourly: {
          mon_thu: {
            "book_<24": 49,
            "book_>24": 49,
          },
          fri_sun: {
            "book_>24": 49,
          },
          extras: {
            km_limit: 10.0,
            extra_charge_km: 10.0,
          },
        },
      },
    },

    {
      bike_name: "Honda CB 350",
      bike_image:
        "https://d3vp2rl7047vsp.cloudfront.net/bike_models/images/000/000/279/medium/WhatsApp_Image_2021-01-28_at_4.08.18_PM.jpeg?1611830315",
      is_3packages: false,
      rental_package: {
        days_30: {
          price_30: "not Available",
          kms_in_30: "not Available",
          excess_price_km: "not Available",
        },
        days_15: {
          price_15: "not Available",
          kms_in_15: "not Available",
          excess_price_km: "not Available",
        },
        days_7: {
          price_7: "not Available",
          kms_in_7: "not Available",
          excess_price_km: "not Available",
        },
        hourly: {
          mon_thu: {
            "book_<24": 65,
            "book_>24": 65,
          },
          fri_sun: {
            "book_>24": 65,
          },
          extras: {
            km_limit: 9.0,
            extra_charge_km: 10.0,
          },
        },
      },
    },
    {
      bike_name: "KTM Duke 200 (BS 6)",
      bike_image:
        "https://d3vp2rl7047vsp.cloudfront.net/bike_models/images/000/000/285/medium/WhatsApp_Image_2021-01-28_at_4.11.23_PM_%281%29.jpeg?1611831066",
      is_3packages: false,
      rental_package: {
        days_30: {
          price_30: "not Available",
          kms_in_30: "not Available",
          excess_price_km: "not Available",
        },
        days_15: {
          price_15: "not Available",
          kms_in_15: "not Available",
          excess_price_km: "not Available",
        },
        days_7: {
          price_7: "not Available",
          kms_in_7: "not Available",
          excess_price_km: "not Available",
        },
        hourly: {
          mon_thu: {
            "book_<24": 64,
            "book_>24": 64,
          },
          fri_sun: {
            "book_>24": 64,
          },
          extras: {
            km_limit: 10.0,
            extra_charge_km: 6.0,
          },
        },
      },
    },
    {
      bike_name: "Royal Enfield Thunderbird 350",
      bike_image:
        "https://d3vp2rl7047vsp.cloudfront.net/bike_models/images/000/000/018/medium/TB_350-min_2.png?1519739776",
      is_3packages: false,
      rental_package: {
        days_30: {
          price_30: "not Available",
          kms_in_30: "not Available",
          excess_price_km: "not Available",
        },
        days_15: {
          price_15: "not Available",
          kms_in_15: "not Available",
          excess_price_km: "not Available",
        },
        days_7: {
          price_7: "not Available",
          kms_in_7: "not Available",
          excess_price_km: "not Available",
        },
        hourly: {
          mon_thu: {
            "book_<24": 35,
            "book_>24": 35,
          },
          fri_sun: {
            "book_>24": 35,
          },
          extras: {
            km_limit: 10.0,
            extra_charge_km: 5.5,
          },
        },
      },
    },
  ];





  return (
    <>
      <div id="tariffPageMainDiv">
        <h1 id="bikeRentalText">Bike rental tariffs </h1>

        <div id="bikeDetailsDiv">
          {tariffData.map((data) => {
            return (
              <>
                <div id="bikeTariffDisplayDiv">
                  <p id="bikeName">{data.bike_name}</p>
                  <div>
                    <img id="bikeImage" src={data.bike_image}></img>
                  </div>
                  <div id="packageDiv">
                    {data.is_3packages ? (
                      <div>
                        <div className="bikeRental_3Div">
                          <button className= "bikeRentalPackage" id="hourlyBtn" >HOURLY</button>
                          <button className= "bikeRentalPackage" >7 DAYS</button>
                          <button className="bikeRentalPackage" >15 DAYS</button>
                          <button className="bikeRentalPackage"  >30 DAYS</button>
                        </div>

                        <div id="hours_Div" >
                          <div id="hourlyPackageDiv">
                            <p id="mon_thu_text" className="week_name">
                              Mon - Thu
                            </p>
                            <p className="bookingTimeText">
                              (Min.10 hrs booking)
                            </p>
                            <div className="book_24">
                              <p className="book_text">
                                Booking Time (0-24hrs)
                              </p>
                              <p className="book_price">
                                &#8377;{" "}
                                {data.rental_package.hourly.mon_thu["book_<24"]}{" "}
                                /hr
                              </p>
                            </div>
                            <div className="book_24">
                              <p className="book_text">
                                Booking Time ({">"}24hrs)
                              </p>
                              <p className="book_price">
                                &#8377;{" "}
                                {data.rental_package.hourly.mon_thu["book_>24"]}{" "}
                                /hr
                              </p>
                            </div>

                            <p className="week_name">Fri - Sun</p>
                            <p className="bookingTimeText">
                              (Min. 24hrs booking)
                            </p>
                            <div className="book_24">
                              <p className="book_text">
                                Booking Time ({">"}24hrs)
                              </p>
                              <p className="book_price">
                                &#8377;{" "}
                                {data.rental_package.hourly.fri_sun["book_>24"]}{" "}
                                /hr
                              </p>
                            </div>
                            <p className="week_name">Extras</p>
                            <div className="book_24">
                              <p className="book_text">Km Limit</p>
                              <p className="book_price">
                                &#8377;{" "}
                                {data.rental_package.hourly.extras.km_limit} /hr
                              </p>
                            </div>
                            <div className="book_24">
                              <p className="book_text">Excess Km Charges</p>
                              <p className="book_price">
                                &#8377;{" "}
                                {
                                  data.rental_package.hourly.extras
                                    .extra_charge_km
                                }{" "}
                                /km
                              </p>

                            </div>

                            <button className="bookNowBtn">BOOK NOW</button>
                          </div>
                        </div>

                        <div id="days_7Div" >
                            <p id="rental_charge_text_id" className="rental_charge_text">Rental Charges</p>
                            <div className="rental_package_div">
                            <p className="rental_leftText">Price for 7 days</p>
                            <p className="rental_rightText">
                              &#8377;{" "}
                              {data.rental_package.days_7.price_7}{" "}
                              /hr
                            </p>
                          </div>
                          <p className="rental_charge_text">Km Limit</p>
                          <div className="rental_package_div">
                            <p className="rental_leftText">No of kms in 7 days that can be travelled without extra charges</p>
                            <p className="rental_rightText">
                              {" "}
                              {data.rental_package.days_7.kms_in_7}{" "}
                              Km
                            </p>
                          </div>
                          <p className="rental_charge_text">Excess Km Charges</p>
                          <div className="rental_package_div">
                            <p className="rental_leftText">Charges beyond the Km Limit</p>
                            <p className="rental_rightText">
                              {" "}
                              {data.rental_package.days_7.excess_price_km}{" "}
                              /Km
                            </p>
                          </div>
                          <button className="bookNowBtn">BOOK NOW</button>

                        </div>

                        <div id="days_15Div">
                        <p id="rental_charge_text_id" className="rental_charge_text">Rental Charges</p>
                            <div className="rental_package_div">
                            <p className="rental_leftText">Price for 15 days</p>
                            <p className="rental_rightText">
                              &#8377;{" "}
                              {data.rental_package.days_15.price_15}{" "}
                              /hr
                            </p>
                          </div>
                          <p className="rental_charge_text">Km Limit</p>
                          <div className="rental_package_div">
                            <p className="rental_leftText">No of kms in 15 days that can be travelled without extra charges</p>
                            <p className="rental_rightText">
                              {" "}
                              {data.rental_package.days_15.kms_in_15}{" "}
                              Km
                            </p>
                          </div>
                          <p className="rental_charge_text">Excess Km Charges</p>
                          <div className="rental_package_div">
                            <p className="rental_leftText">Charges beyond the Km Limit</p>
                            <p className="rental_rightText">
                              {" "}
                              {data.rental_package.days_15.excess_price_km}{" "}
                              /Km
                            </p>
                          </div>
                          <button className="bookNowBtn" >BOOK NOW</button>


                        </div>

                        <div id="days_30Div">
                        <p id="rental_charge_text_id" className="rental_charge_text">Rental Charges</p>
                            <div className="rental_package_div">
                            <p className="rental_leftText">Price for 30 days</p>
                            <p className="rental_rightText">
                              &#8377;{" "}
                              {data.rental_package.days_30.price_30}{" "}
                              /hr
                            </p>
                          </div>
                          <p className="rental_charge_text">Km Limit</p>
                          <div className="rental_package_div">
                            <p className="rental_leftText">No of kms in 30 days that can be travelled without extra charges</p>
                            <p className="rental_rightText">
                              {" "}
                              {data.rental_package.days_30.kms_in_30}{" "}
                              Km
                            </p>
                          </div>
                          <p className="rental_charge_text">Excess Km Charges</p>
                          <div className="rental_package_div">
                            <p className="rental_leftText">Charges beyond the Km Limit</p>
                            <p className="rental_rightText">
                              {" "}
                              {data.rental_package.days_30.excess_price_km}{" "}
                              /Km
                            </p>
                          </div>
                          <button className="bookNowBtn" >BOOK NOW</button>
                        </div>

                      </div>
                    ) : (
                      <div>
                        <div className="hourlyPackageText">
                          <p id="hourlyText">HOURLY</p>
                        </div>

                        <div id="hourlyPackageDiv">
                          <p id="mon_thu_text" className="week_name">
                            Mon - Thu
                          </p>
                          <p className="bookingTimeText">
                            (Min.10 hrs booking)
                          </p>
                          <div className="book_24">
                            <p className="book_text">Booking Time (0-24hrs)</p>
                            <p className="book_price">
                              &#8377;{" "}
                              {data.rental_package.hourly.mon_thu["book_<24"]}{" "}
                              /hr
                            </p>
                          </div>
                          <div className="book_24">
                            <p className="book_text">
                              Booking Time ({">"}24hrs)
                            </p>
                            <p className="book_price">
                              &#8377;{" "}
                              {data.rental_package.hourly.mon_thu["book_>24"]}{" "}
                              /hr
                            </p>
                          </div>

                          <p className="week_name">Fri - Sun</p>
                          <p className="bookingTimeText">
                            (Min. 24hrs booking)
                          </p>
                          <div className="book_24">
                            <p className="book_text">
                              Booking Time ({">"}24hrs)
                            </p>
                            <p className="book_price">
                              &#8377;{" "}
                              {data.rental_package.hourly.fri_sun["book_>24"]}{" "}
                              /hr
                            </p>
                          </div>
                          <p className="week_name">Extras</p>
                          <div className="book_24">
                            <p className="book_text">Km Limit</p>
                            <p className="book_price">
                              &#8377;{" "}
                              {data.rental_package.hourly.extras.km_limit} /hr
                            </p>
                          </div>
                          <div className="book_24">
                            <p className="book_text">Km Limit</p>
                            <p className="book_price">
                              &#8377;{" "}
                              {
                                data.rental_package.hourly.extras
                                  .extra_charge_km
                              }{" "}
                              /hr
                            </p>
                          </div>

                          <button className="bookNowBtn" >BOOK NOW</button>
                        </div>
                      </div>

                    )}
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>

    
    </>
  );
}

export { TariffPage };
