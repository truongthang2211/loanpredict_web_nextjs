import type { NextPage } from "next";
import { useState } from "react";
const Home: NextPage = () => {
  const [input, setInput] = useState({
    age: "10",
    exp: "1",
    job_years: "1",
    house_years: "1",
    model: "",
    marital: "",
    city: "",
    state: "",
    profession: "",
    car_ownship: "",
    house_ownship: "",
  });
  const [result, setResult] = useState("");
  const professions = [
    "Mechanical_engineer",
    "Software_Developer",
    "Technical_writer",
    "Civil_servant",
    "Librarian",
    "Economist",
    "Flight_attendant",
    "Architect",
    "Designer",
    "Physician",
    "Financial_Analyst",
    "Air_traffic_controller",
    "Politician",
    "Police_officer",
    "Artist",
    "Surveyor",
    "Design_Engineer",
    "Chemical_engineer",
    "Hotel_Manager",
    "Dentist",
    "Comedian",
    "Biomedical_Engineer",
    "Graphic_Designer",
    "Computer_hardware_engineer",
    "Petroleum_Engineer",
    "Secretary",
    "Computer_operator",
    "Chartered_Accountant",
    "Technician",
    "Microbiologist",
    "Fashion_Designer",
    "Aviator",
    "Psychologist",
    "Magistrate",
    "Lawyer",
    "Firefighter",
    "Engineer",
    "Official",
    "Analyst",
    "Geologist",
    "Drafter",
    "Statistician",
    "Web_designer",
    "Consultant",
    "Chef",
    "Army_officer",
    "Surgeon",
    "Scientist",
    "Civil_engineer",
    "Industrial_Engineer",
    "Technology_specialist",
  ];
  const states = [
    "Madhya_Pradesh",
    "Maharashtra",
    "Kerala",
    "Odisha",
    "Tamil_Nadu",
    "Gujarat",
    "Rajasthan",
    "Telangana",
    "Bihar",
    "Andhra_Pradesh",
    "West_Bengal",
    "Haryana",
    "Puducherry",
    "Karnataka",
    "Uttar_Pradesh",
    "Himachal_Pradesh",
    "Punjab",
    "Tripura",
    "Uttarakhand",
    "Jharkhand",
    "Mizoram",
    "Assam",
    "Jammu_and_Kashmir",
    "Delhi",
    "Chhattisgarh",
    "Chandigarh",
    "Uttar_Pradesh[5]",
    "Manipur",
    "Sikkim",
  ];
  const cities = [
    "Rewa",
    "Parbhani",
    "Alappuzha",
    "Bhubaneswar",
    "Tiruchirappalli[10]",
    "Jalgaon",
    "Tiruppur",
    "Jamnagar",
    "Kota[6]",
    "Karimnagar",
    "Hajipur[31]",
    "Adoni",
    "Erode[17]",
    "Kollam",
    "Madurai",
    "Anantapuram[24]",
    "Kamarhati",
    "Bhusawal",
    "Sirsa",
    "Amaravati",
    "Secunderabad",
    "Ahmedabad",
    "Ajmer",
    "Ongole",
    "Miryalaguda",
    "Ambattur",
    "Indore",
    "Pondicherry",
    "Shimoga",
    "Chennai",
    "Gulbarga",
    "Khammam",
    "Saharanpur",
    "Gopalpur",
    "Amravati",
    "Udupi",
    "Howrah",
    "Aurangabad[39]",
    "Hospet",
    "Shimla",
    "Khandwa",
    "Bidhannagar",
    "Bellary",
    "Danapur",
    "Purnia[26]",
    "Bijapur",
    "Patiala",
    "Malda",
    "Sagar",
    "Durgapur",
    "Junagadh",
    "Singrauli",
    "Agartala",
    "Thanjavur",
    "Hindupur",
    "Naihati",
    "North_Dumdum",
    "Panchkula",
    "Anantapur",
    "Serampore",
    "Bathinda",
    "Nadiad",
    "Kanpur",
    "Haridwar",
    "Berhampur",
    "Jamshedpur",
    "Hyderabad",
    "Bidar",
    "Kottayam",
    "Solapur",
    "Suryapet",
    "Aizawl",
    "Asansol",
    "Deoghar",
    "Eluru[25]",
    "Ulhasnagar",
    "Aligarh",
    "South_Dumdum",
    "Berhampore",
    "Gandhinagar",
    "Sonipat",
    "Muzaffarpur",
    "Raichur",
    "Rajpur_Sonarpur",
    "Ambarnath",
    "Katihar",
    "Kozhikode",
    "Vellore",
    "Malegaon",
    "Kochi",
    "Nagaon",
    "Nagpur",
    "Srinagar",
    "Davanagere",
    "Bhagalpur",
    "Siwan[32]",
    "Meerut",
    "Dindigul",
    "Bhatpara",
    "Ghaziabad",
    "Kulti",
    "Chapra",
    "Dibrugarh",
    "Panihati",
    "Bhiwandi",
    "Morbi",
    "Kalyan-Dombivli",
    "Gorakhpur",
    "Panvel",
    "Siliguri",
    "Bongaigaon",
    "Patna",
    "Ramgarh",
    "Ozhukarai",
    "Mirzapur",
    "Akola",
    "Satna",
    "Motihari[34]",
    "Jalna",
    "Jalandhar",
    "Unnao",
    "Karnal",
    "Cuttack",
    "Proddatur",
    "Ichalkaranji",
    "Warangal[11][12]",
    "Jhansi",
    "Bulandshahr",
    "Narasaraopet",
    "Chinsurah",
    "Jehanabad[38]",
    "Dhanbad",
    "Gudivada",
    "Gandhidham",
    "Raiganj",
    "Kishanganj[35]",
    "Varanasi",
    "Belgaum",
    "Tirupati[21][22]",
    "Tumkur",
    "Coimbatore",
    "Kurnool[18]",
    "Gurgaon",
    "Muzaffarnagar",
    "Aurangabad",
    "Bhavnagar",
    "Arrah",
    "Munger",
    "Tirunelveli",
    "Mumbai",
    "Mango",
    "Nashik",
    "Kadapa[23]",
    "Amritsar",
    "Khora _Ghaziabad",
    "Ambala",
    "Agra",
    "Ratlam",
    "Surendranagar_Dudhrej",
    "Delhi_city",
    "Bhopal",
    "Hapur",
    "Rohtak",
    "Durg",
    "Korba",
    "Bangalore",
    "Shivpuri",
    "Thrissur",
    "Vijayanagaram",
    "Farrukhabad",
    "Nangloi_Jat",
    "Madanapalle",
    "Thoothukudi",
    "Nagercoil",
    "Gaya",
    "Chandigarh_city",
    "Jammu[16]",
    "Kakinada",
    "Dewas",
    "Bhalswa_Jahangir_Pur",
    "Baranagar",
    "Firozabad",
    "Phusro",
    "Allahabad",
    "Guna",
    "Thane",
    "Etawah",
    "Vasai-Virar",
    "Pallavaram",
    "Morena",
    "Ballia",
    "Surat",
    "Burhanpur",
    "Phagwara",
    "Mau",
    "Mangalore",
    "Alwar",
    "Mahbubnagar",
    "Maheshtala",
    "Hazaribagh",
    "Bihar_Sharif",
    "Faridabad",
    "Lucknow",
    "Tenali",
    "Barasat",
    "Amroha",
    "Giridih",
    "Begusarai",
    "Medininagar",
    "Rajahmundry[19][20]",
    "Saharsa[29]",
    "New_Delhi",
    "Bhilai",
    "Moradabad",
    "Machilipatnam",
    "Mira-Bhayandar",
    "Pali",
    "Navi_Mumbai",
    "Mehsana",
    "Imphal",
    "Kolkata",
    "Sambalpur",
    "Ujjain",
    "Madhyamgram",
    "Jabalpur",
    "Jamalpur[36]",
    "Ludhiana",
    "Bareilly",
    "Gangtok",
    "Anand",
    "Dehradun",
    "Pune",
    "Satara",
    "Srikakulam",
    "Raipur",
    "Jodhpur",
    "Darbhanga",
    "Nizamabad",
    "Nandyal",
    "Dehri[30]",
    "Jorhat",
    "Ranchi",
    "Kumbakonam",
    "Guntakal",
    "Haldia",
    "Loni",
    "Pimpri-Chinchwad",
    "Rajkot",
    "Nanded",
    "Noida",
    "Kirari_Suleman_Nagar",
    "Jaunpur",
    "Bilaspur",
    "Sambhal",
    "Dhule",
    "Rourkela",
    "Thiruvananthapuram",
    "Dharmavaram",
    "Nellore[14][15]",
    "Visakhapatnam[4]",
    "Karawal_Nagar",
    "Jaipur",
    "Avadi",
    "Bhimavaram",
    "Bardhaman",
    "Silchar",
    "Buxar[37]",
    "Kavali",
    "Tezpur",
    "Ramagundam[27]",
    "Yamunanagar",
    "Sri_Ganganagar",
    "Sasaram[30]",
    "Sikar",
    "Bally",
    "Bhiwani",
    "Rampur",
    "Uluberia",
    "Sangli-Miraj_&_Kupwad",
    "Hosur",
    "Bikaner",
    "Shahjahanpur",
    "Sultan_Pur_Majra",
    "Vijayawada",
    "Bharatpur",
    "Tadepalligudem",
    "Tinsukia",
    "Salem",
    "Mathura",
    "Guntur[13]",
    "HubliÃ¢â‚¬â€œDharwad",
    "Guwahati",
    "Chittoor[28]",
    "Tiruvottiyur",
    "Vadodara",
    "Ahmednagar",
    "Fatehpur",
    "Bhilwara",
    "Kharagpur",
    "Bettiah[33]",
    "Bhind",
    "Bokaro",
    "Karaikudi",
    "Raebareli",
    "Pudukkottai",
    "Udaipur",
    "Mysore[7][8][9]",
    "Panipat",
    "Latur",
    "Tadipatri",
    "Bahraich",
    "Orai",
    "Raurkela_Industrial_Township",
    "Gwalior",
    "Katni",
    "Chandrapur",
    "Kolhapur",
    "Khora",
  ];
  const onSubmit = async () => {
    console.log(input);
    setResult("Peding...");
    const res = await fetch("api/hello", {
      method: "POST",
      body: JSON.stringify(input),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data == "[0]") {
          setResult("No");
        } else if (data == "[1]") {
          setResult("Yes");
        } else {
          setResult("Model not found");
        }
      });
  };
  return (
    <div className="mx-auto  pt-20 bg-slate-400 h-screen">
      <div className="w-[800px] flex shadow-xl py-16 px-6 rounded-lg bg-slate-800 space-x-20 mx-auto">
        <div className="flex flex-col basis-1/2">
          <div className="mb-6">
            <label
              htmlFor="city"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              City
            </label>
            <input
              value={input.city}
              onChange={(e) =>
                setInput((i) => {
                  return { ...i, [e.target.name]: e.target.value };
                })
              }
              list="cities"
              name="city"
              type="text"
              id="city"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Kollam"
            />
            <datalist id="cities">
              {cities.map((e) => {
                return <option>{e}</option>;
              })}
            </datalist>
          </div>
          <div className="mb-6">
            <label
              htmlFor="state"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              State
            </label>
            <input
              value={input.state}
              onChange={(e) =>
                setInput((i) => {
                  return { ...i, [e.target.name]: e.target.value };
                })
              }
              list="states"
              name="state"
              type="text"
              id="state"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Kollam"
            />
            <datalist id="states">
              {states.map((e) => {
                return <option>{e}</option>;
              })}
            </datalist>
          </div>
          <div className="mb-6">
            <label
              htmlFor="profession"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Profession
            </label>
            <input
              value={input.profession}
              onChange={(e) =>
                setInput((i) => {
                  return { ...i, [e.target.name]: e.target.value };
                })
              }
              list="professions"
              name="profession"
              type="text"
              id="profession"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Kollam"
            />
            <datalist id="professions">
              {professions.map((e) => {
                return <option>{e}</option>;
              })}
            </datalist>
          </div>
          <div className="mb-6">
            <label
              htmlFor="car_ownership"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              Car Ownership
            </label>
            <input
              value={input.car_ownship}
              onChange={(e) =>
                setInput((i) => {
                  return { ...i, [e.target.name]: e.target.value };
                })
              }
              name="car_ownship"
              type="text"
              list="car_ownership"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            <datalist id="car_ownership">
              <option>Yes</option>
              <option>No</option>
            </datalist>
          </div>
          <div className="">
            <label
              htmlFor="house_ownership"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              House Ownership
            </label>
            <input
              value={input.house_ownship}
              onChange={(e) =>
                setInput((i) => {
                  return { ...i, [e.target.name]: e.target.value };
                })
              }
              name="house_ownship"
              type="text"
              list="house_ownership"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            <datalist id="house_ownership">
              <option>Rented</option>
              <option>Owned</option>
              <option>No rent, no own</option>
            </datalist>
          </div>
        </div>
        <div className="flex flex-col basis-1/2 justify-between">
          <div className="flex flex-col">
            <div className="mb-6">
              <label
                htmlFor="marital"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                Marital Status
              </label>
              <input
                value={input.marital}
                onChange={(e) =>
                  setInput((i) => {
                    return { ...i, [e.target.name]: e.target.value };
                  })
                }
                name="marital"
                type="text"
                list="marital"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              <datalist id="marital">
                <option>Single</option>
                <option>Married</option>
              </datalist>
            </div>
            <div className="mb-6">
              <label
                htmlFor="model"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                Model
              </label>
              <input
                value={input.model}
                onChange={(e) =>
                  setInput((i) => {
                    return { ...i, [e.target.name]: e.target.value };
                  })
                }
                name="model"
                type="text"
                list="model"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              <datalist id="model">
                <option>Logistic Regression</option>
                <option>K Nearest Neighbors</option>
                <option>Decision Tree</option>
                <option>Random Forest</option>
              </datalist>
            </div>
            <div className="mb-6 text-sm font-medium text-gray-900 dark:text-gray-300">
              <label htmlFor="steps-range" className=" mb-2  ">
                Age
              </label>
              <span className="ml-2">{input.age}</span>
              <input
                value={input.age}
                onChange={(e) =>
                  setInput((i) => {
                    return { ...i, [e.target.name]: e.target.value };
                  })
                }
                name="age"
                id="steps-range"
                type="range"
                min="0"
                max="79"
                step="1"
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
              ></input>
            </div>
            <div className="mb-6 text-sm font-medium text-gray-900 dark:text-gray-300">
              <label htmlFor="steps-range" className=" mb-2  ">
                Experience
              </label>
              <span className="ml-2">{input.exp}</span>
              <input
                value={input.exp}
                onChange={(e) =>
                  setInput((i) => {
                    return { ...i, [e.target.name]: e.target.value };
                  })
                }
                name="exp"
                id="steps-range"
                type="range"
                min="0"
                max="20"
                step="1"
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
              ></input>
            </div>
            <div className="mb-6 text-sm font-medium text-gray-900 dark:text-gray-300">
              <label htmlFor="steps-range" className=" mb-2  ">
                Current Job Years
              </label>
              <span className="ml-2">{input.job_years}</span>
              <input
                value={input.job_years}
                onChange={(e) =>
                  setInput((i) => {
                    return { ...i, [e.target.name]: e.target.value };
                  })
                }
                name="job_years"
                id="steps-range"
                type="range"
                min="0"
                max="14"
                step="1"
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
              ></input>
            </div>
            <div className="mb-6 text-sm font-medium text-gray-900 dark:text-gray-300">
              <label htmlFor="steps-range" className=" mb-2  ">
                Current House Years
              </label>
              <span className="ml-2">{input.house_years}</span>
              <input
                value={input.house_years}
                onChange={(e) =>
                  setInput((i) => {
                    return { ...i, [e.target.name]: e.target.value };
                  })
                }
                name="house_years"
                id="steps-range"
                type="range"
                min="10"
                max="14"
                step="1"
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
              ></input>
            </div>
          </div>
          <div className="">
            <span className="flex justify-center text-white mb-2">{`Risk: ${result}`}</span>
          </div>
          <div className="flex justify-center">
            <a
              onClick={onSubmit}
              className="rounded-md px-4 py-2 bg-red-400 hover:bg-red-300 text-white"
            >
              Submit
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
