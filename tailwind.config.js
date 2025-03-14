/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        customBlue: '#7BA4DA',
        healthCareBlue: '#2F80ED',
        tealGreen: '#27AE60',
        

      },
    },
  },
  plugins: [],
};
//  Color Theme
// Primary Colors:
// Healthcare Blue (#2F80ED) 
// Teal Green (#27AE60) 
// Neutral Gray (#F2F2F2, #E0E0E0, #828282) 

// Accent Colors (For Buttons, Alerts
// Success/Approved: Light Green (#6FCF97)
// Warning/Pending: Soft Orange (#F2994A)
// Error/Alert: Muted Red (#EB5757)

