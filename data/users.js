const DEMO_USERS = {
  '9001015800082': {
    full_name: 'Thabo Nkosi',
    initials: 'TN',
    blood_type: 'O+',
    allergies: 'Penicillin',
    medical_condition: 'None',
    phone: '082 *** 3417',
    contacts: [
      { name: 'Nomsa Nkosi', relationship: 'Spouse', priority: 1, status: 'confirmed' },
      { name: 'Joseph Nkosi', relationship: 'Father', priority: 2, status: 'confirmed' },
      { name: 'Sipho Radebe', relationship: 'Close friend', priority: 3, status: 'pending' }
    ]
  },
  '8505120456089': {
    full_name: 'Zanele Mokoena',
    initials: 'ZM',
    blood_type: 'A+',
    allergies: 'None',
    medical_condition: 'Asthma',
    phone: '071 *** 8823',
    contacts: [
      { name: 'David Mokoena', relationship: 'Husband', priority: 1, status: 'confirmed' },
      { name: 'Grace Dlamini', relationship: 'Mother', priority: 2, status: 'confirmed' },
      { name: 'Lerato Sithole', relationship: 'Sister', priority: 3, status: 'confirmed' }
    ]
  },
  '7203084567083': {
    full_name: 'Siphamandla Zulu',
    initials: 'SZ',
    blood_type: 'B-',
    allergies: 'Aspirin',
    medical_condition: 'Diabetic',
    phone: '060 *** 4491',
    contacts: [
      { name: 'Lindiwe Zulu', relationship: 'Wife', priority: 1, status: 'confirmed' },
      { name: 'Bongani Zulu', relationship: 'Brother', priority: 2, status: 'confirmed' },
      { name: 'Dr. Patel Clinic', relationship: 'Doctor', priority: 3, status: 'confirmed' }
    ]
  },
  '9506144231087': {
    full_name: 'Amahle van der Berg',
    initials: 'AV',
    blood_type: 'AB+',
    allergies: 'Latex',
    medical_condition: 'Epilepsy',
    phone: '083 *** 7712',
    contacts: [
      { name: 'Pieter van der Berg', relationship: 'Father', priority: 1, status: 'confirmed' },
      { name: 'Chantelle van der Berg', relationship: 'Mother', priority: 1, status: 'confirmed' },
      { name: 'Ryan Jacobs', relationship: 'Partner', priority: 2, status: 'confirmed' }
    ]
  },
  '8812276890081': {
    full_name: 'Mohamed Cassim',
    initials: 'MC',
    blood_type: 'A-',
    allergies: 'Sulfa drugs',
    medical_condition: 'Hypertension',
    phone: '079 *** 5530',
    contacts: [
      { name: 'Fatima Cassim', relationship: 'Wife', priority: 1, status: 'confirmed' },
      { name: 'Imran Cassim', relationship: 'Son', priority: 2, status: 'confirmed' },
      { name: 'Abdullah Cassim', relationship: 'Brother', priority: 3, status: 'pending' }
    ]
  }
};

if (typeof module !== 'undefined') module.exports = DEMO_USERS;
