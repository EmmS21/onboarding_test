import React, { useEffect, useState } from 'react';
import { Inter } from "next/font/google";
import NavBar from '@/components/NavBar';
import ReusableBox from '@/components/ReusableBox';
import { fetchCourses } from '../helpers/fetchData';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const getCoursesData = async () => {
      const data = await fetchCourses();
      setCourses(data);
    };

    getCoursesData();
  }, []);

  return (
    <main className={`flex min-h-screen flex-col items-center ${inter.className}`}>
      <NavBar/>
      <div className="mt-8 md:mt-12 lg:mt-16 w-full flex justify-center">
        <div className="w-3/4 flex-col justify-between">
          <ReusableBox 
            boxWidth={'75'}
            boxHeight={'40'}
            boxText={'Leadership Board'}
            showStack={true}
          />
          <div className="mt-8 grid grid-cols-3 gap-4"> 
            {courses.map((course, index) => (
              <ReusableBox 
                key={index}
                boxWidth={'100%'} 
                boxHeight={'20'}
                showStack={false} 
                courseData={{
                  course_name: course['Course Name'], 
                  course_duration: course['Course Duration'], 
                  progress: course['Progress'] 
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
