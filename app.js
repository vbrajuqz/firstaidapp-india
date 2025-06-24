// Sample data for demonstration
const statesData = {
  "Maharashtra": ["Mumbai", "Pune", "Nagpur"],
  "Tamil Nadu": ["Chennai", "Coimbatore"],
  "Delhi": ["New Delhi"]
};

// Sample first aid info
const firstAidList = [
  {
    title: "Burns",
    steps: [
      "Cool the burn under running water for 10 minutes.",
      "Do not apply ice.",
      "Cover with a clean cloth.",
      "Seek medical help if severe."
    ]
  },
  {
    title: "Cuts",
    steps: [
      "Apply pressure to stop bleeding.",
      "Clean the wound with clean water.",
      "Cover with a sterile bandage.",
      "Seek medical help if deep."
    ]
  }
];

// Sample emergency contacts (expand as needed)
const emergencyContacts = {
  "Maharashtra": {
    "Mumbai": { police: "100", ambulance: "108", hospital: "JJ Hospital: 022-23735555" },
    "Pune": { police: "100", ambulance: "108", hospital: "Sassoon Hospital: 020-26128000" }
  },
  "Delhi": {
    "New Delhi": { police: "100", ambulance: "102", hospital: "AIIMS: 011-26588500" }
  }
};

const stateSelect = document.getElementById('state-select');
const citySelect = document.getElementById('city-select');
const firstAidSection = document.getElementById('first-aid-list');
const contactsSection = document.getElementById('emergency-contacts');

function populateStates() {
  stateSelect.innerHTML = '<option>Select State</option>';
  Object.keys(statesData).forEach(state => {
    stateSelect.innerHTML += `<option value="${state}">${state}</option>`;
  });
}

function populateCities() {
  const state = stateSelect.value;
  citySelect.innerHTML = '<option>Select City</option>';
  if (state && statesData[state]) {
    statesData[state].forEach(city => {
      citySelect.innerHTML += `<option value="${city}">${city}</option>`;
    });
  }
}

function displayFirstAid() {
  firstAidSection.innerHTML = "<h2>First Aid Instructions</h2>";
  firstAidList.forEach(item => {
    firstAidSection.innerHTML += `<h3>${item.title}</h3><ul>${item.steps.map(s => `<li>${s}</li>`).join("")}</ul>`;
  });
}

function displayContacts() {
  const state = stateSelect.value;
  const city = citySelect.value;
  contactsSection.innerHTML = "<h2>Emergency Contacts</h2>";
  if (emergencyContacts[state] && emergencyContacts[state][city]) {
    const contacts = emergencyContacts[state][city];
    contactsSection.innerHTML += `
      <p>Police: ${contacts.police}</p>
      <p>Ambulance: ${contacts.ambulance}</p>
      <p>Hospital: ${contacts.hospital}</p>
    `;
  } else {
    contactsSection.innerHTML += "<p>Select state and city for local contacts.</p>";
  }
}

stateSelect.addEventListener('change', () => {
  populateCities();
  displayContacts();
});

citySelect.addEventListener('change', displayContacts);

window.onload = () => {
  populateStates();
  displayFirstAid();
};
