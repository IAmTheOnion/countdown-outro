# React Countdown Timer with YouTube Integration

Welcome to the React Countdown Timer with YouTube Integration! This simple React application allows users to set a countdown timer for a specific date and time, while also providing the option to play a YouTube video when the countdown reaches a specified moment.

## Features

- **DateTimePicker Component:**
  - Select a date and time using the intuitive date-time picker.
  - Enter a YouTube link for video integration.
  - Specify the exact moment during the countdown to trigger the YouTube video.

- **YouTubePlayer Component:**
  - Utilizes the `react-youtube` library for seamless YouTube video embedding.
  - The player is hidden visually (`height: '0'`, `width: '0'`) while still allowing audio playback.

- **CountdownTimer Component:**
  - Displays a dynamic countdown timer with days, hours, minutes, and seconds.
  - Initiates YouTube video playback when the specified moment is reached.

## How to Use

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/IAmTheOnion/countdown-outro.git

2. **Navigate to the Project Directory:**

cd your-repository

3. **Install Dependencies:**

npm install

4. **Run the Application:**
   
npm start

5. **Access the App:**
   
Open your browser and go to http://localhost:3000.

5. **Set Countdown and Enjoy:**

Choose a date and time.
Enter a YouTube link.
Specify the moment for the video.
Click "Rozpocznij" to start the countdown.
