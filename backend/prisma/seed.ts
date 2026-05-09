/// <reference types="node" />
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const colleges = [
  // IITs
  { name: "Indian Institute of Technology (IIT) Bombay", location: "Mumbai", state: "Maharashtra", fees: 850000, rating: 4.9, avgPackage: 23.5, placement: 95 },
  { name: "Indian Institute of Technology (IIT) Delhi", location: "New Delhi", state: "Delhi", fees: 800000, rating: 4.8, avgPackage: 20.5, placement: 94 },
  { name: "Indian Institute of Technology (IIT) Madras", location: "Chennai", state: "Tamil Nadu", fees: 810000, rating: 4.9, avgPackage: 21.4, placement: 93 },
  { name: "Indian Institute of Technology (IIT) Kanpur", location: "Kanpur", state: "Uttar Pradesh", fees: 830000, rating: 4.8, avgPackage: 20.0, placement: 90 },
  { name: "Indian Institute of Technology (IIT) Kharagpur", location: "Kharagpur", state: "West Bengal", fees: 820000, rating: 4.8, avgPackage: 19.5, placement: 91 },
  { name: "Indian Institute of Technology (IIT) Roorkee", location: "Roorkee", state: "Uttarakhand", fees: 840000, rating: 4.7, avgPackage: 18.5, placement: 89 },
  { name: "Indian Institute of Technology (IIT) Guwahati", location: "Guwahati", state: "Assam", fees: 800000, rating: 4.7, avgPackage: 17.5, placement: 88 },
  { name: "Indian Institute of Technology (IIT) Hyderabad", location: "Hyderabad", state: "Telangana", fees: 850000, rating: 4.7, avgPackage: 20.0, placement: 92 },
  { name: "Indian Institute of Technology (IIT) Indore", location: "Indore", state: "Madhya Pradesh", fees: 820000, rating: 4.6, avgPackage: 16.5, placement: 87 },
  { name: "Indian Institute of Technology (IIT) BHU", location: "Varanasi", state: "Uttar Pradesh", fees: 810000, rating: 4.6, avgPackage: 18.0, placement: 89 },
  { name: "Indian Institute of Technology (IIT) ISM Dhanbad", location: "Dhanbad", state: "Jharkhand", fees: 790000, rating: 4.5, avgPackage: 15.5, placement: 86 },
  { name: "Indian Institute of Technology (IIT) Bhubaneswar", location: "Bhubaneswar", state: "Odisha", fees: 830000, rating: 4.5, avgPackage: 16.0, placement: 85 },
  { name: "Indian Institute of Technology (IIT) Gandhinagar", location: "Gandhinagar", state: "Gujarat", fees: 840000, rating: 4.6, avgPackage: 15.0, placement: 84 },
  { name: "Indian Institute of Technology (IIT) Ropar", location: "Rupnagar", state: "Punjab", fees: 810000, rating: 4.5, avgPackage: 16.2, placement: 85 },
  { name: "Indian Institute of Technology (IIT) Patna", location: "Patna", state: "Bihar", fees: 800000, rating: 4.4, avgPackage: 14.5, placement: 83 },
  { name: "Indian Institute of Technology (IIT) Mandi", location: "Mandi", state: "Himachal Pradesh", fees: 820000, rating: 4.4, avgPackage: 15.8, placement: 84 },
  { name: "Indian Institute of Technology (IIT) Jodhpur", location: "Jodhpur", state: "Rajasthan", fees: 810000, rating: 4.4, avgPackage: 14.0, placement: 82 },
  { name: "Indian Institute of Technology (IIT) Tirupati", location: "Tirupati", state: "Andhra Pradesh", fees: 800000, rating: 4.3, avgPackage: 12.5, placement: 80 },
  { name: "Indian Institute of Technology (IIT) Bhilai", location: "Raipur", state: "Chhattisgarh", fees: 800000, rating: 4.2, avgPackage: 12.0, placement: 78 },
  { name: "Indian Institute of Technology (IIT) Goa", location: "Ponda", state: "Goa", fees: 820000, rating: 4.3, avgPackage: 13.5, placement: 81 },
  { name: "Indian Institute of Technology (IIT) Jammu", location: "Jammu", state: "Jammu and Kashmir", fees: 800000, rating: 4.2, avgPackage: 11.5, placement: 75 },
  { name: "Indian Institute of Technology (IIT) Dharwad", location: "Dharwad", state: "Karnataka", fees: 810000, rating: 4.2, avgPackage: 12.2, placement: 77 },
  { name: "Indian Institute of Technology (IIT) Palakkad", location: "Palakkad", state: "Kerala", fees: 800000, rating: 4.2, avgPackage: 11.8, placement: 76 },
  
  // NITs
  { name: "National Institute of Technology (NIT) Trichy", location: "Tiruchirappalli", state: "Tamil Nadu", fees: 650000, rating: 4.6, avgPackage: 12.5, placement: 92 },
  { name: "National Institute of Technology (NIT) Surathkal", location: "Surathkal", state: "Karnataka", fees: 680000, rating: 4.6, avgPackage: 13.0, placement: 93 },
  { name: "National Institute of Technology (NIT) Warangal", location: "Warangal", state: "Telangana", fees: 700000, rating: 4.6, avgPackage: 14.0, placement: 91 },
  { name: "National Institute of Technology (NIT) Rourkela", location: "Rourkela", state: "Odisha", fees: 640000, rating: 4.5, avgPackage: 11.5, placement: 90 },
  { name: "National Institute of Technology (NIT) Calicut", location: "Kozhikode", state: "Kerala", fees: 660000, rating: 4.5, avgPackage: 11.0, placement: 89 },
  { name: "National Institute of Technology (NIT) Kurukshetra", location: "Kurukshetra", state: "Haryana", fees: 620000, rating: 4.4, avgPackage: 10.5, placement: 88 },
  { name: "National Institute of Technology (NIT) Durgapur", location: "Durgapur", state: "West Bengal", fees: 630000, rating: 4.4, avgPackage: 9.8, placement: 87 },
  { name: "National Institute of Technology (NIT) Silchar", location: "Silchar", state: "Assam", fees: 600000, rating: 4.3, avgPackage: 9.5, placement: 86 },
  { name: "Malaviya National Institute of Technology (MNIT) Jaipur", location: "Jaipur", state: "Rajasthan", fees: 650000, rating: 4.5, avgPackage: 10.8, placement: 88 },
  { name: "Motilal Nehru National Institute of Technology (MNNIT)", location: "Prayagraj", state: "Uttar Pradesh", fees: 640000, rating: 4.6, avgPackage: 12.2, placement: 90 },
  { name: "Dr. B. R. Ambedkar National Institute of Technology", location: "Jalandhar", state: "Punjab", fees: 620000, rating: 4.3, avgPackage: 8.5, placement: 85 },
  { name: "Sardar Vallabhbhai National Institute of Technology", location: "Surat", state: "Gujarat", fees: 630000, rating: 4.4, avgPackage: 9.2, placement: 86 },
  { name: "National Institute of Technology (NIT) Meghalaya", location: "Shillong", state: "Meghalaya", fees: 600000, rating: 4.2, avgPackage: 7.5, placement: 80 },
  { name: "Maulana Azad National Institute of Technology (MANIT)", location: "Bhopal", state: "Madhya Pradesh", fees: 630000, rating: 4.4, avgPackage: 9.0, placement: 85 },
  { name: "National Institute of Technology (NIT) Raipur", location: "Raipur", state: "Chhattisgarh", fees: 610000, rating: 4.3, avgPackage: 8.2, placement: 84 },
  { name: "National Institute of Technology (NIT) Agartala", location: "Agartala", state: "Tripura", fees: 600000, rating: 4.2, avgPackage: 7.8, placement: 81 },
  { name: "National Institute of Technology (NIT) Goa", location: "Ponda", state: "Goa", fees: 640000, rating: 4.3, avgPackage: 8.0, placement: 83 },
  { name: "National Institute of Technology (NIT) Jamshedpur", location: "Jamshedpur", state: "Jharkhand", fees: 620000, rating: 4.4, avgPackage: 9.5, placement: 86 },
  { name: "National Institute of Technology (NIT) Patna", location: "Patna", state: "Bihar", fees: 610000, rating: 4.3, avgPackage: 8.8, placement: 84 },
  { name: "National Institute of Technology (NIT) Hamirpur", location: "Hamirpur", state: "Himachal Pradesh", fees: 630000, rating: 4.4, avgPackage: 8.6, placement: 85 },
  
  // IIITs
  { name: "International Institute of Information Technology (IIIT) Hyderabad", location: "Hyderabad", state: "Telangana", fees: 1400000, rating: 4.9, avgPackage: 30.0, placement: 99 },
  { name: "International Institute of Information Technology (IIIT) Bangalore", location: "Bangalore", state: "Karnataka", fees: 1500000, rating: 4.8, avgPackage: 25.0, placement: 98 },
  { name: "Indian Institute of Information Technology (IIIT) Allahabad", location: "Prayagraj", state: "Uttar Pradesh", fees: 800000, rating: 4.7, avgPackage: 22.5, placement: 96 },
  { name: "Indraprastha Institute of Information Technology (IIIT) Delhi", location: "New Delhi", state: "Delhi", fees: 1200000, rating: 4.8, avgPackage: 21.0, placement: 97 },
  { name: "ABV-Indian Institute of Information Technology and Management", location: "Gwalior", state: "Madhya Pradesh", fees: 750000, rating: 4.5, avgPackage: 15.5, placement: 90 },
  { name: "Indian Institute of Information Technology (IIIT) Jabalpur", location: "Jabalpur", state: "Madhya Pradesh", fees: 700000, rating: 4.4, avgPackage: 12.0, placement: 88 },
  { name: "Indian Institute of Information Technology (IIIT) Kancheepuram", location: "Chennai", state: "Tamil Nadu", fees: 720000, rating: 4.4, avgPackage: 11.5, placement: 87 },
  { name: "Indian Institute of Information Technology (IIIT) Guwahati", location: "Guwahati", state: "Assam", fees: 700000, rating: 4.3, avgPackage: 10.5, placement: 86 },
  { name: "Indian Institute of Information Technology (IIIT) Pune", location: "Pune", state: "Maharashtra", fees: 800000, rating: 4.4, avgPackage: 11.0, placement: 88 },
  { name: "Indian Institute of Information Technology (IIIT) Kota", location: "Kota", state: "Rajasthan", fees: 700000, rating: 4.3, avgPackage: 10.0, placement: 85 },
  
  // Prominent Private & State Universities
  { name: "Birla Institute of Technology and Science (BITS)", location: "Pilani", state: "Rajasthan", fees: 2200000, rating: 4.8, avgPackage: 19.3, placement: 96 },
  { name: "BITS Pilani, Goa Campus", location: "Zuarinagar", state: "Goa", fees: 2100000, rating: 4.7, avgPackage: 17.5, placement: 94 },
  { name: "BITS Pilani, Hyderabad Campus", location: "Hyderabad", state: "Telangana", fees: 2100000, rating: 4.7, avgPackage: 17.0, placement: 94 },
  { name: "Vellore Institute of Technology (VIT)", location: "Vellore", state: "Tamil Nadu", fees: 1600000, rating: 4.4, avgPackage: 8.2, placement: 90 },
  { name: "Vellore Institute of Technology (VIT) Chennai", location: "Chennai", state: "Tamil Nadu", fees: 1600000, rating: 4.3, avgPackage: 7.8, placement: 88 },
  { name: "Manipal Institute of Technology (MIT)", location: "Manipal", state: "Karnataka", fees: 1800000, rating: 4.4, avgPackage: 10.5, placement: 88 },
  { name: "SRM Institute of Science and Technology", location: "Chennai", state: "Tamil Nadu", fees: 1400000, rating: 4.1, avgPackage: 6.5, placement: 85 },
  { name: "Thapar Institute of Engineering and Technology", location: "Patiala", state: "Punjab", fees: 1800000, rating: 4.5, avgPackage: 10.0, placement: 89 },
  { name: "Nirma University", location: "Ahmedabad", state: "Gujarat", fees: 1000000, rating: 4.3, avgPackage: 7.5, placement: 86 },
  { name: "Dhirubhai Ambani Institute of Information and Communication Tech (DA-IICT)", location: "Gandhinagar", state: "Gujarat", fees: 1200000, rating: 4.7, avgPackage: 15.5, placement: 95 },
  { name: "R.V. College of Engineering (RVCE)", location: "Bangalore", state: "Karnataka", fees: 1000000, rating: 4.5, avgPackage: 10.0, placement: 92 },
  { name: "B.M.S. College of Engineering", location: "Bangalore", state: "Karnataka", fees: 950000, rating: 4.4, avgPackage: 8.5, placement: 90 },
  { name: "Ramaiah Institute of Technology (MSRIT)", location: "Bangalore", state: "Karnataka", fees: 950000, rating: 4.4, avgPackage: 8.0, placement: 89 },
  { name: "Amrita Vishwa Vidyapeetham", location: "Coimbatore", state: "Tamil Nadu", fees: 1500000, rating: 4.3, avgPackage: 7.0, placement: 87 },
  { name: "Kalinga Institute of Industrial Technology (KIIT)", location: "Bhubaneswar", state: "Odisha", fees: 1600000, rating: 4.1, avgPackage: 6.5, placement: 85 },
  { name: "Symbiosis Institute of Technology (SIT)", location: "Pune", state: "Maharashtra", fees: 1400000, rating: 4.2, avgPackage: 6.8, placement: 84 },
  { name: "Amity University", location: "Noida", state: "Uttar Pradesh", fees: 1800000, rating: 3.9, avgPackage: 5.5, placement: 80 },
  { name: "Lovely Professional University (LPU)", location: "Phagwara", state: "Punjab", fees: 1200000, rating: 3.9, avgPackage: 5.0, placement: 80 },
  { name: "Sharda University", location: "Greater Noida", state: "Uttar Pradesh", fees: 1100000, rating: 3.8, avgPackage: 4.5, placement: 78 },
  { name: "Chandigarh University", location: "Mohali", state: "Punjab", fees: 1000000, rating: 4.0, avgPackage: 6.0, placement: 82 },
  
  // State Govt & Other reputed
  { name: "Jadavpur University", location: "Kolkata", state: "West Bengal", fees: 12000, rating: 4.8, avgPackage: 16.0, placement: 93 },
  { name: "Delhi Technological University (DTU)", location: "New Delhi", state: "Delhi", fees: 750000, rating: 4.7, avgPackage: 15.0, placement: 90 },
  { name: "Netaji Subhas University of Technology (NSUT)", location: "New Delhi", state: "Delhi", fees: 750000, rating: 4.6, avgPackage: 14.5, placement: 89 },
  { name: "College of Engineering Pune (COEP)", location: "Pune", state: "Maharashtra", fees: 380000, rating: 4.6, avgPackage: 10.5, placement: 88 },
  { name: "Veermata Jijabai Technological Institute (VJTI)", location: "Mumbai", state: "Maharashtra", fees: 350000, rating: 4.6, avgPackage: 10.0, placement: 89 },
  { name: "Sardar Patel Institute of Technology (SPIT)", location: "Mumbai", state: "Maharashtra", fees: 700000, rating: 4.4, avgPackage: 9.5, placement: 87 },
  { name: "Pune Institute of Computer Technology (PICT)", location: "Pune", state: "Maharashtra", fees: 650000, rating: 4.3, avgPackage: 8.5, placement: 86 },
  { name: "Anna University", location: "Chennai", state: "Tamil Nadu", fees: 250000, rating: 4.5, avgPackage: 7.5, placement: 85 },
  { name: "PSG College of Technology", location: "Coimbatore", state: "Tamil Nadu", fees: 400000, rating: 4.5, avgPackage: 8.0, placement: 86 },
  { name: "SSN College of Engineering", location: "Chennai", state: "Tamil Nadu", fees: 500000, rating: 4.4, avgPackage: 7.8, placement: 87 },
  { name: "College of Engineering Guindy (CEG)", location: "Chennai", state: "Tamil Nadu", fees: 250000, rating: 4.6, avgPackage: 8.5, placement: 88 },
  { name: "Osmania University", location: "Hyderabad", state: "Telangana", fees: 200000, rating: 4.2, avgPackage: 6.5, placement: 80 },
  { name: "JNTU Hyderabad", location: "Hyderabad", state: "Telangana", fees: 250000, rating: 4.3, avgPackage: 7.0, placement: 82 },
  { name: "Harcourt Butler Technical University (HBTU)", location: "Kanpur", state: "Uttar Pradesh", fees: 450000, rating: 4.2, avgPackage: 6.5, placement: 80 },
  { name: "Madan Mohan Malaviya University of Technology (MMMUT)", location: "Gorakhpur", state: "Uttar Pradesh", fees: 400000, rating: 4.1, avgPackage: 6.0, placement: 78 },
  { name: "Institute of Chemical Technology (ICT)", location: "Mumbai", state: "Maharashtra", fees: 350000, rating: 4.8, avgPackage: 11.0, placement: 92 },
  { name: "Punjab Engineering College (PEC)", location: "Chandigarh", state: "Chandigarh", fees: 650000, rating: 4.5, avgPackage: 10.5, placement: 88 },
  { name: "Heritage Institute of Technology", location: "Kolkata", state: "West Bengal", fees: 450000, rating: 4.0, avgPackage: 5.5, placement: 75 },
  { name: "BMS Institute of Technology and Management", location: "Bangalore", state: "Karnataka", fees: 800000, rating: 4.1, avgPackage: 6.0, placement: 78 },
  { name: "P.E.S. University", location: "Bangalore", state: "Karnataka", fees: 1400000, rating: 4.3, avgPackage: 8.0, placement: 85 },
  { name: "Galgotias University", location: "Greater Noida", state: "Uttar Pradesh", fees: 800000, rating: 3.8, avgPackage: 4.5, placement: 72 },
  { name: "KL University", location: "Vijayawada", state: "Andhra Pradesh", fees: 1100000, rating: 4.0, avgPackage: 5.5, placement: 76 },
  { name: "Jaypee Institute of Information Technology", location: "Noida", state: "Uttar Pradesh", fees: 1200000, rating: 4.2, avgPackage: 7.0, placement: 82 },
  { name: "Ganeshi Lal Bajaj Institute of Technology", location: "Greater Noida", state: "Uttar Pradesh", fees: 600000, rating: 3.9, avgPackage: 5.0, placement: 75 },
  { name: "Sathyabama Institute of Science and Technology", location: "Chennai", state: "Tamil Nadu", fees: 1000000, rating: 4.0, avgPackage: 5.5, placement: 78 },
  { name: "Shiv Nadar University", location: "Greater Noida", state: "Uttar Pradesh", fees: 1600000, rating: 4.4, avgPackage: 9.5, placement: 87 },
  { name: "BML Munjal University", location: "Gurugram", state: "Haryana", fees: 1400000, rating: 4.2, avgPackage: 7.5, placement: 83 },
  { name: "JNTU Kakinada", location: "Kakinada", state: "Andhra Pradesh", fees: 40000, rating: 4.1, avgPackage: 5.5, placement: 75 },
  { name: "Andhra University College of Engineering", location: "Visakhapatnam", state: "Andhra Pradesh", fees: 50000, rating: 4.3, avgPackage: 6.5, placement: 82 },
  { name: "Sri Venkateswara University College of Engineering", location: "Tirupati", state: "Andhra Pradesh", fees: 45000, rating: 4.1, avgPackage: 5.8, placement: 78 },
  { name: "National Institute of Technology (NIT) Srinagar", location: "Srinagar", state: "Jammu and Kashmir", fees: 650000, rating: 4.1, avgPackage: 8.0, placement: 82 },
  { name: "UIET Chandigarh", location: "Chandigarh", state: "Chandigarh", fees: 350000, rating: 4.2, avgPackage: 7.5, placement: 85 },
  { name: "M.S. Ramaiah University of Applied Sciences", location: "Bangalore", state: "Karnataka", fees: 900000, rating: 4.0, avgPackage: 5.5, placement: 80 },
  { name: "Nitte Meenakshi Institute of Technology (NMIT)", location: "Bangalore", state: "Karnataka", fees: 850000, rating: 4.1, avgPackage: 6.2, placement: 85 },
  { name: "Dayananda Sagar College of Engineering (DSCE)", location: "Bangalore", state: "Karnataka", fees: 950000, rating: 4.2, avgPackage: 7.0, placement: 88 },
  { name: "Bangalore Institute of Technology (BIT)", location: "Bangalore", state: "Karnataka", fees: 800000, rating: 4.1, avgPackage: 6.5, placement: 84 },
  { name: "RNS Institute of Technology", location: "Bangalore", state: "Karnataka", fees: 750000, rating: 4.0, avgPackage: 5.8, placement: 82 },
  { name: "Sir M. Visvesvaraya Institute of Technology (Sir MVIT)", location: "Bangalore", state: "Karnataka", fees: 700000, rating: 4.0, avgPackage: 5.5, placement: 80 },
  { name: "New Horizon College of Engineering", location: "Bangalore", state: "Karnataka", fees: 850000, rating: 4.1, avgPackage: 6.0, placement: 85 },
  { name: "CMR Institute of Technology", location: "Bangalore", state: "Karnataka", fees: 800000, rating: 4.0, avgPackage: 5.5, placement: 82 },
  { name: "SJB Institute of Technology", location: "Bangalore", state: "Karnataka", fees: 750000, rating: 3.9, avgPackage: 5.0, placement: 78 },
  { name: "National Institute of Engineering (NIE)", location: "Mysore", state: "Karnataka", fees: 600000, rating: 4.2, avgPackage: 6.5, placement: 86 },
  { name: "Sri Jayachamarajendra College of Engineering (SJCE)", location: "Mysore", state: "Karnataka", fees: 650000, rating: 4.3, avgPackage: 7.0, placement: 88 },
  { name: "Vidyavardhaka College of Engineering", location: "Mysore", state: "Karnataka", fees: 550000, rating: 3.9, avgPackage: 5.0, placement: 75 },
  { name: "NMAM Institute of Technology", location: "Nitte", state: "Karnataka", fees: 700000, rating: 4.1, avgPackage: 6.0, placement: 84 },
  { name: "KLE Technological University", location: "Hubli", state: "Karnataka", fees: 650000, rating: 4.2, avgPackage: 6.5, placement: 85 },
  { name: "SDM College of Engineering and Technology", location: "Dharwad", state: "Karnataka", fees: 600000, rating: 4.1, avgPackage: 5.8, placement: 82 },
  { name: "SASTRA Deemed University", location: "Thanjavur", state: "Tamil Nadu", fees: 750000, rating: 4.4, avgPackage: 8.0, placement: 90 },
  { name: "Hindustan Institute of Technology and Science", location: "Chennai", state: "Tamil Nadu", fees: 900000, rating: 4.0, avgPackage: 5.5, placement: 78 },
  { name: "Rajalakshmi Engineering College", location: "Chennai", state: "Tamil Nadu", fees: 700000, rating: 4.2, avgPackage: 6.5, placement: 85 },
  { name: "Sri Sai Ram Engineering College", location: "Chennai", state: "Tamil Nadu", fees: 650000, rating: 4.1, avgPackage: 6.0, placement: 84 },
  { name: "RMK Engineering College", location: "Chennai", state: "Tamil Nadu", fees: 650000, rating: 4.1, avgPackage: 6.2, placement: 85 },
  { name: "St. Joseph's College of Engineering", location: "Chennai", state: "Tamil Nadu", fees: 600000, rating: 4.0, avgPackage: 5.5, placement: 82 },
  { name: "Sriram Engineering College", location: "Chennai", state: "Tamil Nadu", fees: 550000, rating: 3.8, avgPackage: 4.5, placement: 75 },
  { name: "Kumaraguru College of Technology", location: "Coimbatore", state: "Tamil Nadu", fees: 750000, rating: 4.3, avgPackage: 7.0, placement: 88 },
  { name: "Sri Krishna College of Engineering and Technology", location: "Coimbatore", state: "Tamil Nadu", fees: 700000, rating: 4.2, avgPackage: 6.5, placement: 86 },
  { name: "Bannari Amman Institute of Technology", location: "Sathyamangalam", state: "Tamil Nadu", fees: 650000, rating: 4.1, avgPackage: 6.0, placement: 85 },
  { name: "Kongu Engineering College", location: "Erode", state: "Tamil Nadu", fees: 600000, rating: 4.1, avgPackage: 5.8, placement: 84 },
  { name: "Mepco Schlenk Engineering College", location: "Sivakasi", state: "Tamil Nadu", fees: 550000, rating: 4.1, avgPackage: 6.0, placement: 85 },
  { name: "Thiagarajar College of Engineering", location: "Madurai", state: "Tamil Nadu", fees: 250000, rating: 4.4, avgPackage: 7.5, placement: 88 },
  { name: "Karunya Institute of Technology and Sciences", location: "Coimbatore", state: "Tamil Nadu", fees: 900000, rating: 4.0, avgPackage: 5.5, placement: 80 },
  { name: "Vels Institute of Science, Technology & Advanced Studies", location: "Chennai", state: "Tamil Nadu", fees: 800000, rating: 3.9, avgPackage: 4.8, placement: 75 },
  { name: "Meenakshi Sundararajan Engineering College", location: "Chennai", state: "Tamil Nadu", fees: 500000, rating: 4.0, avgPackage: 5.0, placement: 80 },
  { name: "Easwari Engineering College", location: "Chennai", state: "Tamil Nadu", fees: 650000, rating: 4.1, avgPackage: 5.5, placement: 82 },
  { name: "Government College of Technology (GCT)", location: "Coimbatore", state: "Tamil Nadu", fees: 150000, rating: 4.3, avgPackage: 6.5, placement: 86 },
  { name: "Vishwakarma Institute of Technology (VIT)", location: "Pune", state: "Maharashtra", fees: 750000, rating: 4.4, avgPackage: 8.5, placement: 89 },
  { name: "Walchand College of Engineering", location: "Sangli", state: "Maharashtra", fees: 350000, rating: 4.3, avgPackage: 8.0, placement: 88 },
  { name: "MIT World Peace University (MIT-WPU)", location: "Pune", state: "Maharashtra", fees: 1200000, rating: 4.1, avgPackage: 6.5, placement: 82 },
  { name: "D.J. Sanghvi College of Engineering", location: "Mumbai", state: "Maharashtra", fees: 800000, rating: 4.3, avgPackage: 8.5, placement: 88 },
  { name: "K.J. Somaiya College of Engineering", location: "Mumbai", state: "Maharashtra", fees: 950000, rating: 4.2, avgPackage: 7.5, placement: 85 },
  { name: "Thadomal Shahani Engineering College (TSEC)", location: "Mumbai", state: "Maharashtra", fees: 700000, rating: 4.1, avgPackage: 6.5, placement: 84 },
  { name: "Fr. Conceicao Rodrigues College of Engineering", location: "Mumbai", state: "Maharashtra", fees: 650000, rating: 4.0, avgPackage: 6.0, placement: 82 },
  { name: "Mukesh Patel School of Technology Management and Engineering", location: "Mumbai", state: "Maharashtra", fees: 1400000, rating: 4.0, avgPackage: 7.0, placement: 85 },
  { name: "Rajiv Gandhi Institute of Technology", location: "Mumbai", state: "Maharashtra", fees: 600000, rating: 3.9, avgPackage: 5.5, placement: 78 },
  { name: "Vidyalankar Institute of Technology", location: "Mumbai", state: "Maharashtra", fees: 550000, rating: 4.0, avgPackage: 5.8, placement: 80 },
  { name: "Ramrao Adik Institute of Technology (RAIT)", location: "Navi Mumbai", state: "Maharashtra", fees: 850000, rating: 4.1, avgPackage: 6.0, placement: 82 },
  { name: "Pimpri Chinchwad College of Engineering (PCCOE)", location: "Pune", state: "Maharashtra", fees: 650000, rating: 4.2, avgPackage: 6.5, placement: 85 },
  { name: "Cummins College of Engineering for Women", location: "Pune", state: "Maharashtra", fees: 700000, rating: 4.3, avgPackage: 7.5, placement: 88 },
  { name: "Shri Ramdeobaba College of Engineering and Management", location: "Nagpur", state: "Maharashtra", fees: 650000, rating: 4.2, avgPackage: 6.5, placement: 85 },
  { name: "Yeshwantrao Chavan College of Engineering (YCCE)", location: "Nagpur", state: "Maharashtra", fees: 600000, rating: 4.1, avgPackage: 5.5, placement: 82 },
  { name: "Government College of Engineering", location: "Aurangabad", state: "Maharashtra", fees: 250000, rating: 4.0, avgPackage: 5.0, placement: 78 },
  { name: "Government College of Engineering", location: "Amravati", state: "Maharashtra", fees: 250000, rating: 4.0, avgPackage: 5.0, placement: 78 },
  { name: "NBN Sinhgad Technical Institutes Campus", location: "Pune", state: "Maharashtra", fees: 500000, rating: 3.8, avgPackage: 4.5, placement: 75 },
  { name: "Chaitanya Bharathi Institute of Technology (CBIT)", location: "Hyderabad", state: "Telangana", fees: 850000, rating: 4.3, avgPackage: 7.5, placement: 88 },
  { name: "Vasavi College of Engineering", location: "Hyderabad", state: "Telangana", fees: 800000, rating: 4.2, avgPackage: 7.0, placement: 86 },
  { name: "VNR Vignana Jyothi Institute of Engineering and Technology", location: "Hyderabad", state: "Telangana", fees: 750000, rating: 4.2, avgPackage: 6.5, placement: 85 },
  { name: "Gokaraju Rangaraju Institute of Engineering and Technology", location: "Hyderabad", state: "Telangana", fees: 700000, rating: 4.1, avgPackage: 6.0, placement: 84 },
  { name: "Mahatma Gandhi Institute of Technology (MGIT)", location: "Hyderabad", state: "Telangana", fees: 650000, rating: 4.0, avgPackage: 5.5, placement: 82 },
  { name: "Vardhaman College of Engineering", location: "Hyderabad", state: "Telangana", fees: 600000, rating: 4.1, avgPackage: 5.8, placement: 82 },
  { name: "CVR College of Engineering", location: "Hyderabad", state: "Telangana", fees: 550000, rating: 4.0, avgPackage: 5.5, placement: 80 },
  { name: "BVRIT Hyderabad College of Engineering for Women", location: "Hyderabad", state: "Telangana", fees: 600000, rating: 4.1, avgPackage: 6.0, placement: 84 },
  { name: "Kakatiya Institute of Technology and Science", location: "Warangal", state: "Telangana", fees: 500000, rating: 4.0, avgPackage: 5.0, placement: 78 },
  { name: "Sreenidhi Institute of Science and Technology", location: "Hyderabad", state: "Telangana", fees: 700000, rating: 4.1, avgPackage: 5.8, placement: 82 },
  { name: "Institute of Aeronautical Engineering", location: "Hyderabad", state: "Telangana", fees: 550000, rating: 3.9, avgPackage: 5.0, placement: 75 },
  { name: "Malla Reddy Engineering College", location: "Hyderabad", state: "Telangana", fees: 600000, rating: 3.8, avgPackage: 4.8, placement: 72 },
  { name: "Anurag University", location: "Hyderabad", state: "Telangana", fees: 850000, rating: 4.0, avgPackage: 5.5, placement: 80 },
  { name: "G. Pulla Reddy Engineering College", location: "Kurnool", state: "Andhra Pradesh", fees: 450000, rating: 4.0, avgPackage: 5.0, placement: 78 },
  { name: "JNTUA College of Engineering", location: "Anantapur", state: "Andhra Pradesh", fees: 60000, rating: 4.1, avgPackage: 5.5, placement: 80 },
  { name: "Gayatri Vidya Parishad College of Engineering", location: "Visakhapatnam", state: "Andhra Pradesh", fees: 600000, rating: 4.2, avgPackage: 6.0, placement: 82 },
  { name: "RVR & JC College of Engineering", location: "Guntur", state: "Andhra Pradesh", fees: 550000, rating: 4.1, avgPackage: 5.5, placement: 80 },
  { name: "Sree Vidyanikethan Engineering College", location: "Tirupati", state: "Andhra Pradesh", fees: 650000, rating: 4.1, avgPackage: 6.0, placement: 84 },
  { name: "Prasad V. Potluri Siddhartha Institute of Technology", location: "Vijayawada", state: "Andhra Pradesh", fees: 500000, rating: 4.0, avgPackage: 5.0, placement: 78 },
  { name: "Maharaj Vijayaram Gajapathi Raj College of Engineering", location: "Vizianagaram", state: "Andhra Pradesh", fees: 450000, rating: 3.9, avgPackage: 4.8, placement: 75 },
  { name: "Velagapudi Ramakrishna Siddhartha Engineering College", location: "Vijayawada", state: "Andhra Pradesh", fees: 550000, rating: 4.1, avgPackage: 5.5, placement: 82 },
  { name: "L.D. College of Engineering", location: "Ahmedabad", state: "Gujarat", fees: 40000, rating: 4.3, avgPackage: 6.5, placement: 88 },
  { name: "Vishwakarma Government Engineering College", location: "Ahmedabad", state: "Gujarat", fees: 35000, rating: 4.1, avgPackage: 5.5, placement: 82 },
  { name: "Pandit Deendayal Energy University (PDEU)", location: "Gandhinagar", state: "Gujarat", fees: 1100000, rating: 4.2, avgPackage: 7.0, placement: 85 },
  { name: "Dharmsinh Desai University (DDU)", location: "Nadiad", state: "Gujarat", fees: 650000, rating: 4.2, avgPackage: 6.5, placement: 86 },
  { name: "Maharaja Sayajirao University of Baroda (MSU)", location: "Vadodara", state: "Gujarat", fees: 45000, rating: 4.2, avgPackage: 6.0, placement: 84 },
  { name: "Institute of Infrastructure, Technology, Research and Management (IITRAM)", location: "Ahmedabad", state: "Gujarat", fees: 500000, rating: 4.0, avgPackage: 5.5, placement: 80 },
  { name: "Sarvajanik College of Engineering and Technology", location: "Surat", state: "Gujarat", fees: 450000, rating: 3.9, avgPackage: 5.0, placement: 78 },
  { name: "G H Patel College of Engineering and Technology", location: "Vallabh Vidyanagar", state: "Gujarat", fees: 550000, rating: 4.0, avgPackage: 5.5, placement: 80 },
  { name: "Birla Vishvakarma Mahavidyalaya", location: "Vallabh Vidyanagar", state: "Gujarat", fees: 600000, rating: 4.1, avgPackage: 6.0, placement: 82 },
  { name: "Government Engineering College", location: "Gandhinagar", state: "Gujarat", fees: 30000, rating: 3.9, avgPackage: 4.8, placement: 75 },
  { name: "Assam Engineering College", location: "Guwahati", state: "Assam", fees: 60000, rating: 4.1, avgPackage: 5.5, placement: 80 },
  { name: "Jorhat Engineering College", location: "Jorhat", state: "Assam", fees: 50000, rating: 4.0, avgPackage: 5.0, placement: 78 },
  { name: "Tezpur University", location: "Tezpur", state: "Assam", fees: 350000, rating: 4.2, avgPackage: 6.0, placement: 82 },
  { name: "North Eastern Regional Institute of Science and Technology (NERIST)", location: "Itanagar", state: "Arunachal Pradesh", fees: 250000, rating: 4.0, avgPackage: 5.5, placement: 78 },
  { name: "Sikkim Manipal Institute of Technology", location: "Majitar", state: "Sikkim", fees: 1100000, rating: 4.1, avgPackage: 6.5, placement: 85 },
  { name: "C.V. Raman Global University", location: "Bhubaneswar", state: "Odisha", fees: 850000, rating: 4.0, avgPackage: 5.5, placement: 80 },
  { name: "Silicon Institute of Technology", location: "Bhubaneswar", state: "Odisha", fees: 650000, rating: 4.1, avgPackage: 6.0, placement: 84 },
  { name: "Veer Surendra Sai University of Technology (VSSUT)", location: "Burla", state: "Odisha", fees: 350000, rating: 4.2, avgPackage: 6.5, placement: 85 },
  { name: "Indira Gandhi Institute of Technology (IGIT)", location: "Sarang", state: "Odisha", fees: 250000, rating: 4.0, avgPackage: 5.0, placement: 78 },
  { name: "College of Engineering and Technology (CET)", location: "Bhubaneswar", state: "Odisha", fees: 300000, rating: 4.1, avgPackage: 5.8, placement: 82 },
  { name: "Haldia Institute of Technology", location: "Haldia", state: "West Bengal", fees: 550000, rating: 4.1, avgPackage: 6.0, placement: 84 },
  { name: "Institute of Engineering and Management (IEM)", location: "Kolkata", state: "West Bengal", fees: 700000, rating: 4.2, avgPackage: 6.5, placement: 86 },
  { name: "Techno Main Salt Lake", location: "Kolkata", state: "West Bengal", fees: 650000, rating: 4.0, avgPackage: 5.5, placement: 82 },
  { name: "Jalpaiguri Government Engineering College", location: "Jalpaiguri", state: "West Bengal", fees: 80000, rating: 4.1, avgPackage: 5.8, placement: 82 },
  { name: "Kalyani Government Engineering College", location: "Kalyani", state: "West Bengal", fees: 90000, rating: 4.2, avgPackage: 6.0, placement: 85 }
];

async function main() {
  console.log('Start seeding real Indian college data...');

  await prisma.placement.deleteMany();
  await prisma.course.deleteMany();
  await prisma.college.deleteMany();

  const delay = (ms: number) => new Promise(res => setTimeout(res, ms));
  const batchSize = 10;

  for (let i = 0; i < colleges.length; i += batchSize) {
    const batch = colleges.slice(i, i + batchSize);
    for (const c of batch) {
      const college = await prisma.college.create({
        data: {
          name: c.name,
          location: c.location,
          state: c.state,
          fees: c.fees,
          rating: c.rating,
          courses: {
            create: [
              { name: "Computer Science and Engineering", duration: "4 Years" },
              { name: "Electronics and Communication", duration: "4 Years" },
              { name: "Mechanical Engineering", duration: "4 Years" }
            ]
          },
          placements: {
            create: [
              { averagePackage: c.avgPackage, placementPercentage: c.placement }
            ]
          }
        }
      });
      console.log(`Created college: ${college.name}`);
    }
    console.log(`✔ Batch ${Math.floor(i / batchSize) + 1} done — waiting 500ms...`);
    await delay(500);
  }

  console.log('Seeding finished.');
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
