import Image from "next/image";
import Experience from "@/components/Experience";
import Technology from "@/components/Technology";
import Education from "@/components/Education"
import DarkModeToggle from "@/components/DarkModeToggle";

export default function Home() {

  return (
    <div>

      <div className = "flex flex-wrap justify-center">
        {/* ME */}
        <div className = "flex-col">
          {/* Box 1 Profile */}
          <div className = "m-10 p-3 border-2 border-[#1E90FF]/10 rounded-lg text-black bg-white dark:text-white dark:bg-[#151516]">
            <div className = "flex">
              <div>
                <Image src = "/profile.jpg" alt = "Profile Picture" className = "rounded-lg bd-grey bd-1 mr-3 mb-3 ml-1 mt-1 rounded-lg border-2 border-[#1E90FF]/10" width = {150} height = {150}/>
              </div>
      
              <div>
                <div className = "flex-col">
                  <div className = "flex justify-end">
                    <DarkModeToggle/>
                  </div>
                  <div className = "mt-3 mb-3">
                    <h1 className = "text-2xl"> Junhao Zhao </h1>
                  </div>
                  <div>
                    <p> Aspiring Full Stack Developer and Software Engineer </p>
                  </div>
                  <div className = "flex justify-around">
                    <div>
                      <p className = "m-2 p-2 bg-white dark:bg-[#171718] border-2 border-[#1E90FF]/10 rounded-lg"> English and Chinese </p>
                    </div>
                    <div>
                      <p className = "m-2 p-2 bg-white dark:bg-[#171718] border-2 border-[#1E90FF]/10 rounded-lg"> Pennsylvannia, United States </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              {/* Contact Me */}
              <div className = "flex justify-around">
                <a href="https://www.linkedin.com/in/junhao-zhao/" target = "_blank" className = "hover:text-[#1E90FF] p-1 px-3 text-black bg-white dark:text-white dark:bg-[#131213] rounded-xl shadow-xs shadow-[#1E90FF]/25">
                  <div className = "flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className = "mr-2 p-2 bg-white dark:bg-[#171718] rounded-xl fill-current text-[#1E90FF] h-8 w-8">
                      <path d="M1.91 0h22.363a1.91 1.91 0 011.909 1.91v22.363a1.91 1.91 0 01-1.91 1.909H1.91A1.91 1.91 0 010 24.272V1.91A1.91 1.91 0 011.91 0zm1.908 22.364h3.818V9.818H3.818zM8.182 5.727a2.455 2.455 0 10-4.91 0 2.455 2.455 0 004.91 0zm2.182 4.091v12.546h3.818v-6.077c0-2.037.75-3.332 2.553-3.332 1.3 0 1.81 1.201 1.81 3.332v6.077h3.819v-6.93c0-3.74-.895-5.78-4.667-5.78-1.967 0-3.277.921-3.788 1.946V9.818z" fill="currentColor"></path>
                    </svg>
                    <p> LinkedIn </p>
                  </div>
                </a>
                <a href="https://github.com/jzhao234" target = "_blank" className = "hover:text-[#1E90FF] p-1 px-3 bg-white dark:bg-[#131213] rounded-xl shadow-xs shadow-[#1E90FF]/25">
                  <div className = "flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className = "mr-2 p-2 bg-white dark:bg-[#171718] rounded-xl fill-current text-[#1E90FF] h-8 w-8">
                      <path d="M12 1C5.9225 1 1 5.9225 1 12C1 16.8675 4.14875 20.9787 8.52125 22.4362C9.07125 22.5325 9.2775 22.2025 9.2775 21.9137C9.2775 21.6525 9.26375 20.7862 9.26375 19.865C6.5 20.3737 5.785 19.1912 5.565 18.5725C5.44125 18.2562 4.905 17.28 4.4375 17.0187C4.0525 16.8125 3.5025 16.3037 4.42375 16.29C5.29 16.2762 5.90875 17.0875 6.115 17.4175C7.105 19.0812 8.68625 18.6137 9.31875 18.325C9.415 17.61 9.70375 17.1287 10.02 16.8537C7.5725 16.5787 5.015 15.63 5.015 11.4225C5.015 10.2262 5.44125 9.23625 6.1425 8.46625C6.0325 8.19125 5.6475 7.06375 6.2525 5.55125C6.2525 5.55125 7.17375 5.2625 9.2775 6.67875C10.1575 6.43125 11.0925 6.3075 12.0275 6.3075C12.9625 6.3075 13.8975 6.43125 14.7775 6.67875C16.8813 5.24875 17.8025 5.55125 17.8025 5.55125C18.4075 7.06375 18.0225 8.19125 17.9125 8.46625C18.6138 9.23625 19.04 10.2125 19.04 11.4225C19.04 15.6437 16.4688 16.5787 14.0213 16.8537C14.42 17.1975 14.7638 17.8575 14.7638 18.8887C14.7638 20.36 14.75 21.5425 14.75 21.9137C14.75 22.2025 14.9563 22.5462 15.5063 22.4362C19.8513 20.9787 23 16.8537 23 12C23 5.9225 18.0775 1 12 1Z"></path>
                    </svg>
                    <p> Github </p>
                  </div>
                </a>
                <a href="/files/resume.pdf" download="ZhaoJunhaoResume.pdf" className="hover:text-[#1E90FF] p-1 px-3 text-black bg-white dark:text-white dark:bg-[#131213] rounded-xl shadow-xs shadow-[#1E90FF]/25">
                  <div className = "flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor" className = "mr-2 p-2 bg-white dark:bg-[#171718] rounded-xl fill-current text-[#1E90FF] h-8 w-8">
                      <path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z"/>
                    </svg>
                    <p> Resume </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
          {/* Experiences Start*/}
          <div className="m-10 p-3 border-2 border-[#1E90FF]/10 rounded-lg bg-white text-black dark:bg-[#151516] dark:text-white">
            <div>
              <p className = "font-medium text-lg"> Experience </p>
              {/* Experience */}
              <Experience
                logo={<Image src = "/logo/Temple-Logo-T-Header.svg" alt = "Temple"width={50} height={50} />} 
                title="Undergraduate Researcher at Fox Chase Cancer Center"
                location="Philadelphia, PA"
                date="MAY 2025 - Current"
                description1={"- Built a full-stack web application using Next.js, Tailwind CSS, and FastAPI to calculate and visualize drug synergies using interactive data visualizations for cancer treatment research"}
                description2={"- Helped refine drug synergy models by contributing code, analyzing outputs, and proposing algorithmic improvements based on outputs using experimental data from research team"}
                description3={"- Provided technical insights in journal talks and weekly lab meetings to improve research outcomes"}
              />
              {/* Experience */}
              <Experience 
                logo={<Image src = "/logo/Temple-Logo-T-Header.svg" alt = "Temple"width={50} height={50} />} 
                title="Lab Consultant Intern at Temple" 
                location="Philadelphia, PA" 
                date="SEP 2023 - MAY 2025" 
                description1="- Diagnosed and resolved technical issues, ensuring optimal hardware functionality in the lab"
                description2="- Provided hands-on assistance, fostering a collaborative and positive work environment"
                description3="- Collaborated with faculty to develop and refine lab processes and resources"
                description4="- Responded promptly to service requests, demonstrating strong problem solving skills"
              />
              {/* Experience */}
              <Experience 
                logo={<Image src = "/logo/Temple-Logo-T-Header.svg" alt = "Temple" width={50} height={50} />} 
                title="STEM Leadership Fellows at Temple" 
                location="Philadelphia, PA" 
                date="SEP 2024 - MAY 2025" 
                description1="- Assisted students in mastering the Jupyter Lab environment and programming in Python"
                description2="- Hosted office hours, providing tailored support to students and addressing individual learning needs"
                description3="- Collaborated with faculty and team members to develop and implement effective teaching strategies"
                description4="- Enhanced students coding skills, enabling them to effectively tackle data science challenges"
              />
              {/* Experience */}
              <Experience 
                logo={<Image src = "/logo/lavner.png" alt = "Lavner" width={50} height={50} />} 
                title="Instructing Intern at Lavner" 
                location="Philadelphia, PA" 
                date="JUN 2024 - AUG 2025" 
                description1="- Instructed students in a diverse range of STEM subjects including coding, 3D-printing, and robotics"
                description2="- Adapted and customized curriculum to align various learning speeds and comprehension"
                description3="- Provided personalized mentorship and attentive support, addressing individual student needs"
                description4="- Developed and implemented tailored instructional strategies for students with special needs"
              />
              {/* Experience */}
              <Experience 
                logo={<Image src = "/logo/PCDC.jpg" alt = "PCDC" width={50} height={50} />} 
                title="Intern and Volunteer at PCDC" 
                location="Philadelphia, PA" 
                date="AUG 2018 - DEC 2023" 
                description1="- Contributed to preserving the cultural heritage of Chinatown, promoting its rich cultural identity"
                description2="- Conducted in-depth research and performed data entry tasks to support community related projects"
                description3="- Led food distribution efforts during the pandemic, ensuring delivery of thousands of boxes of food"
                description4="- Managed participant data, contributing to the effective allocation of resources"
              />
            </div>
          </div>
          {/* Experiences End */}
        </div>
        
        <div className = "flex-col">
          {/* Tech Stack Start*/}
          <div className = "m-10 p-3 border-2 border-[#1E90FF]/10 rounded-lg text-black bg-white dark:text-white dark:bg-[#151516] flex-col">
            {/* Description */}
            <div>
              <h2 className = "font-medium text-lg"> Skills </h2>
            </div>

            <Technology
              logo = {<Image src = "/logo/javaLogo.svg" alt = "Java" width={40} height={40}/>}
              name = "Java"
              version = "Version Java SE 24 (JDK 24)"
            />
            <Technology
              logo = {<Image src = "/logo/cLogo.svg" alt = "Java" width={40} height={40}/>}
              name = "C"
              version = "Version C23"
            />
            <Technology
              logo = {<Image src = "/logo/tailwindLogo.svg" alt = "Tailwind CSS" width={40} height={40}/>}
              name = "Tailwind CSS"
              version = "Version 4.1"
            />
            <Technology
              logo = {<Image src = "/logo/htmlLogo.svg" alt = "HTMl" width={40} height={40}/>}
              name = "HTML"
              version = "Version HTML5"
            />
          </div>
          {/* Tech Stack End*/}

          {/* Education */}
          <div className = "m-10 p-3 border-2 border-[#1E90FF]/10 rounded-lg text-black bg-white dark:text-white dark:bg-[#151516]">
            <div>
              <h2 className = "font-medium text-lg"> Education </h2>
            </div>
            <Education
            logo = {<Image src = "/logo/Temple-Logo-T-Header.svg" alt = "Temple" width={50} height={50} />}
            name = "Temple University"
            location = "Philadelphia, PA"
            date = "2022-Current"
            title = "Computer Science Bachelor's of Science"
            classTitle = "Related Course Work"
            class1 = "- Programming in C"
            class2 = "- Program Design and Abstraction"
            class3 = "- Discrete Math II"
            class4 = "- Computational Probability and Statistics"
            class5 = "- Computer Systems and Low-Level Programming"
            class6 = "- Data Structures"
            class7 = "- Systems Programming and Operating Systems"
            class8 = "- Data Structures and Algorithms"
            class9 = "- Software Design"
            class10 = "- Calculus II"
            class11 = "- Information Visualization"
            class12 = "- User Experience Design"
            class13 = "- Interpersonal Communciation"
            />
            <Education
            logo = {<Image src = "/logo/CentralHS.gif" alt = "Central" width={50} height={50}/>}
            name = "Central Highschool"
            location = "Philadelphia, PA"
            date = "2018-2022"
            title = "Highschool Diploma"
          />
          </div>
          
          {/* Certificates */}
          <div className = "m-10 p-3 border-2 border-[#1E90FF]/10 rounded-lg text-black bg-white dark:text-white dark:bg-[#151516]">
            <div>
              <h2> Certificates </h2>
              <p>n/a</p>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
}
