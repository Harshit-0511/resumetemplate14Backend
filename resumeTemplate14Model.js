const mongoose = require("mongoose");

const resumeSchema = new mongoose.Schema(
  {
    name: { type: String },
    role: { type: String }, // Note: frontend mein 'jobTitle' hai, yahan 'role'. Match karna behtar hoga.
    phone: { type: String },
    email: { type: String },
    linkedin: { type: String },
    location: { type: String }, // Note: frontend mein 'address' hai, yahan 'location'. Match karna behtar hoga.

    summary: { type: String },

    experience: {
      type: [
        {
          title: { type: String },
          companyName: { type: String }, // Note: frontend mein 'company' hai. Match karna behtar hoga.
          date: { type: String }, // Note: frontend mein 'duration' hai. Match karna behtar hoga.
          companyLocation: { type: String }, // Note: frontend mein 'location' hai. Match karna behtar hoga.
          accomplishment: { type: [String], default: [] }, // Note: frontend mein 'points' hai. Match karna behtar hoga.
        },
      ],
      default: [],
    },

    education: {
      type: [
        {
          degree: { type: String },
          institution: { type: String },
          duration: { type: String }, // Note: frontend mein 'year' hai. Match karna behtar hoga.
          location: { type: String }, // Note: frontend mein location nahi hai. Agar hai toh match karein.
        },
      ],
      default: [],
    },

    achievements: {
      type: [
        {
          keyAchievements: { type: String },
          describe: { type: String },
        },
      ],
      default: [],
    },

    skills: { type: [String], default: [] },

    // *** YAHAN CHANGE KIYA GAYA HAI ***
    languages: {
      type: [
        {
          name: { type: String },
          level: { type: String },
        },
      ],
      default: [],
    },

    projects: {
      type: [
        {
          title: { type: String },
          description: { type: String },
          duration: { type: String },
        },
      ],
      default: [],
    },

    courses: {
      type: [
        {
          title: { type: String },
          description: { type: String },
        },
      ],
      default: [],
    },

    certifications: {
      type: [
        {
          title: { type: String },
          issuedBy: { type: String },
          year: { type: String },
        },
      ],
      default: [],
    },

    hobbies: { type: [String], default: [] },
  },
  { timestamps: true }
);

module.exports = mongoose.model("ResumeTemplate14", resumeSchema);

/*const mongoose = require("mongoose");

const resumeSchema = new mongoose.Schema(
  {
    name: { type: String },
    role: { type: String },
    phone: { type: String },
    email: { type: String },
    linkedin: { type: String },
    location: { type: String },

    summary: { type: String },

    experience: {
      type: [
        {
          title: { type: String },
          companyName: { type: String },
          date: { type: String },
          companyLocation: { type: String },
          accomplishment: { type: [String], default: [] },
        },
      ],
      default: [],
    },

    education: {
      type: [
        {
          degree: { type: String },
          institution: { type: String },
          duration: { type: String },
          location: { type: String },
        },
      ],
      default: [],
    },

    achievements: {
      type: [
        {
          keyAchievements: { type: String },
          describe: { type: String },
        },
      ],
      default: [],
    },

    skills: { type: [String], default: [] },

    languages: { type: [String], default: [] },

    projects: {
      type: [
        {
          title: { type: String },
          description: { type: String },
          duration: { type: String },
        },
      ],
      default: [],
    },

    courses: {
      type: [
        {
          title: { type: String },
          description: { type: String },
        },
      ],
      default: [],
    },

    certifications: {
      type: [
        {
          title: { type: String },
          issuedBy: { type: String },
          year: { type: String },
        },
      ],
      default: [],
    },

    hobbies: { type: [String], default: [] },
  },
  { timestamps: true }
);

module.exports = mongoose.model("ResumeTemplate14", resumeSchema);







/*const mongoose = require("mongoose");

// This schema now perfectly matches your React component's data structure
const resumeSchema = new mongoose.Schema(
  {
    // --- Corrected Personal Details ---
    name: { type: String },
    jobTitle: { type: String },      // Fixed: jobTitle instead of role
    phone: { type: String },
    email: { type: String },
    linkedin: { type: String },
    address: { type: String },       // Fixed: address instead of location
    github: { type: String },        // Added: github
    imageUrl: { type: String },      // Added: imageUrl
    summary: { type: String },

    // --- Corrected Experience Section ---
    experience: {
      type: [
        {
          title: { type: String },
          company: { type: String },     // Fixed: company instead of companyName
          duration: { type: String },    // Fixed: duration instead of date
          location: { type: String },    // Fixed: location instead of companyLocation
          points: { type: [String], default: [] }, // Fixed: points instead of accomplishment
        },
      ],
      default: [],
    },

    // --- Corrected Education Section ---
    education: {
      type: [
        {
          degree: { type: String },
          institution: { type: String },
          year: { type: String },       // Fixed: year instead of duration
        },
      ],
      default: [],
    },

    skills: { type: [String], default: [] },

    // --- Corrected Languages Section (Array of Objects) ---
    languages: {
      type: [
        {
          name: { type: String },
          level: { type: String },
        },
      ],
      default: [],
    },

    hobbies: { type: [String], default: [] },
  },
  { timestamps: true }
);

//module.exports = mongoose.model("Resume", resumeSchema); // Renamed for clarity

module.exports = mongoose.model("ResumeTemplate14", resumeSchema);*/
/*const mongoose = require("mongoose");

const resumeSchema = new mongoose.Schema(
  {
    name: { type: String },
    role: { type: String },
    phone: { type: String },
    email: { type: String },
    linkedin: { type: String },
    location: { type: String },

    summary: { type: String },

    experience: {
      type: [
        {
          title: { type: String },
          companyName: { type: String },
          date: { type: String },
          companyLocation: { type: String },
          accomplishment: { type: [String], default: [] },
        },
      ],
      default: [],
    },

    education: {
      type: [
        {
          degree: { type: String },
          institution: { type: String },
          duration: { type: String },
          location: { type: String },
        },
      ],
      default: [],
    },

    achievements: {
      type: [
        {
          keyAchievements: { type: String },
          describe: { type: String },
        },
      ],
      default: [],
    },

    skills: { type: [String], default: [] },

    languages: { type: [String], default: [] },

    projects: {
      type: [
        {
          title: { type: String },
          description: { type: String },
          duration: { type: String },
        },
      ],
      default: [],
    },

    courses: {
      type: [
        {
          title: { type: String },
          description: { type: String },
        },
      ],
      default: [],
    },

    certifications: {
      type: [
        {
          title: { type: String },
          issuedBy: { type: String },
          year: { type: String },
        },
      ],
      default: [],
    },

    hobbies: { type: [String], default: [] },
  },
  { timestamps: true }
);

module.exports = mongoose.model("ResumeTemplate14", resumeSchema);
*/
