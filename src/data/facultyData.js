import deanPhoto from '../assets/dean_picture.png'
import balontongPhoto from '../assets/balontong-754x1024.jpg'
import parrenoPhoto from '../assets/parreno-754x1024.jpg'
import cantelPhoto from '../assets/cantel-754x1024.jpg'
import pajarPhoto from '../assets/pajar-754x1024.jpg'
import beldiaPhoto from '../assets/beldia-754x1024.jpg'
import cambroneroPhoto from '../assets/cambronero-754x1024.jpg'
import dignadicePhoto from '../assets/dignadice-1-754x1024.jpg'
import eregiaPhoto from '../assets/eregia-754x1024.jpg'
import jardlezaPhoto from '../assets/jardleza-754x1024.jpg'
import montanoPhoto from '../assets/montano-754x1024.jpg'
import ojacastroPhoto from '../assets/ojacastro-754x1024.jpg'
import sapulPhoto from '../assets/sapul-754x1024.jpg'
import castanoPhoto from '../assets/castano-754x1024.jpg'
import taasanPhoto from '../assets/taasan-754x1024.jpg'
import adorPhoto from '../assets/ador-754x1024.jpg'
import riveraPhoto from '../assets/rivera-754x1024.png'

export const departments = [
  { id: 'all', name: 'All Personnel', badge: '17' },
  { id: 'admin', name: 'Administration', badge: '1' },
  { id: 'coordinators', name: 'Head & Coordinators', badge: '4' },
  { id: 'faculty', name: 'Teaching Faculty', badge: '8' },
  { id: 'staff', name: 'Service & Staff', badge: '4' }
]

export const faculty = [
  // Administration
  {
    id: 1,
    name: 'Ma. Christina A. Quijano, MSCS',
    degree: 'Master of Science in Computer Science',
    position: 'Dean, College of Computer Studies',
    department: 'admin',
    departmentName: 'Administration',
    photo: deanPhoto,
    email: 'mcquijano@cpu.edu.ph',
    bio: 'Leading the College of Computer Studies towards educational excellence and technological innovation.'
  },

  // Department Head and Coordinators
  {
    id: 2,
    name: 'Rea P. Balontong, MBA',
    degree: 'Master of Business Administration',
    position: 'Department Head (IT & IS)',
    department: 'coordinators',
    departmentName: 'Head & Coordinators',
    photo: balontongPhoto,
    email: 'rbalontong@cpu.edu.ph',
    bio: 'Oversees the Information Technology and Information Systems curriculum and industry alignments.'
  },
  {
    id: 3,
    name: 'Marjee Rose B. Parreño, MSCS, MBA',
    degree: 'Master of Science in Computer Science, MBA',
    position: 'Program Coordinator (BSCS, BSDMIA, and MSCS)',
    department: 'coordinators',
    departmentName: 'Head & Coordinators',
    photo: parrenoPhoto,
    email: 'mparreno@cpu.edu.ph',
    bio: 'Coordinates academic standards and research initiatives for Computer Science, Digital Media, and MSCS.'
  },
  {
    id: 4,
    name: 'Ana Mae B. Cantel, MLIS',
    degree: 'Master of Library and Information Science',
    position: 'Program Coordinator (BLIS and MLIS)',
    department: 'coordinators',
    departmentName: 'Head & Coordinators',
    photo: cantelPhoto,
    email: 'acantel@cpu.edu.ph',
    bio: 'Leads the Library & Information Science program, digital archives, and literacy programs.'
  },
  {
    id: 5,
    name: 'Lennon D. Pajar',
    degree: 'Computing Infrastructure Professional',
    position: 'Computer Laboratory Coordinator',
    department: 'coordinators',
    departmentName: 'Head & Coordinators',
    photo: pajarPhoto,
    email: 'lpajar@cpu.edu.ph',
    bio: 'Manages computer laboratory hardware, software licensing, and network infrastructure.'
  },

  // Teaching Faculty
  {
    id: 6,
    name: 'Leo Paulo B. Beldia',
    degree: 'Faculty - Information Technology',
    position: 'BSIT and BSIS Program Faculty',
    department: 'faculty',
    departmentName: 'Teaching Faculty',
    photo: beldiaPhoto,
    email: 'lbelda@cpu.edu.ph',
    bio: 'Specializes in web development, database management systems, and programming fundamentals.'
  },
  {
    id: 7,
    name: 'Pedro Peter Rhys B. Cambronero, MSCS',
    degree: 'Master of Science in Computer Science',
    position: 'BSCS Program Faculty',
    department: 'faculty',
    departmentName: 'Teaching Faculty',
    photo: cambroneroPhoto,
    email: 'pcambronero@cpu.edu.ph',
    bio: 'Teaches advanced algorithms, artificial intelligence, and theoretical computer science.'
  },
  {
    id: 8,
    name: 'Lesley Joy L. Dignadice, MBA',
    degree: 'Master of Business Administration',
    position: 'BSIT and BSIS Program Faculty',
    department: 'faculty',
    departmentName: 'Teaching Faculty',
    photo: dignadicePhoto,
    email: 'ldignadice@cpu.edu.ph',
    bio: 'Instructs enterprise resource planning, business analytics, and IT project management.'
  },
  {
    id: 9,
    name: 'Rodolfo C. Eregia, Jr.',
    degree: 'Faculty - Information Technology',
    position: 'BSIT and BSIS Program Faculty',
    department: 'faculty',
    departmentName: 'Teaching Faculty',
    photo: eregiaPhoto,
    email: 'reregia@cpu.edu.ph',
    bio: 'Focuses on mobile app development, client-side scripting, and hardware systems.'
  },
  {
    id: 10,
    name: 'Donie S. Jardeleza, MSCS',
    degree: 'Master of Science in Computer Science',
    position: 'BSIT and BSIS Program Faculty',
    department: 'faculty',
    departmentName: 'Teaching Faculty',
    photo: jardlezaPhoto,
    email: 'djardeleza@cpu.edu.ph',
    bio: 'Teaches computer networks, operating systems architecture, and system security.'
  },
  {
    id: 11,
    name: 'Antonio M. Montaño, Jr.',
    degree: 'Faculty - Information Technology',
    position: 'BSIT and BSIS Program Faculty',
    department: 'faculty',
    departmentName: 'Teaching Faculty',
    photo: montanoPhoto,
    email: 'amontano@cpu.edu.ph',
    bio: 'Lecturer in software design patterns, backend engineering, and cloud deployment.'
  },
  {
    id: 12,
    name: 'Rose Leah Joy A. Ojacastro, MSCS',
    degree: 'Master of Science in Computer Science',
    position: 'BSIT and BSIS Program Faculty',
    department: 'faculty',
    departmentName: 'Teaching Faculty',
    photo: ojacastroPhoto,
    email: 'rojacastro@cpu.edu.ph',
    bio: 'Specializes in object-oriented programming, data structures, and software testing.'
  },
  {
    id: 13,
    name: 'Ma. Sheila C. Sapul, Ph. D.',
    degree: 'Doctor of Philosophy',
    position: 'BSCS Program Faculty',
    department: 'faculty',
    departmentName: 'Teaching Faculty',
    photo: sapulPhoto,
    email: 'msapul@cpu.edu.ph',
    bio: 'Senior researcher and professor in computational intelligence and data mining.'
  },

  // Service and Support Staff
  {
    id: 14,
    name: 'Chrislyn C. Castaño',
    degree: 'Administrative Support',
    position: 'Secretary',
    department: 'staff',
    departmentName: 'Service & Staff',
    photo: castanoPhoto,
    email: 'ccastano@cpu.edu.ph',
    bio: 'Manages college administrative communications, student records, and office operations.'
  },
  {
    id: 15,
    name: 'A.M.P. Latter P. Taasan',
    degree: 'Technical Specialist',
    position: 'Computer Laboratory Technician',
    department: 'staff',
    departmentName: 'Service & Staff',
    photo: taasanPhoto,
    email: 'ataasan@cpu.edu.ph',
    bio: 'Ensures optimal performance and maintenance of computer laboratory workstations.'
  },
  {
    id: 16,
    name: 'Chriselda Elaine Ador',
    degree: 'Guidance & Counseling',
    position: 'Guidance Counselor',
    department: 'staff',
    departmentName: 'Service & Staff',
    photo: adorPhoto,
    email: 'cador@cpu.edu.ph',
    bio: 'Provides student counseling, academic advice, and mental health wellness support.'
  },
  {
    id: 17,
    name: 'Donna May Rivera',
    degree: 'Library & Information Services',
    position: 'Library Liaison Officer',
    department: 'staff',
    departmentName: 'Service & Staff',
    photo: riveraPhoto,
    email: 'drivera@cpu.edu.ph',
    bio: 'Coordinates digital and printed library resources for CCS students and faculty.'
  }
]
